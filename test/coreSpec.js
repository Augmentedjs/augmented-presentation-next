//const Presentation = require("../dist/augmented-next-presentation.js");
//const expect = require("expect");

describe('Given Augmented Presentation', () => {
	//jsdom();
	it('is defined', () => {
		expect(Presentation).to.not.be.undefined;
	});

	it('has a version defined', () => {
		expect(Presentation.VERSION).to.not.be.undefined;
	});
});
