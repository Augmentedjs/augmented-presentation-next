import LocalStorage from "./localStorage.js";

/**
 * Augmented.LocalStorageFactory
 * Retrieve a local storage Object
 * @class LocalStorageFactory
 * @name LocalStorageFactory
 * @memberof Presentation
 */
class LocalStorageFactory {
  constructor() {
  };

  /**
   * @method getStorage Get the storage instance
   * @param {boolean} persist Persistance or not
   * @param {string} namespace The namespace of the storage if needed (optional)
   * @returns {Augmented.AbstractLocalStorage} Returns an instance of local storage
   * @memberof Augmented.LocalStorageFactory
   */
  static getStorage(persist, namespace) {
    let ls = null;
    if (namespace) {
      ls = new LocalStorage(persist, namespace);
    } else {
      ls = new LocalStorage(persist);
    }
    if (ls && ls.isSupported()) {
      return ls;
    }
    return null;
  }
};

export default LocalStorageFactory;
