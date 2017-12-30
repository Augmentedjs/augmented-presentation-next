const expect = require("expect");
import Presentation from "../src/presentation.js";

describe('Given Augmented Router', () => {
	it('is defined', () => {
		expect(Presentation.Router).toBeDefined();
	});

	let MyRouter = new Presentation.Router({
		routes: {
				"test": "test"
		}
	);
	const test = () => {
		return true;
	};

	let router = null;

	beforeEach(() => {
		router = new MyRouter();
	});

	afterEach(() => {
		router = null;
	});

	/*
	loadView
	*/
	describe('Given an instance of router', () => {
		it('is defined', () => {
			expect(router).toBeDefined();
		});

		it('is a router', () => {
			expect(router instanceof Presentation.Router).toBeTruthy();
		});

		it('can "navigate" to a route', () => {
			expect(router.navigate("test")).toBeTruthy();
		});

		describe('Given a test view', () => {
			var TestView = Presentation.View.extend({
				render: () => {
					return true;
				}
			}), view;
			beforeEach(() => {
				view = new TestView();
			});

			afterEach(() => {
				view.remove();
				view = null;
			});

			it('can load a view', () => {
				router.loadView(view);
				expect(router._view).toBeDefined();
				router._view = null;
			});

			it('can cleanup a view', () => {
				router._view = view;
				expect(router._view).toBeDefined();
				router.cleanup();
				expect(router._view).toBeNull();
			});
		});
	});
});
