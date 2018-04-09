describe('Given Augmented Presentation', () => {
	//jsdom();
	it('is defined', () => {
		expect(Augmented.Presentation).to.not.be.undefined;
	});

	it('has a version defined', () => {
		expect(Augmented.Presentation.VERSION).to.not.be.undefined;
	});
});
