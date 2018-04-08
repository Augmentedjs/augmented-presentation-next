import Augmented from "augmentedjs-next";

/**
 * DOM related functions
 */
class Dom {
  constructor() {
  };

  /**
   * Gets the height of the browser viewport
   * @method getViewportHeight
   * @returns {number} The height of the viewport

   */
  static getViewportHeight() {
    return window.innerHeight;
  };
  /**
   * Gets the width of the browser viewport
   * @method getViewportWidth
   * @returns {number} The width of the viewport

   */
  static getViewportWidth() {
    return window.innerWidth;
  };
  /**
   * Sets the value of an element<br/>
   * Will detect the correct method to do so by element type
   * @method setValue
   * @param {Node} el Element or string of element selector
   * @param {string} value Value to set (or HTML)
   * @param {boolean} onlyText Value will set as text only

   */
  static setValue(el, value, onlyText) {
    if (el) {
      value = (value) ? value : "";
      let myEl = this.selector(el);
      if (myEl && (myEl.nodeType === 1) && (myEl.nodeName === "select" || myEl.nodeName === "SELECT")) {
        // Select box
        _logger.debug("Select box (not supported) set to - " + value);
      } else if (myEl && (myEl.nodeType === 1) &&
      (myEl.nodeName === "input" || myEl.nodeName === "INPUT" ||
      myEl.nodeName === "textarea" || myEl.nodeName === "TEXTAREA")) {
        myEl.value = value;
      } else if (myEl && (myEl.nodeType === 1)) {
        if (onlyText){
          myEl.innerText = value;
        } else {
          myEl.innerHTML = value;
        }
      }
    }
  };
  /**
   * Gets the value of an element<br/>
   * Will detect the correct method to do so by element type
   * @method getValue
   * @param {Node} el Element or string of element selector
   * @returns {string} Returns the value of the element (or HTML)

   */
  static getValue(el) {
    if (el) {
      let myEl = this.selector(el);

      if (myEl && (myEl.nodeType === 1) &&
      (myEl.nodeName === "input" || myEl.nodeName === "INPUT" ||
      myEl.nodeName === "textarea" || myEl.nodeName === "TEXTAREA" ||
      myEl.nodeName === "select" || myEl.nodeName === "SELECT")) {
        return myEl.value;
      } else if (myEl && (myEl.nodeType === 1)) {
        return myEl.innerHTML;
      }
    }
    return null;
  };
  /**
   * Selector function<br/>
   * Supports full query selection
   * @method selector
   * @param {string} query Element or string of element selector
   * @returns {Node} Returns the element (or first of type)

   */
  static selector(query) {
    if (query) {
      return Augmented.isString(query) ? document.querySelector(query) : query;
    }
    return null;
  };
  /**
   * Selectors function<br/>
   * Supports full query selection
   * @method selectors
   * @param {string} query Element or string of element selector
   * @returns {NodeList} Returns all the nodes selected

   */
  static selectors(query) {
    if (query) {
      return Augmented.isString(query) ? document.querySelectorAll(query) : query;
    }
    return null;
  };
  /**
   * Query function<br/>
   * Supports full query selection but acts like jQuery
   * @method query
   * @param {string} query Element or string of element selector
   * @param {Node} el Element to start from (optional)
   * @returns {NodeList|Node} Returns all the nodes selected

   */
  static query(query, el) {
    if (query) {
      let d = document;
      if (el) {
        d = Dom.selector(el);
      }

      let nodelist = Augmented.isString(query) ? d.querySelectorAll(query) : query;

      if (nodelist.length === 1) {
        return nodelist[0];
      }
      return nodelist;
    }
    return null;
  };
  /**
   * Hides an element
   * @method hide
   * @param {Node} el Element or string of element selector

   */
  static hide(el) {
    let myEl = this.selector(el);
    if (myEl) {
      myEl.style.display = "none";
      myEl.style.visibility = "hidden";
    }
  };
  /**
   * Shows an element
   * @method show
   * @param {Node} el Element or string of element selector
   * @param {string} display Value to set for 'display' property (optional)

   */
  static show(el, display) {
    let myEl = this.selector(el);
    if (myEl) {
      myEl.style.display = (display) ? display : "block";
      myEl.style.visibility = "visible";
    }
  };
  /**
   * Sets the class attribute (completely)
   * @method setClass
   * @param {Node} el Element or string of element selector
   * @param {string} cls the class value

   */
  static setClass(el, cls) {
    let myEl = this.selector(el);
    if (myEl) {
      myEl.setAttribute("class", cls);
    }
  };
  /**
   * Adds a class attribute
   * @method addClass
   * @param {Node} el Element or string of element selector
   * @param {string} cls the class value

   */
  static addClass(el, cls) {
    let myEl = this.selector(el);
    if (myEl) {
      myEl.classList.add(cls);
    }
  };
  /**
   * Remove a class attribute
   * @method removeClass
   * @param {Node} el Element or string of element selector
   * @param {string} cls the class value

   */
  static removeClass(el, cls) {
    let myEl = this.selector(el);
    if (myEl) {
      myEl.classList.remove(cls);
    }
  };
  /**
   * Empty a element container
   * @method empty
   * @param {Node} el Element or string of element selector

   */
  static empty(el) {
    this.setValue(el, "", true);
  };
  /**
   * injectTemplate method - Injects a template element at a mount point
   * @method injectTemplate
   * @param {string} template The template selector
   * @param {Node} mount The mount point as Document.Element or String

   */
  static injectTemplate(template, mount) {
    let t = this.selector(template), el = this.selector(mount);
    if (t && el) {
      let clone = document.importNode(t.content, true);
      el.appendChild(clone);
    }
  };
};

export default Dom;
