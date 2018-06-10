import * as Augmented from "augmentedjs-next";
import Colleague from "./colleague.js";

const DEFAULT_CHANNEL = "augmentedChannel";
const DEFAULT_IDENTIFIER = "augmentedIdentifier";

/**
 * Mediator View - The mediator in the Mediator Pattern<br/>
 * The mediator defines the interface for communication between colleague views.
 * Loose coupling between colleague objects is achieved by having colleagues communicate
 * with the Mediator, rather than with each other.
 * <pre>
 * [Mediator]<-----[Colleague]
 *     ^-----------[Colleague]
 * </pre>
 * @memberof Presentation
 * @extends Colleague
 */
class Mediator extends Colleague {
  constructor(options) {
    super(options);
    this._defaultChannel = DEFAULT_CHANNEL;
    this._defaultIdentifier = DEFAULT_IDENTIFIER;
    this._channels = {};
    this._colleagueMap = {};
    this._subscriptions = {};
  };

  /**
   * Default Channel Property
   * @property {string} defaultChannel The default channel for the view
   * @private
   */

  /**
   * Default identifier Property
   * @property {string} defaultIdentifier The default identifier for the view
   * @private
   */

  /**
   * Channels Property
   * @property {object} _channels The channels for the view (object array)
   * @private
   */

  /**
   * Colleague Map Property
   * @property {object} _colleagueMap The colleagues observed by index in the channel
   * @private
   */

  /**
   * @property {Object} _subscriptions List of subscriptions
   * @private
   */

  /**
   * Dismiss a colleage
   * @private
   */
  _dismissMe(colleague) {
    if (colleague instanceof Colleague) {
      let channel = this._colleagueMap[colleague], myChannelObject = this._channels[channel];
      this.unsubscribe(channel, myChannelObject.fn, colleague, myChannelObject.identifier);
    }
  };

  /**
   * Extend delegateEvents() to set subscriptions
   * @param {array} event The events to undelegate
   */
  delegateEvents(events) {
    super.delegateEvents(events);
    this.subscriptions = {};
  };

  /**
   * Extend undelegateEvents() to unset subscriptions
   * @param {array} event The events to undelegate
   */
  undelegateEvents(events) {
    super.undelegateEvents(events);
    this.unsetSubscriptions();
  };

  /**
   * Subscriptions
   * @property {array} subscriptions
   */
  get subscriptions() {
    return this._subscriptions;
  };

  set subscriptions(subscriptions) {
    if (subscriptions) {
      Augmented.Utility.extend(this._subscriptions || {}, subscriptions);
    }
    subscriptions = subscriptions || this._subscriptions;
    if (!subscriptions || (subscriptions.length === 0)) {
      return;
    }
    // Just to be sure we don't set duplicate
    this.unsetSubscriptions(subscriptions);

    let i = 0, l = subscriptions.length;
    for (i = 0; i < l; i++) {
      let subscription = subscriptions[i];
      let once = false;
      if (subscription.$once) {
        subscription = subscription.$once;
        once = true;
      }
      if (typeof subscription === 'string') {
        subscription = this[subscription];
      }
      this.subscribe(subscription.channel, subscription, this, once);
    }
  };

  /**
   * Unsubscribe to each subscription
   * @param {Object} [subscriptions] An optional hash of subscription to remove
  *
   */
  unsetSubscriptions(subscriptions) {
    subscriptions = subscriptions || this._subscriptions;
    if (!subscriptions || (subscriptions.length === 0)) {
      return;
    }

    let i = 0;
    const l = subscriptions.length;

    for (i = 0; i < l; i++) {
      let subscription = subscriptions[i];
      let once = false;
      if (subscription.$once) {
        subscription = subscription.$once;
        once = true;
      }
      if (typeof subscription == 'string') {
        subscription = this[subscription];
      }
      this.unsubscribe(subscription.channel, subscription.$once || subscription, this);
    }
  };

  /**
   * Observe a Colleague View - observe a Colleague and add to a channel
   * @param {Colleague} colleague The Colleague to observe
   * @param {function} callback The callback to call for this colleague
   * @param {string} channel The Channel to add the pubished events to
   * @param {string} identifier The identifier for this function
   */
  observeColleague(colleague, callback, channel, identifier) {
    if (colleague instanceof Colleague) {
      if (!channel) {
        channel = this._defaultChannel;
      }
      colleague.setMediatorMessageQueue(this);
      this.subscribe(channel, callback, colleague, false, (identifier) ? identifier : this._defaultIdentifier);
    }
  };

  /**
   * Observe a Colleague View - observe a Colleague and add to a channel and auto trigger events
   * @param {Colleague} colleague The Colleague to observe
   * @param {string} channel The Channel to add the pubished events to
   * @param {string} identifier The identifier for this function
   */
  observeColleagueAndTrigger(colleague, channel, identifier) {
    //console.debug("this", this);
    //console.debug("colleague", colleague);
    this.observeColleague(
      colleague,
      (...args) => {
        //console.debug("triggered!", args[0]);
        //console.debug("this", this);
        //console.debug("colleague", colleague);
        colleague.trigger(channel, args[0]); //arguments[0], arguments[1]);
      },
      channel,
      (identifier) ? identifier : this._defaultIdentifier
    );
  };

