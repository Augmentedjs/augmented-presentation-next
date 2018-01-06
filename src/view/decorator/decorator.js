import Augmented from "augmentedjs-next";
import Colleague from "../pubsub/colleague.js";
import Model from "../../model/model.js";
import Dom from "../../dom/dom.js";
import Widget from "../../widget/widget.js";

const DECORATOR_ATTRIBUTE_ENUM = {
  "CLICK": "data-click",
  "FUNCTION": "data-function",
  "STYLE": "data-style",
  "APPEND_TEMPLATE": "data-append-template",
  "PREPEND_TEMPLATE": "data-prepend-template"
};

// TODO: not implimented yet
//"appendTemplateEach": "data-append-template-each",
//"prependTemplateEach": "data-prepend-template-each"

/**
 * DecoratorView<br/>
 * An MVVM view designed around decorating the DOM with bindings.
 * This concept is designed to decouple the view from the backend contract.
 * Although this is achieved via views in general, the idea is:<br/>
 * <blockquote>As a Javascript Developer, I'd like the ability to decorate HTML and control view rendering without the use of CSS selectors</blockquote>
 * <em>Important to note: This view <strong>gives up</strong> it's template and events!
 * This is because all events and templates are used on the DOM directly.</em><br/>
 * To add custom events, use customEvents instead of 'events'<br/>
 * supported annotations:<br/>
 * <ul>
 * <li>data-click</li>
 * <li>data-function</li>
 * <li>data-style</li>
 * <li>data-append-template</li>
 * <li>data-prepend-template</li>
 * </ul>
 * @class DecoratorView
 * @memberof Presentation
 * @extends Presentation.Colleague
 */
class DecoratorView extends Colleague {
  constructor(options) {
    super(options);
    this.customEvents = {};
  };
  /**
   * Custom Events Property - merge into built-in events
   * @property customEvents
   * @memberof DecoratorView
   */

