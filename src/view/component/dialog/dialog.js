/**
* A automatic dialog view - creates a dialog with simple configurations to customize
* @constructor Augmented.Presentation.DialogView
* @memberof Augmented.Presentation
* @extends Augmented.Presentation.DecoratorView
*/
Augmented.Presentation.DialogView = Augmented.Presentation.DecoratorView.extend({
  /**
  * name property - the name of the dialog (required)
  * @property name
  * @memberof Augmented.Presentation.DialogView
  */
  name: "dialog",
  /**
  * title property - the title of the dialog
  * @property title
  * @memberof Augmented.Presentation.DialogView
  */
  title: "",
  /**
  * body property - the body of the dialog, handled by setBody method
  * @property body
  * @memberof Augmented.Presentation.DialogView
  */
  body: "",
  /**
  * style property - the style (form, alert, bigForm, or whatever class you want)
  * @property style
  * @memberof Augmented.Presentation.DialogView
  */
  style: "form",
  /**
  * buttons object property - the buttons to match to functions
  * @property buttons
  * @memberof Augmented.Presentation.DialogView
  */
  buttons: {
    //name : callback
  },
  /**
  * template - sets content of the dialog, handled internally
  * @method template
  * @memberof Augmented.Presentation.DialogView
  */
  template: function() {
    return "<div class=\"blur\"><dialog class=\"" + this.style + "\"><h1>" + this.title + "</h1>" + this.body + this._getButtonGroup() + "</dialog></div>";
  },
  /**
  * setBody - sets the body content of the dialog
  * @method setBody
  * @param {String} body A string value of th body (supports HTML)
  * @memberof Augmented.Presentation.DialogView
  */
  setBody: function(body) {
    this.body = body;
  },
  _getButtonGroup: function() {
    var html = "<div class=\"buttonGroup\">", i = 0, keys = Object.keys(this.buttons), l = (keys) ? keys.length: 0;

    for (i = 0; i < l; i++) {
      html = html + "<button data-" + this.name + "=\"" + this.buttons[keys[i]] + "\"data-click=\"" + this.buttons[keys[i]] + "\">" + keys[i] + "</button>";
    }

    return html + "</div>";
  },
  /**
  * render - render the dialog
  * @method render
  * @memberof Augmented.Presentation.DialogView
  */
  render: function() {
    Augmented.Presentation.Dom.setValue(this.el, this.template());
    this.delegateEvents();
    this.trigger("open");
    return this;
  },
  // built-in callbacks

  /**
  * cancel - standard built-in cancel callback.  Calls close method by default
  * @method cancel
  * @param {Event} event Event passed in
  * @memberof Augmented.Presentation.DialogView
  */
  cancel: function(event) {
    this.close(event);
  },
  /**
  * open - standard built-in open callback.  Calls render method by default
  * @method open
  * @param {Event} event Event passed in
  * @memberof Augmented.Presentation.DialogView
  */
  open: function(event) {
    this.render();
  },
  /**
  * close - standard built-in close callback.  Closes the dialog, triggers the 'close' event
  * @method close
  * @param {Event} event Event passed in
  * @memberof Augmented.Presentation.DialogView
  */
  close: function(event) {
    this.trigger("close");
    Augmented.Presentation.Dom.empty(this.el, true);
  }
});

/**
* A automatic comfirmation dialog view - creates a dialog with yes no buttons
* @constructor Augmented.Presentation.ConfirmationDialogView
* @memberof Augmented.Presentation
* @extends Augmented.Presentation.DialogView
*/
Augmented.Presentation.ConfirmationDialogView = Augmented.Presentation.DialogView.extend({
  buttons: {
    //name : callback
    "yes": "yes",
    "no": "no"
  },
  style: "alert"
});

/**
* A automatic alert dialog view - creates a dialog with cancel button and a message
* @constructor Augmented.Presentation.AlertDialogView
* @memberof Augmented.Presentation
* @extends Augmented.Presentation.DialogView
*/
Augmented.Presentation.AlertDialogView = Augmented.Presentation.DialogView.extend({
  buttons: {
    //name : callback
    "cancel": "cancel"
  },
  style: "alert"
});
