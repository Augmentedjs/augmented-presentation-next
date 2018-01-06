import * as Augmented from "augmentedjs-next";
import Colleague from "./colleague.js";

/**
 * Mediator View - The mediator in the Mediator Pattern<br/>
 * The mediator defines the interface for communication between colleague views.
 * Loose coupling between colleague objects is achieved by having colleagues communicate
 * with the Mediator, rather than with each other.
 * <pre>
 * [Mediator]<-----[Colleague]
 *     ^-----------[Colleague]
 * </pre>
 * @class Mediator
 * @name Mediator
 * @memberof Presentation
 * @extends Presentation.Colleague
 */
class Mediator extends Colleague {
  constructor(options) {
    super(options);
    this._defaultChannel = "augmentedChannel";
    this._defaultIdentifier = "augmentedIdentifier";
    this._channels = {};
    this._colleagueMap = {};
    this._subscriptions = {};
  };

  /**
  * Default Channel Property
  * @property {string} defaultChannel The default channel for the view
  * @memberof Presentation.Mediator
  * @private
  */


  /**
  * Default identifier Property
  * @property {string} defaultIdentifier The default identifier for the view
  * @memberof Presentation.Mediator
  * @private
  */


  /**
  * Channels Property
  * @property {object} _channels The channels for the view (object array)
  * @memberof Presentation.Mediator
  * @private
  */


  /**
  * Colleague Map Property
  * @property {object} _colleagueMap The colleagues observed by index in the channel
  * @memberof Presentation.Mediator
  * @private
  */


  /**
  * @property {Object} _subscriptions List of subscriptions
  * @memberof Presentation.Colleague
  * @private
  */


  /**
  * Extend delegateEvents() to set subscriptions
  * @method delegateEvents
  * @memberof Presentation.Colleague
  */
  delegateEvents(events) {
    super.delegateEvents(events);
    this.subscriptions = {};
  };

  /**
  * Extend undelegateEvents() to unset subscriptions
  * @method undelegateEvents
  * @memberof Presentation.Colleague
  */
  undelegateEvents(events) {
    super.undelegateEvents(events);
    this.unsetSubscriptions();
  };

  /**
  * Gets all subscriptions
  * @method getSubscriptions
  * @memberof Presentation.Colleague
  * @returns {object} Returns all subscriptions
  */
  get subscriptions() {
    return this._subscriptions;
  };

