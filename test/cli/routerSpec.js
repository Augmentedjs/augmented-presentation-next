//const Presentation = require("../dist/augmented-next-presentation.js");
//const expect = require("expect");
class TestView extends Presentation.View {
	constructor(options) {
		super(options);
	};
	render() {
		return true;
	};
};

describe('Given Augmented Router', () => {
	it('is defined', () => {
		expect(Presentation.Router).to.not.be.undefined;
	});
	let router = null;

	beforeEach(() => {
		router = new Presentation.Router({
			"routes": {
				"test": () => {
									return true;
								}
				}
			}
		);

	});

	afterEach(() => {
		router = null;
	});

	/*
	loadView
	*/
	describe('Given an instance of router', () => {
		it('is defined', () => {
			expect(router).to.not.be.undefined;
		});

		it('is a router', () => {
			expect(router instanceof Presentation.Router).to.be.true;
		});

		xit('can "navigate" to a route', () => {
			try {
				router.startHistory();
			} catch(e) {
				console.error(e);
			}
			expect(router.navigate("test").routes.test).to.not.be.undefined;
		});

		describe('Given a test view', () => {
			let	view = null;

			beforeEach(() => {
				view = new TestView();
			});
			afterEach(() => {
				view.remove();
				view = null;
			});

			it('can load a view', () => {
				router.loadView(view);
				expect(router._view).to.not.be.undefined;
				router._view = null;
			});

			it('can cleanup a view', () => {
				router._view = view;
				expect(router._view).to.not.be.undefined;
				router.cleanup();
				expect(router._view).to.be.null;
			});
		});
	});
});
