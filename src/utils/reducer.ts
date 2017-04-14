interface Action {
  type: string;
  payload?: any;
}

export interface State {
  items: Array<any>;
  newItemText?: string;
}

interface Reducer {
  state: any;
  action: Action;
}


export default function reducer<Reducer>(
  state: State,
  {type, payload}: Action
) {
  switch (type) {
    case 'UPDATE_NEW_ITEM_TEXT':
      return {
        ...state,
        newItemText: payload
      };
    case 'ADD_ITEM':
      return {
        ...state,
        items: [
          ...state.items,
          payload
        ],
        newItemText: ''
      };
    case 'TOGGLE_ITEM':
      let items = [...state.items];
      items = items.map(item => {
        if (item.text === payload.text) {
          return Object.assign(item, {
            isDone: !item.isDone,
          });
        } else {
          return item;
        }
      });
      return {
        ...state,
        items: [
          ...items
        ]
      }
    default:
      return state;
  }
}
