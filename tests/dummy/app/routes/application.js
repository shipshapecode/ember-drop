import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var hoverContent = [
      {
        classes: 'hover-drop',
        text: 'You can specify openOn=\'hover\'',
        type: 'div'

      }
    ];
    controller.set('hoverContent', hoverContent);

    var clickContent = [
      {
        classes: 'click-drop',
        text: 'Or openOn=\'click\'',
        type: 'div'
      }
    ];
    controller.set('clickContent', clickContent);

    var testContent = [
      {
        classes: 'button-class',
        type: 'button',
        text: 'Change name',
        events: {
          click: function() {
            if (this.get('name') !== 'Thomas Jefferson') {
              this.set('name', 'Thomas Jefferson');
            }
            else {
              this.set('name', 'George Washington');
            }
          }.bind(controller)
        }
      },
      {
        classes: 'text-class',
        text: 'Click to change the name in the greeting',
        type: 'div'
      }
    ];

    controller.set('testContent', testContent);
  }
});
