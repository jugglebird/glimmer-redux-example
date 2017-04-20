import App from './main';
import { ComponentManager, setPropertyDidChange } from '@glimmer/component';

const app = new App();
const containerElement = document.getElementById('app');
const store = {
  worked: 'yes',
  create() {
    console.log('test')
  }
}

setPropertyDidChange(() => {
  app.scheduleRerender();
});


app.registerInitializer({
  initialize(registry) {
    registry.register(
      `component-manager:/${app.rootName}/component-managers/main`,
      ComponentManager,
    )
    registry.register(
      'store:/todo-list/data/store',
      store,
      { singleton: true }
    )
    registry.registerInjection('component', 'store', 'store:/todo-list/data/store')
  }
});

app.renderComponent('todo-list', containerElement, null);

app.boot();
