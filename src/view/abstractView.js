import * as  Augmented from "augmentedjs-next";

const _pick = require("lodash.pick");
const _bind = require("lodash.bind");

// Cached regex to split keys for `delegate`.
const DELEGATE_EVENT_SPLITTER = /^(\S+)\s*(.*)$/;

// List of view options to be set as properties.
const VIEW_OPTIONS = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];

/**
 * Aubstract View - the base view for handlng display in the MV* Concept
 * @constructor
 * @name Presentation.AbstractView
 * @memberof Augmented
 * @extends Augmented.Object
 */
class AbstractView extends Augmented.Object {
  constructor(name, options) {
    super(options);
    this._permissions = {
      include: [],
      exclude: []
    };
    this._name = name;
    this.cid = Augmented.Utility.uniqueId("view");
    Augmented.Utility.extend(this, _pick(options, VIEW_OPTIONS));
    this._ensureElement();
    this.render = Augmented.Utility.wrap(this.render, (render) => {
      this.beforeRender();
      render.apply(this);
      this.afterRender();
      return this;
    });
    this.initialize(options);
    this.tagName = "div";
    this._el = "";
    this.template = "";
  };

  /**
   * The name property of the view
   * @property {string} name The Name of the view
   * @memberof Augmented.View
   * @private
   */

  /**
   * Permissions in the view
   * @property permissions
   * @memberof Augmented.View
   * @private
   */

   get el() {
     return this._el;
   };

   set el(el) {
     this._el = el;
   };

  /**
   * Custom initialize - Override for custom code
   * @method init
   * @param {object} options Optional options to pass to the view
   * @memberof Augmented.View
   */
  init(options) {
  };
  /**
   * Initializes the view - <em>Note: Do not override, use init instead!</em>
   * @method initialize
   * @param {object} options Optional options to pass to the view
   * @memberof Augmented.View
   * @returns {Augmented.View} Returns 'this,' as in, this view context
   */
  initialize(options) {
    this.options = options;
    this.init(options);
  };
  /**
   * Before Render callback for the view
   * @method beforeRender
   * @returns this Context of the view
   * @memberof Augmented.View
   */
  beforeRender() {
    return this;
  };
  /**
   * Render callback for the view
   * @method render
   * @returns this Context of the view
   * @memberof Augmented.View
   */
  render() {
    return this;
  };
  /**
   * After Render callback for the view
   * @method afterRender
   * @returns this Context of the view
   * @memberof Augmented.View
   */
  afterRender() {
    return this;
  };

  // Remove this view by taking the element out of the DOM, and removing any
  // applicable Backbone.Events listeners.
  remove() {
    this._removeElement();
    this.stopListening();
    return this;
  };

  // Remove this view's element from the document and all event listeners
  // attached to it. Exposed for subclasses using an alternative DOM
  // manipulation API.
  _removeElement() {
    if (this._el) {
      const el = document.querySelector(this._el);
      el.innerHTML = "";
    }
    //this._el.remove();
  };

  // Change the view's element (`this.el` property) and re-delegate the
  // view's events on the new element.
  setElement(element) {
    this.undelegateEvents();
    this.el = element;
    this.delegateEvents();
    return this;
  };

  // Creates the `this.el` and `this.$el` references for this view using the
  // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
  // context or an element. Subclasses can override this to utilize an
  // alternative DOM manipulation API and are only required to set the
  // `this.el` property.
  //_setElement(el) {
    //this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
    //this._el = el//this.$el[0];
  //};

  // Set callbacks, where `this.events` is a hash of
  //
  // *{"event selector": "callback"}*
  //
  //     {
  //       'mousedown .title':  'edit',
  //       'click .button':     'save',
  //       'click .open':       function(e) { ... }
  //     }
  //
  // pairs. Callbacks will be bound to the view, with `this` set properly.
  // Uses event delegation for efficiency.
  // Omitting the selector binds the event to `this._el`.
  delegateEvents(events) {
    events || (events = Augmented.result(this, "events"));
    if (!events) {
      return this;
    }
    this.undelegateEvents();
    let key;
    for (key in events) {
      let method = events[key];
      if (!Augmented.isFunction(method)) {
        method = this[method];
      }
      if (!method) {
        continue;
      }
      const match = key.match(DELEGATE_EVENT_SPLITTER);
      this.delegate(match[1], match[2], _bind(method, this));
    }
    return this;
  };

  // Add a single event listener to the view's element (or a child element
  // using `selector`). This only works for delegate-able events: not `focus`,
  // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
  delegate(eventName, selector, listener) {
    const matchesNL = this._el.querySelectorAll(selector);
    const matches = Array.from(matchesNL);
    let i = 0;
    const l = matches.length;

    for (i = 0; i < l; i++) {
      matches[i].addEventListener(`${eventName}.delegateEvents${this.cid}`, listener);
    }

    //this._el.addEventListener(`${eventName}.delegateEvents${this.cid}`, selector, listener);
    return this;
  };

