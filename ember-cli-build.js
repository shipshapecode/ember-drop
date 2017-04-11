/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  const app = new EmberAddon(defaults, {
    nodeAssets: {
      prismjs() {
        return {
          import: [
            'prism.js',
            'components/prism-bash.js',
            'components/prism-handlebars.js'
          ],
        };
      }
    }
  });

  return app.toTree();
};
