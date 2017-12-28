const expect = require("expect");
import Presentation from "../src/presentation.js";

describe('Given Augmented Presentation', () => {
	it('is defined', () => {
		expect(Presentation).toBeDefined();
	});

	it('has a version defined', () => {
		expect(Presentation.VERSION).toBeDefined();
	});
});
