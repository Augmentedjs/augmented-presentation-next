import AbstractView from "./abstractView.js";
import * as  Augmented from "augmentedjs-next";

/**
 * Aubstract View - the base view for handlng display in the MV* Concept
 * @constructor
 * @name Presentation.AbstractView
 * @memberof Augmented
 * @extends Augmented.Object
 */
class View extends AbstractView {
  constructor(options) {
    super(options);
  };

  /**
   * Render callback for the view
   * @method render
   * @returns this Context of the view
   * @memberof Presentation.View
   */
  render() {
    if (this._el && this.template) {
      let el = this._el;
      if (Augmented.isString(this._el)) {
        el = document.querySelector(this._el);
      }
      el.innerHTML = this.template;
    }
    return this;
  };
};

export default View;
