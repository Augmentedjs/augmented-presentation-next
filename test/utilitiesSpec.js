describe('Given Utilities', () => {
	it('is defined', () => {
		expect(Augmented.Presentation.Utilities).to.not.be.undefined;
	});

	describe('Given an object', () => {
		it('can serialize to url string', () => {
			const url = Augmented.Presentation.Utilities.serialize({ "cool": "yes", "stupid": "no" });
			expect(url).to.equal("cool=yes&stupid=no");
		});
	});
});
