/**
* Instance class preconfigured for editing, sorting, from local storage
* @class EditableLocalStorageTable
* @extends Presentation.Component.AutomaticTable
* @memberof Presentation.Component
*/
Augmented.Presentation.EditableLocalStorageTable = Augmented.Presentation.DirectDOMAutomaticTable.extend({
  renderPaginationControl: false,
  lineNumbers: true,
  sortable: true,
  editable: true,
  localStorage: true
});
