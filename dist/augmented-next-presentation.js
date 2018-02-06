(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Presentation", [], factory);
	else if(typeof exports === 'object')
		exports["Presentation"] = factory();
	else
		root["Presentation"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};(function webpackUniversalModuleDefinition(root,factory){if(( false?'undefined':_typeof2(exports))==='object'&&( false?'undefined':_typeof2(module))==='object')module.exports=factory();else if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if((typeof exports==='undefined'?'undefined':_typeof2(exports))==='object')exports["Augmented"]=factory();else root["Augmented"]=factory();})(typeof self!=='undefined'?self:undefined,function(){return(/******/function(modules){// webpackBootstrap
/******/// The module cache
/******/var installedModules={};/******//******/// The require function
/******/function __webpack_require__(moduleId){/******//******/// Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/// Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******//******/// Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******//******/// Flag the module as loaded
/******/module.l=true;/******//******/// Return the exports of the module
/******/return module.exports;/******/}/******//******//******/// expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******//******/// expose the module cache
/******/__webpack_require__.c=installedModules;/******//******/// define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{/******/configurable:false,/******/enumerable:true,/******/get:getter/******/});/******/}/******/};/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******//******/// Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******//******/// __webpack_public_path__
/******/__webpack_require__.p="/dist/";/******//******/// Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=23);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};var g;// This works in non-strict mode
g=function(){return this;}();try{// This works if eval is allowed (see CSP)
g=g||Function("return this")()||(1,eval)("this");}catch(e){// This works if the window reference is available
if((typeof window==="undefined"?"undefined":_typeof(window))==="object")g=window;}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports=g;/***/},/* 1 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _uniqueId=__webpack_require__(2);var _uniqueId2=_interopRequireDefault(_uniqueId);var _once=__webpack_require__(12);var _once2=_interopRequireDefault(_once);var _events=__webpack_require__(25);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var _bind=__webpack_require__(26);/**
 * Augmented Object
 * Base class for other classes to extend from
 * @class Augmented.Object
 * @param {object} options Object options
 * @memberof Augmented
 */var AugmentedObject=function(){function AugmentedObject(options){_classCallCheck(this,AugmentedObject);if(!options){options={};}if(!this._options){this._options={};}Object.assign(this._options,options);if(options&&options.events){this._events=options.events;}else{this._events={};}this._listeningTo={};this._listenId={};this._listeners={};}_createClass(AugmentedObject,[{key:"initialize",/**
     * Initialize the object
     * @method initialize
     * @returns {object} Returns this context
     * @memberof Augmented.Object
     */value:function initialize(){return this;}},{key:"trigger",/**
     * Trigger one or many events, firing all bound callbacks. Callbacks are
     * passed the same arguments as `trigger` is, apart from the event name
     * (unless you're listening on `"all"`, which will cause your callback to
     * receive the true name of the event as the first argument).
     * @method trigger
     * @param {string} name The name of the event
     * @param {any} args any number of additional arguments
     * @returns {object} Returns this context
     * @memberof Augmented.Object
     */value:function trigger(name){//console.log("events", this._events);
//console.log("trigger: name", name);
//console.log("trigger: args", args);
if(this._events){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}//const length = Math.max(0, args.length - 1);
var argsA=Array.isArray(args)?args:Array.from(args);//(length);
//let i = 0;
//for (i = 0; i < length; i++) {
//  argsA[i] = args[i + 1];
//}
//console.log(`calling eventsApi(${triggerApi}, ${this._events}, ${name}, ${void 0}, ${argsA});`);
(0,_events.eventsApi)(_events.triggerApi,this._events,name,void 0,argsA);}return this;}},{key:"once",/**
     * Bind an event to only be triggered a single time. After the first time
     * the callback is invoked, its listener will be removed. If multiple events
     * are passed in using the space-separated syntax, the handler will fire
     * once for each event, not once for a combination of all events.
     * @method once
     * @param {string} name The name of the event
     * @param {function} callback The callback to evoke
     * @param {object} context The context of the callback
     * @returns {object} Returns this context
     * @memberof Augmented.Object
     */value:function once(name,callback,context){// Map the event into a `{event: once}` object.
var events=(0,_events.eventsApi)(this._onceMap,{},name,callback,_bind(this.off,this));if(typeof name==="string"&&context==null){callback=void 0;}return this.on(events,callback,context);}},{key:"off",/**
     * Remove one or many callbacks. If `context` is null, removes all
     * callbacks with that function. If `callback` is null, removes all
     * callbacks for the event. If `name` is null, removes all bound
     * callbacks for all events.
     * @method off
     * @param {string} name The name of the event
     * @param {function} callback The callback to evoke
     * @param {object} context The context of the callback
     * @returns {object} Returns this context
     * @memberof Augmented.Object
     */value:function off(name,callback,context){if(this._events){this._events=(0,_events.eventsApi)(_events.offApi,this._events,name,callback,{context:context,listeners:this._listeners});}return this;}},{key:"stopListening",/**
     * Tell this object to stop listening to either specific events ... or
     * to every object it's currently listening to.
     * @method stopListening
     * @param {object} obj The object to stop listening to
     * @param {string} name The name of the event
     * @param {function} callback The callback to evoke
     * @returns {object} Returns this context
     * @memberof Augmented.Object
     */value:function stopListening(obj,name,callback){var listeningTo=this._listeningTo;if(listeningTo){var ids=obj?[obj._listenId]:Object.keys(listeningTo);var i=0;for(i=0;i<ids.length;i++){var listening=listeningTo[ids[i]];// If listening doesn't exist, this object is not currently
// listening to obj. Break out early.
if(!listening){break;}listening.obj.off(name,callback,this);}}return this;}},{key:"on",/**
     * Bind an event to a `callback` function. Passing `"all"` will bind
     * the callback to all events fired.
     * @method on
     * @param {string} name The name of the event
     * @param {function} callback The callback to evoke
     * @param {object} context The context of the callback
     * @returns {object} Returns this context
     * @memberof Augmented.Object
     */value:function on(name,callback,context){return(0,_events.internalOn)(this,name,callback,context);}},{key:"listenTo",/**
     * Inversion-of-control versions of `on`. Tell *this* object to listen to
     * an event in another object... keeping track of what it's listening to
     * for easier unbinding later.
     * @method listenTo
     * @param {object} obj The object to stop listening to
     * @param {string} name The name of the event
     * @param {function} callback The callback to evoke
     * @returns {object} Returns this context
     * @memberof Augmented.Object
     */value:function listenTo(obj,name,callback){if(obj){var id=obj._listenId||(obj._listenId=(0,_uniqueId2.default)("l"));var listeningTo=this._listeningTo||(this._listeningTo={});var listening=listeningTo[id];// This object is not listening to any other events on `obj` yet.
// Setup the necessary references to track the listening callbacks.
if(!listening){var thisId=this._listenId||(this._listenId=(0,_uniqueId2.default)("l"));listening=listeningTo[id]={obj:obj,objId:id,id:thisId,listeningTo:listeningTo,count:0};}// Bind callbacks on obj, and keep track of them on listening.
(0,_events.internalOn)(obj,name,callback,this,listening);}return this;}},{key:"listenToOnce",/**
     * Inversion-of-control versions of `once`.
     * @method listenToOnce
     * @param {object} obj The object to stop listening to
     * @param {string} name The name of the event
     * @param {function} callback The callback to evoke
     * @returns {object} Returns this context
     * @memberof Augmented.Object
     */value:function listenToOnce(obj,name,callback){// Map the event into a `{event: once}` object.
var events=(0,_events.eventsApi)(this._onceMap,{},name,callback,_bind(this.stopListening,this,obj));return this.listenTo(obj,events);}},{key:"_onceMap",// Reduces the event callbacks into a map of `{event: onceWrapper}`.
// `offer` unbinds the `onceWrapper` after it has been called.
value:function _onceMap(map,name,callback,offer){var _this=this,_arguments=arguments;if(callback){var __once=map[name]=(0,_once2.default)(function(){offer(name,__once);callback.apply(_this,_arguments);});__once._callback=callback;}return map;}},{key:"options",/**
     * The passed options
     * @property options
     * @memberof Augmented.Object
     */get:function get(){return this._options;},set:function set(options){this._options=options;}},{key:"events",/**
     * The Events
     * @property events
     * @memberof Augmented.Object
     */get:function get(){return this._events;},set:function set(events){this._events=events;}}]);return AugmentedObject;}();;exports.default=AugmentedObject;/***/},/* 2 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var idCounter=0;var uniqueId=function uniqueId(prefix){var id=++idCounter;return"{$prefix}"+id;};exports.default=uniqueId;/***/},/* 3 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var extend=function extend(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var i=0;var l=args.length;for(i=1;i<l;i++){var key=void 0;for(key in args[i]){if(args[i].hasOwnProperty(key)){args[0][key]=args[i][key];}}}return args[0];};exports.default=extend;/***/},/* 4 *//***/function(module,exports,__webpack_require__){"use strict";module.exports=function(module){if(!module.webpackPolyfill){module.deprecate=function(){};module.paths=[];// module.parent = undefined by default
if(!module.children)module.children=[];Object.defineProperty(module,"loaded",{enumerable:true,get:function get(){return module.l;}});Object.defineProperty(module,"id",{enumerable:true,get:function get(){return module.i;}});module.webpackPolyfill=1;}return module;};/***/},/* 5 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};/**
 * Augmented.isObject
 * @method isObject
 * @memberof Augmented
 * @param {object} obj The input object
 * @returns {boolean} Returns true of the param is an object
 */var isObject=function isObject(obj){var type=typeof obj==="undefined"?"undefined":_typeof(obj);return type==="function"||type==="object"&&!!obj;};exports.default=isObject;/***/},/* 6 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _schemaGenerator=__webpack_require__(16);var _schemaGenerator2=_interopRequireDefault(_schemaGenerator);var _api=__webpack_require__(27);var _api2=_interopRequireDefault(_api);var _validationError=__webpack_require__(7);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * Augmented.ValidationFramework -
 * The Validation Framework Base Wrapper Class.
 * Provides abstraction for base validation build-in library
 * @constructor Augmented.ValidationFramework
 * @memberof Augmented
 */var ValidationFramework=function(){function ValidationFramework(){_classCallCheck(this,ValidationFramework);this._myValidator=(0,_api2.default)();if(this._myValidator){this._myValidator.addLanguage("en-us",_validationError.ERROR_MESSAGES_DEFAULT);// changed to US
}}_createClass(ValidationFramework,[{key:"supportsValidation",/**
     * Returns if the framework supports validation
     * @method supportsValidation
     * @returns {boolean} Returns true if the framework supports validation
     * @memberof Augmented.ValidationFramework
     */value:function supportsValidation(){return this._myValidator!==null;}},{key:"registerSchema",/**
     * Registers a schema to the Framework
     * @method registerSchema
     * @param {string} identity The identity of the schema
     * @param {object} schema The JSON schema
     * @returns {boolean} Returns true on success
     * @memberof Augmented.ValidationFramework
     */value:function registerSchema(identity,schema){return this._myValidator.addSchema(identity,schema);}},{key:"getSchema",/**
     * Gets a schema
     * @method getSchema
     * @param {string} identity The identity of the schema
     * @returns {object} The JSON schema
     * @memberof Augmented.ValidationFramework
     */value:function getSchema(identity){return this._myValidator.getSchema(identity);}},{key:"getSchemas",/**
     * Gets all schemas
     * @method getSchemas
     * @returns {array} all JSON schemas
     * @memberof Augmented.ValidationFramework
     */value:function getSchemas(){return this._myValidator.getSchemaMap();}},{key:"clearSchemas",/**
     * Clears all schemas
     * @method clearSchemas
     * @memberof Augmented.ValidationFramework
     */value:function clearSchemas(){this._myValidator.dropSchemas();}},{key:"validate",/**
     * Validates data via a schema
     * @method validate
     * @param {object} data The data to validate
     * @param {object} schema The JSON schema
     * @returns {object} Returns the validation object
     * @memberof Augmented.ValidationFramework
     */value:function validate(data,schema){return this._myValidator.validateMultiple(data,schema);}},{key:"getValidationMessages",/**
     * Validates data via a schema
     * @method getValidationMessages
     * @returns {array} Returns the validation messages
     * @memberof Augmented.ValidationFramework
     */value:function getValidationMessages(){return this._myValidator.error;}},{key:"generateSchema",/**
     * Validates data via a schema
     * @method generateSchema
     * @param {Augmented.Model|object} model The model generate from
     * @returns {object} Returns the schema
     * @memberof Augmented.ValidationFramework
     */value:function generateSchema(model){var data=model;/*TODO support model
      if (model && model instanceof Model) {
        data = model.toJSON();
      }*/return(0,_schemaGenerator2.default)(data);}}]);return ValidationFramework;}();;exports.default=ValidationFramework;/***/},/* 7 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ERROR_CODES={INVALID_TYPE:0,ENUM_MISMATCH:1,ANY_OF_MISSING:10,ONE_OF_MISSING:11,ONE_OF_MULTIPLE:12,NOT_PASSED:13,// Numeric errors
NUMBER_MULTIPLE_OF:100,NUMBER_MINIMUM:101,NUMBER_MINIMUM_EXCLUSIVE:102,NUMBER_MAXIMUM:103,NUMBER_MAXIMUM_EXCLUSIVE:104,NUMBER_NOT_A_NUMBER:105,// String errors
STRING_LENGTH_SHORT:200,STRING_LENGTH_LONG:201,STRING_PATTERN:202,// Object errors
OBJECT_PROPERTIES_MINIMUM:300,OBJECT_PROPERTIES_MAXIMUM:301,OBJECT_REQUIRED:302,OBJECT_ADDITIONAL_PROPERTIES:303,OBJECT_DEPENDENCY_KEY:304,// Array errors
ARRAY_LENGTH_SHORT:400,ARRAY_LENGTH_LONG:401,ARRAY_UNIQUE:402,ARRAY_ADDITIONAL_ITEMS:403,// Custom/user-defined errors
FORMAT_CUSTOM:500,KEYWORD_CUSTOM:501,// Schema structure
CIRCULAR_REFERENCE:600,// Non-standard validation options
UNKNOWN_PROPERTY:1000};// TODO: bundle this
var ERROR_MESSAGES_DEFAULT={INVALID_TYPE:"Invalid type: {type} (expected {expected})",ENUM_MISMATCH:"No enum match for: {value}",ANY_OF_MISSING:"Data does not match any schemas from \"anyOf\"",ONE_OF_MISSING:"Data does not match any schemas from \"oneOf\"",ONE_OF_MULTIPLE:"Data is valid against more than one schema from \"oneOf\": indices {index1} and {index2}",NOT_PASSED:"Data matches schema from \"not\"",// Numeric errors
NUMBER_MULTIPLE_OF:"Value {value} is not a multiple of {multipleOf}",NUMBER_MINIMUM:"Value {value} is less than minimum {minimum}",NUMBER_MINIMUM_EXCLUSIVE:"Value {value} is equal to exclusive minimum {minimum}",NUMBER_MAXIMUM:"Value {value} is greater than maximum {maximum}",NUMBER_MAXIMUM_EXCLUSIVE:"Value {value} is equal to exclusive maximum {maximum}",NUMBER_NOT_A_NUMBER:"Value {value} is not a valid number",// String errors
STRING_LENGTH_SHORT:"String is too short ({length} chars), minimum {minimum}",STRING_LENGTH_LONG:"String is too long ({length} chars), maximum {maximum}",STRING_PATTERN:"String does not match pattern: {pattern}",// Object errors
OBJECT_PROPERTIES_MINIMUM:"Too few properties defined ({propertyCount}), minimum {minimum}",OBJECT_PROPERTIES_MAXIMUM:"Too many properties defined ({propertyCount}), maximum {maximum}",OBJECT_REQUIRED:"Missing required property: {key}",OBJECT_ADDITIONAL_PROPERTIES:"Additional properties not allowed",OBJECT_DEPENDENCY_KEY:"Dependency failed - key must exist: {missing} (due to key: {key})",// Array errors
ARRAY_LENGTH_SHORT:"Array is too short ({length}), minimum {minimum}",ARRAY_LENGTH_LONG:"Array is too long ({length}), maximum {maximum}",ARRAY_UNIQUE:"Array items are not unique (indices {match1} and {match2})",ARRAY_ADDITIONAL_ITEMS:"Additional items not allowed",// Format errors
FORMAT_CUSTOM:"Format validation failed ({message})",KEYWORD_CUSTOM:"Keyword failed: {key} ({message})",// Schema structure
CIRCULAR_REFERENCE:"Circular $refs: {urls}",// Non-standard validation options
UNKNOWN_PROPERTY:"Unknown property (not in schema)"};var ValidationError=function(){//extends Error {
function ValidationError(code,message,params,dataPath,schemaPath,subErrors){_classCallCheck(this,ValidationError);// Pass remaining arguments (including vendor specific ones) to parent constructor
//super(code, message, params);
//Error.call(this);
if(code===undefined){throw new Error("No code supplied for error: "+message);}this.message=message;this.params=params;this.code=code;this.dataPath=dataPath||"";this.schemaPath=schemaPath||"";this.subErrors=subErrors||null;var err=new Error(this.message);this.stack=err.stack||err.stacktrace;if(!this.stack){try{throw err;}catch(err2){this.stack=err2.stack||err2.stacktrace;}}this.name="ValidationError";}_createClass(ValidationError,[{key:"prefixWith",value:function prefixWith(dataPrefix,schemaPrefix){if(dataPrefix!==null){dataPrefix=dataPrefix.replace(/~/g,"~0").replace(/\//g,"~1");this.dataPath="/"+dataPrefix+this.dataPath;}if(schemaPrefix!==null){schemaPrefix=schemaPrefix.replace(/~/g,"~0").replace(/\//g,"~1");this.schemaPath="/"+schemaPrefix+this.schemaPath;}if(this.subErrors!==null){var i=0,l=this.subErrors.length;for(i=0;i<l;i++){this.subErrors[i].prefixWith(dataPrefix,schemaPrefix);}}return this;}}]);return ValidationError;}();;var ErrorCodeLookup={},key=void 0;for(key in ERROR_CODES){ErrorCodeLookup[ERROR_CODES[key]]=key;}exports.ERROR_CODES=ERROR_CODES;exports.ERROR_MESSAGES_DEFAULT=ERROR_MESSAGES_DEFAULT;exports.ValidationError=ValidationError;exports.ErrorCodeLookup=ErrorCodeLookup;/***/},/* 8 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};/**
 * Augmented.isString -
 * checks if a value is a String
 * @method isString
 * @memberof Augmented
 * @param {string} variable to check
 * @returns {boolean} true if value is a string
 */var isString=function isString(val){return typeof val==="string"||!!val&&(typeof val==="undefined"?"undefined":_typeof(val))==="object"&&Object.prototype.toString.call(val)==="[object String]";};exports.default=isString;/***/},/* 9 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});/**
 * Augmented.isFunction -
 * returns true if called name is a function
 * simular to jQuery .isFunction method
 * @method Augmented.isFunction
 * @param {function} name The name of the function to test
 * @memberof Augmented
 * @returns true if called name is a function
 */var isFunction=function isFunction(name){return Object.prototype.toString.call(name)=="[object Function]";};exports.default=isFunction;/***/},/* 10 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});/**
 * Augmented.Security.ClientType - Security client type
 * @enum {Symbol}
 * @memberof Augmented.Security
 * @name Augmented.Security.ClientType
 * @property {Symbol} OAuth2 The OAuth2 type
 * @property {Symbol} ACL The ACL type
 */var ClientType={};ClientType.OAUTH2=Symbol("oauth2");ClientType.ACL=Symbol("acl");exports.default=ClientType;/***/},/* 11 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});/**
 * Sorts an array of objects by propery in object
 * @function sortObjects
 * @memberof Augmented.Utility
 * @param {array} array The object array to sort
 * @param {object} key The property to sort by
 * @returns {array} The sorted array
 */var sortObjects=exports.sortObjects=function sortObjects(array,key){return array.sort(function(a,b){var x=a[key],y=b[key];return x<y?-1:x>y?1:0;});};/**
 * Split the array into halves and merge them recursively
 * @function mergeSort
 * @memberof Augmented.Utility
 * @param {array} array The array to sort
 * @returns {array} The sorted array
 */var mergeSort=exports.mergeSort=function mergeSort(arr){if(arr.length===1){// return once we hit an array with a single item
return arr;}var middle=Math.floor(arr.length/2);// get the middle item of the array rounded down
var left=arr.slice(0,middle);// items on the left side
var right=arr.slice(middle);// items on the right side
return merge(mergeSort(left),mergeSort(right));};/*
 * compare the arrays item by item and return the concatenated result
 */var merge=function merge(left,right){var result=[];var indexLeft=0;var indexRight=0;while(indexLeft<left.length&&indexRight<right.length){if(left[indexLeft]<right[indexRight]){result.push(left[indexLeft]);indexLeft++;}else{result.push(right[indexRight]);indexRight++;}}return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));};/**
 * Quick Sort implimentation for Arrays -
 * @function QuickSort
 * @memberof Augmented.Utility
 * @param {Array} arr Array to Sort
 * @returns {Array} Returns a sorted array
 */var quickSort=exports.quickSort=function quickSort(arr){//if array is empty
if(arr.length===0){return[];}var i=1;var l=arr.length,left=[],right=[],pivot=arr[0];//go through each element in array
for(i=1;i<l;i++){if(arr[i]<pivot){left.push(arr[i]);}else{right.push(arr[i]);}}return quickSort(left).concat(pivot,quickSort(right));};/**
 * Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.
 * It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
 * @function mergeSort
 * @memberof Augmented.Utility
 * @param {array} array The array to sort
 * @returns {array} The sorted array
 */var insertionSort=exports.insertionSort=function insertionSort(unsortedList){var sortedList=[];if(unsortedList){sortedList=unsortedList.slice();var len=sortedList.length;var i=void 0,j=void 0,tmp=void 0;for(i=1;i<len;i++){tmp=sortedList[i];//Copy of the current element.
/*Check through the sorted part and compare with the number in tmp. If large, shift the number*/for(j=i-1;j>=0&&sortedList[j]>tmp;j--){//Shift the number
sortedList[j+1]=sortedList[j];}//Insert the copied number at the correct position
//in sorted part.
sortedList[j+1]=tmp;}}return sortedList;};/**
 * Simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.
 * @function mergeSort
 * @memberof Augmented.Utility
 * @param {array} array The array to sort
 * @returns {array} The sorted array
 */var bubbleSort=exports.bubbleSort=function bubbleSort(a){var sorted=[];if(a){sorted=a.slice();var swapped=void 0,i=void 0,tmp=void 0;var l=sorted.length-1;do{swapped=false;for(i=0;i<l;i++){if(sorted[i]>sorted[i+1]){tmp=sorted[i];sorted[i]=sorted[i+1];sorted[i+1]=tmp;swapped=true;}}}while(swapped);}return sorted;};/***/},/* 12 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _before=__webpack_require__(13);var _before2=_interopRequireDefault(_before);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var once=function once(func){return(0,_before2.default)(2,func);};exports.default=once;/***/},/* 13 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _arguments=arguments;var before=function before(nn,func){var result=void 0,n=void 0;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=Number.parseInt(nn);return function(){if(--n>0){result=func.apply(undefined,_arguments);}if(n<=1){func=undefined;}return result;};};exports.default=before;/***/},/* 14 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _object=__webpack_require__(1);var _object2=_interopRequireDefault(_object);var _extend=__webpack_require__(3);var _extend2=_interopRequireDefault(_extend);var _uniqueId=__webpack_require__(2);var _uniqueId2=_interopRequireDefault(_uniqueId);var _allKeys=__webpack_require__(15);var _allKeys2=_interopRequireDefault(_allKeys);var _validationFramework=__webpack_require__(6);var _validationFramework2=_interopRequireDefault(_validationFramework);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof2(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}// for now
var _clone=__webpack_require__(18);var _result=__webpack_require__(29);var _isEmpty=__webpack_require__(30);var _has=__webpack_require__(31);var _isEqual=__webpack_require__(32);var _defaults=__webpack_require__(33);var _iteratee=__webpack_require__(34);var _defer=__webpack_require__(35);var _escape=__webpack_require__(36);var wrapError=function wrapError(model,options){if(model){var error=options.error;options.error=function(resp){if(error){error.call(options.context,model,resp,options);}model.trigger("error",model,resp,options);};}};/**
 * AbstractModel <br/>
 * Supports: <ul>
 * <li>Validation and Schemas</li>
 * <li>Security</li>
 * </ul>
 * @constructor AbstractModel
 * @memberof Augmented
 * @extends Augmented.Object
 */var AbstractModel=function(_AugmentedObject){_inherits(AbstractModel,_AugmentedObject);function AbstractModel(attributes,options){_classCallCheck(this,AbstractModel);var _this=_possibleConstructorReturn(this,(AbstractModel.__proto__||Object.getPrototypeOf(AbstractModel)).call(this,options));_this.id=0;_this.idAttribute="id";// ????
_this.cidPrefix="c";_this.defaults={};_this.validationError=null;_this.urlRoot="";_this._pending=false;_this._changing=false;_this._previousAttributes=null;_this._attributes=attributes?attributes:{};if(!options){options={};}_this.schema=null;_this.validationMessages={valid:true};if(options&&options.schema){_this.schema=options.schema;}for(var _len=arguments.length,args=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){args[_key-2]=arguments[_key];}_this.preinitialize(args);_this.cid=(0,_uniqueId2.default)(_this.cidPrefix);if(options&&options.collection){_this.collection=options.collection;}var attrs=void 0;if(options&&options.parse){attrs=_this.parse(attrs,options)||{};}_this.defaults=_result(_this,"defaults");attrs=_defaults((0,_extend2.default)({},_this.defaults,attrs),_this.defaults);_this.set(attrs,options);_this.changed={};_this.initialize(args);return _this;}_createClass(AbstractModel,[{key:"preinitialize",/**
     * Schema property
     * @property {object} schema The JSON schema from this model
     * @memberof AbstractModel
     *//**
     * Validation Message property
     * @property {object} validationMessages The property holding validation message data
     * @memberof AbstractModel
     */value:function preinitialize(){}},{key:"initialize",value:function initialize(){}},{key:"get",value:function get(attribute){return this._attributes[attribute];}},{key:"set",// Set a hash of model attributes on the object, firing `"change"`. This is
// the core primitive operation of a model, updating the data and notifying
// anyone who needs to know about the change in state. The heart of the beast.
value:function set(key,val,options){if(key===null){return this;}// Handle both `"key", value` and `{key: value}` -style arguments.
var attrs=void 0;if((typeof key==="undefined"?"undefined":_typeof(key))==="object"){attrs=key;options=val;}else{(attrs={})[key]=val;}if(!options){options={};}// Run validation.
if(!this._validate(attrs,options)){return false;}// Extract attributes and options.
var unset=options.unset;var silent=options.silent;var changes=[];var changing=this._changing;this._changing=true;if(!changing){this._previousAttributes=_clone(this._attributes);this.changed={};}var current=this._attributes;var changed=this.changed;var prev=this._previousAttributes;var attr=void 0;// For each `set` attribute, update or delete the current value.
for(attr in attrs){val=attrs[attr];if(!_isEqual(current[attr],val)){changes.push(attr);}if(!_isEqual(prev[attr],val)){changed[attr]=val;}else{delete changed[attr];}unset?delete current[attr]:current[attr]=val;}// Update the `id`.
if(this.idAttribute in attrs){this.id=this.get(this.idAttribute);}// Trigger all relevant attribute changes.
if(!silent){if(changes.length){this._pending=options;}var i=0;for(i=0;i<changes.length;i++){this.trigger("change:"+changes[i],this,current[changes[i]],options);}}// You might be wondering why there's a `while` loop here. Changes can
// be recursively nested within `"change"` events.
if(changing){return this;}if(!silent){while(this._pending){options=this._pending;this._pending=false;this.trigger("change",this,options);}}this._pending=false;this._changing=false;return this;}},{key:"escape",value:function escape(attribute){return _escape(this.get(attr));}},{key:"has",value:function has(attribute){return this.get(attr)!==null;}},{key:"matches",// Special-cased proxy to underscore's `matches` method.
value:function matches(attrs){return!!_iteratee(attrs,this)(this._attributes);}},{key:"unset",// Remove an attribute from the model, firing `"change"`. `unset` is a noop
// if the attribute doesn't exist.
value:function unset(attr,options){return this.set(attr,void 0,(0,_extend2.default)({},options,{unset:true}));}},{key:"clear",// Clear all attributes on the model, firing `"change"`.
value:function clear(options){var attrs={};for(var key in this._attributes){attrs[key]=void 0;}return this.set(attrs,(0,_extend2.default)({},options,{unset:true}));}},{key:"toJSON",value:function toJSON(){return _clone(this._attributes);}},{key:"fetch",//– sync x
// Fetch the model from the server, merging the response with the model's
// local attributes. Any changed attributes will trigger a "change" event.
value:function fetch(options){options=(0,_extend2.default)({parse:true},options);var model=this;var success=options.success;options.success=function(resp){var serverAttrs=options.parse?model.parse(resp,options):resp;if(!model.set(serverAttrs,options)){return false;}if(success){success.call(options.context,model,resp,options);}model.trigger("sync",model,resp,options);};wrapError(this,options);return this.sync("read",this,options);}},{key:"save",// Set a hash of model attributes, and sync the model to the server.
// If the server returns an attributes hash that differs, the model's
// state will be `set` again.
value:function save(key,val,options){// Handle both `"key", value` and `{key: value}` -style arguments.
var attrs=void 0;if(key==null||(typeof key==="undefined"?"undefined":_typeof(key))==="object"){attrs=key;options=val;}else{(attrs={})[key]=val;}options=(0,_extend2.default)({validate:true,parse:true},options);var wait=options.wait;// If we're not waiting and attributes exist, save acts as
// `set(attr).save(null, opts)` with validation. Otherwise, check if
// the model will be valid when the attributes, if any, are set.
if(attrs&&!wait){if(!this.set(attrs,options)){return false;}}else if(!this._validate(attrs,options)){return false;}// After a successful server-side save, the client is (optionally)
// updated with the server-side state.
var model=this;var success=options.success;var attributes=this._attributes;options.success=function(resp){// Ensure attributes are restored during synchronous saves.
model.attributes=attributes;var serverAttrs=options.parse?model.parse(resp,options):resp;if(wait){serverAttrs=(0,_extend2.default)({},attrs,serverAttrs);}if(serverAttrs&&!model.set(serverAttrs,options)){return false;}if(success){success.call(options.context,model,resp,options);}model.trigger("sync",model,resp,options);};wrapError(this,options);// Set temporary attributes if `{wait: true}` to properly find new ids.
if(attrs&&wait){this._attributes=(0,_extend2.default)({},attributes,attrs);}var method=this.isNew()?"create":options.patch?"patch":"update";if(method==="patch"&&!options.attrs){options.attrs=attrs;}var request=this.sync(method,this,options);// Restore attributes.
this._attributes=attributes;return request;}},{key:"destroy",// Destroy this model on the server if it was already persisted.
// Optimistically removes the model from its collection, if it has one.
// If `wait: true` is passed, waits for the server to respond before removal.
value:function destroy(options){options=options?_clone(options):{};var model=this;var success=options.success;var wait=options.wait;var destroy=function destroy(){model.stopListening();model.trigger("destroy",model,model.collection,options);};options.success=function(resp){if(wait){destroy();}if(success){success.call(options.context,model,resp,options);}if(!model.isNew()){model.trigger("sync",model,resp,options);}};var request=false;if(this.isNew()){_defer(options.success);}else{wrapError(this,options);request=this.sync("delete",this,options);}if(!wait)destroy();return request;}},{key:"url",// Default URL for the model's representation on the server -- if you're
// using Backbone's restful methods, override this to change the endpoint
// that will be called.
value:function url(){var base=_result(this,"urlRoot")||_result(this.collection,"url")||urlError();if(this.isNew()){return base;}var id=this.get(this.idAttribute);return base.replace(/[^\/]$/,"$&/")+encodeURIComponent(id);}},{key:"keys",value:function keys(){return Object.keys(this._attributes);}},{key:"values",value:function values(){return Object.values(this._attributes);}},{key:"isEmpty",/* if needed these can be used from lodash or underscore against the model's attributes
      pairs() { // ??
    
      };
    
      invert() { // ??
    
      };
    
      pick() { // ??
    
      };
    
      omit() { // ??
    
      };
    
      chain() { // ??
    
      };
    */value:function isEmpty(){return false;}},{key:"parse",// **parse** converts a response into the hash of attributes to be `set` on
// the model. The default implementation is just to pass the response along.
value:function parse(resp,options){return resp;}},{key:"clone",// Create a new model with identical attributes to this one.
value:function clone(){return new this.constructor(this._attributes);}},{key:"isNew",// A model is new if it has never been saved to the server, and lacks an id.
value:function isNew(){return!this.has(this.idAttribute);}},{key:"isValid",// Check if the model is currently in a valid state.
value:function isValid(options){return this._validate({},(0,_extend2.default)({},options,{validate:true}));}},{key:"hasChanged",// Determine if the model has changed since the last `"change"` event.
// If you specify an attribute name, determine if that attribute has changed.
value:function hasChanged(attr){if(attr==null){return!_isEmpty(this.changed);}return _has(this.changed,attr);}},{key:"changedAttributes",// Return an object containing all the attributes that have changed, or
// false if there are no changed attributes. Useful for determining what
// parts of a view need to be updated and/or what attributes need to be
// persisted to the server. Unset attributes will be set to undefined.
// You can also pass an attributes object to diff against the model,
// determining if there *would be* a change.
value:function changedAttributes(diff){if(!diff){return this.hasChanged()?_clone(this.changed):false;}var old=this._changing?this._previousAttributes:this._attributes;var changed={};var hasChanged=void 0;for(var _attr in diff){var val=diff[_attr];if(_isEqual(old[_attr],val)){continue;}changed[_attr]=val;hasChanged=true;}return hasChanged?changed:false;}},{key:"previous",// Get the previous value of an attribute, recorded at the time the last
// `"change"` event was fired.
value:function previous(attr){if(attr==null||!this._previousAttributes){return null;}return this._previousAttributes[attr];}},{key:"previousAttributes",// Get all of the attributes of the model at the time of the previous
// `"change"` event.
value:function previousAttributes(){return _clone(this._previousAttributes);}},{key:"_validate",// Run validation against the next complete set of model attributes,
// returning `true` if all is well. Otherwise, fire an `"invalid"` event.
value:function _validate(attrs,options){if(!options.validate||!this.validate){return true;}attrs=(0,_extend2.default)({},this._attributes,attrs);var error=this.validationError=this.validate(attrs,options)||null;if(!error){return true;}this.trigger("invalid",this,error,(0,_extend2.default)(options,{validationError:error}));return false;}},{key:"supportsValidation",/**
     * supportsValidation - Returns True if this model supports validation
     * @method supportsValidation
     * @memberof AbstractModel
     * @returns {boolean} Returns True if this model supports validation
     */value:function supportsValidation(){if(this.schema!==null){return true;}return false;}},{key:"isValid",/**
     * isValid - Returns True if this model is valid
     * @method isValid
     * @memberof AbstractModel
     * @returns {boolean} Returns True if this model is valid
     */value:function isValid(){this.validate();return this.validationMessages.valid;}},{key:"validate",/**
     * Validates the model
     * @method validate
     * @memberof AbstractModel
     * @returns {array} Returns array of messages from validation
     */value:function validate(){var v=new _validationFramework2.default();if(this.supportsValidation()&&v.supportsValidation()){// validate from Validator
this.validationMessages=v.validate(this.toJSON(),this.schema);}else{this.validationMessages.valid=true;}return this.validationMessages;}},{key:"getValidationMessages",/**
     * Gets the validation messages only in an array
     * @method getValidationMessages
     * @memberof AbstractModel
     * @returns {array} Returns array of messages from validation
     */value:function getValidationMessages(){var messages=[];if(this.validationMessages&&this.validationMessages.errors){var l=this.validationMessages.errors.length;var i=0;for(i=0;i<l;i++){messages.push(this.validationMessages.errors[i].message+" from "+this.validationMessages.errors[i].dataPath);}}return messages;}},{key:"sync",/**
     * Model.sync - Sync model data to bound REST call
     * @method sync
     * @memberof AbstractModel
     */value:function sync(method,model,options){}},{key:"reset",/**
     * Model.reset - clear and rewrite the model with passed data
     * @method reset
     * @memberof AbstractModel
     * @param {object} data The data to replace the model with (optional)
     */value:function reset(data){this.clear();if(data){this.set(data);}}},{key:"isEmpty",/**
     * Model.isEmpty - returns true is the model is empty
     * @method isEmpty
     * @memberof AbstractModel
     * @returns {boolean} returns true is the model is empty
     */value:function isEmpty(){return this._attributes?Object.keys(this._attributes).length===0:true;}},{key:"toString",/**
     * toString - returns the model data as a string
     * @method toString
     * @memberof AbstractModel
     * @returns {string}returns the model data as a string
     */value:function toString(){return JSON.stringify(this.toJSON());}},{key:"fetch",/**
     * fetch - Fetches the model as a 'get'
     * @method fetch
     * @memberof AbstractModel
     */value:function fetch(options){this.sync("read",this,options);}},{key:"save",/**
     * save - Saves the model as a 'create'
     * @method save
     * @memberof AbstractModel
     */value:function save(options){this.sync("create",this,options);}},{key:"update",/**
     * update - Updates the model as a 'update'
     * @method update
     * @memberof AbstractModel
     */value:function update(options){this.sync("update",this,options);}},{key:"destroy",/**
     * destroy - Deletes the model as a 'delete'
     * @method destroy
     * @memberof AbstractModel
     */value:function destroy(options){this.sync("delete",this,options);}}]);return AbstractModel;}(_object2.default);exports.default=AbstractModel;;/***/},/* 15 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _isObject=__webpack_require__(5);var _isObject2=_interopRequireDefault(_isObject);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * Augmented.allKeys
 * @method allKeys
 * @memberof Augmented
 * @param {object} obj The input object
 * @returns {array} Returns the array of ALL keys including prototyped
 */var allKeys=function allKeys(obj){if(!(0,_isObject2.default)(obj)){return[];}return Object.getOwnPropertyNames(obj);};exports.default=allKeys;/***/},/* 16 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};var SCHEMA_HEADER={"$schema":"http://json-schema.org/draft-04/schema#","title":"model","description":"Generated Schema","type":"object","properties":{}};/**
 * <p>Augmented.Utility.SchemaGenerator<br/>
 *
 * Genrate a schema from a set of data</p>
 * @constructor Augmented.Utility.SchemaGenerator
 * @param {object} data a dataset to produce a schema from
 * @memberof Augmented.Utility
 */var SchemaGenerator=function SchemaGenerator(data){var obj=SCHEMA_HEADER;var i=void 0,d=void 0,dkey=void 0,p=void 0,keys=Object.keys(data),l=keys.length;for(i=0;i<l;i++){d=keys[i];for(dkey in d){if(d.hasOwnProperty(dkey)){p=obj.properties[d]={};var t=_typeof(data[d]);if(t==="object"){t=Array.isArray(data[d])?"array":"object";}else if(t==="number"){t=Number.isInteger(data[d])?"integer":"number";}p.type=t;p.description=String(d);}}}return obj;};exports.default=SchemaGenerator;/***/},/* 17 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};/**
 * @see https://github.com/geraintluff/uri-templates
 * but with all the de-substitution stuff removed
 */var URI_TEMPLATE_GLOBAL_MODIFIERS=exports.URI_TEMPLATE_GLOBAL_MODIFIERS={"+":true,"#":true,".":true,"/":true,";":true,"?":true,"&":true};var URI_TEMPLATE_SUFFICES=exports.URI_TEMPLATE_SUFFICES={"*":true};// parseURI() and resolveUrl() are from https://gist.github.com/1088850
