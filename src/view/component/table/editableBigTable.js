/**
* Instance class preconfigured for editing, sorting, and pagination
* @class EditableBigDataTable
* @extends Presentation.Component.AutomaticTable
* @memberof Presentation.Component
*/
Augmented.Presentation.EditableBigDataTable = Augmented.Presentation.DirectDOMAutomaticTable.extend({
  renderPaginationControl: true,
  lineNumbers: true,
  sortable: true,
  editable: true
});
