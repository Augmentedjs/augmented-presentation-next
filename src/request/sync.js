import Augmented from "augmentedjs-next";
import METHOD_MAP from "./methodMap.js";
import request from "./request.js";
import DATA_TYPE from "./dataType.js";

/**
 * Base sync method that can pass special augmented features
 */
const sync = (method, model, options) => {
  let data = null;
  if (!options) {
    options = {};
  }
  const type = (method) ? METHOD_MAP[method] : METHOD_MAP.READ;
  // Default JSON-request options.
  const params = {
    type: type,
    dataType: DATA_TYPE.JSON
  };

  // Ensure that we have a URL.
  if (!options.url) {
    if (model && model.url) {
      if (Augmented.isFunction(model.url)) {
        options.url = model.url();
      } else {
        options.url = model.url;
      }
    } else {
      throw new Error(`A "url" property or model with "url" must be specified in the collection or model class!`);
    }
  }

  // Ensure that we have the appropriate request data.
  if (options.data == null && model && (method === METHOD_MAP.CREATE || method === METHOD_MAP.UPDATE || method === METHOD_MAP.PATCH)) {
    params.contentType = "application/json";
    params.data = JSON.stringify(options.attrs || model.toJSON(options));
  }

  // Don't process data on a non-GET request.
  if (params.type !== METHOD_MAP.READ) {
    //params.processData = false;
    params.data = null;
  }

  // Make the request, allowing the user to override any fetch options.
  //const xhr = options.xhr = request(Augmented.Utility.extend(params, options));
  if (model) {
    const myData = (params.data) ? JSON.stringify(data) : null;
    const p = fetch(options.url, {
      "method": params.type,
      "headers": {"Content-Type": params.contentType},
      "body": myData
    }).then((res) => {
      //console.debug(`Status: ${res.status}`);
      if(res.ok) {
        return res.json();
      }
      throw new Error(`${res.status}: ${params.url} ${res.statusText} `);
    }).then((response) => {
      //console.debug(`Response: ${JSON.stringify(response)}`);
      model.set(response);
      data = response;
      return response;
    })
    .then((response) => {
      if (params.success) {
        return params.success(response);
      }
      return response;
    }).catch((error) => {
      if (params.error) {
        return params.error(error);
      }
      console.error(error);
      return null;
    });
    model.trigger("request", model, p, options);
  } else {
    console.error("no model to sync!");
  }
  return data;
};

export default sync;
