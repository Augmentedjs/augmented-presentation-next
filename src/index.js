import Augmented from "augmentedjs-next";

import { Widget } from "presentation-widget";
import { View } from "presentation-view";
import { AutomaticTable, BigDataTable, EditableBigDataTable, EditableLocalStorageTable, EditableTable,
  LocalStorageTable, Spreadsheet } from "presentation-table";
import { LocalStorage, LocalStorageFactory, NamespacedLocalStorage } from "presentation-storage";
import { Router, History, serialize } from "presentation-router";
import { ViewController, ManagedController } from "presentation-controller";
import { Configuration, DATA_TYPE, HEADERS, METHOD_MAP, request, sync } from "presentation-request";
import { PaginationFactory, Model, Collection, LocalStorageCollection, PaginatedCollection, PAGINATION_API_TYPE } from "presentation-models";
import { Mediator, Colleague } from "presentation-mediator";
import { ColorConsoleLogger, RestLogger } from "presentation-logger";
import { AutomaticForm, formCompile } from "presentation-form";
import Dom from "presentation-dom";
import { Article, Card, DialogView, ConfirmationDialogView, AlertDialogView, Footer, Header,
Manager, HamburgerMenu, Menu, NavigationMenu, NotificationCenter, Notification,
Splash, Toolbar, Iconbar } from "presentation-components";
import { Application } from "presentation-application";
import { DirectiveView, DecoratorView } from "presentation-decorator";

/**
 * Augmented.js Next Presentation - The Presentation Component
 *
 * @author Bob Warren
 *
 * @module Presentation
 * @license Apache-2.0
 */
const Presentation = {};

/**
 * The standard version property
 * @constant VERSION
 */
Presentation.VERSION = VERSION;

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
Presentation.PaginatedCollection = PaginatedCollection;

Presentation.ViewController = ViewController;
Presentation.ManagedController = ManagedController;
//Presentation.AbstractView = AbstractView;
Presentation.View = View;

Presentation.Colleague = Colleague;
Presentation.Mediator = Mediator;

Presentation.DecoratorView = DecoratorView;
Presentation.DirectiveView = DirectiveView;

Presentation.Utilities = {};
Presentation.Utilities.serialize = serialize;

/**
 * Component - Large UI Components
 * @namespace Component
 */

Presentation.Component = {};
//Presentation.Component.AbstractToolbar = AbstractToolbar;
Presentation.Component.Toolbar = Toolbar;
Presentation.Component.HamburgerMenu = HamburgerMenu;
Presentation.Component.Menu = Menu;
Presentation.Component.NavigationMenu = NavigationMenu;
Presentation.Component.DialogView = DialogView;
Presentation.Component.ConfirmationDialogView = ConfirmationDialogView;
Presentation.Component.AlertDialogView = AlertDialogView;
Presentation.Component.Splash = Splash;
Presentation.Component.Notification = Notification;

Presentation.Component.AutomaticTable = AutomaticTable;
Presentation.Component.BigDataTable = BigDataTable;
Presentation.Component.EditableLocalStorageTable = EditableLocalStorageTable;
Presentation.Component.EditableTable = EditableTable;
Presentation.Component.EditableBigDataTable = EditableBigDataTable;
Presentation.Component.Spreadsheet = Spreadsheet;
Presentation.Component.LocalStorageTable = LocalStorageTable;

Presentation.Component.AutomaticForm = AutomaticForm;
Presentation.Component.Header = Header;
Presentation.Component.Footer = Footer;
Presentation.Component.Card = Card;
Presentation.Component.Article = Article;
Presentation.Component.Manager = Manager;
Presentation.Component.NotificationCenter = NotificationCenter;

Presentation.sync = sync;
Presentation.request = request;
Presentation.Request = {};
Presentation.Request.Configuration = Configuration;

/**
 * @namespace Pagination
 */
Presentation.Pagination = {};
Presentation.Pagination.PAGINATION_API_TYPE = PAGINATION_API_TYPE;
Presentation.Pagination.PaginationFactory = PaginationFactory;

Presentation.RESTLogger = RestLogger;
Presentation.ColorConsoleLogger = ColorConsoleLogger;

/**
 * Augmented jQuery-like selectors usinge native selectors</br/>
 * Will return a nodelist for all selections unless only one is found.
 * @method $
 * @borrows Dom.query
 * @example
 * $("#myElement");
 * $("section#main header");
 * - or start from Element:
 * $("header", mainSectionEl);
 */
Presentation.$ = Dom.query;

Augmented.Presentation = Presentation;

//export default Presentation;

// for webpack default on the browser
module.exports = Augmented;
