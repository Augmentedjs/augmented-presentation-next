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
import PaginatedCollection from "./collection/paginated.js";
import LocalStorageCollection from "./collection/localStorageCollection.js";

import Colleague from "./view/pubsub/colleague.js";
import Mediator from "./view/pubsub/mediator.js";

import DecoratorView from "./view/decorator/decorator.js";

// Components
import NotificationCenter from "./view/component/notification/notification.js";
import Manager from "./view/component/manager/manager.js";
import Header from "./view/component/header/header.js";
import Footer from "./view/component/footer/footer.js";

import Card from "./view/component/card/card.js";
import Article from "./view/component/article/article.js";
import AbstractToolbar from "./view/component/toolbar/abstractToolbar.js";
import Toolbar from "./view/component/toolbar/toolbar.js";
import HamburgerMenu from "./view/component/menu/hamburgerMenu.js";
import Menu from "./view/component/menu/menu.js";
import NavigationMenu from "./view/component/menu/navigation.js";
import DialogView from "./view/component/dialog/dialog.js";
import ConfirmationDialogView from "./view/component/dialog/confirmation.js";
import AlertDialogView from "./view/component/dialog/alert.js";

import AutomaticTable from "./view/component/table/autoTable.js";
import BigDataTable from "./view/component/table/bigDataTable.js";
import EditableBigDataTable from "./view/component/table/editableBigTable.js";
import LocalStorageTable from "./view/component/table/localStorageTable.js";
import EditableLocalStorageTable from "./view/component/table/editableLocalStorageTable.js";
import EditableTable from "./view/component/table/editableTable.js";
import Spreadsheet from "./view/component/table/spreadsheet.js";

import AutomaticForm from "./view/component/form/autoForm.js";

import PAGINATION_API_TYPE from "./pagination/api.js";
import PaginationFactory from "./pagination/factory.js";

/**
 * Augmented.js Next Presentation - The Presentation Component
 *
 * @author Bob Warren
 *
 * @module Presentation
 * @version 2.0.0-alpha.45
 * @license Apache-2.0
 */
const Presentation = {};

/**
 * The standard version property
 * @constant VERSION
 */
Presentation.VERSION = "2.0.0-alpha.45";

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
Presentation.AbstractView = AbstractView;
Presentation.View = View;

Presentation.Colleague = Colleague;
Presentation.Mediator = Mediator;
Presentation.DecoratorView = DecoratorView;

/**
 * Component - Large UI Components
 * @namespace Presentation.Component
 * @memberof Presentation
 */

Presentation.Component = {};
Presentation.Component.AbstractToolbar = AbstractToolbar;
Presentation.Component.Toolbar = Toolbar;
Presentation.Component.HamburgerMenu = HamburgerMenu;
Presentation.Component.Menu = Menu;
Presentation.Component.NavigationMenu = NavigationMenu;
Presentation.Component.DialogView = DialogView;
Presentation.Component.ConfirmationDialogView = ConfirmationDialogView;
Presentation.Component.AlertDialogView = AlertDialogView;

Presentation.Component.AutomaticTable = AutomaticTable;
Presentation.Component.BigDataTable = BigDataTable;
Presentation.Component.EditableLocalStorageTable = EditableLocalStorageTable;
Presentation.Component.EditableTable = EditableTable;
Presentation.Component.EditableBigDataTable = EditableBigDataTable;
Presentation.Component.Spreadsheet = Spreadsheet;
Presentation.Component.LocalStorageTable = LocalStorageTable;

Presentation.Component.AutomaticForm = AutomaticForm;
Presentation.Component.Header = Header;
Presentation.Component.Fotter = Footer;
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
 * @memberof Presentation
 */
Presentation.Pagination = {};
Presentation.Pagination.PAGINATION_API_TYPE = PAGINATION_API_TYPE;
Presentation.Pagination.PaginationFactory = PaginationFactory;

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
