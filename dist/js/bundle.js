/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack-stream/node_modules/webpack/buildin/global.js */ "./node_modules/webpack-stream/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack-stream/node_modules/webpack/buildin/global.js */ "./node_modules/webpack-stream/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack-stream/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/libs/just-validate.min.js":
/*!******************************************!*\
  !*** ./src/js/libs/just-validate.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){for(var e=["DocumentType","Element","CharacterData"],t=function(){null!=this.parentNode&&this.parentNode.removeChild(this)},i=0;i<e.length;i++){var r=e[i];window[r]&&!window[r].prototype.remove&&(window[r].prototype.remove=t)}}(),function(e){function t(){}function i(e,t){return function(){e.apply(t,arguments)}}function r(e){if("object"!==_typeof(this))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],u(e,this)}function n(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void r._immediateFn(function(){var i=1===e._state?t.onFulfilled:t.onRejected;if(null===i)return void(1===e._state?o:s)(t.promise,e._value);var r;try{r=i(e._value)}catch(n){return void s(t.promise,n)}o(t.promise,r)}))}function o(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===("undefined"==typeof t?"undefined":_typeof(t))||"function"==typeof t)){var n=t.then;if(t instanceof r)return e._state=3,e._value=t,void a(e);if("function"==typeof n)return void u(i(n,t),e)}e._state=1,e._value=t,a(e)}catch(o){s(e,o)}}function s(e,t){e._state=2,e._value=t,a(e)}function a(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value)});for(var t=0,i=e._deferreds.length;t<i;t++)n(e,e._deferreds[t]);e._deferreds=null}function l(e,t,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=i}function u(e,t){var i=!1;try{e(function(e){i||(i=!0,o(t,e))},function(e){i||(i=!0,s(t,e))})}catch(r){if(i)return;i=!0,s(t,r)}}var d=setTimeout;r.prototype["catch"]=function(e){return this.then(null,e)},r.prototype.then=function(e,i){var r=new this.constructor(t);return n(this,new l(e,i,r)),r},r.all=function(e){var t=Array.prototype.slice.call(e);return new r(function(e,i){function r(o,s){try{if(s&&("object"===("undefined"==typeof s?"undefined":_typeof(s))||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(e){r(o,e)},i)}t[o]=s,0===--n&&e(t)}catch(l){i(l)}}if(0===t.length)return e([]);for(var n=t.length,o=0;o<t.length;o++)r(o,t[o])})},r.resolve=function(e){return e&&"object"===("undefined"==typeof e?"undefined":_typeof(e))&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,i){i(e)})},r.race=function(e){return new r(function(t,i){for(var r=0,n=e.length;r<n;r++)e[r].then(t,i)})},r._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){d(e,0)},r._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},r._setImmediateFn=function(e){r._immediateFn=e},r._setUnhandledRejectionFn=function(e){r._unhandledRejectionFn=e}, true&&module.exports?module.exports=r:e.Promise||(e.Promise=r)}(window),function(e){e.Promise||(e.Promise=Promise);var t="required",i="email",r="minLength",n="maxLength",o="password",s="zip",a="phone",l="remote",u="strength",d="function",c=function(e,t){if("string"==typeof e)return e;var i="post"===t.toLowerCase()?"":"?";return Array.isArray(e)?i+e.map(function(e){return e.name+"="+e.value}).join("&"):i+Object.keys(e).map(function(t){return t+"="+e[t]}).join("&")},h=function(e){var t=e.url,i=e.method,r=e.data,n=e.debug,o=e.callback,s=e.error;if(n)return void o("test");var a=e.async!==!1,l=new XMLHttpRequest,u=c(r,"get"),d=null;"post"===i.toLowerCase()&&(d=c(r,"post"),u=""),l.open(i,t+u,a),l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.onreadystatechange=function(){4===this.readyState&&(200===this.status?o(this.responseText):s&&s(this.responseText))},l.send(d)},f=function(e,t){this.options=t||{},this.rules=this.options.rules||{},this.messages=this.options.messages||void 0,this.colorWrong=this.options.colorWrong||"#B81111",this.result={},this.elements=[],this.tooltip=this.options.tooltip||{},this.tooltipFadeOutTime=this.tooltip.fadeOutTime||5e3,this.tooltipFadeOutClass=this.tooltip.fadeOutClass||"just-validate-tooltip-hide",this.tooltipSelectorWrap=document.querySelectorAll(this.tooltip.selectorWrap).length?document.querySelectorAll(this.tooltip.selectorWrap):document.querySelectorAll(".just-validate-tooltip-container"),this.bindHandlerKeyup=this.handlerKeyup.bind(this),this.submitHandler=this.options.submitHandler||void 0,this.invalidFormCallback=this.options.invalidFormCallback||void 0,this.promisesRemote=[],this.isValidationSuccess=!1,this.focusWrongField=this.options.focusWrongField||!1,this.REGEXP={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,zip:/^\d{5}(-\d{4})?$/,phone:/^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/,password:/[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/,strengthPass:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/},this.DEFAULT_REMOTE_ERROR="Error",this.state={tooltipsTimer:null},this.setForm(document.querySelector(e))};f.prototype={defaultRules:{email:{required:!0,email:!0},name:{required:!0,minLength:3,maxLength:15},text:{required:!0,maxLength:300,minLength:5},password:{required:!0,password:!0,minLength:4,maxLength:8},zip:{required:!0,zip:!0},phone:{phone:!0}},defaultMessages:{required:"The field is required",email:"Please, type a valid email",maxLength:"The field must contain a maximum of :value characters",minLength:"The field must contain a minimum of :value characters",password:"Password is not valid",remote:"Email already exists",strength:"Password must contents at least one uppercase letter, one lowercase letter and one number","function":"Function returned false"},handlerKeyup:function(e){var t=e.target,i={name:t.getAttribute("data-validate-field"),value:t.value};delete this.result[i.name],this.validateItem({name:i.name,value:i.value,group:[],isKeyupChange:!0}),this.renderErrors()},setterEventListener:function(e,t,i,r){switch("keyup"===t&&(i=this.bindHandlerKeyup),r){case"add":e.addEventListener(t,i);break;case"remove":e.removeEventListener(t,i)}},getElementsRealValue:function(){for(var e=this.$form.querySelectorAll("*"),t=void 0,i={},r=0,n=e.length;r<n;++r)if(t=e[r].getAttribute("name")){if("checkbox"===e[r].type){i[t]=e[r].checked;continue}i[t]=e[r].value}return i},validationFailed:function(){this.invalidFormCallback&&this.invalidFormCallback(this.result);var e=document.querySelector(".js-validate-error-field");this.focusWrongField&&e&&e.focus&&e.focus()},validationSuccess:function(){if(0===Object.keys(this.result).length){if(this.isValidationSuccess=!1,this.submitHandler){var e=this.getElementsRealValue();return void this.submitHandler(this.$form,e,h)}this.$form.submit()}},setForm:function(e){var t=this;this.$form=e,this.$form.setAttribute("novalidate","novalidate"),this.$form.addEventListener("submit",function(e){return e.preventDefault(),t.result=[],t.getElements(),t.promisesRemote.length?void Promise.all(t.promisesRemote).then(function(){t.promisesRemote=[],t.isValidationSuccess?t.validationSuccess():t.validationFailed()}):void(t.isValidationSuccess?t.validationSuccess():t.validationFailed())})},isEmail:function(e){return this.REGEXP.email.test(e)},isZip:function(e){return this.REGEXP.zip.test(e)},isPhone:function(e){return this.REGEXP.phone.test(e)},isPassword:function(e){return this.REGEXP.password.test(e)},isEmpty:function(e){var t=e;return e.trim&&(t=e.trim()),!t},checkLengthMax:function(e,t){return e.length<=t},checkLengthMin:function(e,t){return e.length>=t},checkStrengthPass:function(e){return this.REGEXP.strengthPass.test(e)},getElements:function(){var e=this,t=this.$form.querySelectorAll("[data-validate-field]");this.elements=[];for(var i=function(i,r){var n=t[i],o=n.getAttribute("data-validate-field"),s=n.value,a=!1,l=[];if("checkbox"===n.type&&(s=n.checked||"",n.addEventListener("change",function(t){var i=t.target,r={name:i.getAttribute("data-validate-field"),value:i.checked};delete e.result[r.name],e.validateItem({name:r.name,value:r.value,group:[]}),e.renderErrors()})),"radio"===n.type){var u=e.elements.filter(function(e){if(e.name===o)return e})[0];u?(u.group.push(n.checked),a=!0):l.push(n.checked),n.addEventListener("change",function(t){var i=t.target,r={name:i.getAttribute("data-validate-field"),value:i.checked};delete e.result[r.name],e.validateItem({name:r.name,value:r.value,group:[]}),e.renderErrors()})}e.setterEventListener(n,"keyup",e.handlerKeyup,"add"),a||e.elements.push({name:o,value:s,group:l})},r=0,n=t.length;r<n;++r)i(r,n);this.validateElements()},validateRequired:function(e){return!this.isEmpty(e)},validateEmail:function(e){return this.isEmail(e)},validatePhone:function(e){return this.isPhone(e)},validateMinLength:function(e,t){return this.checkLengthMin(e,t)},validateMaxLength:function(e,t){return this.checkLengthMax(e,t)},validateStrengthPass:function(e){return this.checkStrengthPass(e)},validatePassword:function(e){return this.isPassword(e)},validateZip:function(e){return this.isZip(e)},validateRemote:function(e){var t=e.value,i=e.name,r=e.url,n=e.successAnswer,o=e.sendParam,s=e.method;return new Promise(function(e){h({url:r,method:s,data:_defineProperty({},o,t),async:!0,callback:function(t){t.toLowerCase()===n.toLowerCase()&&e("ok"),e({type:"incorrect",name:i})},error:function(){e({type:"error",name:i})}})})},generateMessage:function(e,t,i){var r=this.messages||this.defaultMessages,n=r[t]&&r[t][e]||this.messages&&"string"==typeof this.messages[t]&&r[t]||this.defaultMessages[e]||this.DEFAULT_REMOTE_ERROR;i&&(n=n.replace(":value",i.toString())),this.result[t]={message:n}},validateElements:function(){var e=this;return this.lockForm(),this.elements.forEach(function(t){e.validateItem({name:t.name,value:t.value,group:t.group})}),this.promisesRemote.length?void Promise.all(this.promisesRemote).then(function(t){t.forEach(function(t){return"ok"===t?void e.renderErrors():("error"===t.type&&alert("Server error occured. Please try later."),e.generateMessage(l,t.name),void e.renderErrors())})}):void this.renderErrors()},validateItem:function(e){var c=this,h=e.name,f=e.group,m=e.value,v=e.isKeyupChange,p=this.rules[h]||this.defaultRules[h]||!1;if(p)for(var g in p){var y=p[g];if(g!==t&&g!==d&&""==m)return;switch(g){case d:if("function"!=typeof y)break;if(y(h,m))break;return void this.generateMessage(d,h,y);case t:if(!y)break;if(f.length){var b=!1;if(f.forEach(function(e){c.validateRequired(e)&&(b=!0)}),b)break}else if(this.validateRequired(m))break;return void this.generateMessage(t,h);case i:if(!y)break;if(this.validateEmail(m))break;return void this.generateMessage(i,h);case r:if(!y)break;if(this.validateMinLength(m,y))break;return void this.generateMessage(r,h,y);case n:if(!y)break;if(this.validateMaxLength(m,y))break;return void this.generateMessage(n,h,y);case a:if(!y)break;if(this.validatePhone(m))break;return void this.generateMessage(a,h);case o:if(!y)break;if(this.validatePassword(m))break;return void this.generateMessage(o,h);case u:if(!y||"object"!==("undefined"==typeof y?"undefined":_typeof(y)))break;if(y["default"]&&this.validateStrengthPass(m))break;if(y.custom){var E=void 0;try{E=new RegExp(y.custom)}catch(w){E=this.REGEXP.strengthPass,console.error("Custom regexp for strength rule is not valid. Default regexp was used.")}if(E.test(m))break}return void this.generateMessage(u,h);case s:if(!y)break;if(this.validateZip(m))break;return void this.generateMessage(s,h);case l:if(v)break;if(!y)break;var k=y.url,_=y.successAnswer,P=y.method,R=y.sendParam,S=this.$form.querySelector('input[data-validate-field="'+h+'"]');return this.setterEventListener(S,"keyup",this.handlerKeyup,"remove"),void this.promisesRemote.push(this.validateRemote({name:h,value:m,url:k,method:P,sendParam:R,successAnswer:_}))}}},clearErrors:function(){for(var e=document.querySelectorAll(".js-validate-error-label"),t=0,i=e.length;t<i;++t)e[t].remove();e=document.querySelectorAll(".js-validate-error-field");for(var r=0,n=e.length;r<n;++r)e[r].classList.remove("js-validate-error-field"),e[r].style.border="",e[r].style.color=""},renderErrors:function(){var e=this;if(this.clearErrors(),this.unlockForm(),this.isValidationSuccess=!1,0===Object.keys(this.result).length)return void(this.isValidationSuccess=!0);for(var t in this.result){var i=this.result[t].message,r=this.$form.querySelectorAll('[data-validate-field="'+t+'"]'),n=r[r.length-1],o=document.createElement("div");if(o.innerHTML=i,o.className="js-validate-error-label",o.setAttribute("style","color: "+this.colorWrong),n.style.border="1px solid "+this.colorWrong,n.style.color=""+this.colorWrong,n.classList.add("js-validate-error-field"),"checkbox"===n.type||"radio"===n.type){var s=document.querySelector('label[for="'+n.getAttribute("id")+'"]');"label"===n.parentNode.tagName.toLowerCase()?n.parentNode.parentNode.insertBefore(o,null):s?s.parentNode.insertBefore(o,s.nextSibling):n.parentNode.insertBefore(o,n.nextSibling)}else n.parentNode.insertBefore(o,n.nextSibling)}this.tooltipSelectorWrap.length&&(this.state.tooltipsTimer=setTimeout(function(){e.hideTooltips()},this.tooltipFadeOutTime))},hideTooltips:function(){var e=this,t=document.querySelectorAll(".js-validate-error-label");t.forEach(function(t){t.classList.add(e.tooltipFadeOutClass)}),this.state.tooltipsTimer=null},lockForm:function(){for(var e=this.$form.querySelectorAll("input, textarea, button, select"),t=0,i=e.length;t<i;++t)e[t].setAttribute("disabled","disabled"),e[t].style.pointerEvents="none",e[t].style.webitFilter="grayscale(100%)",e[t].style.filter="grayscale(100%)"},unlockForm:function(){for(var e=this.$form.querySelectorAll("input, textarea, button, select"),t=0,i=e.length;t<i;++t)e[t].removeAttribute("disabled"),e[t].style.pointerEvents="",e[t].style.webitFilter="",e[t].style.filter=""}},e.JustValidate=f}(window);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/js/libs/wow.min.js":
/*!********************************!*\
  !*** ./src/js/libs/wow.min.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module,exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var c; }}(this,function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)&&a["on"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]}function k(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,"__esModule",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:"get",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:"set",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return n(a,[{key:"observe",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\-([a-z]){1})/g;return{getPropertyValue:function(c){"float"===c&&(c="styleFloat"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:"init",value:function(){this.element=window.document.documentElement,d(document.readyState,["interactive","complete"])?this.start():i(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,"scroll",this.scrollHandler),i(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,"scroll",this.scrollHandler),j(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){p.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(a){if("undefined"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll("."+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:"show",value:function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,"animationend",this.resetAnimation),i(a,"oanimationend",this.resetAnimation),i(a,"webkitAnimationEnd",this.resetAnimation),i(a,"MSAnimationEnd",this.resetAnimation)),a}},{key:"applyStyle",value:function(a,b){var c=this,d=a.getAttribute("data-wow-duration"),e=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:"resetStyle",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility="visible"}}},{key:"resetAnimation",value:function(a){if(a.type.toLowerCase().indexOf("animationend")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a}},{key:"vendorSet",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[""+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:"vendorCSS",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue("-"+f+"-"+b)}return d}},{key:"animationName",value:function(a){var b=void 0;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=q(a).getPropertyValue("animation-name")}return"none"===b?"":b}},{key:"cacheAnimationName",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:"cachedAnimationName",value:function(a){return this.animationNameCache.get(a)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:"isVisible",value:function(a){var b=a.getAttribute("data-wow-offset")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:"disabled",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b["default"]=r,a.exports=b["default"]});

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function form() {
    function createForm() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
        <div class="modal__wrapper">
            <div class="modal__text"></div>
        </div>
        `;
        document.querySelector('body').append(modal);
        return modal;
    }

    const modal = createForm();

    const contactsForm = document.querySelector('.contacts__form'),
          textForm = document.querySelector('.modal__text');

    let validateForms = function(selector, rules, modal) {
        new window.JustValidate(selector, {
            rules: rules,
            submitHandler: function(form) {

                const formData = new FormData(form);
                // const object = {};
                // formData.forEach(function(value, key) {
                //     object[key] = value;
                // });

                // const json = JSON.stringify(object);

                fetch('mailer/smart.php', {
                    method: "POST",
                    // headers: {
                    //     'Content-type': 'application/json'
                    // },
                    body: formData
                }).then(data => data.text())
                .then(data => {
                    console.log(data);
                    textForm.textContent = 'Спасибо, Я скоро с вами свяжусь';
                }).catch(() => {
                    console.log('failure');
                    textForm.textContent = 'Что-то пошло не так';   
                }).finally(() => {
                    modal.classList.add('modal__active');
                    document.body.style.overflow = 'hidden';
                    form.reset();
                    setTimeout( () => {
                        modal.classList.remove('modal__active');
                        document.body.style.overflow = '';
                    }, 2500);
                });
            }
        });
    };

    validateForms('.contacts__form', {
        email: {
            required: true, 
            email: true
        }, 
        name: {
            required: true, 
            minLength: 2, 
            maxLength: 8
        }, text: {
            required:true
        }, checkbox: {
            required:true
        }}, modal);
}
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function hamburger() {
    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElement = document.querySelector('.menu__close'),
      link = document.querySelector('.menu__list');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        hamburger.classList.add('active');
    });

    closeElement.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    });

    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    });
}
/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/modules/language.js":
/*!************************************!*\
  !*** ./src/js/modules/language.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _promo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promo */ "./src/js/modules/promo.js");


