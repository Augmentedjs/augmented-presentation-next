import buildMenuItems from "../functions/buildMenuItems.js";

/**
  * An abstract tooldbar Component, designed to be extended
  * @constructor Augmented.Presentation.Component.AbstractToolbar
  * @memberof Augmented.Presentation.Component
  * @extends Augmented.Presentation.Component.View
  * @abstract
  */
Augmented.Presentation.Component.AbstractToolbar = Augmented.Presentation.Component.View.extend({
  /**
    * The model property
    * @property {Augmented.Model} model The model property
    * @memberof Augmented.Presentation.Component.AbstractToolbar
    */
  model: null,
  /**
    * The initialized property
    * @property {boolean} isInitalized The initialized property
    * @memberof Augmented.Presentation.Component.AbstractToolbar
    */
  isInitalized: false,
  /**
    * The menuitems property
    * @property {array} menuItems The initialized property
    * @memberof Augmented.Presentation.Component.AbstractToolbar
    */
  menuItems: null,

  /**
    * Initialize the view
    * @method initialize
    * @memberof Augmented.Presentation.Component.AbstractToolbar
    * @param {object} options The view options
    * @returns {boolean} Returns true on success of initalization
    */
  initialize: function(options) {
    if (!this.menuItems) {
      this.menuItems = [];
    }
    this.init();

    if (this.model) {
      this.model.clear();
    } else {
      this.model = new Augmented.Model();
    }
    if (options) {
      if (options.el) {
        this.el = options.el;
      }
      if (options.data && (Augmented.isObject(options.data))) {
        this.model.set(options.data);
      }
      if (options.title && (Augmented.isString(options.title))) {
        this.title = options.title;
      }
      if (options.menuItems && (Augmented.isObject(options.menuItems))) {
        this.menuItems = options.menuItems;
      }
    }
    if (this.el && this.name) {
      this.isInitalized = true;
    }
    _logger.debug("initialized " + this.isInitalized);
    _logger.debug("name " + this.name + " el " + this.el);
    return this.isInitalized;
  },
  /**
    * @method addItem - Adds an item to the menu
    * @param id {string} The id of the itemID
    * @param click {string} The bound click method to call
    * @param icon {string} The icon name (webfont)
    * @param title {string} The title of the itemID
    * @param spacer {boolean} Sets a spacer item vs text (not clickable)
    * @example addItem({"itemID", "event", "web", "something", false });
    * @example addItem({"space", null, null, null, true });
    * @memberof Augmented.Presentation.Component.AbstractToolbar
    */
  addItem: function(id, click, icon, title, spacer) {
    if (!spacer) {
      this.menuItems.push({ "id": id, "click": click, "icon": icon, "title": title, "spacer": spacer });
    } else {
      this.addSpacer();
    }
  },
  /**
    * @method addSpacer - Adds a spacer item to the menu
    * @example addSpacer();
    * @memberof Augmented.Presentation.Component.AbstractToolbar
    */
  addSpacer: function() {
    this.menuItems.push({ "id": null, "click": null, "icon": null, "title": null, "spacer": true });
  }
});
