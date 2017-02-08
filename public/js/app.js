/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 176);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * vuex v2.1.2
 * (c) 2017 Evan You
 * @license MIT
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vuex = factory());
}(this, (function () { 'use strict';

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapMutations', namespace)) {
        return
      }
      return this.$store.commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (!(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapActions', namespace)) {
        return
      }
      return this.$store.dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (!module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
};

var prototypeAccessors$1 = { state: {},namespaced: {} };

prototypeAccessors$1.state.get = function () {
  return this._rawModule.state || {}
};

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  var this$1 = this;

  // register root module (Vuex.Store options)
  this.root = new Module(rawRootModule, false);

  // register all nested modules
  if (rawRootModule.modules) {
    forEachValue(rawRootModule.modules, function (rawModule, key) {
      this$1.register([key], rawModule, false);
    });
  }
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update(this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  var parent = this.get(path.slice(0, -1));
  var newModule = new Module(rawModule, runtime);
  parent.addChild(path[path.length - 1], newModule);

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (targetModule, newModule) {
  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed'
        );
        return
      }
      update(targetModule.getChild(key), newModule.modules[key]);
    }
  }
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");

  var state = options.state; if ( state === void 0 ) state = {};
  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); });
};

var prototypeAccessors = { state: {} };

prototypeAccessors.state.get = function () {
  return this._vm.$data.state
};

prototypeAccessors.state.set = function (v) {
  assert(false, "Use store.replaceState() to explicit replace store state.");
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    console.error(("[vuex] unknown mutation type: " + type));
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (options && options.silent) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var entry = this._actions[type];
  if (!entry) {
    console.error(("[vuex] unknown action type: " + type));
    return
  }
  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  var subs = this._subscribers;
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  assert(typeof getter === 'function', "store.watch only accepts a function.");
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm.state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule) {
  if (typeof path === 'string') { path = [path]; }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path));
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: { state: state },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm.state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (namespace) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var namespacedType = namespace + key;
    registerAction(store, namespacedType, action, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler(local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler({
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    console.error(("[vuex] duplicate getter key: " + type));
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch('state', function () {
    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue) {
    console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
    );
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var index = {
  Store: Store,
  install: install,
  version: '2.1.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions
};

return index;

})));


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_SideNav__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_SideNav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_SideNav__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_TopNav__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_TopNav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_TopNav__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_display_Notification__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_display_Notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_display_Notification__);






window.eventBus = new Vue();


var NotificationComponent = window.Vue.extend(__WEBPACK_IMPORTED_MODULE_4__components_display_Notification___default.a);
window.openNotification = function () {
    var propsData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        title: '',
        message: '',
        type: '',
        direction: '',
        duration: 3000,
        container: '.notifications'
    };

    return new NotificationComponent({
        el: document.createElement('div'),
        propsData: propsData
    });
};

var app = new Vue({
    el: '#app',
    components: { sidenav: __WEBPACK_IMPORTED_MODULE_1__components_SideNav___default.a, topnav: __WEBPACK_IMPORTED_MODULE_2__components_TopNav___default.a },
    router: __WEBPACK_IMPORTED_MODULE_0__routes__["a" /* default */],
    store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* store */],
    mounted: function mounted() {
        var _this = this;

        axios.get('api/user').then(function (response) {
            return _this.$store.state.user = response.data;
        }).catch(function (error) {
            return console.error('User is not logged in', error);
        });
    }
});

document.getElementById("nav-toggle").addEventListener("click", toggleNav);
function toggleNav() {
    var nav = document.getElementById("nav-menu");
    var className = nav.getAttribute("class");
    if (className == "nav-right nav-menu") {
        nav.className = "nav-right nav-menu is-active";
    } else {
        nav.className = "nav-right nav-menu";
    }
}

