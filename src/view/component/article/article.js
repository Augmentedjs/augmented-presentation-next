import DecoratorView from "../../decorator/decorator.js";
import Dom from "../../../dom/dom.js";

/**
 * An article class for setting up a 'page'<br/>
 * Supported options are:<br/>
 * <ul>
 * <li>name - The name of the article view</li>
 * <li>el - The mount point</li>
 * <li>style - The style class</li>
 * <li>header - The header markup</li>
 * <li>headerEl - The header mount point</li>
 * <li>footer - The footer markup</li>
 * <li>footerEl - The footer mount point</li>
 * <li>body - The body markup</li>
 * <li>bodyEl - The body mount point (will generate a div)</li>
 * <li>sections - array of sections to prefill (see addSection API for format)</li>
 * </ul>
 * @class Article
 * @memberof Presentation.Component
 * @extends Presentation.DecoratorView
 * @param {object} options Options to pass to the constructor
 * @example const article = new Presentation.Component.Article({ "el": "#mount", "header": "html", "footerEl": "#foot" });
 */
class Article extends DecoratorView {
  constructor(options) {
    if (!options) {
      options = {};
    }
    if (!options.name) {
      options.name = "article";
    }
    // tag should be article
    options.tagName = "article";
    super(options);
    if (options && options.header) {
      this._header = options.header;
    } else {
      this._header = "";
    }
    if (options && options.headerEl) {
      this._headerEl = options.headerEl;
    } else {
      this._headerEl = "";
    }
    if (options && options.body) {
      this._body = options.body;
    } else {
      this._body = "";
    }
    if (options && options.style) {
      this._style = options.style;
    } else {
      this._style = "";
    }
    if (options && options.footer) {
      this._footer = options.footer;
    } else {
      this._footer = "";
    }
    if (options && options.footerEl) {
      this._footerEl = options.footerEl;
    } else {
      this._footerEl = "";
    }
    if (options && options.sections) {
      this._sections = options.sections;
    } else {
      this._sections = [];
    }
  };

  /**
   * Header property
   * @property {string} header
   * @memberof Article
   */
  set header(header) {
    this._header = header;
  };

  get header() {
    return this._header;
  };

  /**
   * style property - the style
   * @property {string} style
   * @memberof Article
   */
  set style(style) {
    this._style = style;
  };

  get style() {
    return this._style;
  };

  /**
   * Footer for the article
   * @property {string} footer
   * @memberof Article
   */
  set footer(footer) {
    this._footer = footer;
  };

  get footer() {
    return this._footer;
  };

  /**
   * The body content of the card (supports HTML)
   * @property {string} body
   * @memberof Article
   */
  set body(body) {
    this._body = body;
  };

  get body() {
    return this._body;
  };

  /**
   * The section array
   * @property {array} sections
   * @memberof Article
   */
  set sections(sections) {
    if (sections && Array.isArray(sections)) {
      this._sections = sections;
    }
  };

  get sections() {
    return this._sections;
  };

  _formatSections() {
    const l = this._sections.length;
    let sections = "", i = 0;
    for (i = 0; i < l; i++) {
      sections += this._formatSection(sections[i]);
    }
    return sections;
  };

  _formatSection(section) {
    let sect = "";
    if (section && ( section.body || section.id || section.class )) {
      const cls = (section.class) ? ` class="${section.class}"` : "";
      const id = (section.id) ? ` id="${section.id}"` : "";
      sect = `<section${id}${cls}>${section.body}</section>`;
    }
    return sect;
  };

  /**
   * @method addSection Add a section object to the article
   * @param {object} section a section object
   * @memberof article
   * @example Section Object format:
   * {
   *   "id" "#something"
   *   "body" "html"
   *   "class" "something"
   * }
  addSection(section) {
    this._sections.push(section);
  }

  /**
   * render - render the article
   * @method render
   * @memberof Article
   */
  render() {
    if (this.el) {
      Dom.setValue(this.el, this._template());
      this.delegateEvents();
    }
    return this;
  };

  /**
   * template - sets content of the dialog, handled internally
   * @method _template
   * @memberof Article
   * @private
   */
  _template() {
    /*
    let cls = "";
    if (this._style) {
      cls = ` class="${this._style}"`;
    }
    let id = "";
    if (this.el) {
      id = ` id="${this.el}"`;
    }
    */
    let header = "";
    if (this._header) {
      let hid = "";
      if (this._headerEl) {
        hid = ` id="${this._headerEl}"`;
      }
      header = `<header${hid}>${this._header}</header>`;
    }
    let footer = "";
    if (this._footer) {
      let fid = "";
      if (this._footerEl) {
        fid = ` id="${this._footerEl}"`;
      }
      footer = `<footer${fid}>${this._footer}</footer>`;
    }
    let body = "";
    if (this._body) {
      if (this._bodyEl) {
        body = `<div id="${this._bodyEl}">${this._body}</div>`;
      } else {
        body = `${this._body}`;
      }
    }
    return `${header}${this._formatSections()}${body}${footer}`;
  };
};

export default Article;
