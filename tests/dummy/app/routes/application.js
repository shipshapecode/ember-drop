import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var hoverContent = [
      {
        type: 'text',
        text: 'You can specify openOn=\'hover\''
      }
    ];
    controller.set('hoverContent', hoverContent);

    var clickContent = [
      {
        type: 'text',
        text: 'Or openOn=\'click\''
      }
    ];
    controller.set('clickContent', clickContent);

    var testContent = [
      {
        type: 'button',
        text: 'Change name',
        events: {
          click: function() {
            this.set('name', 'Thomas Jefferson');
          }.bind(controller)
        }
      },
      {
        type: 'text',
        text: 'Click to change the name in the greeting'
      }
    ];

    controller.set('testContent', testContent);
  }
});