/***/ }),
/* 122 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            now: this.getNow(),
            user: {}
        };
    },

    methods: {
        getUser: function getUser() {
            var _this = this;

            axios.get('api/user').then(function (response) {
                return _this.user = response.data;
            });
        },
        getNow: function getNow() {
            return moment().format('MMMM Do YYYY, h:mm a');
        }
    },
    mounted: function mounted() {
        this.getUser();
        var that = this;
        setInterval(function () {
            that.now = that.getNow();
        }, 30000);
    }
};

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_display_Modal__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_display_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_display_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_quote_NewQuote__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_quote_NewQuote___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_quote_NewQuote__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
    props: ['resource', 'columns', 'friendlytimecolumns'],
    components: { Modal: __WEBPACK_IMPORTED_MODULE_0__components_display_Modal___default.a, NewQuote: __WEBPACK_IMPORTED_MODULE_1__components_quote_NewQuote___default.a },
    data: function data() {
        return {
            resources: [],
            showModal: false,
            query: '',
            limit: 10,
            sortBy: 'updated_at',
            sortDirection: 'desc',
            limits: [10, 50, 100]
        };
    },
    mounted: function mounted() {
        var that = this;
        that.getResources();
        eventBus.$on('refreshQuotes', function () {
            that.getResources();
        });
    },

    methods: {
        getResources: function getResources() {
            var _this = this;

            axios.get('api/' + this.resource, {
                params: {
                    query: this.query,
                    limit: this.limit,
                    sortBy: this.sortBy,
                    sortDirection: this.sortDirection
                }
            }).then(function (response) {
                return _this.resources = response.data;
            });
        },
        deleteResource: function deleteResource(res) {
            var that = this;
            axios.delete('api/' + this.resource + '/' + res.id).then(function () {
                that.getResources();
            });
        },
        format: function format(res, column) {
            if (this.friendlytimecolumns.indexOf(column) >= 0) {
                return moment.utc(res[column]).fromNow();
            }
            return res[column];
        },
        toggleSort: function toggleSort(heading) {
            if (this.sortBy == heading) {
                this.sortDirection = this.sortDirection == 'desc' ? 'asc' : 'desc';
            } else {
                this.sortBy = heading;
                this.sortDirection = "desc";
            }
            this.getResources();
        },
        showAddModal: function showAddModal() {
            this.showModal = true;
        },
        closeAddModal: function closeAddModal() {
            this.showModal = false;
        }
    }
};

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    mounted: function mounted() {
        console.log('Component SideNav mounted.');
    }
};

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    props: ['custom']
};

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            newQuote: {},
            errors: {}
        };
    },

    computed: {
        user: function user() {
            return this.$store.state.user;
        }
    },

    methods: {
        addQuote: function addQuote() {
            var that = this;
            that.errors = {};
            axios.post('api/quotes', {
                content: this.newQuote.content,
                author: this.newQuote.author,
                user_id: this.user.id
            }).then(function (response) {
                that.newQuote = {};
                eventBus.$emit('refreshQuotes');
                openNotification({
                    message: 'The quote is successfully created',
                    type: 'success'
                });
            }).catch(function (error) {
                that.errors = error.response.data;
            });
        },
        hasErrorClass: function hasErrorClass(field) {
            if (this.hasError(field)) {
                return 'is-danger';
            }
            return '';
        },
        hasError: function hasError(field) {
            return field in this.errors;
        }
    }
};

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            quote: {},
            duration: 5000,
            timer: null
        };
    },

    methods: {
        getQuote: function getQuote(id) {
            var _this = this;

            axios.get('api/quotes/random' + "?butnot=" + id).then(function (response) {
                if (response.data.length > 0) {
                    _this.quote = response.data[0];
                }
            });
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.getQuote('');
        this.timer = setInterval(function () {
            return _this2.getQuote(_this2.quote.id);
        }, this.duration);
    },
    destroyed: function destroyed() {
        clearInterval(this.timer);
    }
};

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_quote_RandomQuote__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_quote_RandomQuote___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_quote_RandomQuote__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Greeting__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Greeting___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Greeting__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            showModal: false
        };
    },

    components: { randomquote: __WEBPACK_IMPORTED_MODULE_0__components_quote_RandomQuote___default.a, greeting: __WEBPACK_IMPORTED_MODULE_1__components_Greeting___default.a },
    mounted: function mounted() {
        openNotification({
            message: 'Welcome',
            type: 'success',
            direction: 'Down'
        });
    },

    methods: {
        openModal: function openModal() {
            this.showModal = true;
        },
        closeModal: function closeModal() {
            this.showModal = false;
        }
    }
};

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ManageResource__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ManageResource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ManageResource__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_quote_NewQuote__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_quote_NewQuote___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_quote_NewQuote__);
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    components: { ManageResource: __WEBPACK_IMPORTED_MODULE_0__components_ManageResource___default.a, NewQuote: __WEBPACK_IMPORTED_MODULE_1__components_quote_NewQuote___default.a }
};

/***/ }),
/* 148 */,
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var routes = [{ path: '/', component: __webpack_require__(162) }, { path: '/about', component: __webpack_require__(161) }, { path: '/quotes', component: __webpack_require__(163) }];

