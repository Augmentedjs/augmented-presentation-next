import Augmented from "augmentedjs-next";
import sync from "../request/sync.js";

/**
 * Collection Class
 * @extends Augmented.AbstractCollection
 */
class Collection extends Augmented.AbstractCollection {
  constructor(models, options) {
    super(models, options);

    if (options && options.url) {
      this._url = options.url;
    } else {
      this._url = null;
    };
  };

  /**
   * @property {string} url The url for the datasource (if applicable)
   */

  /**
   * @returns {string|function} url The URL or a function to retun a URL object
   */
  get url() {
    return this._url;
  };
  /**
   * @param {string|function} url The URL or a function to retun a URL object
   */
  set url(url) {
    this._url = url;
  };

  /**
   * Sync collection data to bound REST call
   * @param {string} method The method to Unsuccessfull
   * @param {Model} model The model to Sync
   * @param {object} options The options to pass
   * @returns {function} Returns a request function
   */
  sync(method, model, options) {
    if (!options) {
      options = {};
    }
    if (this._url) {
      options.url = this._url;
    } else {
      console.warn("no url?! :/");
    }

    // TODO: pass this to the fetch
    if (this.crossOrigin === true) {
      options.crossDomain = true;
    }
    if (!options.xhrFields) {
      options.xhrFields = {
        withCredentials: true
      };
    }

    // TODO: Do I need this?
    if (this.mock) {
      options.mock = this.mock;
    }

    if (method && model && options.url) {
      return sync(method, model, options);
    }
    return null;
  };

  /**
   * Fetch the collection
   * @param {object} options Any options to pass
   */
  fetch(options) {
    this.sync("read", this, options);
  };
  /**
   * Save the collection
   * @param {object} options Any options to pass
   */
  save(options) {
    this.sync("create", this, options);
  };
  /**
   * Update the collection
   * @param {object} options Any options to pass
   */
  update(options) {
    this.sync("update", this, options);
  };
  /**
   * Destroy the collection
   * @param {object} options Any options to pass
   */
  destroy(options) {
    this.sync("delete", this, options);
  };
};

export default Collection;
