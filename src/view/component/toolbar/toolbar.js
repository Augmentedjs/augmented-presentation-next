// data structure = { id: "itemID", "click": "event", "icon": "web", "title": "something", "spacer": false }
const buildToolbarItems = function(name, data) {
  let items = "";
  if (name && data && data.length !== 0) {
    const l = data.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      if (data[i].spacer) {
        items = items + '<div class="tools spacer"></div>';
      } else {
        items = items + '<div id="' + data[i].id + '" data-' + name + '="' + data[i].id + '" data-click="' + data[i].click + '" class="tools" title="' + data[i].title + '">' +
        ( (data[i].icon) ? ('<i class="material-icons md-dark">' + data[i].icon + '</i>') : data[i].title ) + '</div>';
      }
    }
  }
  return items;
};

/**
  * A Toolbar View
  * @constructor Augmented.Presentation.Component.Toolbar
  * @memberof Augmented.Presentation.Component
  * @extends Augmented.Presentation.AbstractToolbar
  */
Augmented.Presentation.Component.Toolbar = Augmented.Presentation.Component.AbstractToolbar.extend({
  /**
    * Render the Toolbar
    * @method render Renders the Toolbar
    * @memberof Augmented.Presentation.Component.Toolbar
    * @returns {object} Returns the view context ('this')
    */
  render: function() {
    if (!this.isInitalized) {
      _logger.warn("AUGMENTED: Toolbar Can't render yet, not initialized!");
      return this;
    }

    this.template = null;//"notused";

    if (this.el) {
      var e = Augmented.Presentation.Dom.selector(this.el);
      if (e) {
        // the menu
        Augmented.Presentation.Dom.addClass(e, "toolbar");
        e.setAttribute("data-" + this.name, "toolbar");
        e.innerHTML = buildToolbarItems(this.name, this.menuItems);
      }
    } else if (this.$el) {
      _logger.warn("AUGMENTED: Toolbar doesn't support jquery, sorry, not rendering.");
      return;
    } else {
      _logger.warn("AUGMENTED: Toolbar no element anchor, not rendering.");
      return;
    }

    this.delegateEvents();

    this.syncAllBoundElements();
    return this;
  }
});
