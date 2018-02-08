
describe('Given Augmented Presentation Article View', () => {
	it('is defined', () => {
		expect(Presentation.Component.Article).to.not.be.undefined;
	});

	describe('Given an instance of Article', () => {
		let view;

		beforeEach(() => {
			view = new Presentation.Component.Article({"name": "sample", "el": "#sandbox", "body": "hello"});
		});

		afterEach(() => {
			view.remove();
			view = null;
		});

		it('instance is an instance of Article', () => {
			expect(view instanceof Presentation.Component.Article).to.be.true;
		});

		it('has a body', () => {
			expect(view.body).to.equal("hello");
		});
	});
});
