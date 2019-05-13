(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("augmentedjs-next"), require("presentation-application"), require("presentation-components"), require("presentation-controller"), require("presentation-decorator"), require("presentation-dom"), require("presentation-form"), require("presentation-logger"), require("presentation-mediator"), require("presentation-models"), require("presentation-request"), require("presentation-router"), require("presentation-storage"), require("presentation-table"), require("presentation-view"), require("presentation-widget"));
	else if(typeof define === 'function' && define.amd)
		define("augmented-next-presentation", ["augmentedjs-next", "presentation-application", "presentation-components", "presentation-controller", "presentation-decorator", "presentation-dom", "presentation-form", "presentation-logger", "presentation-mediator", "presentation-models", "presentation-request", "presentation-router", "presentation-storage", "presentation-table", "presentation-view", "presentation-widget"], factory);
	else if(typeof exports === 'object')
		exports["augmented-next-presentation"] = factory(require("augmentedjs-next"), require("presentation-application"), require("presentation-components"), require("presentation-controller"), require("presentation-decorator"), require("presentation-dom"), require("presentation-form"), require("presentation-logger"), require("presentation-mediator"), require("presentation-models"), require("presentation-request"), require("presentation-router"), require("presentation-storage"), require("presentation-table"), require("presentation-view"), require("presentation-widget"));
	else
		root["augmented-next-presentation"] = factory(root["augmentedjs-next"], root["presentation-application"], root["presentation-components"], root["presentation-controller"], root["presentation-decorator"], root["presentation-dom"], root["presentation-form"], root["presentation-logger"], root["presentation-mediator"], root["presentation-models"], root["presentation-request"], root["presentation-router"], root["presentation-storage"], root["presentation-table"], root["presentation-view"], root["presentation-widget"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_augmentedjs_next__, __WEBPACK_EXTERNAL_MODULE_presentation_application__, __WEBPACK_EXTERNAL_MODULE_presentation_components__, __WEBPACK_EXTERNAL_MODULE_presentation_controller__, __WEBPACK_EXTERNAL_MODULE_presentation_decorator__, __WEBPACK_EXTERNAL_MODULE_presentation_dom__, __WEBPACK_EXTERNAL_MODULE_presentation_form__, __WEBPACK_EXTERNAL_MODULE_presentation_logger__, __WEBPACK_EXTERNAL_MODULE_presentation_mediator__, __WEBPACK_EXTERNAL_MODULE_presentation_models__, __WEBPACK_EXTERNAL_MODULE_presentation_request__, __WEBPACK_EXTERNAL_MODULE_presentation_router__, __WEBPACK_EXTERNAL_MODULE_presentation_storage__, __WEBPACK_EXTERNAL_MODULE_presentation_table__, __WEBPACK_EXTERNAL_MODULE_presentation_view__, __WEBPACK_EXTERNAL_MODULE_presentation_widget__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var augmentedjs_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! augmentedjs-next */ "augmentedjs-next");
/* harmony import */ var augmentedjs_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(augmentedjs_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var presentation_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! presentation-widget */ "presentation-widget");
/* harmony import */ var presentation_widget__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(presentation_widget__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var presentation_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! presentation-view */ "presentation-view");
/* harmony import */ var presentation_view__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(presentation_view__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var presentation_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! presentation-table */ "presentation-table");
/* harmony import */ var presentation_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(presentation_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var presentation_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! presentation-storage */ "presentation-storage");
/* harmony import */ var presentation_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(presentation_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var presentation_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! presentation-router */ "presentation-router");
/* harmony import */ var presentation_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(presentation_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var presentation_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! presentation-controller */ "presentation-controller");
/* harmony import */ var presentation_controller__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(presentation_controller__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var presentation_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! presentation-request */ "presentation-request");
/* harmony import */ var presentation_request__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(presentation_request__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var presentation_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! presentation-models */ "presentation-models");
/* harmony import */ var presentation_models__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(presentation_models__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var presentation_mediator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! presentation-mediator */ "presentation-mediator");
/* harmony import */ var presentation_mediator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(presentation_mediator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var presentation_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! presentation-logger */ "presentation-logger");
/* harmony import */ var presentation_logger__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(presentation_logger__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var presentation_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! presentation-form */ "presentation-form");
/* harmony import */ var presentation_form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(presentation_form__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var presentation_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! presentation-dom */ "presentation-dom");
/* harmony import */ var presentation_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(presentation_dom__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var presentation_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! presentation-components */ "presentation-components");
/* harmony import */ var presentation_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(presentation_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var presentation_application__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! presentation-application */ "presentation-application");
/* harmony import */ var presentation_application__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(presentation_application__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var presentation_decorator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! presentation-decorator */ "presentation-decorator");
/* harmony import */ var presentation_decorator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(presentation_decorator__WEBPACK_IMPORTED_MODULE_15__);
















/**
 * Augmented.js Next Presentation - The Presentation Component
 *
 * @author Bob Warren
 *
 * @module Presentation
 * @license Apache-2.0
 */

var Presentation = {};
/**
 * The standard version property
 * @constant VERSION
 */

Presentation.VERSION = "2.6.2";
Presentation.History = presentation_router__WEBPACK_IMPORTED_MODULE_5__["History"];
Presentation.Router = presentation_router__WEBPACK_IMPORTED_MODULE_5__["Router"];
Presentation.Widget = presentation_widget__WEBPACK_IMPORTED_MODULE_1__["Widget"];
Presentation.Dom = presentation_dom__WEBPACK_IMPORTED_MODULE_12___default.a;
Presentation.Application = presentation_application__WEBPACK_IMPORTED_MODULE_14__["Application"];
Presentation.LocalStorageFactory = presentation_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageFactory"];
Presentation.NamespacedLocalStorage = presentation_storage__WEBPACK_IMPORTED_MODULE_4__["NamespacedLocalStorage"];
Presentation.LocalStorage = presentation_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"];
Presentation.Model = presentation_models__WEBPACK_IMPORTED_MODULE_8__["Model"];
Presentation.Collection = presentation_models__WEBPACK_IMPORTED_MODULE_8__["Collection"];
Presentation.LocalStorageCollection = presentation_models__WEBPACK_IMPORTED_MODULE_8__["LocalStorageCollection"];
Presentation.PaginatedCollection = presentation_models__WEBPACK_IMPORTED_MODULE_8__["PaginatedCollection"];
Presentation.ViewController = presentation_controller__WEBPACK_IMPORTED_MODULE_6__["ViewController"];
Presentation.ManagedController = presentation_controller__WEBPACK_IMPORTED_MODULE_6__["ManagedController"]; //Presentation.AbstractView = AbstractView;

Presentation.View = presentation_view__WEBPACK_IMPORTED_MODULE_2__["View"];
Presentation.Colleague = presentation_mediator__WEBPACK_IMPORTED_MODULE_9__["Colleague"];
Presentation.Mediator = presentation_mediator__WEBPACK_IMPORTED_MODULE_9__["Mediator"];
Presentation.DecoratorView = presentation_decorator__WEBPACK_IMPORTED_MODULE_15__["DecoratorView"];
Presentation.DirectiveView = presentation_decorator__WEBPACK_IMPORTED_MODULE_15__["DirectiveView"];
Presentation.Utilities = {};
Presentation.Utilities.serialize = presentation_router__WEBPACK_IMPORTED_MODULE_5__["serialize"];
/**
 * Component - Large UI Components
 * @namespace Component
 */

Presentation.Component = {}; //Presentation.Component.AbstractToolbar = AbstractToolbar;

Presentation.Component.Toolbar = presentation_components__WEBPACK_IMPORTED_MODULE_13__["Toolbar"];
Presentation.Component.HamburgerMenu = presentation_components__WEBPACK_IMPORTED_MODULE_13__["HamburgerMenu"];
Presentation.Component.Menu = presentation_components__WEBPACK_IMPORTED_MODULE_13__["Menu"];
Presentation.Component.NavigationMenu = presentation_components__WEBPACK_IMPORTED_MODULE_13__["NavigationMenu"];
Presentation.Component.DialogView = presentation_components__WEBPACK_IMPORTED_MODULE_13__["DialogView"];
Presentation.Component.ConfirmationDialogView = presentation_components__WEBPACK_IMPORTED_MODULE_13__["ConfirmationDialogView"];
Presentation.Component.AlertDialogView = presentation_components__WEBPACK_IMPORTED_MODULE_13__["AlertDialogView"];
Presentation.Component.Splash = presentation_components__WEBPACK_IMPORTED_MODULE_13__["Splash"];
Presentation.Component.Notification = presentation_components__WEBPACK_IMPORTED_MODULE_13__["Notification"];
Presentation.Component.AutomaticTable = presentation_table__WEBPACK_IMPORTED_MODULE_3__["AutomaticTable"];
Presentation.Component.BigDataTable = presentation_table__WEBPACK_IMPORTED_MODULE_3__["BigDataTable"];
Presentation.Component.EditableLocalStorageTable = presentation_table__WEBPACK_IMPORTED_MODULE_3__["EditableLocalStorageTable"];
Presentation.Component.EditableTable = presentation_table__WEBPACK_IMPORTED_MODULE_3__["EditableTable"];
Presentation.Component.EditableBigDataTable = presentation_table__WEBPACK_IMPORTED_MODULE_3__["EditableBigDataTable"];
Presentation.Component.Spreadsheet = presentation_table__WEBPACK_IMPORTED_MODULE_3__["Spreadsheet"];
Presentation.Component.LocalStorageTable = presentation_table__WEBPACK_IMPORTED_MODULE_3__["LocalStorageTable"];
Presentation.Component.AutomaticForm = presentation_form__WEBPACK_IMPORTED_MODULE_11__["AutomaticForm"];
Presentation.Component.Header = presentation_components__WEBPACK_IMPORTED_MODULE_13__["Header"];
Presentation.Component.Footer = presentation_components__WEBPACK_IMPORTED_MODULE_13__["Footer"];
Presentation.Component.Card = presentation_components__WEBPACK_IMPORTED_MODULE_13__["Card"];
Presentation.Component.Article = presentation_components__WEBPACK_IMPORTED_MODULE_13__["Article"];
Presentation.Component.Manager = presentation_components__WEBPACK_IMPORTED_MODULE_13__["Manager"];
Presentation.Component.NotificationCenter = presentation_components__WEBPACK_IMPORTED_MODULE_13__["NotificationCenter"];
Presentation.sync = presentation_request__WEBPACK_IMPORTED_MODULE_7__["sync"];
Presentation.request = presentation_request__WEBPACK_IMPORTED_MODULE_7__["request"];
Presentation.Request = {};
Presentation.Request.Configuration = presentation_request__WEBPACK_IMPORTED_MODULE_7__["Configuration"];
/**
 * @namespace Pagination
 */

Presentation.Pagination = {};
Presentation.Pagination.PAGINATION_API_TYPE = presentation_models__WEBPACK_IMPORTED_MODULE_8__["PAGINATION_API_TYPE"];
Presentation.Pagination.PaginationFactory = presentation_models__WEBPACK_IMPORTED_MODULE_8__["PaginationFactory"];
Presentation.RESTLogger = presentation_logger__WEBPACK_IMPORTED_MODULE_10__["RestLogger"];
Presentation.ColorConsoleLogger = presentation_logger__WEBPACK_IMPORTED_MODULE_10__["ColorConsoleLogger"];
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

Presentation.$ = presentation_dom__WEBPACK_IMPORTED_MODULE_12___default.a.query;
augmentedjs_next__WEBPACK_IMPORTED_MODULE_0___default.a.Presentation = Presentation; //export default Presentation;
// for webpack default on the browser

module.exports = augmentedjs_next__WEBPACK_IMPORTED_MODULE_0___default.a;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "augmentedjs-next":
/*!**********************************************************************************************************************************!*\
  !*** external {"commonjs":"augmentedjs-next","commonjs2":"augmentedjs-next","amd":"augmentedjs-next","root":"augmentedjs-next"} ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_augmentedjs_next__;

/***/ }),

