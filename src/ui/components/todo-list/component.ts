import Component, { tracked } from "@glimmer/component";
// import reduxStore from '../../../utils/store';
// import { State } from '../../../utils/reducer';

export default class TodoList extends Component {
  store: any;

  @tracked state = {
    items: [],
    newItemText: ''
  };

  constructor(options: Object) {
    super(options);
    this.state = this.store.getState();
  }

  // State Selectors
  @tracked items = this.state.items;
  @tracked('state.newItemText')
  get newItemText() {
    return this.state.newItemText;
  }

  // Action Creators
  dispatchUpdateNewItemText(text) {
    this.store.dispatch({
      type: 'UPDATE_NEW_ITEM_TEXT',
      payload: text
    });
    this.state = this.store.getState();
  }

  dispatchAddItem(item) {
    this.store.dispatch({
      type: 'ADD_ITEM',
      payload: item
    });
  }

  dispatchToggleItem(item) {
    this.store.dispatch({
      type: 'TOGGLE_ITEM',
      payload: item
    })
  }


  // Component Functions
  updateNewItemText(e) {
    this.dispatchUpdateNewItemText(e.target.value)
  }

  addItem() {
    debugger
    if (!this.newItemText) {return false}
    this.dispatchAddItem({
      text: this.newItemText,
      isDone: false
    })
  }

  toggleItem(toggledItem) {

    let items = this.items.map(item => {
      if (item.text === toggledItem.text) {
        return Object.assign(item, {
          isDone: !item.isDone,
        });
      } else {
        return item;
      }
    });

    this.items = items;
  }

  deleteItem(removedItem) {
    let items = this.items.filter(item => {
      return item.text !== removedItem.text;
    });

    this.items = items;
  }

}
