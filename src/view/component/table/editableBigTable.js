/**
* Augmented.Presentation.EditableBigDataTable
* Instance class preconfigured for editing, sorting, and pagination
* @constructor Augmented.Presentation.EditableBigDataTable
* @extends Augmented.Presentation.AutomaticTable
* @memberof Augmented.Presentation
*/
Augmented.Presentation.EditableBigDataTable = Augmented.Presentation.DirectDOMAutomaticTable.extend({
  renderPaginationControl: true,
  lineNumbers: true,
  sortable: true,
  editable: true
});
