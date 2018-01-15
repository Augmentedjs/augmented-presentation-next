// Tables and Grids

const tableDataAttributes = {
  name:           "data-name",
  type:           "data-type",
  description:    "data-description",
  index:          "data-index",
  label:          "data-label",
  sortClass:      "sorted"
};

const csvTableCompile = function(name, desc, columns, data, del) {
  var csv = "";
  if (!del) {
    del = ",";
  }
  if (columns) {
    var key, obj;
    for (key in columns) {
      if (columns.hasOwnProperty(key)) {
        obj = columns[key];
        csv = csv + key + del;
      }
    }
    csv = csv.slice(0, -1);
    csv = csv + "\n";
  }

  var i, d, dkey, dobj, html = "", l = data.length, t;
  for (i = 0; i < l; i++) {
    d = data[i];
    for (dkey in d) {
      if (d.hasOwnProperty(dkey)) {
        dobj = d[dkey];
        t = (typeof dobj);
        csv = csv + dobj + del;
      }
    }
    csv = csv.slice(0, -1);
    csv = csv + "\n";
  }
  return csv;
};

const tsvTableCompile = function(name, desc, columns, data) {
  return csvTableCompile(name, desc, columns, data, "\t");
};

const defaultTableCompile = function(name, desc, columns, data, lineNumbers, sortKey, editable, display) {
  var html = "<table " + tableDataAttributes.name + "=\"" + name + "\" " + tableDataAttributes.description + "=\"" + desc + "\">";
  if (name) {
    html = html + "<caption";
    if (desc) {
      html = html + " title=\"" + desc + "\"";
    }
    html = html + ">" + name + "</caption>";
  }
  html = html + "<thead>";
  html = html + defaultTableHeader(columns, lineNumbers, sortKey, display);
  html = html + "</thead><tbody>";
  if (data) {
    if (editable) {
      html = html + editableTableBody(data, columns, lineNumbers, sortKey, display);
    } else {
      html = html + defaultTableBody(data, columns, lineNumbers, sortKey, display);
    }
  }
  html = html + "</tbody></table>";
  return html;
};

const defaultTableHeader = function(columns, lineNumbers, sortKey, display) {
  var html = "";
  if (columns) {
    html = html + "<tr>";
    if (lineNumbers) {
      html = html + "<th " + tableDataAttributes.name + "=\"lineNumber\">#</th>";
    }
    var key, obj;
    for (key in columns) {
      if (columns.hasOwnProperty(key)) {
        obj = columns[key];
        html = html + "<th " + tableDataAttributes.name + "=\"" + key + "\" " + tableDataAttributes.description + "=\"" + obj.description + "\" " + tableDataAttributes.type + "=\"" + obj.type + "\"";
        if (sortKey === key) {
          html = html + " class=\"" + tableDataAttributes.sortClass + "\"";
        }
        html = html + ">" + key + "</th>";
      }
    }
    html = html + "</tr>";
  }
  return html;
};

const defaultTableBody = function(data, columns, lineNumbers, sortKey, display) {
  var i, d, dkey, dobj, html = "", l = data.length, t;
  for (i = 0; i < l; i++) {
    d = data[i];
    html = html + "<tr>";
    if (lineNumbers) {
      html = html + "<td class=\"label number\">" + (i+1) + "</td>";
    }
    for (dkey in d) {
      if (d.hasOwnProperty(dkey)) {
        dobj = d[dkey];
        t = (typeof dobj);
        html = html + "<td " + tableDataAttributes.type + "=\"" + t + "\" class=\"" + t;
        if (sortKey === dkey) {
          html = html + " " + tableDataAttributes.sortClass;
        }
        html = html + "\">" + dobj + "</td>";
      }
    }
    html = html + "</tr>";
  }
  return html;
};

const formatValidationMessages = function(messages) {
  let html = "";
  if (messages && messages.length > 0) {
    html = html + "<ul class=\"errors\">";
    const l = messages.length;
    let i = 0, ii = 0;
    for (i = 0; i < l; i++) {
      const ll = messages[i].errors.length;
      for (ii = 0; ii < ll; ii++) {
        html = html + "<li>" + messages[i].errors[ii] + "</li>";
      }
    }
    html = html + "</ul>";
  }
  return html;
};



