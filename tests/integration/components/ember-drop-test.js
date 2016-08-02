import $ from 'jquery';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-drop', 'Integration | Component | ember drop', {
  integration: true
});

test('open on click', function(assert) {
  let clickContent = [
    {
      classes: 'click-drop',
      text: 'Or openOn=\'click\'',
      type: 'div'
    }
  ];

  this.set('clickContent', clickContent);

  this.render(
    hbs`
    {{#ember-drop
      classes='drop-theme-arrows-bounce-dark'
      constrainToScrollParent=true
      constrainToWindow=true
      content=clickContent
      openOn='click'
      position='top center'
      targetSelector='.click-element'}}
        <div class="panel click-element text-center">
          Click
        </div>
      {{/ember-drop}}`
  );

  assert.equal($('.click-drop').length, 0, 'drop not showing before click');
  this.$('.click-element').first().click();
  assert.equal($('.click-drop').length, 1, 'drop showing after click');
});