// - released as public domain by author ("Yaffle") - see comments on
// gist
var parseURI=exports.parseURI=function parseURI(url){var m=String(url).replace(/^\s+|\s+$/g,'').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);// authority = '//' + user + ':' + pass '@' + hostname + ':' port
return m?{href:m[0]||'',protocol:m[1]||'',authority:m[2]||'',host:m[3]||'',hostname:m[4]||'',port:m[5]||'',pathname:m[6]||'',search:m[7]||'',hash:m[8]||''}:null;};var removeDotSegments=exports.removeDotSegments=function removeDotSegments(input){var output=[];input.replace(/^(\.\.?(\/|$))+/,'').replace(/\/(\.(\/|$))+/g,'/').replace(/\/\.\.$/,'/../').replace(/\/?[^\/]*/g,function(p){if(p==='/..'){output.pop();}else{output.push(p);}});return output.join('').replace(/^\//,input.charAt(0)==='/'?'/':'');};var resolveUrl=exports.resolveUrl=function resolveUrl(base,href){// RFC 3986
href=parseURI(href||'');base=parseURI(base||'');return!href||!base?null:(href.protocol||base.protocol)+(href.protocol||href.authority?href.authority:base.authority)+removeDotSegments(href.protocol||href.authority||href.pathname.charAt(0)==='/'?href.pathname:href.pathname?(base.authority&&!base.pathname?'/':'')+base.pathname.slice(0,base.pathname.lastIndexOf('/')+1)+href.pathname:base.pathname)+(href.protocol||href.authority||href.pathname?href.search:href.search||base.search)+href.hash;};var getDocumentUri=exports.getDocumentUri=function getDocumentUri(uri){return uri.split('#')[0];};var isTrustedUrl=exports.isTrustedUrl=function isTrustedUrl(baseUrl,testUrl){if(testUrl.substring(0,baseUrl.length)===baseUrl){var remainder=testUrl.substring(baseUrl.length);if(testUrl.length>0&&testUrl.charAt(baseUrl.length-1)==="/"||remainder.charAt(0)==="#"||remainder.charAt(0)==="?"){return true;}}return false;};var normSchema=exports.normSchema=function normSchema(schema,baseUri){if(schema&&(typeof schema==="undefined"?"undefined":_typeof(schema))==="object"){if(baseUri===undefined){baseUri=schema.id;}else if(typeof schema.id==="string"){baseUri=resolveUrl(baseUri,schema.id);schema.id=baseUri;}if(Array.isArray(schema)){var i=0,l=schema.length;for(i=0;i<l;i++){normSchema(schema[i],baseUri);}}else{if(typeof schema['$ref']==="string"){schema['$ref']=resolveUrl(baseUri,schema['$ref']);}for(var key in schema){if(key!=="enum"){normSchema(schema[key],baseUri);}}}}};/***/},/* 18 *//***/function(module,exports,__webpack_require__){"use strict";/* WEBPACK VAR INJECTION */(function(global,module){var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',promiseTag='[object Promise]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=(false?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(false?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */function addMapEntry(map,pair){// Don't return `map.set` because it's not chainable in IE 11.
map.set(pair[0],pair[1]);return map;}/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */function addSetEntry(set,value){// Don't return `set.add` because it's not chainable in IE 11.
set.add(value);return set;}/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function arrayEach(array,iteratee){var index=-1,length=array?array.length:0;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array?array.length:0;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
// despite having improperly defined `toString` methods.
var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var objectToString=objectProto.toString;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,_Symbol=root.Symbol,Uint8Array=root.Uint8Array,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeKeys=overArg(Object.keys,Object);/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView'),Map=getNative(root,'Map'),Promise=getNative(root,'Promise'),Set=getNative(root,'Set'),WeakMap=getNative(root,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};}/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){return this.has(key)&&delete this.__data__[key];}/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];}/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}return true;}/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){return getMapData(this,key)['delete'](key);}/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){getMapData(this,key).set(key,value);return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){this.__data__=new ListCache(entries);}/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache();}/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){return this.__data__['delete'](key);}/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var cache=this.__data__;if(cache instanceof ListCache){var pairs=cache.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);return this;}cache=this.__data__=new MapCache(pairs);}cache.set(key,value);return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
// Safari 9 makes `arguments.length` enumerable in strict mode.
var result=isArray(value)||isArguments(value)?baseTimes(value.length,String):[];var length=result.length,skipIndexes=!!length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(key=='length'||isIndex(key,length)))){result.push(key);}}return result;}/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){object[key]=value;}}/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */function baseClone(value,isDeep,isFull,customizer,key,object,stack){var result;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){if(isHostObject(value)){return object?value:{};}result=initCloneObject(isFunc?{}:value);if(!isDeep){return copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,baseClone,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(!isArr){var props=isFull?getAllKeys(value):keys(value);}arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,isDeep,isFull,customizer,key,value,stack));});return result;}/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */function baseCreate(proto){return isObject(proto)?objectCreate(proto):{};}/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){return objectToString.call(value);}/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var result=new buffer.constructor(buffer.length);buffer.copy(result);return result;}/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),true):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor());}/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),true):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor());}/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function copyObject(source,props,object,customizer){object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;assignValue(object,key,newValue===undefined?source[key]:newValue);}return object;}/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=nativeGetSymbols?overArg(nativeGetSymbols,Object):stubArray;/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=objectToString.call(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):undefined;if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */function initCloneArray(array){var length=array.length,result=array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object);}}/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */function clone(value){return baseClone(value,false,true);}/**
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
 */function eq(value,other){return value===other||value!==value&&other!==other;}/**
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
 */function isArguments(value){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}/**
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
 */var isArray=Array.isArray;/**
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
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
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
 */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;/**
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
 */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 8-9 which returns 'object' for typed array and other constructors.
var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}/**
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
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
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
 */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return!!value&&(type=='object'||type=='function');}/**
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
 */function isObjectLike(value){return!!value&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}/**
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
 */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[];}/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}module.exports=clone;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(0),__webpack_require__(4)(module));/***/},/* 19 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var some=function some(arr,func){if(Array.isArray(arr)){return arr.some(func);}return false;};exports.default=some;/***/},/* 20 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});// Splices `insert` into `array` at index `at`.
var splice=function splice(array,insert,at){at=Math.min(Math.max(at,0),array.length);var tail=Array(array.length-at);var length=insert.length;var i=void 0;for(i=0;i<tail.length;i++){tail[i]=array[i+at];}for(i=0;i<length;i++){array[i+at]=insert[i];}for(i=0;i<tail.length;i++){array[i+length+at]=tail[i];}};exports.default=splice;/***/},/* 21 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});/**
 * Augmented.Configuration - a set of configuration properties for the framework
 * @enum Configuration
 * @memberof Augmented
 * @property {string} LoggerLevel The level of the framework internal logger
 * @property {string} MessageBundle - the base name for messages in the framework (default: Messages)
 * @property {number} AsynchronousQueueTimeout the default milisecond timeout (default: 2000)
 * @property {number} ApplicationInitProcessTimeout the application init even timeout (default: 1000)
 * @todo change logger level to error
 */var Configuration={LoggerLevel:"info",MessageBundle:"Messages",AsynchronousQueueTimeout:2000,ApplicationInitProcessTimeout:1000};exports.default=Configuration;/***/},/* 22 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var pad=function pad(p,str,padLeft){if(typeof str==="undefined"){return p;}if(padLeft){return""+p+str;}else{return""+str+p;}};exports.default=pad;/***/},/* 23 *//***/function(module,exports,__webpack_require__){"use strict";var _utility=__webpack_require__(24);var Utility=_interopRequireWildcard(_utility);var _sort=__webpack_require__(11);var _object=__webpack_require__(1);var _object2=_interopRequireDefault(_object);var _abstractModel=__webpack_require__(14);var _abstractModel2=_interopRequireDefault(_abstractModel);var _collection=__webpack_require__(37);var _collection2=_interopRequireDefault(_collection);var _stack=__webpack_require__(39);var _stack2=_interopRequireDefault(_stack);var _map=__webpack_require__(40);var _map2=_interopRequireDefault(_map);var _configuration=__webpack_require__(21);var _configuration2=_interopRequireDefault(_configuration);var _queue=__webpack_require__(41);var _queue2=_interopRequireDefault(_queue);var _logger=__webpack_require__(42);var Logger=_interopRequireWildcard(_logger);var _application=__webpack_require__(43);var _application2=_interopRequireDefault(_application);var _resourceBundle=__webpack_require__(44);var _schemaGenerator=__webpack_require__(16);var _schemaGenerator2=_interopRequireDefault(_schemaGenerator);var _validationFramework=__webpack_require__(6);var _validationFramework2=_interopRequireDefault(_validationFramework);var _security=__webpack_require__(45);var Security=_interopRequireWildcard(_security);var _clientType=__webpack_require__(10);var _clientType2=_interopRequireDefault(_clientType);var _isString=__webpack_require__(8);var _isString2=_interopRequireDefault(_isString);var _isFunction=__webpack_require__(9);var _isFunction2=_interopRequireDefault(_isFunction);var _extend=__webpack_require__(3);var _extend2=_interopRequireDefault(_extend);var _pad=__webpack_require__(22);var _pad2=_interopRequireDefault(_pad);var _uniqueId=__webpack_require__(2);var _uniqueId2=_interopRequireDefault(_uniqueId);var _has=__webpack_require__(47);var _has2=_interopRequireDefault(_has);var _isObject=__webpack_require__(5);var _isObject2=_interopRequireDefault(_isObject);var _allKeys=__webpack_require__(15);var _allKeys2=_interopRequireDefault(_allKeys);var _create=__webpack_require__(48);var _create2=_interopRequireDefault(_create);var _result=__webpack_require__(49);var _result2=_interopRequireDefault(_result);var _arrayHas=__webpack_require__(50);var _arrayHas2=_interopRequireDefault(_arrayHas);var _exec=__webpack_require__(51);var _exec2=_interopRequireDefault(_exec);var _isDefined=__webpack_require__(52);var _isDefined2=_interopRequireDefault(_isDefined);var _some=__webpack_require__(19);var _some2=_interopRequireDefault(_some);var _splice=__webpack_require__(20);var _splice2=_interopRequireDefault(_splice);var _before=__webpack_require__(13);var _before2=_interopRequireDefault(_before);var _once=__webpack_require__(12);var _once2=_interopRequireDefault(_once);var _fibonacci=__webpack_require__(53);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}/*
 * Base functionality
 * Set of base capabilities used throughout the framework
 *//**
 * Augmented.js Next - The Core Component
 *
 * @author Bob Warren
 *
 * @module Augmented
 * @version 2.0.0-alpha.24
 * @license Apache-2.0
 */var Augmented={};Augmented.Utility=Utility;Augmented.Utility.Map=_map2.default;Augmented.Utility.Stack=_stack2.default;Augmented.Utility.SchemaGenerator=_schemaGenerator2.default;Augmented.Utility.extend=_extend2.default;Augmented.Utility.AsynchronousQueue=_queue2.default;Augmented.Utility.pad=_pad2.default;Augmented.Utility.BundleObject=_resourceBundle.BundleObject;Augmented.Utility.ResourceBundle=_resourceBundle.ResourceBundle;Augmented.Utility.MessageReader=_resourceBundle.MessageReader;Augmented.Utility.MessageKeyFormatter=_resourceBundle.MessageKeyFormatter;Augmented.Utility.uniqueId=_uniqueId2.default;Augmented.Utility.sortObjects=_sort.sortObjects;Augmented.Utility.mergeSort=_sort.mergeSort;Augmented.Utility.quickSort=_sort.quickSort;Augmented.Utility.insertionSort=_sort.insertionSort;Augmented.Utility.bubbleSort=_sort.bubbleSort;Augmented.Logger=Logger;Augmented.Object=_object2.default;Augmented.AbstractModel=_abstractModel2.default;Augmented.AbstractCollection=_collection2.default;Augmented.ValidationFramework=_validationFramework2.default;Augmented.Security=Security;Augmented.Security.ClientType=_clientType2.default;Augmented.Configuration=_configuration2.default;Augmented.Application=_application2.default;Augmented.isString=_isString2.default;Augmented.isFunction=_isFunction2.default;Augmented.has=_has2.default;Augmented.isObject=_isObject2.default;Augmented.allKeys=_allKeys2.default;Augmented.create=_create2.default;Augmented.result=_result2.default;Augmented.arrayHas=_arrayHas2.default;Augmented.exec=_exec2.default;Augmented.isDefined=_isDefined2.default;Augmented.some=_some2.default;Augmented.fibonacci=_fibonacci.fibonacci;Augmented.fibonacciSequence=_fibonacci.fibonacciSequence;Augmented.splice=_splice2.default;Augmented.before=_before2.default;Augmented.once=_once2.default;/**
 * The standard version property
 * @constant VERSION
 * @memberof Augmented
 */Augmented.VERSION="2.0.0-alpha.24";/**
 * A codename for internal use
 * @constant codename
 * @memberof Augmented
 */Augmented.codename="JC Denton";/**
 * A release name to help with identification of minor releases
 * @constant releasename
 * @memberof Augmented
 */Augmented.releasename="UNATCO";//export default Augmented;
