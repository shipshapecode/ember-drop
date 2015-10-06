/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-drop',
  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/drop/dist/css/drop-theme-arrows-bounce-dark.css');
    this.app.import(app.bowerDirectory + '/drop/dist/js/drop.min.js');
  }
};
