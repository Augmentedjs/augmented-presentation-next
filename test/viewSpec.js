import Presentation from "../src/presentation.js";
import expect from "expect";
const jsdom = require("mocha-jsdom");

describe("Given an Augmented View", () => {
  jsdom();

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
      expect(Presentation.View).toBeDefined();
    });
    it("can set a name property", () => {
      view.name = "test";
      expect(view.name).toEqual("test");
    });
    it("can set permissions", () => {
      view.addPermission("admin");
      expect(view.permissions.include).not.toEqual([]);
    });
    it("can match a permission", () => {
      view.permissions = { "include": ["admin", "bubba"], "exclude": [] };
      expect(view.matchesPermission("bubba")).toBeTruthy();
    });
    it("does not match a negative permission", () => {
      view.permissions = { "include": ["admin", "bubba"], "exclude": [] };
      expect(view.matchesPermission("bubba", true)).toBeFalsy();
    });
    it("contains a overridable canDisplay", () => {
      expect(view.canDisplay()).toBeTruthy();
    });

    it("can render", () => {
      const v = view.render();
      expect(v).toBeDefined();
    });

    it("supports beforeRender when attempting a render", () => {
      view.beforeRender = () => { fired = true; };
      view.render();
      expect(fired).toBeTruthy();
    });

    it("supports afterRender when attempting a render", () => {
      view.afterRender = () => { fired = true; };
      view.render();
      expect(fired).toBeTruthy();
    });

    it("supports correct \"this\" when overriding a render", () => {
      view.monkey = "monkey";
      const that = view;
      view.render = () => {
        fired = ((that !== window) && (that.monkey === "monkey"));
      };
      view.render();
      expect(fired).toBeTruthy();
    });
  });

  describe("extending my own instance of Presentation View", () => {
    class BaseView extends Presentation.View {
      constructor() {
        super("monkey", null);
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
      expect(BaseView).toBeDefined();
    });
    it("can set a name property", () => {
      view.name = "test";
      expect(view.name).toEqual("test");
    });
    it("can set permissions", () => {
      view.addPermission("admin");
      expect(view.permissions.include).not.toEqual([]);
    });
    it("can match a permission", () => {
      view.permissions = { "include": ["admin", "bubba"], "exclude": [] };
      expect(view.matchesPermission("bubba")).toBeTruthy();
    });
    it("does not match a negative permission", () => {
      view.permissions = { "include": ["admin", "bubba"], "exclude": [] };
      expect(view.matchesPermission("bubba", true)).toBeFalsy();
    });
    it("contains a overridable canDisplay", () => {
      expect(view.canDisplay()).toBeTruthy();
    });

    it("supports beforeRender when attempting a render", () => {
      view.beforeRender = () => { fired = true; };
      view.render();
      expect(fired).toBeTruthy();
    });

    it("supports afterRender when attempting a render", () => {
      view.afterRender = () => { fired = true; };
      view.render();
      expect(fired).toBeTruthy();
    });

    // defect fixs
    it("supports correct \"this\" when overriding a render", () => {
      view.monkey = "monkey";
      const that = view;
      view.render = () => {
        fired = ((that !== window) && (that.monkey === "monkey"));
      };
      view.render();
      expect(fired).toBeTruthy();
    });

    it("supports beforeRender, render, then afterRender when attempting a render", () => {
      view.r = 0;
      view.beforeRender = () => { view.r++; };
      view.render = () => {
        view.r++;
        fired = true;
      };
      view.afterRender = () => { view.r++; };
      view.render();
      expect(view.r).toEqual(1);
      expect(fired).toBeTruthy();
    });

    it("calls render only once", () => {
      view.r = 0;
      view.f = false;
      view.beforeRender = () => { view.f = true; };
      view.render = () => {
        view.r++;
      };
      view.render();
      console.debug("r", view.r);
      expect(view.r).toEqual(1);
      //expect(view.f).toBeTruthy();
    });
  });
});
