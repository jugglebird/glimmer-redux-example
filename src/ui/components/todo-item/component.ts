import Component from '@glimmer/component';

export default class TodoItem extends Component {
  constructor(options: Options) {
    super(options);
    console.log(this.store);
  }
};
