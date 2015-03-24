import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var testHtml = '<button onclick="alert(\'hi\')">Test</button>';
    controller.set('testHtml', testHtml);
  }
});
