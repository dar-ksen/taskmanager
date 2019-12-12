import AbstractComponent from './abstract-component';

const SortType = {
  DATE_DOWN: `date-down`,
  DATE_UP: `date-up`,
  DEFAULT: `default`,
};

const getSortedTemplate = () => {
  return (`
    <div class="board__filter-list">
      <a href="#" data-sort-type="${SortType.DEFAULT}" class="board__filter">SORT BY DEFAULT</a>
      <a href="#" data-sort-type="${SortType.DATE_UP}" class="board__filter">SORT BY DATE up</a>
      <a href="#" data-sort-type="${SortType.DATE_UP}" class="board__filter">SORT BY DATE down</a>
    </div>
  `);
};

export default class Sort extends AbstractComponent {
  constructor() {
    super();

    this._currentSortType = SortType.DEFAULT;
  }

  getTemplate() {
    return getSortedTemplate();
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target.tagName !== `A`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;

      if (this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;

      handler(this._currentSortType);
    });
  }

}

export { SortType };
