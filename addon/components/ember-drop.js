/* globals Drop */
import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  didInsertElement(){
    this.initialize();
  },
  contentChanged: Ember.observer('content', function() {
    this.initialize();
  }),
  initialize() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      let drop;
      let content = document.createElement('div');
      content = $(content);
      if (this.get('content') && Array.isArray(this.get('content'))) {
        this.get('content').forEach(function(element) {
          if (element.type) {
            let elementToAppend = document.createElement(element.type);
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
            let containerDiv = document.createElement('div');
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
  },

  willDestroyElement: function() {
    if (this.get('drop')) {
      this.get('drop').destroy();
    }
  }
});