  // Clears all callbacks previously bound to the view by `delegateEvents`.
  // You usually don't need to use this, but may wish to if you have multiple
  // views attached to the same DOM element.
  undelegateEvents() {
    if (this._el) {
      const new_el = this._el.cloneNode(true); //true means a deep copy
      if (new_el && new_el.parentNode) {
        this._el.parentNode.replaceChild(new_el, this._el);
      }
      //this._el.removeEventListener(`.delegateEvents${this.cid}`);
    }
    return this;
  };

  // A finer-grained `undelegateEvents` for removing a single delegated event.
  // `selector` and `listener` are both optional.
  undelegate(eventName, selector, listener) {
    const matchesNL = this._el.querySelectorAll(selector);
    const matches = Array.from(matchesNL);
    let i = 0;
    const l = matches.length;

    for (i = 0; i < l; i++) {
      matches[i].removeEventListener(`${eventName}.delegateEvents${this.cid}`, listener);
    }

    //this._el.removeEventListener(`${eventName}.delegateEvents${this.cid}`, selector, listener);
    return this;
  };

  // Produces a DOM element to be assigned to your view. Exposed for
  // subclasses using an alternative DOM manipulation API.
  _createElement(tagName) {
    return document.createElement(tagName);
  };

  // Ensure that the View has a DOM element to render into.
  // If `this.el` is a string, pass it through `$()`, take the first
  // matching element, and re-assign it to `el`. Otherwise, create
  // an element from the `id`, `className` and `tagName` properties.
  _ensureElement() {
    if (!this.el) {
      const attrs = Augmented.Utility.extend({}, Augmented.result(this, "attributes"));
      if (this.id) {
        attrs.id = Augmented.result(this, "id");
      }
      if (this.className) {
        attrs["class"] = Augmented.result(this, "className");
      }
      this.setElement(this._createElement(Augmented.result(this, "tagName")));
      this._setAttributes(attrs);
    } else {
      this.setElement(Augmented.result(this, "el"));
    }
  };

  // Set attributes from a hash on this view's element.  Exposed for
  // subclasses using an alternative DOM manipulation API.
  _setAttributes(attributes) {
    let key;
    for(key in attributes) {
      this._el.setAttribute(key, attributes[key]);
    }
  };

  /**
  * Sets the name of the view
  * @method setName
  * @param {string} name The name of the view
  * @memberof Augmented.View
  */
  set name(name) {
    this._name = name;
  };
  /**
  * Gets the name of the view
  * @method getName
  * @returns {string} Returns the name of the view
  * @memberof Augmented.View
  */
  get name() {
    return this._name;
  };

  /**
  * Adds a permission to the view
  * @method addPermission
  * @param {string} permission The permission to add
  * @param {boolean} negative Flag to set a nagative permission (optional)
  * @memberof Augmented.View
  */
  addPermission(permission, negative) {
    if (!negative) {
      negative = false;
    }
    if (permission !== null && !Array.isArray(permission)) {
      const p = (negative) ? this._permissions.exclude : this._permissions.include;
      p.push(permission);
    }
  };
  /**
  * Removes a permission to the view
  * @method removePermission
  * @param {string} permission The permission to remove
  * @param {boolean} negative Flag to set a nagative permission (optional)
  * @memberof Augmented.View
  */
  removePermission(permission, negative) {
    if (!negative) {
      negative = false;
    }
    if (permission !== null && !Array.isArray(permission)) {
      const p = (negative) ? this._permissions.exclude : this._permissions.include;
      p.splice((p.indexOf(permission)), 1);
    }
  };
  /**
  * Sets the permissions to the view
  * @method setPermissions
  * @param {array} permissions The permissions to set
  * @param {boolean} negative Flag to set a nagative permission (optional)
  * @memberof Augmented.View
  */
  set permissions(permissions) {
    /*if (!negative) {
      negative = false;
    }
    if (permissions !== null && Array.isArray(permissions)) {
      if (negative) {
        this._permissions.exclude = permissions;
      } else {
        this._permissions.include = permissions;
      }
    }*/
    this._permissions = permissions;
  };


  /**
  * Gets the permissions to the view<br/>
  * Return format:<br/>
  * <pre>{
  *     include: [],
  *     exclude: []
  * }</pre>
  *
  * @method getPermissions
  * @returns {object} The permissions in the view
  * @memberof Augmented.View
  */
  get permissions() {
    return this._permissions;
  };
  /**
  * Clears the permissions in the view
  * @method clearPermissions
  * @memberof Augmented.View
  */
  clearPermissions() {
    this._permissions = {
      include: [],
      exclude: []
    };
  };
  /**
  * Matches a permission in the view
  * @method matchesPermission
  * @param {string} match The permissions to match
  * @param {boolean} negative Flag to set a nagative permission (optional)
  * @returns {boolean} Returns true if the match exists
  * @memberof Augmented.View
  */
  matchesPermission(match, negative) {
    if (!negative) {
      negative = false;
    }
    const p = (negative) ? this._permissions.exclude : this._permissions.include;
    return (p.indexOf(match) !== -1);
  };
  /**
  * Callback to return if this view can display
  * @method canDisplay
  * @returns {boolean} Returns true if this view can display
  * @memberof Augmented.View
  */
  canDisplay() {
    return true;
  };
};

export default AbstractView;
