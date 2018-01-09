import AbstractView from "./view/abstractView.js";
import View from "./view/view.js";
import History from "./history.js";
import Router from "./router.js";
import Model from "./model/model.js";
import sync from "./request/sync.js";
import request from "./request/request.js";
import Configuration from "./request/configuration.js";
import Application from "./application/application.js";
import Widget from "./widget/widget.js";
import Dom from "./dom/dom.js";
import ViewController from "./controller/viewController.js";
import LocalStorageFactory from "./storage/localStorageFactory.js";
import LocalStorage from "./storage/localStorage.js";
import NamespacedLocalStorage from "./storage/namespacedLocalStorage.js";
import Collection from "./collection/collection.js";
import LocalStorageCollection from "./collection/localStorageCollection.js";

import Colleague from "./view/pubsub/colleague.js";
import Mediator from "./view/pubsub/mediator.js";

import DecoratorView from "./view/decorator/decorator.js";

// Components
import * as Component from "./view/component/component.js";

/**
 * Augmented.js Next Presentation - The Presentation Component
 *
 * @author Bob Warren
 *
 * @module Presentation
 * @version 2.0.0-alpha.13
 * @license Apache-2.0
 */
const Presentation = {};

/**
 * The standard version property
 * @constant VERSION
 */
Presentation.VERSION = "2.0.0-alpha.13";

Presentation.History = History;
Presentation.Router = Router;

Presentation.Widget = Widget;
Presentation.Dom = Dom;

Presentation.Application = Application;

Presentation.LocalStorageFactory = LocalStorageFactory;
Presentation.NamespacedLocalStorage = NamespacedLocalStorage;
Presentation.LocalStorage = LocalStorage;

Presentation.Model = Model;

Presentation.Collection = Collection;
Presentation.LocalStorageCollection = LocalStorageCollection;

Presentation.ViewController = ViewController;
Presentation.AbstractView = AbstractView;
Presentation.View = View;

Presentation.Colleague = Colleague;
Presentation.Mediator = Mediator;
Presentation.DecoratorView = DecoratorView;

Presentation.Component = Component;

Presentation.sync = sync;
Presentation.request = request;
Presentation.Request = {};
Presentation.Request.Configuration = Configuration;

/**
 * Augmented jQuery-like selectors usinge native selectors</br/>
 * Will return a nodelist for all selections unless only one is found.
 * @method $
 * @memberof Presentation
 * @borrows Presentation.Dom.query
 * @example
 * $("#myElement");
 * $("section#main header");
 * - or start from Element:
 * $("header", mainSectionEl);
 */
Presentation.$ = Dom.query;

//export default Presentation;

// for webpack default on the browser
module.exports = Presentation;
