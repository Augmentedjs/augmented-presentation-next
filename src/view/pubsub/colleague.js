import View from "../view.js";

/**
 * <em>Colleague View</em> &mdash; The 'child' view.<br/>
 * The Colleague communicates with other Colleagues through its Mediator.
 *
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
   * @param {string} message Message to send
   * @param {object} data Data to send with message
   */
  sendMessage(message, data) {
    if (this._mediator) {
      this._mediator.trigger(message, data);
    } else {
      console.warn(`sendMessage: No mediator is available for ${this.name}, talking to myself.`);
    }
  };

  /**
   * Set the mediator to this colleague
   * @param {Mediator} mediator The mediator
   */
  setMediatorMessageQueue(mediator) {
    //console.debug(`setMediatorMessageQueue: ${this.name} has a mediator? ${(this._mediator !== null)} and a mediator was passed? ${(mediator !== null)}`);
    if (mediator) {
      if (this._mediator) {
        // already registered, send a dismiss message
        //console.debug(`${this.name} already registered, send a dismiss message.`);
        this._mediator._dismissMe(this);
      }
      this._mediator = mediator;
    }
  };

  /**
   * Remove the mediator from this colleague
   */
  removeMediatorMessageQueue() {
    this._mediator = null;
  };

  /**
   * @property {Mediator} mediator
   * Read only property of the mediator
   */
  get mediator() {
    return this._mediator;
  }
};

export default Colleague;
