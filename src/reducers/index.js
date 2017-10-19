import { combineReducers } from 'redux';
import todos from './todos';

const number = (state, action) => {
  if(action.type === 'ADD') {
    let added = state.up + 3;
    return Object.assign({}, state, {up: added});
  }
  return state || {up: 2, down: 9};
};

export default combineReducers({
  number,
  todos
});
