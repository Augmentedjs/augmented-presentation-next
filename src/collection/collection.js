import Augmented from "augmentedjs-next";
import sync from "../request/sync.js";

/**
 * Augmented.LocalStorageCollection
 * A local storage-based Collection
 * @constructor Augmented.LocalStorageCollection
 * @memberof Presentation
 * @extends Augmented.Collection
 */
class Collection extends Augmented.AbstractCollection {
  constructor(models, options) {
    super(models, options);
    this._persist = false;
    this._storage = null;
    this.url = null;
  };

  /**
   * sync - Sync collection data to bound REST call
   * @method sync
   * @memberof Collection
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
