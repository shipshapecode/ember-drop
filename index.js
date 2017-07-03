/* eslint-env node */
'use strict';

const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-drop',

  options: {
    nodeAssets: {
      'tether-drop'() {
        return {
          srcDir: 'dist',
          import: [
            'css/drop-theme-arrows-bounce-dark.css',
            'js/drop.min.js'
          ],
          processTree(input) {
            return fastbootTransform(input);
          }
        };
      }
    }
  }
};
