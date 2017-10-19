import { connect } from 'glimmer-redux';

const stateToComputed = state => ({
  todos: state.todos.all
});

const dispatchToActions = dispatch => ({
  add: () => dispatch({type: 'ADD_TODO'})
});

export default connect(stateToComputed, dispatchToActions)();
