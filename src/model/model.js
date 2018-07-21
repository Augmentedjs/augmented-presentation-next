import Augmented from "augmentedjs-next";
import sync from "../request/sync.js";

/**
 * Model <br/>
 * Supports: <ul>
 * <li>REST</li>
 * <li>Validation and Schemas</li>
 * <li>Security</li>
 * </ul>
 * @extends Augmented.AbstractModel
 */
class Model extends Augmented.AbstractModel {
  constructor(attributes, options, ...args) {
    super(attributes, options, args);
    this.mock = false;
    this.crossOrigin = false;
  };

  /**
   * mock property
   * @property {boolean} mock Sets mock mode in the model
   */

  /**
   * Cross Origin property
   * @property {boolean} crossOrigin Cross Origin property
   */

  /**
   * sync - Sync model data to bound REST call
   * @method sync
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

  /**
   * Fetch the collection
   * @param {object} options Any options to pass
   */
  fetch(options) {
    this.sync("read", options);
  };
  /**
   * Save the collection
   * @param {object} options Any options to pass
   */
  save(options) {
    this.sync("create", options);
  };
  /**
   * Update the collection
   * @param {object} options Any options to pass
   */
  update(options) {
    this.sync("update", options);
  };
  /**
   * Destroy the collection
   * @param {object} options Any options to pass
   */
  destroy(options) {
    this.sync("delete", options);
  };
};

export default Model;