  /**
   * Dismiss a Colleague View - Remove a Colleague from the channel
   * @param {Presentation.Colleague} colleague The Colleague to observe
   * @param {function} callback The callback to call on channel event
   * @param {string} channel The Channel events are pubished to
   * @param {string} identifier The identifier for this function
   */
  dismissColleague(colleague, callback, channel, identifier) {
    if (colleague instanceof Colleague) {
      if (!channel) {
        channel = this._defaultChannel;
      }
      colleague.removeMediatorMessageQueue();
      this.unsubscribe(channel, callback, colleague, identifier);
    }
  };

  /**
   * Dismiss a Colleague View - Remove a Colleague from the channel that has an auto trigger
   * @param {Colleague} colleague The Colleague to observe
   * @param {string} channel The Channel events are pubished to
   * @param {string} identifier The identifier for this function
   */
  dismissColleagueTrigger(colleague, channel, identifier) {
    let id = (identifier) ? identifier : this._defaultIdentifier;
    this.dismissColleague(
      colleague,
      (...args) => {
        colleague.trigger(args[0], args[1]);//arguments[0], arguments[1]);
      },
      channel,
      id
    );
  };

  /**
   * Subscribe to a channel
   * @param {string} channel The Channel events are pubished to
   * @param {function} callback The callback to call on channel event
   * @param {object} context The context (or 'this')
   * @param {boolean} once Toggle to set subscribe only once
   * @param {string} identifier The identifier for this function
   */
  subscribe(channel, callback, context, once, identifier) {
    ////console.log("subscribe: callback", callback);
    if (!this._channels[channel]) {
      this._channels[channel] = [];
    }

    const obj = {
      fn: callback,
      // TODO: the context set to 'this' may be the source of the edge case mediator instance for a channel
      context: context || this,
      once: once,
      identifier: (identifier) ? identifier : this._defaultIdentifier
    };
    this._channels[channel].push(obj);
    this._colleagueMap[context] = channel;
    this.on(channel, this.publish, context);
  };

  /**
   * Trigger all callbacks for a channel
   * @param {string} channel The Channel events are pubished to
   * @param {object} N Extra parameter to pass to handler
   */
  publish(channel, ...args) {
    if (!channel || !this._channels[channel]) {
      //_logger.warn("AUGMENTED: Mediator: channel '" + channel + "' doest exist.");
      return;
    }

    let myArgs = [].slice.call(args, 1), subscription;
    //console.log("args", myArgs);
    let i = 0;
    const l = this._channels[channel].length;

    for (i = 0; i < l; i++) {
      subscription = this._channels[channel][i];
      if (subscription) {
        //console.log("subscription", subscription);
        if (subscription.fn) {
          //console.log("calling", subscription.fn);
          //subscription.fn(args);
          subscription.fn.apply(subscription.context, myArgs);
        }
        if (subscription.once) {
          this.unsubscribe(channel, subscription.fn, subscription.context, subscription.identifier);
          i--;
        }
      } else {
        //_logger.warn("AUGMENTED: Mediator: No subscription for channel '" + channel + "' on row " + i);
      }
    }
  };

  /**
   * Cancel subscription
   * @param {string} channel The Channel events are pubished to
   * @param {function} callback The function callback regestered
   * @param {object} context The context (or 'this')
   * @param {string} identifier The identifier for this function
   */
  unsubscribe(channel, callback, context, identifier) {
    if (!this._channels[channel]) {
      return;
    }

    let id = (identifier) ? identifier : this._defaultIdentifier;

    let subscription, i = 0;
    for (i = 0; i < this._channels[channel].length; i++) {
      subscription = this._channels[channel][i];
      if (subscription) {
        if (subscription.identifier === id && subscription.context === context) {
          // originally compared function callbacks, but we don't always pass one so use identifier
          this._channels[channel].splice(i, 1);
          i--;

          delete this._colleagueMap[subscription.context];
        }
      } else {
        //_logger.warn("AUGMENTED: Mediator: No subscription for channel '" + channel + "' on row " + i);
        //logger.debug("AUGMENTED: Mediator: subscription " + this._channels[channel]);
      }
    }
  };

  /**
   * Subscribing to one event only
   * @param {string} channel The Channel events are pubished to
   * @param {string} subscription The subscription to subscribe to
   * @param {object} context The context (or 'this')
   * @param {string} identifier The identifier for this function
   */
  subscribeOnce(channel, subscription, context, identifier) {
    this.subscribe(channel, subscription, context, true, identifier);
  };

  /**
   * Get All the Colleagues for a channel
   * @param {string} channel The Channel events are pubished to
   * @returns {array} The colleagues for a channel
   */
  getColleagues(channel) {
    const c = this.getChannel(channel);
    return (c) ? c.context : null;
  };

  /**
   * Get Channels
   * @returns {object} Returns all the channels
   */
  get channels() {
    return this._channels;
  };

  /**
   * Get a specific channel
   * @param {string} channel The Channel events are pubished to
   * @returns {array} Returns the requested channel or null if nothing exists
   */
  getChannel(channel) {
    if (!channel) {
      channel = this._defaultChannel;
    }
    return (this._channels[channel]) ? (this._channels[channel]) : null;
  };

  /**
   * Get the default channel<br/>
   * Convenience method for _.channel = null;
   * @property {array} Returns the default channel or null if nothing exists
   */
  get defaultChannel() {
    return this.getChannel(this._defaultChannel);
  };

  /**
   * Get the default identifier
   * @property {string} Returns the default identifier
   */
  get defaultIdentifier() {
    return this._defaultIdentifier;
  };
};

export default Mediator;
