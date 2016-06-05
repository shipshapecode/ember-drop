import {test} from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

moduleForAcceptance('ember-drop');

test('click to show drop', function (assert) {
  assert.expect(2);
  visit('/');
  assert.equal(find('.click-drop', 'html').length, 0, "click-drop initially hidden");
  click('.click-element');
  andThen(function () {
    assert.equal(find('.click-drop', 'html').length, 1, "click-drop is showing");
  });
});