const directDOMTableCompile = function(el, name, desc, columns, data, lineNumbers, sortKey, editable, display, selectable, linkable, linksConfig, linkCallback) {
  const table = document.createElement("table"), thead = document.createElement("thead"), tbody = document.createElement("tbody");
  let n, t;

  // Binding
  table.setAttribute("data-" + name, name);

  table.setAttribute(tableDataAttributes.name, name);
  table.setAttribute(tableDataAttributes.description, desc);
  if (desc) {
    n = document.createElement("caption");
    if (name) {
      n.setAttribute("title", name);
    }
    t = document.createTextNode(desc);
    n.appendChild(t);
    table.appendChild(n);
  }
  directDOMTableHeader(thead, columns, lineNumbers, sortKey, display, selectable);
  table.appendChild(thead);
  table.appendChild(tbody);
  if (data) {
    if (editable) {
      directDOMEditableTableBody(tbody, data, columns, lineNumbers, sortKey, display, selectable, name, linkable, linksConfig, linkCallback);
    } else {
      directDOMTableBody(tbody, data, columns, lineNumbers, sortKey, display, selectable, name, linkable, linksConfig, linkCallback);
    }
  }
  el.appendChild(table);
};

const directDOMTableHeader = function(el, columns, lineNumbers, sortKey, display, selectable) {
  if (columns && el) {
    const tr = document.createElement("tr");
    let n, t, key, obj;
    if (selectable) {
      n = document.createElement("th");
      n.setAttribute(tableDataAttributes.name, "select");
      t = document.createTextNode("\u274f");
      n.appendChild(t);
      tr.appendChild(n);
    }

    if (lineNumbers) {
      n = document.createElement("th");
      n.setAttribute(tableDataAttributes.name, "lineNumber");
      t = document.createTextNode("#");
      n.appendChild(t);
      tr.appendChild(n);
    }

    for (key in columns) {
      let displayCol = true;
      if (display !== null) {
          displayCol = (display.indexOf(key) !== -1);
      }

      if (displayCol && columns.hasOwnProperty(key)) {
        obj = columns[key];

        n = document.createElement("th");
        n.setAttribute(tableDataAttributes.name, key);
        n.setAttribute(tableDataAttributes.description, obj.description);
        n.setAttribute(tableDataAttributes.type, obj.type);
        if (sortKey === key) {
          n.classList.add(tableDataAttributes.sortClass);
        }

        t = document.createTextNode(key);
        n.appendChild(t);
        tr.appendChild(n);
      }
    }
    el.appendChild(tr);
  }
};

const directDOMTableBody = function(el, data, columns, lineNumbers, sortKey, display, selectable, name, linkable, linksConfig, linkCallback) {
  const l = data.length;
  let i, d, dkey, dobj, t, td, tn, tr, cobj;

  for (i = 0; i < l; i++) {
    d = data[i];
    tr = document.createElement("tr");

    if (selectable) {
      td = document.createElement("td");
      td.setAttribute(tableDataAttributes.name, "select");
      tn = document.createElement("input");
      tn.type = "checkbox";
      tn.name = String(i);
      tn.value = String(i);
      // Binding
      tn.setAttribute("data-" + name, "row-" + i);

      td.appendChild(tn);
      td.classList.add("label", "select");
      tr.appendChild(td);
    }

    if (lineNumbers) {
      td = document.createElement("td");
      tn = document.createTextNode(String(i + 1));
      td.appendChild(tn);
      td.classList.add("label", "number");
      tr.appendChild(td);
    }
    for (dkey in columns) {
      let displayCol = true;
      if (display !== null) {
          displayCol = (display.indexOf(dkey) !== -1);
      }
      if (displayCol && d.hasOwnProperty(dkey)) {
        dobj = d[dkey];
        t = (typeof dobj);
        td = document.createElement("td");
        tn = document.createTextNode(dobj);

        if (linkable && linksConfig && linkCallback &&
            ((linksConfig.column === dkey) || (linksConfig.wholeRow)) ) {
          const a = document.createElement("a");
          //a.title = "my title text";
          a.href = linkCallback(d);
          a.appendChild(tn);
          td.appendChild(a);
        } else {
          td.appendChild(tn);
        }

        td.classList.add(t);
        if (sortKey === dkey) {
          td.classList.add(tableDataAttributes.sortClass);
        }
        td.setAttribute(tableDataAttributes.type, t);
        td.setAttribute(tableDataAttributes.label, dkey);
        tr.appendChild(td);
      }
    }
    el.appendChild(tr);
  }
};

