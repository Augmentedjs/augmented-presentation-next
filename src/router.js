import Augmented from "augmentedjs-next";
import History from "./history.js";

const _map = require("lodash.map");
const _isRegExp = require("lodash.isregexp");

// Cached regular expressions for matching named param parts and splatted
// parts of route strings.
const optionalParam = /\((.*?)\)/g;
const namedParam    = /(\(\?)?:\w+/g;
const splatParam    = /\*\w+/g;
const escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;
//const history = new History();

/**
 * @class Router
 * Routers map faux-URLs to actions, and fire events when routes are
 * matched. Creating a new one sets its `routes` hash, if not set statically.
 * @memberof Presentation
 */
class Router extends Augmented.Object {
  constructor(options) {
    super(options);
    options || (options = {});
    if (options.routes) {
      this.routes = options.routes;
    }
    this.history = new History();
    this._bindRoutes();
    this.initialize(options);
  };

  /**
   * Load a view safely and remove the last view by calling cleanup, then remove
   * @method loadView
   * @param {Augmented.View} view The View to load
   * @memberof Presentation.Router
   */
  loadView(view) {
    this.cleanup();
    this._view = view;
    this._view.render();
    this._view.delegateEvents();
  };

  /**
   * remove the last view by calling cleanup, then remove
   * @method cleanup
   * @memberof Presentation.Router
   */
  cleanup() {
    if (this._view) {
      if (this._view.cleanup) {
        this._view.cleanup();
      }
      this._view.remove();
      this._view = null;
    }
  };

  // Initialize is an empty function by default. Override it with your own
  // initialization logic.
  initialize(options) {
  };

  // Manually bind a single named route to a callback. For example:
  //
  //     this.route('search/:query/p:num', 'search', function(query, num) {
  //       ...
  //     });
  //
  route(route, name, callback) {
    if (!_isRegExp(route)) {
      route = this._routeToRegExp(route);
    }
    if (Augmented.isFunction(name)) {
      callback = name;
      name = '';
    }
    if (!callback) {
      callback = this[name];
    }
    let router = this;

    this.history.route(route, (fragment) => {
      const args = router._extractParameters(route, fragment);

      if (router.execute(callback, args, name) !== false) {
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        this.history.trigger('route', router, name, args);
      }
    });
    return this;
  };

  // Execute a route handler with the provided parameters.  This is an
  // excellent place to do pre-route setup or post-route cleanup.
  execute(callback, args, name) {
    if (callback) {
      callback(args);
    }
  };

  // Simple proxy to `history` to save a fragment into the history.
  navigate(fragment, options) {
    this.history.navigate(fragment, options);
    return { "routes": this.routes };
  };

  startHistory(options) {
    if (!this.history.started) {
      this.history.start(options);
    }
    return true;
  };

  // Bind all defined routes to `history`. We have to reverse the
  // order of the routes here to support behavior where the most general
  // routes can be defined at the bottom of the route map.
  _bindRoutes() {
    if (!this.routes) {
      return;
    }
    this.routes = Augmented.result(this, 'routes');
    let route,
        routes = Object.keys(this.routes);
    while ((route = routes.pop()) != null) {
      this.route(route, this.routes[route]);
    }
  };

  // Convert a route string into a regular expression, suitable for matching
  // against the current location hash.
  _routeToRegExp(route) {
    route = route.replace(escapeRegExp, '\\$&')
                 .replace(optionalParam, '(?:$1)?')
                 .replace(namedParam, (match, optional) => {
                   return optional ? match : '([^/?]+)';
                 })
                 .replace(splatParam, '([^?]*?)');
    return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
  };

  // Given a route, and a URL fragment that it matches, return the array of
  // extracted decoded parameters. Empty or unmatched parameters will be
  // treated as `null` to normalize cross-browser behavior.
  _extractParameters(route, fragment) {
    let params = route.exec(fragment).slice(1);
    return _map(params, (param, i) => {
      // Don't decode the search params.
      if (i === params.length - 1) {
        return param || null;
      }
      return param ? decodeURIComponent(param) : null;
    });
  };
};

export default Router;
