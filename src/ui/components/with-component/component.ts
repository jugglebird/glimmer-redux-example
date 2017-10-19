import { connect } from 'glimmer-redux';
import Component, { tracked } from '@glimmer/component';

class MyComponent extends Component {
  @tracked('up')
  get text() {
    let up = this.up;
    let text = 'Glimmer Redux';
    return `${text} ${up}`;
  }
}

const stateToComputed = state => ({
  up: state.number.up
});

const dispatchToActions = dispatch => ({
  update: () => dispatch({type: 'ADD'})
});

export default connect(stateToComputed, dispatchToActions)(MyComponent);
