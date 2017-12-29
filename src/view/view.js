import AbstractView from "./abstractView.js";

/**
 * Aubstract View - the base view for handlng display in the MV* Concept
 * @constructor
 * @name Presentation.AbstractView
 * @memberof Augmented
 * @extends Augmented.Object
 */
class View extends AbstractView {
  constructor(name, options) {
    super(name, options);
  };

  /**
   * Render callback for the view
   * @method render
   * @returns this Context of the view
   * @memberof Presentation.View
   */
  render() {
    if (this._el && this.template) {
      const el = document.querySelector(this._el);
      if (el) {
        el.innerHTML = this.template;
      }
    }
    return this;
  };
};

export default View;
