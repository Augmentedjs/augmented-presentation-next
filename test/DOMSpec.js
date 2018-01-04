describe('Given Augmented Presentation DOM', () => {
	it('is defined', () => {
		expect(Presentation.Dom).to.not.be.undefined;
	});

	it('has short name Presentation.Dom', () => {
		expect(Presentation.Dom).to.not.be.undefined;
	});

	it('can get the viewport height', () => {
		const i = Presentation.Dom.getViewportHeight();
		expect(i).to.be.above(0);
	});

	it('can get the viewport width', () => {
		const i = Presentation.Dom.getViewportWidth();
		expect(i).to.be.above(0);
	});

	describe('Given and element', () => {
		const el = document.createElement("div"),
		body = document.querySelector("body");
		el.setAttribute("id", "sandbox");
		body.appendChild(el);

		afterEach(() => {
			Presentation.Dom.empty("#sandbox");
		});

		it('can set the value of a div', () => {
			Presentation.Dom.setValue("#sandbox", "augmented");
			const e = document.querySelector("#sandbox");
			expect(e.textContent).to.equal("augmented");
		});

		it('can get the value of a div', () => {
			const e = document.querySelector("#sandbox");
			e.textContent = "augmented";
			const v = Presentation.Dom.getValue("#sandbox");
			expect(v).to.equal("augmented");
		});

		it('can get an element', () => {
			const e1 = document.querySelector("#sandbox");
			const e2 = Presentation.Dom.selector("#sandbox");
			expect(e1).to.equal(e2);
		});

		it('can get an element list', () => {
			const e1 = document.querySelector("#sandbox");
			const e2 = Presentation.Dom.selectors("#sandbox")[0];
			expect(e1).to.equal(e2);
		});

		it('can get an element list', () => {
			const e1 = document.querySelector("#sandbox");
			const e2 = Presentation.Dom.selectors("#sandbox")[0];
			expect(e1).to.equal(e2);
		});

		it('can hide an element', () => {
			Presentation.Dom.hide("#sandbox");
			const e = document.querySelector("#sandbox");
			expect(e.style.display).to.equal("none");
		});

		it('can show an element', () => {
			Presentation.Dom.show("#sandbox");
			const e = document.querySelector("#sandbox");
			expect(e.style.display).to.equal("block");
		});

		it('can set the class attribute', () => {
			Presentation.Dom.setClass("#sandbox", "monkey");
			const e = document.querySelector("#sandbox");
			const c = e.getAttribute("class");
			expect(c).to.equal("monkey");
		});

		it('can add the class attribute', () => {
			Presentation.Dom.addClass("#sandbox", "bubba");
			const e = document.querySelector("#sandbox");
			const c = e.getAttribute("class");
			expect(c).to.contain("bubba");
		});

		it('can remove the class attribute', () => {
			Presentation.Dom.addClass("#sandbox", "bubba");
			Presentation.Dom.removeClass("#sandbox", "bubba");
			const e = document.querySelector("#sandbox");
			const c = e.getAttribute("class");
			expect(c).not.to.contain("bubba");
		});

		it('can empty an element', () => {
			Presentation.Dom.empty("#sandbox");
			const e = document.querySelector("#sandbox");
			const v = Presentation.Dom.getValue("#sandbox");
			expect(v).to.equal("");
		});
	});
});
