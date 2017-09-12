'use strict';

define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = _ember.default.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = _ember.default.RSVP.resolve;
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = _ember.default.merge,
      run = _ember.default.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/integration/components/ember-drop-test', ['jquery', 'ember-qunit', 'ember'], function (_jquery, _emberQunit, _ember) {
  'use strict';

  var run = _ember.default.run;


  (0, _emberQunit.moduleForComponent)('ember-drop', 'Integration | Component | ember drop', {
    integration: true
  });

  (0, _emberQunit.test)('open on click', function (assert) {
    var clickContent = [{
      classes: 'click-drop',
      text: 'Or openOn=\'click\'',
      type: 'div'
    }];

    this.set('clickContent', clickContent);

    this.render(_ember.default.HTMLBars.template({
      "id": "oousHdNp",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"ember-drop\"],null,[[\"classes\",\"constrainToScrollParent\",\"constrainToWindow\",\"content\",\"openOn\",\"position\",\"targetSelector\"],[\"drop-theme-arrows-bounce-dark\",true,true,[28,[\"clickContent\"]],\"click\",\"top center\",\".click-element\"]],{\"statements\":[[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"panel click-element text-center\"],[13],[0,\"\\n          Click\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal((0, _jquery.default)('.click-drop').length, 0, 'drop not showing before click');
    this.$('.click-element').first().click();
    assert.equal((0, _jquery.default)('.click-drop').length, 1, 'drop showing after click');
  });

  (0, _emberQunit.test)('open on hover', function (assert) {
    var hoverContent = [{
      classes: 'hover-drop',
      text: 'You can specify openOn=\'hover\'',
      type: 'div'

    }];

    this.set('hoverContent', hoverContent);

    this.render(_ember.default.HTMLBars.template({
      "id": "deATLqXy",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"ember-drop\"],null,[[\"classes\",\"constrainToScrollParent\",\"constrainToWindow\",\"content\",\"openOn\",\"position\",\"targetSelector\"],[\"drop-theme-arrows-bounce-dark\",true,true,[28,[\"hoverContent\"]],\"hover\",\"top center\",\".hover-element\"]],{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"panel hover-element text-center\"],[13],[0,\"\\n        Hover\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal((0, _jquery.default)('.hover-drop').length, 0, 'drop not showing before hover');
    this.$('.hover-element').first().mouseover();
    run.later(this, function () {
      assert.equal((0, _jquery.default)('.hover-drop').length, 1, 'drop showing on hover');
    }, 200);
  });
});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ember-drop-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ember-drop-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
