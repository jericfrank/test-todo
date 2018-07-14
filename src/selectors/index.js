import _ from 'lodash';
import { createSelector } from 'reselect';

const selectTodosDomain = state => state.todos;

const selectTodosIncomplete = createSelector(
  selectTodosDomain,
  items => {
    return _.filter(items, { completed: false });
  },
);

const selectTodosCount = createSelector(
  selectTodosDomain,
  items => {
    return _.filter(items, { completed: false }).length;
  },
);

export {
  selectTodosIncomplete,
  selectTodosCount,
};
