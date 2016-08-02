import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  setupController(controller) {
    let hoverContent = [
      {
        classes: 'hover-drop',
        text: 'You can specify openOn=\'hover\'',
        type: 'div'

      }
    ];
    controller.set('hoverContent', hoverContent);

    let clickContent = [
      {
        classes: 'click-drop',
        text: 'Or openOn=\'click\'',
        type: 'div'
      }
    ];
    controller.set('clickContent', clickContent);

    let testContent = [
      {
        classes: 'button-class',
        type: 'button',
        text: 'Change name',
        events: {
          click: function() {
            if (this.get('name') !== 'Thomas Jefferson') {
              this.set('name', 'Thomas Jefferson');
            } else {
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

    controller.set('usage',
    `{{ember-drop
    classes='drop-theme-arrows-bounce-dark'
    constrainToScrollParent=true
    constrainToWindow=true
    content=hoverContent
    openOn='hover'
    position='top center'
    targetSelector='.hover-element'}}`
  );
  }
});
