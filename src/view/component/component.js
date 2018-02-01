import View from "../view.js";
import Mediator from "../pubsub/mediator.js";

/**
 * Component - Large UI Components
 * @namespace Presentation.Component
 * @memberof Presentation
 */

/**
 * A Notfication Center Component
 * @constructor Presentation.Component.NotificationCenter
 * @memberof Presentation.Component
 * @extends Presentation.View
 */
export class NotificationCenter extends View {
  constructor(options) {
    super(options);
  };
};

/**
 * A Component Manager
 * @constructor Presentation.Component.Header
 * @memberof Presentation.Component
 * @extends Presentation.Mediator
 */
export class Manager extends Mediator {
  constructor(options) {
    super(options);
  };
  manageComponent(component) {
    return this.observeColleagueAndTrigger(component, component.name, component.name);
  };
  unmanageComponent(component) {
    return this.dismissColleagueTrigger(component, component.name, component.name);
  };
};