// browser-compatible export from babel
module.exports=Augmented;/***/},/* 24 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _arguments=arguments;var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * Utility Package -
 * Small Utilities
 * @namespace Augmented.Utility
 * @memberof Augmented
 *//**
 * Shuffles an Array with Fisher-Yates Shuffle algorithm
 * @class Augmented.Utility.Shuffle
 * @memberof Augmented.Utility
 * @param {array} array The array to shuffle
 * @returns {array} A new shuffled array
 */var shuffle=exports.shuffle=function shuffle(array){var nArray=array.slice(0),l=array.length;var i=0,temp=void 0,j=void 0;for(i=l-1;i>0;i--){j=Math.floor(Math.random()*(i+1));temp=nArray[i];nArray[i]=nArray[j];nArray[j]=temp;}return nArray;};/**
 * Prints an object nicely
 * @class Augmented.Utility.PrettyPrint
 * @memberof Augmented.Utility
 * @param {object} obj The object to print
 * @param {boolean} spaces Use spaces instead of tabs
 * @returns {number} number The number of spaces to pad
 */var prettyPrint=exports.prettyPrint=function prettyPrint(obj,spaces,number){var x="\t";if(spaces){x=" ".repeat(number);}return JSON.stringify(obj,null,x);};/**
 * Performs a binary search on the host array. vs indexOf<br/>
 * Binary Search is a complexity of <em>O(n log n)</em> vs <em>O(n)</em> with indexOf
 * @class Augmented.Utility.BinarySearch
 * @memberof Augmented.Utility
 * @param {Array} arr The array.
 * @param {Any} find The item to search for within the array.
 * @param {function} comparator The comparator to use
 * @returns {Number} The index of the element which defaults to -1 when not found.
 */var binarySearch=exports.binarySearch=function binarySearch(arr,find,comparator){var low=0,high=arr.length-1,i=void 0,comparison=void 0;while(low<=high){i=Math.floor((low+high)/2);comparison=comparator(arr[i],find);if(comparison<0){low=i+1;continue;}if(comparison>0){high=i-1;continue;}return i;}return null;};/**
 * Augmented.Utility.TransformerType <br/>
 * Transformer type for use in the transformer
 * @enum {Symbol} Augmented.Utility.TransformerType
 * @name Augmented.Utility.TransformerType
 * @memberof Augmented.Utility
 * @property {Symbol} String Standard String
 * @property {Symbol} Integer Integer
 * @property {Symbol} Number Any number
 * @property {Symbol} Boolean True/False
 * @property {Symbol} Array Stanrdard Array
 * @property {Symbol} Object Any Object
 * @property {Symbol} Null Null
 */var TransformerType=exports.TransformerType={};TransformerType.STRING=Symbol("String");TransformerType.INTEGER=Symbol("Integer");TransformerType.NUMBER=Symbol("Number");TransformerType.BOOLEAN=Symbol("Boolean");TransformerType.ARRAY=Symbol("Array");TransformerType.OBJECT=Symbol("Object");TransformerType.NULL=Symbol("Null");/**
 * Augmented.Utility.Transformer <br/>
 * Transform an object, type, or array to another type, object, or array
 * @namespace Augmented.Utility.Transformer
 * @memberof Augmented.Utility
 */var Transformer=exports.Transformer=function(){function Transformer(){_classCallCheck(this,Transformer);this.type=TransformerType;}_createClass(Transformer,null,[{key:"transform",/**
     * The transformer type enum
     * @propery type The transformer type enum
     * @type {Augmented.Utility.TransformerType}
     * @memberof Augmented.Utility.Transformer
     *//**
     * Transform an object, primitive, or array to another object, primitive, or array
     * @method transform
     * @param {object} source Source primitive to transform
     * @param {Augmented.Utility.TransformerType} type Type to transform to
     * @memberof Augmented.Utility.Transformer
     * @returns {object} returns a transformed object or primitive
     */value:function transform(source,type){var out=null;switch(type){case TransformerType.STRING:if((typeof source==="undefined"?"undefined":_typeof(source))==="object"){out=JSON.stringify(source);}else{out=String(source);}break;case TransformerType.INTEGER:out=parseInt(source);break;case TransformerType.NUMBER:out=Number(source);break;case TransformerType.BOOLEAN:out=Boolean(source);break;case TransformerType.ARRAY:if(!Array.isArray(source)){out=[];out[0]=source;}else{out=source;}break;case TransformerType.OBJECT:if((typeof source==="undefined"?"undefined":_typeof(source))!=="object"){out={};out[source]=source;}else{out=source;}break;}return out;}},{key:"isType",/**
     * Returns a Augmented.Utility.TransformerType of a passed object
     * @method isType
     * @memberof Augmented.Utility.Transformer
     * @param {object} source The source primitive
     * @returns {Augmented.Utility.TransformerType} type of source as Augmented.Utility.TransformerType
     */value:function isType(source){if(source===null){return TransformerType.NULL;}else if(typeof source==="string"){return TransformerType.STRING;}else if(typeof source==="number"){return TransformerType.NUMBER;}else if(typeof source==="boolean"){return TransformerType.BOOLEAN;}else if(Array.isArray(source)){return TransformerType.ARRAY;}else if((typeof source==="undefined"?"undefined":_typeof(source))==="object"){return TransformerType.OBJECT;}}}]);return Transformer;}();;/**
 * Wrap method to handle wrapping functions (simular to _.wrap)
 * @method wrap
 * @memberof Augmented.Utility
 */var wrap=exports.wrap=function wrap(fn,_wrap){return function(){return _wrap.apply(undefined,[fn].concat(Array.prototype.slice.call(_arguments)));};};/**
 * filter an oject from array of values
 *
 * @method filterObject
 * @param {object} object Object to filter
 * @param {array} keys keys to filter from the object
 * @returns {object} returns a new object with only these keys
 * @memberof Augmented.Utility
 */var filterObject=exports.filterObject=function filterObject(object,keys){var newObject={};if(object&&keys){var l=keys.length;var i=0;for(i=0;i<l;i++){newObject[keys[i]]=object[keys[i]];}}return newObject;};/***/},/* 25 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};// Events
// Regular expression used to split event strings.
var EVENT_SPLITTER=exports.EVENT_SPLITTER=/\s+/;// Iterates over the standard `event, callback` (as well as the fancy multiple
// space-separated events `"change blur", callback` and jQuery-style event
// maps `{event: callback}`).
var eventsApi=exports.eventsApi=function eventsApi(iteratee,events,name,callback,opts){var i=0,names=void 0;if(name&&(typeof name==="undefined"?"undefined":_typeof(name))==="object"){// Handle event maps.
if(callback!==void 0&&"context"in opts&&opts.context===void 0){opts.context=callback;}for(names=Object.keys(name);i<names.length;i++){events=eventsApi(iteratee,events,names[i],name[names[i]],opts);}}else if(name&&EVENT_SPLITTER.test(name)){// Handle space-separated event names by delegating them individually.
for(names=name.split(EVENT_SPLITTER);i<names.length;i++){events=iteratee(events,names[i],callback,opts);}}else{// Finally, standard events.
events=iteratee(events,name,callback,opts);}return events;};// Guard the `listening` argument from the public API.
var internalOn=exports.internalOn=function internalOn(obj,name,callback,context,listening){obj._events=eventsApi(onApi,obj._events||{},name,callback,{context:context,ctx:obj,listening:listening});if(listening){var listeners=obj._listeners||(obj._listeners={});listeners[listening.id]=listening;}return obj;};// The reducing API that adds a callback to the `events` object.
var onApi=exports.onApi=function onApi(events,name,callback,options){if(callback){var handlers=events[name]||(events[name]=[]);var context=options.context,ctx=options.ctx,listening=options.listening;if(listening){listening.count++;}handlers.push({callback:callback,context:context,ctx:context||ctx,listening:listening});}return events;};// The reducing API that removes a callback from the `events` object.
var offApi=exports.offApi=function offApi(events,name,callback,options){if(!events){return;}var i=0,listening=void 0;var context=options.context,listeners=options.listeners;// Delete all events listeners and "drop" events.
if(!name&&!callback&&!context){var ids=Object.keys(listeners);for(;i<ids.length;i++){listening=listeners[ids[i]];delete listeners[listening.id];delete listening.listeningTo[listening.objId];}return;}var names=name?[name]:Object.keys(events);for(;i<names.length;i++){name=names[i];var handlers=events[name];// Bail out if there are no events stored.
if(!handlers)break;// Replace events if there are any remaining.  Otherwise, clean up.
var remaining=[];var j=0;for(j=0;j<handlers.length;j++){var handler=handlers[j];if(callback&&callback!==handler.callback&&callback!==handler.callback._callback||context&&context!==handler.context){remaining.push(handler);}else{listening=handler.listening;if(listening&&--listening.count===0){delete listeners[listening.id];delete listening.listeningTo[listening.objId];}}}// Update tail event if the list has any events.  Otherwise, clean up.
if(remaining.length){events[name]=remaining;}else{delete events[name];}}return events;};// Handles triggering the appropriate event callbacks.
var triggerApi=exports.triggerApi=function triggerApi(objEvents,name,callback,args){if(objEvents){var events=objEvents[name];var allEvents=objEvents.all;if(events&&allEvents){allEvents=allEvents.slice();}if(events){triggerEvents(events,args);}if(allEvents){triggerEvents(allEvents,[name].concat(args));}}return objEvents;};// A difficult-to-believe, but optimized internal dispatch function for
// triggering events. Tries to keep the usual cases speedy
var triggerEvents=exports.triggerEvents=function triggerEvents(events,args){var ev=void 0,i=-1;var l=events.length,a1=args[0],a2=args[1],a3=args[2];switch(args.length){case 0:while(++i<l){(ev=events[i]).callback.call(ev.ctx);}return;case 1:while(++i<l){(ev=events[i]).callback.call(ev.ctx,a1);}return;case 2:while(++i<l){(ev=events[i]).callback.call(ev.ctx,a1,a2);}return;case 3:while(++i<l){(ev=events[i]).callback.call(ev.ctx,a1,a2,a3);}return;default:while(++i<l){(ev=events[i]).callback.apply(ev.ctx,args);}return;}};/***/},/* 26 *//***/function(module,exports,__webpack_require__){"use strict";/* WEBPACK VAR INJECTION */(function(global){var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as the `TypeError` message for "Functions" methods. */var FUNC_ERROR_TEXT='Expected a function';/** Used as the internal argument placeholder. */var PLACEHOLDER='__lodash_placeholder__';/** Used to compose bitmasks for function metadata. */var BIND_FLAG=1,BIND_KEY_FLAG=2,CURRY_BOUND_FLAG=4,CURRY_FLAG=8,CURRY_RIGHT_FLAG=16,PARTIAL_FLAG=32,PARTIAL_RIGHT_FLAG=64,ARY_FLAG=128,REARG_FLAG=256,FLIP_FLAG=512;/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e+308,NAN=0/0;/** Used to associate wrap methods with their bit flags. */var wrapFlags=[['ary',ARY_FLAG],['bind',BIND_FLAG],['bindKey',BIND_KEY_FLAG],['curry',CURRY_FLAG],['curryRight',CURRY_RIGHT_FLAG],['flip',FLIP_FLAG],['partial',PARTIAL_FLAG],['partialRight',PARTIAL_RIGHT_FLAG],['rearg',REARG_FLAG]];/** `Object#toString` result references. */var funcTag='[object Function]',genTag='[object GeneratorFunction]',symbolTag='[object Symbol]';/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g;/** Used to match wrap detail comments. */var reWrapComment=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,reWrapDetails=/\{\n\/\* \[wrapped with (.+)\] \*/,reSplitDetails=/,? & /;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Built-in method references without a dependency on `root`. */var freeParseInt=parseInt;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function arrayEach(array,iteratee){var index=-1,length=array?array.length:0;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */function arrayIncludes(array,value){var length=array?array.length:0;return!!length&&baseIndexOf(array,value,0)>-1;}/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseIndexOf(array,value,fromIndex){if(value!==value){return baseFindIndex(array,baseIsNaN,fromIndex);}var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */function baseIsNaN(value){return value!==value;}/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */function countHolders(array,placeholder){var length=array.length,result=0;while(length--){if(array[length]===placeholder){result++;}}return result;}/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
// despite having improperly defined `toString` methods.
var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */function replaceHolders(array,placeholder){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value===placeholder||value===PLACEHOLDER){array[index]=PLACEHOLDER;result[resIndex++]=index;}}return result;}/** Used for built-in method references. */var funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var objectToString=objectProto.toString;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var objectCreate=Object.create;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max,nativeMin=Math.min;/* Used to set `toString` methods. */var defineProperty=function(){var func=getNative(Object,'defineProperty'),name=getNative.name;return name&&name.length>2?func:undefined;}();/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */function baseCreate(proto){return isObject(proto)?objectCreate(proto):{};}/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */function baseRest(func,start){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=array;return apply(func,this,otherArgs);};}/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */function composeArgs(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersLength=holders.length,leftIndex=-1,leftLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(leftLength+rangeLength),isUncurried=!isCurried;while(++leftIndex<leftLength){result[leftIndex]=partials[leftIndex];}while(++argsIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[holders[argsIndex]]=args[argsIndex];}}while(rangeLength--){result[leftIndex++]=args[argsIndex++];}return result;}/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */function composeArgsRight(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersIndex=-1,holdersLength=holders.length,rightIndex=-1,rightLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(rangeLength+rightLength),isUncurried=!isCurried;while(++argsIndex<rangeLength){result[argsIndex]=args[argsIndex];}var offset=argsIndex;while(++rightIndex<rightLength){result[offset+rightIndex]=partials[rightIndex];}while(++holdersIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[offset+holders[holdersIndex]]=args[argsIndex++];}}return result;}/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */function createBind(func,bitmask,thisArg){var isBind=bitmask&BIND_FLAG,Ctor=createCtor(func);function wrapper(){var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return fn.apply(isBind?thisArg:this,arguments);}return wrapper;}/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */function createCtor(Ctor){return function(){// Use a `switch` statement to work with class constructors. See
// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
// for more details.
var args=arguments;switch(args.length){case 0:return new Ctor();case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0],args[1]);case 3:return new Ctor(args[0],args[1],args[2]);case 4:return new Ctor(args[0],args[1],args[2],args[3]);case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);}var thisBinding=baseCreate(Ctor.prototype),result=Ctor.apply(thisBinding,args);// Mimic the constructor's `return` behavior.
// See https://es5.github.io/#x13.2.2 for more details.
return isObject(result)?result:thisBinding;};}/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */function createCurry(func,bitmask,arity){var Ctor=createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length,placeholder=getHolder(wrapper);while(index--){args[index]=arguments[index];}var holders=length<3&&args[0]!==placeholder&&args[length-1]!==placeholder?[]:replaceHolders(args,placeholder);length-=holders.length;if(length<arity){return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,undefined,args,holders,undefined,undefined,arity-length);}var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return apply(fn,this,args);}return wrapper;}/**
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
 */function createHybrid(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){var isAry=bitmask&ARY_FLAG,isBind=bitmask&BIND_FLAG,isBindKey=bitmask&BIND_KEY_FLAG,isCurried=bitmask&(CURRY_FLAG|CURRY_RIGHT_FLAG),isFlip=bitmask&FLIP_FLAG,Ctor=isBindKey?undefined:createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length;while(index--){args[index]=arguments[index];}if(isCurried){var placeholder=getHolder(wrapper),holdersCount=countHolders(args,placeholder);}if(partials){args=composeArgs(args,partials,holders,isCurried);}if(partialsRight){args=composeArgsRight(args,partialsRight,holdersRight,isCurried);}length-=holdersCount;if(isCurried&&length<arity){var newHolders=replaceHolders(args,placeholder);return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,thisArg,args,newHolders,argPos,ary,arity-length);}var thisBinding=isBind?thisArg:this,fn=isBindKey?thisBinding[func]:func;length=args.length;if(argPos){args=reorder(args,argPos);}else if(isFlip&&length>1){args.reverse();}if(isAry&&ary<length){args.length=ary;}if(this&&this!==root&&this instanceof wrapper){fn=Ctor||createCtor(fn);}return fn.apply(thisBinding,args);}return wrapper;}/**
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
 */function createPartial(func,bitmask,thisArg,partials){var isBind=bitmask&BIND_FLAG,Ctor=createCtor(func);function wrapper(){var argsIndex=-1,argsLength=arguments.length,leftIndex=-1,leftLength=partials.length,args=Array(leftLength+argsLength),fn=this&&this!==root&&this instanceof wrapper?Ctor:func;while(++leftIndex<leftLength){args[leftIndex]=partials[leftIndex];}while(argsLength--){args[leftIndex++]=arguments[++argsIndex];}return apply(fn,isBind?thisArg:this,args);}return wrapper;}/**
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
 */function createRecurry(func,bitmask,wrapFunc,placeholder,thisArg,partials,holders,argPos,ary,arity){var isCurry=bitmask&CURRY_FLAG,newHolders=isCurry?holders:undefined,newHoldersRight=isCurry?undefined:holders,newPartials=isCurry?partials:undefined,newPartialsRight=isCurry?undefined:partials;bitmask|=isCurry?PARTIAL_FLAG:PARTIAL_RIGHT_FLAG;bitmask&=~(isCurry?PARTIAL_RIGHT_FLAG:PARTIAL_FLAG);if(!(bitmask&CURRY_BOUND_FLAG)){bitmask&=~(BIND_FLAG|BIND_KEY_FLAG);}var result=wrapFunc(func,bitmask,thisArg,newPartials,newHolders,newPartialsRight,newHoldersRight,argPos,ary,arity);result.placeholder=placeholder;return setWrapToString(result,func,bitmask);}/**
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
 */function createWrap(func,bitmask,thisArg,partials,holders,argPos,ary,arity){var isBindKey=bitmask&BIND_KEY_FLAG;if(!isBindKey&&typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var length=partials?partials.length:0;if(!length){bitmask&=~(PARTIAL_FLAG|PARTIAL_RIGHT_FLAG);partials=holders=undefined;}ary=ary===undefined?ary:nativeMax(toInteger(ary),0);arity=arity===undefined?arity:toInteger(arity);length-=holders?holders.length:0;if(bitmask&PARTIAL_RIGHT_FLAG){var partialsRight=partials,holdersRight=holders;partials=holders=undefined;}var newData=[func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity];func=newData[0];bitmask=newData[1];thisArg=newData[2];partials=newData[3];holders=newData[4];arity=newData[9]=newData[9]==null?isBindKey?0:func.length:nativeMax(newData[9]-length,0);if(!arity&&bitmask&(CURRY_FLAG|CURRY_RIGHT_FLAG)){bitmask&=~(CURRY_FLAG|CURRY_RIGHT_FLAG);}if(!bitmask||bitmask==BIND_FLAG){var result=createBind(func,bitmask,thisArg);}else if(bitmask==CURRY_FLAG||bitmask==CURRY_RIGHT_FLAG){result=createCurry(func,bitmask,arity);}else if((bitmask==PARTIAL_FLAG||bitmask==(BIND_FLAG|PARTIAL_FLAG))&&!holders.length){result=createPartial(func,bitmask,thisArg,partials);}else{result=createHybrid.apply(undefined,newData);}return setWrapToString(result,func,bitmask);}/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */function getHolder(func){var object=func;return object.placeholder;}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */function getWrapDetails(source){var match=source.match(reWrapDetails);return match?match[1].split(reSplitDetails):[];}/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */function insertWrapDetails(source,details){var length=details.length,lastIndex=length-1;details[lastIndex]=(length>1?'& ':'')+details[lastIndex];details=details.join(length>2?', ':' ');return source.replace(reWrapComment,'{\n/* [wrapped with '+details+'] */\n');}/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */function reorder(array,indexes){var arrLength=array.length,length=nativeMin(indexes.length,arrLength),oldArray=copyArray(array);while(length--){var index=indexes[length];array[length]=isIndex(index,arrLength)?oldArray[index]:undefined;}return array;}/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */var setWrapToString=!defineProperty?identity:function(wrapper,reference,bitmask){var source=reference+'';return defineProperty(wrapper,'toString',{'configurable':true,'enumerable':false,'value':constant(insertWrapDetails(source,updateWrapDetails(getWrapDetails(source),bitmask)))});};/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */function updateWrapDetails(details,bitmask){arrayEach(wrapFlags,function(pair){var value='_.'+pair[0];if(bitmask&pair[1]&&!arrayIncludes(details,value)){details.push(value);}});return details.sort();}/**
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
 */var bind=baseRest(function(func,thisArg,partials){var bitmask=BIND_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bind));bitmask|=PARTIAL_FLAG;}return createWrap(func,bitmask,thisArg,partials,holders);});/**
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
 */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 8-9 which returns 'object' for typed array and other constructors.
var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}/**
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
 */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return!!value&&(type=='object'||type=='function');}/**
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
 */function isObjectLike(value){return!!value&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}/**
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
 */function isSymbol(value){return(typeof value==='undefined'?'undefined':_typeof(value))=='symbol'||isObjectLike(value)&&objectToString.call(value)==symbolTag;}/**
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
 */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}/**
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
 */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}/**
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
 */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}/**
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
 */function constant(value){return function(){return value;};}/**
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
 */function identity(value){return value;}// Assign default placeholders.