/***/ "presentation-application":
/*!******************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-application","commonjs2":"presentation-application","amd":"presentation-application","root":"presentation-application"} ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_application__;

/***/ }),

/***/ "presentation-components":
/*!**************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-components","commonjs2":"presentation-components","amd":"presentation-components","root":"presentation-components"} ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_components__;

/***/ }),

/***/ "presentation-controller":
/*!**************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-controller","commonjs2":"presentation-controller","amd":"presentation-controller","root":"presentation-controller"} ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_controller__;

/***/ }),

/***/ "presentation-decorator":
/*!**********************************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-decorator","commonjs2":"presentation-decorator","amd":"presentation-decorator","root":"presentation-decorator"} ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_decorator__;

/***/ }),

/***/ "presentation-dom":
/*!**********************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-dom","commonjs2":"presentation-dom","amd":"presentation-dom","root":"presentation-dom"} ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_dom__;

/***/ }),

/***/ "presentation-form":
/*!**************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-form","commonjs2":"presentation-form","amd":"presentation-form","root":"presentation-form"} ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_form__;

/***/ }),

/***/ "presentation-logger":
/*!**********************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-logger","commonjs2":"presentation-logger","amd":"presentation-logger","root":"presentation-logger"} ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_logger__;

/***/ }),

/***/ "presentation-mediator":
/*!******************************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-mediator","commonjs2":"presentation-mediator","amd":"presentation-mediator","root":"presentation-mediator"} ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_mediator__;

/***/ }),

