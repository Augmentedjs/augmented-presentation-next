import Augmented from "augmentedjs-next";
import LocalStorageFactory from "../storage/localStorageFactory.js";
const DEFAULT_NAMESPACE = "augmented.localstorage.collection";
const DEFAULT_KEY = `${DEFAULT_NAMESPACE}.key`;

/**
 * A local storage-based Collection
 * @extends Augmented.AbstractCollection
 */
class LocalStorageCollection extends Augmented.AbstractCollection {
  constructor(models, options) {
    super(models, options);
    this._key = DEFAULT_KEY;
    this._persist = false;
    this._storage = null;

    if (options && options.persist) {
      this._persist = options.persist;
    }
    if (options && options.key) {
      this._key = options.key;
    }
    this._storage = LocalStorageFactory.getStorage(this._persist, DEFAULT_NAMESPACE);
  };

  /**
   * Base key name for the collection (simular to url for rest-based)
   * @property {string} key The key
   */

  /**
   * is Persistant or not
   * @property {boolean} isPersisted Persistant property
   */

  /**
   * Storage for the collection
   * @property {string} storage The storage used for the collection
   * @private
   */

  /**
   * Initialize the model with needed wireing
   * @param {object} options Any options to pass
   */
  initialize(options) {};
  /**
   * Custom init method for the model (called at inititlize)
   * @param {object} options Any options to pass
   */
  init(options) {};
  /**
   * Fetch the collection
   * @param {object} options Any options to pass
   */
  fetch(options) {
    this.sync('read', this, options);
  };
  /**
   * Save the collection
   * @param {object} options Any options to pass
   */
  save(options) {
    this.sync('create', this, options);
  };
  /**
   * Update the collection
   * @param {object} options Any options to pass
   */
  update(options) {
    this.sync('update', this, options);
  };
  /**
   * Destroy the collection
   * @param {object} options Any options to pass
   */
  destroy(options) {
    this.sync('delete', this, options);
  };

  /**
   * Sync method for Collection
   */
  sync(method, model, options) {
    if (!options) {
      options = {};
    }
    let j = {};
    if (method === "create" || method === "update") {
      j = this.toJSON();
      this._storage.setItem(this._key, j);
    } else if (method === "delete") {
      this._storage.removeItem(this._key);
    } else {
      // read
      j = this._storage.getItem(this._key);
      this.reset(j);
    }
    return {};
  };
};

export default LocalStorageCollection;
