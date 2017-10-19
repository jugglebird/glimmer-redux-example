const initialState = {
  all: {
    1: {
      id: 1,
      text: 'Use Glimmer Redux'
    }
  }
};

export default (state, action) => {
  if(action.type === 'ADD_TODO') {
    let id = Object.values(state.all).reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
    let todo = {
      [id]: {
        id: id,
        text: 'another'
      }
    }
    return {
      ...state,
      all: {...state.all, ...todo}
    }
  }
  return state || initialState;
};
