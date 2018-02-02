/**
 * Local Storage API - returned from LocalStorageFactory
 * @class LocalStorage
 * @memberof Presentation
 * @param {boolean} persist Persistant storage or not
 */
class LocalStorage {
  constructor(persist) {
    this.isPersisted = persist;
    this._myStore = null;

    // true = localStorage, false = sessionStorage
    if (this.isSupported()) {
      //logger.debug("AUGMENTED: localStorage exists");

      if (this.isPersisted) {
        this._myStore = localStorage;
      } else {
        this._myStore = sessionStorage;
      }
    } else {
      console.warn("AUGMENTED: No localStorage.");
      //logger.warn("AUGMENTED: No localStorage.");
    }
  };

  /**
   * is Persistant or not
   * @property {boolean} isPersisted Persistant property
   * @memberof LocalStorage
   */

  /**
   * Is storage supported
   * @method isSupported
   * @memberof LocalStorage
   * @returns {boolean} Returns true if supported
   */
  isSupported() {
    return (typeof (Storage) !== "undefined");
  };

  /**
   * Gets an item from storage
   * @method getItem
   * @memberof LocalStorage
   * @param {string} key The key in storage
   * @returns {object} Returns object from storage
   */
  getItem(itemKey) {
    const item = this._myStore.getItem(itemKey);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  };

  /**
   * Sets an item to storage
   * @method setItem
   * @memberof LocalStorage
   * @param {string} key The key in storage
   * @param {object} object The data to set
   */
  setItem(itemKey, object) {
    this._myStore.setItem(itemKey, JSON.stringify(object));
  };

  /**
   * Removes an item from storage
   * @method removeItem
   * @memberof LocalStorage
   * @param {string} key The key in storage
   */
  removeItem(itemKey) {
    this._myStore.removeItem(itemKey);
  };

  /**
   * Clears storage - <b>Warning: Destructive in non-namespaced instances!</b>
   * @method clear
   * @memberof LocalStorage
   */
  clear() {
    this._myStore.clear();
  };

  /**
   * Gets the key from storage for index
   * @method key
   * @memberof LocalStorage
   * @param {number} i The index in storage
   * @returns {string} Returns the key from storage
   */
  key(i) {
    return this._myStore.key(i);
  };

  /**
   * The length of storage by keys
   * @method length
   * @memberof LocalStorage
   * @returns {number} Returns the length of storage by keys
   */
  length() {
    return this._myStore.length;
  };
};

export default LocalStorage;
