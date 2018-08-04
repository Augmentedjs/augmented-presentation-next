import View from "../../view.js";

/**
 * Splash Screen View
 * @param options Options to pass
 * @example options passed are: title, subTitle, subSubTitle, name, style, and figureStyle
 *
 */
class Splash extends View {
  constructor(options) {
    if (!options) {
      options = {};
    }
    if (!options.name) {
      options.name = "splash";
    }
    if (!options.style) {
      options.style = "splash";
    } else {
      options.style = `${options.style} splash`;
    }

    if (!options.title) {
      options.title = "Untitled";
    }

    if (!options.figureStyle) {
      options.figureStyle = "logo_large";
    }

    if (!options.template) {
      options.template = `
        ${ (options.title) ? "<h1>" + options.title + "</h1>" : "" }
        ${ (options.subTitle) ? "<h2>" + options.subTitle + "</h2>" : "" }
        ${ (options.subSubTitle) ? "<h3>" + options.subSubTitle + "</h3>" : "" }
        <figure class="${options.figureStyle}"></figure>
      `;
    }
    super(options);
  };

  render() {
    const that = this;
    setTimeout(function() {
      const el = that.el;
      el.classList.add("fade");

      setTimeout(function() {
        that.remove();
        el.remove();
      }, 2000);
    }, 4000);
    return super.render();
  };
};

export default Splash;
