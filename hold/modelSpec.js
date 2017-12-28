const expect = require("expect");
import Presentation from "../src/presentation.js";

xdescribe("Given an Abstract Model", () => {
  it("is defined", () => {
    expect(Presentation.Model).toBeDefined();
  });

  let model;
  beforeEach(() => {
    model = new Presentation.Model();
  });
  afterEach(() => {
    model = null;
  });

  it("can check if empty", () => {
    expect(model.isEmpty()).toBeTruthy();
  });

  xit("without Cross Origin Support will not make Cross Origin requests", () => {
    model.crossOrigin = false;
    expect(model.crossOrigin).toBeFalsy();
  });

  xit("with Cross Origin Support will make Cross Origin requests", () => {
    model.crossOrigin = true;
    expect(model.crossOrigin).toBeTruthy();
  });

  xit("with mock can return something", () => {
    let s = false;
    model.mock = true;
    model.url = "/info";
    model.fetch({"success": () => { s = true; }});
    expect(s).toBeTruthy();
  });

  it("can reset with data", () => {
    model.set({ "y": "y" });
    model.reset({ "x": "x" });

    expect(model.get("x")).toEqual("x");
    expect(model.get("y")).not.toBeDefined();
  });

  it("can set with data", () => {
    model.set({ "x": "x" });
    expect(model.get("x")).toEqual("x");
  });

  describe("Given validation", () => {
	  beforeEach(() => {
	    model = new Presentation.Model();
	  });
	  afterEach(() => {
	    model = null;
	  });

		it("with no Schema does not support Validation", () => {
			expect(model.supportsValidation()).toBeFalsy();
		});

		it("with an empty Schema does support Validation", () => {
			model.schema = {};
			expect(model.supportsValidation()).toBeTruthy();
		});
	});
});