  /**
   * Events Property - Do Not Override
   * @property events
   * @memberof DecoratorView
   */
  events() {
    const _events = (this.customEvents) ? this.customEvents : {};
    if (this.name) {
      _events["change input[" + this.bindingAttribute() + "]"] = "_changed";
      _events["change textarea[" + this.bindingAttribute() + "]"] = "_changed";
      _events["change select[" + this.bindingAttribute() + "]"] = "_changed";
      // regular elements with click bindings
      _events["click *[" + this.bindingAttribute() + "][" + DECORATOR_ATTRIBUTE_ENUM.CLICK + "]"] = "_click";
    }
    return _events;
  };
  _changed(event) {
    if (event) {
      let key = event.currentTarget.getAttribute(this.bindingAttribute());
      let val = event.currentTarget.value;
      if(event.currentTarget.type === "checkbox") {
        val = (event.currentTarget.checked) ? true : false;
      }
      this.model.set(( (key) ? key : event.currentTarget.name ), val);
      this._func(event);
      //_logger.debug("AUGMENTED: DecoratorView updated Model: " + JSON.stringify(this.model.toJSON()));
    }
  };
  _click(event) {
    if (event) {
      let func = event.currentTarget.getAttribute(DECORATOR_ATTRIBUTE_ENUM.CLICK);
      if (func && this[func]) {
        this._executeFunctionByName(func, this, event);
      }/* else {
        //_logger.debug("AUGMENTED: DecoratorView No function bound or no function exists! " + func);
      }*/
      this._func(event);
    }
  };
  _func(event) {
    if (event) {
      let func = event.currentTarget.getAttribute(DECORATOR_ATTRIBUTE_ENUM.FUNCTION);
      if (func && this[func]) {
        this._executeFunctionByName(func, this, event);
      } /*else {
        //_logger.debug("AUGMENTED: DecoratorView No function bound or no function exists! " + func);
      }*/
    }
  };
  /**
   * Initialize method - Do Not Override
   * @memberof DecoratorView
   * @method initialize
   */
  initialize(options) {
    this.init(options);

    if (!this.model) {
      this.model = new Model();
    }
  };
  /**
   * Remove method - Does not remove DOM elements only bindings.
   * @method remove
   * @memberof DecoratorView
   */
  remove() {
    /* off to unbind the events */
    this.undelegateEvents();
    this.off();
    this.stopListening();
    return this;
  };
  /**
   * _executeFunctionByName method - Private
   * @method _executeFunctionByName
   * @memberof DecoratorView
   * @private
   */
  _executeFunctionByName(functionName, context, ...args /*, args */) {
    //let args = Array.prototype.slice.call(arguments, 2);
    const namespaces = functionName.split(".");
    const func = namespaces.pop();
    if (namespaces && func) {
      let i = 0;
      const l = namespaces.length;
      for (i = 0; i < l; i++) {
        context = context[namespaces[i]];
      }
      return context[func].apply(context, args);
    }
    return null;
    //return Augmented.exec(arguments);
  };
  /**
   * bindingAttribute method - Returns the binging data attribute name
   * @method bindingAttribute
   * @memberof DecoratorView
   * @returns {string} Binding attribute name
   */
  bindingAttribute() {
    return "data-" + this.name;
  };
  /**
   * injectTemplate method - Injects a template at a mount point
   * @method injectTemplate
   * @param {string} template The template to inject
   * @param {Element} mount The mount point as Document.Element or String
   * @memberof DecoratorView
   */
  injectTemplate(template, mount) {
    if (!mount) {
      mount = this.el;
    }
    if (Augmented.isString(mount)) {
      mount = document.querySelector(mount);
    }
    if (Augmented.isString(template)) {
      // html
      let currentHTML = mount.innerHTML;
      mount.innerHTML = currentHTML + template;
    } else if ((template.nodeType && template.nodeName) &&
    template.nodeType > 0 && !(template.nodeName === "template" || template.nodeName === "TEMPLATE")) {
      // DOM
      mount.appendChild(template);
    } else if (template instanceof DocumentFragment  || template.nodeName === "template" || template.nodeName === "TEMPLATE") {
      // Document Fragment
      Dom.injectTemplate(template, mount);
    }
    this.delegateEvents();
  };
  /**
   * removeTemplate method - Removes a template (children) at a mount point
   * @method removeTemplate
   * @param {Element} mount The mount point as Document.Element or String
   * @param {boolean} onlyContent Only remove the content not the mount point
   * @memberof DecoratorView
   */
  removeTemplate(mount, onlyContent) {
    if (mount) {
      while (mount.firstChild) {
        mount.removeChild(mount.firstChild);
      }
      if (!onlyContent) {
        const p = mount.parentNode;
        if (p) {
          p.removeChild(mount);
        }
      }
      this.delegateEvents();
    }
  };
  /**
   * boundElement method - returns the bound element from identifier
   * @method boundElement
   * @param {string} id The identifier (not id attribute) of the element
   * @memberof DecoratorView
   * @example
   * from HTML: <div data-myMountedView="something" id="anything"></div>
   * from JavaScript: let el = this.boundElement("something");
   */
  boundElement(id) {
    if (this.el && id) {
      let el = this.el;
      if (Augmented.isString(this.el)) {
        el = document.querySelector(this.el);
      }
      if (el) {
        return el.querySelector("[" + this.bindingAttribute() + "=" + id + "]");
      }
    }
    return null;
  };
  /**
   * syncBoundElement - Syncs the data of a bound element by firing a change event
   * @method syncBoundElement
   * @param {string} id The identifier (not id attribute) of the element
   * @memberof DecoratorView
   */
  syncBoundElement(id) {
    if (id) {
      let event = new UIEvent("change", {
        "view": window,
        "bubbles": true,
        "cancelable": true
      }), sel = this.boundElement(id);
      if (sel) {
        sel.dispatchEvent(event);
      }
    }
  };
  /**
   * syncAllBoundElements - Syncs the data of all bound elements by firing a change events
   * @method syncAllBoundElements
   * @memberof DecoratorView
   */
  syncAllBoundElements() {
    const elements = this.el.querySelectorAll("[" + this.bindingAttribute() + "]");
    if (elements && elements.length > 0) {
      let i = 0, l = elements.length, event = new UIEvent("change", {
        "view": window,
        "bubbles": true,
        "cancelable": true
      });
      for (i = 0; i < l; i++) {
        elements[i].dispatchEvent(event);
      }
    }
  };
  /**
   * addClass - adds a class to a bount element
   * @method addClass
   * @param {string} id The identifier (not id attribute) of the element
   * @param {string} cls The class to add
   * @memberof DecoratorView
   */
  addClass(id, cls) {
    const myEl = this.boundElement(id);
    if (myEl) {
      myEl.classList.add(cls);
    }
  };
  /**
   * removeClass - remove a class to a bount element
   * @method removeClass
   * @param {string} id The identifier (not id attribute) of the element
   * @param {string} cls The class to remove
   * @memberof DecoratorView
   */
  removeClass(id, cls) {
    const myEl = this.boundElement(id);
    if (myEl) {
      myEl.classList.remove(cls);
    }
  };
  /**
   * bindModelChange method - binds the model changes to functions
   * @method bindModelChange
   * @param {func} func The function to call when changing (normally render)
   * @memberof DecoratorView
   */
  bindModelChange(func) {
    if (!this.model) {
      this.model = new Model();
    }
    this.model.on('change', func, this);
  };
  /**
   * syncModelChange method - binds the model changes to a specified bound element
   * @method syncModelChange
   * @param {Element} element The element to bind as Document.Element or string
   * @memberof DecoratorView
   */
  syncModelChange(element) {
    if (!this.model) {
      this.model = new Model();
    }
    if (element) {
      this.model.on('change:' + element, this._syncData.bind(this, element), this);
    } else {
      this.model.on('change', this._syncAllData.bind(this, element), this);
    }
  };
  /**
   * _syncData method - syncs the model changes to a specified bound element
   * @method _syncData
   * @param {Element} element The element to bind as Document.Element or string
   * @memberof DecoratorView
   * @private
   */
  _syncData(element) {
    let e = this.boundElement(element);
    if (e) {
      let d = this.model.get(element),
      renderStyle = e.getAttribute(DECORATOR_ATTRIBUTE_ENUM.STYLE),
      prependTemplate = e.getAttribute(DECORATOR_ATTRIBUTE_ENUM.PREPEND_TEMPLATE),
      appendTemplate = e.getAttribute(DECORATOR_ATTRIBUTE_ENUM.APPEND_TEMPLATE),
      mount, template;

      if (prependTemplate) {
        mount = document.createElement("div");
        template = Dom.selector("#" + prependTemplate);
        e.appendChild(mount);
        this.injectTemplate(template, mount);
      }

      if (renderStyle) {
        let ee;
        /*,
        prependTemplateEach = e.getAttribute(DECORATOR_ATTRIBUTE_ENUM.PREPEND_TEMPLATEEach),
        appendTemplateEach = e.getAttribute(DECORATOR_ATTRIBUTE_ENUM.APPEND_TEMPLATEEach),
        pEach = prependTemplateEach ? prependTemplateEach : null,
        aEach = appendTemplateEach ? appendTemplateEach : null;*/

        if (renderStyle === "list" || renderStyle === "unordered-list") {
          ee = Presentation.Widget.List(null, d, false);
          Dom.empty(e);
          e.appendChild(ee);
        } else if (renderStyle === "ordered-list") {
          ee = Presentation.Widget.List(null, d, true);
          Dom.empty(e);
          e.appendChild(ee);
        } else if (renderStyle === "description-list") {
          ee = Presentation.Widget.DescriptionList(null, d);
          Dom.empty(e);
          e.appendChild(ee);
        }
      } else {
        Dom.setValue(e, ((d) ? d : ""));
      }

      if (appendTemplate) {
        mount = document.createElement("div");
        template = Dom.selector("#" + appendTemplate);
        e.appendChild(mount);

        this.injectTemplate(template, mount);
      }
    }
  };
  _syncAllData() {
    // get all model properties
    const attr = this.model.attributes;
    if (attr) {
      let i = 0;
      const keys = Object.keys(attr), l = keys.length;
      for (i = 0; i < l; i++) {
        this._syncData(keys[i]);
      }
    }
  };
  /**
   * unbindModelChange method - unbinds the model changes to elements
   * @method unbindModelChange
   * @param {func} func The function to call when changing (normally render)
   * @memberof DecoratorView
   */
  unbindModelChange(func) {
    this.model.unBind('change', func, this);
  };
  /**
   * unbindModelSync method - unbinds the model changes to a specified bound element
   * @method unbindModelSync
   * @param {Element} element The element to bind as Document.Element or string
   * @memberof DecoratorView
   */
  unbindModelSync(element) {
    this.model.unBind('change:' + element, this._syncData, this);
  }
};

export default DecoratorView;
