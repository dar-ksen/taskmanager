import MenuComponent from './components/menu';
import FilterComponent from './components/filter';

import BoardComponent from './components/board';
import BoardController from './controllers/board';

import { tasks } from './mock/task.js';
import { generateFilters } from './mock/filter';
import { renderComponent } from './utils/render';

const siteMainElement = document.querySelector(`.js-main`);
const siteMainControlElement = siteMainElement.querySelector(`.js-main__control`);

renderComponent(siteMainControlElement, new MenuComponent());

const filters = generateFilters(tasks);
renderComponent(siteMainElement, new FilterComponent(filters));

const boardComponent = new BoardComponent();
renderComponent(siteMainElement, boardComponent);

const boardController = new BoardController(boardComponent);

boardController.render(tasks);

