/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-drop',

  options: {
    nodeAssets: {
      'tether-drop': function() {
        return {
          enabled: !process.env.EMBER_CLI_FASTBOOT,
          srcDir: 'dist',
          import: [
            'css/drop-theme-arrows-bounce-dark.css',
            'js/drop.min.js',
          ],
        };
      }
    }
  }
};
