import Augmented from "augmentedjs-next";

/**
 * A controller to handle a group of views.  The api is handled simular to views for use in a router.
 * @constructor Presentation.ViewController
 * @memberof Presentation
 * @extends Augmented.Object
 */
class ViewController extends Augmented.Object {
  constructor(options) {
    super(options);
    this._views = [];
    this._permissions = {
      include: [],
      exclude: []
    };
  };
  /**
   * Permissions in the controller
   * @property permissions
   * @memberof Presentation.ViewController
   */

  /**
   * initialize - an API for the start of the controller.  It is intended to add initializers here
   * @method initialize
   * @memberof Presentation.ViewController
   */
  initialize() {};
  /**
   * render - an API for the render of the controller.  It is intended to add view render methods here
   * @method render
   * @memberof Presentation.ViewController
   */
  render() {};
  /**
   * remove - an API for the end of the controller.  It is intended to add view removal and cleanup here
   * @method remove
   * @memberof Presentation.ViewController
   */
  remove() {};
  /**
   * manageView - manage a view
   * @method manageView
   * @param {Presentation.View} view An instance of a view to manage
   * @memberof Presentation.ViewController
   */
  manageView(view) {
    this._views.push(view);
  };
  /**
   * removeAllViews - cleans up all views known (calling thier remove method)
   * @method removeAllViews
   * @memberof Presentation.ViewController
   */
  removeAllViews() {
    var i = 0, l = this._views.length;
    for (i = 0; i < l; i++) {
      this._views[i].remove();
    }
    this._views.splice(0);
  };
  /**
   * getViews - get the instances of the views known
   * @method getViews
   * @returns {Array} Returns an array of view instances
   * @memberof Presentation.ViewController
   */
  get views () {
    return this._views;
  };

  /**
   * Adds a permission to the controller
   * @method addPermission
   * @param {string} permission The permission to add
   * @param {boolean} negative Flag to set a nagative permission (optional)
   * @memberof Presentation.ViewController
   */
  addPermission(permission, negative) {
    if (!negative) {
      negative = false;
    }
    if (permission !== null && !Array.isArray(permission)) {
      const p = (negative) ? this._permissions.exclude : this._permissions.include;
      p.push(permission);
    }
  };
  /**
   * Removes a permission to the controller
   * @method removePermission
   * @param {string} permission The permission to remove
   * @param {boolean} negative Flag to set a nagative permission (optional)
   * @memberof Presentation.ViewController
   */
  removePermission(permission, negative) {
    if (!negative) {
      negative = false;
    }
    if (permission !== null && !Array.isArray(permission)) {
      const p = (negative) ? this._permissions.exclude : this._permissions.include;
      p.splice((p.indexOf(permission)), 1);
    }
  };
  /**
   * Sets the permissions to the controller
   * @method setPermissions
   * @param {array} permissions The permissions to set
   * ß
   * @memberof Presentation.ViewController
   */
  set permissions(permissions) {
    /*if (!negative) {
      negative = false;
    }
    if (permissions !== null && Array.isArray(permissions)) {
      if (negative) {
        ç.exclude = permissions;
      } else {
        this._permissions.include = permissions;
      }
    }*/
    this._permissions = permissions;
  };
  /**
   * Gets the permissions to the controller<br/>
   * Return format:<br/>
   * <pre>{
   *     include: [],
   *     exclude: []
   * }</pre>
   *
   * @method getPermissions
   * @returns {object} The permissions in the controller
   * @memberof Presentation.ViewController
   */
  get permissions() {
    return this._permissions;
  };
  /**
   * Clears the permissions in the controller
   * @method clearPermissions
   * @memberof Presentation.ViewController
   */
  clearPermissions() {
    this._permissions = {
      include: [],
      exclude: []
    };
  };
  /**
   * Matches a permission in the controller
   * @method matchesPermission
   * @param {string} match The permissions to match
   * @param {boolean} negative Flag to set a nagative permission (optional)
   * @returns {boolean} Returns true if the match exists
   * @memberof Presentation.ViewController
   */
  matchesPermission(match, negative) {
    if (!negative) {
      negative = false;
    }
    const p = (negative) ? this._permissions.exclude : this._permissions.include;
    return (p.indexOf(match) !== -1);
  };
  /**
   * Callback to return if this controller can display
   * @method canDisplay
   * @returns {boolean} Returns true if this controller can display
   * @memberof Presentation.ViewController
   */
  canDisplay() {
    return true;
  };
};

export default ViewController;
