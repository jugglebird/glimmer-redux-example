import { createStore } from 'redux';
import reducer from './reducer'

const initialState = {
  items: [
    {
      text: "Install Glimmer",
      isDone: false,
    },
    {
      text: "Build app",
      isDone: false,
    },
    {
      text: "Bro down",
      isDone: false,
    }
  ],
  newItemText: ''
}

export default {
  create() {
    return createStore(
      reducer,
      initialState
    );
  }
}