/***/ "presentation-models":
/*!**********************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-models","commonjs2":"presentation-models","amd":"presentation-models","root":"presentation-models"} ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_models__;

/***/ }),

/***/ "presentation-request":
/*!**************************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-request","commonjs2":"presentation-request","amd":"presentation-request","root":"presentation-request"} ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_request__;

/***/ }),

/***/ "presentation-router":
/*!**********************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-router","commonjs2":"presentation-router","amd":"presentation-router","root":"presentation-router"} ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_router__;

/***/ }),

/***/ "presentation-storage":
/*!**************************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-storage","commonjs2":"presentation-storage","amd":"presentation-storage","root":"presentation-storage"} ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_storage__;

/***/ }),

/***/ "presentation-table":
/*!******************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-table","commonjs2":"presentation-table","amd":"presentation-table","root":"presentation-table"} ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_table__;

/***/ }),

/***/ "presentation-view":
/*!**************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-view","commonjs2":"presentation-view","amd":"presentation-view","root":"presentation-view"} ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_view__;

/***/ }),

/***/ "presentation-widget":
/*!**********************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-widget","commonjs2":"presentation-widget","amd":"presentation-widget","root":"presentation-widget"} ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_widget__;

/***/ })

/******/ });
});
//# sourceMappingURL=augmented-next-presentation.js.map