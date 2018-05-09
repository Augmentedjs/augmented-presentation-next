(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Augmented", [], factory);
	else if(typeof exports === 'object')
		exports["Augmented"] = factory();
	else
		root["Augmented"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/presentation.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/augmentedjs-next/dist/augmented-next.js":
/*!**************************************************************!*\
  !*** ./node_modules/augmentedjs-next/dist/augmented-next.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function () {
  return function (t) {
    var e = {};function n(r) {
      if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
    }, n.r = function (t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "/dist/", n(n.s = 63);
  }([function (t, e, n) {
    "use strict";
    var r,
        i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };r = function () {
      return this;
    }();try {
      r = r || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (r = window);
    }t.exports = r;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = {};r.OAUTH2 = Symbol("oauth2"), r.ACL = Symbol("acl"), e.default = r;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = {};r.INFO = Symbol("info"), r.DEBUG = Symbol("debug"), r.ERROR = Symbol("error"), r.WARN = Symbol("warn"), e.default = r;
  }, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function get() {
          return t.l;
        } }), Object.defineProperty(t, "id", { enumerable: !0, get: function get() {
          return t.i;
        } }), t.webpackPolyfill = 1), t;
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = function () {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }var r = 0,
          i = e.length;for (r = 1; r < i; r++) {
        var o = void 0;for (o in e[r]) {
          e[r].hasOwnProperty(o) && (e[0][o] = e[r][o]);
        }
      }return e[0];
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = 0;e.default = function (t) {
      return "{$prefix}" + ++r;
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        i = a(n(5)),
        o = a(n(30)),
        u = n(61);function a(t) {
      return t && t.__esModule ? t : { default: t };
    }var s = n(60),
        l = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e || (e = {}), this._options || (this._options = {}), Object.assign(this._options, e), e && e.events ? this._events = e.events : this._events = {}, this._listeningTo = {}, this._listenId = {}, this._listeners = {};
      }return r(t, [{ key: "initialize", value: function value() {
          return this;
        } }, { key: "trigger", value: function value(t) {
          if (this._events) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) {
              n[r - 1] = arguments[r];
            }var i = Array.isArray(n) ? n : Array.from(n);(0, u.eventsApi)(u.triggerApi, this._events, t, void 0, i);
          }return this;
        } }, { key: "once", value: function value(t, e, n) {
          var r = (0, u.eventsApi)(this._onceMap, {}, t, e, s(this.off, this));return "string" == typeof t && null == n && (e = void 0), this.on(r, e, n);
        } }, { key: "off", value: function value(t, e, n) {
          return this._events && (this._events = (0, u.eventsApi)(u.offApi, this._events, t, e, { context: n, listeners: this._listeners })), this;
        } }, { key: "stopListening", value: function value(t, e, n) {
          var r = this._listeningTo;if (r) {
            var i = t ? [t._listenId] : Object.keys(r),
                o = 0;for (o = 0; o < i.length; o++) {
              var u = r[i[o]];if (!u) break;u.obj.off(e, n, this);
            }
          }return this;
        } }, { key: "on", value: function value(t, e, n) {
          return (0, u.internalOn)(this, t, e, n);
        } }, { key: "listenTo", value: function value(t, e, n) {
          if (t) {
            var r = t._listenId || (t._listenId = (0, i.default)("l")),
                o = this._listeningTo || (this._listeningTo = {}),
                a = o[r];if (!a) {
              var s = this._listenId || (this._listenId = (0, i.default)("l"));a = o[r] = { obj: t, objId: r, id: s, listeningTo: o, count: 0 };
            }(0, u.internalOn)(t, e, n, this, a);
          }return this;
        } }, { key: "listenToOnce", value: function value(t, e, n) {
          var r = (0, u.eventsApi)(this._onceMap, {}, e, n, s(this.stopListening, this, t));return this.listenTo(t, r);
        } }, { key: "_onceMap", value: function value(t, e, n, r) {
          var i = this,
              u = arguments;if (n) {
            var a = t[e] = (0, o.default)(function () {
              r(e, a), n.apply(i, u);
            });a._callback = n;
          }return t;
        } }, { key: "options", get: function get() {
          return this._options;
        }, set: function set(t) {
          this._options = t;
        } }, { key: "events", get: function get() {
          return this._events;
        }, set: function set(t) {
          this._events = t;
        } }]), t;
    }();e.default = l;
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };Object.defineProperty(e, "__esModule", { value: !0 });var i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        o = u(n(6));u(n(1));function u(t) {
      return t && t.__esModule ? t : { default: t };
    }var a = function (t) {
      function e(t) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var n = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" !== (void 0 === e ? "undefined" : r(e)) && "function" != typeof e ? t : e;
        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));return n._type = t, n._uri = "", n;
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : r(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, o.default), i(e, [{ key: "uri", get: function get() {
          return this._uri;
        }, set: function set(t) {
          this._uri = t;
        } }, { key: "type", get: function get() {
          return this._type;
        } }]), e;
    }();e.default = a;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        i = u(n(20)),
        o = u(n(2));function u(t) {
      return t && t.__esModule ? t : { default: t };
    }var a = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.loggerLevel = e || o.default.INFO, this.label = o.default, this.TIME_SEPERATOR = ":", this.DATE_SEPERATOR = "-", this.OPEN_GROUP = " [ ", this.CLOSE_GROUP = " ] ";
      }return r(t, [{ key: "_getLogTime", value: function value() {
          var t = new Date(),
              e = "" + t.getFullYear() + this.DATE_SEPERATOR + (t.getMonth() + 1) + this.DATE_SEPERATOR + t.getDate() + " " + t.getHours() + this.TIME_SEPERATOR + t.getMinutes() + this.TIME_SEPERATOR + t.getSeconds() + this.TIME_SEPERATOR + t.getMilliseconds();return (0, i.default)("                        ", e, !1);
        } }, { key: "log", value: function value(t, e) {
          var n = "";return t && (e || (e = o.default.INFO), this.loggerLevel === o.default.DEBUG && e === o.default.DEBUG ? n = this._logMe("" + this._getLogTime() + this.OPEN_GROUP + "DEBUG" + this.CLOSE_GROUP + t, e) : e === o.default.ERROR ? n = this._logMe("" + this._getLogTime() + this.OPEN_GROUP + "ERROR" + this.CLOSE_GROUP + t, e) : e === o.default.WARN ? n = this._logMe("" + this._getLogTime() + this.OPEN_GROUP + "WARN " + this.CLOSE_GROUP + t, e) : this.loggerLevel !== o.default.DEBUG && this.loggerLevel !== o.default.INFO || (n = this._logMe("" + this._getLogTime() + this.OPEN_GROUP + "INFO " + this.CLOSE_GROUP + t, e))), n;
        } }, { key: "info", value: function value(t) {
          this.log(t, o.default.INFO);
        } }, { key: "error", value: function value(t) {
          this.log(t, o.default.ERROR);
        } }, { key: "debug", value: function value(t) {
          this.log(t, o.default.DEBUG);
        } }, { key: "warn", value: function value(t) {
          this.log(t, o.default.WARN);
        } }, { key: "_logMe", value: function value(t, e) {} }]), t;
    }();e.default = a;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = function (t) {
      return "[object Function]" == Object.prototype.toString.call(t);
    };
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };Object.defineProperty(e, "__esModule", { value: !0 });var i = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function (t) {
      return void 0 === t ? "undefined" : r(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : r(t);
    };e.default = function (t) {
      return "string" == typeof t || !!t && "object" === (void 0 === t ? "undefined" : i(t)) && "[object String]" === Object.prototype.toString.call(t);
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }();var i = { INVALID_TYPE: 0, ENUM_MISMATCH: 1, ANY_OF_MISSING: 10, ONE_OF_MISSING: 11, ONE_OF_MULTIPLE: 12, NOT_PASSED: 13, NUMBER_MULTIPLE_OF: 100, NUMBER_MINIMUM: 101, NUMBER_MINIMUM_EXCLUSIVE: 102, NUMBER_MAXIMUM: 103, NUMBER_MAXIMUM_EXCLUSIVE: 104, NUMBER_NOT_A_NUMBER: 105, STRING_LENGTH_SHORT: 200, STRING_LENGTH_LONG: 201, STRING_PATTERN: 202, OBJECT_PROPERTIES_MINIMUM: 300, OBJECT_PROPERTIES_MAXIMUM: 301, OBJECT_REQUIRED: 302, OBJECT_ADDITIONAL_PROPERTIES: 303, OBJECT_DEPENDENCY_KEY: 304, ARRAY_LENGTH_SHORT: 400, ARRAY_LENGTH_LONG: 401, ARRAY_UNIQUE: 402, ARRAY_ADDITIONAL_ITEMS: 403, FORMAT_CUSTOM: 500, KEYWORD_CUSTOM: 501, CIRCULAR_REFERENCE: 600, UNKNOWN_PROPERTY: 1e3 },
        o = function () {
      function t(e, n, r, i, o, u) {
        if (function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), void 0 === e) throw new Error("No code supplied for error: " + n);this.message = n, this.params = r, this.code = e, this.dataPath = i || "", this.schemaPath = o || "", this.subErrors = u || null;var a = new Error(this.message);if (this.stack = a.stack || a.stacktrace, !this.stack) try {
          throw a;
        } catch (t) {
          this.stack = t.stack || t.stacktrace;
        }this.name = "ValidationError";
      }return r(t, [{ key: "prefixWith", value: function value(t, e) {
          if (null !== t && (t = t.replace(/~/g, "~0").replace(/\//g, "~1"), this.dataPath = "/" + t + this.dataPath), null !== e && (e = e.replace(/~/g, "~0").replace(/\//g, "~1"), this.schemaPath = "/" + e + this.schemaPath), null !== this.subErrors) {
            var n = 0,
                r = this.subErrors.length;for (n = 0; n < r; n++) {
              this.subErrors[n].prefixWith(t, e);
            }
          }return this;
        } }]), t;
    }(),
        u = {},
        a = void 0;for (a in i) {
      u[i[a]] = a;
    }e.ERROR_CODES = i, e.ERROR_MESSAGES_DEFAULT = { INVALID_TYPE: "Invalid type: {type} (expected {expected})", ENUM_MISMATCH: "No enum match for: {value}", ANY_OF_MISSING: 'Data does not match any schemas from "anyOf"', ONE_OF_MISSING: 'Data does not match any schemas from "oneOf"', ONE_OF_MULTIPLE: 'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}', NOT_PASSED: 'Data matches schema from "not"', NUMBER_MULTIPLE_OF: "Value {value} is not a multiple of {multipleOf}", NUMBER_MINIMUM: "Value {value} is less than minimum {minimum}", NUMBER_MINIMUM_EXCLUSIVE: "Value {value} is equal to exclusive minimum {minimum}", NUMBER_MAXIMUM: "Value {value} is greater than maximum {maximum}", NUMBER_MAXIMUM_EXCLUSIVE: "Value {value} is equal to exclusive maximum {maximum}", NUMBER_NOT_A_NUMBER: "Value {value} is not a valid number", STRING_LENGTH_SHORT: "String is too short ({length} chars), minimum {minimum}", STRING_LENGTH_LONG: "String is too long ({length} chars), maximum {maximum}", STRING_PATTERN: "String does not match pattern: {pattern}", OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({propertyCount}), minimum {minimum}", OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({propertyCount}), maximum {maximum}", OBJECT_REQUIRED: "Missing required property: {key}", OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed", OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {missing} (due to key: {key})", ARRAY_LENGTH_SHORT: "Array is too short ({length}), minimum {minimum}", ARRAY_LENGTH_LONG: "Array is too long ({length}), maximum {maximum}", ARRAY_UNIQUE: "Array items are not unique (indices {match1} and {match2})", ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed", FORMAT_CUSTOM: "Format validation failed ({message})", KEYWORD_CUSTOM: "Keyword failed: {key} ({message})", CIRCULAR_REFERENCE: "Circular $refs: {urls}", UNKNOWN_PROPERTY: "Unknown property (not in schema)" }, e.ValidationError = o, e.ErrorCodeLookup = u;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        i = a(n(26)),
        o = a(n(59)),
        u = n(11);function a(t) {
      return t && t.__esModule ? t : { default: t };
    }var s = function () {
      function t() {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this._myValidator = (0, o.default)(), this._myValidator && this._myValidator.addLanguage("en-us", u.ERROR_MESSAGES_DEFAULT);
      }return r(t, [{ key: "supportsValidation", value: function value() {
          return null !== this._myValidator;
        } }, { key: "registerSchema", value: function value(t, e) {
          return this._myValidator.addSchema(t, e);
        } }, { key: "getSchema", value: function value(t) {
          return this._myValidator.getSchema(t);
        } }, { key: "getSchemas", value: function value() {
          return this._myValidator.getSchemaMap();
        } }, { key: "clearSchemas", value: function value() {
          this._myValidator.dropSchemas();
        } }, { key: "validate", value: function value(t, e) {
          return this._myValidator.validateMultiple(t, e);
        } }, { key: "getValidationMessages", value: function value() {
          return this._myValidator.error;
        } }, { key: "generateSchema", value: function value(t) {
          var e = t;return (0, i.default)(e);
        } }]), t;
    }();e.default = s;
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };Object.defineProperty(e, "__esModule", { value: !0 });var i = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function (t) {
      return void 0 === t ? "undefined" : r(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : r(t);
    };e.default = function (t) {
      var e = void 0 === t ? "undefined" : i(t);return "function" === e || "object" === e && !!t;
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }();var i = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e && e.id ? this._id = e.id : this._id = 0, e && e.email ? this._email = e.email : this._email = "", e && e.login ? this._login = e.login : this._login = "", e && e.fullName ? this._fullName = e.fullName : this._fullName = "";
      }return r(t, [{ key: "fullName", get: function get() {
          return this._fullName;
        }, set: function set(t) {
          this._fullName = t;
        } }, { key: "id", get: function get() {
          return this._id;
        }, set: function set(t) {
          this._id = t;
        } }, { key: "login", get: function get() {
          return this._login;
        }, set: function set(t) {
          this._login = t;
        } }, { key: "email", get: function get() {
          return this._email;
        }, set: function set(t) {
          this._email = t;
        } }]), t;
    }();e.default = i;
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };Object.defineProperty(e, "__esModule", { value: !0 });var i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        o = a(n(7)),
        u = a(n(1));function a(t) {
      return t && t.__esModule ? t : { default: t };
    }var s = function (t) {
      function e() {
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e), function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" !== (void 0 === e ? "undefined" : r(e)) && "function" != typeof e ? t : e;
        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, u.default.ACL));
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : r(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, o.default), i(e, [{ key: "authenticate", value: function value(t, e) {
          return null;
        } }]), e;
    }();e.default = s;
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };Object.defineProperty(e, "__esModule", { value: !0 });var i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        o = a(n(7)),
        u = a(n(1));function a(t) {
      return t && t.__esModule ? t : { default: t };
    }var s = function (t) {
      function e() {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var t = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" !== (void 0 === e ? "undefined" : r(e)) && "function" != typeof e ? t : e;
        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, u.default.OAUTH2));return t.accessToken = "", t.authorizationToken = "", t;
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : r(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, o.default), i(e, [{ key: "authorize", value: function value(t) {
          this.authorizationToken = "";
        } }, { key: "access", value: function value(t) {
          this.accessToken = "";
        } }]), e;
    }();e.default = s;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = {};r.CONSOLE = Symbol("console"), r.COLOR_CONSOLE = Symbol("colorConsole"), e.default = r;
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };Object.defineProperty(e, "__esModule", { value: !0 });var i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        o = a(n(8)),
        u = a(n(2));function a(t) {
      return t && t.__esModule ? t : { default: t };
    }var s = function (t) {
      function e(t) {
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e), function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" !== (void 0 === e ? "undefined" : r(e)) && "function" != typeof e ? t : e;
        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : r(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, o.default), i(e, [{ key: "_logMe", value: function value(t, e) {
          e === u.default.INFO ? console.info("[36m" + t + "[0m") : e === u.default.ERROR ? console.error("[31m" + t + "[0m") : e === u.default.DEBUG ? console.log("[34m" + t + "[0m") : e === u.default.WARN ? console.warn("[33m" + t + "[0m") : console.log("[37m" + t + "[0m");
        } }]), e;
    }();e.default = s;
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };Object.defineProperty(e, "__esModule", { value: !0 });var i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        o = a(n(8)),
        u = a(n(2));function a(t) {
      return t && t.__esModule ? t : { default: t };
    }var s = function (t) {
      function e(t) {
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e), function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" !== (void 0 === e ? "undefined" : r(e)) && "function" != typeof e ? t : e;
        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : r(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, o.default), i(e, [{ key: "_logMe", value: function value(t, e) {
          return e === u.default.INFO ? console.info(t) : e === u.default.ERROR ? console.error(t) : e === u.default.DEBUG ? console.log(t) : e === u.default.WARN ? console.warn(t) : console.log(t), t;
        } }]), e;
    }();e.default = s;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = function (t, e, n) {
      return void 0 === e ? t : n ? "" + t + e : "" + e + t;
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = { LoggerLevel: "error", MessageBundle: "Messages", AsynchronousQueueTimeout: 2e3, ApplicationInitProcessTimeout: 1e3 };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = function (t, e, n) {
      n = Math.min(Math.max(n, 0), t.length);var r = Array(t.length - n),
          i = e.length,
          o = void 0;for (o = 0; o < r.length; o++) {
        r[o] = t[o + n];
      }for (o = 0; o < i; o++) {
        t[o + n] = e[o];
      }for (o = 0; o < r.length; o++) {
        t[o + i + n] = r[o];
      }
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = function (t, e) {
      return !!Array.isArray(t) && t.some(e);
    };
  }, function (t, e, n) {
    "use strict";
    (function (t, n) {
      var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          i = 200,
          o = "__lodash_hash_undefined__",
          u = 9007199254740991,
          a = "[object Arguments]",
          s = "[object Boolean]",
          l = "[object Date]",
          c = "[object Function]",
          f = "[object GeneratorFunction]",
          h = "[object Map]",
          d = "[object Number]",
          v = "[object Object]",
          y = "[object RegExp]",
          p = "[object Set]",
          _ = "[object String]",
          b = "[object Symbol]",
          m = "[object ArrayBuffer]",
          g = "[object DataView]",
          O = "[object Float32Array]",
          E = "[object Float64Array]",
          S = "[object Int8Array]",
          k = "[object Int16Array]",
          j = "[object Int32Array]",
          w = "[object Uint8Array]",
          R = "[object Uint8ClampedArray]",
          A = "[object Uint16Array]",
          P = "[object Uint32Array]",
          M = /\w*$/,
          T = /^\[object .+?Constructor\]$/,
          I = /^(?:0|[1-9]\d*)$/,
          N = {};N[a] = N["[object Array]"] = N[m] = N[g] = N[s] = N[l] = N[O] = N[E] = N[S] = N[k] = N[j] = N[h] = N[d] = N[v] = N[y] = N[p] = N[_] = N[b] = N[w] = N[R] = N[A] = N[P] = !0, N["[object Error]"] = N[c] = N["[object WeakMap]"] = !1;var x = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
          U = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
          C = x || U || Function("return this")(),
          L = "object" == r(e) && e && !e.nodeType && e,
          D = L && "object" == r(n) && n && !n.nodeType && n,
          F = D && D.exports === L;function B(t, e) {
        return t.set(e[0], e[1]), t;
      }function $(t, e) {
        return t.add(e), t;
      }function G(t, e, n, r) {
        var i = -1,
            o = t ? t.length : 0;for (r && o && (n = t[++i]); ++i < o;) {
          n = e(n, t[i], i, t);
        }return n;
      }function z(t) {
        var e = !1;if (null != t && "function" != typeof t.toString) try {
          e = !!(t + "");
        } catch (t) {}return e;
      }function V(t) {
        var e = -1,
            n = Array(t.size);return t.forEach(function (t, r) {
          n[++e] = [r, t];
        }), n;
      }function W(t, e) {
        return function (n) {
          return t(e(n));
        };
      }function K(t) {
        var e = -1,
            n = Array(t.size);return t.forEach(function (t) {
          n[++e] = t;
        }), n;
      }var J,
          Y = Array.prototype,
          q = Function.prototype,
          H = Object.prototype,
          X = C["__core-js_shared__"],
          Q = (J = /[^.]+$/.exec(X && X.keys && X.keys.IE_PROTO || "")) ? "Symbol(src)_1." + J : "",
          Z = q.toString,
          tt = H.hasOwnProperty,
          et = H.toString,
          nt = RegExp("^" + Z.call(tt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          rt = F ? C.Buffer : void 0,
          it = C.Symbol,
          ot = C.Uint8Array,
          ut = W(Object.getPrototypeOf, Object),
          at = Object.create,
          st = H.propertyIsEnumerable,
          lt = Y.splice,
          ct = Object.getOwnPropertySymbols,
          ft = rt ? rt.isBuffer : void 0,
          ht = W(Object.keys, Object),
          dt = Dt(C, "DataView"),
          vt = Dt(C, "Map"),
          yt = Dt(C, "Promise"),
          pt = Dt(C, "Set"),
          _t = Dt(C, "WeakMap"),
          bt = Dt(Object, "create"),
          mt = zt(dt),
          gt = zt(vt),
          Ot = zt(yt),
          Et = zt(pt),
          St = zt(_t),
          kt = it ? it.prototype : void 0,
          jt = kt ? kt.valueOf : void 0;function wt(t) {
        var e = -1,
            n = t ? t.length : 0;for (this.clear(); ++e < n;) {
          var r = t[e];this.set(r[0], r[1]);
        }
      }function Rt(t) {
        var e = -1,
            n = t ? t.length : 0;for (this.clear(); ++e < n;) {
          var r = t[e];this.set(r[0], r[1]);
        }
      }function At(t) {
        var e = -1,
            n = t ? t.length : 0;for (this.clear(); ++e < n;) {
          var r = t[e];this.set(r[0], r[1]);
        }
      }function Pt(t) {
        this.__data__ = new Rt(t);
      }function Mt(t, e) {
        var n = Wt(t) || function (t) {
          return function (t) {
            return function (t) {
              return !!t && "object" == (void 0 === t ? "undefined" : r(t));
            }(t) && Kt(t);
          }(t) && tt.call(t, "callee") && (!st.call(t, "callee") || et.call(t) == a);
        }(t) ? function (t, e) {
          for (var n = -1, r = Array(t); ++n < t;) {
            r[n] = e(n);
          }return r;
        }(t.length, String) : [],
            i = n.length,
            o = !!i;for (var u in t) {
          !e && !tt.call(t, u) || o && ("length" == u || $t(u, i)) || n.push(u);
        }return n;
      }function Tt(t, e, n) {
        var r = t[e];tt.call(t, e) && Vt(r, n) && (void 0 !== n || e in t) || (t[e] = n);
      }function It(t, e) {
        for (var n = t.length; n--;) {
          if (Vt(t[n][0], e)) return n;
        }return -1;
      }function Nt(t, e, n, r, i, o, u) {
        var T;if (r && (T = o ? r(t, i, o, u) : r(t)), void 0 !== T) return T;if (!qt(t)) return t;var I = Wt(t);if (I) {
          if (T = function (t) {
            var e = t.length,
                n = t.constructor(e);e && "string" == typeof t[0] && tt.call(t, "index") && (n.index = t.index, n.input = t.input);return n;
          }(t), !e) return function (t, e) {
            var n = -1,
                r = t.length;e || (e = Array(r));for (; ++n < r;) {
              e[n] = t[n];
            }return e;
          }(t, T);
        } else {
          var x = Bt(t),
              U = x == c || x == f;if (Jt(t)) return function (t, e) {
            if (e) return t.slice();var n = new t.constructor(t.length);return t.copy(n), n;
          }(t, e);if (x == v || x == a || U && !o) {
            if (z(t)) return o ? t : {};if (T = function (t) {
              return "function" != typeof t.constructor || Gt(t) ? {} : (e = ut(t), qt(e) ? at(e) : {});var e;
            }(U ? {} : t), !e) return function (t, e) {
              return Ct(t, Ft(t), e);
            }(t, function (t, e) {
              return t && Ct(e, Ht(e), t);
            }(T, t));
          } else {
            if (!N[x]) return o ? t : {};T = function (t, e, n, r) {
              var i = t.constructor;switch (e) {case m:
                  return Ut(t);case s:case l:
                  return new i(+t);case g:
                  return function (t, e) {
                    var n = e ? Ut(t.buffer) : t.buffer;return new t.constructor(n, t.byteOffset, t.byteLength);
                  }(t, r);case O:case E:case S:case k:case j:case w:case R:case A:case P:
                  return function (t, e) {
                    var n = e ? Ut(t.buffer) : t.buffer;return new t.constructor(n, t.byteOffset, t.length);
                  }(t, r);case h:
                  return function (t, e, n) {
                    return G(e ? n(V(t), !0) : V(t), B, new t.constructor());
                  }(t, r, n);case d:case _:
                  return new i(t);case y:
                  return (a = new (u = t).constructor(u.source, M.exec(u))).lastIndex = u.lastIndex, a;case p:
                  return function (t, e, n) {
                    return G(e ? n(K(t), !0) : K(t), $, new t.constructor());
                  }(t, r, n);case b:
                  return o = t, jt ? Object(jt.call(o)) : {};}var o;var u, a;
            }(t, x, Nt, e);
          }
        }u || (u = new Pt());var C = u.get(t);if (C) return C;if (u.set(t, T), !I) var L = n ? function (t) {
          return function (t, e, n) {
            var r = e(t);return Wt(t) ? r : function (t, e) {
              for (var n = -1, r = e.length, i = t.length; ++n < r;) {
                t[i + n] = e[n];
              }return t;
            }(r, n(t));
          }(t, Ht, Ft);
        }(t) : Ht(t);return function (t, e) {
          for (var n = -1, r = t ? t.length : 0; ++n < r && !1 !== e(t[n], n, t);) {}
        }(L || t, function (i, o) {
          L && (i = t[o = i]), Tt(T, o, Nt(i, e, n, r, o, t, u));
        }), T;
      }function xt(t) {
        return !(!qt(t) || Q && Q in t) && (Yt(t) || z(t) ? nt : T).test(zt(t));
      }function Ut(t) {
        var e = new t.constructor(t.byteLength);return new ot(e).set(new ot(t)), e;
      }function Ct(t, e, n, r) {
        n || (n = {});for (var i = -1, o = e.length; ++i < o;) {
          var u = e[i],
              a = r ? r(n[u], t[u], u, n, t) : void 0;Tt(n, u, void 0 === a ? t[u] : a);
        }return n;
      }function Lt(t, e) {
        var n,
            i,
            o = t.__data__;return ("string" == (i = void 0 === (n = e) ? "undefined" : r(n)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof e ? "string" : "hash"] : o.map;
      }function Dt(t, e) {
        var n = function (t, e) {
          return null == t ? void 0 : t[e];
        }(t, e);return xt(n) ? n : void 0;
      }wt.prototype.clear = function () {
        this.__data__ = bt ? bt(null) : {};
      }, wt.prototype.delete = function (t) {
        return this.has(t) && delete this.__data__[t];
      }, wt.prototype.get = function (t) {
        var e = this.__data__;if (bt) {
          var n = e[t];return n === o ? void 0 : n;
        }return tt.call(e, t) ? e[t] : void 0;
      }, wt.prototype.has = function (t) {
        var e = this.__data__;return bt ? void 0 !== e[t] : tt.call(e, t);
      }, wt.prototype.set = function (t, e) {
        return this.__data__[t] = bt && void 0 === e ? o : e, this;
      }, Rt.prototype.clear = function () {
        this.__data__ = [];
      }, Rt.prototype.delete = function (t) {
        var e = this.__data__,
            n = It(e, t);return !(n < 0 || (n == e.length - 1 ? e.pop() : lt.call(e, n, 1), 0));
      }, Rt.prototype.get = function (t) {
        var e = this.__data__,
            n = It(e, t);return n < 0 ? void 0 : e[n][1];
      }, Rt.prototype.has = function (t) {
        return It(this.__data__, t) > -1;
      }, Rt.prototype.set = function (t, e) {
        var n = this.__data__,
            r = It(n, t);return r < 0 ? n.push([t, e]) : n[r][1] = e, this;
      }, At.prototype.clear = function () {
        this.__data__ = { hash: new wt(), map: new (vt || Rt)(), string: new wt() };
      }, At.prototype.delete = function (t) {
        return Lt(this, t).delete(t);
      }, At.prototype.get = function (t) {
        return Lt(this, t).get(t);
      }, At.prototype.has = function (t) {
        return Lt(this, t).has(t);
      }, At.prototype.set = function (t, e) {
        return Lt(this, t).set(t, e), this;
      }, Pt.prototype.clear = function () {
        this.__data__ = new Rt();
      }, Pt.prototype.delete = function (t) {
        return this.__data__.delete(t);
      }, Pt.prototype.get = function (t) {
        return this.__data__.get(t);
      }, Pt.prototype.has = function (t) {
        return this.__data__.has(t);
      }, Pt.prototype.set = function (t, e) {
        var n = this.__data__;if (n instanceof Rt) {
          var r = n.__data__;if (!vt || r.length < i - 1) return r.push([t, e]), this;n = this.__data__ = new At(r);
        }return n.set(t, e), this;
      };var Ft = ct ? W(ct, Object) : function () {
        return [];
      },
          Bt = function Bt(t) {
        return et.call(t);
      };function $t(t, e) {
        return !!(e = null == e ? u : e) && ("number" == typeof t || I.test(t)) && t > -1 && t % 1 == 0 && t < e;
      }function Gt(t) {
        var e = t && t.constructor;return t === ("function" == typeof e && e.prototype || H);
      }function zt(t) {
        if (null != t) {
          try {
            return Z.call(t);
          } catch (t) {}try {
            return t + "";
          } catch (t) {}
        }return "";
      }function Vt(t, e) {
        return t === e || t != t && e != e;
      }(dt && Bt(new dt(new ArrayBuffer(1))) != g || vt && Bt(new vt()) != h || yt && "[object Promise]" != Bt(yt.resolve()) || pt && Bt(new pt()) != p || _t && "[object WeakMap]" != Bt(new _t())) && (Bt = function Bt(t) {
        var e = et.call(t),
            n = e == v ? t.constructor : void 0,
            r = n ? zt(n) : void 0;if (r) switch (r) {case mt:
            return g;case gt:
            return h;case Ot:
            return "[object Promise]";case Et:
            return p;case St:
            return "[object WeakMap]";}return e;
      });var Wt = Array.isArray;function Kt(t) {
        return null != t && function (t) {
          return "number" == typeof t && t > -1 && t % 1 == 0 && t <= u;
        }(t.length) && !Yt(t);
      }var Jt = ft || function () {
        return !1;
      };function Yt(t) {
        var e = qt(t) ? et.call(t) : "";return e == c || e == f;
      }function qt(t) {
        var e = void 0 === t ? "undefined" : r(t);return !!t && ("object" == e || "function" == e);
      }function Ht(t) {
        return Kt(t) ? Mt(t) : function (t) {
          if (!Gt(t)) return ht(t);var e = [];for (var n in Object(t)) {
            tt.call(t, n) && "constructor" != n && e.push(n);
          }return e;
        }(t);
      }n.exports = function (t) {
        return Nt(t, !1, !0);
      };
    }).call(this, n(0), n(3)(t));
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };Object.defineProperty(e, "__esModule", { value: !0 });var i = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function (t) {
      return void 0 === t ? "undefined" : r(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : r(t);
    },
        o = (e.URI_TEMPLATE_GLOBAL_MODIFIERS = { "+": !0, "#": !0, ".": !0, "/": !0, ";": !0, "?": !0, "&": !0 }, e.URI_TEMPLATE_SUFFICES = { "*": !0 }, e.parseURI = function (t) {
      var e = String(t).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return e ? { href: e[0] || "", protocol: e[1] || "", authority: e[2] || "", host: e[3] || "", hostname: e[4] || "", port: e[5] || "", pathname: e[6] || "", search: e[7] || "", hash: e[8] || "" } : null;
    }),
        u = e.removeDotSegments = function (t) {
      var e = [];return t.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function (t) {
        "/.." === t ? e.pop() : e.push(t);
      }), e.join("").replace(/^\//, "/" === t.charAt(0) ? "/" : "");
    },
        a = e.resolveUrl = function (t, e) {
      return e = o(e || ""), t = o(t || ""), e && t ? (e.protocol || t.protocol) + (e.protocol || e.authority ? e.authority : t.authority) + u(e.protocol || e.authority || "/" === e.pathname.charAt(0) ? e.pathname : e.pathname ? (t.authority && !t.pathname ? "/" : "") + t.pathname.slice(0, t.pathname.lastIndexOf("/") + 1) + e.pathname : t.pathname) + (e.protocol || e.authority || e.pathname ? e.search : e.search || t.search) + e.hash : null;
    };e.getDocumentUri = function (t) {
      return t.split("#")[0];
    }, e.isTrustedUrl = function (t, e) {
      if (e.substring(0, t.length) === t) {
        var n = e.substring(t.length);if (e.length > 0 && "/" === e.charAt(t.length - 1) || "#" === n.charAt(0) || "?" === n.charAt(0)) return !0;
      }return !1;
    }, e.normSchema = function t(e, n) {
      if (e && "object" === (void 0 === e ? "undefined" : i(e))) if (void 0 === n ? n = e.id : "string" == typeof e.id && (n = a(n, e.id), e.id = n), Array.isArray(e)) {
        var r = 0,
            o = e.length;for (r = 0; r < o; r++) {
          t(e[r], n);
        }
      } else for (var u in "string" == typeof e.$ref && (e.$ref = a(n, e.$ref)), e) {
        "enum" !== u && t(e[u], n);
      }
    };
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };Object.defineProperty(e, "__esModule", { value: !0 });var i = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function (t) {
      return void 0 === t ? "undefined" : r(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : r(t);
    },
        o = { $schema: "http://json-schema.org/draft-04/schema#", title: "model", description: "Generated Schema", type: "object", properties: {} };e.default = function (t) {
      var e = o,
          n = void 0,
          r = void 0,
          u = void 0,
          a = void 0,
          s = Object.keys(t),
          l = s.length;for (n = 0; n < l; n++) {
        for (u in r = s[n]) {
          if (r.hasOwnProperty(u)) {
            a = e.properties[r] = {};var c = i(t[r]);"object" === c ? c = Array.isArray(t[r]) ? "array" : "object" : "number" === c && (c = Number.isInteger(t[r]) ? "integer" : "number"), a.type = c, a.description = String(r);
          }
        }
      }return e;
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r,
        i = n(13),
        o = (r = i) && r.__esModule ? r : { default: r };e.default = function (t) {
      return (0, o.default)(t) ? Object.getOwnPropertyNames(t) : [];
    };
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };Object.defineProperty(e, "__esModule", { value: !0 });var i = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function (t) {
      return void 0 === t ? "undefined" : r(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : r(t);
    },
        o = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        u = c(n(6)),
        a = c(n(4)),
        s = c(n(5)),
        l = (c(n(27)), c(n(12)));function c(t) {
      return t && t.__esModule ? t : { default: t };
    }var f = n(24),
        h = n(57),
        d = n(56),
        v = n(55),
        y = n(54),
        p = n(53),
        _ = n(52),
        b = n(51),
        m = n(50),
        g = function g(t, e) {
      if (t) {
        var n = e.error;e.error = function (r) {
          n && n.call(e.context, t, r, e), t.trigger("error", t, r, e);
        };
      }
    },
        O = function (t) {
      function e(t, n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var i = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" !== (void 0 === e ? "undefined" : r(e)) && "function" != typeof e ? t : e;
        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));i.id = 0, i.idAttribute = "id", i.cidPrefix = "c", i.defaults = {}, i.validationError = null, i.urlRoot = "", i._pending = !1, i._changing = !1, i._previousAttributes = null, i._attributes = t || {}, n || (n = {}), i.schema = null, i.validationMessages = { valid: !0 }, n && n.schema && (i.schema = n.schema);for (var o = arguments.length, u = Array(o > 2 ? o - 2 : 0), l = 2; l < o; l++) {
          u[l - 2] = arguments[l];
        }i.preinitialize(u), i.cid = (0, s.default)(i.cidPrefix), n && n.collection && (i.collection = n.collection);var c = void 0;return n && n.parse && (c = i.parse(c, n) || {}), i.defaults = h(i, "defaults"), c = p((0, a.default)({}, i.defaults, c), i.defaults), i.set(c, n), i.changed = {}, i.initialize(u), i;
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : r(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, u.default), o(e, [{ key: "preinitialize", value: function value() {} }, { key: "initialize", value: function value() {} }, { key: "get", value: function value(t) {
          return this._attributes[t];
        } }, { key: "set", value: function value(t, e, n) {
          if (null === t) return this;var r = void 0;if ("object" === (void 0 === t ? "undefined" : i(t)) ? (r = t, n = e) : (r = {})[t] = e, n || (n = {}), !this._validate(r, n)) return !1;var o = n.unset,
              u = n.silent,
              a = [],
              s = this._changing;this._changing = !0, s || (this._previousAttributes = f(this._attributes), this.changed = {});var l = this._attributes,
              c = this.changed,
              h = this._previousAttributes,
              d = void 0;for (d in r) {
            e = r[d], y(l[d], e) || a.push(d), y(h[d], e) ? delete c[d] : c[d] = e, o ? delete l[d] : l[d] = e;
          }if (this.idAttribute in r && (this.id = this.get(this.idAttribute)), !u) {
            a.length && (this._pending = n);var v = 0;for (v = 0; v < a.length; v++) {
              this.trigger("change:" + a[v], this, l[a[v]], n);
            }
          }if (s) return this;if (!u) for (; this._pending;) {
            n = this._pending, this._pending = !1, this.trigger("change", this, n);
          }return this._pending = !1, this._changing = !1, this;
        } }, { key: "escape", value: function value(t) {
          return m(this.get(attr));
        } }, { key: "has", value: function value(t) {
          return null !== this.get(attr);
        } }, { key: "matches", value: function value(t) {
          return !!_(t, this)(this._attributes);
        } }, { key: "unset", value: function value(t, e) {
          return this.set(t, void 0, (0, a.default)({}, e, { unset: !0 }));
        } }, { key: "clear", value: function value(t) {
          var e = {};for (var n in this._attributes) {
            e[n] = void 0;
          }return this.set(e, (0, a.default)({}, t, { unset: !0 }));
        } }, { key: "toJSON", value: function value() {
          return f(this._attributes);
        } }, { key: "fetch", value: function value(t) {
          var e = this,
              n = (t = (0, a.default)({ parse: !0 }, t)).success;return t.success = function (r) {
            var i = t.parse ? e.parse(r, t) : r;if (!e.set(i, t)) return !1;n && n.call(t.context, e, r, t), e.trigger("sync", e, r, t);
          }, g(this, t), this.sync("read", this, t);
        } }, { key: "save", value: function value(t, e, n) {
          var r = void 0;null == t || "object" === (void 0 === t ? "undefined" : i(t)) ? (r = t, n = e) : (r = {})[t] = e;var o = (n = (0, a.default)({ validate: !0, parse: !0 }, n)).wait;if (r && !o) {
            if (!this.set(r, n)) return !1;
          } else if (!this._validate(r, n)) return !1;var u = this,
              s = n.success,
              l = this._attributes;n.success = function (t) {
            u.attributes = l;var e = n.parse ? u.parse(t, n) : t;if (o && (e = (0, a.default)({}, r, e)), e && !u.set(e, n)) return !1;s && s.call(n.context, u, t, n), u.trigger("sync", u, t, n);
          }, g(this, n), r && o && (this._attributes = (0, a.default)({}, l, r));var c = this.isNew() ? "create" : n.patch ? "patch" : "update";"patch" !== c || n.attrs || (n.attrs = r);var f = this.sync(c, this, n);return this._attributes = l, f;
        } }, { key: "destroy", value: function value(t) {
          var e = this,
              n = (t = t ? f(t) : {}).success,
              r = t.wait,
              i = function i() {
            e.stopListening(), e.trigger("destroy", e, e.collection, t);
          };t.success = function (o) {
            r && i(), n && n.call(t.context, e, o, t), e.isNew() || e.trigger("sync", e, o, t);
          };var o = !1;return this.isNew() ? b(t.success) : (g(this, t), o = this.sync("delete", this, t)), r || i(), o;
        } }, { key: "url", value: function value() {
          var t = h(this, "urlRoot") || h(this.collection, "url") || urlError();if (this.isNew()) return t;var e = this.get(this.idAttribute);return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e);
        } }, { key: "keys", value: function value() {
          return Object.keys(this._attributes);
        } }, { key: "values", value: function value() {
          return Object.values(this._attributes);
        } }, { key: "parse", value: function value(t, e) {
          return t;
        } }, { key: "clone", value: function value() {
          return new this.constructor(this._attributes);
        } }, { key: "isNew", value: function value() {
          return !this.has(this.idAttribute);
        } }, { key: "hasChanged", value: function value(t) {
          return null == t ? !d(this.changed) : v(this.changed, t);
        } }, { key: "changedAttributes", value: function value(t) {
          if (!t) return !!this.hasChanged() && f(this.changed);var e = this._changing ? this._previousAttributes : this._attributes,
              n = {},
              r = void 0;for (var i in t) {
            var o = t[i];y(e[i], o) || (n[i] = o, r = !0);
          }return !!r && n;
        } }, { key: "previous", value: function value(t) {
          return null != t && this._previousAttributes ? this._previousAttributes[t] : null;
        } }, { key: "previousAttributes", value: function value() {
          return f(this._previousAttributes);
        } }, { key: "supportsValidation", value: function value() {
          return null !== this.schema;
        } }, { key: "isValid", value: function value(t) {
          var e = this._validate({}, (0, a.default)({}, t, { validate: !0 }));if (e) {
            this.validate();return this.validationMessages.valid;
          }return e;
        } }, { key: "validate", value: function value() {
          this._validationFramework || (this._validationFramework = new l.default());var t = this._validationFramework;return this.supportsValidation() && t.supportsValidation() ? this.validationMessages = t.validate(this.toJSON(), this.schema) : this.validationMessages.valid = !0, this.validationMessages;
        } }, { key: "getValidationMessages", value: function value() {
          var t = [];if (this.validationMessages && this.validationMessages.errors) {
            var e = this.validationMessages.errors.length,
                n = 0;for (n = 0; n < e; n++) {
              t.push(this.validationMessages.errors[n].message + " from " + this.validationMessages.errors[n].dataPath);
            }
          }return t;
        } }, { key: "sync", value: function value(t, e, n) {} }, { key: "reset", value: function value(t) {
          this.clear(), t && this.set(t);
        } }, { key: "isEmpty", value: function value() {
          return !this._attributes || 0 === Object.keys(this._attributes).length;
        } }, { key: "toString", value: function value() {
          return JSON.stringify(this.toJSON());
        } }, { key: "fetch", value: function value(t) {
          this.sync("read", this, t);
        } }, { key: "save", value: function value(t) {
          this.sync("create", this, t);
        } }, { key: "update", value: function value(t) {
          this.sync("update", this, t);
        } }, { key: "destroy", value: function value(t) {
          this.sync("delete", this, t);
        } }, { key: "_validate", value: function value(t, e) {
          if (!e.validate || !this.validate) return !0;var n = this.validate();return !!n.valid || (this.trigger("invalid", this, n, (0, a.default)(e, { validationError: n })), !1);
        } }]), e;
    }();e.default = O;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = arguments;e.default = function (t, e) {
      var n = void 0,
          i = void 0;if ("function" != typeof e) throw new TypeError(FUNC_ERROR_TEXT);return i = Number.parseInt(t), function () {
        return --i > 0 && (n = e.apply(void 0, r)), i <= 1 && (e = void 0), n;
      };
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r,
        i = n(29),
        o = (r = i) && r.__esModule ? r : { default: r };e.default = function (t) {
      return (0, o.default)(2, t);
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.sortObjects = function (t, e) {
      return t.sort(function (t, n) {
        var r = t[e],
            i = n[e];return r < i ? -1 : r > i ? 1 : 0;
      });
    }, e.mergeSort = function t(e) {
      if (1 === e.length) return e;var n = Math.floor(e.length / 2),
          i = e.slice(0, n),
          o = e.slice(n);return r(t(i), t(o));
    };var r = function r(t, e) {
      for (var n = [], r = 0, i = 0; r < t.length && i < e.length;) {
        t[r] < e[i] ? (n.push(t[r]), r++) : (n.push(e[i]), i++);
      }return n.concat(t.slice(r)).concat(e.slice(i));
    };e.quickSort = function t(e) {
      if (0 === e.length) return [];var n = 1,
          r = e.length,
          i = [],
          o = [],
          u = e[0];for (n = 1; n < r; n++) {
        e[n] < u ? i.push(e[n]) : o.push(e[n]);
      }return t(i).concat(u, t(o));
    }, e.insertionSort = function (t) {
      var e = [];if (t) {
        var n = (e = t.slice()).length,
            r = void 0,
            i = void 0,
            o = void 0;for (r = 1; r < n; r++) {
          for (o = e[r], i = r - 1; i >= 0 && e[i] > o; i--) {
            e[i + 1] = e[i];
          }e[i + 1] = o;
        }
      }return e;
    }, e.bubbleSort = function (t) {
      var e = [];if (t) {
        var n = void 0,
            r = void 0,
            i = void 0,
            o = (e = t.slice()).length - 1;do {
          for (n = !1, r = 0; r < o; r++) {
            e[r] > e[r + 1] && (i = e[r], e[r] = e[r + 1], e[r + 1] = i, n = !0);
          }
        } while (n);
      }return e;
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = e.fibonacci = function (t) {
      var e = (1 + Math.sqrt(5)) / 2,
          n = Math.pow(e, t) / Math.sqrt(5);return Math.round(n);
    };e.fibonacciSequence = function (t) {
      var e = [],
          n = 0;for (n = 0; n < t; n++) {
        e.push(r(n));
      }return e;
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = function (t) {
      return void 0 !== t;
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = function (t, e) {
      for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) {
        r[i - 2] = arguments[i];
      }var o = t.split("."),
          u = o.pop(),
          a = o.length,
          s = 0;for (s = 0; s < a; s++) {
        e = e[o[s]];
      }return e[u].apply(e, r);
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = function (t, e) {
      return -1 !== t.indexOf(e);
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r,
        i = n(9),
        o = (r = i) && r.__esModule ? r : { default: r };e.default = function (t, e) {
      if (null !== t) {
        var n = t[e];return (0, o.default)(n) ? n.call(t) : n;
      }
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r,
        i = n(13),
        o = (r = i) && r.__esModule ? r : { default: r };e.default = function (t, e) {
      var n = function (t) {
        return (0, o.default)(t) ? Object.create(t) : {};
      }(t);return e && Object.assign(n, e), n;
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = function (t, e) {
      return null !== t && hasOwnProperty.call(t, e);
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r,
        i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        o = n(14);(r = o) && r.__esModule;var u = function () {
      function t(e, n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this._principal = e || (new Principal().login = "guest"), this._permissions = n || [];
      }return i(t, [{ key: "addPermission", value: function value(t) {
          this._permissions.push(t);
        } }, { key: "removePermission", value: function value(t) {
          var e = this._permissions.indexOf(t);this._permissions.splice(e, 1);
        } }, { key: "hasPermission", value: function value(t) {
          return -1 !== this._permissions.indexOf(t);
        } }, { key: "principal", get: function get() {
          return this._principal;
        } }, { key: "permissions", get: function get() {
          return this._permissions;
        }, set: function set(t) {
          this._permissions = t;
        } }]), t;
    }();e.default = u;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }();var i = function () {
      function t(e, n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this._permissions = e || [], this._neg = n || !1;
      }return r(t, [{ key: "isNegative", value: function value() {
          return this._neg;
        } }, { key: "addPermission", value: function value(t) {
          this._permissions.push(t);
        } }, { key: "removePermission", value: function value(t) {
          var e = this._permissions.indexOf(t);this._permissions.splice(e, 1);
        } }, { key: "hasPermission", value: function value(t) {
          return -1 != this._permissions.indexOf(t);
        } }, { key: "setNegative", value: function value(t) {
          this.neg = t;
        } }, { key: "permissions", get: function get() {
          return this._permissions;
        }, set: function set(t) {
          this._permissions = t;
        } }]), t;
    }();e.default = i;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        i = a(n(1)),
        o = a(n(16)),
        u = a(n(15));function a(t) {
      return t && t.__esModule ? t : { default: t };
    }var s = function () {
      function t() {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t);
      }return r(t, null, [{ key: "getSecurityClient", value: function value(t) {
          return t === i.default.OAUTH2 ? new o.default() : t === i.default.ACL ? new u.default() : null;
        } }]), t;
    }();e.default = s;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }();function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }e.BundleObject = { name: "", mode: "both", cache: !0 };var o = e.ResourceBundle = function () {
      function t() {
        i(this, t);
      }return r(t, null, [{ key: "getBundle", value: function value() {
          return {};
        } }, { key: "getString", value: function value() {
          return "";
        } }]), t;
    }();e.MessageReader = function () {
      function t() {
        i(this, t);
      }return r(t, null, [{ key: "getMessage", value: function value(t) {
          for (var e = o.getString(t), n = t.length, r = t; n > 0 && e == "[" + t + "]";) {
            n = t.lastIndexOf("."), t = t.substring(0, n), e = o.getString(t);
          }return t ? e : "[" + r + "]";
        } }]), t;
    }(), e.MessageKeyFormatter = function () {
      function t() {
        i(this, t), this.delimiter = ".";
      }return r(t, null, [{ key: "format", value: function value(t) {
          var e = "";if (t) t.level && (e += t.level, t.kind && (e += this.delimiter + t.kind, t.rule && (e += this.delimiter + t.rule, t.values.title && (e += this.delimiter + t.values.title))));return e || "";
        } }]), t;
    }();
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }();var i = function i(t) {
      return new Promise(function (e, n) {
        t.initialize() ? e(t) : n(new Error("failed initialize!"));
      });
    },
        o = function o(t) {
      return new Promise(function (e, n) {
        t.afterInitialize() ? e(t) : n(new Error("failed after initialize!"));
      });
    },
        u = function u(t) {
      return new Promise(function (e, n) {
        t._started = !0, t.started ? e(t) : n(new Error("failed setting started!"));
      });
    },
        a = function a(t) {
      return new Promise(function (e, n) {
        t.started ? e(t) : n(new Error("failed starting!"));
      });
    },
        s = "untitled",
        l = {};l.NAME = Symbol("name"), l.DATASTORE = Symbol("datastore");var c = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e || (e = {}), e.metadata ? this._metadata = e.metadata : this._metadata = {}, e.name ? this._name = e.name : this._name = s, e.datastore ? this._datastore = e.datastore : this._datastore = {}, this._router = null, this._started = !1;
      }return r(t, [{ key: "initialize", value: function value() {
          return !0;
        } }, { key: "beforeInitialize", value: function value() {
          return !0;
        } }, { key: "afterInitialize", value: function value() {
          return !0;
        } }, { key: "setMetadataItem", value: function value(t, e) {
          this._metadata[t] = e;
        } }, { key: "getMetadataItem", value: function value(t) {
          return this._metadata[t];
        } }, { key: "registerRouter", value: function value(t) {
          t && (this._router = t);
        } }, { key: "start", value: function value() {
          var t = this;return new Promise(function (e, n) {
            (function (t) {
              return new Promise(function (e, n) {
                t.beforeInitialize() ? e(t) : n(new Error("failed before initialize!"));
              });
            })(t).then(i).then(o).then(u).then(a).then(function (t) {
              e(t);
            }).catch(function (e) {
              t.stop(), n(e);
            });
          });
        } }, { key: "stop", value: function value() {
          this._started = !1;
        } }, { key: "router", get: function get() {
          return this._router;
        }, set: function set(t) {
          this._router = t;
        } }, { key: "started", get: function get() {
          return this._started;
        } }, { key: "name", get: function get() {
          return this.getMetadataItem(l.NAME);
        }, set: function set(t) {
          return this.setMetadataItem(l.NAME, t);
        } }, { key: "metadata", get: function get() {
          return this._metadata;
        } }, { key: "datastore", get: function get() {
          return this.getMetadataItem(l.DATASTORE);
        }, set: function set(t) {
          t && this.setMetadataItem(l.DATASTORE, t);
        } }]), t;
    }();e.default = c;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        i = a(n(19)),
        o = a(n(18)),
        u = a(n(17));function a(t) {
      return t && t.__esModule ? t : { default: t };
    }var s = function () {
      function t() {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t);
      }return r(t, null, [{ key: "getLogger", value: function value(t, e) {
          return t === u.default.CONSOLE ? new i.default(e) : t === u.default.COLOR_CONSOLE ? new o.default(e) : void 0;
        } }]), t;
    }();e.default = s;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        i = u(n(4)),
        o = u(n(21));function u(t) {
      return t && t.__esModule ? t : { default: t };
    }var a = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this._timeout = e || o.default.AsynchronousQueueTimeout, this._queue = {};
      }return r(t, [{ key: "add", value: function value() {
          for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {
            e[n] = arguments[n];
          }return !!(e && e.length > 0) && ((0, i.default)(this._queue, e), !0);
        } }, { key: "clear", value: function value() {
          this._queue.length > 0 && this._queue.splice(0, this._queue.length);
        } }, { key: "process", value: function value() {
          for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {
            e[n] = arguments[n];
          }e && (0, i.default)(this._queue, e);var r = this._queue,
              o = Object.keys(r).length,
              u = this._timeout;if (o <= 0) return !1;return function t(e) {
            if (e >= o || "function" != typeof r[e]) return !1;setTimeout(function () {
              r[e](), t(e + 1);
            }, u);
          }(0), !0;
        } }, { key: "timeout", get: function get() {
          return this._timeout;
        } }, { key: "queue", get: function get() {
          return this._queue;
        } }]), t;
    }();e.default = a;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r,
        i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        o = n(10),
        u = (r = o) && r.__esModule ? r : { default: r };var a = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this._keys = [], this._data = {}, e && this.marshall(e);
      }return i(t, [{ key: "set", value: function value(t, e) {
          null !== t && null !== e && (this._data[t] || this._keys.push(t), this._data[t] = e);
        } }, { key: "get", value: function value(t) {
          return this._data[t];
        } }, { key: "indexOf", value: function value(t) {
          return this._keys.indexOf(t);
        } }, { key: "remove", value: function value(t) {
          var e = this.indexOf(t);this._keys.splice(e, 1), delete this._data[t];
        } }, { key: "has", value: function value(t) {
          return -1 !== this.indexOf(t);
        } }, { key: "forEach", value: function value(t) {
          if ("function" != typeof t) return null;var e = this._keys.length,
              n = 0,
              r = void 0;for (n = 0; n < e; n++) {
            t(r = this._keys[n], this._data[r], n);
          }
        } }, { key: "key", value: function value(t) {
          return this._keys[t];
        } }, { key: "entries", value: function value() {
          var t = 0,
              e = this._keys.length,
              n = new Array(e);for (t = 0; t < e; t++) {
            n[t] = { key: this._keys[t], value: this._data[t] };
          }return n;
        } }, { key: "values", value: function value() {
          var t = this._keys.length,
              e = new Array(t),
              n = 0,
              r = void 0;for (n = 0; n < t; n++) {
            r = this._keys[n], e[n] = this._data[r];
          }return e;
        } }, { key: "clear", value: function value() {
          this._keys = [], this._data = {};
        } }, { key: "size", value: function value() {
          return this._keys.length;
        } }, { key: "toJSON", value: function value() {
          return this._data;
        } }, { key: "toString", value: function value() {
          return JSON.stringify(this._data);
        } }, { key: "isEmpty", value: function value() {
          return 0 === this._keys.length;
        } }, { key: "marshall", value: function value(e) {
          var n = void 0;if (e && e instanceof t) n = e.toJSON();else if (e && e instanceof Object && Object.keys(e).length > 0) n = e;else {
            if (!e || !(0, u.default)(e)) return !1;try {
              n = JSON.parse(e);
            } catch (t) {
              return !1;
            }
          }var r = Object.keys(n);r.length;return this._keys = r, this._data = n, !0;
        } }]), t;
    }();e.default = a;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }();var i = function () {
      function t() {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this._stack = [];
      }return r(t, [{ key: "empty", value: function value() {
          return 0 === this._stack.length;
        } }, { key: "peek", value: function value() {
          return this._stack[0];
        } }, { key: "pop", value: function value() {
          return this._stack.pop();
        } }, { key: "push", value: function value(t) {
          this._stack.push(t);
        } }, { key: "search", value: function value(t) {
          return this._stack.indexOf(t);
        } }, { key: "size", value: function value() {
          return this._stack.length;
        } }, { key: "clear", value: function value() {
          this._stack.splice(0, this._stack.length);
        } }, { key: "toArray", value: function value() {
          return this._stack;
        } }, { key: "toString", value: function value() {
          return this._stack.toString();
        } }]), t;
    }();e.default = i;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }();var i = function () {
      function t(e, n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this._collection = e, this._kind = n, this._index = 0;
      }return r(t, [{ key: "next", value: function value() {
          if (this._collection) {
            if (this._index < this._collection.length) {
              var t = this._collection.at(this._index);this._index++;var e = void 0;if (1 === this._kind) e = t;else {
                var n = this._collection.modelId(t.attributes);e = 2 === this._kind ? n : [n, t];
              }return { value: e, done: !1 };
            }this._collection = void 0;
          }return { value: void 0, done: !0 };
        } }]), t;
    }();e.default = i;
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };Object.defineProperty(e, "__esModule", { value: !0 });var i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        o = y(n(6)),
        u = y(n(4)),
        a = (y(n(5)), y(n(10))),
        s = y(n(9)),
        l = y(n(23)),
        c = y(n(22)),
        f = n(31),
        h = y(n(28)),
        d = y(n(12)),
        v = y(n(48));function y(t) {
      return t && t.__esModule ? t : { default: t };
    }var p = n(24),
        _ = { add: !0, remove: !0, merge: !0 },
        b = { add: !0, remove: !1 },
        m = function (t) {
      function e(t, n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);var i = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" !== (void 0 === e ? "undefined" : r(e)) && "function" != typeof e ? t : e;
        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));return i.length = 0, i.models = [], i._byId = {}, i.schema = null, i.validationMessages = { valid: !0 }, n || (n = {}), i.preinitialize(t, n), n.model && (i.model = n.model), void 0 !== n.comparator && (i.comparator = n.comparator), i._reset(), i.initialize(t, n), t && i.reset(t, (0, u.default)({ silent: !0 }, n)), i.model || (i.model = new h.default()), i;
      }return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : r(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, o.default), i(e, [{ key: "preinitialize", value: function value(t, e) {} }, { key: "initialize", value: function value(t, e) {} }, { key: "toJSON", value: function value() {
          var t = 0,
              e = [],
              n = this.models.length;for (t = 0; t < n; t++) {
            e[t] = this.models[t].toJSON();
          }return e;
        } }, { key: "add", value: function value(t, e) {
          return this.set(t, (0, u.default)({ merge: !1 }, e, b));
        } }, { key: "remove", value: function value(t, e) {
          e = (0, u.default)({}, e);var n = Array.isArray(t);t = n ? [t] : t.slice();var r = this._removeModels(t, e);return !e.silent && r.length && (e.changes = { added: [], merged: [], removed: r }, this.trigger("update", this, e)), n ? r[0] : r;
        } }, { key: "set", value: function value(t, e) {
          if (null !== t) {
            (e = (0, u.default)({}, _, e)).parse && !this._isModel(t) && (t = this.parse(t, e) || []);var n = !Array.isArray(t);t = n ? [t] : t.slice();var r = e.at;null != r && (r = +r), r > this.length && (r = this.length), r < 0 && (r += this.length + 1);var i = [],
                o = [],
                s = [],
                f = [],
                h = {},
                d = e.add,
                v = e.merge,
                y = e.remove,
                p = !1,
                b = this.comparator && null == r && !1 !== e.sort,
                m = (0, a.default)(this.comparator) ? this.comparator : null,
                g = void 0,
                O = void 0,
                E = t.length;for (O = 0; O < E; O++) {
              g = t[O];var S = this.get(g);if (S) {
                if (v && g !== S) {
                  var k = this._isModel(g) ? g.attributes : g;e.parse && (k = S.parse(k, e)), S.set(k, e), s.push(S), b && !p && (p = S.hasChanged(m));
                }h[S.cid] || (h[S.cid] = !0, i.push(S)), t[O] = S;
              } else d && (g = t[O] = this._prepareModel(g, e)) && (o.push(g), this._addReference(g, e), h[g.cid] = !0, i.push(g));
            }if (y) {
              for (O = 0; O < this.length; O++) {
                h[(g = this.models[O]).cid] || f.push(g);
              }f.length && this._removeModels(f, e);
            }var j = !1,
                w = !b && d && y;if (i.length && w ? (j = this.length !== i.length || (0, l.default)(this.models, function (t, e) {
              return t !== i[e];
            }), this.models.length = 0, (0, c.default)(this.models, i, 0), this.length = this.models.length) : o.length && (b && (p = !0), (0, c.default)(this.models, o, null == r ? this.length : r), this.length = this.models.length), p && this.sort({ silent: !0 }), !e.silent) {
              for (O = 0; O < o.length; O++) {
                null != r && (e.index = r + O), (g = o[O]).trigger("add", g, this, e);
              }(p || j) && this.trigger("sort", this, e), (o.length || f.length || s.length) && (e.changes = { added: o, removed: f, merged: s }, this.trigger("update", this, e));
            }return n ? t[0] : t;
          }
        } }, { key: "reset", value: function value(t, e) {
          e = e ? p(e) : {};for (var n = 0; n < this.models.length; n++) {
            this._removeReference(this.models[n], e);
          }return e.previousModels = this.models, this._reset(), t = this.add(t, (0, u.default)({ silent: !0 }, e)), e.silent || this.trigger("reset", this, e), t;
        } }, { key: "push", value: function value(t, e) {
          return this.add(t, (0, u.default)({ at: this.length }, e));
        } }, { key: "pop", value: function value(t) {
          var e = this.at(this.length - 1);return this.remove(e, t);
        } }, { key: "unshift", value: function value(t, e) {
          return this.add(t, (0, u.default)({ at: 0 }, e));
        } }, { key: "shift", value: function value(t) {
          var e = this.at(0);return this.remove(e, t);
        } }, { key: "slice", value: function value() {
          for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {
            e[n] = arguments[n];
          }return this.models.slice(e);
        } }, { key: "get", value: function value(t) {
          if (null != t) return this._byId[t] || this._byId[this.modelId(this._isModel(t) ? t.attributes : t)] || t.cid && this._byId[t.cid];
        } }, { key: "has", value: function value(t) {
          return null !== this.get(t);
        } }, { key: "at", value: function value(t) {
          return t < 0 && (t += this.length), this.models[t];
        } }, { key: "where", value: function value(t, e) {
          return this[e ? "find" : "filter"](t);
        } }, { key: "findWhere", value: function value(t) {
          return this.where(t, !0);
        } }, { key: "sort", value: function value(t) {
          var e = this.comparator;if (!e) throw new Error("Cannot sort a set without a comparator");t || (t = {});var n = e.length;return (0, s.default)(e) && (e = e.bind(this)), 1 === n || (0, a.default)(e) ? this.models = this.sortBy(e) : this.models.sort(e), t.silent || this.trigger("sort", this, t), this;
        } }, { key: "pluck", value: function value(t) {
          var e = 0,
              n = [],
              r = this.models.length;for (e = 0; e < r; e++) {
            n[e] = this.models[e].toJSON()[t];
          }return n;
        } }, { key: "fetch", value: function value(t) {} }, { key: "create", value: function value(t, e) {
          var n = (e = e ? p(e) : {}).wait;if (!(t = this._prepareModel(t, e))) return !1;n || this.add(t, e);var r = this,
              i = e.success;return e.success = function (t, e, o) {
            n && r.add(t, o), i && i.call(o.context, t, e, o);
          }, t.save(null, e), t;
        } }, { key: "parse", value: function value(t, e) {
          return t;
        } }, { key: "clone", value: function value() {
          return new this.constructor(this.models, { model: this.model, comparator: this.comparator });
        } }, { key: "modelId", value: function value(t) {
          return t && this.model && this.model.idAttribute ? t[this.model.idAttribute || "id"] : "id";
        } }, { key: "values", value: function value() {
          return new v.default(this, ITERATOR_VALUES);
        } }, { key: "keys", value: function value() {
          return new v.default(this, ITERATOR_KEYS);
        } }, { key: "entries", value: function value() {
          return new v.default(this, ITERATOR_KEYSVALUES);
        } }, { key: "supportsValidation", value: function value() {
          return !!(this.schema && null !== this.schema && this.schema !== {});
        } }, { key: "isValid", value: function value() {
          return !this.validationMessages || this.validationMessages.valid;
        } }, { key: "getValidationMessages", value: function value() {
          return this.validationMessages && this.validationMessages.messages ? this.validationMessages.messages : [];
        } }, { key: "validate", value: function value() {
          if (this.supportsValidation()) {
            var t = [];this.validationMessages.messages = t, this.validationMessages.valid = !0;var e = this.toJSON(),
                n = e && Array.isArray(e) ? e.length : 0,
                r = 0;this._validationFramework || (this._validationFramework = new d.default());var i = this._validationFramework;for (r = 0; r < n; r++) {
              t[r] = i.validate(e[r], this.schema), t[r].valid || (this.validationMessages.valid = !1);
            }
          } else this.validationMessages.valid = !0;return this.validationMessages;
        } }, { key: "sync", value: function value(t, e, n) {} }, { key: "save", value: function value(t) {
          this.sync("create", this, t);
        } }, { key: "update", value: function value(t) {
          this.sync("update", this, t);
        } }, { key: "remove", value: function value(t) {
          this.sync("delete", this, t);
        } }, { key: "sortByKey", value: function value(t) {
          if (t) {
            var e = this.toJSON();if (e) {
              var n = (0, f.sortObjects)(e, t);this.reset(n);
            }
          }
        } }, { key: "isEmpty", value: function value() {
          return 0 === this.length;
        } }, { key: "size", value: function value() {
          return this.length;
        } }, { key: "toString", value: function value() {
          var t = {};try {
            t = JSON.stringify(this.toJSON());
          } catch (t) {
            console.error(t);
          }return t;
        } }, { key: "_reset", value: function value() {
          this.length = 0, this.models = [], this._byId = {};
        } }, { key: "_prepareModel", value: function value(t, e) {
          if (this._isModel(t)) return t.collection || (t.collection = this), t;(e = e ? p(e) : {}).collection = this;var n = new h.default(t, e);return n.validationError ? (this.trigger("invalid", this, n.validationError, e), !1) : n;
        } }, { key: "_removeModels", value: function value(t, e) {
          for (var n = [], r = 0; r < t.length; r++) {
            var i = this.get(t[r]);if (i) {
              var o = this.indexOf(i);doctor, this.models.splice(o, 1), this.length--, delete this._byId[i.cid];var u = this.modelId(i.attributes);null != u && delete this._byId[u], e.silent || (e.index = o, i.trigger("remove", i, this, e)), n.push(i), this._removeReference(i, e);
            }
          }return n;
        } }, { key: "_isModel", value: function value(t) {
          return t instanceof h.default;
        } }, { key: "_addReference", value: function value(t, e) {
          this._byId[t.cid] = t;var n = this.modelId(t.attributes);null != n && (this._byId[n] = t), t.on("all", this._onModelEvent, this);
        } }, { key: "_removeReference", value: function value(t, e) {
          delete this._byId[t.cid];var n = this.modelId(t.attributes);null != n && delete this._byId[n], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this);
        } }, { key: "_onModelEvent", value: function value(t, e, n, r) {
          if (e) {
            if (("add" === t || "remove" === t) && n !== this) return;if ("destroy" === t && this.remove(e, r), "change" === t) {
              var i = this.modelId(e.previousAttributes()),
                  o = this.modelId(e.attributes);i !== o && (null != i && delete this._byId[i], null != o && (this._byId[o] = e));
            }
          }this.trigger.apply(this, arguments);
        } }]), e;
    }();e.default = m;
  }, function (t, e, n) {
    "use strict";
    (function (e) {
      var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          r = 1 / 0,
          i = "[object Symbol]",
          o = /[&<>"'`]/g,
          u = RegExp(o.source),
          a = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e,
          s = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
          l = a || s || Function("return this")();var c,
          f = (c = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;" }, function (t) {
        return null == c ? void 0 : c[t];
      }),
          h = Object.prototype.toString,
          d = l.Symbol,
          v = d ? d.prototype : void 0,
          y = v ? v.toString : void 0;function p(t) {
        if ("string" == typeof t) return t;if (function (t) {
          return "symbol" == (void 0 === t ? "undefined" : n(t)) || function (t) {
            return !!t && "object" == (void 0 === t ? "undefined" : n(t));
          }(t) && h.call(t) == i;
        }(t)) return y ? y.call(t) : "";var e = t + "";return "0" == e && 1 / t == -r ? "-0" : e;
      }t.exports = function (t) {
        var e;return (t = null == (e = t) ? "" : p(e)) && u.test(t) ? t.replace(o, f) : t;
      };
    }).call(this, n(0));
  }, function (t, e, n) {
    "use strict";
    var r = "Expected a function";var i = Math.max;var o,
        u,
        a = (o = function o(t, e) {
      return function (t, e, n) {
        if ("function" != typeof t) throw new TypeError(r);return setTimeout(function () {
          t.apply(void 0, n);
        }, e);
      }(t, 1, e);
    }, u = i(void 0 === u ? o.length - 1 : u, 0), function () {
      for (var t = arguments, e = -1, n = i(t.length - u, 0), r = Array(n); ++e < n;) {
        r[e] = t[u + e];
      }e = -1;for (var a = Array(u + 1); ++e < u;) {
        a[e] = t[e];
      }return a[u] = r, function (t, e, n) {
        switch (n.length) {case 0:
            return t.call(e);case 1:
            return t.call(e, n[0]);case 2:
            return t.call(e, n[0], n[1]);case 3:
            return t.call(e, n[0], n[1], n[2]);}return t.apply(e, n);
      }(o, this, a);
    });t.exports = a;
  }, function (t, e, n) {
    "use strict";
    (function (t, n) {
      var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          i = 200,
          o = "Expected a function",
          u = "__lodash_hash_undefined__",
          a = 1,
          s = 2,
          l = 1 / 0,
          c = 9007199254740991,
          f = "[object Arguments]",
          h = "[object Array]",
          d = "[object Boolean]",
          v = "[object Date]",
          y = "[object Error]",
          p = "[object Function]",
          _ = "[object GeneratorFunction]",
          b = "[object Map]",
          m = "[object Number]",
          g = "[object Object]",
          O = "[object RegExp]",
          E = "[object Set]",
          S = "[object String]",
          k = "[object Symbol]",
          j = "[object WeakMap]",
          w = "[object ArrayBuffer]",
          R = "[object DataView]",
          A = "[object Float32Array]",
          P = "[object Float64Array]",
          M = "[object Int8Array]",
          T = "[object Int16Array]",
          I = "[object Int32Array]",
          N = "[object Uint8Array]",
          x = "[object Uint8ClampedArray]",
          U = "[object Uint16Array]",
          C = "[object Uint32Array]",
          L = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          D = /^\w*$/,
          F = /^\./,
          B = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          $ = /\\(\\)?/g,
          G = /\w*$/,
          z = /^\[object .+?Constructor\]$/,
          V = /^(?:0|[1-9]\d*)$/,
          W = {};W[A] = W[P] = W[M] = W[T] = W[I] = W[N] = W[x] = W[U] = W[C] = !0, W[f] = W[h] = W[w] = W[d] = W[R] = W[v] = W[y] = W[p] = W[b] = W[m] = W[g] = W[O] = W[E] = W[S] = W[j] = !1;var K = {};K[f] = K[h] = K[w] = K[R] = K[d] = K[v] = K[A] = K[P] = K[M] = K[T] = K[I] = K[b] = K[m] = K[g] = K[O] = K[E] = K[S] = K[k] = K[N] = K[x] = K[U] = K[C] = !0, K[y] = K[p] = K[j] = !1;var J = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
          Y = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
          q = J || Y || Function("return this")(),
          H = "object" == r(e) && e && !e.nodeType && e,
          X = H && "object" == r(n) && n && !n.nodeType && n,
          Q = X && X.exports === H,
          Z = Q && J.process,
          tt = function () {
        try {
          return Z && Z.binding("util");
        } catch (t) {}
      }(),
          et = tt && tt.isTypedArray;function nt(t, e) {
        return t.set(e[0], e[1]), t;
      }function rt(t, e) {
        return t.add(e), t;
      }function it(t, e, n, r) {
        var i = -1,
            o = t ? t.length : 0;for (r && o && (n = t[++i]); ++i < o;) {
          n = e(n, t[i], i, t);
        }return n;
      }function ot(t, e) {
        for (var n = -1, r = t ? t.length : 0; ++n < r;) {
          if (e(t[n], n, t)) return !0;
        }return !1;
      }function ut(t) {
        var e = !1;if (null != t && "function" != typeof t.toString) try {
          e = !!(t + "");
        } catch (t) {}return e;
      }function at(t) {
        var e = -1,
            n = Array(t.size);return t.forEach(function (t, r) {
          n[++e] = [r, t];
        }), n;
      }function st(t, e) {
        return function (n) {
          return t(e(n));
        };
      }function lt(t) {
        var e = -1,
            n = Array(t.size);return t.forEach(function (t) {
          n[++e] = t;
        }), n;
      }var ct,
          ft = Array.prototype,
          ht = Function.prototype,
          dt = Object.prototype,
          vt = q["__core-js_shared__"],
          yt = (ct = /[^.]+$/.exec(vt && vt.keys && vt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + ct : "",
          pt = ht.toString,
          _t = dt.hasOwnProperty,
          bt = dt.toString,
          mt = RegExp("^" + pt.call(_t).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          gt = Q ? q.Buffer : void 0,
          Ot = q.Symbol,
          Et = q.Uint8Array,
          St = st(Object.getPrototypeOf, Object),
          kt = Object.create,
          jt = dt.propertyIsEnumerable,
          wt = ft.splice,
          Rt = Object.getOwnPropertySymbols,
          At = gt ? gt.isBuffer : void 0,
          Pt = st(Object.keys, Object),
          Mt = le(q, "DataView"),
          Tt = le(q, "Map"),
          It = le(q, "Promise"),
          Nt = le(q, "Set"),
          xt = le(q, "WeakMap"),
          Ut = le(Object, "create"),
          Ct = me(Mt),
          Lt = me(Tt),
          Dt = me(It),
          Ft = me(Nt),
          Bt = me(xt),
          $t = Ot ? Ot.prototype : void 0,
          Gt = $t ? $t.valueOf : void 0,
          zt = $t ? $t.toString : void 0;function Vt(t) {
        var e = -1,
            n = t ? t.length : 0;for (this.clear(); ++e < n;) {
          var r = t[e];this.set(r[0], r[1]);
        }
      }function Wt(t) {
        var e = -1,
            n = t ? t.length : 0;for (this.clear(); ++e < n;) {
          var r = t[e];this.set(r[0], r[1]);
        }
      }function Kt(t) {
        var e = -1,
            n = t ? t.length : 0;for (this.clear(); ++e < n;) {
          var r = t[e];this.set(r[0], r[1]);
        }
      }function Jt(t) {
        var e = -1,
            n = t ? t.length : 0;for (this.__data__ = new Kt(); ++e < n;) {
          this.add(t[e]);
        }
      }function Yt(t) {
        this.__data__ = new Wt(t);
      }function qt(t, e) {
        var n = Se(t) || Ee(t) ? function (t, e) {
          for (var n = -1, r = Array(t); ++n < t;) {
            r[n] = e(n);
          }return r;
        }(t.length, String) : [],
            r = n.length,
            i = !!r;for (var o in t) {
          !e && !_t.call(t, o) || i && ("length" == o || he(o, r)) || n.push(o);
        }return n;
      }function Ht(t, e, n) {
        var r = t[e];_t.call(t, e) && Oe(r, n) && (void 0 !== n || e in t) || (t[e] = n);
      }function Xt(t, e) {
        for (var n = t.length; n--;) {
          if (Oe(t[n][0], e)) return n;
        }return -1;
      }function Qt(t, e, n, r, i, o, u) {
        var a;if (r && (a = o ? r(t, i, o, u) : r(t)), void 0 !== a) return a;if (!Ae(t)) return t;var s = Se(t);if (s) {
          if (a = function (t) {
            var e = t.length,
                n = t.constructor(e);e && "string" == typeof t[0] && _t.call(t, "index") && (n.index = t.index, n.input = t.input);return n;
          }(t), !e) return function (t, e) {
            var n = -1,
                r = t.length;e || (e = Array(r));for (; ++n < r;) {
              e[n] = t[n];
            }return e;
          }(t, a);
        } else {
          var l = fe(t),
              c = l == p || l == _;if (je(t)) return function (t, e) {
            if (e) return t.slice();var n = new t.constructor(t.length);return t.copy(n), n;
          }(t, e);if (l == g || l == f || c && !o) {
            if (ut(t)) return o ? t : {};if (a = function (t) {
              return "function" != typeof t.constructor || ve(t) ? {} : (e = St(t), Ae(e) ? kt(e) : {});var e;
            }(c ? {} : t), !e) return function (t, e) {
              return ue(t, ce(t), e);
            }(t, function (t, e) {
              return t && ue(e, Ne(e), t);
            }(a, t));
          } else {
            if (!K[l]) return o ? t : {};a = function (t, e, n, r) {
              var i = t.constructor;switch (e) {case w:
                  return oe(t);case d:case v:
                  return new i(+t);case R:
                  return function (t, e) {
                    var n = e ? oe(t.buffer) : t.buffer;return new t.constructor(n, t.byteOffset, t.byteLength);
                  }(t, r);case A:case P:case M:case T:case I:case N:case x:case U:case C:
                  return function (t, e) {
                    var n = e ? oe(t.buffer) : t.buffer;return new t.constructor(n, t.byteOffset, t.length);
                  }(t, r);case b:
                  return function (t, e, n) {
                    return it(e ? n(at(t), !0) : at(t), nt, new t.constructor());
                  }(t, r, n);case m:case S:
                  return new i(t);case O:
                  return (a = new (u = t).constructor(u.source, G.exec(u))).lastIndex = u.lastIndex, a;case E:
                  return function (t, e, n) {
                    return it(e ? n(lt(t), !0) : lt(t), rt, new t.constructor());
                  }(t, r, n);case k:
                  return o = t, Gt ? Object(Gt.call(o)) : {};}var o;var u, a;
            }(t, l, Qt, e);
          }
        }u || (u = new Yt());var h = u.get(t);if (h) return h;if (u.set(t, a), !s) var y = n ? function (t) {
          return function (t, e, n) {
            var r = e(t);return Se(t) ? r : function (t, e) {
              for (var n = -1, r = e.length, i = t.length; ++n < r;) {
                t[i + n] = e[n];
              }return t;
            }(r, n(t));
          }(t, Ne, ce);
        }(t) : Ne(t);return function (t, e) {
          for (var n = -1, r = t ? t.length : 0; ++n < r && !1 !== e(t[n], n, t);) {}
        }(y || t, function (i, o) {
          y && (i = t[o = i]), Ht(a, o, Qt(i, e, n, r, o, t, u));
        }), a;
      }function Zt(t, e) {
        for (var n = 0, r = (e = de(e, t) ? [e] : ie(e)).length; null != t && n < r;) {
          t = t[be(e[n++])];
        }return n && n == r ? t : void 0;
      }function te(t, e) {
        return null != t && e in Object(t);
      }function ee(t, e, n, r, i) {
        return t === e || (null == t || null == e || !Ae(t) && !Pe(e) ? t != t && e != e : function (t, e, n, r, i, o) {
          var u = Se(t),
              l = Se(e),
              c = h,
              p = h;u || (c = (c = fe(t)) == f ? g : c);l || (p = (p = fe(e)) == f ? g : p);var _ = c == g && !ut(t),
              j = p == g && !ut(e),
              A = c == p;if (A && !_) return o || (o = new Yt()), u || Ie(t) ? ae(t, e, n, r, i, o) : function (t, e, n, r, i, o, u) {
            switch (n) {case R:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;t = t.buffer, e = e.buffer;case w:
                return !(t.byteLength != e.byteLength || !r(new Et(t), new Et(e)));case d:case v:case m:
                return Oe(+t, +e);case y:
                return t.name == e.name && t.message == e.message;case O:case S:
                return t == e + "";case b:
                var l = at;case E:
                var c = o & s;if (l || (l = lt), t.size != e.size && !c) return !1;var f = u.get(t);if (f) return f == e;o |= a, u.set(t, e);var h = ae(l(t), l(e), r, i, o, u);return u.delete(t), h;case k:
                if (Gt) return Gt.call(t) == Gt.call(e);}return !1;
          }(t, e, c, n, r, i, o);if (!(i & s)) {
            var P = _ && _t.call(t, "__wrapped__"),
                M = j && _t.call(e, "__wrapped__");if (P || M) {
              var T = P ? t.value() : t,
                  I = M ? e.value() : e;return o || (o = new Yt()), n(T, I, r, i, o);
            }
          }if (!A) return !1;return o || (o = new Yt()), function (t, e, n, r, i, o) {
            var u = i & s,
                a = Ne(t),
                l = a.length,
                c = Ne(e).length;if (l != c && !u) return !1;for (var f = l; f--;) {
              var h = a[f];if (!(u ? h in e : _t.call(e, h))) return !1;
            }var d = o.get(t);if (d && o.get(e)) return d == e;var v = !0;o.set(t, e), o.set(e, t);for (var y = u; ++f < l;) {
              h = a[f];var p = t[h],
                  _ = e[h];if (r) var b = u ? r(_, p, h, e, t, o) : r(p, _, h, t, e, o);if (!(void 0 === b ? p === _ || n(p, _, r, i, o) : b)) {
                v = !1;break;
              }y || (y = "constructor" == h);
            }if (v && !y) {
              var m = t.constructor,
                  g = e.constructor;m != g && "constructor" in t && "constructor" in e && !("function" == typeof m && m instanceof m && "function" == typeof g && g instanceof g) && (v = !1);
            }return o.delete(t), o.delete(e), v;
          }(t, e, n, r, i, o);
        }(t, e, ee, n, r, i));
      }function ne(t) {
        return !(!Ae(t) || yt && yt in t) && (we(t) || ut(t) ? mt : z).test(me(t));
      }function re(t) {
        return "function" == typeof t ? t : null == t ? xe : "object" == (void 0 === t ? "undefined" : r(t)) ? Se(t) ? function (t, e) {
          if (de(t) && ye(e)) return pe(be(t), e);return function (n) {
            var r = function (t, e, n) {
              var r = null == t ? void 0 : Zt(t, e);return void 0 === r ? n : r;
            }(n, t);return void 0 === r && r === e ? function (t, e) {
              return null != t && function (t, e, n) {
                var r,
                    i = -1,
                    o = (e = de(e, t) ? [e] : ie(e)).length;for (; ++i < o;) {
                  var u = be(e[i]);if (!(r = null != t && n(t, u))) break;t = t[u];
                }if (r) return r;return !!(o = t ? t.length : 0) && Re(o) && he(u, o) && (Se(t) || Ee(t));
              }(t, e, te);
            }(n, t) : ee(e, r, void 0, a | s);
          };
        }(t[0], t[1]) : function (t) {
          var e = function (t) {
            var e = Ne(t),
                n = e.length;for (; n--;) {
              var r = e[n],
                  i = t[r];e[n] = [r, i, ye(i)];
            }return e;
          }(t);if (1 == e.length && e[0][2]) return pe(e[0][0], e[0][1]);return function (n) {
            return n === t || function (t, e, n, r) {
              var i = n.length,
                  o = i,
                  u = !r;if (null == t) return !o;for (t = Object(t); i--;) {
                var l = n[i];if (u && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
              }for (; ++i < o;) {
                var c = (l = n[i])[0],
                    f = t[c],
                    h = l[1];if (u && l[2]) {
                  if (void 0 === f && !(c in t)) return !1;
                } else {
                  var d = new Yt();if (r) var v = r(f, h, c, t, e, d);if (!(void 0 === v ? ee(h, f, r, a | s, d) : v)) return !1;
                }
              }return !0;
            }(n, t, e);
          };
        }(t) : de(e = t) ? (n = be(e), function (t) {
          return null == t ? void 0 : t[n];
        }) : function (t) {
          return function (e) {
            return Zt(e, t);
          };
        }(e);var e, n;
      }function ie(t) {
        return Se(t) ? t : _e(t);
      }function oe(t) {
        var e = new t.constructor(t.byteLength);return new Et(e).set(new Et(t)), e;
      }function ue(t, e, n, r) {
        n || (n = {});for (var i = -1, o = e.length; ++i < o;) {
          var u = e[i],
              a = r ? r(n[u], t[u], u, n, t) : void 0;Ht(n, u, void 0 === a ? t[u] : a);
        }return n;
      }function ae(t, e, n, r, i, o) {
        var u = i & s,
            l = t.length,
            c = e.length;if (l != c && !(u && c > l)) return !1;var f = o.get(t);if (f && o.get(e)) return f == e;var h = -1,
            d = !0,
            v = i & a ? new Jt() : void 0;for (o.set(t, e), o.set(e, t); ++h < l;) {
          var y = t[h],
              p = e[h];if (r) var _ = u ? r(p, y, h, e, t, o) : r(y, p, h, t, e, o);if (void 0 !== _) {
            if (_) continue;d = !1;break;
          }if (v) {
            if (!ot(e, function (t, e) {
              if (!v.has(e) && (y === t || n(y, t, r, i, o))) return v.add(e);
            })) {
              d = !1;break;
            }
          } else if (y !== p && !n(y, p, r, i, o)) {
            d = !1;break;
          }
        }return o.delete(t), o.delete(e), d;
      }function se(t, e) {
        var n,
            i,
            o = t.__data__;return ("string" == (i = void 0 === (n = e) ? "undefined" : r(n)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof e ? "string" : "hash"] : o.map;
      }function le(t, e) {
        var n = function (t, e) {
          return null == t ? void 0 : t[e];
        }(t, e);return ne(n) ? n : void 0;
      }Vt.prototype.clear = function () {
        this.__data__ = Ut ? Ut(null) : {};
      }, Vt.prototype.delete = function (t) {
        return this.has(t) && delete this.__data__[t];
      }, Vt.prototype.get = function (t) {
        var e = this.__data__;if (Ut) {
          var n = e[t];return n === u ? void 0 : n;
        }return _t.call(e, t) ? e[t] : void 0;
      }, Vt.prototype.has = function (t) {
        var e = this.__data__;return Ut ? void 0 !== e[t] : _t.call(e, t);
      }, Vt.prototype.set = function (t, e) {
        return this.__data__[t] = Ut && void 0 === e ? u : e, this;
      }, Wt.prototype.clear = function () {
        this.__data__ = [];
      }, Wt.prototype.delete = function (t) {
        var e = this.__data__,
            n = Xt(e, t);return !(n < 0 || (n == e.length - 1 ? e.pop() : wt.call(e, n, 1), 0));
      }, Wt.prototype.get = function (t) {
        var e = this.__data__,
            n = Xt(e, t);return n < 0 ? void 0 : e[n][1];
      }, Wt.prototype.has = function (t) {
        return Xt(this.__data__, t) > -1;
      }, Wt.prototype.set = function (t, e) {
        var n = this.__data__,
            r = Xt(n, t);return r < 0 ? n.push([t, e]) : n[r][1] = e, this;
      }, Kt.prototype.clear = function () {
        this.__data__ = { hash: new Vt(), map: new (Tt || Wt)(), string: new Vt() };
      }, Kt.prototype.delete = function (t) {
        return se(this, t).delete(t);
      }, Kt.prototype.get = function (t) {
        return se(this, t).get(t);
      }, Kt.prototype.has = function (t) {
        return se(this, t).has(t);
      }, Kt.prototype.set = function (t, e) {
        return se(this, t).set(t, e), this;
      }, Jt.prototype.add = Jt.prototype.push = function (t) {
        return this.__data__.set(t, u), this;
      }, Jt.prototype.has = function (t) {
        return this.__data__.has(t);
      }, Yt.prototype.clear = function () {
        this.__data__ = new Wt();
      }, Yt.prototype.delete = function (t) {
        return this.__data__.delete(t);
      }, Yt.prototype.get = function (t) {
        return this.__data__.get(t);
      }, Yt.prototype.has = function (t) {
        return this.__data__.has(t);
      }, Yt.prototype.set = function (t, e) {
        var n = this.__data__;if (n instanceof Wt) {
          var r = n.__data__;if (!Tt || r.length < i - 1) return r.push([t, e]), this;n = this.__data__ = new Kt(r);
        }return n.set(t, e), this;
      };var ce = Rt ? st(Rt, Object) : function () {
        return [];
      },
          fe = function fe(t) {
        return bt.call(t);
      };function he(t, e) {
        return !!(e = null == e ? c : e) && ("number" == typeof t || V.test(t)) && t > -1 && t % 1 == 0 && t < e;
      }function de(t, e) {
        if (Se(t)) return !1;var n = void 0 === t ? "undefined" : r(t);return !("number" != n && "symbol" != n && "boolean" != n && null != t && !Me(t)) || D.test(t) || !L.test(t) || null != e && t in Object(e);
      }function ve(t) {
        var e = t && t.constructor;return t === ("function" == typeof e && e.prototype || dt);
      }function ye(t) {
        return t == t && !Ae(t);
      }function pe(t, e) {
        return function (n) {
          return null != n && n[t] === e && (void 0 !== e || t in Object(n));
        };
      }(Mt && fe(new Mt(new ArrayBuffer(1))) != R || Tt && fe(new Tt()) != b || It && "[object Promise]" != fe(It.resolve()) || Nt && fe(new Nt()) != E || xt && fe(new xt()) != j) && (fe = function fe(t) {
        var e = bt.call(t),
            n = e == g ? t.constructor : void 0,
            r = n ? me(n) : void 0;if (r) switch (r) {case Ct:
            return R;case Lt:
            return b;case Dt:
            return "[object Promise]";case Ft:
            return E;case Bt:
            return j;}return e;
      });var _e = ge(function (t) {
        var e;t = null == (e = t) ? "" : function (t) {
          if ("string" == typeof t) return t;if (Me(t)) return zt ? zt.call(t) : "";var e = t + "";return "0" == e && 1 / t == -l ? "-0" : e;
        }(e);var n = [];return F.test(t) && n.push(""), t.replace(B, function (t, e, r, i) {
          n.push(r ? i.replace($, "$1") : e || t);
        }), n;
      });function be(t) {
        if ("string" == typeof t || Me(t)) return t;var e = t + "";return "0" == e && 1 / t == -l ? "-0" : e;
      }function me(t) {
        if (null != t) {
          try {
            return pt.call(t);
          } catch (t) {}try {
            return t + "";
          } catch (t) {}
        }return "";
      }function ge(t, e) {
        if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(o);var n = function n() {
          var r = arguments,
              i = e ? e.apply(this, r) : r[0],
              o = n.cache;if (o.has(i)) return o.get(i);var u = t.apply(this, r);return n.cache = o.set(i, u), u;
        };return n.cache = new (ge.Cache || Kt)(), n;
      }function Oe(t, e) {
        return t === e || t != t && e != e;
      }function Ee(t) {
        return function (t) {
          return Pe(t) && ke(t);
        }(t) && _t.call(t, "callee") && (!jt.call(t, "callee") || bt.call(t) == f);
      }ge.Cache = Kt;var Se = Array.isArray;function ke(t) {
        return null != t && Re(t.length) && !we(t);
      }var je = At || function () {
        return !1;
      };function we(t) {
        var e = Ae(t) ? bt.call(t) : "";return e == p || e == _;
      }function Re(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= c;
      }function Ae(t) {
        var e = void 0 === t ? "undefined" : r(t);return !!t && ("object" == e || "function" == e);
      }function Pe(t) {
        return !!t && "object" == (void 0 === t ? "undefined" : r(t));
      }function Me(t) {
        return "symbol" == (void 0 === t ? "undefined" : r(t)) || Pe(t) && bt.call(t) == k;
      }var Te,
          Ie = et ? (Te = et, function (t) {
        return Te(t);
      }) : function (t) {
        return Pe(t) && Re(t.length) && !!W[bt.call(t)];
      };function Ne(t) {
        return ke(t) ? qt(t) : function (t) {
          if (!ve(t)) return Pt(t);var e = [];for (var n in Object(t)) {
            _t.call(t, n) && "constructor" != n && e.push(n);
          }return e;
        }(t);
      }function xe(t) {
        return t;
      }n.exports = function (t) {
        return re("function" == typeof t ? t : Qt(t, !0));
      };
    }).call(this, n(0), n(3)(t));
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        i = 9007199254740991,
        o = "[object Arguments]",
        u = "[object Function]",
        a = "[object GeneratorFunction]",
        s = /^(?:0|[1-9]\d*)$/;function l(t, e, n) {
      switch (n.length) {case 0:
          return t.call(e);case 1:
          return t.call(e, n[0]);case 2:
          return t.call(e, n[0], n[1]);case 3:
          return t.call(e, n[0], n[1], n[2]);}return t.apply(e, n);
    }var c = Object.prototype,
        f = c.hasOwnProperty,
        h = c.toString,
        d = c.propertyIsEnumerable,
        v = Math.max;function y(t, e) {
      var n = E(t) || function (t) {
        return function (t) {
          return function (t) {
            return !!t && "object" == (void 0 === t ? "undefined" : r(t));
          }(t) && S(t);
        }(t) && f.call(t, "callee") && (!d.call(t, "callee") || h.call(t) == o);
      }(t) ? function (t, e) {
        for (var n = -1, r = Array(t); ++n < t;) {
          r[n] = e(n);
        }return r;
      }(t.length, String) : [],
          i = n.length,
          u = !!i;for (var a in t) {
        !e && !f.call(t, a) || u && ("length" == a || g(a, i)) || n.push(a);
      }return n;
    }function p(t, e, n, r) {
      return void 0 === t || O(t, c[n]) && !f.call(r, n) ? e : t;
    }function _(t, e, n) {
      var r = t[e];f.call(t, e) && O(r, n) && (void 0 !== n || e in t) || (t[e] = n);
    }function b(t) {
      if (!k(t)) return function (t) {
        var e = [];if (null != t) for (var n in Object(t)) {
          e.push(n);
        }return e;
      }(t);var e,
          n,
          r,
          i = (n = (e = t) && e.constructor, r = "function" == typeof n && n.prototype || c, e === r),
          o = [];for (var u in t) {
        ("constructor" != u || !i && f.call(t, u)) && o.push(u);
      }return o;
    }function m(t, e) {
      return e = v(void 0 === e ? t.length - 1 : e, 0), function () {
        for (var n = arguments, r = -1, i = v(n.length - e, 0), o = Array(i); ++r < i;) {
          o[r] = n[e + r];
        }r = -1;for (var u = Array(e + 1); ++r < e;) {
          u[r] = n[r];
        }return u[e] = o, l(t, this, u);
      };
    }function g(t, e) {
      return !!(e = null == e ? i : e) && ("number" == typeof t || s.test(t)) && t > -1 && t % 1 == 0 && t < e;
    }function O(t, e) {
      return t === e || t != t && e != e;
    }var E = Array.isArray;function S(t) {
      return null != t && function (t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= i;
      }(t.length) && !function (t) {
        var e = k(t) ? h.call(t) : "";return e == u || e == a;
      }(t);
    }function k(t) {
      var e = void 0 === t ? "undefined" : r(t);return !!t && ("object" == e || "function" == e);
    }var j,
        w = (j = function j(t, e, n, r) {
      !function (t, e, n, r) {
        n || (n = {});for (var i = -1, o = e.length; ++i < o;) {
          var u = e[i],
              a = r ? r(n[u], t[u], u, n, t) : void 0;_(n, u, void 0 === a ? t[u] : a);
        }
      }(e, function (t) {
        return S(t) ? y(t, !0) : b(t);
      }(e), t, r);
    }, m(function (t, e) {
      var n = -1,
          i = e.length,
          o = i > 1 ? e[i - 1] : void 0,
          u = i > 2 ? e[2] : void 0;for (o = j.length > 3 && "function" == typeof o ? (i--, o) : void 0, u && function (t, e, n) {
        if (!k(n)) return !1;var i = void 0 === e ? "undefined" : r(e);return !!("number" == i ? S(n) && g(e, n.length) : "string" == i && (e in n)) && O(n[e], t);
      }(e[0], e[1], u) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++n < i;) {
        var a = e[n];a && j(t, a, n, o);
      }return t;
    })),
        R = m(function (t) {
      return t.push(void 0, p), l(w, void 0, t);
    });t.exports = R;
  }, function (t, e, n) {
    "use strict";
    (function (t, n) {
      var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          i = 200,
          o = "__lodash_hash_undefined__",
          u = 1,
          a = 2,
          s = 9007199254740991,
          l = "[object Arguments]",
          c = "[object Array]",
          f = "[object AsyncFunction]",
          h = "[object Boolean]",
          d = "[object Date]",
          v = "[object Error]",
          y = "[object Function]",
          p = "[object GeneratorFunction]",
          _ = "[object Map]",
          b = "[object Number]",
          m = "[object Null]",
          g = "[object Object]",
          O = "[object Proxy]",
          E = "[object RegExp]",
          S = "[object Set]",
          k = "[object String]",
          j = "[object Symbol]",
          w = "[object Undefined]",
          R = "[object ArrayBuffer]",
          A = "[object DataView]",
          P = /^\[object .+?Constructor\]$/,
          M = /^(?:0|[1-9]\d*)$/,
          T = {};T["[object Float32Array]"] = T["[object Float64Array]"] = T["[object Int8Array]"] = T["[object Int16Array]"] = T["[object Int32Array]"] = T["[object Uint8Array]"] = T["[object Uint8ClampedArray]"] = T["[object Uint16Array]"] = T["[object Uint32Array]"] = !0, T[l] = T[c] = T[R] = T[h] = T[A] = T[d] = T[v] = T[y] = T[_] = T[b] = T[g] = T[E] = T[S] = T[k] = T["[object WeakMap]"] = !1;var I = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
          N = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
          x = I || N || Function("return this")(),
          U = "object" == r(e) && e && !e.nodeType && e,
          C = U && "object" == r(n) && n && !n.nodeType && n,
          L = C && C.exports === U,
          D = L && I.process,
          F = function () {
        try {
          return D && D.binding && D.binding("util");
        } catch (t) {}
      }(),
          B = F && F.isTypedArray;function $(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) {
          if (e(t[n], n, t)) return !0;
        }return !1;
      }function G(t) {
        var e = -1,
            n = Array(t.size);return t.forEach(function (t, r) {
          n[++e] = [r, t];
        }), n;
      }function z(t) {
        var e = -1,
            n = Array(t.size);return t.forEach(function (t) {
          n[++e] = t;
        }), n;
      }var V,
          W,
          K,
          J = Array.prototype,
          Y = Function.prototype,
          q = Object.prototype,
          H = x["__core-js_shared__"],
          X = Y.toString,
          Q = q.hasOwnProperty,
          Z = (V = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "")) ? "Symbol(src)_1." + V : "",
          tt = q.toString,
          et = RegExp("^" + X.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          nt = L ? x.Buffer : void 0,
          rt = x.Symbol,
          it = x.Uint8Array,
          ot = q.propertyIsEnumerable,
          ut = J.splice,
          at = rt ? rt.toStringTag : void 0,
          st = Object.getOwnPropertySymbols,
          lt = nt ? nt.isBuffer : void 0,
          ct = (W = Object.keys, K = Object, function (t) {
        return W(K(t));
      }),
          ft = Ft(x, "DataView"),
          ht = Ft(x, "Map"),
          dt = Ft(x, "Promise"),
          vt = Ft(x, "Set"),
          yt = Ft(x, "WeakMap"),
          pt = Ft(Object, "create"),
          _t = zt(ft),
          bt = zt(ht),
          mt = zt(dt),
          gt = zt(vt),
          Ot = zt(yt),
          Et = rt ? rt.prototype : void 0,
          St = Et ? Et.valueOf : void 0;function kt(t) {
        var e = -1,
            n = null == t ? 0 : t.length;for (this.clear(); ++e < n;) {
          var r = t[e];this.set(r[0], r[1]);
        }
      }function jt(t) {
        var e = -1,
            n = null == t ? 0 : t.length;for (this.clear(); ++e < n;) {
          var r = t[e];this.set(r[0], r[1]);
        }
      }function wt(t) {
        var e = -1,
            n = null == t ? 0 : t.length;for (this.clear(); ++e < n;) {
          var r = t[e];this.set(r[0], r[1]);
        }
      }function Rt(t) {
        var e = -1,
            n = null == t ? 0 : t.length;for (this.__data__ = new wt(); ++e < n;) {
          this.add(t[e]);
        }
      }function At(t) {
        var e = this.__data__ = new jt(t);this.size = e.size;
      }function Pt(t, e) {
        var n = Kt(t),
            r = !n && Wt(t),
            i = !n && !r && Jt(t),
            o = !n && !r && !i && Qt(t),
            u = n || r || i || o,
            a = u ? function (t, e) {
          for (var n = -1, r = Array(t); ++n < t;) {
            r[n] = e(n);
          }return r;
        }(t.length, String) : [],
            s = a.length;for (var l in t) {
          !e && !Q.call(t, l) || u && ("length" == l || i && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Gt(l, s)) || a.push(l);
        }return a;
      }function Mt(t, e) {
        for (var n = t.length; n--;) {
          if (Vt(t[n][0], e)) return n;
        }return -1;
      }function Tt(t) {
        return null == t ? void 0 === t ? w : m : at && at in Object(t) ? function (t) {
          var e = Q.call(t, at),
              n = t[at];try {
            t[at] = void 0;var r = !0;
          } catch (t) {}var i = tt.call(t);r && (e ? t[at] = n : delete t[at]);return i;
        }(t) : function (t) {
          return tt.call(t);
        }(t);
      }function It(t) {
        return Xt(t) && Tt(t) == l;
      }function Nt(t, e, n, r, i) {
        return t === e || (null == t || null == e || !Xt(t) && !Xt(e) ? t != t && e != e : function (t, e, n, r, i, o) {
          var s = Kt(t),
              f = Kt(e),
              y = s ? c : $t(t),
              p = f ? c : $t(e),
              m = (y = y == l ? g : y) == g,
              O = (p = p == l ? g : p) == g,
              w = y == p;if (w && Jt(t)) {
            if (!Jt(e)) return !1;s = !0, m = !1;
          }if (w && !m) return o || (o = new At()), s || Qt(t) ? Ct(t, e, n, r, i, o) : function (t, e, n, r, i, o, s) {
            switch (n) {case A:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;t = t.buffer, e = e.buffer;case R:
                return !(t.byteLength != e.byteLength || !o(new it(t), new it(e)));case h:case d:case b:
                return Vt(+t, +e);case v:
                return t.name == e.name && t.message == e.message;case E:case k:
                return t == e + "";case _:
                var l = G;case S:
                var c = r & u;if (l || (l = z), t.size != e.size && !c) return !1;var f = s.get(t);if (f) return f == e;r |= a, s.set(t, e);var y = Ct(l(t), l(e), r, i, o, s);return s.delete(t), y;case j:
                if (St) return St.call(t) == St.call(e);}return !1;
          }(t, e, y, n, r, i, o);if (!(n & u)) {
            var P = m && Q.call(t, "__wrapped__"),
                M = O && Q.call(e, "__wrapped__");if (P || M) {
              var T = P ? t.value() : t,
                  I = M ? e.value() : e;return o || (o = new At()), i(T, I, n, r, o);
            }
          }if (!w) return !1;return o || (o = new At()), function (t, e, n, r, i, o) {
            var a = n & u,
                s = Lt(t),
                l = s.length,
                c = Lt(e).length;if (l != c && !a) return !1;for (var f = l; f--;) {
              var h = s[f];if (!(a ? h in e : Q.call(e, h))) return !1;
            }var d = o.get(t);if (d && o.get(e)) return d == e;var v = !0;o.set(t, e), o.set(e, t);for (var y = a; ++f < l;) {
              h = s[f];var p = t[h],
                  _ = e[h];if (r) var b = a ? r(_, p, h, e, t, o) : r(p, _, h, t, e, o);if (!(void 0 === b ? p === _ || i(p, _, n, r, o) : b)) {
                v = !1;break;
              }y || (y = "constructor" == h);
            }if (v && !y) {
              var m = t.constructor,
                  g = e.constructor;m != g && "constructor" in t && "constructor" in e && !("function" == typeof m && m instanceof m && "function" == typeof g && g instanceof g) && (v = !1);
            }return o.delete(t), o.delete(e), v;
          }(t, e, n, r, i, o);
        }(t, e, n, r, Nt, i));
      }function xt(t) {
        return !(!Ht(t) || Z && Z in t) && (Yt(t) ? et : P).test(zt(t));
      }function Ut(t) {
        if (n = (e = t) && e.constructor, r = "function" == typeof n && n.prototype || q, e !== r) return ct(t);var e,
            n,
            r,
            i = [];for (var o in Object(t)) {
          Q.call(t, o) && "constructor" != o && i.push(o);
        }return i;
      }function Ct(t, e, n, r, i, o) {
        var s = n & u,
            l = t.length,
            c = e.length;if (l != c && !(s && c > l)) return !1;var f = o.get(t);if (f && o.get(e)) return f == e;var h = -1,
            d = !0,
            v = n & a ? new Rt() : void 0;for (o.set(t, e), o.set(e, t); ++h < l;) {
          var y = t[h],
              p = e[h];if (r) var _ = s ? r(p, y, h, e, t, o) : r(y, p, h, t, e, o);if (void 0 !== _) {
            if (_) continue;d = !1;break;
          }if (v) {
            if (!$(e, function (t, e) {
              if (u = e, !v.has(u) && (y === t || i(y, t, n, r, o))) return v.push(e);var u;
            })) {
              d = !1;break;
            }
          } else if (y !== p && !i(y, p, n, r, o)) {
            d = !1;break;
          }
        }return o.delete(t), o.delete(e), d;
      }function Lt(t) {
        return function (t, e, n) {
          var r = e(t);return Kt(t) ? r : function (t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r;) {
              t[i + n] = e[n];
            }return t;
          }(r, n(t));
        }(t, Zt, Bt);
      }function Dt(t, e) {
        var n,
            i,
            o = t.__data__;return ("string" == (i = void 0 === (n = e) ? "undefined" : r(n)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof e ? "string" : "hash"] : o.map;
      }function Ft(t, e) {
        var n = function (t, e) {
          return null == t ? void 0 : t[e];
        }(t, e);return xt(n) ? n : void 0;
      }kt.prototype.clear = function () {
        this.__data__ = pt ? pt(null) : {}, this.size = 0;
      }, kt.prototype.delete = function (t) {
        var e = this.has(t) && delete this.__data__[t];return this.size -= e ? 1 : 0, e;
      }, kt.prototype.get = function (t) {
        var e = this.__data__;if (pt) {
          var n = e[t];return n === o ? void 0 : n;
        }return Q.call(e, t) ? e[t] : void 0;
      }, kt.prototype.has = function (t) {
        var e = this.__data__;return pt ? void 0 !== e[t] : Q.call(e, t);
      }, kt.prototype.set = function (t, e) {
        var n = this.__data__;return this.size += this.has(t) ? 0 : 1, n[t] = pt && void 0 === e ? o : e, this;
      }, jt.prototype.clear = function () {
        this.__data__ = [], this.size = 0;
      }, jt.prototype.delete = function (t) {
        var e = this.__data__,
            n = Mt(e, t);return !(n < 0 || (n == e.length - 1 ? e.pop() : ut.call(e, n, 1), --this.size, 0));
      }, jt.prototype.get = function (t) {
        var e = this.__data__,
            n = Mt(e, t);return n < 0 ? void 0 : e[n][1];
      }, jt.prototype.has = function (t) {
        return Mt(this.__data__, t) > -1;
      }, jt.prototype.set = function (t, e) {
        var n = this.__data__,
            r = Mt(n, t);return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
      }, wt.prototype.clear = function () {
        this.size = 0, this.__data__ = { hash: new kt(), map: new (ht || jt)(), string: new kt() };
      }, wt.prototype.delete = function (t) {
        var e = Dt(this, t).delete(t);return this.size -= e ? 1 : 0, e;
      }, wt.prototype.get = function (t) {
        return Dt(this, t).get(t);
      }, wt.prototype.has = function (t) {
        return Dt(this, t).has(t);
      }, wt.prototype.set = function (t, e) {
        var n = Dt(this, t),
            r = n.size;return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
      }, Rt.prototype.add = Rt.prototype.push = function (t) {
        return this.__data__.set(t, o), this;
      }, Rt.prototype.has = function (t) {
        return this.__data__.has(t);
      }, At.prototype.clear = function () {
        this.__data__ = new jt(), this.size = 0;
      }, At.prototype.delete = function (t) {
        var e = this.__data__,
            n = e.delete(t);return this.size = e.size, n;
      }, At.prototype.get = function (t) {
        return this.__data__.get(t);
      }, At.prototype.has = function (t) {
        return this.__data__.has(t);
      }, At.prototype.set = function (t, e) {
        var n = this.__data__;if (n instanceof jt) {
          var r = n.__data__;if (!ht || r.length < i - 1) return r.push([t, e]), this.size = ++n.size, this;n = this.__data__ = new wt(r);
        }return n.set(t, e), this.size = n.size, this;
      };var Bt = st ? function (t) {
        return null == t ? [] : (t = Object(t), function (t, e) {
          for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
            var u = t[n];e(u, n, t) && (o[i++] = u);
          }return o;
        }(st(t), function (e) {
          return ot.call(t, e);
        }));
      } : function () {
        return [];
      },
          $t = Tt;function Gt(t, e) {
        return !!(e = null == e ? s : e) && ("number" == typeof t || M.test(t)) && t > -1 && t % 1 == 0 && t < e;
      }function zt(t) {
        if (null != t) {
          try {
            return X.call(t);
          } catch (t) {}try {
            return t + "";
          } catch (t) {}
        }return "";
      }function Vt(t, e) {
        return t === e || t != t && e != e;
      }(ft && $t(new ft(new ArrayBuffer(1))) != A || ht && $t(new ht()) != _ || dt && "[object Promise]" != $t(dt.resolve()) || vt && $t(new vt()) != S || yt && "[object WeakMap]" != $t(new yt())) && ($t = function $t(t) {
        var e = Tt(t),
            n = e == g ? t.constructor : void 0,
            r = n ? zt(n) : "";if (r) switch (r) {case _t:
            return A;case bt:
            return _;case mt:
            return "[object Promise]";case gt:
            return S;case Ot:
            return "[object WeakMap]";}return e;
      });var Wt = It(function () {
        return arguments;
      }()) ? It : function (t) {
        return Xt(t) && Q.call(t, "callee") && !ot.call(t, "callee");
      },
          Kt = Array.isArray;var Jt = lt || function () {
        return !1;
      };function Yt(t) {
        if (!Ht(t)) return !1;var e = Tt(t);return e == y || e == p || e == f || e == O;
      }function qt(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= s;
      }function Ht(t) {
        var e = void 0 === t ? "undefined" : r(t);return null != t && ("object" == e || "function" == e);
      }function Xt(t) {
        return null != t && "object" == (void 0 === t ? "undefined" : r(t));
      }var Qt = B ? function (t) {
        return function (e) {
          return t(e);
        };
      }(B) : function (t) {
        return Xt(t) && qt(t.length) && !!T[Tt(t)];
      };function Zt(t) {
        return null != (e = t) && qt(e.length) && !Yt(e) ? Pt(t) : Ut(t);var e;
      }n.exports = function (t, e) {
        return Nt(t, e);
      };
    }).call(this, n(0), n(3)(t));
  }, function (t, e, n) {
    "use strict";
    (function (e) {
      var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          r = "Expected a function",
          i = "__lodash_hash_undefined__",
          o = 1 / 0,
          u = 9007199254740991,
          a = "[object Arguments]",
          s = "[object Function]",
          l = "[object GeneratorFunction]",
          c = "[object Symbol]",
          f = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          h = /^\w*$/,
          d = /^\./,
          v = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          y = /\\(\\)?/g,
          p = /^\[object .+?Constructor\]$/,
          _ = /^(?:0|[1-9]\d*)$/,
          b = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e,
          m = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
          g = b || m || Function("return this")();var O,
          E = Array.prototype,
          S = Function.prototype,
          k = Object.prototype,
          j = g["__core-js_shared__"],
          w = (O = /[^.]+$/.exec(j && j.keys && j.keys.IE_PROTO || "")) ? "Symbol(src)_1." + O : "",
          R = S.toString,
          A = k.hasOwnProperty,
          P = k.toString,
          M = RegExp("^" + R.call(A).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          T = g.Symbol,
          I = k.propertyIsEnumerable,
          N = E.splice,
          x = W(g, "Map"),
          U = W(Object, "create"),
          C = T ? T.prototype : void 0,
          L = C ? C.toString : void 0;function D(t) {
        var e = -1,
            n = t ? t.length : 0;for (this.clear(); ++e < n;) {
          var r = t[e];this.set(r[0], r[1]);
        }
      }function F(t) {
        var e = -1,
            n = t ? t.length : 0;for (this.clear(); ++e < n;) {
          var r = t[e];this.set(r[0], r[1]);
        }
      }function B(t) {
        var e = -1,
            n = t ? t.length : 0;for (this.clear(); ++e < n;) {
          var r = t[e];this.set(r[0], r[1]);
        }
      }function $(t, e) {
        for (var n, r, i = t.length; i--;) {
          if ((n = t[i][0]) === (r = e) || n != n && r != r) return i;
        }return -1;
      }function G(t, e) {
        return null != t && A.call(t, e);
      }function z(t) {
        return !(!Z(t) || w && w in t) && (X(t) || function (t) {
          var e = !1;if (null != t && "function" != typeof t.toString) try {
            e = !!(t + "");
          } catch (t) {}return e;
        }(t) ? M : p).test(function (t) {
          if (null != t) {
            try {
              return R.call(t);
            } catch (t) {}try {
              return t + "";
            } catch (t) {}
          }return "";
        }(t));
      }function V(t, e) {
        var r,
            i,
            o = t.__data__;return ("string" == (i = void 0 === (r = e) ? "undefined" : n(r)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== r : null === r) ? o["string" == typeof e ? "string" : "hash"] : o.map;
      }function W(t, e) {
        var n = function (t, e) {
          return null == t ? void 0 : t[e];
        }(t, e);return z(n) ? n : void 0;
      }function K(t, e, r) {
        for (var i, o, s = -1, l = (e = function (t, e) {
          if (H(t)) return !1;var r = void 0 === t ? "undefined" : n(t);if ("number" == r || "symbol" == r || "boolean" == r || null == t || et(t)) return !0;return h.test(t) || !f.test(t) || null != e && (t in Object(e));
        }(e, t) ? [e] : H(i = e) ? i : J(i)).length; ++s < l;) {
          var c = Y(e[s]);if (!(o = null != t && r(t, c))) break;t = t[c];
        }return o || !!(l = t ? t.length : 0) && Q(l) && function (t, e) {
          return !!(e = null == e ? u : e) && ("number" == typeof t || _.test(t)) && t > -1 && t % 1 == 0 && t < e;
        }(c, l) && (H(t) || function (t) {
          return function (t) {
            return tt(t) && function (t) {
              return null != t && Q(t.length) && !X(t);
            }(t);
          }(t) && A.call(t, "callee") && (!I.call(t, "callee") || P.call(t) == a);
        }(t));
      }D.prototype.clear = function () {
        this.__data__ = U ? U(null) : {};
      }, D.prototype.delete = function (t) {
        return this.has(t) && delete this.__data__[t];
      }, D.prototype.get = function (t) {
        var e = this.__data__;if (U) {
          var n = e[t];return n === i ? void 0 : n;
        }return A.call(e, t) ? e[t] : void 0;
      }, D.prototype.has = function (t) {
        var e = this.__data__;return U ? void 0 !== e[t] : A.call(e, t);
      }, D.prototype.set = function (t, e) {
        return this.__data__[t] = U && void 0 === e ? i : e, this;
      }, F.prototype.clear = function () {
        this.__data__ = [];
      }, F.prototype.delete = function (t) {
        var e = this.__data__,
            n = $(e, t);return !(n < 0 || (n == e.length - 1 ? e.pop() : N.call(e, n, 1), 0));
      }, F.prototype.get = function (t) {
        var e = this.__data__,
            n = $(e, t);return n < 0 ? void 0 : e[n][1];
      }, F.prototype.has = function (t) {
        return $(this.__data__, t) > -1;
      }, F.prototype.set = function (t, e) {
        var n = this.__data__,
            r = $(n, t);return r < 0 ? n.push([t, e]) : n[r][1] = e, this;
      }, B.prototype.clear = function () {
        this.__data__ = { hash: new D(), map: new (x || F)(), string: new D() };
      }, B.prototype.delete = function (t) {
        return V(this, t).delete(t);
      }, B.prototype.get = function (t) {
        return V(this, t).get(t);
      }, B.prototype.has = function (t) {
        return V(this, t).has(t);
      }, B.prototype.set = function (t, e) {
        return V(this, t).set(t, e), this;
      };var J = q(function (t) {
        var e;t = null == (e = t) ? "" : function (t) {
          if ("string" == typeof t) return t;if (et(t)) return L ? L.call(t) : "";var e = t + "";return "0" == e && 1 / t == -o ? "-0" : e;
        }(e);var n = [];return d.test(t) && n.push(""), t.replace(v, function (t, e, r, i) {
          n.push(r ? i.replace(y, "$1") : e || t);
        }), n;
      });function Y(t) {
        if ("string" == typeof t || et(t)) return t;var e = t + "";return "0" == e && 1 / t == -o ? "-0" : e;
      }function q(t, e) {
        if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(r);var n = function n() {
          var r = arguments,
              i = e ? e.apply(this, r) : r[0],
              o = n.cache;if (o.has(i)) return o.get(i);var u = t.apply(this, r);return n.cache = o.set(i, u), u;
        };return n.cache = new (q.Cache || B)(), n;
      }q.Cache = B;var H = Array.isArray;function X(t) {
        var e = Z(t) ? P.call(t) : "";return e == s || e == l;
      }function Q(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= u;
      }function Z(t) {
        var e = void 0 === t ? "undefined" : n(t);return !!t && ("object" == e || "function" == e);
      }function tt(t) {
        return !!t && "object" == (void 0 === t ? "undefined" : n(t));
      }function et(t) {
        return "symbol" == (void 0 === t ? "undefined" : n(t)) || tt(t) && P.call(t) == c;
      }t.exports = function (t, e) {
        return null != t && K(t, e, G);
      };
    }).call(this, n(0));
  }, function (t, e, n) {
    "use strict";
    (function (t, n) {
      var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          i = 9007199254740991,
          o = "[object Arguments]",
          u = "[object Function]",
          a = "[object GeneratorFunction]",
          s = "[object Map]",
          l = "[object Set]",
          c = /^\[object .+?Constructor\]$/,
          f = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
          h = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
          d = f || h || Function("return this")(),
          v = "object" == r(e) && e && !e.nodeType && e,
          y = v && "object" == r(n) && n && !n.nodeType && n,
          p = y && y.exports === v;var _,
          b,
          m,
          g = Function.prototype,
          O = Object.prototype,
          E = d["__core-js_shared__"],
          S = (_ = /[^.]+$/.exec(E && E.keys && E.keys.IE_PROTO || "")) ? "Symbol(src)_1." + _ : "",
          k = g.toString,
          j = O.hasOwnProperty,
          w = O.toString,
          R = RegExp("^" + k.call(j).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          A = p ? d.Buffer : void 0,
          P = O.propertyIsEnumerable,
          M = A ? A.isBuffer : void 0,
          T = (b = Object.keys, m = Object, function (t) {
        return b(m(t));
      }),
          I = V(d, "DataView"),
          N = V(d, "Map"),
          x = V(d, "Promise"),
          U = V(d, "Set"),
          C = V(d, "WeakMap"),
          L = !P.call({ valueOf: 1 }, "valueOf"),
          D = K(I),
          F = K(N),
          B = K(x),
          $ = K(U),
          G = K(C);function z(t) {
        return !(!Q(t) || S && S in t) && (X(t) || function (t) {
          var e = !1;if (null != t && "function" != typeof t.toString) try {
            e = !!(t + "");
          } catch (t) {}return e;
        }(t) ? R : c).test(K(t));
      }function V(t, e) {
        var n = function (t, e) {
          return null == t ? void 0 : t[e];
        }(t, e);return z(n) ? n : void 0;
      }var W = function W(t) {
        return w.call(t);
      };function K(t) {
        if (null != t) {
          try {
            return k.call(t);
          } catch (t) {}try {
            return t + "";
          } catch (t) {}
        }return "";
      }function J(t) {
        return function (t) {
          return function (t) {
            return !!t && "object" == (void 0 === t ? "undefined" : r(t));
          }(t) && q(t);
        }(t) && j.call(t, "callee") && (!P.call(t, "callee") || w.call(t) == o);
      }(I && "[object DataView]" != W(new I(new ArrayBuffer(1))) || N && W(new N()) != s || x && "[object Promise]" != W(x.resolve()) || U && W(new U()) != l || C && "[object WeakMap]" != W(new C())) && (W = function W(t) {
        var e = w.call(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? K(n) : void 0;if (r) switch (r) {case D:
            return "[object DataView]";case F:
            return s;case B:
            return "[object Promise]";case $:
            return l;case G:
            return "[object WeakMap]";}return e;
      });var Y = Array.isArray;function q(t) {
        return null != t && function (t) {
          return "number" == typeof t && t > -1 && t % 1 == 0 && t <= i;
        }(t.length) && !X(t);
      }var H = M || function () {
        return !1;
      };function X(t) {
        var e = Q(t) ? w.call(t) : "";return e == u || e == a;
      }function Q(t) {
        var e = void 0 === t ? "undefined" : r(t);return !!t && ("object" == e || "function" == e);
      }n.exports = function (t) {
        if (q(t) && (Y(t) || "string" == typeof t || "function" == typeof t.splice || H(t) || J(t))) return !t.length;var e = W(t);if (e == s || e == l) return !t.size;if (L || function (t) {
          var e = t && t.constructor;return t === ("function" == typeof e && e.prototype || O);
        }(t)) return !T(t).length;for (var n in t) {
          if (j.call(t, n)) return !1;
        }return !0;
      };
    }).call(this, n(0), n(3)(t));
  }, function (t, e, n) {
    "use strict";
    (function (e) {
      var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          r = "Expected a function",
          i = "__lodash_hash_undefined__",
          o = 1 / 0,
          u = "[object Function]",
          a = "[object GeneratorFunction]",
          s = "[object Symbol]",
          l = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          c = /^\w*$/,
          f = /^\./,
          h = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          d = /\\(\\)?/g,
          v = /^\[object .+?Constructor\]$/,
          y = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e,
          p = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
          _ = y || p || Function("return this")();var b,
          m = Array.prototype,
          g = Function.prototype,
          O = Object.prototype,
          E = _["__core-js_shared__"],
          S = (b = /[^.]+$/.exec(E && E.keys && E.keys.IE_PROTO || "")) ? "Symbol(src)_1." + b : "",
          k = g.toString,
          j = O.hasOwnProperty,
          w = O.toString,
          R = RegExp("^" + k.call(j).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          A = _.Symbol,
          P = m.splice,
          M = B(_, "Map"),
          T = B(Object, "create"),
          I = A ? A.prototype : void 0,
          N = I ? I.toString : void 0;function x(t) {
        var e = -1,
            n = t ? t.length : 0;for (this.clear(); ++e < n;) {
          var r = t[e];this.set(r[0], r[1]);
        }
      }function U(t) {
        var e = -1,
            n = t ? t.length : 0;for (this.clear(); ++e < n;) {
          var r = t[e];this.set(r[0], r[1]);
        }
      }function C(t) {
        var e = -1,
            n = t ? t.length : 0;for (this.clear(); ++e < n;) {
          var r = t[e];this.set(r[0], r[1]);
        }
      }function L(t, e) {
        for (var n, r, i = t.length; i--;) {
          if ((n = t[i][0]) === (r = e) || n != n && r != r) return i;
        }return -1;
      }function D(t) {
        return !(!K(t) || S && S in t) && (W(t) || function (t) {
          var e = !1;if (null != t && "function" != typeof t.toString) try {
            e = !!(t + "");
          } catch (t) {}return e;
        }(t) ? R : v).test(function (t) {
          if (null != t) {
            try {
              return k.call(t);
            } catch (t) {}try {
              return t + "";
            } catch (t) {}
          }return "";
        }(t));
      }function F(t, e) {
        var r,
            i,
            o = t.__data__;return ("string" == (i = void 0 === (r = e) ? "undefined" : n(r)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== r : null === r) ? o["string" == typeof e ? "string" : "hash"] : o.map;
      }function B(t, e) {
        var n = function (t, e) {
          return null == t ? void 0 : t[e];
        }(t, e);return D(n) ? n : void 0;
      }x.prototype.clear = function () {
        this.__data__ = T ? T(null) : {};
      }, x.prototype.delete = function (t) {
        return this.has(t) && delete this.__data__[t];
      }, x.prototype.get = function (t) {
        var e = this.__data__;if (T) {
          var n = e[t];return n === i ? void 0 : n;
        }return j.call(e, t) ? e[t] : void 0;
      }, x.prototype.has = function (t) {
        var e = this.__data__;return T ? void 0 !== e[t] : j.call(e, t);
      }, x.prototype.set = function (t, e) {
        return this.__data__[t] = T && void 0 === e ? i : e, this;
      }, U.prototype.clear = function () {
        this.__data__ = [];
      }, U.prototype.delete = function (t) {
        var e = this.__data__,
            n = L(e, t);return !(n < 0 || (n == e.length - 1 ? e.pop() : P.call(e, n, 1), 0));
      }, U.prototype.get = function (t) {
        var e = this.__data__,
            n = L(e, t);return n < 0 ? void 0 : e[n][1];
      }, U.prototype.has = function (t) {
        return L(this.__data__, t) > -1;
      }, U.prototype.set = function (t, e) {
        var n = this.__data__,
            r = L(n, t);return r < 0 ? n.push([t, e]) : n[r][1] = e, this;
      }, C.prototype.clear = function () {
        this.__data__ = { hash: new x(), map: new (M || U)(), string: new x() };
      }, C.prototype.delete = function (t) {
        return F(this, t).delete(t);
      }, C.prototype.get = function (t) {
        return F(this, t).get(t);
      }, C.prototype.has = function (t) {
        return F(this, t).has(t);
      }, C.prototype.set = function (t, e) {
        return F(this, t).set(t, e), this;
      };var $ = z(function (t) {
        var e;t = null == (e = t) ? "" : function (t) {
          if ("string" == typeof t) return t;if (J(t)) return N ? N.call(t) : "";var e = t + "";return "0" == e && 1 / t == -o ? "-0" : e;
        }(e);var n = [];return f.test(t) && n.push(""), t.replace(h, function (t, e, r, i) {
          n.push(r ? i.replace(d, "$1") : e || t);
        }), n;
      });function G(t) {
        if ("string" == typeof t || J(t)) return t;var e = t + "";return "0" == e && 1 / t == -o ? "-0" : e;
      }function z(t, e) {
        if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(r);var n = function n() {
          var r = arguments,
              i = e ? e.apply(this, r) : r[0],
              o = n.cache;if (o.has(i)) return o.get(i);var u = t.apply(this, r);return n.cache = o.set(i, u), u;
        };return n.cache = new (z.Cache || C)(), n;
      }z.Cache = C;var V = Array.isArray;function W(t) {
        var e = K(t) ? w.call(t) : "";return e == u || e == a;
      }function K(t) {
        var e = void 0 === t ? "undefined" : n(t);return !!t && ("object" == e || "function" == e);
      }function J(t) {
        return "symbol" == (void 0 === t ? "undefined" : n(t)) || function (t) {
          return !!t && "object" == (void 0 === t ? "undefined" : n(t));
        }(t) && w.call(t) == s;
      }t.exports = function (t, e, r) {
        var i = -1,
            o = (e = function (t, e) {
          if (V(t)) return !1;var r = void 0 === t ? "undefined" : n(t);return !("number" != r && "symbol" != r && "boolean" != r && null != t && !J(t)) || c.test(t) || !l.test(t) || null != e && t in Object(e);
        }(e, t) ? [e] : function (t) {
          return V(t) ? t : $(t);
        }(e)).length;for (o || (t = void 0, o = 1); ++i < o;) {
          var u = null == t ? void 0 : t[G(e[i])];void 0 === u && (i = o, u = r), t = W(u) ? u.call(t) : u;
        }return t;
      };
    }).call(this, n(0));
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };Object.defineProperty(e, "__esModule", { value: !0 });var i = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function (t) {
      return void 0 === t ? "undefined" : r(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : r(t);
    },
        o = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        u = n(11),
        a = n(25);var s = Math.pow(2, -51),
        l = 1 - s,
        c = function () {
      function t(e, n, r, i, o) {
        if (function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.missing = [], this.missingMap = {}, this.formatValidators = e ? Object.create(e.formatValidators) : {}, this.schemas = e ? Object.create(e.schemas) : {}, this.collectMultiple = n, this.errors = [], this.handleError = n ? this.collectError : this.returnError, i && (this.checkRecursive = !0, this.scanned = [], this.scannedFrozen = [], this.scannedFrozenSchemas = [], this.scannedFrozenValidationErrors = [], this.validatedSchemasKey = "tv4_validation_id", this.validationErrorsKey = "tv4_validation_errors_id"), o && (this.trackUnknownProperties = !0, this.knownPropertyPaths = {}, this.unknownPropertyPaths = {}), this.errorMessages = r, this.definedKeywords = {}, e) for (var u in e.definedKeywords) {
          this.definedKeywords[u] = e.definedKeywords[u].slice(0);
        }
      }return o(t, [{ key: "notReallyPercentEncode", value: function value(t) {
          return encodeURI(t).replace(/%25[0-9][0-9]/g, function (t) {
            return "%" + t.substring(3);
          });
        } }, { key: "uriTemplateSubstitution", value: function value(t) {
          var e = this,
              n = "";URI_TEMPLATE_GLOBAL_MODIFIERS[t.charAt(0)] && (n = t.charAt(0), t = t.substring(1));var r = "",
              o = "",
              u = !0,
              a = !1,
              s = !1;"+" === n ? u = !1 : "." === n ? (o = ".", r = ".") : "/" === n ? (o = "/", r = "/") : "#" === n ? (o = "#", u = !1) : ";" === n ? (o = ";", r = ";", a = !0, s = !0) : "?" === n ? (o = "?", r = "&", a = !0) : "&" === n && (o = "&", r = "&", a = !0);var l = [],
              c = t.split(","),
              f = [],
              h = {},
              d = 0,
              v = c.length;for (d = 0; d < v; d++) {
            var y = c[d],
                p = null;if (-1 !== y.indexOf(":")) {
              var _ = y.split(":");y = _[0], p = parseInt(_[1], 10);
            }for (var b = {}; URI_TEMPLATE_SUFFICES[y.charAt(y.length - 1)];) {
              b[y.charAt(y.length - 1)] = !0, y = y.substring(0, y.length - 1);
            }var m = { truncate: p, name: y, suffices: b };f.push(m), h[y] = m, l.push(y);
          }var g = function g(t) {
            var n = "",
                l = 0,
                c = 0,
                h = f.length;for (c = 0; c < h; c++) {
              var d = f[c];if (!t && !isFunction(t)) throw new Error("Problem qith value function.");var v = t(d.name);if (null === v || void 0 === v || Array.isArray(v) && 0 === v.length || "object" === (void 0 === v ? "undefined" : i(v)) && 0 === Object.keys(v).length) l++;else if (n += c === l ? o : r || ",", Array.isArray(v)) {
                a && (n += d.name + "=");var y = 0;for (h = v.length, y = 0; y < h; y++) {
                  y > 0 && (n += d.suffices["*"] && r || ",", d.suffices["*"] && a && (n += d.name + "=")), n += u ? encodeURIComponent(v[y]).replace(/!/g, "%21") : e.notReallyPercentEncode(v[y]);
                }
              } else if ("object" === (void 0 === v ? "undefined" : i(v))) {
                a && !d.suffices["*"] && (n += d.name + "=");var p = !0;for (var _ in v) {
                  p || (n += d.suffices["*"] && r || ","), p = !1, n += u ? encodeURIComponent(_).replace(/!/g, "%21") : e.notReallyPercentEncode(_), n += d.suffices["*"] ? "=" : ",", n += u ? encodeURIComponent(v[_]).replace(/!/g, "%21") : e.notReallyPercentEncode(v[_]);
                }
              } else a && (n += d.name, s && "" === v || (n += "=")), null !== d.truncate && (v = v.substring(0, d.truncate)), n += u ? encodeURIComponent(v).replace(/!/g, "%21") : e.notReallyPercentEncode(v);
            }return n;
          };return g.varNames = l, { prefix: o, substitution: g };
        } }, { key: "recursiveCompare", value: function value(t, e) {
          if (t === e) return !0;if ("object" === (void 0 === t ? "undefined" : i(t)) && "object" === (void 0 === e ? "undefined" : i(e))) {
            if (Array.isArray(t) !== Array.isArray(e)) return !1;if (Array.isArray(t)) {
              if (t.length !== e.length) return !1;var n = 0,
                  r = t.length;for (n = 0; n < r; n++) {
                if (!this.recursiveCompare(t[n], e[n])) return !1;
              }
            } else {
              var o = void 0;for (o in t) {
                if (void 0 === e[o] && void 0 !== t[o]) return !1;
              }for (o in e) {
                if (void 0 === t[o] && void 0 !== e[o]) return !1;
              }for (o in t) {
                if (!this.recursiveCompare(t[o], e[o])) return !1;
              }
            }return !0;
          }return !1;
        } }, { key: "defineKeyword", value: function value(t, e) {
          this.definedKeywords[t] = this.definedKeywords[t] || [], this.definedKeywords[t].push(e);
        } }, { key: "createError", value: function value(t, e, n, r, i) {
          var o = this.errorMessages[t] || u.ERROR_MESSAGES_DEFAULT[t];if ("string" != typeof o) return new u.ValidationError(t, "Unknown error code " + t + ": " + JSON.stringify(e), e, n, r, i);var a = o.replace(/\{([^{}]*)\}/g, function (t, n) {
            var r = e[n];return "string" == typeof r || "number" == typeof r ? r : t;
          });return new u.ValidationError(t, a, e, n, r, i);
        } }, { key: "returnError", value: function value(t) {
          return t;
        } }, { key: "collectError", value: function value(t) {
          return t && this.errors.push(t), null;
        } }, { key: "prefixErrors", value: function value(t, e, n) {
          var r = 0,
              i = this.errors.length;for (r = t; r < i; r++) {
            this.errors[r] = this.errors[r].prefixWith(e, n);
          }return this;
        } }, { key: "banUnknownProperties", value: function value() {
          for (var t in this.unknownPropertyPaths) {
            var e = this.createError(u.ERROR_CODES.UNKNOWN_PROPERTY, { path: t }, t, ""),
                n = this.handleError(e);if (n) return n;
          }return null;
        } }, { key: "addFormat", value: function value(t, e) {
          if ("object" === (void 0 === t ? "undefined" : i(t))) {
            for (var n in t) {
              this.addFormat(n, t[n]);
            }return this;
          }this.formatValidators[t] = e;
        } }, { key: "resolveRefs", value: function value(t, e) {
          if (void 0 !== t.$ref) {
            if ((e = e || {})[t.$ref]) return this.createError(u.ERROR_CODES.CIRCULAR_REFERENCE, { urls: Object.keys(e).join(", ") }, "", "");e[t.$ref] = !0, t = this.getSchema(t.$ref, e);
          }return t;
        } }, { key: "getSchema", value: function value(t, e) {
          var n = void 0;if (void 0 !== this.schemas[t]) return n = this.schemas[t], this.resolveRefs(n, e);var r = t,
              o = "";if (-1 !== t.indexOf("#") && (o = t.substring(t.indexOf("#") + 1), r = t.substring(0, t.indexOf("#"))), "object" === i(this.schemas[r])) {
            n = this.schemas[r];var u = decodeURIComponent(o);if ("" === u) return this.resolveRefs(n, e);if ("/" !== u.charAt(0)) return;var a = u.split("/").slice(1),
                s = 0,
                l = a.length;for (s = 0; s < l; s++) {
              var c = a[s].replace(/~1/g, "/").replace(/~0/g, "~");if (void 0 === n[c]) {
                n = void 0;break;
              }n = n[c];
            }if (void 0 !== n) return this.resolveRefs(n, e);
          }void 0 === this.missing[r] && (this.missing.push(r), this.missing[r] = r, this.missingMap[r] = r);
        } }, { key: "searchSchemas", value: function value(t, e) {
          if (Array.isArray(t)) {
            var n = 0,
                r = t.length;for (n = 0; n < r; n++) {
              this.searchSchemas(t[n], e);
            }
          } else if (t && "object" === (void 0 === t ? "undefined" : i(t))) for (var o in "string" == typeof t.id && isTrustedUrl(e, t.id) && void 0 === this.schemas[t.id] && (this.schemas[t.id] = t), t) {
            if ("enum" !== o) if ("object" === i(t[o])) this.searchSchemas(t[o], e);else if ("$ref" === o) {
              var u = (0, a.getDocumentUri)(t[o]);u && void 0 === this.schemas[u] && void 0 === this.missingMap[u] && (this.missingMap[u] = u);
            }
          }
        } }, { key: "addSchema", value: function value(t, e) {
          if ("string" != typeof t || void 0 === e) {
            if ("object" !== (void 0 === t ? "undefined" : i(t)) || "string" != typeof t.id) return;t = (e = t).id;
          }t === (0, a.getDocumentUri)(t) + "#" && (t = (0, a.getDocumentUri)(t)), this.schemas[t] = e, delete this.missingMap[t], (0, a.normSchema)(e, t), this.searchSchemas(e, t);
        } }, { key: "getSchemaMap", value: function value() {
          var t = {};for (var e in this.schemas) {
            t[e] = this.schemas[e];
          }return t;
        } }, { key: "getSchemaUris", value: function value(t) {
          var e = [];for (var n in this.schemas) {
            t && !t.test(n) || e.push(n);
          }return e;
        } }, { key: "getMissingUris", value: function value(t) {
          var e = [];for (var n in this.missingMap) {
            t && !t.test(n) || e.push(n);
          }return e;
        } }, { key: "dropSchemas", value: function value() {
          this.schemas = {}, this.reset();
        } }, { key: "reset", value: function value() {
          this.missing = [], this.missingMap = {}, this.errors = [];
        } }, { key: "validateAll", value: function value(t, e, n, r, o) {
          var a = void 0;if (!(e = this.resolveRefs(e))) return null;if (e instanceof u.ValidationError) return this.errors.push(e), e;var s = this.errors.length,
              l = void 0,
              c = null,
              f = null;if (this.checkRecursive && t && "object" === (void 0 === t ? "undefined" : i(t))) {
            if (a = !this.scanned.length, t[this.validatedSchemasKey]) {
              var h = t[this.validatedSchemasKey].indexOf(e);if (-1 !== h) return this.errors = this.errors.concat(t[this.validationErrorsKey][h]), null;
            }if (Object.isFrozen(t) && -1 !== (l = this.scannedFrozen.indexOf(t))) {
              var d = this.scannedFrozenSchemas[l].indexOf(e);if (-1 !== d) return this.errors = this.errors.concat(this.scannedFrozenValidationErrors[l][d]), null;
            }if (this.scanned.push(t), Object.isFrozen(t)) -1 === l && (l = this.scannedFrozen.length, this.scannedFrozen.push(t), this.scannedFrozenSchemas.push([])), c = this.scannedFrozenSchemas[l].length, this.scannedFrozenSchemas[l][c] = e, this.scannedFrozenValidationErrors[l][c] = [];else {
              if (!t[this.validatedSchemasKey]) try {
                Object.defineProperty(t, this.validatedSchemasKey, { value: [], configurable: !0 }), Object.defineProperty(t, this.validationErrorsKey, { value: [], configurable: !0 });
              } catch (e) {
                t[this.validatedSchemasKey] = [], t[this.validationErrorsKey] = [];
              }f = t[this.validatedSchemasKey].length, t[this.validatedSchemasKey][f] = e, t[this.validationErrorsKey][f] = [];
            }
          }var v = this.errors.length,
              y = this.validateBasic(t, e, o) || this.validateNumeric(t, e, o) || this.validateString(t, e, o) || this.validateArray(t, e, o) || this.validateObject(t, e, o) || this.validateCombinations(t, e, o) || this.validateHypermedia(t, e, o) || this.validateFormat(t, e, o) || this.validateDefinedKeywords(t, e, o) || null;if (a) {
            for (; this.scanned.length;) {
              delete this.scanned.pop()[this.validatedSchemasKey];
            }this.scannedFrozen = [], this.scannedFrozenSchemas = [];
          }if (y || v !== this.errors.length) for (; n && n.length || r && r.length;) {
            var p = n && n.length ? "" + n.pop() : null,
                _ = r && r.length ? "" + r.pop() : null;y && (y = y.prefixWith(p, _)), this.prefixErrors(v, p, _);
          }return null !== c ? this.scannedFrozenValidationErrors[l][c] = this.errors.slice(s) : null !== f && (t[this.validationErrorsKey][f] = this.errors.slice(s)), this.handleError(y);
        } }, { key: "validateFormat", value: function value(t, e) {
          if ("string" != typeof e.format || !this.formatValidators[e.format]) return null;var n = this.formatValidators[e.format].call(null, t, e);return "string" == typeof n || "number" == typeof n ? this.createError(u.ERROR_CODES.FORMAT_CUSTOM, { message: n }).prefixWith(null, "format") : n && "object" === (void 0 === n ? "undefined" : i(n)) ? this.createError(u.ERROR_CODES.FORMAT_CUSTOM, { message: n.message || "?" }, n.dataPath || null, n.schemaPath || "/format") : null;
        } }, { key: "validateDefinedKeywords", value: function value(t, e, n) {
          for (var r in this.definedKeywords) {
            if (void 0 !== e[r]) {
              var o = this.definedKeywords[r],
                  a = 0,
                  s = o.length;for (a = 0; a < s; a++) {
                var l = (0, o[a])(t, e[r], e, n);if ("string" == typeof l || "number" == typeof l) return this.createError(u.ERROR_CODES.KEYWORD_CUSTOM, { key: r, message: l }).prefixWith(null, "format");if (l && "object" === (void 0 === l ? "undefined" : i(l))) {
                  var c = l.code;if ("string" == typeof c) {
                    if (!u.ERROR_CODES[c]) throw new Error("Undefined error code (use defineError): " + c);c = u.ERROR_CODES[c];
                  } else "number" != typeof c && (c = u.ERROR_CODES.KEYWORD_CUSTOM);var f = "object" === i(l.message) ? l.message : { key: r, message: l.message || "?" },
                      h = l.schemaPath || "/" + r.replace(/~/g, "~0").replace(/\//g, "~1");return this.createError(c, f, l.dataPath || null, h);
                }
              }
            }
          }return null;
        } }, { key: "validateBasic", value: function value(t, e, n) {
          var r = this.validateType(t, e, n);return r ? r.prefixWith(null, "type") : null;
        } }, { key: "validateType", value: function value(t, e) {
          if (void 0 === e.type) return null;var n = void 0 === t ? "undefined" : i(t);null === t ? n = "null" : Array.isArray(t) && (n = "array");var r = e.type;"object" !== (void 0 === r ? "undefined" : i(r)) && (r = [r]);var o = 0,
              a = r.length;for (o = 0; o < a; o++) {
            var s = r[o];if (s === n || "integer" === s && "number" === n && t % 1 == 0) return null;
          }return this.createError(u.ERROR_CODES.INVALID_TYPE, { type: n, expected: r.join("/") });
        } }, { key: "validateEnum", value: function value(t, e) {
          if (void 0 === e.enum) return null;var n = 0,
              r = e.enum.length;for (n = 0; n < r; n++) {
            var i = e.enum[n];if (this.recursiveCompare(t, i)) return null;
          }return this.createError(u.ERROR_CODES.ENUM_MISMATCH, { value: "undefined" != typeof JSON ? JSON.stringify(t) : t });
        } }, { key: "validateNumeric", value: function value(t, e, n) {
          return this.validateMultipleOf(t, e, n) || this.validateMinMax(t, e, n) || this.validateNaN(t, e, n) || null;
        } }, { key: "validateMultipleOf", value: function value(t, e) {
          var n = e.multipleOf || e.divisibleBy;if (void 0 === n) return null;if ("number" == typeof t) {
            var r = t / n % 1;if (r >= s && r < l) return this.createError(u.ERROR_CODES.NUMBER_MULTIPLE_OF, { value: t, multipleOf: n });
          }return null;
        } }, { key: "validateMinMax", value: function value(t, e) {
          if ("number" != typeof t) return null;if (void 0 !== e.minimum) {
            if (t < e.minimum) return this.createError(u.ERROR_CODES.NUMBER_MINIMUM, { value: t, minimum: e.minimum }).prefixWith(null, "minimum");if (e.exclusiveMinimum && t === e.minimum) return this.createError(u.ERROR_CODES.NUMBER_MINIMUM_EXCLUSIVE, { value: t, minimum: e.minimum }).prefixWith(null, "exclusiveMinimum");
          }if (void 0 !== e.maximum) {
            if (t > e.maximum) return this.createError(u.ERROR_CODES.NUMBER_MAXIMUM, { value: t, maximum: e.maximum }).prefixWith(null, "maximum");if (e.exclusiveMaximum && t === e.maximum) return this.createError(u.ERROR_CODES.NUMBER_MAXIMUM_EXCLUSIVE, { value: t, maximum: e.maximum }).prefixWith(null, "exclusiveMaximum");
          }return null;
        } }, { key: "validateNaN", value: function value(t) {
          return "number" != typeof t ? null : !0 === isNaN(t) || t === 1 / 0 || t === -1 / 0 ? this.createError(u.ERROR_CODES.NUMBER_NOT_A_NUMBER, { value: t }).prefixWith(null, "type") : null;
        } }, { key: "validateString", value: function value(t, e, n) {
          return this.validateStringLength(t, e, n) || this.validateStringPattern(t, e, n) || null;
        } }, { key: "validateStringLength", value: function value(t, e) {
          return "string" != typeof t ? null : void 0 !== e.minLength && t.length < e.minLength ? this.createError(u.ERROR_CODES.STRING_LENGTH_SHORT, { length: t.length, minimum: e.minLength }).prefixWith(null, "minLength") : void 0 !== e.maxLength && t.length > e.maxLength ? this.createError(u.ERROR_CODES.STRING_LENGTH_LONG, { length: t.length, maximum: e.maxLength }).prefixWith(null, "maxLength") : null;
        } }, { key: "validateStringPattern", value: function value(t, e) {
          return "string" != typeof t || void 0 === e.pattern ? null : new RegExp(e.pattern).test(t) ? null : this.createError(u.ERROR_CODES.STRING_PATTERN, { pattern: e.pattern }).prefixWith(null, "pattern");
        } }, { key: "validateArray", value: function value(t, e, n) {
          return Array.isArray(t) && (this.validateArrayLength(t, e, n) || this.validateArrayUniqueItems(t, e, n) || this.validateArrayItems(t, e, n)) || null;
        } }, { key: "validateArrayLength", value: function value(t, e) {
          var n = void 0;return void 0 !== e.minItems && t.length < e.minItems && (n = this.createError(u.ERROR_CODES.ARRAY_LENGTH_SHORT, { length: t.length, minimum: e.minItems }).prefixWith(null, "minItems"), this.handleError(n)) ? n : void 0 !== e.maxItems && t.length > e.maxItems && (n = this.createError(u.ERROR_CODES.ARRAY_LENGTH_LONG, { length: t.length, maximum: e.maxItems }).prefixWith(null, "maxItems"), this.handleError(n)) ? n : null;
        } }, { key: "validateArrayUniqueItems", value: function value(t, e) {
          if (e.uniqueItems) {
            var n = 0,
                r = t.length;for (n = 0; n < r; n++) {
              var i = 0;for (i = n + 1; i < r; i++) {
                if (recursiveCompare(t[n], t[i])) {
                  var o = this.createError(u.ERROR_CODES.ARRAY_UNIQUE, { match1: n, match2: i }).prefixWith(null, "uniqueItems");if (this.handleError(o)) return o;
                }
              }
            }
          }return null;
        } }, { key: "validateArrayItems", value: function value(t, e, n) {
          if (void 0 === e.items) return null;var r = void 0,
              i = void 0;if (Array.isArray(e.items)) {
            var o = t.length;for (i = 0; i < o; i++) {
              if (i < e.items.length) {
                if (r = this.validateAll(t[i], e.items[i], [i], ["items", i], n + "/" + i)) return r;
              } else if (void 0 !== e.additionalItems) if ("boolean" == typeof e.additionalItems) {
                if (!e.additionalItems && (r = this.createError(u.ERROR_CODES.ARRAY_ADDITIONAL_ITEMS, {}).prefixWith("" + i, "additionalItems"), this.handleError(r))) return r;
              } else if (r = this.validateAll(t[i], e.additionalItems, [i], ["additionalItems"], n + "/" + i)) return r;
            }
          } else {
            var a = t.length;for (i = 0; i < a; i++) {
              if (r = this.validateAll(t[i], e.items, [i], ["items"], n + "/" + i)) return r;
            }
          }return null;
        } }, { key: "validateObject", value: function value(t, e, n) {
          return "object" !== (void 0 === t ? "undefined" : i(t)) || null === t || Array.isArray(t) ? null : this.validateObjectMinMaxProperties(t, e, n) || this.validateObjectRequiredProperties(t, e, n) || this.validateObjectProperties(t, e, n) || this.validateObjectDependencies(t, e, n) || null;
        } }, { key: "validateObjectMinMaxProperties", value: function value(t, e) {
          var n = Object.keys(t),
              r = void 0;return void 0 !== e.minProperties && n.length < e.minProperties && (r = this.createError(u.ERROR_CODES.OBJECT_PROPERTIES_MINIMUM, { propertyCount: n.length, minimum: e.minProperties }).prefixWith(null, "minProperties"), this.handleError(r)) ? r : void 0 !== e.maxProperties && n.length > e.maxProperties && (r = this.createError(u.ERROR_CODES.OBJECT_PROPERTIES_MAXIMUM, { propertyCount: n.length, maximum: e.maxProperties }).prefixWith(null, "maxProperties"), this.handleError(r)) ? r : null;
        } }, { key: "validateObjectRequiredProperties", value: function value(t, e) {
          if (void 0 !== e.required) {
            var n = 0,
                r = e.required.length;for (n = 0; n < r; n++) {
              var i = e.required[n];if (void 0 === t[i]) {
                var o = this.createError(u.ERROR_CODES.OBJECT_REQUIRED, { key: i }).prefixWith(null, "" + n).prefixWith(null, "required");if (this.handleError(o)) return o;
              }
            }
          }return null;
        } }, { key: "validateObjectProperties", value: function value(t, e, n) {
          var r = void 0;for (var i in t) {
            var o = n + "/" + i.replace(/~/g, "~0").replace(/\//g, "~1"),
                a = !1;if (void 0 !== e.properties && void 0 !== e.properties[i] && (a = !0, r = this.validateAll(t[i], e.properties[i], [i], ["properties", i], o))) return r;if (void 0 !== e.patternProperties) for (var s in e.patternProperties) {
              if (new RegExp(s).test(i) && (a = !0, r = this.validateAll(t[i], e.patternProperties[s], [i], ["patternProperties", s], o))) return r;
            }if (a) this.trackUnknownProperties && (this.knownPropertyPaths[o] = !0, delete this.unknownPropertyPaths[o]);else if (void 0 !== e.additionalProperties) {
              if (this.trackUnknownProperties && (this.knownPropertyPaths[o] = !0, delete this.unknownPropertyPaths[o]), "boolean" == typeof e.additionalProperties) {
                if (!e.additionalProperties && (r = this.createError(u.ERROR_CODES.OBJECT_ADDITIONAL_PROPERTIES, {}).prefixWith(i, "additionalProperties"), this.handleError(r))) return r;
              } else if (r = this.validateAll(t[i], e.additionalProperties, [i], ["additionalProperties"], o)) return r;
            } else this.trackUnknownProperties && !this.knownPropertyPaths[o] && (this.unknownPropertyPaths[o] = !0);
          }return null;
        } }, { key: "validateObjectDependencies", value: function value(t, e, n) {
          var r = void 0;if (void 0 !== e.dependencies) for (var i in e.dependencies) {
            if (void 0 !== t[i]) {
              var o = e.dependencies[i];if ("string" == typeof o) {
                if (void 0 === t[o] && (r = this.createError(u.ERROR_CODES.OBJECT_DEPENDENCY_KEY, { key: i, missing: o }).prefixWith(null, i).prefixWith(null, "dependencies"), this.handleError(r))) return r;
              } else if (Array.isArray(o)) {
                var a = 0,
                    s = o.lenth;for (a = 0; a < s; a++) {
                  var l = o[a];if (void 0 === t[l] && (r = this.createError(u.ERROR_CODES.OBJECT_DEPENDENCY_KEY, { key: i, missing: l }).prefixWith(null, "" + a).prefixWith(null, i).prefixWith(null, "dependencies"), this.handleError(r))) return r;
                }
              } else if (r = this.validateAll(t, o, [], ["dependencies", i], n)) return r;
            }
          }return null;
        } }, { key: "validateCombinations", value: function value(t, e, n) {
          return this.validateAllOf(t, e, n) || this.validateAnyOf(t, e, n) || this.validateOneOf(t, e, n) || this.validateNot(t, e, n) || null;
        } }, { key: "validateAllOf", value: function value(t, e, n) {
          if (void 0 === e.allOf) return null;var r = void 0,
              i = 0,
              o = e.allOf.length;for (i = 0; i < o; i++) {
            var u = e.allOf[i];if (r = this.validateAll(t, u, [], ["allOf", i], n)) return r;
          }return null;
        } }, { key: "validateAnyOf", value: function value(t, e, n) {
          if (void 0 === e.anyOf) return null;var r = [],
              i = this.errors.length,
              o = void 0,
              a = void 0;this.trackUnknownProperties && (o = this.unknownPropertyPaths, a = this.knownPropertyPaths);var s = !0,
              l = 0,
              c = e.anyOf.length;for (l = 0; l < c; l++) {
            this.trackUnknownProperties && (this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});var f = e.anyOf[l],
                h = this.errors.length,
                d = this.validateAll(t, f, [], ["anyOf", l], n);if (null === d && h === this.errors.length) {
              if (this.errors = this.errors.slice(0, i), this.trackUnknownProperties) {
                for (var v in this.knownPropertyPaths) {
                  a[v] = !0, delete o[v];
                }for (var y in this.unknownPropertyPaths) {
                  a[y] || (o[y] = !0);
                }s = !1;continue;
              }return null;
            }d && r.push(d.prefixWith(null, "" + l).prefixWith(null, "anyOf"));
          }return this.trackUnknownProperties && (this.unknownPropertyPaths = o, this.knownPropertyPaths = a), s ? (r = r.concat(this.errors.slice(i)), this.errors = this.errors.slice(0, i), this.createError(u.ERROR_CODES.ANY_OF_MISSING, {}, "", "/anyOf", r)) : void 0;
        } }, { key: "validateOneOf", value: function value(t, e, n) {
          if (void 0 === e.oneOf) return null;var r = null,
              i = [],
              o = this.errors.length,
              a = void 0,
              s = void 0;this.trackUnknownProperties && (a = this.unknownPropertyPaths, s = this.knownPropertyPaths);var l = 0,
              c = e.oneOf.length;for (l = 0; l < c; l++) {
            this.trackUnknownProperties && (this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});var f = e.oneOf[l],
                h = this.errors.length,
                d = this.validateAll(t, f, [], ["oneOf", l], n);if (null === d && h === this.errors.length) {
              if (null !== r) return this.errors = this.errors.slice(0, o), this.createError(u.ERROR_CODES.ONE_OF_MULTIPLE, { index1: r, index2: l }, "", "/oneOf");if (r = l, this.trackUnknownProperties) {
                for (var v in this.knownPropertyPaths) {
                  s[v] = !0, delete a[v];
                }for (var y in this.unknownPropertyPaths) {
                  s[y] || (a[y] = !0);
                }
              }
            } else d && i.push(d);
          }return this.trackUnknownProperties && (this.unknownPropertyPaths = a, this.knownPropertyPaths = s), null === r ? (i = i.concat(this.errors.slice(o)), this.errors = this.errors.slice(0, o), this.createError(u.ERROR_CODES.ONE_OF_MISSING, {}, "", "/oneOf", i)) : (this.errors = this.errors.slice(0, o), null);
        } }, { key: "validateNot", value: function value(t, e, n) {
          if (void 0 === e.not) return null;var r = this.errors.length,
              i = void 0,
              o = void 0;this.trackUnknownProperties && (i = this.unknownPropertyPaths, o = this.knownPropertyPaths, this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});var a = this.validateAll(t, e.not, null, null, n),
              s = this.errors.slice(r);return this.errors = this.errors.slice(0, r), this.trackUnknownProperties && (this.unknownPropertyPaths = i, this.knownPropertyPaths = o), null === a && 0 === s.length ? this.createError(u.ERROR_CODES.NOT_PASSED, {}, "", "/not") : null;
        } }, { key: "validateHypermedia", value: function value(t, e, n) {
          if (!e.links) return null;var r = void 0,
              i = 0,
              o = e.links.length;for (i = 0; i < o; i++) {
            var u = e.links[i];if ("describedby" === u.rel) {
              var a = new UriTemplate(u.href),
                  s = !0,
                  l = 0,
                  c = a.varNames.length;for (l = 0; l < c; l++) {
                if (!(a.varNames[l] in t)) {
                  s = !1;break;
                }
              }if (s) {
                var f = { $ref: a.fillFromObject(t) };if (r = this.validateAll(t, f, [], ["links", i], n)) return r;
              }
            }
          }
        } }]), t;
    }();e.default = c = c;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r,
        i = arguments,
        o = n(58),
        u = (r = o) && r.__esModule ? r : { default: r },
        a = n(11),
        s = n(25);var l = {};e.default = function t(e) {
      var n = new u.default(),
          r = e || "en";return { addFormat: function addFormat(t, e) {
          n.addFormat(t, e);
        }, language: function language(t) {
          return t ? (l[t] || (t = t.split("-")[0]), !!l[t] && (r = t, t)) : r;
        }, addLanguage: function addLanguage(t, e) {
          var n = void 0;for (n in a.ERROR_CODES) {
            e[n] && !e[a.ERROR_CODES[n]] && (e[a.ERROR_CODES[n]] = e[n]);
          }var r = t.split("-")[0];if (l[r]) for (n in l[t] = Object.create(l[r]), e) {
            void 0 === l[r][n] && (l[r][n] = e[n]), l[t][n] = e[n];
          } else l[t] = e, l[r] = e;
        }, freshApi: function freshApi(e) {
          var n = t();return e && n.language(e), n;
        }, validate: function validate(t, e, i, o) {
          var a = new u.default(n, !1, l[r], i, o);"string" == typeof e && (e = { $ref: e }), a.addSchema("", e);var s = a.validateAll(t, e, null, null, "");return !s && o && (s = a.banUnknownProperties()), (void 0).error = s, (void 0).missing = a.missing, (void 0).valid = null === s, (void 0).valid;
        }, validateResult: function validateResult() {
          var t = {};return (void 0).validate.apply(t, i), t;
        }, validateMultiple: function validateMultiple(t, e, i, o) {
          var a = new u.default(n, !0, l[r], i, o);"string" == typeof e && (e = { $ref: e }), a.addSchema("", e), a.validateAll(t, e, null, null, ""), o && a.banUnknownProperties();var s = {};return s.errors = a.errors, s.missing = a.missing, s.valid = 0 === s.errors.length, s;
        }, addSchema: function addSchema(t, e) {
          return n.addSchema(t, e);
        }, getSchema: function getSchema(t, e) {
          return n.getSchema(t, e);
        }, getSchemaMap: function getSchemaMap() {
          return n.getSchemaMap.apply(n, i);
        }, getSchemaUris: function getSchemaUris() {
          return n.getSchemaUris.apply(n, i);
        }, getMissingUris: function getMissingUris() {
          return n.getMissingUris.apply(n, i);
        }, dropSchemas: function dropSchemas() {
          n.dropSchemas.apply(n, i);
        }, defineKeyword: function defineKeyword() {
          n.defineKeyword.apply(n, i);
        }, defineError: function defineError(t, e, n) {
          if ("string" != typeof t || !/^[A-Z]+(_[A-Z]+)*$/.test(t)) throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");if ("number" != typeof e || e % 1 != 0 || e < 1e4) throw new Error("Code number must be an integer > 10000");if (void 0 !== a.ERROR_CODES[t]) throw new Error("Error already defined: " + t + " as " + a.ERROR_CODES[t]);if (void 0 !== a.ErrorCodeLookup[e]) throw new Error("Error code already used: " + a.ErrorCodeLookup[e] + " as " + e);for (var r in a.ERROR_CODES[t] = e, a.ErrorCodeLookup[e] = t, a.ERROR_MESSAGES_DEFAULT[t] = a.ERROR_MESSAGES_DEFAULT[e] = n, l) {
            var i = l[r];i[t] && (i[e] = i[e] || i[t]);
          }
        }, reset: function reset() {
          n.reset(), (void 0).error = null, (void 0).missing = [], (void 0).valid = !0;
        }, missing: [], error: null, valid: !0, normSchema: s.normSchema, resolveUrl: s.resolveUrl, getDocumentUri: s.getDocumentUri, errorCodes: a.ERROR_CODES };
    };
  }, function (t, e, n) {
    "use strict";
    (function (e) {
      var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          r = "Expected a function",
          i = "__lodash_placeholder__",
          o = 1,
          u = 2,
          a = 4,
          s = 8,
          l = 16,
          c = 32,
          f = 64,
          h = 128,
          d = 512,
          v = 1 / 0,
          y = 9007199254740991,
          p = 1.7976931348623157e308,
          _ = NaN,
          b = [["ary", h], ["bind", o], ["bindKey", u], ["curry", s], ["curryRight", l], ["flip", d], ["partial", c], ["partialRight", f], ["rearg", 256]],
          m = "[object Function]",
          g = "[object GeneratorFunction]",
          O = "[object Symbol]",
          E = /^\s+|\s+$/g,
          S = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          k = /\{\n\/\* \[wrapped with (.+)\] \*/,
          j = /,? & /,
          w = /^[-+]0x[0-9a-f]+$/i,
          R = /^0b[01]+$/i,
          A = /^\[object .+?Constructor\]$/,
          P = /^0o[0-7]+$/i,
          M = /^(?:0|[1-9]\d*)$/,
          T = parseInt,
          I = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e,
          N = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
          x = I || N || Function("return this")();function U(t, e, n) {
        switch (n.length) {case 0:
            return t.call(e);case 1:
            return t.call(e, n[0]);case 2:
            return t.call(e, n[0], n[1]);case 3:
            return t.call(e, n[0], n[1], n[2]);}return t.apply(e, n);
      }function C(t, e) {
        return !!(t ? t.length : 0) && function (t, e, n) {
          if (e != e) return function (t, e, n, r) {
            var i = t.length,
                o = n + (r ? 1 : -1);for (; r ? o-- : ++o < i;) {
              if (e(t[o], o, t)) return o;
            }return -1;
          }(t, L, n);var r = n - 1,
              i = t.length;for (; ++r < i;) {
            if (t[r] === e) return r;
          }return -1;
        }(t, e, 0) > -1;
      }function L(t) {
        return t != t;
      }function D(t, e) {
        for (var n = -1, r = t.length, o = 0, u = []; ++n < r;) {
          var a = t[n];a !== e && a !== i || (t[n] = i, u[o++] = n);
        }return u;
      }var F,
          B,
          $,
          G = Function.prototype,
          z = Object.prototype,
          V = x["__core-js_shared__"],
          W = (F = /[^.]+$/.exec(V && V.keys && V.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "",
          K = G.toString,
          J = z.hasOwnProperty,
          Y = z.toString,
          q = RegExp("^" + K.call(J).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          H = Object.create,
          X = Math.max,
          Q = Math.min,
          Z = (B = ut(Object, "defineProperty"), ($ = ut.name) && $.length > 2 ? B : void 0);function tt(t) {
        return !(!ct(t) || W && W in t) && (function (t) {
          var e = ct(t) ? Y.call(t) : "";return e == m || e == g;
        }(t) || function (t) {
          var e = !1;if (null != t && "function" != typeof t.toString) try {
            e = !!(t + "");
          } catch (t) {}return e;
        }(t) ? q : A).test(function (t) {
          if (null != t) {
            try {
              return K.call(t);
            } catch (t) {}try {
              return t + "";
            } catch (t) {}
          }return "";
        }(t));
      }function et(t) {
        return function () {
          var e = arguments;switch (e.length) {case 0:
              return new t();case 1:
              return new t(e[0]);case 2:
              return new t(e[0], e[1]);case 3:
              return new t(e[0], e[1], e[2]);case 4:
              return new t(e[0], e[1], e[2], e[3]);case 5:
              return new t(e[0], e[1], e[2], e[3], e[4]);case 6:
              return new t(e[0], e[1], e[2], e[3], e[4], e[5]);case 7:
              return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);}var n,
              r = ct(n = t.prototype) ? H(n) : {},
              i = t.apply(r, e);return ct(i) ? i : r;
        };
      }function nt(t, e, n, r, i, a, c, f, v, y) {
        var p = e & h,
            _ = e & o,
            b = e & u,
            m = e & (s | l),
            g = e & d,
            O = b ? void 0 : et(t);return function o() {
          for (var u = arguments.length, s = Array(u), l = u; l--;) {
            s[l] = arguments[l];
          }if (m) var h = ot(o),
              d = function (t, e) {
            for (var n = t.length, r = 0; n--;) {
              t[n] === e && r++;
            }return r;
          }(s, h);if (r && (s = function (t, e, n, r) {
            for (var i = -1, o = t.length, u = n.length, a = -1, s = e.length, l = X(o - u, 0), c = Array(s + l), f = !r; ++a < s;) {
              c[a] = e[a];
            }for (; ++i < u;) {
              (f || i < o) && (c[n[i]] = t[i]);
            }for (; l--;) {
              c[a++] = t[i++];
            }return c;
          }(s, r, i, m)), a && (s = function (t, e, n, r) {
            for (var i = -1, o = t.length, u = -1, a = n.length, s = -1, l = e.length, c = X(o - a, 0), f = Array(c + l), h = !r; ++i < c;) {
              f[i] = t[i];
            }for (var d = i; ++s < l;) {
              f[d + s] = e[s];
            }for (; ++u < a;) {
              (h || i < o) && (f[d + n[u]] = t[i++]);
            }return f;
          }(s, a, c, m)), u -= d, m && u < y) {
            var E = D(s, h);return rt(t, e, nt, o.placeholder, n, s, E, f, v, y - u);
          }var S = _ ? n : this,
              k = b ? S[t] : t;return u = s.length, f ? s = function (t, e) {
            for (var n = t.length, r = Q(e.length, n), i = function (t, e) {
              var n = -1,
                  r = t.length;for (e || (e = Array(r)); ++n < r;) {
                e[n] = t[n];
              }return e;
            }(t); r--;) {
              var o = e[r];t[r] = at(o, n) ? i[o] : void 0;
            }return t;
          }(s, f) : g && u > 1 && s.reverse(), p && v < u && (s.length = v), this && this !== x && this instanceof o && (k = O || et(k)), k.apply(S, s);
        };
      }function rt(t, e, n, r, i, l, h, d, v, y) {
        var p = e & s;e |= p ? c : f, (e &= ~(p ? f : c)) & a || (e &= ~(o | u));var _ = n(t, e, i, p ? l : void 0, p ? h : void 0, p ? void 0 : l, p ? void 0 : h, d, v, y);return _.placeholder = r, st(_, t, e);
      }function it(t, e, n, i, a, h, d, v) {
        var y = e & u;if (!y && "function" != typeof t) throw new TypeError(r);var p = i ? i.length : 0;if (p || (e &= ~(c | f), i = a = void 0), d = void 0 === d ? d : X(dt(d), 0), v = void 0 === v ? v : dt(v), p -= a ? a.length : 0, e & f) {
          var _ = i,
              b = a;i = a = void 0;
        }var m = [t, e, n, i, a, _, b, h, d, v];if (t = m[0], e = m[1], n = m[2], i = m[3], a = m[4], !(v = m[9] = null == m[9] ? y ? 0 : t.length : X(m[9] - p, 0)) && e & (s | l) && (e &= ~(s | l)), e && e != o) g = e == s || e == l ? function (t, e, n) {
          var r = et(t);return function i() {
            for (var o = arguments.length, u = Array(o), a = o, s = ot(i); a--;) {
              u[a] = arguments[a];
            }var l = o < 3 && u[0] !== s && u[o - 1] !== s ? [] : D(u, s);return (o -= l.length) < n ? rt(t, e, nt, i.placeholder, void 0, u, l, void 0, void 0, n - o) : U(this && this !== x && this instanceof i ? r : t, this, u);
          };
        }(t, e, v) : e != c && e != (o | c) || a.length ? nt.apply(void 0, m) : function (t, e, n, r) {
          var i = e & o,
              u = et(t);return function e() {
            for (var o = -1, a = arguments.length, s = -1, l = r.length, c = Array(l + a), f = this && this !== x && this instanceof e ? u : t; ++s < l;) {
              c[s] = r[s];
            }for (; a--;) {
              c[s++] = arguments[++o];
            }return U(f, i ? n : this, c);
          };
        }(t, e, n, i);else var g = function (t, e, n) {
          var r = e & o,
              i = et(t);return function e() {
            return (this && this !== x && this instanceof e ? i : t).apply(r ? n : this, arguments);
          };
        }(t, e, n);return st(g, t, e);
      }function ot(t) {
        return t.placeholder;
      }function ut(t, e) {
        var n = function (t, e) {
          return null == t ? void 0 : t[e];
        }(t, e);return tt(n) ? n : void 0;
      }function at(t, e) {
        return !!(e = null == e ? y : e) && ("number" == typeof t || M.test(t)) && t > -1 && t % 1 == 0 && t < e;
      }var st = Z ? function (t, e, n) {
        var r,
            i = e + "";return Z(t, "toString", { configurable: !0, enumerable: !1, value: (r = function (t, e) {
            var n = e.length,
                r = n - 1;return e[r] = (n > 1 ? "& " : "") + e[r], e = e.join(n > 2 ? ", " : " "), t.replace(S, "{\n/* [wrapped with " + e + "] */\n");
          }(i, function (t, e) {
            return function (t, e) {
              for (var n = -1, r = t ? t.length : 0; ++n < r && !1 !== e(t[n], n, t);) {}
            }(b, function (n) {
              var r = "_." + n[0];e & n[1] && !C(t, r) && t.push(r);
            }), t.sort();
          }(function (t) {
            var e = t.match(k);return e ? e[1].split(j) : [];
          }(i), n)), function () {
            return r;
          }) });
      } : function (t) {
        return t;
      };var lt = function (t, e) {
        return e = X(void 0 === e ? t.length - 1 : e, 0), function () {
          for (var n = arguments, r = -1, i = X(n.length - e, 0), o = Array(i); ++r < i;) {
            o[r] = n[e + r];
          }r = -1;for (var u = Array(e + 1); ++r < e;) {
            u[r] = n[r];
          }return u[e] = o, U(t, this, u);
        };
      }(function (t, e, n) {
        var r = o;if (n.length) {
          var i = D(n, ot(lt));r |= c;
        }return it(t, r, e, n, i);
      });function ct(t) {
        var e = void 0 === t ? "undefined" : n(t);return !!t && ("object" == e || "function" == e);
      }function ft(t) {
        return "symbol" == (void 0 === t ? "undefined" : n(t)) || function (t) {
          return !!t && "object" == (void 0 === t ? "undefined" : n(t));
        }(t) && Y.call(t) == O;
      }function ht(t) {
        return t ? (t = function (t) {
          if ("number" == typeof t) return t;if (ft(t)) return _;if (ct(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;t = ct(e) ? e + "" : e;
          }if ("string" != typeof t) return 0 === t ? t : +t;t = t.replace(E, "");var n = R.test(t);return n || P.test(t) ? T(t.slice(2), n ? 2 : 8) : w.test(t) ? _ : +t;
        }(t)) === v || t === -v ? (t < 0 ? -1 : 1) * p : t == t ? t : 0 : 0 === t ? t : 0;
      }function dt(t) {
        var e = ht(t),
            n = e % 1;return e == e ? n ? e - n : e : 0;
      }lt.placeholder = {}, t.exports = lt;
    }).call(this, n(0));
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };Object.defineProperty(e, "__esModule", { value: !0 });var i = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function (t) {
      return void 0 === t ? "undefined" : r(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : r(t);
    },
        o = e.EVENT_SPLITTER = /\s+/,
        u = e.eventsApi = function t(e, n, r, u, a) {
      var s = 0,
          l = void 0;if (r && "object" === (void 0 === r ? "undefined" : i(r))) {
        void 0 !== u && "context" in a && void 0 === a.context && (a.context = u);for (l = Object.keys(r); s < l.length; s++) {
          n = t(e, n, l[s], r[l[s]], a);
        }
      } else if (r && o.test(r)) for (l = r.split(o); s < l.length; s++) {
        n = e(n, l[s], u, a);
      } else n = e(n, r, u, a);return n;
    },
        a = (e.internalOn = function (t, e, n, r, i) {
      (t._events = u(a, t._events || {}, e, n, { context: r, ctx: t, listening: i }), i) && ((t._listeners || (t._listeners = {}))[i.id] = i);return t;
    }, e.onApi = function (t, e, n, r) {
      if (n) {
        var i = t[e] || (t[e] = []),
            o = r.context,
            u = r.ctx,
            a = r.listening;a && a.count++, i.push({ callback: n, context: o, ctx: o || u, listening: a });
      }return t;
    }),
        s = (e.offApi = function (t, e, n, r) {
      if (t) {
        var i = 0,
            o = void 0,
            u = r.context,
            a = r.listeners;if (e || n || u) {
          for (var s = e ? [e] : Object.keys(t); i < s.length; i++) {
            var l = t[e = s[i]];if (!l) break;var c = [],
                f = 0;for (f = 0; f < l.length; f++) {
              var h = l[f];n && n !== h.callback && n !== h.callback._callback || u && u !== h.context ? c.push(h) : (o = h.listening) && 0 == --o.count && (delete a[o.id], delete o.listeningTo[o.objId]);
            }c.length ? t[e] = c : delete t[e];
          }return t;
        }for (var d = Object.keys(a); i < d.length; i++) {
          delete a[(o = a[d[i]]).id], delete o.listeningTo[o.objId];
        }
      }
    }, e.triggerApi = function (t, e, n, r) {
      if (t) {
        var i = t[e],
            o = t.all;i && o && (o = o.slice()), i && s(i, r), o && s(o, [e].concat(r));
      }return t;
    }, e.triggerEvents = function (t, e) {
      var n = void 0,
          r = -1,
          i = t.length,
          o = e[0],
          u = e[1],
          a = e[2];switch (e.length) {case 0:
          for (; ++r < i;) {
            (n = t[r]).callback.call(n.ctx);
          }return;case 1:
          for (; ++r < i;) {
            (n = t[r]).callback.call(n.ctx, o);
          }return;case 2:
          for (; ++r < i;) {
            (n = t[r]).callback.call(n.ctx, o, u);
          }return;case 3:
          for (; ++r < i;) {
            (n = t[r]).callback.call(n.ctx, o, u, a);
          }return;default:
          for (; ++r < i;) {
            (n = t[r]).callback.apply(n.ctx, e);
          }return;}
    });
  }, function (t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };Object.defineProperty(e, "__esModule", { value: !0 });var i = arguments,
        o = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function (t) {
      return void 0 === t ? "undefined" : r(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : r(t);
    },
        u = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }();e.shuffle = function (t) {
      var e = t.slice(0),
          n = 0,
          r = void 0,
          i = void 0;for (n = t.length - 1; n > 0; n--) {
        i = Math.floor(Math.random() * (n + 1)), r = e[n], e[n] = e[i], e[i] = r;
      }return e;
    }, e.prettyPrint = function (t, e, n) {
      var r = "\t";return e && (r = " ".repeat(n)), JSON.stringify(t, null, r);
    }, e.binarySearch = function (t, e, n) {
      for (var r = 0, i = t.length - 1, o = void 0, u = void 0; r <= i;) {
        if ((u = n(t[o = Math.floor((r + i) / 2)], e)) < 0) r = o + 1;else {
          if (!(u > 0)) return o;i = o - 1;
        }
      }return null;
    };var a = e.TransformerType = {};a.STRING = Symbol("String"), a.INTEGER = Symbol("Integer"), a.NUMBER = Symbol("Number"), a.BOOLEAN = Symbol("Boolean"), a.ARRAY = Symbol("Array"), a.OBJECT = Symbol("Object"), a.NULL = Symbol("Null");e.Transformer = function () {
      function t() {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.type = a;
      }return u(t, null, [{ key: "transform", value: function value(t, e) {
          var n = null;switch (e) {case a.STRING:
              n = "object" === (void 0 === t ? "undefined" : o(t)) ? JSON.stringify(t) : String(t);break;case a.INTEGER:
              n = parseInt(t);break;case a.NUMBER:
              n = Number(t);break;case a.BOOLEAN:
              n = Boolean(t);break;case a.ARRAY:
              Array.isArray(t) ? n = t : (n = [])[0] = t;break;case a.OBJECT:
              "object" !== (void 0 === t ? "undefined" : o(t)) ? (n = {})[t] = t : n = t;}return n;
        } }, { key: "isType", value: function value(t) {
          return null === t ? a.NULL : "string" == typeof t ? a.STRING : "number" == typeof t ? a.NUMBER : "boolean" == typeof t ? a.BOOLEAN : Array.isArray(t) ? a.ARRAY : "object" === (void 0 === t ? "undefined" : o(t)) ? a.OBJECT : void 0;
        } }]), t;
    }(), e.wrap = function (t, e) {
      return function () {
        return e.apply(void 0, [t].concat(Array.prototype.slice.call(i)));
      };
    }, e.filterObject = function (t, e) {
      var n = {};if (t && e) {
        var r = e.length,
            i = 0;for (i = 0; i < r; i++) {
          n[e[i]] = t[e[i]];
        }
      }return n;
    };
  }, function (t, e, n) {
    "use strict";
    var r = function (t) {
      if (t && t.__esModule) return t;var e = {};if (null != t) for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }return e.default = t, e;
    }
    /**
     * Augmented.js Next - The Core Component
     *
     * @author Bob Warren
     *
     * @module Augmented
     * @license Apache-2.0
     */(n(62)),
        i = n(31),
        o = Y(n(6)),
        u = Y(n(28)),
        a = Y(n(49)),
        s = Y(n(47)),
        l = Y(n(46)),
        c = Y(n(21)),
        f = Y(n(45)),
        h = Y(n(8)),
        d = Y(n(19)),
        v = Y(n(18)),
        y = Y(n(44)),
        p = Y(n(17)),
        _ = Y(n(2)),
        b = Y(n(43)),
        m = n(42),
        g = Y(n(26)),
        O = Y(n(12)),
        E = Y(n(7)),
        S = Y(n(16)),
        k = Y(n(15)),
        j = Y(n(1)),
        w = Y(n(41)),
        R = Y(n(14)),
        A = Y(n(40)),
        P = Y(n(39)),
        M = Y(n(10)),
        T = Y(n(9)),
        I = Y(n(4)),
        N = Y(n(20)),
        x = Y(n(5)),
        U = Y(n(38)),
        C = Y(n(13)),
        L = Y(n(27)),
        D = Y(n(37)),
        F = Y(n(36)),
        B = Y(n(35)),
        $ = Y(n(34)),
        G = Y(n(33)),
        z = Y(n(23)),
        V = Y(n(22)),
        W = Y(n(29)),
        K = Y(n(30)),
        J = n(32);function Y(t) {
      return t && t.__esModule ? t : { default: t };
    }var q = {};q.Utility = r, q.Utility.Map = l.default, q.Utility.Stack = s.default, q.Utility.SchemaGenerator = g.default, q.Utility.extend = I.default, q.Utility.AsynchronousQueue = f.default, q.Utility.pad = N.default, q.Utility.BundleObject = m.BundleObject, q.Utility.ResourceBundle = m.ResourceBundle, q.Utility.MessageReader = m.MessageReader, q.Utility.MessageKeyFormatter = m.MessageKeyFormatter, q.Utility.uniqueId = x.default, q.Utility.sortObjects = i.sortObjects, q.Utility.mergeSort = i.mergeSort, q.Utility.quickSort = i.quickSort, q.Utility.insertionSort = i.insertionSort, q.Utility.bubbleSort = i.bubbleSort, q.Logger = {}, q.Logger.AbstractLogger = h.default, q.Logger.ConsoleLogger = d.default, q.Logger.ColorConsoleLogger = v.default, q.Logger.LoggerFactory = y.default, q.Logger.Type = p.default, q.Logger.Level = _.default, q.Object = o.default, q.AbstractModel = u.default, q.AbstractCollection = a.default, q.ValidationFramework = O.default, q.Security = {}, q.Security.ClientType = j.default, q.Security.AuthenticationFactory = w.default, q.Security.Context = P.default, q.Security.Entry = A.default, q.Security.Principal = R.default, q.Security.Client = {}, q.Security.Client.AbstractSecurityClient = E.default, q.Security.Client.ACLClient = k.default, q.Security.Client.OAUTH2Client = S.default, q.Configuration = c.default, q.Application = b.default, q.isString = M.default, q.isFunction = T.default, q.has = U.default, q.isObject = C.default, q.allKeys = L.default, q.create = D.default, q.result = F.default, q.arrayHas = B.default, q.exec = $.default, q.isDefined = G.default, q.some = z.default, q.fibonacci = J.fibonacci, q.fibonacciSequence = J.fibonacciSequence, q.splice = V.default, q.before = W.default, q.once = K.default, q.VERSION = "2.0.5", q.codename = "JC Denton", q.releasename = "UNATCO", t.exports = q;
  }]);
});
//# sourceMappingURL=augmented-next.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.bind/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.bind/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64,
    ARY_FLAG = 128,
    REARG_FLAG = 256,
    FLIP_FLAG = 512;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [['ary', ARY_FLAG], ['bind', BIND_FLAG], ['bindKey', BIND_KEY_FLAG], ['curry', CURRY_FLAG], ['curryRight', CURRY_RIGHT_FLAG], ['flip', FLIP_FLAG], ['partial', PARTIAL_FLAG], ['partialRight', PARTIAL_RIGHT_FLAG], ['rearg', REARG_FLAG]];

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      result++;
    }
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var objectCreate = Object.create;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/* Used to set `toString` methods. */
var defineProperty = function () {
  var func = getNative(Object, 'defineProperty'),
      name = getNative.name;

  return name && name.length > 2 ? func : undefined;
}();

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function () {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0:
        return new Ctor();
      case 1:
        return new Ctor(args[0]);
      case 2:
        return new Ctor(args[0], args[1]);
      case 3:
        return new Ctor(args[0], args[1], args[2]);
      case 4:
        return new Ctor(args[0], args[1], args[2], args[3]);
      case 5:
        return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
    }
    var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & ARY_FLAG,
      isBind = bitmask & BIND_FLAG,
      isBindKey = bitmask & BIND_KEY_FLAG,
      isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
      isFlip = bitmask & FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = this && this !== root && this instanceof wrapper ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG;
  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

  if (!(bitmask & CURRY_BOUND_FLAG)) {
    bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
  }

  var result = wrapFunc(func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity);
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *  The bitmask may be composed of the following flags:
 *     1 - `_.bind`
 *     2 - `_.bindKey`
 *     4 - `_.curry` or `_.curryRight` of a bound function
 *     8 - `_.curry`
 *    16 - `_.curryRight`
 *    32 - `_.partial`
 *    64 - `_.partialRight`
 *   128 - `_.rearg`
 *   256 - `_.ary`
 *   512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }

  var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] == null ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  return setWrapToString(result, func, bitmask);
}

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length,
      lastIndex = length - 1;

  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
var setWrapToString = !defineProperty ? identity : function (wrapper, reference, bitmask) {
  var source = reference + '';
  return defineProperty(wrapper, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)))
  });
};

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function (pair) {
    var value = '_.' + pair[0];
    if (bitmask & pair[1] && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function (func, thisArg, partials) {
  var bitmask = BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? remainder ? result - remainder : result : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.isregexp/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.isregexp/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `exports`. */
var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}();

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObject(value) && objectToString.call(value) == regexpTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.map/index.js":
/*!******************************************!*\
  !*** ./node_modules/lodash.map/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}();

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var _Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function (value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function (object) {
    var objValue = get(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function (object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!seen.has(othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
          return seen.add(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function (string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = map;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "./src/application/application.js":
/*!****************************************!*\
  !*** ./src/application/application.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Presentation Application - extension of Augmented.Application</br/>
 * Add registration of mediators to the application, breadcrumbs, and stylesheet registration
 * @extends Augmented.Application
 */
var Application = function (_Augmented$Applicatio) {
  _inherits(Application, _Augmented$Applicatio);

  function Application(name) {
    _classCallCheck(this, Application);

    var _this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this, name));

    _this._router = null;
    _this._mediators = [];
    _this._stylesheets = [];
    _this._breadcrumb = new _augmentedjsNext2.default.Utility.Stack();
    return _this;
  }

  _createClass(Application, [{
    key: "initialize",

    /**
     * Initialize Event - adds any stylesheets registered
     * @method initialize
     * @memberof Application
     */
    value: function initialize() {
      if (this._stylesheets && this._stylesheets.length > 0) {
        this.attachStylesheets();
      }
      var router = this.router;
      if (router) {
        //console.log("starting history");
        router.startHistory();
      }
      return true;
    }
  }, {
    key: "registerMediator",

    /**
     * Register a Mediator
     * @param {Mediator} mediator The mediator to register
     */
    value: function registerMediator(mediator) {
      if (mediator) {
        this._mediators.push(mediator);
      }
    }
  }, {
    key: "deregisterMediator",

    /**
     * Deregister a Mediator
     * @param {Mediator} mediator The mediator to deregister
     */
    value: function deregisterMediator(mediator) {
      if (mediator) {
        var i = this._mediators.indexOf(mediator);
        if (i != -1) {
          this._mediators.splice(i, 1);
        }
      }
    }
  }, {
    key: "registerStylesheet",

    /**
     * Register a stylesheet
     * @param {string} stylesheet URI of the stylesheet
     */
    value: function registerStylesheet(s) {
      if (s) {
        this._stylesheets.push(s);
      }
    }
  }, {
    key: "deregisterStylesheet",

    /**
     * Deregister a stylesheet
     * @param {string} stylesheet URI of the stylesheet
     */
    value: function deregisterStylesheet(s) {
      if (s) {
        this._stylesheets.splice(this._stylesheets.indexOf(s), 1);
      }
    }
  }, {
    key: "attachStylesheets",

    /**
     * Attach registered stylesheets to the DOM
     */
    value: function attachStylesheets() {
      var headElement = document.getElementsByTagName("head")[0],


      // create a shadow DOM
      shaddowDom = document.createDocumentFragment(),
          l = this._stylesheets.length;
      var i = 0,
          link = null;
      for (i = 0; i < l; i++) {
        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = this._stylesheets[i];
        shaddowDom.appendChild(link);
      }
      // add the shadow to the real DOM
      headElement.appendChild(shaddowDom);
    }
  }, {
    key: "replaceStylesheets",

    /**
     * Replace stylesheets then attach registered stylesheets to the DOM
     */
    value: function replaceStylesheets() {
      var links = document.getElementsByTagName("link"),
          l = links.length - 1;
      var i = 0;
      for (i = l; i >= 0; i--) {
        element[i].parentNode.removeChild(element[i]);
      }
      this.attachStylesheets();
    }
  }, {
    key: "setCurrentBreadcrumb",

    /**
     * Sets the current breadcrumb
     * @param {string} uri The URI of the breadcrumb
     * @param {string} name The name of the breadcrumb
     */
    value: function setCurrentBreadcrumb(uri, name) {
      if (this._breadcrumb.size() > 1) {
        this._breadcrumb.pop();
      }
      this._breadcrumb.push({ "uri": uri, "name": name });
    }
  }, {
    key: "getCurrentBreadcrumb",

    /**
     * Gets the current breadcrumb
     * @returns {object} Returns the current breadcrumb
     */
    value: function getCurrentBreadcrumb() {
      return this._breadcrumb.peek();
    }
  }, {
    key: "router",

    /**
     * The router property of the application
     * @property router
     */
    get: function get() {
      return this._router;
    },
    set: function set(router) {
      this._router = router;
    }
  }, {
    key: "mediators",

    /**
     * All Mediators
     * @property {array} mediators all Mediators
     */
    get: function get() {
      return this._mediators;
    }
  }, {
    key: "stylesheets",

    /**
     * All Stylesheets
     * @property {array} stylesheets all stylesheets
     */
    get: function get() {
      return this._stylesheets;
    }
  }, {
    key: "breadcrumbs",

    /**
     * The breadcrumbs
     * @property {array} breadcrumbs alls the breadcrumbs
     */
    get: function get() {
      return this._breadcrumb.toArray();
    }
  }, {
    key: "title",

    /**
     * The Window title
     * @property {string} title title of the window
     */

    get: function get() {
      return document.title;
    },
    set: function set(title) {
      document.title = title;
    }
  }]);

  return Application;
}(_augmentedjsNext2.default.Application);

;

exports.default = Application;

/***/ }),

/***/ "./src/collection/collection.js":
/*!**************************************!*\
  !*** ./src/collection/collection.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _sync2 = __webpack_require__(/*! ../request/sync.js */ "./src/request/sync.js");

var _sync3 = _interopRequireDefault(_sync2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Collection Class
 * @extends Augmented.AbstractCollection
 */
var Collection = function (_Augmented$AbstractCo) {
  _inherits(Collection, _Augmented$AbstractCo);

  function Collection(models, options) {
    _classCallCheck(this, Collection);

    var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this, models, options));

    if (options && options.url) {
      _this.url = options.url;
    } else {
      _this.url = null;
    };
    return _this;
  }

  _createClass(Collection, [{
    key: "sync",

    /**
     * Sync collection data to bound REST call
     */
    value: function sync(method, model, options) {
      if (!options) {
        options = {};
      }
      if (this.crossOrigin === true) {
        options.crossDomain = true;
      }
      if (!options.xhrFields) {
        options.xhrFields = {
          withCredentials: true
        };
      }

      if (this.mock) {
        options.mock = this.mock;
      }

      return (0, _sync3.default)(method, model, options);
    }
  }]);

  return Collection;
}(_augmentedjsNext2.default.AbstractCollection);

;

exports.default = Collection;

/***/ }),

/***/ "./src/collection/localStorageCollection.js":
/*!**************************************************!*\
  !*** ./src/collection/localStorageCollection.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _localStorageFactory = __webpack_require__(/*! ../storage/localStorageFactory.js */ "./src/storage/localStorageFactory.js");

var _localStorageFactory2 = _interopRequireDefault(_localStorageFactory);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var DEFAULT_NAMESPACE = "augmented.localstorage.collection";
var DEFAULT_KEY = DEFAULT_NAMESPACE + ".key";

/**
 * A local storage-based Collection
 * @extends Augmented.AbstractCollection
 */

var LocalStorageCollection = function (_Augmented$AbstractCo) {
  _inherits(LocalStorageCollection, _Augmented$AbstractCo);

  function LocalStorageCollection(models, options) {
    _classCallCheck(this, LocalStorageCollection);

    var _this = _possibleConstructorReturn(this, (LocalStorageCollection.__proto__ || Object.getPrototypeOf(LocalStorageCollection)).call(this, models, options));

    _this._key = DEFAULT_KEY;
    _this._persist = false;
    _this._storage = null;

    if (options && options.persist) {
      _this._persist = options.persist;
    }
    if (options && options.key) {
      _this._key = options.key;
    }
    _this._storage = _localStorageFactory2.default.getStorage(_this._persist, DEFAULT_NAMESPACE);
    return _this;
  }

  _createClass(LocalStorageCollection, [{
    key: "initialize",

    /**
     * Base key name for the collection (simular to url for rest-based)
     * @property {string} key The key
     */

    /**
     * is Persistant or not
     * @property {boolean} isPersisted Persistant property
     */

    /**
     * Storage for the collection
     * @property {string} storage The storage used for the collection
     * @private
     */

    /**
     * Initialize the model with needed wireing
     * @param {object} options Any options to pass
     */
    value: function initialize(options) {}
  }, {
    key: "init",

    /**
     * Custom init method for the model (called at inititlize)
     * @param {object} options Any options to pass
     */
    value: function init(options) {}
  }, {
    key: "fetch",

    /**
     * Fetch the collection
     * @param {object} options Any options to pass
     */
    value: function fetch(options) {
      this.sync('read', this, options);
    }
  }, {
    key: "save",

    /**
     * Save the collection
     * @param {object} options Any options to pass
     */
    value: function save(options) {
      this.sync('create', this, options);
    }
  }, {
    key: "update",

    /**
     * Update the collection
     * @param {object} options Any options to pass
     */
    value: function update(options) {
      this.sync('update', this, options);
    }
  }, {
    key: "destroy",

    /**
     * Destroy the collection
     * @param {object} options Any options to pass
     */
    value: function destroy(options) {
      this.sync('delete', this, options);
    }
  }, {
    key: "sync",

    /**
     * Sync method for Collection
     */
    value: function sync(method, model, options) {
      if (!options) {
        options = {};
      }
      var j = {};
      if (method === "create" || method === "update") {
        j = this.toJSON();
        this._storage.setItem(this._key, j);
      } else if (method === "delete") {
        this._storage.removeItem(this._key);
      } else {
        // read
        j = this._storage.getItem(this._key);
        this.reset(j);
      }
      return {};
    }
  }]);

  return LocalStorageCollection;
}(_augmentedjsNext2.default.AbstractCollection);

;

exports.default = LocalStorageCollection;

/***/ }),

/***/ "./src/collection/paginated.js":
/*!*************************************!*\
  !*** ./src/collection/paginated.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;if (getter === undefined) {
      return undefined;
    }return getter.call(receiver);
  }
};

var _collection = __webpack_require__(/*! ./collection.js */ "./src/collection/collection.js");

var _collection2 = _interopRequireDefault(_collection);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Paginated Collection Class - A Collection that handles pagination from client or server-side
 * @extends Collection
 */
var PaginatedCollection = function (_Collection) {
  _inherits(PaginatedCollection, _Collection);

  function PaginatedCollection(models, options) {
    _classCallCheck(this, PaginatedCollection);

    var _this = _possibleConstructorReturn(this, (PaginatedCollection.__proto__ || Object.getPrototypeOf(PaginatedCollection)).call(this, models, options));

    if (options && options.paginationConfiguration) {
      _this.paginationConfiguration = options.paginationConfiguration;
    } else {
      _this.paginationConfiguration = {
        currentPageParam: "page",
        pageSizeParam: "per_page"
      };
    }
    if (options && options.pageSize) {
      _this.pageSize = options.pageSize;
    } else {
      _this.pageSize = 20;
    }

    if (options && options.currentPage) {
      _this.currentPage = options.currentPage;
    } else {
      _this.currentPage = 1;
    }

    _this.totalPages = 1;
    return _this;
  }

  _createClass(PaginatedCollection, [{
    key: "setPageSize",

    /**
    * Configuration for the pagination
    * @property paginationConfiguration
    * @private
    */

    /**
    * Page Size for the collection
    * @property pageSize
    * @private
    */

    /**
    * Current page for the collection
    * @property currentPage
    */

    /**
    * Total pages for the collection
    * @property totalPages
    */

    /**
    * Sets the number of items in a page
    * @param {number} size Number of items in each page
    */
    value: function setPageSize(size) {
      if (size) {
        this.pageSize = size;
      }
      this.refresh();
    }
  }, {
    key: "setCurrentPage",

    /**
    * Sets the current page
    * @param {number} page Current page in collection
    */
    value: function setCurrentPage(page) {
      if (!page) {
        page = 1;
      }
      this.currentPage = page;
      this.refresh();
    }
  }, {
    key: "setPaginationConfiguration",

    /**
    * Sets pagination configuration
    * @param {object} config pagination configuration
    * @private
    */
    value: function setPaginationConfiguration(config) {
      this.paginationConfiguration = config;
    }
  }, {
    key: "fetch",

    /**
    * Collection.fetch - rewritten fetch method from Backbone.Collection.fetch
    * @borrows Collection.fetch
    */
    value: function fetch(options) {
      options = options ? options : {};
      //var data = (options.data || {});
      var p = this.paginationConfiguration;
      var d = {};
      d[p.currentPageParam] = this.currentPage;
      d[p.pageSizeParam] = this.pageSize;

      options.data = d;

      return _get(PaginatedCollection.prototype.__proto__ || Object.getPrototypeOf(PaginatedCollection.prototype), "fetch", this).call(this, options);
    }
  }, {
    key: "nextPage",

    /**
    * Moves to the next page
    */
    value: function nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage = this.currentPage + 1;
        this.refresh();
      }
    }
  }, {
    key: "previousPage",

    /**
    * Moves to the previous page
    */
    value: function previousPage() {
      if (this.currentPage > 0) {
        this.currentPage = this.currentPage - 1;
        this.refresh();
      }
    }
  }, {
    key: "goToPage",

    /**
    * Goes to page
    * @param {number} page Page to go to
    */
    value: function goToPage(page) {
      if (page && page < this.totalPages && page > 0) {
        this.currentPage = page;
        this.refresh();
      }
    }
  }, {
    key: "firstPage",

    /**
    * Moves to the first page
    */
    value: function firstPage() {
      this.currentPage = 1;
      this.refresh();
    }
  }, {
    key: "lastPage",

    /**
    * Moves to the last page
    */
    value: function lastPage() {
      this.currentPage = this.totalPages;
      this.refresh();
    }
  }, {
    key: "refresh",

    /**
    * Refreshes the collection
    */
    value: function refresh() {
      this.fetch();
    }
  }]);

  return PaginatedCollection;
}(_collection2.default);

;

exports.default = PaginatedCollection;

/***/ }),

/***/ "./src/controller/managedController.js":
/*!*********************************************!*\
  !*** ./src/controller/managedController.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _viewController = __webpack_require__(/*! ./viewController.js */ "./src/controller/viewController.js");

var _viewController2 = _interopRequireDefault(_viewController);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var renderPromise = function renderPromise(controller, clazz) {
  return new Promise(function (resolve, reject) {
    var t = clazz.render();
    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error rendering!"));
    }
  });
};

var removePromise = function removePromise(controller, clazz) {
  return new Promise(function (resolve, reject) {
    var t = clazz.remove();
    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error removing!"));
    }
  });
};

/**
 * A managed controller that automatically sets up the components
 * Data can be passed to every view by passing using 'options'
 * @param {object} options Options to pass to all views managed
 * @extends ViewController
 */

var ManagedController = function (_ViewController) {
  _inherits(ManagedController, _ViewController);

  function ManagedController(options) {
    _classCallCheck(this, ManagedController);

    return _possibleConstructorReturn(this, (ManagedController.__proto__ || Object.getPrototypeOf(ManagedController)).call(this, options));
  }

  _createClass(ManagedController, [{
    key: "initialize",
    value: function initialize(options) {
      //console.debug(`initialize Options ${options}`);
      if (this._views && this._views.length > 0) {
        if (!this._instances) {
          this._instances = [];
        }
        if (!this._renderChain) {
          this._renderChain = [];
        }
        if (!this._removeChain) {
          this._removeChain = [];
        }
        var l = this._views.length;
        var i = 0;
        for (i = 0; i < l; i++) {
          var clazz = this._views[i];
          var cleanOptions = options;
          cleanOptions.views = null;
          var instance = new clazz(cleanOptions);
          this._instances.push(instance);
          this._renderChain.push(renderPromise(this, instance));
          this._removeChain.push(removePromise(this, instance));
        }
      }
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this._renderChain) {
        Promise.all(this._renderChain);
      }
      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      if (!this._removeChain) {
        Promise.all(this._removeChain);
      }
      return this;
    }
  }]);

  return ManagedController;
}(_viewController2.default);

;

exports.default = ManagedController;

/***/ }),

/***/ "./src/controller/viewController.js":
/*!******************************************!*\
  !*** ./src/controller/viewController.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * A controller to handle a group of views.  The api is handled simular to views for use in a router.
 * @extends Augmented.Object
 */
var ViewController = function (_Augmented$Object) {
  _inherits(ViewController, _Augmented$Object);

  function ViewController(options) {
    _classCallCheck(this, ViewController);

    var _this = _possibleConstructorReturn(this, (ViewController.__proto__ || Object.getPrototypeOf(ViewController)).call(this, options));

    if (options && options.views) {
      _this._views = options.views;
    } else {
      _this._views = [];
    }

    if (options && options.permissions) {
      _this._permissions = options.permissions;
    } else {
      _this._permissions = {
        include: [],
        exclude: []
      };
    }
    _this.initialize(options);
    return _this;
  }

  _createClass(ViewController, [{
    key: "initialize",

    /**
     * Permissions in the controller
     * @property permissions
     */

    /**
     * initialize - an API for the start of the controller.  It is intended to add initializers here
     */
    value: function initialize(options) {
      return this;
    }
  }, {
    key: "render",

    /**
     * render - an API for the render of the controller.  It is intended to add view render methods here
     */
    value: function render() {
      return this;
    }
  }, {
    key: "remove",

    /**
     * remove - an API for the end of the controller.  It is intended to add view removal and cleanup here
     */
    value: function remove() {
      return this;
    }
  }, {
    key: "manageView",

    /**
     * manageView - manage a view
     * @param {Presentation.View} view An instance of a view to manage
     */
    value: function manageView(view) {
      this._views.push(view);
    }
  }, {
    key: "removeAllViews",

    /**
     * removeAllViews - cleans up all views known (calling thier remove method)
     */
    value: function removeAllViews() {
      var l = this._views.length;
      var i = 0;
      for (i = 0; i < l; i++) {
        this._views[i].remove();
      }
      this._views.splice(0);
    }
  }, {
    key: "addPermission",

    /**
     * Adds a permission to the controller
     * @param {string} permission The permission to add
     * @param {boolean} negative Flag to set a nagative permission (optional)
     */
    value: function addPermission(permission, negative) {
      if (!negative) {
        negative = false;
      }
      if (permission !== null && !Array.isArray(permission)) {
        var p = negative ? this._permissions.exclude : this._permissions.include;
        p.push(permission);
      }
    }
  }, {
    key: "removePermission",

    /**
     * Removes a permission to the controller
     * @param {string} permission The permission to remove
     * @param {boolean} negative Flag to set a nagative permission (optional)
     */
    value: function removePermission(permission, negative) {
      if (!negative) {
        negative = false;
      }
      if (permission !== null && !Array.isArray(permission)) {
        var p = negative ? this._permissions.exclude : this._permissions.include;
        p.splice(p.indexOf(permission), 1);
      }
    }
  }, {
    key: "clearPermissions",

    /**
     * Clears the permissions in the controller
     */
    value: function clearPermissions() {
      this._permissions = {
        include: [],
        exclude: []
      };
    }
  }, {
    key: "matchesPermission",

    /**
     * Matches a permission in the controller
     * @param {string} match The permissions to match
     * @param {boolean} negative Flag to set a nagative permission (optional)
     * @returns {boolean} Returns true if the match exists
     */
    value: function matchesPermission(match, negative) {
      if (!negative) {
        negative = false;
      }
      var p = negative ? this._permissions.exclude : this._permissions.include;
      return p.indexOf(match) !== -1;
    }
  }, {
    key: "canDisplay",

    /**
     * Callback to return if this controller can display
     * @returns {boolean} Returns true if this controller can display
     */
    value: function canDisplay() {
      return true;
    }
  }, {
    key: "views",

    /**
     * getViews - get the instances of the views known
     * @returns {Array} Returns an array of view instances
     */
    get: function get() {
      return this._views;
    }
  }, {
    key: "permissions",

    /**
     * Sets the permissions to the controller
     * @param {array} permissions The permissions to set
     */
    set: function set(permissions) {
      /*if (!negative) {
        negative = false;
      }
      if (permissions !== null && Array.isArray(permissions)) {
        if (negative) {
          ç.exclude = permissions;
        } else {
          this._permissions.include = permissions;
        }
      }*/
      this._permissions = permissions;
    },

    /**
     * Gets the permissions to the controller<br/>
     * Return format:<br/>
     * <pre>{
     *     include: [],
     *     exclude: []
     * }</pre>
     *
     * @returns {object} The permissions in the controller
     */
    get: function get() {
      return this._permissions;
    }
  }]);

  return ViewController;
}(_augmentedjsNext2.default.Object);

;

exports.default = ViewController;

/***/ }),

/***/ "./src/dom/dom.js":
/*!************************!*\
  !*** ./src/dom/dom.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * DOM related functions
 */
var Dom = function () {
  function Dom() {
    _classCallCheck(this, Dom);
  }

  _createClass(Dom, null, [{
    key: "getViewportHeight",

    /**
     * Gets the height of the browser viewport
     * @method getViewportHeight
     * @returns {number} The height of the viewport
      */
    value: function getViewportHeight() {
      return window.innerHeight;
    }
  }, {
    key: "getViewportWidth",

    /**
     * Gets the width of the browser viewport
     * @method getViewportWidth
     * @returns {number} The width of the viewport
      */
    value: function getViewportWidth() {
      return window.innerWidth;
    }
  }, {
    key: "setValue",

    /**
     * Sets the value of an element<br/>
     * Will detect the correct method to do so by element type
     * @method setValue
     * @param {Node} el Element or string of element selector
     * @param {string} value Value to set (or HTML)
     * @param {boolean} onlyText Value will set as text only
      */
    value: function setValue(el, value, onlyText) {
      if (el) {
        value = value ? value : "";
        var myEl = this.selector(el);
        if (myEl && myEl.nodeType === 1 && (myEl.nodeName === "select" || myEl.nodeName === "SELECT")) {
          // Select box
          _logger.debug("Select box (not supported) set to - " + value);
        } else if (myEl && myEl.nodeType === 1 && (myEl.nodeName === "input" || myEl.nodeName === "INPUT" || myEl.nodeName === "textarea" || myEl.nodeName === "TEXTAREA")) {
          myEl.value = value;
        } else if (myEl && myEl.nodeType === 1) {
          if (onlyText) {
            myEl.innerText = value;
          } else {
            myEl.innerHTML = value;
          }
        }
      }
    }
  }, {
    key: "getValue",

    /**
     * Gets the value of an element<br/>
     * Will detect the correct method to do so by element type
     * @method getValue
     * @param {Node} el Element or string of element selector
     * @returns {string} Returns the value of the element (or HTML)
      */
    value: function getValue(el) {
      if (el) {
        var myEl = this.selector(el);

        if (myEl && myEl.nodeType === 1 && (myEl.nodeName === "input" || myEl.nodeName === "INPUT" || myEl.nodeName === "textarea" || myEl.nodeName === "TEXTAREA" || myEl.nodeName === "select" || myEl.nodeName === "SELECT")) {
          return myEl.value;
        } else if (myEl && myEl.nodeType === 1) {
          return myEl.innerHTML;
        }
      }
      return null;
    }
  }, {
    key: "selector",

    /**
     * Selector function<br/>
     * Supports full query selection
     * @method selector
     * @param {string} query Element or string of element selector
     * @returns {Node} Returns the element (or first of type)
      */
    value: function selector(query) {
      if (query) {
        return _augmentedjsNext2.default.isString(query) ? document.querySelector(query) : query;
      }
      return null;
    }
  }, {
    key: "selectors",

    /**
     * Selectors function<br/>
     * Supports full query selection
     * @method selectors
     * @param {string} query Element or string of element selector
     * @returns {NodeList} Returns all the nodes selected
      */
    value: function selectors(query) {
      if (query) {
        return _augmentedjsNext2.default.isString(query) ? document.querySelectorAll(query) : query;
      }
      return null;
    }
  }, {
    key: "query",

    /**
     * Query function<br/>
     * Supports full query selection but acts like jQuery
     * @method query
     * @param {string} query Element or string of element selector
     * @param {Node} el Element to start from (optional)
     * @returns {NodeList|Node} Returns all the nodes selected
      */
    value: function query(_query, el) {
      if (_query) {
        var d = document;
        if (el) {
          d = Dom.selector(el);
        }

        var nodelist = _augmentedjsNext2.default.isString(_query) ? d.querySelectorAll(_query) : _query;

        if (nodelist.length === 1) {
          return nodelist[0];
        }
        return nodelist;
      }
      return null;
    }
  }, {
    key: "hide",

    /**
     * Hides an element
     * @method hide
     * @param {Node} el Element or string of element selector
      */
    value: function hide(el) {
      var myEl = this.selector(el);
      if (myEl) {
        myEl.style.display = "none";
        myEl.style.visibility = "hidden";
      }
    }
  }, {
    key: "show",

    /**
     * Shows an element
     * @method show
     * @param {Node} el Element or string of element selector
     * @param {string} display Value to set for 'display' property (optional)
      */
    value: function show(el, display) {
      var myEl = this.selector(el);
      if (myEl) {
        myEl.style.display = display ? display : "block";
        myEl.style.visibility = "visible";
      }
    }
  }, {
    key: "setClass",

    /**
     * Sets the class attribute (completely)
     * @method setClass
     * @param {Node} el Element or string of element selector
     * @param {string} cls the class value
      */
    value: function setClass(el, cls) {
      var myEl = this.selector(el);
      if (myEl) {
        myEl.setAttribute("class", cls);
      }
    }
  }, {
    key: "addClass",

    /**
     * Adds a class attribute
     * @method addClass
     * @param {Node} el Element or string of element selector
     * @param {string} cls the class value
      */
    value: function addClass(el, cls) {
      var myEl = this.selector(el);
      if (myEl) {
        myEl.classList.add(cls);
      }
    }
  }, {
    key: "removeClass",

    /**
     * Remove a class attribute
     * @method removeClass
     * @param {Node} el Element or string of element selector
     * @param {string} cls the class value
      */
    value: function removeClass(el, cls) {
      var myEl = this.selector(el);
      if (myEl) {
        myEl.classList.remove(cls);
      }
    }
  }, {
    key: "empty",

    /**
     * Empty a element container
     * @method empty
     * @param {Node} el Element or string of element selector
      */
    value: function empty(el) {
      this.setValue(el, "", true);
    }
  }, {
    key: "injectTemplate",

    /**
     * injectTemplate method - Injects a template element at a mount point
     * @method injectTemplate
     * @param {string} template The template selector
     * @param {Node} mount The mount point as Document.Element or String
      */
    value: function injectTemplate(template, mount) {
      var t = this.selector(template),
          el = this.selector(mount);
      if (t && el) {
        var clone = document.importNode(t.content, true);
        el.appendChild(clone);
      }
    }
  }]);

  return Dom;
}();

;

exports.default = Dom;

/***/ }),

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var Augmented = _interopRequireWildcard(_augmentedjsNext);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

//const _some = require("lodash.some");

// Cached regex for stripping a leading hash/slash and trailing space.
var ROUTE_STRIPPER = /^[#\/]|\s+$/g;

// Cached regex for stripping leading and trailing slashes.
var ROOT_STRIPPER = /^\/+|\/+$/g;

// Cached regex for stripping urls of hash.
var PATH_STRIPPER = /#.*$/;

/**
 * Handles cross-browser history management, based on either
 * [pushState](http://diveintohtml5.info/history.html) and real URLs, or
 * [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
 * and URL fragments. If the browser supports neither (old IE, natch),
 * falls back to polling.
 * <br/>Inspired By Backbone.js - Thank you! <span>😍</span>
 * @extends Augmented.Object
 */

var History = function (_Augmented$Object) {
  _inherits(History, _Augmented$Object);

  function History(options) {
    _classCallCheck(this, History);

    var _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, options));

    _this.handlers = [];
    _this.checkUrl = _this.checkUrl.bind(_this);

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      _this.location = window.location;
      _this.history = window.history;
    }

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    _this.interval = 50;

    // Has the history handling already been started?
    _this.started = false;
    return _this;
  }

  _createClass(History, [{
    key: 'atRoot',

    // Are we at the app root?
    value: function atRoot() {
      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
      return path === this.root && !this.getSearch();
    }
  }, {
    key: 'matchRoot',

    // Does the pathname match the root?
    value: function matchRoot() {
      var path = this.decodeFragment(this.location.pathname);
      var rootPath = path.slice(0, this.root.length - 1) + '/';
      //console.log(`History: matchRoot ${rootPath} and root is ${this.root}`);
      return rootPath === this.root;
    }
  }, {
    key: 'decodeFragment',

    // Unicode characters in `location.pathname` are percent encoded so they're
    // decoded for comparison. `%25` should not be decoded since it may be part
    // of an encoded parameter.
    value: function decodeFragment(fragment) {
      return decodeURI(fragment.replace(/%25/g, '%2525'));
    }
  }, {
    key: 'getSearch',

    // In IE6, the hash fragment and search params are incorrect if the
    // fragment contains `?`.
    value: function getSearch() {
      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
      return match ? match[0] : '';
    }
  }, {
    key: 'getHash',

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    value: function getHash(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    }
  }, {
    key: 'getPath',

    // Get the pathname and search params, without the root.
    value: function getPath() {
      var path = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
      return path.charAt(0) === '/' ? path.slice(1) : path;
    }
  }, {
    key: 'getFragment',

    // Get the cross-browser normalized URL fragment from the path or hash.
    value: function getFragment(fragment) {
      if (fragment == null) {
        if (this._usePushState || !this._wantsHashChange) {
          fragment = this.getPath();
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(ROUTE_STRIPPER, '');
    }
  }, {
    key: 'start',

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    value: function start(options) {
      if (this.started) {
        throw new Error('History has already been started');
      }
      this.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options = Augmented.Utility.extend({ root: '/' }, this.options, options);
      this.root = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._hasHashChange = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
      this._useHashChange = this._wantsHashChange && this._hasHashChange;
      this._wantsPushState = !!this.options.pushState;
      this._hasPushState = !!(this.history && this.history.pushState);
      this._usePushState = this._wantsPushState && this._hasPushState;
      this.fragment = this.getFragment();

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(ROOT_STRIPPER, '/');

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          var rootPath = this.root.slice(0, -1) || "/";
          this.location.replace(rootPath + '#' + this.getPath());
          // Return immediately as browser will do redirect to new url
          return true;

          // Or if we've started out with a hash-based route, but we're currently
          // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), { replace: true });
        }
      }

      // Proxy an iframe to handle location events if the browser doesn't
      // support the `hashchange` event, HTML5 history, or the user wants
      // `hashChange` but not `pushState`.
      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = 'javascript:0';
        this.iframe.style.display = 'none';
        this.iframe.tabIndex = -1;
        var body = document.body;
        // Using `appendChild` will throw on IE < 9 if the document is not ready.
        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
        iWindow.document.open();
        iWindow.document.close();
        iWindow.location.hash = '#' + this.fragment;
      }

      var poly = function poly(eventName, listener) {
        return attachEvent('on' + eventName, listener);
      };

      // Add a cross-platform `addEventListener` shim for older browsers.
      var addEventListener = window.addEventListener ? window.addEventListener : poly;

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._usePushState) {
        addEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        addEventListener('hashchange', this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      if (!this.options.silent) {
        return this.loadUrl();
      }
    }
  }, {
    key: 'stop',

    // Disable history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    value: function stop() {
      var poly = function poly(eventName, listener) {
        return detachEvent('on' + eventName, listener);
      };

      // Add a cross-platform `removeEventListener` shim for older browsers.
      var removeEventListener = window.removeEventListener ? window.removeEventListener : poly;

      // Remove window listeners.
      if (this._usePushState) {
        removeEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        removeEventListener('hashchange', this.checkUrl, false);
      }

      // Clean up the iframe if necessary.
      if (this.iframe) {
        document.body.removeChild(this.iframe);
        this.iframe = null;
      }

      // Some environments will throw when clearing an undefined interval.
      if (this._checkUrlInterval) {
        clearInterval(this._checkUrlInterval);
      }
      this.started = false;
    }
  }, {
    key: 'route',

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    value: function route(_route, callback) {
      this.handlers.unshift({ route: _route, callback: callback });
    }
  }, {
    key: 'checkUrl',

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    value: function checkUrl(e) {
      var current = this.getFragment();

      // If the user pressed the back button, the iframe's hash will have
      // changed and we should use that for comparison.
      if (current === this.fragment && this.iframe) {
        current = this.getHash(this.iframe.contentWindow);
      }

      if (current === this.fragment) {
        return false;
      }
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    }
  }, {
    key: 'loadUrl',

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    value: function loadUrl(fragment) {
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) {
        return false;
      }
      fragment = this.fragment = this.getFragment(fragment);
      //console.log("loadUrl", fragment);
      //console.log("this.handlers", this.handlers);
      if (this.handlers && Array.isArray(this.handlers)) {
        return this.handlers.some(function (handler) {
          //console.log("handler", handler);
          if (handler.route.test(fragment)) {
            //console.log("handler.callback", handler.callback);
            //console.log("is func", typeof handler.callback);
            handler.callback(fragment);
            //console.log("test", handler.route.test(fragment));
            return true;
          }
        });
      }
      return null;

      /*return _some(this.handlers, (handler) => {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });*/
    }
  }, {
    key: 'navigate',

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    value: function navigate(fragment, options) {
      if (!this.started) {
        return false;
      }
      if (!options || options === true) {
        options = { trigger: !!options };
      }

      // Normalize the fragment.
      fragment = this.getFragment(fragment || '');

      // Don't include a trailing slash on the root.
      var rootPath = this.root;
      if (fragment === '' || fragment.charAt(0) === '?') {
        rootPath = rootPath.slice(0, -1) || '/';
      }
      var url = rootPath + fragment;

      // Strip the hash and decode for matching.
      fragment = this.decodeFragment(fragment.replace(PATH_STRIPPER, ''));

      if (this.fragment === fragment) {
        return;
      }
      this.fragment = fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._usePushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

        // If hash changes haven't been explicitly disabled, update the hash
        // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
          var iWindow = this.iframe.contentWindow;

          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if (!options.replace) {
            iWindow.document.open();
            iWindow.document.close();
          }

          this._updateHash(iWindow.location, fragment, options.replace);
        }

        // If you've told us that you explicitly don't want fallback hashchange-
        // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) {
        return this.loadUrl(fragment);
      }
    }
  }, {
    key: '_updateHash',

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    value: function _updateHash(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }
  }]);

  return History;
}(Augmented.Object);

;

exports.default = History;

/***/ }),

/***/ "./src/logger/colorLogger.js":
/*!***********************************!*\
  !*** ./src/logger/colorLogger.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Color Console Logger
 * @param {Logger.Level} l The level to initialize the logger with
 * @memberof Logger
 * @extends AbstractLogger
 */
var ColorConsoleLogger = function (_Augmented$Logger$Abs) {
  _inherits(ColorConsoleLogger, _Augmented$Logger$Abs);

  function ColorConsoleLogger(l) {
    _classCallCheck(this, ColorConsoleLogger);

    return _possibleConstructorReturn(this, (ColorConsoleLogger.__proto__ || Object.getPrototypeOf(ColorConsoleLogger)).call(this, l));
  }

  _createClass(ColorConsoleLogger, [{
    key: "_getLogTime",
    value: function _getLogTime() {
      return "";
    }
  }, {
    key: "_logMe",
    value: function _logMe(message, level) {
      if (level === _augmentedjsNext2.default.Logger.Level.INFO) {
        console.info("%c" + message, "color: blue;");
      } else if (level === _augmentedjsNext2.default.Logger.Level.ERROR) {
        console.error("%c" + message, "color: red;");
      } else if (level === _augmentedjsNext2.default.Logger.Level.DEBUG) {
        console.log("%c" + message, "color: gray;");
      } else if (level === _augmentedjsNext2.default.Logger.Level.WARN) {
        console.warn("%c" + message, "color: brown;");
      } else {
        console.log("%c" + message, "color: black;");
      }
    }
  }]);

  return ColorConsoleLogger;
}(_augmentedjsNext2.default.Logger.AbstractLogger);

;

exports.default = ColorConsoleLogger;

/***/ }),

/***/ "./src/logger/restLogger.js":
/*!**********************************!*\
  !*** ./src/logger/restLogger.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _request = __webpack_require__(/*! ../request/request.js */ "./src/request/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * REST Logger - *requires override of _logMe
 * @param {Logger.Level} l The level to initialize the logger with
 * @extends AbstractLogger
 * @deprecated
 */
var RestLogger = function (_Augmented$Logger$Abs) {
  _inherits(RestLogger, _Augmented$Logger$Abs);

  function RestLogger(l, uri) {
    _classCallCheck(this, RestLogger);

    var _this = _possibleConstructorReturn(this, (RestLogger.__proto__ || Object.getPrototypeOf(RestLogger)).call(this, l));

    _this._uri = uri;
    return _this;
  }

  _createClass(RestLogger, [{
    key: "_logMe",
    value: function _logMe(message) {
      var _this2 = this;

      var _success = function _success(data, status) {
        // yippee!!!
      },
          error = function error(e) {
        throw new Error(e);
      };

      (0, _request2.default)({
        url: this._uri,
        method: "POST",
        contentType: "text/plain",
        dataType: "text",
        async: true,
        data: message,
        success: function success(data, status) {
          _success(data, status);
        },
        failure: function failure(e) {
          _this2.failure(e);
        }
      });
    }
  }, {
    key: "uri",

    /**
     * @property {string} uri The URI to use for RestLogger
     */
    set: function set(uri) {
      this._uri = uri;
    },
    get: function get() {
      return this._uri;
    }
  }]);

  return RestLogger;
}(_augmentedjsNext2.default.Logger.AbstractLogger);

;

exports.default = RestLogger;

/***/ }),

/***/ "./src/model/model.js":
/*!****************************!*\
  !*** ./src/model/model.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _sync2 = __webpack_require__(/*! ../request/sync.js */ "./src/request/sync.js");

var _sync3 = _interopRequireDefault(_sync2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Model <br/>
 * Supports: <ul>
 * <li>REST</li>
 * <li>Validation and Schemas</li>
 * <li>Security</li>
 * </ul>
 * @extends Augmented.AbstractModel
 */
var Model = function (_Augmented$AbstractMo) {
  _inherits(Model, _Augmented$AbstractMo);

  function Model(attributes, options) {
    _classCallCheck(this, Model);

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this, attributes, options, args));

    _this.mock = false;
    _this.crossOrigin = false;
    return _this;
  }

  _createClass(Model, [{
    key: "sync",

    /**
     * mock property
     * @property {boolean} mock Sets mock mode in the model
      */

    /**
     * Cross Origin property
     * @property {boolean} crossOrigin Cross Origin property
      */

    /**
     * sync - Sync model data to bound REST call
     * @method sync
      */
    value: function sync(method, model, options) {
      if (!options) {
        options = {};
      }
      if (this.crossOrigin === true) {
        options.crossDomain = true;
      }
      if (!options.xhrFields) {
        options.xhrFields = {
          withCredentials: true
        };
      }

      if (this.mock) {
        options.mock = this.mock;
      }

      return (0, _sync3.default)(method, model, options);
    }
  }]);

  return Model;
}(_augmentedjsNext2.default.AbstractModel);

;

exports.default = Model;

/***/ }),

/***/ "./src/pagination/api.js":
/*!*******************************!*\
  !*** ./src/pagination/api.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* Types of pagination API
* @enum
* @name PAGINATION_API_TYPE
* @memberof Pagination
* @property {Symbol} GITHUB GitHub API
* @property {Symbol} SOLR SOLR API
* @property {Symbol} DATABASE Database-like API
*/
var PAGINATION_API_TYPE = {};
PAGINATION_API_TYPE.GITHUB = Symbol("github");
PAGINATION_API_TYPE.SOLR = Symbol("solr");
PAGINATION_API_TYPE.DATABASE = Symbol("database");

exports.default = PAGINATION_API_TYPE;

/***/ }),

/***/ "./src/pagination/factory.js":
/*!***********************************!*\
  !*** ./src/pagination/factory.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _api = __webpack_require__(/*! ./api.js */ "./src/pagination/api.js");

var _api2 = _interopRequireDefault(_api);

var _paginated = __webpack_require__(/*! ../collection/paginated.js */ "./src/collection/paginated.js");

var _paginated2 = _interopRequireDefault(_paginated);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * Pagination factory for returning pagination collections of an API type
 * @memberof Pagination
 */
var PaginationFactory = function () {
  function PaginationFactory() {
    _classCallCheck(this, PaginationFactory);

    this.type = _api2.default;
  }

  _createClass(PaginationFactory, null, [{
    key: "getPaginatedCollection",

    /**
     * Get a pagination collection of type
     * @method getPaginatedCollection
      * @param {Pagination.PAGINATION_API_TYPE} apiType The API type to return an instance of
     * @param {object} data Collection models
     * @param {object} options Collection options
     * @static
     */
    value: function getPaginatedCollection(apiType, data, options) {
      var models = data ? data : {};
      var collection = null;

      if (!apiType) {
        apiType = _api2.default.GITHUB;
      }
      if (apiType === _api2.default.GITHUB) {
        collection = new _paginated2.default(models, options);
        collection.setPaginationConfiguration({
          currentPageParam: "page",
          pageSizeParam: "per_page"
        });
      } else if (apiType === _api2.default.SOLR) {
        collection = new _paginated2.default(models, options);
        collection.setPaginationConfiguration({
          currentPageParam: "start",
          pageSizeParam: "rows"
        });
      } else if (apiType === _api2.default.DATABASE) {
        collection = new _paginated2.default(models, options);
        collection.setPaginationConfiguration({
          currentPageParam: "offset",
          pageSizeParam: "limit"
        });
      }
      return collection;
    }
  }]);

  return PaginationFactory;
}();

;

exports.default = PaginationFactory;

/***/ }),

/***/ "./src/presentation.js":
/*!*****************************!*\
  !*** ./src/presentation.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _abstractView = __webpack_require__(/*! ./view/abstractView.js */ "./src/view/abstractView.js");

var _abstractView2 = _interopRequireDefault(_abstractView);

var _view = __webpack_require__(/*! ./view/view.js */ "./src/view/view.js");

var _view2 = _interopRequireDefault(_view);

var _history = __webpack_require__(/*! ./history.js */ "./src/history.js");

var _history2 = _interopRequireDefault(_history);

var _router = __webpack_require__(/*! ./router.js */ "./src/router.js");

var _router2 = _interopRequireDefault(_router);

var _model = __webpack_require__(/*! ./model/model.js */ "./src/model/model.js");

var _model2 = _interopRequireDefault(_model);

var _sync = __webpack_require__(/*! ./request/sync.js */ "./src/request/sync.js");

var _sync2 = _interopRequireDefault(_sync);

var _request = __webpack_require__(/*! ./request/request.js */ "./src/request/request.js");

var _request2 = _interopRequireDefault(_request);

var _configuration = __webpack_require__(/*! ./request/configuration.js */ "./src/request/configuration.js");

var _configuration2 = _interopRequireDefault(_configuration);

var _application = __webpack_require__(/*! ./application/application.js */ "./src/application/application.js");

var _application2 = _interopRequireDefault(_application);

var _widget = __webpack_require__(/*! ./widget/widget.js */ "./src/widget/widget.js");

var _widget2 = _interopRequireDefault(_widget);

var _dom = __webpack_require__(/*! ./dom/dom.js */ "./src/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

var _viewController = __webpack_require__(/*! ./controller/viewController.js */ "./src/controller/viewController.js");

var _viewController2 = _interopRequireDefault(_viewController);

var _managedController = __webpack_require__(/*! ./controller/managedController.js */ "./src/controller/managedController.js");

var _managedController2 = _interopRequireDefault(_managedController);

var _localStorageFactory = __webpack_require__(/*! ./storage/localStorageFactory.js */ "./src/storage/localStorageFactory.js");

var _localStorageFactory2 = _interopRequireDefault(_localStorageFactory);

var _localStorage = __webpack_require__(/*! ./storage/localStorage.js */ "./src/storage/localStorage.js");

var _localStorage2 = _interopRequireDefault(_localStorage);

var _namespacedLocalStorage = __webpack_require__(/*! ./storage/namespacedLocalStorage.js */ "./src/storage/namespacedLocalStorage.js");

var _namespacedLocalStorage2 = _interopRequireDefault(_namespacedLocalStorage);

var _collection = __webpack_require__(/*! ./collection/collection.js */ "./src/collection/collection.js");

var _collection2 = _interopRequireDefault(_collection);

var _paginated = __webpack_require__(/*! ./collection/paginated.js */ "./src/collection/paginated.js");

var _paginated2 = _interopRequireDefault(_paginated);

var _localStorageCollection = __webpack_require__(/*! ./collection/localStorageCollection.js */ "./src/collection/localStorageCollection.js");

var _localStorageCollection2 = _interopRequireDefault(_localStorageCollection);

var _colleague = __webpack_require__(/*! ./view/pubsub/colleague.js */ "./src/view/pubsub/colleague.js");

var _colleague2 = _interopRequireDefault(_colleague);

var _mediator = __webpack_require__(/*! ./view/pubsub/mediator.js */ "./src/view/pubsub/mediator.js");

var _mediator2 = _interopRequireDefault(_mediator);

var _decorator = __webpack_require__(/*! ./view/decorator/decorator.js */ "./src/view/decorator/decorator.js");

var _decorator2 = _interopRequireDefault(_decorator);

var _directiveView = __webpack_require__(/*! ./view/directive/directiveView.js */ "./src/view/directive/directiveView.js");

var _directiveView2 = _interopRequireDefault(_directiveView);

var _notification = __webpack_require__(/*! ./view/component/notification/notification.js */ "./src/view/component/notification/notification.js");

var _notification2 = _interopRequireDefault(_notification);

var _manager = __webpack_require__(/*! ./view/component/manager/manager.js */ "./src/view/component/manager/manager.js");

var _manager2 = _interopRequireDefault(_manager);

var _header = __webpack_require__(/*! ./view/component/header/header.js */ "./src/view/component/header/header.js");

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(/*! ./view/component/footer/footer.js */ "./src/view/component/footer/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _card = __webpack_require__(/*! ./view/component/card/card.js */ "./src/view/component/card/card.js");

var _card2 = _interopRequireDefault(_card);

var _article = __webpack_require__(/*! ./view/component/article/article.js */ "./src/view/component/article/article.js");

var _article2 = _interopRequireDefault(_article);

var _abstractToolbar = __webpack_require__(/*! ./view/component/toolbar/abstractToolbar.js */ "./src/view/component/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _toolbar = __webpack_require__(/*! ./view/component/toolbar/toolbar.js */ "./src/view/component/toolbar/toolbar.js");

var _toolbar2 = _interopRequireDefault(_toolbar);

var _hamburgerMenu = __webpack_require__(/*! ./view/component/menu/hamburgerMenu.js */ "./src/view/component/menu/hamburgerMenu.js");

var _hamburgerMenu2 = _interopRequireDefault(_hamburgerMenu);

var _menu = __webpack_require__(/*! ./view/component/menu/menu.js */ "./src/view/component/menu/menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _navigation = __webpack_require__(/*! ./view/component/menu/navigation.js */ "./src/view/component/menu/navigation.js");

var _navigation2 = _interopRequireDefault(_navigation);

var _dialog = __webpack_require__(/*! ./view/component/dialog/dialog.js */ "./src/view/component/dialog/dialog.js");

var _dialog2 = _interopRequireDefault(_dialog);

var _confirmation = __webpack_require__(/*! ./view/component/dialog/confirmation.js */ "./src/view/component/dialog/confirmation.js");

var _confirmation2 = _interopRequireDefault(_confirmation);

var _alert = __webpack_require__(/*! ./view/component/dialog/alert.js */ "./src/view/component/dialog/alert.js");

var _alert2 = _interopRequireDefault(_alert);

var _autoTable = __webpack_require__(/*! ./view/component/table/autoTable.js */ "./src/view/component/table/autoTable.js");

var _autoTable2 = _interopRequireDefault(_autoTable);

var _bigDataTable = __webpack_require__(/*! ./view/component/table/bigDataTable.js */ "./src/view/component/table/bigDataTable.js");

var _bigDataTable2 = _interopRequireDefault(_bigDataTable);

var _editableBigTable = __webpack_require__(/*! ./view/component/table/editableBigTable.js */ "./src/view/component/table/editableBigTable.js");

var _editableBigTable2 = _interopRequireDefault(_editableBigTable);

var _localStorageTable = __webpack_require__(/*! ./view/component/table/localStorageTable.js */ "./src/view/component/table/localStorageTable.js");

var _localStorageTable2 = _interopRequireDefault(_localStorageTable);

var _editableLocalStorageTable = __webpack_require__(/*! ./view/component/table/editableLocalStorageTable.js */ "./src/view/component/table/editableLocalStorageTable.js");

var _editableLocalStorageTable2 = _interopRequireDefault(_editableLocalStorageTable);

var _editableTable = __webpack_require__(/*! ./view/component/table/editableTable.js */ "./src/view/component/table/editableTable.js");

var _editableTable2 = _interopRequireDefault(_editableTable);

var _spreadsheet = __webpack_require__(/*! ./view/component/table/spreadsheet.js */ "./src/view/component/table/spreadsheet.js");

var _spreadsheet2 = _interopRequireDefault(_spreadsheet);

var _autoForm = __webpack_require__(/*! ./view/component/form/autoForm.js */ "./src/view/component/form/autoForm.js");

var _autoForm2 = _interopRequireDefault(_autoForm);

var _api = __webpack_require__(/*! ./pagination/api.js */ "./src/pagination/api.js");

var _api2 = _interopRequireDefault(_api);

var _factory = __webpack_require__(/*! ./pagination/factory.js */ "./src/pagination/factory.js");

var _factory2 = _interopRequireDefault(_factory);

var _restLogger = __webpack_require__(/*! ./logger/restLogger.js */ "./src/logger/restLogger.js");

var _restLogger2 = _interopRequireDefault(_restLogger);

var _colorLogger = __webpack_require__(/*! ./logger/colorLogger.js */ "./src/logger/colorLogger.js");

var _colorLogger2 = _interopRequireDefault(_colorLogger);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Augmented.js Next Presentation - The Presentation Component
 *
 * @author Bob Warren
 *
 * @module Presentation
 * @license Apache-2.0
 */

// Components
var Presentation = {};

/**
 * The standard version property
 * @constant VERSION
 */
Presentation.VERSION = "2.1.5";

Presentation.History = _history2.default;
Presentation.Router = _router2.default;

Presentation.Widget = _widget2.default;
Presentation.Dom = _dom2.default;

Presentation.Application = _application2.default;

Presentation.LocalStorageFactory = _localStorageFactory2.default;
Presentation.NamespacedLocalStorage = _namespacedLocalStorage2.default;
Presentation.LocalStorage = _localStorage2.default;

Presentation.Model = _model2.default;

Presentation.Collection = _collection2.default;
Presentation.LocalStorageCollection = _localStorageCollection2.default;
Presentation.PaginatedCollection = _paginated2.default;

Presentation.ViewController = _viewController2.default;
Presentation.ManagedController = _managedController2.default;
Presentation.AbstractView = _abstractView2.default;
Presentation.View = _view2.default;

Presentation.Colleague = _colleague2.default;
Presentation.Mediator = _mediator2.default;

Presentation.DecoratorView = _decorator2.default;
Presentation.DirectiveView = _directiveView2.default;

/**
 * Component - Large UI Components
 * @namespace Component
 */

Presentation.Component = {};
Presentation.Component.AbstractToolbar = _abstractToolbar2.default;
Presentation.Component.Toolbar = _toolbar2.default;
Presentation.Component.HamburgerMenu = _hamburgerMenu2.default;
Presentation.Component.Menu = _menu2.default;
Presentation.Component.NavigationMenu = _navigation2.default;
Presentation.Component.DialogView = _dialog2.default;
Presentation.Component.ConfirmationDialogView = _confirmation2.default;
Presentation.Component.AlertDialogView = _alert2.default;

Presentation.Component.AutomaticTable = _autoTable2.default;
Presentation.Component.BigDataTable = _bigDataTable2.default;
Presentation.Component.EditableLocalStorageTable = _editableLocalStorageTable2.default;
Presentation.Component.EditableTable = _editableTable2.default;
Presentation.Component.EditableBigDataTable = _editableBigTable2.default;
Presentation.Component.Spreadsheet = _spreadsheet2.default;
Presentation.Component.LocalStorageTable = _localStorageTable2.default;

Presentation.Component.AutomaticForm = _autoForm2.default;
Presentation.Component.Header = _header2.default;
Presentation.Component.Footer = _footer2.default;
Presentation.Component.Card = _card2.default;
Presentation.Component.Article = _article2.default;
Presentation.Component.Manager = _manager2.default;
Presentation.Component.NotificationCenter = _notification2.default;

Presentation.sync = _sync2.default;
Presentation.request = _request2.default;
Presentation.Request = {};
Presentation.Request.Configuration = _configuration2.default;

/**
 * @namespace Pagination
 */
Presentation.Pagination = {};
Presentation.Pagination.PAGINATION_API_TYPE = _api2.default;
Presentation.Pagination.PaginationFactory = _factory2.default;

Presentation.RESTLogger = _restLogger2.default;
Presentation.ColorConsoleLogger = _colorLogger2.default;

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
Presentation.$ = _dom2.default.query;

_augmentedjsNext2.default.Presentation = Presentation;

//export default Presentation;

// for webpack default on the browser
module.exports = _augmentedjsNext2.default;

/***/ }),

/***/ "./src/request/configuration.js":
/*!**************************************!*\
  !*** ./src/request/configuration.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* Object of configuration properties and callbacks.  Pass this to the request call to setup configutation
* @memberof Request
*/
var Configuration = {
  /**
  * url property
  * @property {string} url the url
  * @memberof Configuration
  */
  url: "localhost",
  /**
  * contentType property
  * @property {string} contentType the content type (default is text/plain)
  * @memberof Configuration
  */
  contentType: "text/plain",
  /**
  * dataType property
  * @property {string} dataType the data type (default is text)
  * @memberof Configuration
  */
  dataType: "text",
  /**
  * async property - no longer supported
  * @property {boolean} async set async (default true)
  * @memberof Configuration
  */
  //async: true;
  /**
  * method property
  * @property {string} method the ajax method (default GET)
  * @memberof Configuration
  */
  method: "GET",
  /**
  * cache property
  * @property {boolean} cache the cache toggle (default true)
  * @memberof Configuration
  */
  cache: true,
  /**
  * timeout property
  * @property {number} timeout the timeout property
  * @memberof Configuration
  */
  timeout: 0,
  /**
  * crossDomain property - sets withCredentials to true
  * @property {boolean} crossDomain the cross domain property
  * @memberof Configuration
  */
  crossDomain: false,
  /**
  * xhrFields property
  * @namespace xhrFields
  * @memberof Configuration
  */
  xhrFields: {},
  /**
  * withCredentials property
  * @property {boolean} withCredentials the setting for credentails
  * @memberof Configuration.xhrFields
  */
  withCredentials: false,
  /**
  * user property
  * @property {string} user the username for credentials
  * @memberof Configuration
  */
  user: null,
  /**
  * password property
  * @property {string} password the password for credentials
  * @memberof Configuration
  */
  password: null,
  /**
  * allowOrigins property
  * @property {string} allowOrigins the allowed origins for crossDomain
  * @memberof Configuration
  */
  allowOrigins: "",
  /**
  * allowMethods property
  * @property {string} allowMethods the allowed methods for crossDomain
  * @memberof Configuration
  */
  allowMethods: null,
  /**
  * headers property
  * @property {object} headers an object of headers (key, value)
  * @memberof Configuration
  */
  headers: {},
  /**
  * success callback
  * @property {function} success a callback for success
  * @memberof Configuration
  */
  success: null,
  /**
  * error callback
  * @property {function} error a callback for error
  * @memberof Configuration
  */
  error: null,
  /**
  * complete callback
  * @property {function} complete a callback after the ajax call
  * @memberof Configuration
  */
  complete: null,
  /**
  * beforeSend callback
  * @property {function} beforeSend a callback before the ajax call
  * @memberof Configuration
  */
  beforeSend: null,
  /**
  * mock
  * @property {boolean} mock a toggle to mock the ajax call
  * @memberof Configuration
  */
  mock: false
};

exports.default = Configuration;

/***/ }),

/***/ "./src/request/dataType.js":
/*!*********************************!*\
  !*** ./src/request/dataType.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DATA_TYPE = {
  "TEXT": "text",
  "JSON": "json"
};

exports.default = DATA_TYPE;

/***/ }),

/***/ "./src/request/headers.js":
/*!********************************!*\
  !*** ./src/request/headers.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var HEADERS = {
  "TYPE": "Content-Type",
  "TEXT": "text/plain",
  "APPLICATION": "application/json",
  "ACCEPT": "Accept",
  "CACHE": "Cache-Control",
  "NO_CACHE": "no-cache",
  "ALLOW_ORIGINS": "Access-Control-Allow-Origin",
  "ALLOW_METHODS": "Access-Control-Allow-Methods",
  "AUTH": "Authorization"
};

exports.default = HEADERS;

/***/ }),

/***/ "./src/request/methodMap.js":
/*!**********************************!*\
  !*** ./src/request/methodMap.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Map from CRUD to HTTP for our default sync implementation.
var METHOD_MAP = {
  "create": "POST",
  "update": "PUT",
  "patch": "PATCH",
  "delete": "DELETE",
  "read": "GET"
};

exports.default = METHOD_MAP;

/***/ }),

/***/ "./src/request/request.js":
/*!********************************!*\
  !*** ./src/request/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _headers = __webpack_require__(/*! ./headers.js */ "./src/request/headers.js");

var _headers2 = _interopRequireDefault(_headers);

var _dataType = __webpack_require__(/*! ./dataType.js */ "./src/request/dataType.js");

var _dataType2 = _interopRequireDefault(_dataType);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ASYNC = true; // Sync no longer supported by most clients

function mockXHR() {
  var _this = this;

  this.responseType = _dataType2.default.TEXT;
  this.responseText = "";
  this.async = true;
  this.status = 200;
  this.header = {};
  this.timeout = 70;
  this.open = function (method, uri, ASYNC, user, password) {
    _this.url = uri;
    _this.async = ASYNC;
    _this.user = user;
    _this.method = method;
  };
  this.send = function () {
    _this.onload();
  };
  this.setRequestHeader = function (header, value) {
    _this.header.header = value;
  };
  this.done = function () {};
  this.fail = function () {};
  this.always = function () {};
  this.then = function () {};
  this.options = {};
};

/*
 * Setup the rest of jQuery-like eventing and handlers for native xhr
 */
/*let aXHR = null;

if (XMLHttpRequest) {
  //console.info("AUGMENTED: Ajax is alive");
  aXHR = XMLHttpRequest;
  aXHR.done = () => {};
  aXHR.fail = () => {};
  aXHR.always = () => {};
  aXHR.then = () => {};
} else {
  aXHR = mockXHR;
}*/

/**
 * AJAX capability using simple jQuery-like API<br/>
 * Supports the following object properties and features:
 * <ul>
 * <li>method</li>
 * <li>url</li>
 * <li>contentType</li>
 * <li>dataType</li>
 * <li>beforeSend function</li>
 * <li>success callback</li>
 * <li>failure callback</li>
 * <li>complete callback</li>
 * <li>user</li>
 * <li>password</li>
 * <li>withCredentials</li>
 * <li>cache</li>
 * <li>timeout</li>
 * <li>mock - special flag for mocking response</li>
 * </ul>
 * @method request
 * @static
 * @param {Presentation.Request.Configuration} configuration object of configuration properties and callbacks.
 * @returns success or failure callback

 * @example Presentation.request({
 *         url: uri,
 *         contentType: "text/plain",
 *         dataType: "text",
 *         success: function (data, status) { ... },
 *         error: function (data, status) { ... }
 *     });
 */
var request = function request(configuration) {
  //console.debug("AUGMENTED: Ajax object: " + JSON.stringify(configuration));
  var xhr = null;

  if (configuration && configuration.url) {
    //console.warn("AUGMENTED: Ajax Here");
    var type = configuration.type;

    if (!configuration.method && configuration.type) {
      configuration.method = configuration.type;
    }

    var method = configuration.method ? configuration.method : "GET";
    var cache = configuration.cache ? configuration.cache : true;
    //console.warn("AUGMENTED: Ajax Here 2", (configuration.mock));
    xhr = configuration.mock ? new mockXHR() : new XMLHttpRequest();
    //console.warn("AUGMENTED: Ajax xhr", xhr);
    if (configuration.timeout) {
      xhr.timeout = configuration.timeout;
    }
    //const ASYNC = true; //(configuration.async !== undefined) ? configuration.async : true;

    // CORS & Async
    if (configuration.crossDomain && configuration.xhrFields && configuration.xhrFields.withCredentials) {
      xhr.withCredentials = configuration.xhrFields.withCredentials;
      // Sync Not supported for all browsers in CORS mode
      //if (!async) {
      //  logger.warn("AUGMENTED: Augmented.Request: Sync Not supported for all browsers in CORS mode!");
      //}
      //async = true;
    }

    if (ASYNC && configuration.dataType) {
      xhr.responseType = configuration.dataType ? configuration.dataType : _dataType2.default.TEXT;
    }

    xhr.open(method, encodeURI(configuration.url), ASYNC, configuration.user !== undefined ? configuration.user : "", configuration.password !== undefined ? configuration.password : "");
    xhr.setRequestHeader(_headers2.default.TYPE, configuration.contentType ? configuration.contentType : _headers2.default.TEXT);

    if (configuration.dataType === _dataType2.default.JSON) {
      xhr.setRequestHeader(_headers2.default.ACCEPT, _headers2.default.APPLICATION);
    }

    if (!cache) {
      xhr.setRequestHeader(_headers2.default.CACHE, _headers2.default.NO_CACHE);
    }

    // CORS
    if (xhr.withCredentials) {
      var allowOrigins = "*",
          allowMethods = "GET";
      if (configuration.allowOrigins) {
        allowOrigins = configuration.allowOrigins;
      }
      if (configuration.allowMethods) {
        allowMethods = configuration.allowMethods;
      }

      xhr.setRequestHeader(_headers2.default.ALLOW_ORIGINS, allowOrigins);
      xhr.setRequestHeader(_headers2.default.ALLOW_METHODS, allowMethods);
    }

    // Authorization
    if (xhr.withCredentials && configuration.user && configuration.password) {
      xhr.setRequestHeader(_headers2.default.AUTH, "Basic " + window.btoa(configuration.user + ":" + configuration.password));
    }

    // custom headers
    if (configuration.headers) {
      var i = 0,
          keys = Object.keys(configuration.headers),
          l = keys.length;

      for (i = 0; i < l; i++) {
        xhr.setRequestHeader(keys[i], configuration.headers[keys[i]]);
      }
    }

    xhr.onload = function () {
      try {
        if (xhr.status > 199 && xhr.status < 399) {
          if (configuration.success) {
            if (xhr.responseType === "" || xhr.responseType === _dataType2.default.TEXT) {
              if (xhr.responseText) {
                configuration.success(xhr.responseText, xhr.status, xhr);
              } else {
                //console.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                configuration.success("", xhr.status, xhr);
              }
            } else if (xhr.responseType === _dataType2.default.JSON) {
              if (xhr.response) {
                //console.debug("AUGMENTED: Ajax (JSON responseType) native JSON.");
                configuration.success(xhr.response, xhr.status, xhr);
              } else if (xhr.responseText) {
                //console.debug("AUGMENTED: Ajax (JSON responseType) parsed JSON from string.");
                configuration.success(JSON.parse(xhr.responseText), xhr.status, xhr);
              } else {
                //console.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                configuration.success("", xhr.status, xhr);
              }
            } else {
              if (xhr.responseText) {
                configuration.success(xhr.responseText, xhr.status, xhr);
              } else if (xhr.response) {
                configuration.success(xhr.response, xhr.status, xhr);
              } else {
                //console.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                configuration.success("", xhr.status, xhr);
              }
            }
          }
        } else if (xhr.status > 399 && xhr.status < 600) {
          if (configuration.failure) {
            configuration.failure(xhr, xhr.status, xhr.statusText);
          } else if (configuration.error) {
            configuration.error(xhr, xhr.status, xhr.statusText);
          }
        }
      } catch (e) {
        //console.error("AUGMENTED: Ajax (" + e + ")");
        if (configuration && configuration.error) {
          configuration.error(xhr, xhr.status, xhr.statusText);
        }
        return xhr;
      }
      if (configuration.complete) {
        configuration.complete(xhr, xhr.status);
      }
      return xhr;
    };

    if (configuration.beforeSend) {
      configuration.beforeSend(xhr);
    }
    xhr.send(configuration.data ? configuration.data : "");
  }

  //console.debug("AUGMENTED: Ajax status (" + xhr.status + ")");

  return undefined;
};

exports.default = request;

/***/ }),

/***/ "./src/request/sync.js":
/*!*****************************!*\
  !*** ./src/request/sync.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _methodMap = __webpack_require__(/*! ./methodMap.js */ "./src/request/methodMap.js");

var _methodMap2 = _interopRequireDefault(_methodMap);

var _request = __webpack_require__(/*! ./request.js */ "./src/request/request.js");

var _request2 = _interopRequireDefault(_request);

var _dataType = __webpack_require__(/*! ./dataType.js */ "./src/request/dataType.js");

var _dataType2 = _interopRequireDefault(_dataType);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Augmented.sync - Base sync method that can pass special augmented features
 * @method sync
 * @memberof Augmented
 */
var sync = function sync(method, model, options) {
  var type = _methodMap2.default[method];

  if (!options) {
    options = {};
  }

  // Default JSON-request options.
  var params = {
    type: type,
    dataType: _dataType2.default.JSON
  };

  // Ensure that we have a URL.
  if (!options.url) {
    if (model.url) {
      if (_augmentedjsNext2.default.isFunction(model.url)) {
        params.url = model.url();
      } else {
        params.url = model.url;
      }
    } else {
      throw new Error("A \"url\" property or function must be specified");
    }
  }

  // Ensure that we have the appropriate request data.
  if (options.data == null && model && (method === "create" || method === "update" || method === "patch")) {
    params.contentType = "application/json";
    params.data = JSON.stringify(options.attrs || model.toJSON(options));
  }

  // Don't process data on a non-GET request.
  if (params.type !== _methodMap2.default.read) {
    params.processData = false;
  }

  // Pass along `textStatus` and `errorThrown` from jQuery.
  var error = options.error;
  options.error = function (xhr, textStatus, errorThrown) {
    options.textStatus = textStatus;
    options.errorThrown = errorThrown;
    if (error) {
      error.call(options.context, xhr, textStatus, errorThrown);
    }
  };

  // Make the request, allowing the user to override any Ajax options.
  var xhr = options.xhr = (0, _request2.default)(_augmentedjsNext2.default.Utility.extend(params, options));
  model.trigger("request", model, xhr, options);
  return xhr;
};

exports.default = sync;

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;if (getter === undefined) {
      return undefined;
    }return getter.call(receiver);
  }
};

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _history = __webpack_require__(/*! ./history.js */ "./src/history.js");

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _map = __webpack_require__(/*! lodash.map */ "./node_modules/lodash.map/index.js");
var _isRegExp = __webpack_require__(/*! lodash.isregexp */ "./node_modules/lodash.isregexp/index.js");

// Cached regular expressions for matching named param parts and splatted
// parts of route strings.
var optionalParam = /\((.*?)\)/g;
var namedParam = /(\(\?)?:\w+/g;
var splatParam = /\*\w+/g;
var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
//const history = new History();

/**
 * Routers map faux-URLs to actions, and fire events when routes are
 * matched. Creating a new one sets its `routes` hash, if not set statically.
 * @extends Augmented.Object
 */

var Router = function (_Augmented$Object) {
  _inherits(Router, _Augmented$Object);

  function Router(options) {
    _classCallCheck(this, Router);

    var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this, options));

    options || (options = {});
    if (options.routes) {
      _this.routes = options.routes;
    }
    _this.history = new _history2.default();
    _this._bindRoutes();
    _this.initialize(options);
    return _this;
  }

  _createClass(Router, [{
    key: "loadView",

    /**
     * Load a view safely and remove the last view by calling cleanup, then remove
     * @param {View} view The View to load
     */
    value: function loadView(view) {
      console.debug("router loadView");
      this.cleanup();
      if (view) {
        this._view = view;
        if (this._view.render) {
          this._view.render();
        }
        if (this._view.delegateEvents) {
          this._view.delegateEvents();
        }
      }
    }
  }, {
    key: "cleanup",

    /**
     * Remove the last view by calling cleanup, then remove
     */
    value: function cleanup() {
      console.debug("router cleanup hasView " + (this._view ? this._view.name : "no view"));
      if (this._view) {
        if (this._view.cleanup) {
          this._view.cleanup();
        }
        if (this._view.remove) {
          console.debug("router removing view");
          this._view.remove();
        }
        this._view = null;
      }
    }
  }, {
    key: "initialize",

    /**
     * Initialize is an empty function by default. Override it with your own
     * initialization logic.
     */
    value: function initialize(options) {
      return _get(Router.prototype.__proto__ || Object.getPrototypeOf(Router.prototype), "initialize", this).call(this, options);
    }
  }, {
    key: "route",

    /**
     * Manually bind a single named route to a callback.
     * @param {string} route The route
     * @param {string} name The function binding name
     * @param {function} callback binding function
     * @example
     * this.route('search/:query/p:num', 'search', (query, num) => {
     *   ...
     * });
     */
    value: function route(_route, name, callback) {
      var _this2 = this;

      if (!_isRegExp(_route)) {
        _route = this._routeToRegExp(_route);
      }
      if (_augmentedjsNext2.default.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) {
        callback = this[name];
      }
      var router = this;

      this.history.route(_route, function (fragment) {
        var args = router._extractParameters(_route, fragment);

        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          _this2.history.trigger('route', router, name, args);
        }
      });
      return this;
    }
  }, {
    key: "execute",

    /**
     * Execute a route handler with the provided parameters.  This is an
     * excellent place to do pre-route setup or post-route cleanup.
     * @param {function} callback binding function
     * @param {array} args The arges passed
     */
    value: function execute(callback, args) {
      if (callback) {
        callback.apply(this, args);
      }
    }
  }, {
    key: "navigate",

    /**
     * Simple proxy to `history` to save a fragment into the history.
     * @param {string} fragment route fragment
     * @param {object} options any options to pass
     */
    value: function navigate(fragment, options) {
      this.history.navigate(fragment, options);
      return { "routes": this.routes };
    }
  }, {
    key: "startHistory",

    /**
     * Start the history using browser History API
     * @param {object} options any options to pass
     */
    value: function startHistory(options) {
      if (!this.history.started) {
        this.history.start(options);
      }
      return true;
    }
  }, {
    key: "_bindRoutes",

    // Bind all defined routes to `history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    value: function _bindRoutes() {
      if (!this.routes) {
        return;
      }
      this.routes = _augmentedjsNext2.default.result(this, 'routes');
      var route = void 0,
          routes = Object.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    }
  }, {
    key: "_routeToRegExp",

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    value: function _routeToRegExp(route) {
      route = route.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function (match, optional) {
        return optional ? match : '([^/?]+)';
      }).replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    }
  }, {
    key: "_extractParameters",

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    value: function _extractParameters(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _map(params, function (param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) {
          return param || null;
        }
        return param ? decodeURIComponent(param) : null;
      });
    }
  }]);

  return Router;
}(_augmentedjsNext2.default.Object);

;

exports.default = Router;

/***/ }),

/***/ "./src/storage/localStorage.js":
/*!*************************************!*\
  !*** ./src/storage/localStorage.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var isStorageSupported = function isStorageSupported() {
  return typeof Storage !== "undefined";
};

/**
 * Local Storage API - returned from LocalStorageFactory
 * @memberof Presentation
 * @param {boolean} persist Persistant storage or not
 */

var LocalStorage = function () {
  function LocalStorage(persist) {
    _classCallCheck(this, LocalStorage);

    this.isPersisted = persist;
    this._myStore = null;

    // true = localStorage, false = sessionStorage
    if (isStorageSupported()) {
      if (this.isPersisted) {
        this._myStore = localStorage;
      } else {
        this._myStore = sessionStorage;
      }
    } else {
      console.warn("AUGMENTED: No localStorage.");
    }
  }

  _createClass(LocalStorage, [{
    key: "isSupported",

    /**
     * is Persistant or not
     * @property {boolean} isPersisted Persistant property
     */

    /**
     * Is storage supported
     * @returns {boolean} Returns true if supported
     */
    value: function isSupported() {
      return isStorageSupported();
    }
  }, {
    key: "getItem",

    /**
     * Gets an item from storage
     * @param {string} key The key in storage
     * @returns {object} Returns object from storage
     */
    value: function getItem(itemKey) {
      var item = this._myStore.getItem(itemKey);
      if (item) {
        return JSON.parse(item);
      }
      return null;
    }
  }, {
    key: "setItem",

    /**
     * Sets an item to storage
     * @param {string} key The key in storage
     * @param {object} object The data to set
     */
    value: function setItem(itemKey, object) {
      this._myStore.setItem(itemKey, JSON.stringify(object));
    }
  }, {
    key: "removeItem",

    /**
     * Removes an item from storage
     * @param {string} key The key in storage
     */
    value: function removeItem(itemKey) {
      this._myStore.removeItem(itemKey);
    }
  }, {
    key: "clear",

    /**
     * Clears storage - <b>Warning: Destructive in non-namespaced instances!</b>
     */
    value: function clear() {
      this._myStore.clear();
    }
  }, {
    key: "key",

    /**
     * Gets the key from storage for index
     * @param {number} i The index in storage
     * @returns {string} Returns the key from storage
     */
    value: function key(i) {
      return this._myStore.key(i);
    }
  }, {
    key: "length",

    /**
     * The length of storage by keys
     * @returns {number} Returns the length of storage by keys
     */
    value: function length() {
      return this._myStore.length;
    }
  }]);

  return LocalStorage;
}();

;

exports.default = LocalStorage;

/***/ }),

/***/ "./src/storage/localStorageFactory.js":
/*!********************************************!*\
  !*** ./src/storage/localStorageFactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _localStorage = __webpack_require__(/*! ./localStorage.js */ "./src/storage/localStorage.js");

var _localStorage2 = _interopRequireDefault(_localStorage);

var _namespacedLocalStorage = __webpack_require__(/*! ./namespacedLocalStorage.js */ "./src/storage/namespacedLocalStorage.js");

var _namespacedLocalStorage2 = _interopRequireDefault(_namespacedLocalStorage);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * Augmented.LocalStorageFactory
 * Retrieve a local storage Object
 * @class LocalStorageFactory
 * @memberof Presentation
 */
var LocalStorageFactory = function () {
  function LocalStorageFactory() {
    _classCallCheck(this, LocalStorageFactory);
  }

  _createClass(LocalStorageFactory, null, [{
    key: "getStorage",

    /**
     * @method getStorage Get the storage instance
     * @param {boolean} persist Persistance or not
     * @param {string} namespace The namespace of the storage if needed (optional)
     * @returns {Presentation.LocalStorage} Returns an instance of local storage
     * @memberof LocalStorageFactory
     */
    value: function getStorage(persist, namespace) {
      var ls = null;
      if (namespace) {
        ls = new _namespacedLocalStorage2.default(persist, namespace);
      } else {
        ls = new _localStorage2.default(persist);
      }
      if (ls && ls.isSupported()) {
        return ls;
      }
      return null;
    }
  }]);

  return LocalStorageFactory;
}();

;

exports.default = LocalStorageFactory;

/***/ }),

/***/ "./src/storage/namespacedLocalStorage.js":
/*!***********************************************!*\
  !*** ./src/storage/namespacedLocalStorage.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _localStorage = __webpack_require__(/*! ./localStorage.js */ "./src/storage/localStorage.js");

var _localStorage2 = _interopRequireDefault(_localStorage);

var _localStorageFactory = __webpack_require__(/*! ./localStorageFactory.js */ "./src/storage/localStorageFactory.js");

var _localStorageFactory2 = _interopRequireDefault(_localStorageFactory);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * NamespacedLocalStorage
 * Retrieve a local storage Object
 * @class NamespacedLocalStorage
 * @memberof Presentation
 */
var NamespacedLocalStorage = function (_LocalStorage) {
  _inherits(NamespacedLocalStorage, _LocalStorage);

  function NamespacedLocalStorage(persist, namespace) {
    _classCallCheck(this, NamespacedLocalStorage);

    var _this = _possibleConstructorReturn(this, (NamespacedLocalStorage.__proto__ || Object.getPrototypeOf(NamespacedLocalStorage)).call(this, persist));

    _this._ls = _localStorageFactory2.default.getStorage(persist);
    _this._myStore = new _augmentedjsNext2.default.Utility.Map();
    _this.namespace = namespace;

    // true = localStorage, false = sessionStorage
    if (_this.isSupported() && _this.namespace && !persist) {
      _this._ls.setItem(_this.namespace, JSON.stringify(_this._myStore.toJSON()));
    } else if (_this.isSupported() && _this.namespace && persist) {
      _this.getItem(_this.namespace);
    }
    return _this;
  }

  _createClass(NamespacedLocalStorage, [{
    key: "isSupported",

    // public
    value: function isSupported() {
      return this._ls && this._ls.isSupported();
    }
  }, {
    key: "getItem",
    value: function getItem(itemKey) {
      var map = {};
      try {
        map = JSON.parse(this._ls.getItem(this.namespace));
      } catch (e) {
        // TODO: bundle this
        //logger.error("AUGMENTED: Augmented Local Strorage could not parse item map from storage!");
        return null;
      }
      this._myStore.clear();
      this._myStore.marshall(map);

      var item = this._myStore.get(itemKey);

      if (item) {
        // support regular string as well as object
        var ret = void 0;
        try {
          ret = JSON.parse(item);
        } catch (e) {
          // not JSON
          ret = item;
        }
        return ret;
      }
      return null;
    }
  }, {
    key: "setItem",
    value: function setItem(itemKey, object) {
      if (!this._myStore) {
        this._myStore = new _augmentedjsNext2.default.Utility.Map();
      }
      this._myStore.set(itemKey, object);
      this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
    }
  }, {
    key: "removeItem",
    value: function removeItem(itemKey) {
      this._myStore.remove(itemKey);
      this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
    }
  }, {
    key: "clear",
    value: function clear() {
      this._myStore.clear();
      this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
    }
  }, {
    key: "key",
    value: function key(i) {
      return this._myStore.key(i);
    }
  }, {
    key: "length",
    value: function length() {
      return this._myStore.size();
    }
  }, {
    key: "getNamespacedItems",

    /**
    * Gets the namespaced items as a Map
    * @method getNamespacedItems
    * @memberof NamespacedAugmentedLocalStorage
    * @returns {Augmented.Utility.Map} Returns the namespaced storage as Map
    */
    value: function getNamespacedItems() {
      return this._myStore;
    }
  }]);

  return NamespacedLocalStorage;
}(_localStorage2.default);

;

exports.default = NamespacedLocalStorage;

/***/ }),

/***/ "./src/view/abstractView.js":
/*!**********************************!*\
  !*** ./src/view/abstractView.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var Augmented = _interopRequireWildcard(_augmentedjsNext);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _bind = __webpack_require__(/*! lodash.bind */ "./node_modules/lodash.bind/index.js");

// Cached regex to split keys for `delegate`.
var DELEGATE_EVENT_SPLITTER = /^(\S+)\s*(.*)$/;

/**
 * Aubstract View - the base view for handlng display in the MV* Concept
 * @memberof Presentation
 * @extends Augmented.Object
 */

var AbstractView = function (_Augmented$Object) {
  _inherits(AbstractView, _Augmented$Object);

  function AbstractView(options) {
    _classCallCheck(this, AbstractView);

    var _this = _possibleConstructorReturn(this, (AbstractView.__proto__ || Object.getPrototypeOf(AbstractView)).call(this, options));

    if (options && options.name) {
      _this._name = options.name;
    } else {
      _this._name = "Untitled";
    }
    if (options && options.permissions) {
      _this._permissions = options.permissions;
    } else {
      _this._permissions = {
        include: [],
        exclude: []
      };
    }
    if (options && options.tagName) {
      _this.tagName = options.tagName;
    } else {
      _this.tagName = "div";
    }
    if (options && options.el) {
      _this._el = options.el;
    } else {
      _this._el = "";
    }

    if (options && options.model) {
      _this.model = options.model;
    } else {
      _this.model = null;
    }

    if (options && options.collection) {
      _this.collection = options.collection;
    } else {
      _this.collection = null;
    }

    if (options && options.id) {
      _this.id = options.id;
    } else {
      _this.id = 0;
    }

    if (options && options.className) {
      _this._style = options.className;
    } else {
      _this._style = "";
    }

    if (options && options.style) {
      _this._style = options.style;
    } else {
      _this._style = "";
    }

    if (options && options.attributes) {
      _this.attributes = options.attributes;
    } else {
      _this.attributes = {};
    }

    _this.cid = Augmented.Utility.uniqueId("view");
    //Augmented.Utility.extend(this, _pick(options, VIEW_OPTIONS));

    _this._ensureElement();

    /*this.render = Augmented.Utility.wrap(this.render, (render) => {
      this.beforeRender();
      render.apply(this);
      this.afterRender();
      return this;
    });*/
    if (options && options.template) {
      _this.template = options.template;
    } else {
      _this.template = "";
    }
    _this.initialize(options);
    return _this;
  }

  _createClass(AbstractView, [{
    key: "init",

    /**
     * Custom initialize - Override for custom code
     * @param {object} options Optional options to pass to the view
     */
    value: function init(options) {}
  }, {
    key: "initialize",

    /**
     * Initializes the view - <em>Note: Do not override, use init instead!</em>
     * @param {object} options Optional options to pass to the view
     * @returns {View} Returns 'this,' as in, this view context
     */
    value: function initialize(options) {
      this.options = options;
      this.init(options);
      return this;
    }
  }, {
    key: "beforeRender",

    /**
     * Before Render callback for the view
     * @returns this Context of the view
     */
    value: function beforeRender() {
      return this;
    }
  }, {
    key: "render",

    /**
     * Render callback for the view
     * @returns this Context of the view
     */
    value: function render() {
      return this;
    }
  }, {
    key: "afterRender",

    /**
     * After Render callback for the view
     * @returns this Context of the view
     */
    value: function afterRender() {
      return this;
    }
  }, {
    key: "remove",

    /**
     * Remove this view by taking the element out of the DOM, and removing any
     * applicable Backbone.Events listeners.
     */
    value: function remove() {
      this._removeElement();
      this.stopListening();
      return this;
    }
  }, {
    key: "_removeElement",

    // Remove this view's element from the document and all event listeners
    // attached to it. Exposed for subclasses using an alternative DOM
    // manipulation API.
    value: function _removeElement() {
      var el = this._el;
      if (this._el && Augmented.isString(this._el)) {
        el = document.querySelector(this._el);
      }
      if (el) {
        el.innerHTML = "";
      }
    }
  }, {
    key: "setElement",

    /**
     * Change the view's element (`this.el` property) and re-delegate the
     * view's events on the new element.
     */
    value: function setElement(element) {
      //console.log("setting element", element);
      this.undelegateEvents();
      this._el = element;
      this.delegateEvents();
      return this;
    }
  }, {
    key: "delegateEvents",

    /**
     * Creates the `this.el` and `this.$el` references for this view using the
     * given `el`. `el` can be a CSS selector or an HTML string, a jQuery
     * context or an element. Subclasses can override this to utilize an
     * alternative DOM manipulation API and are only required to set the
     * `this.el` property.
     *
     * Set callbacks, where `this.events` is a hash of
     * pairs. Callbacks will be bound to the view, with `this` set properly.
     * Uses event delegation for efficiency.
     * Omitting the selector binds the event to `this._el`.
     * @example
     * {"event selector": "callback"}
     * @example
     * {
     *   'mousedown .title':  'edit',
     *   'click .button':     'save',
     *   'click .open':       (e) => { ... }
     * }
     */
    value: function delegateEvents(events) {
      events || (events = Augmented.result(this, "events"));
      if (!events) {
        return this;
      }
      this.undelegateEvents();
      var key = void 0;
      for (key in events) {
        var method = events[key];
        if (!Augmented.isFunction(method)) {
          method = this[method];
        }
        if (!method) {
          continue;
        }
        var match = key.match(DELEGATE_EVENT_SPLITTER);
        this.delegate(match[1], match[2], _bind(method, this));
      }
      return this;
    }
  }, {
    key: "delegate",

    /**
     * Add a single event listener to the view's element (or a child element
     * using `selector`). This only works for delegate-able events: not `focus`,
     * `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
     */
    value: function delegate(eventName, selector, listener) {
      var matchesNL = document.querySelectorAll(selector);
      if (matchesNL) {
        var matches = Array.from(matchesNL);
        var i = 0;
        var l = matches.length;
        for (i = 0; i < l; i++) {
          ////console.log("match", matches[i]);
          matches[i].addEventListener(eventName, listener);
        }
      }
      return this;
    }
  }, {
    key: "undelegateEvents",

    /**
     * Clears all callbacks previously bound to the view by `delegateEvents`.
     * You usually don't need to use this, but may wish to if you have multiple
     * views attached to the same DOM element.
     */
    value: function undelegateEvents() {
      ////console.log("undelegateEvents");
      if (this._el) {
        ////console.log("undelegateEvents el", this._el);
        var el = this._el;
        if (Augmented.isString(this._el)) {
          el = document.querySelector(this._el);
        }
        if (el) {
          ////console.log("undelegateEvents selected el", el);
          var new_el = el.cloneNode(true); //true means a deep copy

          //console.log("undelegateEvents cloned el", new_el);
          if (new_el && new_el.parentNode) {
            //console.log("undelegateEvents parent el", new_el.parentNode);
            el.parentNode.replaceChild(new_el, el);
            //console.log("undelegateEvents replaced el");
          }
        }
        //this._el.removeEventListener(`.delegateEvents${this.cid}`);
      }
      return this;
    }
  }, {
    key: "undelegate",

    /**
     * A finer-grained `undelegateEvents` for removing a single delegated event.
     * `selector` and `listener` are both optional.
     */
    value: function undelegate(eventName, selector, listener) {
      if (this._el) {
        var el = this._el;
        if (Augmented.isString(this._el)) {
          el = document.querySelector(this._el);
        }
        if (el) {
          var matchesNL = el.querySelectorAll(selector);
          if (matchesNL) {
            var matches = Array.from(matchesNL);
            var i = 0;
            var l = matches.length;

            for (i = 0; i < l; i++) {
              ////console.log("match", matches[i]);
              matches[i].removeEventListener(eventName, listener);
            }
          }
        }

        //for (i = 0; i < l; i++) {
        //  matches[i].removeEventListener(`${eventName}.delegateEvents${this.cid}`, listener);
        //}
      }
      //this._el.removeEventListener(`${eventName}.delegateEvents${this.cid}`, selector, listener);
      return this;
    }
  }, {
    key: "_createElement",

    // Produces a DOM element to be assigned to your view. Exposed for
    // subclasses using an alternative DOM manipulation API.
    value: function _createElement(tagName) {
      return document.createElement(tagName);
    }
  }, {
    key: "_ensureElement",

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `style` and `tagName` properties.
    value: function _ensureElement() {
      if (!this.el) {
        var attrs = Augmented.Utility.extend({}, Augmented.result(this, "attributes"));
        if (this.id) {
          attrs.id = this.id;
        }
        if (this._style) {
          attrs["class"] = this._style;
        }
        var el = this._createElement(this.tagName);
        var body = document.querySelector("body");
        if (body) {
          body.appendChild(el);
        }
        if (el) {
          this.setElement(el);
        }
        this._setAttributes(attrs);
      } else {
        this.setElement(this._el);
      }
    }
  }, {
    key: "_setAttributes",

    // Set attributes from a hash on this view's element.  Exposed for
    // subclasses using an alternative DOM manipulation API.
    value: function _setAttributes(attributes) {
      var key = void 0;
      for (key in attributes) {
        if (this._el) {
          var el = this._el;
          if (Augmented.isString(this._el)) {
            el = document.querySelector(this._el);
          }
          if (el) {
            el.setAttribute(key, attributes[key]);
          }
        }
      }
    }
  }, {
    key: "addPermission",

    /**
    * Adds a permission to the view
    * @param {string} permission The permission to add
    * @param {boolean} negative Flag to set a nagative permission (optional)
    */
    value: function addPermission(permission, negative) {
      if (!negative) {
        negative = false;
      }
      if (permission !== null && !Array.isArray(permission)) {
        var p = negative ? this._permissions.exclude : this._permissions.include;
        p.push(permission);
      }
    }
  }, {
    key: "removePermission",

    /**
    * Removes a permission to the view
    * @param {string} permission The permission to remove
    * @param {boolean} negative Flag to set a nagative permission (optional)
    */
    value: function removePermission(permission, negative) {
      if (!negative) {
        negative = false;
      }
      if (permission !== null && !Array.isArray(permission)) {
        var p = negative ? this._permissions.exclude : this._permissions.include;
        p.splice(p.indexOf(permission), 1);
      }
    }
  }, {
    key: "clearPermissions",

    /**
    * Clears the permissions in the view
    */
    value: function clearPermissions() {
      this._permissions = {
        include: [],
        exclude: []
      };
    }
  }, {
    key: "matchesPermission",

    /**
    * Matches a permission in the view
    * @param {string} match The permissions to match
    * @param {boolean} negative Flag to set a nagative permission (optional)
    * @returns {boolean} Returns true if the match exists
    */
    value: function matchesPermission(match, negative) {
      if (!negative) {
        negative = false;
      }
      var p = negative ? this._permissions.exclude : this._permissions.include;
      return p.indexOf(match) !== -1;
    }
  }, {
    key: "canDisplay",

    /**
    * Callback to return if this view can display
    * @returns {boolean} Returns true if this view can display
    */
    value: function canDisplay() {
      return true;
    }
  }, {
    key: "el",

    /**
     * The name property of the view
     * @property {string} name The Name of the view
     * @private
     */

    /**
     * Permissions in the view
     * @property permissions
     * @private
     */

    get: function get() {
      return this._el;
    },
    set: function set(el) {
      this._el = el;
    }
  }, {
    key: "name",

    /**
    * Sets the name of the view
    * @param {string} name The name of the view
    */
    set: function set(name) {
      this._name = name;
    },

    /**
    * Gets the name of the view
    * @returns {string} Returns the name of the view
    */
    get: function get() {
      return this._name;
    }
  }, {
    key: "permissions",

    /**
    * Sets the permissions to the view
    * @param {array} permissions The permissions to set
    * @param {boolean} negative Flag to set a nagative permission (optional)
    */
    set: function set(permissions) {
      /*if (!negative) {
        negative = false;
      }
      if (permissions !== null && Array.isArray(permissions)) {
        if (negative) {
          this._permissions.exclude = permissions;
        } else {
          this._permissions.include = permissions;
        }
      }*/
      this._permissions = permissions;
    },

    /**
    * Gets the permissions to the view<br/>
    * Return format:<br/>
    * <pre>{
    *     include: [],
    *     exclude: []
    * }</pre>
    *
    * @returns {object} The permissions in the view
    */
    get: function get() {
      return this._permissions;
    }
  }]);

  return AbstractView;
}(Augmented.Object);

;

exports.default = AbstractView;

/***/ }),

/***/ "./src/view/component/article/article.js":
/*!***********************************************!*\
  !*** ./src/view/component/article/article.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _decorator = __webpack_require__(/*! ../../decorator/decorator.js */ "./src/view/decorator/decorator.js");

var _decorator2 = _interopRequireDefault(_decorator);

var _dom = __webpack_require__(/*! ../../../dom/dom.js */ "./src/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var DEFAULT_TAG = "article";

/**
 * An article class for setting up a 'page'<br/>
 * Supported options are:<br/>
 * <ul>
 * <li>name - The name of the article view</li>
 * <li>el - The mount point</li>
 * <li>style - The style class</li>
 * <li>header - The header markup</li>
 * <li>headerEl - The header mount point</li>
 * <li>footer - The footer markup</li>
 * <li>footerEl - The footer mount point</li>
 * <li>body - The body markup</li>
 * <li>bodyEl - The body mount point (will generate a div)</li>
 * <li>sections - array of sections to prefill (see addSection API for format)</li>
 * </ul>
 * @memberof Presentation.Component
 * @extends Presentation.DecoratorView
 * @param {object} options Options to pass to the constructor
 * @example
 * const article = new Presentation.Component.Article(
 *                 { "el": "#mount", "header": "html", "footerEl": "#foot" });
 */

var Article = function (_DecoratorView) {
  _inherits(Article, _DecoratorView);

  function Article(options) {
    _classCallCheck(this, Article);

    if (!options) {
      options = {};
    }
    if (!options.name) {
      options.name = DEFAULT_TAG;
    }
    // tag should be article
    options.tagName = DEFAULT_TAG;

    var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, options));

    if (options && options.header) {
      _this._header = options.header;
    } else {
      _this._header = "";
    }
    if (options && options.headerEl) {
      _this._headerEl = options.headerEl;
    } else {
      _this._headerEl = "";
    }
    if (options && options.headerStyle) {
      _this._headerStyle = options.headerStyle;
    } else {
      _this._headerStyle = "";
    }
    if (options && options.body) {
      _this._body = options.body;
    } else {
      _this._body = "";
    }
    if (options && options.footer) {
      _this._footer = options.footer;
    } else {
      _this._footer = "";
    }
    if (options && options.footerEl) {
      _this._footerEl = options.footerEl;
    } else {
      _this._footerEl = "";
    }
    if (options && options.footerStyle) {
      _this._footerStyle = options.footerStyle;
    } else {
      _this._footerStyle = "";
    }
    if (options && options.sections) {
      _this._sections = options.sections;
    } else {
      _this._sections = [];
    }
    return _this;
  }

  _createClass(Article, [{
    key: "_formatSections",

    /**
     * @private
     */
    value: function _formatSections() {
      var l = this._sections.length;
      var sections = "",
          i = 0;
      for (i = 0; i < l; i++) {
        sections += this._formatSection(this._sections[i]);
      }
      return sections;
    }
  }, {
    key: "_formatSection",

    /**
     * @private
     */
    value: function _formatSection(section) {
      var sect = "";
      if (section && (section.body || section.id || section.class)) {
        var cls = section.class ? " class=\"" + section.class + "\"" : "";
        var id = section.id ? " id=\"" + section.id + "\"" : "";
        var body = section.body ? section.body : "";
        sect = "<section" + id + cls + ">" + body + "</section>";
      }
      return sect;
    }
  }, {
    key: "addSection",

    /**
     * Add a section object to the article
     * @param {object} section a section object
     * @example Section Object format:
     * {
     *   "id" "something",
     *   "body" "html",
     *   "class" "something"
     * }
     */
    value: function addSection(section) {
      this._sections.push(section);
    }
  }, {
    key: "clearSections",

    /**
     * Clear the sections
     */
    value: function clearSections() {
      this._sections.splice(0, this._sections.length);
    }
  }, {
    key: "render",

    /**
     * render - render the article
     */
    value: function render() {
      if (this.el) {
        _dom2.default.setValue(this.el, this._template());
        this.delegateEvents();
      }
      return this;
    }
  }, {
    key: "_template",

    /**
     * template - sets content of the dialog, handled internally
     * @private
     */
    value: function _template() {
      var header = "";
      if (this._header) {
        var hid = "",
            style = "";
        if (this._headerEl) {
          hid = " id=\"" + this._headerEl + "\"";
        }
        if (this._headerStyle) {
          style = " class=\"" + this._headerStyle + "\"";
        }

        header = "<header" + hid + style + ">" + this._header + "</header>";
      }
      var footer = "";
      if (this._footer) {
        var fid = "",
            _style = "";
        if (this._footerEl) {
          fid = " id=\"" + this._footerEl + "\"";
        }
        if (this._footerStyle) {
          _style = " class=\"" + this._footerStyle + "\"";
        }
        footer = "<footer" + fid + _style + ">" + this._footer + "</footer>";
      }
      var body = "";
      if (this._body) {
        if (this._bodyEl) {
          body = "<div id=\"" + this._bodyEl + "\">" + this._body + "</div>";
        } else {
          body = "" + this._body;
        }
      }
      return "" + header + body + this._formatSections() + footer;
    }
  }, {
    key: "header",

    /**
     * Header property
     * @property {string} header
     */
    set: function set(header) {
      this._header = header;
    },
    get: function get() {
      return this._header;
    }
  }, {
    key: "footer",

    /**
     * Footer for the article
     * @property {string} footer
     */
    set: function set(footer) {
      this._footer = footer;
    },
    get: function get() {
      return this._footer;
    }
  }, {
    key: "body",

    /**
     * The body content of the card (supports HTML)
     * @property {string} body
     */
    set: function set(body) {
      this._body = body;
    },
    get: function get() {
      return this._body;
    }
  }, {
    key: "sections",

    /**
     * The section array
     * @property {array} sections
     */
    set: function set(sections) {
      if (sections && Array.isArray(sections)) {
        this._sections = sections;
      }
    },
    get: function get() {
      return this._sections;
    }
  }]);

  return Article;
}(_decorator2.default);

;

exports.default = Article;

/***/ }),

/***/ "./src/view/component/card/card.js":
/*!*****************************************!*\
  !*** ./src/view/component/card/card.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;if (getter === undefined) {
      return undefined;
    }return getter.call(receiver);
  }
};

var _decorator = __webpack_require__(/*! ../../decorator/decorator.js */ "./src/view/decorator/decorator.js");

var _decorator2 = _interopRequireDefault(_decorator);

var _dom = __webpack_require__(/*! ../../../dom/dom.js */ "./src/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * A card view - simple panel/dialog-like panel
 * @memberof Presentation.Component
 * @extends Presentation.DecoratorView
 */
var Card = function (_DecoratorView) {
  _inherits(Card, _DecoratorView);

  function Card(options) {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, options));

    if (!_this.name) {
      _this.name = "card";
    }
    if (options && options.body) {
      _this._body = options.body;
    } else {
      _this._body = "";
    }
    if (options && options.style) {
      _this._style = "card " + options.style;
    } else {
      _this._style = "card";
    }
    return _this;
  }

  _createClass(Card, [{
    key: "_template",

    /**
     * template - sets content of the dialog, handled internally
     * @private
     */
    value: function _template() {
      return "<div class=\"" + this._style + "\">" + this._body + "</div>";
    }
  }, {
    key: "render",

    /**
     * render
     */
    value: function render() {
      if (this.el) {
        _dom2.default.setValue(this.el, this._template());
        this.delegateEvents();
      }
      return this;
    }
  }, {
    key: "remove",

    /**
     * remove
     */
    value: function remove() {
      this.removeTemplate(this.el, true);
      return _get(Card.prototype.__proto__ || Object.getPrototypeOf(Card.prototype), "remove", this).call(this);
    }
  }, {
    key: "style",

    /**
     * body property - the body of the card
     * @property body
     */

    /**
     * style property - the style
     * @property style
     */
    set: function set(style) {
      this._style = style;
    },
    get: function get() {
      return this._style;
    }
  }, {
    key: "body",

    /**
     * The body content of the card (supports HTML)
     * @property body
     */
    set: function set(body) {
      this._body = body;
    },
    get: function get() {
      return this._body;
    }
  }]);

  return Card;
}(_decorator2.default);

;

exports.default = Card;

/***/ }),

/***/ "./src/view/component/dialog/alert.js":
/*!********************************************!*\
  !*** ./src/view/component/dialog/alert.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dialog = __webpack_require__(/*! ./dialog.js */ "./src/view/component/dialog/dialog.js");

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * A automatic alert dialog view - creates a dialog with cancel button and a message
 * @class AlertDialogView
 * @memberof Presentation.Component
 * @extends Presentation.Component.DialogView
 */
var AlertDialogView = function (_DialogView) {
  _inherits(AlertDialogView, _DialogView);

  function AlertDialogView(options) {
    _classCallCheck(this, AlertDialogView);

    if (!options) {
      options = {};
    };
    if (!options.buttons) {
      options.buttons = {};
    }
    options.buttons.cancel = "cancel";
    options.style = "alert";
    return _possibleConstructorReturn(this, (AlertDialogView.__proto__ || Object.getPrototypeOf(AlertDialogView)).call(this, options));
  }

  return AlertDialogView;
}(_dialog2.default);

;

exports.default = AlertDialogView;

/***/ }),

/***/ "./src/view/component/dialog/confirmation.js":
/*!***************************************************!*\
  !*** ./src/view/component/dialog/confirmation.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dialog = __webpack_require__(/*! ./dialog.js */ "./src/view/component/dialog/dialog.js");

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * A automatic comfirmation dialog view - creates a dialog with yes no buttons
 * @class Augmented.Presentation.ConfirmationDialogView
 * @memberof Presentation.Component
 * @extends Presentation.Component.DialogView
 */
var ConfirmationDialogView = function (_DialogView) {
  _inherits(ConfirmationDialogView, _DialogView);

  function ConfirmationDialogView(options) {
    _classCallCheck(this, ConfirmationDialogView);

    if (!options) {
      options = {};
    };
    if (!options.buttons) {
      options.buttons = {};
    }
    options.buttons.yes = "yes";
    options.buttons.no = "no";
    options.style = "alert";
    return _possibleConstructorReturn(this, (ConfirmationDialogView.__proto__ || Object.getPrototypeOf(ConfirmationDialogView)).call(this, options));
  }

  return ConfirmationDialogView;
}(_dialog2.default);

;

exports.default = ConfirmationDialogView;

/***/ }),

/***/ "./src/view/component/dialog/dialog.js":
/*!*********************************************!*\
  !*** ./src/view/component/dialog/dialog.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _decorator = __webpack_require__(/*! ../../decorator/decorator.js */ "./src/view/decorator/decorator.js");

var _decorator2 = _interopRequireDefault(_decorator);

var _dom = __webpack_require__(/*! ../../../dom/dom.js */ "./src/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
* A automatic dialog view - creates a dialog with simple configurations to customize
* @class DialogView
* @memberof Presentation.Component
* @extends Presentation.DecoratorView
*/
var DialogView = function (_DecoratorView) {
  _inherits(DialogView, _DecoratorView);

  function DialogView(options) {
    _classCallCheck(this, DialogView);

    var _this = _possibleConstructorReturn(this, (DialogView.__proto__ || Object.getPrototypeOf(DialogView)).call(this, options));

    if (!_this.name) {
      _this.name = "dialog";
    }

    if (options && options.title) {
      _this._title = options.title;
    } else {
      _this._title = "";
    }
    if (options && options.body) {
      _this._body = options.body;
    } else {
      _this._body = "";
    }
    if (options && options.style) {
      _this._style = options.style;
    } else {
      _this._style = "form";
    }
    if (options && options.buttons) {
      _this._buttons = options.buttons;
    } else {
      _this._buttons = {};
    }
    return _this;
  }

  _createClass(DialogView, [{
    key: "_template",

    /**
    * template - sets content of the dialog, handled internally
    * @method _template
    * @memberof DialogView
    * @private
    */
    value: function _template() {
      return "<div class=\"blur\"><dialog class=\"" + this._style + "\"><h1>" + this._title + "</h1>" + this._body + this._getButtonGroup() + "</dialog></div>";
    }
  }, {
    key: "_getButtonGroup",
    value: function _getButtonGroup() {
      var html = "<div class=\"buttonGroup\">",
          i = 0,
          keys = Object.keys(this._buttons),
          l = keys ? keys.length : 0;
      for (i = 0; i < l; i++) {
        html = html + ("<button data-" + this.name + "=\"" + this._buttons[keys[i]] + "\" data-click=\"" + this._buttons[keys[i]] + "\">" + keys[i] + "</button>");
      }
      return html + "</div>";
    }
  }, {
    key: "render",

    /**
    * render - render the dialog
    * @method render
    * @memberof DialogView
    */
    value: function render() {
      if (this.el) {
        _dom2.default.setValue(this.el, this._template());
        this.delegateEvents();
        this.trigger("open");
      }
      return this;
    }
  }, {
    key: "cancel",

    // built-in callbacks

    /**
    * cancel - standard built-in cancel callback.  Calls close method by default
    * @method cancel
    * @param {Event} event Event passed in
    * @memberof DialogView
    */
    value: function cancel(event) {
      this.close(event);
    }
  }, {
    key: "open",

    /**
    * open - standard built-in open callback.  Calls render method by default
    * @method open
    * @param {Event} event Event passed in
    * @memberof DialogView
    */
    value: function open(event) {
      this.render();
    }
  }, {
    key: "close",

    /**
    * close - standard built-in close callback.  Closes the dialog, triggers the 'close' event
    * @method close
    * @param {Event} event Event passed in
    * @memberof DialogView
    */
    value: function close(event) {
      this.trigger("close");
      _dom2.default.empty(this.el, true);
    }
  }, {
    key: "title",

    /**
    * title property - the title of the dialog
    * @property title
    * @memberof DialogView
    */
    set: function set(title) {
      this._title = title;
    },
    get: function get() {
      return this._title;
    }
  }, {
    key: "style",

    /**
    * body property - the body of the dialog, handled by setBody method
    * @property body
    * @memberof DialogView
    */

    /**
    * style property - the style (form, alert, bigForm, or whatever class you want)
    * @property style
    * @memberof DialogView
    */
    set: function set(style) {
      this._style = style;
    },
    get: function get() {
      return this._style;
    }
  }, {
    key: "buttons",

    /**
    * buttons object property - the buttons to match to functions
    * @property buttons
    * @memberof DialogView
    */
    set: function set(buttons) {
      this._buttons = buttons;
    },
    get: function get() {
      return this._buttons;
    }
  }, {
    key: "body",

    /**
    * setBody - sets the body content of the dialog
    * @method setBody
    * @param {String} body A string value of th body (supports HTML)
    * @memberof DialogView
    */
    set: function set(body) {
      this._body = body;
    },
    get: function get() {
      return this._body;
    }
  }]);

  return DialogView;
}(_decorator2.default);

;

exports.default = DialogView;

/***/ }),

/***/ "./src/view/component/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/view/component/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;if (getter === undefined) {
      return undefined;
    }return getter.call(receiver);
  }
};

var _decorator = __webpack_require__(/*! ../../decorator/decorator.js */ "./src/view/decorator/decorator.js");

var _decorator2 = _interopRequireDefault(_decorator);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * A Footer Component
 * @class Footer
 * @memberof Presentation.Component
 * @extends Presentation.DecoratorView
 */
var Footer = function (_DecoratorView) {
  _inherits(Footer, _DecoratorView);

  function Footer(options) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, options));

    if (options && options.body) {
      _this._body = options.body;
    } else {
      _this._body = "";
    }
    return _this;
  }

  _createClass(Footer, [{
    key: "render",

    /**
     * render
     */
    value: function render() {
      if (this.el) {
        Dom.setValue(this.el, this._template());
        this.delegateEvents();
      }
      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      this.removeTemplate(this.el, true);
      return _get(Footer.prototype.__proto__ || Object.getPrototypeOf(Footer.prototype), "remove", this).call(this);
    }
  }, {
    key: "body",

    /**
     * The body content of the card (supports HTML)
     * @property body
     * @memberof Footer
     */
    set: function set(body) {
      this._body = body;
    },
    get: function get() {
      return this._body;
    }
  }]);

  return Footer;
}(_decorator2.default);

;

exports.default = Footer;

/***/ }),

/***/ "./src/view/component/form/autoForm.js":
/*!*********************************************!*\
  !*** ./src/view/component/form/autoForm.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var Augmented = _interopRequireWildcard(_augmentedjsNext);

var _decorator = __webpack_require__(/*! ../../decorator/decorator.js */ "./src/view/decorator/decorator.js");

var _decorator2 = _interopRequireDefault(_decorator);

var _buildForm = __webpack_require__(/*! ../functions/buildForm.js */ "./src/view/component/functions/buildForm.js");

var _buildForm2 = _interopRequireDefault(_buildForm);

var _messages = __webpack_require__(/*! ../functions/messages.js */ "./src/view/component/functions/messages.js");

var _messages2 = _interopRequireDefault(_messages);

var _dom = __webpack_require__(/*! ../../../dom/dom.js */ "./src/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

var _model = __webpack_require__(/*! ../../../model/model.js */ "./src/model/model.js");

var _model2 = _interopRequireDefault(_model);

var _request = __webpack_require__(/*! ../../../request/request.js */ "./src/request/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
* A automatic form view created from a JSON Schema
* @memberof Presentation.Component
* @extends Presentation.DecoratorView
*/
var AutomaticForm = function (_DecoratorView) {
  _inherits(AutomaticForm, _DecoratorView);

  function AutomaticForm(options) {
    _classCallCheck(this, AutomaticForm);

    var _this = _possibleConstructorReturn(this, (AutomaticForm.__proto__ || Object.getPrototypeOf(AutomaticForm)).call(this, options));

    _this.crossOrigin = false;
    _this._fields = {};
    _this.uri = null;
    _this.isInitalized = false;
    _this.title = null;
    _this.description = "";
    _this._required = [];
    _this.display = null;

    if (_this.model && options && options.clearForm) {
      _this.model.clear();
    } else if (!_this.model) {
      _this.model = new _model2.default();
    }
    if (options) {
      if (options.crossOrigin) {
        _this.crossOrigin = options.crossOrigin;
      }
      if (options.schema) {
        // check if this is a schema vs a URI to get a schema
        if (Augmented.isObject(options.schema)) {
          _this.schema = options.schema;
        } else {
          // is a URI?
          var parsedSchema = null;
          try {
            parsedSchema = JSON.parse(options.schema);
            if (parsedSchema && Augmented.isObject(parsedSchema)) {
              _this.schema = parsedSchema;
            }
          } catch (e) {
            //_logger.warn("AUGMENTED: AutoForm parsing string schema failed.  URI perhaps?");
          }
          if (!_this.schema) {
            _this._retrieveSchema(options.schema);
            _this.isInitalized = false;
          }
        }
      }

      if (options.el) {
        _this.el = options.el;
      }

      if (options.uri) {
        _this.uri = options.uri;
      }

      if (options.data && Augmented.isObject(options.data)) {
        _this.model.set(options.data);
      }
      if (options.title) {
        _this.title = options.title;
      }
      if (options.description) {
        _this.description = options.description;
      }
    }

    if (_this.model && _this.uri) {
      _this.model.url = _this.uri;
    }
    if (_this.model) {
      _this.model.crossOrigin = _this.crossOrigin;
    }
    if (_this.schema) {
      if ((!_this.name || _this.name === "") && _this.schema.title) {
        _this.name = _this.schema.title;
      }
      if ((!_this.description || _this.description === "") && _this.schema.description) {
        _this.description = _this.schema.description;
      }

      if (_this.schema.required) {
        _this._required = _this.schema.required;
      } else {
        _this._required = [];
      }

      if (!_this.isInitalized) {
        _this._fields = _this.schema.properties;
        _this.model.schema = _this.schema;
        _this.isInitalized = true;
      }
    } else {
      _this.isInitalized = false;
    }
    return _this;
  }

  _createClass(AutomaticForm, [{
    key: "_retrieveSchema",

    // standard functionality

    /**
    * The crossOrigin property - enables cross origin fetch
    * @property {boolean} crossOrigin The crossOrigin property
    *
    */

    /**
    * The fields property
    * @property {object} fields The fields property
    * @private
    *
    */

    /**
    * The URI property
    * @property {string} uri The URI property
    *
    */

    /**
    * The model property
    * @property {Augmented.Model} model The model property
    *
    */

    /**
    * The initialized property
    * @property {boolean} isInitalized The initialized property
    *
    */

    /**
    * The title property
    * @property {string} title The title of the form
    *
    */

    /**
    * The name property
    * @property {string} name The name of the form
    *
    */

    /**
    * The description property
    * @property {string} description The description of the form
    *
    */

    /**
    * The required fields property
    * @property {Array} _required The required fields
    *
    * @private
    */

    /**
      * Fields to display - null will display all
      * @method display
      *
      */

    value: function _retrieveSchema(uri) {
      var that = this;
      var schema = null;
      (0, _request2.default)({
        url: uri,
        contentType: "application/json",
        dataType: "json",
        success: function success(data, status) {
          if (typeof data === "string") {
            schema = JSON.parse(data);
          } else {
            schema = data;
          }
          var options = { "schema": schema };
          that.initialize(options);
        },
        error: function error(data, status) {
          //_logger.warn("AUGMENTED: AutoForm Failed to fetch schema!");
        }
      });
    }
  }, {
    key: "setURI",

    /**
    * Sets the URI
    *
    * @param {string} uri The URI
    */
    value: function setURI(uri) {
      this.uri = uri;
    }
  }, {
    key: "setSchema",

    /**
    * Sets the schema
    *
    * @param {object} schema The JSON schema of the dataset
    */
    value: function setSchema(schema) {
      this.schema = schema;
      this._fields = schema.properties;
      this.model.reset();
      this.model.schema = schema;

      if (this.uri) {
        model.url = this.uri;
      }
    }
  }, {
    key: "showProgressBar",

    /**
    * Enable/Disable the progress bar
    * @param {boolean} show Show or Hide the progress bar
    */
    value: function showProgressBar(show) {
      if (this.el) {
        var e = _dom2.default.selector(this.el);
        if (e) {
          var p = e.querySelector("progress");
          if (p) {
            p.style.display = show ? "block" : "none";
            p.style.visibility = show ? "visible" : "hidden";
          }
        }
      }
    }
  }, {
    key: "showMessage",

    /**
    * Show a message related to the form
    *
    * @param {string} message Some message to display
    */
    value: function showMessage(message) {
      if (this.el) {
        var e = _dom2.default.selector(this.el);
        if (e) {
          var p = e.querySelector("p[class=message]");
          if (p) {
            p.innerHTML = message;
          }
        }
      }
    }
  }, {
    key: "validate",

    /**
    * Validate the form
    *
    * @returns {boolean} Returns true on success of validation
    */
    value: function validate() {
      var messages = this.model ? this.model.validate() : null;
      if (!this.model.isValid() && messages && messages.messages) {
        this.showMessage((0, _messages2.default)(messages.messages));
      } else {
        this.showMessage("");
      }
      return messages;
    }
  }, {
    key: "isValid",

    /**
    * Is the form valid
    *
    * @returns {boolean} Returns true if valid
    */
    value: function isValid() {
      return this.model ? this.model.isValid() : true;
    }
  }, {
    key: "render",

    /**
    * Render the form
    *
    * @returns {object} Returns the view context ('this')
    */
    value: function render() {
      if (!this.isInitalized) {
        //_logger.warn("AUGMENTED: AutomaticForm Can't render yet, not initialized!");
        return this;
      }

      this.template = null; //"notused";
      this.showProgressBar(true);

      if (this.el) {
        var e = _dom2.default.selector(this.el);
        if (e) {
          if (this.theme) {
            _dom2.default.addClass(e, this.theme);
          }
          // progress bar
          var n = document.createElement("progress"),
              t = document.createTextNode("Please wait.");
          n.appendChild(t);
          e.appendChild(n);

          // the form
          var form = (0, _buildForm2.default)(this.title ? this.title : this.name, this.description, this._fields, this.model.toJSON(), this._required, this.name, this.display);
          e.appendChild(form);
          this._formEl = _dom2.default.query("form", this.el);

          // message
          n = document.createElement("p");
          n.classList.add("message");
          e.appendChild(n);
        }
      } else {
        //_logger.warn("AUGMENTED: AutomaticForm no element anchor, not rendering.");
        this.showProgressBar(false);
        return this;
      }

      this.delegateEvents();

      this.syncAllBoundElements();

      this.showProgressBar(false);
      return this;
    }
  }, {
    key: "reset",

    /**
    * Reset the form
    *
    * @returns {object} Returns the view context ('this')
    */
    value: function reset() {
      if (this._formEl) {
        this._formEl.reset();
        this.model.reset();
      }
    }
  }, {
    key: "populate",

    /**
    * Populate the form
    * @param {object} data Data to fill in
    *
    * @returns {object} Returns the view context ('this')
    */
    value: function populate(data) {
      this.model.set(data);
    }
  }, {
    key: "remove",

    /**
    * Remove the form and all binds
    */
    value: function remove() {
      /* off to unbind the events */
      this.undelegateEvents();
      this.off();
      this.stopListening();

      _dom2.default.empty(this.el);

      return this;
    }
  }]);

  return AutomaticForm;
}(_decorator2.default);

;

exports.default = AutomaticForm;

/***/ }),

/***/ "./src/view/component/functions/buildForm.js":
/*!***************************************************!*\
  !*** ./src/view/component/functions/buildForm.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var formCompile = function formCompile(name, description, fields, model, required, binding, display) {
  var form = document.createElement("form"),
      fs = document.createElement("formset"),
      keys = Object.keys(fields),
      l = display ? display.length : keys.length;
  var t = void 0,
      i = void 0,
      input = void 0,
      lb = void 0,
      req = void 0;

  form.appendChild(fs);

  if (name) {
    var lg = document.createElement("legend");
    t = document.createTextNode(name);
    if (description) {
      var att = document.createAttribute("title");
      att.value = description;
      lg.setAttributeNode(att);
    }
    lg.appendChild(t);
    fs.appendChild(lg);
  }
  if (!display) {
    display = keys;
  }

  for (i = 0; i < l; i++) {
    var displayCol = true;
    if (display !== null) {
      displayCol = keys.indexOf(display[i]) !== -1;
    }

    if (displayCol) {
      req = required.indexOf(display[i]) !== -1;
      lb = document.createElement("label");
      lb.setAttribute("for", display[i]);
      t = document.createTextNode(display[i]);
      lb.appendChild(t);
      fs.appendChild(lb);

      input = Augmented.Presentation.Widget.Input(fields[display[i]], display[i], model[display[i]], display[i], req, binding);
      if (input) {
        fs.appendChild(input);
      }
    }
  }
  return form;
  //e.appendChild(form);
};

exports.default = formCompile;

/***/ }),

/***/ "./src/view/component/functions/buildMenuItems.js":
/*!********************************************************!*\
  !*** ./src/view/component/functions/buildMenuItems.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// data structure = { id: "itemID", "click": "event", "icon": "web", "title": "something", "spacer": false }
var buildMenuItems = function buildMenuItems(name, data) {
  var items = "";
  if (name && data && data.length !== 0) {
    var l = data.length;
    var i = 0;
    for (i = 0; i < l; i++) {
      if (data[i].spacer) {
        items = items + '<div class="spacer"></div>';
      } else {
        items = items + '<div id="' + data[i].id + '" data-' + name + '="' + data[i].id + '" data-click="' + data[i].click + '">' + (data[i].icon ? '<i class="material-icons md-dark">' + data[i].icon + '</i>' : '') + data[i].title + '</div>';
      }
    }
  }
  return items;
};

exports.default = buildMenuItems;

/***/ }),

/***/ "./src/view/component/functions/buildTable.js":
/*!****************************************************!*\
  !*** ./src/view/component/functions/buildTable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

// Tables and Grids

var TABLE_DATA_ATTRIBUTES = exports.TABLE_DATA_ATTRIBUTES = {
  "NAME": "data-name",
  "TYPE": "data-type",
  "DESCRIPTION": "data-description",
  "INDEX": "data-index",
  "LABEL": "data-label",
  "SORT_CLASS": "sorted"
};

var csvTableCompile = exports.csvTableCompile = function csvTableCompile(name, desc, columns, data, del) {
  var csv = "";
  if (!del) {
    del = ",";
  }
  if (columns) {
    var key = void 0,
        obj = void 0;
    for (key in columns) {
      if (columns.hasOwnProperty(key)) {
        obj = columns[key];
        csv = csv + key + del;
      }
    }
    csv = csv.slice(0, -1);
    csv = csv + "\n";
  }

  var i = void 0,
      d = void 0,
      dkey = void 0,
      dobj = void 0,
      t = void 0;
  var l = data.length;
  for (i = 0; i < l; i++) {
    d = data[i];
    for (dkey in d) {
      if (d.hasOwnProperty(dkey)) {
        dobj = d[dkey];
        t = typeof dobj === "undefined" ? "undefined" : _typeof(dobj);
        csv = csv + dobj + del;
      }
    }
    csv = csv.slice(0, -1);
    csv = csv + "\n";
  }
  return csv;
};

var tsvTableCompile = exports.tsvTableCompile = function tsvTableCompile(name, desc, columns, data) {
  return csvTableCompile(name, desc, columns, data, "\t");
};

var defaultTableCompile = exports.defaultTableCompile = function defaultTableCompile(name, desc, columns, data, lineNumbers, sortKey, editable, display) {
  var html = "<table " + TABLE_DATA_ATTRIBUTES.NAME + "=\"" + name + "\" " + TABLE_DATA_ATTRIBUTES.DESCRIPTION + "=\"" + desc + "\">";
  if (name) {
    html = html + "<caption";
    if (desc) {
      html = html + (" title=\"" + desc + "\"");
    }
    html = html + (">" + name + "</caption>");
  }
  html = html + "<thead>";
  html = html + defaultTableHeader(columns, lineNumbers, sortKey, display);
  html = html + "</thead><tbody>";
  if (data) {
    if (editable) {
      html = html + editableTableBody(data, columns, lineNumbers, sortKey, display);
    } else {
      html = html + defaultTableBody(data, columns, lineNumbers, sortKey, display);
    }
  }
  html = html + "</tbody></table>";
  return html;
};

var defaultTableHeader = exports.defaultTableHeader = function defaultTableHeader(columns, lineNumbers, sortKey, display) {
  var html = "";
  if (columns) {
    html = html + "<tr>";
    if (lineNumbers) {
      html = html + ("<th " + TABLE_DATA_ATTRIBUTES.NAME + "=\"lineNumber\">#</th>");
    }
    var key = void 0,
        obj = void 0;
    for (key in columns) {
      if (columns.hasOwnProperty(key)) {
        obj = columns[key];
        html = html + ("<th " + TABLE_DATA_ATTRIBUTES.NAME + "=\"" + key + "\" " + TABLE_DATA_ATTRIBUTES.DESCRIPTION + "=\"" + obj.description + "\" " + TABLE_DATA_ATTRIBUTES.TYPE + "=\"" + obj.type + "\"");
        if (sortKey === key) {
          html = html + " class=\"" + TABLE_DATA_ATTRIBUTES.SORT_CLASS + "\"";
        }
        html = html + ">" + key + "</th>";
      }
    }
    html = html + "</tr>";
  }
  return html;
};

var defaultTableBody = exports.defaultTableBody = function defaultTableBody(data, columns, lineNumbers, sortKey, display) {
  var i = void 0,
      d = void 0,
      dkey = void 0,
      dobj = void 0,
      html = "",
      l = data.length,
      t = void 0;
  for (i = 0; i < l; i++) {
    d = data[i];
    html = html + "<tr>";
    if (lineNumbers) {
      html = html + "<td class=\"label number\">" + (i + 1) + "</td>";
    }
    for (dkey in d) {
      if (d.hasOwnProperty(dkey)) {
        dobj = d[dkey];
        t = typeof dobj === "undefined" ? "undefined" : _typeof(dobj);
        html = html + "<td " + TABLE_DATA_ATTRIBUTES.TYPE + "=\"" + t + "\" class=\"" + t;
        if (sortKey === dkey) {
          html = html + " " + TABLE_DATA_ATTRIBUTES.SORT_CLASS;
        }
        html = html + "\">" + dobj + "</td>";
      }
    }
    html = html + "</tr>";
  }
  return html;
};

var directDOMTableCompile = exports.directDOMTableCompile = function directDOMTableCompile(el, name, desc, columns, data, lineNumbers, sortKey, editable, display, selectable, linkable, linksConfig, linkCallback) {
  var table = document.createElement("table"),
      thead = document.createElement("thead"),
      tbody = document.createElement("tbody");
  var n = void 0,
      t = void 0;

  // Binding
  table.setAttribute("data-" + name, name);

  table.setAttribute(TABLE_DATA_ATTRIBUTES.NAME, name);
  table.setAttribute(TABLE_DATA_ATTRIBUTES.DESCRIPTION, desc);
  if (desc) {
    n = document.createElement("caption");
    if (name) {
      n.setAttribute("title", name);
    }
    t = document.createTextNode(desc);
    n.appendChild(t);
    table.appendChild(n);
  }
  directDOMTableHeader(thead, columns, lineNumbers, sortKey, display, selectable);
  table.appendChild(thead);
  table.appendChild(tbody);
  if (data) {
    if (editable) {
      directDOMEditableTableBody(tbody, data, columns, lineNumbers, sortKey, display, selectable, name, linkable, linksConfig, linkCallback);
    } else {
      directDOMTableBody(tbody, data, columns, lineNumbers, sortKey, display, selectable, name, linkable, linksConfig, linkCallback);
    }
  }
  el.appendChild(table);
};

var directDOMTableHeader = exports.directDOMTableHeader = function directDOMTableHeader(el, columns, lineNumbers, sortKey, display, selectable) {
  if (columns && el) {
    var tr = document.createElement("tr");
    var n = void 0,
        t = void 0,
        key = void 0,
        obj = void 0;
    if (selectable) {
      n = document.createElement("th");
      n.setAttribute(TABLE_DATA_ATTRIBUTES.NAME, "select");
      t = document.createTextNode("\u274F");
      n.appendChild(t);
      tr.appendChild(n);
    }

    if (lineNumbers) {
      n = document.createElement("th");
      n.setAttribute(TABLE_DATA_ATTRIBUTES.NAME, "lineNumber");
      t = document.createTextNode("#");
      n.appendChild(t);
      tr.appendChild(n);
    }

    for (key in columns) {
      var displayCol = true;
      if (display !== null) {
        displayCol = display.indexOf(key) !== -1;
      }

      if (displayCol && columns.hasOwnProperty(key)) {
        obj = columns[key];

        n = document.createElement("th");
        n.setAttribute(TABLE_DATA_ATTRIBUTES.NAME, key);
        n.setAttribute(TABLE_DATA_ATTRIBUTES.DESCRIPTION, obj.description);
        n.setAttribute(TABLE_DATA_ATTRIBUTES.TYPE, obj.type);
        if (sortKey === key) {
          n.classList.add(TABLE_DATA_ATTRIBUTES.SORT_CLASS);
        }

        t = document.createTextNode(key);
        n.appendChild(t);
        tr.appendChild(n);
      }
    }
    el.appendChild(tr);
  }
};

var directDOMTableBody = exports.directDOMTableBody = function directDOMTableBody(el, data, columns, lineNumbers, sortKey, display, selectable, name, linkable, linksConfig, linkCallback) {
  var l = data.length;
  var i = void 0,
      d = void 0,
      dkey = void 0,
      dobj = void 0,
      t = void 0,
      td = void 0,
      tn = void 0,
      tr = void 0,
      cobj = void 0;

  for (i = 0; i < l; i++) {
    d = data[i];
    tr = document.createElement("tr");

    if (selectable) {
      td = document.createElement("td");
      td.setAttribute(TABLE_DATA_ATTRIBUTES.NAME, "select");
      tn = document.createElement("input");
      tn.type = "checkbox";
      tn.name = String(i);
      tn.value = String(i);
      // Binding
      tn.setAttribute("data-" + name, "row-" + i);

      td.appendChild(tn);
      td.classList.add("label", "select");
      tr.appendChild(td);
    }

    if (lineNumbers) {
      td = document.createElement("td");
      tn = document.createTextNode(String(i + 1));
      td.appendChild(tn);
      td.classList.add("label", "number");
      tr.appendChild(td);
    }
    for (dkey in columns) {
      var displayCol = true;
      if (display !== null) {
        displayCol = display.indexOf(dkey) !== -1;
      }
      if (displayCol && d.hasOwnProperty(dkey)) {
        dobj = d[dkey];
        t = typeof dobj === "undefined" ? "undefined" : _typeof(dobj);
        td = document.createElement("td");
        tn = document.createTextNode(dobj);

        if (linkable && linksConfig && linkCallback && (linksConfig.column === dkey || linksConfig.wholeRow)) {
          var a = document.createElement("a");
          //a.title = "my title text";
          a.href = linkCallback(d);
          a.appendChild(tn);
          td.appendChild(a);
        } else {
          td.appendChild(tn);
        }

        td.classList.add(t);
        if (sortKey === dkey) {
          td.classList.add(TABLE_DATA_ATTRIBUTES.SORT_CLASS);
        }
        td.setAttribute(TABLE_DATA_ATTRIBUTES.TYPE, t);
        td.setAttribute(TABLE_DATA_ATTRIBUTES.LABEL, dkey);
        tr.appendChild(td);
      }
    }
    el.appendChild(tr);
  }
};

var directDOMEditableTableBody = exports.directDOMEditableTableBody = function directDOMEditableTableBody(el, data, columns, lineNumbers, sortKey, display, selectable, name) {
  var l = data.length,
      ln = lineNumbers;
  var i = void 0,
      d = void 0,
      dkey = void 0,
      dobj = void 0,
      t = void 0,
      td = void 0,
      tn = void 0,
      tr = void 0,
      input = void 0,
      cobj = void 0;
  for (i = 0; i < l; i++) {
    d = data[i];
    tr = document.createElement("tr");

    if (selectable) {
      td = document.createElement("td");
      td.setAttribute(TABLE_DATA_ATTRIBUTES.NAME, "select");
      tn = document.createElement("input");
      tn.type = "checkbox";
      tn.name = String(i);
      tn.value = String(i);
      td.appendChild(tn);
      td.classList.add("label", "select");
      tr.appendChild(td);
    }

    if (ln) {
      td = document.createElement("td");
      tn = document.createTextNode(String(i + 1));
      td.appendChild(tn);
      td.classList.add("label", "number");
      tr.appendChild(td);
    }

    for (dkey in d) {
      var displayCol = true;
      if (display !== null) {
        displayCol = display.indexOf(dkey) !== -1;
      }

      if (displayCol && d.hasOwnProperty(dkey)) {
        cobj = columns[dkey] ? columns[dkey] : {};
        dobj = d[dkey];

        t = typeof dobj === "undefined" ? "undefined" : _typeof(dobj);

        td = document.createElement("td");
        td.classList.add(t);
        if (sortKey === dkey) {
          td.classList.add(TABLE_DATA_ATTRIBUTES.SORT_CLASS);
        }
        td.setAttribute(TABLE_DATA_ATTRIBUTES.TYPE, t);
        td.setAttribute(TABLE_DATA_ATTRIBUTES.LABEL, dkey);
        // input field

        if (t === "object") {
          if (Array.isArray(dobj)) {
            var iii = 0,
                lll = dobj.length,
                option = void 0,
                tOption = void 0;
            input = document.createElement("select");
            for (iii = 0; iii < lll; iii++) {
              option = document.createElement("option");
              option.setAttribute("value", dobj[iii]);
              tOption = document.createTextNode(dobj[iii]);
              option.appendChild(tOption);
              input.appendChild(option);
            }
          } else {
            input = document.createElement("textarea");
            input.value = JSON.stringify(dobj);
          }
        } else if (t === "boolean") {
          input = document.createElement("input");
          input.setAttribute("type", "checkbox");
          if (dobj === true) {
            input.setAttribute("checked", "checked");
          }
          input.value = dobj;
        } else if (t === "number") {
          input = document.createElement("input");
          input.setAttribute("type", "number");
          input.value = dobj;
        } else if (t === "string" && cobj.enum) {
          input = document.createElement("select");
          var iiii = 0,
              llll = cobj.enum.length,
              option2 = void 0,
              tOption2 = void 0;
          for (iiii = 0; iiii < llll; iiii++) {
            option2 = document.createElement("option");
            option2.setAttribute("value", cobj.enum[iiii]);
            tOption2 = document.createTextNode(cobj.enum[iiii]);
            if (dobj === cobj.enum[iiii]) {
              option2.setAttribute("selected", "selected");
            }
            option2.appendChild(tOption2);
            input.appendChild(option2);
          }
        } else if (t === "string" && cobj.format === "email") {
          input = document.createElement("input");
          input.setAttribute("type", "email");
          input.value = dobj;
        } else if (t === "string" && cobj.format === "uri") {
          input = document.createElement("input");
          input.setAttribute("type", "url");
          input.value = dobj;
        } else if (t === "string" && cobj.format === "date-time") {
          input = document.createElement("input");
          input.setAttribute("type", "datetime");
          input.value = dobj;
        } else {
          input = document.createElement("input");
          input.setAttribute("type", "text");
          input.value = dobj;
        }

        if (t === "string" && cobj.pattern) {
          input.setAttribute("pattern", cobj.pattern);
        }

        if (cobj.minimum) {
          input.setAttribute("min", cobj.minimum);
        }

        if (cobj.maximum) {
          input.setAttribute("max", cobj.maximum);
        }

        if (t === "string" && cobj.minlength) {
          input.setAttribute("minlength", cobj.minlength);
        }

        if (t === "string" && cobj.maxlength) {
          input.setAttribute("maxlength", cobj.maxlength);
        }

        input.setAttribute(TABLE_DATA_ATTRIBUTES.NAME, dkey);
        input.setAttribute(TABLE_DATA_ATTRIBUTES.INDEX, i);

        // Binding
        input.setAttribute("data-" + name, name);

        td.appendChild(input);

        tr.appendChild(td);
      }
    }
    el.appendChild(tr);
  }
};

/*
* << First | < Previous | # | Next > | Last >>
*/
var directDOMPaginationControl = exports.directDOMPaginationControl = function directDOMPaginationControl(el, currentPage, totalPages) {
  var d = void 0,
      n = void 0,
      t = void 0;
  d = document.createElement("div");
  d.classList.add("paginationControl");

  n = document.createElement("span");
  n.classList.add("first");
  t = document.createTextNode("<< First");
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("previous");
  t = document.createTextNode("< Previous");
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("current");
  t = document.createTextNode(currentPage + " of " + totalPages);
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("next");
  t = document.createTextNode("Next >");
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("last");
  t = document.createTextNode("Last >>");
  n.appendChild(t);
  d.appendChild(n);

  el.appendChild(d);
};

/***/ }),

/***/ "./src/view/component/functions/messages.js":
/*!**************************************************!*\
  !*** ./src/view/component/functions/messages.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var formatValidationMessages = function formatValidationMessages(messages) {
  var html = "";
  if (messages && messages.length > 0) {
    html = html + "<ul class=\"errors\">";
    var l = messages.length;
    var i = 0,
        ii = 0;
    for (i = 0; i < l; i++) {
      var ll = messages[i].errors.length;
      for (ii = 0; ii < ll; ii++) {
        html = html + "<li>" + messages[i].errors[ii] + "</li>";
      }
    }
    html = html + "</ul>";
  }
  return html;
};

exports.default = formatValidationMessages;

/***/ }),

/***/ "./src/view/component/header/header.js":
/*!*********************************************!*\
  !*** ./src/view/component/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;if (getter === undefined) {
      return undefined;
    }return getter.call(receiver);
  }
};

var _decorator = __webpack_require__(/*! ../../decorator/decorator.js */ "./src/view/decorator/decorator.js");

var _decorator2 = _interopRequireDefault(_decorator);

var _dom = __webpack_require__(/*! ../../../dom/dom.js */ "./src/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * A Header Component
 * @memberof Presentation.Component
 * @extends Presentation.DecoratorView
 */
var Header = function (_DecoratorView) {
  _inherits(Header, _DecoratorView);

  function Header(options) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, options));

    if (options && options.title) {
      _this._title = options.title;
    } else {
      _this._title = "";
    }
    if (options && options.subTitle) {
      _this._subTitle = options.subTitle;
    } else {
      _this._subTitle = "";
    }
    return _this;
  }

  _createClass(Header, [{
    key: "render",

    /**
     * Render the Header
     * @returns {object} Returns the view context ('this')
     */
    value: function render() {
      _dom2.default.setValue(this.el, "" + this.template + (this.title ? "<h1>" + this.title + "</h1>" : "") + (this.subTitle ? "<h2>" + this.subTitle + "</h2>" : ""));
      this.delegateEvents();
      this.syncAllBoundElements();
      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      this.removeTemplate(this.el, true);
      return _get(Header.prototype.__proto__ || Object.getPrototypeOf(Header.prototype), "remove", this).call(this);
    }
  }, {
    key: "title",

    /**
     * @property {string} title A title property
     */
    set: function set(title) {
      this._title = title;
    },
    get: function get() {
      return this._title;
    }
  }, {
    key: "subTitle",

    /**
     * @property {string} subTitle A subTitle property
     */
    set: function set(subTitle) {
      this._subTitle = subTitle;
    },
    get: function get() {
      return this._subTitle;
    }
  }]);

  return Header;
}(_decorator2.default);

;

exports.default = Header;

/***/ }),

/***/ "./src/view/component/manager/manager.js":
/*!***********************************************!*\
  !*** ./src/view/component/manager/manager.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _mediator = __webpack_require__(/*! ../../pubsub/mediator.js */ "./src/view/pubsub/mediator.js");

var _mediator2 = _interopRequireDefault(_mediator);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * A Component Manager
 * @constructor Presentation.Component.Header
 * @memberof Presentation.Component
 * @extends Presentation.Mediator
 */
var Manager = function (_Mediator) {
  _inherits(Manager, _Mediator);

  function Manager(options) {
    _classCallCheck(this, Manager);

    return _possibleConstructorReturn(this, (Manager.__proto__ || Object.getPrototypeOf(Manager)).call(this, options));
  }

  _createClass(Manager, [{
    key: "manageComponent",
    value: function manageComponent(component) {
      return this.observeColleagueAndTrigger(component, component.name, component.name);
    }
  }, {
    key: "unmanageComponent",
    value: function unmanageComponent(component) {
      return this.dismissColleagueTrigger(component, component.name, component.name);
    }
  }]);

  return Manager;
}(_mediator2.default);

;

exports.default = Manager;

/***/ }),

/***/ "./src/view/component/menu/hamburgerMenu.js":
/*!**************************************************!*\
  !*** ./src/view/component/menu/hamburgerMenu.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _buildMenuItems = __webpack_require__(/*! ../functions/buildMenuItems.js */ "./src/view/component/functions/buildMenuItems.js");

var _buildMenuItems2 = _interopRequireDefault(_buildMenuItems);

var _dom = __webpack_require__(/*! ../../../dom/dom.js */ "./src/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

var _abstractToolbar = __webpack_require__(/*! ../toolbar/abstractToolbar.js */ "./src/view/component/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var buildMenu = function buildMenu(name, title, menuItems) {
  return "\n    <section class=\"material-design-hamburger\" data-" + name + "=\"hamburgerClickRegion\">\n      <div class=\"material-design-hamburger__icon\" data-" + name + "=\"hamburgerIcon\" data-click=\"toggle\">\n        <i class=\"material-icons md-light\">menu</i>\n      </div>\n    </section>\n    <section class=\"menu menu--off\" data-" + name + "=\"hamburgerMenu\">\n      <div>" + title + "</div>\n      " + (0, _buildMenuItems2.default)(name, menuItems) + "\n    </section>\n  ";
};

/**
 * A Hamburger Menu View
 * @memberof Presentation.Component
 * @extends Presentation.AbstractToolbar
 */

var HamburgerMenu = function (_AbstractToolbar) {
  _inherits(HamburgerMenu, _AbstractToolbar);

  function HamburgerMenu(options) {
    _classCallCheck(this, HamburgerMenu);

    return _possibleConstructorReturn(this, (HamburgerMenu.__proto__ || Object.getPrototypeOf(HamburgerMenu)).call(this, options));
  }

  _createClass(HamburgerMenu, [{
    key: "render",

    /**
     * Render the Hamburger Menu
     * @method render Renders the Hamburger
     * @returns {object} Returns the view context ('this')
     */
    value: function render() {
      if (this.isInitalized) {
        this.template = null; //"notused";
        if (this.el) {
          var e = _dom2.default.selector(this.el);
          if (e) {
            // the menu
            _dom2.default.addClass(e, "wrapper");
            e.setAttribute("data-" + this.name, "hamburger");
            e.innerHTML = buildMenu(this.name, this.title, this.menuItems);
          }
          this.delegateEvents();
          this.syncAllBoundElements();
        }
      }
      return this;
    }
  }, {
    key: "toggle",

    /**
     * Toggle the Hamburger menu view
     * @method toggle
     */
    value: function toggle() {
      if (!this.modal) {
        var menu = this.boundElement("hamburgerMenu");
        var r = this.boundElement("hamburgerClickRegion");
        r.classList.toggle("model");
        menu.classList.toggle("menu--on");
      }
    }
  }]);

  return HamburgerMenu;
}(_abstractToolbar2.default);

;

exports.default = HamburgerMenu;

/***/ }),

/***/ "./src/view/component/menu/menu.js":
/*!*****************************************!*\
  !*** ./src/view/component/menu/menu.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _abstractToolbar = __webpack_require__(/*! ../toolbar/abstractToolbar.js */ "./src/view/component/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _dom = __webpack_require__(/*! ../../../dom/dom.js */ "./src/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

var _buildMenuItems = __webpack_require__(/*! ../functions/buildMenuItems.js */ "./src/view/component/functions/buildMenuItems.js");

var _buildMenuItems2 = _interopRequireDefault(_buildMenuItems);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /*
  <nav id="more" class="menu tools">
      <i class="material-icons md-dark">more_vert</i>
      <ul>
          <li id="editable" data-viewer="editable" data-click="editableToggle"><i class="material-icons md-dark checkbox hidden"></i><i class="material-icons md-dark">mode_edit</i>Editable Toggle</li>
          <li id="sorting" data-viewer="sortable" data-click="sortableToggle"><i class="material-icons md-dark checkbox hidden"></i><i class="material-icons md-dark">sort</i>Sorting Toggle</li>
          <li id="lineNumber" data-viewer="lineNumber" data-click="lineNumbersToggle"><i class="material-icons md-dark checkbox hidden"></i><i class="material-icons md-dark">settings</i>Line Number Toggle</li>
      </ul>
  </nav>
  */

var buildMenu = function buildMenu(name, title, menuItems) {
  return "<i class=\"material-icons md-dark\">more_vert</i><ul>" + (0, _buildMenuItems2.default)(undefined.name, undefined.menuItems) + "</ul>";
};

/**
 * A Menu
 * @memberof Presentation.Component
 * @extends Presentation.AbstractToolbar
 */

var Menu = function (_AbstractToolbar) {
  _inherits(Menu, _AbstractToolbar);

  function Menu(options) {
    _classCallCheck(this, Menu);

    if (!options) {
      options = {};
    }
    if (!options.tagName) {
      options.tagName = "nav";
    }
    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, options));
  }

  _createClass(Menu, [{
    key: "render",

    /**
     * Renders the Menu
     * @returns {object} Returns the view context ('this')
     */
    value: function render() {
      if (!this.isInitalized) {
        return this;
      }
      this.template = null; //"notused";
      if (this.el) {
        var e = _dom2.default.selector(this.el);
        if (e) {
          // the menu
          _dom2.default.addClass(e, "menu");
          e.setAttribute("data-" + this.name, "menu");
          e.innerHTML = buildMenu(this.name, this.title, this.menuItems);
        }
      } else {
        //_logger.warn("AUGMENTED: Menu no element anchor, not rendering.");
        return this;
      }
      this.delegateEvents();
      this.syncAllBoundElements();
      return this;
    }
  }]);

  return Menu;
}(_abstractToolbar2.default);

;

exports.default = Menu;

/***/ }),

/***/ "./src/view/component/menu/navigation.js":
/*!***********************************************!*\
  !*** ./src/view/component/menu/navigation.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _abstractToolbar = __webpack_require__(/*! ../toolbar/abstractToolbar.js */ "./src/view/component/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _dom = __webpack_require__(/*! ../../../dom/dom.js */ "./src/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var buildMenuItems = function buildMenuItems(name, data) {
  var items = "<ul>";
  if (name && data && data.length !== 0) {
    var l = data.length;
    var i = 0;
    for (i = 0; i < l; i++) {
      if (data[i].spacer) {
        items = items + "<li class=\"spacer\"></li>";
      } else {
        items = items + "<li id=\"" + data[i].id + "\" data-" + name + "=\"" + data[i].id + "\" data-click=\"" + data[i].click + "\">" + (data[i].icon ? '<i class="material-icons md-dark">' + data[i].icon + '</i>' : '') + data[i].title + "</li>";
      }
    }
  }
  items = items + "</ul>";
  return items;
};

/**
 * A Navigation Menu
 * @memberof Presentation.Component
 * @extends Presentation.AbstractToolbar
 */

var NavigationMenu = function (_AbstractToolbar) {
  _inherits(NavigationMenu, _AbstractToolbar);

  function NavigationMenu(options) {
    _classCallCheck(this, NavigationMenu);

    if (!options) {
      options = {};
    }
    if (!options.tagName) {
      options.tagName = "nav";
    }
    if (!options.style) {
      options.style = "navigation";
    } else {
      options.style = option.style + " navigation";
    }

    return _possibleConstructorReturn(this, (NavigationMenu.__proto__ || Object.getPrototypeOf(NavigationMenu)).call(this, options));
  }

  _createClass(NavigationMenu, [{
    key: "render",

    /**
     * Renders the Menu
     * @returns {object} Returns the view context ('this')
     */
    value: function render() {
      if (this.isInitalized) {
        this.template = null; //"notused";
        if (this.el) {
          var e = _dom2.default.selector(this.el);
          if (e) {
            // the menu
            _dom2.default.addClass(e, "navigation");
            e.setAttribute("data-" + this.name, "navigation-menu");
            e.innerHTML = buildMenuItems(this.name, this.menuItems);
          }
          this.delegateEvents();
          this.syncAllBoundElements();
        }
      };
      return this;
    }
  }]);

  return NavigationMenu;
}(_abstractToolbar2.default);

;

exports.default = NavigationMenu;

/***/ }),

/***/ "./src/view/component/notification/notification.js":
/*!*********************************************************!*\
  !*** ./src/view/component/notification/notification.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _abstractToolbar = __webpack_require__(/*! ../toolbar/abstractToolbar.js */ "./src/view/component/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _dom = __webpack_require__(/*! ../../../dom/dom.js */ "./src/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

var _buildMenuItems = __webpack_require__(/*! ../functions/buildMenuItems.js */ "./src/view/component/functions/buildMenuItems.js");

var _buildMenuItems2 = _interopRequireDefault(_buildMenuItems);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * A Notfication Center Component
 * @memberof Presentation.Component
 * @extends Presentation.Component.AbstractToolbar
 */
var NotificationCenter = function (_AbstractToolbar) {
  _inherits(NotificationCenter, _AbstractToolbar);

  function NotificationCenter(options) {
    _classCallCheck(this, NotificationCenter);

    return _possibleConstructorReturn(this, (NotificationCenter.__proto__ || Object.getPrototypeOf(NotificationCenter)).call(this, options));
  }

  _createClass(NotificationCenter, [{
    key: "showNotification",

    /**
     * Show the NotificationCenter
     */
    value: function showNotification() {
      // show the widget
    }
  }, {
    key: "hideNotification",

    /**
     * Hide the NotificationCenter
     */
    value: function hideNotification() {
      // hide the widget
    }
  }, {
    key: "clearNotifications",

    /**
     * Clear the NotificationCenter
     */
    value: function clearNotifications() {
      this.clearMenuItems();
    }
  }, {
    key: "render",

    /**
     * Renders the Menu
     * @returns {object} Returns the view context ('this')
     */
    value: function render() {
      this.template = null; //"notused";
      if (this.el) {
        var e = _dom2.default.selector(this.el);
        if (e) {
          // the menu
          _dom2.default.addClass(e, "notify");
          e.setAttribute("data-" + this.name, "notify");
          e.innerHTML = "<ul>" + (0, _buildMenuItems2.default)(this.name, this.menuItems) + "</ul>";
        }
        this.delegateEvents();
        this.syncAllBoundElements();
      }
      return this;
    }
  }, {
    key: "notifications",

    /**
     * @property notifications {array} The notifications as notify object array
     */
    get: function get() {
      return this.menuItems;
    },
    set: function set(n) {
      this.menuItems = n;
    }
  }]);

  return NotificationCenter;
}(_abstractToolbar2.default);

;

exports.default = NotificationCenter;

/***/ }),

/***/ "./src/view/component/table/autoTable.js":
/*!***********************************************!*\
  !*** ./src/view/component/table/autoTable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var Augmented = _interopRequireWildcard(_augmentedjsNext);

var _decorator = __webpack_require__(/*! ../../decorator/decorator.js */ "./src/view/decorator/decorator.js");

var _decorator2 = _interopRequireDefault(_decorator);

var _buildTable = __webpack_require__(/*! ../functions/buildTable.js */ "./src/view/component/functions/buildTable.js");

var _messages = __webpack_require__(/*! ../functions/messages.js */ "./src/view/component/functions/messages.js");

var _messages2 = _interopRequireDefault(_messages);

var _request = __webpack_require__(/*! ../../../request/request.js */ "./src/request/request.js");

var _request2 = _interopRequireDefault(_request);

var _dom = __webpack_require__(/*! ../../../dom/dom.js */ "./src/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

var _model = __webpack_require__(/*! ../../../model/model.js */ "./src/model/model.js");

var _model2 = _interopRequireDefault(_model);

var _collection = __webpack_require__(/*! ../../../collection/collection.js */ "./src/collection/collection.js");

var _collection2 = _interopRequireDefault(_collection);

var _localStorageCollection = __webpack_require__(/*! ../../../collection/localStorageCollection.js */ "./src/collection/localStorageCollection.js");

var _localStorageCollection2 = _interopRequireDefault(_localStorageCollection);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var DEFAULT_KEY = "augmented.localstorage.autotable.key";
var DEFAULT_SORT_TYPE = "client";
var DEFAULT_THEME = "material";

/**
 * AutomaticTable<br/>
 * Creates a table automatically via a schema for defintion and a uri/json for data
 * @extends Presentation.DecoratorView
 * @memberof Presentation.Component
 * @example
 * const at = new Augmented.Presentation.Component.AutomaticTable({
 *     schema: schema,
 *     el: "#autoTable",
 *     crossOrigin: false,
 *     sortable: true,
 *     lineNumbers: true,
 *     editable: true,
 *     uri: "/example/data/table.json"
 * });
 */

var AutomaticTable = function (_DecoratorView) {
  _inherits(AutomaticTable, _DecoratorView);

  function AutomaticTable(options) {
    _classCallCheck(this, AutomaticTable);

    var _this = _possibleConstructorReturn(this, (AutomaticTable.__proto__ || Object.getPrototypeOf(AutomaticTable)).call(this, options));

    if (options && options.theme) {
      _this.theme = _this.style + " " + options.theme;
    } else {
      _this.theme = _this.style + " " + DEFAULT_THEME;
    }

    if (options && options.linkable) {
      _this.linkable = options.linkable;
    } else {
      _this.linkable = false;
    }

    if (options && options.links) {
      _this.links = options.links;
    } else {
      _this.links = {
        wholeRow: true,
        column: "",
        link: "rowLink"
      };
    }

    if (options && options.selectable) {
      _this.selectable = options.selectable;
    } else {
      _this.selectable = false;
    }

    if (options && options.sortable) {
      _this.sortable = options.sortable;
    } else {
      _this.sortable = false;
    }

    if (options && options.sortStyle) {
      _this.sortStyle = options.sortStyle;
    } else {
      _this.sortStyle = DEFAULT_SORT_TYPE;
    }

    if (options && options.sortKey) {
      _this.sortKey = options.sortKey;
    } else {
      _this.sortKey = null;
    }

    if (options && options.display) {
      _this.display = options.display;
    } else {
      _this.display = null;
    }

    if (options && options.pagination) {
      _this.renderPaginationControl = options.pagination;
    } else {
      _this.renderPaginationControl = false;
    }

    if (options && options.paginationAPI) {
      _this.paginationAPI = options.paginationAPI;
    } else {
      _this.paginationAPI = null;
    }

    if (options && options.description) {
      _this.description = options.description;
    } else {
      _this.description = "";
    }

    if (options && options.localStorage) {
      _this.localStorage = options.localStorage;
    } else {
      _this.localStorage = false;
    }

    if (options && options.localStorageKey) {
      _this.localStorageKey = options.localStorageKey;
    } else {
      _this.localStorageKey = DEFAULT_KEY;
    }

    if (options && options.editable) {
      _this.editable = options.editable;
    } else {
      _this.editable = false;
    }

    if (options && options.crossOrigin) {
      _this.crossOrigin = options.crossOrigin;
    } else {
      _this.crossOrigin = false;
    }

    if (options && options.lineNumbers) {
      _this.lineNumbers = options.lineNumbers;
    } else {
      _this.lineNumbers = false;
    }

    if (options && options.uri) {
      _this.uri = options.uri;
    } else {
      _this.uri = false;
    }

    if (options && options.data) {
      _this.data = options.data;
    } else {
      _this.data = [];
    }

    _this._columns = {};
    _this.isInitalized = false;
    _this.pageControlBound = false;

    if (!_this.model) {
      _this.model = new _model2.default();
    }

    if (_this.collection) {
      _this.collection.reset();
    }

    if (!_this.collection && _this.paginationAPI) {
      _this.collection = Augmented.PaginationFactory.getPaginatedCollection(_this.paginationAPI);
      _this.paginationAPI = _this.collection.paginationAPI;
      _this.localStorage = false;
    } else if (!_this.collection && _this.localStorage) {
      _this.collection = new _localStorageCollection2.default();
    } else if (!_this.collection) {
      _this.collection = new _collection2.default();
    }

    if (options && options.schema) {
      // check if this is a schema vs a URI to get a schema
      if (Augmented.isObject(options.schema)) {
        _this.schema = options.schema;
      } else {
        // is a URI?
        var parsedSchema = null;
        try {
          parsedSchema = JSON.parse(options.schema);
          if (parsedSchema && Augmented.isObject(parsedSchema)) {
            _this.schema = parsedSchema;
          }
        } catch (e) {
          //_logger.warn("AUGMENTED: AutoTable parsing string schema failed.  URI perhaps?");
        }
        if (!_this.schema) {
          _this.retrieveSchema(options.schema);
          _this.isInitalized = false;
        }
      }
    } else {
      _this.schema = null;
    }

    if (_this.uri && _this.collection) {
      _this.collection.url = options.uri;
    }

    if (_this.data && Array.isArray(_this.data)) {
      _this.populate(_this.data);
    }

    if (options && options.localStorageKey && !options.uri) {
      _this.localStorageKey = options.localStorageKey;
      _this.uri = null;
    }

    if (_this.collection && _this.uri) {
      _this.collection.url = _this.uri;
    }
    if (_this.collection) {
      _this.collection.crossOrigin = _this.crossOrigin;
    }

    if (_this.schema) {
      if ((!_this.name || _this.name === "") && _this.schema.title) {
        _this.name = _this.schema.title;
        _this.name.split(" ").join("");
      }

      if ((!_this.description || _this.description === "") && _this.schema.description) {
        _this.description = _this.schema.description;
      }

      if (!_this.isInitalized) {
        _this._columns = _this.schema.properties;
        _this.collection.schema = _this.schema;
        _this.isInitalized = true;
      }
    } else {
      _this.isInitalized = false;
    }
    return _this;
  }

  _createClass(AutomaticTable, [{
    key: "setTheme",

    /**
     * The theme property - The theme of this table (default is 'material')
     * @property {string} theme The theme of this table
     */

    /**
     * The linkable property - enable links in a row (only works in non-editable tables)
     * @property {boolean} linkable enable/disable linking a row
     */

    /**
     * The selectable property - enable selecting a row in table
     * @property {boolean} selectable enable/disable selecting a row
     */

    /**
     * The sortable property - enable sorting in table
     * @property {boolean} sortable enable sorting in the table
     */

    /**
     * The sortStyle property - setup the sort API
     * @property {string} sortStyle setup the sort API
     */

    /**
     * The sortKey property
     * @property {string} sortKey sorted key
     * @private
     */

    /**
     * The links property - setup linking structure for links in a row
     * @property {boolean} linkable enable/disable linking a row
     * @example links: {
     * wholeRow: false, // link whole row vs column
     * column: "name", // name of column
     *	link: "rowLink" // callback
     * }
     */

    /**
     * The localStorage property - enables localStorage
     * @property {boolean} localStorage The localStorage property
     */

    /**
     * The localStorageKey property - set the key for use in storage
     * @property {string} localStorageKey The localStorage key property
     */

    /**
     * The editable property - enables editing of cells
     * @property {boolean} editable The editable property
     */

    /**
     * Fields to display - null will display all
     * @property {array} display Fields to display
     */

    // pagination
    /**
     * The renderPaginationControl property - render the pagination control
     * @property {boolean} renderPaginationControl render the pagination control
     */

    /**
     * The paginationAPI property - setup the paginatin API to use
     * @property {Augmented.PaginationFactory.type} paginationAPI the pagination API to use
     */

    /**
     * The name property
     * @property {string} name The name of the table
     */

    /**
     * The description property
     * @property {string} description The description of the table
     */

    /**
     * The crossOrigin property - enables cross origin fetch
     * @property {boolean} crossOrigin The crossOrigin property
     */

    /**
     * The lineNumber property - turns on line numbers
     * @property {boolean} lineNumbers The lineNumbers property
     */

    /**
     * The columns property
     * @property {object} columns The columns property
     * @private
     */

    /**
     * The URI property
     * @property {string} uri The URI property
     */

    /**
     * The data property
     * @property {array} data The data property
     * @private
     */

    /**
     * The collection property
     * @property {Augmented.PaginatedCollection} collection The collection property
     * @private
     */

    /**
     * The initialized property
     * @property {boolean} isInitalized The initialized property
     */

    /**
     * The theme of the table
     * @param {string} theme name of the theme
     */
    value: function setTheme(theme) {
      var el = _dom2.default.selector(this.el); //((typeof this.el === 'string') ? document.querySelector(this.el) : this.el),
      if (el) {
        var e = el.querySelector("table");
        if (e) {
          e.setAttribute("class", theme);
        }
      }
      this.theme = theme;
    }
  }, {
    key: "rowLink",

    /**
     * The default rowlink function callback called by row to format a link
     * @param {array} row The row data
     * @returns {string} Returns the link uri
     */
    value: function rowLink(row) {
      return "";
    }
  }, {
    key: "sortBy",

    /**
     * Sort the tabe by a key (sent via a UI Event)
     * @param {string} key The key to sort by
     */
    value: function sortBy(key) {
      if (key && (this.editable || !this.editable && this.sortKey !== key)) {
        this.sortKey = key;
        this.collection.sortByKey(key);
        this.refresh();
      }
    }
  }, {
    key: "currentPage",

    /**
     * Return the current page number
     * @returns {number} The current page number
     */
    value: function currentPage() {
      return this.collection.currentPage;
    }
  }, {
    key: "totalPages",

    /**
     * Return the total pages
     * @returns {number} The total pages
     */
    value: function totalPages() {
      return this.collection.totalPages;
    }
  }, {
    key: "nextPage",

    /**
     * Advance to the next page
     */
    value: function nextPage() {
      this.collection.nextPage();
      this.refresh();
    }
  }, {
    key: "previousPage",

    /**
     * Return to the previous page
     */
    value: function previousPage() {
      this.collection.previousPage();
      this.refresh();
    }
  }, {
    key: "goToPage",

    /**
     * Go to a specific page
     * @param {number} page The page to go to
     */
    value: function goToPage(page) {
      this.collection.goToPage(page);
      this.refresh();
    }
  }, {
    key: "firstPage",

    /**
     * Return to the first page
     */
    value: function firstPage() {
      this.collection.firstPage();
      this.refresh();
    }
  }, {
    key: "lastPage",

    /**
     * Advance to the last page
     */
    value: function lastPage() {
      this.collection.lastPage();
      this.refresh();
    }
  }, {
    key: "editCell",

    /**
     * Edit a cell at the row and column specified
     * @param {number} row The row
     * @param {number} col The column
     * @param {any} value The value to set
     */
    value: function editCell(row, col, value) {
      if (row && col) {
        var model = this.collection.at(row),
            name = this.columns[col];
        if (model && name) {
          model.set(name, value);
        }
      }
    }
  }, {
    key: "copyCell",

    /**
     * Copy a cell at the row and column  to another
     * @param {number} row1 The 'from' row
     * @param {number} col1 The 'from' column
     * @param {number} row2 The 'to' row
     * @param {number} col2 The 'to' column
     */
    value: function copyCell(row1, col1, row2, col2) {
      if (row1 && col1 && row2 && col2) {
        var model1 = this.collection.at(row1),
            name1 = this.columns[col1],
            model2 = this.collection.at(row);
        if (model1 && name1 && model2) {
          model2.set(name1, value1);
        }
      }
    }
  }, {
    key: "clearCell",

    /**
     * Clear a cell at the row and column specified
     * @param {number} row The row
     * @param {number} col The column
     */
    value: function clearCell(row, col) {
      this.editCell(row, col, null);
    }
  }, {
    key: "render",

    /**
     * Render the table
     * @returns {object} Returns the view context ('this')
     */
    value: function render() {
      console.log("render");
      if (!this.isInitalized) {
        console.warn("AUGMENTED: AutoTable Can't render yet, not initialized!");
        return this;
      }
      var e = void 0;
      if (this.template) {
        // refresh the table body only
        console.log("set progress.");
        this.showProgressBar(true);
        if (this.el) {
          e = typeof this.el === 'string' ? document.querySelector(this.el) : this.el;
          console.log("my el", e);
          if (e) {
            var tbody = e.querySelector("tbody"),
                thead = e.querySelector("thead");
            if (this.sortable) {
              this._unbindSortableColumnEvents();
            }
            if (this.editable) {
              this._unbindCellChangeEvents();
            }
            if (this._columns && Object.keys(this._columns).length > 0) {
              while (thead.hasChildNodes()) {
                thead.removeChild(thead.lastChild);
              }
              (0, _buildTable.directDOMTableHeader)(thead, this._columns, this.lineNumbers, this.sortKey, this.display, this.selectable);
            } else {
              if (thead) {
                while (thead.hasChildNodes()) {
                  thead.removeChild(thead.lastChild);
                }
              }
            }
            if (this.collection && this.collection.length > 0 && tbody) {
              while (tbody.hasChildNodes()) {
                tbody.removeChild(tbody.lastChild);
              }
              if (this.editable) {
                // links not supported
                (0, _buildTable.directDOMEditableTableBody)(tbody, this.collection.toJSON(), this._columns, this.lineNumbers, this.sortKey, this.display, this.selectable, this.name);
              } else {
                (0, _buildTable.directDOMTableBody)(tbody, this.collection.toJSON(), this._columns, this.lineNumbers, this.sortKey, this.display, this.selectable, this.name, this.linkable, this.links, this[this.links.link]);
              }
            } else {
              while (tbody.hasChildNodes()) {
                tbody.removeChild(tbody.lastChild);
              }
            }
          }
        } else {
          console.warn("AUGMENTED: AutoTable no element anchor, not rendering.");
        }
      } else {
        console.debug("no template");
        this.template = "notused";
        this.showProgressBar(true);

        if (this.el) {
          console.debug("no template with el " + this.el);
          e = typeof this.el === 'string' ? document.querySelector(this.el) : this.el;
          if (e) {
            // progress bar
            var n = document.createElement("progress"),
                t = document.createTextNode("Please wait.");
            n.appendChild(t);
            e.appendChild(n);

            // the table
            (0, _buildTable.directDOMTableCompile)(e, this.name, this.description, this._columns, this.collection.toJSON(), this.lineNumbers, this.sortKey, this.editable, this.display, this.selectable, this.linkable, this.links, this[this.links.link]);

            // pagination control
            if (this.renderPaginationControl) {
              (0, _buildTable.directDOMPaginationControl)(e, this.currentPage(), this.totalPages());
            }

            // message
            n = document.createElement("p");
            n.classList.add("message");
            e.appendChild(n);
          }
        } else {
          console.warn("AUGMENTED: AutoTable no element anchor, not rendering.");
        }

        if (this.renderPaginationControl) {
          this._bindPaginationControlEvents();
        }
      }
      this.delegateEvents();

      if (this.sortable) {
        this._bindSortableColumnEvents();
      }

      if (this.editable) {
        this._bindCellChangeEvents();
      }

      this.showProgressBar(false);
      this.setTheme(this.theme);

      return this;
    }
  }, {
    key: "retrieveSchema",

    /**
     * Fetch the schema from the source URI
     * @param uri {string} the URI to fetch from
     */
    value: function retrieveSchema(uri) {
      var _this2 = this;

      var that = this;
      var schema = null;
      (0, _request2.default)({
        url: uri,
        contentType: "application/json",
        dataType: "json",
        success: function success(data, status) {
          if (typeof data === "string") {
            schema = JSON.parse(data);
          } else {
            schema = data;
          }
          var options = { "schema": schema };
          that.initialize(options);
        },
        error: function error(data, status) {
          _this2.showMessage("AutomaticTable Failed to fetch schema!!");
        }
      });
    }
  }, {
    key: "fetch",

    /**
     * Fetch the data from the source URI
     */
    value: function fetch() {
      // TODO: should be a promise
      this.showProgressBar(true);

      var view = this;

      var successHandler = function successHandler() {
        view.showProgressBar(false);
        view.sortKey = null;
        view.populate(view.collection.toJSON());
        view.refresh();
      };

      var failHandler = function failHandler() {
        view.showProgressBar(false);
        view.showMessage("AutomaticTable fetch failed!");
      };

      this.collection.fetch({
        reset: true,
        success: function success() {
          successHandler();
        },
        error: function error() {
          failHandler();
        }
      });
    }
  }, {
    key: "save",

    /**
     * Save the data to the source
     * This only functions if the table is editable
     * @param {boolean} override Save even if not editable
     * @returns Returns true if succesfull
     */
    value: function save(override) {
      if (this.editable || override) {
        this.showProgressBar(true);

        var view = this;

        var successHandler = function successHandler() {
          view.showProgressBar(false);
          return true;
        };

        var failHandler = function failHandler() {
          view.showProgressBar(false);
          view.showMessage("AutomaticTable save failed!");
          //_logger.warn("AUGMENTED: AutomaticTable save failed!");
          return false;
        };

        this.collection.save({
          reset: true,
          success: function success() {
            successHandler();
          },
          error: function error() {
            failHandler();
          }
        });
      }
      return false;
    }
  }, {
    key: "populate",

    /**
     * Populate the data in the table
     * @param {array} source The source data array
     */
    value: function populate(source) {
      if (source && Array.isArray(source)) {
        this.sortKey = null;
        this.data = source;
        this.collection.reset(this.data);
      }
    }
  }, {
    key: "clear",

    /**
     * Clear all the data in the table
     */
    value: function clear() {
      this.sortKey = null;
      this.data = [];
      this.collection.reset(null);
    }
  }, {
    key: "refresh",

    /**
     * Refresh the table (Same as render)
     * @returns {object} Returns the view context ('this')
     * @see AutomaticTable.render
     */
    value: function refresh() {
      return this.render();
    }
  }, {
    key: "saveCell",

    /**
     * Save Cell Event
     * @private
     */
    value: function saveCell(event) {
      var key = event.target,
          model = this.collection.at(parseInt(key.getAttribute(_buildTable.TABLE_DATA_ATTRIBUTES.INDEX)));
      var value = key.value;
      if (key.getAttribute("type") === "number") {
        value = parseInt(key.value);
      }
      model.set(key.getAttribute(_buildTable.TABLE_DATA_ATTRIBUTES.NAME), value);
    }
  }, {
    key: "_bindCellChangeEvents",

    /**
     * @private
     */
    value: function _bindCellChangeEvents() {
      var myEl = typeof this.el === 'string' ? this.el : this.el.localName;
      var cells = [].slice.call(document.querySelectorAll(myEl + " table tr td input"));
      var i = 0,
          l = cells.length;
      for (i = 0; i < l; i++) {
        cells[i].addEventListener("change", this.saveCell.bind(this), false);
      }
      // bind the select boxes as well
      cells = [].slice.call(document.querySelectorAll(myEl + " table tr td select"));
      i = 0;
      l = cells.length;
      for (i = 0; i < l; i++) {
        cells[i].addEventListener("change", this.saveCell.bind(this), false);
      }
    }
  }, {
    key: "_unbindCellChangeEvents",

    /**
     * @private
     */
    value: function _unbindCellChangeEvents() {
      var myEl = typeof this.el === 'string' ? this.el : this.el.localName;
      var cells = [].slice.call(document.querySelectorAll(myEl + " table tr td input"));
      var i = 0,
          l = cells.length;
      for (i = 0; i < l; i++) {
        cells[i].removeEventListener("change", this.saveCell, false);
      }
      // unbind the select boxes as well
      cells = [].slice.call(document.querySelectorAll(myEl + " table tr td select"));
      i = 0;
      l = cells.length;
      for (i = 0; i < l; i++) {
        cells[i].removeEventListener("change", this.saveCell, false);
      }
    }
  }, {
    key: "exportTo",

    /**
     * Export the table data in requested format
     * @param {string} type The type requested (csv or html-default)
     * @returns {string} The table data in requested format
     */
    value: function exportTo(type) {
      var e = "";
      if (type === "csv") {
        e = (0, _buildTable.csvTableCompile)(this.name, this.description, this._columns, this.collection.toJSON());
      } else if (type === "tsv") {
        e = (0, _buildTable.tsvTableCompile)(this.name, this.description, this._columns, this.collection.toJSON());
      } else {
        // html
        e = (0, _buildTable.defaultTableCompile)(this.name, this.description, this._columns, this.collection.toJSON(), false, null);
      }
      return e;
    }
  }, {
    key: "_unbindPaginationControlEvents",

    /**
     * @private
     */
    value: function _unbindPaginationControlEvents() {
      if (this.pageControlBound) {
        var myEl = typeof this.el === 'string' ? this.el : this.el.localName;
        var first = document.querySelector(myEl + " div.paginationControl span.first");
        var previous = document.querySelector(myEl + " div.paginationControl span.previous");
        var next = document.querySelector(myEl + " div.paginationControl span.next");
        var last = document.querySelector(myEl + " div.paginationControl span.last");
        if (first) {
          first.removeEventListener("click", this.firstPage, false);
        }
        if (previous) {
          previous.removeEventListener("click", this.previousPage, false);
        }
        if (next) {
          next.removeEventListener("click", this.nextPage, false);
        }
        if (last) {
          last.removeEventListener("click", this.lastPage, false);
        }
        this.pageControlBound = false;
      }
    }
  }, {
    key: "_bindPaginationControlEvents",

    /**
     * @private
     */
    value: function _bindPaginationControlEvents() {
      if (!this.pageControlBound) {
        var myEl = typeof this.el === 'string' ? this.el : this.el.localName;
        var first = document.querySelector(myEl + " div.paginationControl span.first");
        var previous = document.querySelector(myEl + " div.paginationControl span.previous");
        var next = document.querySelector(myEl + " div.paginationControl span.next");
        var last = document.querySelector(myEl + " div.paginationControl span.last");
        if (first) {
          first.addEventListener("click", this.firstPage.bind(this), false);
        }
        if (previous) {
          previous.addEventListener("click", this.previousPage.bind(this), false);
        }
        if (next) {
          next.addEventListener("click", this.nextPage.bind(this), false);
        }
        if (last) {
          last.addEventListener("click", this.lastPage.bind(this), false);
        }
        this.pageControlBound = true;
      }
    }
  }, {
    key: "_deriveEventTarget",

    /**
     * @private
     */
    value: function _deriveEventTarget(event) {
      var key = null;
      if (event) {
        key = event.target.getAttribute(_buildTable.TABLE_DATA_ATTRIBUTES.NAME);
      }
      return key;
    }
  }, {
    key: "_sortByHeaderEvent",

    /**
     * @private
     */
    value: function _sortByHeaderEvent(event) {
      var key = this._deriveEventTarget(event);
      this.sortBy(key);
    }
  }, {
    key: "_unbindSortableColumnEvents",

    /**
     * @private
     */
    value: function _unbindSortableColumnEvents() {
      if (this.el && this.sortable) {
        var list = void 0;
        if (typeof this.el === 'string') {
          list = document.querySelectorAll(this.el + " table tr th");
        } else {
          list = document.querySelectorAll(this.el.localName + " table tr th");
        }
        var i = 0,
            l = list.length;
        for (i = 0; i < l; i++) {
          list[i].removeEventListener("click", this._sortByHeaderEvent, false);
        }
      }
    }
  }, {
    key: "_bindSortableColumnEvents",

    /**
     * @private
     */
    value: function _bindSortableColumnEvents() {
      if (this.el && this.sortable) {
        var list = void 0;
        if (typeof this.el === 'string') {
          list = document.querySelectorAll(this.el + " table tr th");
        } else {
          list = document.querySelectorAll(this.el.localName + " table tr th");
        }
        var i = 0,
            l = list.length;
        for (i = 0; i < l; i++) {
          if (list[i].getAttribute(_buildTable.TABLE_DATA_ATTRIBUTES.NAME) === "lineNumber") {
            // Do I need to do something?
          } else {
            list[i].addEventListener("click", this._sortByHeaderEvent.bind(this), false);
          }
        }
      }
    }
  }, {
    key: "compileTemplate",

    /**
     * An overridable template compile
     * @returns {string} Returns the template
     */
    value: function compileTemplate() {
      return "";
    }
  }, {
    key: "setURI",

    /**
     * Sets the URI
     * @param {string} uri The URI
     */
    value: function setURI(uri) {
      this.uri = uri;
    }
  }, {
    key: "setSchema",

    /**
     * Sets the schema
     * @param {object} schema The JSON schema of the dataset
     */
    value: function setSchema(schema) {
      this.schema = schema;
      this._columns = schema.properties;
      this.collection.reset();
      this.collection.schema = schema;

      if (this.uri) {
        this.collection.url = this.uri;
      }
    }
  }, {
    key: "showProgressBar",

    /**
     * Enable/Disable the progress bar
     * @param {boolean} show Show or Hide the progress bar
     */
    value: function showProgressBar(show) {
      if (this.el) {
        var e = typeof this.el === 'string' ? document.querySelector(this.el) : this.el;
        if (e) {
          var p = e.querySelector("progress");
          if (p) {
            p.style.display = show ? "block" : "none";
            p.style.visibility = show ? "visible" : "hidden";
          }
        }
      }
    }
  }, {
    key: "showMessage",

    /**
     * Show a message related to the table
     * @param {string} message Some message to display
     */
    value: function showMessage(message) {
      if (this.el) {
        var e = typeof this.el === 'string' ? document.querySelector(this.el) : this.el;
        var p = e.querySelector("p[class=message]");
        if (p) {
          p.innerHTML = message;
        }
      }
    }
  }, {
    key: "validate",

    /**
      * Validate the table
     * @returns {boolean} Returns true on success of validation
     */
    value: function validate() {
      var messages = this.collection ? this.collection.validate() : null;
      if (!this.collection.isValid() && messages && messages.messages) {
        this.showMessage((0, _messages2.default)(messages.messages));
      } else {
        this.showMessage("");
      }
      return messages;
    }
  }, {
    key: "isValid",

    /**
     * Is the table valid
     * @returns {boolean} Returns true if valid
     */
    value: function isValid() {
      return this.collection ? this.collection.isValid() : true;
    }
  }, {
    key: "remove",

    /**
     * Remove the table and all binds
     * @returns Returns the context (this)
     */
    value: function remove() {
      /* off to unbind the events */
      this.undelegateEvents();
      this.off();
      this.stopListening();

      _dom2.default.empty(this.el);

      return this;
    }
  }, {
    key: "getSelected",

    /**
     * Gets the selected models
     * @returns {Array} Returns array of selected rows (models)
     */
    value: function getSelected() {
      var keys = Object.keys(this.model.attributes),
          l = keys.length,
          selected = [];
      var i = 0;
      for (i = 0; i < l; i++) {
        if (keys[i].includes("row-") && this.model.attributes[keys[i]] === true) {
          var n = Number(keys[i].substring(4));
          selected.push(this.collection.at(n));
        }
      }
      return selected;
    }
  }, {
    key: "getSelectedIndex",

    /**
     * Gets the selected row indexes
     * @returns {Array} Returns array of selected rows (indexes)
     */
    value: function getSelectedIndex() {
      var keys = Object.keys(this.model.attributes),
          l = keys.length,
          selected = [];
      var i = 0;
      for (i = 0; i < l; i++) {
        if (keys[i].includes("row-") && this.model.attributes[keys[i]] === true) {
          selected.push(Number(keys[i].substring(4)));
        }
      }
      return selected;
    }
  }, {
    key: "removeRows",

    /**
     * Removes the models
     * @param {Array} rows Models of the rows to remove
     */
    value: function removeRows(rows) {
      var l = rows.length;
      var i = 0;
      for (i = 0; i < l; i++) {
        var model = rows[i];
        if (!model.url) {
          model.url = this.uri + "/" + model.id;
        }
        model.destroy();
      }
    }
  }]);

  return AutomaticTable;
}(_decorator2.default);

;

exports.default = AutomaticTable;

/***/ }),

/***/ "./src/view/component/table/bigDataTable.js":
/*!**************************************************!*\
  !*** ./src/view/component/table/bigDataTable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoTable = __webpack_require__(/*! ./autoTable.js */ "./src/view/component/table/autoTable.js");

var _autoTable2 = _interopRequireDefault(_autoTable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Instance class preconfigured for sorting and pagination
 * @class BigDataTable
 * @extends Presentation.Component.AutomaticTable
 * @memberof Presentation.Component
 */
var BigDataTable = function (_AutomaticTable) {
  _inherits(BigDataTable, _AutomaticTable);

  function BigDataTable(options) {
    _classCallCheck(this, BigDataTable);

    if (!options) {
      options = {};
    }
    options.lineNumbers = true;
    options.sortable = true;

    var _this = _possibleConstructorReturn(this, (BigDataTable.__proto__ || Object.getPrototypeOf(BigDataTable)).call(this, options));

    _this.renderPaginationControl = true;
    return _this;
  }

  return BigDataTable;
}(_autoTable2.default);

;

exports.default = BigDataTable;

/***/ }),

/***/ "./src/view/component/table/editableBigTable.js":
/*!******************************************************!*\
  !*** ./src/view/component/table/editableBigTable.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoTable = __webpack_require__(/*! ./autoTable.js */ "./src/view/component/table/autoTable.js");

var _autoTable2 = _interopRequireDefault(_autoTable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Instance class preconfigured for sorting and pagination
 * @class EditableBigDataTable
 * @extends Presentation.Component.AutomaticTable
 * @memberof Presentation.Component
 */
var EditableBigDataTable = function (_AutomaticTable) {
  _inherits(EditableBigDataTable, _AutomaticTable);

  function EditableBigDataTable(options) {
    _classCallCheck(this, EditableBigDataTable);

    if (!options) {
      options = {};
    }
    options.lineNumbers = true;
    options.sortable = true;
    options.editable = true;

    var _this = _possibleConstructorReturn(this, (EditableBigDataTable.__proto__ || Object.getPrototypeOf(EditableBigDataTable)).call(this, options));

    _this.renderPaginationControl = true;
    return _this;
  }

  return EditableBigDataTable;
}(_autoTable2.default);

;

exports.default = EditableBigDataTable;

/***/ }),

/***/ "./src/view/component/table/editableLocalStorageTable.js":
/*!***************************************************************!*\
  !*** ./src/view/component/table/editableLocalStorageTable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoTable = __webpack_require__(/*! ./autoTable.js */ "./src/view/component/table/autoTable.js");

var _autoTable2 = _interopRequireDefault(_autoTable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
* Instance class preconfigured for editing, sorting, from local storage
* @class EditableLocalStorageTable
* @extends Presentation.Component.AutomaticTable
* @memberof Presentation.Component
*/
var EditableLocalStorageTable = function (_AutomaticTable) {
  _inherits(EditableLocalStorageTable, _AutomaticTable);

  function EditableLocalStorageTable(options) {
    _classCallCheck(this, EditableLocalStorageTable);

    if (!options) {
      options = {};
    }
    options.lineNumbers = true;
    options.sortable = true;
    options.editable = true;
    options.localStorage = true;

    var _this = _possibleConstructorReturn(this, (EditableLocalStorageTable.__proto__ || Object.getPrototypeOf(EditableLocalStorageTable)).call(this, options));

    _this.renderPaginationControl = true;
    return _this;
  }

  return EditableLocalStorageTable;
}(_autoTable2.default);

;

exports.default = EditableLocalStorageTable;

/***/ }),

/***/ "./src/view/component/table/editableTable.js":
/*!***************************************************!*\
  !*** ./src/view/component/table/editableTable.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoTable = __webpack_require__(/*! ./autoTable.js */ "./src/view/component/table/autoTable.js");

var _autoTable2 = _interopRequireDefault(_autoTable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Instance class preconfigured for editing
 * @class EditableTable
 * @extends Presentation.Component.AutomaticTable
 * @memberof Presentation.Component
 */
var EditableTable = function (_AutomaticTable) {
  _inherits(EditableTable, _AutomaticTable);

  function EditableTable(options) {
    _classCallCheck(this, EditableTable);

    if (!options) {
      options = {};
    }
    options.lineNumbers = true;
    options.editable = true;
    return _possibleConstructorReturn(this, (EditableTable.__proto__ || Object.getPrototypeOf(EditableTable)).call(this, options));
  }

  return EditableTable;
}(_autoTable2.default);

;

exports.default = EditableTable;

/***/ }),

/***/ "./src/view/component/table/localStorageTable.js":
/*!*******************************************************!*\
  !*** ./src/view/component/table/localStorageTable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoTable = __webpack_require__(/*! ./autoTable.js */ "./src/view/component/table/autoTable.js");

var _autoTable2 = _interopRequireDefault(_autoTable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
* Instance class preconfigured for local storage-based table
* @class Augmented.Presentation.LocalStorageTable
* @extends Presentation.Component.AutomaticTable
* @memberof Presentation.Component
*/
var LocalStorageTable = function (_AutomaticTable) {
  _inherits(LocalStorageTable, _AutomaticTable);

  function LocalStorageTable(options) {
    _classCallCheck(this, LocalStorageTable);

    if (!options) {
      options = {};
    }
    options.lineNumbers = true;
    options.sortable = true;
    options.editable = false;
    options.localStorage = true;

    var _this = _possibleConstructorReturn(this, (LocalStorageTable.__proto__ || Object.getPrototypeOf(LocalStorageTable)).call(this, options));

    _this.renderPaginationControl = true;
    return _this;
  }

  return LocalStorageTable;
}(_autoTable2.default);

;

exports.default = LocalStorageTable;

/***/ }),

/***/ "./src/view/component/table/spreadsheet.js":
/*!*************************************************!*\
  !*** ./src/view/component/table/spreadsheet.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var Augmented = _interopRequireWildcard(_augmentedjsNext);

var _autoTable = __webpack_require__(/*! ./autoTable.js */ "./src/view/component/table/autoTable.js");

var _autoTable2 = _interopRequireDefault(_autoTable);

var _collection = __webpack_require__(/*! ../../../collection/collection.js */ "./src/collection/collection.js");

var _collection2 = _interopRequireDefault(_collection);

var _localStorageCollection = __webpack_require__(/*! ../../../collection/localStorageCollection.js */ "./src/collection/localStorageCollection.js");

var _localStorageCollection2 = _interopRequireDefault(_localStorageCollection);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Instance class preconfigured for editing for use as a Spreadsheet.<br/>
 * If a propery for length is not specified, it will buffer 10 lines for editing.
 * @class Spreadsheet
 * @extends Presentation.Component.AutomaticTable
 * @memberof Presentation.Component
 */
var Spreadsheet = function (_AutomaticTable) {
  _inherits(Spreadsheet, _AutomaticTable);

  function Spreadsheet(options) {
    _classCallCheck(this, Spreadsheet);

    // TODO: overrides?
    var _this = _possibleConstructorReturn(this, (Spreadsheet.__proto__ || Object.getPrototypeOf(Spreadsheet)).call(this, options));

    _this.lineNumbers = true;
    _this.sortable = true;
    _this.editable = true;

    if (options && options.pagination) {
      _this.renderPaginationControl = options.pagination;
    } else {
      _this.renderPaginationControl = false;
    }

    if (options && options.rows) {
      _this.rows = options.rows;
    } else {
      _this.rows = 10;
    }

    if (options && options.columns) {
      _this.columns = options.columns;
    } else {
      _this.rows = 5;
    }

    if (_this.collection) {
      _this.collection.reset();
    } else if (!_this.collection && _this.localStorage) {
      _this.collection = new _localStorageCollection2.default();
    } else if (!_this.collection) {
      _this.collection = new _collection2.default();
    }

    // TODO: this might belong in parent

    if (options) {
      if (options.schema) {
        // check if this is a schema vs a URI to get a schema
        if (Augmented.isObject(options.schema)) {
          _this.schema = options.schema;
        } else {
          // is a URI?
          var parsedSchema = null;
          try {
            parsedSchema = JSON.parse(options.schema);
            if (parsedSchema && Augmented.isObject(parsedSchema)) {
              _this.schema = parsedSchema;
            }
          } catch (e) {
            // AutoTable parsing string schema failed.  URI perhaps?
            //_logger.warn("AUGMENTED: AutoTable parsing string schema failed.  URI perhaps?");
          }
          if (!_this.schema) {
            _this.retrieveSchema(options.schema);
            _this.isInitalized = false;
            //return false;
          }
        }
      }

      if (options.el) {
        _this.el = options.el;
      }

      if (options.uri) {
        _this.uri = options.uri;
        _this.collection.url = options.uri;
      }

      if (options.data && Array.isArray(options.data)) {
        _this.populate(options.data);
      }

      if (options.sortable) {
        _this.sortable = options.sortable;
      }

      if (options.lineNumbers) {
        _this.lineNumbers = options.lineNumbers;
      }

      if (options.localStorageKey && !options.uri) {
        _this.localStorageKey = options.localStorageKey;
        _this.uri = null;
      }
    }

    if (_this.collection && _this.uri) {
      _this.collection.url = _this.uri;
    }
    if (_this.collection) {
      _this.collection.crossOrigin = _this.crossOrigin;
    }
    if (_this.schema) {
      if ((!_this.name || _this.name === "") && _this.schema.title) {
        _this.name = _this.schema.title;
      }
      if ((!_this.description || _this.description === "") && _this.schema.description) {
        _this.description = _this.schema.description;
      }

      if (!_this.isInitalized) {
        _this._columns = _this.schema.properties;
        _this.collection.schema = _this.schema;
      }
    } else {
      //very basic schema
      _this.schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "untitled",
        "type": "object",
        "description": "",
        "properties": {}
      };

      var i = 0;

      for (i = 0; i < _this.columns; i++) {
        _this.schema.properties[String.fromCharCode(65 + i)] = {
          "description": "",
          "type": "string"
        };
      }

      _this._columns = _this.schema.properties;
      _this.collection.schema = _this.schema;
    }

    //buffer
    _this._generate();
    _this.collection.set(_this.data);

    _this.isInitalized = true;
    return _this;
  }

  _createClass(Spreadsheet, [{
    key: "_generate",

    /**
     * @propery {number} columns Defines a set of columns in the spreadsheet
     * @memberof Spreadsheet
     */

    /**
     * @propery {number} rows Defines a set of rows in the spreadsheet
     * @memberof Spreadsheet
     */

    value: function _generate() {
      if (this.schema && this.schema.properties) {
        var i = 0,
            ii = 0,
            keys = Object.keys(this.schema.properties),
            l = keys.length,
            obj = {};
        this.data = [];
        for (ii = 0; ii < this.rows; ii++) {
          obj = {};
          for (i = 0; i < l; i++) {
            obj[keys[i]] = "";
          }
          this.data.push(obj);
        }
      }
    }
  }]);

  return Spreadsheet;
}(_autoTable2.default);

;

exports.default = Spreadsheet;

/***/ }),

/***/ "./src/view/component/toolbar/abstractToolbar.js":
/*!*******************************************************!*\
  !*** ./src/view/component/toolbar/abstractToolbar.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _decorator = __webpack_require__(/*! ../../decorator/decorator.js */ "./src/view/decorator/decorator.js");

var _decorator2 = _interopRequireDefault(_decorator);

var _model = __webpack_require__(/*! ../../../model/model.js */ "./src/model/model.js");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
  * An abstract tooldbar Component, designed to be extended
  * @class AbstractToolbar
  * @memberof Presentation.Component
  * @extends Presentation.View
  * @abstract
  */
var AbstractToolbar = function (_DecoratorView) {
  _inherits(AbstractToolbar, _DecoratorView);

  function AbstractToolbar(options) {
    _classCallCheck(this, AbstractToolbar);

    var _this = _possibleConstructorReturn(this, (AbstractToolbar.__proto__ || Object.getPrototypeOf(AbstractToolbar)).call(this, options));

    _this.isInitalized = false, _this._menuItems = [];
    _this.title = "";

    if (_this.model) {
      _this.model.clear();
    } else {
      _this.model = new _model2.default();
    }
    if (options) {
      if (options.data && _augmentedjsNext2.default.isObject(options.data)) {
        _this.model.set(options.data);
      }
      if (options.title && _augmentedjsNext2.default.isString(options.title)) {
        _this.title = options.title;
      }
      if (options.menuItems && _augmentedjsNext2.default.isObject(options.menuItems)) {
        _this._menuItems = options.menuItems;
      }
    }
    if (_this.el && _this.name) {
      _this.isInitalized = true;
    }
    return _this;
  }

  _createClass(AbstractToolbar, [{
    key: "addItem",

    /**
      * The model property
      * @property {Augmented.Model} model The model property
      * @memberof AbstractToolbar
      */

    /**
      * The initialized property
      * @property {boolean} isInitalized The initialized property
      * @memberof AbstractToolbar
      */

    /**
      * The menuitems property
      * @property {array} menuItems The initialized property
      * @memberof AbstractToolbar
      */

    /**
      * The title property
      * @property {string} title The title property
      * @memberof AbstractToolbar
      */
    /**
      * @method addItem - Adds an item to the menu
      * @param id {string} The id of the itemID
      * @param click {string} The bound click method to call
      * @param icon {string} The icon name (webfont)
      * @param title {string} The title of the itemID
      * @param spacer {boolean} Sets a spacer item vs text (not clickable)
      * @example addItem({"itemID", "event", "web", "something", false });
      * @example addItem({"space", null, null, null, true });
      * @memberof AbstractToolbar
      */
    value: function addItem(id, click, icon, title, spacer) {
      if (!spacer) {
        this._menuItems.push({ "id": id, "click": click, "icon": icon, "title": title, "spacer": false });
      } else {
        this.addSpacer();
      }
    }
  }, {
    key: "addSpacer",

    /**
      * @method addSpacer - Adds a spacer item to the menu
      * @example addSpacer();
      * @memberof AbstractToolbar
      */
    value: function addSpacer() {
      this._menuItems.push({ "id": null, "click": null, "icon": null, "title": null, "spacer": true });
    }
  }, {
    key: "clearMenuItems",

    /**
     * Clear all items in the menu
     */
    value: function clearMenuItems() {
      this._menuItems.length = 0;
    }
  }, {
    key: "menuItems",
    get: function get() {
      return this._menuItems;
    },
    set: function set(items) {
      this._menuItems = items;
    }
  }]);

  return AbstractToolbar;
}(_decorator2.default);

;

exports.default = AbstractToolbar;

/***/ }),

/***/ "./src/view/component/toolbar/toolbar.js":
/*!***********************************************!*\
  !*** ./src/view/component/toolbar/toolbar.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _abstractToolbar = __webpack_require__(/*! ./abstractToolbar.js */ "./src/view/component/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _dom = __webpack_require__(/*! ../../../dom/dom.js */ "./src/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

var _buildMenuItems = __webpack_require__(/*! ../functions/buildMenuItems.js */ "./src/view/component/functions/buildMenuItems.js");

var _buildMenuItems2 = _interopRequireDefault(_buildMenuItems);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * A Toolbar View
 * @class Toolbar
 * @memberof Presentation.Component
 * @extends Presentation.AbstractToolbar
 */
var Toolbar = function (_AbstractToolbar) {
  _inherits(Toolbar, _AbstractToolbar);

  function Toolbar(options) {
    _classCallCheck(this, Toolbar);

    return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, options));
  }

  _createClass(Toolbar, [{
    key: "render",

    /**
     * Render the Toolbar
     * @method render Renders the Toolbar
     * @memberof Augmented.Presentation.Component.Toolbar
     * @returns {object} Returns the view context ('this')
     */
    value: function render() {
      if (!this.isInitalized) {
        //_logger.warn("AUGMENTED: Toolbar Can't render yet, not initialized!");
        return this;
      }
      this.template = null; //"notused";
      if (this.el) {
        var e = _dom2.default.selector(this.el);
        if (e) {
          // the menu
          _dom2.default.addClass(e, "toolbar");
          e.setAttribute("data-" + this.name, "toolbar");
          e.innerHTML = buildToolbarItems(this.name, this.menuItems);
        }
      } else {
        //_logger.warn("AUGMENTED: Toolbar no element anchor, not rendering.");
        return this;
      }
      this.delegateEvents();
      this.syncAllBoundElements();
      return this;
    }
  }]);

  return Toolbar;
}(_abstractToolbar2.default);

;

exports.default = Toolbar;

/***/ }),

/***/ "./src/view/decorator/decorator.js":
/*!*****************************************!*\
  !*** ./src/view/decorator/decorator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _colleague = __webpack_require__(/*! ../pubsub/colleague.js */ "./src/view/pubsub/colleague.js");

var _colleague2 = _interopRequireDefault(_colleague);

var _model = __webpack_require__(/*! ../../model/model.js */ "./src/model/model.js");

var _model2 = _interopRequireDefault(_model);

var _dom = __webpack_require__(/*! ../../dom/dom.js */ "./src/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

var _widget = __webpack_require__(/*! ../../widget/widget.js */ "./src/widget/widget.js");

var _widget2 = _interopRequireDefault(_widget);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var DECORATOR_ATTRIBUTE_ENUM = {
  "CLICK": "data-click",
  "FUNCTION": "data-function",
  "STYLE": "data-style",
  "APPEND_TEMPLATE": "data-append-template",
  "PREPEND_TEMPLATE": "data-prepend-template"
};

// TODO: not implimented yet
//"appendTemplateEach": "data-append-template-each",
//"prependTemplateEach": "data-prepend-template-each"

/**
 * DecoratorView<br/>
 * An MVVM view designed around decorating the DOM with bindings.
 * This concept is designed to decouple the view from the backend contract.
 * Although this is achieved via views in general, the idea is:<br/>
 * <blockquote>As a Javascript Developer, I'd like the ability to decorate HTML and control view rendering without the use of CSS selectors</blockquote>
 * <em>Important to note: This view <strong>gives up</strong> it's template and events!
 * This is because all events and templates are used on the DOM directly.</em><br/>
 * To add custom events, use customEvents instead of 'events'<br/>
 * supported annotations:<br/>
 * <ul>
 * <li>data-click</li>
 * <li>data-function</li>
 * <li>data-style</li>
 * <li>data-append-template</li>
 * <li>data-prepend-template</li>
 * </ul>
 * @memberof Presentation
 * @extends Presentation.Colleague
 */

var DecoratorView = function (_Colleague) {
  _inherits(DecoratorView, _Colleague);

  function DecoratorView(options) {
    _classCallCheck(this, DecoratorView);

    var _this = _possibleConstructorReturn(this, (DecoratorView.__proto__ || Object.getPrototypeOf(DecoratorView)).call(this, options));

    _this.customEvents = {};
    return _this;
  }

  _createClass(DecoratorView, [{
    key: "events",

    /**
     * Custom Events Property - merge into built-in events
     * @property customEvents
     */

    /**
     * Events Property - Do Not Override
     * @property events
     */
    value: function events() {
      var _events = this.customEvents ? this.customEvents : {};
      if (this.name) {
        _events["change input[" + this.bindingAttribute() + "]"] = "_changed";
        _events["change textarea[" + this.bindingAttribute() + "]"] = "_changed";
        _events["change select[" + this.bindingAttribute() + "]"] = "_changed";
        // regular elements with click bindings
        _events["click *[" + this.bindingAttribute() + "][" + DECORATOR_ATTRIBUTE_ENUM.CLICK + "]"] = "_click";
      }
      return _events;
    }
  }, {
    key: "_changed",
    value: function _changed(event) {
      if (event) {
        var key = event.currentTarget.getAttribute(this.bindingAttribute());
        var val = event.currentTarget.value;
        if (event.currentTarget.type === "checkbox") {
          val = event.currentTarget.checked ? true : false;
        }
        this.model.set(key ? key : event.currentTarget.name, val);
        this._func(event);
        //_logger.debug("AUGMENTED: DecoratorView updated Model: " + JSON.stringify(this.model.toJSON()));
      }
    }
  }, {
    key: "_click",
    value: function _click(event) {
      if (event) {
        var func = event.currentTarget.getAttribute(DECORATOR_ATTRIBUTE_ENUM.CLICK);
        if (func && this[func]) {
          this._executeFunctionByName(func, this, event);
        } /* else {
           //_logger.debug("AUGMENTED: DecoratorView No function bound or no function exists! " + func);
          }*/
        this._func(event);
      }
    }
  }, {
    key: "_func",
    value: function _func(event) {
      if (event) {
        var func = event.currentTarget.getAttribute(DECORATOR_ATTRIBUTE_ENUM.FUNCTION);
        if (func && this[func]) {
          this._executeFunctionByName(func, this, event);
        } /*else {
          //_logger.debug("AUGMENTED: DecoratorView No function bound or no function exists! " + func);
          }*/
      }
    }
  }, {
    key: "initialize",

    /**
     * Initialize method - Do Not Override
     */
    value: function initialize(options) {
      this.init(options);

      if (!this.model) {
        this.model = new _model2.default();
      }
    }
  }, {
    key: "remove",

    /**
     * Remove method - Does not remove DOM elements only bindings.
     */
    value: function remove() {
      /* off to unbind the events */
      this.undelegateEvents();
      this.off();
      this.stopListening();
      return this;
    }
  }, {
    key: "_executeFunctionByName",

    /**
     * _executeFunctionByName method - Private
     * @private
     */
    value: function _executeFunctionByName(functionName, context) /*, args */{
      //let args = Array.prototype.slice.call(arguments, 2);
      var namespaces = functionName.split(".");
      var func = namespaces.pop();
      if (namespaces && func) {
        var i = 0;
        var l = namespaces.length;
        for (i = 0; i < l; i++) {
          context = context[namespaces[i]];
        }

        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        return context[func].apply(context, args);
      }
      return null;
      //return Augmented.exec(arguments);
    }
  }, {
    key: "bindingAttribute",

    /**
     * bindingAttribute method - Returns the binging data attribute name
     * @returns {string} Binding attribute name
     */
    value: function bindingAttribute() {
      return "data-" + this.name;
    }
  }, {
    key: "injectTemplate",

    /**
     * injectTemplate method - Injects a template at a mount point
     * @param {string} template The template to inject
     * @param {Element} mount The mount point as Document.Element or String
     */
    value: function injectTemplate(template, mount) {
      if (!mount) {
        mount = this.el;
      }
      if (_augmentedjsNext2.default.isString(mount)) {
        var qs = document.querySelector(mount);
        //console.log(`Query selector: ${qs}, mount: ${mount}, el: ${this.el}`);
        if (!qs) {
          return;
        }
        mount = qs;
      }

      if (_augmentedjsNext2.default.isString(template)) {
        // html
        var currentHTML = mount.innerHTML;
        mount.innerHTML = currentHTML + template;
      } else if (template.nodeType && template.nodeName && template.nodeType > 0 && !(template.nodeName === "template" || template.nodeName === "TEMPLATE")) {
        // DOM
        mount.appendChild(template);
      } else if (template instanceof DocumentFragment || template.nodeName === "template" || template.nodeName === "TEMPLATE") {
        // Document Fragment
        _dom2.default.injectTemplate(template, mount);
      }
      this.delegateEvents();
    }
  }, {
    key: "removeTemplate",

    /**
     * removeTemplate method - Removes a template (children) at a mount point
     * @param {Element} mount The mount point as Document.Element or String
     * @param {boolean} onlyContent Only remove the content not the mount point
     */
    value: function removeTemplate(mount, onlyContent) {
      if (mount) {
        while (mount.firstChild) {
          mount.removeChild(mount.firstChild);
        }
        if (!onlyContent) {
          var p = mount.parentNode;
          if (p) {
            p.removeChild(mount);
          }
        }
        this.delegateEvents();
      }
    }
  }, {
    key: "boundElement",

    /**
     * boundElement method - returns the bound element from identifier
     * @param {string} id The identifier (not id attribute) of the element
     * @example
     * from HTML: <div data-myMountedView="something" id="anything"></div>
     * from JavaScript: let el = this.boundElement("something");
     */
    value: function boundElement(id) {
      if (this.el && id) {
        var el = this.el;
        if (_augmentedjsNext2.default.isString(this.el)) {
          el = document.querySelector(this.el);
        }
        if (el) {
          return el.querySelector("[" + this.bindingAttribute() + "=" + id + "]");
        }
      }
      return null;
    }
  }, {
    key: "syncBoundElement",

    /**
     * syncBoundElement - Syncs the data of a bound element by firing a change event
     * @param {string} id The identifier (not id attribute) of the element
     */
    value: function syncBoundElement(id) {
      if (id) {
        var event = new UIEvent("change", {
          "view": window,
          "bubbles": true,
          "cancelable": true
        }),
            sel = this.boundElement(id);
        if (sel) {
          sel.dispatchEvent(event);
        }
      }
    }
  }, {
    key: "syncAllBoundElements",

    /**
     * syncAllBoundElements - Syncs the data of all bound elements by firing a change events
     */
    value: function syncAllBoundElements() {
      var ba = this.bindingAttribute();
      if (this.el && ba) {
        var elements = document.querySelectorAll(this.el + "[" + ba + "]");
        //console.debug(`Elements ${elements}`);
        if (elements && elements.length > 0) {
          var i = 0,
              l = elements.length,
              event = new UIEvent("change", {
            "view": window,
            "bubbles": true,
            "cancelable": true
          });
          for (i = 0; i < l; i++) {
            elements[i].dispatchEvent(event);
          }
        }
      } /*else {
        console.warn(`No bound element ${this.el} or binding attribute - ${ba}`);
        }*/
    }
  }, {
    key: "addClass",

    /**
     * addClass - adds a class to a bount element
     * @param {string} id The identifier (not id attribute) of the element
     * @param {string} cls The class to add
     */
    value: function addClass(id, cls) {
      var myEl = this.boundElement(id);
      if (myEl) {
        myEl.classList.add(cls);
      }
    }
  }, {
    key: "removeClass",

    /**
     * removeClass - remove a class to a bount element
     * @param {string} id The identifier (not id attribute) of the element
     * @param {string} cls The class to remove
     */
    value: function removeClass(id, cls) {
      var myEl = this.boundElement(id);
      if (myEl) {
        myEl.classList.remove(cls);
      }
    }
  }, {
    key: "bindModelChange",

    /**
     * bindModelChange method - binds the model changes to functions
     * @param {func} func The function to call when changing (normally render)
     */
    value: function bindModelChange(func) {
      if (!this.model) {
        this.model = new _model2.default();
      }
      this.model.on('change', func, this);
    }
  }, {
    key: "syncModelChange",

    /**
     * syncModelChange method - binds the model changes to a specified bound element
     * @param {Element} element The element to bind as Document.Element or string
     */
    value: function syncModelChange(element) {
      if (!this.model) {
        this.model = new _model2.default();
      }
      if (element) {
        this.model.on('change:' + element, this._syncData.bind(this, element), this);
      } else {
        this.model.on('change', this._syncAllData.bind(this, element), this);
      }
    }
  }, {
    key: "_syncData",

    /**
     * _syncData method - syncs the model changes to a specified bound element
     * @param {Element} element The element to bind as Document.Element or string
     * @private
     */
    value: function _syncData(element) {
      var e = this.boundElement(element);
      if (e) {
        var d = this.model.get(element),
            renderStyle = e.getAttribute(DECORATOR_ATTRIBUTE_ENUM.STYLE),
            prependTemplate = e.getAttribute(DECORATOR_ATTRIBUTE_ENUM.PREPEND_TEMPLATE),
            appendTemplate = e.getAttribute(DECORATOR_ATTRIBUTE_ENUM.APPEND_TEMPLATE),
            mount = void 0,
            template = void 0;

        if (prependTemplate) {
          mount = document.createElement("div");
          template = _dom2.default.selector("#" + prependTemplate);
          e.appendChild(mount);
          this.injectTemplate(template, mount);
        }

        if (renderStyle) {
          var ee = void 0;
          /*,
          prependTemplateEach = e.getAttribute(DECORATOR_ATTRIBUTE_ENUM.PREPEND_TEMPLATEEach),
          appendTemplateEach = e.getAttribute(DECORATOR_ATTRIBUTE_ENUM.APPEND_TEMPLATEEach),
          pEach = prependTemplateEach ? prependTemplateEach : null,
          aEach = appendTemplateEach ? appendTemplateEach : null;*/

          if (renderStyle === "list" || renderStyle === "unordered-list") {
            ee = Presentation.Widget.List(null, d, false);
            _dom2.default.empty(e);
            e.appendChild(ee);
          } else if (renderStyle === "ordered-list") {
            ee = Presentation.Widget.List(null, d, true);
            _dom2.default.empty(e);
            e.appendChild(ee);
          } else if (renderStyle === "description-list") {
            ee = Presentation.Widget.DescriptionList(null, d);
            _dom2.default.empty(e);
            e.appendChild(ee);
          }
        } else {
          _dom2.default.setValue(e, d ? d : "");
        }

        if (appendTemplate) {
          mount = document.createElement("div");
          template = _dom2.default.selector("#" + appendTemplate);
          e.appendChild(mount);

          this.injectTemplate(template, mount);
        }
      }
    }
  }, {
    key: "_syncAllData",
    value: function _syncAllData() {
      // get all model properties
      var attr = this.model.attributes;
      if (attr) {
        var i = 0;
        var keys = Object.keys(attr),
            l = keys.length;
        for (i = 0; i < l; i++) {
          this._syncData(keys[i]);
        }
      }
    }
  }, {
    key: "unbindModelChange",

    /**
     * unbindModelChange method - unbinds the model changes to elements
     * @param {func} func The function to call when changing (normally render)
     */
    value: function unbindModelChange(func) {
      this.model.unBind('change', func, this);
    }
  }, {
    key: "unbindModelSync",

    /**
     * unbindModelSync method - unbinds the model changes to a specified bound element
     * @param {Element} element The element to bind as Document.Element or string
     */
    value: function unbindModelSync(element) {
      this.model.unBind('change:' + element, this._syncData, this);
    }
  }]);

  return DecoratorView;
}(_colleague2.default);

;

exports.default = DecoratorView;

/***/ }),

/***/ "./src/view/directive/directiveView.js":
/*!*********************************************!*\
  !*** ./src/view/directive/directiveView.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;if (getter === undefined) {
      return undefined;
    }return getter.call(receiver);
  }
};

var _decorator = __webpack_require__(/*! ../decorator/decorator.js */ "./src/view/decorator/decorator.js");

var _decorator2 = _interopRequireDefault(_decorator);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * A DecoratorView that is designed to use templates and clean up when removed.
 * @see Presentation.DecoratorView
 * @memberof Presentation
 * @extends Presentation.DecoratorView
 */
var DirectiveView = function (_DecoratorView) {
  _inherits(DirectiveView, _DecoratorView);

  function DirectiveView(options) {
    _classCallCheck(this, DirectiveView);

    return _possibleConstructorReturn(this, (DirectiveView.__proto__ || Object.getPrototypeOf(DirectiveView)).call(this, options));
  }

  _createClass(DirectiveView, [{
    key: "remove",
    value: function remove() {
      console.debug("DirectiveView remove");
      this.removeTemplate(this.el, true);
      return _get(DirectiveView.prototype.__proto__ || Object.getPrototypeOf(DirectiveView.prototype), "remove", this).call(this);
    }
  }]);

  return DirectiveView;
}(_decorator2.default);

;

exports.default = DirectiveView;

/***/ }),

/***/ "./src/view/pubsub/colleague.js":
/*!**************************************!*\
  !*** ./src/view/pubsub/colleague.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _view = __webpack_require__(/*! ../view.js */ "./src/view/view.js");

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

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
var Colleague = function (_View) {
  _inherits(Colleague, _View);

  function Colleague(options) {
    _classCallCheck(this, Colleague);

    var _this = _possibleConstructorReturn(this, (Colleague.__proto__ || Object.getPrototypeOf(Colleague)).call(this, options));

    if (options && options.mediator) {
      _this._mediator = mediator;
    } else {
      _this._mediator = null;
    }
    return _this;
  }

  _createClass(Colleague, [{
    key: "sendMessage",

    /**
     * Send a message to the mediator's queue
     * @method sendMessage
     * @param {string} message Message to send
     * @param {object} data Data to send with message
     *
     */
    value: function sendMessage(message, data) {
      if (this._mediator) {
        this._mediator.trigger(message, data);
      } /*else {
        _logger.warn("AUGMENTED: No mediator is available, talking to myself.");
        }*/
    }
  }, {
    key: "setMediatorMessageQueue",

    /**
     * Set the mediator to this colleague
     * @method setMediatorMessageQueue
     * @param {Augmented.Presentation.Mediator} mediator The mediator
     * 
     */
    value: function setMediatorMessageQueue(mediator) {
      if (this._mediator) {
        // already registered, send a dismiss message
        this._mediator._dismissMe(this);
      }
      this._mediator = mediator;
    }
  }, {
    key: "removeMediatorMessageQueue",

    /**
     * Remove the mediator from this colleague
     * @method removeMediatorMessageQueue
     *
     */
    value: function removeMediatorMessageQueue() {
      this._mediator = null;
    }
  }, {
    key: "mediator",
    get: function get() {
      return this._mediator;
    }
  }]);

  return Colleague;
}(_view2.default);

;

exports.default = Colleague;

/***/ }),

/***/ "./src/view/pubsub/mediator.js":
/*!*************************************!*\
  !*** ./src/view/pubsub/mediator.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;if (getter === undefined) {
      return undefined;
    }return getter.call(receiver);
  }
};

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var Augmented = _interopRequireWildcard(_augmentedjsNext);

var _colleague = __webpack_require__(/*! ./colleague.js */ "./src/view/pubsub/colleague.js");

var _colleague2 = _interopRequireDefault(_colleague);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

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
var Mediator = function (_Colleague) {
  _inherits(Mediator, _Colleague);

  function Mediator(options) {
    _classCallCheck(this, Mediator);

    var _this = _possibleConstructorReturn(this, (Mediator.__proto__ || Object.getPrototypeOf(Mediator)).call(this, options));

    _this._defaultChannel = "augmentedChannel";
    _this._defaultIdentifier = "augmentedIdentifier";
    _this._channels = {};
    _this._colleagueMap = {};
    _this._subscriptions = {};
    return _this;
  }

  _createClass(Mediator, [{
    key: "delegateEvents",

    /**
    * Default Channel Property
    * @property {string} defaultChannel The default channel for the view
    *
    * @private
    */

    /**
    * Default identifier Property
    * @property {string} defaultIdentifier The default identifier for the view
    *
    * @private
    */

    /**
    * Channels Property
    * @property {object} _channels The channels for the view (object array)
    *
    * @private
    */

    /**
    * Colleague Map Property
    * @property {object} _colleagueMap The colleagues observed by index in the channel
    *
    * @private
    */

    /**
    * @property {Object} _subscriptions List of subscriptions
    *
    * @private
    */

    /**
    * Extend delegateEvents() to set subscriptions
    * @method delegateEvents
    *
    */
    value: function delegateEvents(events) {
      _get(Mediator.prototype.__proto__ || Object.getPrototypeOf(Mediator.prototype), "delegateEvents", this).call(this, events);
      this.subscriptions = {};
    }
  }, {
    key: "undelegateEvents",

    /**
    * Extend undelegateEvents() to unset subscriptions
    * @method undelegateEvents
    *
    */
    value: function undelegateEvents(events) {
      _get(Mediator.prototype.__proto__ || Object.getPrototypeOf(Mediator.prototype), "undelegateEvents", this).call(this, events);
      this.unsetSubscriptions();
    }
  }, {
    key: "unsetSubscriptions",

    /**
    * Unsubscribe to each subscription
    * @method unsetSubscriptions
    * @param {Object} [subscriptions] An optional hash of subscription to remove
    *
    */
    value: function unsetSubscriptions(subscriptions) {
      subscriptions = subscriptions || this._subscriptions;
      if (!subscriptions || subscriptions.length === 0) {
        return;
      }

      var i = 0,
          l = subscriptions.length;
      for (i = 0; i < l; i++) {
        var subscription = subscriptions[i];
        var once = false;
        if (subscription.$once) {
          subscription = subscription.$once;
          once = true;
        }
        if (typeof subscription == 'string') {
          subscription = this[subscription];
        }
        this.unsubscribe(subscription.channel, subscription.$once || subscription, this);
      }
    }
  }, {
    key: "observeColleague",

    /**
    * Observe a Colleague View - observe a Colleague and add to a channel
    * @method observeColleague
    * @param {Presentation.Colleague} colleague The Colleague to observe
    * @param {function} callback The callback to call for this colleague
    * @param {string} channel The Channel to add the pubished events to
    * @param {string} identifier The identifier for this function
    *
    */
    value: function observeColleague(colleague, callback, channel, identifier) {
      if (colleague instanceof _colleague2.default) {
        if (!channel) {
          channel = this._defaultChannel;
        }
        colleague.setMediatorMessageQueue(this);
        this.subscribe(channel, callback, colleague, false, identifier ? identifier : this._defaultIdentifier);
      }
    }
  }, {
    key: "observeColleagueAndTrigger",

    /**
    * Observe a Colleague View - observe a Colleague and add to a channel and auto trigger events
    * @method observeColleague
    * @param {Presentation.Colleague} colleague The Colleague to observe
    * @param {string} channel The Channel to add the pubished events to
    * @param {string} identifier The identifier for this function
    *
    */
    value: function observeColleagueAndTrigger(colleague, channel, identifier) {
      this.observeColleague(colleague, function () {
        ////console.log("triggered!", args[0]);
        ////console.log("this", this);
        ////console.log("colleague", colleague);
        colleague.trigger(channel, arguments.length <= 0 ? undefined : arguments[0]); //arguments[0], arguments[1]);
      }, channel, identifier ? identifier : this._defaultIdentifier);
    }
  }, {
    key: "_dismissMe",
    value: function _dismissMe(colleague) {
      if (colleague instanceof _colleague2.default) {
        var channel = this._colleagueMap[colleague],
            myChannelObject = this._channels[channel];
        this.unsubscribe(channel, myChannelObject.fn, colleague, myChannelObject.identifier);
      }
    }
  }, {
    key: "dismissColleague",

    /**
    * Dismiss a Colleague View - Remove a Colleague from the channel
    * @method dismissColleague
    * @param {Presentation.Colleague} colleague The Colleague to observe
    * @param {function} callback The callback to call on channel event
    * @param {string} channel The Channel events are pubished to
    * @param {string} identifier The identifier for this function
    *
    */
    value: function dismissColleague(colleague, callback, channel, identifier) {
      if (colleague instanceof _colleague2.default) {
        if (!channel) {
          channel = this._defaultChannel;
        }
        colleague.removeMediatorMessageQueue();
        this.unsubscribe(channel, callback, colleague, identifier);
      }
    }
  }, {
    key: "dismissColleagueTrigger",

    /**
    * Dismiss a Colleague View - Remove a Colleague from the channel that has an auto trigger
    * @method dismissColleagueTrigger
    * @param {Presentation.Colleague} colleague The Colleague to observe
    * @param {string} channel The Channel events are pubished to
    * @param {string} identifier The identifier for this function
    *
    */
    value: function dismissColleagueTrigger(colleague, channel, identifier) {
      var id = identifier ? identifier : this._defaultIdentifier;
      this.dismissColleague(colleague, function () {
        colleague.trigger(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]); //arguments[0], arguments[1]);
      }, channel, id);
    }
  }, {
    key: "subscribe",

    /**
    * Subscribe to a channel
    * @method subscribe
    * @param {string} channel The Channel events are pubished to
    * @param {function} callback The callback to call on channel event
    * @param {object} context The context (or 'this')
    * @param {boolean} once Toggle to set subscribe only once
    * @param {string} identifier The identifier for this function
    *
    */
    value: function subscribe(channel, callback, context, once, identifier) {

      ////console.log("subscribe: callback", callback);

      if (!this._channels[channel]) {
        this._channels[channel] = [];
      }

      var obj = {
        fn: callback,
        // TODO: the context set to 'this' may be the source of the edge case mediator instance for a channel
        context: context || this,
        once: once,
        identifier: identifier ? identifier : this._defaultIdentifier
      };
      this._channels[channel].push(obj);

      this._colleagueMap[context] = channel;

      this.on(channel, this.publish, context);
    }
  }, {
    key: "publish",

    /**
    * Trigger all callbacks for a channel
    * @method publish
    * @param {string} channel The Channel events are pubished to
    * @param {object} N Extra parameter to pass to handler
    *
    */
    value: function publish(channel) {
      if (!channel || !this._channels[channel]) {
        //_logger.warn("AUGMENTED: Mediator: channel '" + channel + "' doest exist.");
        return;
      }

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var myArgs = [].slice.call(args, 1),
          subscription = void 0;
      //console.log("args", myArgs);
      var i = 0,
          l = this._channels[channel].length;

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
    }
  }, {
    key: "unsubscribe",

    /**
    * Cancel subscription
    * @method unsubscribe
    * @param {string} channel The Channel events are pubished to
    * @param {function} callback The function callback regestered
    * @param {object} context The context (or 'this')
    * @param {string} identifier The identifier for this function
    *
    */
    value: function unsubscribe(channel, callback, context, identifier) {
      if (!this._channels[channel]) {
        return;
      }

      var id = identifier ? identifier : this._defaultIdentifier;

      var subscription = void 0,
          i = 0;
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
    }
  }, {
    key: "subscribeOnce",

    /**
    * Subscribing to one event only
    * @method subscribeOnce
    * @param {string} channel The Channel events are pubished to
    * @param {string} subscription The subscription to subscribe to
    * @param {object} context The context (or 'this')
    * @param {string} identifier The identifier for this function
    *
    */
    value: function subscribeOnce(channel, subscription, context, identifier) {
      this.subscribe(channel, subscription, context, true, identifier);
    }
  }, {
    key: "getColleagues",

    /**
    * Get All the Colleagues for a channel
    * @method getColleagues
    * @param {string} channel The Channel events are pubished to
    *
    * @returns {array} The colleagues for a channel
    */
    value: function getColleagues(channel) {
      var c = this.getChannel(channel);
      return c ? c.context : null;
    }
  }, {
    key: "getChannel",

    /**
    * Get a specific channel
    * @method getChannel
    * @param {string} channel The Channel events are pubished to
    *
    * @returns {array} Returns the requested channel or null if nothing exists
    */
    value: function getChannel(channel) {
      if (!channel) {
        channel = this._defaultChannel;
      }
      return this._channels[channel] ? this._channels[channel] : null;
    }
  }, {
    key: "subscriptions",

    /**
    * Gets all subscriptions
    * @method getSubscriptions
    *
    * @returns {object} Returns all subscriptions
    */
    get: function get() {
      return this._subscriptions;
    },

    /**
    * Subscribe to each subscription
    * @method setSubscriptions
    * @param {Object} [subscriptions] An optional hash of subscription to add
    *
    */
    set: function set(subscriptions) {
      if (subscriptions) {
        Augmented.Utility.extend(this._subscriptions || {}, subscriptions);
      }
      subscriptions = subscriptions || this._subscriptions;
      if (!subscriptions || subscriptions.length === 0) {
        return;
      }
      // Just to be sure we don't set duplicate
      this.unsetSubscriptions(subscriptions);

      var i = 0,
          l = subscriptions.length;
      for (i = 0; i < l; i++) {
        var subscription = subscriptions[i];
        var once = false;
        if (subscription.$once) {
          subscription = subscription.$once;
          once = true;
        }
        if (typeof subscription === 'string') {
          subscription = this[subscription];
        }
        this.subscribe(subscription.channel, subscription, this, once);
      }
    }
  }, {
    key: "channels",

    /**
    * Get Channels
    * @method getChannels
    *
    * @returns {object} Returns all the channels
    */
    get: function get() {
      return this._channels;
    }
  }, {
    key: "defaultChannel",

    /**
    * Get the default channel
    * Convenience method for getChannel(null)
    * @method getDefaultChannel
    *
    * @returns {array} Returns the default channel or null if nothing exists
    */
    get: function get() {
      return this.getChannel(this._defaultChannel);
    }
  }, {
    key: "defaultIdentifier",

    /**
    * Get the default identifier
    * @method getDefaultIdentifier
    *
    * @returns {string} Returns the default identifier
    */
    get: function get() {
      return this._defaultIdentifier;
    }
  }]);

  return Mediator;
}(_colleague2.default);

;

exports.default = Mediator;

/***/ }),

/***/ "./src/view/view.js":
/*!**************************!*\
  !*** ./src/view/view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _abstractView = __webpack_require__(/*! ./abstractView.js */ "./src/view/abstractView.js");

var _abstractView2 = _interopRequireDefault(_abstractView);

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var Augmented = _interopRequireWildcard(_augmentedjsNext);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Aubstract View - the base view for handlng display in the MV* Concept
 * @class
 * @name View
 * @memberof Presentation
 * @extends Presentation.AbstractView
 */
var View = function (_AbstractView) {
  _inherits(View, _AbstractView);

  function View(options) {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, options));
  }

  _createClass(View, [{
    key: "render",

    /**
     * Render callback for the view
     * @method render
     * @returns this Context of the view
     * @memberof View
     */
    value: function render() {
      if (this._el && this.template) {
        var el = this._el;
        if (Augmented.isString(this._el)) {
          el = document.querySelector(this._el);
        }
        if (el) {
          el.innerHTML = this.template;
        }
      }
      return this;
    }
  }, {
    key: "remove",

    /**
    * Remove the table and all binds
    * @method remove
    * @memberof View
    */
    value: function remove() {
      /* off to unbind the events */
      this.undelegateEvents();
      this.off();
      this.stopListening();
      if (this._el) {
        var el = this._el;
        if (Augmented.isString(this._el)) {
          el = document.querySelector(this._el);
        }
        if (el) {
          el.innerHTML = "";
        }
      }
      return this;
    }
  }]);

  return View;
}(_abstractView2.default);

;

exports.default = View;

/***/ }),

/***/ "./src/widget/widget.js":
/*!******************************!*\
  !*** ./src/widget/widget.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * Widgets and small presentation modules
 */
var Widget = function () {
  function Widget() {
    _classCallCheck(this, Widget);
  }

  _createClass(Widget, null, [{
    key: "List",

    /**
     * List widget - renders a standard list
     * @method List
     * @param {string} id The id of the parent to attach the list
     * @param {Array} data The data to render
     * @param {boolean} ordered True if the list should be ordered
     * @param {string} binding The binding (used for decorator and optional)
     * @returns {Element} Returns a DOM element as a list
      */
    value: function List(id, data, ordered, binding) {
      var list = ordered ? document.createElement("ol") : document.createElement("ul"),
          i = 0,
          l = void 0,
          li = void 0,
          t = void 0,
          d = void 0;
      if (id) {
        list.setAttribute("id", id);
      }

      if (binding && id) {
        list.setAttribute("data-" + binding, id);
      }

      if (data && Array.isArray(data)) {
        l = data.length;
        for (i = 0; i < l; i++) {
          li = document.createElement("li");
          li.setAttribute("data-index", i);
          t = document.createTextNode(String(data[i]));
          li.appendChild(t);
          list.appendChild(li);
        }
      }
      return list;
    }
  }, {
    key: "DescriptionList",

    /**
     * DescriptionList widget - renders a description list
     * @method DescriptionList
     * @param {string} id The id of the parent to attach the list
     * @param {Object} data The data to render
     * @param {string} binding The binding (used for decorator and optional)
     * @returns {Element} Returns a DOM element as a description list
      */
    value: function DescriptionList(id, data, binding) {
      var list = document.createElement("dl"),
          i = 0,
          l = void 0,
          dd = void 0,
          dt = void 0,
          t = void 0,
          keys = void 0,
          key = void 0;
      if (id) {
        list.setAttribute("id", id);
      }

      if (binding && id) {
        list.setAttribute("data-" + binding, id);
      }

      if (data && _augmentedjsNext2.default.isObject(data)) {
        keys = Object.keys(data);
        l = keys.length;
        for (i = 0; i < l; i++) {
          dt = document.createElement("dt");
          t = document.createTextNode(String(keys[i]));
          dt.appendChild(t);
          list.appendChild(dt);

          key = data[keys[i]];
          dd = document.createElement("dd");
          t = document.createTextNode(String(key));
          dd.appendChild(t);
          list.appendChild(dd);
        }
      }
      return list;
    }
  }, {
    key: "DataList",

    /**
     * DataList widget - renders a data list
     * @method DataList
     * @param {string} id The id of the parent to attach the list
     * @param {Array} data The data to render
     * @param {string} binding The binding (used for decorator and optional)
     * @returns {Element} Returns a DOM element as a data list
      */
    value: function DataList(id, data, binding) {
      var list = document.createElement("datalist"),
          i = 0,
          l = void 0,
          o = void 0;
      if (id) {
        list.setAttribute("id", id);
      }

      if (binding && id) {
        list.setAttribute("data-" + binding, id);
      }

      if (data && Array.isArray(data)) {
        l = data.length;
        for (i = 0; i < l; i++) {
          o = document.createElement("option");
          o.value = String(data[i]);
          list.appendChild(o);
        }
      }
      return list;
    }
  }, {
    key: "Input",

    /**
     * Input widget - renders an input or simular based on type
     * @method Input
     * @param {object} field Field property object (required)
     * @param {string} name The name of the field
     * @param {string} value The value to preset
     * @param {string} id The id of the field
     * @param {boolean} required If the field is required
     * @param {string} binding The binding (used for decorator and optional)
     * @returns {Element} Returns a DOM element as an input
      */
    value: function Input(field, name, value, id, required, binding) {
      if (!field) {
        return null;
      }
      var input = void 0,
          dobj = value ? value : "",
          cobj = field,
          t = field.type;

      if (t === "object") {
        if (Array.isArray(dobj)) {
          var iii = 0,
              lll = dobj.length,
              option = void 0,
              tOption = void 0;
          input = document.createElement("select");
          for (iii = 0; iii < lll; iii++) {
            option = document.createElement("option");
            option.setAttribute("value", dobj[iii]);
            tOption = document.createTextNode(dobj[iii]);
            option.appendChild(tOption);
            input.appendChild(option);
          }
        } else {
          input = document.createElement("textarea");
          input.value = JSON.stringify(dobj);
        }
      } else if (t === "boolean") {
        input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        if (dobj === true) {
          input.setAttribute("checked", "checked");
        }
        input.value = dobj;
      } else if (t === "number" || t === "integer") {
        input = document.createElement("input");
        input.setAttribute("type", "number");
        input.value = dobj;
      } else if (t === "string" && cobj.enum) {
        input = document.createElement("select");
        var iiii = 0,
            llll = cobj.enum.length,
            option2 = void 0,
            tOption2 = void 0;
        for (iiii = 0; iiii < llll; iiii++) {
          option2 = document.createElement("option");
          option2.setAttribute("value", cobj.enum[iiii]);
          tOption2 = document.createTextNode(cobj.enum[iiii]);
          if (dobj === cobj.enum[iiii]) {
            option2.setAttribute("selected", "selected");
          }
          option2.appendChild(tOption2);
          input.appendChild(option2);
        }
      } else if (t === "string" && cobj.format === "email") {
        input = document.createElement("input");
        input.setAttribute("type", "email");
        input.value = dobj;
      } else if (t === "string" && cobj.format === "uri") {
        input = document.createElement("input");
        input.setAttribute("type", "url");
        input.value = dobj;
      } else if (t === "string" && cobj.format === "date-time") {
        input = document.createElement("input");
        input.setAttribute("type", "datetime");
        input.value = dobj;
      } else {
        input = document.createElement("input");
        input.setAttribute("type", "text");
        input.value = dobj;
      }

      if (t === "string" && cobj.pattern) {
        input.setAttribute("pattern", cobj.pattern);
      }

      if (cobj.minimum) {
        input.setAttribute("min", cobj.minimum);
      }

      if (cobj.maximum) {
        input.setAttribute("max", cobj.maximum);
      }

      if (t === "string" && cobj.minlength) {
        input.setAttribute("minlength", cobj.minlength);
      }

      if (t === "string" && cobj.maxlength) {
        input.setAttribute("maxlength", cobj.maxlength);
      }

      if (required) {
        input.setAttribute("required", "true");
      }

      if (name) {
        input.setAttribute("name", name);
      }

      if (id) {
        input.setAttribute("id", id);
      }

      if (binding && name) {
        input.setAttribute("data-" + binding, name);
      }

      return input;
    }
  }]);

  return Widget;
}();

;

exports.default = Widget;

/***/ })

/******/ });
});
//# sourceMappingURL=augmented-next-presentation.js.map