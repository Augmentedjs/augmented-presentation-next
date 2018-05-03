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
    /* off to unbind the events */
    this.undelegateEvents();
    this.off();
    this.stopListening();
    this.removeTemplate(this.el, true);
    return this;
  };
};

export default DirectiveView;
