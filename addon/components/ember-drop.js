/* globals Drop */
import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      var drop;

      drop = new Drop({
        classes: this.get('classes'),
        content: this.get('content'),
        openOn: this.get('openOn'),
        position: this.get('position'),
        target: document.querySelector(this.get('targetSelector'))
      });
    });
  }
});
