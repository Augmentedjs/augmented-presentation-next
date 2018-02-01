import DecoratorView from "../../decorator/decorator.js";
import Dom from "../../../dom/dom.js";

/**
* An artcile class for setting up a 'page'
* @class Article
* @memberof Presentation.Component
* @extends Presentation.DecoratorView
*/
class Article extends DecoratorView {
  constructor(options) {
    super(options);
    if (!this.name) {
      this.name = "article";
    }

    if (options && options.header) {
      this._header = options.header;
    } else {
      this._header = "";
    }
    if (options && options.body) {
      this._body = options.body;
    } else {
      this._body = "";
    }
    if (options && options.style) {
      this._style = options.style;
    } else {
      this._style = "article";
    }
    if (options && options.footer) {
      this._footer = options.footer;
    } else {
      this._footer = "";
    }
  };

  /**
  * Header property
  * @property header
  * @memberof Article
  */

  set header(header) {
    this._header = header;
  };

  get header() {
    return this._header;
  };

  /**
  * style property - the style
  * @property style
  * @memberof Article
  */
  set style(style) {
    this._style = style;
  };

  get style() {
    return this._style;
  };

  /**
  * Footer for the article
  * @property footer
  * @memberof Article
  */

  set footer(footer) {
    this._footer = footer;
  };

  get footer() {
    return this._footer;
  };

  /**
  * template - sets content of the dialog, handled internally
  * @method _template
  * @memberof Article
  * @private
  */
  _template() {
    return `<article class="${this._style}"><header>${this._header}</header>${this._body}$<footer>${this._footer}</footer></article>`;
  };

  /**
   * The body content of the card (supports HTML)
   * @property body
   * @memberof Article
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
  * @memberof Article
  */
  render() {
    if (this.el) {
      Dom.setValue(this.el, this._template());
      this.delegateEvents();
    }
    return this;
  };
};

export default Article;
