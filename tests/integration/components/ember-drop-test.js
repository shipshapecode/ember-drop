import $ from 'jquery';
import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
const { run } = Ember;

moduleForComponent('ember-drop', 'Integration | Component | ember drop', {
  integration: true
});

test('open on click', function (assert) {
  const clickContent = [
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

test('open on hover', function (assert) {
  const hoverContent = [
    {
      classes: 'hover-drop',
      text: 'You can specify openOn=\'hover\'',
      type: 'div'

    }
  ];

  this.set('hoverContent', hoverContent);

  this.render(
    hbs`
    {{#ember-drop
    classes='drop-theme-arrows-bounce-dark'
    constrainToScrollParent=true
    constrainToWindow=true
    content=hoverContent
    openOn='hover'
    position='top center'
    targetSelector='.hover-element'}}
      <div class="panel hover-element text-center">
        Hover
      </div>
    {{/ember-drop}}`
  );

  assert.equal($('.hover-drop').length, 0, 'drop not showing before hover');
  this.$('.hover-element').first().mouseover();
  run.later(this, function(){
    assert.equal($('.hover-drop').length, 1, 'drop showing on hover');
  }, 200);
});