/* harmony default export */ __webpack_exports__["a"] = new VueRouter({
    routes: routes,
    // mode: "history",
    linkActiveClass: "is-active"
});

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });


var store = new __WEBPACK_IMPORTED_MODULE_0_vuex___default.a.Store({
    state: {
        user: {}
    }
});

/***/ }),
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(140),
  /* template */
  __webpack_require__(165),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/mnguyen/dev/aio/resources/assets/js/components/Greeting.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Greeting.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25734328", Component.options)
  } else {
    hotAPI.reload("data-v-25734328", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(141),
  /* template */
  __webpack_require__(167),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/mnguyen/dev/aio/resources/assets/js/components/ManageResource.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ManageResource.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44315942", Component.options)
  } else {
    hotAPI.reload("data-v-44315942", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(142),
  /* template */
  __webpack_require__(166),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/mnguyen/dev/aio/resources/assets/js/components/SideNav.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SideNav.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33eb212d", Component.options)
  } else {
    hotAPI.reload("data-v-33eb212d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(143),
  /* template */
  __webpack_require__(164),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/mnguyen/dev/aio/resources/assets/js/components/TopNav.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TopNav.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2280cdbd", Component.options)
  } else {
    hotAPI.reload("data-v-2280cdbd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(144),
  /* template */
  __webpack_require__(172),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/mnguyen/dev/aio/resources/assets/js/components/quote/NewQuote.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NewQuote.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ffbfacc4", Component.options)
  } else {
    hotAPI.reload("data-v-ffbfacc4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(145),
  /* template */
  __webpack_require__(170),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/mnguyen/dev/aio/resources/assets/js/components/quote/RandomQuote.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RandomQuote.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b30d107", Component.options)
  } else {
    hotAPI.reload("data-v-6b30d107", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  null,
  /* template */
  __webpack_require__(169),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/mnguyen/dev/aio/resources/assets/js/views/About.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] About.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e947182", Component.options)
  } else {
    hotAPI.reload("data-v-4e947182", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(146),
  /* template */
  __webpack_require__(168),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/mnguyen/dev/aio/resources/assets/js/views/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b29c67a", Component.options)
  } else {
    hotAPI.reload("data-v-4b29c67a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(147),
  /* template */
  __webpack_require__(171),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/mnguyen/dev/aio/resources/assets/js/views/Quotes.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Quotes.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ed1c252", Component.options)
  } else {
    hotAPI.reload("data-v-7ed1c252", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "nav-left"
  }, [_c('router-link', {
    staticClass: "nav-item is-tab",
    class: _vm.custom,
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_vm._v("Home")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    class: _vm.custom,
    attrs: {
      "to": "/quotes",
      "exact": ""
    }
  }, [_vm._v("Quotes")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    class: _vm.custom,
    attrs: {
      "to": "/about",
      "exact": ""
    }
  }, [_vm._v("About")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2280cdbd", module.exports)
  }
}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("Hello " + _vm._s(_vm.user.name) + ", it's " + _vm._s(_vm.now))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-25734328", module.exports)
  }
}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('aside', {
    staticClass: "menu"
  }, [_c('p', {
    staticClass: "menu-label"
  }, [_vm._v("\n        General\n    ")]), _vm._v(" "), _c('ul', {
    staticClass: "menu-list"
  }, [_c('li', [_c('router-link', {
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_vm._v("Home")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("About")])], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-33eb212d", module.exports)
  }
}

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "is-clearfix"
  }, [_c('p', {
    staticClass: "control has-icon is-pulled-right"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: (_vm.query),
      expression: "query",
      modifiers: {
        "lazy": true
      }
    }],
    staticClass: "input is-small",
    attrs: {
      "type": "text",
      "placeholder": "Search"
    },
    domProps: {
      "value": _vm._s(_vm.query)
    },
    on: {
      "change": [function($event) {
        _vm.query = $event.target.value
      }, function($event) {
        _vm.getResources()
      }]
    }
  }), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('p', {
    staticClass: "control is-pulled-left"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.limit),
      expression: "limit"
    }],
    staticClass: "select",
    on: {
      "change": [function($event) {
        _vm.limit = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        })[0]
      }, function($event) {
        _vm.getResources()
      }]
    }
  }, _vm._l((_vm.limits), function(lim) {
    return _c('option', {
      domProps: {
        "value": lim
      }
    }, [_vm._v("Show " + _vm._s(lim))])
  }))])]), _vm._v(" "), _c('table', {
    staticClass: "table is-striped"
  }, [_c('thead', [_vm._l((_vm.columns), function(column) {
    return _c('th', {
      on: {
        "click": function($event) {
          _vm.toggleSort(column)
        }
      }
    }, [_vm._v(_vm._s(column))])
  }), _vm._v(" "), _c('th', [_vm._v("Action")])], 2), _vm._v(" "), _c('tfoot', [_vm._l((_vm.columns), function(column) {
    return _c('th', [_vm._v(_vm._s(column))])
  }), _vm._v(" "), _c('th', [_vm._v("Action")])], 2), _vm._v(" "), _c('tbody', _vm._l((_vm.resources), function(res) {
    return _c('tr', [_vm._l((_vm.columns), function(column) {
      return _c('td', [_vm._v(_vm._s(_vm.format(res, column)))])
    }), _vm._v(" "), _c('td', [_c('button', {
      staticClass: "button is-small is-danger",
      on: {
        "click": function($event) {
          _vm.deleteResource(res)
        }
      }
    }, [_vm._m(1, true)])])], 2)
  }))], 1), _vm._v(" "), _c('button', {
    staticClass: "button is-success",
    on: {
      "click": _vm.showAddModal
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v(" Add New")]), _vm._v(" "), _c('modal', {
    attrs: {
      "visible": _vm.showModal,
      "transition": "zoom"
    },
    on: {
      "close": _vm.closeAddModal
    }
  }, [_c('div', {
    staticClass: "box content has-text-centered"
  }, [(_vm.resource == 'quotes') ? _c('new-quote') : _vm._e()], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-search"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-remove"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44315942", module.exports)
  }
}

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "tile is-ancestor is-12"
  }, [_c('div', {
    staticClass: "tile is-parent is-7"
  }, [_c('div', {
    staticClass: "box hero-body has-text-centered tile is-child"
  }, [_c('greeting')], 1)]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-5"
  }, [_c('div', {
    staticClass: "box tile is-child"
  }, [_c('randomquote')], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4b29c67a", module.exports)
  }
}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n    This is the about page\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4e947182", module.exports)
  }
}

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.quote.content) ? _c('div', {
    staticClass: "content",
    on: {
      "click": function($event) {
        _vm.getQuote(_vm.quote.id)
      }
    }
  }, [_c('blockquote', [_vm._v("\n        " + _vm._s(_vm.quote.content) + "\n    ")])], 1) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b30d107", module.exports)
  }
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "content"
  }), _vm._v(" "), _c('manage-resource', {
    attrs: {
      "resource": 'quotes',
      "columns": ['content', 'author', 'updated_at'],
      "friendlytimecolumns": ['updated_at']
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7ed1c252", module.exports)
  }
}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    attrs: {
      "action": ""
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.addQuote($event)
      }
    }
  }, [_c('p', {
    staticClass: "control"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newQuote.content),
      expression: "newQuote.content"
    }],
    staticClass: "textarea",
    class: _vm.hasErrorClass('content'),
    attrs: {
      "placeholder": "Textarea"
    },
    domProps: {
      "value": _vm._s(_vm.newQuote.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newQuote.content = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.hasError('content')) ? _c('span', {
    staticClass: "help is-danger"
  }, [_vm._v("\n            " + _vm._s(_vm.errors['content'][0]) + "\n        ")]) : _vm._e()]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newQuote.author),
      expression: "newQuote.author"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Author",
      "name": "author"
    },
    domProps: {
      "value": _vm._s(_vm.newQuote.author)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newQuote.author = $event.target.value
      }
    }
  })]), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button is-success"
  }, [_vm._v("Add Quote")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ffbfacc4", module.exports)
  }
}