bind.placeholder={};module.exports=bind;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(0));/***/},/* 27 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _arguments=arguments;var _validatorContext=__webpack_require__(28);var _validatorContext2=_interopRequireDefault(_validatorContext);var _validationError=__webpack_require__(7);var _functions=__webpack_require__(17);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var languages={};var createApi=function createApi(language){var _myContext=new _validatorContext2.default();var currentLanguage=language||'en';var api={addFormat:function addFormat(format,validator){_myContext.addFormat(format,validator);},language:function language(code){if(!code){return currentLanguage;}if(!languages[code]){code=code.split('-')[0];// fall back to base
// language
}if(languages[code]){currentLanguage=code;return code;// so you can tell if fall-back has happened
}return false;},addLanguage:function addLanguage(code,messageMap){var key=void 0;for(key in _validationError.ERROR_CODES){if(messageMap[key]&&!messageMap[_validationError.ERROR_CODES[key]]){messageMap[_validationError.ERROR_CODES[key]]=messageMap[key];}}var rootCode=code.split('-')[0];if(!languages[rootCode]){// use for base language if
// not yet defined
languages[code]=messageMap;languages[rootCode]=messageMap;}else{languages[code]=Object.create(languages[rootCode]);for(key in messageMap){if(typeof languages[rootCode][key]==='undefined'){languages[rootCode][key]=messageMap[key];}languages[code][key]=messageMap[key];}}return undefined;},freshApi:function freshApi(language){var result=createApi();if(language){result.language(language);}return result;},validate:function validate(data,schema,checkRecursive,banUnknownProperties){var context=new _validatorContext2.default(_myContext,false,languages[currentLanguage],checkRecursive,banUnknownProperties);if(typeof schema==="string"){schema={"$ref":schema};}context.addSchema("",schema);var error=context.validateAll(data,schema,null,null,"");if(!error&&banUnknownProperties){error=context.banUnknownProperties();}undefined.error=error;undefined.missing=context.missing;undefined.valid=error===null;return undefined.valid;},validateResult:function validateResult(){var result={};undefined.validate.apply(result,_arguments);return result;},validateMultiple:function validateMultiple(data,schema,checkRecursive,banUnknownProperties){var context=new _validatorContext2.default(_myContext,true,languages[currentLanguage],checkRecursive,banUnknownProperties);if(typeof schema==="string"){schema={"$ref":schema};}context.addSchema("",schema);context.validateAll(data,schema,null,null,"");if(banUnknownProperties){context.banUnknownProperties();}var result={};result.errors=context.errors;result.missing=context.missing;result.valid=result.errors.length===0;return result;},addSchema:function addSchema(url,schema){return _myContext.addSchema(url,schema);},getSchema:function getSchema(url,urlHistory){return _myContext.getSchema(url,urlHistory);},getSchemaMap:function getSchemaMap(){return _myContext.getSchemaMap.apply(_myContext,_arguments);},getSchemaUris:function getSchemaUris(){return _myContext.getSchemaUris.apply(_myContext,_arguments);},getMissingUris:function getMissingUris(){return _myContext.getMissingUris.apply(_myContext,_arguments);},dropSchemas:function dropSchemas(){_myContext.dropSchemas.apply(_myContext,_arguments);},defineKeyword:function defineKeyword(){_myContext.defineKeyword.apply(_myContext,_arguments);},defineError:function defineError(codeName,codeNumber,defaultMessage){if(typeof codeName!=='string'||!/^[A-Z]+(_[A-Z]+)*$/.test(codeName)){// TODO message bundle this
throw new Error('Code name must be a string in UPPER_CASE_WITH_UNDERSCORES');}if(typeof codeNumber!=='number'||codeNumber%1!==0||codeNumber<10000){// TODO message bundle this
throw new Error('Code number must be an integer > 10000');}if(typeof _validationError.ERROR_CODES[codeName]!=='undefined'){// TODO message bundle this
throw new Error('Error already defined: '+codeName+' as '+_validationError.ERROR_CODES[codeName]);}if(typeof _validationError.ErrorCodeLookup[codeNumber]!=='undefined'){// TODO message bundle this
throw new Error('Error code already used: '+_validationError.ErrorCodeLookup[codeNumber]+' as '+codeNumber);}_validationError.ERROR_CODES[codeName]=codeNumber;_validationError.ErrorCodeLookup[codeNumber]=codeName;_validationError.ERROR_MESSAGES_DEFAULT[codeName]=_validationError.ERROR_MESSAGES_DEFAULT[codeNumber]=defaultMessage;for(var langCode in languages){var _language=languages[langCode];if(_language[codeName]){_language[codeNumber]=_language[codeNumber]||_language[codeName];}}},reset:function reset(){_myContext.reset();undefined.error=null;undefined.missing=[];undefined.valid=true;},missing:[],error:null,valid:true,normSchema:_functions.normSchema,resolveUrl:_functions.resolveUrl,getDocumentUri:_functions.getDocumentUri,errorCodes:_validationError.ERROR_CODES};return api;};exports.default=createApi;/***/},/* 28 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _validationError=__webpack_require__(7);var _functions=__webpack_require__(17);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var CLOSE_ENOUGH_LOW=Math.pow(2,-51);var CLOSE_ENOUGH_HIGH=1-CLOSE_ENOUGH_LOW;var ValidatorContext=function(){function ValidatorContext(parent,collectMultiple,errorMessages,checkRecursive,trackUnknownProperties){_classCallCheck(this,ValidatorContext);this.missing=[];this.missingMap={};this.formatValidators=parent?Object.create(parent.formatValidators):{};this.schemas=parent?Object.create(parent.schemas):{};this.collectMultiple=collectMultiple;this.errors=[];this.handleError=collectMultiple?this.collectError:this.returnError;if(checkRecursive){this.checkRecursive=true;this.scanned=[];this.scannedFrozen=[];this.scannedFrozenSchemas=[];this.scannedFrozenValidationErrors=[];this.validatedSchemasKey='tv4_validation_id';this.validationErrorsKey='tv4_validation_errors_id';}if(trackUnknownProperties){this.trackUnknownProperties=true;this.knownPropertyPaths={};this.unknownPropertyPaths={};}this.errorMessages=errorMessages;this.definedKeywords={};if(parent){for(var key in parent.definedKeywords){this.definedKeywords[key]=parent.definedKeywords[key].slice(0);}}}_createClass(ValidatorContext,[{key:"notReallyPercentEncode",value:function notReallyPercentEncode(string){return encodeURI(string).replace(/%25[0-9][0-9]/g,function(doubleEncoded){return"%"+doubleEncoded.substring(3);});}},{key:"uriTemplateSubstitution",value:function uriTemplateSubstitution(spec){var _this=this;var modifier="";if(URI_TEMPLATE_GLOBAL_MODIFIERS[spec.charAt(0)]){modifier=spec.charAt(0);spec=spec.substring(1);}var separator="";var prefix="";var shouldEscape=true;var showVariables=false;var trimEmptyString=false;if(modifier==='+'){shouldEscape=false;}else if(modifier==="."){prefix=".";separator=".";}else if(modifier==="/"){prefix="/";separator="/";}else if(modifier==='#'){prefix="#";shouldEscape=false;}else if(modifier===';'){prefix=";";separator=";";showVariables=true;trimEmptyString=true;}else if(modifier==='?'){prefix="?";separator="&";showVariables=true;}else if(modifier==='&'){prefix="&";separator="&";showVariables=true;}var varNames=[];var varList=spec.split(",");var varSpecs=[];var varSpecMap={};var i=0,l=varList.length;for(i=0;i<l;i++){var varName=varList[i];var truncate=null;if(varName.indexOf(":")!==-1){var parts=varName.split(":");varName=parts[0];truncate=parseInt(parts[1],10);}var suffices={};while(URI_TEMPLATE_SUFFICES[varName.charAt(varName.length-1)]){suffices[varName.charAt(varName.length-1)]=true;varName=varName.substring(0,varName.length-1);}var varSpec={truncate:truncate,name:varName,suffices:suffices};varSpecs.push(varSpec);varSpecMap[varName]=varSpec;varNames.push(varName);}var subFunction=function subFunction(valueFunction){var result="";var startIndex=0;var i=0,l=varSpecs.length;for(i=0;i<l;i++){var _varSpec=varSpecs[i];if(!valueFunction&&!isFunction(valueFunction)){throw new Error("Problem qith value function.");}var value=valueFunction(_varSpec.name);if(value===null||value===undefined||Array.isArray(value)&&value.length===0||(typeof value==="undefined"?"undefined":_typeof(value))==='object'&&Object.keys(value).length===0){startIndex++;continue;}if(i===startIndex){result+=prefix;}else{result+=separator||",";}if(Array.isArray(value)){if(showVariables){result+=_varSpec.name+"=";}var j=0;l=value.length;for(j=0;j<l;j++){if(j>0){result+=_varSpec.suffices['*']?separator||",":",";if(_varSpec.suffices['*']&&showVariables){result+=_varSpec.name+"=";}}result+=shouldEscape?encodeURIComponent(value[j]).replace(/!/g,"%21"):_this.notReallyPercentEncode(value[j]);}}else if((typeof value==="undefined"?"undefined":_typeof(value))==="object"){if(showVariables&&!_varSpec.suffices['*']){result+=_varSpec.name+"=";}var first=true;for(var key in value){if(!first){result+=_varSpec.suffices['*']?separator||",":",";}first=false;result+=shouldEscape?encodeURIComponent(key).replace(/!/g,"%21"):_this.notReallyPercentEncode(key);result+=_varSpec.suffices['*']?'=':",";result+=shouldEscape?encodeURIComponent(value[key]).replace(/!/g,"%21"):_this.notReallyPercentEncode(value[key]);}}else{if(showVariables){result+=_varSpec.name;if(!trimEmptyString||value!==""){result+="=";}}if(_varSpec.truncate!==null){value=value.substring(0,_varSpec.truncate);}result+=shouldEscape?encodeURIComponent(value).replace(/!/g,"%21"):_this.notReallyPercentEncode(value);}}return result;};subFunction.varNames=varNames;return{prefix:prefix,substitution:subFunction};}},{key:"recursiveCompare",value:function recursiveCompare(A,B){if(A===B){return true;}if((typeof A==="undefined"?"undefined":_typeof(A))==="object"&&(typeof B==="undefined"?"undefined":_typeof(B))==="object"){if(Array.isArray(A)!==Array.isArray(B)){return false;}else if(Array.isArray(A)){if(A.length!==B.length){return false;}var i=0,l=A.length;for(i=0;i<l;i++){if(!this.recursiveCompare(A[i],B[i])){return false;}}}else{var key=void 0;for(key in A){if(B[key]===undefined&&A[key]!==undefined){return false;}}for(key in B){if(A[key]===undefined&&B[key]!==undefined){return false;}}for(key in A){if(!this.recursiveCompare(A[key],B[key])){return false;}}}return true;}return false;}},{key:"defineKeyword",value:function defineKeyword(keyword,keywordFunction){this.definedKeywords[keyword]=this.definedKeywords[keyword]||[];this.definedKeywords[keyword].push(keywordFunction);}},{key:"createError",value:function createError(code,messageParams,dataPath,schemaPath,subErrors){var messageTemplate=this.errorMessages[code]||_validationError.ERROR_MESSAGES_DEFAULT[code];if(typeof messageTemplate!=='string'){return new _validationError.ValidationError(code,"Unknown error code "+code+": "+JSON.stringify(messageParams),messageParams,dataPath,schemaPath,subErrors);}// Adapted from Crockford's supplant()
var message=messageTemplate.replace(/\{([^{}]*)\}/g,function(whole,varName){var subValue=messageParams[varName];return typeof subValue==='string'||typeof subValue==='number'?subValue:whole;});return new _validationError.ValidationError(code,message,messageParams,dataPath,schemaPath,subErrors);}},{key:"returnError",value:function returnError(error){return error;}},{key:"collectError",value:function collectError(error){if(error){this.errors.push(error);}return null;}},{key:"prefixErrors",value:function prefixErrors(startIndex,dataPath,schemaPath){var i=0,l=this.errors.length;for(i=startIndex;i<l;i++){this.errors[i]=this.errors[i].prefixWith(dataPath,schemaPath);}return this;}},{key:"banUnknownProperties",value:function banUnknownProperties(){for(var unknownPath in this.unknownPropertyPaths){var error=this.createError(_validationError.ERROR_CODES.UNKNOWN_PROPERTY,{path:unknownPath},unknownPath,"");var result=this.handleError(error);if(result){return result;}}return null;}},{key:"addFormat",value:function addFormat(format,validator){if((typeof format==="undefined"?"undefined":_typeof(format))==='object'){for(var key in format){this.addFormat(key,format[key]);}return this;}this.formatValidators[format]=validator;}},{key:"resolveRefs",value:function resolveRefs(schema,urlHistory){if(schema['$ref']!==undefined){urlHistory=urlHistory||{};if(urlHistory[schema['$ref']]){return this.createError(_validationError.ERROR_CODES.CIRCULAR_REFERENCE,{urls:Object.keys(urlHistory).join(', ')},'','');}urlHistory[schema['$ref']]=true;schema=this.getSchema(schema['$ref'],urlHistory);}return schema;}},{key:"getSchema",value:function getSchema(url,urlHistory){var schema=void 0;if(this.schemas[url]!==undefined){schema=this.schemas[url];return this.resolveRefs(schema,urlHistory);}var baseUrl=url;var fragment="";if(url.indexOf('#')!==-1){fragment=url.substring(url.indexOf("#")+1);baseUrl=url.substring(0,url.indexOf("#"));}if(_typeof(this.schemas[baseUrl])==='object'){schema=this.schemas[baseUrl];var pointerPath=decodeURIComponent(fragment);if(pointerPath===""){return this.resolveRefs(schema,urlHistory);}else if(pointerPath.charAt(0)!=="/"){return undefined;}var parts=pointerPath.split("/").slice(1);var i=0,l=parts.length;for(i=0;i<l;i++){var component=parts[i].replace(/~1/g,"/").replace(/~0/g,"~");if(schema[component]===undefined){schema=undefined;break;}schema=schema[component];}if(schema!==undefined){return this.resolveRefs(schema,urlHistory);}}if(this.missing[baseUrl]===undefined){this.missing.push(baseUrl);this.missing[baseUrl]=baseUrl;this.missingMap[baseUrl]=baseUrl;}}},{key:"searchSchemas",value:function searchSchemas(schema,url){if(Array.isArray(schema)){var i=0,l=schema.length;for(i=0;i<l;i++){this.searchSchemas(schema[i],url);}}else if(schema&&(typeof schema==="undefined"?"undefined":_typeof(schema))==="object"){if(typeof schema.id==="string"){if(isTrustedUrl(url,schema.id)){if(this.schemas[schema.id]===undefined){this.schemas[schema.id]=schema;}}}for(var key in schema){if(key!=="enum"){if(_typeof(schema[key])==="object"){this.searchSchemas(schema[key],url);}else if(key==="$ref"){var uri=(0,_functions.getDocumentUri)(schema[key]);if(uri&&this.schemas[uri]===undefined&&this.missingMap[uri]===undefined){this.missingMap[uri]=uri;}}}}}}},{key:"addSchema",value:function addSchema(url,schema){// overload
if(typeof url!=='string'||typeof schema==='undefined'){if((typeof url==="undefined"?"undefined":_typeof(url))==='object'&&typeof url.id==='string'){schema=url;url=schema.id;}else{return;}}if(url===(0,_functions.getDocumentUri)(url)+"#"){// Remove empty fragment
url=(0,_functions.getDocumentUri)(url);}this.schemas[url]=schema;delete this.missingMap[url];(0,_functions.normSchema)(schema,url);this.searchSchemas(schema,url);}},{key:"getSchemaMap",value:function getSchemaMap(){var map={};for(var key in this.schemas){map[key]=this.schemas[key];}return map;}},{key:"getSchemaUris",value:function getSchemaUris(filterRegExp){var list=[];for(var key in this.schemas){if(!filterRegExp||filterRegExp.test(key)){list.push(key);}}return list;}},{key:"getMissingUris",value:function getMissingUris(filterRegExp){var list=[];for(var key in this.missingMap){if(!filterRegExp||filterRegExp.test(key)){list.push(key);}}return list;}},{key:"dropSchemas",value:function dropSchemas(){this.schemas={};this.reset();}},{key:"reset",value:function reset(){this.missing=[];this.missingMap={};this.errors=[];}},{key:"validateAll",value:function validateAll(data,schema,dataPathParts,schemaPathParts,dataPointerPath){var topLevel=void 0;schema=this.resolveRefs(schema);if(!schema){return null;}else if(schema instanceof _validationError.ValidationError){this.errors.push(schema);return schema;}var startErrorCount=this.errors.length;var frozenIndex=void 0,scannedFrozenSchemaIndex=null,scannedSchemasIndex=null;if(this.checkRecursive&&data&&(typeof data==="undefined"?"undefined":_typeof(data))==='object'){topLevel=!this.scanned.length;if(data[this.validatedSchemasKey]){var schemaIndex=data[this.validatedSchemasKey].indexOf(schema);if(schemaIndex!==-1){this.errors=this.errors.concat(data[this.validationErrorsKey][schemaIndex]);return null;}}if(Object.isFrozen(data)){frozenIndex=this.scannedFrozen.indexOf(data);if(frozenIndex!==-1){var frozenSchemaIndex=this.scannedFrozenSchemas[frozenIndex].indexOf(schema);if(frozenSchemaIndex!==-1){this.errors=this.errors.concat(this.scannedFrozenValidationErrors[frozenIndex][frozenSchemaIndex]);return null;}}}this.scanned.push(data);if(Object.isFrozen(data)){if(frozenIndex===-1){frozenIndex=this.scannedFrozen.length;this.scannedFrozen.push(data);this.scannedFrozenSchemas.push([]);}scannedFrozenSchemaIndex=this.scannedFrozenSchemas[frozenIndex].length;this.scannedFrozenSchemas[frozenIndex][scannedFrozenSchemaIndex]=schema;this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex]=[];}else{if(!data[this.validatedSchemasKey]){try{Object.defineProperty(data,this.validatedSchemasKey,{value:[],configurable:true});Object.defineProperty(data,this.validationErrorsKey,{value:[],configurable:true});}catch(e){// IE 7/8 workaround
data[this.validatedSchemasKey]=[];data[this.validationErrorsKey]=[];}}scannedSchemasIndex=data[this.validatedSchemasKey].length;data[this.validatedSchemasKey][scannedSchemasIndex]=schema;data[this.validationErrorsKey][scannedSchemasIndex]=[];}}var errorCount=this.errors.length;var error=this.validateBasic(data,schema,dataPointerPath)||this.validateNumeric(data,schema,dataPointerPath)||this.validateString(data,schema,dataPointerPath)||this.validateArray(data,schema,dataPointerPath)||this.validateObject(data,schema,dataPointerPath)||this.validateCombinations(data,schema,dataPointerPath)||this.validateHypermedia(data,schema,dataPointerPath)||this.validateFormat(data,schema,dataPointerPath)||this.validateDefinedKeywords(data,schema,dataPointerPath)||null;if(topLevel){while(this.scanned.length){var item=this.scanned.pop();delete item[this.validatedSchemasKey];}this.scannedFrozen=[];this.scannedFrozenSchemas=[];}if(error||errorCount!==this.errors.length){while(dataPathParts&&dataPathParts.length||schemaPathParts&&schemaPathParts.length){var dataPart=dataPathParts&&dataPathParts.length?""+dataPathParts.pop():null;var schemaPart=schemaPathParts&&schemaPathParts.length?""+schemaPathParts.pop():null;if(error){error=error.prefixWith(dataPart,schemaPart);}this.prefixErrors(errorCount,dataPart,schemaPart);}}if(scannedFrozenSchemaIndex!==null){this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex]=this.errors.slice(startErrorCount);}else if(scannedSchemasIndex!==null){data[this.validationErrorsKey][scannedSchemasIndex]=this.errors.slice(startErrorCount);}return this.handleError(error);}},{key:"validateFormat",value:function validateFormat(data,schema){if(typeof schema.format!=='string'||!this.formatValidators[schema.format]){return null;}var errorMessage=this.formatValidators[schema.format].call(null,data,schema);if(typeof errorMessage==='string'||typeof errorMessage==='number'){return this.createError(_validationError.ERROR_CODES.FORMAT_CUSTOM,{message:errorMessage}).prefixWith(null,"format");}else if(errorMessage&&(typeof errorMessage==="undefined"?"undefined":_typeof(errorMessage))==='object'){return this.createError(_validationError.ERROR_CODES.FORMAT_CUSTOM,{message:errorMessage.message||"?"},errorMessage.dataPath||null,errorMessage.schemaPath||"/format");}return null;}},{key:"validateDefinedKeywords",value:function validateDefinedKeywords(data,schema,dataPointerPath){for(var key in this.definedKeywords){if(typeof schema[key]==='undefined'){continue;}var validationFunctions=this.definedKeywords[key];var i=0,l=validationFunctions.length;for(i=0;i<l;i++){var func=validationFunctions[i];var result=func(data,schema[key],schema,dataPointerPath);if(typeof result==='string'||typeof result==='number'){return this.createError(_validationError.ERROR_CODES.KEYWORD_CUSTOM,{key:key,message:result}).prefixWith(null,"format");}else if(result&&(typeof result==="undefined"?"undefined":_typeof(result))==='object'){var code=result.code;if(typeof code==='string'){if(!_validationError.ERROR_CODES[code]){throw new Error('Undefined error code (use defineError): '+code);}code=_validationError.ERROR_CODES[code];}else if(typeof code!=='number'){code=_validationError.ERROR_CODES.KEYWORD_CUSTOM;}var messageParams=_typeof(result.message)==='object'?result.message:{key:key,message:result.message||"?"};var schemaPath=result.schemaPath||"/"+key.replace(/~/g,'~0').replace(/\//g,'~1');return this.createError(code,messageParams,result.dataPath||null,schemaPath);}}}return null;}},{key:"validateBasic",value:function validateBasic(data,schema,dataPointerPath){var error=this.validateType(data,schema,dataPointerPath);if(error){return error.prefixWith(null,"type");}/*if (error = this.validateEnum(data, schema, dataPointerPath)) {
      return error.prefixWith(null, "type");
      }*/return null;}},{key:"validateType",value:function validateType(data,schema){if(schema.type===undefined){return null;}var dataType=typeof data==="undefined"?"undefined":_typeof(data);if(data===null){dataType="null";}else if(Array.isArray(data)){dataType="array";}var allowedTypes=schema.type;if((typeof allowedTypes==="undefined"?"undefined":_typeof(allowedTypes))!=="object"){allowedTypes=[allowedTypes];}var i=0,l=allowedTypes.length;for(i=0;i<l;i++){var type=allowedTypes[i];if(type===dataType||type==="integer"&&dataType==="number"&&data%1===0){return null;}}return this.createError(_validationError.ERROR_CODES.INVALID_TYPE,{type:dataType,expected:allowedTypes.join("/")});}},{key:"validateEnum",value:function validateEnum(data,schema){if(schema["enum"]===undefined){return null;}var i=0,l=schema["enum"].length;for(i=0;i<l;i++){var enumVal=schema["enum"][i];if(this.recursiveCompare(data,enumVal)){return null;}}return this.createError(_validationError.ERROR_CODES.ENUM_MISMATCH,{value:typeof JSON!=='undefined'?JSON.stringify(data):data});}},{key:"validateNumeric",value:function validateNumeric(data,schema,dataPointerPath){return this.validateMultipleOf(data,schema,dataPointerPath)||this.validateMinMax(data,schema,dataPointerPath)||this.validateNaN(data,schema,dataPointerPath)||null;}},{key:"validateMultipleOf",value:function validateMultipleOf(data,schema){var multipleOf=schema.multipleOf||schema.divisibleBy;if(multipleOf===undefined){return null;}if(typeof data==="number"){var remainder=data/multipleOf%1;if(remainder>=CLOSE_ENOUGH_LOW&&remainder<CLOSE_ENOUGH_HIGH){return this.createError(_validationError.ERROR_CODES.NUMBER_MULTIPLE_OF,{value:data,multipleOf:multipleOf});}}return null;}},{key:"validateMinMax",value:function validateMinMax(data,schema){if(typeof data!=="number"){return null;}if(schema.minimum!==undefined){if(data<schema.minimum){return this.createError(_validationError.ERROR_CODES.NUMBER_MINIMUM,{value:data,minimum:schema.minimum}).prefixWith(null,"minimum");}if(schema.exclusiveMinimum&&data===schema.minimum){return this.createError(_validationError.ERROR_CODES.NUMBER_MINIMUM_EXCLUSIVE,{value:data,minimum:schema.minimum}).prefixWith(null,"exclusiveMinimum");}}if(schema.maximum!==undefined){if(data>schema.maximum){return this.createError(_validationError.ERROR_CODES.NUMBER_MAXIMUM,{value:data,maximum:schema.maximum}).prefixWith(null,"maximum");}if(schema.exclusiveMaximum&&data===schema.maximum){return this.createError(_validationError.ERROR_CODES.NUMBER_MAXIMUM_EXCLUSIVE,{value:data,maximum:schema.maximum}).prefixWith(null,"exclusiveMaximum");}}return null;}},{key:"validateNaN",value:function validateNaN(data){if(typeof data!=="number"){return null;}if(isNaN(data)===true||data===Infinity||data===-Infinity){return this.createError(_validationError.ERROR_CODES.NUMBER_NOT_A_NUMBER,{value:data}).prefixWith(null,"type");}return null;}},{key:"validateString",value:function validateString(data,schema,dataPointerPath){return this.validateStringLength(data,schema,dataPointerPath)||this.validateStringPattern(data,schema,dataPointerPath)||null;}},{key:"validateStringLength",value:function validateStringLength(data,schema){if(typeof data!=="string"){return null;}if(schema.minLength!==undefined){if(data.length<schema.minLength){return this.createError(_validationError.ERROR_CODES.STRING_LENGTH_SHORT,{length:data.length,minimum:schema.minLength}).prefixWith(null,"minLength");}}if(schema.maxLength!==undefined){if(data.length>schema.maxLength){return this.createError(_validationError.ERROR_CODES.STRING_LENGTH_LONG,{length:data.length,maximum:schema.maxLength}).prefixWith(null,"maxLength");}}return null;}},{key:"validateStringPattern",value:function validateStringPattern(data,schema){if(typeof data!=="string"||schema.pattern===undefined){return null;}var regexp=new RegExp(schema.pattern);if(!regexp.test(data)){return this.createError(_validationError.ERROR_CODES.STRING_PATTERN,{pattern:schema.pattern}).prefixWith(null,"pattern");}return null;}},{key:"validateArray",value:function validateArray(data,schema,dataPointerPath){if(!Array.isArray(data)){return null;}return this.validateArrayLength(data,schema,dataPointerPath)||this.validateArrayUniqueItems(data,schema,dataPointerPath)||this.validateArrayItems(data,schema,dataPointerPath)||null;}},{key:"validateArrayLength",value:function validateArrayLength(data,schema){var error=void 0;if(schema.minItems!==undefined){if(data.length<schema.minItems){error=this.createError(_validationError.ERROR_CODES.ARRAY_LENGTH_SHORT,{length:data.length,minimum:schema.minItems}).prefixWith(null,"minItems");if(this.handleError(error)){return error;}}}if(schema.maxItems!==undefined){if(data.length>schema.maxItems){error=this.createError(_validationError.ERROR_CODES.ARRAY_LENGTH_LONG,{length:data.length,maximum:schema.maxItems}).prefixWith(null,"maxItems");if(this.handleError(error)){return error;}}}return null;}},{key:"validateArrayUniqueItems",value:function validateArrayUniqueItems(data,schema){if(schema.uniqueItems){var i=0,l=data.length;for(i=0;i<l;i++){var j=0;for(j=i+1;j<l;j++){if(recursiveCompare(data[i],data[j])){var error=this.createError(_validationError.ERROR_CODES.ARRAY_UNIQUE,{match1:i,match2:j}).prefixWith(null,"uniqueItems");if(this.handleError(error)){return error;}}}}}return null;}},{key:"validateArrayItems",value:function validateArrayItems(data,schema,dataPointerPath){if(schema.items===undefined){return null;}var error=void 0,i=void 0;if(Array.isArray(schema.items)){var l=data.length;for(i=0;i<l;i++){if(i<schema.items.length){if(error=this.validateAll(data[i],schema.items[i],[i],["items",i],dataPointerPath+"/"+i)){return error;}}else if(schema.additionalItems!==undefined){if(typeof schema.additionalItems==="boolean"){if(!schema.additionalItems){error=this.createError(_validationError.ERROR_CODES.ARRAY_ADDITIONAL_ITEMS,{}).prefixWith(""+i,"additionalItems");if(this.handleError(error)){return error;}}}else if(error=this.validateAll(data[i],schema.additionalItems,[i],["additionalItems"],dataPointerPath+"/"+i)){return error;}}}}else{var _l=data.length;for(i=0;i<_l;i++){if(error=this.validateAll(data[i],schema.items,[i],["items"],dataPointerPath+"/"+i)){return error;}}}return null;}},{key:"validateObject",value:function validateObject(data,schema,dataPointerPath){if((typeof data==="undefined"?"undefined":_typeof(data))!=="object"||data===null||Array.isArray(data)){return null;}return this.validateObjectMinMaxProperties(data,schema,dataPointerPath)||this.validateObjectRequiredProperties(data,schema,dataPointerPath)||this.validateObjectProperties(data,schema,dataPointerPath)||this.validateObjectDependencies(data,schema,dataPointerPath)||null;}},{key:"validateObjectMinMaxProperties",value:function validateObjectMinMaxProperties(data,schema){var keys=Object.keys(data);var error=void 0;if(schema.minProperties!==undefined){if(keys.length<schema.minProperties){error=this.createError(_validationError.ERROR_CODES.OBJECT_PROPERTIES_MINIMUM,{propertyCount:keys.length,minimum:schema.minProperties}).prefixWith(null,"minProperties");if(this.handleError(error)){return error;}}}if(schema.maxProperties!==undefined){if(keys.length>schema.maxProperties){error=this.createError(_validationError.ERROR_CODES.OBJECT_PROPERTIES_MAXIMUM,{propertyCount:keys.length,maximum:schema.maxProperties}).prefixWith(null,"maxProperties");if(this.handleError(error)){return error;}}}return null;}},{key:"validateObjectRequiredProperties",value:function validateObjectRequiredProperties(data,schema){if(schema.required!==undefined){var i=0,l=schema.required.length;for(i=0;i<l;i++){var key=schema.required[i];if(data[key]===undefined){var error=this.createError(_validationError.ERROR_CODES.OBJECT_REQUIRED,{key:key}).prefixWith(null,""+i).prefixWith(null,"required");if(this.handleError(error)){return error;}}}}return null;}},{key:"validateObjectProperties",value:function validateObjectProperties(data,schema,dataPointerPath){var error=void 0;for(var key in data){var keyPointerPath=dataPointerPath+"/"+key.replace(/~/g,'~0').replace(/\//g,'~1');var foundMatch=false;if(schema.properties!==undefined&&schema.properties[key]!==undefined){foundMatch=true;if(error=this.validateAll(data[key],schema.properties[key],[key],["properties",key],keyPointerPath)){return error;}}if(schema.patternProperties!==undefined){for(var patternKey in schema.patternProperties){var regexp=new RegExp(patternKey);if(regexp.test(key)){foundMatch=true;if(error=this.validateAll(data[key],schema.patternProperties[patternKey],[key],["patternProperties",patternKey],keyPointerPath)){return error;}}}}if(!foundMatch){if(schema.additionalProperties!==undefined){if(this.trackUnknownProperties){this.knownPropertyPaths[keyPointerPath]=true;delete this.unknownPropertyPaths[keyPointerPath];}if(typeof schema.additionalProperties==="boolean"){if(!schema.additionalProperties){error=this.createError(_validationError.ERROR_CODES.OBJECT_ADDITIONAL_PROPERTIES,{}).prefixWith(key,"additionalProperties");if(this.handleError(error)){return error;}}}else{if(error=this.validateAll(data[key],schema.additionalProperties,[key],["additionalProperties"],keyPointerPath)){return error;}}}else if(this.trackUnknownProperties&&!this.knownPropertyPaths[keyPointerPath]){this.unknownPropertyPaths[keyPointerPath]=true;}}else if(this.trackUnknownProperties){this.knownPropertyPaths[keyPointerPath]=true;delete this.unknownPropertyPaths[keyPointerPath];}}return null;}},{key:"validateObjectDependencies",value:function validateObjectDependencies(data,schema,dataPointerPath){var error=void 0;if(schema.dependencies!==undefined){for(var depKey in schema.dependencies){if(data[depKey]!==undefined){var dep=schema.dependencies[depKey];if(typeof dep==="string"){if(data[dep]===undefined){error=this.createError(_validationError.ERROR_CODES.OBJECT_DEPENDENCY_KEY,{key:depKey,missing:dep}).prefixWith(null,depKey).prefixWith(null,"dependencies");if(this.handleError(error)){return error;}}}else if(Array.isArray(dep)){var i=0,l=dep.lenth;for(i=0;i<l;i++){var requiredKey=dep[i];if(data[requiredKey]===undefined){error=this.createError(_validationError.ERROR_CODES.OBJECT_DEPENDENCY_KEY,{key:depKey,missing:requiredKey}).prefixWith(null,""+i).prefixWith(null,depKey).prefixWith(null,"dependencies");if(this.handleError(error)){return error;}}}}else{if(error=this.validateAll(data,dep,[],["dependencies",depKey],dataPointerPath)){return error;}}}}}return null;}},{key:"validateCombinations",value:function validateCombinations(data,schema,dataPointerPath){return this.validateAllOf(data,schema,dataPointerPath)||this.validateAnyOf(data,schema,dataPointerPath)||this.validateOneOf(data,schema,dataPointerPath)||this.validateNot(data,schema,dataPointerPath)||null;}},{key:"validateAllOf",value:function validateAllOf(data,schema,dataPointerPath){if(schema.allOf===undefined){return null;}var error=void 0;var i=0,l=schema.allOf.length;for(i=0;i<l;i++){var subSchema=schema.allOf[i];if(error=this.validateAll(data,subSchema,[],["allOf",i],dataPointerPath)){return error;}}return null;}},{key:"validateAnyOf",value:function validateAnyOf(data,schema,dataPointerPath){if(schema.anyOf===undefined){return null;}var errors=[];var startErrorCount=this.errors.length;var oldUnknownPropertyPaths=void 0,oldKnownPropertyPaths=void 0;if(this.trackUnknownProperties){oldUnknownPropertyPaths=this.unknownPropertyPaths;oldKnownPropertyPaths=this.knownPropertyPaths;}var errorAtEnd=true;var i=0,l=schema.anyOf.length;for(i=0;i<l;i++){if(this.trackUnknownProperties){this.unknownPropertyPaths={};this.knownPropertyPaths={};}var subSchema=schema.anyOf[i];var errorCount=this.errors.length;var error=this.validateAll(data,subSchema,[],["anyOf",i],dataPointerPath);if(error===null&&errorCount===this.errors.length){this.errors=this.errors.slice(0,startErrorCount);if(this.trackUnknownProperties){for(var knownKey in this.knownPropertyPaths){oldKnownPropertyPaths[knownKey]=true;delete oldUnknownPropertyPaths[knownKey];}for(var unknownKey in this.unknownPropertyPaths){if(!oldKnownPropertyPaths[unknownKey]){oldUnknownPropertyPaths[unknownKey]=true;}}// We need to continue looping so we catch all the
// property definitions, but we don't want to return an
// error
errorAtEnd=false;continue;}return null;}if(error){errors.push(error.prefixWith(null,""+i).prefixWith(null,"anyOf"));}}if(this.trackUnknownProperties){this.unknownPropertyPaths=oldUnknownPropertyPaths;this.knownPropertyPaths=oldKnownPropertyPaths;}if(errorAtEnd){errors=errors.concat(this.errors.slice(startErrorCount));this.errors=this.errors.slice(0,startErrorCount);return this.createError(_validationError.ERROR_CODES.ANY_OF_MISSING,{},"","/anyOf",errors);}}},{key:"validateOneOf",value:function validateOneOf(data,schema,dataPointerPath){if(schema.oneOf===undefined){return null;}var validIndex=null;var errors=[];var startErrorCount=this.errors.length;var oldUnknownPropertyPaths=void 0,oldKnownPropertyPaths=void 0;if(this.trackUnknownProperties){oldUnknownPropertyPaths=this.unknownPropertyPaths;oldKnownPropertyPaths=this.knownPropertyPaths;}var i=0,l=schema.oneOf.length;for(i=0;i<l;i++){if(this.trackUnknownProperties){this.unknownPropertyPaths={};this.knownPropertyPaths={};}var subSchema=schema.oneOf[i];var errorCount=this.errors.length;var error=this.validateAll(data,subSchema,[],["oneOf",i],dataPointerPath);if(error===null&&errorCount===this.errors.length){if(validIndex===null){validIndex=i;}else{this.errors=this.errors.slice(0,startErrorCount);return this.createError(_validationError.ERROR_CODES.ONE_OF_MULTIPLE,{index1:validIndex,index2:i},"","/oneOf");}if(this.trackUnknownProperties){for(var knownKey in this.knownPropertyPaths){oldKnownPropertyPaths[knownKey]=true;delete oldUnknownPropertyPaths[knownKey];}for(var unknownKey in this.unknownPropertyPaths){if(!oldKnownPropertyPaths[unknownKey]){oldUnknownPropertyPaths[unknownKey]=true;}}}}else if(error){errors.push(error);}}if(this.trackUnknownProperties){this.unknownPropertyPaths=oldUnknownPropertyPaths;this.knownPropertyPaths=oldKnownPropertyPaths;}if(validIndex===null){errors=errors.concat(this.errors.slice(startErrorCount));this.errors=this.errors.slice(0,startErrorCount);return this.createError(_validationError.ERROR_CODES.ONE_OF_MISSING,{},"","/oneOf",errors);}else{this.errors=this.errors.slice(0,startErrorCount);}return null;}},{key:"validateNot",value:function validateNot(data,schema,dataPointerPath){if(schema.not===undefined){return null;}var oldErrorCount=this.errors.length;var oldUnknownPropertyPaths=void 0,oldKnownPropertyPaths=void 0;if(this.trackUnknownProperties){oldUnknownPropertyPaths=this.unknownPropertyPaths;oldKnownPropertyPaths=this.knownPropertyPaths;this.unknownPropertyPaths={};this.knownPropertyPaths={};}var error=this.validateAll(data,schema.not,null,null,dataPointerPath);var notErrors=this.errors.slice(oldErrorCount);this.errors=this.errors.slice(0,oldErrorCount);if(this.trackUnknownProperties){this.unknownPropertyPaths=oldUnknownPropertyPaths;this.knownPropertyPaths=oldKnownPropertyPaths;}if(error===null&&notErrors.length===0){return this.createError(_validationError.ERROR_CODES.NOT_PASSED,{},"","/not");}return null;}},{key:"validateHypermedia",value:function validateHypermedia(data,schema,dataPointerPath){if(!schema.links){return null;}var error=void 0;var i=0,l=schema.links.length;for(i=0;i<l;i++){var ldo=schema.links[i];if(ldo.rel==="describedby"){var template=new UriTemplate(ldo.href);var allPresent=true;var j=0,ll=template.varNames.length;for(j=0;j<ll;j++){if(!(template.varNames[j]in data)){allPresent=false;break;}}if(allPresent){var schemaUrl=template.fillFromObject(data);var subSchema={"$ref":schemaUrl};if(error=this.validateAll(data,subSchema,[],["links",i],dataPointerPath)){return error;}}}}}}]);return ValidatorContext;}();;exports.default=ValidatorContext=ValidatorContext;/***/},/* 29 *//***/function(module,exports,__webpack_require__){"use strict";/* WEBPACK VAR INJECTION */(function(global){var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as the `TypeError` message for "Functions" methods. */var FUNC_ERROR_TEXT='Expected a function';/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as references for various `Number` constants. */var INFINITY=1/0;/** `Object#toString` result references. */var funcTag='[object Function]',genTag='[object GeneratorFunction]',symbolTag='[object Symbol]';/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
// despite having improperly defined `toString` methods.
var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var objectToString=objectProto.toString;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var _Symbol=root.Symbol,splice=arrayProto.splice;/* Built-in method references that are verified to be native. */var Map=getNative(root,'Map'),nativeCreate=getNative(Object,'create');/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};}/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){return this.has(key)&&delete this.__data__[key];}/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];}/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}return true;}/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){return getMapData(this,key)['delete'](key);}/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){getMapData(this,key).set(key,value);return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */function castPath(value){return isArray(value)?value:stringToPath(value);}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value==='undefined'?'undefined':_typeof(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */var stringToPath=memoize(function(string){string=toString(string);var result=[];if(reLeadingDot.test(string)){result.push('');}string.replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,'$1'):number||match);});return result;});/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
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
 */function memoize(func,resolver){if(typeof func!='function'||resolver&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result);return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Assign cache to `_.memoize`.
memoize.Cache=MapCache;/**
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
 */function eq(value,other){return value===other||value!==value&&other!==other;}/**
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
 */var isArray=Array.isArray;/**
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
 */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 8-9 which returns 'object' for typed array and other constructors.
var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}/**
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
 */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return!!value&&(type=='object'||type=='function');}/**
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
 */function isObjectLike(value){return!!value&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}/**
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
 */function isSymbol(value){return(typeof value==='undefined'?'undefined':_typeof(value))=='symbol'||isObjectLike(value)&&objectToString.call(value)==symbolTag;}/**
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
 */function toString(value){return value==null?'':baseToString(value);}/**
 * This method is like `_.get` except that if the resolved value is a
 * function it's invoked with the `this` binding of its parent object and
 * its result is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to resolve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
 *
 * _.result(object, 'a[0].b.c1');
 * // => 3
 *
 * _.result(object, 'a[0].b.c2');
 * // => 4
 *
 * _.result(object, 'a[0].b.c3', 'default');
 * // => 'default'
 *
 * _.result(object, 'a[0].b.c3', _.constant('default'));
 * // => 'default'
 */function result(object,path,defaultValue){path=isKey(path,object)?[path]:castPath(path);var index=-1,length=path.length;// Ensure the loop is entered when path is empty.
if(!length){object=undefined;length=1;}while(++index<length){var value=object==null?undefined:object[toKey(path[index])];if(value===undefined){index=length;value=defaultValue;}object=isFunction(value)?value.call(object):value;}return object;}module.exports=result;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(0));/***/},/* 30 *//***/function(module,exports,__webpack_require__){"use strict";/* WEBPACK VAR INJECTION */(function(global,module){var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** `Object#toString` result references. */var argsTag='[object Arguments]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',objectTag='[object Object]',promiseTag='[object Promise]',setTag='[object Set]',weakMapTag='[object WeakMap]';var dataViewTag='[object DataView]';/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=(false?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(false?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
// despite having improperly defined `toString` methods.
var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}/** Used for built-in method references. */var funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var objectToString=objectProto.toString;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,propertyIsEnumerable=objectProto.propertyIsEnumerable;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeKeys=overArg(Object.keys,Object);/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView'),Map=getNative(root,'Map'),Promise=getNative(root,'Promise'),Set=getNative(root,'Set'),WeakMap=getNative(root,'WeakMap');/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */var nonEnumShadows=!propertyIsEnumerable.call({'valueOf':1},'valueOf');/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){return objectToString.call(value);}/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=objectToString.call(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):undefined;if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
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
 */function isArguments(value){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}/**
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
 */var isArray=Array.isArray;/**
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
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
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
 */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */function isEmpty(value){if(isArrayLike(value)&&(isArray(value)||typeof value=='string'||typeof value.splice=='function'||isBuffer(value)||isArguments(value))){return!value.length;}var tag=getTag(value);if(tag==mapTag||tag==setTag){return!value.size;}if(nonEnumShadows||isPrototype(value)){return!nativeKeys(value).length;}for(var key in value){if(hasOwnProperty.call(value,key)){return false;}}return true;}/**
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
 */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 8-9 which returns 'object' for typed array and other constructors.
var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}/**
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
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
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
 */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return!!value&&(type=='object'||type=='function');}/**
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
 */function isObjectLike(value){return!!value&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}module.exports=isEmpty;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(0),__webpack_require__(4)(module));/***/},/* 31 *//***/function(module,exports,__webpack_require__){"use strict";/* WEBPACK VAR INJECTION */(function(global){var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as the `TypeError` message for "Functions" methods. */var FUNC_ERROR_TEXT='Expected a function';/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991;/** `Object#toString` result references. */var argsTag='[object Arguments]',funcTag='[object Function]',genTag='[object GeneratorFunction]',symbolTag='[object Symbol]';/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
// despite having improperly defined `toString` methods.
var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var objectToString=objectProto.toString;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var _Symbol=root.Symbol,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice;/* Built-in method references that are verified to be native. */var Map=getNative(root,'Map'),nativeCreate=getNative(Object,'create');/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};}/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){return this.has(key)&&delete this.__data__[key];}/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];}/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}return true;}/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){return getMapData(this,key)['delete'](key);}/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){getMapData(this,key).set(key,value);return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHas(object,key){return object!=null&&hasOwnProperty.call(object,key);}/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */function castPath(value){return isArray(value)?value:stringToPath(value);}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */function hasPath(object,path,hasFunc){path=isKey(path,object)?[path]:castPath(path);var result,index=-1,length=path.length;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result){return result;}var length=object?object.length:0;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value==='undefined'?'undefined':_typeof(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */var stringToPath=memoize(function(string){string=toString(string);var result=[];if(reLeadingDot.test(string)){result.push('');}string.replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,'$1'):number||match);});return result;});/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
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
 */function memoize(func,resolver){if(typeof func!='function'||resolver&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result);return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Assign cache to `_.memoize`.
memoize.Cache=MapCache;/**
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
 */function eq(value,other){return value===other||value!==value&&other!==other;}/**
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
 */function isArguments(value){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}/**
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
 */var isArray=Array.isArray;/**
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
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
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
 */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
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
 */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 8-9 which returns 'object' for typed array and other constructors.
var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}/**
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
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
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
 */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return!!value&&(type=='object'||type=='function');}/**
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
 */function isObjectLike(value){return!!value&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}/**
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
 */function isSymbol(value){return(typeof value==='undefined'?'undefined':_typeof(value))=='symbol'||isObjectLike(value)&&objectToString.call(value)==symbolTag;}/**
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
 */function toString(value){return value==null?'':baseToString(value);}/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */function has(object,path){return object!=null&&hasPath(object,path,baseHas);}module.exports=has;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(0));/***/},/* 32 *//***/function(module,exports,__webpack_require__){"use strict";/* WEBPACK VAR INJECTION */(function(global,module){var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',asyncTag='[object AsyncFunction]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',nullTag='[object Null]',objectTag='[object Object]',promiseTag='[object Promise]',proxyTag='[object Proxy]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',undefinedTag='[object Undefined]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=(false?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(false?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(func){return function(value){return func(value);};}/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function cacheHas(cache,key){return cache.has(key);}/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,_Symbol=root.Symbol,Uint8Array=root.Uint8Array,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,symToStringTag=_Symbol?_Symbol.toStringTag:undefined;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeKeys=overArg(Object.keys,Object);/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView'),Map=getNative(root,'Map'),Promise=getNative(root,'Promise'),Set=getNative(root,'Set'),WeakMap=getNative(root,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];this.size=0;}/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function setCacheHas(value){return this.__data__.has(value);}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache();this.size=0;}/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Assume cyclic values are equal.
var stacked=stack.get(array);if(stacked&&stack.get(other)){return stacked==other;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}/**
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
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked&&stack.get(other)){return stacked==other;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[];}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(value){return nativeObjectToString.call(value);}/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
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
 */function eq(value,other){return value===other||value!==value&&other!==other;}/**
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
 */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};/**
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
 */var isArray=Array.isArray;/**
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
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */function isEqual(value,other){return baseIsEqual(value,other);}/**
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
 */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}/**
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
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
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
 */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return value!=null&&(type=='object'||type=='function');}/**
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
 */function isObjectLike(value){return value!=null&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}/**
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
 */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
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
 */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[];}/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}module.exports=isEqual;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(0),__webpack_require__(4)(module));/***/},/* 33 *//***/function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** `Object#toString` result references. */var argsTag='[object Arguments]',funcTag='[object Function]',genTag='[object GeneratorFunction]';/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var objectToString=objectProto.toString;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
