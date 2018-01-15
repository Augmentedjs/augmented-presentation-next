/**
* Augmented.Presentation.Spreadsheet
* Instance class preconfigured for editing for use as a Spreadsheet.<br/>
* If a propery for length is not specified, it will buffer 10 lines for editing.
* @constructor Augmented.Presentation.Spreadsheet
* @extends Augmented.Presentation.AutomaticTable
* @memberof Augmented.Presentation
*/
Augmented.Presentation.Spreadsheet = Augmented.Presentation.AutomaticTable.extend({
  renderPaginationControl: false,
  lineNumbers: true,
  sortable: true,
  editable: true,
  /**
  * @propery {number} columns Defines a set of columns in the spreadsheet
  * @memberof Augmented.Presentation.AutomaticTable
  */
  columns: 5,
  /**
  * @propery {number} rows Defines a set of rows in the spreadsheet
  * @memberof Augmented.Presentation.AutomaticTable
  */
  rows: 10,
  /**
  * Initialize the table view
  * @method initialize
  * @memberof Augmented.Presentation.Spreadsheet
  * @param {object} options The view options
  * @returns {boolean} Returns true on success of initalization
  */
  initialize: function(options) {
    this.init();

    if (this.collection) {
      this.collection.reset();
    } else if (!this.collection && this.localStorage) {
      this.collection = new Augmented.LocalStorageCollection();
    } else if (!this.collection) {
      this.collection = new Augmented.Collection();
    }
    if (options) {

      if (options.schema) {
        // check if this is a schema vs a URI to get a schema
        if (Augmented.isObject(options.schema)) {
          this.schema = options.schema;
        } else {
          // is a URI?
          var parsedSchema = null;
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
            //return false;
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

      if (options.sortable) {
        this.sortable = options.sortable;
      }

      if (options.lineNumbers) {
        this.lineNumbers = options.lineNumbers;
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
      }
    } else {
      //very basic schema
      this.schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "untitled",
        "type": "object",
        "description": "",
        "properties": {
        }
      };

      var i = 0;

      for (i = 0; i < this.columns; i++) {
        this.schema.properties[String.fromCharCode(65 + i)] = {
          "description": "",
          "type": "string"
        };
      }

      this._columns = this.schema.properties;
      this.collection.schema = this.schema;
    }

    //buffer
    this._generate();
    this.collection.set(this.data);

    this.isInitalized = true;

    return this.isInitalized;
  },
  _generate: function() {
    if (this.schema && this.schema.properties) {
      var i = 0, ii = 0, keys = Object.keys(this.schema.properties), l = keys.length, obj = {};
      this.data = [];
      for (ii = 0; ii < this.rows; ii++) {
        obj = {};
        for (i = 0; i < l; i++) {
          obj[keys[i]] = "";
        }
        this.data.push(obj);
      }
    }
  }
});
