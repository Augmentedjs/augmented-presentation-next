describe('Given Augmented Presentation Widgets', () => {
	it('is defined', () => {
		expect(Presentation.Widget).to.not.be.undefined;
	});

	describe('Given an array', () => {
		let arr = ["a", "b"];

		it('can create an unordered list', () => {
			let list = Presentation.Widget.List("l", arr, false);
			expect(list.tagName.toLowerCase()).to.equal("ul");
			expect(list.childNodes.length).to.equal(2);
			expect(list.childNodes[0].tagName.toLowerCase()).to.equal("li");
		});

		it('can create an ordered list', () => {
			let list = Presentation.Widget.List("l", arr, true);
			expect(list.tagName.toLowerCase()).to.equal("ol");
			expect(list.childNodes.length).to.equal(2);
			expect(list.childNodes[0].tagName.toLowerCase()).to.equal("li");
		});

		it('can create a data list', () => {
			let list = Presentation.Widget.DataList("sandbox", arr);
			expect(list.tagName.toLowerCase()).to.equal("datalist");
			expect(list.childNodes.length).to.equal(2);
			expect(list.childNodes[0].tagName.toLowerCase()).to.equal("option");
		});
	});

	describe('Given an object', () => {
		let o = { "a": "a", "b": "b" };

		it('can create a description list', () => {
			let list = Presentation.Widget.DescriptionList("l", o);
			expect(list.tagName.toLowerCase()).to.equal("dl");
			expect(list.childNodes.length).to.equal(4);
			expect(list.childNodes[0].tagName.toLowerCase()).to.equal("dt");
		});
	});

	describe('Given a field property (JSON Schema)', () => {
		let field = {
			"description": "The unique identifier for a user",
			"type" : "integer",
			"minimum": 1
		},
		name = "ID", value = 1, required = [ "ID" ], binding = "x", input, id = "ID";


		beforeEach(() => {
			input = Presentation.Widget.Input(field, name, value, id, required, binding);
		});

		afterEach(() => {
			input = null;
		});

		it('can create an Input', () => {
			expect(input.tagName.toLowerCase()).to.equal("input");
		});

		it('is required', () => {
			expect(input.getAttribute("required")).to.equal("true");
		});

		it('has binding', () => {
			expect(input.getAttribute("data-x")).to.equal(name);
		});

		it('is type number', () => {
			expect(input.getAttribute("type")).to.equal("number");
		});
	});
});