// Safari 9 makes `arguments.length` enumerable in strict mode.
var result=isArray(value)||isArguments(value)?baseTimes(value.length,String):[];var length=result.length,skipIndexes=!!length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(key=='length'||isIndex(key,length)))){result.push(key);}}return result;}/**
 * Used by `_.defaults` to customize its `_.assignIn` use.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */function assignInDefaults(objValue,srcValue,key,object){if(objValue===undefined||eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key)){return srcValue;}return objValue;}/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){object[key]=value;}}/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */function baseRest(func,start){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=array;return apply(func,this,otherArgs);};}/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function copyObject(source,props,object,customizer){object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;assignValue(object,key,newValue===undefined?source[key]:newValue);}return object;}/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=typeof index==='undefined'?'undefined':_typeof(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}/**
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
 */function eq(value,other){return value===other||value!==value&&other!==other;}/**
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
 */function isArguments(value){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}/**
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
 */var isArray=Array.isArray;/**
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
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
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
 */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
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
 */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 8-9 which returns 'object' for typed array and other constructors.
var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}/**
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
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
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
 */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return!!value&&(type=='object'||type=='function');}/**
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
 */function isObjectLike(value){return!!value&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */var defaults=baseRest(function(args){args.push(undefined,assignInDefaults);return apply(assignInWith,undefined,args);});/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
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
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}module.exports=defaults;/***/},/* 34 *//***/function(module,exports,__webpack_require__){"use strict";/* WEBPACK VAR INJECTION */(function(global,module){var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Used as the `TypeError` message for "Functions" methods. */var FUNC_ERROR_TEXT='Expected a function';/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used to compose bitmasks for comparison styles. */var UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',promiseTag='[object Promise]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=(false?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(false?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{return freeProcess&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */function addMapEntry(map,pair){// Don't return `map.set` because it's not chainable in IE 11.
map.set(pair[0],pair[1]);return map;}/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */function addSetEntry(set,value){// Don't return `set.add` because it's not chainable in IE 11.
set.add(value);return set;}/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function arrayEach(array,iteratee){var index=-1,length=array?array.length:0;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array?array.length:0;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function arraySome(array,predicate){var index=-1,length=array?array.length:0;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(func){return function(value){return func(value);};}/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
// despite having improperly defined `toString` methods.
var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var objectToString=objectProto.toString;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,_Symbol=root.Symbol,Uint8Array=root.Uint8Array,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeKeys=overArg(Object.keys,Object);/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView'),Map=getNative(root,'Map'),Promise=getNative(root,'Promise'),Set=getNative(root,'Set'),WeakMap=getNative(root,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};}/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){return this.has(key)&&delete this.__data__[key];}/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];}/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}return true;}/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){return getMapData(this,key)['delete'](key);}/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){getMapData(this,key).set(key,value);return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function SetCache(values){var index=-1,length=values?values.length:0;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function setCacheHas(value){return this.__data__.has(value);}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){this.__data__=new ListCache(entries);}/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache();}/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){return this.__data__['delete'](key);}/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var cache=this.__data__;if(cache instanceof ListCache){var pairs=cache.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);return this;}cache=this.__data__=new MapCache(pairs);}cache.set(key,value);return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
// Safari 9 makes `arguments.length` enumerable in strict mode.
var result=isArray(value)||isArguments(value)?baseTimes(value.length,String):[];var length=result.length,skipIndexes=!!length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(key=='length'||isIndex(key,length)))){result.push(key);}}return result;}/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){object[key]=value;}}/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */function baseClone(value,isDeep,isFull,customizer,key,object,stack){var result;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){if(isHostObject(value)){return object?value:{};}result=initCloneObject(isFunc?{}:value);if(!isDeep){return copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,baseClone,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(!isArr){var props=isFull?getAllKeys(value):keys(value);}arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,isDeep,isFull,customizer,key,value,stack));});return result;}/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */function baseCreate(proto){return isObject(proto)?objectCreate(proto):{};}/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */function baseGet(object,path){path=isKey(path,object)?[path]:castPath(path);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){return objectToString.call(value);}/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHasIn(object,key){return object!=null&&key in Object(object);}/**
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
 */function baseIsEqual(value,other,customizer,bitmask,stack){if(value===other){return true;}if(value==null||other==null||!isObject(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,baseIsEqual,customizer,bitmask,stack);}/**
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
 */function baseIsEqualDeep(object,other,equalFunc,customizer,bitmask,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=arrayTag,othTag=arrayTag;if(!objIsArr){objTag=getTag(object);objTag=objTag==argsTag?objectTag:objTag;}if(!othIsArr){othTag=getTag(other);othTag=othTag==argsTag?objectTag:othTag;}var objIsObj=objTag==objectTag&&!isHostObject(object),othIsObj=othTag==objectTag&&!isHostObject(other),isSameTag=objTag==othTag;if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,equalFunc,customizer,bitmask,stack):equalByTag(object,other,objTag,equalFunc,customizer,bitmask,stack);}if(!(bitmask&PARTIAL_COMPARE_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,customizer,bitmask,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,equalFunc,customizer,bitmask,stack);}/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,customizer,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG,stack):result)){return false;}}}return true;}/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[objectToString.call(value)];}/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=='function'){return value;}if(value==null){return identity;}if((typeof value==='undefined'?'undefined':_typeof(value))=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,undefined,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG);};}/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */function castPath(value){return isArray(value)?value:stringToPath(value);}/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var result=new buffer.constructor(buffer.length);buffer.copy(result);return result;}/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),true):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor());}/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),true):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor());}/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function copyObject(source,props,object,customizer){object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;assignValue(object,key,newValue===undefined?source[key]:newValue);}return object;}/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
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
 */function equalArrays(array,other,equalFunc,customizer,bitmask,stack){var isPartial=bitmask&PARTIAL_COMPARE_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Assume cyclic values are equal.
var stacked=stack.get(array);if(stacked&&stack.get(other)){return stacked==other;}var index=-1,result=true,seen=bitmask&UNORDERED_COMPARE_FLAG?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!seen.has(othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,customizer,bitmask,stack))){return seen.add(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,customizer,bitmask,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}/**
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
 */function equalByTag(object,other,tag,equalFunc,customizer,bitmask,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&PARTIAL_COMPARE_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=UNORDERED_COMPARE_FLAG;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),equalFunc,customizer,bitmask,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}/**
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
 */function equalObjects(object,other,equalFunc,customizer,bitmask,stack){var isPartial=bitmask&PARTIAL_COMPARE_FLAG,objProps=keys(object),objLength=objProps.length,othProps=keys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked&&stack.get(other)){return stacked==other;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,customizer,bitmask,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=nativeGetSymbols?overArg(nativeGetSymbols,Object):stubArray;/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=objectToString.call(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):undefined;if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */function hasPath(object,path,hasFunc){path=isKey(path,object)?[path]:castPath(path);var result,index=-1,length=path.length;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result){return result;}var length=object?object.length:0;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */function initCloneArray(array){var length=array.length,result=array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object);}}/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value==='undefined'?'undefined':_typeof(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */function isStrictComparable(value){return value===value&&!isObject(value);}/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */var stringToPath=memoize(function(string){string=toString(string);var result=[];if(reLeadingDot.test(string)){result.push('');}string.replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,'$1'):number||match);});return result;});/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
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
 */function memoize(func,resolver){if(typeof func!='function'||resolver&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result);return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Assign cache to `_.memoize`.
memoize.Cache=MapCache;/**
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
 */function eq(value,other){return value===other||value!==value&&other!==other;}/**
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
 */function isArguments(value){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}/**
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
 */var isArray=Array.isArray;/**
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
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
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
 */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;/**
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
 */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 8-9 which returns 'object' for typed array and other constructors.
var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}/**
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
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
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
 */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return!!value&&(type=='object'||type=='function');}/**
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
 */function isObjectLike(value){return!!value&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}/**
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
 */function isSymbol(value){return(typeof value==='undefined'?'undefined':_typeof(value))=='symbol'||isObjectLike(value)&&objectToString.call(value)==symbolTag;}/**
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
 */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
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
 */function toString(value){return value==null?'':baseToString(value);}/**
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
 */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}/**
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
 */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}/**
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
 */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
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
 */function identity(value){return value;}/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name, the created function returns the
 * property value for a given element. If `func` is an array or object, the
 * created function returns `true` for elements that contain the equivalent
 * source properties, otherwise it returns `false`.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Util
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, _.iteratee(['user', 'fred']));
 * // => [{ 'user': 'fred', 'age': 40 }]
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, _.iteratee('user'));
 * // => ['barney', 'fred']
 *
 * // Create custom iteratee shorthands.
 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
 *     return func.test(string);
 *   };
 * });
 *
 * _.filter(['abc', 'def'], /ef/);
 * // => ['def']
 */function iteratee(func){return baseIteratee(typeof func=='function'?func:baseClone(func,true));}/**
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
 */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[];}/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}module.exports=iteratee;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(0),__webpack_require__(4)(module));/***/},/* 35 *//***/function(module,exports,__webpack_require__){"use strict";/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as the `TypeError` message for "Functions" methods. */var FUNC_ERROR_TEXT='Expected a function';/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max;/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number} Returns the timer id.
 */function baseDelay(func,wait,args){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return setTimeout(function(){func.apply(undefined,args);},wait);}/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */function baseRest(func,start){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=array;return apply(func,this,otherArgs);};}/**
 * Defers invoking the `func` until the current call stack has cleared. Any
 * additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to defer.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.defer(function(text) {
 *   console.log(text);
 * }, 'deferred');
 * // => Logs 'deferred' after one or more milliseconds.
 */var defer=baseRest(function(func,args){return baseDelay(func,1,args);});module.exports=defer;/***/},/* 36 *//***/function(module,exports,__webpack_require__){"use strict";/* WEBPACK VAR INJECTION */(function(global){var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as references for various `Number` constants. */var INFINITY=1/0;/** `Object#toString` result references. */var symbolTag='[object Symbol]';/** Used to match HTML entities and HTML characters. */var reUnescapedHtml=/[&<>"'`]/g,reHasUnescapedHtml=RegExp(reUnescapedHtml.source);/** Used to map characters to HTML entities. */var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','`':'&#96;'};/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */function basePropertyOf(object){return function(key){return object==null?undefined:object[key];};}/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */var escapeHtmlChar=basePropertyOf(htmlEscapes);/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */var objectToString=objectProto.toString;/** Built-in value references. */var _Symbol=root.Symbol;/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
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
 */function isObjectLike(value){return!!value&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}/**
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
 */function isSymbol(value){return(typeof value==='undefined'?'undefined':_typeof(value))=='symbol'||isObjectLike(value)&&objectToString.call(value)==symbolTag;}/**
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
 */function toString(value){return value==null?'':baseToString(value);}/**
 * Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
 * their corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * Backticks are escaped because in IE < 9, they can break out of
 * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
 * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
 * [#133](https://html5sec.org/#133) of the
 * [HTML5 Security Cheatsheet](https://html5sec.org/) for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */function escape(string){string=toString(string);return string&&reHasUnescapedHtml.test(string)?string.replace(reUnescapedHtml,escapeHtmlChar):string;}module.exports=escape;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(0));/***/},/* 37 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _object=__webpack_require__(1);var _object2=_interopRequireDefault(_object);var _extend=__webpack_require__(3);var _extend2=_interopRequireDefault(_extend);var _uniqueId=__webpack_require__(2);var _uniqueId2=_interopRequireDefault(_uniqueId);var _isString=__webpack_require__(8);var _isString2=_interopRequireDefault(_isString);var _isFunction=__webpack_require__(9);var _isFunction2=_interopRequireDefault(_isFunction);var _some=__webpack_require__(19);var _some2=_interopRequireDefault(_some);var _splice=__webpack_require__(20);var _splice2=_interopRequireDefault(_splice);var _sort=__webpack_require__(11);var _abstractModel=__webpack_require__(14);var _abstractModel2=_interopRequireDefault(_abstractModel);var _validationFramework=__webpack_require__(6);var _validationFramework2=_interopRequireDefault(_validationFramework);var _iterator=__webpack_require__(38);var _iterator2=_interopRequireDefault(_iterator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof2(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _clone=__webpack_require__(18);// Default options for `Collection#set`.
var setOptions={add:true,remove:true,merge:true};var addOptions={add:true,remove:false};/**
 * Abstract Augmented Collection <br/>
 * Supports: <ul>
 * <li>Validation and Schemas</li>
 * <li>Security</li>
 * </ul>
 * @class Augmented.Collection
 * @memberof Augmented
 * @extends Augmented.Object
 */var AbstractCollection=function(_AugmentedObject){_inherits(AbstractCollection,_AugmentedObject);function AbstractCollection(models,options){_classCallCheck(this,AbstractCollection);var _this=_possibleConstructorReturn(this,(AbstractCollection.__proto__||Object.getPrototypeOf(AbstractCollection)).call(this,options));_this.length=0;_this.models=[];_this._byId={};_this.schema=null;_this.validationMessages={valid:true};if(!options){options={};}_this.preinitialize(models,options);if(options.model){_this.model=options.model;}if(options.comparator!==void 0){_this.comparator=options.comparator;}_this._reset();_this.initialize(models,options);if(models){_this.reset(models,(0,_extend2.default)({silent:true},options));}if(!_this.model){_this.model=new _abstractModel2.default();}return _this;}_createClass(AbstractCollection,[{key:"preinitialize",/**
     * Schema property
     * @property {object} schema The JSON schema from this collection
     * @memberof Collection
     *//**
     * Validation Message property
     * @property {object} validationMessages The property holding validation message data
     * @memberof Collection
     */value:function preinitialize(models,options){}},{key:"initialize",value:function initialize(models,options){}},{key:"toJSON",// The JSON representation of a Collection is an array of the
// models" attributes.
value:function toJSON(){//return this.map( (model) => { return model.toJSON(options); });
var i=0;var out=[],l=this.models.length;for(i=0;i<l;i++){out[i]=this.models[i].toJSON();}return out;}},{key:"add",/*map(collection, interatee) {
      return _map(collection, interatee);
    };*/// Add a model, or list of models to the set. `models` may be Backbone
// Models or raw JavaScript objects to be converted to Models, or any
// combination of the two.
value:function add(models,options){return this.set(models,(0,_extend2.default)({merge:false},options,addOptions));}},{key:"remove",// Remove a model, or a list of models from the set.
value:function remove(models,options){options=(0,_extend2.default)({},options);var singular=Array.isArray(models);models=singular?[models]:models.slice();var removed=this._removeModels(models,options);if(!options.silent&&removed.length){options.changes={added:[],merged:[],removed:removed};this.trigger("update",this,options);}return singular?removed[0]:removed;}},{key:"set",// Update a collection by `set`-ing a new list of models, adding new ones,
// removing models that are no longer present, and merging models that
// already exist in the collection, as necessary. Similar to **Model#set**,
// the core operation for updating the data contained by the collection.
value:function set(models,options){if(models===null){return;}options=(0,_extend2.default)({},setOptions,options);if(options.parse&&!this._isModel(models)){models=this.parse(models,options)||[];}//console.log("models", models);
var singular=!Array.isArray(models);models=singular?[models]:models.slice();var at=options.at;if(at!=null)at=+at;if(at>this.length)at=this.length;if(at<0)at+=this.length+1;var set=[];var toAdd=[];var toMerge=[];var toRemove=[];var modelMap={};var add=options.add;var merge=options.merge;var remove=options.remove;var sort=false;var sortable=this.comparator&&at==null&&options.sort!==false;var sortAttr=(0,_isString2.default)(this.comparator)?this.comparator:null;// Turn bare objects into model references, and prevent invalid models
// from being added.
var model=void 0,i=void 0;var l=models.length;for(i=0;i<l;i++){model=models[i];// If a duplicate is found, prevent it from being added and
// optionally merge it into the existing model.
var existing=this.get(model);if(existing){if(merge&&model!==existing){var attrs=this._isModel(model)?model.attributes:model;if(options.parse)attrs=existing.parse(attrs,options);existing.set(attrs,options);toMerge.push(existing);if(sortable&&!sort)sort=existing.hasChanged(sortAttr);}if(!modelMap[existing.cid]){modelMap[existing.cid]=true;set.push(existing);}models[i]=existing;// If this is a new, valid model, push it to the `toAdd` list.
}else if(add){model=models[i]=this._prepareModel(model,options);if(model){toAdd.push(model);this._addReference(model,options);modelMap[model.cid]=true;set.push(model);}}}// Remove stale models.
if(remove){for(i=0;i<this.length;i++){model=this.models[i];if(!modelMap[model.cid])toRemove.push(model);}if(toRemove.length)this._removeModels(toRemove,options);}// See if sorting is needed, update `length` and splice in new models.
var orderChanged=false;var replace=!sortable&&add&&remove;if(set.length&&replace){orderChanged=this.length!==set.length||(0,_some2.default)(this.models,function(m,index){return m!==set[index];});this.models.length=0;(0,_splice2.default)(this.models,set,0);this.length=this.models.length;}else if(toAdd.length){if(sortable){sort=true;}(0,_splice2.default)(this.models,toAdd,at==null?this.length:at);this.length=this.models.length;}// Silently sort the collection if appropriate.
if(sort)this.sort({silent:true});// Unless silenced, it"s time to fire all appropriate add/sort/update events.
if(!options.silent){for(i=0;i<toAdd.length;i++){if(at!=null)options.index=at+i;model=toAdd[i];model.trigger("add",model,this,options);}if(sort||orderChanged)this.trigger("sort",this,options);if(toAdd.length||toRemove.length||toMerge.length){options.changes={added:toAdd,removed:toRemove,merged:toMerge};this.trigger("update",this,options);}}// Return the added (or merged) model (or models).
return singular?models[0]:models;}},{key:"reset",// When you have more items than you want to add or remove individually,
// you can reset the entire set with a new list of models, without firing
// any granular `add` or `remove` events. Fires `reset` when finished.
// Useful for bulk operations and optimizations.
value:function reset(models,options){options=options?_clone(options):{};for(var i=0;i<this.models.length;i++){this._removeReference(this.models[i],options);}options.previousModels=this.models;this._reset();models=this.add(models,(0,_extend2.default)({silent:true},options));if(!options.silent)this.trigger("reset",this,options);return models;}},{key:"push",// Add a model to the end of the collection.
value:function push(model,options){return this.add(model,(0,_extend2.default)({at:this.length},options));}},{key:"pop",// Remove a model from the end of the collection.
value:function pop(options){var model=this.at(this.length-1);return this.remove(model,options);}},{key:"unshift",// Add a model to the beginning of the collection.
value:function unshift(model,options){return this.add(model,(0,_extend2.default)({at:0},options));}},{key:"shift",// Remove a model from the beginning of the collection.
value:function shift(options){var model=this.at(0);return this.remove(model,options);}},{key:"slice",// Slice out a sub-array of models from the collection.
value:function slice(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return this.models.slice(args);}},{key:"get",// Get a model from the set by id, cid, model object with id or cid
// properties, or an attributes object that is transformed through modelId.
value:function get(obj){if(obj==null){return void 0;}return this._byId[obj]||this._byId[this.modelId(this._isModel(obj)?obj.attributes:obj)]||obj.cid&&this._byId[obj.cid];}},{key:"has",// Returns `true` if the model is in the collection.
value:function has(obj){return this.get(obj)!==null;}},{key:"at",// Get the model at the given index.
value:function at(index){if(index<0){index+=this.length;}return this.models[index];}},{key:"where",// Return models with matching attributes. Useful for simple cases of
// `filter`.
value:function where(attrs,first){return this[first?"find":"filter"](attrs);}},{key:"findWhere",// Return the first model with matching attributes. Useful for simple cases
// of `find`.
value:function findWhere(attrs){return this.where(attrs,true);}},{key:"sort",// Force the collection to re-sort itself. You don"t need to call this under
// normal circumstances, as the set will maintain sort order as each item
// is added.
value:function sort(options){var comparator=this.comparator;if(!comparator)throw new Error("Cannot sort a set without a comparator");options||(options={});var length=comparator.length;if((0,_isFunction2.default)(comparator))comparator=comparator.bind(this);// Run sort based on type of `comparator`.
if(length===1||(0,_isString2.default)(comparator)){this.models=this.sortBy(comparator);}else{this.models.sort(comparator);}if(!options.silent)this.trigger("sort",this,options);return this;}},{key:"pluck",// Pluck an attribute from each model in the collection.
value:function pluck(attr){var i=0;var out=[],l=this.models.length;for(i=0;i<l;i++){out[i]=this.models[i].toJSON()[attr];}return out;//return this.map(attr + "");
}},{key:"fetch",value:function fetch(options){}},{key:"create",// Create a new instance of a model in this collection. Add the model to the
// collection immediately, unless `wait: true` is passed, in which case we
// wait for the server to agree.
value:function create(model,options){options=options?_clone(options):{};var wait=options.wait;model=this._prepareModel(model,options);if(!model)return false;if(!wait)this.add(model,options);var collection=this;var success=options.success;options.success=function(m,resp,callbackOpts){if(wait)collection.add(m,callbackOpts);if(success)success.call(callbackOpts.context,m,resp,callbackOpts);};model.save(null,options);return model;}},{key:"parse",// **parse** converts a response into a list of models to be added to the
// collection. The default implementation is just to pass it through.
value:function parse(resp,options){return resp;}},{key:"clone",// Create a new collection with an identical list of models as this one.
value:function clone(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator});}},{key:"modelId",// Define how to uniquely identify models in the collection.
value:function modelId(attrs){if(attrs&&this.model&&this.model.idAttribute){return attrs[this.model.idAttribute||"id"];}else{return"id";}}},{key:"values",// Get an iterator of all models in this collection.
value:function values(){return new _iterator2.default(this,ITERATOR_VALUES);}},{key:"keys",// Get an iterator of all model IDs in this collection.
value:function keys(){return new _iterator2.default(this,ITERATOR_KEYS);}},{key:"entries",// Get an iterator of all [ID, model] tuples in this collection.
value:function entries(){return new _iterator2.default(this,ITERATOR_KEYSVALUES);}},{key:"_reset",// Private method to reset all internal state. Called when the collection
// is first initialized or reset.
value:function _reset(){this.length=0;this.models=[];this._byId={};}},{key:"_prepareModel",// Prepare a hash of attributes (or other model) to be added to this
// collection.
value:function _prepareModel(attrs,options){if(this._isModel(attrs)){if(!attrs.collection)attrs.collection=this;return attrs;}options=options?_clone(options):{};options.collection=this;var model=new _abstractModel2.default(attrs,options);// used to be this.model, may be a problem if a custom model is passed.
if(!model.validationError){return model;}this.trigger("invalid",this,model.validationError,options);return false;}},{key:"_removeModels",// Internal method called by both remove and set.
value:function _removeModels(models,options){var removed=[];for(var i=0;i<models.length;i++){var model=this.get(models[i]);if(!model)continue;var index=this.indexOf(model);doctor;this.models.splice(index,1);this.length--;// Remove references before triggering "remove" event to prevent an
// infinite loop. #3693
delete this._byId[model.cid];var id=this.modelId(model.attributes);if(id!=null)delete this._byId[id];if(!options.silent){options.index=index;model.trigger("remove",model,this,options);}removed.push(model);this._removeReference(model,options);}return removed;}},{key:"_isModel",// Method for checking whether an object should be considered a model for
// the purposes of adding to the collection.
value:function _isModel(model){return model instanceof _abstractModel2.default;}},{key:"_addReference",// Internal method to create a model's ties to a collection.
value:function _addReference(model,options){this._byId[model.cid]=model;var id=this.modelId(model.attributes);if(id!=null)this._byId[id]=model;model.on("all",this._onModelEvent,this);}},{key:"_removeReference",// Internal method to sever a model's ties to a collection.
value:function _removeReference(model,options){delete this._byId[model.cid];var id=this.modelId(model.attributes);if(id!=null)delete this._byId[id];if(this===model.collection)delete model.collection;model.off("all",this._onModelEvent,this);}},{key:"_onModelEvent",// Internal method called every time a model in the set fires an event.
// Sets need to update their indexes when models change ids. All other
// events simply proxy through. "add" and "remove" events that originate
// in other collections are ignored.
value:function _onModelEvent(event,model,collection,options){if(model){if((event==="add"||event==="remove")&&collection!==this)return;if(event==="destroy")this.remove(model,options);if(event==="change"){var prevId=this.modelId(model.previousAttributes());var id=this.modelId(model.attributes);if(prevId!==id){if(prevId!=null)delete this._byId[prevId];if(id!=null)this._byId[id]=model;}}}this.trigger.apply(this,arguments);}},{key:"supportsValidation",/**
     * supportsValidation - Returns True if this collection supports validation
     * @method supportsValidation
     * @memberof Collection
     * @returns {boolean} Returns True if this collection supports validation
     */value:function supportsValidation(){return this.schema&&this.schema!=={};}},{key:"isValid",/**
     * isValid - Returns True if this collection is valid
     * @method isValid
     * @memberof Collection
     * @returns {boolean} Returns True if this collection is valid
     */value:function isValid(){return this.validationMessages?this.validationMessages.valid:true;}},{key:"getValidationMessages",/**
     * getValidationMessages - Returns the validation messages
     * @method getValidationMessages
     * @memberof Collection
     * @returns {array} Returns the message is an array of objects.
     */value:function getValidationMessages(){return this.validationMessages&&this.validationMessages.messages?this.validationMessages.messages:[];}},{key:"validate",/**
     * Validates the collection
     * @method validate
     * @memberof Collection
     * @returns {array} Returns array of message from validation
     */value:function validate(){if(this.supportsValidation()){// validate from Validator
var messages=[];this.validationMessages.messages=messages;this.validationMessages.valid=true;var a=this.toJSON(),l=a&&Array.isArray(a)?a.length:0;var i=0;var v=new _validationFramework2.default();//console.debug("AUGMENTED: Collection Validate: Beginning with " + l + " models.");
for(i=0;i<l;i++){messages[i]=v.validate(a[i],this.schema);if(!messages[i].valid){this.validationMessages.valid=false;}}//logger.debug("AUGMENTED: Collection Validate: Completed isValid " + this.validationMessages.valid);
}else{this.validationMessages.valid=true;}return this.validationMessages;}},{key:"sync",/**
     * Collecion.sync
     * @method sync
     * @memberof Collection
     */value:function sync(method,model,options){}},{key:"save",/**
     * Collection.save - Saves the collection as a "create"
     * @method save
     * @memberof Collection
     */value:function save(options){this.sync("create",this,options);}},{key:"update",/**
     * Collection.update - Updates the collection as an "update"
     * @method update
     * @memberof Collection
     */value:function update(options){this.sync("update",this,options);}},{key:"remove",/**
     * Collection.remove - Remove from the collection as a "delete"
     * @method remove
     * @memberof Collection
     */value:function remove(options){this.sync("delete",this,options);}},{key:"sortByKey",/**
     * sortByKey - Sorts the collection by a property key
     * @method sortByKey
     * @param {object} key The key to sort by
     * @memberof Collection
     */value:function sortByKey(key){if(key){var data=this.toJSON();if(data){var sorted=(0,_sort.sortObjects)(data,key);this.reset(sorted);}}}},{key:"isEmpty",/**
     * Collection.isEmpty - returns true is the collection is empty
     * @method isEmpty
     * @memberof Collection
     * @returns {boolean} returns true is the collection is empty
     */value:function isEmpty(){return this.length===0;}},{key:"size",/**
     * Collection.size - returns the size of the collection
     * @method size
     * @memberof Collection
     * @returns {number} returns the size of the collection
     */value:function size(){return this.length;}},{key:"toString",/**
     * toString - returns the collection data as a string
     * @method toString
     * @memberof Collection
     * @returns {string}returns the collection data as a string
     */value:function toString(){return JSON.stringify(this.toJSON());}}]);return AbstractCollection;}(_object2.default);exports.default=AbstractCollection;;/***/},/* 38 *//***/function(module,exports,__webpack_require__){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}// CollectionIterator
