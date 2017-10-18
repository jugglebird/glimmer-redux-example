import { connect } from 'glimmer-redux';

const stateToComputed = state => ({
  up: state.number.up
});

const dispatchToActions = dispatch => ({
  update: () => dispatch({type: 'ADD'})
});

export default connect(stateToComputed, dispatchToActions)();
