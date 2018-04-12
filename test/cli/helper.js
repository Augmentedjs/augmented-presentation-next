const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = (new JSDOM('<!doctype html><html><body><article><section id="header"><header><h1>Augmented.js Next Presentation - Mocha Tests</h1><h2 id="augmented" data-testView="version"></h2></header></section></article><div id="sandbox"></div></body></html>')).window;

global.document = dom.document
global.window = dom.window
global.navigator = {
  userAgent: 'node.js'
};

const LocalStorage = require('node-localstorage').LocalStorage;
global.localStorage = new LocalStorage('localStorageTemp');
global.sessionStorage = global.localStorage;
global.window.sessionStorage = global.localStorage;
global.window.localStorage = global.localStorage;
global.Storage = global.localStorage;

const sinon = require("sinon");
global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();

global.Augmented = require("../dist/augmented-next-presentation.js");

const chai = require("chai");
global.chai = chai;
global.expect = chai.expect;
