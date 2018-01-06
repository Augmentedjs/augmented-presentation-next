const formCompile = function(e, name, description, fields, model, required, binding, display) {
  const form = document.createElement("form"), fs = document.createElement("formset"), keys = Object.keys(fields), l = ((display) ? display.length: keys.length);
  let t, i, input, lb, req;

  form.appendChild(fs);

  if (name) {
    const lg = document.createElement("legend");
    t = document.createTextNode(name);
    if (description) {
      const att = document.createAttribute("title");
      att.value = description;
      lg.setAttributeNode(att);
    }
    lg.appendChild(t);
    fs.appendChild(lg);
  }
  if (!display) {
    display = keys;
  }

  for (i = 0; i < l; i++) {
    let displayCol = true;
    if (display !== null) {
        displayCol = (keys.indexOf(display[i]) !== -1);
    }

    if (displayCol) {
      req = (required.indexOf(display[i]) !== -1);
      lb = document.createElement("label");
      lb.setAttribute("for", display[i]);
      t = document.createTextNode(display[i]);
      lb.appendChild(t);
      fs.appendChild(lb);

      input = Augmented.Presentation.Widget.Input(fields[display[i]], display[i], model[display[i]], display[i], req, binding);
      if (input) {
        fs.appendChild(input);
      }
    }
  }
  e.appendChild(form);
};

