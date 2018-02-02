/**
* Instance class preconfigured for sorting and pagination
* @class BigDataTable
* @extends Presentation.Component.AutomaticTable
* @memberof Presentation.Component
*/
Augmented.Presentation.BigDataTable = Augmented.Presentation.DirectDOMAutomaticTable.extend({
  renderPaginationControl: true,
  lineNumbers: true,
  sortable: true
});
