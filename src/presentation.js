import AbstractView from "./view/abstractView.js";
import View from "./view/view.js";

/**
 * Augmented.js Next Presentation - The Presentation Component
 *
 * @author Bob Warren
 *
 * @module Presentation
 * @version 2.0.0-alpha.0
 * @license Apache-2.0
 */
const Presentation = {};

/**
 * The standard version property
 * @constant VERSION
 */
Presentation.VERSION = "2.0.0-alpha.0";

Presentation.AbstractView = AbstractView;
Presentation.View = View;

export default Presentation;
