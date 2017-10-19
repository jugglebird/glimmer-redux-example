'use strict';

const glimmerRedux = require('rollup-plugin-glimmer-redux');
const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    babel: {
      plugins: [
        'transform-object-rest-spread',
      ]
    },
    rollup: {
      plugins: [
        glimmerRedux()
      ]
    }
  });

  return app.toTree();
};
