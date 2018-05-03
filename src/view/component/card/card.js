import DirectiveView from "../../directive/directiveView.js";
import Dom from "../../../dom/dom.js";

/**
 * A card view - simple panel/dialog-like panel
 * @class Card
 * @memberof Presentation.Component
 * @extends Presentation.DirectiveView
 */
class Card extends DirectiveView {
  constructor(options) {
    super(options);
    if (!this.name) {
      this.name = "card";
    }
    if (options && options.body) {
      this._body = options.body;
    } else {
      this._body = "";
    }
    if (options && options.style) {
      this._style = options.style;
    } else {
      this._style = "card";
    }
  };

  /**
   * body property - the body of the card
   * @property body
   * @memberof Card
   */

  /**
   * style property - the style
   * @property style
   * @memberof Card
   */
   set style(style) {
     this._style = style;
   };

   get style() {
     return this._style;
   };

  /**
   * template - sets content of the dialog, handled internally
   * @method _template
   * @memberof Card
   * @private
   */
  _template() {
    return `<div class="${this._style}">${this._body}</div>`;
  };

  /**
   * The body content of the card (supports HTML)
   * @property body
   * @memberof Card
   */
  set body(body) {
    this._body = body;
  };

  get body() {
    return this._body;
  };

  /**
   * render - render the dialog
   * @method render
   * @memberof Card
   */
  render() {
    if (this.el) {
      Dom.setValue(this.el, this._template());
      this.delegateEvents();
    }
    return this;
  };
};

export default Card;
