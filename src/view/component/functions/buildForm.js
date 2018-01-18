const formCompile = (name, description, fields, model, required, binding, display) => {
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
  return form;
  //e.appendChild(form);
};

export default formCompile;
