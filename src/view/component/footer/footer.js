import DecoratorView from "../../decorator/decorator.js";

/**
 * A Footer Component
 * @class Footer
 * @memberof Presentation.Component
 * @extends Presentation.View
 */
class Footer extends DecoratorView {
  constructor(options) {
    super(options);
    if (options && options.body) {
      this._body = options.body;
    } else {
      this._body = "";
    }
  };
  /**
   * The body content of the card (supports HTML)
   * @property body
   * @memberof Footer
   */
  set body(body) {
    this._body = body;
  };

  get body() {
    return this._body;
  };
};

export default Footer;