/***/ }),
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
module.exports = __webpack_require__(122);


/***/ }),
/* 177 */,
/* 178 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 179 */,
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {

    props: {
        visible: Boolean,
        closable: {
            type: Boolean,
            default: true
        },
        transition: {
            type: String,
            default: 'fade'
        }
    },

    data: function data() {
        return {
            show: this.visible
        };
    },
    mounted: function mounted() {
        document.body.appendChild(this.$el);
    },


    methods: {
        event: function event(ev) {
            switch (ev) {
                case 'beforeEnter':
                    this.$emit('open');break;
                case 'afterEnter':
                    this.$emit('after-open');break;
                case 'beforeLeave':
                    this.$emit('before-close');break;
                case 'afterLeave':
                    this.$emit('close');break;
            }
        },
        active: function active() {
            this.show = true;
        },
        deactivate: function deactivate() {
            if (this.closable) this.show = false;
        }
    },

    computed: {
        enterClass: function enterClass() {
            return this.transition + 'In';
        },
        leaveClass: function leaveClass() {
            return this.transition + 'Out';
        }
    },

    watch: {
        visible: function visible(val) {
            this.show = val;
        }
    }
};

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        type: String,
        title: String,
        message: String,
        duration: {
            type: Number,
            default: 5000
        }
    },
    data: function data() {
        return {
            $parent: null,
            show: true
        };
    },
    created: function created() {
        if (!this.$parent) {
            var parent = document.querySelector('.notifications');
            if (!parent) {
                // there's no .notifications, add one and mount
                var Notifications = Vue.extend({
                    name: 'Notifications',
                    render: function render(h) {
                        return h('div', {
                            'class': 'notifications'
                        });
                    }
                });
                this.$parent = new Notifications().$mount();
                document.body.appendChild(this.$parent.$el);
                parent = document.querySelector('.notifications');
            }
            this.$parent = parent.__vue__;
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$parent.$el.appendChild(this.$el);
        if (this.duration > 0) {
            this.timer = setTimeout(function () {
                return _this.close();
            }, this.duration);
        }
    },


    methods: {
        close: function close() {
            this.$emit('closed');
            clearTimeout(this.timer);
            this.show = false;
        },
        afterLeave: function afterLeave() {
            this.$el.remove();
        }
    }
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(178)();
// imports


// module
exports.push([module.i, "\n.notifications {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 999999;\n  pointer-events: none;\n}\n.notification {\n  margin: 20px;\n  position: relative;\n  min-width: 240px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  pointer-events: all;\n}\n", ""]);

// exports


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(180),
  /* template */
  __webpack_require__(186),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/mnguyen/dev/aio/resources/assets/js/components/display/Modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d7a1497e", Component.options)
  } else {
    hotAPI.reload("data-v-d7a1497e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(187)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(181),
  /* template */
  __webpack_require__(185),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/mnguyen/dev/aio/resources/assets/js/components/display/Notification.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Notification.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00f583f2", Component.options)
  } else {
    hotAPI.reload("data-v-00f583f2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": 'slide-Right',
      "mode": "in-out",
      "appear": "",
      "appear-active-class": 'slideInRight',
      "enter-active-class": 'slideInRight',
      "leave-active-class": 'slideOutRight'
    },
    on: {
      "after-leave": _vm.afterLeave
    }
  }, [(_vm.show) ? _c('div', {
    class: ['notification', 'animated', _vm.type ? ("is-" + _vm.type) : '']
  }, [_c('button', {
    staticClass: "delete touchable",
    on: {
      "click": function($event) {
        _vm.close()
      }
    }
  }), _vm._v(" "), (_vm.title) ? _c('div', {
    staticClass: "title is-5"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v("\n        " + _vm._s(_vm.message) + "\n    ")]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-00f583f2", module.exports)
  }
}

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.transition,
      "mode": "in-out",
      "appear-active-class": _vm.enterClass,
      "enter-active-class": _vm.enterClass,
      "leave-active-class": _vm.leaveClass
    },
    on: {
      "beforeEnter": function($event) {
        _vm.event('beforeEnter')
      },
      "afterEnter": function($event) {
        _vm.event('afterEnter')
      },
      "beforeLeave": function($event) {
        _vm.event('beforeLeave')
      },
      "afterLeave": function($event) {
        _vm.event('afterLeave')
      }
    }
  }, [(_vm.show) ? _c('div', {
    staticClass: "modal animated is-active"
  }, [_c('div', {
    staticClass: "modal-background",
    on: {
      "click": _vm.deactivate
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "modal-container"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._t("default")], 2)]), _vm._v(" "), (_vm.closable) ? _c('button', {
    staticClass: "modal-close",
    on: {
      "click": _vm.deactivate
    }
  }) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d7a1497e", module.exports)
  }
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(182);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(188)("64edb8ec", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-00f583f2!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Notification.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-00f583f2!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Notification.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(189)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = { css: css, media: media, sourceMap: sourceMap }
    if (!newStyles[id]) {
      part.id = parentId + ':0'
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      part.id = parentId + ':' + newStyles[id].parts.length
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
  var hasSSR = styleElement != null

  // if in production mode and style is already provided by SSR,
  // simply do nothing.
  if (hasSSR && isProduction) {
    return noop
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = styleElement || createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (!hasSSR) {
    update(obj)
  }

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 189 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);