const directDOMEditableTableBody = function(el, data, columns, lineNumbers, sortKey, display, selectable, name) {
  const l = data.length, ln = lineNumbers;
  let i, d, dkey, dobj, t, td, tn, tr, input, cobj;
  for (i = 0; i < l; i++) {
    d = data[i];
    tr = document.createElement("tr");

    if (selectable) {
      td = document.createElement("td");
      td.setAttribute(tableDataAttributes.name, "select");
      tn = document.createElement("input");
      tn.type = "checkbox";
      tn.name = String(i);
      tn.value = String(i);
      td.appendChild(tn);
      td.classList.add("label", "select");
      tr.appendChild(td);
    }

    if (ln) {
      td = document.createElement("td");
      tn = document.createTextNode(String(i + 1));
      td.appendChild(tn);
      td.classList.add("label", "number");
      tr.appendChild(td);
    }

    for (dkey in d) {
      let displayCol = true;
      if (display !== null) {
          displayCol = (display.indexOf(dkey) !== -1);
      }

      if (displayCol && d.hasOwnProperty(dkey)) {
        cobj = (columns[dkey]) ? columns[dkey] : {};
        dobj = d[dkey];

        t = (typeof dobj);

        td = document.createElement("td");
        td.classList.add(t);
        if (sortKey === dkey) {
          td.classList.add(tableDataAttributes.sortClass);
        }
        td.setAttribute(tableDataAttributes.type, t);
        td.setAttribute(tableDataAttributes.label, dkey);
        // input field

        if (t === "object") {
          if (Array.isArray(dobj)) {
            let iii = 0, lll = dobj.length, option, tOption;
            input = document.createElement("select");
            for (iii = 0; iii < lll; iii++) {
              option = document.createElement("option");
              option.setAttribute("value", dobj[iii]);
              tOption = document.createTextNode(dobj[iii]);
              option.appendChild(tOption);
              input.appendChild(option);
            }
          } else {
            input = document.createElement("textarea");
            input.value = JSON.stringify(dobj);
          }
        } else if (t === "boolean") {
          input = document.createElement("input");
          input.setAttribute("type", "checkbox");
          if (dobj === true) {
            input.setAttribute("checked", "checked");
          }
          input.value = dobj;
        } else if (t === "number") {
          input = document.createElement("input");
          input.setAttribute("type", "number");
          input.value = dobj;
        } else if (t === "string" && cobj.enum) {
          input = document.createElement("select");
          var iiii = 0, llll = cobj.enum.length, option2, tOption2;
          for (iiii = 0; iiii < llll; iiii++) {
            option2 = document.createElement("option");
            option2.setAttribute("value", cobj.enum[iiii]);
            tOption2 = document.createTextNode(cobj.enum[iiii]);
            if (dobj === cobj.enum[iiii]) {
              option2.setAttribute("selected", "selected");
            }
            option2.appendChild(tOption2);
            input.appendChild(option2);
          }
        } else if (t === "string" && (cobj.format === "email")) {
          input = document.createElement("input");
          input.setAttribute("type", "email");
          input.value = dobj;
        } else if (t === "string" && (cobj.format === "uri")) {
          input = document.createElement("input");
          input.setAttribute("type", "url");
          input.value = dobj;
        } else if (t === "string" && (cobj.format === "date-time")) {
          input = document.createElement("input");
          input.setAttribute("type", "datetime");
          input.value = dobj;
        } else {
          input = document.createElement("input");
          input.setAttribute("type", "text");
          input.value = dobj;
        }

        if (t === "string" && cobj.pattern) {
          input.setAttribute("pattern", cobj.pattern);
        }

        if (cobj.minimum) {
          input.setAttribute("min", cobj.minimum);
        }

        if (cobj.maximum) {
          input.setAttribute("max", cobj.maximum);
        }

        if (t === "string" && cobj.minlength) {
          input.setAttribute("minlength", cobj.minlength);
        }

        if (t === "string" && cobj.maxlength) {
          input.setAttribute("maxlength", cobj.maxlength);
        }

        input.setAttribute(tableDataAttributes.name, dkey);
        input.setAttribute(tableDataAttributes.index, i);

        // Binding
        input.setAttribute("data-" + name, name);

        td.appendChild(input);

        tr.appendChild(td);
      }
    }
    el.appendChild(tr);
  }
};

/*
* << First | < Previous | # | Next > | Last >>
*/
const directDOMPaginationControl = function(el, currentPage, totalPages) {
  let d, n, t;
  d = document.createElement("div");
  d.classList.add("paginationControl");

  n = document.createElement("span");
  n.classList.add("first");
  t = document.createTextNode("<< First");
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("previous");
  t = document.createTextNode("< Previous");
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("current");
  t = document.createTextNode(currentPage + " of " + totalPages);
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("next");
  t = document.createTextNode("Next >");
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("last");
  t = document.createTextNode("Last >>");
  n.appendChild(t);
  d.appendChild(n);

  el.appendChild(d);
};
