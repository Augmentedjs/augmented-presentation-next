describe('Given Augmented Presentation $', () => {
	it('is defined', () => {
		expect(Presentation.$).to.not.be.undefined;
	});

	it('can select an element', () => {
		const body = Presentation.$("body");
		expect(body).to.not.be.undefined;
		expect(body.tagName.toLowerCase()).to.equal("body");
	});

	it('can select multiple elements', () => {
		const divs = Presentation.$("div");
		expect(divs).to.not.be.undefined;
		expect(divs instanceof NodeList).to.be.true;
	});

	it('can select a specific header element', () => {
		const h1 = Presentation.$("html body article section#header header h1");
		expect(h1).to.not.be.undefined;
		expect(h1 instanceof Node).to.be.true;
		expect(h1.innerText).to.equal("Augmented.js Next Presentation - Mocha Tests");
	});
});
