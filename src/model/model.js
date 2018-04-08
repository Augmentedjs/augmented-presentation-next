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
};

export default Model;