function language() {

    const langMenu = document.querySelector('.language__menu'),
    langArrow = document.querySelector('.language__arrow'),
    langWrapper = document.querySelector('.language__wrapper'),
    langElements = document.querySelectorAll('.language__list__text'),
    promoEng = document.querySelector('.promo__greetings'),
    langTitle = document.querySelector('.language__text'),
    langPrev = document.querySelector('.language__prev'),

    panelDescr = document.querySelector('.panel__descr span'),
    promoGreetings = document.querySelector('.promo__greetings'),
    promoTitle = document.querySelector('.promo__title'),
    aboutTitle = document.querySelector('.about__title'),
    aboutDescr = document.querySelector('.about__descr'),
    expTitle = document.querySelector('.expirience__title'),
    expColumnTitle = document.querySelectorAll('.expirience__column__title'),
    expItemName = document.querySelectorAll('.expirience__item__name'),
    expItemLocation = document.querySelectorAll('.expirience__item__location'),
    skillsTitle = document.querySelector('.skills__title'),
    skillsItemTitle = document.querySelectorAll('.skills__item__title'),
    skillsItemDescr = document.querySelectorAll('.skills__item__descr'),
    portfolioTitle = document.querySelector('.portfolio__title'),
    portfolioItemTitle = document.querySelector('.portfolio__item__title'),
    portfolioItemDescr = document.querySelector('.portfolio__item__descr'),
    contactsTitle = document.querySelector('.contacts__title'),
    contactsDescrTitle = document.querySelector('.contacts__descr__title'),
    contactsDescrText = document.querySelectorAll('.contacts__descr__text'),
    contactsFormLabel = document.querySelectorAll('.contacts__form__label'),
    contactsBtn = document.querySelector('.contacts__btn'),
    contactsPolicySpan = document.querySelector('.contacts__policy__span'),
    contactsPrivacyPolicy = document.querySelector('.contacts__privacy__policy'),
    menuText = document.querySelectorAll('.menu__text');
    let language;

    function russianTranslation() {
        menuText[0].textContent = 'Обо мне';
        menuText[1].textContent = 'Мой опыт';
        menuText[2].textContent = 'Мои навыки';
        menuText[3].textContent = 'Мои работы';
        menuText[4].textContent = 'Контакты';
        panelDescr.textContent = 'Социальные сети';
        promoGreetings.textContent = 'Привет! Меня зовут Евгений.';
        promoTitle.textContent = 'Я — Джуниор-разработчик.';
        aboutTitle.textContent = 'Обо мне';
        aboutDescr.textContent = 'Я учусь в БГУИРЕ по специальности "Инженер-Системотехник". В течении 2 лет я искал язык программирования, который мне бы понравился. Я разрабатывал файловый менеджер на языке Python для курсового проекта, создавал небольшие программы по выводу статистики пользователей по шагам за месяц на WPF, а также создал свой сайт портфолио на CSS/HTML/JavaScript и понял что JavaScript - это тот язык программирования, с которым я бы хотел связать свою жизнь. Последнее приложение что я создал, это сайт покемонов написанный на TypeScript/React/Redux/Axios. В данный момент я ищу работу, где я бы мог показать свои знания и узнать что-нибудь новое.';
        expTitle.textContent = 'Опыт';
        expColumnTitle[0].textContent = 'Образование';
        expColumnTitle[1].textContent = 'Опыт работы';
        expItemName[0].textContent = 'МГК Электроники';
        expItemName[1].textContent = 'МГК Электроники';
        expItemName[2].textContent = 'БГУИР';
        expItemName[3].textContent = 'Интеграл';
        expItemLocation[0].textContent = 'Оператор ЭВМ Минск | (2014-2017)';
        expItemLocation[1].textContent = 'Техник-Технолог | Минск (2017-2019)';
        expItemLocation[2].textContent = 'Инженер-Системотехник | Минск (2019-2023)';
        expItemLocation[3].textContent = 'Оператор ЭВМ | Минск (2019-2021)';
        skillsTitle.textContent = 'Навыки';
        skillsItemTitle[0].textContent = 'React';
        skillsItemTitle[1].textContent = 'Redux';
        skillsItemTitle[2].textContent = 'C#';
        skillsItemTitle[3].textContent = 'Python';
        skillsItemTitle[4].textContent = 'Microsot Sql Server';
        skillsItemTitle[5].textContent = 'HTML5';
        skillsItemTitle[6].textContent = 'CSS3';
        skillsItemTitle[7].textContent = 'TypeScript';
        skillsItemTitle[8].textContent = 'JavaScript';
        skillsItemTitle[9].textContent = 'Jquery';
        skillsItemDescr[0].textContent = 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.';
        skillsItemDescr[1].textContent = 'Библиотека управления состоянием для приложений, написанных на JavaScript.';
        skillsItemDescr[2].textContent = 'Современный объектно-ориентированный и типобезопасный язык программирования, позволяющий создавать множество типов безопасных и надежных приложений, работающих в экосистеме .NET.';
        skillsItemDescr[3].textContent = 'Высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью.';
        skillsItemDescr[4].textContent = 'Система управления реляционными базами данных (РСУБД), используящая язык запросов — Transact-SQL.';
        skillsItemDescr[5].textContent = 'Язык гипертекстовой разметки позволяющий разрабатывать каркас сайта или приложения.';
        skillsItemDescr[6].textContent = 'Язык стилей, позволяющий прикреплять стиль к структурированным документам (например, документам HTML и приложениям XML)';
        skillsItemDescr[7].textContent = 'Компилируемое надмножество JavaScript, приносящее опциональную статическую типизацию и некоторые возможности современных стандартов ECMAScript.';
        skillsItemDescr[8].textContent = 'Динамический язык программирования, который применяется к HTML документу, и может обеспечить динамическую интерактивность на веб-сайтах.';
        skillsItemDescr[9].textContent = 'Javasript библиотека, помогающая уменьшить количество необходимого кода, параллельно увеличивающая функционал языка.';
        portfolioTitle.textContent = 'Портфолио';
        portfolioItemTitle.textContent = '«PyCommander»';
        portfolioItemDescr.innerHTML = 'Приложение «PyCommander», предназначено для упрощения работы пользователя в операционной системе с папками и файлами. Основным функционалом данного приложения является простой и быстрый переход по иерархической файловой системе. Также данная программа обладает следующим функционалом:<br><br>- просмотр файлов и каталогов;<br>- копирование файлов и каталогов;<br>- удаление файлов и каталогов;<br>- создание файлов и каталогов;<br>- перемещение файлов и каталогов';
        contactsTitle.textContent = 'Контакты';
        contactsDescrTitle.textContent = 'Свяжитесь со мной';
        contactsDescrText[0].textContent = 'Любым удобным для вас способом:';
        contactsDescrText[1].textContent = 'Или оставьте ваши данные и я сам вам напишу:';
        contactsFormLabel[0].textContent = 'Ваше имя';
        contactsFormLabel[1].textContent = 'Ваша почта';
        contactsFormLabel[2].textContent = 'Ваше сообщение';
        contactsBtn.textContent = 'Отправить сообщение';
        contactsPolicySpan.textContent = 'Я согласен(а) с ';
        contactsPrivacyPolicy.textContent = 'политикой конфиденциальности';
    }

    function englishTranslation() {
        menuText[0].textContent = 'About me';
        menuText[1].textContent = 'Experience';
        menuText[2].textContent = 'Skills';
        menuText[3].textContent = 'Portfolio';
        menuText[4].textContent = 'Contacts';
        panelDescr.textContent = 'Social Networks';
        promoGreetings.textContent = 'Hello! My name is Eugene.';
        promoTitle.textContent = `I'm — Junior Developer`;
        aboutTitle.textContent = 'About me';
        aboutDescr.textContent = `I am studying at BSUIR with a degree in "System Engineer". For 2 years I have been looking for a programming language that I would like. I developed a file manager in Python for a course project, created small programs for displaying user statistics in steps per month on WPF, and also created my portfolio website in CSS/HTML/JavaScript and realized that JavaScript is the programming language with which I would like to connect my life. The last application I created was a Pokemon website written in TypeScript/React/Redux/Axios. At the moment I am looking for a job where I could show my knowledge and learn something new.`;
        expTitle.textContent = 'Experience';
        expColumnTitle[0].textContent = 'Education';
        expColumnTitle[1].textContent = 'Work expirience';
        expItemName[0].textContent = 'MSC of Electonics';
        expItemName[1].textContent = 'MSC of Electonics';
        expItemName[2].textContent = 'BSUIR';
        expItemName[3].textContent = 'Integral';
        expItemLocation[0].textContent = 'Computer Operator | Minsk (2014-2017)';
        expItemLocation[1].textContent = 'Technician and technologist | Minsk (2017-2019)';
        expItemLocation[2].textContent = 'System Engineer | Минск (2019-2023)';
        expItemLocation[3].textContent = 'Computer Operator | Minsk (2019-2021)';
        skillsTitle.textContent = 'Skills';
        skillsItemDescr[0].textContent = 'An open source javasript library for developing user interfaces.';
        skillsItemDescr[1].textContent = 'A state management library for applications written in JavaScript.';
        skillsItemDescr[2].textContent = 'Modern object-oriented and type-safe programming language that allows you to create many types of secure and reliable applications running in the .NET ecosystem.';
        skillsItemDescr[3].textContent = 'High-level general-purpose programming language with dynamic strong typing and automatic memory management.';
        skillsItemDescr[4].textContent = 'Relational database management system (RDBMS) using the query language — Transact-SQL.';
        skillsItemDescr[5].textContent = 'Hypertext markup language that allows you to develop a website or application framework.';
        skillsItemDescr[6].textContent = 'Style language that allows you to attach a style to structured documents (for example, HTML documents and XML applications)';
        skillsItemDescr[7].textContent = 'A compiled superset of JavaScript that brings optional static typing and some features of modern ECMAScript standards.';
        skillsItemDescr[8].textContent = 'Dynamic programming language that is applied to an HTML document, and can provide dynamic interactivity on websites.';
        skillsItemDescr[9].textContent = 'Javascript Library that helps to reduce the amount of necessary code, while simultaneously increasing the functionality of the language.';
        portfolioTitle.textContent = 'Portfolio';
        portfolioItemDescr.innerHTML = `Application «PyCommander», intended to simplify the user's work with folders and files in the operating system. The main functionality of this application is and fast transition through the hierarchical file system. Also, this program has the following functionality:<br><br>- viewing files and directories;<br>- copying files and directories;<br>- deleting files and directories;<br>- creating files and directories;<br>- moving files and directories`;
        contactsTitle.textContent = 'Contacts';
        contactsDescrTitle.textContent = 'Contact with me';
        contactsDescrText[0].textContent = 'In any convenient way.';
        contactsDescrText[1].textContent = 'Or leave your details and I will write to you myself:';
        contactsFormLabel[0].textContent = 'Your name';
        contactsFormLabel[1].textContent = 'Your email';
        contactsFormLabel[2].textContent = 'Your message';
        contactsBtn.textContent = 'Send a message';
        contactsPolicySpan.textContent = 'I agree with';
        contactsPrivacyPolicy.textContent = 'privacy policy';
    }

    if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
    } else {
    language = 'rus';
    localStorage.setItem('language', 'rus');
    }

    function menuSelector() {
    langMenu.classList.toggle('language__menu__active');
    langArrow.classList.toggle('language__arrow__active');
    langWrapper.classList.toggle('language__wrapper__active');
    }

    langPrev.addEventListener('click', (e) => {
        e.preventDefault();
        menuSelector();
    });

    function updateMenuInfo(array, title) {
    array.forEach(element => {
    element.classList.remove('language__list__text__active');
    });

    array.forEach(element => {
    if(element.getAttribute('id') == language) {
        element.classList.add('language__list__text__active');
        title.textContent = element.outerText;
        if (language == 'eng') {
            englishTranslation();
        }
        if (language == 'rus') {
            russianTranslation();
        }    
    }
    });
    }

    updateMenuInfo(langElements, langTitle);

    function languageChangeEvent(elements, title){
    elements.forEach(e => {
    e.addEventListener('click', (e) => {
        language = e.target.getAttribute('id');
        localStorage.setItem('language', language);
        updateMenuInfo(elements, title);
        menuSelector();
    });
    });

    }

    languageChangeEvent(langElements,langTitle);
}
/* harmony default export */ __webpack_exports__["default"] = (language);

