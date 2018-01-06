import builsMenuItems from "../functions/buildMenuItems.js";

const buildMenu = (name, title, menuItems) => {
  return `<section class="material-design-hamburger" data-${name}="hamburgerClickRegion"><div class="material-design-hamburger__icon" data-${name}="hamburgerIcon" data-click="toggle"><i class="material-icons md-light">menu</i></div></section><section class="menu menu--off" data-${name}="hamburgerMenu"><div>${title}</div>${buildMenuItems(this.name, this.menuItems)}</section>`;
};

/**
  * A Hamburger Menu View
  * @constructor Augmented.Presentation.Component.HamburgerMenu
  * @memberof Augmented.Presentation.Component
  * @extends Augmented.Presentation.AbstractToolbar
  */
Augmented.Presentation.Component.HamburgerMenu = Augmented.Presentation.Component.AbstractToolbar.extend({
  /**
    * The title property
    * @property {string} title The title property
    * @memberof Augmented.Presentation.Component.HamburgerMenu
    */
  title: "",

  /**
    * The menuitems property
    * @property {array} menuItems The initialized property
    * @memberof Augmented.Presentation.Component.HamburgerMenu
    */

  /**
    * @method addItem - Adds an item to the menu
    * @param id {string} The id of the itemID
    * @param click {string} The bound click method to call
    * @param icon {string} The icon name (webfont)
    * @param title {string} The title of the itemID
    * @param spacer {boolean} Sets a spacer item vs text (not clickable)
    * @example addItem({"itemID", "event", "web", "something", false });
    * @example addItem({"space", null, null, null, true });
    * @memberof Augmented.Presentation.Component.HamburgerMenu
    */

  /**
    * @method addSpacer - Adds a spacer item to the menu
    * @example addSpacer();
    * @memberof Augmented.Presentation.Component.HamburgerMenu
    */

  /**
    * Initialize the Hamburger menu view
    * @method initialize
    * @memberof Augmented.Presentation.Component.HamburgerMenu
    * @param {object} options The view options
    * @returns {boolean} Returns true on success of initalization
    */

  /**
    * Render the Hamburger Menu
    * @method render Renders the Hamburger
    * @memberof Augmented.Presentation.Component.HamburgerMenu
    * @returns {object} Returns the view context ('this')
    */
  render: function() {
    if (!this.isInitalized) {
      _logger.warn("AUGMENTED: Hamburger Can't render yet, not initialized!");
      return this;
    }

    this.template = null;//"notused";

    if (this.el) {
      var e = Augmented.Presentation.Dom.selector(this.el);
      if (e) {
        // the menu
        Augmented.Presentation.Dom.addClass(e, "wrapper");
        e.setAttribute("data-" + this.name, "hamburger");

        const menu = buildMenu(this.name, this.menuItems);
        e.innerHTML =
          '<section class="material-design-hamburger" data-' + this.name + '="hamburgerClickRegion">' +
          '<div class="material-design-hamburger__icon" data-' + this.name + '="hamburgerIcon" data-click="toggle">' +
          '<i class="material-icons md-light">menu</i>' +
          '</div></section>' +
          '<section class="menu menu--off" data-' + this.name + '="hamburgerMenu">' +
          '<div>' + this.title + '</div>' +
          buildMenuItems(this.name, this.menuItems) +
          '</section>';
      }
    } else if (this.$el) {
      _logger.warn("AUGMENTED: Hamburger doesn't support jquery, sorry, not rendering.");

      return;
    } else {
      _logger.warn("AUGMENTED: Hamburger no element anchor, not rendering.");

      return;
    }

    this.delegateEvents();

    this.syncAllBoundElements();
    return this;
  },

  /**
    * Toggle the Hamburger menu view - deprecated
    * @method hamburger
    * @memberof Augmented.Presentation.Component.HamburgerMenu
    * @deprecated
    */
  hamburger: function() {
    this.toggle();
  },
  /**
    * Toggle the Hamburger menu view
    * @method toggle
    * @memberof Augmented.Presentation.Component.HamburgerMenu
    */
  toggle: function() {
    if (!this.modal) {
      const menu = this.boundElement("hamburgerMenu");
      const r = this.boundElement("hamburgerClickRegion");
      r.classList.toggle("model");
      menu.classList.toggle("menu--on");
    }
  }
});
