/**
* Instance class preconfigured for local storage-based table
* @class Augmented.Presentation.LocalStorageTable
* @extends Presentation.Component.AutomaticTable
* @memberof Presentation.Component
*/
Augmented.Presentation.LocalStorageTable = Augmented.Presentation.DirectDOMAutomaticTable.extend({
  renderPaginationControl: false,
  lineNumbers: true,
  sortable: true,
  editable: false,
  localStorage: true
});