// ------------------
// This "enum" defines the three possible kinds of values which can be emitted
// by a CollectionIterator that correspond to the values(), keys() and entries()
// methods on Collection, respectively.
var ITERATOR_VALUES=1;var ITERATOR_KEYS=2;var ITERATOR_KEYSVALUES=3;// A CollectionIterator implements JavaScript's Iterator protocol, allowing the
// use of `for of` loops in modern browsers and interoperation between
// Backbone.Collection and other JavaScript functions and third-party libraries
// which can operate on Iterables.
var CollectionIterator=function(){function CollectionIterator(collection,kind){_classCallCheck(this,CollectionIterator);this._collection=collection;this._kind=kind;this._index=0;}_createClass(CollectionIterator,[{key:"next",// All Iterators should themselves be Iterable.
/* ???
    if ($$iterator) {
      CollectionIterator.prototype[$$iterator] = function() {
        return this;
      };
    }*/value:function next(){if(this._collection){// Only continue iterating if the iterated collection is long enough.
if(this._index<this._collection.length){var model=this._collection.at(this._index);this._index++;// Construct a value depending on what kind of values should be iterated.
var value=void 0;if(this._kind===ITERATOR_VALUES){value=model;}else{var id=this._collection.modelId(model.attributes);if(this._kind===ITERATOR_KEYS){value=id;}else{// ITERATOR_KEYSVALUES
value=[id,model];}}return{value:value,done:false};}// Once exhausted, remove the reference to the collection so future
// calls to the next method always return done.
this._collection=void 0;}return{value:void 0,done:true};}}]);return CollectionIterator;}();;/***/},/* 39 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * Augmented.Utility.Stack -
 * Standard Stack data structure
 * @class Stack
 * @memberof Augmented.Utility
 */var Stack=function(){function Stack(){_classCallCheck(this,Stack);this._stack=[];}_createClass(Stack,[{key:"empty",/**
     * The empty method clears the stack
     * @method empty
     * @memberof Augmented.Utility.Stack
     */value:function empty(){return this._stack.length===0;}},{key:"peek",/**
     * The peek method returns the first in the stack
     * @method peek
     * @memberof Augmented.Utility.Stack
     * @returns {object} Returns the first object in the stack
     */value:function peek(){return this._stack[0];}},{key:"pop",/**
     * The pop method returns and removes the first in the stack
     * @method pop
     * @memberof Augmented.Utility.Stack
     * @returns {object} Returns the first object in the stack
     */value:function pop(){return this._stack.pop();}},{key:"push",/**
     * The push method adds to the stack
     * @method push
     * @memberof Augmented.Utility.Stack
     * @param {object} item The item to push to the stack
     */value:function push(item){this._stack.push(item);}},{key:"search",/**
     * The search method returns where in the stack an item exists
     * @method search
     * @memberof Augmented.Utility.Stack
     * @returns {number} Returns the index of the item
     */value:function search(item){return this._stack.indexOf(item);}},{key:"size",/**
     * The size method returns the size of the stack
     * @method size
     * @memberof Augmented.Utility.Stack
     * @returns {number} Returns the size of the stack
     */value:function size(){return this._stack.length;}},{key:"clear",/**
     * The clear method clears the stack
     * @method clear
     * @memberof Augmented.Utility.Stack
     */value:function clear(){this._stack.splice(0,this._stack.length);}},{key:"toArray",/**
     * The toArray method returns the stack as an array
     * @method toArray
     * @memberof Augmented.Utility.Stack
     * @returns {array} Returns the stack as an array
     */value:function toArray(){return this._stack;}},{key:"toString",/**
     * The toString method returns the stack as an string
     * @method toString
     * @memberof Augmented.Utility.Stack
     * @returns {string} Returns the stack as an string
     */value:function toString(){return this._stack.toString();}}]);return Stack;}();;exports.default=Stack;/***/},/* 40 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _isString=__webpack_require__(8);var _isString2=_interopRequireDefault(_isString);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * ES6-like Map - than can marshall
 * @class Map
 * @param myData {object} Map data to fill map
 * @memberof Augmented.Utility
 */var AugmentedMap=function(){function AugmentedMap(myData){_classCallCheck(this,AugmentedMap);this._keys=[];this._data={};if(myData){this.marshall(myData);}}_createClass(AugmentedMap,[{key:"set",/**
     * Set the value by key in the map
     * @method set
     * @memberof Augmented.Utility.Map
     * @param {string} key name of the key
     * @param {any} value value for the key
     */value:function set(key,value){if(key!==null&&value!==null){if(!this._data[key]){this._keys.push(key);}this._data[key]=value;}}},{key:"get",/**
     * Get the value by key in the map
     * @method get
     * @memberof Augmented.Utility.Map
     * @param {string} key name of the key
     * @returns {any} The value for the key
     */value:function get(key){return this._data[key];}},{key:"indexOf",/**
     * Index of the key in the map
     * @method indexOf
     * @memberof Augmented.Utility.Map
     * @param {string} key name of the key
     * @returns {number} index of the key
     */value:function indexOf(key){return this._keys.indexOf(key);}},{key:"remove",/**
     * Remove the value by key in the map
     * @method remove
     * @memberof Augmented.Utility.Map
     * @param {string} key name of the key
     */value:function remove(key){var i=this.indexOf(key);this._keys.splice(i,1);delete this._data[key];}},{key:"has",/**
     * Has returns whether a key exists in the map
     * @method has
     * @memberof Augmented.Utility.Map
     * @param {string} key name of the key
     * @returns {boolean} true if the key exists in the map
     */value:function has(key){return this.indexOf(key)!==-1;}},{key:"forEach",/**
     * Iterator forEach key to value in the map
     * @method forEach
     * @memberof Augmented.Utility.Map
     * @param {function} fn callback for the iterator
     */value:function forEach(fn){if(typeof fn!=="function"){return null;}var len=this._keys.length;var i=0,k=void 0;for(i=0;i<len;i++){k=this._keys[i];fn(k,this._data[k],i);}}},{key:"key",/**
     * Get the key for the index in the map
     * @method key
     * @memberof Augmented.Utility.Map
     * @param {number} i index of the key
     * @returns {object} the key at index
     */value:function key(i){return this._keys[i];}},{key:"entries",/**
     * The entries value object in the map
     * @method entries
     * @memberof Augmented.Utility.Map
     * @returns {array} Array of entries value objects
     */value:function entries(){var i=0;var len=this._keys.length,entries=new Array(len);for(i=0;i<len;i++){entries[i]={key:this._keys[i],value:this._data[i]};}return entries;}},{key:"values",/**
     * The values in the map as an Array
     * @method values
     * @memberof Augmented.Utility.Map
     * @returns {array} values as an Array
     */value:function values(){var len=this._keys.length,values=new Array(len);var i=0,key=void 0;for(i=0;i<len;i++){key=this._keys[i];values[i]=this._data[key];}return values;}},{key:"clear",/**
     * Clear the map
     * @method clear
     * @memberof Augmented.Utility.Map
     */value:function clear(){this._keys=[];this._data={};}},{key:"size",/**
     * The size of the map in keys
     * @method size
     * @memberof Augmented.Utility.Map
     * @returns {number} size of map by keys
     */value:function size(){return this._keys.length;}},{key:"toJSON",/**
     * Represent the map in JSON
     * @method toJSON
     * @memberof Augmented.Utility.Map
     * @returns {object} JSON of the map
     */value:function toJSON(){return this._data;}},{key:"toString",/**
     * Represent the map in a String of JSON
     * @method toString
     * @memberof Augmented.Utility.Map
     * @returns {string} Stringified JSON of the map
     */value:function toString(){return JSON.stringify(this._data);}},{key:"isEmpty",// non-es6 API
/**
     * Checks of the map is empty (not ES6)
     * @method isEmpty
     * @memberof Augmented.Utility.Map
     * @returns {boolean} true if the map is empty
     */value:function isEmpty(){return this._keys.length===0;}},{key:"marshall",/**
     * Marshalls a map<br/>
     * dataToMarshall must be the following type of data to parse:
     * JSON object with properties (key/value)
     *
     * @method marshall
     * @param {Augmented.Utility.Map} dataToMarshall Data to marshall as a map
     * @returns {boolean} Returns true on success
     * @memberof Augmented.Utility.Map
     */value:function marshall(dataToMarshall){var dataToParse=void 0;if(dataToMarshall&&dataToMarshall instanceof AugmentedMap){dataToParse=dataToMarshall.toJSON();}else if(dataToMarshall&&dataToMarshall instanceof Object&&Object.keys(dataToMarshall).length>0){dataToParse=dataToMarshall;}else if(dataToMarshall&&(0,_isString2.default)(dataToMarshall)){try{dataToParse=JSON.parse(dataToMarshall);}catch(e){//_logger.warn("AUGMENTED: Map: Could not marshall data: " + JSON.stringify(dataToMarshall));
return false;}}else{//_logger.warn("AUGMENTED: Map: Could not marshall data: " + JSON.stringify(dataToMarshall));
return false;}var props=Object.keys(dataToParse),l=props.length;this._keys=props;this._data=dataToParse;/*let i = 0;
      for (i = 0; i < l; i++) {
        const p = props[i],
              v = dataToParse[p];
        this.set(p, v);
      }*/return true;}}]);return AugmentedMap;}();;exports.default=AugmentedMap;/***/},/* 41 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extend=__webpack_require__(3);var _extend2=_interopRequireDefault(_extend);var _configuration=__webpack_require__(21);var _configuration2=_interopRequireDefault(_configuration);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * Augmented.Utility.AsynchronousQueue -
 * An Async queue for handling async chained functions
 * @class AsynchronousQueue
 * @param {number} timeout The timout period for each process in the queue (optional)
 * @memberof Augmented.Utility
 */var AsynchronousQueue=function(){function AsynchronousQueue(timeout){_classCallCheck(this,AsynchronousQueue);this._timeout=timeout?timeout:_configuration2.default.AsynchronousQueueTimeout;this._queue={};}_createClass(AsynchronousQueue,[{key:"add",/**
     * @method add The Add method for adding processes to the queue
     * @memberof Augmented.Utility.AsynchronousQueue
     */value:function add(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}if(args&&args.length>0){(0,_extend2.default)(this._queue,args);return true;}return false;}},{key:"clear",/**
     * @method clear Clear all processes in the queue
     * @memberof Augmented.Utility.AsynchronousQueue
     */value:function clear(){if(this._queue.length>0){this._queue.splice(0,this._queue.length);}}},{key:"process",/**
     * @method process Process the queue
     * @memberof Augmented.Utility.AsynchronousQueue
     */value:function process(){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}if(args){(0,_extend2.default)(this._queue,args);}var q=this._queue;var l=Object.keys(q).length;//args.length;
var to=this._timeout;if(l<=0){return false;}var chain=function chain(i){if(i>=l||typeof q[i]!=='function'){return false;}setTimeout(function(){q[i]();chain(i+1);},to);};chain(0);return true;}},{key:"timeout",/**
     * @method getTimeout Get the timeout for the queue
     * @memberof Augmented.Utility.AsynchronousQueue
     */get:function get(){return this._timeout;}},{key:"queue",/**
     * @method getQueue get the full queue
     * @memberof Augmented.Utility.AsynchronousQueue
     */get:function get(){return this._queue;}}]);return AsynchronousQueue;}();;exports.default=AsynchronousQueue;/***/},/* 42 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.LoggerFactory=exports.Level=exports.Type=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _pad=__webpack_require__(22);var _pad2=_interopRequireDefault(_pad);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof2(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * A Logger package
 * @namespace Augmented.Logger
 * @memberof Augmented
 *//**
 * Augmented.Logger.Type
 * @name Augmented.Logger.Type
 * @enum {Symbol}
 * @memberof Augmented.Logger
 * @property {Symbol} CONSOLE The console logger (HTML5 console)
 * @property {Symbol} COLOR_CONSOLE The color console logger (HTML5 console)
 * @property {Symbol} REST A REST-based logger
 * @memberof Augmented.Logger
 */var Type=exports.Type={};Type.CONSOLE=Symbol("console");Type.COLOR_CONSOLE=Symbol("colorConsole");Type.REST=Symbol("rest");/**
 * Augmented.Logger.Level
 * @name Augmented.Logger.Level
 * @enum {Symbol}
 * @property {Symbol} INFO The Info level
 * @property {Symbol} DEBUG The debug level
 * @property {Symbol} ERROR The error level
 * @property {Symbol} WARN The warning level
 * @memberof Augmented.Logger
 */var Level=exports.Level={};Level.INFO=Symbol("info");Level.DEBUG=Symbol("debug");Level.ERROR=Symbol("error");Level.WARN=Symbol("warn");/**
 * Augmented Abstract Logger
 * @constructor Augmented.AbstractLogger
 * @param {Augmented.Logger.Level} l The level to initialize the logger with
 * @abstract
 * @memberof Augmented
 */var AbstractLogger=function(){function AbstractLogger(l){_classCallCheck(this,AbstractLogger);this.loggerLevel=l?l:Level.INFO;this.label=Level;this.TIME_SEPERATOR=":";this.DATE_SEPERATOR="-";this.OPEN_GROUP=" [ ";this.CLOSE_GROUP=" ] ";}_createClass(AbstractLogger,[{key:"_getLogTime",value:function _getLogTime(){var now=new Date();var s=""+now.getFullYear()+this.DATE_SEPERATOR+(now.getMonth()+1)+this.DATE_SEPERATOR+now.getDate()+" "+now.getHours()+this.TIME_SEPERATOR+now.getMinutes()+this.TIME_SEPERATOR+now.getSeconds()+this.TIME_SEPERATOR+now.getMilliseconds();return(0,_pad2.default)("                        ",s,false);}},{key:"log",/**
     * log a message
     * @method log
     * @memberof AbstractLogger
     * @param {string} message The message to log
     * @param {Augmented.Logger.Level} level The level of the log message
     * @returns {string} The message
     */value:function log(message,level){var m="";if(message){if(!level){level=Level.INFO;}if(this.loggerLevel===Level.DEBUG&&level===Level.DEBUG){m=this._logMe(""+this._getLogTime()+this.OPEN_GROUP+"DEBUG"+this.CLOSE_GROUP+message,level);}else if(level===Level.ERROR){m=this._logMe(""+this._getLogTime()+this.OPEN_GROUP+"ERROR"+this.CLOSE_GROUP+message,level);}else if(level===Level.WARN){m=this._logMe(""+this._getLogTime()+this.OPEN_GROUP+"WARN "+this.CLOSE_GROUP+message,level);}else if(this.loggerLevel===Level.DEBUG||this.loggerLevel===Level.INFO){m=this._logMe(""+this._getLogTime()+this.OPEN_GROUP+"INFO "+this.CLOSE_GROUP+message,level);}}return m;}},{key:"info",/**
     * Logs a message in info level
     * @method info
     * @param {string} message
     * @memberof AbstractLogger
     */value:function info(message){this.log(message,Level.INFO);}},{key:"error",/**
     * Log a message in error level
     * @method error
     * @param {string} message
     * @memberof AbstractLogger
     */value:function error(message){this.log(message,Level.ERROR);}},{key:"debug",/**
     * Log a message in debug level
     * @method debug
     * @param {string} message
     * @memberof AbstractLogger
     */value:function debug(message){this.log(message,Level.DEBUG);}},{key:"warn",/**
     * Log a message in warn level
     * @method warn
     * @param {string} message
     * @memberof AbstractLogger
     */value:function warn(message){this.log(message,Level.WARN);}},{key:"_logMe",/**
     * logMe method - the actual logger method that logs.  Each instance will have it's own<br/>
     * override this in an instance
     * @example _logMe(message, level) { ... };
     * @method _logMe
     * @param {string} message The message to log
     * @param {string} level The level to log to
     * @returns {string} The message
     * @memberof AbstractLogger
     * @private
     */value:function _logMe(message,level){}}]);return AbstractLogger;}();;var ConsoleLogger=function(_AbstractLogger){_inherits(ConsoleLogger,_AbstractLogger);function ConsoleLogger(l){_classCallCheck(this,ConsoleLogger);return _possibleConstructorReturn(this,(ConsoleLogger.__proto__||Object.getPrototypeOf(ConsoleLogger)).call(this,l));}_createClass(ConsoleLogger,[{key:"_logMe",value:function _logMe(message,level){if(level===Level.INFO){console.info(message);}else if(level===Level.ERROR){console.error(message);}else if(level===Level.DEBUG){console.log(message);}else if(level===Level.WARN){console.warn(message);}else{console.log(message);}return message;}}]);return ConsoleLogger;}(AbstractLogger);;var ColorConsoleLogger=function(_AbstractLogger2){_inherits(ColorConsoleLogger,_AbstractLogger2);function ColorConsoleLogger(l){_classCallCheck(this,ColorConsoleLogger);return _possibleConstructorReturn(this,(ColorConsoleLogger.__proto__||Object.getPrototypeOf(ColorConsoleLogger)).call(this,l));}_createClass(ColorConsoleLogger,[{key:"_logMe",value:function _logMe(message,level){if(level===Level.INFO){console.info("\x1b[36m"+message+"\x1b[0m");}else if(level===Level.ERROR){console.error("\x1b[31m"+message+"\x1b[0m");}else if(level===Level.DEBUG){console.log("\x1b[34m"+message+"\x1b[0m");}else if(level===Level.WARN){console.warn("\x1b[33m"+message+"\x1b[0m");}else{console.log("\x1b[37m"+message+"\x1b[0m");}}}]);return ColorConsoleLogger;}(AbstractLogger);;var RestLogger=function(_AbstractLogger3){_inherits(RestLogger,_AbstractLogger3);function RestLogger(l,uri){_classCallCheck(this,RestLogger);var _this3=_possibleConstructorReturn(this,(RestLogger.__proto__||Object.getPrototypeOf(RestLogger)).call(this,l));_this3.uri=uri;return _this3;}_createClass(RestLogger,[{key:"setURI",value:function setURI(uri){this.uri=uri;}},{key:"_logMe",value:function _logMe(message){// use new ajax promise
/*
      Augmented.ajax({
        url: this.uri,
        method: "POST",
        contentType: "text/plain",
        dataType: "text",
        async: true,
        data: message,
        success: function (data, status) { this.success(); },
        failure: function (data, status) { this.failure(); }
      });
      */}}]);return RestLogger;}(AbstractLogger);;/**
 * Augmented.Logger.LoggerFactory - A logger factory for creating a logger instance
 * @namespace Augmented.Logger.LoggerFactory
 * @memberof Augmented.Logger
 */var LoggerFactory=exports.LoggerFactory=function(){function LoggerFactory(){_classCallCheck(this,LoggerFactory);}_createClass(LoggerFactory,null,[{key:"getLogger",/**
     * getLogger - get an instance of a logger
     * @method getLogger
     * @param {Augmented.Logger.Type} type Type of logger instance
     * @param {Augmented.Logger.Level} level Level to set the logger to
     * @memberof Augmented.Logger.LoggerFactory
     * @returns {Augmented.Logger.abstractLogger} logger Instance of a logger by istance type
     * @example Augmented.Logger.LoggerFactory.getLogger(Augmented.Logger.Type.console, Augmented.Logger.Level.debug);
     */value:function getLogger(type,level){if(type===Type.CONSOLE){return new ConsoleLogger(level);}else if(type===Type.COLOR_CONSOLE){return new ColorConsoleLogger(level);}else if(type===Type.REST){return new RestLogger(level);}}}]);return LoggerFactory;}();;/***/},/* 43 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var before=function before(app){return new Promise(function(resolve,reject){var t=app.beforeInitialize();if(t){resolve(app);}else{reject(new Error("failed before initialize!"));}});},init=function init(app){return new Promise(function(resolve,reject){var t=app.initialize();if(t){resolve(app);}else{reject(new Error("failed initialize!"));}});},after=function after(app){return new Promise(function(resolve,reject){var t=app.afterInitialize();if(t){resolve(app);}else{reject(new Error("failed after initialize!"));}});},setStarted=function setStarted(app){return new Promise(function(resolve,reject){app._started=true;if(app.started){resolve(app);}else{reject(new Error("failed setting started!"));}});},check=function check(app){return new Promise(function(resolve,reject){var t=app.started;if(t){resolve(app);}else{reject(new Error("failed starting!"));}});};/**
 * <p>Application Class for use to define an application.<br/>
 * An application contains metadata and initializers for the application.<br/>
 * <em>Applications track history, and normally would contain the entire single page App startup.</em></p>
 * @class Augmented.Application
 * @param {string} name Name of the application
 * @memberof Augmented
 * @example const app = new Augmented.Application("Awesome");
 * app.start();
 * @example const app = new Augmented.Application();
 * app.name = "My Super Application!";
 * app.setMetadataItem("description", "something very awesome");
 * app.beforeInitialize = () => { do some stuff... };
 * app.start();
 */var Application=function(){function Application(name){_classCallCheck(this,Application);this._metadata={};// preassign a name
if(name){this._metadata["name"]=name;}else{this._metadata["name"]="untitled";}// preset a datastore object
this._metadata["datastore"]={};this._router=null;this._started=false;}_createClass(Application,[{key:"initialize",/** Event for after during startup of the application
     * @method initialize
     * @memberof Application
     */value:function initialize(){return true;}},{key:"beforeInitialize",/** Event for before the startup of the application
     * @method beforeInitialize
     * @memberof Application
     */value:function beforeInitialize(){return true;}},{key:"afterInitialize",/** Event for after the startup of the application
     * @method afterInitialize
     * @memberof Application
     */value:function afterInitialize(){return true;}},{key:"setMetadataItem",/** Set a specific item in metadata
     * @method setMetadataItem
     * @param {string} key Key to set
     * @param {object} value Value of the key
     * @memberof Application
     */value:function setMetadataItem(key,value){this._metadata[key]=value;}},{key:"getMetadataItem",/** Get a specific item in metadata
     * @method getMetadataItem
     * @param {string} key Key
     * @returns {object} value of the key
     * @memberof Application
     */value:function getMetadataItem(key){return this._metadata[key];}},{key:"registerRouter",/** Register a Router - adds routes to the application
     * @method registerRouter
     * @param {Router} router Router to register
     * @memberof Application
     */value:function registerRouter(router){if(router){this._router=router;}}},{key:"start",/** Event to start the application and history
     * @method start
     * @returns {Promise} Promise.Resolve or Promise.Reject based on success
     * @memberof Application
     */value:function start(){var app=this;return new Promise(function(resolve,reject){before(app).then(init).then(after).then(setStarted).then(check).then(function(app){resolve(app);}).catch(function(e){app.stop();reject(e);});});}},{key:"stop",/** Event to stop the application and history
     * @method stop
     * @memberof Application
     */value:function stop(){this._started=false;}},{key:"router",/**
     * The router property of the application
     * @property router
     * @memberof Application
     */get:function get(){return this._router;},set:function set(router){this._router=router;}},{key:"started",/**
     * The started property of the application
     * @property started
     * @memberof Application
     * @returns {boolean} Returns the property of the started Event
     */get:function get(){return this._started;}},{key:"name",/** The application name
     * @property name
     * @memberof Application
     */get:function get(){return this.getMetadataItem("name");},set:function set(n){return this.setMetadataItem("name",n);}},{key:"metadata",/** The metadata map
    * @property metadata
    * @memberof Application
    * @returns Map of metadata in an Augmented.Utility.Map
    */get:function get(){return this._metadata;}},{key:"datastore",/** Gets the datastore for the application
     * @property {Augmented.Model|object}datastore
     * @memberof Application
     */get:function get(){return this.getMetadataItem("datastore");},set:function set(ds){if(ds){this.setMetadataItem("datastore",ds);}}}]);return Application;}();;exports.default=Application;/***/},/* 44 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}//TODO: add a library or make your own.
//var resourceBundle = (!resourceBundle) ? new i18nBase() : resourceBundle;
/**
 * ResourceBundle Object used for configuration of a bundle
 * @namespace Augmented.Utility.BundleObject
 * @memberof Augmented.Utility
 * @name Augmented.Utility.BundleObject
 * @property {string} name Name/uri/file of the bundle
 * @property {string} mode Bundlefile type (default: both)
 * @property {boolean} cache Cache reading from bundle (default: true)
 */var BundleObject=exports.BundleObject={name:'',mode:'both',cache:true};/**
 * Augmented.Utility.ResourceBundle
 * @namespace Augmented.Utility.ResourceBundle
 * @memberof Augmented.Utility
 * @name Augmented.Utility.ResourceBundle
 */var ResourceBundle=exports.ResourceBundle=function(){function ResourceBundle(){// setup a library
_classCallCheck(this,ResourceBundle);}_createClass(ResourceBundle,null,[{key:'getBundle',/**
    * Gets the bundle(s) and registers to Augmented.Utility.ResourceBundle
    * @method getBundle
    * @param {Augmented.Utility.BundleObject} bundle Bundle to get
    * @memberof Augmented.Utility.ResourceBundle
    * @returns {object} returns a bundle
    */value:function getBundle(){return{};//resourceBundle.properties.apply(this, arguments);
}},{key:'getString',/**
     * Gets a string from the registered bundle
     * @method getString
     * @memberof Augmented.Utility.ResourceBundle
     */value:function getString(){return"";//resourceBundle.prop.apply(this, arguments);
}}]);return ResourceBundle;}();;/**
 * Reads a message out of the bundle
 * @namespace Augmented.Utility.MessageReader
 * @memberof Augmented.Utility
 * @name Augmented.Utility.MessageReader
 */var MessageReader=exports.MessageReader=function(){function MessageReader(){_classCallCheck(this,MessageReader);}_createClass(MessageReader,null,[{key:'getMessage',/**
     * getMessage - get the message out of the bundle.<br/>
     * If message is not found, then ResourceBundle returns the key
     * wrapped in square brackets
     * loop through the fallback path of the key by removing the
     * last attribute and searching the bundle again
     * stop when you get back a real message (not just the [key])
     * @method getMessage
     * @memberof Augmented.Utility.MessageReader
     * @param {string} key The key to return from the bundle
     */value:function getMessage(key){var delimiter=".";// try getting the message out of the bundle
var msg=ResourceBundle.getString(key),last=key.length,originalKey=key;// if message is not found, then ResourceBundle returns the key
// wrapped in square brackets
// loop through the fallback path of the key by removing the
// last attribute and searching the bundle again
// stop when you get back a real message (not just the [key])
while(last>0&&msg=='['+key+']'){last=key.lastIndexOf(delimiter);key=key.substring(0,last);msg=ResourceBundle.getString(key);}// if the original key or a fallback was found, return the
// message
// otherwise return the original key with square brackets
// (default jquery.i18n.properties plugin result)
return key?msg:"["+originalKey+"]";}}]);return MessageReader;}();;/**
 * <p>Augmented.Utility.MessageKeyFormatter<br/>
 *
 * Concatenate the pieces of the message together if a portion of the key is
 * missing, the rest of the key is ignored. <em>ex. if the "rule" attribute is
 * missing, then the key will return with the message.level + message.kind only</em></p>
 * @namespace Augmented.Utility.MessageKeyFormatter
 * @memberof Augmented.Utility
 * @name Augmented.Utility.MessageKeyFormatter
 */var MessageKeyFormatter=exports.MessageKeyFormatter=function(){function MessageKeyFormatter(){_classCallCheck(this,MessageKeyFormatter);this.delimiter=".";}_createClass(MessageKeyFormatter,null,[{key:'format',/**
    * Key Delimiter
    * @property {string} delimiter The delimter used to seperate each key
    * @memberof Augmented.Utility.MessageKeyFormatter
    *//**
     * Format a key for a message
     * @function format
     * @param {message} message The message to format
     * @memberof Augmented.Utility.MessageKeyFormatter
     * @returns The key to lookup in a bundle
     */value:function format(message){var key="";if(message){var x=message.level&&(key+=message.level,message.kind&&(key+=this.delimiter+message.kind,message.rule&&(key+=this.delimiter+message.rule,message.values.title&&(key+=this.delimiter+message.values.title))));}return key?key:"";}}]);return MessageKeyFormatter;}();;/***/},/* 45 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Entry=exports.AuthenticationFactory=exports.Context=exports.Principal=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _client=__webpack_require__(46);var Client=_interopRequireWildcard(_client);var _clientType=__webpack_require__(10);var _clientType2=_interopRequireDefault(_clientType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * Security Package and API
 * @namespace Augmented.Security
 * @memberof Augmented
 *//**
 * Pricipal object for use in security as part of the abstract implimentation
 * @class Principal
 * @memberof Augmented.Security
 * @property {string} fullName The full name of the principal
 * @property {number} id The id of the principal
 * @property {string} login The login of the principal
 * @property {string} email The email of the principal
 */var Principal=exports.Principal=function(){function Principal(options){_classCallCheck(this,Principal);if(options&&options.id){this._id=options.id;}else{this._id=0;}if(options&&options.email){this._email=options.email;}else{this._email="";}if(options&&options.login){this._login=options.login;}else{this._login="";}if(options&&options.fullName){this._fullName=options.fullName;}else{this._fullName="";}}_createClass(Principal,[{key:"fullName",get:function get(){return this._fullName;},set:function set(name){this._fullName=name;}},{key:"id",get:function get(){return this._id;},set:function set(id){this._id=id;}},{key:"login",get:function get(){return this._login;},set:function set(login){this._login=login;}},{key:"email",get:function get(){return this._email;},set:function set(email){this._email=email;}}]);return Principal;}();;/**
* Augmented.Security.Context
* Used as a security data storage class
* @class Context
* @param {Augmented.Security.Principal} principal The principal for this context
* @param {array} permissions Permissions to add to the context
* @memberof Augmented.Security
*/var Context=exports.Context=function(){function Context(principal,permissions){_classCallCheck(this,Context);this._principal=principal?principal:new Principal().login="guest";this._permissions=permissions?permissions:[];}_createClass(Context,[{key:"addPermission",/**
     * addPermission - Add a new permission for a principal
     * @method addPermission
     * @param {string} permission
     * @memberof Augmented.Security.Context
     */value:function addPermission(p){this._permissions.push(p);}},{key:"removePermission",/**
     * removePermission - Remove a permission for a principal
     * @method removePermission
     * @param {string} permission
     * @memberof Augmented.Security.Context
     */value:function removePermission(p){var i=this._permissions.indexOf(p);this._permissions.splice(i,1);}},{key:"hasPermission",/**
     * hasPermission - checks for a permission for this principal
     * @method hasPermission
     * @param {string} permission
     * @memberof Augmented.Security.Context
     */value:function hasPermission(p){return this._permissions.indexOf(p)!==-1;}},{key:"principal",/**
     * getPrincipal - get the principal of this context
     * @method getPrincipal
     * @memberof Augmented.Security.Context
     * @returns {Augmented.Security.Principal} principal The principal of this context
     */get:function get(){return this._principal;}},{key:"permissions",/**
     * getPermissions - Get all the permissions for a principal
     * @method getPermissions
     * @memberof Augmented.Security.Context
     * @returns {array} permissions All permissions
     */get:function get(){return this._permissions;},/**
     * setPermissions - Set all permissions for a principal
     * @method setPermissions
     * @param {array} permissions
     * @memberof Augmented.Security.Context
     */set:function set(p){this._permissions=p;}}]);return Context;}();;/**
* AuthenticationFactory Class -
* Returns a client of given type for use with security
* @namespace Augmented.Security.AuthenticationFactory
* @memberof Augmented.Security
* @static
*/var AuthenticationFactory=exports.AuthenticationFactory=function(){function AuthenticationFactory(){_classCallCheck(this,AuthenticationFactory);}_createClass(AuthenticationFactory,null,[{key:"getSecurityClient",/**
     * Get an instance of a security client
     * @method getSecurityClient
     * @param {Augmented.Security.ClientType} clientType The Client Type to return
     * @returns {Augmented.Security.Client} Returns a security client instance
     * @static
     * @memberof Augmented.Security.AuthenticationFactory
     */value:function getSecurityClient(clientType){if(clientType===_clientType2.default.OAUTH2){return new Client.OAUTH2Client();}else if(clientType===_clientType2.default.ACL){return new Client.ACLClient();}return null;}}]);return AuthenticationFactory;}();;/**
* Augmented.Security.Entry -
* Used to secure a resource via permissions
* @class Entry
* @memberof Augmented.Security
* @param {array} permissions Permissions to add to the entry (optional)
* @param {boolean} negaive Sets negative permissions (optional)
*/var Entry=exports.Entry=function(){function Entry(p,neg){_classCallCheck(this,Entry);this._permissions=p?p:[];this._neg=neg?neg:false;}_createClass(Entry,[{key:"isNegative",/**
     * Gets the permissions
     * @property {array} permissions
     * @memberof Augmented.Security.Entry
     * @private
     *//**
    * Negative flag
    * @property {boolean} isNegative
    * @memberof Augmented.Security.Entry
    */value:function isNegative(){return this._neg;}},{key:"addPermission",/**
    * Add a permission
    * @method addPermission
    * @memberof Augmented.Security.Entry
    * @param {string} permission Permission to add
    */value:function addPermission(p){this._permissions.push(p);}},{key:"removePermission",/**
    * Remove a permission
    * @method removePermission
    * @memberof Augmented.Security.Entry
    * @param {string} permission Permission to remove
    */value:function removePermission(p){var i=this._permissions.indexOf(p);this._permissions.splice(i,1);}},{key:"hasPermission",/**
    * Returns if this entry has a permission
    * @method hasPermission
    * @memberof Augmented.Security.Entry
    * @param {string} permission Permission to test for
    * @returns {boolean} Returns true if this entry has this permission
    */value:function hasPermission(p){return this._permissions.indexOf(p)!=-1;}},{key:"setNegative",/**
    * Sets this entry negaive or positive
    * @method setNegative
    * @memberof Augmented.Security.Entry
    * @param {boolean} negative flag True or False
    */value:function setNegative(n){this.neg=n;}},{key:"permissions",/**
    * Gets the permissions
    * @method getPermissions
    * @memberof Augmented.Security.Entry
    * @returns {array} Permissions
    */get:function get(){return this._permissions;},/**
    * Sets the permissions
    * @method setPermissions
    * @memberof Augmented.Security.Entry
    * @param {array} permissions Permissions Array to set
    */set:function set(p){this._permissions=p;}}]);return Entry;}();;/***/},/* 46 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.ACLClient=exports.OAUTH2Client=exports.AbstractSecurityClient=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _object=__webpack_require__(1);var _object2=_interopRequireDefault(_object);var _clientType=__webpack_require__(10);var _clientType2=_interopRequireDefault(_clientType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof2(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * Security client namespace
 * @namespace Augmented.Security.Client
 * @memberof Augmented.Security
 *//**
 * The abstract Security Client - for use to extend your own
 * @class AbstractSecurityClient
 * @property {Augmented.Security.ClientType} type The client type
 * @property {string} uri The base uri
 */var AbstractSecurityClient=exports.AbstractSecurityClient=function(_AugmentedObject){_inherits(AbstractSecurityClient,_AugmentedObject);function AbstractSecurityClient(type){_classCallCheck(this,AbstractSecurityClient);var _this=_possibleConstructorReturn(this,(AbstractSecurityClient.__proto__||Object.getPrototypeOf(AbstractSecurityClient)).call(this));_this._type=type;_this.uri="";return _this;}_createClass(AbstractSecurityClient,[{key:"type",get:function get(){return this._type;}}]);return AbstractSecurityClient;}(_object2.default);;/**
 * The OAUTH2 Client
 * @class Augmented.Security.Client.OAUTH2Client
 * @memberof Augmented.Security.Client
 */var OAUTH2Client=exports.OAUTH2Client=function(_AbstractSecurityClie){_inherits(OAUTH2Client,_AbstractSecurityClie);function OAUTH2Client(){_classCallCheck(this,OAUTH2Client);var _this2=_possibleConstructorReturn(this,(OAUTH2Client.__proto__||Object.getPrototypeOf(OAUTH2Client)).call(this,_clientType2.default.OAUTH2));_this2.accessToken="";_this2.authorizationToken="";return _this2;}_createClass(OAUTH2Client,[{key:"authorize",/**
     * Access Token
     * @property accessToken
     * @memberof Augmented.Security.Client.OAUTH2Client
     *//**
     * Authorization Token
     * @property authorizationToken
     * @memberof Augmented.Security.Client.OAUTH2Client
     *//**
     * Authorize the application/service/module via OAUTH
     * @method authorize
     * @param {string} name The name of the application/service/module
     * @memberof Augmented.Security.Client.OAUTH2Client
     */value:function authorize(name){// TODO: Go authorize the app and get a token
this.authorizationToken="";}},{key:"access",/**
     * access the application/service/module via OAUTH
     * @method access
     * @param {string} principal The principal
     * @memberof Augmented.Security.Client.OAUTH2Client
     * TODO: Refresh the token and store it
     */value:function access(principal){this.accessToken="";}}]);return OAUTH2Client;}(AbstractSecurityClient);;/**
 * Role/Privilege (ACL) Security
 * @class Augmented.Security.Client.ACLClient
 * @memberof Augmented.Security.Client
 */var ACLClient=exports.ACLClient=function(_AbstractSecurityClie2){_inherits(ACLClient,_AbstractSecurityClie2);function ACLClient(){_classCallCheck(this,ACLClient);return _possibleConstructorReturn(this,(ACLClient.__proto__||Object.getPrototypeOf(ACLClient)).call(this,_clientType2.default.ACL));}_createClass(ACLClient,[{key:"authenticate",/**
     * authenticate the user
     * @method authenticate
     * @param {string} username The name of the user (login)
     * @param {string} password The password for the user (not stored)
     * @returns {Augmented.Security.Context} Returns a security context or null is case of failure
     * @memberof Augmented.Security.Client.ACL
     * @throws Error Failed to authenticate
     */value:function authenticate(username,password){var c=null;/*request({
        url: this.uri,
        method: "GET",
        user: username,
        password: password,
        success: function(data, status) {
          const p = new Principal({
            fullName: data.fullName,
            id: data.id,
            login: data.login,
            email: data.email
          });
          c = new securityContext(p, data.permissions);
        },
        failure: function(data, status) {
          // TODO: Bundle this perhaps
          throw new Error("Failed to authenticate with response of - " + status);
        }
      });*/return c;}}]);return ACLClient;}(AbstractSecurityClient);;/***/},/* 47 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});/**
 * Augmented.has
 * @method has
 * @memberof Augmented
 * @param {object} obj The input object
 * @param {object} key The test key
 * @returns {boolean} Returns true of the key exists
 */var has=function has(obj,key){return obj!==null&&hasOwnProperty.call(obj,key);};exports.default=has;/***/},/* 48 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _isObject=__webpack_require__(5);var _isObject2=_interopRequireDefault(_isObject);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var result=function result(prototype){if(!(0,_isObject2.default)(prototype)){return{};}return Object.create(prototype);};/**
 * Augmented.create
 * @method create
 * @memberof Augmented
 * @param {object} prototype The input prototype
 * @param {object} props The properties (optional)
 * @returns {object} Returns the created object
 */var create=function create(prototype,props){var o=result(prototype);if(props){Object.assign(o,props);}return o;};exports.default=create;/***/},/* 49 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _isFunction=__webpack_require__(9);var _isFunction2=_interopRequireDefault(_isFunction);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * Augmented.result - returns named property in an object
 * simular to underscore .result method
 * @function result
 * @memberof Augmented
 * @returns named property in an object
 */var result=function result(object,property){if(object===null){return;}var value=object[property];return(0,_isFunction2.default)(value)?value.call(object):value;};exports.default=result;/***/},/* 50 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});/**
 * Array.has - returns is a property is in the array (very fast return)
 * @function arrayhas
 * @memberof Augmented
 * @param {array} arr Source array
 * @param {object} key Key to test for
 * @returns true if property is included in an array
 */var arrayHas=function arrayHas(arr,key){return arr.indexOf(key)!==-1;};exports.default=arrayHas;/***/},/* 51 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});/**
 * exec method - Execute a function by name
 * @method exec
 * @memberof Augmented
 * @param {string} functionName The name of the function
 * @param {object} context The context to call from
 * @param {object} args Arguments
 */var exec=function exec(functionName,context){for(var _len=arguments.length,args=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){args[_key-2]=arguments[_key];}var//args = Array.prototype.slice.call(arguments, 2),
namespaces=functionName.split("."),func=namespaces.pop(),l=namespaces.length;var i=0;for(i=0;i<l;i++){context=context[namespaces[i]];}return context[func].apply(context,args);};exports.default=exec;/***/},/* 52 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});/**
 * Augmented.isDefined - Checks and returns if a passed variable is defined
 * @method isDefined
 * @memberof Augmented
 * @param {string} variable to check
 * @returns {boolean} true if value is defined
 */var isDefined=function isDefined(val){return typeof val!="undefined";};exports.default=isDefined;/***/},/* 53 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var fibonacci=exports.fibonacci=function fibonacci(n){var phi=(1+Math.sqrt(5))/2;var asymp=Math.pow(phi,n)/Math.sqrt(5);return Math.round(asymp);};var fibonacciSequence=exports.fibonacciSequence=function fibonacciSequence(l){var fib=[];var i=0;for(i=0;i<l;i++){fib.push(fibonacci(i));}return fib;};/***/}]/******/));});//# sourceMappingURL=augmented-next.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * DOM related functions
 * @class Dom
 * @memberof Presentation
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
     * @memberof Dom
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
     * @memberof Dom
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
     * @memberof Dom
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
     * @memberof Dom
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
     * @memberof Dom
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
     * @memberof Dom
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
     * @memberof Dom
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
     * @memberof Dom
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
     * @memberof Dom
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
     * @memberof Dom
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
     * @memberof Dom
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
     * @memberof Dom
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
     * @memberof Dom
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
     * @memberof Dom
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _colleague = __webpack_require__(15);

