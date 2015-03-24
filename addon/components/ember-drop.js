/* globals Drop */
import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  initialize: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      var drop;
      var content = document.createElement('div');
      content = $(content);
      if (this.get('content') && Array.isArray(this.get('content'))) {
        this.get('content').forEach(function(element) {
          var elementType = null;
          if (element.type === 'button') {
            elementType = 'button';
          } else if (element.type === 'text') {
            elementType = 'span';
          }
          if (elementType) {
            var elementToAppend = document.createElement(elementType);
            elementToAppend = $(elementToAppend);
            if (element.text) {
              elementToAppend.text(element.text);
            }
            if (element.events) {
              if (element.events.click && typeof element.events.click === 'function') {
                elementToAppend.click(element.events.click);
              }
            }
            var containerDiv = document.createElement('div');
            containerDiv = $(containerDiv);
            containerDiv.append(elementToAppend);
            content.append(containerDiv);
          }
        });
      }
      content.addClass('content');
      content = content[0];
      drop = new Drop({
        classes: this.get('classes'),
        content: content,
        openOn: this.get('openOn'),
        position: this.get('position'),
        target: document.querySelector(this.get('targetSelector'))
      });
      this.set('drop', drop);
    });
  }.on('didInsertElement').observes('content'),
  willDestroyElement: function() {
    if (this.get('drop')) {
      this.get('drop').destroy();
    }
  }
});
