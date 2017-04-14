import App from './main';
import { ComponentManager, setPropertyDidChange } from '@glimmer/component';

const app = new App();
const containerElement = document.getElementById('app');
const store = {
  worked: 'yes'
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
      'store:main',
      store
    )
    registry.registerInjection('component', 'store', 'store:main')
  }
});

app.renderComponent('todo-list', containerElement, null);

app.boot();
