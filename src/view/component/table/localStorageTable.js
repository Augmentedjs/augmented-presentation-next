/**
* Augmented.Presentation.LocalStorageTable
* Instance class preconfigured for local storage-based table
* @constructor Augmented.Presentation.LocalStorageTable
* @extends Augmented.Presentation.AutomaticTable
* @memberof Augmented.Presentation
*/
Augmented.Presentation.LocalStorageTable = Augmented.Presentation.DirectDOMAutomaticTable.extend({
  renderPaginationControl: false,
  lineNumbers: true,
  sortable: true,
  editable: false,
  localStorage: true
});
