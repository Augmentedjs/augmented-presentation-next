import AbstractToolbar from "../toolbar/abstractToolbar.js";
import Dom from "../../../dom/dom.js";

const buildMenuItems = (name, data) => {
  let items = "<ul>";
  if (name && data && data.length !== 0) {
    const l = data.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      if (data[i].spacer) {
        items = `${items}<li class="spacer"></li>`;
      } else {
        items = `${items}<li id="${data[i].id}" data-${name}="${data[i].id}" data-click="${data[i].click}">${( (data[i].icon) ? ('<i class="material-icons md-dark">' + data[i].icon + '</i>') : '' )}${data[i].title}</li>`;
      }
    }
  }
  items = `${items}</ul>`;
  return items;
};

/**
 * A Navigation Menu
 * @memberof Presentation.Component
 * @extends Presentation.AbstractToolbar
 */
class NavigationMenu extends AbstractToolbar {
  constructor(options) {
    if (!options) {
      options = {};
    }
    if (!options.tagName) {
      options.tagName = "nav";
    }
    if (!options.style) {
      options.style = "navigation";
    } else {
      options.style = `${option.style} navigation`;
    }

    super(options);
  };style
  /**
   * Renders the Menu
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (this.isInitalized) {
      this.template = null;//"notused";
      if (this.el) {
        const e = Dom.selector(this.el);
        if (e) {
          // the menu
          Dom.addClass(e, "navigation");
          e.setAttribute("data-" + this.name, "navigation-menu");
          e.innerHTML = `<ul>${buildMenuItems(this.name, this.menuItems)}</ul>`;
        }
        this.delegateEvents();
        this.syncAllBoundElements();
      }
    };
    return this;
  };
};

export default NavigationMenu;
