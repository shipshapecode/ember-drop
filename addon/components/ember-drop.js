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
          if (element.type) {
            var elementToAppend = document.createElement(element.type);
            elementToAppend = $(elementToAppend);
            if (element.classes) {
              elementToAppend.addClass(element.classes);
            }
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
        classes: this.get('classes') || '',
        constrainToScrollParent: this.get('constrainToScrollParent') === false ? false : true,
        constrainToWindow: this.get('constrainToWindow') === false ? false : true,
        content: content,
        openOn: this.get('openOn') || 'click',
        position: this.get('position') || 'bottom left',
        remove: this.get('remove'),
        target: document.querySelector(this.get('targetSelector')),
        tetherOptions: this.get('tetherOptions') || {}
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