/**
* A automatic form view created from a JSON Schema
* @constructor Augmented.Presentation.AutomaticForm
* @memberof Augmented.Presentation
* @extends Augmented.Presentation.DecoratorView
*/
Augmented.Presentation.AutomaticForm = Augmented.Presentation.DecoratorView.extend({
  // standard functionality

  /**
  * The crossOrigin property - enables cross origin fetch
  * @property {boolean} crossOrigin The crossOrigin property
  * @memberof Augmented.Presentation.AutomaticForm
  */
  crossOrigin: false,
  /**
  * The fields property
  * @property {object} fields The fields property
  * @private
  * @memberof Augmented.Presentation.AutomaticForm
  */
  _fields: {},
  /**
  * The URI property
  * @property {string} uri The URI property
  * @memberof Augmented.Presentation.AutomaticForm
  */
  uri: null,
  /**
  * The model property
  * @property {Augmented.Model} model The model property
  * @memberof Augmented.Presentation.AutomaticForm
  */
  model: null,
  /**
  * The initialized property
  * @property {boolean} isInitalized The initialized property
  * @memberof Augmented.Presentation.AutomaticForm
  */
  isInitalized : false,
  /**
  * The title property
  * @property {string} title The title of the form
  * @memberof Augmented.Presentation.AutomaticForm
  */
  title: null,
  /**
  * The name property
  * @property {string} name The name of the form
  * @memberof Augmented.Presentation.AutomaticForm
  */
  name: "",
  /**
  * The description property
  * @property {string} description The description of the form
  * @memberof Augmented.Presentation.AutomaticForm
  */
  description: "",
  /**
  * The required fields property
  * @property {Array} _required The required fields
  * @memberof Augmented.Presentation.AutomaticForm
  * @private
  */
  _required: [],

  /**
    * Fields to display - null will display all
    * @method display
    * @memberof Augmented.Presentation.AutomaticForm
    */
  display: null,

  /**
  * Initialize the form view<br/>
  * pass clearForm = true to start a fresh form
  * @method initialize
  * @memberof Augmented.Presentation.AutomaticForm
  * @param {object} options The view options
  * @returns {boolean} Returns true on success of initalization
  */
  initialize: function(options) {
    this.init(options);

    if (this.model && options && options.clearForm) {
      this.model.clear();
    } else if (!this.model) {
      this.model = new Augmented.Model();
    }
    if (options) {
      if (options.schema) {
        // check if this is a schema vs a URI to get a schema
        if (Augmented.isObject(options.schema)) {
          this.schema = options.schema;
        } else {
          // is a URI?
          const parsedSchema = null;
          try {
            parsedSchema = JSON.parse(options.schema);
            if (parsedSchema && Augmented.isObject(parsedSchema)) {
              this.schema = parsedSchema;
            }
          } catch(e) {
            _logger.warn("AUGMENTED: AutoForm parsing string schema failed.  URI perhaps?");
          }
          if (!this.schema) {
            this._retrieveSchema(options.schema);
            this.isInitalized = false;
          }
        }
      }

      if (options.el) {
        this.el = options.el;
      }

      if (options.uri) {
        this.uri = options.uri;
      }

      if (options.data && (Augmented.isObject(options.data))) {
        this.model.set(options.data);
      }
      if (options.title) {
        this.title = options.title;
      }
      if (options.description) {
        this.description = options.description;
      }
    }

    if (this.model && this.uri) {
      this.model.url = this.uri;
    }
    if (this.model) {
      this.model.crossOrigin = this.crossOrigin;
    }
    if (this.schema) {
      if ((!this.name || this.name === "") && this.schema.title) {
        this.name = this.schema.title;
      }
      if ((!this.description || this.description === "") && this.schema.description) {
        this.description = this.schema.description;
      }

      if (this.schema.required) {
        this._required = this.schema.required;
      } else {
        this._required = [];
      }

      if (!this.isInitalized) {
        this._fields = this.schema.properties;
        this.model.schema = this.schema;
        this.isInitalized = true;
      }
    } else {
      this.isInitalized = false;
      return false;
    }

    return this.isInitalized;
  },
  _retrieveSchema: function(uri){
    var that = this;
    var schema = null;
    Augmented.ajax({
      url: uri,
      contentType: "application/json",
      dataType: "json",
      success: function(data, status) {
        if (typeof data === "string") {
          schema = JSON.parse(data);
        } else {
          schema = data;
        }
        var options = { "schema": schema };
        that.initialize(options);
      },
      failure: function(data, status) {
        _logger.warn("AUGMENTED: AutoForm Failed to fetch schema!");
      }
    });
  },

  /**
  * Sets the URI
  * @method setURI
  * @memberof Augmented.Presentation.AutomaticForm
  * @param {string} uri The URI
  */
  setURI: function(uri) {
    this.uri = uri;
  },
  /**
  * Sets the schema
  * @method setSchema
  * @memberof Augmented.Presentation.AutomaticForm
  * @param {object} schema The JSON schema of the dataset
  */
  setSchema: function(schema) {
    this.schema = schema;
    this._fields = schema.properties;
    this.model.reset();
    this.model.schema = schema;

    if (this.uri) {
      model.url = this.uri;
    }
  },

  /**
  * Enable/Disable the progress bar
  * @method showProgressBar
  * @memberof Augmented.Presentation.AutomaticForm
  * @param {boolean} show Show or Hide the progress bar
  */
  showProgressBar: function(show) {
    if (this.el) {
      var e = Augmented.D.selector(this.el);
      var p = e.querySelector("progress");
      if (p) {
        p.style.display = (show) ? "block" : "none";
        p.style.visibility = (show) ? "visible" : "hidden";
      }
    }
  },
  /**
  * Show a message related to the form
  * @method showMessage
  * @memberof Augmented.Presentation.AutomaticForm
  * @param {string} message Some message to display
  */
  showMessage: function(message) {
    if (this.el) {
      var e = Augmented.D.selector(this.el);
      var p = e.querySelector("p[class=message]");
      if (p) {
        p.innerHTML = message;
      }
    }
  },
  /**
  * Validate the form
  * @method validate
  * @memberof Augmented.Presentation.AutomaticForm
  * @returns {boolean} Returns true on success of validation
  */
  validate: function() {
    var messages = (this.model) ? this.model.validate() : null;
    if (!this.model.isValid() && messages && messages.messages) {
      this.showMessage(formatValidationMessages(messages.messages));
    } else {
      this.showMessage("");
    }
    return messages;
  },
  /**
  * Is the form valid
  * @method isValid
  * @memberof Augmented.Presentation.AutomaticForm
  * @returns {boolean} Returns true if valid
  */
  isValid: function() {
    return (this.model) ? this.model.isValid() : true;
  },
  /**
  * Render the form
  * @method render Renders the form
  * @memberof Augmented.Presentation.AutomaticForm
  * @returns {object} Returns the view context ('this')
  */
  render: function() {
    if (!this.isInitalized) {
      _logger.warn("AUGMENTED: AutomaticForm Can't render yet, not initialized!");
      return this;
    }

    this.template = null;//"notused";
    this.showProgressBar(true);

    if (this.el) {
      const e = Augmented.Presentation.Dom.selector(this.el);
      if (e) {
        if (this.theme) {
          Augmented.Presentation.Dom.addClass(e, this.theme);
        }
        // progress bar
        let n = document.createElement("progress"), t = document.createTextNode("Please wait.");
        n.appendChild(t);
        e.appendChild(n);

        // the form
        formCompile(e,
          ((this.title) ? this.title : this.name),
          this.description,
          this._fields,
          this.model.toJSON(),
          this._required,
          this.name,
          this.display);

        this._formEl = Augmented.Presentation.Dom.query("form", this.el);

        // message
        n = document.createElement("p");
        n.classList.add("message");
        e.appendChild(n);
      }
    } else if (this.$el) {
      _logger.warn("AUGMENTED: AutomaticForm doesn't support jquery, sorry, not rendering.");
      this.showProgressBar(false);
      return;
    } else {
      _logger.warn("AUGMENTED: AutomaticForm no element anchor, not rendering.");
      this.showProgressBar(false);
      return;
    }

    this.delegateEvents();

    this.syncAllBoundElements();

    this.showProgressBar(false);
    return this;
  },
  /**
  * Reset the form
  * @method reset
  * @memberof Augmented.Presentation.AutomaticForm
  * @returns {object} Returns the view context ('this')
  */
  reset: function() {
    if (this._formEl) {
      this._formEl.reset();
      this.model.reset();
    }
  },
  /**
  * Populate the form
  * @method populate
  * @param {object} data Data to fill in
  * @memberof Augmented.Presentation.AutomaticForm
  * @returns {object} Returns the view context ('this')
  */
  populate: function(data) {
    this.model.set(data);
  },
  /**
  * Remove the form and all binds
  * @method remove
  * @memberof Augmented.Presentation.AutomaticForm
  */
  remove: function() {
    /* off to unbind the events */
    this.undelegateEvents();
    this.off();
    this.stopListening();

    Augmented.Presentation.Dom.empty(this.el);

    return this;
  }
});
