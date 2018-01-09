import { click, find, triggerEvent } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-drop', 'Integration | Component | ember drop', {
  integration: true
});

test('open on click', async function(assert) {
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

  assert.notOk(find('.click-drop', document.body), 'drop not showing before click');
  await click('.click-element');
  assert.ok(find('.click-drop', document.body), 'drop showing after click');
});

test('open on hover', async function(assert) {
  let hoverContent = [
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

  assert.notOk(find('.hover-drop', document.body), 'drop not showing before hover');
  await triggerEvent(find('.hover-element', document.body), 'mouseover');
  assert.ok(find('.hover-drop', document.body), 'drop showing on hover');
});
