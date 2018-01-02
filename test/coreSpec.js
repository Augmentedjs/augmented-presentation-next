//XMLHttpRequest = require("xhr2");
//const Presentation = require("../dist/augmented-next-presentation.js");
//const expect = require("expect");
//const jsdom = require("mocha-jsdom");

const expect = chai.expect;

describe('Given Augmented Presentation', () => {
	//jsdom();
	it('is defined', () => {
		expect(Presentation).toBeDefined();
	});

	it('has a version defined', () => {
		expect(Presentation.VERSION).toBeDefined();
	});
});
