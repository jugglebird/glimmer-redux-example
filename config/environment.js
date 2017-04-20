'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'todo-list',
    environment: environment,
    moduleConfiguration: {
      types: {
        application: { definitiveCollection: 'main' },
        component: { definitiveCollection: 'components' },
        helper: { definitiveCollection: 'components' },
        renderer: { definitiveCollection: 'main' },
        reducer: { definitiveCollection: 'data' },
        store: { definitiveCollection: 'data' },
        template: { definitiveCollection: 'components' }
      },
      collections: {
        main: {
          types: ['application', 'renderer']
        },
        components: {
          group: 'ui',
          types: ['component', 'template', 'helper'],
          defaultType: 'component',
          privateCollections: ['utils']
        },
        data: {
          types: [],
          defaultType: 'store',
          privateCollections: ['utils']
        },
        styles: {
          group: 'ui',
          unresolvable: true
        },
        utils: {
          unresolvable: true
        }
      }
    }
  };

  return ENV;
};
