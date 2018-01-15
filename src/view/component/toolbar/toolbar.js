import AbstractToolbar from "./abstractToolbar.js";
import Dom from "../../../dom/dom.js";
import buildMenuItems from "../functions/buildMenuItems.js";

/**
  * A Toolbar View
  * @constructor Augmented.Presentation.Component.Toolbar
  * @memberof Augmented.Presentation.Component
  * @extends Augmented.Presentation.AbstractToolbar
  */
class Toolbar extends AbstractToolbar {
  constructor(options) {
    super(options);
  };
  /**
    * Render the Toolbar
    * @method render Renders the Toolbar
    * @memberof Augmented.Presentation.Component.Toolbar
    * @returns {object} Returns the view context ('this')
    */
  render: function() {
    if (!this.isInitalized) {
      //_logger.warn("AUGMENTED: Toolbar Can't render yet, not initialized!");
      return this;
    }
    this.template = null;//"notused";
    if (this.el) {
      const e = Dom.selector(this.el);
      if (e) {
        // the menu
        Dom.addClass(e, "toolbar");
        e.setAttribute("data-" + this.name, "toolbar");
        e.innerHTML = buildToolbarItems(this.name, this.menuItems);
      }
    } else {
      //_logger.warn("AUGMENTED: Toolbar no element anchor, not rendering.");
      return this;
    }
    this.delegateEvents();
    this.syncAllBoundElements();
    return this;
  };
};

export default Toolbar;