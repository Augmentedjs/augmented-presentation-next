/**
* Augmented.Presentation.BigDataTable
* Instance class preconfigured for sorting and pagination
* @constructor Augmented.Presentation.BigDataTable
* @extends Augmented.Presentation.AutomaticTable
* @memberof Augmented.Presentation
*/
Augmented.Presentation.BigDataTable = Augmented.Presentation.DirectDOMAutomaticTable.extend({
  renderPaginationControl: true,
  lineNumbers: true,
  sortable: true
});
