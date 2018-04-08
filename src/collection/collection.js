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
      this.url = options.url;
    } else {
      this.url = null;
    };
  };

  /**
   * Sync collection data to bound REST call
   */
  sync(method, model, options) {
    if (!options) {
      options = {};
    }
    if (this.crossOrigin === true) {
      options.crossDomain = true;
    }
    if (!options.xhrFields) {
      options.xhrFields = {
        withCredentials: true
      };
    }

    if (this.mock) {
      options.mock = this.mock;
    }

    return sync(method, model, options);
  };
};

export default Collection;
