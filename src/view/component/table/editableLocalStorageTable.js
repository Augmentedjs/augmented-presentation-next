/**
* Augmented.Presentation.EditableLocalStorageTable
* Instance class preconfigured for editing, sorting, from local storage
* @constructor Augmented.Presentation.EditableLocalStorageTable
* @extends Augmented.Presentation.AutomaticTable
* @memberof Augmented.Presentation
*/
Augmented.Presentation.EditableLocalStorageTable = Augmented.Presentation.DirectDOMAutomaticTable.extend({
  renderPaginationControl: false,
  lineNumbers: true,
  sortable: true,
  editable: true,
  localStorage: true
});
