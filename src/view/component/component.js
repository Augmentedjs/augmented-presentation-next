import View from "../view.js";
import Mediator from "../pubsub/mediator.js";

/**
 * Component - Large UI Components
 * @namespace Presentation.Component
 * @memberof Presentation
 */

/**
 * A Header Component
 * @constructor Augmented.Presentation.Component.Header
 * @memberof Presentation.Component
 * @extends Presentation.View
 */
export class Header extends View {
  constructor(options) {
    super(options);
    if (options && options.title) {
      this.title = options.title;
    } else {
      this.title = "";
    }
    if (options && options.subTitle) {
      this.subTitle = options.subTitle;
    } else {
      this.subTitle = "";
    }
  };
  /**
   * A title property
   * @property title
   * @memberof Presentation.Component.Header

  /**
   * A subTitle property
   * @property subTitle
   * @memberof Presentation.Component.Header
   */
};

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