/***/ }),

/***/ "./src/js/modules/pageup.js":
/*!**********************************!*\
  !*** ./src/js/modules/pageup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function pageup() {
    const up = document.querySelector('.pageup');

    window.addEventListener('scroll', (e) => {
        if(e.target.documentElement.scrollTop > 1100) {
            up.style.display = 'block';
        } else {
            up.style.display = 'none';
        }
        if (e.target.documentElement.scrollTop > 1600) {
            up.classList.add('pageup__active');
        }
        else {
            document.querySelector('.pageup').classList.remove('pageup__active');
        }
    });
}
/* harmony default export */ __webpack_exports__["default"] = (pageup);

/***/ }),

/***/ "./src/js/modules/promo.js":
/*!*********************************!*\
  !*** ./src/js/modules/promo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function promo() {
    const promo = document.querySelector('.promo__wrapper');
    window.addEventListener('scroll', (e) => {

        const height = e.target.documentElement.clientHeight - 320,
              scroll = e.target.documentElement.scrollTop,
              neededOpacity = scroll/height;
        promo.style.opacity = 1 - neededOpacity; 

        if (promo.style.opacity <= 0.3)
        {
            promo.style.opacity = 0;
        }

        if (scroll > 1000) {
            promo.style.display = 'none';
        } else {
            promo.style.display = 'block';
        }

    });

    //promo arrow event

    const check = document.querySelector('.pagedown');

    check.addEventListener('click', () => {
        document.documentElement.scrollTop = document.documentElement.clientHeight;
    });
}
/* harmony default export */ __webpack_exports__["default"] = (promo);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_wow_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/wow.min.js */ "./src/js/libs/wow.min.js");
/* harmony import */ var _libs_wow_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_wow_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_just_validate_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/just-validate.min.js */ "./src/js/libs/just-validate.min.js");
/* harmony import */ var _libs_just_validate_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libs_just_validate_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/language */ "./src/js/modules/language.js");
/* harmony import */ var _modules_pageup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pageup */ "./src/js/modules/pageup.js");
/* harmony import */ var _modules_promo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/promo */ "./src/js/modules/promo.js");










window.addEventListener('DOMContentLoaded', () => {
    new _libs_wow_min_js__WEBPACK_IMPORTED_MODULE_0___default.a().init();
    Object(_modules_form__WEBPACK_IMPORTED_MODULE_2__["default"])();
    Object(_modules_hamburger__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_modules_language__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_modules_pageup__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(_modules_promo__WEBPACK_IMPORTED_MODULE_6__["default"])();
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map