import DecoratorView from "../decorator/decorator.js";

/**
 * A DecoratorView that is designed to use templates and clean up when removed.
 * @see Presentation.DecoratorView
 * @memberof Presentation
 * @extends Presentation.DecoratorView
 */
class DirectiveView extends DecoratorView {
  constructor(options) {
    super(options);
  };

  remove() {
    console.debug("DirectiveView remove");
    this.removeTemplate(this.el, true);
    return super.remove();
  };
};

export default DirectiveView;