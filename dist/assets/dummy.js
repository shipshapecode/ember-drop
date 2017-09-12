"use strict";



define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = _ember.default.Application;


  var App = void 0;

  _ember.default.MODEL_FACTORY_INJECTIONS = true;

  App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/components/ember-drop', ['exports', 'ember-drop/components/ember-drop'], function (exports, _emberDrop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberDrop.default;
});
define('dummy/components/ember-tether', ['exports', 'ember-tether/components/ember-tether'], function (exports, _emberTether) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberTether.default;
    }
  });
});
define('dummy/components/flexi-container', ['exports', 'flexi-layouts/components/flexi-container'], function (exports, _flexiContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexiContainer.default;
    }
  });
});
define('dummy/components/flexi-grid', ['exports', 'flexi-layouts/components/flexi-grid'], function (exports, _flexiGrid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexiGrid.default;
    }
  });
});
define('dummy/components/flexi-layout', ['exports', 'flexi-layouts/components/flexi-layout'], function (exports, _flexiLayout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexiLayout.default;
    }
  });
});
define('dummy/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = _ember.default.Controller;
  exports.default = Controller.extend({
    name: 'George Washington'
  });
});
define('dummy/ember-drop/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('ember-drop/components/ember-drop.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-drop/components/ember-drop.js should pass ESLint\n\n');
  });
});
define('dummy/helpers/-inject-layout', ['exports', 'flexi-layouts/helpers/-inject-layout'], function (exports, _injectLayout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _injectLayout.default;
    }
  });
  Object.defineProperty(exports, 'injectLayout', {
    enumerable: true,
    get: function () {
      return _injectLayout.injectLayout;
    }
  });
});
define('dummy/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_and.andHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_and.andHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_equal.equalHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_equal.equalHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_gt.gtHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_gt.gtHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_gte.gteHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_gte.gteHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_isArray.isArrayHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_isArray.isArrayHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('dummy/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_lt.ltHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_lt.ltHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_lte.lteHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_lte.lteHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_notEqual.notEqualHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_notEqual.notEqualHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_not.notHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_not.notHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_or.orHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_or.orHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_xor.xorHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_xor.xorHelper);
  }

  exports.default = forExport;
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _registerHelper, _and, _or, _equal, _not, _isArray, _notEqual, _gt, _gte, _lt, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember.default.Helper) {
      return;
    }

    (0, _registerHelper.registerHelper)('and', _and.andHelper);
    (0, _registerHelper.registerHelper)('or', _or.orHelper);
    (0, _registerHelper.registerHelper)('eq', _equal.equalHelper);
    (0, _registerHelper.registerHelper)('not', _not.notHelper);
    (0, _registerHelper.registerHelper)('is-array', _isArray.isArrayHelper);
    (0, _registerHelper.registerHelper)('not-eq', _notEqual.notEqualHelper);
    (0, _registerHelper.registerHelper)('gt', _gt.gtHelper);
    (0, _registerHelper.registerHelper)('gte', _gte.gteHelper);
    (0, _registerHelper.registerHelper)('lt', _lt.ltHelper);
    (0, _registerHelper.registerHelper)('lte', _lte.lteHelper);
  }

  exports.default = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = _ember.default.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('dummy/routes/application', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = _ember.default.Route;
  exports.default = Route.extend({
    setupController: function setupController(controller) {
      var hoverContent = [{
        classes: 'hover-drop',
        text: 'You can specify openOn=\'hover\'',
        type: 'div'

      }];
      controller.set('hoverContent', hoverContent);

      var clickContent = [{
        classes: 'click-drop',
        text: 'Or openOn=\'click\'',
        type: 'div'
      }];
      controller.set('clickContent', clickContent);

      var testContent = [{
        classes: 'button-class',
        type: 'button',
        text: 'Change name',
        events: {
          click: function () {
            if (this.get('name') !== 'Thomas Jefferson') {
              this.set('name', 'Thomas Jefferson');
            } else {
              this.set('name', 'George Washington');
            }
          }.bind(controller)
        }
      }, {
        classes: 'text-drop',
        text: 'Click to change the name in the greeting',
        type: 'div'
      }];

      controller.set('testContent', testContent);

      controller.set('usage', '{{ember-drop\n   classes=\'drop-theme-arrows-bounce-dark\'\n   constrainToScrollParent=true\n   constrainToWindow=true\n   content=hoverContent\n   openOn=\'hover\'\n   position=\'top center\'\n   targetSelector=\'.hover-element\'}}');
    }
  });
});
define('dummy/services/device/layout', ['exports', 'dummy/config/environment', 'flexi-layouts/services/device/layout'], function (exports, _environment, _layout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _layout.default.extend({
    breakpoints: _environment.default.flexi.breakpoints
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rw2eZmh7", "block": "{\"statements\":[[11,\"hbox\",[]],[15,\"class\",\"justify-center\"],[13],[0,\"\\n  \"],[11,\"box\",[]],[15,\"class\",\"col-lg-5 col-md-7 col-sm-9 col-xs-11 flexi-fill\"],[13],[0,\"\\n    \"],[11,\"centered\",[]],[13],[0,\"\\n      \"],[11,\"h1\",[]],[13],[11,\"span\",[]],[15,\"class\",\"pacifico\"],[13],[0,\"ember\"],[14],[0,\" drop\"],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"centered\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n      \"],[11,\"h5\",[]],[13],[0,\"Ember Drop is an Ember addon that wraps the\\n        \"],[11,\"a\",[]],[15,\"href\",\"http://github.hubspot.com/drop/docs/welcome/\"],[13],[0,\"Drop.js\"],[14],[0,\" library.\"],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"centered\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n      \"],[11,\"h4\",[]],[13],[0,\"Installation\"],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"centered\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n      \"],[11,\"pre\",[]],[13],[11,\"code\",[]],[15,\"class\",\"language-bash\"],[13],[0,\"ember install ember-drop\"],[14],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"centered\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n      \"],[11,\"h4\",[]],[13],[0,\"Usage\"],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"centered\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n      \"],[11,\"pre\",[]],[13],[11,\"code\",[]],[15,\"class\",\"language-handlebars\"],[13],[1,[26,[\"usage\"]],false],[14],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"centered\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n      \"],[11,\"h4\",[]],[13],[0,\"Demo\"],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"hbox\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n      \"],[11,\"centered\",[]],[15,\"class\",\"panel col-sm-6 col-xs-12\"],[13],[0,\"\\n\"],[6,[\"ember-drop\"],null,[[\"classes\",\"constrainToScrollParent\",\"constrainToWindow\",\"content\",\"openOn\",\"position\",\"targetSelector\"],[\"drop-theme-arrows-bounce-dark\",true,true,[28,[\"hoverContent\"]],\"hover\",\"top center\",\".hover-element\"]],{\"statements\":[[0,\"          \"],[11,\"div\",[]],[15,\"class\",\"hover-element text-center\"],[13],[0,\"\\n            Hover\\n          \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"      \"],[14],[0,\"\\n      \"],[11,\"centered\",[]],[15,\"class\",\"panel col-sm-6 col-xs-12\"],[13],[0,\"\\n\"],[6,[\"ember-drop\"],null,[[\"classes\",\"constrainToScrollParent\",\"constrainToWindow\",\"content\",\"openOn\",\"position\",\"targetSelector\"],[\"drop-theme-arrows-bounce-dark\",true,true,[28,[\"clickContent\"]],\"click\",\"top center\",\".click-element\"]],{\"statements\":[[0,\"          \"],[11,\"div\",[]],[15,\"class\",\"click-element text-center\"],[13],[0,\"\\n            Click\\n          \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"hbox\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n      \"],[11,\"centered\",[]],[15,\"class\",\"panel col-sm-6 col-xs-12\"],[13],[0,\"\\n\"],[6,[\"ember-drop\"],null,[[\"classes\",\"constrainToScrollParent\",\"constrainToWindow\",\"content\",\"openOn\",\"position\",\"targetSelector\"],[\"drop-theme-arrows-bounce-dark\",true,true,[28,[\"testContent\"]],\"hover\",\"top center\",\".action-element\"]],{\"statements\":[[0,\"          \"],[11,\"div\",[]],[15,\"class\",\"action-element text-center\"],[13],[0,\"\\n            Events\\n          \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"      \"],[14],[0,\"\\n      \"],[11,\"centered\",[]],[15,\"class\",\"panel col-sm-6 col-xs-12\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"action-element text-center\"],[13],[0,\"\\n          Hello \"],[1,[26,[\"name\"]],false],[0,\"!\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"hbox\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n      \"],[11,\"centered\",[]],[15,\"class\",\"col-sm-6 col-xs-12\"],[13],[0,\"\\n        \"],[11,\"a\",[]],[15,\"href\",\"https://github.com/rwwagner90/ember-drop/blob/master/README.md\"],[15,\"class\",\"button\"],[13],[0,\"Docs\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"centered\",[]],[15,\"class\",\"col-sm-6 col-xs-12\"],[13],[0,\"\\n        \"],[11,\"a\",[]],[15,\"href\",\"https://github.com/rwwagner90/ember-drop\"],[15,\"class\",\"button\"],[13],[0,\"Github\"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define("dummy/templates/components/ember-drop", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "N+SiQYNf", "block": "{\"statements\":[[18,\"default\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ember-drop.hbs" } });
});


define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map
