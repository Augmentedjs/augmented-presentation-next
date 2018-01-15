import DecoratorView from "../../decorator/decorator.js";
import Dom from "../../../dom/dom.js";

/**
* A automatic dialog view - creates a dialog with simple configurations to customize
* @class DialogView
* @memberof Presentation.Component
* @extends Presentation.DecoratorView
*/
class DialogView extends DecoratorView {
  constructor(options) {
    super(options);
    if (!this.name) {
      this.name = "dialog";
    }

    if (options && options.title) {
      this.title = options.title;
    } else {
      this.title = "";
    }
    if (options && options.body) {
      this._body = options.body;
    } else {
      this._body = "";
    }
    if (options && options.style) {
      this.style = options.style;
    } else {
      this.style = "form";
    }
    if (options && options.buttons) {
      this.buttons = options.buttons;
    } else {
      this.buttons = {};
    }
  };

  /**
  * title property - the title of the dialog
  * @property title
  * @memberof DialogView
  */

  /**
  * body property - the body of the dialog, handled by setBody method
  * @property body
  * @memberof DialogView
  */

  /**
  * style property - the style (form, alert, bigForm, or whatever class you want)
  * @property style
  * @memberof DialogView
  */

  /**
  * buttons object property - the buttons to match to functions
  * @property buttons
  * @memberof DialogView
  */

  /**
  * template - sets content of the dialog, handled internally
  * @method _template
  * @memberof DialogView
  * @private
  */
  _template() {
    return `<div class="blur"><dialog class="${this.style}"><h1>${this.title}</h1>${this._body}${this._getButtonGroup()}</dialog></div>`;
  };
  /**
  * setBody - sets the body content of the dialog
  * @method setBody
  * @param {String} body A string value of th body (supports HTML)
  * @memberof DialogView
  */
  set body(body) {
    this._body = body;
  };

  get body() {
    return this._body;
  };

  _getButtonGroup() {
    let html = `<div class="buttonGroup">`, i = 0, keys = Object.keys(this.buttons), l = (keys) ? keys.length: 0;
    for (i = 0; i < l; i++) {
      html = html + `<button data-${this.name}="${this.buttons[keys[i]]}" data-click="${this.buttons[keys[i]]}">${keys[i]}</button>`;
    }
    return html + "</div>";
  };

  /**
  * render - render the dialog
  * @method render
  * @memberof DialogView
  */
  render() {
    Dom.setValue(this.el, this._template());
    this.delegateEvents();
    this.trigger("open");
    return this;
  };
  // built-in callbacks

  /**
  * cancel - standard built-in cancel callback.  Calls close method by default
  * @method cancel
  * @param {Event} event Event passed in
  * @memberof DialogView
  */
  cancel(event) {
    this.close(event);
  };
  /**
  * open - standard built-in open callback.  Calls render method by default
  * @method open
  * @param {Event} event Event passed in
  * @memberof DialogView
  */
  open(event) {
    this.render();
  };
  /**
  * close - standard built-in close callback.  Closes the dialog, triggers the 'close' event
  * @method close
  * @param {Event} event Event passed in
  * @memberof DialogView
  */
  close(event) {
    this.trigger("close");
    Dom.empty(this.el, true);
  };
};

export default DialogView;
