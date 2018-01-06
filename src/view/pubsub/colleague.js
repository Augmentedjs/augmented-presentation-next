import View from "../view.js";

/**
 * Colleague View - The 'child' view.<br/>
 * Allow to define convention-based subscriptions
 * as an 'subscriptions' hash on a view. Subscriptions
 * can then be easily setup and cleaned.
 *
 * @class Augmented.Presentation.Colleague
 * @name Colleague
 * @memberof Presentation
 * @extends Presentation.View
 */
class Colleague extends View {
  constructor(options) {
    super(options);
    if (options && options.mediator) {
      this._mediator = mediator;
    } else {
      this._mediator = null;
    }
  };

  /**
   * Send a message to the mediator's queue
   * @method sendMessage
   * @param {string} message Message to send
   * @param {object} data Data to send with message
   * @memberof Augmented.Presentation.Colleague
   */
  sendMessage(message, data) {
    if (this._mediator) {
      this._mediator.trigger(message, data);
    } /*else {
      _logger.warn("AUGMENTED: No mediator is available, talking to myself.");
    }*/
  };

  /**
   * Set the mediator to this colleague
   * @method setMediatorMessageQueue
   * @param {Augmented.Presentation.Mediator} mediator The mediator
   * @memberof Augmented.Presentation.Colleague
   */
  setMediatorMessageQueue(mediator) {
    if (this._mediator) {
      // already registered, send a dismiss message
      this._mediator._dismissMe(this);
    }
    this._mediator = mediator;
  };

  /**
   * Remove the mediator from this colleague
   * @method removeMediatorMessageQueue
   * @memberof Augmented.Presentation.Colleague
   */
  removeMediatorMessageQueue() {
    this._mediator = null;
  };

  get mediator() {
    return this._mediator;
  }
};

export default Colleague;
