

/**
* Augmented.Presentation.DirectDOMAutomaticTable<br/>
* Uses direct DOM methods vs cached HTML<br/>
* Creates a table automatically via a schema for defintion and a uri/json for data
* @constructor Augmented.Presentation.DirectDOMAutomaticTable
* @extends Augmented.Presentation.AutomaticTable
* @memberof Augmented.Presentation
* @example
* var myAt = Augmented.Presentation.AutomaticTable.extend({ ... });
* var at = new myAt({
*     schema : schema,
*     el: "#autoTable",
*     crossOrigin: false,
*     sortable: true,
*     lineNumbers: true,
*     editable: true,
*     uri: "/example/data/table.json"
* });
*/

/**
  * Augmented.Presentation.AutomaticTable<br/>
  * Creates a table automatically via a schema for defintion and a uri/json for data
  * @constructor Augmented.Presentation.AutomaticTable
  * @extends Augmented.Presentation.DecoratorView
  * @memberof Augmented.Presentation
  */

/**
* Augmented.Presentation.AutoTable
* Shorthand for Augmented.Presentation.AutomaticTable
* @constructor Augmented.Presentation.AutoTable
* @extends Augmented.Presentation.AutomaticTable
* @memberof Augmented.Presentation
*/
Augmented.Presentation.AutoTable =
Augmented.Presentation.AutomaticTable =
Augmented.Presentation.DirectDOMAutomaticTable = Augmented.Presentation.DecoratorView.extend({
  /**
  * The theme property - The theme of this table (default is 'material')
  * @property {string} theme The theme of this table
  * @memberof Augmented.Presentation.AutomaticTable
  */
  theme: "material",
  /**
  * The setTheme method
  * @method setTheme sets the theme of this table
  * @param {string} theme name of the theme
  * @memberof Augmented.Presentation.AutomaticTable
  */
  setTheme: function(theme) {
    const el = ((typeof this.el === 'string') ? document.querySelector(this.el) : this.el),
    e = el.querySelector("table");
    if (e) {
      e.setAttribute("class", theme);
    }
    this.theme = theme;
  },

  /**
  * The linkable property - enable links in a row (only works in non-editable tables)
  * @property {boolean} linkable enable/disable linking a row
  * @memberof Augmented.Presentation.AutomaticTable
  */
  linkable: false,
  /**
  * The links property - setup linking structure for links in a row
  * @property {boolean} linkable enable/disable linking a row
  * @example links: {
  * wholeRow: false, // link whole row vs column
  * column: "name", // name of column
  *	link: "rowLink" // callback
  * }
  * @memberof Augmented.Presentation.AutomaticTable
  */
  links: {
    wholeRow: true,
    column: "",
    link: "rowLink"
  },
  /**
  * The default rowlink function callback called by row to format a link
  * @method rowlink
  * @param {array} row The row data
  * @returns {string} Returns the link uri
  * @memberof Augmented.Presentation.AutomaticTable
  */
  rowLink: function(row) {
    return "";
  },
  /**
  * The selectable property - enable selecting a row in table
  * @property {boolean} selectable enable/disable selecting a row
  * @memberof Augmented.Presentation.AutomaticTable
  */
  selectable: false,
  /**
  * The sortable property - enable sorting in table
  * @property {boolean} sortable enable sorting in the table
  * @memberof Augmented.Presentation.AutomaticTable
  */
  sortable: false,
  /**
  * The sortStyle property - setup the sort API
  * @property {string} sortStyle setup the sort API
  * @memberof Augmented.Presentation.AutomaticTable
  */
  sortStyle: "client",
  /**
  * The sortKey property
  * @property {string} sortKey sorted key
  * @private
  * @memberof Augmented.Presentation.AutomaticTable
  */
  sortKey: null,
  /**
  * Sort the tabe by a key (sent via a UI Event)
  * @method sortBy
  * @memberof Augmented.Presentation.AutomaticTable
  * @param {string} key The key to sort by
  */
  sortBy: function(key) {
    if (key && ( (this.editable) || (!this.editable && this.sortKey !== key))) {
      this.sortKey = key;
      this.collection.sortByKey(key);
      this.refresh();
    }
  },

  /**
    * Fields to display - null will display all
    * @method display
    * @memberof Augmented.Presentation.AutomaticTable
    */
  display: null,

  // pagination
  /**
  * The renderPaginationControl property - render the pagination control
  * @property {boolean} renderPaginationControl render the pagination control
  * @memberof Augmented.Presentation.AutomaticTable
  */
  renderPaginationControl: false,
  /**
  * The paginationAPI property - setup the paginatin API to use
  * @property {Augmented.PaginationFactory.type} paginationAPI the pagination API to use
  * @memberof Augmented.Presentation.AutomaticTable
  */
  paginationAPI: null,
  /**
  * The name property
  * @property {string} name The name of the table
  * @memberof Augmented.Presentation.AutomaticTable
  */
  name: "",
  /**
  * The description property
  * @property {string} description The description of the table
  * @memberof Augmented.Presentation.AutomaticTable
  */
  description: "",
  /**
  * Return the current page number
  * @method currentPage
  * @memberof Augmented.Presentation.AutomaticTable
  * @returns {number} The current page number
  */
  currentPage: function() {
    return this.collection.currentPage;
  },
  /**
  * Return the total pages
  * @method totalPages
  * @memberof Augmented.Presentation.AutomaticTable
  * @returns {number} The total pages
  */
  totalPages: function() {
    return this.collection.totalPages;
  },
  /**
  * Advance to the next page
  * @method nextPage
  * @memberof Augmented.Presentation.AutomaticTable
  */
  nextPage: function() {
    this.collection.nextPage();
    this.refresh();
  },
  /**
  * Return to the previous page
  * @method previousPage
  * @memberof Augmented.Presentation.AutomaticTable
  */
  previousPage: function() {
    this.collection.previousPage();
    this.refresh();
  },
  /**
  * Go to a specific page
  * @method goToPage
  * @param {number} page The page to go to
  * @memberof Augmented.Presentation.AutomaticTable
  */
  goToPage: function(page) {
    this.collection.goToPage(page);
    this.refresh();
  },
  /**
  * Return to the first page
  * @method firstPage
  * @memberof Augmented.Presentation.AutomaticTable
  */
  firstPage: function() {
    this.collection.firstPage();
    this.refresh();
  },
  /**
  * Advance to the last page
  * @method lastPage
  * @memberof Augmented.Presentation.AutomaticTable
  */
  lastPage: function() {
    this.collection.lastPage();
    this.refresh();
  },

  // local storage

  /**
  * The localStorage property - enables localStorage
  * @property {boolean} localStorage The localStorage property
  * @memberof Augmented.Presentation.AutomaticTable
  */
  localStorage: false,
  /**
  * The localStorageKey property - set the key for use in storage
  * @property {string} localStorageKey The localStorage key property
  * @memberof Augmented.Presentation.AutomaticTable
  */
  localStorageKey: "augmented.localstorage.autotable.key",

  // editable

  /**
  * The editable property - enables editing of cells
  * @property {boolean} editable The editable property
  * @memberof Augmented.Presentation.AutomaticTable
  */
  editable: false,

  /**
  * Edit a cell at the row and column specified
  * @method editCell
  * @memberof Augmented.Presentation.AutomaticTable
  * @param {number} row The row
  * @param {number} col The column
  * @param {any} value The value to set
  */
  editCell: function(row, col, value) {
    if (row && col) {
      var model = this.collection.at(row), name = this.columns[col];
      if (model && name) {
        model.set(name, value);
      }
    }
  },
  /**
  * Copy a cell at the row and column  to another
  * @method copyCell
  * @memberof Augmented.Presentation.AutomaticTable
  * @param {number} row1 The 'from' row
  * @param {number} col1 The 'from' column
  * @param {number} row2 The 'to' row
  * @param {number} col2 The 'to' column
  */
  copyCell: function(row1, col1, row2, col2) {
    if (row1 && col1 && row2 && col2) {
      var model1 = this.collection.at(row1), name1 = this.columns[col1],
      model2 = this.collection.at(row);
      if (model1 && name1 && model2) {
        model2.set(name1, value1);
      }
    }
  },
  /**
  * Clear a cell at the row and column specified
  * @method clearCell
  * @memberof Augmented.Presentation.AutomaticTable
  * @param {number} row The row
  * @param {number} col The column
  */
  clearCell: function(row, col) {
    this.editCell(row, col, null);
  },

  // standard functionality

  /**
  * The crossOrigin property - enables cross origin fetch
  * @property {boolean} crossOrigin The crossOrigin property
  * @memberof Augmented.Presentation.AutomaticTable
  */
  crossOrigin: false,
  /**
  * The lineNumber property - turns on line numbers
  * @property {boolean} lineNumbers The lineNumbers property
  * @memberof Augmented.Presentation.AutomaticTable
  */
  lineNumbers: false,
  /**
  * The columns property
  * @property {object} columns The columns property
  * @private
  * @memberof Augmented.Presentation.AutomaticTable
  */
  _columns: {},
  /**
  * The URI property
  * @property {string} uri The URI property
  * @memberof Augmented.Presentation.AutomaticTable
  */
  uri: null,
  /**
  * The data property
  * @property {array} data The data property
  * @memberof Augmented.Presentation.AutomaticTable
  * @private
  */
  data: [],
  /**
  * The collection property
  * @property {Augmented.PaginatedCollection} collection The collection property
  * @memberof Augmented.Presentation.AutomaticTable
  * @private
  */
  collection: null,
  /**
  * The initialized property
  * @property {boolean} isInitalized The initialized property
  * @memberof Augmented.Presentation.AutomaticTable
  */
  isInitalized : false,
  /**
  * Initialize the table view
  * @method initialize
  * @memberof Augmented.Presentation.AutomaticTable
  * @param {object} options The view options
  * @returns {boolean} Returns true on success of initalization
  */
  initialize: function(options) {
    this.init(options);

    if (!this.model) {
      this.model = new Augmented.Model();
    }

    if (this.collection) {
      this.collection.reset();
    }
    if (options) {
      if (options.paginationAPI) {
        this.paginationAPI = options.paginationAPI;
      }
      if (!this.collection && this.paginationAPI) {
        this.collection = Augmented.PaginationFactory.getPaginatedCollection(this.paginationAPI);
        this.paginationAPI = this.collection.paginationAPI;
        this.localStorage = false;
      } else if (!this.collection && this.localStorage) {
        this.collection = new Augmented.LocalStorageCollection();
      } else if (!this.collection) {
        this.collection = new Augmented.Collection();
      }
      if (options.schema) {
        // check if this is a schema vs a URI to get a schema
        if (Augmented.isObject(options.schema)) {
          this.schema = options.schema;
        } else {
          // is a URI?
          let parsedSchema = null;
          try {
            parsedSchema = JSON.parse(options.schema);
            if (parsedSchema && Augmented.isObject(parsedSchema)) {
              this.schema = parsedSchema;
            }
          } catch(e) {
            _logger.warn("AUGMENTED: AutoTable parsing string schema failed.  URI perhaps?");
          }
          if (!this.schema) {
            this.retrieveSchema(options.schema);
            this.isInitalized = false;
          }
        }
      }

      if (options.el) {
        this.el = options.el;
      }

      if (options.uri) {
        this.uri = options.uri;
        this.collection.url = options.uri;
      }

      if (options.data && (Array.isArray(options.data))) {
        this.populate(options.data);
      }

      if (options.renderPaginationControl) {
        this.renderPaginationControl = options.renderPaginationControl;
      }

      if (options.selectable) {
        this.selectable = options.selectable;
      }

      if (options.sortable) {
        this.sortable = options.sortable;
      }

      if (options.lineNumbers) {
        this.lineNumbers = options.lineNumbers;
      }

      if (options.editable) {
        this.editable = options.editable;
      }

      if (options.localStorageKey && !options.uri) {
        this.localStorageKey = options.localStorageKey;
        this.uri = null;
      }
    }

    if (this.collection && this.uri) {
      this.collection.url = this.uri;
    }
    if (this.collection) {
      this.collection.crossOrigin = this.crossOrigin;
    }
    if (this.schema) {
      if ((!this.name || this.name === "") && this.schema.title) {
        this.name = this.schema.title;
      }

      if ((!this.description || this.description === "") && this.schema.description) {
        this.description = this.schema.description;
      }

      if (!this.isInitalized) {
        this._columns = this.schema.properties;
        this.collection.schema = this.schema;
        this.isInitalized = true;
      }

    } else {
      this.isInitalized = false;
      return false;
    }

    return this.isInitalized;
  },

  /**
  * Render the table
  * @method render Renders the table
  * @memberof Augmented.Presentation.AutomaticTable
  * @returns {object} Returns the view context ('this')
  */
  render: function() {
    if (!this.isInitalized) {
      _logger.warn("AUGMENTED: AutoTable Can't render yet, not initialized!");
      return this;
    }
    let e;
    if (this.template) {
      // refresh the table body only
      this.showProgressBar(true);
      if (this.el) {
        e = (typeof this.el === 'string') ? document.querySelector(this.el) : this.el;
        let tbody = e.querySelector("tbody"), thead = e.querySelector("thead");
        if (e) {
          if (this.sortable) {
            this.unbindSortableColumnEvents();
          }
          if (this.editable) {
            this.unbindCellChangeEvents();
          }
          if (this._columns && (Object.keys(this._columns).length > 0)){
            while (thead.hasChildNodes()) {
              thead.removeChild(thead.lastChild);
            }
            directDOMTableHeader(thead, this._columns, this.lineNumbers, this.sortKey, this.display, this.selectable);
          } else {
            while (thead.hasChildNodes()) {
              thead.removeChild(thead.lastChild);
            }
          }

          if (this.collection && (this.collection.length > 0)){
            while (tbody.hasChildNodes()) {
              tbody.removeChild(tbody.lastChild);
            }
            if (this.editable) {
              // links not supported
              directDOMEditableTableBody(tbody, this.collection.toJSON(), this._columns, this.lineNumbers, this.sortKey, this.display, this.selectable, this.name);
            } else {
              directDOMTableBody(tbody, this.collection.toJSON(), this._columns, this.lineNumbers, this.sortKey, this.display, this.selectable, this.name, this.linkable, this.links, this[this.links.link]);
            }
          } else {
            while (tbody.hasChildNodes()) {
              tbody.removeChild(tbody.lastChild);
            }
          }
        }
      } else if (this.$el) {
        _logger.warn("AUGMENTED: AutoTable doesn't support jquery, sorry, not rendering.");
      } else {
        _logger.warn("AUGMENTED: AutoTable no element anchor, not rendering.");
      }
    } else {
      this.template = "notused";
      this.showProgressBar(true);

      if (this.el) {
        e = (typeof this.el === 'string') ? document.querySelector(this.el) : this.el;
        if (e) {
          // progress bar
          let n = document.createElement("progress"),
          t = document.createTextNode("Please wait.");
          n.appendChild(t);
          e.appendChild(n);

          // the table
          directDOMTableCompile(e, this.name, this.description, this._columns, this.collection.toJSON(), this.lineNumbers, this.sortKey, this.editable, this.display, this.selectable, this.linkable, this.links, this[this.links.link]);

          // pagination control
          if (this.renderPaginationControl) {
            directDOMPaginationControl(e, this.currentPage(), this.totalPages());
          }

          // message
          n = document.createElement("p");
          n.classList.add("message");
          e.appendChild(n);
        }
      } else if (this.$el) {
        _logger.warn("AUGMENTED: AutoTable doesn't support jquery, sorry, not rendering.");
      } else {
        _logger.warn("AUGMENTED: AutoTable no element anchor, not rendering.");
      }

      if (this.renderPaginationControl) {
        this.bindPaginationControlEvents();
      }
    }
    this.delegateEvents();

    if (this.sortable) {
      this.bindSortableColumnEvents();
    }

    if (this.editable) {
      this.bindCellChangeEvents();
    }

    this.showProgressBar(false);

    this.setTheme(this.theme);

    return this;
  },

  /**
  * Fetch the schema from the source URI
  * @method retrieveSchema
  * @param uri {string} the URI to fetch from
  * @memberof Augmented.Presentation.AutomaticTable
  */
  retrieveSchema: function(uri){
    const that = this;
    let schema = null;
    Augmented.ajax({
      url: uri,
      contentType: 'application/json',
      dataType: 'json',
      success: function(data, status) {
        if (typeof data === "string") {
          schema = JSON.parse(data);
        } else {
          schema = data;
        }
        const options = { "schema": schema };
        that.initialize(options);
      },
      failure: function(data, status) {
        _logger.warn("AUGMENTED: AutoTable Failed to fetch schema!");
      }
    });
  },
  /**
  * Fetch the data from the source URI
  * @method fetch
  * @memberof Augmented.Presentation.AutomaticTable
  */
  fetch: function() {
    // TODO: should be a promise
    this.showProgressBar(true);

    const view = this;

    const successHandler = function() {
      view.showProgressBar(false);
      view.sortKey = null;
      view.populate(view.collection.toJSON());
      view.refresh();
    };

    const failHandler = function() {
      view.showProgressBar(false);
      view.showMessage("AutomaticTable fetch failed!");
    };

    this.collection.fetch({
      reset: true,
      success: function(){
        successHandler();
      },
      error: function(){
        failHandler();
      }
    });
  },

  /**
  * Save the data to the source
  * This only functions if the table is editable
  * @method save
  * @param {boolean} override Save even if not editable
  * @returns Returns true if succesfull
  * @memberof Augmented.Presentation.AutomaticTable
  */
  save: function(override) {
    if (this.editable || override) {
      this.showProgressBar(true);

      const view = this;

      const successHandler = function() {
        view.showProgressBar(false);
        return true;
      };

      const failHandler = function() {
        view.showProgressBar(false);
        view.showMessage("AutomaticTable save failed!");
        _logger.warn("AUGMENTED: AutomaticTable save failed!");
        return false;
      };

      this.collection.save({
        reset: true,
        success: function(){
          successHandler();
        },
        error: function(){
          failHandler();
        }
      });
    }
    return false;
  },

  /**
  * Populate the data in the table
  * @method populate
  * @memberof Augmented.Presentation.AutomaticTable
  * @param {array} source The source data array
  */
  populate: function(source) {
    if (source && Array.isArray(source)) {
      this.sortKey = null;
      this.data = source;
      this.collection.reset(this.data);
    }
  },
  /**
  * Clear all the data in the table
  * @method clear
  * @memberof Augmented.Presentation.AutomaticTable
  */
  clear: function() {
    this.sortKey = null;
    this.data = [];
    this.collection.reset(null);
  },
  /**
  * Refresh the table (Same as render)
  * @method refresh Refresh the table
  * @memberof Augmented.Presentation.AutomaticTable
  * @returns {object} Returns the view context ('this')
  * @see Augmented.Presentation.AutomaticTable.render
  */
  refresh: function() {
    return this.render();
  },


  /**
  * Save Cell Event
  * @private
  */
  saveCell: function(event) {
    const key = event.target, model = this.collection.at(parseInt(key.getAttribute(tableDataAttributes.index)));
    let value = key.value;
    if ((key.getAttribute("type")) === "number") {
      value = parseInt(key.value);
    }
    model.set(key.getAttribute(tableDataAttributes.name), value);
  },

  /**
  * @private
  */
  bindCellChangeEvents: function() {
    var myEl = (typeof this.el === 'string') ? this.el : this.el.localName;
    var cells = [].slice.call(document.querySelectorAll(myEl + " table tr td input"));
    var i=0, l=cells.length;
    for(i=0; i < l; i++) {
      cells[i].addEventListener("change", this.saveCell.bind(this), false);
    }
    // bind the select boxes as well
    cells = [].slice.call(document.querySelectorAll(myEl + " table tr td select"));
    i=0;
    l=cells.length;
    for(i=0; i < l; i++) {
      cells[i].addEventListener("change", this.saveCell.bind(this), false);
    }
  },

  /**
  * @private
  */
  unbindCellChangeEvents: function() {
    var myEl = (typeof this.el === 'string') ? this.el : this.el.localName;
    var cells = [].slice.call(document.querySelectorAll(myEl + " table tr td input"));
    var i=0, l=cells.length;
    for(i=0; i < l; i++) {
      cells[i].removeEventListener("change", this.saveCell, false);
    }
    // unbind the select boxes as well
    cells = [].slice.call(document.querySelectorAll(myEl + " table tr td select"));
    i=0;
    l=cells.length;
    for(i=0; i < l; i++) {
      cells[i].removeEventListener("change", this.saveCell, false);
    }
  },

  /**
  * Export the table data in requested format
  * @method exportTo Exports the table
  * @param {string} type The type requested (csv or html-default)
  * @memberof Augmented.Presentation.AutomaticTable
  * @returns {string} The table data in requested format
  */
  exportTo: function(type) {
    var e = "";
    if (type === "csv") {
      e = csvTableCompile(this.name, this.description, this._columns, this.collection.toJSON());
    } else if (type === "tsv") {
      e = tsvTableCompile(this.name, this.description, this._columns, this.collection.toJSON());
    } else {
      // html
      e = defaultTableCompile(this.name, this.description, this._columns, this.collection.toJSON(), false, null);
    }
    return e;
  },

  /**
  * @private
  */
  unbindPaginationControlEvents: function() {
    if (this.pageControlBound) {
      var myEl = (typeof this.el === 'string') ? this.el : this.el.localName;
      var first = document.querySelector(myEl + " div.paginationControl span.first");
      var previous = document.querySelector(myEl + " div.paginationControl span.previous");
      var next = document.querySelector(myEl + " div.paginationControl span.next");
      var last = document.querySelector(myEl + " div.paginationControl span.last");
      if (first) {
        first.removeEventListener("click", this.firstPage, false);
      }
      if (previous) {
        previous.removeEventListener("click", this.previousPage, false);
      }
      if (next) {
        next.removeEventListener("click", this.nextPage, false);
      }
      if (last) {
        last.removeEventListener("click", this.lastPage, false);
      }
      this.pageControlBound = false;
    }
  },

  /**
  * @private
  */
  pageControlBound: false,

  /**
  * @private
  */
  bindPaginationControlEvents: function() {
    if (!this.pageControlBound) {
      var myEl = (typeof this.el === 'string') ? this.el : this.el.localName;
      var first = document.querySelector(myEl + " div.paginationControl span.first");
      var previous = document.querySelector(myEl + " div.paginationControl span.previous");
      var next = document.querySelector(myEl + " div.paginationControl span.next");
      var last = document.querySelector(myEl + " div.paginationControl span.last");
      if (first) {
        first.addEventListener("click", this.firstPage.bind(this), false);
      }
      if (previous) {
        previous.addEventListener("click", this.previousPage.bind(this), false);
      }
      if (next) {
        next.addEventListener("click", this.nextPage.bind(this), false);
      }
      if (last) {
        last.addEventListener("click", this.lastPage.bind(this), false);
      }
      this.pageControlBound = true;
    }
  },

  /**
  * @private
  */
  deriveEventTarget: function(event) {
    var key = null;
    if (event) {
      key = event.target.getAttribute(tableDataAttributes.name);
    }
    return key;
  },
  /**
  * @private
  */
  sortByHeaderEvent: function(event) {
    var key = this.deriveEventTarget(event);
    this.sortBy(key);
  },
  /**
  * @private
  */
  unbindSortableColumnEvents: function()  {
    if (this.el && this.sortable) {
      var list;
      if (typeof this.el === 'string') {
        list = document.querySelectorAll(this.el + " table tr th");
      } else {
        list = document.querySelectorAll(this.el.localName + " table tr th");
      }
      var i = 0, l = list.length;
      for (i = 0; i < l; i++) {
        list[i].removeEventListener("click", this.sortByHeaderEvent, false);
      }
    }
  },
  /**
  * @private
  */
  bindSortableColumnEvents: function()  {
    if (this.el && this.sortable) {
      var list;
      if (typeof this.el === 'string') {
        list = document.querySelectorAll(this.el + " table tr th");
      } else {
        list = document.querySelectorAll(this.el.localName + " table tr th");
      }
      var i = 0, l = list.length;
      for (i = 0; i < l; i++) {
        if (list[i].getAttribute(tableDataAttributes.name) === "lineNumber") {
          // Do I need to do something?
        } else {
          list[i].addEventListener("click", this.sortByHeaderEvent.bind(this), false);
        }
      }
    }
  },

  /**
  * An overridable template compile
  * @method compileTemplate
  * @memberof Augmented.Presentation.AutomaticTable
  * @returns {string} Returns the template
  */
  compileTemplate: function() {
    return "";
  },
  /**
  * Sets the URI
  * @method setURI
  * @memberof Augmented.Presentation.AutomaticTable
  * @param {string} uri The URI
  */
  setURI: function(uri) {
    this.uri = uri;
  },
  /**
  * Sets the schema
  * @method setSchema
  * @memberof Augmented.Presentation.AutomaticTable
  * @param {object} schema The JSON schema of the dataset
  */
  setSchema: function(schema) {
    this.schema = schema;
    this._columns = schema.properties;
    this.collection.reset();
    this.collection.schema = schema;

    if (this.uri) {
      this.collection.url = this.uri;
    }
  },

  /**
  * Enable/Disable the progress bar
  * @method showProgressBar
  * @memberof Augmented.Presentation.AutomaticTable
  * @param {boolean} show Show or Hide the progress bar
  */
  showProgressBar: function(show) {
    if (this.el) {
      var e = (typeof this.el === 'string') ? document.querySelector(this.el) : this.el;
      var p = e.querySelector("progress");
      if (p) {
        p.style.display = (show) ? "block" : "none";
        p.style.visibility = (show) ? "visible" : "hidden";
      }
    }
  },
  /**
  * Show a message related to the table
  * @method showMessage
  * @memberof Augmented.Presentation.AutomaticTable
  * @param {string} message Some message to display
  */
  showMessage: function(message) {
    if (this.el) {
      var e = (typeof this.el === 'string') ? document.querySelector(this.el) : this.el;
      var p = e.querySelector("p[class=message]");
      if (p) {
        p.innerHTML = message;
      }
    }
  },
  /**
  * Validate the table
  * @method validate
  * @memberof Augmented.Presentation.AutomaticTable
  * @returns {boolean} Returns true on success of validation
  */
  validate: function() {
    var messages = (this.collection) ? this.collection.validate() : null;
    if (!this.collection.isValid() && messages && messages.messages) {
      this.showMessage(formatValidationMessages(messages.messages));
    } else {
      this.showMessage("");
    }
    return messages;
  },
  /**
  * Is the table valid
  * @method isValid
  * @memberof Augmented.Presentation.AutomaticTable
  * @returns {boolean} Returns true if valid
  */
  isValid: function() {
    return (this.collection) ? this.collection.isValid() : true;
  },
  /**
  * Remove the table and all binds
  * @method remove
  * @memberof Augmented.Presentation.AutomaticTable
  */
  remove: function() {
    /* off to unbind the events */
    this.undelegateEvents();
    this.off();
    this.stopListening();

    Augmented.Presentation.Dom.empty(this.el);

    return this;
  },
  /**
  * Gets the selected models
  * @method getSelected
  * @memberof Augmented.Presentation.AutomaticTable
  * @returns {Array} Returns array of selected rows (models)
  */
  getSelected: function() {
    const keys = Object.keys(this.model.attributes), l = keys.length, selected = [];
    let i = 0;
    for (i = 0; i < l; i++) {
      if (keys[i].includes("row-") && this.model.attributes[keys[i]] === true) {
        const n = Number(keys[i].substring(4));
        selected.push(this.collection.at(n));
      }
    }
    return selected;
  },
  /**
  * Gets the selected row indexes
  * @method getSelectedIndex
  * @memberof Augmented.Presentation.AutomaticTable
  * @returns {Array} Returns array of selected rows (indexes)
  */
  getSelectedIndex: function() {
    const keys = Object.keys(this.model.attributes), l = keys.length, selected = [];
    let i = 0;
    for (i = 0; i < l; i++) {
      if (keys[i].includes("row-") && this.model.attributes[keys[i]] === true) {
        selected.push(Number(keys[i].substring(4)));
      }
    }
    return selected;
  },
  /**
  * Removes the models
  * @method removeRows
  * @param {Array} rows Models of the rows to remove
  * @memberof Augmented.Presentation.AutomaticTable
  */
  removeRows: function(rows) {
    const l = rows.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      const model = rows[i];
      if (!model.url) {
        model.url = this.uri + "/" + model.id;
      }
      model.destroy();
    }
  }
});
