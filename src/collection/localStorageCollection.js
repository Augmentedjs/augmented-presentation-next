import Augmented from "augmentedjs-next";
const DEFAULT_NAMESPACE = "augmented.localstorage.collection";
const DEFAULT_KEY = `${DEFAULT_NAMESPACE}.key`;

/**
 * Augmented.LocalStorageCollection
 * A local storage-based Collection
 * @constructor Augmented.LocalStorageCollection
 * @memberof Presentation
 * @extends Augmented.Collection
 */
class LocalStorageCollection extends Augmented.AbstractCollection {
  constructor(models, options) {
    super(models, options);
    this._key = DEFAULT_KEY;
    this._persist = false;
    this._storage = null;
    this.url = null;
  };

  /**
   * Base key name for the collection (simular to url for rest-based)
   * @property {string} key The key
   * @memberof Augmented.LocalStorageCollection
   */

  /**
   * is Persistant or not
   * @property {boolean} isPersisted Persistant property
   * @memberof Augmented.LocalStorageCollection
   */

  /**
   * Storage for the collection
   * @property {string} storage The storage used for the collection
   * @memberof Augmented.LocalStorageCollection
   * @private
   */

  /**
   * @method initialize Initialize the model with needed wireing
   * @param {object} options Any options to pass
   * @memberof Augmented.LocalStorageCollection
   */
  initialize(options) {
    if (options && options.persist) {
      this._persist = options.persist;
    }
    if (options && options.key) {
      this._key = options.key;
    }
    this._storage = Augmented.LocalStorageFactory.getStorage(this._persist, DEFAULT_NAMESPACE);
    this.init(options);
  };
  /**
   * @method init Custom init method for the model (called at inititlize)
   * @param {object} options Any options to pass
   * @memberof Augmented.LocalStorageCollection
   */
  init(options) {};
  /**
   * @method fetch Fetch the collection
   * @param {object} options Any options to pass
   * @memberof Augmented.LocalStorageCollection
   */
  fetch(options) {
    this.sync('read', this, options);
  };
  /**
   * @method save Save the collection
   * @param {object} options Any options to pass
   * @memberof Augmented.LocalStorageCollection
   */
  save(options) {
    this.sync('create', this, options);
  };
  /**
   * @method update Update the collection
   * @param {object} options Any options to pass
   * @memberof LocalStorageCollection
   */
  update(options) {
    this.sync('update', this, options);
  };
  /**
   * @method destroy Destroy the collection
   * @param {object} options Any options to pass
   * @memberof Augmented.LocalStorageCollection
   */
  destroy(options) {
    this.sync('delete', this, options);
  };
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