  /**
  * Subscribe to each subscription
  * @method setSubscriptions
  * @param {Object} [subscriptions] An optional hash of subscription to add
  * @memberof Presentation.Colleague
  */
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
  * @method unsetSubscriptions
  * @param {Object} [subscriptions] An optional hash of subscription to remove
  * @memberof Presentation.Colleague
  */
  unsetSubscriptions(subscriptions) {
    subscriptions = subscriptions || this._subscriptions;
    if (!subscriptions || (subscriptions.length === 0)) {
      return;
    }

    let i = 0, l = subscriptions.length;
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
  * @method observeColleague
  * @param {Presentation.Colleague} colleague The Colleague to observe
  * @param {function} callback The callback to call for this colleague
  * @param {string} channel The Channel to add the pubished events to
  * @param {string} identifier The identifier for this function
  * @memberof Presentation.Mediator
  */
  observeColleague(colleague, callback, channel, identifier) {
    if (colleague instanceof Presentation.Colleague) {
      if (!channel) {
        channel = this._defaultChannel;
      }
      colleague.setMediatorMessageQueue(this);
      this.subscribe(channel, callback, colleague, false, (identifier) ? identifier : this._defaultIdentifier);
    }
  };

  /**
  * Observe a Colleague View - observe a Colleague and add to a channel and auto trigger events
  * @method observeColleague
  * @param {Presentation.Colleague} colleague The Colleague to observe
  * @param {string} channel The Channel to add the pubished events to
  * @param {string} identifier The identifier for this function
  * @memberof Presentation.Mediator
  */
  observeColleagueAndTrigger(colleague, channel, identifier) {
    this.observeColleague(
      colleague,
      (...args) => {
        ////console.log("triggered!", args[0]);
        ////console.log("this", this);
        ////console.log("colleague", colleague);
        colleague.trigger(channel, args[0]); //arguments[0], arguments[1]);
      },
      channel,
      (identifier) ? identifier : this._defaultIdentifier
    );
  };

  _dismissMe(colleague) {
    if (colleague instanceof Presentation.Colleague) {
      let channel = this._colleagueMap[colleague], myChannelObject = this._channels[channel];
      this.unsubscribe(channel, myChannelObject.fn, colleague, myChannelObject.identifier);
    }
  };

  /**
  * Dismiss a Colleague View - Remove a Colleague from the channel
  * @method dismissColleague
  * @param {Presentation.Colleague} colleague The Colleague to observe
  * @param {function} callback The callback to call on channel event
  * @param {string} channel The Channel events are pubished to
  * @param {string} identifier The identifier for this function
  * @memberof Presentation.Mediator
  */
  dismissColleague(colleague, callback, channel, identifier) {
    if (colleague instanceof Presentation.Colleague) {
      if (!channel) {
        channel = this._defaultChannel;
      }
      colleague.removeMediatorMessageQueue();
      this.unsubscribe(channel, callback, colleague, identifier);
    }
  };

  /**
  * Dismiss a Colleague View - Remove a Colleague from the channel that has an auto trigger
  * @method dismissColleagueTrigger
  * @param {Presentation.Colleague} colleague The Colleague to observe
  * @param {string} channel The Channel events are pubished to
  * @param {string} identifier The identifier for this function
  * @memberof Presentation.Mediator
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
  * @method subscribe
  * @param {string} channel The Channel events are pubished to
  * @param {function} callback The callback to call on channel event
  * @param {object} context The context (or 'this')
  * @param {boolean} once Toggle to set subscribe only once
  * @param {string} identifier The identifier for this function
  * @memberof Presentation.Mediator
  */
  subscribe(channel, callback, context, once, identifier) {

    ////console.log("subscribe: callback", callback);

    if (!this._channels[channel]) {
      this._channels[channel] = [];
    }

    let obj = {
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
  * @method publish
  * @param {string} channel The Channel events are pubished to
  * @param {object} N Extra parameter to pass to handler
  * @memberof Presentation.Mediator
  */
  publish(channel, ...args) {
    if (!channel || !this._channels[channel]) {
      //_logger.warn("AUGMENTED: Mediator: channel '" + channel + "' doest exist.");
      return;
    }

    let myArgs = [].slice.call(args, 1), subscription;
    //console.log("args", myArgs);
    let i = 0, l = this._channels[channel].length;

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
  * @method unsubscribe
  * @param {string} channel The Channel events are pubished to
  * @param {function} callback The function callback regestered
  * @param {object} context The context (or 'this')
  * @param {string} identifier The identifier for this function
  * @memberof Presentation.Mediator
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
  * @method subscribeOnce
  * @param {string} channel The Channel events are pubished to
  * @param {string} subscription The subscription to subscribe to
  * @param {object} context The context (or 'this')
  * @param {string} identifier The identifier for this function
  * @memberof Presentation.Mediator
  */
  subscribeOnce(channel, subscription, context, identifier) {
    this.subscribe(channel, subscription, context, true, identifier);
  };

  /**
  * Get All the Colleagues for a channel
  * @method getColleagues
  * @param {string} channel The Channel events are pubished to
  * @memberof Presentation.Mediator
  * @returns {array} The colleagues for a channel
  */
  getColleagues(channel) {
    let c = this.getChannel(channel);
    return (c) ? c.context : null;
  };

  /**
  * Get Channels
  * @method getChannels
  * @memberof Presentation.Mediator
  * @returns {object} Returns all the channels
  */
  get channels() {
    return this._channels;
  };

  /**
  * Get a specific channel
  * @method getChannel
  * @param {string} channel The Channel events are pubished to
  * @memberof Presentation.Mediator
  * @returns {array} Returns the requested channel or null if nothing exists
  */
  getChannel(channel) {
    if (!channel) {
      channel = this._defaultChannel;
    }
    return (this._channels[channel]) ? (this._channels[channel]) : null;
  };

  /**
  * Get the default channel
  * Convenience method for getChannel(null)
  * @method getDefaultChannel
  * @memberof Presentation.Mediator
  * @returns {array} Returns the default channel or null if nothing exists
  */
  get defaultChannel() {
    return this.getChannel(this._defaultChannel);
  };

  /**
  * Get the default identifier
  * @method getDefaultIdentifier
  * @memberof Presentation.Mediator
  * @returns {string} Returns the default identifier
  */
  get defaultIdentifier() {
    return this._defaultIdentifier;
  };
};

export default Mediator;
