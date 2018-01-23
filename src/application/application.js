import Augmented from "augmentedjs-next";

/**
 * Presentation Application - extension of Augmented.Application</br/>
 * Add registration of mediators to the application, breadcrumbs, and stylesheet registration
 * @class Application
 * @memberof Presentation
 * @extends Augmented.Application
 */
class Application extends Augmented.Application {
  constructor(name) {
    super(name);
    this._mediators = [];
    this._stylesheets = [];
    this._breadcrumb = new Augmented.Utility.Stack();
  };

  /**
   * Initialize Event - adds any stylesheets registered
   * @method initialize
   * @memberof Application
   */
  initialize() {
    if (this._stylesheets && this._stylesheets.length > 0) {
      this.attachStylesheets();
    }
    const router = this.router;
    if (router) {
      console.log("starting history");
      router.startHistory();
    }
    return true;
  };
  /**
   * Register a Mediator
   * @method registerMediator
   * @memberof Application
   * @param {Augmented.Presentation.Mediator} mediator The mediator to register
   */
  registerMediator(mediator) {
    if (mediator) {
      this._mediators.push(mediator);
    }
  };
  /**
   * Deregister a Mediator
   * @method deregisterMediator
   * @memberof Application
   * @param {Augmented.Presentation.Mediator} mediator The mediator to deregister
   */
  deregisterMediator(mediator) {
    if (mediator) {
      const i = this._mediators.indexOf(mediator);
      if (i != -1) {
        this._mediators.splice(i, 1);
      }
    }
  };

  /**
   * Get all Mediators
   * @method getMediators
   * @memberof Application
   * @returns {array} Returns all Mediators
   */
  get mediators() {
    return this._mediators;
  };

  /**
   * Register a stylesheet
   * @method registerStylesheet
   * @memberof Application
   * @param {string} stylesheet URI of the stylesheet
   */
  registerStylesheet(s) {
    if (s) {
      this._stylesheets.push(s);
    }
  };
  /**
   * Deregister a stylesheet
   * @method deregisterStylesheet
   * @memberof Application
   * @param {string} stylesheet URI of the stylesheet
   */
  deregisterStylesheet(s) {
    if (s) {
      this._stylesheets.splice((this._stylesheets.indexOf(s)), 1);
    }
  };
  /**
   * Attach registered stylesheets to the DOM
   * @method attachStylesheets
   * @memberof Application
   */
  attachStylesheets() {
    const headElement = document.getElementsByTagName("head")[0],
    // create a shadow DOM
    shaddowDom = document.createDocumentFragment(),
    l = this._stylesheets.length;
    let i = 0, link = null;
    for (i = 0; i < l; i++) {
      link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = this._stylesheets[i];
      shaddowDom.appendChild(link);
    }
    // add the shadow to the real DOM
    headElement.appendChild(shaddowDom);
  };
  /**
   * Replace stylesheets then attach registered stylesheets to the DOM
   * @method replaceStylesheets
   * @memberof Application
   */
  replaceStylesheets() {
    const links = document.getElementsByTagName("link"),
          l = links.length - 1;
    let i = 0;
    for (i = l; i >= 0; i--) {
      element[i].parentNode.removeChild(element[i]);
    }
    this.attachStylesheets();
  };

  get stylesheets() {
    return this._stylesheets;
  };
  /**
   * Sets the current breadcrumb
   * @method setCurrentBreadcrumb
   * @memberof Application
   * @param {string} uri The URI of the breadcrumb
   * @param {string} name The name of the breadcrumb
   */
  setCurrentBreadcrumb(uri, name) {
    if (this._breadcrumb.size() > 1) {
      this._breadcrumb.pop();
    }
    this._breadcrumb.push({ "uri": uri, "name": name });
  };
  /**
   * Gets the current breadcrumb
   * @method getCurrentBreadcrumb
   * @memberof Application
   * @returns {object} Returns the current breadcrumb
   */
  getCurrentBreadcrumb() {
    return this._breadcrumb.peek();
  };

  /**
   * Get all the breadcrumbs
   * @method getBreadcrumbs
   * @memberof Application
   * @returns {array} Returns alls the breadcrumbs
   */
  get breadcrumbs() {
    return this._breadcrumb.toArray();
  };
};

export default Application;
