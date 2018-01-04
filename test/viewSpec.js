//const Presentation = require("../dist/augmented-next-presentation.js");
//import expect from "expect";

describe("Given an Augmented View", () => {
  describe("creating a standard instance of Augmented View", () => {
    let view = null;
    let fired  = false;

    beforeEach(() => {
      fired = false;
      view = new Presentation.View();
    });

    afterEach(() => {
      fired  = false;
      view.remove();
      view = null;
    });

    it("has an augmented View", () => {
      expect(Presentation.View).to.not.be.undefined;
    });
    it("can set a name property", () => {
      view.name = "test";
      expect(view.name).to.equal("test");
    });
    it("can set permissions", () => {
      view.addPermission("admin");
      expect(view.permissions.include).to.not.equal([]);
    });
    it("can match a permission", () => {
      view.permissions = { "include": ["admin", "bubba"], "exclude": [] };
      expect(view.matchesPermission("bubba")).to.be.true;
    });
    it("does not match a negative permission", () => {
      view.permissions = { "include": ["admin", "bubba"], "exclude": [] };
      expect(view.matchesPermission("bubba", true)).to.be.false;
    });
    it("contains a overridable canDisplay", () => {
      expect(view.canDisplay()).to.be.true;
    });

    it("can render", () => {
      const v = view.render();
      expect(v).to.not.be.undefined;
    });

    xit("supports beforeRender when attempting a render", () => {
      view.beforeRender = () => { fired = true; };
      view.render();
      expect(fired).to.be.true;
    });

    xit("supports afterRender when attempting a render", () => {
      view.afterRender = () => { fired = true; };
      view.render();
      expect(fired).to.be.true;
    });

    it("supports correct \"this\" when overriding a render", () => {
      view.monkey = "monkey";
      const that = view;
      view.render = () => {
        fired = ((that !== window) && (that.monkey === "monkey"));
      };
      view.render();
      expect(fired).to.be.true;
    });
  });

  describe("extending my own instance of Presentation View", () => {
    class BaseView extends Presentation.View {
      constructor() {
        super({ "name": "monkey" });
        this.monkey = "monkey";
      };
    };

    let view = null;
    let fired  = false;

    beforeEach(() => {
      fired = false;
      view = new BaseView();
    });

    afterEach(() => {
      fired  = false;
      view.remove();
      view = null;
    });

    it("has an BaseView that extends Presentation.View", () => {
      expect(BaseView).to.not.be.undefined;
    });
    it("can set a name property", () => {
      view.name = "test";
      expect(view.name).to.equal("test");
    });
    it("can set permissions", () => {
      view.addPermission("admin");
      expect(view.permissions.include).to.not.equal([]);
    });
    it("can match a permission", () => {
      view.permissions = { "include": ["admin", "bubba"], "exclude": [] };
      expect(view.matchesPermission("bubba")).to.be.true;
    });
    it("does not match a negative permission", () => {
      view.permissions = { "include": ["admin", "bubba"], "exclude": [] };
      expect(view.matchesPermission("bubba", true)).to.be.false;
    });
    it("contains a overridable canDisplay", () => {
      expect(view.canDisplay()).to.be.true;
    });

    xit("supports beforeRender when attempting a render", () => {
      view.beforeRender = () => { fired = true; };
      view.render();
      expect(fired).to.be.true;
    });

    xit("supports afterRender when attempting a render", () => {
      view.afterRender = () => { fired = true; };
      view.render();
      expect(fired).to.be.true;
    });

    // defect fixs
    it("supports correct \"this\" when overriding a render", () => {
      view.monkey = "monkey";
      const that = view;
      view.render = () => {
        fired = ((that !== window) && (that.monkey === "monkey"));
      };
      view.render();
      expect(fired).to.be.true;
    });

    xit("supports beforeRender, render, then afterRender when attempting a render", () => {
      view.r = 0;
      view.beforeRender = () => { view.r++; };
      view.render = () => {
        view.r++;
        fired = true;
      };
      view.afterRender = () => { view.r++; };
      view.render();
      expect(view.r).to.equal(1);
      expect(fired).to.be.true;
    });

    it("calls render only once", () => {
      view.r = 0;
      view.f = false;
      view.beforeRender = () => { view.f = true; };
      view.render = () => {
        view.r++;
      };
      view.render();
      expect(view.r).to.equal(1);
      //expect(view.f).to.be.true;
    });
  });
});