var _colleague2 = _interopRequireDefault(_colleague);

var _model = __webpack_require__(4);

var _model2 = _interopRequireDefault(_model);

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _widget = __webpack_require__(21);

var _widget2 = _interopRequireDefault(_widget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
 * @class DecoratorView
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
     * @memberof DecoratorView
     */

    /**
     * Events Property - Do Not Override
     * @property events
     * @memberof DecoratorView
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
     * @memberof DecoratorView
     * @method initialize
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
     * @method remove
     * @memberof DecoratorView
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
     * @method _executeFunctionByName
     * @memberof DecoratorView
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
     * @method bindingAttribute
     * @memberof DecoratorView
     * @returns {string} Binding attribute name
     */
    value: function bindingAttribute() {
      return "data-" + this.name;
    }
  }, {
    key: "injectTemplate",

    /**
     * injectTemplate method - Injects a template at a mount point
     * @method injectTemplate
     * @param {string} template The template to inject
     * @param {Element} mount The mount point as Document.Element or String
     * @memberof DecoratorView
     */
    value: function injectTemplate(template, mount) {
      if (!mount) {
        mount = this.el;
      }
      if (_augmentedjsNext2.default.isString(mount)) {
        mount = document.querySelector(mount);
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
     * @method removeTemplate
     * @param {Element} mount The mount point as Document.Element or String
     * @param {boolean} onlyContent Only remove the content not the mount point
     * @memberof DecoratorView
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
     * @method boundElement
     * @param {string} id The identifier (not id attribute) of the element
     * @memberof DecoratorView
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
     * @method syncBoundElement
     * @param {string} id The identifier (not id attribute) of the element
     * @memberof DecoratorView
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
     * @method syncAllBoundElements
     * @memberof DecoratorView
     */
    value: function syncAllBoundElements() {
      var elements = this.el.querySelectorAll("[" + this.bindingAttribute() + "]");
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
    }
  }, {
    key: "addClass",

    /**
     * addClass - adds a class to a bount element
     * @method addClass
     * @param {string} id The identifier (not id attribute) of the element
     * @param {string} cls The class to add
     * @memberof DecoratorView
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
     * @method removeClass
     * @param {string} id The identifier (not id attribute) of the element
     * @param {string} cls The class to remove
     * @memberof DecoratorView
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
     * @method bindModelChange
     * @param {func} func The function to call when changing (normally render)
     * @memberof DecoratorView
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
     * @method syncModelChange
     * @param {Element} element The element to bind as Document.Element or string
     * @memberof DecoratorView
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
     * @method _syncData
     * @param {Element} element The element to bind as Document.Element or string
     * @memberof DecoratorView
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
     * @method unbindModelChange
     * @param {func} func The function to call when changing (normally render)
     * @memberof DecoratorView
     */
    value: function unbindModelChange(func) {
      this.model.unBind('change', func, this);
    }
  }, {
    key: "unbindModelSync",

    /**
     * unbindModelSync method - unbinds the model changes to a specified bound element
     * @method unbindModelSync
     * @param {Element} element The element to bind as Document.Element or string
     * @memberof DecoratorView
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var Augmented = _interopRequireWildcard(_augmentedjsNext);

var _decorator = __webpack_require__(2);

var _decorator2 = _interopRequireDefault(_decorator);

var _buildTable = __webpack_require__(48);

var _messages = __webpack_require__(24);

var _messages2 = _interopRequireDefault(_messages);

var _request = __webpack_require__(11);

var _request2 = _interopRequireDefault(_request);

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _model = __webpack_require__(4);

var _model2 = _interopRequireDefault(_model);

var _collection = __webpack_require__(5);

var _collection2 = _interopRequireDefault(_collection);

var _localStorageCollection = __webpack_require__(14);

var _localStorageCollection2 = _interopRequireDefault(_localStorageCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import { TABLE_DATA_ATTRIBUTES, csvTableCompile, tsvTableCompile, defaultTableCompile, defaultTableHeader, defaultTableBody, formatValidationMessages, directDOMTableCompile, directDOMTableHeader, directDOMTableBody, directDOMEditableTableBody, directDOMPaginationControl } from "../functions/buildTable.js";


var DEFAULT_KEY = "augmented.localstorage.autotable.key";

/**
 * AutomaticTable<br/>
 * Creates a table automatically via a schema for defintion and a uri/json for data
 * @class AutomaticTable
 * @extends Presentation.DecoratorView
 * @memberof Presentation.Component
 * @example
 * let at = new Presentation.Component.AutomaticTable({
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
      _this.theme = options.theme;
    } else {
      _this.theme = "material";
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
      _this.sortStyle = "client";
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
     * @memberof AutomaticTable
     */

    /**
     * The linkable property - enable links in a row (only works in non-editable tables)
     * @property {boolean} linkable enable/disable linking a row
     * @memberof AutomaticTable
     */

    /**
     * The selectable property - enable selecting a row in table
     * @property {boolean} selectable enable/disable selecting a row
     * @memberof AutomaticTable
     */

    /**
     * The sortable property - enable sorting in table
     * @property {boolean} sortable enable sorting in the table
     * @memberof AutomaticTable
     */

    /**
     * The sortStyle property - setup the sort API
     * @property {string} sortStyle setup the sort API
     * @memberof AutomaticTable
     */

    /**
     * The sortKey property
     * @property {string} sortKey sorted key
     * @private
     * @memberof AutomaticTable
     */

    /**
     * The links property - setup linking structure for links in a row
     * @property {boolean} linkable enable/disable linking a row
     * @example links: {
     * wholeRow: false, // link whole row vs column
     * column: "name", // name of column
     *	link: "rowLink" // callback
     * }
     * @memberof AutomaticTable
     */

    /**
     * The localStorage property - enables localStorage
     * @property {boolean} localStorage The localStorage property
     * @memberof AutomaticTable
     */

    /**
     * The localStorageKey property - set the key for use in storage
     * @property {string} localStorageKey The localStorage key property
     * @memberof AutomaticTable
     */

    /**
     * The editable property - enables editing of cells
     * @property {boolean} editable The editable property
     * @memberof AutomaticTable
     */

    /**
     * Fields to display - null will display all
     * @method display
     * @memberof AutomaticTable
     */

    // pagination
    /**
     * The renderPaginationControl property - render the pagination control
     * @property {boolean} renderPaginationControl render the pagination control
     * @memberof AutomaticTable
     */

    /**
     * The paginationAPI property - setup the paginatin API to use
     * @property {Augmented.PaginationFactory.type} paginationAPI the pagination API to use
     * @memberof AutomaticTable
     */

    /**
     * The name property
     * @property {string} name The name of the table
     * @memberof AutomaticTable
     */

    /**
     * The description property
     * @property {string} description The description of the table
     * @memberof AutomaticTable
     */

    /**
     * The crossOrigin property - enables cross origin fetch
     * @property {boolean} crossOrigin The crossOrigin property
     * @memberof AutomaticTable
     */

    /**
     * The lineNumber property - turns on line numbers
     * @property {boolean} lineNumbers The lineNumbers property
     * @memberof AutomaticTable
     */

    /**
     * The columns property
     * @property {object} columns The columns property
     * @private
     * @memberof AutomaticTable
     */

    /**
     * The URI property
     * @property {string} uri The URI property
     * @memberof AutomaticTable
     */

    /**
     * The data property
     * @property {array} data The data property
     * @memberof AutomaticTable
     * @private
     */

    /**
     * The collection property
     * @property {Augmented.PaginatedCollection} collection The collection property
     * @memberof AutomaticTable
     * @private
     */

    /**
     * The initialized property
     * @property {boolean} isInitalized The initialized property
     * @memberof AutomaticTable
     */

    /**
     * The setTheme method
     * @method setTheme sets the theme of this table
     * @param {string} theme name of the theme
     * @memberof AutomaticTable
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
     * @method rowlink
     * @param {array} row The row data
     * @returns {string} Returns the link uri
     * @memberof AutomaticTable
     */
    value: function rowLink(row) {
      return "";
    }
  }, {
    key: "sortBy",


    /**
     * Sort the tabe by a key (sent via a UI Event)
     * @method sortBy
     * @memberof AutomaticTable
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
     * @method currentPage
     * @memberof AutomaticTable
     * @returns {number} The current page number
     */
    value: function currentPage() {
      return this.collection.currentPage;
    }
  }, {
    key: "totalPages",


    /**
     * Return the total pages
     * @method totalPages
     * @memberof AutomaticTable
     * @returns {number} The total pages
     */
    value: function totalPages() {
      return this.collection.totalPages;
    }
  }, {
    key: "nextPage",


    /**
     * Advance to the next page
     * @method nextPage
     * @memberof AutomaticTable
     */
    value: function nextPage() {
      this.collection.nextPage();
      this.refresh();
    }
  }, {
    key: "previousPage",


    /**
     * Return to the previous page
     * @method previousPage
     * @memberof AutomaticTable
     */
    value: function previousPage() {
      this.collection.previousPage();
      this.refresh();
    }
  }, {
    key: "goToPage",


    /**
     * Go to a specific page
     * @method goToPage
     * @param {number} page The page to go to
     * @memberof AutomaticTable
     */
    value: function goToPage(page) {
      this.collection.goToPage(page);
      this.refresh();
    }
  }, {
    key: "firstPage",


    /**
     * Return to the first page
     * @method firstPage
     * @memberof AutomaticTable
     */
    value: function firstPage() {
      this.collection.firstPage();
      this.refresh();
    }
  }, {
    key: "lastPage",


    /**
     * Advance to the last page
     * @method lastPage
     * @memberof AutomaticTable
     */
    value: function lastPage() {
      this.collection.lastPage();
      this.refresh();
    }
  }, {
    key: "editCell",


    /**
     * Edit a cell at the row and column specified
     * @method editCell
     * @memberof AutomaticTable
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
     * @method copyCell
     * @memberof AutomaticTable
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
     * @method clearCell
     * @memberof AutomaticTable
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
     * @method render Renders the table
     * @memberof AutomaticTable
     * @returns {object} Returns the view context ('this')
     */
    value: function render() {
      //console.log("render");

      if (!this.isInitalized) {
        //_logger.warn("AUGMENTED: AutoTable Can't render yet, not initialized!");
        return this;
      }
      var e = void 0;
      if (this.template) {
        // refresh the table body only
        //console.log("set progress.");
        this.showProgressBar(true);
        if (this.el) {
          e = typeof this.el === 'string' ? document.querySelector(this.el) : this.el;
          //console.log("my el", e);
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
          //_logger.warn("AUGMENTED: AutoTable no element anchor, not rendering.");
        }
      } else {
        this.template = "notused";
        this.showProgressBar(true);

        if (this.el) {
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
          //_logger.warn("AUGMENTED: AutoTable no element anchor, not rendering.");
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
     * @method retrieveSchema
     * @param uri {string} the URI to fetch from
     * @memberof AutomaticTable
     */
    value: function retrieveSchema(uri) {
      var that = this;
      var schema = null;
      (0, _request2.default)({
        url: uri,
        contentType: 'application/json',
        dataType: 'json',
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
          //_logger.warn("AUGMENTED: AutoTable Failed to fetch schema!");
        }
      });
    }
  }, {
    key: "fetch",


    /**
     * Fetch the data from the source URI
     * @method fetch
     * @memberof AutomaticTable
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
     * @method save
     * @param {boolean} override Save even if not editable
     * @returns Returns true if succesfull
     * @memberof AutomaticTable
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
     * @method populate
     * @memberof AutomaticTable
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
     * @method clear
     * @memberof AutomaticTable
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
     * @method refresh Refresh the table
     * @memberof AutomaticTable
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
     * @method exportTo Exports the table
     * @param {string} type The type requested (csv or html-default)
     * @memberof AutomaticTable
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
     * @method compileTemplate
     * @memberof AutomaticTable
     * @returns {string} Returns the template
     */
    value: function compileTemplate() {
      return "";
    }
  }, {
    key: "setURI",


    /**
     * Sets the URI
     * @method setURI
     * @memberof AutomaticTable
     * @param {string} uri The URI
     */
    value: function setURI(uri) {
      this.uri = uri;
    }
  }, {
    key: "setSchema",


    /**
     * Sets the schema
     * @method setSchema
     * @memberof AutomaticTable
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
     * @method showProgressBar
     * @memberof AutomaticTable
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
     * @method showMessage
     * @memberof AutomaticTable
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
     * @method validate
     * @memberof AutomaticTable
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
     * @method isValid
     * @memberof AutomaticTable
     * @returns {boolean} Returns true if valid
     */
    value: function isValid() {
      return this.collection ? this.collection.isValid() : true;
    }
  }, {
    key: "remove",


    /**
     * Remove the table and all binds
     * @method remove
     * @memberof AutomaticTable
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
     * @method getSelected
     * @memberof AutomaticTable
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
     * @method getSelectedIndex
     * @memberof AutomaticTable
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
     * @method removeRows
     * @param {Array} rows Models of the rows to remove
     * @memberof AutomaticTable
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _sync2 = __webpack_require__(10);

var _sync3 = _interopRequireDefault(_sync2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Model <br/>
 * Supports: <ul>
 * <li>REST</li>
 * <li>Validation and Schemas</li>
 * <li>Security</li>
 * </ul>
 * @class Model
 * @memberof Presentation
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
     * @memberof Model
     */

    /**
     * Cross Origin property
     * @property {boolean} crossOrigin Cross Origin property
     * @memberof Model
     */

    /**
     * sync - Sync model data to bound REST call
     * @method sync
     * @memberof Model
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _sync2 = __webpack_require__(10);

var _sync3 = _interopRequireDefault(_sync2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class Collection
 * @memberof Presentation
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
     * sync - Sync collection data to bound REST call
     * @method sync
     * @memberof Collection
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _decorator = __webpack_require__(2);

var _decorator2 = _interopRequireDefault(_decorator);

var _model = __webpack_require__(4);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstractView = __webpack_require__(18);

var _abstractView2 = _interopRequireDefault(_abstractView);

var _augmentedjsNext = __webpack_require__(0);

var Augmented = _interopRequireWildcard(_augmentedjsNext);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _augmentedjsNext = __webpack_require__(0);

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _methodMap = __webpack_require__(31);

var _methodMap2 = _interopRequireDefault(_methodMap);

var _request = __webpack_require__(11);

var _request2 = _interopRequireDefault(_request);

var _dataType = __webpack_require__(20);

var _dataType2 = _interopRequireDefault(_dataType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _headers = __webpack_require__(32);

var _headers2 = _interopRequireDefault(_headers);

var _dataType = __webpack_require__(20);

var _dataType2 = _interopRequireDefault(_dataType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * @memberof Presentation
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _localStorage = __webpack_require__(13);

var _localStorage2 = _interopRequireDefault(_localStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        ls = new _localStorage2.default(persist, namespace);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Local Storage API - returned from LocalStorageFactory
 * @class LocalStorage
 * @memberof Presentation
 * @param {boolean} persist Persistant storage or not
 */
var LocalStorage = function () {
  function LocalStorage(persist) {
    _classCallCheck(this, LocalStorage);

    this.isPersisted = persist;
    this._myStore = null;

    // true = localStorage, false = sessionStorage
    if (this.isSupported()) {
      //logger.debug("AUGMENTED: localStorage exists");

      if (this.isPersisted) {
        this._myStore = localStorage;
      } else {
        this._myStore = sessionStorage;
      }
    } else {
      console.warn("AUGMENTED: No localStorage.");
      //logger.warn("AUGMENTED: No localStorage.");
    }
  }

  _createClass(LocalStorage, [{
    key: "isSupported",


    /**
     * is Persistant or not
     * @property {boolean} isPersisted Persistant property
     * @memberof LocalStorage
     */

    /**
     * Is storage supported
     * @method isSupported
     * @memberof LocalStorage
     * @returns {boolean} Returns true if supported
     */
    value: function isSupported() {
      return typeof Storage !== "undefined";
    }
  }, {
    key: "getItem",


    /**
     * Gets an item from storage
     * @method getItem
     * @memberof LocalStorage
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
     * @method setItem
     * @memberof LocalStorage
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
     * @method removeItem
     * @memberof LocalStorage
     * @param {string} key The key in storage
     */
    value: function removeItem(itemKey) {
      this._myStore.removeItem(itemKey);
    }
  }, {
    key: "clear",


    /**
     * Clears storage - <b>Warning: Destructive in non-namespaced instances!</b>
     * @method clear
     * @memberof LocalStorage
     */
    value: function clear() {
      this._myStore.clear();
    }
  }, {
    key: "key",


    /**
     * Gets the key from storage for index
     * @method key
     * @memberof LocalStorage
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
     * @method length
     * @memberof LocalStorage
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _localStorageFactory = __webpack_require__(12);

var _localStorageFactory2 = _interopRequireDefault(_localStorageFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_NAMESPACE = "augmented.localstorage.collection";
var DEFAULT_KEY = DEFAULT_NAMESPACE + ".key";

/**
 * LocalStorageCollection
 * A local storage-based Collection
 * @class LocalStorageCollection
 * @memberof Presentation
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
     * @memberof LocalStorageCollection
     */

    /**
     * is Persistant or not
     * @property {boolean} isPersisted Persistant property
     * @memberof LocalStorageCollection
     */

    /**
     * Storage for the collection
     * @property {string} storage The storage used for the collection
     * @memberof LocalStorageCollection
     * @private
     */

    /**
     * @method initialize Initialize the model with needed wireing
     * @param {object} options Any options to pass
     * @memberof LocalStorageCollection
     */
    value: function initialize(options) {}
  }, {
    key: "init",

    /**
     * @method init Custom init method for the model (called at inititlize)
     * @param {object} options Any options to pass
     * @memberof LocalStorageCollection
     */
    value: function init(options) {}
  }, {
    key: "fetch",

    /**
     * @method fetch Fetch the collection
     * @param {object} options Any options to pass
     * @memberof LocalStorageCollection
     */
    value: function fetch(options) {
      this.sync('read', this, options);
    }
  }, {
    key: "save",

    /**
     * @method save Save the collection
     * @param {object} options Any options to pass
     * @memberof LocalStorageCollection
     */
    value: function save(options) {
      this.sync('create', this, options);
    }
  }, {
    key: "update",

    /**
     * @method update Update the collection
     * @param {object} options Any options to pass
     * @memberof LocalStorageCollection
     */
    value: function update(options) {
      this.sync('update', this, options);
    }
  }, {
    key: "destroy",

    /**
     * @method destroy Destroy the collection
     * @param {object} options Any options to pass
     * @memberof LocalStorageCollection
     */
    value: function destroy(options) {
      this.sync('delete', this, options);
    }
  }, {
    key: "sync",
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = __webpack_require__(9);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
     * @memberof Augmented.Presentation.Colleague
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
     * @memberof Augmented.Presentation.Colleague
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
     * @memberof Augmented.Presentation.Colleague
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _decorator = __webpack_require__(2);

var _decorator2 = _interopRequireDefault(_decorator);

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var Augmented = _interopRequireWildcard(_augmentedjsNext);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _bind = __webpack_require__(27);

// Cached regex to split keys for `delegate`.
var DELEGATE_EVENT_SPLITTER = /^(\S+)\s*(.*)$/;

/**
 * Aubstract View - the base view for handlng display in the MV* Concept
 * @class
 * @name AbstractView
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
      _this.className = options.className;
    } else {
      _this.className = "";
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
     * @method init
     * @param {object} options Optional options to pass to the view
     * @memberof AbstractView
     */
    value: function init(options) {}
  }, {
    key: "initialize",

    /**
     * Initializes the view - <em>Note: Do not override, use init instead!</em>
     * @method initialize
     * @param {object} options Optional options to pass to the view
     * @memberof AbstractView
     * @returns {View} Returns 'this,' as in, this view context
     */
    value: function initialize(options) {
      this.options = options;
      this.init(options);
    }
  }, {
    key: "beforeRender",

    /**
     * Before Render callback for the view
     * @method beforeRender
     * @returns this Context of the view
     * @memberof AbstractView
     */
    value: function beforeRender() {
      return this;
    }
  }, {
    key: "render",

    /**
     * Render callback for the view
     * @method render
     * @returns this Context of the view
     * @memberof AbstractView
     */
    value: function render() {
      return this;
    }
  }, {
    key: "afterRender",

    /**
     * After Render callback for the view
     * @method afterRender
     * @returns this Context of the view
     * @memberof AbstractView
     */
    value: function afterRender() {
      return this;
    }
  }, {
    key: "remove",


    /*
     * @method remove
     * Remove this view by taking the element out of the DOM, and removing any
     * applicable Backbone.Events listeners.
     * @memberof AbstractView
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
     * @method setElement
     * Change the view's element (`this.el` property) and re-delegate the
     * view's events on the new element.
     * @memberof AbstractView
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
     * @method delegateEvents
     * @memberof AbstractView
     * @example
     * *{"event selector": "callback"}*
     *
     *     {
     *       'mousedown .title':  'edit',
     *       'click .button':     'save',
     *       'click .open':       function(e) { ... }
     *     }
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
     * @method delegate
     * @memberof AbstractView
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
     * @method undelegateEvents
     * @memberof AbstractView
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
     * @method undelegate
     * @memberof AbstractView
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
    // an element from the `id`, `className` and `tagName` properties.
    value: function _ensureElement() {
      if (!this.el) {
        //console.log("no el");
        var attrs = Augmented.Utility.extend({}, Augmented.result(this, "attributes"));
        if (this.id) {
          attrs.id = this.id;
        }
        if (this.className) {
          attrs["class"] = this.className;
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
    * @method addPermission
    * @param {string} permission The permission to add
    * @param {boolean} negative Flag to set a nagative permission (optional)
    * @memberof AbstractView
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
    * @method removePermission
    * @param {string} permission The permission to remove
    * @param {boolean} negative Flag to set a nagative permission (optional)
    * @memberof AbstractView
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
    * @method clearPermissions
    * @memberof AbstractView
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
    * @method matchesPermission
    * @param {string} match The permissions to match
    * @param {boolean} negative Flag to set a nagative permission (optional)
    * @returns {boolean} Returns true if the match exists
    * @memberof AbstractView
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
    * @method canDisplay
    * @returns {boolean} Returns true if this view can display
    * @memberof AbstractView
    */
    value: function canDisplay() {
      return true;
    }
  }, {
    key: "el",


    /**
     * The name property of the view
     * @property {string} name The Name of the view
     * @memberof AbstractView
     * @private
     */

    /**
     * Permissions in the view
     * @property permissions
     * @memberof AbstractView
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
    * @method setName
    * @param {string} name The name of the view
    * @memberof AbstractView
    */
    set: function set(name) {
      this._name = name;
    },

    /**
    * Gets the name of the view
    * @method getName
    * @returns {string} Returns the name of the view
    * @memberof AbstractView
    */
    get: function get() {
      return this._name;
    }
  }, {
    key: "permissions",

    /**
    * Sets the permissions to the view
    * @method setPermissions
    * @param {array} permissions The permissions to set
    * @param {boolean} negative Flag to set a nagative permission (optional)
    * @memberof AbstractView
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
    * @method getPermissions
    * @returns {object} The permissions in the view
    * @memberof AbstractView
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var Augmented = _interopRequireWildcard(_augmentedjsNext);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
 * @class History
 * @extends Augmented.Object
 * @memberof Presentation
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
      console.log("loadUrl", fragment);
      console.log("this.handlers", this.handlers);
      if (this.handlers && Array.isArray(this.handlers)) {
        return this.handlers.some(function (handler) {
          console.log("handler", handler);
          if (handler.route.test(fragment)) {
            console.log("handler.callback", handler.callback);
            console.log("is func", _typeof(handler.callback));
            handler.callback(fragment);
            console.log("test", handler.route.test(fragment));
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Widgets and small presentation modules
 * @class Widget
 * @memberof Presentation
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
     * @memberof Presentation.Widget
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
     * @memberof Presentation.Widget
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
     * @memberof Presentation.Widget
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
     * @memberof Presentation.Widget
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

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _collection = __webpack_require__(5);

var _collection2 = _interopRequireDefault(_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Paginated Collection Class - A Collection that handles pagination from client or server-side
 * @constructor PaginatedCollection
 * @memberof Presentation
 * @extends Presentation.Collection
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
    * @memberof PaginatedCollection
    * @private
    */

    /**
    * Page Size for the collection
    * @property pageSize
    * @memberof PaginatedCollection
    * @private
    */

    /**
    * Current page for the collection
    * @property currentPage
    * @memberof PaginatedCollection
    */

    /**
    * Total pages for the collection
    * @property totalPages
    * @memberof PaginatedCollection
    */

    /**
    * Sets the number of items in a page
    * @method setPageSize
    * @memberof PaginatedCollection
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
    * @method setCurrentPage
    * @memberof PaginatedCollection
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
    * @method setPaginationConfiguration
    * @memberof PaginatedCollection
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
    * @method fetch
    * @memberof PaginatedCollection
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
    * @method nextPage
    * @memberof PaginatedCollection
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
    * @method previousPage
    * @memberof PaginatedCollection
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
    * @method goToPage
    * @memberof PaginatedCollection
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
    * @method firstPage
    * @memberof PaginatedCollection
    */
    value: function firstPage() {
      this.currentPage = 1;
      this.refresh();
    }
  }, {
    key: "lastPage",

    /**
    * Moves to the last page
    * @method lastPage
    * @memberof PaginatedCollection
    */
    value: function lastPage() {
      this.currentPage = this.totalPages;
      this.refresh();
    }
  }, {
    key: "refresh",

    /**
    * Refreshes the collection
    * @method refresh
    * @memberof PaginatedCollection
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _augmentedjsNext = __webpack_require__(0);

var Augmented = _interopRequireWildcard(_augmentedjsNext);

var _colleague = __webpack_require__(15);

var _colleague2 = _interopRequireDefault(_colleague);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    value: function delegateEvents(events) {
      _get(Mediator.prototype.__proto__ || Object.getPrototypeOf(Mediator.prototype), "delegateEvents", this).call(this, events);
      this.subscriptions = {};
    }
  }, {
    key: "undelegateEvents",


    /**
    * Extend undelegateEvents() to unset subscriptions
    * @method undelegateEvents
    * @memberof Presentation.Colleague
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
    * @memberof Presentation.Colleague
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
    * @memberof Presentation.Mediator
    */
    value: function observeColleague(colleague, callback, channel, identifier) {
      if (colleague instanceof Presentation.Colleague) {
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
    * @memberof Presentation.Mediator
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
      if (colleague instanceof Presentation.Colleague) {
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
    * @memberof Presentation.Mediator
    */
    value: function dismissColleague(colleague, callback, channel, identifier) {
      if (colleague instanceof Presentation.Colleague) {
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
    * @memberof Presentation.Mediator
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
    * @memberof Presentation.Mediator
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
    * @memberof Presentation.Mediator
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
    * @memberof Presentation.Mediator
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
    * @memberof Presentation.Mediator
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
    * @memberof Presentation.Mediator
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
    * @memberof Presentation.Mediator
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
    * @memberof Presentation.Colleague
    * @returns {object} Returns all subscriptions
    */
    get: function get() {
      return this._subscriptions;
    },


    /**
    * Subscribe to each subscription
    * @method setSubscriptions
    * @param {Object} [subscriptions] An optional hash of subscription to add
    * @memberof Presentation.Colleague
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
    * @memberof Presentation.Mediator
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
    * @memberof Presentation.Mediator
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
    * @memberof Presentation.Mediator
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* Types of pagination API
* @enum
* @name PAGINATION_API_TYPE
* @memberof Presentation.Pagination
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _abstractView = __webpack_require__(18);

var _abstractView2 = _interopRequireDefault(_abstractView);

var _view = __webpack_require__(9);

var _view2 = _interopRequireDefault(_view);

var _history = __webpack_require__(19);

var _history2 = _interopRequireDefault(_history);

var _router = __webpack_require__(28);

var _router2 = _interopRequireDefault(_router);

var _model = __webpack_require__(4);

var _model2 = _interopRequireDefault(_model);

var _sync = __webpack_require__(10);

var _sync2 = _interopRequireDefault(_sync);

var _request = __webpack_require__(11);

var _request2 = _interopRequireDefault(_request);

var _configuration = __webpack_require__(33);

var _configuration2 = _interopRequireDefault(_configuration);

var _application = __webpack_require__(34);

var _application2 = _interopRequireDefault(_application);

var _widget = __webpack_require__(21);

var _widget2 = _interopRequireDefault(_widget);

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _viewController = __webpack_require__(35);

var _viewController2 = _interopRequireDefault(_viewController);

var _localStorageFactory = __webpack_require__(12);

var _localStorageFactory2 = _interopRequireDefault(_localStorageFactory);

var _localStorage = __webpack_require__(13);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _namespacedLocalStorage = __webpack_require__(36);

var _namespacedLocalStorage2 = _interopRequireDefault(_namespacedLocalStorage);

var _collection = __webpack_require__(5);

var _collection2 = _interopRequireDefault(_collection);

var _paginated = __webpack_require__(22);

var _paginated2 = _interopRequireDefault(_paginated);

var _localStorageCollection = __webpack_require__(14);

var _localStorageCollection2 = _interopRequireDefault(_localStorageCollection);

var _colleague = __webpack_require__(15);

var _colleague2 = _interopRequireDefault(_colleague);

var _mediator = __webpack_require__(23);

var _mediator2 = _interopRequireDefault(_mediator);

var _decorator = __webpack_require__(2);

var _decorator2 = _interopRequireDefault(_decorator);

var _notification = __webpack_require__(37);

var _notification2 = _interopRequireDefault(_notification);

var _manager = __webpack_require__(38);

var _manager2 = _interopRequireDefault(_manager);

var _header = __webpack_require__(39);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(40);

var _footer2 = _interopRequireDefault(_footer);

var _card = __webpack_require__(41);

var _card2 = _interopRequireDefault(_card);

var _article = __webpack_require__(42);

var _article2 = _interopRequireDefault(_article);

var _abstractToolbar = __webpack_require__(6);

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _toolbar = __webpack_require__(43);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _hamburgerMenu = __webpack_require__(44);

var _hamburgerMenu2 = _interopRequireDefault(_hamburgerMenu);

var _menu = __webpack_require__(45);

var _menu2 = _interopRequireDefault(_menu);

var _dialog = __webpack_require__(17);

var _dialog2 = _interopRequireDefault(_dialog);

var _confirmation = __webpack_require__(46);

var _confirmation2 = _interopRequireDefault(_confirmation);

var _alert = __webpack_require__(47);

var _alert2 = _interopRequireDefault(_alert);

var _autoTable = __webpack_require__(3);

var _autoTable2 = _interopRequireDefault(_autoTable);

var _bigDataTable = __webpack_require__(49);

var _bigDataTable2 = _interopRequireDefault(_bigDataTable);

var _editableBigTable = __webpack_require__(50);

var _editableBigTable2 = _interopRequireDefault(_editableBigTable);

var _localStorageTable = __webpack_require__(51);

var _localStorageTable2 = _interopRequireDefault(_localStorageTable);

var _editableLocalStorageTable = __webpack_require__(52);

var _editableLocalStorageTable2 = _interopRequireDefault(_editableLocalStorageTable);

var _editableTable = __webpack_require__(53);

var _editableTable2 = _interopRequireDefault(_editableTable);

var _spreadsheet = __webpack_require__(54);

var _spreadsheet2 = _interopRequireDefault(_spreadsheet);

var _autoForm = __webpack_require__(55);

var _autoForm2 = _interopRequireDefault(_autoForm);

var _api = __webpack_require__(25);

var _api2 = _interopRequireDefault(_api);

var _factory = __webpack_require__(57);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Augmented.js Next Presentation - The Presentation Component
 *
 * @author Bob Warren
 *
 * @module Presentation
 * @version 2.0.0-alpha.25
 * @license Apache-2.0
 */
var Presentation = {};

/**
 * The standard version property
 * @constant VERSION
 */


// Components
Presentation.VERSION = "2.0.0-alpha.25";

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
Presentation.AbstractView = _abstractView2.default;
Presentation.View = _view2.default;

Presentation.Colleague = _colleague2.default;
Presentation.Mediator = _mediator2.default;
Presentation.DecoratorView = _decorator2.default;

/**
 * Component - Large UI Components
 * @namespace Presentation.Component
 * @memberof Presentation
 */

Presentation.Component = {};
Presentation.Component.AbstractToolbar = _abstractToolbar2.default;
Presentation.Component.Toolbar = _toolbar2.default;
Presentation.Component.HamburgerMenu = _hamburgerMenu2.default;
Presentation.Component.Menu = _menu2.default;
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
Presentation.Component.Fotter = _footer2.default;
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
 * @memberof Presentation
 */
Presentation.Pagination = {};
Presentation.Pagination.PAGINATION_API_TYPE = _api2.default;
Presentation.Pagination.PaginationFactory = _factory2.default;

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
Presentation.$ = _dom2.default.query;

//export default Presentation;

// for webpack default on the browser
module.exports = Presentation;

/***/ }),
/* 27 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _history = __webpack_require__(19);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _map = __webpack_require__(29);
var _isRegExp = __webpack_require__(30);

// Cached regular expressions for matching named param parts and splatted
// parts of route strings.
var optionalParam = /\((.*?)\)/g;
var namedParam = /(\(\?)?:\w+/g;
var splatParam = /\*\w+/g;
var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
//const history = new History();

/**
 * @class Router
 * Routers map faux-URLs to actions, and fire events when routes are
 * matched. Creating a new one sets its `routes` hash, if not set statically.
 * @memberof Presentation
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
     * @method loadView
     * @param {Augmented.View} view The View to load
     * @memberof Presentation.Router
     */
    value: function loadView(view) {
      this.cleanup();
      this._view = view;
      this._view.render();
      this._view.delegateEvents();
    }
  }, {
    key: "cleanup",


    /**
     * remove the last view by calling cleanup, then remove
     * @method cleanup
     * @memberof Presentation.Router
     */
    value: function cleanup() {
      if (this._view) {
        if (this._view.cleanup) {
          this._view.cleanup();
        }
        this._view.remove();
        this._view = null;
      }
    }
  }, {
    key: "initialize",


    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    value: function initialize(options) {}
  }, {
    key: "route",


    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
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


    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    value: function execute(callback, args, name) {
      if (callback) {
        callback.apply(this, args);
        //callback(args);
      }
    }
  }, {
    key: "navigate",


    // Simple proxy to `history` to save a fragment into the history.
    value: function navigate(fragment, options) {
      this.history.navigate(fragment, options);
      return { "routes": this.routes };
    }
  }, {
    key: "startHistory",
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
/* 29 */
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
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(7)(module)))

/***/ }),
/* 30 */
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
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(7)(module)))

/***/ }),
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* Object of configuration properties and callbacks.  Pass this to the request call to setup configutation
* @constructor Configuration
* @name Configuration
* @memberof Presentation.Request
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Presentation Application - extension of Augmented.Application</br/>
 * Add registration of mediators to the application, breadcrumbs, and stylesheet registration
 * @class Application
 * @memberof Presentation
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
     * @method registerMediator
     * @memberof Application
     * @param {Augmented.Presentation.Mediator} mediator The mediator to register
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
     * @method deregisterMediator
     * @memberof Application
     * @param {Augmented.Presentation.Mediator} mediator The mediator to deregister
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
     * @method registerStylesheet
     * @memberof Application
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
     * @method deregisterStylesheet
     * @memberof Application
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
     * @method attachStylesheets
     * @memberof Application
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
     * @method replaceStylesheets
     * @memberof Application
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
     * @method setCurrentBreadcrumb
     * @memberof Application
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
     * @method getCurrentBreadcrumb
     * @memberof Application
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
     * @memberof Application
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
     * Get all Mediators
     * @method getMediators
     * @memberof Application
     * @returns {array} Returns all Mediators
     */
    get: function get() {
      return this._mediators;
    }
  }, {
    key: "stylesheets",
    get: function get() {
      return this._stylesheets;
    }
  }, {
    key: "breadcrumbs",


    /**
     * Get all the breadcrumbs
     * @method getBreadcrumbs
     * @memberof Application
     * @returns {array} Returns alls the breadcrumbs
     */
    get: function get() {
      return this._breadcrumb.toArray();
    }
  }]);

  return Application;
}(_augmentedjsNext2.default.Application);

