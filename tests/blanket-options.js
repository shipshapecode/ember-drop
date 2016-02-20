/* globals blanket, module */

var options = {
  modulePrefix: 'ember-drop',
  filter: '//.*ember-drop/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['lcov'],
    autostart: true,
    lcovOptions: {
      outputFile: 'lcov.dat',
      renamer: function (moduleName) {
        var expression = /^ember-drop/;
        return moduleName.replace(expression, 'addon') + '.js';
      }
    }
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
