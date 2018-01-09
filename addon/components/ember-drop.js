/* globals Drop */
import Component from '@ember/component';
import { observer } from '@ember/object';
import { run } from '@ember/runloop';

export default Component.extend({
  tagName: '',

  contentChanged: observer('content', function() {
    this.initialize();
  }),

  didInsertElement() {
    this.initialize();
  },

  willDestroyElement() {
    if (this.get('drop')) {
      this.get('drop').destroy();
    }
  },

  initialize() {
    run.scheduleOnce('afterRender', this, function() {
      let content = document.createElement('div');
      if (this.get('content') && Array.isArray(this.get('content'))) {
        this.get('content').forEach((element) => {
          if (element.type) {
            let elementToAppend = document.createElement(element.type);
            if (element.classes) {
              elementToAppend.classList.add(element.classes);
            }
            if (element.text) {
              elementToAppend.textContent = element.text;
            }
            if (element.events) {
              if (element.events.click && typeof element.events.click === 'function') {
                elementToAppend.onclick = element.events.click;
              }
            }
            let containerDiv = document.createElement('div');
            containerDiv.appendChild(elementToAppend);
            content.appendChild(containerDiv);
          }
        });
      }
      content.classList.add('content');
      let drop = new Drop({
        classes: this.get('classes') || '',
        constrainToScrollParent: this.get('constrainToScrollParent') !== false,
        constrainToWindow: this.get('constrainToWindow') !== false,
        content,
        openOn: this.get('openOn') || 'click',
        position: this.get('position') || 'bottom left',
        remove: this.get('remove'),
        target: document.querySelector(this.get('targetSelector')),
        tetherOptions: this.get('tetherOptions') || {}
      });
      this.set('drop', drop);
    });
  }
});
