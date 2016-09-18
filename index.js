/* eslint-disable */
'use strict';

module.exports = {
  name: 'ember-drop',
  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/tether/dist/js/tether.js');
    this.app.import(app.bowerDirectory + '/tether-drop/dist/css/drop-theme-arrows-bounce-dark.css');
    this.app.import(app.bowerDirectory + '/tether-drop/dist/js/drop.min.js');
  }
};
