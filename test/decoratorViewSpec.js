
describe('Given Augmented Presentation Decorator View', () => {

	describe('Given a Decorator View', () => {
		it('Presentation.DecoratorView is defined', () => {
			expect(Presentation.DecoratorView).to.not.be.undefined;
		});

		describe('Given a DecoratorView instance', () => {
			let el = document.getElementById("monkey"),
			body = document.getElementsByTagName("body")[0],
			d;

			if (!el) {
				el = document.createElement("div");
				el.id = "monkey";
				body.appendChild(el);
			}

			beforeEach(() => {
				d = new Presentation.DecoratorView({
					"el": "#monkey",
					"name": "monkey"
				});
			});

			afterEach(() => {
				d.remove();
				d = null;
			});

			it('DecoratorView is a Colleague', () => {
				expect(d instanceof Presentation.Colleague).to.be.true;
			});

			it('can create an instance that is a DecoratorView', () => {
				expect(d instanceof Presentation.DecoratorView).to.be.true;
			});

			it('the DecoratorView has a bound element', () => {
				expect(d.el).to.not.be.undefined;
				expect(d.el.tagName).to.equal(el.tagName);
			});

			it('can return the binding attribute name', () => {
				const name = d.bindingAttribute();
				expect(name).to.equal("data-monkey");
			});

			it('can inject a template', () => {
				d.injectTemplate("<span></span>", el);
				const s = el.querySelector("span");
				expect(s).to.not.be.undefined;
			});

			it('can remove an injected template', () => {
				d.injectTemplate("<span></span>", el);
				d.removeTemplate(el);
				const s = el.querySelector("span");
				expect(s).to.be.null;
			});

			it('can return a bound element', () => {
				d.injectTemplate("<span data-monkey=\"me\"></span>", el);
				const s = el.querySelector("span");
				const e = d.boundElement("me");
				expect(s).to.not.be.undefined;
				expect(e).to.not.be.undefined;
			});
		});
	});
});
