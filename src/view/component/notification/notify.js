import DialogView from "../dialog/dialog.js";

/**
 * Notification
 * @param options Options to pass
 * @example options passed are: title, subTitle, subSubTitle, name, style, and figureStyle
 *
 */
class Notification extends DialogView {
  constructor(options) {
    if (!options) {
      options = {};
    };
    if (!options.buttons) {
      options.buttons = {};
    }

    if (!options.style) {
      options.style = "notify";
    } else {
      options.style = `${options.style} notify`;
    }
    if (!options.name) {
      options.name = "notify";
    }

    options.tagName = "div";
    super(options);
  };

  /**
   * template - sets content of the dialog, handled internally
   * @private
   */
  _template() {
    return `${(this._title) ? "<h1>" + this._title + "</h1>" : ""}${this._body}`;
  };

  render() {
    const that = this;
    setTimeout(function() {
      const el = that.el;
      el.classList.add("slide");

      setTimeout(function() {
        that.remove();
        el.remove();
      }, 2000);
    }, 4000);

    return super.render();
  };
};

export default Notification;