;

exports.default = Application;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A controller to handle a group of views.  The api is handled simular to views for use in a router.
 * @class Presentation.ViewController
 * @memberof Presentation
 * @extends Augmented.Object
 */
var ViewController = function (_Augmented$Object) {
  _inherits(ViewController, _Augmented$Object);

  function ViewController(options) {
    _classCallCheck(this, ViewController);

    var _this = _possibleConstructorReturn(this, (ViewController.__proto__ || Object.getPrototypeOf(ViewController)).call(this, options));

    _this._views = [];
    _this._permissions = {
      include: [],
      exclude: []
    };
    return _this;
  }

  _createClass(ViewController, [{
    key: "initialize",

    /**
     * Permissions in the controller
     * @property permissions
     * @memberof Presentation.ViewController
     */

    /**
     * initialize - an API for the start of the controller.  It is intended to add initializers here
     * @method initialize
     * @memberof Presentation.ViewController
     */
    value: function initialize() {}
  }, {
    key: "render",

    /**
     * render - an API for the render of the controller.  It is intended to add view render methods here
     * @method render
     * @memberof Presentation.ViewController
     */
    value: function render() {}
  }, {
    key: "remove",

    /**
     * remove - an API for the end of the controller.  It is intended to add view removal and cleanup here
     * @method remove
     * @memberof Presentation.ViewController
     */
    value: function remove() {}
  }, {
    key: "manageView",

    /**
     * manageView - manage a view
     * @method manageView
     * @param {Presentation.View} view An instance of a view to manage
     * @memberof Presentation.ViewController
     */
    value: function manageView(view) {
      this._views.push(view);
    }
  }, {
    key: "removeAllViews",

    /**
     * removeAllViews - cleans up all views known (calling thier remove method)
     * @method removeAllViews
     * @memberof Presentation.ViewController
     */
    value: function removeAllViews() {
      var i = 0,
          l = this._views.length;
      for (i = 0; i < l; i++) {
        this._views[i].remove();
      }
      this._views.splice(0);
    }
  }, {
    key: "addPermission",


    /**
     * Adds a permission to the controller
     * @method addPermission
     * @param {string} permission The permission to add
     * @param {boolean} negative Flag to set a nagative permission (optional)
     * @memberof Presentation.ViewController
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
     * @method removePermission
     * @param {string} permission The permission to remove
     * @param {boolean} negative Flag to set a nagative permission (optional)
     * @memberof Presentation.ViewController
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
     * @method clearPermissions
     * @memberof Presentation.ViewController
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
     * @method matchesPermission
     * @param {string} match The permissions to match
     * @param {boolean} negative Flag to set a nagative permission (optional)
     * @returns {boolean} Returns true if the match exists
     * @memberof Presentation.ViewController
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
     * @method canDisplay
     * @returns {boolean} Returns true if this controller can display
     * @memberof Presentation.ViewController
     */
    value: function canDisplay() {
      return true;
    }
  }, {
    key: "views",

    /**
     * getViews - get the instances of the views known
     * @method getViews
     * @returns {Array} Returns an array of view instances
     * @memberof Presentation.ViewController
     */
    get: function get() {
      return this._views;
    }
  }, {
    key: "permissions",

    /**
     * Sets the permissions to the controller
     * @method setPermissions
     * @param {array} permissions The permissions to set
     * ß
     * @memberof Presentation.ViewController
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
     * @method getPermissions
     * @returns {object} The permissions in the controller
     * @memberof Presentation.ViewController
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _localStorage = __webpack_require__(13);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _localStorageFactory = __webpack_require__(12);

var _localStorageFactory2 = _interopRequireDefault(_localStorageFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      this._ls.setItem(namespace, JSON.stringify(this._myStore.toJSON()));
    }
  }, {
    key: "removeItem",
    value: function removeItem(itemKey) {
      this._myStore.remove(itemKey);
      this._ls.setItem(namespace, JSON.stringify(this._myStore.toJSON()));
    }
  }, {
    key: "clear",
    value: function clear() {
      this._myStore.clear();
      this._ls.setItem(namespace, JSON.stringify(this._myStore.toJSON()));
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _view = __webpack_require__(9);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A Notfication Center Component
 * @constructor Presentation.Component.NotificationCenter
 * @memberof Presentation.Component
 * @extends Presentation.View
 */
var NotificationCenter = function (_View) {
  _inherits(NotificationCenter, _View);

  function NotificationCenter(options) {
    _classCallCheck(this, NotificationCenter);

    return _possibleConstructorReturn(this, (NotificationCenter.__proto__ || Object.getPrototypeOf(NotificationCenter)).call(this, options));
  }

  return NotificationCenter;
}(_view2.default);

;

exports.default = NotificationCenter;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mediator = __webpack_require__(23);

var _mediator2 = _interopRequireDefault(_mediator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _decorator = __webpack_require__(2);

var _decorator2 = _interopRequireDefault(_decorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A Header Component
 * @class Header
 * @memberof Presentation.Component
 * @extends Presentation.View
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
    key: "title",

    /**
     * A title property
     * @property title
     * @memberof Presentation.Component.Header
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
     * A subTitle property
     * @property subTitle
     * @memberof Presentation.Component.Header
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _decorator = __webpack_require__(2);

var _decorator2 = _interopRequireDefault(_decorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A Footer Component
 * @class Footer
 * @memberof Presentation.Component
 * @extends Presentation.View
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _decorator = __webpack_require__(2);

var _decorator2 = _interopRequireDefault(_decorator);

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A card view - simple panel/dialog-like panel
 * @class Card
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
      _this._style = options.style;
    } else {
      _this._style = "card";
    }
    return _this;
  }

  _createClass(Card, [{
    key: "_template",


    /**
     * template - sets content of the dialog, handled internally
     * @method _template
     * @memberof Card
     * @private
     */
    value: function _template() {
      return "<div class=\"" + this._style + "\">" + this._body + "</div>";
    }
  }, {
    key: "render",


    /**
     * render - render the dialog
     * @method render
     * @memberof Card
     */
    value: function render() {
      if (this.el) {
        _dom2.default.setValue(this.el, this._template());
        this.delegateEvents();
      }
      return this;
    }
  }, {
    key: "style",


    /**
     * body property - the body of the card
     * @property body
     * @memberof Card
     */

    /**
     * style property - the style
     * @property style
     * @memberof Card
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
     * @memberof Card
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _decorator = __webpack_require__(2);

var _decorator2 = _interopRequireDefault(_decorator);

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* An artcile class for setting up a 'page'
* @class Article
* @memberof Presentation.Component
* @extends Presentation.DecoratorView
*/
var Article = function (_DecoratorView) {
  _inherits(Article, _DecoratorView);

  function Article(options) {
    _classCallCheck(this, Article);

    var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, options));

    if (!_this.name) {
      _this.name = "article";
    }

    if (options && options.header) {
      _this._header = options.header;
    } else {
      _this._header = "";
    }
    if (options && options.body) {
      _this._body = options.body;
    } else {
      _this._body = "";
    }
    if (options && options.style) {
      _this._style = options.style;
    } else {
      _this._style = "article";
    }
    if (options && options.footer) {
      _this._footer = options.footer;
    } else {
      _this._footer = "";
    }
    return _this;
  }

  _createClass(Article, [{
    key: "_template",


    /**
    * template - sets content of the dialog, handled internally
    * @method _template
    * @memberof Article
    * @private
    */
    value: function _template() {
      return "<article class=\"" + this._style + "\"><header>" + this._header + "</header>" + this._body + "$<footer>" + this._footer + "</footer></article>";
    }
  }, {
    key: "render",


    /**
    * render - render the dialog
    * @method render
    * @memberof Article
    */
    value: function render() {
      if (this.el) {
        _dom2.default.setValue(this.el, this._template());
        this.delegateEvents();
      }
      return this;
    }
  }, {
    key: "header",


    /**
    * Header property
    * @property header
    * @memberof Article
    */

    set: function set(header) {
      this._header = header;
    },
    get: function get() {
      return this._header;
    }
  }, {
    key: "style",


    /**
    * style property - the style
    * @property style
    * @memberof Article
    */
    set: function set(style) {
      this._style = style;
    },
    get: function get() {
      return this._style;
    }
  }, {
    key: "footer",


    /**
    * Footer for the article
    * @property footer
    * @memberof Article
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
     * @property body
     * @memberof Article
     */
    set: function set(body) {
      this._body = body;
    },
    get: function get() {
      return this._body;
    }
  }]);

  return Article;
}(_decorator2.default);

;

exports.default = Article;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstractToolbar = __webpack_require__(6);

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _buildMenuItems = __webpack_require__(16);

var _buildMenuItems2 = _interopRequireDefault(_buildMenuItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A Toolbar View
 * @constructor Augmented.Presentation.Component.Toolbar
 * @memberof Augmented.Presentation.Component
 * @extends Augmented.Presentation.AbstractToolbar
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _buildMenuItems = __webpack_require__(16);

var _buildMenuItems2 = _interopRequireDefault(_buildMenuItems);

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _abstractToolbar = __webpack_require__(6);

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var buildMenu = function buildMenu(name, title, menuItems) {
  return "<section class=\"material-design-hamburger\" data-" + name + "=\"hamburgerClickRegion\"><div class=\"material-design-hamburger__icon\" data-" + name + "=\"hamburgerIcon\" data-click=\"toggle\"><i class=\"material-icons md-light\">menu</i></div></section><section class=\"menu menu--off\" data-" + name + "=\"hamburgerMenu\"><div>" + title + "</div>" + (0, _buildMenuItems2.default)(undefined.name, undefined.menuItems) + "</section>";
};

/**
 * A Hamburger Menu View
 * @constructor Augmented.Presentation.Component.HamburgerMenu
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
     * @memberof HamburgerMenu
     * @returns {object} Returns the view context ('this')
     */
    value: function render() {
      if (!this.isInitalized) {
        //_logger.warn("AUGMENTED: Hamburger Can't render yet, not initialized!");
        return this;
      }
      this.template = null; //"notused";
      if (this.el) {
        var e = _dom2.default.selector(this.el);
        if (e) {
          // the menu
          _dom2.default.addClass(e, "wrapper");
          e.setAttribute("data-" + this.name, "hamburger");
          e.innerHTML = buildMenu(this.name, this.menuItems);
        }
      } else {
        //_logger.warn("AUGMENTED: Hamburger no element anchor, not rendering.");
        return this;
      }
      this.delegateEvents();
      this.syncAllBoundElements();
      return this;
    }
  }, {
    key: "toggle",


    /**
     * Toggle the Hamburger menu view
     * @method toggle
     * @memberof HamburgerMenu
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstractToolbar = __webpack_require__(6);

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _buildMenuItems = __webpack_require__(16);

var _buildMenuItems2 = _interopRequireDefault(_buildMenuItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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
 * @class Menu
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
     * @method render Renders the Menu
     * @memberof Menu
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
          e.innerHTML = buildMenu(this.name, this.menuItems);
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dialog = __webpack_require__(17);

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dialog = __webpack_require__(17);

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoTable = __webpack_require__(3);

var _autoTable2 = _interopRequireDefault(_autoTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoTable = __webpack_require__(3);

var _autoTable2 = _interopRequireDefault(_autoTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoTable = __webpack_require__(3);

var _autoTable2 = _interopRequireDefault(_autoTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoTable = __webpack_require__(3);

var _autoTable2 = _interopRequireDefault(_autoTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoTable = __webpack_require__(3);

var _autoTable2 = _interopRequireDefault(_autoTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var Augmented = _interopRequireWildcard(_augmentedjsNext);

var _autoTable = __webpack_require__(3);

var _autoTable2 = _interopRequireDefault(_autoTable);

var _collection = __webpack_require__(5);

var _collection2 = _interopRequireDefault(_collection);

var _localStorageCollection = __webpack_require__(14);

var _localStorageCollection2 = _interopRequireDefault(_localStorageCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNext = __webpack_require__(0);

var Augmented = _interopRequireWildcard(_augmentedjsNext);

var _decorator = __webpack_require__(2);

var _decorator2 = _interopRequireDefault(_decorator);

var _buildForm = __webpack_require__(56);

var _buildForm2 = _interopRequireDefault(_buildForm);

var _messages = __webpack_require__(24);

var _messages2 = _interopRequireDefault(_messages);

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _model = __webpack_require__(4);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* A automatic form view created from a JSON Schema
* @class AutomaticForm
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
    * @memberof AutomaticForm
    */

    /**
    * The fields property
    * @property {object} fields The fields property
    * @private
    * @memberof AutomaticForm
    */

    /**
    * The URI property
    * @property {string} uri The URI property
    * @memberof AutomaticForm
    */

    /**
    * The model property
    * @property {Augmented.Model} model The model property
    * @memberof AutomaticForm
    */

    /**
    * The initialized property
    * @property {boolean} isInitalized The initialized property
    * @memberof AutomaticForm
    */

    /**
    * The title property
    * @property {string} title The title of the form
    * @memberof AutomaticForm
    */

    /**
    * The name property
    * @property {string} name The name of the form
    * @memberof AutomaticForm
    */

    /**
    * The description property
    * @property {string} description The description of the form
    * @memberof AutomaticForm
    */

    /**
    * The required fields property
    * @property {Array} _required The required fields
    * @memberof AutomaticForm
    * @private
    */

    /**
      * Fields to display - null will display all
      * @method display
      * @memberof AutomaticForm
      */

    value: function _retrieveSchema(uri) {
      var that = this;
      var schema = null;
      Augmented.request({
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
    * @method setURI
    * @memberof AutomaticForm
    * @param {string} uri The URI
    */
    value: function setURI(uri) {
      this.uri = uri;
    }
  }, {
    key: "setSchema",


    /**
    * Sets the schema
    * @method setSchema
    * @memberof AutomaticForm
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
    * @method showProgressBar
    * @memberof AutomaticForm
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
    * @method showMessage
    * @memberof AutomaticForm
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
    * @method validate
    * @memberof AutomaticForm
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
    * @method isValid
    * @memberof AutomaticForm
    * @returns {boolean} Returns true if valid
    */
    value: function isValid() {
      return this.model ? this.model.isValid() : true;
    }
  }, {
    key: "render",


    /**
    * Render the form
    * @method render Renders the form
    * @memberof AutomaticForm
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
    * @method reset
    * @memberof AutomaticForm
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
    * @method populate
    * @param {object} data Data to fill in
    * @memberof AutomaticForm
    * @returns {object} Returns the view context ('this')
    */
    value: function populate(data) {
      this.model.set(data);
    }
  }, {
    key: "remove",


    /**
    * Remove the form and all binds
    * @method remove
    * @memberof AutomaticForm
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
/* 56 */
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__(25);

var _api2 = _interopRequireDefault(_api);

var _paginated = __webpack_require__(22);

var _paginated2 = _interopRequireDefault(_paginated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Pagination factory for returning pagination collections of an API type
 * @class PaginationFactory
 * @memberof Presentation.Pagination
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
     * @memberof PaginationFactory
     * @param {Presentation.Pagination.PAGINATION_API_TYPE} apiType The API type to return an instance of
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=augmented-next-presentation.js.map