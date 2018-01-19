import Collection from "./collection.js";

/**
 * Paginated Collection Class - A Collection that handles pagination from client or server-side
 * @constructor PaginatedCollection
 * @memberof Presentation
 * @extends Presentation.Collection
 */
class PaginatedCollection extends Collection {
  constructor(models, options) {
    super(models, options);
    if (options && options.paginationConfiguration) {
      this.paginationConfiguration = options.paginationConfiguration;
    } else {
      this.paginationConfiguration = {
        currentPageParam: "page",
        pageSizeParam: "per_page"
      };
    }
    if (options && options.pageSize) {
      this.pageSize = options.pageSize;
    } else {
      this.pageSize = 20;
    }

    if (options && options.currentPage) {
      this.currentPage = options.currentPage;
    } else {
      this.currentPage = 1;
    }

    this.totalPages = 1;
  };

  /**
  * Configuration for the pagination
  * @property paginationConfiguration
  * @memberof PaginatedCollection
  * @private
  */

  /**
  * Page Size for the collection
  * @property pageSize
  * @memberof PaginatedCollection
  * @private
  */

  /**
  * Current page for the collection
  * @property currentPage
  * @memberof PaginatedCollection
  */

  /**
  * Total pages for the collection
  * @property totalPages
  * @memberof PaginatedCollection
  */

  /**
  * Sets the number of items in a page
  * @method setPageSize
  * @memberof PaginatedCollection
  * @param {number} size Number of items in each page
  */
  setPageSize(size) {
    if (size) {
      this.pageSize = size;
    }
    this.refresh();
  };
  /**
  * Sets the current page
  * @method setCurrentPage
  * @memberof PaginatedCollection
  * @param {number} page Current page in collection
  */
  setCurrentPage(page) {
    if (!page) {
      page = 1;
    }
    this.currentPage = page;
    this.refresh();
  };
  /**
  * Sets pagination configuration
  * @method setPaginationConfiguration
  * @memberof PaginatedCollection
  * @param {object} config pagination configuration
  * @private
  */
  setPaginationConfiguration(config) {
    this.paginationConfiguration = config;
  };
  /**
  * Collection.fetch - rewritten fetch method from Backbone.Collection.fetch
  * @method fetch
  * @memberof PaginatedCollection
  * @borrows Collection.fetch
  */
  fetch(options) {
    options = (options) ? options : {};
    //var data = (options.data || {});
    const p = this.paginationConfiguration;
    const d = {};
    d[p.currentPageParam] = this.currentPage;
    d[p.pageSizeParam] = this.pageSize;

    options.data = d;

    return super.fetch(options);
  };
  /**
  * Moves to the next page
  * @method nextPage
  * @memberof PaginatedCollection
  */
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.refresh();
    }
  };
  /**
  * Moves to the previous page
  * @method previousPage
  * @memberof PaginatedCollection
  */
  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage = this.currentPage - 1;
      this.refresh();
    }
  };
  /**
  * Goes to page
  * @method goToPage
  * @memberof PaginatedCollection
  * @param {number} page Page to go to
  */
  goToPage(page) {
    if ((page) && (page < this.totalPages) && (page > 0)) {
      this.currentPage = page;
      this.refresh();
    }
  };
  /**
  * Moves to the first page
  * @method firstPage
  * @memberof PaginatedCollection
  */
  firstPage() {
    this.currentPage = 1;
    this.refresh();
  };
  /**
  * Moves to the last page
  * @method lastPage
  * @memberof PaginatedCollection
  */
  lastPage() {
    this.currentPage = this.totalPages;
    this.refresh();
  };
  /**
  * Refreshes the collection
  * @method refresh
  * @memberof PaginatedCollection
  */
  refresh() {
    this.fetch();
  };
};

export default PaginatedCollection;
