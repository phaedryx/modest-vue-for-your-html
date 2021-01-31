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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/components/Widget.js":
/*!*********************************************!*\
  !*** ./app/javascript/components/Widget.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var Widget = {
  name: 'Widget',
  setup: function setup() {
    var errorMessage = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);

    var check = function check(name) {
      if (/^WX-.+/.test(name)) {
        console.log('valid');
      } else {
        console.log('invalid');
      }
    };

    return {
      errorMessage: errorMessage,
      check: check
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Widget);

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_Widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Widget */ "./app/javascript/components/Widget.js");




 // standard Rails stuff

_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
turbolinks__WEBPACK_IMPORTED_MODULE_1___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__["start"](); // Vue stuff here

 // I could import more components here

var components = {
  Widget: _components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"]
}; // Maybe more components?
// Normally this would be done with 'DOMContentLoaded', but Turbolinks breaks that

document.addEventListener("turbolinks:load", function () {
  // Find everything with a data-component
  document.querySelectorAll('[data-component]').forEach(function (node) {
    // mount the respective Vue component
    Object(vue__WEBPACK_IMPORTED_MODULE_4__["createApp"])(components[node.dataset.component]).mount(node);
  });
});

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm["delete"](form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }

        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js ***!
  \***************************************************************************/
/*! exports provided: generateCodeFrame, BASE_TRANSITION, CAMELIZE, CAPITALIZE, CREATE_BLOCK, CREATE_COMMENT, CREATE_SLOTS, CREATE_STATIC, CREATE_TEXT, CREATE_VNODE, FRAGMENT, IS_REF, KEEP_ALIVE, MERGE_PROPS, OPEN_BLOCK, POP_SCOPE_ID, PUSH_SCOPE_ID, RENDER_LIST, RENDER_SLOT, RESOLVE_COMPONENT, RESOLVE_DIRECTIVE, RESOLVE_DYNAMIC_COMPONENT, SET_BLOCK_TRACKING, SUSPENSE, TELEPORT, TO_DISPLAY_STRING, TO_HANDLERS, TO_HANDLER_KEY, UNREF, WITH_CTX, WITH_DIRECTIVES, WITH_SCOPE_ID, advancePositionWithClone, advancePositionWithMutation, assert, baseCompile, baseParse, buildProps, buildSlots, createArrayExpression, createAssignmentExpression, createBlockStatement, createCacheExpression, createCallExpression, createCompilerError, createCompoundExpression, createConditionalExpression, createForLoopParams, createFunctionExpression, createIfStatement, createInterpolation, createObjectExpression, createObjectProperty, createReturnStatement, createRoot, createSequenceExpression, createSimpleExpression, createStructuralDirectiveTransform, createTemplateLiteral, createTransformContext, createVNodeCall, findDir, findProp, generate, getBaseTransformPreset, getInnerRange, hasDynamicKeyVBind, hasScopeRef, helperNameMap, injectProp, isBindKey, isBuiltInType, isCoreComponent, isMemberExpression, isSimpleIdentifier, isSlotOutlet, isStaticExp, isTemplateNode, isText, isVSlot, locStub, noopDirectiveTransform, processExpression, processFor, processIf, processSlotOutlet, registerRuntimeHelpers, resolveComponentType, toValidAssetId, trackSlotScopes, trackVForSlotScopes, transform, transformBind, transformElement, transformExpression, transformModel, transformOn, traverseNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_TRANSITION", function() { return BASE_TRANSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMELIZE", function() { return CAMELIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPITALIZE", function() { return CAPITALIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_BLOCK", function() { return CREATE_BLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_COMMENT", function() { return CREATE_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_SLOTS", function() { return CREATE_SLOTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_STATIC", function() { return CREATE_STATIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_TEXT", function() { return CREATE_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_VNODE", function() { return CREATE_VNODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRAGMENT", function() { return FRAGMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_REF", function() { return IS_REF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEEP_ALIVE", function() { return KEEP_ALIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MERGE_PROPS", function() { return MERGE_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_BLOCK", function() { return OPEN_BLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POP_SCOPE_ID", function() { return POP_SCOPE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUSH_SCOPE_ID", function() { return PUSH_SCOPE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_LIST", function() { return RENDER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_SLOT", function() { return RENDER_SLOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_COMPONENT", function() { return RESOLVE_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_DIRECTIVE", function() { return RESOLVE_DIRECTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_DYNAMIC_COMPONENT", function() { return RESOLVE_DYNAMIC_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BLOCK_TRACKING", function() { return SET_BLOCK_TRACKING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUSPENSE", function() { return SUSPENSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TELEPORT", function() { return TELEPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TO_DISPLAY_STRING", function() { return TO_DISPLAY_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TO_HANDLERS", function() { return TO_HANDLERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TO_HANDLER_KEY", function() { return TO_HANDLER_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNREF", function() { return UNREF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WITH_CTX", function() { return WITH_CTX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WITH_DIRECTIVES", function() { return WITH_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WITH_SCOPE_ID", function() { return WITH_SCOPE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advancePositionWithClone", function() { return advancePositionWithClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advancePositionWithMutation", function() { return advancePositionWithMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseCompile", function() { return baseCompile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseParse", function() { return baseParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildProps", function() { return buildProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSlots", function() { return buildSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArrayExpression", function() { return createArrayExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAssignmentExpression", function() { return createAssignmentExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlockStatement", function() { return createBlockStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCacheExpression", function() { return createCacheExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCallExpression", function() { return createCallExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCompilerError", function() { return createCompilerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCompoundExpression", function() { return createCompoundExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConditionalExpression", function() { return createConditionalExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForLoopParams", function() { return createForLoopParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFunctionExpression", function() { return createFunctionExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIfStatement", function() { return createIfStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInterpolation", function() { return createInterpolation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createObjectExpression", function() { return createObjectExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createObjectProperty", function() { return createObjectProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReturnStatement", function() { return createReturnStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoot", function() { return createRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSequenceExpression", function() { return createSequenceExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSimpleExpression", function() { return createSimpleExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStructuralDirectiveTransform", function() { return createStructuralDirectiveTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTemplateLiteral", function() { return createTemplateLiteral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTransformContext", function() { return createTransformContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVNodeCall", function() { return createVNodeCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDir", function() { return findDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findProp", function() { return findProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseTransformPreset", function() { return getBaseTransformPreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInnerRange", function() { return getInnerRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDynamicKeyVBind", function() { return hasDynamicKeyVBind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasScopeRef", function() { return hasScopeRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helperNameMap", function() { return helperNameMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectProp", function() { return injectProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBindKey", function() { return isBindKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuiltInType", function() { return isBuiltInType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCoreComponent", function() { return isCoreComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMemberExpression", function() { return isMemberExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSimpleIdentifier", function() { return isSimpleIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSlotOutlet", function() { return isSlotOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStaticExp", function() { return isStaticExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplateNode", function() { return isTemplateNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isText", function() { return isText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVSlot", function() { return isVSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locStub", function() { return locStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noopDirectiveTransform", function() { return noopDirectiveTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processExpression", function() { return processExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processFor", function() { return processFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processIf", function() { return processIf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processSlotOutlet", function() { return processSlotOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRuntimeHelpers", function() { return registerRuntimeHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveComponentType", function() { return resolveComponentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toValidAssetId", function() { return toValidAssetId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackSlotScopes", function() { return trackSlotScopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackVForSlotScopes", function() { return trackVForSlotScopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformBind", function() { return transformBind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformElement", function() { return transformElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformExpression", function() { return transformExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformModel", function() { return transformModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformOn", function() { return transformOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseNode", function() { return traverseNode; });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateCodeFrame", function() { return _vue_shared__WEBPACK_IMPORTED_MODULE_0__["generateCodeFrame"]; });

var _errorMessages, _helperNameMap;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function defaultOnError(error) {
  throw error;
}

function createCompilerError(code, loc, messages, additionalMessage) {
  var msg =  true ? (messages || errorMessages)[code] + (additionalMessage || "") : undefined;
  var error = new SyntaxError(String(msg));
  error.code = code;
  error.loc = loc;
  return error;
}

var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, 0
/* ABRUPT_CLOSING_OF_EMPTY_COMMENT */
, 'Illegal comment.'), _defineProperty(_errorMessages, 1
/* CDATA_IN_HTML_CONTENT */
, 'CDATA section is allowed only in XML context.'), _defineProperty(_errorMessages, 2
/* DUPLICATE_ATTRIBUTE */
, 'Duplicate attribute.'), _defineProperty(_errorMessages, 3
/* END_TAG_WITH_ATTRIBUTES */
, 'End tag cannot have attributes.'), _defineProperty(_errorMessages, 4
/* END_TAG_WITH_TRAILING_SOLIDUS */
, "Illegal '/' in tags."), _defineProperty(_errorMessages, 5
/* EOF_BEFORE_TAG_NAME */
, 'Unexpected EOF in tag.'), _defineProperty(_errorMessages, 6
/* EOF_IN_CDATA */
, 'Unexpected EOF in CDATA section.'), _defineProperty(_errorMessages, 7
/* EOF_IN_COMMENT */
, 'Unexpected EOF in comment.'), _defineProperty(_errorMessages, 8
/* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
, 'Unexpected EOF in script.'), _defineProperty(_errorMessages, 9
/* EOF_IN_TAG */
, 'Unexpected EOF in tag.'), _defineProperty(_errorMessages, 10
/* INCORRECTLY_CLOSED_COMMENT */
, 'Incorrectly closed comment.'), _defineProperty(_errorMessages, 11
/* INCORRECTLY_OPENED_COMMENT */
, 'Incorrectly opened comment.'), _defineProperty(_errorMessages, 12
/* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
, "Illegal tag name. Use '&lt;' to print '<'."), _defineProperty(_errorMessages, 13
/* MISSING_ATTRIBUTE_VALUE */
, 'Attribute value was expected.'), _defineProperty(_errorMessages, 14
/* MISSING_END_TAG_NAME */
, 'End tag name was expected.'), _defineProperty(_errorMessages, 15
/* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
, 'Whitespace was expected.'), _defineProperty(_errorMessages, 16
/* NESTED_COMMENT */
, "Unexpected '<!--' in comment."), _defineProperty(_errorMessages, 17
/* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
, 'Attribute name cannot contain U+0022 ("), U+0027 (\'), and U+003C (<).'), _defineProperty(_errorMessages, 18
/* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
, 'Unquoted attribute value cannot contain U+0022 ("), U+0027 (\'), U+003C (<), U+003D (=), and U+0060 (`).'), _defineProperty(_errorMessages, 19
/* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
, "Attribute name cannot start with '='."), _defineProperty(_errorMessages, 21
/* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
, "'<?' is allowed only in XML context."), _defineProperty(_errorMessages, 22
/* UNEXPECTED_SOLIDUS_IN_TAG */
, "Illegal '/' in tags."), _defineProperty(_errorMessages, 23
/* X_INVALID_END_TAG */
, 'Invalid end tag.'), _defineProperty(_errorMessages, 24
/* X_MISSING_END_TAG */
, 'Element is missing end tag.'), _defineProperty(_errorMessages, 25
/* X_MISSING_INTERPOLATION_END */
, 'Interpolation end sign was not found.'), _defineProperty(_errorMessages, 26
/* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
, 'End bracket for dynamic directive argument was not found. ' + 'Note that dynamic directive argument cannot contain spaces.'), _defineProperty(_errorMessages, 27
/* X_V_IF_NO_EXPRESSION */
, "v-if/v-else-if is missing expression."), _defineProperty(_errorMessages, 28
/* X_V_IF_SAME_KEY */
, "v-if/else branches must use unique keys."), _defineProperty(_errorMessages, 29
/* X_V_ELSE_NO_ADJACENT_IF */
, "v-else/v-else-if has no adjacent v-if."), _defineProperty(_errorMessages, 30
/* X_V_FOR_NO_EXPRESSION */
, "v-for is missing expression."), _defineProperty(_errorMessages, 31
/* X_V_FOR_MALFORMED_EXPRESSION */
, "v-for has invalid expression."), _defineProperty(_errorMessages, 32
/* X_V_FOR_TEMPLATE_KEY_PLACEMENT */
, "<template v-for> key should be placed on the <template> tag."), _defineProperty(_errorMessages, 33
/* X_V_BIND_NO_EXPRESSION */
, "v-bind is missing expression."), _defineProperty(_errorMessages, 34
/* X_V_ON_NO_EXPRESSION */
, "v-on is missing expression."), _defineProperty(_errorMessages, 35
/* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
, "Unexpected custom directive on <slot> outlet."), _defineProperty(_errorMessages, 36
/* X_V_SLOT_MIXED_SLOT_USAGE */
, "Mixed v-slot usage on both the component and nested <template>." + "When there are multiple named slots, all slots should use <template> " + "syntax to avoid scope ambiguity."), _defineProperty(_errorMessages, 37
/* X_V_SLOT_DUPLICATE_SLOT_NAMES */
, "Duplicate slot names found. "), _defineProperty(_errorMessages, 38
/* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
, "Extraneous children found when component already has explicitly named " + "default slot. These children will be ignored."), _defineProperty(_errorMessages, 39
/* X_V_SLOT_MISPLACED */
, "v-slot can only be used on components or <template> tags."), _defineProperty(_errorMessages, 40
/* X_V_MODEL_NO_EXPRESSION */
, "v-model is missing expression."), _defineProperty(_errorMessages, 41
/* X_V_MODEL_MALFORMED_EXPRESSION */
, "v-model value must be a valid JavaScript member expression."), _defineProperty(_errorMessages, 42
/* X_V_MODEL_ON_SCOPE_VARIABLE */
, "v-model cannot be used on v-for or v-slot scope variables because they are not writable."), _defineProperty(_errorMessages, 43
/* X_INVALID_EXPRESSION */
, "Error parsing JavaScript expression: "), _defineProperty(_errorMessages, 44
/* X_KEEP_ALIVE_INVALID_CHILDREN */
, "<KeepAlive> expects exactly one child component."), _defineProperty(_errorMessages, 45
/* X_PREFIX_ID_NOT_SUPPORTED */
, "\"prefixIdentifiers\" option is not supported in this build of compiler."), _defineProperty(_errorMessages, 46
/* X_MODULE_MODE_NOT_SUPPORTED */
, "ES module mode is not supported in this build of compiler."), _defineProperty(_errorMessages, 47
/* X_CACHE_HANDLER_NOT_SUPPORTED */
, "\"cacheHandlers\" option is only supported when the \"prefixIdentifiers\" option is enabled."), _defineProperty(_errorMessages, 48
/* X_SCOPE_ID_NOT_SUPPORTED */
, "\"scopeId\" option is only supported in module mode."), _errorMessages);
var FRAGMENT = Symbol( true ? "Fragment" : undefined);
var TELEPORT = Symbol( true ? "Teleport" : undefined);
var SUSPENSE = Symbol( true ? "Suspense" : undefined);
var KEEP_ALIVE = Symbol( true ? "KeepAlive" : undefined);
var BASE_TRANSITION = Symbol( true ? "BaseTransition" : undefined);
var OPEN_BLOCK = Symbol( true ? "openBlock" : undefined);
var CREATE_BLOCK = Symbol( true ? "createBlock" : undefined);
var CREATE_VNODE = Symbol( true ? "createVNode" : undefined);
var CREATE_COMMENT = Symbol( true ? "createCommentVNode" : undefined);
var CREATE_TEXT = Symbol( true ? "createTextVNode" : undefined);
var CREATE_STATIC = Symbol( true ? "createStaticVNode" : undefined);
var RESOLVE_COMPONENT = Symbol( true ? "resolveComponent" : undefined);
var RESOLVE_DYNAMIC_COMPONENT = Symbol( true ? "resolveDynamicComponent" : undefined);
var RESOLVE_DIRECTIVE = Symbol( true ? "resolveDirective" : undefined);
var WITH_DIRECTIVES = Symbol( true ? "withDirectives" : undefined);
var RENDER_LIST = Symbol( true ? "renderList" : undefined);
var RENDER_SLOT = Symbol( true ? "renderSlot" : undefined);
var CREATE_SLOTS = Symbol( true ? "createSlots" : undefined);
var TO_DISPLAY_STRING = Symbol( true ? "toDisplayString" : undefined);
var MERGE_PROPS = Symbol( true ? "mergeProps" : undefined);
var TO_HANDLERS = Symbol( true ? "toHandlers" : undefined);
var CAMELIZE = Symbol( true ? "camelize" : undefined);
var CAPITALIZE = Symbol( true ? "capitalize" : undefined);
var TO_HANDLER_KEY = Symbol( true ? "toHandlerKey" : undefined);
var SET_BLOCK_TRACKING = Symbol( true ? "setBlockTracking" : undefined);
var PUSH_SCOPE_ID = Symbol( true ? "pushScopeId" : undefined);
var POP_SCOPE_ID = Symbol( true ? "popScopeId" : undefined);
var WITH_SCOPE_ID = Symbol( true ? "withScopeId" : undefined);
var WITH_CTX = Symbol( true ? "withCtx" : undefined);
var UNREF = Symbol( true ? "unref" : undefined);
var IS_REF = Symbol( true ? "isRef" : undefined); // Name mapping for runtime helpers that need to be imported from 'vue' in
// generated code. Make sure these are correctly exported in the runtime!
// Using `any` here because TS doesn't allow symbols as index type.

var helperNameMap = (_helperNameMap = {}, _defineProperty(_helperNameMap, FRAGMENT, "Fragment"), _defineProperty(_helperNameMap, TELEPORT, "Teleport"), _defineProperty(_helperNameMap, SUSPENSE, "Suspense"), _defineProperty(_helperNameMap, KEEP_ALIVE, "KeepAlive"), _defineProperty(_helperNameMap, BASE_TRANSITION, "BaseTransition"), _defineProperty(_helperNameMap, OPEN_BLOCK, "openBlock"), _defineProperty(_helperNameMap, CREATE_BLOCK, "createBlock"), _defineProperty(_helperNameMap, CREATE_VNODE, "createVNode"), _defineProperty(_helperNameMap, CREATE_COMMENT, "createCommentVNode"), _defineProperty(_helperNameMap, CREATE_TEXT, "createTextVNode"), _defineProperty(_helperNameMap, CREATE_STATIC, "createStaticVNode"), _defineProperty(_helperNameMap, RESOLVE_COMPONENT, "resolveComponent"), _defineProperty(_helperNameMap, RESOLVE_DYNAMIC_COMPONENT, "resolveDynamicComponent"), _defineProperty(_helperNameMap, RESOLVE_DIRECTIVE, "resolveDirective"), _defineProperty(_helperNameMap, WITH_DIRECTIVES, "withDirectives"), _defineProperty(_helperNameMap, RENDER_LIST, "renderList"), _defineProperty(_helperNameMap, RENDER_SLOT, "renderSlot"), _defineProperty(_helperNameMap, CREATE_SLOTS, "createSlots"), _defineProperty(_helperNameMap, TO_DISPLAY_STRING, "toDisplayString"), _defineProperty(_helperNameMap, MERGE_PROPS, "mergeProps"), _defineProperty(_helperNameMap, TO_HANDLERS, "toHandlers"), _defineProperty(_helperNameMap, CAMELIZE, "camelize"), _defineProperty(_helperNameMap, CAPITALIZE, "capitalize"), _defineProperty(_helperNameMap, TO_HANDLER_KEY, "toHandlerKey"), _defineProperty(_helperNameMap, SET_BLOCK_TRACKING, "setBlockTracking"), _defineProperty(_helperNameMap, PUSH_SCOPE_ID, "pushScopeId"), _defineProperty(_helperNameMap, POP_SCOPE_ID, "popScopeId"), _defineProperty(_helperNameMap, WITH_SCOPE_ID, "withScopeId"), _defineProperty(_helperNameMap, WITH_CTX, "withCtx"), _defineProperty(_helperNameMap, UNREF, "unref"), _defineProperty(_helperNameMap, IS_REF, "isRef"), _helperNameMap);

function registerRuntimeHelpers(helpers) {
  Object.getOwnPropertySymbols(helpers).forEach(function (s) {
    helperNameMap[s] = helpers[s];
  });
} // AST Utilities ---------------------------------------------------------------
// Some expressions, e.g. sequence and conditional expressions, are never
// associated with template nodes, so their source locations are just a stub.
// Container types like CompoundExpression also don't need a real location.


var locStub = {
  source: '',
  start: {
    line: 1,
    column: 1,
    offset: 0
  },
  end: {
    line: 1,
    column: 1,
    offset: 0
  }
};

function createRoot(children) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 0
    /* ROOT */
    ,
    children: children,
    helpers: [],
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: undefined,
    loc: loc
  };
}

function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives) {
  var isBlock = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var disableTracking = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
  var loc = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : locStub;

  if (context) {
    if (isBlock) {
      context.helper(OPEN_BLOCK);
      context.helper(CREATE_BLOCK);
    } else {
      context.helper(CREATE_VNODE);
    }

    if (directives) {
      context.helper(WITH_DIRECTIVES);
    }
  }

  return {
    type: 13
    /* VNODE_CALL */
    ,
    tag: tag,
    props: props,
    children: children,
    patchFlag: patchFlag,
    dynamicProps: dynamicProps,
    directives: directives,
    isBlock: isBlock,
    disableTracking: disableTracking,
    loc: loc
  };
}

function createArrayExpression(elements) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 17
    /* JS_ARRAY_EXPRESSION */
    ,
    loc: loc,
    elements: elements
  };
}

function createObjectExpression(properties) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 15
    /* JS_OBJECT_EXPRESSION */
    ,
    loc: loc,
    properties: properties
  };
}

function createObjectProperty(key, value) {
  return {
    type: 16
    /* JS_PROPERTY */
    ,
    loc: locStub,
    key: Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isString"])(key) ? createSimpleExpression(key, true) : key,
    value: value
  };
}

function createSimpleExpression(content, isStatic)
/* NOT_CONSTANT */
{
  var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : locStub;
  var constType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return {
    type: 4
    /* SIMPLE_EXPRESSION */
    ,
    loc: loc,
    content: content,
    isStatic: isStatic,
    constType: isStatic ? 3
    /* CAN_STRINGIFY */
    : constType
  };
}

function createInterpolation(content, loc) {
  return {
    type: 5
    /* INTERPOLATION */
    ,
    loc: loc,
    content: Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isString"])(content) ? createSimpleExpression(content, false, loc) : content
  };
}

function createCompoundExpression(children) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 8
    /* COMPOUND_EXPRESSION */
    ,
    loc: loc,
    children: children
  };
}

function createCallExpression(callee) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : locStub;
  return {
    type: 14
    /* JS_CALL_EXPRESSION */
    ,
    loc: loc,
    callee: callee,
    arguments: args
  };
}

function createFunctionExpression(params) {
  var returns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var newline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSlot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var loc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : locStub;
  return {
    type: 18
    /* JS_FUNCTION_EXPRESSION */
    ,
    params: params,
    returns: returns,
    newline: newline,
    isSlot: isSlot,
    loc: loc
  };
}

function createConditionalExpression(test, consequent, alternate) {
  var newline = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return {
    type: 19
    /* JS_CONDITIONAL_EXPRESSION */
    ,
    test: test,
    consequent: consequent,
    alternate: alternate,
    newline: newline,
    loc: locStub
  };
}

function createCacheExpression(index, value) {
  var isVNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    type: 20
    /* JS_CACHE_EXPRESSION */
    ,
    index: index,
    value: value,
    isVNode: isVNode,
    loc: locStub
  };
}

function createBlockStatement(body) {
  return {
    type: 21
    /* JS_BLOCK_STATEMENT */
    ,
    body: body,
    loc: locStub
  };
}

function createTemplateLiteral(elements) {
  return {
    type: 22
    /* JS_TEMPLATE_LITERAL */
    ,
    elements: elements,
    loc: locStub
  };
}

function createIfStatement(test, consequent, alternate) {
  return {
    type: 23
    /* JS_IF_STATEMENT */
    ,
    test: test,
    consequent: consequent,
    alternate: alternate,
    loc: locStub
  };
}

function createAssignmentExpression(left, right) {
  return {
    type: 24
    /* JS_ASSIGNMENT_EXPRESSION */
    ,
    left: left,
    right: right,
    loc: locStub
  };
}

function createSequenceExpression(expressions) {
  return {
    type: 25
    /* JS_SEQUENCE_EXPRESSION */
    ,
    expressions: expressions,
    loc: locStub
  };
}

function createReturnStatement(returns) {
  return {
    type: 26
    /* JS_RETURN_STATEMENT */
    ,
    returns: returns,
    loc: locStub
  };
}

var isStaticExp = function isStaticExp(p) {
  return p.type === 4
  /* SIMPLE_EXPRESSION */
  && p.isStatic;
};

var isBuiltInType = function isBuiltInType(tag, expected) {
  return tag === expected || tag === Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["hyphenate"])(expected);
};

function isCoreComponent(tag) {
  if (isBuiltInType(tag, 'Teleport')) {
    return TELEPORT;
  } else if (isBuiltInType(tag, 'Suspense')) {
    return SUSPENSE;
  } else if (isBuiltInType(tag, 'KeepAlive')) {
    return KEEP_ALIVE;
  } else if (isBuiltInType(tag, 'BaseTransition')) {
    return BASE_TRANSITION;
  }
}

var nonIdentifierRE = /^\d|[^\$\w]/;

var isSimpleIdentifier = function isSimpleIdentifier(name) {
  return !nonIdentifierRE.test(name);
};

var memberExpRE = /^[A-Za-z_$][\w$]*(?:\s*\.\s*[A-Za-z_$][\w$]*|\[[^\]]+\])*$/;

var isMemberExpression = function isMemberExpression(path) {
  if (!path) return false;
  return memberExpRE.test(path.trim());
};

function getInnerRange(loc, offset, length) {
  var source = loc.source.substr(offset, length);
  var newLoc = {
    source: source,
    start: advancePositionWithClone(loc.start, loc.source, offset),
    end: loc.end
  };

  if (length != null) {
    newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
  }

  return newLoc;
}

function advancePositionWithClone(pos, source) {
  var numberOfCharacters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  return advancePositionWithMutation(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, pos), source, numberOfCharacters);
} // advance by mutation without cloning (for performance reasons), since this
// gets called a lot in the parser


function advancePositionWithMutation(pos, source) {
  var numberOfCharacters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  var linesCount = 0;
  var lastNewLinePos = -1;

  for (var i = 0; i < numberOfCharacters; i++) {
    if (source.charCodeAt(i) === 10
    /* newline char code */
    ) {
        linesCount++;
        lastNewLinePos = i;
      }
  }

  pos.offset += numberOfCharacters;
  pos.line += linesCount;
  pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
  return pos;
}

function assert(condition, msg) {
  /* istanbul ignore if */
  if (!condition) {
    throw new Error(msg || "unexpected compiler condition");
  }
}

function findDir(node, name) {
  var allowEmpty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 7
    /* DIRECTIVE */
    && (allowEmpty || p.exp) && (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isString"])(name) ? p.name === name : name.test(p.name))) {
      return p;
    }
  }
}

function findProp(node, name) {
  var dynamicOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var allowEmpty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 6
    /* ATTRIBUTE */
    ) {
        if (dynamicOnly) continue;

        if (p.name === name && (p.value || allowEmpty)) {
          return p;
        }
      } else if (p.name === 'bind' && (p.exp || allowEmpty) && isBindKey(p.arg, name)) {
      return p;
    }
  }
}

function isBindKey(arg, name) {
  return !!(arg && isStaticExp(arg) && arg.content === name);
}

function hasDynamicKeyVBind(node) {
  return node.props.some(function (p) {
    return p.type === 7
    /* DIRECTIVE */
    && p.name === 'bind' && (!p.arg || // v-bind="obj"
    p.arg.type !== 4
    /* SIMPLE_EXPRESSION */
    || // v-bind:[_ctx.foo]
    !p.arg.isStatic);
  } // v-bind:[foo]
  );
}

function isText(node) {
  return node.type === 5
  /* INTERPOLATION */
  || node.type === 2
  /* TEXT */
  ;
}

function isVSlot(p) {
  return p.type === 7
  /* DIRECTIVE */
  && p.name === 'slot';
}

function isTemplateNode(node) {
  return node.type === 1
  /* ELEMENT */
  && node.tagType === 3
  /* TEMPLATE */
  ;
}

function isSlotOutlet(node) {
  return node.type === 1
  /* ELEMENT */
  && node.tagType === 2
  /* SLOT */
  ;
}

function injectProp(node, prop, context) {
  var propsWithInjection;
  var props = node.type === 13
  /* VNODE_CALL */
  ? node.props : node.arguments[2];

  if (props == null || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isString"])(props)) {
    propsWithInjection = createObjectExpression([prop]);
  } else if (props.type === 14
  /* JS_CALL_EXPRESSION */
  ) {
      // merged props... add ours
      // only inject key to object literal if it's the first argument so that
      // if doesn't override user provided keys
      var first = props.arguments[0];

      if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isString"])(first) && first.type === 15
      /* JS_OBJECT_EXPRESSION */
      ) {
          first.properties.unshift(prop);
        } else {
        if (props.callee === TO_HANDLERS) {
          // #2366
          propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]);
        } else {
          props.arguments.unshift(createObjectExpression([prop]));
        }
      }

      !propsWithInjection && (propsWithInjection = props);
    } else if (props.type === 15
  /* JS_OBJECT_EXPRESSION */
  ) {
      var alreadyExists = false; // check existing key to avoid overriding user provided keys

      if (prop.key.type === 4
      /* SIMPLE_EXPRESSION */
      ) {
          var propKeyName = prop.key.content;
          alreadyExists = props.properties.some(function (p) {
            return p.key.type === 4
            /* SIMPLE_EXPRESSION */
            && p.key.content === propKeyName;
          });
        }

      if (!alreadyExists) {
        props.properties.unshift(prop);
      }

      propsWithInjection = props;
    } else {
    // single v-bind with expression, return a merged replacement
    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]);
  }

  if (node.type === 13
  /* VNODE_CALL */
  ) {
      node.props = propsWithInjection;
    } else {
    node.arguments[2] = propsWithInjection;
  }
}

function toValidAssetId(name, type) {
  return "_".concat(type, "_").concat(name.replace(/[^\w]/g, '_'));
} // Check if a node contains expressions that reference current context scope ids


function hasScopeRef(node, ids) {
  if (!node || Object.keys(ids).length === 0) {
    return false;
  }

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
      for (var i = 0; i < node.props.length; i++) {
        var p = node.props[i];

        if (p.type === 7
        /* DIRECTIVE */
        && (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) {
          return true;
        }
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 11
    /* FOR */
    :
      if (hasScopeRef(node.source, ids)) {
        return true;
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 9
    /* IF */
    :
      return node.branches.some(function (b) {
        return hasScopeRef(b, ids);
      });

    case 10
    /* IF_BRANCH */
    :
      if (hasScopeRef(node.condition, ids)) {
        return true;
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 4
    /* SIMPLE_EXPRESSION */
    :
      return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];

    case 8
    /* COMPOUND_EXPRESSION */
    :
      return node.children.some(function (c) {
        return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isObject"])(c) && hasScopeRef(c, ids);
      });

    case 5
    /* INTERPOLATION */
    :
    case 12
    /* TEXT_CALL */
    :
      return hasScopeRef(node.content, ids);

    case 2
    /* TEXT */
    :
    case 3
    /* COMMENT */
    :
      return false;

    default:
      if (true) ;
      return false;
  }
} // The default decoder only provides escapes for characters reserved as part of
// the template syntax, and is only used if the custom renderer did not provide
// a platform-specific decoder.


var decodeRE = /&(gt|lt|amp|apos|quot);/g;
var decodeMap = {
  gt: '>',
  lt: '<',
  amp: '&',
  apos: "'",
  quot: '"'
};
var defaultParserOptions = {
  delimiters: ["{{", "}}"],
  getNamespace: function getNamespace() {
    return 0;
  }
  /* HTML */
  ,
  getTextMode: function getTextMode() {
    return 0;
  }
  /* DATA */
  ,
  isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_0__["NO"],
  isPreTag: _vue_shared__WEBPACK_IMPORTED_MODULE_0__["NO"],
  isCustomElement: _vue_shared__WEBPACK_IMPORTED_MODULE_0__["NO"],
  decodeEntities: function decodeEntities(rawText) {
    return rawText.replace(decodeRE, function (_, p1) {
      return decodeMap[p1];
    });
  },
  onError: defaultOnError,
  comments: false
};

function baseParse(content) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var context = createParserContext(content, options);
  var start = getCursor(context);
  return createRoot(parseChildren(context, 0
  /* DATA */
  , []), getSelection(context, start));
}

function createParserContext(content, rawOptions) {
  var options = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, defaultParserOptions);

  for (var key in rawOptions) {
    // @ts-ignore
    options[key] = rawOptions[key] || defaultParserOptions[key];
  }

  return {
    options: options,
    column: 1,
    line: 1,
    offset: 0,
    originalSource: content,
    source: content,
    inPre: false,
    inVPre: false
  };
}

function parseChildren(context, mode, ancestors) {
  var parent = last(ancestors);
  var ns = parent ? parent.ns : 0
  /* HTML */
  ;
  var nodes = [];

  while (!isEnd(context, mode, ancestors)) {
    var s = context.source;
    var node = undefined;

    if (mode === 0
    /* DATA */
    || mode === 1
    /* RCDATA */
    ) {
        if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
          // '{{'
          node = parseInterpolation(context, mode);
        } else if (mode === 0
        /* DATA */
        && s[0] === '<') {
          // https://html.spec.whatwg.org/multipage/parsing.html#tag-open-state
          if (s.length === 1) {
            emitError(context, 5
            /* EOF_BEFORE_TAG_NAME */
            , 1);
          } else if (s[1] === '!') {
            // https://html.spec.whatwg.org/multipage/parsing.html#markup-declaration-open-state
            if (startsWith(s, '<!--')) {
              node = parseComment(context);
            } else if (startsWith(s, '<!DOCTYPE')) {
              // Ignore DOCTYPE by a limitation.
              node = parseBogusComment(context);
            } else if (startsWith(s, '<![CDATA[')) {
              if (ns !== 0
              /* HTML */
              ) {
                  node = parseCDATA(context, ancestors);
                } else {
                emitError(context, 1
                /* CDATA_IN_HTML_CONTENT */
                );
                node = parseBogusComment(context);
              }
            } else {
              emitError(context, 11
              /* INCORRECTLY_OPENED_COMMENT */
              );
              node = parseBogusComment(context);
            }
          } else if (s[1] === '/') {
            // https://html.spec.whatwg.org/multipage/parsing.html#end-tag-open-state
            if (s.length === 2) {
              emitError(context, 5
              /* EOF_BEFORE_TAG_NAME */
              , 2);
            } else if (s[2] === '>') {
              emitError(context, 14
              /* MISSING_END_TAG_NAME */
              , 2);
              advanceBy(context, 3);
              continue;
            } else if (/[a-z]/i.test(s[2])) {
              emitError(context, 23
              /* X_INVALID_END_TAG */
              );
              parseTag(context, 1
              /* End */
              , parent);
              continue;
            } else {
              emitError(context, 12
              /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
              , 2);
              node = parseBogusComment(context);
            }
          } else if (/[a-z]/i.test(s[1])) {
            node = parseElement(context, ancestors);
          } else if (s[1] === '?') {
            emitError(context, 21
            /* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
            , 1);
            node = parseBogusComment(context);
          } else {
            emitError(context, 12
            /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
            , 1);
          }
        }
      }

    if (!node) {
      node = parseText(context, mode);
    }

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isArray"])(node)) {
      for (var i = 0; i < node.length; i++) {
        pushNode(nodes, node[i]);
      }
    } else {
      pushNode(nodes, node);
    }
  } // Whitespace management for more efficient output
  // (same as v2 whitespace: 'condense')


  var removedWhitespace = false;

  if (mode !== 2
  /* RAWTEXT */
  ) {
      for (var _i = 0; _i < nodes.length; _i++) {
        var _node = nodes[_i];

        if (!context.inPre && _node.type === 2
        /* TEXT */
        ) {
            if (!/[^\t\r\n\f ]/.test(_node.content)) {
              var prev = nodes[_i - 1];
              var next = nodes[_i + 1]; // If:
              // - the whitespace is the first or last node, or:
              // - the whitespace is adjacent to a comment, or:
              // - the whitespace is between two elements AND contains newline
              // Then the whitespace is ignored.

              if (!prev || !next || prev.type === 3
              /* COMMENT */
              || next.type === 3
              /* COMMENT */
              || prev.type === 1
              /* ELEMENT */
              && next.type === 1
              /* ELEMENT */
              && /[\r\n]/.test(_node.content)) {
                removedWhitespace = true;
                nodes[_i] = null;
              } else {
                // Otherwise, condensed consecutive whitespace inside the text
                // down to a single space
                _node.content = ' ';
              }
            } else {
              _node.content = _node.content.replace(/[\t\r\n\f ]+/g, ' ');
            }
          } // also remove comment nodes in prod by default


        if (false) {}
      }

      if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
        // remove leading newline per html spec
        // https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element
        var first = nodes[0];

        if (first && first.type === 2
        /* TEXT */
        ) {
            first.content = first.content.replace(/^\r?\n/, '');
          }
      }
    }

  return removedWhitespace ? nodes.filter(Boolean) : nodes;
}

function pushNode(nodes, node) {
  if (node.type === 2
  /* TEXT */
  ) {
      var prev = last(nodes); // Merge if both this and the previous node are text and those are
      // consecutive. This happens for cases like "a < b".

      if (prev && prev.type === 2
      /* TEXT */
      && prev.loc.end.offset === node.loc.start.offset) {
        prev.content += node.content;
        prev.loc.end = node.loc.end;
        prev.loc.source += node.loc.source;
        return;
      }
    }

  nodes.push(node);
}

function parseCDATA(context, ancestors) {
  advanceBy(context, 9);
  var nodes = parseChildren(context, 3
  /* CDATA */
  , ancestors);

  if (context.source.length === 0) {
    emitError(context, 6
    /* EOF_IN_CDATA */
    );
  } else {
    advanceBy(context, 3);
  }

  return nodes;
}

function parseComment(context) {
  var start = getCursor(context);
  var content; // Regular comment.

  var match = /--(\!)?>/.exec(context.source);

  if (!match) {
    content = context.source.slice(4);
    advanceBy(context, context.source.length);
    emitError(context, 7
    /* EOF_IN_COMMENT */
    );
  } else {
    if (match.index <= 3) {
      emitError(context, 0
      /* ABRUPT_CLOSING_OF_EMPTY_COMMENT */
      );
    }

    if (match[1]) {
      emitError(context, 10
      /* INCORRECTLY_CLOSED_COMMENT */
      );
    }

    content = context.source.slice(4, match.index); // Advancing with reporting nested comments.

    var s = context.source.slice(0, match.index);
    var prevIndex = 1,
        nestedIndex = 0;

    while ((nestedIndex = s.indexOf('<!--', prevIndex)) !== -1) {
      advanceBy(context, nestedIndex - prevIndex + 1);

      if (nestedIndex + 4 < s.length) {
        emitError(context, 16
        /* NESTED_COMMENT */
        );
      }

      prevIndex = nestedIndex + 1;
    }

    advanceBy(context, match.index + match[0].length - prevIndex + 1);
  }

  return {
    type: 3
    /* COMMENT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}

function parseBogusComment(context) {
  var start = getCursor(context);
  var contentStart = context.source[1] === '?' ? 1 : 2;
  var content;
  var closeIndex = context.source.indexOf('>');

  if (closeIndex === -1) {
    content = context.source.slice(contentStart);
    advanceBy(context, context.source.length);
  } else {
    content = context.source.slice(contentStart, closeIndex);
    advanceBy(context, closeIndex + 1);
  }

  return {
    type: 3
    /* COMMENT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}

function parseElement(context, ancestors) {
  // Start tag.
  var wasInPre = context.inPre;
  var wasInVPre = context.inVPre;
  var parent = last(ancestors);
  var element = parseTag(context, 0
  /* Start */
  , parent);
  var isPreBoundary = context.inPre && !wasInPre;
  var isVPreBoundary = context.inVPre && !wasInVPre;

  if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
    return element;
  } // Children.


  ancestors.push(element);
  var mode = context.options.getTextMode(element, parent);
  var children = parseChildren(context, mode, ancestors);
  ancestors.pop();
  element.children = children; // End tag.

  if (startsWithEndTagOpen(context.source, element.tag)) {
    parseTag(context, 1
    /* End */
    , parent);
  } else {
    emitError(context, 24
    /* X_MISSING_END_TAG */
    , 0, element.loc.start);

    if (context.source.length === 0 && element.tag.toLowerCase() === 'script') {
      var first = children[0];

      if (first && startsWith(first.loc.source, '<!--')) {
        emitError(context, 8
        /* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
        );
      }
    }
  }

  element.loc = getSelection(context, element.loc.start);

  if (isPreBoundary) {
    context.inPre = false;
  }

  if (isVPreBoundary) {
    context.inVPre = false;
  }

  return element;
}

var isSpecialTemplateDirective = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["makeMap"])("if,else,else-if,for,slot");
/**
 * Parse a tag (E.g. `<div id=a>`) with that type (start tag or end tag).
 */

function parseTag(context, type, parent) {
  // Tag open.
  var start = getCursor(context);
  var match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
  var tag = match[1];
  var ns = context.options.getNamespace(tag, parent);
  advanceBy(context, match[0].length);
  advanceSpaces(context); // save current state in case we need to re-parse attributes with v-pre

  var cursor = getCursor(context);
  var currentSource = context.source; // Attributes.

  var props = parseAttributes(context, type); // check <pre> tag

  if (context.options.isPreTag(tag)) {
    context.inPre = true;
  } // check v-pre


  if (!context.inVPre && props.some(function (p) {
    return p.type === 7
    /* DIRECTIVE */
    && p.name === 'pre';
  })) {
    context.inVPre = true; // reset context

    Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["extend"])(context, cursor);
    context.source = currentSource; // re-parse attrs and filter out v-pre itself

    props = parseAttributes(context, type).filter(function (p) {
      return p.name !== 'v-pre';
    });
  } // Tag close.


  var isSelfClosing = false;

  if (context.source.length === 0) {
    emitError(context, 9
    /* EOF_IN_TAG */
    );
  } else {
    isSelfClosing = startsWith(context.source, '/>');

    if (type === 1
    /* End */
    && isSelfClosing) {
      emitError(context, 4
      /* END_TAG_WITH_TRAILING_SOLIDUS */
      );
    }

    advanceBy(context, isSelfClosing ? 2 : 1);
  }

  var tagType = 0
  /* ELEMENT */
  ;
  var options = context.options;

  if (!context.inVPre && !options.isCustomElement(tag)) {
    var hasVIs = props.some(function (p) {
      return p.type === 7
      /* DIRECTIVE */
      && p.name === 'is';
    });

    if (options.isNativeTag && !hasVIs) {
      if (!options.isNativeTag(tag)) tagType = 1
      /* COMPONENT */
      ;
    } else if (hasVIs || isCoreComponent(tag) || options.isBuiltInComponent && options.isBuiltInComponent(tag) || /^[A-Z]/.test(tag) || tag === 'component') {
      tagType = 1
      /* COMPONENT */
      ;
    }

    if (tag === 'slot') {
      tagType = 2
      /* SLOT */
      ;
    } else if (tag === 'template' && props.some(function (p) {
      return p.type === 7
      /* DIRECTIVE */
      && isSpecialTemplateDirective(p.name);
    })) {
      tagType = 3
      /* TEMPLATE */
      ;
    }
  }

  return {
    type: 1
    /* ELEMENT */
    ,
    ns: ns,
    tag: tag,
    tagType: tagType,
    props: props,
    isSelfClosing: isSelfClosing,
    children: [],
    loc: getSelection(context, start),
    codegenNode: undefined // to be created during transform phase

  };
}

function parseAttributes(context, type) {
  var props = [];
  var attributeNames = new Set();

  while (context.source.length > 0 && !startsWith(context.source, '>') && !startsWith(context.source, '/>')) {
    if (startsWith(context.source, '/')) {
      emitError(context, 22
      /* UNEXPECTED_SOLIDUS_IN_TAG */
      );
      advanceBy(context, 1);
      advanceSpaces(context);
      continue;
    }

    if (type === 1
    /* End */
    ) {
        emitError(context, 3
        /* END_TAG_WITH_ATTRIBUTES */
        );
      }

    var attr = parseAttribute(context, attributeNames);

    if (type === 0
    /* Start */
    ) {
        props.push(attr);
      }

    if (/^[^\t\r\n\f />]/.test(context.source)) {
      emitError(context, 15
      /* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
      );
    }

    advanceSpaces(context);
  }

  return props;
}

function parseAttribute(context, nameSet) {
  // Name.
  var start = getCursor(context);
  var match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
  var name = match[0];

  if (nameSet.has(name)) {
    emitError(context, 2
    /* DUPLICATE_ATTRIBUTE */
    );
  }

  nameSet.add(name);

  if (name[0] === '=') {
    emitError(context, 19
    /* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
    );
  }

  {
    var pattern = /["'<]/g;
    var m;

    while (m = pattern.exec(name)) {
      emitError(context, 17
      /* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
      , m.index);
    }
  }
  advanceBy(context, name.length); // Value

  var value = undefined;

  if (/^[\t\r\n\f ]*=/.test(context.source)) {
    advanceSpaces(context);
    advanceBy(context, 1);
    advanceSpaces(context);
    value = parseAttributeValue(context);

    if (!value) {
      emitError(context, 13
      /* MISSING_ATTRIBUTE_VALUE */
      );
    }
  }

  var loc = getSelection(context, start);

  if (!context.inVPre && /^(v-|:|@|#)/.test(name)) {
    var _match = /(?:^v-([a-z0-9-]+))?(?:(?::|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);

    var dirName = _match[1] || (startsWith(name, ':') ? 'bind' : startsWith(name, '@') ? 'on' : 'slot');
    var arg;

    if (_match[2]) {
      var isSlot = dirName === 'slot';
      var startOffset = name.indexOf(_match[2]);

      var _loc = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + _match[2].length + (isSlot && _match[3] || '').length));

      var content = _match[2];
      var isStatic = true;

      if (content.startsWith('[')) {
        isStatic = false;

        if (!content.endsWith(']')) {
          emitError(context, 26
          /* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
          );
        }

        content = content.substr(1, content.length - 2);
      } else if (isSlot) {
        // #1241 special case for v-slot: vuetify relies extensively on slot
        // names containing dots. v-slot doesn't have any modifiers and Vue 2.x
        // supports such usage so we are keeping it consistent with 2.x.
        content += _match[3] || '';
      }

      arg = {
        type: 4
        /* SIMPLE_EXPRESSION */
        ,
        content: content,
        isStatic: isStatic,
        constType: isStatic ? 3
        /* CAN_STRINGIFY */
        : 0
        /* NOT_CONSTANT */
        ,
        loc: _loc
      };
    }

    if (value && value.isQuoted) {
      var valueLoc = value.loc;
      valueLoc.start.offset++;
      valueLoc.start.column++;
      valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
      valueLoc.source = valueLoc.source.slice(1, -1);
    }

    return {
      type: 7
      /* DIRECTIVE */
      ,
      name: dirName,
      exp: value && {
        type: 4
        /* SIMPLE_EXPRESSION */
        ,
        content: value.content,
        isStatic: false,
        // Treat as non-constant by default. This can be potentially set to
        // other values by `transformExpression` to make it eligible for hoisting.
        constType: 0
        /* NOT_CONSTANT */
        ,
        loc: value.loc
      },
      arg: arg,
      modifiers: _match[3] ? _match[3].substr(1).split('.') : [],
      loc: loc
    };
  }

  return {
    type: 6
    /* ATTRIBUTE */
    ,
    name: name,
    value: value && {
      type: 2
      /* TEXT */
      ,
      content: value.content,
      loc: value.loc
    },
    loc: loc
  };
}

function parseAttributeValue(context) {
  var start = getCursor(context);
  var content;
  var quote = context.source[0];
  var isQuoted = quote === "\"" || quote === "'";

  if (isQuoted) {
    // Quoted value.
    advanceBy(context, 1);
    var endIndex = context.source.indexOf(quote);

    if (endIndex === -1) {
      content = parseTextData(context, context.source.length, 4
      /* ATTRIBUTE_VALUE */
      );
    } else {
      content = parseTextData(context, endIndex, 4
      /* ATTRIBUTE_VALUE */
      );
      advanceBy(context, 1);
    }
  } else {
    // Unquoted
    var match = /^[^\t\r\n\f >]+/.exec(context.source);

    if (!match) {
      return undefined;
    }

    var unexpectedChars = /["'<=`]/g;
    var m;

    while (m = unexpectedChars.exec(match[0])) {
      emitError(context, 18
      /* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
      , m.index);
    }

    content = parseTextData(context, match[0].length, 4
    /* ATTRIBUTE_VALUE */
    );
  }

  return {
    content: content,
    isQuoted: isQuoted,
    loc: getSelection(context, start)
  };
}

function parseInterpolation(context, mode) {
  var _context$options$deli = _slicedToArray(context.options.delimiters, 2),
      open = _context$options$deli[0],
      close = _context$options$deli[1];

  var closeIndex = context.source.indexOf(close, open.length);

  if (closeIndex === -1) {
    emitError(context, 25
    /* X_MISSING_INTERPOLATION_END */
    );
    return undefined;
  }

  var start = getCursor(context);
  advanceBy(context, open.length);
  var innerStart = getCursor(context);
  var innerEnd = getCursor(context);
  var rawContentLength = closeIndex - open.length;
  var rawContent = context.source.slice(0, rawContentLength);
  var preTrimContent = parseTextData(context, rawContentLength, mode);
  var content = preTrimContent.trim();
  var startOffset = preTrimContent.indexOf(content);

  if (startOffset > 0) {
    advancePositionWithMutation(innerStart, rawContent, startOffset);
  }

  var endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
  advancePositionWithMutation(innerEnd, rawContent, endOffset);
  advanceBy(context, close.length);
  return {
    type: 5
    /* INTERPOLATION */
    ,
    content: {
      type: 4
      /* SIMPLE_EXPRESSION */
      ,
      isStatic: false,
      // Set `isConstant` to false by default and will decide in transformExpression
      constType: 0
      /* NOT_CONSTANT */
      ,
      content: content,
      loc: getSelection(context, innerStart, innerEnd)
    },
    loc: getSelection(context, start)
  };
}

function parseText(context, mode) {
  var endTokens = ['<', context.options.delimiters[0]];

  if (mode === 3
  /* CDATA */
  ) {
      endTokens.push(']]>');
    }

  var endIndex = context.source.length;

  for (var i = 0; i < endTokens.length; i++) {
    var index = context.source.indexOf(endTokens[i], 1);

    if (index !== -1 && endIndex > index) {
      endIndex = index;
    }
  }

  var start = getCursor(context);
  var content = parseTextData(context, endIndex, mode);
  return {
    type: 2
    /* TEXT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}
/**
 * Get text data with a given length from the current location.
 * This translates HTML entities in the text data.
 */


function parseTextData(context, length, mode) {
  var rawText = context.source.slice(0, length);
  advanceBy(context, length);

  if (mode === 2
  /* RAWTEXT */
  || mode === 3
  /* CDATA */
  || rawText.indexOf('&') === -1) {
    return rawText;
  } else {
    // DATA or RCDATA containing "&"". Entity decoding required.
    return context.options.decodeEntities(rawText, mode === 4
    /* ATTRIBUTE_VALUE */
    );
  }
}

function getCursor(context) {
  var column = context.column,
      line = context.line,
      offset = context.offset;
  return {
    column: column,
    line: line,
    offset: offset
  };
}

function getSelection(context, start, end) {
  end = end || getCursor(context);
  return {
    start: start,
    end: end,
    source: context.originalSource.slice(start.offset, end.offset)
  };
}

function last(xs) {
  return xs[xs.length - 1];
}

function startsWith(source, searchString) {
  return source.startsWith(searchString);
}

function advanceBy(context, numberOfCharacters) {
  var source = context.source;
  advancePositionWithMutation(context, source, numberOfCharacters);
  context.source = source.slice(numberOfCharacters);
}

function advanceSpaces(context) {
  var match = /^[\t\r\n\f ]+/.exec(context.source);

  if (match) {
    advanceBy(context, match[0].length);
  }
}

function getNewPosition(context, start, numberOfCharacters) {
  return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
}

function emitError(context, code, offset) {
  var loc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getCursor(context);

  if (offset) {
    loc.offset += offset;
    loc.column += offset;
  }

  context.options.onError(createCompilerError(code, {
    start: loc,
    end: loc,
    source: ''
  }));
}

function isEnd(context, mode, ancestors) {
  var s = context.source;

  switch (mode) {
    case 0
    /* DATA */
    :
      if (startsWith(s, '</')) {
        //TODO: probably bad performance
        for (var i = ancestors.length - 1; i >= 0; --i) {
          if (startsWithEndTagOpen(s, ancestors[i].tag)) {
            return true;
          }
        }
      }

      break;

    case 1
    /* RCDATA */
    :
    case 2
    /* RAWTEXT */
    :
      {
        var parent = last(ancestors);

        if (parent && startsWithEndTagOpen(s, parent.tag)) {
          return true;
        }

        break;
      }

    case 3
    /* CDATA */
    :
      if (startsWith(s, ']]>')) {
        return true;
      }

      break;
  }

  return !s;
}

function startsWithEndTagOpen(source, tag) {
  return startsWith(source, '</') && source.substr(2, tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || '>');
}

function hoistStatic(root, context) {
  walk(root, context, // Root node is unfortunately non-hoistable due to potential parent
  // fallthrough attributes.
  isSingleElementRoot(root, root.children[0]));
}

function isSingleElementRoot(root, child) {
  var children = root.children;
  return children.length === 1 && child.type === 1
  /* ELEMENT */
  && !isSlotOutlet(child);
}

function walk(node, context) {
  var doNotHoistNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var hasHoistedNode = false; // Some transforms, e.g. transformAssetUrls from @vue/compiler-sfc, replaces
  // static bindings with expressions. These expressions are guaranteed to be
  // constant so they are still eligible for hoisting, but they are only
  // available at runtime and therefore cannot be evaluated ahead of time.
  // This is only a concern for pre-stringification (via transformHoist by
  // @vue/compiler-dom), but doing it here allows us to perform only one full
  // walk of the AST and allow `stringifyStatic` to stop walking as soon as its
  // stringficiation threshold is met.

  var canStringify = true;
  var children = node.children;

  for (var i = 0; i < children.length; i++) {
    var child = children[i]; // only plain elements & text calls are eligible for hoisting.

    if (child.type === 1
    /* ELEMENT */
    && child.tagType === 0
    /* ELEMENT */
    ) {
        var constantType = doNotHoistNode ? 0
        /* NOT_CONSTANT */
        : getConstantType(child, context);

        if (constantType > 0
        /* NOT_CONSTANT */
        ) {
            if (constantType < 3
            /* CAN_STRINGIFY */
            ) {
                canStringify = false;
              }

            if (constantType >= 2
            /* CAN_HOIST */
            ) {
                child.codegenNode.patchFlag = -1
                /* HOISTED */
                + ( true ? " /* HOISTED */" : undefined);
                child.codegenNode = context.hoist(child.codegenNode);
                hasHoistedNode = true;
                continue;
              }
          } else {
          // node may contain dynamic children, but its props may be eligible for
          // hoisting.
          var codegenNode = child.codegenNode;

          if (codegenNode.type === 13
          /* VNODE_CALL */
          ) {
              var flag = getPatchFlag(codegenNode);

              if ((!flag || flag === 512
              /* NEED_PATCH */
              || flag === 1
              /* TEXT */
              ) && getGeneratedPropsConstantType(child, context) >= 2
              /* CAN_HOIST */
              ) {
                  var props = getNodeProps(child);

                  if (props) {
                    codegenNode.props = context.hoist(props);
                  }
                }
            }
        }
      } else if (child.type === 12
    /* TEXT_CALL */
    ) {
        var contentType = getConstantType(child.content, context);

        if (contentType > 0) {
          if (contentType < 3
          /* CAN_STRINGIFY */
          ) {
              canStringify = false;
            }

          if (contentType >= 2
          /* CAN_HOIST */
          ) {
              child.codegenNode = context.hoist(child.codegenNode);
              hasHoistedNode = true;
            }
        }
      } // walk further


    if (child.type === 1
    /* ELEMENT */
    ) {
        walk(child, context);
      } else if (child.type === 11
    /* FOR */
    ) {
        // Do not hoist v-for single child because it has to be a block
        walk(child, context, child.children.length === 1);
      } else if (child.type === 9
    /* IF */
    ) {
        for (var _i2 = 0; _i2 < child.branches.length; _i2++) {
          // Do not hoist v-if single child because it has to be a block
          walk(child.branches[_i2], context, child.branches[_i2].children.length === 1);
        }
      }
  }

  if (canStringify && hasHoistedNode && context.transformHoist) {
    context.transformHoist(children, context, node);
  }
}

function getConstantType(node, context) {
  var constantCache = context.constantCache;

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
      if (node.tagType !== 0
      /* ELEMENT */
      ) {
          return 0
          /* NOT_CONSTANT */
          ;
        }

      var cached = constantCache.get(node);

      if (cached !== undefined) {
        return cached;
      }

      var codegenNode = node.codegenNode;

      if (codegenNode.type !== 13
      /* VNODE_CALL */
      ) {
          return 0
          /* NOT_CONSTANT */
          ;
        }

      var flag = getPatchFlag(codegenNode);

      if (!flag) {
        var _returnType = 3
        /* CAN_STRINGIFY */
        ; // Element itself has no patch flag. However we still need to check:
        // 1. Even for a node with no patch flag, it is possible for it to contain
        // non-hoistable expressions that refers to scope variables, e.g. compiler
        // injected keys or cached event handlers. Therefore we need to always
        // check the codegenNode's props to be sure.

        var generatedPropsType = getGeneratedPropsConstantType(node, context);

        if (generatedPropsType === 0
        /* NOT_CONSTANT */
        ) {
            constantCache.set(node, 0
            /* NOT_CONSTANT */
            );
            return 0
            /* NOT_CONSTANT */
            ;
          }

        if (generatedPropsType < _returnType) {
          _returnType = generatedPropsType;
        } // 2. its children.


        for (var i = 0; i < node.children.length; i++) {
          var childType = getConstantType(node.children[i], context);

          if (childType === 0
          /* NOT_CONSTANT */
          ) {
              constantCache.set(node, 0
              /* NOT_CONSTANT */
              );
              return 0
              /* NOT_CONSTANT */
              ;
            }

          if (childType < _returnType) {
            _returnType = childType;
          }
        } // 3. if the type is not already CAN_SKIP_PATCH which is the lowest non-0
        // type, check if any of the props can cause the type to be lowered
        // we can skip can_patch because it's guaranteed by the absence of a
        // patchFlag.


        if (_returnType > 1
        /* CAN_SKIP_PATCH */
        ) {
            for (var _i3 = 0; _i3 < node.props.length; _i3++) {
              var p = node.props[_i3];

              if (p.type === 7
              /* DIRECTIVE */
              && p.name === 'bind' && p.exp) {
                var expType = getConstantType(p.exp, context);

                if (expType === 0
                /* NOT_CONSTANT */
                ) {
                    constantCache.set(node, 0
                    /* NOT_CONSTANT */
                    );
                    return 0
                    /* NOT_CONSTANT */
                    ;
                  }

                if (expType < _returnType) {
                  _returnType = expType;
                }
              }
            }
          } // only svg/foreignObject could be block here, however if they are
        // static then they don't need to be blocks since there will be no
        // nested updates.


        if (codegenNode.isBlock) {
          codegenNode.isBlock = false;
          context.helper(CREATE_VNODE);
        }

        constantCache.set(node, _returnType);
        return _returnType;
      } else {
        constantCache.set(node, 0
        /* NOT_CONSTANT */
        );
        return 0
        /* NOT_CONSTANT */
        ;
      }

    case 2
    /* TEXT */
    :
    case 3
    /* COMMENT */
    :
      return 3
      /* CAN_STRINGIFY */
      ;

    case 9
    /* IF */
    :
    case 11
    /* FOR */
    :
    case 10
    /* IF_BRANCH */
    :
      return 0
      /* NOT_CONSTANT */
      ;

    case 5
    /* INTERPOLATION */
    :
    case 12
    /* TEXT_CALL */
    :
      return getConstantType(node.content, context);

    case 4
    /* SIMPLE_EXPRESSION */
    :
      return node.constType;

    case 8
    /* COMPOUND_EXPRESSION */
    :
      var returnType = 3
      /* CAN_STRINGIFY */
      ;

      for (var _i4 = 0; _i4 < node.children.length; _i4++) {
        var child = node.children[_i4];

        if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isString"])(child) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(child)) {
          continue;
        }

        var _childType = getConstantType(child, context);

        if (_childType === 0
        /* NOT_CONSTANT */
        ) {
            return 0
            /* NOT_CONSTANT */
            ;
          } else if (_childType < returnType) {
          returnType = _childType;
        }
      }

      return returnType;

    default:
      if (true) ;
      return 0
      /* NOT_CONSTANT */
      ;
  }
}

function getGeneratedPropsConstantType(node, context) {
  var returnType = 3
  /* CAN_STRINGIFY */
  ;
  var props = getNodeProps(node);

  if (props && props.type === 15
  /* JS_OBJECT_EXPRESSION */
  ) {
      var properties = props.properties;

      for (var i = 0; i < properties.length; i++) {
        var _properties$i = properties[i],
            key = _properties$i.key,
            value = _properties$i.value;
        var keyType = getConstantType(key, context);

        if (keyType === 0
        /* NOT_CONSTANT */
        ) {
            return keyType;
          }

        if (keyType < returnType) {
          returnType = keyType;
        }

        if (value.type !== 4
        /* SIMPLE_EXPRESSION */
        ) {
            return 0
            /* NOT_CONSTANT */
            ;
          }

        var valueType = getConstantType(value, context);

        if (valueType === 0
        /* NOT_CONSTANT */
        ) {
            return valueType;
          }

        if (valueType < returnType) {
          returnType = valueType;
        }
      }
    }

  return returnType;
}

function getNodeProps(node) {
  var codegenNode = node.codegenNode;

  if (codegenNode.type === 13
  /* VNODE_CALL */
  ) {
      return codegenNode.props;
    }
}

function getPatchFlag(node) {
  var flag = node.patchFlag;
  return flag ? parseInt(flag, 10) : undefined;
}

function createTransformContext(root, _ref) {
  var _ref$filename = _ref.filename,
      filename = _ref$filename === void 0 ? '' : _ref$filename,
      _ref$prefixIdentifier = _ref.prefixIdentifiers,
      prefixIdentifiers = _ref$prefixIdentifier === void 0 ? false : _ref$prefixIdentifier,
      _ref$hoistStatic = _ref.hoistStatic,
      hoistStatic = _ref$hoistStatic === void 0 ? false : _ref$hoistStatic,
      _ref$cacheHandlers = _ref.cacheHandlers,
      cacheHandlers = _ref$cacheHandlers === void 0 ? false : _ref$cacheHandlers,
      _ref$nodeTransforms = _ref.nodeTransforms,
      nodeTransforms = _ref$nodeTransforms === void 0 ? [] : _ref$nodeTransforms,
      _ref$directiveTransfo = _ref.directiveTransforms,
      directiveTransforms = _ref$directiveTransfo === void 0 ? {} : _ref$directiveTransfo,
      _ref$transformHoist = _ref.transformHoist,
      transformHoist = _ref$transformHoist === void 0 ? null : _ref$transformHoist,
      _ref$isBuiltInCompone = _ref.isBuiltInComponent,
      isBuiltInComponent = _ref$isBuiltInCompone === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_0__["NOOP"] : _ref$isBuiltInCompone,
      _ref$isCustomElement = _ref.isCustomElement,
      isCustomElement = _ref$isCustomElement === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_0__["NOOP"] : _ref$isCustomElement,
      _ref$expressionPlugin = _ref.expressionPlugins,
      expressionPlugins = _ref$expressionPlugin === void 0 ? [] : _ref$expressionPlugin,
      _ref$scopeId = _ref.scopeId,
      scopeId = _ref$scopeId === void 0 ? null : _ref$scopeId,
      _ref$ssr = _ref.ssr,
      ssr = _ref$ssr === void 0 ? false : _ref$ssr,
      _ref$ssrCssVars = _ref.ssrCssVars,
      ssrCssVars = _ref$ssrCssVars === void 0 ? "" : _ref$ssrCssVars,
      _ref$bindingMetadata = _ref.bindingMetadata,
      bindingMetadata = _ref$bindingMetadata === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_0__["EMPTY_OBJ"] : _ref$bindingMetadata,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      _ref$isTS = _ref.isTS,
      isTS = _ref$isTS === void 0 ? false : _ref$isTS,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? defaultOnError : _ref$onError;
  var nameMatch = filename.replace(/\?.*$/, '').match(/([^/\\]+)\.\w+$/);
  var context = {
    // options
    selfName: nameMatch && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["capitalize"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["camelize"])(nameMatch[1])),
    prefixIdentifiers: prefixIdentifiers,
    hoistStatic: hoistStatic,
    cacheHandlers: cacheHandlers,
    nodeTransforms: nodeTransforms,
    directiveTransforms: directiveTransforms,
    transformHoist: transformHoist,
    isBuiltInComponent: isBuiltInComponent,
    isCustomElement: isCustomElement,
    expressionPlugins: expressionPlugins,
    scopeId: scopeId,
    ssr: ssr,
    ssrCssVars: ssrCssVars,
    bindingMetadata: bindingMetadata,
    inline: inline,
    isTS: isTS,
    onError: onError,
    // state
    root: root,
    helpers: new Set(),
    components: new Set(),
    directives: new Set(),
    hoists: [],
    imports: new Set(),
    constantCache: new Map(),
    temps: 0,
    cached: 0,
    identifiers: Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    currentNode: root,
    childIndex: 0,
    // methods
    helper: function helper(name) {
      context.helpers.add(name);
      return name;
    },
    helperString: function helperString(name) {
      return "_".concat(helperNameMap[context.helper(name)]);
    },
    replaceNode: function replaceNode(node) {
      /* istanbul ignore if */
      if (true) {
        if (!context.currentNode) {
          throw new Error("Node being replaced is already removed.");
        }

        if (!context.parent) {
          throw new Error("Cannot replace root node.");
        }
      }

      context.parent.children[context.childIndex] = context.currentNode = node;
    },
    removeNode: function removeNode(node) {
      if ( true && !context.parent) {
        throw new Error("Cannot remove root node.");
      }

      var list = context.parent.children;
      var removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
      /* istanbul ignore if */

      if ( true && removalIndex < 0) {
        throw new Error("node being removed is not a child of current parent");
      }

      if (!node || node === context.currentNode) {
        // current node removed
        context.currentNode = null;
        context.onNodeRemoved();
      } else {
        // sibling node removed
        if (context.childIndex > removalIndex) {
          context.childIndex--;
          context.onNodeRemoved();
        }
      }

      context.parent.children.splice(removalIndex, 1);
    },
    onNodeRemoved: function onNodeRemoved() {},
    addIdentifiers: function addIdentifiers(exp) {},
    removeIdentifiers: function removeIdentifiers(exp) {},
    hoist: function hoist(exp) {
      context.hoists.push(exp);
      var identifier = createSimpleExpression("_hoisted_".concat(context.hoists.length), false, exp.loc, 2
      /* CAN_HOIST */
      );
      identifier.hoisted = exp;
      return identifier;
    },
    cache: function cache(exp) {
      var isVNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return createCacheExpression(++context.cached, exp, isVNode);
    }
  };
  return context;
}

function transform(root, options) {
  var context = createTransformContext(root, options);
  traverseNode(root, context);

  if (options.hoistStatic) {
    hoistStatic(root, context);
  }

  if (!options.ssr) {
    createRootCodegen(root, context);
  } // finalize meta information


  root.helpers = _toConsumableArray(context.helpers);
  root.components = _toConsumableArray(context.components);
  root.directives = _toConsumableArray(context.directives);
  root.imports = _toConsumableArray(context.imports);
  root.hoists = context.hoists;
  root.temps = context.temps;
  root.cached = context.cached;
}

function createRootCodegen(root, context) {
  var helper = context.helper;
  var children = root.children;

  if (children.length === 1) {
    var child = children[0]; // if the single child is an element, turn it into a block.

    if (isSingleElementRoot(root, child) && child.codegenNode) {
      // single element root is never hoisted so codegenNode will never be
      // SimpleExpressionNode
      var codegenNode = child.codegenNode;

      if (codegenNode.type === 13
      /* VNODE_CALL */
      ) {
          codegenNode.isBlock = true;
          helper(OPEN_BLOCK);
          helper(CREATE_BLOCK);
        }

      root.codegenNode = codegenNode;
    } else {
      // - single <slot/>, IfNode, ForNode: already blocks.
      // - single text node: always patched.
      // root codegen falls through via genNode()
      root.codegenNode = child;
    }
  } else if (children.length > 1) {
    // root has multiple nodes - return a fragment block.
    var patchFlag = 64
    /* STABLE_FRAGMENT */
    ;
    var patchFlagText = _vue_shared__WEBPACK_IMPORTED_MODULE_0__["PatchFlagNames"][64
    /* STABLE_FRAGMENT */
    ]; // check if the fragment actually contains a single valid child with
    // the rest being comments

    if ( true && children.filter(function (c) {
      return c.type !== 3;
    }
    /* COMMENT */
    ).length === 1) {
      patchFlag |= 2048
      /* DEV_ROOT_FRAGMENT */
      ;
      patchFlagText += ", ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["PatchFlagNames"][2048
      /* DEV_ROOT_FRAGMENT */
      ]);
    }

    root.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, root.children, patchFlag + ( true ? " /* ".concat(patchFlagText, " */") : undefined), undefined, undefined, true);
  } else ;
}

function traverseChildren(parent, context) {
  var i = 0;

  var nodeRemoved = function nodeRemoved() {
    i--;
  };

  for (; i < parent.children.length; i++) {
    var child = parent.children[i];
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isString"])(child)) continue;
    context.parent = parent;
    context.childIndex = i;
    context.onNodeRemoved = nodeRemoved;
    traverseNode(child, context);
  }
}

function traverseNode(node, context) {
  context.currentNode = node; // apply transform plugins

  var nodeTransforms = context.nodeTransforms;
  var exitFns = [];

  for (var _i5 = 0; _i5 < nodeTransforms.length; _i5++) {
    var onExit = nodeTransforms[_i5](node, context);

    if (onExit) {
      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isArray"])(onExit)) {
        exitFns.push.apply(exitFns, _toConsumableArray(onExit));
      } else {
        exitFns.push(onExit);
      }
    }

    if (!context.currentNode) {
      // node was removed
      return;
    } else {
      // node may have been replaced
      node = context.currentNode;
    }
  }

  switch (node.type) {
    case 3
    /* COMMENT */
    :
      if (!context.ssr) {
        // inject import for the Comment symbol, which is needed for creating
        // comment nodes with `createVNode`
        context.helper(CREATE_COMMENT);
      }

      break;

    case 5
    /* INTERPOLATION */
    :
      // no need to traverse, but we need to inject toString helper
      if (!context.ssr) {
        context.helper(TO_DISPLAY_STRING);
      }

      break;
    // for container types, further traverse downwards

    case 9
    /* IF */
    :
      for (var _i6 = 0; _i6 < node.branches.length; _i6++) {
        traverseNode(node.branches[_i6], context);
      }

      break;

    case 10
    /* IF_BRANCH */
    :
    case 11
    /* FOR */
    :
    case 1
    /* ELEMENT */
    :
    case 0
    /* ROOT */
    :
      traverseChildren(node, context);
      break;
  } // exit transforms


  context.currentNode = node;
  var i = exitFns.length;

  while (i--) {
    exitFns[i]();
  }
}

function createStructuralDirectiveTransform(name, fn) {
  var matches = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isString"])(name) ? function (n) {
    return n === name;
  } : function (n) {
    return name.test(n);
  };
  return function (node, context) {
    if (node.type === 1
    /* ELEMENT */
    ) {
        var props = node.props; // structural directive transforms are not concerned with slots
        // as they are handled separately in vSlot.ts

        if (node.tagType === 3
        /* TEMPLATE */
        && props.some(isVSlot)) {
          return;
        }

        var exitFns = [];

        for (var i = 0; i < props.length; i++) {
          var prop = props[i];

          if (prop.type === 7
          /* DIRECTIVE */
          && matches(prop.name)) {
            // structural directives are removed to avoid infinite recursion
            // also we remove them *before* applying so that it can further
            // traverse itself in case it moves the node around
            props.splice(i, 1);
            i--;
            var onExit = fn(node, prop, context);
            if (onExit) exitFns.push(onExit);
          }
        }

        return exitFns;
      }
  };
}

var PURE_ANNOTATION = "/*#__PURE__*/";

function createCodegenContext(ast, _ref2) {
  var _ref2$mode = _ref2.mode,
      mode = _ref2$mode === void 0 ? 'function' : _ref2$mode,
      _ref2$prefixIdentifie = _ref2.prefixIdentifiers,
      prefixIdentifiers = _ref2$prefixIdentifie === void 0 ? mode === 'module' : _ref2$prefixIdentifie,
      _ref2$sourceMap = _ref2.sourceMap,
      sourceMap = _ref2$sourceMap === void 0 ? false : _ref2$sourceMap,
      _ref2$filename = _ref2.filename,
      filename = _ref2$filename === void 0 ? "template.vue.html" : _ref2$filename,
      _ref2$scopeId = _ref2.scopeId,
      scopeId = _ref2$scopeId === void 0 ? null : _ref2$scopeId,
      _ref2$optimizeImports = _ref2.optimizeImports,
      optimizeImports = _ref2$optimizeImports === void 0 ? false : _ref2$optimizeImports,
      _ref2$runtimeGlobalNa = _ref2.runtimeGlobalName,
      runtimeGlobalName = _ref2$runtimeGlobalNa === void 0 ? "Vue" : _ref2$runtimeGlobalNa,
      _ref2$runtimeModuleNa = _ref2.runtimeModuleName,
      runtimeModuleName = _ref2$runtimeModuleNa === void 0 ? "vue" : _ref2$runtimeModuleNa,
      _ref2$ssr = _ref2.ssr,
      ssr = _ref2$ssr === void 0 ? false : _ref2$ssr;
  var context = {
    mode: mode,
    prefixIdentifiers: prefixIdentifiers,
    sourceMap: sourceMap,
    filename: filename,
    scopeId: scopeId,
    optimizeImports: optimizeImports,
    runtimeGlobalName: runtimeGlobalName,
    runtimeModuleName: runtimeModuleName,
    ssr: ssr,
    source: ast.loc.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: false,
    map: undefined,
    helper: function helper(key) {
      return "_".concat(helperNameMap[key]);
    },
    push: function push(code, node) {
      context.code += code;
    },
    indent: function indent() {
      _newline(++context.indentLevel);
    },
    deindent: function deindent() {
      var withoutNewLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (withoutNewLine) {
        --context.indentLevel;
      } else {
        _newline(--context.indentLevel);
      }
    },
    newline: function newline() {
      _newline(context.indentLevel);
    }
  };

  function _newline(n) {
    context.push('\n' + "  ".repeat(n));
  }

  return context;
}

function generate(ast) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var context = createCodegenContext(ast, options);
  if (options.onContextCreated) options.onContextCreated(context);
  var mode = context.mode,
      push = context.push,
      prefixIdentifiers = context.prefixIdentifiers,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline,
      scopeId = context.scopeId,
      ssr = context.ssr;
  var hasHelpers = ast.helpers.length > 0;
  var useWithBlock = !prefixIdentifiers && mode !== 'module'; // preambles
  // in setup() inline mode, the preamble is generated in a sub context
  // and returned separately.

  var preambleContext = context;
  {
    genFunctionPreamble(ast, preambleContext);
  } // enter render function

  var functionName = ssr ? "ssrRender" : "render";
  var args = ssr ? ['_ctx', '_push', '_parent', '_attrs'] : ['_ctx', '_cache'];
  var signature = args.join(', ');
  {
    push("function ".concat(functionName, "(").concat(signature, ") {"));
  }
  indent();

  if (useWithBlock) {
    push("with (_ctx) {");
    indent(); // function mode const declarations should be inside with block
    // also they should be renamed to avoid collision with user properties

    if (hasHelpers) {
      push("const { ".concat(ast.helpers.map(function (s) {
        return "".concat(helperNameMap[s], ": _").concat(helperNameMap[s]);
      }).join(', '), " } = _Vue"));
      push("\n");
      newline();
    }
  } // generate asset resolution statements


  if (ast.components.length) {
    genAssets(ast.components, 'component', context);

    if (ast.directives.length || ast.temps > 0) {
      newline();
    }
  }

  if (ast.directives.length) {
    genAssets(ast.directives, 'directive', context);

    if (ast.temps > 0) {
      newline();
    }
  }

  if (ast.temps > 0) {
    push("let ");

    for (var i = 0; i < ast.temps; i++) {
      push("".concat(i > 0 ? ", " : "", "_temp").concat(i));
    }
  }

  if (ast.components.length || ast.directives.length || ast.temps) {
    push("\n");
    newline();
  } // generate the VNode tree expression


  if (!ssr) {
    push("return ");
  }

  if (ast.codegenNode) {
    genNode(ast.codegenNode, context);
  } else {
    push("null");
  }

  if (useWithBlock) {
    deindent();
    push("}");
  }

  deindent();
  push("}");
  return {
    ast: ast,
    code: context.code,
    preamble: "",
    // SourceMapGenerator does have toJSON() method but it's not in the types
    map: context.map ? context.map.toJSON() : undefined
  };
}

function genFunctionPreamble(ast, context) {
  var ssr = context.ssr,
      prefixIdentifiers = context.prefixIdentifiers,
      push = context.push,
      newline = context.newline,
      runtimeModuleName = context.runtimeModuleName,
      runtimeGlobalName = context.runtimeGlobalName;
  var VueBinding = runtimeGlobalName;

  var aliasHelper = function aliasHelper(s) {
    return "".concat(helperNameMap[s], ": _").concat(helperNameMap[s]);
  }; // Generate const declaration for helpers
  // In prefix mode, we place the const declaration at top so it's done
  // only once; But if we not prefixing, we place the declaration inside the
  // with block so it doesn't incur the `in` check cost for every helper access.


  if (ast.helpers.length > 0) {
    {
      // "with" mode.
      // save Vue in a separate variable to avoid collision
      push("const _Vue = ".concat(VueBinding, "\n")); // in "with" mode, helpers are declared inside the with block to avoid
      // has check cost, but hoists are lifted out of the function - we need
      // to provide the helper here.

      if (ast.hoists.length) {
        var staticHelpers = [CREATE_VNODE, CREATE_COMMENT, CREATE_TEXT, CREATE_STATIC].filter(function (helper) {
          return ast.helpers.includes(helper);
        }).map(aliasHelper).join(', ');
        push("const { ".concat(staticHelpers, " } = _Vue\n"));
      }
    }
  }

  genHoists(ast.hoists, context);
  newline();
  push("return ");
}

function genAssets(assets, type, _ref3) {
  var helper = _ref3.helper,
      push = _ref3.push,
      newline = _ref3.newline;
  var resolver = helper(type === 'component' ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);

  for (var i = 0; i < assets.length; i++) {
    var id = assets[i];
    push("const ".concat(toValidAssetId(id, type), " = ").concat(resolver, "(").concat(JSON.stringify(id), ")"));

    if (i < assets.length - 1) {
      newline();
    }
  }
}

function genHoists(hoists, context) {
  if (!hoists.length) {
    return;
  }

  context.pure = true;
  var push = context.push,
      newline = context.newline,
      helper = context.helper,
      scopeId = context.scopeId,
      mode = context.mode;
  newline();
  hoists.forEach(function (exp, i) {
    if (exp) {
      push("const _hoisted_".concat(i + 1, " = "));
      genNode(exp, context);
      newline();
    }
  });
  context.pure = false;
}

function isText$1(n) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isString"])(n) || n.type === 4
  /* SIMPLE_EXPRESSION */
  || n.type === 2
  /* TEXT */
  || n.type === 5
  /* INTERPOLATION */
  || n.type === 8
  /* COMPOUND_EXPRESSION */
  ;
}

function genNodeListAsArray(nodes, context) {
  var multilines = nodes.length > 3 ||  true && nodes.some(function (n) {
    return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isArray"])(n) || !isText$1(n);
  });
  context.push("[");
  multilines && context.indent();
  genNodeList(nodes, context, multilines);
  multilines && context.deindent();
  context.push("]");
}

function genNodeList(nodes, context) {
  var multilines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var comma = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var push = context.push,
      newline = context.newline;

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isString"])(node)) {
      push(node);
    } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isArray"])(node)) {
      genNodeListAsArray(node, context);
    } else {
      genNode(node, context);
    }

    if (i < nodes.length - 1) {
      if (multilines) {
        comma && push(',');
        newline();
      } else {
        comma && push(', ');
      }
    }
  }
}

function genNode(node, context) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isString"])(node)) {
    context.push(node);
    return;
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(node)) {
    context.push(context.helper(node));
    return;
  }

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
    case 9
    /* IF */
    :
    case 11
    /* FOR */
    :
       true && assert(node.codegenNode != null, "Codegen node is missing for element/if/for node. " + "Apply appropriate transforms first.");
      genNode(node.codegenNode, context);
      break;

    case 2
    /* TEXT */
    :
      genText(node, context);
      break;

    case 4
    /* SIMPLE_EXPRESSION */
    :
      genExpression(node, context);
      break;

    case 5
    /* INTERPOLATION */
    :
      genInterpolation(node, context);
      break;

    case 12
    /* TEXT_CALL */
    :
      genNode(node.codegenNode, context);
      break;

    case 8
    /* COMPOUND_EXPRESSION */
    :
      genCompoundExpression(node, context);
      break;

    case 3
    /* COMMENT */
    :
      genComment(node, context);
      break;

    case 13
    /* VNODE_CALL */
    :
      genVNodeCall(node, context);
      break;

    case 14
    /* JS_CALL_EXPRESSION */
    :
      genCallExpression(node, context);
      break;

    case 15
    /* JS_OBJECT_EXPRESSION */
    :
      genObjectExpression(node, context);
      break;

    case 17
    /* JS_ARRAY_EXPRESSION */
    :
      genArrayExpression(node, context);
      break;

    case 18
    /* JS_FUNCTION_EXPRESSION */
    :
      genFunctionExpression(node, context);
      break;

    case 19
    /* JS_CONDITIONAL_EXPRESSION */
    :
      genConditionalExpression(node, context);
      break;

    case 20
    /* JS_CACHE_EXPRESSION */
    :
      genCacheExpression(node, context);
      break;
    // SSR only types

    case 21
    /* JS_BLOCK_STATEMENT */
    :
      break;

    case 22
    /* JS_TEMPLATE_LITERAL */
    :
      break;

    case 23
    /* JS_IF_STATEMENT */
    :
      break;

    case 24
    /* JS_ASSIGNMENT_EXPRESSION */
    :
      break;

    case 25
    /* JS_SEQUENCE_EXPRESSION */
    :
      break;

    case 26
    /* JS_RETURN_STATEMENT */
    :
      break;

    /* istanbul ignore next */

    case 10
    /* IF_BRANCH */
    :
      // noop
      break;

    default:
      if (true) {
        assert(false, "unhandled codegen node type: ".concat(node.type)); // make sure we exhaust all possible types

        var exhaustiveCheck = node;
        return exhaustiveCheck;
      }

  }
}

function genText(node, context) {
  context.push(JSON.stringify(node.content), node);
}

function genExpression(node, context) {
  var content = node.content,
      isStatic = node.isStatic;
  context.push(isStatic ? JSON.stringify(content) : content, node);
}

function genInterpolation(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  if (pure) push(PURE_ANNOTATION);
  push("".concat(helper(TO_DISPLAY_STRING), "("));
  genNode(node.content, context);
  push(")");
}

function genCompoundExpression(node, context) {
  for (var i = 0; i < node.children.length; i++) {
    var child = node.children[i];

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isString"])(child)) {
      context.push(child);
    } else {
      genNode(child, context);
    }
  }
}

function genExpressionAsPropertyKey(node, context) {
  var push = context.push;

  if (node.type === 8
  /* COMPOUND_EXPRESSION */
  ) {
      push("[");
      genCompoundExpression(node, context);
      push("]");
    } else if (node.isStatic) {
    // only quote keys if necessary
    var text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
    push(text, node);
  } else {
    push("[".concat(node.content, "]"), node);
  }
}

function genComment(node, context) {
  if (true) {
    var push = context.push,
        helper = context.helper,
        pure = context.pure;

    if (pure) {
      push(PURE_ANNOTATION);
    }

    push("".concat(helper(CREATE_COMMENT), "(").concat(JSON.stringify(node.content), ")"), node);
  }
}

function genVNodeCall(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  var tag = node.tag,
      props = node.props,
      children = node.children,
      patchFlag = node.patchFlag,
      dynamicProps = node.dynamicProps,
      directives = node.directives,
      isBlock = node.isBlock,
      disableTracking = node.disableTracking;

  if (directives) {
    push(helper(WITH_DIRECTIVES) + "(");
  }

  if (isBlock) {
    push("(".concat(helper(OPEN_BLOCK), "(").concat(disableTracking ? "true" : "", "), "));
  }

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push(helper(isBlock ? CREATE_BLOCK : CREATE_VNODE) + "(", node);
  genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
  push(")");

  if (isBlock) {
    push(")");
  }

  if (directives) {
    push(", ");
    genNode(directives, context);
    push(")");
  }
}

function genNullableArgs(args) {
  var i = args.length;

  while (i--) {
    if (args[i] != null) break;
  }

  return args.slice(0, i + 1).map(function (arg) {
    return arg || "null";
  });
} // JavaScript


function genCallExpression(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  var callee = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isString"])(node.callee) ? node.callee : helper(node.callee);

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push(callee + "(", node);
  genNodeList(node.arguments, context);
  push(")");
}

function genObjectExpression(node, context) {
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;
  var properties = node.properties;

  if (!properties.length) {
    push("{}", node);
    return;
  }

  var multilines = properties.length > 1 ||  true && properties.some(function (p) {
    return p.value.type !== 4;
  }
  /* SIMPLE_EXPRESSION */
  );
  push(multilines ? "{" : "{ ");
  multilines && indent();

  for (var i = 0; i < properties.length; i++) {
    var _properties$i2 = properties[i],
        key = _properties$i2.key,
        value = _properties$i2.value; // key

    genExpressionAsPropertyKey(key, context);
    push(": "); // value

    genNode(value, context);

    if (i < properties.length - 1) {
      // will only reach this if it's multilines
      push(",");
      newline();
    }
  }

  multilines && deindent();
  push(multilines ? "}" : " }");
}

function genArrayExpression(node, context) {
  genNodeListAsArray(node.elements, context);
}

function genFunctionExpression(node, context) {
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent,
      scopeId = context.scopeId,
      mode = context.mode;
  var params = node.params,
      returns = node.returns,
      body = node.body,
      newline = node.newline,
      isSlot = node.isSlot;

  if (isSlot) {
    push("_".concat(helperNameMap[WITH_CTX], "("));
  }

  push("(", node);

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isArray"])(params)) {
    genNodeList(params, context);
  } else if (params) {
    genNode(params, context);
  }

  push(") => ");

  if (newline || body) {
    push("{");
    indent();
  }

  if (returns) {
    if (newline) {
      push("return ");
    }

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isArray"])(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  } else if (body) {
    genNode(body, context);
  }

  if (newline || body) {
    deindent();
    push("}");
  }

  if (isSlot) {
    push(")");
  }
}

function genConditionalExpression(node, context) {
  var test = node.test,
      consequent = node.consequent,
      alternate = node.alternate,
      needNewline = node.newline;
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;

  if (test.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
      var needsParens = !isSimpleIdentifier(test.content);
      needsParens && push("(");
      genExpression(test, context);
      needsParens && push(")");
    } else {
    push("(");
    genNode(test, context);
    push(")");
  }

  needNewline && indent();
  context.indentLevel++;
  needNewline || push(" ");
  push("? ");
  genNode(consequent, context);
  context.indentLevel--;
  needNewline && newline();
  needNewline || push(" ");
  push(": ");
  var isNested = alternate.type === 19
  /* JS_CONDITIONAL_EXPRESSION */
  ;

  if (!isNested) {
    context.indentLevel++;
  }

  genNode(alternate, context);

  if (!isNested) {
    context.indentLevel--;
  }

  needNewline && deindent(true
  /* without newline */
  );
}

function genCacheExpression(node, context) {
  var push = context.push,
      helper = context.helper,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;
  push("_cache[".concat(node.index, "] || ("));

  if (node.isVNode) {
    indent();
    push("".concat(helper(SET_BLOCK_TRACKING), "(-1),"));
    newline();
  }

  push("_cache[".concat(node.index, "] = "));
  genNode(node.value, context);

  if (node.isVNode) {
    push(",");
    newline();
    push("".concat(helper(SET_BLOCK_TRACKING), "(1),"));
    newline();
    push("_cache[".concat(node.index, "]"));
    deindent();
  }

  push(")");
} // these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed


var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments,typeof,void').split(',').join('\\b|\\b') + '\\b'); // strip strings in expressions

var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
/**
 * Validate a non-prefixed expression.
 * This is only called when using the in-browser runtime compiler since it
 * doesn't prefix expressions.
 */

function validateBrowserExpression(node, context) {
  var asParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var asRawStatements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var exp = node.content; // empty expressions are validated per-directive since some directives
  // do allow empty expressions.

  if (!exp.trim()) {
    return;
  }

  try {
    new Function(asRawStatements ? " ".concat(exp, " ") : "return ".concat(asParams ? "(".concat(exp, ") => {}") : "(".concat(exp, ")")));
  } catch (e) {
    var message = e.message;
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);

    if (keywordMatch) {
      message = "avoid using JavaScript keyword as property name: \"".concat(keywordMatch[0], "\"");
    }

    context.onError(createCompilerError(43
    /* X_INVALID_EXPRESSION */
    , node.loc, undefined, message));
  }
}

var transformExpression = function transformExpression(node, context) {
  if (node.type === 5
  /* INTERPOLATION */
  ) {
      node.content = processExpression(node.content, context);
    } else if (node.type === 1
  /* ELEMENT */
  ) {
      // handle directives on element
      for (var i = 0; i < node.props.length; i++) {
        var dir = node.props[i]; // do not process for v-on & v-for since they are special handled

        if (dir.type === 7
        /* DIRECTIVE */
        && dir.name !== 'for') {
          var exp = dir.exp;
          var arg = dir.arg; // do not process exp if this is v-on:arg - we need special handling
          // for wrapping inline statements.

          if (exp && exp.type === 4
          /* SIMPLE_EXPRESSION */
          && !(dir.name === 'on' && arg)) {
            dir.exp = processExpression(exp, context, // slot args must be processed as function params
            dir.name === 'slot');
          }

          if (arg && arg.type === 4
          /* SIMPLE_EXPRESSION */
          && !arg.isStatic) {
            dir.arg = processExpression(arg, context);
          }
        }
      }
    }
}; // Important: since this function uses Node.js only dependencies, it should
// always be used with a leading !true check so that it can be
// tree-shaken from the browser build.


function processExpression(node, context) {
  var asParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var asRawStatements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  {
    if (true) {
      // simple in-browser validation (same logic in 2.x)
      validateBrowserExpression(node, context, asParams, asRawStatements);
    }

    return node;
  }
}

var transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, function (node, dir, context) {
  return processIf(node, dir, context, function (ifNode, branch, isRoot) {
    // #1587: We need to dynamically increment the key based on the current
    // node's sibling nodes, since chained v-if/else branches are
    // rendered at the same depth
    var siblings = context.parent.children;
    var i = siblings.indexOf(ifNode);
    var key = 0;

    while (i-- >= 0) {
      var sibling = siblings[i];

      if (sibling && sibling.type === 9
      /* IF */
      ) {
          key += sibling.branches.length;
        }
    } // Exit callback. Complete the codegenNode when all children have been
    // transformed.


    return function () {
      if (isRoot) {
        ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
      } else {
        // attach this branch's codegen node to the v-if root.
        var parentCondition = getParentCondition(ifNode.codegenNode);
        parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
      }
    };
  });
}); // target-agnostic transform used for both Client and SSR

function processIf(node, dir, context, processCodegen) {
  if (dir.name !== 'else' && (!dir.exp || !dir.exp.content.trim())) {
    var loc = dir.exp ? dir.exp.loc : node.loc;
    context.onError(createCompilerError(27
    /* X_V_IF_NO_EXPRESSION */
    , dir.loc));
    dir.exp = createSimpleExpression("true", false, loc);
  }

  if ( true && dir.exp) {
    validateBrowserExpression(dir.exp, context);
  }

  if (dir.name === 'if') {
    var branch = createIfBranch(node, dir);
    var ifNode = {
      type: 9
      /* IF */
      ,
      loc: node.loc,
      branches: [branch]
    };
    context.replaceNode(ifNode);

    if (processCodegen) {
      return processCodegen(ifNode, branch, true);
    }
  } else {
    // locate the adjacent v-if
    var siblings = context.parent.children;
    var comments = [];
    var i = siblings.indexOf(node);

    while (i-- >= -1) {
      var sibling = siblings[i];

      if ( true && sibling && sibling.type === 3
      /* COMMENT */
      ) {
          context.removeNode(sibling);
          comments.unshift(sibling);
          continue;
        }

      if (sibling && sibling.type === 2
      /* TEXT */
      && !sibling.content.trim().length) {
        context.removeNode(sibling);
        continue;
      }

      if (sibling && sibling.type === 9
      /* IF */
      ) {
          (function () {
            // move the node to the if node's branches
            context.removeNode();
            var branch = createIfBranch(node, dir);

            if ( true && comments.length) {
              branch.children = [].concat(comments, _toConsumableArray(branch.children));
            } // check if user is forcing same key on different branches


            if (true) {
              var key = branch.userKey;

              if (key) {
                sibling.branches.forEach(function (_ref4) {
                  var userKey = _ref4.userKey;

                  if (isSameKey(userKey, key)) {
                    context.onError(createCompilerError(28
                    /* X_V_IF_SAME_KEY */
                    , branch.userKey.loc));
                  }
                });
              }
            }

            sibling.branches.push(branch);
            var onExit = processCodegen && processCodegen(sibling, branch, false); // since the branch was removed, it will not be traversed.
            // make sure to traverse here.

            traverseNode(branch, context); // call on exit

            if (onExit) onExit(); // make sure to reset currentNode after traversal to indicate this
            // node has been removed.

            context.currentNode = null;
          })();
        } else {
        context.onError(createCompilerError(29
        /* X_V_ELSE_NO_ADJACENT_IF */
        , node.loc));
      }

      break;
    }
  }
}

function createIfBranch(node, dir) {
  return {
    type: 10
    /* IF_BRANCH */
    ,
    loc: node.loc,
    condition: dir.name === 'else' ? undefined : dir.exp,
    children: node.tagType === 3
    /* TEMPLATE */
    && !findDir(node, 'for') ? node.children : [node],
    userKey: findProp(node, "key")
  };
}

function createCodegenNodeForBranch(branch, keyIndex, context) {
  if (branch.condition) {
    return createConditionalExpression(branch.condition, createChildrenCodegenNode(branch, keyIndex, context), // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    createCallExpression(context.helper(CREATE_COMMENT), [ true ? '"v-if"' : undefined, 'true']));
  } else {
    return createChildrenCodegenNode(branch, keyIndex, context);
  }
}

function createChildrenCodegenNode(branch, keyIndex, context) {
  var helper = context.helper;
  var keyProperty = createObjectProperty("key", createSimpleExpression("".concat(keyIndex), false, locStub, 2
  /* CAN_HOIST */
  ));
  var children = branch.children;
  var firstChild = children[0];
  var needFragmentWrapper = children.length !== 1 || firstChild.type !== 1
  /* ELEMENT */
  ;

  if (needFragmentWrapper) {
    if (children.length === 1 && firstChild.type === 11
    /* FOR */
    ) {
        // optimize away nested fragments when child is a ForNode
        var vnodeCall = firstChild.codegenNode;
        injectProp(vnodeCall, keyProperty, context);
        return vnodeCall;
      } else {
      return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, 64
      /* STABLE_FRAGMENT */
      + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["PatchFlagNames"][64
      /* STABLE_FRAGMENT */
      ], " */") : undefined), undefined, undefined, true, false, branch.loc);
    }
  } else {
    var _vnodeCall = firstChild.codegenNode; // Change createVNode to createBlock.

    if (_vnodeCall.type === 13
    /* VNODE_CALL */
    ) {
        _vnodeCall.isBlock = true;
        helper(OPEN_BLOCK);
        helper(CREATE_BLOCK);
      } // inject branch key


    injectProp(_vnodeCall, keyProperty, context);
    return _vnodeCall;
  }
}

function isSameKey(a, b) {
  if (!a || a.type !== b.type) {
    return false;
  }

  if (a.type === 6
  /* ATTRIBUTE */
  ) {
      if (a.value.content !== b.value.content) {
        return false;
      }
    } else {
    // directive
    var exp = a.exp;
    var branchExp = b.exp;

    if (exp.type !== branchExp.type) {
      return false;
    }

    if (exp.type !== 4
    /* SIMPLE_EXPRESSION */
    || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) {
      return false;
    }
  }

  return true;
}

function getParentCondition(node) {
  while (true) {
    if (node.type === 19
    /* JS_CONDITIONAL_EXPRESSION */
    ) {
        if (node.alternate.type === 19
        /* JS_CONDITIONAL_EXPRESSION */
        ) {
            node = node.alternate;
          } else {
          return node;
        }
      } else if (node.type === 20
    /* JS_CACHE_EXPRESSION */
    ) {
        node = node.value;
      }
  }
}

var transformFor = createStructuralDirectiveTransform('for', function (node, dir, context) {
  var helper = context.helper;
  return processFor(node, dir, context, function (forNode) {
    // create the loop render function expression now, and add the
    // iterator on exit after all children have been traversed
    var renderExp = createCallExpression(helper(RENDER_LIST), [forNode.source]);
    var keyProp = findProp(node, "key");
    var keyProperty = keyProp ? createObjectProperty("key", keyProp.type === 6
    /* ATTRIBUTE */
    ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp) : null;
    var isStableFragment = forNode.source.type === 4
    /* SIMPLE_EXPRESSION */
    && forNode.source.constType > 0;
    var fragmentFlag = isStableFragment ? 64
    /* STABLE_FRAGMENT */
    : keyProp ? 128
    /* KEYED_FRAGMENT */
    : 256
    /* UNKEYED_FRAGMENT */
    ;
    forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, renderExp, fragmentFlag + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["PatchFlagNames"][fragmentFlag], " */") : undefined), undefined, undefined, true
    /* isBlock */
    , !isStableFragment
    /* disableTracking */
    , node.loc);
    return function () {
      // finish the codegen now that all children have been traversed
      var childBlock;
      var isTemplate = isTemplateNode(node);
      var children = forNode.children; // check <template v-for> key placement

      if (( true) && isTemplate) {
        node.children.some(function (c) {
          if (c.type === 1
          /* ELEMENT */
          ) {
              var key = findProp(c, 'key');

              if (key) {
                context.onError(createCompilerError(32
                /* X_V_FOR_TEMPLATE_KEY_PLACEMENT */
                , key.loc));
                return true;
              }
            }
        });
      }

      var needFragmentWrapper = children.length !== 1 || children[0].type !== 1
      /* ELEMENT */
      ;
      var slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] // api-extractor somehow fails to infer this
      : null;

      if (slotOutlet) {
        // <slot v-for="..."> or <template v-for="..."><slot/></template>
        childBlock = slotOutlet.codegenNode;

        if (isTemplate && keyProperty) {
          // <template v-for="..." :key="..."><slot/></template>
          // we need to inject the key to the renderSlot() call.
          // the props for renderSlot is passed as the 3rd argument.
          injectProp(childBlock, keyProperty, context);
        }
      } else if (needFragmentWrapper) {
        // <template v-for="..."> with text or multi-elements
        // should generate a fragment block for each loop
        childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([keyProperty]) : undefined, node.children, 64
        /* STABLE_FRAGMENT */
        + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["PatchFlagNames"][64
        /* STABLE_FRAGMENT */
        ], " */") : undefined), undefined, undefined, true);
      } else {
        // Normal element v-for. Directly use the child's codegenNode
        // but mark it as a block.
        childBlock = children[0].codegenNode;

        if (isTemplate && keyProperty) {
          injectProp(childBlock, keyProperty, context);
        }

        childBlock.isBlock = !isStableFragment;

        if (childBlock.isBlock) {
          helper(OPEN_BLOCK);
          helper(CREATE_BLOCK);
        } else {
          helper(CREATE_VNODE);
        }
      }

      renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true
      /* force newline */
      ));
    };
  });
}); // target-agnostic transform used for both Client and SSR

function processFor(node, dir, context, processCodegen) {
  if (!dir.exp) {
    context.onError(createCompilerError(30
    /* X_V_FOR_NO_EXPRESSION */
    , dir.loc));
    return;
  }

  var parseResult = parseForExpression( // can only be simple expression because vFor transform is applied
  // before expression transform.
  dir.exp, context);

  if (!parseResult) {
    context.onError(createCompilerError(31
    /* X_V_FOR_MALFORMED_EXPRESSION */
    , dir.loc));
    return;
  }

  var addIdentifiers = context.addIdentifiers,
      removeIdentifiers = context.removeIdentifiers,
      scopes = context.scopes;
  var source = parseResult.source,
      value = parseResult.value,
      key = parseResult.key,
      index = parseResult.index;
  var forNode = {
    type: 11
    /* FOR */
    ,
    loc: dir.loc,
    source: source,
    valueAlias: value,
    keyAlias: key,
    objectIndexAlias: index,
    parseResult: parseResult,
    children: isTemplateNode(node) ? node.children : [node]
  };
  context.replaceNode(forNode); // bookkeeping

  scopes.vFor++;
  var onExit = processCodegen && processCodegen(forNode);
  return function () {
    scopes.vFor--;
    if (onExit) onExit();
  };
}

var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/; // This regex doesn't cover the case if key or index aliases have destructuring,
// but those do not make sense in the first place, so this works in practice.

var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

function parseForExpression(input, context) {
  var loc = input.loc;
  var exp = input.content;
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) return;

  var _inMatch = _slicedToArray(inMatch, 3),
      LHS = _inMatch[1],
      RHS = _inMatch[2];

  var result = {
    source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
    value: undefined,
    key: undefined,
    index: undefined
  };

  if (true) {
    validateBrowserExpression(result.source, context);
  }

  var valueContent = LHS.trim().replace(stripParensRE, '').trim();
  var trimmedOffset = LHS.indexOf(valueContent);
  var iteratorMatch = valueContent.match(forIteratorRE);

  if (iteratorMatch) {
    valueContent = valueContent.replace(forIteratorRE, '').trim();
    var keyContent = iteratorMatch[1].trim();
    var keyOffset;

    if (keyContent) {
      keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
      result.key = createAliasExpression(loc, keyContent, keyOffset);

      if (true) {
        validateBrowserExpression(result.key, context, true);
      }
    }

    if (iteratorMatch[2]) {
      var indexContent = iteratorMatch[2].trim();

      if (indexContent) {
        result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length));

        if (true) {
          validateBrowserExpression(result.index, context, true);
        }
      }
    }
  }

  if (valueContent) {
    result.value = createAliasExpression(loc, valueContent, trimmedOffset);

    if (true) {
      validateBrowserExpression(result.value, context, true);
    }
  }

  return result;
}

function createAliasExpression(range, content, offset) {
  return createSimpleExpression(content, false, getInnerRange(range, offset, content.length));
}

function createForLoopParams(_ref5) {
  var value = _ref5.value,
      key = _ref5.key,
      index = _ref5.index;
  var params = [];

  if (value) {
    params.push(value);
  }

  if (key) {
    if (!value) {
      params.push(createSimpleExpression("_", false));
    }

    params.push(key);
  }

  if (index) {
    if (!key) {
      if (!value) {
        params.push(createSimpleExpression("_", false));
      }

      params.push(createSimpleExpression("__", false));
    }

    params.push(index);
  }

  return params;
}

var defaultFallback = createSimpleExpression("undefined", false); // A NodeTransform that:
// 1. Tracks scope identifiers for scoped slots so that they don't get prefixed
//    by transformExpression. This is only applied in non-browser builds with
//    { prefixIdentifiers: true }.
// 2. Track v-slot depths so that we know a slot is inside another slot.
//    Note the exit callback is executed before buildSlots() on the same node,
//    so only nested slots see positive numbers.

var trackSlotScopes = function trackSlotScopes(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && (node.tagType === 1
  /* COMPONENT */
  || node.tagType === 3
  /* TEMPLATE */
  )) {
    // We are only checking non-empty v-slot here
    // since we only care about slots that introduce scope variables.
    var vSlot = findDir(node, 'slot');

    if (vSlot) {
      var slotProps = vSlot.exp;
      context.scopes.vSlot++;
      return function () {
        context.scopes.vSlot--;
      };
    }
  }
}; // A NodeTransform that tracks scope identifiers for scoped slots with v-for.
// This transform is only applied in non-browser builds with { prefixIdentifiers: true }


var trackVForSlotScopes = function trackVForSlotScopes(node, context) {
  var vFor;

  if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, 'for'))) {
    var result = vFor.parseResult = parseForExpression(vFor.exp, context);

    if (result) {
      var value = result.value,
          key = result.key,
          index = result.index;
      var addIdentifiers = context.addIdentifiers,
          removeIdentifiers = context.removeIdentifiers;
      value && addIdentifiers(value);
      key && addIdentifiers(key);
      index && addIdentifiers(index);
      return function () {
        value && removeIdentifiers(value);
        key && removeIdentifiers(key);
        index && removeIdentifiers(index);
      };
    }
  }
};

var buildClientSlotFn = function buildClientSlotFn(props, children, loc) {
  return createFunctionExpression(props, children, false
  /* newline */
  , true
  /* isSlot */
  , children.length ? children[0].loc : loc);
}; // Instead of being a DirectiveTransform, v-slot processing is called during
// transformElement to build the slots object for a component.


function buildSlots(node, context) {
  var buildSlotFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : buildClientSlotFn;
  context.helper(WITH_CTX);
  var children = node.children,
      loc = node.loc;
  var slotsProperties = [];
  var dynamicSlots = [];

  var buildDefaultSlotProperty = function buildDefaultSlotProperty(props, children) {
    return createObjectProperty("default", buildSlotFn(props, children, loc));
  }; // If the slot is inside a v-for or another v-slot, force it to be dynamic
  // since it likely uses a scope variable.


  var hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0; // 1. Check for slot with slotProps on component itself.
  //    <Comp v-slot="{ prop }"/>

  var onComponentSlot = findDir(node, 'slot', true);

  if (onComponentSlot) {
    var arg = onComponentSlot.arg,
        exp = onComponentSlot.exp;

    if (arg && !isStaticExp(arg)) {
      hasDynamicSlots = true;
    }

    slotsProperties.push(createObjectProperty(arg || createSimpleExpression('default', true), buildSlotFn(exp, children, loc)));
  } // 2. Iterate through children and check for template slots
  //    <template v-slot:foo="{ prop }">


  var hasTemplateSlots = false;
  var hasNamedDefaultSlot = false;
  var implicitDefaultChildren = [];
  var seenSlotNames = new Set();

  for (var i = 0; i < children.length; i++) {
    var slotElement = children[i];
    var slotDir = void 0;

    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, 'slot', true))) {
      // not a <template v-slot>, skip.
      if (slotElement.type !== 3
      /* COMMENT */
      ) {
          implicitDefaultChildren.push(slotElement);
        }

      continue;
    }

    if (onComponentSlot) {
      // already has on-component slot - this is incorrect usage.
      context.onError(createCompilerError(36
      /* X_V_SLOT_MIXED_SLOT_USAGE */
      , slotDir.loc));
      break;
    }

    hasTemplateSlots = true;
    var slotChildren = slotElement.children,
        slotLoc = slotElement.loc;
    var _slotDir = slotDir,
        _slotDir$arg = _slotDir.arg,
        slotName = _slotDir$arg === void 0 ? createSimpleExpression("default", true) : _slotDir$arg,
        slotProps = _slotDir.exp,
        dirLoc = _slotDir.loc; // check if name is dynamic.

    var staticSlotName = void 0;

    if (isStaticExp(slotName)) {
      staticSlotName = slotName ? slotName.content : "default";
    } else {
      hasDynamicSlots = true;
    }

    var slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc); // check if this slot is conditional (v-if/v-for)

    var vIf = void 0;
    var vElse = void 0;
    var vFor = void 0;

    if (vIf = findDir(slotElement, 'if')) {
      hasDynamicSlots = true;
      dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback));
    } else if (vElse = findDir(slotElement, /^else(-if)?$/, true
    /* allowEmpty */
    )) {
      // find adjacent v-if
      var j = i;
      var prev = void 0;

      while (j--) {
        prev = children[j];

        if (prev.type !== 3
        /* COMMENT */
        ) {
            break;
          }
      }

      if (prev && isTemplateNode(prev) && findDir(prev, 'if')) {
        // remove node
        children.splice(i, 1);
        i--; // attach this slot to previous conditional

        var conditional = dynamicSlots[dynamicSlots.length - 1];

        while (conditional.alternate.type === 19
        /* JS_CONDITIONAL_EXPRESSION */
        ) {
          conditional = conditional.alternate;
        }

        conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback) : buildDynamicSlot(slotName, slotFunction);
      } else {
        context.onError(createCompilerError(29
        /* X_V_ELSE_NO_ADJACENT_IF */
        , vElse.loc));
      }
    } else if (vFor = findDir(slotElement, 'for')) {
      hasDynamicSlots = true;
      var parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);

      if (parseResult) {
        // Render the dynamic slots as an array and add it to the createSlot()
        // args. The runtime knows how to handle it appropriately.
        dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [parseResult.source, createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true
        /* force newline */
        )]));
      } else {
        context.onError(createCompilerError(31
        /* X_V_FOR_MALFORMED_EXPRESSION */
        , vFor.loc));
      }
    } else {
      // check duplicate static names
      if (staticSlotName) {
        if (seenSlotNames.has(staticSlotName)) {
          context.onError(createCompilerError(37
          /* X_V_SLOT_DUPLICATE_SLOT_NAMES */
          , dirLoc));
          continue;
        }

        seenSlotNames.add(staticSlotName);

        if (staticSlotName === 'default') {
          hasNamedDefaultSlot = true;
        }
      }

      slotsProperties.push(createObjectProperty(slotName, slotFunction));
    }
  }

  if (!onComponentSlot) {
    if (!hasTemplateSlots) {
      // implicit default slot (on component)
      slotsProperties.push(buildDefaultSlotProperty(undefined, children));
    } else if (implicitDefaultChildren.length) {
      // implicit default slot (mixed with named slots)
      if (hasNamedDefaultSlot) {
        context.onError(createCompilerError(38
        /* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
        , implicitDefaultChildren[0].loc));
      } else {
        slotsProperties.push(buildDefaultSlotProperty(undefined, implicitDefaultChildren));
      }
    }
  }

  var slotFlag = hasDynamicSlots ? 2
  /* DYNAMIC */
  : hasForwardedSlots(node.children) ? 3
  /* FORWARDED */
  : 1
  /* STABLE */
  ;
  var slots = createObjectExpression(slotsProperties.concat(createObjectProperty("_", // 2 = compiled but dynamic = can skip normalization, but must run diff
  // 1 = compiled and static = can skip normalization AND diff as optimized
  createSimpleExpression(slotFlag + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["slotFlagsText"][slotFlag], " */") : undefined), false))), loc);

  if (dynamicSlots.length) {
    slots = createCallExpression(context.helper(CREATE_SLOTS), [slots, createArrayExpression(dynamicSlots)]);
  }

  return {
    slots: slots,
    hasDynamicSlots: hasDynamicSlots
  };
}

function buildDynamicSlot(name, fn) {
  return createObjectExpression([createObjectProperty("name", name), createObjectProperty("fn", fn)]);
}

function hasForwardedSlots(children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (child.type === 1
    /* ELEMENT */
    ) {
        if (child.tagType === 2
        /* SLOT */
        || child.tagType === 0
        /* ELEMENT */
        && hasForwardedSlots(child.children)) {
          return true;
        }
      }
  }

  return false;
} // some directive transforms (e.g. v-model) may return a symbol for runtime
// import, which should be used instead of a resolveDirective call.


var directiveImportMap = new WeakMap(); // generate a JavaScript AST for this element's codegen

var transformElement = function transformElement(node, context) {
  if (!(node.type === 1
  /* ELEMENT */
  && (node.tagType === 0
  /* ELEMENT */
  || node.tagType === 1
  /* COMPONENT */
  ))) {
    return;
  } // perform the work on exit, after all child expressions have been
  // processed and merged.


  return function postTransformElement() {
    var tag = node.tag,
        props = node.props;
    var isComponent = node.tagType === 1
    /* COMPONENT */
    ; // The goal of the transform is to create a codegenNode implementing the
    // VNodeCall interface.

    var vnodeTag = isComponent ? resolveComponentType(node, context) : "\"".concat(tag, "\"");
    var isDynamicComponent = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isObject"])(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
    var vnodeProps;
    var vnodeChildren;
    var vnodePatchFlag;
    var patchFlag = 0;
    var vnodeDynamicProps;
    var dynamicPropNames;
    var vnodeDirectives;
    var shouldUseBlock = // dynamic component may resolve to plain elements
    isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent && ( // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    tag === 'svg' || tag === 'foreignObject' || // #938: elements with dynamic keys should be forced into blocks
    findProp(node, 'key', true)); // props

    if (props.length > 0) {
      var propsBuildResult = buildProps(node, context);
      vnodeProps = propsBuildResult.props;
      patchFlag = propsBuildResult.patchFlag;
      dynamicPropNames = propsBuildResult.dynamicPropNames;
      var directives = propsBuildResult.directives;
      vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map(function (dir) {
        return buildDirectiveArgs(dir, context);
      })) : undefined;
    } // children


    if (node.children.length > 0) {
      if (vnodeTag === KEEP_ALIVE) {
        // Although a built-in component, we compile KeepAlive with raw children
        // instead of slot functions so that it can be used inside Transition
        // or other Transition-wrapping HOCs.
        // To ensure correct updates with block optimizations, we need to:
        // 1. Force keep-alive into a block. This avoids its children being
        //    collected by a parent block.
        shouldUseBlock = true; // 2. Force keep-alive to always be updated, since it uses raw children.

        patchFlag |= 1024
        /* DYNAMIC_SLOTS */
        ;

        if ( true && node.children.length > 1) {
          context.onError(createCompilerError(44
          /* X_KEEP_ALIVE_INVALID_CHILDREN */
          , {
            start: node.children[0].loc.start,
            end: node.children[node.children.length - 1].loc.end,
            source: ''
          }));
        }
      }

      var shouldBuildAsSlots = isComponent && // Teleport is not a real component and has dedicated runtime handling
      vnodeTag !== TELEPORT && // explained above.
      vnodeTag !== KEEP_ALIVE;

      if (shouldBuildAsSlots) {
        var _buildSlots = buildSlots(node, context),
            slots = _buildSlots.slots,
            hasDynamicSlots = _buildSlots.hasDynamicSlots;

        vnodeChildren = slots;

        if (hasDynamicSlots) {
          patchFlag |= 1024
          /* DYNAMIC_SLOTS */
          ;
        }
      } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
        var child = node.children[0];
        var type = child.type; // check for dynamic text children

        var hasDynamicTextChild = type === 5
        /* INTERPOLATION */
        || type === 8
        /* COMPOUND_EXPRESSION */
        ;

        if (hasDynamicTextChild && getConstantType(child, context) === 0
        /* NOT_CONSTANT */
        ) {
            patchFlag |= 1
            /* TEXT */
            ;
          } // pass directly if the only child is a text node
        // (plain / interpolation / expression)


        if (hasDynamicTextChild || type === 2
        /* TEXT */
        ) {
            vnodeChildren = child;
          } else {
          vnodeChildren = node.children;
        }
      } else {
        vnodeChildren = node.children;
      }
    } // patchFlag & dynamicPropNames


    if (patchFlag !== 0) {
      if (true) {
        if (patchFlag < 0) {
          // special flags (negative and mutually exclusive)
          vnodePatchFlag = patchFlag + " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["PatchFlagNames"][patchFlag], " */");
        } else {
          // bitwise flags
          var flagNames = Object.keys(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["PatchFlagNames"]).map(Number).filter(function (n) {
            return n > 0 && patchFlag & n;
          }).map(function (n) {
            return _vue_shared__WEBPACK_IMPORTED_MODULE_0__["PatchFlagNames"][n];
          }).join(", ");
          vnodePatchFlag = patchFlag + " /* ".concat(flagNames, " */");
        }
      } else {}

      if (dynamicPropNames && dynamicPropNames.length) {
        vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
      }
    }

    node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false
    /* disableTracking */
    , node.loc);
  };
};

function resolveComponentType(node, context) {
  var ssr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var tag = node.tag; // 1. dynamic component

  var isProp = node.tag === 'component' ? findProp(node, 'is') : findDir(node, 'is');

  if (isProp) {
    var exp = isProp.type === 6
    /* ATTRIBUTE */
    ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;

    if (exp) {
      return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [exp]);
    }
  } // 2. built-in components (Teleport, Transition, KeepAlive, Suspense...)


  var builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);

  if (builtIn) {
    // built-ins are simply fallthroughs / have special handling during ssr
    // so we don't need to import their runtime equivalents
    if (!ssr) context.helper(builtIn);
    return builtIn;
  } // 5. user component (resolve)


  context.helper(RESOLVE_COMPONENT);
  context.components.add(tag);
  return toValidAssetId(tag, "component");
}

function buildProps(node, context) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : node.props;
  var ssr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var tag = node.tag,
      elementLoc = node.loc;
  var isComponent = node.tagType === 1
  /* COMPONENT */
  ;
  var properties = [];
  var mergeArgs = [];
  var runtimeDirectives = []; // patchFlag analysis

  var patchFlag = 0;
  var hasRef = false;
  var hasClassBinding = false;
  var hasStyleBinding = false;
  var hasHydrationEventBinding = false;
  var hasDynamicKeys = false;
  var hasVnodeHook = false;
  var dynamicPropNames = [];

  var analyzePatchFlag = function analyzePatchFlag(_ref6) {
    var key = _ref6.key,
        value = _ref6.value;

    if (isStaticExp(key)) {
      var name = key.content;
      var isEventHandler = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isOn"])(name);

      if (!isComponent && isEventHandler && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      name.toLowerCase() !== 'onclick' && // omit v-model handlers
      name !== 'onUpdate:modelValue' && // omit onVnodeXXX hooks
      !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isReservedProp"])(name)) {
        hasHydrationEventBinding = true;
      }

      if (isEventHandler && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isReservedProp"])(name)) {
        hasVnodeHook = true;
      }

      if (value.type === 20
      /* JS_CACHE_EXPRESSION */
      || (value.type === 4
      /* SIMPLE_EXPRESSION */
      || value.type === 8
      /* COMPOUND_EXPRESSION */
      ) && getConstantType(value, context) > 0) {
        // skip if the prop is a cached handler or has constant value
        return;
      }

      if (name === 'ref') {
        hasRef = true;
      } else if (name === 'class' && !isComponent) {
        hasClassBinding = true;
      } else if (name === 'style' && !isComponent) {
        hasStyleBinding = true;
      } else if (name !== 'key' && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
    } else {
      hasDynamicKeys = true;
    }
  };

  for (var i = 0; i < props.length; i++) {
    // static attribute
    var prop = props[i];

    if (prop.type === 6
    /* ATTRIBUTE */
    ) {
        var loc = prop.loc,
            name = prop.name,
            value = prop.value;
        var isStatic = true;

        if (name === 'ref') {
          hasRef = true;
        } // skip :is on <component>


        if (name === 'is' && tag === 'component') {
          continue;
        }

        properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : '', isStatic, value ? value.loc : loc)));
      } else {
      // directives
      var _name = prop.name,
          arg = prop.arg,
          exp = prop.exp,
          _loc2 = prop.loc;
      var isBind = _name === 'bind';

      var _isOn = _name === 'on'; // skip v-slot - it is handled by its dedicated transform.


      if (_name === 'slot') {
        if (!isComponent) {
          context.onError(createCompilerError(39
          /* X_V_SLOT_MISPLACED */
          , _loc2));
        }

        continue;
      } // skip v-once - it is handled by its dedicated transform.


      if (_name === 'once') {
        continue;
      } // skip v-is and :is on <component>


      if (_name === 'is' || isBind && tag === 'component' && isBindKey(arg, 'is')) {
        continue;
      } // skip v-on in SSR compilation


      if (_isOn && ssr) {
        continue;
      } // special case for v-bind and v-on with no argument


      if (!arg && (isBind || _isOn)) {
        hasDynamicKeys = true;

        if (exp) {
          if (properties.length) {
            mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
            properties = [];
          }

          if (isBind) {
            mergeArgs.push(exp);
          } else {
            // v-on="obj" -> toHandlers(obj)
            mergeArgs.push({
              type: 14
              /* JS_CALL_EXPRESSION */
              ,
              loc: _loc2,
              callee: context.helper(TO_HANDLERS),
              arguments: [exp]
            });
          }
        } else {
          context.onError(createCompilerError(isBind ? 33
          /* X_V_BIND_NO_EXPRESSION */
          : 34
          /* X_V_ON_NO_EXPRESSION */
          , _loc2));
        }

        continue;
      }

      var directiveTransform = context.directiveTransforms[_name];

      if (directiveTransform) {
        var _properties;

        // has built-in directive transform.
        var _directiveTransform = directiveTransform(prop, node, context),
            _props = _directiveTransform.props,
            needRuntime = _directiveTransform.needRuntime;

        !ssr && _props.forEach(analyzePatchFlag);

        (_properties = properties).push.apply(_properties, _toConsumableArray(_props));

        if (needRuntime) {
          runtimeDirectives.push(prop);

          if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(needRuntime)) {
            directiveImportMap.set(prop, needRuntime);
          }
        }
      } else {
        // no built-in transform, this is a user custom directive.
        runtimeDirectives.push(prop);
      }
    }
  }

  var propsExpression = undefined; // has v-bind="object" or v-on="object", wrap with mergeProps

  if (mergeArgs.length) {
    if (properties.length) {
      mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
    }

    if (mergeArgs.length > 1) {
      propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
    } else {
      // single v-bind with nothing else - no need for a mergeProps call
      propsExpression = mergeArgs[0];
    }
  } else if (properties.length) {
    propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
  } // patchFlag analysis


  if (hasDynamicKeys) {
    patchFlag |= 16
    /* FULL_PROPS */
    ;
  } else {
    if (hasClassBinding) {
      patchFlag |= 2
      /* CLASS */
      ;
    }

    if (hasStyleBinding) {
      patchFlag |= 4
      /* STYLE */
      ;
    }

    if (dynamicPropNames.length) {
      patchFlag |= 8
      /* PROPS */
      ;
    }

    if (hasHydrationEventBinding) {
      patchFlag |= 32
      /* HYDRATE_EVENTS */
      ;
    }
  }

  if ((patchFlag === 0 || patchFlag === 32
  /* HYDRATE_EVENTS */
  ) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
    patchFlag |= 512
    /* NEED_PATCH */
    ;
  }

  return {
    props: propsExpression,
    directives: runtimeDirectives,
    patchFlag: patchFlag,
    dynamicPropNames: dynamicPropNames
  };
} // Dedupe props in an object literal.
// Literal duplicated attributes would have been warned during the parse phase,
// however, it's possible to encounter duplicated `onXXX` handlers with different
// modifiers. We also need to merge static and dynamic class / style attributes.
// - onXXX handlers / style: merge into array
// - class: merge into single expression with concatenation


function dedupeProperties(properties) {
  var knownProps = new Map();
  var deduped = [];

  for (var i = 0; i < properties.length; i++) {
    var prop = properties[i]; // dynamic keys are always allowed

    if (prop.key.type === 8
    /* COMPOUND_EXPRESSION */
    || !prop.key.isStatic) {
      deduped.push(prop);
      continue;
    }

    var name = prop.key.content;
    var existing = knownProps.get(name);

    if (existing) {
      if (name === 'style' || name === 'class' || name.startsWith('on')) {
        mergeAsArray(existing, prop);
      } // unexpected duplicate, should have emitted error during parse

    } else {
      knownProps.set(name, prop);
      deduped.push(prop);
    }
  }

  return deduped;
}

function mergeAsArray(existing, incoming) {
  if (existing.value.type === 17
  /* JS_ARRAY_EXPRESSION */
  ) {
      existing.value.elements.push(incoming.value);
    } else {
    existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
  }
}

function buildDirectiveArgs(dir, context) {
  var dirArgs = [];
  var runtime = directiveImportMap.get(dir);

  if (runtime) {
    // built-in directive with runtime
    dirArgs.push(context.helperString(runtime));
  } else {
    {
      // inject statement for resolving directive
      context.helper(RESOLVE_DIRECTIVE);
      context.directives.add(dir.name);
      dirArgs.push(toValidAssetId(dir.name, "directive"));
    }
  }

  var loc = dir.loc;
  if (dir.exp) dirArgs.push(dir.exp);

  if (dir.arg) {
    if (!dir.exp) {
      dirArgs.push("void 0");
    }

    dirArgs.push(dir.arg);
  }

  if (Object.keys(dir.modifiers).length) {
    if (!dir.arg) {
      if (!dir.exp) {
        dirArgs.push("void 0");
      }

      dirArgs.push("void 0");
    }

    var trueExpression = createSimpleExpression("true", false, loc);
    dirArgs.push(createObjectExpression(dir.modifiers.map(function (modifier) {
      return createObjectProperty(modifier, trueExpression);
    }), loc));
  }

  return createArrayExpression(dirArgs, dir.loc);
}

function stringifyDynamicPropNames(props) {
  var propsNamesString = "[";

  for (var i = 0, l = props.length; i < l; i++) {
    propsNamesString += JSON.stringify(props[i]);
    if (i < l - 1) propsNamesString += ', ';
  }

  return propsNamesString + "]";
}

var EMPTY_OBJ =  true ? Object.freeze({}) : undefined;
var EMPTY_ARR =  true ? Object.freeze([]) : undefined;

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
/**
 * @private
 */

var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});

var transformSlotOutlet = function transformSlotOutlet(node, context) {
  if (isSlotOutlet(node)) {
    var children = node.children,
        loc = node.loc;

    var _processSlotOutlet = processSlotOutlet(node, context),
        slotName = _processSlotOutlet.slotName,
        slotProps = _processSlotOutlet.slotProps;

    var slotArgs = [context.prefixIdentifiers ? "_ctx.$slots" : "$slots", slotName];

    if (slotProps) {
      slotArgs.push(slotProps);
    }

    if (children.length) {
      if (!slotProps) {
        slotArgs.push("{}");
      }

      slotArgs.push(createFunctionExpression([], children, false, false, loc));
    }

    node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
  }
};

function processSlotOutlet(node, context) {
  var slotName = "\"default\"";
  var slotProps = undefined;
  var nonNameProps = [];

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 6
    /* ATTRIBUTE */
    ) {
        if (p.value) {
          if (p.name === 'name') {
            slotName = JSON.stringify(p.value.content);
          } else {
            p.name = camelize(p.name);
            nonNameProps.push(p);
          }
        }
      } else {
      if (p.name === 'bind' && isBindKey(p.arg, 'name')) {
        if (p.exp) slotName = p.exp;
      } else {
        if (p.name === 'bind' && p.arg && isStaticExp(p.arg)) {
          p.arg.content = camelize(p.arg.content);
        }

        nonNameProps.push(p);
      }
    }
  }

  if (nonNameProps.length > 0) {
    var _buildProps = buildProps(node, context, nonNameProps),
        props = _buildProps.props,
        directives = _buildProps.directives;

    slotProps = props;

    if (directives.length) {
      context.onError(createCompilerError(35
      /* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
      , directives[0].loc));
    }
  }

  return {
    slotName: slotName,
    slotProps: slotProps
  };
}

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^\s*function(?:\s+[\w$]+)?\s*\(/;

var transformOn = function transformOn(dir, node, context, augmentor) {
  var loc = dir.loc,
      modifiers = dir.modifiers,
      arg = dir.arg;

  if (!dir.exp && !modifiers.length) {
    context.onError(createCompilerError(34
    /* X_V_ON_NO_EXPRESSION */
    , loc));
  }

  var eventName;

  if (arg.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
      if (arg.isStatic) {
        var rawName = arg.content; // for all event listeners, auto convert it to camelCase. See issue #2249

        eventName = createSimpleExpression(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["toHandlerKey"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["camelize"])(rawName)), true, arg.loc);
      } else {
        // #2388
        eventName = createCompoundExpression(["".concat(context.helperString(TO_HANDLER_KEY), "("), arg, ")"]);
      }
    } else {
    // already a compound expression.
    eventName = arg;
    eventName.children.unshift("".concat(context.helperString(TO_HANDLER_KEY), "("));
    eventName.children.push(")");
  } // handler processing


  var exp = dir.exp;

  if (exp && !exp.content.trim()) {
    exp = undefined;
  }

  var shouldCache = context.cacheHandlers && !exp;

  if (exp) {
    var isMemberExp = isMemberExpression(exp.content);
    var isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
    var hasMultipleStatements = exp.content.includes(";");

    if (true) {
      validateBrowserExpression(exp, context, false, hasMultipleStatements);
    }

    if (isInlineStatement || shouldCache && isMemberExp) {
      // wrap inline statement in a function expression
      exp = createCompoundExpression(["".concat(isInlineStatement ? "$event" : "".concat("", "(...args)"), " => ").concat(hasMultipleStatements ? "{" : "("), exp, hasMultipleStatements ? "}" : ")"]);
    }
  }

  var ret = {
    props: [createObjectProperty(eventName, exp || createSimpleExpression("() => {}", false, loc))]
  }; // apply extended compiler augmentor

  if (augmentor) {
    ret = augmentor(ret);
  }

  if (shouldCache) {
    // cache handlers so that it's always the same handler being passed down.
    // this avoids unnecessary re-renders when users use inline handlers on
    // components.
    ret.props[0].value = context.cache(ret.props[0].value);
  }

  return ret;
}; // v-bind without arg is handled directly in ./transformElements.ts due to it affecting
// codegen for the entire props object. This transform here is only for v-bind
// *with* args.


var transformBind = function transformBind(dir, node, context) {
  var exp = dir.exp,
      modifiers = dir.modifiers,
      loc = dir.loc;
  var arg = dir.arg;

  if (arg.type !== 4
  /* SIMPLE_EXPRESSION */
  ) {
      arg.children.unshift("(");
      arg.children.push(") || \"\"");
    } else if (!arg.isStatic) {
    arg.content = "".concat(arg.content, " || \"\"");
  } // .prop is no longer necessary due to new patch behavior
  // .sync is replaced by v-model:arg


  if (modifiers.includes('camel')) {
    if (arg.type === 4
    /* SIMPLE_EXPRESSION */
    ) {
        if (arg.isStatic) {
          arg.content = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["camelize"])(arg.content);
        } else {
          arg.content = "".concat(context.helperString(CAMELIZE), "(").concat(arg.content, ")");
        }
      } else {
      arg.children.unshift("".concat(context.helperString(CAMELIZE), "("));
      arg.children.push(")");
    }
  }

  if (!exp || exp.type === 4
  /* SIMPLE_EXPRESSION */
  && !exp.content.trim()) {
    context.onError(createCompilerError(33
    /* X_V_BIND_NO_EXPRESSION */
    , loc));
    return {
      props: [createObjectProperty(arg, createSimpleExpression('', true, loc))]
    };
  }

  return {
    props: [createObjectProperty(arg, exp)]
  };
}; // Merge adjacent text nodes and expressions into a single expression
// e.g. <div>abc {{ d }} {{ e }}</div> should have a single expression node as child.


var transformText = function transformText(node, context) {
  if (node.type === 0
  /* ROOT */
  || node.type === 1
  /* ELEMENT */
  || node.type === 11
  /* FOR */
  || node.type === 10
  /* IF_BRANCH */
  ) {
      // perform the transform on node exit so that all expressions have already
      // been processed.
      return function () {
        var children = node.children;
        var currentContainer = undefined;
        var hasText = false;

        for (var i = 0; i < children.length; i++) {
          var child = children[i];

          if (isText(child)) {
            hasText = true;

            for (var j = i + 1; j < children.length; j++) {
              var next = children[j];

              if (isText(next)) {
                if (!currentContainer) {
                  currentContainer = children[i] = {
                    type: 8
                    /* COMPOUND_EXPRESSION */
                    ,
                    loc: child.loc,
                    children: [child]
                  };
                } // merge adjacent text node into current


                currentContainer.children.push(" + ", next);
                children.splice(j, 1);
                j--;
              } else {
                currentContainer = undefined;
                break;
              }
            }
          }
        }

        if (!hasText || // if this is a plain element with a single text child, leave it
        // as-is since the runtime has dedicated fast path for this by directly
        // setting textContent of the element.
        // for component root it's always normalized anyway.
        children.length === 1 && (node.type === 0
        /* ROOT */
        || node.type === 1
        /* ELEMENT */
        && node.tagType === 0
        /* ELEMENT */
        )) {
          return;
        } // pre-convert text nodes into createTextVNode(text) calls to avoid
        // runtime normalization.


        for (var _i7 = 0; _i7 < children.length; _i7++) {
          var _child = children[_i7];

          if (isText(_child) || _child.type === 8
          /* COMPOUND_EXPRESSION */
          ) {
              var callArgs = []; // createTextVNode defaults to single whitespace, so if it is a
              // single space the code could be an empty call to save bytes.

              if (_child.type !== 2
              /* TEXT */
              || _child.content !== ' ') {
                callArgs.push(_child);
              } // mark dynamic text with flag so it gets patched inside a block


              if (!context.ssr && getConstantType(_child, context) === 0
              /* NOT_CONSTANT */
              ) {
                  callArgs.push(1
                  /* TEXT */
                  + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["PatchFlagNames"][1
                  /* TEXT */
                  ], " */") : undefined));
                }

              children[_i7] = {
                type: 12
                /* TEXT_CALL */
                ,
                content: _child,
                loc: _child.loc,
                codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
              };
            }
        }
      };
    }
};

var seen = new WeakSet();

var transformOnce = function transformOnce(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && findDir(node, 'once', true)) {
    if (seen.has(node)) {
      return;
    }

    seen.add(node);
    context.helper(SET_BLOCK_TRACKING);
    return function () {
      var cur = context.currentNode;

      if (cur.codegenNode) {
        cur.codegenNode = context.cache(cur.codegenNode, true
        /* isVNode */
        );
      }
    };
  }
};

var transformModel = function transformModel(dir, node, context) {
  var exp = dir.exp,
      arg = dir.arg;

  if (!exp) {
    context.onError(createCompilerError(40
    /* X_V_MODEL_NO_EXPRESSION */
    , dir.loc));
    return createTransformProps();
  }

  var rawExp = exp.loc.source;
  var expString = exp.type === 4
  /* SIMPLE_EXPRESSION */
  ? exp.content : rawExp; // im SFC <script setup> inline mode, the exp may have been transformed into
  // _unref(exp)

  var bindingType = context.bindingMetadata[rawExp];
  var maybeRef = !true
  /* SETUP_CONST */
  ;

  if (!isMemberExpression(expString) && !maybeRef) {
    context.onError(createCompilerError(41
    /* X_V_MODEL_MALFORMED_EXPRESSION */
    , exp.loc));
    return createTransformProps();
  }

  var propName = arg ? arg : createSimpleExpression('modelValue', true);
  var eventName = arg ? isStaticExp(arg) ? "onUpdate:".concat(arg.content) : createCompoundExpression(['"onUpdate:" + ', arg]) : "onUpdate:modelValue";
  var assignmentExp;
  var eventArg = context.isTS ? "($event: any)" : "$event";
  {
    assignmentExp = createCompoundExpression(["".concat(eventArg, " => ("), exp, " = $event)"]);
  }
  var props = [// modelValue: foo
  createObjectProperty(propName, dir.exp), // "onUpdate:modelValue": $event => (foo = $event)
  createObjectProperty(eventName, assignmentExp)]; // modelModifiers: { foo: true, "bar-baz": true }

  if (dir.modifiers.length && node.tagType === 1
  /* COMPONENT */
  ) {
      var modifiers = dir.modifiers.map(function (m) {
        return (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + ": true";
      }).join(", ");
      var modifiersKey = arg ? isStaticExp(arg) ? "".concat(arg.content, "Modifiers") : createCompoundExpression([arg, ' + "Modifiers"']) : "modelModifiers";
      props.push(createObjectProperty(modifiersKey, createSimpleExpression("{ ".concat(modifiers, " }"), false, dir.loc, 2
      /* CAN_HOIST */
      )));
    }

  return createTransformProps(props);
};

function createTransformProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    props: props
  };
}

function getBaseTransformPreset(prefixIdentifiers) {
  return [[transformOnce, transformIf, transformFor].concat(_toConsumableArray( true ? [transformExpression] : undefined), [transformSlotOutlet, transformElement, trackSlotScopes, transformText]), {
    on: transformOn,
    bind: transformBind,
    model: transformModel
  }];
} // we name it `baseCompile` so that higher order compilers like
// @vue/compiler-dom can export `compile` while re-exporting everything else.


function baseCompile(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var onError = options.onError || defaultOnError;
  var isModuleMode = options.mode === 'module';
  /* istanbul ignore if */

  {
    if (options.prefixIdentifiers === true) {
      onError(createCompilerError(45
      /* X_PREFIX_ID_NOT_SUPPORTED */
      ));
    } else if (isModuleMode) {
      onError(createCompilerError(46
      /* X_MODULE_MODE_NOT_SUPPORTED */
      ));
    }
  }
  var prefixIdentifiers = !true;

  if (options.cacheHandlers) {
    onError(createCompilerError(47
    /* X_CACHE_HANDLER_NOT_SUPPORTED */
    ));
  }

  if (options.scopeId && !isModuleMode) {
    onError(createCompilerError(48
    /* X_SCOPE_ID_NOT_SUPPORTED */
    ));
  }

  var ast = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isString"])(template) ? baseParse(template, options) : template;

  var _getBaseTransformPres = getBaseTransformPreset(),
      _getBaseTransformPres2 = _slicedToArray(_getBaseTransformPres, 2),
      nodeTransforms = _getBaseTransformPres2[0],
      directiveTransforms = _getBaseTransformPres2[1];

  transform(ast, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, options, {
    prefixIdentifiers: prefixIdentifiers,
    nodeTransforms: [].concat(_toConsumableArray(nodeTransforms), _toConsumableArray(options.nodeTransforms || [])),
    directiveTransforms: Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, directiveTransforms, options.directiveTransforms || {} // user transforms
    )
  }));
  return generate(ast, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, options, {
    prefixIdentifiers: prefixIdentifiers
  }));
}

var noopDirectiveTransform = function noopDirectiveTransform() {
  return {
    props: []
  };
};



/***/ }),

/***/ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js ***!
  \*************************************************************************/
/*! exports provided: generateCodeFrame, BASE_TRANSITION, CAMELIZE, CAPITALIZE, CREATE_BLOCK, CREATE_COMMENT, CREATE_SLOTS, CREATE_STATIC, CREATE_TEXT, CREATE_VNODE, FRAGMENT, IS_REF, KEEP_ALIVE, MERGE_PROPS, OPEN_BLOCK, POP_SCOPE_ID, PUSH_SCOPE_ID, RENDER_LIST, RENDER_SLOT, RESOLVE_COMPONENT, RESOLVE_DIRECTIVE, RESOLVE_DYNAMIC_COMPONENT, SET_BLOCK_TRACKING, SUSPENSE, TELEPORT, TO_DISPLAY_STRING, TO_HANDLERS, TO_HANDLER_KEY, UNREF, WITH_CTX, WITH_DIRECTIVES, WITH_SCOPE_ID, advancePositionWithClone, advancePositionWithMutation, assert, baseCompile, baseParse, buildProps, buildSlots, createArrayExpression, createAssignmentExpression, createBlockStatement, createCacheExpression, createCallExpression, createCompilerError, createCompoundExpression, createConditionalExpression, createForLoopParams, createFunctionExpression, createIfStatement, createInterpolation, createObjectExpression, createObjectProperty, createReturnStatement, createRoot, createSequenceExpression, createSimpleExpression, createStructuralDirectiveTransform, createTemplateLiteral, createTransformContext, createVNodeCall, findDir, findProp, generate, getBaseTransformPreset, getInnerRange, hasDynamicKeyVBind, hasScopeRef, helperNameMap, injectProp, isBindKey, isBuiltInType, isCoreComponent, isMemberExpression, isSimpleIdentifier, isSlotOutlet, isStaticExp, isTemplateNode, isText, isVSlot, locStub, noopDirectiveTransform, processExpression, processFor, processIf, processSlotOutlet, registerRuntimeHelpers, resolveComponentType, toValidAssetId, trackSlotScopes, trackVForSlotScopes, transform, transformBind, transformElement, transformExpression, transformModel, transformOn, traverseNode, DOMDirectiveTransforms, DOMNodeTransforms, TRANSITION, TRANSITION_GROUP, V_MODEL_CHECKBOX, V_MODEL_DYNAMIC, V_MODEL_RADIO, V_MODEL_SELECT, V_MODEL_TEXT, V_ON_WITH_KEYS, V_ON_WITH_MODIFIERS, V_SHOW, compile, createDOMCompilerError, parse, parserOptions, transformStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMDirectiveTransforms", function() { return DOMDirectiveTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMNodeTransforms", function() { return DOMNodeTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSITION", function() { return TRANSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSITION_GROUP", function() { return TRANSITION_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_MODEL_CHECKBOX", function() { return V_MODEL_CHECKBOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_MODEL_DYNAMIC", function() { return V_MODEL_DYNAMIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_MODEL_RADIO", function() { return V_MODEL_RADIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_MODEL_SELECT", function() { return V_MODEL_SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_MODEL_TEXT", function() { return V_MODEL_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_ON_WITH_KEYS", function() { return V_ON_WITH_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_ON_WITH_MODIFIERS", function() { return V_ON_WITH_MODIFIERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_SHOW", function() { return V_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDOMCompilerError", function() { return createDOMCompilerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parserOptions", function() { return parserOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformStyle", function() { return transformStyle; });
/* harmony import */ var _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/compiler-core */ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateCodeFrame", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["generateCodeFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_TRANSITION", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["BASE_TRANSITION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CAMELIZE", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["CAMELIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CAPITALIZE", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["CAPITALIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_BLOCK", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["CREATE_BLOCK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_COMMENT", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["CREATE_COMMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_SLOTS", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["CREATE_SLOTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_STATIC", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["CREATE_STATIC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_TEXT", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["CREATE_TEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_VNODE", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["CREATE_VNODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FRAGMENT", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["FRAGMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IS_REF", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["IS_REF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEEP_ALIVE", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["KEEP_ALIVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MERGE_PROPS", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["MERGE_PROPS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPEN_BLOCK", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["OPEN_BLOCK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POP_SCOPE_ID", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["POP_SCOPE_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PUSH_SCOPE_ID", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["PUSH_SCOPE_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDER_LIST", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["RENDER_LIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDER_SLOT", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["RENDER_SLOT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_COMPONENT", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["RESOLVE_COMPONENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_DIRECTIVE", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["RESOLVE_DIRECTIVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_DYNAMIC_COMPONENT", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["RESOLVE_DYNAMIC_COMPONENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_BLOCK_TRACKING", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["SET_BLOCK_TRACKING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SUSPENSE", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["SUSPENSE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TELEPORT", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["TELEPORT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TO_DISPLAY_STRING", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["TO_DISPLAY_STRING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TO_HANDLERS", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["TO_HANDLERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TO_HANDLER_KEY", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["TO_HANDLER_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UNREF", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["UNREF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WITH_CTX", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["WITH_CTX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WITH_DIRECTIVES", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["WITH_DIRECTIVES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WITH_SCOPE_ID", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["WITH_SCOPE_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "advancePositionWithClone", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["advancePositionWithClone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "advancePositionWithMutation", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["advancePositionWithMutation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["assert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseCompile", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["baseCompile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseParse", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["baseParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildProps", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["buildProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildSlots", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["buildSlots"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createArrayExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createArrayExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAssignmentExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createAssignmentExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBlockStatement", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createBlockStatement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCacheExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createCacheExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCallExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createCallExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCompilerError", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createCompilerError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCompoundExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createCompoundExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createConditionalExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createConditionalExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createForLoopParams", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createForLoopParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFunctionExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createFunctionExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIfStatement", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createIfStatement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInterpolation", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createInterpolation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createObjectExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createObjectExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createObjectProperty", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createObjectProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReturnStatement", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createReturnStatement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRoot", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSequenceExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createSequenceExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSimpleExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createSimpleExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStructuralDirectiveTransform", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createStructuralDirectiveTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTemplateLiteral", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createTemplateLiteral"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTransformContext", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createTransformContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVNodeCall", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createVNodeCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDir", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["findDir"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findProp", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["findProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["generate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBaseTransformPreset", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["getBaseTransformPreset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInnerRange", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["getInnerRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasDynamicKeyVBind", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["hasDynamicKeyVBind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasScopeRef", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["hasScopeRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperNameMap", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["helperNameMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injectProp", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["injectProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBindKey", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isBindKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBuiltInType", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isBuiltInType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCoreComponent", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isCoreComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMemberExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isMemberExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSimpleIdentifier", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isSimpleIdentifier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSlotOutlet", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isSlotOutlet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStaticExp", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isStaticExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplateNode", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isTemplateNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isText", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVSlot", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isVSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locStub", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["locStub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noopDirectiveTransform", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["noopDirectiveTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["processExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processFor", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["processFor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processIf", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["processIf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processSlotOutlet", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["processSlotOutlet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerRuntimeHelpers", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["registerRuntimeHelpers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveComponentType", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["resolveComponentType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toValidAssetId", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["toValidAssetId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trackSlotScopes", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["trackSlotScopes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trackVForSlotScopes", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["trackVForSlotScopes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["transform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformBind", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["transformBind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformElement", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["transformElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["transformExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformModel", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["transformModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformOn", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["transformOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "traverseNode", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["traverseNode"]; });

/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
var _registerRuntimeHelpe, _DOMErrorMessages;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var V_MODEL_RADIO = Symbol( true ? "vModelRadio" : undefined);
var V_MODEL_CHECKBOX = Symbol( true ? "vModelCheckbox" : undefined);
var V_MODEL_TEXT = Symbol( true ? "vModelText" : undefined);
var V_MODEL_SELECT = Symbol( true ? "vModelSelect" : undefined);
var V_MODEL_DYNAMIC = Symbol( true ? "vModelDynamic" : undefined);
var V_ON_WITH_MODIFIERS = Symbol( true ? "vOnModifiersGuard" : undefined);
var V_ON_WITH_KEYS = Symbol( true ? "vOnKeysGuard" : undefined);
var V_SHOW = Symbol( true ? "vShow" : undefined);
var TRANSITION = Symbol( true ? "Transition" : undefined);
var TRANSITION_GROUP = Symbol( true ? "TransitionGroup" : undefined);
Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["registerRuntimeHelpers"])((_registerRuntimeHelpe = {}, _defineProperty(_registerRuntimeHelpe, V_MODEL_RADIO, "vModelRadio"), _defineProperty(_registerRuntimeHelpe, V_MODEL_CHECKBOX, "vModelCheckbox"), _defineProperty(_registerRuntimeHelpe, V_MODEL_TEXT, "vModelText"), _defineProperty(_registerRuntimeHelpe, V_MODEL_SELECT, "vModelSelect"), _defineProperty(_registerRuntimeHelpe, V_MODEL_DYNAMIC, "vModelDynamic"), _defineProperty(_registerRuntimeHelpe, V_ON_WITH_MODIFIERS, "withModifiers"), _defineProperty(_registerRuntimeHelpe, V_ON_WITH_KEYS, "withKeys"), _defineProperty(_registerRuntimeHelpe, V_SHOW, "vShow"), _defineProperty(_registerRuntimeHelpe, TRANSITION, "Transition"), _defineProperty(_registerRuntimeHelpe, TRANSITION_GROUP, "TransitionGroup"), _registerRuntimeHelpe));
/* eslint-disable no-restricted-globals */

var decoder;

function decodeHtmlBrowser(raw) {
  (decoder || (decoder = document.createElement('div'))).innerHTML = raw;
  return decoder.textContent;
}

var isRawTextContainer = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["makeMap"])('style,iframe,script,noscript', true);
var parserOptions = {
  isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__["isVoidTag"],
  isNativeTag: function isNativeTag(tag) {
    return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isHTMLTag"])(tag) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isSVGTag"])(tag);
  },
  isPreTag: function isPreTag(tag) {
    return tag === 'pre';
  },
  decodeEntities: decodeHtmlBrowser,
  isBuiltInComponent: function isBuiltInComponent(tag) {
    if (Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isBuiltInType"])(tag, "Transition")) {
      return TRANSITION;
    } else if (Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isBuiltInType"])(tag, "TransitionGroup")) {
      return TRANSITION_GROUP;
    }
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace: function getNamespace(tag, parent) {
    var ns = parent ? parent.ns : 0
    /* HTML */
    ;

    if (parent && ns === 2
    /* MATH_ML */
    ) {
        if (parent.tag === 'annotation-xml') {
          if (tag === 'svg') {
            return 1
            /* SVG */
            ;
          }

          if (parent.props.some(function (a) {
            return a.type === 6
            /* ATTRIBUTE */
            && a.name === 'encoding' && a.value != null && (a.value.content === 'text/html' || a.value.content === 'application/xhtml+xml');
          })) {
            ns = 0
            /* HTML */
            ;
          }
        } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== 'mglyph' && tag !== 'malignmark') {
          ns = 0
          /* HTML */
          ;
        }
      } else if (parent && ns === 1
    /* SVG */
    ) {
        if (parent.tag === 'foreignObject' || parent.tag === 'desc' || parent.tag === 'title') {
          ns = 0
          /* HTML */
          ;
        }
      }

    if (ns === 0
    /* HTML */
    ) {
        if (tag === 'svg') {
          return 1
          /* SVG */
          ;
        }

        if (tag === 'math') {
          return 2
          /* MATH_ML */
          ;
        }
      }

    return ns;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
  getTextMode: function getTextMode(_ref) {
    var tag = _ref.tag,
        ns = _ref.ns;

    if (ns === 0
    /* HTML */
    ) {
        if (tag === 'textarea' || tag === 'title') {
          return 1
          /* RCDATA */
          ;
        }

        if (isRawTextContainer(tag)) {
          return 2
          /* RAWTEXT */
          ;
        }
      }

    return 0
    /* DATA */
    ;
  }
}; // Parse inline CSS strings for static style attributes into an object.
// This is a NodeTransform since it works on the static `style` attribute and
// converts it into a dynamic equivalent:
// style="color: red" -> :style='{ "color": "red" }'
// It is then processed by `transformElement` and included in the generated
// props.

var transformStyle = function transformStyle(node) {
  if (node.type === 1
  /* ELEMENT */
  ) {
      node.props.forEach(function (p, i) {
        if (p.type === 6
        /* ATTRIBUTE */
        && p.name === 'style' && p.value) {
          // replace p with an expression node
          node.props[i] = {
            type: 7
            /* DIRECTIVE */
            ,
            name: "bind",
            arg: Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createSimpleExpression"])("style", true, p.loc),
            exp: parseInlineCSS(p.value.content, p.loc),
            modifiers: [],
            loc: p.loc
          };
        }
      });
    }
};

var parseInlineCSS = function parseInlineCSS(cssText, loc) {
  var normalized = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["parseStringStyle"])(cssText);
  return Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createSimpleExpression"])(JSON.stringify(normalized), false, loc, 3
  /* CAN_STRINGIFY */
  );
};

function createDOMCompilerError(code, loc) {
  return Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createCompilerError"])(code, loc,  true ? DOMErrorMessages : undefined);
}

var DOMErrorMessages = (_DOMErrorMessages = {}, _defineProperty(_DOMErrorMessages, 49
/* X_V_HTML_NO_EXPRESSION */
, "v-html is missing expression."), _defineProperty(_DOMErrorMessages, 50
/* X_V_HTML_WITH_CHILDREN */
, "v-html will override element children."), _defineProperty(_DOMErrorMessages, 51
/* X_V_TEXT_NO_EXPRESSION */
, "v-text is missing expression."), _defineProperty(_DOMErrorMessages, 52
/* X_V_TEXT_WITH_CHILDREN */
, "v-text will override element children."), _defineProperty(_DOMErrorMessages, 53
/* X_V_MODEL_ON_INVALID_ELEMENT */
, "v-model can only be used on <input>, <textarea> and <select> elements."), _defineProperty(_DOMErrorMessages, 54
/* X_V_MODEL_ARG_ON_ELEMENT */
, "v-model argument is not supported on plain elements."), _defineProperty(_DOMErrorMessages, 55
/* X_V_MODEL_ON_FILE_INPUT_ELEMENT */
, "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead."), _defineProperty(_DOMErrorMessages, 56
/* X_V_MODEL_UNNECESSARY_VALUE */
, "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior."), _defineProperty(_DOMErrorMessages, 57
/* X_V_SHOW_NO_EXPRESSION */
, "v-show is missing expression."), _defineProperty(_DOMErrorMessages, 58
/* X_TRANSITION_INVALID_CHILDREN */
, "<Transition> expects exactly one child element or component."), _defineProperty(_DOMErrorMessages, 59
/* X_IGNORED_SIDE_EFFECT_TAG */
, "Tags with side effect (<script> and <style>) are ignored in client component templates."), _DOMErrorMessages);

var transformVHtml = function transformVHtml(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(49
    /* X_V_HTML_NO_EXPRESSION */
    , loc));
  }

  if (node.children.length) {
    context.onError(createDOMCompilerError(50
    /* X_V_HTML_WITH_CHILDREN */
    , loc));
    node.children.length = 0;
  }

  return {
    props: [Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createObjectProperty"])(Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createSimpleExpression"])("innerHTML", true, loc), exp || Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createSimpleExpression"])('', true))]
  };
};

var transformVText = function transformVText(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(51
    /* X_V_TEXT_NO_EXPRESSION */
    , loc));
  }

  if (node.children.length) {
    context.onError(createDOMCompilerError(52
    /* X_V_TEXT_WITH_CHILDREN */
    , loc));
    node.children.length = 0;
  }

  return {
    props: [Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createObjectProperty"])(Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createSimpleExpression"])("textContent", true), exp ? Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createCallExpression"])(context.helperString(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["TO_DISPLAY_STRING"]), [exp], loc) : Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createSimpleExpression"])('', true))]
  };
};

var transformModel = function transformModel(dir, node, context) {
  var baseResult = Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["transformModel"])(dir, node, context); // base transform has errors OR component v-model (only need props)

  if (!baseResult.props.length || node.tagType === 1
  /* COMPONENT */
  ) {
      return baseResult;
    }

  if (dir.arg) {
    context.onError(createDOMCompilerError(54
    /* X_V_MODEL_ARG_ON_ELEMENT */
    , dir.arg.loc));
  }

  function checkDuplicatedValue() {
    var value = Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["findProp"])(node, 'value');

    if (value) {
      context.onError(createDOMCompilerError(56
      /* X_V_MODEL_UNNECESSARY_VALUE */
      , value.loc));
    }
  }

  var tag = node.tag;
  var isCustomElement = context.isCustomElement(tag);

  if (tag === 'input' || tag === 'textarea' || tag === 'select' || isCustomElement) {
    var directiveToUse = V_MODEL_TEXT;
    var isInvalidType = false;

    if (tag === 'input' || isCustomElement) {
      var type = Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["findProp"])(node, "type");

      if (type) {
        if (type.type === 7
        /* DIRECTIVE */
        ) {
            // :type="foo"
            directiveToUse = V_MODEL_DYNAMIC;
          } else if (type.value) {
          switch (type.value.content) {
            case 'radio':
              directiveToUse = V_MODEL_RADIO;
              break;

            case 'checkbox':
              directiveToUse = V_MODEL_CHECKBOX;
              break;

            case 'file':
              isInvalidType = true;
              context.onError(createDOMCompilerError(55
              /* X_V_MODEL_ON_FILE_INPUT_ELEMENT */
              , dir.loc));
              break;

            default:
              // text type
               true && checkDuplicatedValue();
              break;
          }
        }
      } else if (Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["hasDynamicKeyVBind"])(node)) {
        // element has bindings with dynamic keys, which can possibly contain
        // "type".
        directiveToUse = V_MODEL_DYNAMIC;
      } else {
        // text type
         true && checkDuplicatedValue();
      }
    } else if (tag === 'select') {
      directiveToUse = V_MODEL_SELECT;
    } else {
      // textarea
       true && checkDuplicatedValue();
    } // inject runtime directive
    // by returning the helper symbol via needRuntime
    // the import will replaced a resolveDirective call.


    if (!isInvalidType) {
      baseResult.needRuntime = context.helper(directiveToUse);
    }
  } else {
    context.onError(createDOMCompilerError(53
    /* X_V_MODEL_ON_INVALID_ELEMENT */
    , dir.loc));
  } // native vmodel doesn't need the `modelValue` props since they are also
  // passed to the runtime as `binding.value`. removing it reduces code size.


  baseResult.props = baseResult.props.filter(function (p) {
    return !(p.key.type === 4
    /* SIMPLE_EXPRESSION */
    && p.key.content === 'modelValue');
  });
  return baseResult;
};

var isEventOptionModifier = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["makeMap"])("passive,once,capture");
var isNonKeyModifier = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["makeMap"])( // event propagation management
"stop,prevent,self," + // system modifiers + exact
"ctrl,shift,alt,meta,exact," + // mouse
"middle"); // left & right could be mouse or key modifiers based on event type

var maybeKeyModifier = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["makeMap"])('left,right');
var isKeyboardEvent = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["makeMap"])("onkeyup,onkeydown,onkeypress", true);

var resolveModifiers = function resolveModifiers(key, modifiers) {
  var keyModifiers = [];
  var nonKeyModifiers = [];
  var eventOptionModifiers = [];

  for (var i = 0; i < modifiers.length; i++) {
    var modifier = modifiers[i];

    if (isEventOptionModifier(modifier)) {
      // eventOptionModifiers: modifiers for addEventListener() options,
      // e.g. .passive & .capture
      eventOptionModifiers.push(modifier);
    } else {
      // runtimeModifiers: modifiers that needs runtime guards
      if (maybeKeyModifier(modifier)) {
        if (Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isStaticExp"])(key)) {
          if (isKeyboardEvent(key.content)) {
            keyModifiers.push(modifier);
          } else {
            nonKeyModifiers.push(modifier);
          }
        } else {
          keyModifiers.push(modifier);
          nonKeyModifiers.push(modifier);
        }
      } else {
        if (isNonKeyModifier(modifier)) {
          nonKeyModifiers.push(modifier);
        } else {
          keyModifiers.push(modifier);
        }
      }
    }
  }

  return {
    keyModifiers: keyModifiers,
    nonKeyModifiers: nonKeyModifiers,
    eventOptionModifiers: eventOptionModifiers
  };
};

var transformClick = function transformClick(key, event) {
  var isStaticClick = Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isStaticExp"])(key) && key.content.toLowerCase() === 'onclick';
  return isStaticClick ? Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createSimpleExpression"])(event, true) : key.type !== 4
  /* SIMPLE_EXPRESSION */
  ? Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createCompoundExpression"])(["(", key, ") === \"onClick\" ? \"".concat(event, "\" : ("), key, ")"]) : key;
};

var transformOn = function transformOn(dir, node, context) {
  return Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["transformOn"])(dir, node, context, function (baseResult) {
    var modifiers = dir.modifiers;
    if (!modifiers.length) return baseResult;
    var _baseResult$props$ = baseResult.props[0],
        key = _baseResult$props$.key,
        handlerExp = _baseResult$props$.value;

    var _resolveModifiers = resolveModifiers(key, modifiers),
        keyModifiers = _resolveModifiers.keyModifiers,
        nonKeyModifiers = _resolveModifiers.nonKeyModifiers,
        eventOptionModifiers = _resolveModifiers.eventOptionModifiers; // normalize click.right and click.middle since they don't actually fire


    if (nonKeyModifiers.includes('right')) {
      key = transformClick(key, "onContextmenu");
    }

    if (nonKeyModifiers.includes('middle')) {
      key = transformClick(key, "onMouseup");
    }

    if (nonKeyModifiers.length) {
      handlerExp = Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createCallExpression"])(context.helper(V_ON_WITH_MODIFIERS), [handlerExp, JSON.stringify(nonKeyModifiers)]);
    }

    if (keyModifiers.length && ( // if event name is dynamic, always wrap with keys guard
    !Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isStaticExp"])(key) || isKeyboardEvent(key.content))) {
      handlerExp = Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createCallExpression"])(context.helper(V_ON_WITH_KEYS), [handlerExp, JSON.stringify(keyModifiers)]);
    }

    if (eventOptionModifiers.length) {
      var modifierPostfix = eventOptionModifiers.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["capitalize"]).join('');
      key = Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["isStaticExp"])(key) ? Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createSimpleExpression"])("".concat(key.content).concat(modifierPostfix), true) : Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createCompoundExpression"])(["(", key, ") + \"".concat(modifierPostfix, "\"")]);
    }

    return {
      props: [Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["createObjectProperty"])(key, handlerExp)]
    };
  });
};

var transformShow = function transformShow(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(57
    /* X_V_SHOW_NO_EXPRESSION */
    , loc));
  }

  return {
    props: [],
    needRuntime: context.helper(V_SHOW)
  };
};

var warnTransitionChildren = function warnTransitionChildren(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && node.tagType === 1
  /* COMPONENT */
  ) {
      var component = context.isBuiltInComponent(node.tag);

      if (component === TRANSITION) {
        return function () {
          if (node.children.length && hasMultipleChildren(node)) {
            context.onError(createDOMCompilerError(58
            /* X_TRANSITION_INVALID_CHILDREN */
            , {
              start: node.children[0].loc.start,
              end: node.children[node.children.length - 1].loc.end,
              source: ''
            }));
          }
        };
      }
    }
};

function hasMultipleChildren(node) {
  // #1352 filter out potential comment nodes.
  var children = node.children = node.children.filter(function (c) {
    return c.type !== 3;
  }
  /* COMMENT */
  );
  var child = children[0];
  return children.length !== 1 || child.type === 11
  /* FOR */
  || child.type === 9
  /* IF */
  && child.branches.some(hasMultipleChildren);
}

var ignoreSideEffectTags = function ignoreSideEffectTags(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && node.tagType === 0
  /* ELEMENT */
  && (node.tag === 'script' || node.tag === 'style')) {
    context.onError(createDOMCompilerError(59
    /* X_IGNORED_SIDE_EFFECT_TAG */
    , node.loc));
    context.removeNode();
  }
};

var DOMNodeTransforms = [transformStyle].concat(_toConsumableArray( true ? [warnTransitionChildren] : undefined));
var DOMDirectiveTransforms = {
  cloak: _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["noopDirectiveTransform"],
  html: transformVHtml,
  text: transformVText,
  model: transformModel,
  on: transformOn,
  show: transformShow
};

function compile(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["baseCompile"])(template, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, parserOptions, options, {
    nodeTransforms: [// ignore <script> and <tag>
    // this is not put inside DOMNodeTransforms because that list is used
    // by compiler-ssr to generate vnode fallback branches
    ignoreSideEffectTags].concat(_toConsumableArray(DOMNodeTransforms), _toConsumableArray(options.nodeTransforms || [])),
    directiveTransforms: Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
    transformHoist: null
  }));
}

function parse(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__["baseParse"])(template, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, parserOptions, options));
}



/***/ }),

/***/ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js ***!
  \*********************************************************************/
/*! exports provided: ITERATE_KEY, computed, customRef, effect, enableTracking, isProxy, isReactive, isReadonly, isRef, markRaw, pauseTracking, proxyRefs, reactive, readonly, ref, resetTracking, shallowReactive, shallowReadonly, shallowRef, stop, toRaw, toRef, toRefs, track, trigger, triggerRef, unref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITERATE_KEY", function() { return ITERATE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRef", function() { return customRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effect", function() { return effect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableTracking", function() { return enableTracking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProxy", function() { return isProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReactive", function() { return isReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadonly", function() { return isReadonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRef", function() { return isRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markRaw", function() { return markRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseTracking", function() { return pauseTracking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxyRefs", function() { return proxyRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactive", function() { return reactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readonly", function() { return readonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetTracking", function() { return resetTracking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowReactive", function() { return shallowReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowReadonly", function() { return shallowReadonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowRef", function() { return shallowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRaw", function() { return toRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRef", function() { return toRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRefs", function() { return toRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "track", function() { return track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerRef", function() { return triggerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unref", function() { return unref; });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var targetMap = new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol( true ? 'iterate' : undefined);
var MAP_KEY_ITERATE_KEY = Symbol( true ? 'Map key iterate' : undefined);

function isEffect(fn) {
  return fn && fn._isEffect === true;
}

function effect(fn) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _vue_shared__WEBPACK_IMPORTED_MODULE_0__["EMPTY_OBJ"];

  if (isEffect(fn)) {
    fn = fn.raw;
  }

  var effect = createReactiveEffect(fn, options);

  if (!options.lazy) {
    effect();
  }

  return effect;
}

function stop(effect) {
  if (effect.active) {
    cleanup(effect);

    if (effect.options.onStop) {
      effect.options.onStop();
    }

    effect.active = false;
  }
}

var uid = 0;

function createReactiveEffect(fn, options) {
  var effect = function reactiveEffect() {
    if (!effect.active) {
      return options.scheduler ? undefined : fn();
    }

    if (!effectStack.includes(effect)) {
      cleanup(effect);

      try {
        enableTracking();
        effectStack.push(effect);
        activeEffect = effect;
        return fn();
      } finally {
        effectStack.pop();
        resetTracking();
        activeEffect = effectStack[effectStack.length - 1];
      }
    }
  };

  effect.id = uid++;
  effect.allowRecurse = !!options.allowRecurse;
  effect._isEffect = true;
  effect.active = true;
  effect.raw = fn;
  effect.deps = [];
  effect.options = options;
  return effect;
}

function cleanup(effect) {
  var deps = effect.deps;

  if (deps.length) {
    for (var i = 0; i < deps.length; i++) {
      deps[i]["delete"](effect);
    }

    deps.length = 0;
  }
}

var shouldTrack = true;
var trackStack = [];

function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}

function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}

function resetTracking() {
  var last = trackStack.pop();
  shouldTrack = last === undefined ? true : last;
}

function track(target, type, key) {
  if (!shouldTrack || activeEffect === undefined) {
    return;
  }

  var depsMap = targetMap.get(target);

  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }

  var dep = depsMap.get(key);

  if (!dep) {
    depsMap.set(key, dep = new Set());
  }

  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);

    if ( true && activeEffect.options.onTrack) {
      activeEffect.options.onTrack({
        effect: activeEffect,
        target: target,
        type: type,
        key: key
      });
    }
  }
}

function trigger(target, type, key, newValue, oldValue, oldTarget) {
  var depsMap = targetMap.get(target);

  if (!depsMap) {
    // never been tracked
    return;
  }

  var effects = new Set();

  var add = function add(effectsToAdd) {
    if (effectsToAdd) {
      effectsToAdd.forEach(function (effect) {
        if (effect !== activeEffect || effect.allowRecurse) {
          effects.add(effect);
        }
      });
    }
  };

  if (type === "clear"
  /* CLEAR */
  ) {
      // collection being cleared
      // trigger all effects for target
      depsMap.forEach(add);
    } else if (key === 'length' && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target)) {
    depsMap.forEach(function (dep, key) {
      if (key === 'length' || key >= newValue) {
        add(dep);
      }
    });
  } else {
    // schedule runs for SET | ADD | DELETE
    if (key !== void 0) {
      add(depsMap.get(key));
    } // also run for iteration key on ADD | DELETE | Map.SET


    switch (type) {
      case "add"
      /* ADD */
      :
        if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target)) {
          add(depsMap.get(ITERATE_KEY));

          if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isMap"])(target)) {
            add(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isIntegerKey"])(key)) {
          // new index added to array -> length changes
          add(depsMap.get('length'));
        }

        break;

      case "delete"
      /* DELETE */
      :
        if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target)) {
          add(depsMap.get(ITERATE_KEY));

          if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isMap"])(target)) {
            add(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }

        break;

      case "set"
      /* SET */
      :
        if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isMap"])(target)) {
          add(depsMap.get(ITERATE_KEY));
        }

        break;
    }
  }

  var run = function run(effect) {
    if ( true && effect.options.onTrigger) {
      effect.options.onTrigger({
        effect: effect,
        target: target,
        key: key,
        type: type,
        newValue: newValue,
        oldValue: oldValue,
        oldTarget: oldTarget
      });
    }

    if (effect.options.scheduler) {
      effect.options.scheduler(effect);
    } else {
      effect();
    }
  };

  effects.forEach(run);
}

var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(function (key) {
  return Symbol[key];
}).filter(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isSymbol"]));
var get = /*#__PURE__*/createGetter();
var shallowGet = /*#__PURE__*/createGetter(false, true);
var readonlyGet = /*#__PURE__*/createGetter(true);
var shallowReadonlyGet = /*#__PURE__*/createGetter(true, true);
var arrayInstrumentations = {};
['includes', 'indexOf', 'lastIndexOf'].forEach(function (key) {
  var method = Array.prototype[key];

  arrayInstrumentations[key] = function () {
    var arr = toRaw(this);

    for (var i = 0, l = this.length; i < l; i++) {
      track(arr, "get"
      /* GET */
      , i + '');
    } // we run the method using the original args first (which may be reactive)


    for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var res = method.apply(arr, args);

    if (res === -1 || res === false) {
      // if that didn't work, run it again using raw values.
      return method.apply(arr, args.map(toRaw));
    } else {
      return res;
    }
  };
});
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(function (key) {
  var method = Array.prototype[key];

  arrayInstrumentations[key] = function () {
    pauseTracking();

    for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var res = method.apply(this, args);
    resetTracking();
    return res;
  };
});

function createGetter() {
  var isReadonly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function get(target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
        return !isReadonly;
      } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
        return isReadonly;
      } else if (key === "__v_raw"
    /* RAW */
    && receiver === (isReadonly ? readonlyMap : reactiveMap).get(target)) {
      return target;
    }

    var targetIsArray = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target);

    if (!isReadonly && targetIsArray && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }

    var res = Reflect.get(target, key, receiver);

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) ? builtInSymbols.has(key) : key === "__proto__" || key === "__v_isRef") {
      return res;
    }

    if (!isReadonly) {
      track(target, "get"
      /* GET */
      , key);
    }

    if (shallow) {
      return res;
    }

    if (isRef(res)) {
      // ref unwrapping - does not apply for Array + integer key.
      var shouldUnwrap = !targetIsArray || !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isIntegerKey"])(key);
      return shouldUnwrap ? res.value : res;
    }

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isObject"])(res)) {
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      return isReadonly ? readonly(res) : reactive(res);
    }

    return res;
  };
}

var set = /*#__PURE__*/createSetter();
var shallowSet = /*#__PURE__*/createSetter(true);

function createSetter() {
  var shallow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (!shallow) {
      value = toRaw(value);

      if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }

    var hadKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isIntegerKey"])(key) ? Number(key) < target.length : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(target, key);
    var result = Reflect.set(target, key, value, receiver); // don't trigger if target is something up in the prototype chain of original

    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add"
        /* ADD */
        , key, value);
      } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["hasChanged"])(value, oldValue)) {
        trigger(target, "set"
        /* SET */
        , key, value, oldValue);
      }
    }

    return result;
  };
}

function deleteProperty(target, key) {
  var hadKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(target, key);
  var oldValue = target[key];
  var result = Reflect.deleteProperty(target, key);

  if (result && hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function has(target, key) {
  var result = Reflect.has(target, key);

  if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) || !builtInSymbols.has(key)) {
    track(target, "has"
    /* HAS */
    , key);
  }

  return result;
}

function ownKeys(target) {
  track(target, "iterate"
  /* ITERATE */
  , Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target) ? 'length' : ITERATE_KEY);
  return Reflect.ownKeys(target);
}

var mutableHandlers = {
  get: get,
  set: set,
  deleteProperty: deleteProperty,
  has: has,
  ownKeys: ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set: function set(target, key) {
    if (true) {
      console.warn("Set operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    if (true) {
      console.warn("Delete operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  }
};
var shallowReactiveHandlers = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
}); // Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.

var shallowReadonlyHandlers = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, readonlyHandlers, {
  get: shallowReadonlyGet
});

var toReactive = function toReactive(value) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) ? reactive(value) : value;
};

var toReadonly = function toReadonly(value) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) ? readonly(value) : value;
};

var toShallow = function toShallow(value) {
  return value;
};

var getProto = function getProto(v) {
  return Reflect.getPrototypeOf(v);
};

function get$1(target, key) {
  var isReadonly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isShallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // #1772: readonly(reactive(Map)) should return readonly + reactive version
  // of the value
  target = target["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "get"
    /* GET */
    , key);
  }

  !isReadonly && track(rawTarget, "get"
  /* GET */
  , rawKey);

  var _getProto = getProto(rawTarget),
      has = _getProto.has;

  var wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;

  if (has.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  }
}

function has$1(key) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var target = this["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "has"
    /* HAS */
    , key);
  }

  !isReadonly && track(rawTarget, "has"
  /* HAS */
  , rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}

function size(target) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  target = target["__v_raw"
  /* RAW */
  ];
  !isReadonly && track(toRaw(target), "iterate"
  /* ITERATE */
  , ITERATE_KEY);
  return Reflect.get(target, 'size', target);
}

function add(value) {
  value = toRaw(value);
  var target = toRaw(this);
  var proto = getProto(target);
  var hadKey = proto.has.call(target, value);
  target.add(value);

  if (!hadKey) {
    trigger(target, "add"
    /* ADD */
    , value, value);
  }

  return this;
}

function set$1(key, value) {
  value = toRaw(value);
  var target = toRaw(this);

  var _getProto2 = getProto(target),
      has = _getProto2.has,
      get = _getProto2.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get.call(target, key);
  target.set(key, value);

  if (!hadKey) {
    trigger(target, "add"
    /* ADD */
    , key, value);
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["hasChanged"])(value, oldValue)) {
    trigger(target, "set"
    /* SET */
    , key, value, oldValue);
  }

  return this;
}

function deleteEntry(key) {
  var target = toRaw(this);

  var _getProto3 = getProto(target),
      has = _getProto3.has,
      get = _getProto3.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get ? get.call(target, key) : undefined; // forward the operation before queueing reactions

  var result = target["delete"](key);

  if (hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function clear() {
  var target = toRaw(this);
  var hadItems = target.size !== 0;
  var oldTarget =  true ? Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isMap"])(target) ? new Map(target) : new Set(target) : undefined; // forward the operation before queueing reactions

  var result = target.clear();

  if (hadItems) {
    trigger(target, "clear"
    /* CLEAR */
    , undefined, undefined, oldTarget);
  }

  return result;
}

function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    var observed = this;
    var target = observed["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , ITERATE_KEY);
    return target.forEach(function (value, key) {
      // important: make sure the callback is
      // 1. invoked with the reactive map as `this` and 3rd arg
      // 2. the value received should be a corresponding reactive/readonly.
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}

function createIterableMethod(method, isReadonly, isShallow) {
  return function () {
    var target = this["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var targetIsMap = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isMap"])(rawTarget);
    var isPair = method === 'entries' || method === Symbol.iterator && targetIsMap;
    var isKeyOnly = method === 'keys' && targetIsMap;
    var innerIterator = target[method].apply(target, arguments);
    var wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY); // return a wrapped iterator which returns observed versions of the
    // values emitted from the real iterator

    return _defineProperty({
      // iterator protocol
      next: function next() {
        var _innerIterator$next = innerIterator.next(),
            value = _innerIterator$next.value,
            done = _innerIterator$next.done;

        return done ? {
          value: value,
          done: done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done: done
        };
      }
    }, Symbol.iterator, function () {
      return this;
    });
  };
}

function createReadonlyMethod(type) {
  return function () {
    if (true) {
      var key = (arguments.length <= 0 ? undefined : arguments[0]) ? "on key \"".concat(arguments.length <= 0 ? undefined : arguments[0], "\" ") : "";
      console.warn("".concat(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["capitalize"])(type), " operation ").concat(key, "failed: target is readonly."), toRaw(this));
    }

    return type === "delete"
    /* DELETE */
    ? false : this;
  };
}

var mutableInstrumentations = {
  get: function get(key) {
    return get$1(this, key);
  },

  get size() {
    return size(this);
  },

  has: has$1,
  add: add,
  set: set$1,
  "delete": deleteEntry,
  clear: clear,
  forEach: createForEach(false, false)
};
var shallowInstrumentations = {
  get: function get(key) {
    return get$1(this, key, false, true);
  },

  get size() {
    return size(this);
  },

  has: has$1,
  add: add,
  set: set$1,
  "delete": deleteEntry,
  clear: clear,
  forEach: createForEach(false, true)
};
var readonlyInstrumentations = {
  get: function get(key) {
    return get$1(this, key, true);
  },

  get size() {
    return size(this, true);
  },

  has: function has(key) {
    return has$1.call(this, key, true);
  },
  add: createReadonlyMethod("add"
  /* ADD */
  ),
  set: createReadonlyMethod("set"
  /* SET */
  ),
  "delete": createReadonlyMethod("delete"
  /* DELETE */
  ),
  clear: createReadonlyMethod("clear"
  /* CLEAR */
  ),
  forEach: createForEach(true, false)
};
var iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
iteratorMethods.forEach(function (method) {
  mutableInstrumentations[method] = createIterableMethod(method, false, false);
  readonlyInstrumentations[method] = createIterableMethod(method, true, false);
  shallowInstrumentations[method] = createIterableMethod(method, false, true);
});

function createInstrumentationGetter(isReadonly, shallow) {
  var instrumentations = shallow ? shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return function (target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
        return !isReadonly;
      } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
        return isReadonly;
      } else if (key === "__v_raw"
    /* RAW */
    ) {
        return target;
      }

    return Reflect.get(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}

var mutableCollectionHandlers = {
  get: createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
  get: createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
  get: createInstrumentationGetter(true, false)
};

function checkIdentityKeys(target, has, key) {
  var rawKey = toRaw(key);

  if (rawKey !== key && has.call(target, rawKey)) {
    var type = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["toRawType"])(target);
    console.warn("Reactive ".concat(type, " contains both the raw and reactive ") + "versions of the same object".concat(type === "Map" ? " as keys" : "", ", ") + "which can lead to inconsistencies. " + "Avoid differentiating between the raw and reactive versions " + "of an object and only use the reactive version if possible.");
  }
}

var reactiveMap = new WeakMap();
var readonlyMap = new WeakMap();

function targetTypeMap(rawType) {
  switch (rawType) {
    case 'Object':
    case 'Array':
      return 1
      /* COMMON */
      ;

    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
      /* COLLECTION */
      ;

    default:
      return 0
      /* INVALID */
      ;
  }
}

function getTargetType(value) {
  return value["__v_skip"
  /* SKIP */
  ] || !Object.isExtensible(value) ? 0
  /* INVALID */
  : targetTypeMap(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["toRawType"])(value));
}

function reactive(target) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (target && target["__v_isReadonly"
  /* IS_READONLY */
  ]) {
    return target;
  }

  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */


function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */


function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */


function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, readonlyCollectionHandlers);
}

function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers) {
  if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isObject"])(target)) {
    if (true) {
      console.warn("value cannot be made reactive: ".concat(String(target)));
    }

    return target;
  } // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object


  if (target["__v_raw"
  /* RAW */
  ] && !(isReadonly && target["__v_isReactive"
  /* IS_REACTIVE */
  ])) {
    return target;
  } // target already has corresponding Proxy


  var proxyMap = isReadonly ? readonlyMap : reactiveMap;
  var existingProxy = proxyMap.get(target);

  if (existingProxy) {
    return existingProxy;
  } // only a whitelist of value types can be observed.


  var targetType = getTargetType(target);

  if (targetType === 0
  /* INVALID */
  ) {
      return target;
    }

  var proxy = new Proxy(target, targetType === 2
  /* COLLECTION */
  ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}

function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"
    /* RAW */
    ]);
  }

  return !!(value && value["__v_isReactive"
  /* IS_REACTIVE */
  ]);
}

function isReadonly(value) {
  return !!(value && value["__v_isReadonly"
  /* IS_READONLY */
  ]);
}

function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}

function toRaw(observed) {
  return observed && toRaw(observed["__v_raw"
  /* RAW */
  ]) || observed;
}

function markRaw(value) {
  Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["def"])(value, "__v_skip"
  /* SKIP */
  , true);
  return value;
}

var convert = function convert(val) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isObject"])(val) ? reactive(val) : val;
};

function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}

function ref(value) {
  return createRef(value);
}

function shallowRef(value) {
  return createRef(value, true);
}

var RefImpl = /*#__PURE__*/function () {
  function RefImpl(_rawValue) {
    var _shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, RefImpl);

    this._rawValue = _rawValue;
    this._shallow = _shallow;
    this.__v_isRef = true;
    this._value = _shallow ? _rawValue : convert(_rawValue);
  }

  _createClass(RefImpl, [{
    key: "value",
    get: function get() {
      track(toRaw(this), "get"
      /* GET */
      , 'value');
      return this._value;
    },
    set: function set(newVal) {
      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["hasChanged"])(toRaw(newVal), this._rawValue)) {
        this._rawValue = newVal;
        this._value = this._shallow ? newVal : convert(newVal);
        trigger(toRaw(this), "set"
        /* SET */
        , 'value', newVal);
      }
    }
  }]);

  return RefImpl;
}();

function createRef(rawValue) {
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isRef(rawValue)) {
    return rawValue;
  }

  return new RefImpl(rawValue, shallow);
}

function triggerRef(ref) {
  trigger(toRaw(ref), "set"
  /* SET */
  , 'value',  true ? ref.value : undefined);
}

function unref(ref) {
  return isRef(ref) ? ref.value : ref;
}

var shallowUnwrapHandlers = {
  get: function get(target, key, receiver) {
    return unref(Reflect.get(target, key, receiver));
  },
  set: function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};

function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}

var CustomRefImpl = /*#__PURE__*/function () {
  function CustomRefImpl(factory) {
    var _this = this;

    _classCallCheck(this, CustomRefImpl);

    this.__v_isRef = true;

    var _factory = factory(function () {
      return track(_this, "get"
      /* GET */
      , 'value');
    }, function () {
      return trigger(_this, "set"
      /* SET */
      , 'value');
    }),
        get = _factory.get,
        set = _factory.set;

    this._get = get;
    this._set = set;
  }

  _createClass(CustomRefImpl, [{
    key: "value",
    get: function get() {
      return this._get();
    },
    set: function set(newVal) {
      this._set(newVal);
    }
  }]);

  return CustomRefImpl;
}();

function customRef(factory) {
  return new CustomRefImpl(factory);
}

function toRefs(object) {
  if ( true && !isProxy(object)) {
    console.warn("toRefs() expects a reactive object but received a plain one.");
  }

  var ret = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isArray"])(object) ? new Array(object.length) : {};

  for (var key in object) {
    ret[key] = toRef(object, key);
  }

  return ret;
}

var ObjectRefImpl = /*#__PURE__*/function () {
  function ObjectRefImpl(_object, _key) {
    _classCallCheck(this, ObjectRefImpl);

    this._object = _object;
    this._key = _key;
    this.__v_isRef = true;
  }

  _createClass(ObjectRefImpl, [{
    key: "value",
    get: function get() {
      return this._object[this._key];
    },
    set: function set(newVal) {
      this._object[this._key] = newVal;
    }
  }]);

  return ObjectRefImpl;
}();

function toRef(object, key) {
  return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
}

var ComputedRefImpl = /*#__PURE__*/function () {
  function ComputedRefImpl(getter, _setter, isReadonly) {
    var _this2 = this;

    _classCallCheck(this, ComputedRefImpl);

    this._setter = _setter;
    this._dirty = true;
    this.__v_isRef = true;
    this.effect = effect(getter, {
      lazy: true,
      scheduler: function scheduler() {
        if (!_this2._dirty) {
          _this2._dirty = true;
          trigger(toRaw(_this2), "set"
          /* SET */
          , 'value');
        }
      }
    });
    this["__v_isReadonly"
    /* IS_READONLY */
    ] = isReadonly;
  }

  _createClass(ComputedRefImpl, [{
    key: "value",
    get: function get() {
      if (this._dirty) {
        this._value = this.effect();
        this._dirty = false;
      }

      track(toRaw(this), "get"
      /* GET */
      , 'value');
      return this._value;
    },
    set: function set(newValue) {
      this._setter(newValue);
    }
  }]);

  return ComputedRefImpl;
}();

function computed(getterOrOptions) {
  var getter;
  var setter;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(getterOrOptions)) {
    getter = getterOrOptions;
    setter =  true ? function () {
      console.warn('Write operation failed: computed value is readonly');
    } : undefined;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }

  return new ComputedRefImpl(getter, setter, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(getterOrOptions) || !getterOrOptions.set);
}



/***/ }),

/***/ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js ***!
  \*************************************************************************/
/*! exports provided: customRef, isProxy, isReactive, isReadonly, isRef, markRaw, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, camelize, capitalize, toDisplayString, toHandlerKey, BaseTransition, Comment, Fragment, KeepAlive, Static, Suspense, Teleport, Text, callWithAsyncErrorHandling, callWithErrorHandling, cloneVNode, computed, createBlock, createCommentVNode, createHydrationRenderer, createRenderer, createSlots, createStaticVNode, createTextVNode, createVNode, defineAsyncComponent, defineComponent, defineEmit, defineProps, devtools, getCurrentInstance, getTransitionRawChildren, h, handleError, initCustomFormatter, inject, isVNode, mergeProps, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated, openBlock, popScopeId, provide, pushScopeId, queuePostFlushCb, registerRuntimeCompiler, renderList, renderSlot, resolveComponent, resolveDirective, resolveDynamicComponent, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, ssrContextKey, ssrUtils, toHandlers, transformVNodeArgs, useContext, useSSRContext, useTransitionState, version, warn, watch, watchEffect, withCtx, withDirectives, withScopeId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTransition", function() { return BaseTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return Fragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeepAlive", function() { return KeepAlive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Static", function() { return Static; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return Suspense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teleport", function() { return Teleport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callWithAsyncErrorHandling", function() { return callWithAsyncErrorHandling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callWithErrorHandling", function() { return callWithErrorHandling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneVNode", function() { return cloneVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlock", function() { return createBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommentVNode", function() { return createCommentVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHydrationRenderer", function() { return createHydrationRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRenderer", function() { return createRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSlots", function() { return createSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStaticVNode", function() { return createStaticVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextVNode", function() { return createTextVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVNode", function() { return createVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineAsyncComponent", function() { return defineAsyncComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineComponent", function() { return defineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineEmit", function() { return defineEmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineProps", function() { return defineProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devtools", function() { return devtools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return getCurrentInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionRawChildren", function() { return getTransitionRawChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCustomFormatter", function() { return initCustomFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVNode", function() { return isVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onActivated", function() { return onActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeforeMount", function() { return onBeforeMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeforeUnmount", function() { return onBeforeUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeforeUpdate", function() { return onBeforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDeactivated", function() { return onDeactivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onErrorCaptured", function() { return onErrorCaptured; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMounted", function() { return onMounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRenderTracked", function() { return onRenderTracked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRenderTriggered", function() { return onRenderTriggered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUnmounted", function() { return onUnmounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUpdated", function() { return onUpdated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openBlock", function() { return openBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popScopeId", function() { return popScopeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provide", function() { return provide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushScopeId", function() { return pushScopeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queuePostFlushCb", function() { return queuePostFlushCb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRuntimeCompiler", function() { return registerRuntimeCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderList", function() { return renderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSlot", function() { return renderSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveComponent", function() { return resolveComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveDirective", function() { return resolveDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveDynamicComponent", function() { return resolveDynamicComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveTransitionHooks", function() { return resolveTransitionHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBlockTracking", function() { return setBlockTracking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDevtoolsHook", function() { return setDevtoolsHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransitionHooks", function() { return setTransitionHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrContextKey", function() { return ssrContextKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrUtils", function() { return ssrUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHandlers", function() { return toHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformVNodeArgs", function() { return transformVNodeArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return useContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSSRContext", function() { return useSSRContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransitionState", function() { return useTransitionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchEffect", function() { return watchEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withCtx", function() { return withCtx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDirectives", function() { return withDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withScopeId", function() { return withScopeId; });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customRef", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["customRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isProxy", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isProxy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReactive", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReadonly", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isReadonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRef", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markRaw", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["markRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "proxyRefs", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["proxyRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactive", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["reactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readonly", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["readonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowReactive", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["shallowReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowReadonly", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["shallowReadonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowRef", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["shallowRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRaw", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRef", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRefs", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "triggerRef", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["triggerRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unref", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["unref"]; });

/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return _vue_shared__WEBPACK_IMPORTED_MODULE_1__["camelize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return _vue_shared__WEBPACK_IMPORTED_MODULE_1__["capitalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDisplayString", function() { return _vue_shared__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toHandlerKey", function() { return _vue_shared__WEBPACK_IMPORTED_MODULE_1__["toHandlerKey"]; });

var _ErrorTypeStrings;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var stack = [];

function pushWarningContext(vnode) {
  stack.push(vnode);
}

function popWarningContext() {
  stack.pop();
}

function warn(msg) {
  // avoid props formatting or warn handler tracking deps that might be mutated
  // during patch, leading to infinite recursion.
  Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["pauseTracking"])();
  var instance = stack.length ? stack[stack.length - 1].component : null;
  var appWarnHandler = instance && instance.appContext.config.warnHandler;
  var trace = getComponentTrace();

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11
    /* APP_WARN_HANDLER */
    , [msg + args.join(''), instance && instance.proxy, trace.map(function (_ref) {
      var vnode = _ref.vnode;
      return "at <".concat(formatComponentName(instance, vnode.type), ">");
    }).join('\n'), trace]);
  } else {
    var _console;

    var warnArgs = ["[Vue warn]: ".concat(msg)].concat(args);
    /* istanbul ignore if */

    if (trace.length && // avoid spamming console during tests
    !false) {
      warnArgs.push.apply(warnArgs, ["\n"].concat(_toConsumableArray(formatTrace(trace))));
    }

    (_console = console).warn.apply(_console, _toConsumableArray(warnArgs));
  }

  Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["resetTracking"])();
}

function getComponentTrace() {
  var currentVNode = stack[stack.length - 1];

  if (!currentVNode) {
    return [];
  } // we can't just use the stack because it will be incomplete during updates
  // that did not start from the root. Re-construct the parent chain using
  // instance parent pointers.


  var normalizedStack = [];

  while (currentVNode) {
    var last = normalizedStack[0];

    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }

    var parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }

  return normalizedStack;
}
/* istanbul ignore next */


function formatTrace(trace) {
  var logs = [];
  trace.forEach(function (entry, i) {
    logs.push.apply(logs, _toConsumableArray(i === 0 ? [] : ["\n"]).concat(_toConsumableArray(formatTraceEntry(entry))));
  });
  return logs;
}

function formatTraceEntry(_ref2) {
  var vnode = _ref2.vnode,
      recurseCount = _ref2.recurseCount;
  var postfix = recurseCount > 0 ? "... (".concat(recurseCount, " recursive calls)") : "";
  var isRoot = vnode.component ? vnode.component.parent == null : false;
  var open = " at <".concat(formatComponentName(vnode.component, vnode.type, isRoot));
  var close = ">" + postfix;
  return vnode.props ? [open].concat(_toConsumableArray(formatProps(vnode.props)), [close]) : [open + close];
}
/* istanbul ignore next */


function formatProps(props) {
  var res = [];
  var keys = Object.keys(props);
  keys.slice(0, 3).forEach(function (key) {
    res.push.apply(res, _toConsumableArray(formatProp(key, props[key])));
  });

  if (keys.length > 3) {
    res.push(" ...");
  }

  return res;
}
/* istanbul ignore next */


function formatProp(key, value, raw) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(value)) {
    value = JSON.stringify(value);
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (typeof value === 'number' || typeof value === 'boolean' || value == null) {
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isRef"])(value)) {
    value = formatProp(key, Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRaw"])(value.value), true);
    return raw ? value : ["".concat(key, "=Ref<"), value, ">"];
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value)) {
    return ["".concat(key, "=fn").concat(value.name ? "<".concat(value.name, ">") : "")];
  } else {
    value = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRaw"])(value);
    return raw ? value : ["".concat(key, "="), value];
  }
}

var ErrorTypeStrings = (_ErrorTypeStrings = {}, _defineProperty(_ErrorTypeStrings, "bc"
/* BEFORE_CREATE */
, 'beforeCreate hook'), _defineProperty(_ErrorTypeStrings, "c"
/* CREATED */
, 'created hook'), _defineProperty(_ErrorTypeStrings, "bm"
/* BEFORE_MOUNT */
, 'beforeMount hook'), _defineProperty(_ErrorTypeStrings, "m"
/* MOUNTED */
, 'mounted hook'), _defineProperty(_ErrorTypeStrings, "bu"
/* BEFORE_UPDATE */
, 'beforeUpdate hook'), _defineProperty(_ErrorTypeStrings, "u"
/* UPDATED */
, 'updated'), _defineProperty(_ErrorTypeStrings, "bum"
/* BEFORE_UNMOUNT */
, 'beforeUnmount hook'), _defineProperty(_ErrorTypeStrings, "um"
/* UNMOUNTED */
, 'unmounted hook'), _defineProperty(_ErrorTypeStrings, "a"
/* ACTIVATED */
, 'activated hook'), _defineProperty(_ErrorTypeStrings, "da"
/* DEACTIVATED */
, 'deactivated hook'), _defineProperty(_ErrorTypeStrings, "ec"
/* ERROR_CAPTURED */
, 'errorCaptured hook'), _defineProperty(_ErrorTypeStrings, "rtc"
/* RENDER_TRACKED */
, 'renderTracked hook'), _defineProperty(_ErrorTypeStrings, "rtg"
/* RENDER_TRIGGERED */
, 'renderTriggered hook'), _defineProperty(_ErrorTypeStrings, 0
/* SETUP_FUNCTION */
, 'setup function'), _defineProperty(_ErrorTypeStrings, 1
/* RENDER_FUNCTION */
, 'render function'), _defineProperty(_ErrorTypeStrings, 2
/* WATCH_GETTER */
, 'watcher getter'), _defineProperty(_ErrorTypeStrings, 3
/* WATCH_CALLBACK */
, 'watcher callback'), _defineProperty(_ErrorTypeStrings, 4
/* WATCH_CLEANUP */
, 'watcher cleanup function'), _defineProperty(_ErrorTypeStrings, 5
/* NATIVE_EVENT_HANDLER */
, 'native event handler'), _defineProperty(_ErrorTypeStrings, 6
/* COMPONENT_EVENT_HANDLER */
, 'component event handler'), _defineProperty(_ErrorTypeStrings, 7
/* VNODE_HOOK */
, 'vnode hook'), _defineProperty(_ErrorTypeStrings, 8
/* DIRECTIVE_HOOK */
, 'directive hook'), _defineProperty(_ErrorTypeStrings, 9
/* TRANSITION_HOOK */
, 'transition hook'), _defineProperty(_ErrorTypeStrings, 10
/* APP_ERROR_HANDLER */
, 'app errorHandler'), _defineProperty(_ErrorTypeStrings, 11
/* APP_WARN_HANDLER */
, 'app warnHandler'), _defineProperty(_ErrorTypeStrings, 12
/* FUNCTION_REF */
, 'ref function'), _defineProperty(_ErrorTypeStrings, 13
/* ASYNC_COMPONENT_LOADER */
, 'async component loader'), _defineProperty(_ErrorTypeStrings, 14
/* SCHEDULER */
, 'scheduler flush. This is likely a Vue internals bug. ' + 'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-next'), _ErrorTypeStrings);

function callWithErrorHandling(fn, instance, type, args) {
  var res;

  try {
    res = args ? fn.apply(void 0, _toConsumableArray(args)) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }

  return res;
}

function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(fn)) {
    var res = callWithErrorHandling(fn, instance, type, args);

    if (res && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isPromise"])(res)) {
      res["catch"](function (err) {
        handleError(err, instance, type);
      });
    }

    return res;
  }

  var values = [];

  for (var i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }

  return values;
}

function handleError(err, instance, type) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var contextVNode = instance ? instance.vnode : null;

  if (instance) {
    var cur = instance.parent; // the exposed instance is the render proxy to keep it consistent with 2.x

    var exposedInstance = instance.proxy; // in production the hook receives only the error code

    var errorInfo =  true ? ErrorTypeStrings[type] : undefined;

    while (cur) {
      var errorCapturedHooks = cur.ec;

      if (errorCapturedHooks) {
        for (var i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }

      cur = cur.parent;
    } // app-level handling


    var appErrorHandler = instance.appContext.config.errorHandler;

    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10
      /* APP_ERROR_HANDLER */
      , [err, exposedInstance, errorInfo]);
      return;
    }
  }

  logError(err, type, contextVNode, throwInDev);
}

function logError(err, type, contextVNode) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (true) {
    var info = ErrorTypeStrings[type];

    if (contextVNode) {
      pushWarningContext(contextVNode);
    }

    warn("Unhandled error".concat(info ? " during execution of ".concat(info) : ""));

    if (contextVNode) {
      popWarningContext();
    } // crash in dev by default so it's more noticeable


    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else {}
}

var isFlushing = false;
var isFlushPending = false;
var queue = [];
var flushIndex = 0;
var pendingPreFlushCbs = [];
var activePreFlushCbs = null;
var preFlushIndex = 0;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = Promise.resolve();
var currentFlushPromise = null;
var currentPreFlushParentJob = null;
var RECURSION_LIMIT = 100;

function nextTick(fn) {
  var p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
}

function queueJob(job) {
  // the dedupe search uses the startIndex argument of Array.includes()
  // by default the search index includes the current job that is being run
  // so it cannot recursively trigger itself again.
  // if the job is a watch() callback, the search will start with a +1 index to
  // allow it recursively trigger itself - it is the user's responsibility to
  // ensure it doesn't end up in an infinite loop.
  if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    queue.push(job);
    queueFlush();
  }
}

function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}

function invalidateJob(job) {
  var i = queue.indexOf(job);

  if (i > -1) {
    queue.splice(i, 1);
  }
}

function queueCb(cb, activeQueue, pendingQueue, index) {
  if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
      pendingQueue.push(cb);
    }
  } else {
    // if cb is an array, it is a component lifecycle hook which can only be
    // triggered by a job, which is already deduped in the main queue, so
    // we can skip duplicate check here to improve perf
    pendingQueue.push.apply(pendingQueue, _toConsumableArray(cb));
  }

  queueFlush();
}

function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}

function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}

function flushPreFlushCbs(seen) {
  var parentJob = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = _toConsumableArray(new Set(pendingPreFlushCbs));
    pendingPreFlushCbs.length = 0;

    if (true) {
      seen = seen || new Map();
    }

    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      if (true) {
        checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex]);
      }

      activePreFlushCbs[preFlushIndex]();
    }

    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null; // recursively flush until it drains

    flushPreFlushCbs(seen, parentJob);
  }
}

function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    var deduped = _toConsumableArray(new Set(pendingPostFlushCbs));

    pendingPostFlushCbs.length = 0; // #1947 already has active queue, nested flushPostFlushCbs call

    if (activePostFlushCbs) {
      var _activePostFlushCbs;

      (_activePostFlushCbs = activePostFlushCbs).push.apply(_activePostFlushCbs, _toConsumableArray(deduped));

      return;
    }

    activePostFlushCbs = deduped;

    if (true) {
      seen = seen || new Map();
    }

    activePostFlushCbs.sort(function (a, b) {
      return getId(a) - getId(b);
    });

    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (true) {
        checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex]);
      }

      activePostFlushCbs[postFlushIndex]();
    }

    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}

var getId = function getId(job) {
  return job.id == null ? Infinity : job.id;
};

function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;

  if (true) {
    seen = seen || new Map();
  }

  flushPreFlushCbs(seen); // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child so its render effect will have smaller
  //    priority number)
  // 2. If a component is unmounted during a parent component's update,
  //    its update can be skipped.

  queue.sort(function (a, b) {
    return getId(a) - getId(b);
  });

  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      var job = queue[flushIndex];

      if (job) {
        if (true) {
          checkRecursiveUpdates(seen, job);
        }

        callWithErrorHandling(job, null, 14
        /* SCHEDULER */
        );
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null; // some postFlushCb queued jobs!
    // keep flushing until it drains.

    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}

function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    var count = seen.get(fn);

    if (count > RECURSION_LIMIT) {
      throw new Error("Maximum recursive updates exceeded. " + "This means you have a reactive effect that is mutating its own " + "dependencies and thus recursively triggering itself. Possible sources " + "include component template, render function, updated hook or " + "watcher source function.");
    } else {
      seen.set(fn, count + 1);
    }
  }
}
/* eslint-disable no-restricted-globals */


var isHmrUpdating = false;
var hmrDirtyComponents = new Set(); // Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.

if (true) {
  var globalObject = typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {};
  globalObject.__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}

var map = new Map();

function registerHMR(instance) {
  var id = instance.type.__hmrId;
  var record = map.get(id);

  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }

  record.instances.add(instance);
}

function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances["delete"](instance);
}

function createRecord(id, component) {
  if (!component) {
    warn("HMR API usage is out of date.\n" + "Please upgrade vue-loader/vite/rollup-plugin-vue or other relevant " + "depdendency that handles Vue SFC compilation.");
    component = {};
  }

  if (map.has(id)) {
    return false;
  }

  map.set(id, {
    component: isClassComponent(component) ? component.__vccOpts : component,
    instances: new Set()
  });
  return true;
}

function rerender(id, newRender) {
  var record = map.get(id);
  if (!record) return;
  if (newRender) record.component.render = newRender; // Array.from creates a snapshot which avoids the set being mutated during
  // updates

  Array.from(record.instances).forEach(function (instance) {
    if (newRender) {
      instance.render = newRender;
    }

    instance.renderCache = []; // this flag forces child components with slot content to update

    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}

function reload(id, newComp) {
  var record = map.get(id);
  if (!record) return; // Array.from creates a snapshot which avoids the set being mutated during
  // updates

  var component = record.component,
      instances = record.instances;

  if (!hmrDirtyComponents.has(component)) {
    // 1. Update existing comp definition to match new one
    newComp = isClassComponent(newComp) ? newComp.__vccOpts : newComp;
    Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])(component, newComp);

    for (var key in component) {
      if (!(key in newComp)) {
        delete component[key];
      }
    } // 2. Mark component dirty. This forces the renderer to replace the component
    // on patch.


    hmrDirtyComponents.add(component); // 3. Make sure to unmark the component after the reload.

    queuePostFlushCb(function () {
      hmrDirtyComponents["delete"](component);
    });
  }

  Array.from(instances).forEach(function (instance) {
    if (instance.parent) {
      // 4. Force the parent instance to re-render. This will cause all updated
      // components to be unmounted and re-mounted. Queue the update so that we
      // don't end up forcing the same parent to re-render multiple times.
      queueJob(instance.parent.update);
    } else if (instance.appContext.reload) {
      // root instance mounted via createApp() has a reload method
      instance.appContext.reload();
    } else if (typeof window !== 'undefined') {
      // root instance inside tree created via raw render(). Force reload.
      window.location.reload();
    } else {
      console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
    }
  });
}

function tryWrap(fn) {
  return function (id, arg) {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn("[HMR] Something went wrong during Vue component hot-reload. " + "Full reload required.");
    }
  };
}

var devtools;

function setDevtoolsHook(hook) {
  devtools = hook;
}

function devtoolsInitApp(app, version) {
  // TODO queue if devtools is undefined
  if (!devtools) return;
  devtools.emit("app:init"
  /* APP_INIT */
  , app, version, {
    Fragment: Fragment,
    Text: Text,
    Comment: Comment,
    Static: Static
  });
}

function devtoolsUnmountApp(app) {
  if (!devtools) return;
  devtools.emit("app:unmount"
  /* APP_UNMOUNT */
  , app);
}

var devtoolsComponentAdded = /*#__PURE__*/createDevtoolsComponentHook("component:added"
/* COMPONENT_ADDED */
);
var devtoolsComponentUpdated = /*#__PURE__*/createDevtoolsComponentHook("component:updated"
/* COMPONENT_UPDATED */
);
var devtoolsComponentRemoved = /*#__PURE__*/createDevtoolsComponentHook("component:removed"
/* COMPONENT_REMOVED */
);

function createDevtoolsComponentHook(hook) {
  return function (component) {
    if (!devtools) return;
    devtools.emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
  };
}

function devtoolsComponentEmit(component, event, params) {
  if (!devtools) return;
  devtools.emit("component:emit"
  /* COMPONENT_EMIT */
  , component.appContext.app, component, event, params);
}

function emit(instance, event) {
  var props = instance.vnode.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"];

  for (var _len2 = arguments.length, rawArgs = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    rawArgs[_key2 - 2] = arguments[_key2];
  }

  if (true) {
    var emitsOptions = instance.emitsOptions,
        _instance$propsOption = _slicedToArray(instance.propsOptions, 1),
        propsOptions = _instance$propsOption[0];

    if (emitsOptions) {
      if (!(event in emitsOptions)) {
        if (!propsOptions || !(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["toHandlerKey"])(event) in propsOptions)) {
          warn("Component emitted event \"".concat(event, "\" but it is neither declared in ") + "the emits option nor as an \"".concat(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["toHandlerKey"])(event), "\" prop."));
        }
      } else {
        var validator = emitsOptions[event];

        if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(validator)) {
          var isValid = validator.apply(void 0, rawArgs);

          if (!isValid) {
            warn("Invalid event arguments: event validation failed for event \"".concat(event, "\"."));
          }
        }
      }
    }
  }

  var args = rawArgs;
  var isModelListener = event.startsWith('update:'); // for v-model update:xxx events, apply modifiers on args

  var modelArg = isModelListener && event.slice(7);

  if (modelArg && modelArg in props) {
    var modifiersKey = "".concat(modelArg === 'modelValue' ? 'model' : modelArg, "Modifiers");

    var _ref3 = props[modifiersKey] || _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"],
        number = _ref3.number,
        trim = _ref3.trim;

    if (trim) {
      args = rawArgs.map(function (a) {
        return a.trim();
      });
    } else if (number) {
      args = rawArgs.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["toNumber"]);
    }
  }

  if (true) {
    devtoolsComponentEmit(instance, event, args);
  }

  if (true) {
    var lowerCaseEvent = event.toLowerCase();

    if (lowerCaseEvent !== event && props[Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["toHandlerKey"])(lowerCaseEvent)]) {
      warn("Event \"".concat(lowerCaseEvent, "\" is emitted in component ") + "".concat(formatComponentName(instance, instance.type), " but the handler is registered for \"").concat(event, "\". ") + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"".concat(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hyphenate"])(event), "\" instead of \"").concat(event, "\"."));
    }
  } // convert handler name to camelCase. See issue #2249


  var handlerName = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["toHandlerKey"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["camelize"])(event));
  var handler = props[handlerName]; // for v-model update:xxx events, also trigger kebab-case equivalent
  // for props passed via kebab-case

  if (!handler && isModelListener) {
    handlerName = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["toHandlerKey"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hyphenate"])(event));
    handler = props[handlerName];
  }

  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6
    /* COMPONENT_EVENT_HANDLER */
    , args);
  }

  var onceHandler = props[handlerName + "Once"];

  if (onceHandler) {
    if (!instance.emitted) {
      (instance.emitted = {})[handlerName] = true;
    } else if (instance.emitted[handlerName]) {
      return;
    }

    callWithAsyncErrorHandling(onceHandler, instance, 6
    /* COMPONENT_EVENT_HANDLER */
    , args);
  }
}

function normalizeEmitsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!appContext.deopt && comp.__emits !== undefined) {
    return comp.__emits;
  }

  var raw = comp.emits;
  var normalized = {}; // apply mixin/extends props

  var hasExtends = false;

  if (false) { var extendEmits; }

  if (!raw && !hasExtends) {
    return comp.__emits = null;
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(raw)) {
    raw.forEach(function (key) {
      return normalized[key] = null;
    });
  } else {
    Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])(normalized, raw);
  }

  return comp.__emits = normalized;
} // Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.


function isEmitListener(options, key) {
  if (!options || !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isOn"])(key)) {
    return false;
  }

  key = key.slice(2).replace(/Once$/, '');
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(options, key[0].toLowerCase() + key.slice(1)) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(options, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hyphenate"])(key)) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(options, key);
}
/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */


var currentRenderingInstance = null;

function setCurrentRenderingInstance(instance) {
  currentRenderingInstance = instance;
}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */


var accessedAttrs = false;

function markAttrsAccessed() {
  accessedAttrs = true;
}

function renderComponentRoot(instance) {
  var Component = instance.type,
      vnode = instance.vnode,
      proxy = instance.proxy,
      withProxy = instance.withProxy,
      props = instance.props,
      _instance$propsOption2 = _slicedToArray(instance.propsOptions, 1),
      propsOptions = _instance$propsOption2[0],
      slots = instance.slots,
      attrs = instance.attrs,
      emit = instance.emit,
      render = instance.render,
      renderCache = instance.renderCache,
      data = instance.data,
      setupState = instance.setupState,
      ctx = instance.ctx;

  var result;
  currentRenderingInstance = instance;

  if (true) {
    accessedAttrs = false;
  }

  try {
    var fallthroughAttrs;

    if (vnode.shapeFlag & 4
    /* STATEFUL_COMPONENT */
    ) {
        // withProxy is a proxy with a different `has` trap only for
        // runtime-compiled render functions using `with` block.
        var proxyToUse = withProxy || proxy;
        result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
        fallthroughAttrs = attrs;
      } else {
      // functional
      var _render = Component; // in dev, mark attrs accessed if optional props (attrs === props)

      if ( true && attrs === props) {
        markAttrsAccessed();
      }

      result = normalizeVNode(_render.length > 1 ? _render(props,  true ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },

        slots: slots,
        emit: emit
      } : undefined) : _render(props, null
      /* we know it doesn't need it */
      ));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    } // attr merging
    // in dev mode, comments are preserved, and it's possible for a template
    // to have comments along side the root element which makes it a fragment


    var root = result;
    var setRoot = undefined;

    if ( true && result.patchFlag & 2048
    /* DEV_ROOT_FRAGMENT */
    ) {
        ;

        var _getChildRoot = getChildRoot(result);

        var _getChildRoot2 = _slicedToArray(_getChildRoot, 2);

        root = _getChildRoot2[0];
        setRoot = _getChildRoot2[1];
      }

    if (Component.inheritAttrs !== false && fallthroughAttrs) {
      var keys = Object.keys(fallthroughAttrs);
      var _root = root,
          shapeFlag = _root.shapeFlag;

      if (keys.length) {
        if (shapeFlag & 1
        /* ELEMENT */
        || shapeFlag & 6
        /* COMPONENT */
        ) {
            if (propsOptions && keys.some(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isModelListener"])) {
              // If a v-model listener (onUpdate:xxx) has a corresponding declared
              // prop, it indicates this component expects to handle v-model and
              // it should not fallthrough.
              // related: #1543, #1643, #1989
              fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
            }

            root = cloneVNode(root, fallthroughAttrs);
          } else if ( true && !accessedAttrs && root.type !== Comment) {
          var allAttrs = Object.keys(attrs);
          var eventAttrs = [];
          var extraAttrs = [];

          for (var i = 0, l = allAttrs.length; i < l; i++) {
            var key = allAttrs[i];

            if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isOn"])(key)) {
              // ignore v-model handlers when they fail to fallthrough
              if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isModelListener"])(key)) {
                // remove `on`, lowercase first letter to reflect event casing
                // accurately
                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
              }
            } else {
              extraAttrs.push(key);
            }
          }

          if (extraAttrs.length) {
            warn("Extraneous non-props attributes (" + "".concat(extraAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes.");
          }

          if (eventAttrs.length) {
            warn("Extraneous non-emits event listeners (" + "".concat(eventAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes. " + "If the listener is intended to be a component custom event listener only, " + "declare it using the \"emits\" option.");
          }
        }
      }
    } // inherit directives


    if (vnode.dirs) {
      if ( true && !isElementRoot(root)) {
        warn("Runtime directive used on component with non-element root node. " + "The directives will not function as intended.");
      }

      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    } // inherit transition data


    if (vnode.transition) {
      if ( true && !isElementRoot(root)) {
        warn("Component inside <Transition> renders non-element root node " + "that cannot be animated.");
      }

      root.transition = vnode.transition;
    }

    if ( true && setRoot) {
      setRoot(root);
    } else {
      result = root;
    }
  } catch (err) {
    handleError(err, instance, 1
    /* RENDER_FUNCTION */
    );
    result = createVNode(Comment);
  }

  currentRenderingInstance = null;
  return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */


var getChildRoot = function getChildRoot(vnode) {
  var rawChildren = vnode.children;
  var dynamicChildren = vnode.dynamicChildren;
  var childRoot = filterSingleRoot(rawChildren);

  if (!childRoot) {
    return [vnode, undefined];
  }

  var index = rawChildren.indexOf(childRoot);
  var dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;

  var setRoot = function setRoot(updatedRoot) {
    rawChildren[index] = updatedRoot;

    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [].concat(_toConsumableArray(dynamicChildren), [updatedRoot]);
      }
    }
  };

  return [normalizeVNode(childRoot), setRoot];
};

function filterSingleRoot(children) {
  var singleRoot;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (isVNode(child)) {
      // ignore user comment
      if (child.type !== Comment || child.children === 'v-if') {
        if (singleRoot) {
          // has more than 1 non-comment child, return now
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }

  return singleRoot;
}

var getFunctionalFallthrough = function getFunctionalFallthrough(attrs) {
  var res;

  for (var key in attrs) {
    if (key === 'class' || key === 'style' || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isOn"])(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }

  return res;
};

var filterModelListeners = function filterModelListeners(attrs, props) {
  var res = {};

  for (var key in attrs) {
    if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isModelListener"])(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }

  return res;
};

var isElementRoot = function isElementRoot(vnode) {
  return vnode.shapeFlag & 6
  /* COMPONENT */
  || vnode.shapeFlag & 1
  /* ELEMENT */
  || vnode.type === Comment // potential v-if branch switch
  ;
};

function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  var prevProps = prevVNode.props,
      prevChildren = prevVNode.children,
      component = prevVNode.component;
  var nextProps = nextVNode.props,
      nextChildren = nextVNode.children,
      patchFlag = nextVNode.patchFlag;
  var emits = component.emitsOptions; // Parent component's render function was hot-updated. Since this may have
  // caused the child component's slots content to have changed, we need to
  // force the child to update as well.

  if ( true && (prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  } // force child update for runtime directive or transition on component vnode.


  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }

  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024
    /* DYNAMIC_SLOTS */
    ) {
        // slot content that references values that might have changed,
        // e.g. in a v-for
        return true;
      }

    if (patchFlag & 16
    /* FULL_PROPS */
    ) {
        if (!prevProps) {
          return !!nextProps;
        } // presence of this flag indicates props are always non-null


        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8
    /* PROPS */
    ) {
        var dynamicProps = nextVNode.dynamicProps;

        for (var i = 0; i < dynamicProps.length; i++) {
          var key = dynamicProps[i];

          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
  } else {
    // this path is only taken by manually written render functions
    // so presence of any children leads to a forced update
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }

    if (prevProps === nextProps) {
      return false;
    }

    if (!prevProps) {
      return !!nextProps;
    }

    if (!nextProps) {
      return true;
    }

    return hasPropsChanged(prevProps, nextProps, emits);
  }

  return false;
}

function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  var nextKeys = Object.keys(nextProps);

  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }

  for (var i = 0; i < nextKeys.length; i++) {
    var key = nextKeys[i];

    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }

  return false;
}

function updateHOCHostEl(_ref4, el // HostNode
) {
  var vnode = _ref4.vnode,
      parent = _ref4.parent;

  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}

var isSuspense = function isSuspense(type) {
  return type.__isSuspense;
}; // Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.


var SuspenseImpl = {
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process: function process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, // platform-specific impl passed from renderer
  rendererInternals) {
    if (n1 == null) {
      mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, rendererInternals);
    } else {
      patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, rendererInternals);
    }
  },
  hydrate: hydrateSuspense,
  create: createSuspenseBoundary
}; // Force-casted public typing for h and TSX props inference

var Suspense = SuspenseImpl;

function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, optimized, rendererInternals) {
  var patch = rendererInternals.p,
      createElement = rendererInternals.o.createElement;
  var hiddenContainer = createElement('div');
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, optimized, rendererInternals); // start mounting the content subtree in an off-dom container

  patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG); // now check if we have encountered any async deps

  if (suspense.deps > 0) {
    // has async
    // mount the fallback tree
    patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
    isSVG);
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    // Suspense has no async deps. Just resolve.
    suspense.resolve();
  }
}

function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, _ref5) {
  var patch = _ref5.p,
      unmount = _ref5.um,
      createElement = _ref5.o.createElement;
  var suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  var newBranch = n2.ssContent;
  var newFallback = n2.ssFallback;
  var activeBranch = suspense.activeBranch,
      pendingBranch = suspense.pendingBranch,
      isInFallback = suspense.isInFallback,
      isHydrating = suspense.isHydrating;

  if (pendingBranch) {
    suspense.pendingBranch = newBranch;

    if (isSameVNodeType(newBranch, pendingBranch)) {
      // same root type but content may have changed.
      patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);

      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG);
        setActiveBranch(suspense, newFallback);
      }
    } else {
      // toggled before pending tree is resolved
      suspense.pendingId++;

      if (isHydrating) {
        // if toggled before hydration is finished, the current DOM tree is
        // no longer valid. set it as the active branch so it will be unmounted
        // when resolved
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      } // increment pending ID. this is used to invalidate async callbacks
      // reset suspense state


      suspense.deps = 0; // discard effects from pending branch

      suspense.effects.length = 0; // discard previous container

      suspense.hiddenContainer = createElement('div');

      if (isInFallback) {
        // already in fallback state
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);

        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
          isSVG);
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        // toggled "back" to current active branch
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG); // force resolve

        suspense.resolve(true);
      } else {
        // switched to a 3rd branch
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);

        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      // root did not change, just normal patch
      patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG);
      setActiveBranch(suspense, newBranch);
    } else {
      // root node toggled
      // invoke @pending event
      var onPending = n2.props && n2.props.onPending;

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(onPending)) {
        onPending();
      } // mount pending branch in off-dom container


      suspense.pendingBranch = newBranch;
      suspense.pendingId++;
      patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);

      if (suspense.deps <= 0) {
        // incoming branch has no async deps, resolve now.
        suspense.resolve();
      } else {
        var timeout = suspense.timeout,
            pendingId = suspense.pendingId;

        if (timeout > 0) {
          setTimeout(function () {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}

var hasWarned = false;

function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, optimized, rendererInternals) {
  var isHydrating = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;

  /* istanbul ignore if */
  if ( true && !hasWarned) {
    hasWarned = true; // @ts-ignore `console.info` cannot be null error

    console[console.info ? 'info' : 'log']("<Suspense> is an experimental feature and its API will likely change.");
  }

  var patch = rendererInternals.p,
      _move = rendererInternals.m,
      _unmount2 = rendererInternals.um,
      _next = rendererInternals.n,
      _rendererInternals$o = rendererInternals.o,
      parentNode = _rendererInternals$o.parentNode,
      remove = _rendererInternals$o.remove;
  var timeout = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(vnode.props && vnode.props.timeout);
  var suspense = {
    vnode: vnode,
    parent: parent,
    parentComponent: parentComponent,
    isSVG: isSVG,
    container: container,
    hiddenContainer: hiddenContainer,
    anchor: anchor,
    deps: 0,
    pendingId: 0,
    timeout: typeof timeout === 'number' ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: true,
    isHydrating: isHydrating,
    isUnmounted: false,
    effects: [],
    resolve: function resolve() {
      var resume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (true) {
        if (!resume && !suspense.pendingBranch) {
          throw new Error("suspense.resolve() is called without a pending branch.");
        }

        if (suspense.isUnmounted) {
          throw new Error("suspense.resolve() is called on an already unmounted suspense boundary.");
        }
      }

      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          pendingBranch = suspense.pendingBranch,
          pendingId = suspense.pendingId,
          effects = suspense.effects,
          parentComponent = suspense.parentComponent,
          container = suspense.container;

      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        var delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === 'out-in';

        if (delayEnter) {
          activeBranch.transition.afterLeave = function () {
            if (pendingId === suspense.pendingId) {
              _move(pendingBranch, container, _anchor, 0
              /* ENTER */
              );
            }
          };
        } // this is initial anchor on mount


        var _anchor = suspense.anchor; // unmount current active tree

        if (activeBranch) {
          // if the fallback tree was mounted, it may have been moved
          // as part of a parent suspense. get the latest anchor for insertion
          _anchor = _next(activeBranch);

          _unmount2(activeBranch, parentComponent, suspense, true);
        }

        if (!delayEnter) {
          // move content from off-dom container to actual container
          _move(pendingBranch, container, _anchor, 0
          /* ENTER */
          );
        }
      }

      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false; // flush buffered effects
      // check if there is a pending parent suspense

      var parent = suspense.parent;
      var hasUnresolvedAncestor = false;

      while (parent) {
        if (parent.pendingBranch) {
          var _parent$effects;

          // found a pending parent suspense, merge buffered post jobs
          // into that parent
          (_parent$effects = parent.effects).push.apply(_parent$effects, _toConsumableArray(effects));

          hasUnresolvedAncestor = true;
          break;
        }

        parent = parent.parent;
      } // no pending parent suspense, flush all jobs


      if (!hasUnresolvedAncestor) {
        queuePostFlushCb(effects);
      }

      suspense.effects = []; // invoke @resolve event

      var onResolve = vnode.props && vnode.props.onResolve;

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(onResolve)) {
        onResolve();
      }
    },
    fallback: function fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }

      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          parentComponent = suspense.parentComponent,
          container = suspense.container,
          isSVG = suspense.isSVG; // invoke @fallback event

      var onFallback = vnode.props && vnode.props.onFallback;

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(onFallback)) {
        onFallback();
      }

      var anchor = _next(activeBranch);

      var mountFallback = function mountFallback() {
        if (!suspense.isInFallback) {
          return;
        } // mount the fallback tree


        patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG);
        setActiveBranch(suspense, fallbackVNode);
      };

      var delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';

      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      } // unmount current active branch


      _unmount2(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
      true // shouldRemove
      );

      suspense.isInFallback = true;

      if (!delayEnter) {
        mountFallback();
      }
    },
    move: function move(container, anchor, type) {
      suspense.activeBranch && _move(suspense.activeBranch, container, anchor, type);
      suspense.container = container;
    },
    next: function next() {
      return suspense.activeBranch && _next(suspense.activeBranch);
    },
    registerDep: function registerDep(instance, setupRenderEffect) {
      var isInPendingSuspense = !!suspense.pendingBranch;

      if (isInPendingSuspense) {
        suspense.deps++;
      }

      var hydratedEl = instance.vnode.el;
      instance.asyncDep["catch"](function (err) {
        handleError(err, instance, 0
        /* SETUP_FUNCTION */
        );
      }).then(function (asyncSetupResult) {
        // retry when the setup() promise resolves.
        // component may have been unmounted before resolve.
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        } // retry from this component


        instance.asyncResolved = true;
        var vnode = instance.vnode;

        if (true) {
          pushWarningContext(vnode);
        }

        handleSetupResult(instance, asyncSetupResult);

        if (hydratedEl) {
          // vnode may have been replaced if an update happened before the
          // async dep is resolved.
          vnode.el = hydratedEl;
        }

        var placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(instance, vnode, // component may have been moved before resolve.
        // if this is not a hydration, instance.subTree will be the comment
        // placeholder.
        parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
        // consider the comment placeholder case.
        hydratedEl ? null : _next(instance.subTree), suspense, isSVG, optimized);

        if (placeholder) {
          remove(placeholder);
        }

        updateHOCHostEl(instance, vnode.el);

        if (true) {
          popWarningContext();
        } // only decrease deps count if suspense is not already resolved


        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount: function unmount(parentSuspense, doRemove) {
      suspense.isUnmounted = true;

      if (suspense.activeBranch) {
        _unmount2(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
      }

      if (suspense.pendingBranch) {
        _unmount2(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
      }
    }
  };
  return suspense;
}

function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, optimized, rendererInternals, hydrateNode) {
  /* eslint-disable no-restricted-globals */
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, optimized, rendererInternals, true
  /* hydrating */
  ); // there are two possible scenarios for server-rendered suspense:
  // - success: ssr content should be fully resolved
  // - failure: ssr content should be the fallback branch.
  // however, on the client we don't really know if it has failed or not
  // attempt to hydrate the DOM assuming it has succeeded, but we still
  // need to construct a suspense boundary first

  var result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, optimized);

  if (suspense.deps === 0) {
    suspense.resolve();
  }

  return result;
  /* eslint-enable no-restricted-globals */
}

function normalizeSuspenseChildren(vnode) {
  var shapeFlag = vnode.shapeFlag,
      children = vnode.children;
  var content;
  var fallback;

  if (shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
      content = normalizeSuspenseSlot(children["default"]);
      fallback = normalizeSuspenseSlot(children.fallback);
    } else {
    content = normalizeSuspenseSlot(children);
    fallback = normalizeVNode(null);
  }

  return {
    content: content,
    fallback: fallback
  };
}

function normalizeSuspenseSlot(s) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(s)) {
    s = s();
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(s)) {
    var singleChild = filterSingleRoot(s);

    if ( true && !singleChild) {
      warn("<Suspense> slots expect a single root node.");
    }

    s = singleChild;
  }

  return normalizeVNode(s);
}

function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(fn)) {
      var _suspense$effects;

      (_suspense$effects = suspense.effects).push.apply(_suspense$effects, _toConsumableArray(fn));
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}

function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  var vnode = suspense.vnode,
      parentComponent = suspense.parentComponent;
  var el = vnode.el = branch.el; // in case suspense is the root node of a component,
  // recursively update the HOC el

  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}

var isRenderingCompiledSlot = 0;

var setCompiledSlotRendering = function setCompiledSlotRendering(n) {
  return isRenderingCompiledSlot += n;
};
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */


function renderSlot(slots, name) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var // this is not a user-facing function, so the fallback is always generated by
  // the compiler and guaranteed to be a function returning an array
  fallback = arguments.length > 3 ? arguments[3] : undefined;
  var slot = slots[name];

  if ( true && slot && slot.length > 1) {
    warn("SSR-optimized slot function detected in a non-SSR-optimized render " + "function. You need to mark this component with $dynamic-slots in the " + "parent template.");

    slot = function slot() {
      return [];
    };
  } // a compiled slot disables block tracking by default to avoid manual
  // invocation interfering with template-based block tracking, but in
  // `renderSlot` we can be sure that it's template-based so we can force
  // enable it.


  isRenderingCompiledSlot++;
  openBlock();
  var validSlotContent = slot && ensureValidVNode(slot(props));
  var rendered = createBlock(Fragment, {
    key: props.key || "_".concat(name)
  }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1
  /* STABLE */
  ? 64
  /* STABLE_FRAGMENT */
  : -2
  /* BAIL */
  );
  isRenderingCompiledSlot--;
  return rendered;
}

function ensureValidVNode(vnodes) {
  return vnodes.some(function (child) {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
    return true;
  }) ? vnodes : null;
}
/**
 * Wrap a slot function to memoize current rendering instance
 * @private
 */


function withCtx(fn) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentRenderingInstance;
  if (!ctx) return fn;

  var renderFnWithContext = function renderFnWithContext() {
    // If a user calls a compiled slot inside a template expression (#1745), it
    // can mess up block tracking, so by default we need to push a null block to
    // avoid that. This isn't necessary if rendering a compiled `<slot>`.
    if (!isRenderingCompiledSlot) {
      openBlock(true
      /* null block that disables tracking */
      );
    }

    var owner = currentRenderingInstance;
    setCurrentRenderingInstance(ctx);
    var res = fn.apply(void 0, arguments);
    setCurrentRenderingInstance(owner);

    if (!isRenderingCompiledSlot) {
      closeBlock();
    }

    return res;
  };

  renderFnWithContext._c = true;
  return renderFnWithContext;
} // SFC scoped style ID management.


var currentScopeId = null;
var scopeIdStack = [];
/**
 * @private
 */

function pushScopeId(id) {
  scopeIdStack.push(currentScopeId = id);
}
/**
 * @private
 */


function popScopeId() {
  scopeIdStack.pop();
  currentScopeId = scopeIdStack[scopeIdStack.length - 1] || null;
}
/**
 * @private
 */


function withScopeId(id) {
  return function (fn) {
    return withCtx(function () {
      pushScopeId(id);
      var res = fn.apply(this, arguments);
      popScopeId();
      return res;
    });
  };
}

function initProps(instance, rawProps, isStateful) {
  var isSSR = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var props = {};
  var attrs = {};
  Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["def"])(attrs, InternalObjectKey, 1);
  setFullProps(instance, rawProps, props, attrs); // validation

  if (true) {
    validateProps(props, instance);
  }

  if (isStateful) {
    // stateful
    instance.props = isSSR ? props : Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["shallowReactive"])(props);
  } else {
    if (!instance.type.props) {
      // functional w/ optional props, props === attrs
      instance.props = attrs;
    } else {
      // functional w/ declared props
      instance.props = props;
    }
  }

  instance.attrs = attrs;
}

function updateProps(instance, rawProps, rawPrevProps, optimized) {
  var props = instance.props,
      attrs = instance.attrs,
      patchFlag = instance.vnode.patchFlag;
  var rawCurrentProps = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRaw"])(props);

  var _instance$propsOption3 = _slicedToArray(instance.propsOptions, 1),
      options = _instance$propsOption3[0];

  if ( // always force full diff in dev
  // - #1942 if hmr is enabled with sfc component
  // - vite#872 non-sfc component used by sfc component
  !( true && (instance.type.__hmrId || instance.parent && instance.parent.type.__hmrId)) && (optimized || patchFlag > 0) && !(patchFlag & 16
  /* FULL_PROPS */
  )) {
    if (patchFlag & 8
    /* PROPS */
    ) {
        // Compiler-generated props & no keys change, just set the updated
        // the props.
        var propsToUpdate = instance.vnode.dynamicProps;

        for (var i = 0; i < propsToUpdate.length; i++) {
          var key = propsToUpdate[i]; // PROPS flag guarantees rawProps to be non-null

          var value = rawProps[key];

          if (options) {
            // attr / props separation was done on init and will be consistent
            // in this code path, so just check if attrs have it.
            if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(attrs, key)) {
              attrs[key] = value;
            } else {
              var camelizedKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["camelize"])(key);
              props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance);
            }
          } else {
            attrs[key] = value;
          }
        }
      }
  } else {
    // full props update.
    setFullProps(instance, rawProps, props, attrs); // in case of dynamic props, check if we need to delete keys from
    // the props object

    var kebabKey;

    for (var _key3 in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(rawProps, _key3) && ( // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      (kebabKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hyphenate"])(_key3)) === _key3 || !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && ( // for camelCase
          rawPrevProps[_key3] !== undefined || // for kebab-case
          rawPrevProps[kebabKey] !== undefined)) {
            props[_key3] = resolvePropValue(options, rawProps || _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"], _key3, undefined, instance);
          }
        } else {
          delete props[_key3];
        }
      }
    } // in the case of functional component w/o props declaration, props and
    // attrs point to the same object so it should already have been updated.


    if (attrs !== rawCurrentProps) {
      for (var _key4 in attrs) {
        if (!rawProps || !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(rawProps, _key4)) {
          delete attrs[_key4];
        }
      }
    }
  } // trigger updates for $attrs in case it's used in component slots


  Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["trigger"])(instance, "set"
  /* SET */
  , '$attrs');

  if ( true && rawProps) {
    validateProps(props, instance);
  }
}

function setFullProps(instance, rawProps, props, attrs) {
  var _instance$propsOption4 = _slicedToArray(instance.propsOptions, 2),
      options = _instance$propsOption4[0],
      needCastKeys = _instance$propsOption4[1];

  if (rawProps) {
    for (var key in rawProps) {
      var value = rawProps[key]; // key, ref are reserved and never passed down

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isReservedProp"])(key)) {
        continue;
      } // prop option names are camelized during normalization, so to support
      // kebab -> camel conversion here we need to camelize the key.


      var camelKey = void 0;

      if (options && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(options, camelKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["camelize"])(key))) {
        props[camelKey] = value;
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        // Any non-declared (either as a prop or an emitted event) props are put
        // into a separate `attrs` object for spreading. Make sure to preserve
        // original key casing
        attrs[key] = value;
      }
    }
  }

  if (needCastKeys) {
    var rawCurrentProps = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRaw"])(props);

    for (var i = 0; i < needCastKeys.length; i++) {
      var _key5 = needCastKeys[i];
      props[_key5] = resolvePropValue(options, rawCurrentProps, _key5, rawCurrentProps[_key5], instance);
    }
  }
}

function resolvePropValue(options, props, key, value, instance) {
  var opt = options[key];

  if (opt != null) {
    var hasDefault = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(opt, 'default'); // default values

    if (hasDefault && value === undefined) {
      var defaultValue = opt["default"];

      if (opt.type !== Function && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(defaultValue)) {
        setCurrentInstance(instance);
        value = defaultValue(props);
        setCurrentInstance(null);
      } else {
        value = defaultValue;
      }
    } // boolean casting


    if (opt[0
    /* shouldCast */
    ]) {
      if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(props, key) && !hasDefault) {
        value = false;
      } else if (opt[1
      /* shouldCastTrue */
      ] && (value === '' || value === Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hyphenate"])(key))) {
        value = true;
      }
    }
  }

  return value;
}

function normalizePropsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!appContext.deopt && comp.__props) {
    return comp.__props;
  }

  var raw = comp.props;
  var normalized = {};
  var needCastKeys = []; // apply mixin/extends props

  var hasExtends = false;

  if (false) { var extendProps; }

  if (!raw && !hasExtends) {
    return comp.__props = _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_ARR"];
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(raw)) {
    for (var i = 0; i < raw.length; i++) {
      if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(raw[i])) {
        warn("props must be strings when using array syntax.", raw[i]);
      }

      var normalizedKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["camelize"])(raw[i]);

      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"];
      }
    }
  } else if (raw) {
    if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(raw)) {
      warn("invalid props options", raw);
    }

    for (var key in raw) {
      var _normalizedKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["camelize"])(key);

      if (validatePropName(_normalizedKey)) {
        var opt = raw[key];
        var prop = normalized[_normalizedKey] = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(opt) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(opt) ? {
          type: opt
        } : opt;

        if (prop) {
          var booleanIndex = getTypeIndex(Boolean, prop.type);
          var stringIndex = getTypeIndex(String, prop.type);
          prop[0
          /* shouldCast */
          ] = booleanIndex > -1;
          prop[1
          /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex; // if the prop needs boolean casting or default value

          if (booleanIndex > -1 || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(prop, 'default')) {
            needCastKeys.push(_normalizedKey);
          }
        }
      }
    }
  }

  return comp.__props = [normalized, needCastKeys];
}

function validatePropName(key) {
  if (key[0] !== '$') {
    return true;
  } else if (true) {
    warn("Invalid prop name: \"".concat(key, "\" is a reserved property."));
  }

  return false;
} // use function string name to check type constructors
// so that it works across vms / iframes.


function getType(ctor) {
  var match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(expectedTypes)) {
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i;
      }
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  return -1;
}
/**
 * dev only
 */


function validateProps(props, instance) {
  var rawValues = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRaw"])(props);
  var options = instance.propsOptions[0];

  for (var key in options) {
    var opt = options[key];
    if (opt == null) continue;
    validateProp(key, rawValues[key], opt, !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(rawValues, key));
  }
}
/**
 * dev only
 */


function validateProp(name, value, prop, isAbsent) {
  var type = prop.type,
      required = prop.required,
      validator = prop.validator; // required!

  if (required && isAbsent) {
    warn('Missing required prop: "' + name + '"');
    return;
  } // missing but optional


  if (value == null && !prop.required) {
    return;
  } // type check


  if (type != null && type !== true) {
    var isValid = false;
    var types = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(type) ? type : [type];
    var expectedTypes = []; // value is valid as long as one of the specified types match

    for (var i = 0; i < types.length && !isValid; i++) {
      var _assertType = assertType(value, types[i]),
          valid = _assertType.valid,
          expectedType = _assertType.expectedType;

      expectedTypes.push(expectedType || '');
      isValid = valid;
    }

    if (!isValid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  } // custom validator


  if (validator && !validator(value)) {
    warn('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}

var isSimpleType = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["makeMap"])('String,Number,Boolean,Function,Symbol');
/**
 * dev only
 */

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);

  if (isSimpleType(expectedType)) {
    var t = _typeof(value);

    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value);
  } else if (expectedType === 'Array') {
    valid = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value);
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * dev only
 */


function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"".concat(name, "\".") + " Expected ".concat(expectedTypes.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["capitalize"]).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["toRawType"])(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value ".concat(expectedValue);
  }

  message += ", got ".concat(receivedType, " "); // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value ".concat(receivedValue, ".");
  }

  return message;
}
/**
 * dev only
 */


function styleValue(value, type) {
  if (type === 'String') {
    return "\"".concat(value, "\"");
  } else if (type === 'Number') {
    return "".concat(Number(value));
  } else {
    return "".concat(value);
  }
}
/**
 * dev only
 */


function isExplicable(type) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return type.toLowerCase() === elem;
  });
}
/**
 * dev only
 */


function isBoolean() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key6 = 0; _key6 < _len3; _key6++) {
    args[_key6] = arguments[_key6];
  }

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}

function injectHook(type, hook) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;
  var prepend = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (target) {
    var hooks = target[type] || (target[type] = []); // cache the error handling wrapper for injected hooks so the same hook
    // can be properly deduped by the scheduler. "__weh" stands for "with error
    // handling".

    var wrappedHook = hook.__weh || (hook.__weh = function () {
      if (target.isUnmounted) {
        return;
      } // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.


      Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["pauseTracking"])(); // Set currentInstance during hook invocation.
      // This assumes the hook does not synchronously trigger other hooks, which
      // can only be false when the user does something really funky.

      setCurrentInstance(target);

      for (var _len4 = arguments.length, args = new Array(_len4), _key7 = 0; _key7 < _len4; _key7++) {
        args[_key7] = arguments[_key7];
      }

      var res = callWithAsyncErrorHandling(hook, target, type, args);
      setCurrentInstance(null);
      Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["resetTracking"])();
      return res;
    });

    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }

    return wrappedHook;
  } else if (true) {
    var apiName = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["toHandlerKey"])(ErrorTypeStrings[type].replace(/ hook$/, ''));
    warn("".concat(apiName, " is called when there is no active component instance to be ") + "associated with. " + "Lifecycle injection APIs can only be used during execution of setup()." + (" If you are using async setup(), make sure to register lifecycle " + "hooks before the first await statement."));
  }
}

var createHook = function createHook(lifecycle) {
  return function (hook) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
    return (// post-create lifecycle registrations are noops during SSR
      !isInSSRComponentSetup && injectHook(lifecycle, hook, target)
    );
  };
};

var onBeforeMount = createHook("bm"
/* BEFORE_MOUNT */
);
var onMounted = createHook("m"
/* MOUNTED */
);
var onBeforeUpdate = createHook("bu"
/* BEFORE_UPDATE */
);
var onUpdated = createHook("u"
/* UPDATED */
);
var onBeforeUnmount = createHook("bum"
/* BEFORE_UNMOUNT */
);
var onUnmounted = createHook("um"
/* UNMOUNTED */
);
var onRenderTriggered = createHook("rtg"
/* RENDER_TRIGGERED */
);
var onRenderTracked = createHook("rtc"
/* RENDER_TRACKED */
);

var onErrorCaptured = function onErrorCaptured(hook) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
  injectHook("ec"
  /* ERROR_CAPTURED */
  , hook, target);
}; // Simple effect.


function watchEffect(effect, options) {
  return doWatch(effect, null, options);
} // initial value for watchers to trigger on undefined initial values


var INITIAL_WATCHER_VALUE = {}; // implementation

function watch(source, cb, options) {
  if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(cb)) {
    warn("`watch(fn, options?)` signature has been moved to a separate API. " + "Use `watchEffect(fn, options?)` instead. `watch` now only " + "supports `watch(source, cb, options?) signature.");
  }

  return doWatch(source, cb, options);
}

function doWatch(source, cb) {
  var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"],
      immediate = _ref6.immediate,
      deep = _ref6.deep,
      flush = _ref6.flush,
      onTrack = _ref6.onTrack,
      onTrigger = _ref6.onTrigger;

  var instance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : currentInstance;

  if ( true && !cb) {
    if (immediate !== undefined) {
      warn("watch() \"immediate\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }

    if (deep !== undefined) {
      warn("watch() \"deep\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }
  }

  var warnInvalidSource = function warnInvalidSource(s) {
    warn("Invalid watch source: ", s, "A watch source can only be a getter/effect function, a ref, " + "a reactive object, or an array of these types.");
  };

  var getter;
  var forceTrigger = false;

  if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isRef"])(source)) {
    getter = function getter() {
      return source.value;
    };

    forceTrigger = !!source._shallow;
  } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isReactive"])(source)) {
    getter = function getter() {
      return source;
    };

    deep = true;
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(source)) {
    getter = function getter() {
      return source.map(function (s) {
        if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isRef"])(s)) {
          return s.value;
        } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isReactive"])(s)) {
          return traverse(s);
        } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(s)) {
          return callWithErrorHandling(s, instance, 2
          /* WATCH_GETTER */
          );
        } else {
           true && warnInvalidSource(s);
        }
      });
    };
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(source)) {
    if (cb) {
      // getter with cb
      getter = function getter() {
        return callWithErrorHandling(source, instance, 2
        /* WATCH_GETTER */
        );
      };
    } else {
      // no cb -> simple effect
      getter = function getter() {
        if (instance && instance.isUnmounted) {
          return;
        }

        if (cleanup) {
          cleanup();
        }

        return callWithErrorHandling(source, instance, 3
        /* WATCH_CALLBACK */
        , [onInvalidate]);
      };
    }
  } else {
    getter = _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
     true && warnInvalidSource(source);
  }

  if (cb && deep) {
    var baseGetter = getter;

    getter = function getter() {
      return traverse(baseGetter());
    };
  }

  var cleanup;

  var onInvalidate = function onInvalidate(fn) {
    cleanup = runner.options.onStop = function () {
      callWithErrorHandling(fn, instance, 4
      /* WATCH_CLEANUP */
      );
    };
  };

  var oldValue = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(source) ? [] : INITIAL_WATCHER_VALUE;

  var job = function job() {
    if (!runner.active) {
      return;
    }

    if (cb) {
      // watch(source, cb)
      var newValue = runner();

      if (deep || forceTrigger || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasChanged"])(newValue, oldValue)) {
        // cleanup before running cb again
        if (cleanup) {
          cleanup();
        }

        callWithAsyncErrorHandling(cb, instance, 3
        /* WATCH_CALLBACK */
        , [newValue, // pass undefined as the old value when it's changed for the first time
        oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue, onInvalidate]);
        oldValue = newValue;
      }
    } else {
      // watchEffect
      runner();
    }
  }; // important: mark the job as a watcher callback so that scheduler knows
  // it is allowed to self-trigger (#1727)


  job.allowRecurse = !!cb;
  var scheduler;

  if (flush === 'sync') {
    scheduler = job;
  } else if (flush === 'post') {
    scheduler = function scheduler() {
      return queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else {
    // default: 'pre'
    scheduler = function scheduler() {
      if (!instance || instance.isMounted) {
        queuePreFlushCb(job);
      } else {
        // with 'pre' option, the first call must happen before
        // the component is mounted so it is called synchronously.
        job();
      }
    };
  }

  var runner = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["effect"])(getter, {
    lazy: true,
    onTrack: onTrack,
    onTrigger: onTrigger,
    scheduler: scheduler
  });
  recordInstanceBoundEffect(runner, instance); // initial run

  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = runner();
    }
  } else if (flush === 'post') {
    queuePostRenderEffect(runner, instance && instance.suspense);
  } else {
    runner();
  }

  return function () {
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["stop"])(runner);

    if (instance) {
      Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["remove"])(instance.effects, runner);
    }
  };
} // this.$watch


function instanceWatch(source, cb, options) {
  var publicThis = this.proxy;
  var getter = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(source) ? function () {
    return publicThis[source];
  } : source.bind(publicThis);
  return doWatch(getter, cb.bind(publicThis), options, this);
}

function traverse(value) {
  var seen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

  if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value) || seen.has(value)) {
    return value;
  }

  seen.add(value);

  if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isRef"])(value)) {
    traverse(value.value, seen);
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
    for (var i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isSet"])(value) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isMap"])(value)) {
    value.forEach(function (v) {
      traverse(v, seen);
    });
  } else {
    for (var key in value) {
      traverse(value[key], seen);
    }
  }

  return value;
}

function useTransitionState() {
  var state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map()
  };
  onMounted(function () {
    state.isMounted = true;
  });
  onBeforeUnmount(function () {
    state.isUnmounting = true;
  });
  return state;
}

var TransitionHookValidator = [Function, Array];
var BaseTransitionImpl = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup: function setup(props, _ref7) {
    var slots = _ref7.slots;
    var instance = getCurrentInstance();
    var state = useTransitionState();
    var prevTransitionKey;
    return function () {
      var children = slots["default"] && getTransitionRawChildren(slots["default"](), true);

      if (!children || !children.length) {
        return;
      } // warn multiple elements


      if ( true && children.length > 1) {
        warn('<transition> can only be used on a single element or component. Use ' + '<transition-group> for lists.');
      } // there's no need to track reactivity for these props so use the raw
      // props for a bit better perf


      var rawProps = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRaw"])(props);
      var mode = rawProps.mode; // check mode

      if ( true && mode && !['in-out', 'out-in', 'default'].includes(mode)) {
        warn("invalid <transition> mode: ".concat(mode));
      } // at this point children has a guaranteed length of 1.


      var child = children[0];

      if (state.isLeaving) {
        return emptyPlaceholder(child);
      } // in the case of <transition><keep-alive/></transition>, we need to
      // compare the type of the kept-alive children.


      var innerChild = getKeepAliveChild(child);

      if (!innerChild) {
        return emptyPlaceholder(child);
      }

      var enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      var oldChild = instance.subTree;
      var oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      var transitionKeyChanged = false;
      var getTransitionKey = innerChild.type.getTransitionKey;

      if (getTransitionKey) {
        var key = getTransitionKey();

        if (prevTransitionKey === undefined) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      } // handle mode


      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        var leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance); // update old tree's hooks in case of dynamic transition

        setTransitionHooks(oldInnerChild, leavingHooks); // switching between different views

        if (mode === 'out-in') {
          state.isLeaving = true; // return placeholder node and queue update when leave finishes

          leavingHooks.afterLeave = function () {
            state.isLeaving = false;
            instance.update();
          };

          return emptyPlaceholder(child);
        } else if (mode === 'in-out') {
          leavingHooks.delayLeave = function (el, earlyRemove, delayedLeave) {
            var leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild; // early removal callback

            el._leaveCb = function () {
              earlyRemove();
              el._leaveCb = undefined;
              delete enterHooks.delayedLeave;
            };

            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }

      return child;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var BaseTransition = BaseTransitionImpl;

function getLeavingNodesForType(state, vnode) {
  var leavingVNodes = state.leavingVNodes;
  var leavingVNodesCache = leavingVNodes.get(vnode.type);

  if (!leavingVNodesCache) {
    leavingVNodesCache = Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }

  return leavingVNodesCache;
} // The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.


function resolveTransitionHooks(vnode, props, state, instance) {
  var appear = props.appear,
      mode = props.mode,
      _props$persisted = props.persisted,
      persisted = _props$persisted === void 0 ? false : _props$persisted,
      onBeforeEnter = props.onBeforeEnter,
      onEnter = props.onEnter,
      onAfterEnter = props.onAfterEnter,
      onEnterCancelled = props.onEnterCancelled,
      onBeforeLeave = props.onBeforeLeave,
      onLeave = props.onLeave,
      onAfterLeave = props.onAfterLeave,
      onLeaveCancelled = props.onLeaveCancelled,
      onBeforeAppear = props.onBeforeAppear,
      onAppear = props.onAppear,
      onAfterAppear = props.onAfterAppear,
      onAppearCancelled = props.onAppearCancelled;
  var key = String(vnode.key);
  var leavingVNodesCache = getLeavingNodesForType(state, vnode);

  var callHook = function callHook(hook, args) {
    hook && callWithAsyncErrorHandling(hook, instance, 9
    /* TRANSITION_HOOK */
    , args);
  };

  var hooks = {
    mode: mode,
    persisted: persisted,
    beforeEnter: function beforeEnter(el) {
      var hook = onBeforeEnter;

      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      } // for same element (v-show)


      if (el._leaveCb) {
        el._leaveCb(true
        /* cancelled */
        );
      } // for toggled element with same key (v-if)


      var leavingVNode = leavingVNodesCache[key];

      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        // force early removal (not cancelled)
        leavingVNode.el._leaveCb();
      }

      callHook(hook, [el]);
    },
    enter: function enter(el) {
      var hook = onEnter;
      var afterHook = onAfterEnter;
      var cancelHook = onEnterCancelled;

      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }

      var called = false;

      var done = el._enterCb = function (cancelled) {
        if (called) return;
        called = true;

        if (cancelled) {
          callHook(cancelHook, [el]);
        } else {
          callHook(afterHook, [el]);
        }

        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }

        el._enterCb = undefined;
      };

      if (hook) {
        hook(el, done);

        if (hook.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    leave: function leave(el, remove) {
      var key = String(vnode.key);

      if (el._enterCb) {
        el._enterCb(true
        /* cancelled */
        );
      }

      if (state.isUnmounting) {
        return remove();
      }

      callHook(onBeforeLeave, [el]);
      var called = false;

      var done = el._leaveCb = function (cancelled) {
        if (called) return;
        called = true;
        remove();

        if (cancelled) {
          callHook(onLeaveCancelled, [el]);
        } else {
          callHook(onAfterLeave, [el]);
        }

        el._leaveCb = undefined;

        if (leavingVNodesCache[key] === vnode) {
          delete leavingVNodesCache[key];
        }
      };

      leavingVNodesCache[key] = vnode;

      if (onLeave) {
        onLeave(el, done);

        if (onLeave.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    clone: function clone(vnode) {
      return resolveTransitionHooks(vnode, props, state, instance);
    }
  };
  return hooks;
} // the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.


function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}

function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : undefined : vnode;
}

function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6
  /* COMPONENT */
  && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
      vnode.ssContent.transition = hooks.clone(vnode.ssContent);
      vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else {
    vnode.transition = hooks;
  }
}

function getTransitionRawChildren(children) {
  var keepComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var ret = [];
  var keyedFragmentCount = 0;

  for (var i = 0; i < children.length; i++) {
    var child = children[i]; // handle fragment children case, e.g. v-for

    if (child.type === Fragment) {
      if (child.patchFlag & 128
      /* KEYED_FRAGMENT */
      ) keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
    } // comment placeholders should be skipped, e.g. v-if
    else if (keepComment || child.type !== Comment) {
        ret.push(child);
      }
  } // #1126 if a transition children list contains multiple sub fragments, these
  // fragments will be merged into a flat children array. Since each v-for
  // fragment may contain different static bindings inside, we need to de-op
  // these children to force full diffs to ensure correct behavior.


  if (keyedFragmentCount > 1) {
    for (var _i2 = 0; _i2 < ret.length; _i2++) {
      ret[_i2].patchFlag = -2
      /* BAIL */
      ;
    }
  }

  return ret;
}

var isKeepAlive = function isKeepAlive(vnode) {
  return vnode.type.__isKeepAlive;
};

var KeepAliveImpl = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  inheritRef: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup: function setup(props, _ref8) {
    var slots = _ref8.slots;
    var cache = new Map();
    var keys = new Set();
    var current = null;
    var instance = getCurrentInstance();
    var parentSuspense = instance.suspense; // KeepAlive communicates with the instantiated renderer via the
    // ctx where the renderer passes in its internals,
    // and the KeepAlive instance exposes activate/deactivate implementations.
    // The whole point of this is to avoid importing KeepAlive directly in the
    // renderer to facilitate tree-shaking.

    var sharedContext = instance.ctx;
    var _sharedContext$render = sharedContext.renderer,
        patch = _sharedContext$render.p,
        move = _sharedContext$render.m,
        _unmount = _sharedContext$render.um,
        createElement = _sharedContext$render.o.createElement;
    var storageContainer = createElement('div');

    sharedContext.activate = function (vnode, container, anchor, isSVG, optimized) {
      var instance = vnode.component;
      move(vnode, container, anchor, 0
      /* ENTER */
      , parentSuspense); // in case props have changed

      patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, optimized);
      queuePostRenderEffect(function () {
        instance.isDeactivated = false;

        if (instance.a) {
          Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["invokeArrayFns"])(instance.a);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeMounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }
      }, parentSuspense);
    };

    sharedContext.deactivate = function (vnode) {
      var instance = vnode.component;
      move(vnode, storageContainer, null, 1
      /* LEAVE */
      , parentSuspense);
      queuePostRenderEffect(function () {
        if (instance.da) {
          Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["invokeArrayFns"])(instance.da);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }

        instance.isDeactivated = true;
      }, parentSuspense);
    };

    function unmount(vnode) {
      // reset the shapeFlag so it can be properly unmounted
      resetShapeFlag(vnode);

      _unmount(vnode, instance, parentSuspense);
    }

    function pruneCache(filter) {
      cache.forEach(function (vnode, key) {
        var name = getComponentName(vnode.type);

        if (name && (!filter || !filter(name))) {
          pruneCacheEntry(key);
        }
      });
    }

    function pruneCacheEntry(key) {
      var cached = cache.get(key);

      if (!current || cached.type !== current.type) {
        unmount(cached);
      } else if (current) {
        // current active instance should no longer be kept-alive.
        // we can't unmount it now but it might be later, so reset its flag now.
        resetShapeFlag(current);
      }

      cache["delete"](key);
      keys["delete"](key);
    } // prune cache on include/exclude prop change


    watch(function () {
      return [props.include, props.exclude];
    }, function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 2),
          include = _ref10[0],
          exclude = _ref10[1];

      include && pruneCache(function (name) {
        return matches(include, name);
      });
      exclude && pruneCache(function (name) {
        return !matches(exclude, name);
      });
    }, // prune post-render after `current` has been updated
    {
      flush: 'post',
      deep: true
    }); // cache sub tree after render

    var pendingCacheKey = null;

    var cacheSubtree = function cacheSubtree() {
      // fix #1621, the pendingCacheKey could be 0
      if (pendingCacheKey != null) {
        cache.set(pendingCacheKey, getInnerChild(instance.subTree));
      }
    };

    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(function () {
      cache.forEach(function (cached) {
        var subTree = instance.subTree,
            suspense = instance.suspense;
        var vnode = getInnerChild(subTree);

        if (cached.type === vnode.type) {
          // current instance will be unmounted as part of keep-alive's unmount
          resetShapeFlag(vnode); // but invoke its deactivated hook here

          var da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }

        unmount(cached);
      });
    });
    return function () {
      pendingCacheKey = null;

      if (!slots["default"]) {
        return null;
      }

      var children = slots["default"]();
      var rawVNode = children[0];

      if (children.length > 1) {
        if (true) {
          warn("KeepAlive should contain exactly one component child.");
        }

        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4
      /* STATEFUL_COMPONENT */
      ) && !(rawVNode.shapeFlag & 128
      /* SUSPENSE */
      )) {
        current = null;
        return rawVNode;
      }

      var vnode = getInnerChild(rawVNode);
      var comp = vnode.type;
      var name = getComponentName(comp);
      var include = props.include,
          exclude = props.exclude,
          max = props.max;

      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        current = vnode;
        return rawVNode;
      }

      var key = vnode.key == null ? comp : vnode.key;
      var cachedVNode = cache.get(key); // clone vnode if it's reused because we are going to mutate it

      if (vnode.el) {
        vnode = cloneVNode(vnode);

        if (rawVNode.shapeFlag & 128
        /* SUSPENSE */
        ) {
            rawVNode.ssContent = vnode;
          }
      } // #1513 it's possible for the returned vnode to be cloned due to attr
      // fallthrough or scopeId, so the vnode here may not be the final vnode
      // that is mounted. Instead of caching it directly, we store the pending
      // key and cache `instance.subTree` (the normalized vnode) in
      // beforeMount/beforeUpdate hooks.


      pendingCacheKey = key;

      if (cachedVNode) {
        // copy over mounted state
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;

        if (vnode.transition) {
          // recursively update transition hooks on subTree
          setTransitionHooks(vnode, vnode.transition);
        } // avoid vnode being mounted as fresh


        vnode.shapeFlag |= 512
        /* COMPONENT_KEPT_ALIVE */
        ; // make this key the freshest

        keys["delete"](key);
        keys.add(key);
      } else {
        keys.add(key); // prune oldest entry

        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      } // avoid vnode being unmounted


      vnode.shapeFlag |= 256
      /* COMPONENT_SHOULD_KEEP_ALIVE */
      ;
      current = vnode;
      return rawVNode;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var KeepAlive = KeepAliveImpl;

function matches(pattern, name) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(pattern)) {
    return pattern.some(function (p) {
      return matches(p, name);
    });
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(pattern)) {
    return pattern.split(',').indexOf(name) > -1;
  } else if (pattern.test) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a"
  /* ACTIVATED */
  , target);
}

function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da"
  /* DEACTIVATED */
  , target);
}

function registerKeepAliveHook(hook, type) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;

  // cache the deactivate branch check wrapper for injected hooks so the same
  // hook can be properly deduped by the scheduler. "__wdc" stands for "with
  // deactivation check".
  var wrappedHook = hook.__wdc || (hook.__wdc = function () {
    // only fire the hook if the target instance is NOT in a deactivated branch.
    var current = target;

    while (current) {
      if (current.isDeactivated) {
        return;
      }

      current = current.parent;
    }

    hook();
  });

  injectHook(type, wrappedHook, target); // In addition to registering it on the target instance, we walk up the parent
  // chain and register it on all ancestor instances that are keep-alive roots.
  // This avoids the need to walk the entire component tree when invoking these
  // hooks, and more importantly, avoids the need to track child components in
  // arrays.

  if (target) {
    var current = target.parent;

    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }

      current = current.parent;
    }
  }
}

function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  // injectHook wraps the original for error handling, so make sure to remove
  // the wrapped version.
  var injected = injectHook(type, hook, keepAliveRoot, true
  /* prepend */
  );
  onUnmounted(function () {
    Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["remove"])(keepAliveRoot[type], injected);
  }, target);
}

function resetShapeFlag(vnode) {
  var shapeFlag = vnode.shapeFlag;

  if (shapeFlag & 256
  /* COMPONENT_SHOULD_KEEP_ALIVE */
  ) {
      shapeFlag -= 256
      /* COMPONENT_SHOULD_KEEP_ALIVE */
      ;
    }

  if (shapeFlag & 512
  /* COMPONENT_KEPT_ALIVE */
  ) {
      shapeFlag -= 512
      /* COMPONENT_KEPT_ALIVE */
      ;
    }

  vnode.shapeFlag = shapeFlag;
}

function getInnerChild(vnode) {
  return vnode.shapeFlag & 128
  /* SUSPENSE */
  ? vnode.ssContent : vnode;
}

var isInternalKey = function isInternalKey(key) {
  return key[0] === '_' || key === '$stable';
};

var normalizeSlotValue = function normalizeSlotValue(value) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
};

var normalizeSlot = function normalizeSlot(key, rawSlot, ctx) {
  return withCtx(function (props) {
    if ( true && currentInstance) {
      warn("Slot \"".concat(key, "\" invoked outside of the render function: ") + "this will not track dependencies used in the slot. " + "Invoke the slot function inside the render function instead.");
    }

    return normalizeSlotValue(rawSlot(props));
  }, ctx);
};

var normalizeObjectSlots = function normalizeObjectSlots(rawSlots, slots) {
  var ctx = rawSlots._ctx;

  for (var key in rawSlots) {
    if (isInternalKey(key)) continue;
    var value = rawSlots[key];

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      (function () {
        if (true) {
          warn("Non-function value encountered for slot \"".concat(key, "\". ") + "Prefer function slots for better performance.");
        }

        var normalized = normalizeSlotValue(value);

        slots[key] = function () {
          return normalized;
        };
      })();
    }
  }
};

var normalizeVNodeSlots = function normalizeVNodeSlots(instance, children) {
  if ( true && !isKeepAlive(instance.vnode)) {
    warn("Non-function value encountered for default slot. " + "Prefer function slots for better performance.");
  }

  var normalized = normalizeSlotValue(children);

  instance.slots["default"] = function () {
    return normalized;
  };
};

var initSlots = function initSlots(instance, children) {
  if (instance.vnode.shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
      var type = children._;

      if (type) {
        instance.slots = children; // make compiler marker non-enumerable

        Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["def"])(children, '_', type);
      } else {
        normalizeObjectSlots(children, instance.slots = {});
      }
    } else {
    instance.slots = {};

    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }

  Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["def"])(instance.slots, InternalObjectKey, 1);
};

var updateSlots = function updateSlots(instance, children) {
  var vnode = instance.vnode,
      slots = instance.slots;
  var needDeletionCheck = true;
  var deletionComparisonTarget = _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"];

  if (vnode.shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
      var type = children._;

      if (type) {
        // compiled slots.
        if ( true && isHmrUpdating) {
          // Parent was HMR updated so slot content may have changed.
          // force update slots and mark instance for hmr as well
          Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])(slots, children);
        } else if (type === 1
        /* STABLE */
        ) {
            // compiled AND stable.
            // no need to update, and skip stale slots removal.
            needDeletionCheck = false;
          } else {
          // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
          // normalization.
          Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])(slots, children);
        }
      } else {
        needDeletionCheck = !children.$stable;
        normalizeObjectSlots(children, slots);
      }

      deletionComparisonTarget = children;
    } else if (children) {
    // non slot object children (direct value) passed to a component
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = {
      "default": 1
    };
  } // delete stale slots


  if (needDeletionCheck) {
    for (var key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/


var isBuiltInDirective = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["makeMap"])('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text');

function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn('Do not use built-in directive ids as custom directive id: ' + name);
  }
}
/**
 * Adds directives to a VNode.
 */


function withDirectives(vnode, directives) {
  var internalInstance = currentRenderingInstance;

  if (internalInstance === null) {
     true && warn("withDirectives can only be used inside render functions.");
    return vnode;
  }

  var instance = internalInstance.proxy;
  var bindings = vnode.dirs || (vnode.dirs = []);

  for (var i = 0; i < directives.length; i++) {
    var _directives$i = _slicedToArray(directives[i], 4),
        dir = _directives$i[0],
        value = _directives$i[1],
        arg = _directives$i[2],
        _directives$i$ = _directives$i[3],
        modifiers = _directives$i$ === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"] : _directives$i$;

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }

    bindings.push({
      dir: dir,
      instance: instance,
      value: value,
      oldValue: void 0,
      arg: arg,
      modifiers: modifiers
    });
  }

  return vnode;
}

function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  var bindings = vnode.dirs;
  var oldBindings = prevVNode && prevVNode.dirs;

  for (var i = 0; i < bindings.length; i++) {
    var binding = bindings[i];

    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }

    var hook = binding.dir[name];

    if (hook) {
      callWithAsyncErrorHandling(hook, instance, 8
      /* DIRECTIVE_HOOK */
      , [vnode.el, binding, vnode, prevVNode]);
    }
  }
}

function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NO"],
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      isCustomElement: _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NO"],
      errorHandler: undefined,
      warnHandler: undefined
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null)
  };
}

var uid = 0;

function createAppAPI(render, hydrate) {
  return function createApp(rootComponent) {
    var rootProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (rootProps != null && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(rootProps)) {
       true && warn("root props passed to app.mount() must be an object.");
      rootProps = null;
    }

    var context = createAppContext();
    var installedPlugins = new Set();
    var isMounted = false;
    var app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      version: version,

      get config() {
        return context.config;
      },

      set config(v) {
        if (true) {
          warn("app.config cannot be replaced. Modify individual options instead.");
        }
      },

      use: function use(plugin) {
        for (var _len5 = arguments.length, options = new Array(_len5 > 1 ? _len5 - 1 : 0), _key8 = 1; _key8 < _len5; _key8++) {
          options[_key8 - 1] = arguments[_key8];
        }

        if (installedPlugins.has(plugin)) {
           true && warn("Plugin has already been applied to target app.");
        } else if (plugin && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install.apply(plugin, [app].concat(options));
        } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(plugin)) {
          installedPlugins.add(plugin);
          plugin.apply(void 0, [app].concat(options));
        } else if (true) {
          warn("A plugin must either be a function or an object with an \"install\" " + "function.");
        }

        return app;
      },
      mixin: function mixin(_mixin) {
        if (false) {} else if (true) {
          warn('Mixins are only available in builds supporting Options API');
        }

        return app;
      },
      component: function component(name, _component) {
        if (true) {
          validateComponentName(name, context.config);
        }

        if (!_component) {
          return context.components[name];
        }

        if ( true && context.components[name]) {
          warn("Component \"".concat(name, "\" has already been registered in target app."));
        }

        context.components[name] = _component;
        return app;
      },
      directive: function directive(name, _directive) {
        if (true) {
          validateDirectiveName(name);
        }

        if (!_directive) {
          return context.directives[name];
        }

        if ( true && context.directives[name]) {
          warn("Directive \"".concat(name, "\" has already been registered in target app."));
        }

        context.directives[name] = _directive;
        return app;
      },
      mount: function mount(rootContainer, isHydrate) {
        if (!isMounted) {
          var vnode = createVNode(rootComponent, rootProps); // store app context on the root VNode.
          // this will be set on the root instance on initial mount.

          vnode.appContext = context; // HMR root reload

          if (true) {
            context.reload = function () {
              render(cloneVNode(vnode), rootContainer);
            };
          }

          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer);
          }

          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;

          if (true) {
            devtoolsInitApp(app, version);
          }

          return vnode.component.proxy;
        } else if (true) {
          warn("App has already been mounted.\n" + "If you want to remount the same app, move your app creation logic " + "into a factory function and create fresh app instances for each " + "mount - e.g. `const createMyApp = () => createApp(App)`");
        }
      },
      unmount: function unmount() {
        if (isMounted) {
          render(null, app._container);

          if (true) {
            devtoolsUnmountApp(app);
          }
        } else if (true) {
          warn("Cannot unmount an app that is not mounted.");
        }
      },
      provide: function provide(key, value) {
        if ( true && key in context.provides) {
          warn("App already provides property with key \"".concat(String(key), "\". ") + "It will be overwritten with the new value.");
        } // TypeScript doesn't allow symbols as index type
        // https://github.com/Microsoft/TypeScript/issues/24587


        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}

var hasMismatch = false;

var isSVGContainer = function isSVGContainer(container) {
  return /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
};

var isComment = function isComment(node) {
  return node.nodeType === 8;
}
/* COMMENT */
; // Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.


function createHydrationFunctions(rendererInternals) {
  var mountComponent = rendererInternals.mt,
      patch = rendererInternals.p,
      _rendererInternals$o2 = rendererInternals.o,
      patchProp = _rendererInternals$o2.patchProp,
      nextSibling = _rendererInternals$o2.nextSibling,
      parentNode = _rendererInternals$o2.parentNode,
      remove = _rendererInternals$o2.remove,
      insert = _rendererInternals$o2.insert,
      createComment = _rendererInternals$o2.createComment;

  var hydrate = function hydrate(vnode, container) {
    if ( true && !container.hasChildNodes()) {
      warn("Attempting to hydrate existing markup but container is empty. " + "Performing full mount instead.");
      patch(null, vnode, container);
      return;
    }

    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null);
    flushPostFlushCbs();

    if (hasMismatch && !false) {
      // this error should show up in production
      console.error("Hydration completed but contains mismatches.");
    }
  };

  var hydrateNode = function hydrateNode(node, vnode, parentComponent, parentSuspense) {
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var isFragmentStart = isComment(node) && node.data === '[';

    var onMismatch = function onMismatch() {
      return handleMismatch(node, vnode, parentComponent, parentSuspense, isFragmentStart);
    };

    var type = vnode.type,
        ref = vnode.ref,
        shapeFlag = vnode.shapeFlag;
    var domType = node.nodeType;
    vnode.el = node;
    var nextNode = null;

    switch (type) {
      case Text:
        if (domType !== 3
        /* TEXT */
        ) {
            nextNode = onMismatch();
          } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
             true && warn("Hydration text mismatch:" + "\n- Client: ".concat(JSON.stringify(node.data)) + "\n- Server: ".concat(JSON.stringify(vnode.children)));
            node.data = vnode.children;
          }

          nextNode = nextSibling(node);
        }

        break;

      case Comment:
        if (domType !== 8
        /* COMMENT */
        || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }

        break;

      case Static:
        if (domType !== 1
        /* ELEMENT */
        ) {
            nextNode = onMismatch();
          } else {
          // determine anchor, adopt content
          nextNode = node; // if the static vnode has its content stripped during build,
          // adopt it from the server-rendered HTML.

          var needToAdoptContent = !vnode.children.length;

          for (var i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent) vnode.children += nextNode.outerHTML;

            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }

            nextNode = nextSibling(nextNode);
          }

          return nextNode;
        }

        break;

      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, optimized);
        }

        break;

      default:
        if (shapeFlag & 1
        /* ELEMENT */
        ) {
            if (domType !== 1
            /* ELEMENT */
            || vnode.type !== node.tagName.toLowerCase()) {
              nextNode = onMismatch();
            } else {
              nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, optimized);
            }
          } else if (shapeFlag & 6
        /* COMPONENT */
        ) {
            // when setting up the render effect, if the initial vnode already
            // has .el set, the component will perform hydration instead of mount
            // on its sub-tree.
            var container = parentNode(node);

            var hydrateComponent = function hydrateComponent() {
              mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
            }; // async component


            var loadAsync = vnode.type.__asyncLoader;

            if (loadAsync) {
              loadAsync().then(hydrateComponent);
            } else {
              hydrateComponent();
            } // component may be async, so in the case of fragments we cannot rely
            // on component's rendered output to determine the end of the fragment
            // instead, we do a lookahead to find the end anchor node.


            nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
          } else if (shapeFlag & 64
        /* TELEPORT */
        ) {
            if (domType !== 8
            /* COMMENT */
            ) {
                nextNode = onMismatch();
              } else {
              nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, optimized, rendererInternals, hydrateChildren);
            }
          } else if (shapeFlag & 128
        /* SUSPENSE */
        ) {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), optimized, rendererInternals, hydrateNode);
          } else if (true) {
          warn('Invalid HostVNode type:', type, "(".concat(_typeof(type), ")"));
        }

    }

    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode);
    }

    return nextNode;
  };

  var hydrateElement = function hydrateElement(el, vnode, parentComponent, parentSuspense, optimized) {
    optimized = optimized || !!vnode.dynamicChildren;
    var props = vnode.props,
        patchFlag = vnode.patchFlag,
        shapeFlag = vnode.shapeFlag,
        dirs = vnode.dirs; // skip props & children if this is hoisted static nodes

    if (patchFlag !== -1
    /* HOISTED */
    ) {
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, 'created');
        } // props


        if (props) {
          if (!optimized || patchFlag & 16
          /* FULL_PROPS */
          || patchFlag & 32
          /* HYDRATE_EVENTS */
          ) {
            for (var key in props) {
              if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isReservedProp"])(key) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isOn"])(key)) {
                patchProp(el, key, null, props[key]);
              }
            }
          } else if (props.onClick) {
            // Fast path for click listeners (which is most often) to avoid
            // iterating through props.
            patchProp(el, 'onClick', null, props.onClick);
          }
        } // vnode / directive hooks


        var vnodeHooks;

        if (vnodeHooks = props && props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHooks, parentComponent, vnode);
        }

        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        }

        if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
          queueEffectWithSuspense(function () {
            vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
          }, parentSuspense);
        } // children


        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        && // skip if element has innerHTML / textContent
        !(props && (props.innerHTML || props.textContent))) {
          var next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, optimized);
          var _hasWarned = false;

          while (next) {
            hasMismatch = true;

            if ( true && !_hasWarned) {
              warn("Hydration children mismatch in <".concat(vnode.type, ">: ") + "server rendered element contains more child nodes than client vdom.");
              _hasWarned = true;
            } // The SSRed DOM contains more nodes than it should. Remove them.


            var cur = next;
            next = next.nextSibling;
            remove(cur);
          }
        } else if (shapeFlag & 8
        /* TEXT_CHILDREN */
        ) {
            if (el.textContent !== vnode.children) {
              hasMismatch = true;
               true && warn("Hydration text content mismatch in <".concat(vnode.type, ">:\n") + "- Client: ".concat(el.textContent, "\n") + "- Server: ".concat(vnode.children));
              el.textContent = vnode.children;
            }
          }
      }

    return el.nextSibling;
  };

  var hydrateChildren = function hydrateChildren(node, parentVNode, container, parentComponent, parentSuspense, optimized) {
    optimized = optimized || !!parentVNode.dynamicChildren;
    var children = parentVNode.children;
    var l = children.length;
    var hasWarned = false;

    for (var i = 0; i < l; i++) {
      var vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);

      if (node) {
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, optimized);
      } else {
        hasMismatch = true;

        if ( true && !hasWarned) {
          warn("Hydration children mismatch in <".concat(container.tagName.toLowerCase(), ">: ") + "server rendered element contains fewer child nodes than client vdom.");
          hasWarned = true;
        } // the SSRed DOM didn't contain enough nodes. Mount the missing ones.


        patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container));
      }
    }

    return node;
  };

  var hydrateFragment = function hydrateFragment(node, vnode, parentComponent, parentSuspense, optimized) {
    var container = parentNode(node);
    var next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, optimized);

    if (next && isComment(next) && next.data === ']') {
      return nextSibling(vnode.anchor = next);
    } else {
      // fragment didn't hydrate successfully, since we didn't get a end anchor
      // back. This should have led to node/children mismatch warnings.
      hasMismatch = true; // since the anchor is missing, we need to create one and insert it

      insert(vnode.anchor = createComment("]"), container, next);
      return next;
    }
  };

  var handleMismatch = function handleMismatch(node, vnode, parentComponent, parentSuspense, isFragment) {
    hasMismatch = true;
     true && warn("Hydration node mismatch:\n- Client vnode:", vnode.type, "\n- Server rendered DOM:", node, node.nodeType === 3
    /* TEXT */
    ? "(text)" : isComment(node) && node.data === '[' ? "(start of fragment)" : "");
    vnode.el = null;

    if (isFragment) {
      // remove excessive fragment nodes
      var end = locateClosingAsyncAnchor(node);

      while (true) {
        var _next2 = nextSibling(node);

        if (_next2 && _next2 !== end) {
          remove(_next2);
        } else {
          break;
        }
      }
    }

    var next = nextSibling(node);
    var container = parentNode(node);
    remove(node);
    patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container));
    return next;
  };

  var locateClosingAsyncAnchor = function locateClosingAsyncAnchor(node) {
    var match = 0;

    while (node) {
      node = nextSibling(node);

      if (node && isComment(node)) {
        if (node.data === '[') match++;

        if (node.data === ']') {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }

    return node;
  };

  return [hydrate, hydrateNode];
}

var supported;
var perf;

function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark("vue-".concat(type, "-").concat(instance.uid));
  }
}

function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    var startTag = "vue-".concat(type, "-").concat(instance.uid);
    var endTag = startTag + ":end";
    perf.mark(endTag);
    perf.measure("<".concat(formatComponentName(instance, instance.type), "> ").concat(type), startTag, endTag);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
}

function isSupported() {
  if (supported !== undefined) {
    return supported;
  }
  /* eslint-disable no-restricted-globals */


  if (typeof window !== 'undefined' && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  /* eslint-enable no-restricted-globals */


  return supported;
}
/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */


function initFeatureFlags() {
  var needWarn = false;

  if (false) {}

  if (false) {}

  if ( true && needWarn) {
    console.warn("You are running the esm-bundler build of Vue. It is recommended to " + "configure your bundler to explicitly replace feature flag globals " + "with boolean literals to get proper tree-shaking in the final bundle. " + "See http://link.vuejs.org/feature-flags for more details.");
  }
} // implementation, close to no-op


function defineComponent(options) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(options) ? {
    setup: options,
    name: options.name
  } : options;
}

var isAsyncWrapper = function isAsyncWrapper(i) {
  return !!i.type.__asyncLoader;
};

function defineAsyncComponent(source) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(source)) {
    source = {
      loader: source
    };
  }

  var _source = source,
      loader = _source.loader,
      loadingComponent = _source.loadingComponent,
      errorComponent = _source.errorComponent,
      _source$delay = _source.delay,
      delay = _source$delay === void 0 ? 200 : _source$delay,
      timeout = _source.timeout,
      _source$suspensible = _source.suspensible,
      suspensible = _source$suspensible === void 0 ? true : _source$suspensible,
      userOnError = _source.onError;
  var pendingRequest = null;
  var resolvedComp;
  var retries = 0;

  var retry = function retry() {
    retries++;
    pendingRequest = null;
    return load();
  };

  var load = function load() {
    var thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader()["catch"](function (err) {
      err = err instanceof Error ? err : new Error(String(err));

      if (userOnError) {
        return new Promise(function (resolve, reject) {
          var userRetry = function userRetry() {
            return resolve(retry());
          };

          var userFail = function userFail() {
            return reject(err);
          };

          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then(function (comp) {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }

      if ( true && !comp) {
        warn("Async component loader resolved to undefined. " + "If you are using retry(), make sure to return its return value.");
      } // interop module default


      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
        comp = comp["default"];
      }

      if ( true && comp && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(comp) && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(comp)) {
        throw new Error("Invalid async component load result: ".concat(comp));
      }

      resolvedComp = comp;
      return comp;
    }));
  };

  return defineComponent({
    __asyncLoader: load,
    name: 'AsyncComponentWrapper',
    setup: function setup() {
      var instance = currentInstance; // already resolved

      if (resolvedComp) {
        return function () {
          return createInnerComp(resolvedComp, instance);
        };
      }

      var onError = function onError(err) {
        pendingRequest = null;
        handleError(err, instance, 13
        /* ASYNC_COMPONENT_LOADER */
        , !errorComponent
        /* do not throw in dev if user provided error component */
        );
      }; // suspense-controlled or SSR.


      if (suspensible && instance.suspense || false) {
        return load().then(function (comp) {
          return function () {
            return createInnerComp(comp, instance);
          };
        })["catch"](function (err) {
          onError(err);
          return function () {
            return errorComponent ? createVNode(errorComponent, {
              error: err
            }) : null;
          };
        });
      }

      var loaded = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
      var error = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["ref"])();
      var delayed = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["ref"])(!!delay);

      if (delay) {
        setTimeout(function () {
          delayed.value = false;
        }, delay);
      }

      if (timeout != null) {
        setTimeout(function () {
          if (!loaded.value && !error.value) {
            var err = new Error("Async component timed out after ".concat(timeout, "ms."));
            onError(err);
            error.value = err;
          }
        }, timeout);
      }

      load().then(function () {
        loaded.value = true;
      })["catch"](function (err) {
        onError(err);
        error.value = err;
      });
      return function () {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}

function createInnerComp(comp, _ref11) {
  var _ref11$vnode = _ref11.vnode,
      ref = _ref11$vnode.ref,
      props = _ref11$vnode.props,
      children = _ref11$vnode.children;
  var vnode = createVNode(comp, props, children); // ensure inner component inherits the async wrapper's ref owner

  vnode.ref = ref;
  return vnode;
}

var prodEffectOptions = {
  scheduler: queueJob,
  // #1801, #2043 component render effects should allow recursive updates
  allowRecurse: true
};

function createDevEffectOptions(instance) {
  return {
    scheduler: queueJob,
    allowRecurse: true,
    onTrack: instance.rtc ? function (e) {
      return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["invokeArrayFns"])(instance.rtc, e);
    } : void 0,
    onTrigger: instance.rtg ? function (e) {
      return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["invokeArrayFns"])(instance.rtg, e);
    } : void 0
  };
}

var queuePostRenderEffect = queueEffectWithSuspense;

var setRef = function setRef(rawRef, oldRawRef, parentSuspense, vnode) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(rawRef)) {
    rawRef.forEach(function (r, i) {
      return setRef(r, oldRawRef && (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode);
    });
    return;
  }

  var value;

  if (!vnode || isAsyncWrapper(vnode)) {
    value = null;
  } else {
    if (vnode.shapeFlag & 4
    /* STATEFUL_COMPONENT */
    ) {
        value = vnode.component.exposed || vnode.component.proxy;
      } else {
      value = vnode.el;
    }
  }

  var owner = rawRef.i,
      ref = rawRef.r;

  if ( true && !owner) {
    warn("Missing ref owner context. ref cannot be used on hoisted vnodes. " + "A vnode with ref must be created inside the render function.");
    return;
  }

  var oldRef = oldRawRef && oldRawRef.r;
  var refs = owner.refs === _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"] ? owner.refs = {} : owner.refs;
  var setupState = owner.setupState; // unset old ref

  if (oldRef != null && oldRef !== ref) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(oldRef)) {
      refs[oldRef] = null;

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isRef"])(oldRef)) {
      oldRef.value = null;
    }
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(ref)) {
    var doSet = function doSet() {
      refs[ref] = value;

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(setupState, ref)) {
        setupState[ref] = value;
      }
    }; // #1789: for non-null values, set them after render
    // null values means this is unmount and it should not overwrite another
    // ref with the same key


    if (value) {
      doSet.id = -1;
      queuePostRenderEffect(doSet, parentSuspense);
    } else {
      doSet();
    }
  } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isRef"])(ref)) {
    var _doSet = function _doSet() {
      ref.value = value;
    };

    if (value) {
      _doSet.id = -1;
      queuePostRenderEffect(_doSet, parentSuspense);
    } else {
      _doSet();
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(ref)) {
    callWithErrorHandling(ref, owner, 12
    /* FUNCTION_REF */
    , [value, refs]);
  } else if (true) {
    warn('Invalid template ref type:', value, "(".concat(_typeof(value), ")"));
  }
};
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */


function createRenderer(options) {
  return baseCreateRenderer(options);
} // Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.


function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
} // implementation


function baseCreateRenderer(options, createHydrationFns) {
  // compile-time feature flags check
  {
    initFeatureFlags();
  }
  var hostInsert = options.insert,
      hostRemove = options.remove,
      hostPatchProp = options.patchProp,
      hostForcePatchProp = options.forcePatchProp,
      hostCreateElement = options.createElement,
      hostCreateText = options.createText,
      hostCreateComment = options.createComment,
      hostSetText = options.setText,
      hostSetElementText = options.setElementText,
      hostParentNode = options.parentNode,
      hostNextSibling = options.nextSibling,
      _options$setScopeId = options.setScopeId,
      hostSetScopeId = _options$setScopeId === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NOOP"] : _options$setScopeId,
      hostCloneNode = options.cloneNode,
      hostInsertStaticContent = options.insertStaticContent; // Note: functions inside this closure should use `const xxx = () => {}`
  // style in order to prevent being inlined by minifiers.

  var patch = function patch(n1, n2, container) {
    var anchor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var parentComponent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var parentSuspense = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    var isSVG = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var optimized = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

    // patching & not same type, unmount old tree
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }

    if (n2.patchFlag === -2
    /* BAIL */
    ) {
        optimized = false;
        n2.dynamicChildren = null;
      }

    var type = n2.type,
        ref = n2.ref,
        shapeFlag = n2.shapeFlag;

    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;

      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;

      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        } else if (true) {
          patchStaticNode(n1, n2, container, isSVG);
        }

        break;

      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        break;

      default:
        if (shapeFlag & 1
        /* ELEMENT */
        ) {
            processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
          } else if (shapeFlag & 6
        /* COMPONENT */
        ) {
            processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
          } else if (shapeFlag & 64
        /* TELEPORT */
        ) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
          } else if (shapeFlag & 128
        /* SUSPENSE */
        ) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
          } else if (true) {
          warn('Invalid VNode type:', type, "(".concat(_typeof(type), ")"));
        }

    } // set ref


    if (ref != null && parentComponent) {
      setRef(ref, n1 && n1.ref, parentSuspense, n2);
    }
  };

  var processText = function processText(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      var el = n2.el = n1.el;

      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };

  var processCommentNode = function processCommentNode(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ''), container, anchor);
    } else {
      // there's no support for dynamic comments
      n2.el = n1.el;
    }
  };

  var mountStaticNode = function mountStaticNode(n2, container, anchor, isSVG) {
    var _hostInsertStaticCont = hostInsertStaticContent(n2.children, container, anchor, isSVG);

    var _hostInsertStaticCont2 = _slicedToArray(_hostInsertStaticCont, 2);

    n2.el = _hostInsertStaticCont2[0];
    n2.anchor = _hostInsertStaticCont2[1];
  };
  /**
   * Dev / HMR only
   */


  var patchStaticNode = function patchStaticNode(n1, n2, container, isSVG) {
    // static nodes are only patched during dev for HMR
    if (n2.children !== n1.children) {
      var anchor = hostNextSibling(n1.anchor); // remove existing

      removeStaticNode(n1);

      var _hostInsertStaticCont3 = hostInsertStaticContent(n2.children, container, anchor, isSVG);

      var _hostInsertStaticCont4 = _slicedToArray(_hostInsertStaticCont3, 2);

      n2.el = _hostInsertStaticCont4[0];
      n2.anchor = _hostInsertStaticCont4[1];
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };

  var moveStaticNode = function moveStaticNode(_ref12, container, nextSibling) {
    var el = _ref12.el,
        anchor = _ref12.anchor;
    var next;

    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }

    hostInsert(anchor, container, nextSibling);
  };

  var removeStaticNode = function removeStaticNode(_ref13) {
    var el = _ref13.el,
        anchor = _ref13.anchor;
    var next;

    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }

    hostRemove(anchor);
  };

  var processElement = function processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    isSVG = isSVG || n2.type === 'svg';

    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, optimized);
    }
  };

  var mountElement = function mountElement(vnode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    var el;
    var vnodeHook;
    var type = vnode.type,
        props = vnode.props,
        shapeFlag = vnode.shapeFlag,
        transition = vnode.transition,
        scopeId = vnode.scopeId,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs;

    if (false
    /* HOISTED */
    ) {} else {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is); // mount children first, since some props may rely on child content
      // being already rendered, e.g. `<select value>`

      if (shapeFlag & 8
      /* TEXT_CHILDREN */
      ) {
          hostSetElementText(el, vnode.children);
        } else if (shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
          mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', optimized || !!vnode.dynamicChildren);
        }

      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'created');
      } // props


      if (props) {
        for (var key in props) {
          if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isReservedProp"])(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }

        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      } // scopeId


      setScopeId(el, scopeId, vnode, parentComponent);
    }

    if (true) {
      Object.defineProperty(el, '__vnode', {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, '__vueParentComponent', {
        value: parentComponent,
        enumerable: false
      });
    }

    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
    } // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
    // #1689 For inside suspense + suspense resolved case, just call it


    var needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;

    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }

    hostInsert(el, container, anchor);

    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
      }, parentSuspense);
    }
  };

  var setScopeId = function setScopeId(el, scopeId, vnode, parentComponent) {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }

    if (parentComponent) {
      var treeOwnerId = parentComponent.type.__scopeId; // vnode's own scopeId and the current patched component's scopeId is
      // different - this is a slot content node.

      if (treeOwnerId && treeOwnerId !== scopeId) {
        hostSetScopeId(el, treeOwnerId + '-s');
      }

      var subTree = parentComponent.subTree;

      if ( true && subTree.type === Fragment) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }

      if (vnode === subTree) {
        setScopeId(el, parentComponent.vnode.scopeId, parentComponent.vnode, parentComponent.parent);
      }
    }
  };

  var mountChildren = function mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    var start = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

    for (var i = start; i < children.length; i++) {
      var child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
    }
  };

  var patchElement = function patchElement(n1, n2, parentComponent, parentSuspense, isSVG, optimized) {
    var el = n2.el = n1.el;
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren,
        dirs = n2.dirs; // #1426 take the old vnode's patch flag into account since user may clone a
    // compiler-generated vnode, which de-opts to FULL_PROPS

    patchFlag |= n1.patchFlag & 16
    /* FULL_PROPS */
    ;
    var oldProps = n1.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"];
    var newProps = n2.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"];
    var vnodeHook;

    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }

    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
    }

    if ( true && isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }

    if (patchFlag > 0) {
      // the presence of a patchFlag means this element's render code was
      // generated by the compiler and can take the fast path.
      // in this path old node and new node are guaranteed to have the same shape
      // (i.e. at the exact same position in the source template)
      if (patchFlag & 16
      /* FULL_PROPS */
      ) {
          // element props contain dynamic keys, full diff needed
          patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        } else {
        // class
        // this flag is matched when the element has dynamic class bindings.
        if (patchFlag & 2
        /* CLASS */
        ) {
            if (oldProps["class"] !== newProps["class"]) {
              hostPatchProp(el, 'class', null, newProps["class"], isSVG);
            }
          } // style
        // this flag is matched when the element has dynamic style bindings


        if (patchFlag & 4
        /* STYLE */
        ) {
            hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
          } // props
        // This flag is matched when the element has dynamic prop/attr bindings
        // other than class and style. The keys of dynamic prop/attrs are saved for
        // faster iteration.
        // Note dynamic keys like :[foo]="bar" will cause this optimization to
        // bail out and go through a full diff because we need to unset the old key


        if (patchFlag & 8
        /* PROPS */
        ) {
            // if the flag is present then dynamicProps must be non-null
            var propsToUpdate = n2.dynamicProps;

            for (var i = 0; i < propsToUpdate.length; i++) {
              var key = propsToUpdate[i];
              var prev = oldProps[key];
              var next = newProps[key];

              if (next !== prev || hostForcePatchProp && hostForcePatchProp(el, key)) {
                hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
              }
            }
          }
      } // text
      // This flag is matched when the element has only dynamic text children.


      if (patchFlag & 1
      /* TEXT */
      ) {
          if (n1.children !== n2.children) {
            hostSetElementText(el, n2.children);
          }
        }
    } else if (!optimized && dynamicChildren == null) {
      // unoptimized, full diff
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }

    var areChildrenSVG = isSVG && n2.type !== 'foreignObject';

    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG);

      if ( true && parentComponent && parentComponent.type.__hmrId) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      // full diff
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG);
    }

    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
      }, parentSuspense);
    }
  }; // The fast path for blocks.


  var patchBlockChildren = function patchBlockChildren(oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG) {
    for (var i = 0; i < newChildren.length; i++) {
      var oldVNode = oldChildren[i];
      var newVNode = newChildren[i]; // Determine the container (parent element) for the patch.

      var container = // - In the case of a Fragment, we need to provide the actual parent
      // of the Fragment itself so it can move its children.
      oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
      // which also requires the correct parent container
      !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
      oldVNode.shapeFlag & 6
      /* COMPONENT */
      || oldVNode.shapeFlag & 64
      /* TELEPORT */
      ? hostParentNode(oldVNode.el) : // In other cases, the parent container is not actually used so we
      // just pass the block element here to avoid a DOM parentNode call.
      fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, true);
    }
  };

  var patchProps = function patchProps(el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) {
    if (oldProps !== newProps) {
      for (var key in newProps) {
        // empty string is not valid prop
        if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isReservedProp"])(key)) continue;
        var next = newProps[key];
        var prev = oldProps[key];

        if (next !== prev || hostForcePatchProp && hostForcePatchProp(el, key)) {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }

      if (oldProps !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"]) {
        for (var _key9 in oldProps) {
          if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isReservedProp"])(_key9) && !(_key9 in newProps)) {
            hostPatchProp(el, _key9, oldProps[_key9], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
    }
  };

  var processFragment = function processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    var fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText('');
    var fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText('');
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren;

    if (patchFlag > 0) {
      optimized = true;
    }

    if ( true && isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }

    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor); // a fragment can only have array children
      // since they are either generated by the compiler, or implicitly created
      // from arrays.

      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64
      /* STABLE_FRAGMENT */
      && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        // a stable fragment (template root or <template v-for>) doesn't need to
        // patch children order, but it may contain dynamicChildren.
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG);

        if ( true && parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        } else if ( // #2080 if the stable fragment has a key, it's a <template v-for> that may
        //  get moved around. Make sure all root level vnodes inherit el.
        // #2134 or if it's a component root, it may also get moved around
        // as the component is being moved.
        n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true
          /* shallow */
          );
        }
      } else {
        // keyed / unkeyed, or manual fragments.
        // for keyed & unkeyed, since they are compiler generated from v-for,
        // each child is guaranteed to be a block so the fragment will never
        // have dynamicChildren.
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    }
  };

  var processComponent = function processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    if (n1 == null) {
      if (n2.shapeFlag & 512
      /* COMPONENT_KEPT_ALIVE */
      ) {
          parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
        } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };

  var mountComponent = function mountComponent(initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    var instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);

    if ( true && instance.type.__hmrId) {
      registerHMR(instance);
    }

    if (true) {
      pushWarningContext(initialVNode);
      startMeasure(instance, "mount");
    } // inject renderer internals for keepAlive


    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    } // resolve props and slots for setup context


    if (true) {
      startMeasure(instance, "init");
    }

    setupComponent(instance);

    if (true) {
      endMeasure(instance, "init");
    } // setup() is async. This component relies on async logic to be resolved
    // before proceeding


    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect); // Give it a placeholder if this is not hydration
      // TODO handle self-defined fallback

      if (!initialVNode.el) {
        var placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }

      return;
    }

    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);

    if (true) {
      popWarningContext();
      endMeasure(instance, "mount");
    }
  };

  var updateComponent = function updateComponent(n1, n2, optimized) {
    var instance = n2.component = n1.component;

    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        // async & still pending - just update props and slots
        // since the component's reactive effect for render isn't set-up yet
        if (true) {
          pushWarningContext(n2);
        }

        updateComponentPreRender(instance, n2, optimized);

        if (true) {
          popWarningContext();
        }

        return;
      } else {
        // normal update
        instance.next = n2; // in case the child component is also queued, remove it to avoid
        // double updating the same child component in the same flush.

        invalidateJob(instance.update); // instance.update is the reactive effect runner.

        instance.update();
      }
    } else {
      // no update needed. just copy over properties
      n2.component = n1.component;
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };

  var setupRenderEffect = function setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) {
    // create reactive effect for rendering
    instance.update = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["effect"])(function componentEffect() {
      if (!instance.isMounted) {
        var vnodeHook;
        var _initialVNode = initialVNode,
            el = _initialVNode.el,
            props = _initialVNode.props;
        var bm = instance.bm,
            m = instance.m,
            parent = instance.parent; // beforeMount hook

        if (bm) {
          Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["invokeArrayFns"])(bm);
        } // onVnodeBeforeMount


        if (vnodeHook = props && props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        } // render


        if (true) {
          startMeasure(instance, "render");
        }

        var subTree = instance.subTree = renderComponentRoot(instance);

        if (true) {
          endMeasure(instance, "render");
        }

        if (el && hydrateNode) {
          if (true) {
            startMeasure(instance, "hydrate");
          } // vnode has adopted host node - perform hydration instead of mount.


          hydrateNode(initialVNode.el, subTree, instance, parentSuspense);

          if (true) {
            endMeasure(instance, "hydrate");
          }
        } else {
          if (true) {
            startMeasure(instance, "patch");
          }

          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);

          if (true) {
            endMeasure(instance, "patch");
          }

          initialVNode.el = subTree.el;
        } // mounted hook


        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        } // onVnodeMounted


        if (vnodeHook = props && props.onVnodeMounted) {
          var scopedInitialVNode = initialVNode;
          queuePostRenderEffect(function () {
            invokeVNodeHook(vnodeHook, parent, scopedInitialVNode);
          }, parentSuspense);
        } // activated hook for keep-alive roots.
        // #1742 activated hook must be accessed after first render
        // since the hook may be injected by a child keep-alive


        var a = instance.a;

        if (a && initialVNode.shapeFlag & 256
        /* COMPONENT_SHOULD_KEEP_ALIVE */
        ) {
            queuePostRenderEffect(a, parentSuspense);
          }

        instance.isMounted = true; // #2458: deference mount-only object parameters to prevent memleaks

        initialVNode = container = anchor = null;
      } else {
        // updateComponent
        // This is triggered by mutation of component's own state (next: null)
        // OR parent calling processComponent (next: VNode)
        var next = instance.next,
            bu = instance.bu,
            u = instance.u,
            _parent = instance.parent,
            vnode = instance.vnode;
        var originNext = next;

        var _vnodeHook;

        if (true) {
          pushWarningContext(next || instance.vnode);
        }

        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        } // beforeUpdate hook


        if (bu) {
          Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["invokeArrayFns"])(bu);
        } // onVnodeBeforeUpdate


        if (_vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(_vnodeHook, _parent, next, vnode);
        } // render


        if (true) {
          startMeasure(instance, "render");
        }

        var nextTree = renderComponentRoot(instance);

        if (true) {
          endMeasure(instance, "render");
        }

        var prevTree = instance.subTree;
        instance.subTree = nextTree;

        if (true) {
          startMeasure(instance, "patch");
        }

        patch(prevTree, nextTree, // parent may have changed if it's in a teleport
        hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
        getNextHostNode(prevTree), instance, parentSuspense, isSVG);

        if (true) {
          endMeasure(instance, "patch");
        }

        next.el = nextTree.el;

        if (originNext === null) {
          // self-triggered update. In case of HOC, update parent component
          // vnode el. HOC is indicated by parent instance's subTree pointing
          // to child component's vnode
          updateHOCHostEl(instance, nextTree.el);
        } // updated hook


        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        } // onVnodeUpdated


        if (_vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(function () {
            invokeVNodeHook(_vnodeHook, _parent, next, vnode);
          }, parentSuspense);
        }

        if (true) {
          devtoolsComponentUpdated(instance);
        }

        if (true) {
          popWarningContext();
        }
      }
    },  true ? createDevEffectOptions(instance) : undefined);
  };

  var updateComponentPreRender = function updateComponentPreRender(instance, nextVNode, optimized) {
    nextVNode.component = instance;
    var prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children); // props update may have triggered pre-flush watchers.
    // flush them before the render update.

    flushPreFlushCbs(undefined, instance.update);
  };

  var patchChildren = function patchChildren(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG) {
    var optimized = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
    var c1 = n1 && n1.children;
    var prevShapeFlag = n1 ? n1.shapeFlag : 0;
    var c2 = n2.children;
    var patchFlag = n2.patchFlag,
        shapeFlag = n2.shapeFlag; // fast path

    if (patchFlag > 0) {
      if (patchFlag & 128
      /* KEYED_FRAGMENT */
      ) {
          // this could be either fully-keyed or mixed (some keyed some not)
          // presence of patchFlag means children are guaranteed to be arrays
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
          return;
        } else if (patchFlag & 256
      /* UNKEYED_FRAGMENT */
      ) {
          // unkeyed
          patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
          return;
        }
    } // children has 3 possibilities: text, array or no children.


    if (shapeFlag & 8
    /* TEXT_CHILDREN */
    ) {
        // text children fast path
        if (prevShapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
            unmountChildren(c1, parentComponent, parentSuspense);
          }

        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
      if (prevShapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
          // prev children was array
          if (shapeFlag & 16
          /* ARRAY_CHILDREN */
          ) {
              // two arrays, cannot assume anything, do full diff
              patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
            } else {
            // no new children, just unmount old
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
        // prev children was text OR null
        // new children is array OR null
        if (prevShapeFlag & 8
        /* TEXT_CHILDREN */
        ) {
            hostSetElementText(container, '');
          } // mount new if array


        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
          }
      }
    }
  };

  var patchUnkeyedChildren = function patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    c1 = c1 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_ARR"];
    c2 = c2 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_ARR"];
    var oldLength = c1.length;
    var newLength = c2.length;
    var commonLength = Math.min(oldLength, newLength);
    var i;

    for (i = 0; i < commonLength; i++) {
      var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, optimized);
    }

    if (oldLength > newLength) {
      // remove old
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      // mount new
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, commonLength);
    }
  }; // can be all-keyed or mixed


  var patchKeyedChildren = function patchKeyedChildren(c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) {
    var i = 0;
    var l2 = c2.length;
    var e1 = c1.length - 1; // prev ending index

    var e2 = l2 - 1; // next ending index
    // 1. sync from start
    // (a b) c
    // (a b) d e

    while (i <= e1 && i <= e2) {
      var n1 = c1[i];
      var n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
      } else {
        break;
      }

      i++;
    } // 2. sync from end
    // a (b c)
    // d e (b c)


    while (i <= e1 && i <= e2) {
      var _n2 = c1[e1];

      var _n3 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);

      if (isSameVNodeType(_n2, _n3)) {
        patch(_n2, _n3, container, null, parentComponent, parentSuspense, isSVG, optimized);
      } else {
        break;
      }

      e1--;
      e2--;
    } // 3. common sequence + mount
    // (a b)
    // (a b) c
    // i = 2, e1 = 1, e2 = 2
    // (a b)
    // c (a b)
    // i = 0, e1 = -1, e2 = 0


    if (i > e1) {
      if (i <= e2) {
        var nextPos = e2 + 1;
        var anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;

        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG);
          i++;
        }
      }
    } // 4. common sequence + unmount
    // (a b) c
    // (a b)
    // i = 2, e1 = 2, e2 = 1
    // a (b c)
    // (b c)
    // i = 0, e1 = 0, e2 = -1
    else if (i > e2) {
        while (i <= e1) {
          unmount(c1[i], parentComponent, parentSuspense, true);
          i++;
        }
      } // 5. unknown sequence
      // [i ... e1 + 1]: a b [c d e] f g
      // [i ... e2 + 1]: a b [e d c h] f g
      // i = 2, e1 = 4, e2 = 5
      else {
          var s1 = i; // prev starting index

          var s2 = i; // next starting index
          // 5.1 build key:index map for newChildren

          var keyToNewIndexMap = new Map();

          for (i = s2; i <= e2; i++) {
            var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

            if (nextChild.key != null) {
              if ( true && keyToNewIndexMap.has(nextChild.key)) {
                warn("Duplicate keys found during update:", JSON.stringify(nextChild.key), "Make sure keys are unique.");
              }

              keyToNewIndexMap.set(nextChild.key, i);
            }
          } // 5.2 loop through old children left to be patched and try to patch
          // matching nodes & remove nodes that are no longer present


          var j;
          var patched = 0;
          var toBePatched = e2 - s2 + 1;
          var moved = false; // used to track whether any node has moved

          var maxNewIndexSoFar = 0; // works as Map<newIndex, oldIndex>
          // Note that oldIndex is offset by +1
          // and oldIndex = 0 is a special value indicating the new node has
          // no corresponding old node.
          // used for determining longest stable subsequence

          var newIndexToOldIndexMap = new Array(toBePatched);

          for (i = 0; i < toBePatched; i++) {
            newIndexToOldIndexMap[i] = 0;
          }

          for (i = s1; i <= e1; i++) {
            var prevChild = c1[i];

            if (patched >= toBePatched) {
              // all new children have been patched so this can only be a removal
              unmount(prevChild, parentComponent, parentSuspense, true);
              continue;
            }

            var newIndex = void 0;

            if (prevChild.key != null) {
              newIndex = keyToNewIndexMap.get(prevChild.key);
            } else {
              // key-less node, try to locate a key-less node of the same type
              for (j = s2; j <= e2; j++) {
                if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                  newIndex = j;
                  break;
                }
              }
            }

            if (newIndex === undefined) {
              unmount(prevChild, parentComponent, parentSuspense, true);
            } else {
              newIndexToOldIndexMap[newIndex - s2] = i + 1;

              if (newIndex >= maxNewIndexSoFar) {
                maxNewIndexSoFar = newIndex;
              } else {
                moved = true;
              }

              patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, optimized);
              patched++;
            }
          } // 5.3 move and mount
          // generate longest stable subsequence only when nodes have moved


          var increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_ARR"];
          j = increasingNewIndexSequence.length - 1; // looping backwards so that we can use last patched node as anchor

          for (i = toBePatched - 1; i >= 0; i--) {
            var nextIndex = s2 + i;
            var _nextChild = c2[nextIndex];

            var _anchor2 = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;

            if (newIndexToOldIndexMap[i] === 0) {
              // mount new
              patch(null, _nextChild, container, _anchor2, parentComponent, parentSuspense, isSVG);
            } else if (moved) {
              // move if:
              // There is no stable subsequence (e.g. a reverse)
              // OR current node is not among the stable sequence
              if (j < 0 || i !== increasingNewIndexSequence[j]) {
                move(_nextChild, container, _anchor2, 2
                /* REORDER */
                );
              } else {
                j--;
              }
            }
          }
        }
  };

  var move = function move(vnode, container, anchor, moveType) {
    var parentSuspense = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var el = vnode.el,
        type = vnode.type,
        transition = vnode.transition,
        children = vnode.children,
        shapeFlag = vnode.shapeFlag;

    if (shapeFlag & 6
    /* COMPONENT */
    ) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }

    if (shapeFlag & 128
    /* SUSPENSE */
    ) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }

    if (shapeFlag & 64
    /* TELEPORT */
    ) {
        type.move(vnode, container, anchor, internals);
        return;
      }

    if (type === Fragment) {
      hostInsert(el, container, anchor);

      for (var i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }

      hostInsert(vnode.anchor, container, anchor);
      return;
    }

    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    } // single nodes


    var needTransition = moveType !== 2
    /* REORDER */
    && shapeFlag & 1
    /* ELEMENT */
    && transition;

    if (needTransition) {
      if (moveType === 0
      /* ENTER */
      ) {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(function () {
            return transition.enter(el);
          }, parentSuspense);
        } else {
        var leave = transition.leave,
            delayLeave = transition.delayLeave,
            afterLeave = transition.afterLeave;

        var _remove = function _remove() {
          return hostInsert(el, container, anchor);
        };

        var performLeave = function performLeave() {
          leave(el, function () {
            _remove();

            afterLeave && afterLeave();
          });
        };

        if (delayLeave) {
          delayLeave(el, _remove, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };

  var unmount = function unmount(vnode, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var type = vnode.type,
        props = vnode.props,
        ref = vnode.ref,
        children = vnode.children,
        dynamicChildren = vnode.dynamicChildren,
        shapeFlag = vnode.shapeFlag,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs; // unset ref

    if (ref != null) {
      setRef(ref, null, parentSuspense, null);
    }

    if (shapeFlag & 256
    /* COMPONENT_SHOULD_KEEP_ALIVE */
    ) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }

    var shouldInvokeDirs = shapeFlag & 1
    /* ELEMENT */
    && dirs;
    var vnodeHook;

    if (vnodeHook = props && props.onVnodeBeforeUnmount) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }

    if (shapeFlag & 6
    /* COMPONENT */
    ) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
      if (shapeFlag & 128
      /* SUSPENSE */
      ) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }

      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
      }

      if (dynamicChildren && ( // #1153: fast path should not be taken for non-stable (v-for) fragments
      type !== Fragment || patchFlag > 0 && patchFlag & 64
      /* STABLE_FRAGMENT */
      )) {
        // fast path for block nodes: only need to unmount dynamic children.
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && (patchFlag & 128
      /* KEYED_FRAGMENT */
      || patchFlag & 256
      /* UNKEYED_FRAGMENT */
      ) || !optimized && shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        unmountChildren(children, parentComponent, parentSuspense);
      } // an unmounted teleport should always remove its children if not disabled


      if (shapeFlag & 64
      /* TELEPORT */
      && (doRemove || !isTeleportDisabled(vnode.props))) {
        vnode.type.remove(vnode, internals);
      }

      if (doRemove) {
        remove(vnode);
      }
    }

    if ((vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
      }, parentSuspense);
    }
  };

  var remove = function remove(vnode) {
    var type = vnode.type,
        el = vnode.el,
        anchor = vnode.anchor,
        transition = vnode.transition;

    if (type === Fragment) {
      removeFragment(el, anchor);
      return;
    }

    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }

    var performRemove = function performRemove() {
      hostRemove(el);

      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };

    if (vnode.shapeFlag & 1
    /* ELEMENT */
    && transition && !transition.persisted) {
      var leave = transition.leave,
          delayLeave = transition.delayLeave;

      var performLeave = function performLeave() {
        return leave(el, performRemove);
      };

      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };

  var removeFragment = function removeFragment(cur, end) {
    // For fragments, directly remove all contained DOM nodes.
    // (fragment child nodes cannot have transition)
    var next;

    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }

    hostRemove(end);
  };

  var unmountComponent = function unmountComponent(instance, parentSuspense, doRemove) {
    if ( true && instance.type.__hmrId) {
      unregisterHMR(instance);
    }

    var bum = instance.bum,
        effects = instance.effects,
        update = instance.update,
        subTree = instance.subTree,
        um = instance.um; // beforeUnmount hook

    if (bum) {
      Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["invokeArrayFns"])(bum);
    }

    if (effects) {
      for (var i = 0; i < effects.length; i++) {
        Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["stop"])(effects[i]);
      }
    } // update may be null if a component is unmounted before its async
    // setup has resolved.


    if (update) {
      Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["stop"])(update);
      unmount(subTree, instance, parentSuspense, doRemove);
    } // unmounted hook


    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }

    queuePostRenderEffect(function () {
      instance.isUnmounted = true;
    }, parentSuspense); // A component with async dep inside a pending suspense is unmounted before
    // its async dep resolves. This should remove the dep from the suspense, and
    // cause the suspense to resolve immediately if that was the last dep.

    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;

      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }

    if (true) {
      devtoolsComponentRemoved(instance);
    }
  };

  var unmountChildren = function unmountChildren(children, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var start = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    for (var i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };

  var getNextHostNode = function getNextHostNode(vnode) {
    if (vnode.shapeFlag & 6
    /* COMPONENT */
    ) {
        return getNextHostNode(vnode.component.subTree);
      }

    if (vnode.shapeFlag & 128
    /* SUSPENSE */
    ) {
        return vnode.suspense.next();
      }

    return hostNextSibling(vnode.anchor || vnode.el);
  };

  var render = function render(vnode, container) {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container);
    }

    flushPostFlushCbs();
    container._vnode = vnode;
  };

  var internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  var hydrate;
  var hydrateNode;

  if (createHydrationFns) {
    var _createHydrationFns = createHydrationFns(internals);

    var _createHydrationFns2 = _slicedToArray(_createHydrationFns, 2);

    hydrate = _createHydrationFns2[0];
    hydrateNode = _createHydrationFns2[1];
  }

  return {
    render: render,
    hydrate: hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}

function invokeVNodeHook(hook, instance, vnode) {
  var prevVNode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  callWithAsyncErrorHandling(hook, instance, 7
  /* VNODE_HOOK */
  , [vnode, prevVNode]);
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always moved so that need inherit el form previous nodes
 * to ensure correct moved position.
 */


function traverseStaticChildren(n1, n2) {
  var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var ch1 = n1.children;
  var ch2 = n2.children;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(ch1) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(ch2)) {
    for (var i = 0; i < ch1.length; i++) {
      // this is only called in the optimized path so array children are
      // guaranteed to be vnodes
      var c1 = ch1[i];
      var c2 = ch2[i];

      if (c2.shapeFlag & 1
      /* ELEMENT */
      && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32
        /* HYDRATE_EVENTS */
        ) {
            c2 = ch2[i] = cloneIfMounted(ch2[i]);
            c2.el = c1.el;
          }

        if (!shallow) traverseStaticChildren(c1, c2);
      } // also inherit for comment nodes, but not placeholders (e.g. v-if which
      // would have received .el during block patch)


      if ( true && c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
} // https://en.wikipedia.org/wiki/Longest_increasing_subsequence


function getSequence(arr) {
  var p = arr.slice();
  var result = [0];
  var i, j, u, v, c;
  var len = arr.length;

  for (i = 0; i < len; i++) {
    var arrI = arr[i];

    if (arrI !== 0) {
      j = result[result.length - 1];

      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }

      u = 0;
      v = result.length - 1;

      while (u < v) {
        c = (u + v) / 2 | 0;

        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }

      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }

        result[u] = i;
      }
    }
  }

  u = result.length;
  v = result[u - 1];

  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }

  return result;
}

var isTeleport = function isTeleport(type) {
  return type.__isTeleport;
};

var isTeleportDisabled = function isTeleportDisabled(props) {
  return props && (props.disabled || props.disabled === '');
};

var isTargetSVG = function isTargetSVG(target) {
  return typeof SVGElement !== 'undefined' && target instanceof SVGElement;
};

var resolveTarget = function resolveTarget(props, select) {
  var targetSelector = props && props.to;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(targetSelector)) {
    if (!select) {
       true && warn("Current renderer does not support string target for Teleports. " + "(missing querySelector renderer option)");
      return null;
    } else {
      var target = select(targetSelector);

      if (!target) {
         true && warn("Failed to locate Teleport target with selector \"".concat(targetSelector, "\". ") + "Note the target element must exist before the component is mounted - " + "i.e. the target cannot be rendered by the component itself, and " + "ideally should be outside of the entire Vue component tree.");
      }

      return target;
    }
  } else {
    if ( true && !targetSelector && !isTeleportDisabled(props)) {
      warn("Invalid Teleport target: ".concat(targetSelector));
    }

    return targetSelector;
  }
};

var TeleportImpl = {
  __isTeleport: true,
  process: function (_process) {
    function process(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9) {
      return _process.apply(this, arguments);
    }

    process.toString = function () {
      return _process.toString();
    };

    return process;
  }(function (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals) {
    var mountChildren = internals.mc,
        patchChildren = internals.pc,
        patchBlockChildren = internals.pbc,
        _internals$o = internals.o,
        insert = _internals$o.insert,
        querySelector = _internals$o.querySelector,
        createText = _internals$o.createText,
        createComment = _internals$o.createComment;
    var disabled = isTeleportDisabled(n2.props);
    var shapeFlag = n2.shapeFlag,
        children = n2.children;

    if (n1 == null) {
      // insert anchors in the main view
      var placeholder = n2.el =  true ? createComment('teleport start') : undefined;
      var mainAnchor = n2.anchor =  true ? createComment('teleport end') : undefined;
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      var target = n2.target = resolveTarget(n2.props, querySelector);
      var targetAnchor = n2.targetAnchor = createText('');

      if (target) {
        insert(targetAnchor, target); // #2652 we could be teleporting from a non-SVG tree into an SVG tree

        isSVG = isSVG || isTargetSVG(target);
      } else if ( true && !disabled) {
        warn('Invalid Teleport target on mount:', target, "(".concat(_typeof(target), ")"));
      }

      var mount = function mount(container, anchor) {
        // Teleport *always* has Array children. This is enforced in both the
        // compiler and vnode children normalization.
        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
            mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
          }
      };

      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      // update content
      n2.el = n1.el;

      var _mainAnchor = n2.anchor = n1.anchor;

      var _target = n2.target = n1.target;

      var _targetAnchor = n2.targetAnchor = n1.targetAnchor;

      var wasDisabled = isTeleportDisabled(n1.props);
      var currentContainer = wasDisabled ? container : _target;
      var currentAnchor = wasDisabled ? _mainAnchor : _targetAnchor;
      isSVG = isSVG || isTargetSVG(_target);

      if (n2.dynamicChildren) {
        // fast path when the teleport happens to be a block root
        patchBlockChildren(n1.dynamicChildren, n2.dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG); // even in block tree mode we need to make sure all root-level nodes
        // in the teleport inherit previous DOM references so that they can
        // be moved in future patches.

        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG);
      }

      if (disabled) {
        if (!wasDisabled) {
          // enabled -> disabled
          // move into main container
          moveTeleport(n2, container, _mainAnchor, internals, 1
          /* TOGGLE */
          );
        }
      } else {
        // target changed
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          var nextTarget = n2.target = resolveTarget(n2.props, querySelector);

          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0
            /* TARGET_CHANGE */
            );
          } else if (true) {
            warn('Invalid Teleport target on update:', _target, "(".concat(_typeof(_target), ")"));
          }
        } else if (wasDisabled) {
          // disabled -> enabled
          // move into teleport target
          moveTeleport(n2, _target, _targetAnchor, internals, 1
          /* TOGGLE */
          );
        }
      }
    }
  }),
  remove: function remove(vnode, _ref14) {
    var remove = _ref14.r,
        hostRemove = _ref14.o.remove;
    var shapeFlag = vnode.shapeFlag,
        children = vnode.children,
        anchor = vnode.anchor;
    hostRemove(anchor);

    if (shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
        for (var i = 0; i < children.length; i++) {
          remove(children[i]);
        }
      }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};

function moveTeleport(vnode, container, parentAnchor, _ref15)
/* REORDER */
{
  var insert = _ref15.o.insert,
      move = _ref15.m;
  var moveType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;

  // move target anchor if this is a target change.
  if (moveType === 0
  /* TARGET_CHANGE */
  ) {
      insert(vnode.targetAnchor, container, parentAnchor);
    }

  var el = vnode.el,
      anchor = vnode.anchor,
      shapeFlag = vnode.shapeFlag,
      children = vnode.children,
      props = vnode.props;
  var isReorder = moveType === 2
  /* REORDER */
  ; // move main view anchor if this is a re-order.

  if (isReorder) {
    insert(el, container, parentAnchor);
  } // if this is a re-order and teleport is enabled (content is in target)
  // do not move children. So the opposite is: only move children if this
  // is not a reorder, or the teleport is disabled


  if (!isReorder || isTeleportDisabled(props)) {
    // Teleport has either Array children or no children.
    if (shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
        for (var i = 0; i < children.length; i++) {
          move(children[i], container, parentAnchor, 2
          /* REORDER */
          );
        }
      }
  } // move main view anchor if this is a re-order.


  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}

function hydrateTeleport(node, vnode, parentComponent, parentSuspense, optimized, _ref16, hydrateChildren) {
  var _ref16$o = _ref16.o,
      nextSibling = _ref16$o.nextSibling,
      parentNode = _ref16$o.parentNode,
      querySelector = _ref16$o.querySelector;
  var target = vnode.target = resolveTarget(vnode.props, querySelector);

  if (target) {
    // if multiple teleports rendered to the same target element, we need to
    // pick up from where the last teleport finished instead of the first node
    var targetNode = target._lpa || target.firstChild;

    if (vnode.shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
        if (isTeleportDisabled(vnode.props)) {
          vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, optimized);
          vnode.targetAnchor = targetNode;
        } else {
          vnode.anchor = nextSibling(node);
          vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, optimized);
        }

        target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
      }
  }

  return vnode.anchor && nextSibling(vnode.anchor);
} // Force-casted public typing for h and TSX props inference


var Teleport = TeleportImpl;
var COMPONENTS = 'components';
var DIRECTIVES = 'directives';
/**
 * @private
 */

function resolveComponent(name) {
  return resolveAsset(COMPONENTS, name) || name;
}

var NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */

function resolveDynamicComponent(component) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    // invalid types will fallthrough to createVNode and raise warning
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
/**
 * @private
 */


function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
} // implementation


function resolveAsset(type, name) {
  var warnMissing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var instance = currentRenderingInstance || currentInstance;

  if (instance) {
    var Component = instance.type; // self name has highest priority

    if (type === COMPONENTS) {
      // special self referencing call generated by compiler
      // inferred from SFC filename
      if (name === "_self") {
        return Component;
      }

      var selfName = getComponentName(Component);

      if (selfName && (selfName === name || selfName === Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["camelize"])(name) || selfName === Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["camelize"])(name)))) {
        return Component;
      }
    }

    var res = // local registration
    // check instance[type] first for components with mixin or extends.
    resolve(instance[type] || Component[type], name) || // global registration
    resolve(instance.appContext[type], name);

    if ( true && warnMissing && !res) {
      warn("Failed to resolve ".concat(type.slice(0, -1), ": ").concat(name));
    }

    return res;
  } else if (true) {
    warn("resolve".concat(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(type.slice(0, -1)), " ") + "can only be used in render() or setup().");
  }
}

function resolve(registry, name) {
  return registry && (registry[name] || registry[Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["camelize"])(name)] || registry[Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["camelize"])(name))]);
}

var Fragment = Symbol( true ? 'Fragment' : undefined);
var Text = Symbol( true ? 'Text' : undefined);
var Comment = Symbol( true ? 'Comment' : undefined);
var Static = Symbol( true ? 'Static' : undefined); // Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).

var blockStack = [];
var currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */

function openBlock() {
  var disableTracking = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  blockStack.push(currentBlock = disableTracking ? null : []);
}

function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
} // Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)


var shouldTrack = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */

function setBlockTracking(value) {
  shouldTrack += value;
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */


function createBlock(type, props, children, patchFlag, dynamicProps) {
  var vnode = createVNode(type, props, children, patchFlag, dynamicProps, true
  /* isBlock: prevent a block from tracking itself */
  ); // save current block children on the block vnode

  vnode.dynamicChildren = currentBlock || _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_ARR"]; // close block

  closeBlock(); // a block is always going to be patched, so track it as a child of its
  // parent block

  if (shouldTrack > 0 && currentBlock) {
    currentBlock.push(vnode);
  }

  return vnode;
}

function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}

function isSameVNodeType(n1, n2) {
  if ( true && n2.shapeFlag & 6
  /* COMPONENT */
  && hmrDirtyComponents.has(n2.type)) {
    // HMR only: if the component has been hot-updated, force a reload.
    return false;
  }

  return n1.type === n2.type && n1.key === n2.key;
}

var vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */

function transformVNodeArgs(transformer) {
  vnodeArgsTransformer = transformer;
}

var createVNodeWithArgsTransform = function createVNodeWithArgsTransform() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key10 = 0; _key10 < _len6; _key10++) {
    args[_key10] = arguments[_key10];
  }

  return _createVNode.apply(void 0, _toConsumableArray(vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args));
};

var InternalObjectKey = "__vInternal";

var normalizeKey = function normalizeKey(_ref17) {
  var key = _ref17.key;
  return key != null ? key : null;
};

var normalizeRef = function normalizeRef(_ref18) {
  var ref = _ref18.ref;
  return ref != null ? Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(ref) || Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isRef"])(ref) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(ref) ? {
    i: currentRenderingInstance,
    r: ref
  } : ref : null;
};

var createVNode =  true ? createVNodeWithArgsTransform : undefined;

function _createVNode(type) {
  var _vnode;

  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var isBlockNode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if ( true && !type) {
      warn("Invalid vnode type when creating vnode: ".concat(type, "."));
    }

    type = Comment;
  }

  if (isVNode(type)) {
    // createVNode receiving an existing vnode. This happens in cases like
    // <component :is="vnode"/>
    // #2078 make sure to merge refs during the clone instead of overwriting it
    var cloned = cloneVNode(type, props, true
    /* mergeRef: true */
    );

    if (children) {
      normalizeChildren(cloned, children);
    }

    return cloned;
  } // class component normalization.


  if (isClassComponent(type)) {
    type = type.__vccOpts;
  } // class & style normalization.


  if (props) {
    // for reactive or proxy objects, we need to clone it to enable mutation.
    if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isProxy"])(props) || InternalObjectKey in props) {
      props = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, props);
    }

    var _props = props,
        klass = _props["class"],
        style = _props.style;

    if (klass && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(klass)) {
      props["class"] = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["normalizeClass"])(klass);
    }

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(style)) {
      // reactive state objects need to be cloned since they are likely to be
      // mutated
      if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isProxy"])(style) && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(style)) {
        style = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, style);
      }

      props.style = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])(style);
    }
  } // encode the vnode type information into a bitmap


  var shapeFlag = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(type) ? 1
  /* ELEMENT */
  : isSuspense(type) ? 128
  /* SUSPENSE */
  : isTeleport(type) ? 64
  /* TELEPORT */
  : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(type) ? 4
  /* STATEFUL_COMPONENT */
  : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(type) ? 2
  /* FUNCTIONAL_COMPONENT */
  : 0;

  if ( true && shapeFlag & 4
  /* STATEFUL_COMPONENT */
  && Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isProxy"])(type)) {
    type = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRaw"])(type);
    warn("Vue received a Component which was made a reactive object. This can " + "lead to unnecessary performance overhead, and should be avoided by " + "marking the component with `markRaw` or using `shallowRef` " + "instead of `ref`.", "\nComponent that was made reactive: ", type);
  }

  var vnode = (_vnode = {
    __v_isVNode: true
  }, _defineProperty(_vnode, "__v_skip"
  /* SKIP */
  , true), _defineProperty(_vnode, "type", type), _defineProperty(_vnode, "props", props), _defineProperty(_vnode, "key", props && normalizeKey(props)), _defineProperty(_vnode, "ref", props && normalizeRef(props)), _defineProperty(_vnode, "scopeId", currentScopeId), _defineProperty(_vnode, "children", null), _defineProperty(_vnode, "component", null), _defineProperty(_vnode, "suspense", null), _defineProperty(_vnode, "ssContent", null), _defineProperty(_vnode, "ssFallback", null), _defineProperty(_vnode, "dirs", null), _defineProperty(_vnode, "transition", null), _defineProperty(_vnode, "el", null), _defineProperty(_vnode, "anchor", null), _defineProperty(_vnode, "target", null), _defineProperty(_vnode, "targetAnchor", null), _defineProperty(_vnode, "staticCount", 0), _defineProperty(_vnode, "shapeFlag", shapeFlag), _defineProperty(_vnode, "patchFlag", patchFlag), _defineProperty(_vnode, "dynamicProps", dynamicProps), _defineProperty(_vnode, "dynamicChildren", null), _defineProperty(_vnode, "appContext", null), _vnode); // validate key

  if ( true && vnode.key !== vnode.key) {
    warn("VNode created with invalid key (NaN). VNode type:", vnode.type);
  }

  normalizeChildren(vnode, children); // normalize suspense children

  if (shapeFlag & 128
  /* SUSPENSE */
  ) {
      var _normalizeSuspenseChi = normalizeSuspenseChildren(vnode),
          content = _normalizeSuspenseChi.content,
          fallback = _normalizeSuspenseChi.fallback;

      vnode.ssContent = content;
      vnode.ssFallback = fallback;
    }

  if (shouldTrack > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && ( // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  patchFlag > 0 || shapeFlag & 6
  /* COMPONENT */
  ) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  patchFlag !== 32
  /* HYDRATE_EVENTS */
  ) {
      currentBlock.push(vnode);
    }

  return vnode;
}

function cloneVNode(vnode, extraProps) {
  var _ref19;

  var mergeRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // This is intentionally NOT using spread or extend to avoid the runtime
  // key enumeration cost.
  var props = vnode.props,
      ref = vnode.ref,
      patchFlag = vnode.patchFlag;
  var mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  return _ref19 = {
    __v_isVNode: true
  }, _defineProperty(_ref19, "__v_skip"
  /* SKIP */
  , true), _defineProperty(_ref19, "type", vnode.type), _defineProperty(_ref19, "props", mergedProps), _defineProperty(_ref19, "key", mergedProps && normalizeKey(mergedProps)), _defineProperty(_ref19, "ref", extraProps && extraProps.ref ? // #2078 in the case of <component :is="vnode" ref="extra"/>
  // if the vnode itself already has a ref, cloneVNode will need to merge
  // the refs so the single vnode can be set on multiple refs
  mergeRef && ref ? Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref), _defineProperty(_ref19, "scopeId", vnode.scopeId), _defineProperty(_ref19, "children", vnode.children), _defineProperty(_ref19, "target", vnode.target), _defineProperty(_ref19, "targetAnchor", vnode.targetAnchor), _defineProperty(_ref19, "staticCount", vnode.staticCount), _defineProperty(_ref19, "shapeFlag", vnode.shapeFlag), _defineProperty(_ref19, "patchFlag", extraProps && vnode.type !== Fragment ? patchFlag === -1 // hoisted node
  ? 16
  /* FULL_PROPS */
  : patchFlag | 16
  /* FULL_PROPS */
  : patchFlag), _defineProperty(_ref19, "dynamicProps", vnode.dynamicProps), _defineProperty(_ref19, "dynamicChildren", vnode.dynamicChildren), _defineProperty(_ref19, "appContext", vnode.appContext), _defineProperty(_ref19, "dirs", vnode.dirs), _defineProperty(_ref19, "transition", vnode.transition), _defineProperty(_ref19, "component", vnode.component), _defineProperty(_ref19, "suspense", vnode.suspense), _defineProperty(_ref19, "ssContent", vnode.ssContent && cloneVNode(vnode.ssContent)), _defineProperty(_ref19, "ssFallback", vnode.ssFallback && cloneVNode(vnode.ssFallback)), _defineProperty(_ref19, "el", vnode.el), _defineProperty(_ref19, "anchor", vnode.anchor), _ref19;
}
/**
 * @private
 */


function createTextVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return createVNode(Text, null, text, flag);
}
/**
 * @private
 */


function createStaticVNode(content, numberOfNodes) {
  // A static vnode can contain multiple stringified elements, and the number
  // of elements is necessary for hydration.
  var vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
/**
 * @private
 */


function createCommentVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var asBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}

function normalizeVNode(child) {
  if (child == null || typeof child === 'boolean') {
    // empty placeholder
    return createVNode(Comment);
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(child)) {
    // fragment
    return createVNode(Fragment, null, child);
  } else if (_typeof(child) === 'object') {
    // already vnode, this should be the most common since compiled templates
    // always produce all-vnode children arrays
    return child.el === null ? child : cloneVNode(child);
  } else {
    // strings and numbers
    return createVNode(Text, null, String(child));
  }
} // optimized normalization for template-compiled render fns


function cloneIfMounted(child) {
  return child.el === null ? child : cloneVNode(child);
}

function normalizeChildren(vnode, children) {
  var type = 0;
  var shapeFlag = vnode.shapeFlag;

  if (children == null) {
    children = null;
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(children)) {
    type = 16
    /* ARRAY_CHILDREN */
    ;
  } else if (_typeof(children) === 'object') {
    if (shapeFlag & 1
    /* ELEMENT */
    || shapeFlag & 64
    /* TELEPORT */
    ) {
        // Normalize slot to plain children for plain element and Teleport
        var slot = children["default"];

        if (slot) {
          // _c marker is added by withCtx() indicating this is a compiled slot
          slot._c && setCompiledSlotRendering(1);
          normalizeChildren(vnode, slot());
          slot._c && setCompiledSlotRendering(-1);
        }

        return;
      } else {
      type = 32
      /* SLOTS_CHILDREN */
      ;
      var slotFlag = children._;

      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3
      /* FORWARDED */
      && currentRenderingInstance) {
        // a child component receives forwarded slots from the parent.
        // its slot type is determined by its parent's slot type.
        if (currentRenderingInstance.vnode.patchFlag & 1024
        /* DYNAMIC_SLOTS */
        ) {
            children._ = 2
            /* DYNAMIC */
            ;
            vnode.patchFlag |= 1024
            /* DYNAMIC_SLOTS */
            ;
          } else {
          children._ = 1
          /* STABLE */
          ;
        }
      }
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(children)) {
    children = {
      "default": children,
      _ctx: currentRenderingInstance
    };
    type = 32
    /* SLOTS_CHILDREN */
    ;
  } else {
    children = String(children); // force teleport children to array so it can be moved around

    if (shapeFlag & 64
    /* TELEPORT */
    ) {
        type = 16
        /* ARRAY_CHILDREN */
        ;
        children = [createTextVNode(children)];
      } else {
      type = 8
      /* TEXT_CHILDREN */
      ;
    }
  }

  vnode.children = children;
  vnode.shapeFlag |= type;
}

function mergeProps() {
  var ret = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, arguments.length <= 0 ? undefined : arguments[0]);

  for (var i = 1; i < arguments.length; i++) {
    var toMerge = i < 0 || arguments.length <= i ? undefined : arguments[i];

    for (var key in toMerge) {
      if (key === 'class') {
        if (ret["class"] !== toMerge["class"]) {
          ret["class"] = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["normalizeClass"])([ret["class"], toMerge["class"]]);
        }
      } else if (key === 'style') {
        ret.style = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])([ret.style, toMerge.style]);
      } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isOn"])(key)) {
        var existing = ret[key];
        var incoming = toMerge[key];

        if (existing !== incoming) {
          ret[key] = existing ? [].concat(existing, toMerge[key]) : incoming;
        }
      } else if (key !== '') {
        ret[key] = toMerge[key];
      }
    }
  }

  return ret;
}

function provide(key, value) {
  if (!currentInstance) {
    if (true) {
      warn("provide() can only be used inside setup().");
    }
  } else {
    var provides = currentInstance.provides; // by default an instance inherits its parent's provides object
    // but when it needs to provide values of its own, it creates its
    // own provides object using parent provides object as prototype.
    // this way in `inject` we can simply look up injections from direct
    // parent and let the prototype chain do the work.

    var parentProvides = currentInstance.parent && currentInstance.parent.provides;

    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    } // TS doesn't allow symbol as index type


    provides[key] = value;
  }
}

function inject(key, defaultValue) {
  var treatDefaultAsFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // fallback to `currentRenderingInstance` so that this can be called in
  // a functional component
  var instance = currentInstance || currentRenderingInstance;

  if (instance) {
    // #2400
    // to support `app.use` plugins,
    // fallback to appContext's `provides` if the intance is at root
    var provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;

    if (provides && key in provides) {
      // TS doesn't allow symbol as index type
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(defaultValue) ? defaultValue() : defaultValue;
    } else if (true) {
      warn("injection \"".concat(String(key), "\" not found."));
    }
  } else if (true) {
    warn("inject() can only be used inside setup() or functional components.");
  }
}

function createDuplicateChecker() {
  var cache = Object.create(null);
  return function (type, key) {
    if (cache[key]) {
      warn("".concat(type, " property \"").concat(key, "\" is already defined in ").concat(cache[key], "."));
    } else {
      cache[key] = type;
    }
  };
}

var isInBeforeCreate = false;

function applyOptions(instance, options) {
  var deferredData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var deferredWatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var deferredProvide = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var asMixin = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var mixins = options.mixins,
      extendsOptions = options["extends"],
      dataOptions = options.data,
      computedOptions = options.computed,
      methods = options.methods,
      watchOptions = options.watch,
      provideOptions = options.provide,
      injectOptions = options.inject,
      components = options.components,
      directives = options.directives,
      beforeMount = options.beforeMount,
      mounted = options.mounted,
      beforeUpdate = options.beforeUpdate,
      updated = options.updated,
      activated = options.activated,
      deactivated = options.deactivated,
      beforeDestroy = options.beforeDestroy,
      beforeUnmount = options.beforeUnmount,
      destroyed = options.destroyed,
      unmounted = options.unmounted,
      render = options.render,
      renderTracked = options.renderTracked,
      renderTriggered = options.renderTriggered,
      errorCaptured = options.errorCaptured,
      expose = options.expose;
  var publicThis = instance.proxy;
  var ctx = instance.ctx;
  var globalMixins = instance.appContext.mixins;

  if (asMixin && render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NOOP"]) {
    instance.render = render;
  } // applyOptions is called non-as-mixin once per instance


  if (!asMixin) {
    isInBeforeCreate = true;
    callSyncHook('beforeCreate', "bc"
    /* BEFORE_CREATE */
    , options, instance, globalMixins);
    isInBeforeCreate = false; // global mixins are applied first

    applyMixins(instance, globalMixins, deferredData, deferredWatch, deferredProvide);
  } // extending a base component...


  if (extendsOptions) {
    applyOptions(instance, extendsOptions, deferredData, deferredWatch, deferredProvide, true);
  } // local mixins


  if (mixins) {
    applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide);
  }

  var checkDuplicateProperties =  true ? createDuplicateChecker() : undefined;

  if (true) {
    var _instance$propsOption5 = _slicedToArray(instance.propsOptions, 1),
        propsOptions = _instance$propsOption5[0];

    if (propsOptions) {
      for (var key in propsOptions) {
        checkDuplicateProperties("Props"
        /* PROPS */
        , key);
      }
    }
  } // options initialization order (to be consistent with Vue 2):
  // - props (already done outside of this function)
  // - inject
  // - methods
  // - data (deferred since it relies on `this` access)
  // - computed
  // - watch (deferred since it relies on `this` access)


  if (injectOptions) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(injectOptions)) {
      for (var i = 0; i < injectOptions.length; i++) {
        var _key11 = injectOptions[i];
        ctx[_key11] = inject(_key11);

        if (true) {
          checkDuplicateProperties("Inject"
          /* INJECT */
          , _key11);
        }
      }
    } else {
      for (var _key12 in injectOptions) {
        var opt = injectOptions[_key12];

        if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(opt)) {
          ctx[_key12] = inject(opt.from || _key12, opt["default"], true
          /* treat default function as factory */
          );
        } else {
          ctx[_key12] = inject(opt);
        }

        if (true) {
          checkDuplicateProperties("Inject"
          /* INJECT */
          , _key12);
        }
      }
    }
  }

  if (methods) {
    for (var _key13 in methods) {
      var methodHandler = methods[_key13];

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(methodHandler)) {
        ctx[_key13] = methodHandler.bind(publicThis);

        if (true) {
          checkDuplicateProperties("Methods"
          /* METHODS */
          , _key13);
        }
      } else if (true) {
        warn("Method \"".concat(_key13, "\" has type \"").concat(_typeof(methodHandler), "\" in the component definition. ") + "Did you reference the function correctly?");
      }
    }
  }

  if (!asMixin) {
    if (deferredData.length) {
      deferredData.forEach(function (dataFn) {
        return resolveData(instance, dataFn, publicThis);
      });
    }

    if (dataOptions) {
      // @ts-ignore dataOptions is not fully type safe
      resolveData(instance, dataOptions, publicThis);
    }

    if (true) {
      (function () {
        var rawData = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRaw"])(instance.data);

        var _loop = function _loop(_key14) {
          checkDuplicateProperties("Data"
          /* DATA */
          , _key14); // expose data on ctx during dev

          if (_key14[0] !== '$' && _key14[0] !== '_') {
            Object.defineProperty(ctx, _key14, {
              configurable: true,
              enumerable: true,
              get: function get() {
                return rawData[_key14];
              },
              set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NOOP"]
            });
          }
        };

        for (var _key14 in rawData) {
          _loop(_key14);
        }
      })();
    }
  } else if (dataOptions) {
    deferredData.push(dataOptions);
  }

  if (computedOptions) {
    var _loop2 = function _loop2(_key15) {
      var opt = computedOptions[_key15];
      var get = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(opt) ? opt.bind(publicThis, publicThis) : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(opt.get) ? opt.get.bind(publicThis, publicThis) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NOOP"];

      if ( true && get === _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NOOP"]) {
        warn("Computed property \"".concat(_key15, "\" has no getter."));
      }

      var set = !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(opt) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(opt.set) ? opt.set.bind(publicThis) :  true ? function () {
        warn("Write operation failed: computed property \"".concat(_key15, "\" is readonly."));
      } : undefined;
      var c = computed({
        get: get,
        set: set
      });
      Object.defineProperty(ctx, _key15, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return c.value;
        },
        set: function set(v) {
          return c.value = v;
        }
      });

      if (true) {
        checkDuplicateProperties("Computed"
        /* COMPUTED */
        , _key15);
      }
    };

    for (var _key15 in computedOptions) {
      _loop2(_key15);
    }
  }

  if (watchOptions) {
    deferredWatch.push(watchOptions);
  }

  if (!asMixin && deferredWatch.length) {
    deferredWatch.forEach(function (watchOptions) {
      for (var _key16 in watchOptions) {
        createWatcher(watchOptions[_key16], ctx, publicThis, _key16);
      }
    });
  }

  if (provideOptions) {
    deferredProvide.push(provideOptions);
  }

  if (!asMixin && deferredProvide.length) {
    deferredProvide.forEach(function (provideOptions) {
      var provides = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach(function (key) {
        provide(key, provides[key]);
      });
    });
  } // asset options.
  // To reduce memory usage, only components with mixins or extends will have
  // resolved asset registry attached to instance.


  if (asMixin) {
    if (components) {
      Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])(instance.components || (instance.components = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, instance.type.components)), components);
    }

    if (directives) {
      Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])(instance.directives || (instance.directives = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, instance.type.directives)), directives);
    }
  } // lifecycle options


  if (!asMixin) {
    callSyncHook('created', "c"
    /* CREATED */
    , options, instance, globalMixins);
  }

  if (beforeMount) {
    onBeforeMount(beforeMount.bind(publicThis));
  }

  if (mounted) {
    onMounted(mounted.bind(publicThis));
  }

  if (beforeUpdate) {
    onBeforeUpdate(beforeUpdate.bind(publicThis));
  }

  if (updated) {
    onUpdated(updated.bind(publicThis));
  }

  if (activated) {
    onActivated(activated.bind(publicThis));
  }

  if (deactivated) {
    onDeactivated(deactivated.bind(publicThis));
  }

  if (errorCaptured) {
    onErrorCaptured(errorCaptured.bind(publicThis));
  }

  if (renderTracked) {
    onRenderTracked(renderTracked.bind(publicThis));
  }

  if (renderTriggered) {
    onRenderTriggered(renderTriggered.bind(publicThis));
  }

  if ( true && beforeDestroy) {
    warn("`beforeDestroy` has been renamed to `beforeUnmount`.");
  }

  if (beforeUnmount) {
    onBeforeUnmount(beforeUnmount.bind(publicThis));
  }

  if ( true && destroyed) {
    warn("`destroyed` has been renamed to `unmounted`.");
  }

  if (unmounted) {
    onUnmounted(unmounted.bind(publicThis));
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(expose)) {
    if (!asMixin) {
      if (expose.length) {
        var exposed = instance.exposed || (instance.exposed = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["proxyRefs"])({}));
        expose.forEach(function (key) {
          exposed[key] = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRef"])(publicThis, key);
        });
      } else if (!instance.exposed) {
        instance.exposed = _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"];
      }
    } else if (true) {
      warn("The `expose` option is ignored when used in mixins.");
    }
  }
}

function callSyncHook(name, type, options, instance, globalMixins) {
  callHookFromMixins(name, type, globalMixins, instance);
  var base = options["extends"],
      mixins = options.mixins;

  if (base) {
    callHookFromExtends(name, type, base, instance);
  }

  if (mixins) {
    callHookFromMixins(name, type, mixins, instance);
  }

  var selfHook = options[name];

  if (selfHook) {
    callWithAsyncErrorHandling(selfHook.bind(instance.proxy), instance, type);
  }
}

function callHookFromExtends(name, type, base, instance) {
  if (base["extends"]) {
    callHookFromExtends(name, type, base["extends"], instance);
  }

  var baseHook = base[name];

  if (baseHook) {
    callWithAsyncErrorHandling(baseHook.bind(instance.proxy), instance, type);
  }
}

function callHookFromMixins(name, type, mixins, instance) {
  for (var i = 0; i < mixins.length; i++) {
    var chainedMixins = mixins[i].mixins;

    if (chainedMixins) {
      callHookFromMixins(name, type, chainedMixins, instance);
    }

    var fn = mixins[i][name];

    if (fn) {
      callWithAsyncErrorHandling(fn.bind(instance.proxy), instance, type);
    }
  }
}

function applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide) {
  for (var i = 0; i < mixins.length; i++) {
    applyOptions(instance, mixins[i], deferredData, deferredWatch, deferredProvide, true);
  }
}

function resolveData(instance, dataFn, publicThis) {
  if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(dataFn)) {
    warn("The data option must be a function. " + "Plain object usage is no longer supported.");
  }

  var data = dataFn.call(publicThis, publicThis);

  if ( true && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isPromise"])(data)) {
    warn("data() returned a Promise - note data() cannot be async; If you " + "intend to perform data fetching before component renders, use " + "async setup() + <Suspense>.");
  }

  if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(data)) {
     true && warn("data() should return an object.");
  } else if (instance.data === _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"]) {
    instance.data = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["reactive"])(data);
  } else {
    // existing data: this is a mixin or extends.
    Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])(instance.data, data);
  }
}

function createWatcher(raw, ctx, publicThis, key) {
  var getter = key.includes('.') ? createPathGetter(publicThis, key) : function () {
    return publicThis[key];
  };

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(raw)) {
    var handler = ctx[raw];

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(handler)) {
      watch(getter, handler);
    } else if (true) {
      warn("Invalid watch handler specified by key \"".concat(raw, "\""), handler);
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(raw)) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(raw)) {
      raw.forEach(function (r) {
        return createWatcher(r, ctx, publicThis, key);
      });
    } else {
      var _handler = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(_handler)) {
        watch(getter, _handler, raw);
      } else if (true) {
        warn("Invalid watch handler specified by key \"".concat(raw.handler, "\""), _handler);
      }
    }
  } else if (true) {
    warn("Invalid watch option: \"".concat(key, "\""), raw);
  }
}

function createPathGetter(ctx, path) {
  var segments = path.split('.');
  return function () {
    var cur = ctx;

    for (var i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }

    return cur;
  };
}

function resolveMergedOptions(instance) {
  var raw = instance.type;
  var __merged = raw.__merged,
      mixins = raw.mixins,
      extendsOptions = raw["extends"];
  if (__merged) return __merged;
  var globalMixins = instance.appContext.mixins;
  if (!globalMixins.length && !mixins && !extendsOptions) return raw;
  var options = {};
  globalMixins.forEach(function (m) {
    return mergeOptions(options, m, instance);
  });
  mergeOptions(options, raw, instance);
  return raw.__merged = options;
}

function mergeOptions(to, from, instance) {
  var strats = instance.appContext.config.optionMergeStrategies;
  var mixins = from.mixins,
      extendsOptions = from["extends"];
  extendsOptions && mergeOptions(to, extendsOptions, instance);
  mixins && mixins.forEach(function (m) {
    return mergeOptions(to, m, instance);
  });

  for (var key in from) {
    if (strats && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(strats, key)) {
      to[key] = strats[key](to[key], from[key], instance.proxy, key);
    } else {
      to[key] = from[key];
    }
  }
}
/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */


var getPublicInstance = function getPublicInstance(i) {
  return i && (i.proxy ? i.proxy : getPublicInstance(i.parent));
};

var publicPropertiesMap = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])(Object.create(null), {
  $: function $(i) {
    return i;
  },
  $el: function $el(i) {
    return i.vnode.el;
  },
  $data: function $data(i) {
    return i.data;
  },
  $props: function $props(i) {
    return  true ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["shallowReadonly"])(i.props) : undefined;
  },
  $attrs: function $attrs(i) {
    return  true ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["shallowReadonly"])(i.attrs) : undefined;
  },
  $slots: function $slots(i) {
    return  true ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["shallowReadonly"])(i.slots) : undefined;
  },
  $refs: function $refs(i) {
    return  true ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["shallowReadonly"])(i.refs) : undefined;
  },
  $parent: function $parent(i) {
    return getPublicInstance(i.parent);
  },
  $root: function $root(i) {
    return i.root && i.root.proxy;
  },
  $emit: function $emit(i) {
    return i.emit;
  },
  $options: function $options(i) {
    return  false ? undefined : i.type;
  },
  $forceUpdate: function $forceUpdate(i) {
    return function () {
      return queueJob(i.update);
    };
  },
  $nextTick: function $nextTick(i) {
    return nextTick.bind(i.proxy);
  },
  $watch: function $watch(i) {
    return  false ? undefined : _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
  }
});
var PublicInstanceProxyHandlers = {
  get: function get(_ref20, key) {
    var instance = _ref20._;
    var ctx = instance.ctx,
        setupState = instance.setupState,
        data = instance.data,
        props = instance.props,
        accessCache = instance.accessCache,
        type = instance.type,
        appContext = instance.appContext; // let @vue/reactivity know it should never observe Vue public instances.

    if (key === "__v_skip"
    /* SKIP */
    ) {
        return true;
      } // for internal formatters to know that this is a Vue instance


    if ( true && key === '__isVue') {
      return true;
    } // data / props / ctx
    // This getter gets called for every property access on the render context
    // during render and is a major hotspot. The most expensive part of this
    // is the multiple hasOwn() calls. It's much faster to do a simple property
    // access on a plain object, so we use an accessCache object (with null
    // prototype) to memoize what access type a key corresponds to.


    var normalizedProps;

    if (key[0] !== '$') {
      var n = accessCache[key];

      if (n !== undefined) {
        switch (n) {
          case 0
          /* SETUP */
          :
            return setupState[key];

          case 1
          /* DATA */
          :
            return data[key];

          case 3
          /* CONTEXT */
          :
            return ctx[key];

          case 2
          /* PROPS */
          :
            return props[key];
          // default: just fallthrough
        }
      } else if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(setupState, key)) {
        accessCache[key] = 0
        /* SETUP */
        ;
        return setupState[key];
      } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(data, key)) {
        accessCache[key] = 1
        /* DATA */
        ;
        return data[key];
      } else if ( // only cache other properties when instance has declared (thus stable)
      // props
      (normalizedProps = instance.propsOptions[0]) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(normalizedProps, key)) {
        accessCache[key] = 2
        /* PROPS */
        ;
        return props[key];
      } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(ctx, key)) {
        accessCache[key] = 3
        /* CONTEXT */
        ;
        return ctx[key];
      } else if (true) {
        accessCache[key] = 4
        /* OTHER */
        ;
      }
    }

    var publicGetter = publicPropertiesMap[key];
    var cssModule, globalProperties; // public $xxx properties

    if (publicGetter) {
      if (key === '$attrs') {
        Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["track"])(instance, "get"
        /* GET */
        , key);
         true && markAttrsAccessed();
      }

      return publicGetter(instance);
    } else if ( // css module (injected by vue-loader)
    (cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(ctx, key)) {
      // user may set custom properties to `this` that start with `$`
      accessCache[key] = 3
      /* CONTEXT */
      ;
      return ctx[key];
    } else if ( // global properties
    globalProperties = appContext.config.globalProperties, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(globalProperties, key)) {
      return globalProperties[key];
    } else if ( true && currentRenderingInstance && (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf('__v') !== 0)) {
      if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"] && (key[0] === '$' || key[0] === '_') && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(data, key)) {
        warn("Property ".concat(JSON.stringify(key), " must be accessed via $data because it starts with a reserved ") + "character (\"$\" or \"_\") and is not proxied on the render context.");
      } else {
        warn("Property ".concat(JSON.stringify(key), " was accessed during render ") + "but is not defined on instance.");
      }
    }
  },
  set: function set(_ref21, key, value) {
    var instance = _ref21._;
    var data = instance.data,
        setupState = instance.setupState,
        ctx = instance.ctx;

    if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(setupState, key)) {
      setupState[key] = value;
    } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(data, key)) {
      data[key] = value;
    } else if (key in instance.props) {
       true && warn("Attempting to mutate prop \"".concat(key, "\". Props are readonly."), instance);
      return false;
    }

    if (key[0] === '$' && key.slice(1) in instance) {
       true && warn("Attempting to mutate public property \"".concat(key, "\". ") + "Properties starting with $ are reserved and readonly.", instance);
      return false;
    } else {
      if ( true && key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value: value
        });
      } else {
        ctx[key] = value;
      }
    }

    return true;
  },
  has: function has(_ref22, key) {
    var _ref22$_ = _ref22._,
        data = _ref22$_.data,
        setupState = _ref22$_.setupState,
        accessCache = _ref22$_.accessCache,
        ctx = _ref22$_.ctx,
        appContext = _ref22$_.appContext,
        propsOptions = _ref22$_.propsOptions;
    var normalizedProps;
    return accessCache[key] !== undefined || data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(data, key) || setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(setupState, key) || (normalizedProps = propsOptions[0]) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(normalizedProps, key) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(ctx, key) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(publicPropertiesMap, key) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(appContext.config.globalProperties, key);
  }
};

if (true) {
  PublicInstanceProxyHandlers.ownKeys = function (target) {
    warn("Avoid app logic that relies on enumerating keys on a component instance. " + "The keys will be empty in production mode to avoid performance overhead.");
    return Reflect.ownKeys(target);
  };
}

var RuntimeCompiledPublicInstanceProxyHandlers = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, PublicInstanceProxyHandlers, {
  get: function get(target, key) {
    // fast path for unscopables when using `with` block
    if (key === Symbol.unscopables) {
      return;
    }

    return PublicInstanceProxyHandlers.get(target, key, target);
  },
  has: function has(_, key) {
    var has = key[0] !== '_' && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isGloballyWhitelisted"])(key);

    if ( true && !has && PublicInstanceProxyHandlers.has(_, key)) {
      warn("Property ".concat(JSON.stringify(key), " should not start with _ which is a reserved prefix for Vue internals."));
    }

    return has;
  }
}); // In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.

function createRenderContext(instance) {
  var target = {}; // expose internal instance for proxy handlers

  Object.defineProperty(target, "_", {
    configurable: true,
    enumerable: false,
    get: function get() {
      return instance;
    }
  }); // expose public properties

  Object.keys(publicPropertiesMap).forEach(function (key) {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return publicPropertiesMap[key](instance);
      },
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NOOP"]
    });
  }); // expose global properties

  var globalProperties = instance.appContext.config.globalProperties;
  Object.keys(globalProperties).forEach(function (key) {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return globalProperties[key];
      },
      set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NOOP"]
    });
  });
  return target;
} // dev only


function exposePropsOnRenderContext(instance) {
  var ctx = instance.ctx,
      _instance$propsOption6 = _slicedToArray(instance.propsOptions, 1),
      propsOptions = _instance$propsOption6[0];

  if (propsOptions) {
    Object.keys(propsOptions).forEach(function (key) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return instance.props[key];
        },
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NOOP"]
      });
    });
  }
} // dev only


function exposeSetupStateOnRenderContext(instance) {
  var ctx = instance.ctx,
      setupState = instance.setupState;
  Object.keys(Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRaw"])(setupState)).forEach(function (key) {
    if (key[0] === '$' || key[0] === '_') {
      warn("setup() return property ".concat(JSON.stringify(key), " should not start with \"$\" or \"_\" ") + "which are reserved prefixes for Vue internals.");
      return;
    }

    Object.defineProperty(ctx, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return setupState[key];
      },
      set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NOOP"]
    });
  });
}

var emptyAppContext = createAppContext();
var uid$1 = 0;

function createComponentInstance(vnode, parent, suspense) {
  var type = vnode.type; // inherit parent app context - or - if root, adopt from root vnode

  var appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  var instance = {
    uid: uid$1++,
    vnode: vnode,
    type: type,
    parent: parent,
    appContext: appContext,
    root: null,
    next: null,
    subTree: null,
    update: null,
    render: null,
    proxy: null,
    exposed: null,
    withProxy: null,
    effects: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resovled assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    emitted: null,
    // state
    ctx: _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"],
    data: _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"],
    props: _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"],
    attrs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"],
    slots: _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"],
    refs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"],
    setupState: _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"],
    setupContext: null,
    // suspense related
    suspense: suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null
  };

  if (true) {
    instance.ctx = createRenderContext(instance);
  } else {}

  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);

  if (true) {
    devtoolsComponentAdded(instance);
  }

  return instance;
}

var currentInstance = null;

var getCurrentInstance = function getCurrentInstance() {
  return currentInstance || currentRenderingInstance;
};

var setCurrentInstance = function setCurrentInstance(instance) {
  currentInstance = instance;
};

var isBuiltInTag = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["makeMap"])('slot,component');

function validateComponentName(name, config) {
  var appIsNativeTag = config.isNativeTag || _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NO"];

  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component id: ' + name);
  }
}

var isInSSRComponentSetup = false;

function setupComponent(instance) {
  var isSSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  isInSSRComponentSetup = isSSR;
  var _instance$vnode = instance.vnode,
      props = _instance$vnode.props,
      children = _instance$vnode.children,
      shapeFlag = _instance$vnode.shapeFlag;
  var isStateful = shapeFlag & 4
  /* STATEFUL_COMPONENT */
  ;
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  var setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
  isInSSRComponentSetup = false;
  return setupResult;
}

function setupStatefulComponent(instance, isSSR) {
  var Component = instance.type;

  if (true) {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }

    if (Component.components) {
      var names = Object.keys(Component.components);

      for (var i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }

    if (Component.directives) {
      var _names = Object.keys(Component.directives);

      for (var _i3 = 0; _i3 < _names.length; _i3++) {
        validateDirectiveName(_names[_i3]);
      }
    }
  } // 0. create render proxy property access cache


  instance.accessCache = Object.create(null); // 1. create public instance / render proxy
  // also mark it raw so it's never observed

  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);

  if (true) {
    exposePropsOnRenderContext(instance);
  } // 2. call setup()


  var setup = Component.setup;

  if (setup) {
    var setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    currentInstance = instance;
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["pauseTracking"])();
    var setupResult = callWithErrorHandling(setup, instance, 0
    /* SETUP_FUNCTION */
    , [ true ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["shallowReadonly"])(instance.props) : undefined, setupContext]);
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["resetTracking"])();
    currentInstance = null;

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isPromise"])(setupResult)) {
      if (isSSR) {
        // return the promise so server-renderer can wait on it
        return setupResult.then(function (resolvedResult) {
          handleSetupResult(instance, resolvedResult);
        });
      } else {
        // async setup returned Promise.
        // bail here and wait for re-entry.
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult);
    }
  } else {
    finishComponentSetup(instance);
  }
}

function handleSetupResult(instance, setupResult, isSSR) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(setupResult)) {
    // setup returned an inline render function
    {
      instance.render = setupResult;
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(setupResult)) {
    if ( true && isVNode(setupResult)) {
      warn("setup() should not return VNodes directly - " + "return a render function instead.");
    } // setup returned bindings.
    // assuming a render function compiled from template is present.


    if (true) {
      instance.devtoolsRawSetupState = setupResult;
    }

    instance.setupState = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["proxyRefs"])(setupResult);

    if (true) {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if ( true && setupResult !== undefined) {
    warn("setup() should return an object. Received: ".concat(setupResult === null ? 'null' : _typeof(setupResult)));
  }

  finishComponentSetup(instance);
}

var compile;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */

function registerRuntimeCompiler(_compile) {
  compile = _compile;
}

function finishComponentSetup(instance, isSSR) {
  var Component = instance.type; // template / render function normalization

  if (!instance.render) {
    // could be set from setup()
    if (compile && Component.template && !Component.render) {
      if (true) {
        startMeasure(instance, "compile");
      }

      Component.render = compile(Component.template, {
        isCustomElement: instance.appContext.config.isCustomElement,
        delimiters: Component.delimiters
      });

      if (true) {
        endMeasure(instance, "compile");
      }
    }

    instance.render = Component.render || _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NOOP"]; // for runtime-compiled render functions using `with` blocks, the render
    // proxy used needs a different `has` handler which is more performant and
    // also only allows a whitelist of globals to fallthrough.

    if (instance.render._rc) {
      instance.withProxy = new Proxy(instance.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  } // support for 2.x options


  if (false) {} // warn missing template/render


  if ( true && !Component.render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NOOP"]) {
    /* istanbul ignore if */
    if (!compile && Component.template) {
      warn("Component provided template option but " + "runtime compilation is not supported in this build of Vue." + " Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\"."
      /* should not happen */
      );
    } else {
      warn("Component is missing template or render function.");
    }
  }
}

var attrHandlers = {
  get: function get(target, key) {
    if (true) {
      markAttrsAccessed();
    }

    return target[key];
  },
  set: function set() {
    warn("setupContext.attrs is readonly.");
    return false;
  },
  deleteProperty: function deleteProperty() {
    warn("setupContext.attrs is readonly.");
    return false;
  }
};

function createSetupContext(instance) {
  var expose = function expose(exposed) {
    if ( true && instance.exposed) {
      warn("expose() should be called only once per setup().");
    }

    instance.exposed = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["proxyRefs"])(exposed);
  };

  if (true) {
    // We use getters in dev in case libs like test-utils overwrite instance
    // properties (overwrites should not be done in prod)
    return Object.freeze({
      get props() {
        return instance.props;
      },

      get attrs() {
        return new Proxy(instance.attrs, attrHandlers);
      },

      get slots() {
        return Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["shallowReadonly"])(instance.slots);
      },

      get emit() {
        return function (event) {
          for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key17 = 1; _key17 < _len7; _key17++) {
            args[_key17 - 1] = arguments[_key17];
          }

          return instance.emit.apply(instance, [event].concat(args));
        };
      },

      expose: expose
    });
  } else {}
} // record effects created during a component's setup() so that they can be
// stopped when the component unmounts


function recordInstanceBoundEffect(effect) {
  var instance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;

  if (instance) {
    (instance.effects || (instance.effects = [])).push(effect);
  }
}

var classifyRE = /(?:^|[-_])(\w)/g;

var classify = function classify(str) {
  return str.replace(classifyRE, function (c) {
    return c.toUpperCase();
  }).replace(/[-_]/g, '');
};

function getComponentName(Component) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(Component) ? Component.displayName || Component.name : Component.name;
}
/* istanbul ignore next */


function formatComponentName(instance, Component) {
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var name = getComponentName(Component);

  if (!name && Component.__file) {
    var match = Component.__file.match(/([^/\\]+)\.\w+$/);

    if (match) {
      name = match[1];
    }
  }

  if (!name && instance && instance.parent) {
    // try to infer the name based on reverse resolution
    var inferFromRegistry = function inferFromRegistry(registry) {
      for (var key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };

    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }

  return name ? classify(name) : isRoot ? "App" : "Anonymous";
}

function isClassComponent(value) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value) && '__vccOpts' in value;
}

function computed(getterOrOptions) {
  var c = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["computed"])(getterOrOptions);
  recordInstanceBoundEffect(c.effect);
  return c;
} // implementation


function defineProps() {
  if (true) {
    warn("defineProps() is a compiler-hint helper that is only usable inside " + "<script setup> of a single file component. Its arguments should be " + "compiled away and passing it at runtime has no effect.");
  }

  return null;
} // implementation


function defineEmit() {
  if (true) {
    warn("defineEmit() is a compiler-hint helper that is only usable inside " + "<script setup> of a single file component. Its arguments should be " + "compiled away and passing it at runtime has no effect.");
  }

  return null;
}

function useContext() {
  var i = getCurrentInstance();

  if ( true && !i) {
    warn("useContext() called without active instance.");
  }

  return i.setupContext || (i.setupContext = createSetupContext(i));
} // Actual implementation


function h(type, propsOrChildren, children) {
  var l = arguments.length;

  if (l === 2) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(propsOrChildren) && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(propsOrChildren)) {
      // single vnode without props
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      } // props without children


      return createVNode(type, propsOrChildren);
    } else {
      // omit props
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }

    return createVNode(type, propsOrChildren, children);
  }
}

var ssrContextKey = Symbol( true ? "ssrContext" : undefined);

var useSSRContext = function useSSRContext() {
  {
    var ctx = inject(ssrContextKey);

    if (!ctx) {
      warn("Server rendering context not provided. Make sure to only call " + "useSsrContext() conditionally in the server build.");
    }

    return ctx;
  }
};

function initCustomFormatter() {
  /* eslint-disable no-restricted-globals */
  if ( false || typeof window === 'undefined') {
    return;
  }

  var vueStyle = {
    style: 'color:#3ba776'
  };
  var numberStyle = {
    style: 'color:#0b1bc9'
  };
  var stringStyle = {
    style: 'color:#b62e24'
  };
  var keywordStyle = {
    style: 'color:#9d288c'
  }; // custom formatter for Chrome
  // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html

  var formatter = {
    header: function header(obj) {
      // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
      if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(obj)) {
        return null;
      }

      if (obj.__isVue) {
        return ['div', vueStyle, "VueInstance"];
      } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isRef"])(obj)) {
        return ['div', {}, ['span', vueStyle, genRefFlag(obj)], '<', formatValue(obj.value), ">"];
      } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isReactive"])(obj)) {
        return ['div', {}, ['span', vueStyle, 'Reactive'], '<', formatValue(obj), ">".concat(Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isReadonly"])(obj) ? " (readonly)" : "")];
      } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["isReadonly"])(obj)) {
        return ['div', {}, ['span', vueStyle, 'Readonly'], '<', formatValue(obj), '>'];
      }

      return null;
    },
    hasBody: function hasBody(obj) {
      return obj && obj.__isVue;
    },
    body: function body(obj) {
      if (obj && obj.__isVue) {
        return ['div', {}].concat(_toConsumableArray(formatInstance(obj.$)));
      }
    }
  };

  function formatInstance(instance) {
    var blocks = [];

    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock('props', Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRaw"])(instance.props)));
    }

    if (instance.setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"]) {
      blocks.push(createInstanceBlock('setup', instance.setupState));
    }

    if (instance.data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"]) {
      blocks.push(createInstanceBlock('data', Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRaw"])(instance.data)));
    }

    var computed = extractKeys(instance, 'computed');

    if (computed) {
      blocks.push(createInstanceBlock('computed', computed));
    }

    var injected = extractKeys(instance, 'inject');

    if (injected) {
      blocks.push(createInstanceBlock('injected', injected));
    }

    blocks.push(['div', {}, ['span', {
      style: keywordStyle.style + ';opacity:0.66'
    }, '$ (internal): '], ['object', {
      object: instance
    }]]);
    return blocks;
  }

  function createInstanceBlock(type, target) {
    target = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, target);

    if (!Object.keys(target).length) {
      return ['span', {}];
    }

    return ['div', {
      style: 'line-height:1.25em;margin-bottom:0.6em'
    }, ['div', {
      style: 'color:#476582'
    }, type], ['div', {
      style: 'padding-left:1.25em'
    }].concat(_toConsumableArray(Object.keys(target).map(function (key) {
      return ['div', {}, ['span', keywordStyle, key + ': '], formatValue(target[key], false)];
    })))];
  }

  function formatValue(v) {
    var asRaw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof v === 'number') {
      return ['span', numberStyle, v];
    } else if (typeof v === 'string') {
      return ['span', stringStyle, JSON.stringify(v)];
    } else if (typeof v === 'boolean') {
      return ['span', keywordStyle, v];
    } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(v)) {
      return ['object', {
        object: asRaw ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__["toRaw"])(v) : v
      }];
    } else {
      return ['span', stringStyle, String(v)];
    }
  }

  function extractKeys(instance, type) {
    var Comp = instance.type;

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(Comp)) {
      return;
    }

    var extracted = {};

    for (var key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }

    return extracted;
  }

  function isKeyOfType(Comp, key, type) {
    var opts = Comp[type];

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(opts) && opts.includes(key) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(opts) && key in opts) {
      return true;
    }

    if (Comp["extends"] && isKeyOfType(Comp["extends"], key, type)) {
      return true;
    }

    if (Comp.mixins && Comp.mixins.some(function (m) {
      return isKeyOfType(m, key, type);
    })) {
      return true;
    }
  }

  function genRefFlag(v) {
    if (v._shallow) {
      return "ShallowRef";
    }

    if (v.effect) {
      return "ComputedRef";
    }

    return "Ref";
  }

  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}
/**
 * Actual implementation
 */


function renderList(source, renderItem) {
  var ret;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(source) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(source)) {
    ret = new Array(source.length);

    for (var i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i);
    }
  } else if (typeof source === 'number') {
    if ( true && !Number.isInteger(source)) {
      warn("The v-for range expect an integer value but got ".concat(source, "."));
      return [];
    }

    ret = new Array(source);

    for (var _i4 = 0; _i4 < source; _i4++) {
      ret[_i4] = renderItem(_i4 + 1, _i4);
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, renderItem);
    } else {
      var keys = Object.keys(source);
      ret = new Array(keys.length);

      for (var _i5 = 0, _l = keys.length; _i5 < _l; _i5++) {
        var key = keys[_i5];
        ret[_i5] = renderItem(source[key], key, _i5);
      }
    }
  } else {
    ret = [];
  }

  return ret;
}
/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */


function toHandlers(obj) {
  var ret = {};

  if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(obj)) {
    warn("v-on with no argument expects an object value.");
    return ret;
  }

  for (var key in obj) {
    ret[Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["toHandlerKey"])(key)] = obj[key];
  }

  return ret;
}
/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */


function createSlots(slots, dynamicSlots) {
  for (var i = 0; i < dynamicSlots.length; i++) {
    var slot = dynamicSlots[i]; // array of dynamic slot generated by <template v-for="..." #[...]>

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(slot)) {
      for (var j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      // conditional single slot generated by <template v-if="..." #foo>
      slots[slot.name] = slot.fn;
    }
  }

  return slots;
} // Core API ------------------------------------------------------------------


var version = "3.0.5";
/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */

var ssrUtils = null;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js ***!
  \***********************************************************************/
/*! exports provided: customRef, isProxy, isReactive, isReadonly, isRef, markRaw, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, camelize, capitalize, toDisplayString, toHandlerKey, BaseTransition, Comment, Fragment, KeepAlive, Static, Suspense, Teleport, Text, callWithAsyncErrorHandling, callWithErrorHandling, cloneVNode, computed, createBlock, createCommentVNode, createHydrationRenderer, createRenderer, createSlots, createStaticVNode, createTextVNode, createVNode, defineAsyncComponent, defineComponent, defineEmit, defineProps, devtools, getCurrentInstance, getTransitionRawChildren, h, handleError, initCustomFormatter, inject, isVNode, mergeProps, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated, openBlock, popScopeId, provide, pushScopeId, queuePostFlushCb, registerRuntimeCompiler, renderList, renderSlot, resolveComponent, resolveDirective, resolveDynamicComponent, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, ssrContextKey, ssrUtils, toHandlers, transformVNodeArgs, useContext, useSSRContext, useTransitionState, version, warn, watch, watchEffect, withCtx, withDirectives, withScopeId, Transition, TransitionGroup, createApp, createSSRApp, hydrate, render, useCssModule, useCssVars, vModelCheckbox, vModelDynamic, vModelRadio, vModelSelect, vModelText, vShow, withKeys, withModifiers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return TransitionGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSSRApp", function() { return createSSRApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCssModule", function() { return useCssModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCssVars", function() { return useCssVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vModelCheckbox", function() { return vModelCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vModelDynamic", function() { return vModelDynamic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vModelRadio", function() { return vModelRadio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vModelSelect", function() { return vModelSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vModelText", function() { return vModelText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vShow", function() { return vShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withKeys", function() { return withKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withModifiers", function() { return withModifiers; });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customRef", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["customRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isProxy", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["isProxy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReactive", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["isReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReadonly", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["isReadonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRef", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["isRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markRaw", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["markRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "proxyRefs", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["proxyRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactive", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["reactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readonly", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["readonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowReactive", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["shallowReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowReadonly", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["shallowReadonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowRef", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["shallowRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRaw", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["toRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRef", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["toRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRefs", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["toRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "triggerRef", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["triggerRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unref", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["unref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["camelize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["capitalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDisplayString", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toHandlerKey", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["toHandlerKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseTransition", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["BaseTransition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["Comment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeepAlive", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["KeepAlive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Static", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["Static"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["Suspense"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Teleport", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["Teleport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callWithAsyncErrorHandling", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["callWithAsyncErrorHandling"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callWithErrorHandling", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["callWithErrorHandling"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["cloneVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["computed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBlock", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCommentVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHydrationRenderer", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createHydrationRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRenderer", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSlots", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createSlots"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStaticVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createStaticVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineAsyncComponent", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["defineAsyncComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineComponent", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["defineComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineEmit", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["defineEmit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineProps", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["defineProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "devtools", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["devtools"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTransitionRawChildren", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["getTransitionRawChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["handleError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initCustomFormatter", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["initCustomFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["inject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["isVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["mergeProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["nextTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onActivated", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onActivated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeMount", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onBeforeMount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeUnmount", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onBeforeUnmount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeUpdate", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onBeforeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeactivated", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onDeactivated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorCaptured", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onErrorCaptured"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMounted", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onMounted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onRenderTracked", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onRenderTracked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onRenderTriggered", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onRenderTriggered"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUnmounted", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUpdated", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onUpdated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openBlock", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["openBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popScopeId", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["popScopeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "provide", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["provide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushScopeId", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queuePostFlushCb", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["queuePostFlushCb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerRuntimeCompiler", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["registerRuntimeCompiler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderList", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["renderList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderSlot", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["renderSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveComponent", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveDirective", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["resolveDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveDynamicComponent", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["resolveDynamicComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveTransitionHooks", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["resolveTransitionHooks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBlockTracking", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["setBlockTracking"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDevtoolsHook", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["setDevtoolsHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTransitionHooks", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["setTransitionHooks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ssrContextKey", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["ssrContextKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ssrUtils", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["ssrUtils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toHandlers", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["toHandlers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformVNodeArgs", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["transformVNodeArgs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSSRContext", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["useSSRContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTransitionState", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["useTransitionState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["version"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["watch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchEffect", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["watchEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCtx", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["withCtx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDirectives", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["withDirectives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScopeId", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["withScopeId"]; });

/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var svgNS = 'http://www.w3.org/2000/svg';
var doc = typeof document !== 'undefined' ? document : null;
var tempContainer;
var tempSVGContainer;
var nodeOps = {
  insert: function insert(child, parent, anchor) {
    parent.insertBefore(child, anchor || null);
  },
  remove: function remove(child) {
    var parent = child.parentNode;

    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: function createElement(tag, isSVG, is) {
    return isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
      is: is
    } : undefined);
  },
  createText: function createText(text) {
    return doc.createTextNode(text);
  },
  createComment: function createComment(text) {
    return doc.createComment(text);
  },
  setText: function setText(node, text) {
    node.nodeValue = text;
  },
  setElementText: function setElementText(el, text) {
    el.textContent = text;
  },
  parentNode: function parentNode(node) {
    return node.parentNode;
  },
  nextSibling: function nextSibling(node) {
    return node.nextSibling;
  },
  querySelector: function querySelector(selector) {
    return doc.querySelector(selector);
  },
  setScopeId: function setScopeId(el, id) {
    el.setAttribute(id, '');
  },
  cloneNode: function cloneNode(el) {
    return el.cloneNode(true);
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent: function insertStaticContent(content, parent, anchor, isSVG) {
    var temp = isSVG ? tempSVGContainer || (tempSVGContainer = doc.createElementNS(svgNS, 'svg')) : tempContainer || (tempContainer = doc.createElement('div'));
    temp.innerHTML = content;
    var first = temp.firstChild;
    var node = first;
    var last = node;

    while (node) {
      last = node;
      nodeOps.insert(node, parent, anchor);
      node = temp.firstChild;
    }

    return [first, last];
  }
}; // compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]

function patchClass(el, value, isSVG) {
  if (value == null) {
    value = '';
  }

  if (isSVG) {
    el.setAttribute('class', value);
  } else {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    var transitionClasses = el._vtc;

    if (transitionClasses) {
      value = (value ? [value].concat(_toConsumableArray(transitionClasses)) : _toConsumableArray(transitionClasses)).join(' ');
    }

    el.className = value;
  }
}

function patchStyle(el, prev, next) {
  var style = el.style;

  if (!next) {
    el.removeAttribute('style');
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(next)) {
    if (prev !== next) {
      style.cssText = next;
    }
  } else {
    for (var key in next) {
      setStyle(style, key, next[key]);
    }

    if (prev && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(prev)) {
      for (var _key in prev) {
        if (next[_key] == null) {
          setStyle(style, _key, '');
        }
      }
    }
  }
}

var importantRE = /\s*!important$/;

function setStyle(style, name, val) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(val)) {
    val.forEach(function (v) {
      return setStyle(style, name, v);
    });
  } else {
    if (name.startsWith('--')) {
      // custom property definition
      style.setProperty(name, val);
    } else {
      var prefixed = autoPrefix(style, name);

      if (importantRE.test(val)) {
        // !important
        style.setProperty(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hyphenate"])(prefixed), val.replace(importantRE, ''), 'important');
      } else {
        style[prefixed] = val;
      }
    }
  }
}

var prefixes = ['Webkit', 'Moz', 'ms'];
var prefixCache = {};

function autoPrefix(style, rawName) {
  var cached = prefixCache[rawName];

  if (cached) {
    return cached;
  }

  var name = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["camelize"])(rawName);

  if (name !== 'filter' && name in style) {
    return prefixCache[rawName] = name;
  }

  name = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(name);

  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + name;

    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }

  return rawName;
}

var xlinkNS = 'http://www.w3.org/1999/xlink';

function patchAttr(el, key, value, isSVG) {
  if (isSVG && key.startsWith('xlink:')) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    // note we are only checking boolean attributes that don't have a
    // corresponding dom prop of the same name here.
    var isBoolean = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isSpecialBooleanAttr"])(key);

    if (value == null || isBoolean && value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? '' : value);
    }
  }
} // __UNSAFE__
// functions. The user is responsible for using them with only trusted content.


function patchDOMProp(el, key, value, // the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === 'innerHTML' || key === 'textContent') {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }

    el[key] = value == null ? '' : value;
    return;
  }

  if (key === 'value' && el.tagName !== 'PROGRESS') {
    // store value as _value as well since
    // non-string values will be stringified.
    el._value = value;
    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }

    return;
  }

  if (value === '' || value == null) {
    var type = _typeof(el[key]);

    if (value === '' && type === 'boolean') {
      // e.g. <select multiple> compiles to { multiple: '' }
      el[key] = true;
      return;
    } else if (value == null && type === 'string') {
      // e.g. <div :id="null">
      el[key] = '';
      el.removeAttribute(key);
      return;
    } else if (type === 'number') {
      // e.g. <img :width="null">
      el[key] = 0;
      el.removeAttribute(key);
      return;
    }
  } // some properties perform value validation and throw


  try {
    el[key] = value;
  } catch (e) {
    if (true) {
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["warn"])("Failed setting prop \"".concat(key, "\" on <").concat(el.tagName.toLowerCase(), ">: ") + "value ".concat(value, " is invalid."), e);
    }
  }
} // Async edge case fix requires storing an event listener's attach timestamp.


var _getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.

if (typeof document !== 'undefined' && _getNow() > document.createEvent('Event').timeStamp) {
  // if the low-res timestamp which is bigger than the event timestamp
  // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
  // and we need to use the hi-res version for event listeners as well.
  _getNow = function _getNow() {
    return performance.now();
  };
} // To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.


var cachedNow = 0;
var p = Promise.resolve();

var reset = function reset() {
  cachedNow = 0;
};

var getNow = function getNow() {
  return cachedNow || (p.then(reset), cachedNow = _getNow());
};

function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}

function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}

function patchEvent(el, rawName, prevValue, nextValue) {
  var instance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  // vei = vue event invokers
  var invokers = el._vei || (el._vei = {});
  var existingInvoker = invokers[rawName];

  if (nextValue && existingInvoker) {
    // patch
    existingInvoker.value = nextValue;
  } else {
    var _parseName = parseName(rawName),
        _parseName2 = _slicedToArray(_parseName, 2),
        name = _parseName2[0],
        options = _parseName2[1];

    if (nextValue) {
      // add
      var invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      // remove
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = undefined;
    }
  }
}

var optionsModifierRE = /(?:Once|Passive|Capture)$/;

function parseName(name) {
  var options;

  if (optionsModifierRE.test(name)) {
    options = {};
    var m;

    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }

  return [name.slice(2).toLowerCase(), options];
}

function createInvoker(initialValue, instance) {
  var invoker = function invoker(e) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    var timeStamp = e.timeStamp || _getNow();

    if (timeStamp >= invoker.attached - 1) {
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["callWithAsyncErrorHandling"])(patchStopImmediatePropagation(e, invoker.value), instance, 5
      /* NATIVE_EVENT_HANDLER */
      , [e]);
    }
  };

  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}

function patchStopImmediatePropagation(e, value) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
    var originalStop = e.stopImmediatePropagation;

    e.stopImmediatePropagation = function () {
      originalStop.call(e);
      e._stopped = true;
    };

    return value.map(function (fn) {
      return function (e) {
        return !e._stopped && fn(e);
      };
    });
  } else {
    return value;
  }
}

var nativeOnRE = /^on[a-z]/;

var forcePatchProp = function forcePatchProp(_, key) {
  return key === 'value';
};

var patchProp = function patchProp(el, key, prevValue, nextValue) {
  var isSVG = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var prevChildren = arguments.length > 5 ? arguments[5] : undefined;
  var parentComponent = arguments.length > 6 ? arguments[6] : undefined;
  var parentSuspense = arguments.length > 7 ? arguments[7] : undefined;
  var unmountChildren = arguments.length > 8 ? arguments[8] : undefined;

  switch (key) {
    // special
    case 'class':
      patchClass(el, nextValue, isSVG);
      break;

    case 'style':
      patchStyle(el, prevValue, nextValue);
      break;

    default:
      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isOn"])(key)) {
        // ignore v-model listeners
        if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isModelListener"])(key)) {
          patchEvent(el, key, prevValue, nextValue, parentComponent);
        }
      } else if (shouldSetAsProp(el, key, nextValue, isSVG)) {
        patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
      } else {
        // special case for <input v-model type="checkbox"> with
        // :true-value & :false-value
        // store value as dom properties since non-string values will be
        // stringified.
        if (key === 'true-value') {
          el._trueValue = nextValue;
        } else if (key === 'false-value') {
          el._falseValue = nextValue;
        }

        patchAttr(el, key, nextValue, isSVG);
      }

      break;
  }
};

function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    // most keys must be set as attribute on svg elements to work
    // ...except innerHTML
    if (key === 'innerHTML') {
      return true;
    } // or native onclick with function values


    if (key in el && nativeOnRE.test(key) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value)) {
      return true;
    }

    return false;
  } // spellcheck and draggable are numerated attrs, however their
  // corresponding DOM properties are actually booleans - this leads to
  // setting it with a string "false" value leading it to be coerced to
  // `true`, so we need to always treat them as attributes.
  // Note that `contentEditable` doesn't have this problem: its DOM
  // property is also enumerated string values.


  if (key === 'spellcheck' || key === 'draggable') {
    return false;
  } // #1787 form as an attribute must be a string, while it accepts an Element as
  // a prop


  if (key === 'form' && typeof value === 'string') {
    return false;
  } // #1526 <input list> must be set as attribute


  if (key === 'list' && el.tagName === 'INPUT') {
    return false;
  } // native onclick with string value, must be set as attribute


  if (nativeOnRE.test(key) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(value)) {
    return false;
  }

  return key in el;
}

function useCssModule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$style';

  /* istanbul ignore else */
  {
    var instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])();

    if (!instance) {
       true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["warn"])("useCssModule must be called inside setup()");
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"];
    }

    var modules = instance.type.__cssModules;

    if (!modules) {
       true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["warn"])("Current instance does not have CSS modules injected.");
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"];
    }

    var mod = modules[name];

    if (!mod) {
       true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["warn"])("Current instance does not have CSS module named \"".concat(name, "\"."));
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__["EMPTY_OBJ"];
    }

    return mod;
  }
}
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */


function useCssVars(getter) {
  var instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])();
  /* istanbul ignore next */

  if (!instance) {
     true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["warn"])("useCssVars is called without current active component instance.");
    return;
  }

  var setVars = function setVars() {
    return setVarsOnVNode(instance.subTree, getter(instance.proxy));
  };

  Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onMounted"])(function () {
    return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["watchEffect"])(setVars, {
      flush: 'post'
    });
  });
  Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onUpdated"])(setVars);
}

function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
      var suspense = vnode.suspense;
      vnode = suspense.activeBranch;

      if (suspense.pendingBranch && !suspense.isHydrating) {
        suspense.effects.push(function () {
          setVarsOnVNode(suspense.activeBranch, vars);
        });
      }
    } // drill down HOCs until it's a non-component vnode


  while (vnode.component) {
    vnode = vnode.component.subTree;
  }

  if (vnode.shapeFlag & 1
  /* ELEMENT */
  && vnode.el) {
    var style = vnode.el.style;

    for (var key in vars) {
      style.setProperty("--".concat(key), vars[key]);
    }
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["Fragment"]) {
    vnode.children.forEach(function (c) {
      return setVarsOnVNode(c, vars);
    });
  }
}

var TRANSITION = 'transition';
var ANIMATION = 'animation'; // DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.

var Transition = function Transition(props, _ref) {
  var slots = _ref.slots;
  return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["h"])(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["BaseTransition"], resolveTransitionProps(props), slots);
};

Transition.displayName = 'Transition';
var DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    "default": true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
var TransitionPropsValidators = Transition.props = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["BaseTransition"].props, DOMTransitionPropsValidators);

function resolveTransitionProps(rawProps) {
  var _rawProps$name = rawProps.name,
      name = _rawProps$name === void 0 ? 'v' : _rawProps$name,
      type = rawProps.type,
      _rawProps$css = rawProps.css,
      css = _rawProps$css === void 0 ? true : _rawProps$css,
      duration = rawProps.duration,
      _rawProps$enterFromCl = rawProps.enterFromClass,
      enterFromClass = _rawProps$enterFromCl === void 0 ? "".concat(name, "-enter-from") : _rawProps$enterFromCl,
      _rawProps$enterActive = rawProps.enterActiveClass,
      enterActiveClass = _rawProps$enterActive === void 0 ? "".concat(name, "-enter-active") : _rawProps$enterActive,
      _rawProps$enterToClas = rawProps.enterToClass,
      enterToClass = _rawProps$enterToClas === void 0 ? "".concat(name, "-enter-to") : _rawProps$enterToClas,
      _rawProps$appearFromC = rawProps.appearFromClass,
      appearFromClass = _rawProps$appearFromC === void 0 ? enterFromClass : _rawProps$appearFromC,
      _rawProps$appearActiv = rawProps.appearActiveClass,
      appearActiveClass = _rawProps$appearActiv === void 0 ? enterActiveClass : _rawProps$appearActiv,
      _rawProps$appearToCla = rawProps.appearToClass,
      appearToClass = _rawProps$appearToCla === void 0 ? enterToClass : _rawProps$appearToCla,
      _rawProps$leaveFromCl = rawProps.leaveFromClass,
      leaveFromClass = _rawProps$leaveFromCl === void 0 ? "".concat(name, "-leave-from") : _rawProps$leaveFromCl,
      _rawProps$leaveActive = rawProps.leaveActiveClass,
      leaveActiveClass = _rawProps$leaveActive === void 0 ? "".concat(name, "-leave-active") : _rawProps$leaveActive,
      _rawProps$leaveToClas = rawProps.leaveToClass,
      leaveToClass = _rawProps$leaveToClas === void 0 ? "".concat(name, "-leave-to") : _rawProps$leaveToClas;
  var baseProps = {};

  for (var key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }

  if (!css) {
    return baseProps;
  }

  var durations = normalizeDuration(duration);
  var enterDuration = durations && durations[0];
  var leaveDuration = durations && durations[1];

  var _onBeforeEnter = baseProps.onBeforeEnter,
      onEnter = baseProps.onEnter,
      _onEnterCancelled = baseProps.onEnterCancelled,
      _onLeave = baseProps.onLeave,
      _onLeaveCancelled = baseProps.onLeaveCancelled,
      _baseProps$onBeforeAp = baseProps.onBeforeAppear,
      _onBeforeAppear = _baseProps$onBeforeAp === void 0 ? _onBeforeEnter : _baseProps$onBeforeAp,
      _baseProps$onAppear = baseProps.onAppear,
      onAppear = _baseProps$onAppear === void 0 ? onEnter : _baseProps$onAppear,
      _baseProps$onAppearCa = baseProps.onAppearCancelled,
      _onAppearCancelled = _baseProps$onAppearCa === void 0 ? _onEnterCancelled : _baseProps$onAppearCa;

  var finishEnter = function finishEnter(el, isAppear, done) {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };

  var finishLeave = function finishLeave(el, done) {
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };

  var makeEnterHook = function makeEnterHook(isAppear) {
    return function (el, done) {
      var hook = isAppear ? onAppear : onEnter;

      var resolve = function resolve() {
        return finishEnter(el, isAppear, done);
      };

      hook && hook(el, resolve);
      nextFrame(function () {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);

        if (!(hook && hook.length > 1)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };

  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])(baseProps, {
    onBeforeEnter: function onBeforeEnter(el) {
      _onBeforeEnter && _onBeforeEnter(el);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear: function onBeforeAppear(el) {
      _onBeforeAppear && _onBeforeAppear(el);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave: function onLeave(el, done) {
      var resolve = function resolve() {
        return finishLeave(el, done);
      };

      addTransitionClass(el, leaveFromClass); // force reflow so *-leave-from classes immediately take effect (#2593)

      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);

        if (!(_onLeave && _onLeave.length > 1)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      _onLeave && _onLeave(el, resolve);
    },
    onEnterCancelled: function onEnterCancelled(el) {
      finishEnter(el, false);
      _onEnterCancelled && _onEnterCancelled(el);
    },
    onAppearCancelled: function onAppearCancelled(el) {
      finishEnter(el, true);
      _onAppearCancelled && _onAppearCancelled(el);
    },
    onLeaveCancelled: function onLeaveCancelled(el) {
      finishLeave(el);
      _onLeaveCancelled && _onLeaveCancelled(el);
    }
  });
}

function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    var n = NumberOf(duration);
    return [n, n];
  }
}

function NumberOf(val) {
  var res = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(val);
  if (true) validateDuration(res);
  return res;
}

function validateDuration(val) {
  if (typeof val !== 'number') {
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["warn"])("<transition> explicit duration is not a valid number - " + "got ".concat(JSON.stringify(val), "."));
  } else if (isNaN(val)) {
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["warn"])("<transition> explicit duration is NaN - " + 'the duration expression might be incorrect.');
  }
}

function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.add(c);
  });
  (el._vtc || (el._vtc = new Set())).add(cls);
}

function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.remove(c);
  });
  var _vtc = el._vtc;

  if (_vtc) {
    _vtc["delete"](cls);

    if (!_vtc.size) {
      el._vtc = undefined;
    }
  }
}

function nextFrame(cb) {
  requestAnimationFrame(function () {
    requestAnimationFrame(cb);
  });
}

var endId = 0;

function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  var id = el._endId = ++endId;

  var resolveIfNotStale = function resolveIfNotStale() {
    if (id === el._endId) {
      resolve();
    }
  };

  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }

  var _getTransitionInfo = getTransitionInfo(el, expectedType),
      type = _getTransitionInfo.type,
      timeout = _getTransitionInfo.timeout,
      propCount = _getTransitionInfo.propCount;

  if (!type) {
    return resolve();
  }

  var endEvent = type + 'end';
  var ended = 0;

  var end = function end() {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };

  var onEnd = function onEnd(e) {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var getStyleProperties = function getStyleProperties(key) {
    return (styles[key] || '').split(', ');
  };

  var transitionDelays = getStyleProperties(TRANSITION + 'Delay');
  var transitionDurations = getStyleProperties(TRANSITION + 'Duration');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = getStyleProperties(ANIMATION + 'Delay');
  var animationDurations = getStyleProperties(ANIMATION + 'Duration');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type = null;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(Math, _toConsumableArray(durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  })));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
} // synchronously force layout to put elements into a certain state


function forceReflow() {
  return document.body.offsetHeight;
}

var positionMap = new WeakMap();
var newPositionMap = new WeakMap();
var TransitionGroupImpl = {
  name: 'TransitionGroup',
  props: /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots;
    var instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])();
    var state = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["useTransitionState"])();
    var prevChildren;
    var children;
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onUpdated"])(function () {
      // children is guaranteed to exist after initial render
      if (!prevChildren.length) {
        return;
      }

      var moveClass = props.moveClass || "".concat(props.name || 'v', "-move");

      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      } // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.


      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      var movedChildren = prevChildren.filter(applyTranslation); // force reflow to put everything in position

      forceReflow();
      movedChildren.forEach(function (c) {
        var el = c.el;
        var style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = '';

        var cb = el._moveCb = function (e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener('transitionend', cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };

        el.addEventListener('transitionend', cb);
      });
    });
    return function () {
      var rawProps = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["toRaw"])(props);
      var cssTransitionProps = resolveTransitionProps(rawProps);
      var tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["Fragment"];
      prevChildren = children;
      children = slots["default"] ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["getTransitionRawChildren"])(slots["default"]()) : [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (child.key != null) {
          Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["setTransitionHooks"])(child, Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["resolveTransitionHooks"])(child, cssTransitionProps, state, instance));
        } else if (true) {
          Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["warn"])("<TransitionGroup> children must be keyed.");
        }
      }

      if (prevChildren) {
        for (var _i2 = 0; _i2 < prevChildren.length; _i2++) {
          var _child = prevChildren[_i2];
          Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["setTransitionHooks"])(_child, Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["resolveTransitionHooks"])(_child, cssTransitionProps, state, instance));
          positionMap.set(_child, _child.el.getBoundingClientRect());
        }
      }

      return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(tag, null, children);
    };
  }
};
var TransitionGroup = TransitionGroupImpl;

function callPendingCbs(c) {
  var el = c.el;

  if (el._moveCb) {
    el._moveCb();
  }

  if (el._enterCb) {
    el._enterCb();
  }
}

function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}

function applyTranslation(c) {
  var oldPos = positionMap.get(c);
  var newPos = newPositionMap.get(c);
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    var s = c.el.style;
    s.transform = s.webkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
    s.transitionDuration = '0s';
    return c;
  }
}

function hasCSSTransform(el, root, moveClass) {
  // Detect whether an element with the move class applied has
  // CSS transitions. Since the element may be inside an entering
  // transition at this very moment, we make a clone of it and remove
  // all other transition classes applied to ensure only the move class
  // is applied.
  var clone = el.cloneNode();

  if (el._vtc) {
    el._vtc.forEach(function (cls) {
      cls.split(/\s+/).forEach(function (c) {
        return c && clone.classList.remove(c);
      });
    });
  }

  moveClass.split(/\s+/).forEach(function (c) {
    return c && clone.classList.add(c);
  });
  clone.style.display = 'none';
  var container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);

  var _getTransitionInfo2 = getTransitionInfo(clone),
      hasTransform = _getTransitionInfo2.hasTransform;

  container.removeChild(clone);
  return hasTransform;
}

var getModelAssigner = function getModelAssigner(vnode) {
  var fn = vnode.props['onUpdate:modelValue'];
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(fn) ? function (value) {
    return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["invokeArrayFns"])(fn, value);
  } : fn;
};

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  var target = e.target;

  if (target.composing) {
    target.composing = false;
    trigger(target, 'input');
  }
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
} // We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.


var vModelText = {
  created: function created(el, _ref3, vnode) {
    var _ref3$modifiers = _ref3.modifiers,
        lazy = _ref3$modifiers.lazy,
        trim = _ref3$modifiers.trim,
        number = _ref3$modifiers.number;
    el._assign = getModelAssigner(vnode);
    var castToNumber = number || el.type === 'number';
    addEventListener(el, lazy ? 'change' : 'input', function (e) {
      if (e.target.composing) return;
      var domValue = el.value;

      if (trim) {
        domValue = domValue.trim();
      } else if (castToNumber) {
        domValue = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(domValue);
      }

      el._assign(domValue);
    });

    if (trim) {
      addEventListener(el, 'change', function () {
        el.value = el.value.trim();
      });
    }

    if (!lazy) {
      addEventListener(el, 'compositionstart', onCompositionStart);
      addEventListener(el, 'compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
      // switching focus before confirming composition choice
      // this also fixes the issue where some browsers e.g. iOS Chrome
      // fires "change" instead of "input" on autocomplete.

      addEventListener(el, 'change', onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted: function mounted(el, _ref4) {
    var value = _ref4.value;
    el.value = value == null ? '' : value;
  },
  beforeUpdate: function beforeUpdate(el, _ref5, vnode) {
    var value = _ref5.value,
        _ref5$modifiers = _ref5.modifiers,
        trim = _ref5$modifiers.trim,
        number = _ref5$modifiers.number;
    el._assign = getModelAssigner(vnode); // avoid clearing unresolved text. #2302

    if (el.composing) return;

    if (document.activeElement === el) {
      if (trim && el.value.trim() === value) {
        return;
      }

      if ((number || el.type === 'number') && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(el.value) === value) {
        return;
      }
    }

    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }
  }
};
var vModelCheckbox = {
  created: function created(el, _, vnode) {
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      var modelValue = el._modelValue;
      var elementValue = getValue(el);
      var checked = el.checked;
      var assign = el._assign;

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(modelValue)) {
        var index = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["looseIndexOf"])(modelValue, elementValue);
        var found = index !== -1;

        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          var filtered = _toConsumableArray(modelValue);

          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isSet"])(modelValue)) {
        var cloned = new Set(modelValue);

        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned["delete"](elementValue);
        }

        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate: function beforeUpdate(el, binding, vnode) {
    el._assign = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};

function setChecked(el, _ref6, vnode) {
  var value = _ref6.value,
      oldValue = _ref6.oldValue;
  el._modelValue = value;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
    el.checked = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["looseIndexOf"])(value, vnode.props.value) > -1;
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isSet"])(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["looseEqual"])(value, getCheckboxValue(el, true));
  }
}

var vModelRadio = {
  created: function created(el, _ref7, vnode) {
    var value = _ref7.value;
    el.checked = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["looseEqual"])(value, vnode.props.value);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      el._assign(getValue(el));
    });
  },
  beforeUpdate: function beforeUpdate(el, _ref8, vnode) {
    var value = _ref8.value,
        oldValue = _ref8.oldValue;
    el._assign = getModelAssigner(vnode);

    if (value !== oldValue) {
      el.checked = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["looseEqual"])(value, vnode.props.value);
    }
  }
};
var vModelSelect = {
  created: function created(el, _ref9, vnode) {
    var value = _ref9.value,
        number = _ref9.modifiers.number;
    var isSetModel = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isSet"])(value);
    addEventListener(el, 'change', function () {
      var selectedVal = Array.prototype.filter.call(el.options, function (o) {
        return o.selected;
      }).map(function (o) {
        return number ? Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(getValue(o)) : getValue(o);
      });

      el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
    });
    el._assign = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted: function mounted(el, _ref10) {
    var value = _ref10.value;
    setSelected(el, value);
  },
  beforeUpdate: function beforeUpdate(el, _binding, vnode) {
    el._assign = getModelAssigner(vnode);
  },
  updated: function updated(el, _ref11) {
    var value = _ref11.value;
    setSelected(el, value);
  }
};

function setSelected(el, value) {
  var isMultiple = el.multiple;

  if (isMultiple && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value) && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isSet"])(value)) {
     true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["warn"])("<select multiple v-model> expects an Array or Set value for its binding, " + "but got ".concat(Object.prototype.toString.call(value).slice(8, -1), "."));
    return;
  }

  for (var i = 0, l = el.options.length; i < l; i++) {
    var option = el.options[i];
    var optionValue = getValue(option);

    if (isMultiple) {
      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
        option.selected = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["looseIndexOf"])(value, optionValue) > -1;
      } else {
        option.selected = value.has(optionValue);
      }
    } else {
      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["looseEqual"])(getValue(option), value)) {
        el.selectedIndex = i;
        return;
      }
    }
  }

  if (!isMultiple) {
    el.selectedIndex = -1;
  }
} // retrieve raw value set via :value bindings


function getValue(el) {
  return '_value' in el ? el._value : el.value;
} // retrieve raw value for true-value and false-value set via :true-value or :false-value bindings


function getCheckboxValue(el, checked) {
  var key = checked ? '_trueValue' : '_falseValue';
  return key in el ? el[key] : checked;
}

var vModelDynamic = {
  created: function created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'created');
  },
  mounted: function mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'mounted');
  },
  beforeUpdate: function beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
  },
  updated: function updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'updated');
  }
};

function callModelHook(el, binding, vnode, prevVNode, hook) {
  var modelToUse;

  switch (el.tagName) {
    case 'SELECT':
      modelToUse = vModelSelect;
      break;

    case 'TEXTAREA':
      modelToUse = vModelText;
      break;

    default:
      switch (vnode.props && vnode.props.type) {
        case 'checkbox':
          modelToUse = vModelCheckbox;
          break;

        case 'radio':
          modelToUse = vModelRadio;
          break;

        default:
          modelToUse = vModelText;
      }

  }

  var fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}

var systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
var modifierGuards = {
  stop: function stop(e) {
    return e.stopPropagation();
  },
  prevent: function prevent(e) {
    return e.preventDefault();
  },
  self: function self(e) {
    return e.target !== e.currentTarget;
  },
  ctrl: function ctrl(e) {
    return !e.ctrlKey;
  },
  shift: function shift(e) {
    return !e.shiftKey;
  },
  alt: function alt(e) {
    return !e.altKey;
  },
  meta: function meta(e) {
    return !e.metaKey;
  },
  left: function left(e) {
    return 'button' in e && e.button !== 0;
  },
  middle: function middle(e) {
    return 'button' in e && e.button !== 1;
  },
  right: function right(e) {
    return 'button' in e && e.button !== 2;
  },
  exact: function exact(e, modifiers) {
    return systemModifiers.some(function (m) {
      return e["".concat(m, "Key")] && !modifiers.includes(m);
    });
  }
};
/**
 * @private
 */

var withModifiers = function withModifiers(fn, modifiers) {
  return function (event) {
    for (var i = 0; i < modifiers.length; i++) {
      var guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fn.apply(void 0, [event].concat(args));
  };
}; // Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.


var keyNames = {
  esc: 'escape',
  space: ' ',
  up: 'arrow-up',
  left: 'arrow-left',
  right: 'arrow-right',
  down: 'arrow-down',
  "delete": 'backspace'
};
/**
 * @private
 */

var withKeys = function withKeys(fn, modifiers) {
  return function (event) {
    if (!('key' in event)) return;
    var eventKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["hyphenate"])(event.key);

    if ( // None of the provided key modifiers match the current event key
    !modifiers.some(function (k) {
      return k === eventKey || keyNames[k] === eventKey;
    })) {
      return;
    }

    return fn(event);
  };
};

var vShow = {
  beforeMount: function beforeMount(el, _ref12, _ref13) {
    var value = _ref12.value;
    var transition = _ref13.transition;
    el._vod = el.style.display === 'none' ? '' : el.style.display;

    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted: function mounted(el, _ref14, _ref15) {
    var value = _ref14.value;
    var transition = _ref15.transition;

    if (transition && value) {
      transition.enter(el);
    }
  },
  updated: function updated(el, _ref16, _ref17) {
    var value = _ref16.value,
        oldValue = _ref16.oldValue;
    var transition = _ref17.transition;

    if (transition && value !== oldValue) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, function () {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount: function beforeUnmount(el, _ref18) {
    var value = _ref18.value;
    setDisplay(el, value);
  }
};

function setDisplay(el, value) {
  el.style.display = value ? el._vod : 'none';
}

var rendererOptions = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  patchProp: patchProp,
  forcePatchProp: forcePatchProp
}, nodeOps); // lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.

var renderer;
var enabledHydration = false;

function ensureRenderer() {
  return renderer || (renderer = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createRenderer"])(rendererOptions));
}

function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["createHydrationRenderer"])(rendererOptions);
  enabledHydration = true;
  return renderer;
} // use explicit type casts here to avoid import() calls in rolled-up d.ts


var render = function render() {
  var _ensureRenderer;

  (_ensureRenderer = ensureRenderer()).render.apply(_ensureRenderer, arguments);
};

var hydrate = function hydrate() {
  var _ensureHydrationRende;

  (_ensureHydrationRende = ensureHydrationRenderer()).hydrate.apply(_ensureHydrationRende, arguments);
};

var createApp = function createApp() {
  var _ensureRenderer2;

  var app = (_ensureRenderer2 = ensureRenderer()).createApp.apply(_ensureRenderer2, arguments);

  if (true) {
    injectNativeTagCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);
    if (!container) return;
    var component = app._component;

    if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    } // clear content before mounting


    container.innerHTML = '';
    var proxy = mount(container);

    if (container instanceof Element) {
      container.removeAttribute('v-cloak');
      container.setAttribute('data-v-app', '');
    }

    return proxy;
  };

  return app;
};

var createSSRApp = function createSSRApp() {
  var _ensureHydrationRende2;

  var app = (_ensureHydrationRende2 = ensureHydrationRenderer()).createApp.apply(_ensureHydrationRende2, arguments);

  if (true) {
    injectNativeTagCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);

    if (container) {
      return mount(container, true);
    }
  };

  return app;
};

function injectNativeTagCheck(app) {
  // Inject `isNativeTag`
  // this is used for component name validation (dev only)
  Object.defineProperty(app.config, 'isNativeTag', {
    value: function value(tag) {
      return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isHTMLTag"])(tag) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isSVGTag"])(tag);
    },
    writable: false
  });
}

function normalizeContainer(container) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(container)) {
    var res = document.querySelector(container);

    if ( true && !res) {
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["warn"])("Failed to mount app: mount target selector \"".concat(container, "\" returned null."));
    }

    return res;
  }

  if ( true && container instanceof ShadowRoot && container.mode === 'closed') {
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["warn"])("mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs");
  }

  return container;
}



/***/ }),

/***/ "./node_modules/@vue/shared/dist/shared.esm-bundler.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vue/shared/dist/shared.esm-bundler.js ***!
  \*************************************************************/
/*! exports provided: EMPTY_ARR, EMPTY_OBJ, NO, NOOP, PatchFlagNames, babelParserDefaultPlugins, camelize, capitalize, def, escapeHtml, escapeHtmlComment, extend, generateCodeFrame, getGlobalThis, hasChanged, hasOwn, hyphenate, invokeArrayFns, isArray, isBooleanAttr, isDate, isFunction, isGloballyWhitelisted, isHTMLTag, isIntegerKey, isKnownAttr, isMap, isModelListener, isNoUnitNumericStyleProp, isObject, isOn, isPlainObject, isPromise, isReservedProp, isSSRSafeAttrName, isSVGTag, isSet, isSpecialBooleanAttr, isString, isSymbol, isVoidTag, looseEqual, looseIndexOf, makeMap, normalizeClass, normalizeStyle, objectToString, parseStringStyle, propsToAttrMap, remove, slotFlagsText, stringifyStyle, toDisplayString, toHandlerKey, toNumber, toRawType, toTypeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_ARR", function() { return EMPTY_ARR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_OBJ", function() { return EMPTY_OBJ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO", function() { return NO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOOP", function() { return NOOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatchFlagNames", function() { return PatchFlagNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "babelParserDefaultPlugins", function() { return babelParserDefaultPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "def", function() { return def; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHtml", function() { return escapeHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHtmlComment", function() { return escapeHtmlComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCodeFrame", function() { return generateCodeFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalThis", function() { return getGlobalThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasChanged", function() { return hasChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hyphenate", function() { return hyphenate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invokeArrayFns", function() { return invokeArrayFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBooleanAttr", function() { return isBooleanAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGloballyWhitelisted", function() { return isGloballyWhitelisted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLTag", function() { return isHTMLTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIntegerKey", function() { return isIntegerKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKnownAttr", function() { return isKnownAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return isMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModelListener", function() { return isModelListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNoUnitNumericStyleProp", function() { return isNoUnitNumericStyleProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOn", function() { return isOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReservedProp", function() { return isReservedProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSSRSafeAttrName", function() { return isSSRSafeAttrName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSVGTag", function() { return isSVGTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return isSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpecialBooleanAttr", function() { return isSpecialBooleanAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVoidTag", function() { return isVoidTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "looseEqual", function() { return looseEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "looseIndexOf", function() { return looseIndexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMap", function() { return makeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeClass", function() { return normalizeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeStyle", function() { return normalizeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToString", function() { return objectToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringStyle", function() { return parseStringStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propsToAttrMap", function() { return propsToAttrMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slotFlagsText", function() { return slotFlagsText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyStyle", function() { return stringifyStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDisplayString", function() { return toDisplayString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHandlerKey", function() { return toHandlerKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRawType", function() { return toRawType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTypeString", function() { return toTypeString; });
var _PatchFlagNames, _slotFlagsText;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}
/**
 * dev only flag -> name mapping
 */


var PatchFlagNames = (_PatchFlagNames = {}, _defineProperty(_PatchFlagNames, 1
/* TEXT */
, "TEXT"), _defineProperty(_PatchFlagNames, 2
/* CLASS */
, "CLASS"), _defineProperty(_PatchFlagNames, 4
/* STYLE */
, "STYLE"), _defineProperty(_PatchFlagNames, 8
/* PROPS */
, "PROPS"), _defineProperty(_PatchFlagNames, 16
/* FULL_PROPS */
, "FULL_PROPS"), _defineProperty(_PatchFlagNames, 32
/* HYDRATE_EVENTS */
, "HYDRATE_EVENTS"), _defineProperty(_PatchFlagNames, 64
/* STABLE_FRAGMENT */
, "STABLE_FRAGMENT"), _defineProperty(_PatchFlagNames, 128
/* KEYED_FRAGMENT */
, "KEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 256
/* UNKEYED_FRAGMENT */
, "UNKEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 512
/* NEED_PATCH */
, "NEED_PATCH"), _defineProperty(_PatchFlagNames, 1024
/* DYNAMIC_SLOTS */
, "DYNAMIC_SLOTS"), _defineProperty(_PatchFlagNames, 2048
/* DEV_ROOT_FRAGMENT */
, "DEV_ROOT_FRAGMENT"), _defineProperty(_PatchFlagNames, -1
/* HOISTED */
, "HOISTED"), _defineProperty(_PatchFlagNames, -2
/* BAIL */
, "BAIL"), _PatchFlagNames);
/**
 * Dev only
 */

var slotFlagsText = (_slotFlagsText = {}, _defineProperty(_slotFlagsText, 1
/* STABLE */
, 'STABLE'), _defineProperty(_slotFlagsText, 2
/* DYNAMIC */
, 'DYNAMIC'), _defineProperty(_slotFlagsText, 3
/* FORWARDED */
, 'FORWARDED'), _slotFlagsText);
var GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' + 'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' + 'Object,Boolean,String,RegExp,Map,Set,JSON,Intl';
var isGloballyWhitelisted = /*#__PURE__*/makeMap(GLOBALS_WHITE_LISTED);
var range = 2;

function generateCodeFrame(source) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];

  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;

    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        var line = j + 1;
        res.push("".concat(line).concat(' '.repeat(Math.max(3 - String(line).length, 0)), "|  ").concat(lines[j]));
        var lineLength = lines[j].length;

        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push("   |  " + ' '.repeat(pad) + '^'.repeat(length));
        } else if (j > i) {
          if (end > count) {
            var _length = Math.max(Math.min(end - count, lineLength), 1);

            res.push("   |  " + '^'.repeat(_length));
          }

          count += lineLength + 1;
        }
      }

      break;
    }
  }

  return res.join('\n');
}
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */


var specialBooleanAttrs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
var isSpecialBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */

var isBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden," + "loop,open,required,reversed,scoped,seamless," + "checked,muted,multiple,selected");
var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
var attrValidationCache = {};

function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }

  var isUnsafe = unsafeAttrCharRE.test(name);

  if (isUnsafe) {
    console.error("unsafe attribute name: ".concat(name));
  }

  return attrValidationCache[name] = !isUnsafe;
}

var propsToAttrMap = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */

var isNoUnitNumericStyleProp = /*#__PURE__*/makeMap("animation-iteration-count,border-image-outset,border-image-slice," + "border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count," + "columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order," + "grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column," + "grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp," + "line-height,opacity,order,orphans,tab-size,widows,z-index,zoom," + // SVG
"fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset," + "stroke-miterlimit,stroke-opacity,stroke-width");
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */

var isKnownAttr = /*#__PURE__*/makeMap("accept,accept-charset,accesskey,action,align,allow,alt,async," + "autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor," + "border,buffered,capture,challenge,charset,checked,cite,class,code," + "codebase,color,cols,colspan,content,contenteditable,contextmenu,controls," + "coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname," + "disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form," + "formaction,formenctype,formmethod,formnovalidate,formtarget,headers," + "height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity," + "ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low," + "manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate," + "open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly," + "referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped," + "selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset," + "start,step,style,summary,tabindex,target,title,translate,type,usemap," + "value,width,wrap");

function normalizeStyle(value) {
  if (isArray(value)) {
    var res = {};

    for (var i = 0; i < value.length; i++) {
      var item = value[i];
      var normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);

      if (normalized) {
        for (var key in normalized) {
          res[key] = normalized[key];
        }
      }
    }

    return res;
  } else if (isObject(value)) {
    return value;
  }
}

var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:(.+)/;

function parseStringStyle(cssText) {
  var ret = {};
  cssText.split(listDelimiterRE).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}

function stringifyStyle(styles) {
  var ret = '';

  if (!styles) {
    return ret;
  }

  for (var key in styles) {
    var value = styles[key];
    var normalizedKey = key.startsWith("--") ? key : hyphenate(key);

    if (isString(value) || typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey)) {
      // only render valid values
      ret += "".concat(normalizedKey, ":").concat(value, ";");
    }
  }

  return ret;
}

function normalizeClass(value) {
  var res = '';

  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      res += normalizeClass(value[i]) + ' ';
    }
  } else if (isObject(value)) {
    for (var name in value) {
      if (value[name]) {
        res += name + ' ';
      }
    }
  }

  return res.trim();
} // These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element


var HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' + 'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' + 'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' + 'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' + 'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' + 'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' + 'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' + 'option,output,progress,select,textarea,details,dialog,menu,' + 'summary,template,blockquote,iframe,tfoot'; // https://developer.mozilla.org/en-US/docs/Web/SVG/Element

var SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' + 'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' + 'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' + 'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' + 'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' + 'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' + 'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' + 'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' + 'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' + 'text,textPath,title,tspan,unknown,use,view';
var VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
var isHTMLTag = /*#__PURE__*/makeMap(HTML_TAGS);
var isSVGTag = /*#__PURE__*/makeMap(SVG_TAGS);
var isVoidTag = /*#__PURE__*/makeMap(VOID_TAGS);
var escapeRE = /["'&<>]/;

function escapeHtml(string) {
  var str = '' + string;
  var match = escapeRE.exec(str);

  if (!match) {
    return str;
  }

  var html = '';
  var escaped;
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escaped = '&quot;';
        break;

      case 38:
        // &
        escaped = '&amp;';
        break;

      case 39:
        // '
        escaped = '&#39;';
        break;

      case 60:
        // <
        escaped = '&lt;';
        break;

      case 62:
        // >
        escaped = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escaped;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // https://www.w3.org/TR/html52/syntax.html#comments


var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;

function escapeHtmlComment(src) {
  return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
}

function looseEqual(a, b) {
  if (a === b) return true;
  var aValidType = isDate(a);
  var bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isArray(a);
  bValidType = isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = Object.keys(a).length;
    var bKeysCount = Object.keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = a.hasOwnProperty(key);
      var bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
}

function looseIndexOf(arr, val) {
  return arr.findIndex(function (item) {
    return looseEqual(item, val);
  });
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */


var toDisplayString = function toDisplayString(val) {
  return val == null ? '' : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
};

var replacer = function replacer(_key, val) {
  if (isMap(val)) {
    return _defineProperty({}, "Map(".concat(val.size, ")"), _toConsumableArray(val.entries()).reduce(function (entries, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      entries["".concat(key, " =>")] = val;
      return entries;
    }, {}));
  } else if (isSet(val)) {
    return _defineProperty({}, "Set(".concat(val.size, ")"), _toConsumableArray(val.values()));
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }

  return val;
};
/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */


var babelParserDefaultPlugins = ['bigInt', 'optionalChaining', 'nullishCoalescingOperator'];
var EMPTY_OBJ =  true ? Object.freeze({}) : undefined;
var EMPTY_ARR =  true ? Object.freeze([]) : undefined;

var NOOP = function NOOP() {};
/**
 * Always return false.
 */


var NO = function NO() {
  return false;
};

var onRE = /^on[^a-z]/;

var isOn = function isOn(key) {
  return onRE.test(key);
};

var isModelListener = function isModelListener(key) {
  return key.startsWith('onUpdate:');
};

var extend = Object.assign;

var remove = function remove(arr, el) {
  var i = arr.indexOf(el);

  if (i > -1) {
    arr.splice(i, 1);
  }
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};

var isArray = Array.isArray;

var isMap = function isMap(val) {
  return toTypeString(val) === '[object Map]';
};

var isSet = function isSet(val) {
  return toTypeString(val) === '[object Set]';
};

var isDate = function isDate(val) {
  return val instanceof Date;
};

var isFunction = function isFunction(val) {
  return typeof val === 'function';
};

var isString = function isString(val) {
  return typeof val === 'string';
};

var isSymbol = function isSymbol(val) {
  return _typeof(val) === 'symbol';
};

var isObject = function isObject(val) {
  return val !== null && _typeof(val) === 'object';
};

var isPromise = function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val["catch"]);
};

var objectToString = Object.prototype.toString;

var toTypeString = function toTypeString(value) {
  return objectToString.call(value);
};

var toRawType = function toRawType(value) {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};

var isPlainObject = function isPlainObject(val) {
  return toTypeString(val) === '[object Object]';
};

var isIntegerKey = function isIntegerKey(key) {
  return isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;
};

var isReservedProp = /*#__PURE__*/makeMap( // the leading comma is intentional so empty string "" is also included
',key,ref,' + 'onVnodeBeforeMount,onVnodeMounted,' + 'onVnodeBeforeUpdate,onVnodeUpdated,' + 'onVnodeBeforeUnmount,onVnodeUnmounted');

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
/**
 * @private
 */

var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */

var hyphenate = cacheStringFunction(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * @private
 */

var capitalize = cacheStringFunction(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * @private
 */

var toHandlerKey = cacheStringFunction(function (str) {
  return str ? "on".concat(capitalize(str)) : "";
}); // compare whether a value has changed, accounting for NaN.

var hasChanged = function hasChanged(value, oldValue) {
  return value !== oldValue && (value === value || oldValue === oldValue);
};

var invokeArrayFns = function invokeArrayFns(fns, arg) {
  for (var i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};

var def = function def(obj, key, value) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value: value
  });
};

var toNumber = function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
};

var _globalThis;

var getGlobalThis = function getGlobalThis() {
  return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) {
          n = t[e], r[e] = n;
        }

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) {
          r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        }

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) {
            u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
              type: i(u),
              tracked: o(u),
              elements: []
            }, r.elements.push(u));
          }
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) {
              e = r[t].tracked, e && n.push(t);
            }

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) {
            i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          }

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) {
            o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          }

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) {
            n = i[o].elements, e(n[0], t) && (r = n[0]);
          }

          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) {
            e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          }

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) {
            s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          }

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function n(t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) {
          o.call(e, n) && (t[n] = e[n]);
        }

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          }

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.removeChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) {
            i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          }

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) {
            a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          }

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) {
            n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          }

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
        function n() {
          this.constructor = _t6;
        }

        for (var o in e) {
          r.call(e, o) && (_t6[o] = e[o]);
        }

        return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) {
            o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          }

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) {
            e = n[t], o.push(delete this.snapshots[e]);
          }

          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) {
          if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
        }
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/vue/dist/vue.esm-bundler.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.esm-bundler.js ***!
  \**************************************************/
/*! exports provided: customRef, isProxy, isReactive, isReadonly, isRef, markRaw, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, camelize, capitalize, toDisplayString, toHandlerKey, BaseTransition, Comment, Fragment, KeepAlive, Static, Suspense, Teleport, Text, callWithAsyncErrorHandling, callWithErrorHandling, cloneVNode, computed, createBlock, createCommentVNode, createHydrationRenderer, createRenderer, createSlots, createStaticVNode, createTextVNode, createVNode, defineAsyncComponent, defineComponent, defineEmit, defineProps, devtools, getCurrentInstance, getTransitionRawChildren, h, handleError, initCustomFormatter, inject, isVNode, mergeProps, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated, openBlock, popScopeId, provide, pushScopeId, queuePostFlushCb, registerRuntimeCompiler, renderList, renderSlot, resolveComponent, resolveDirective, resolveDynamicComponent, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, ssrContextKey, ssrUtils, toHandlers, transformVNodeArgs, useContext, useSSRContext, useTransitionState, version, warn, watch, watchEffect, withCtx, withDirectives, withScopeId, Transition, TransitionGroup, createApp, createSSRApp, hydrate, render, useCssModule, useCssVars, vModelCheckbox, vModelDynamic, vModelRadio, vModelSelect, vModelText, vShow, withKeys, withModifiers, compile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compileToFunction; });
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customRef", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["customRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isProxy", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["isProxy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReactive", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["isReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReadonly", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["isReadonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRef", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["isRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markRaw", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["markRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "proxyRefs", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["proxyRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactive", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["reactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readonly", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["readonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowReactive", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["shallowReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowReadonly", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["shallowReadonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowRef", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["shallowRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRaw", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["toRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRef", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["toRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRefs", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["toRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "triggerRef", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["triggerRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unref", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["unref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["camelize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["capitalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDisplayString", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toHandlerKey", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["toHandlerKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseTransition", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["BaseTransition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["Comment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeepAlive", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["KeepAlive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Static", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["Static"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["Suspense"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Teleport", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["Teleport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callWithAsyncErrorHandling", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["callWithAsyncErrorHandling"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callWithErrorHandling", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["callWithErrorHandling"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneVNode", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["cloneVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["computed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBlock", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["createBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCommentVNode", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHydrationRenderer", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["createHydrationRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRenderer", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["createRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSlots", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["createSlots"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStaticVNode", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["createStaticVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextVNode", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVNode", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["createVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineAsyncComponent", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["defineAsyncComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineComponent", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["defineComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineEmit", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["defineEmit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineProps", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["defineProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "devtools", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["devtools"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTransitionRawChildren", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["getTransitionRawChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["handleError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initCustomFormatter", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["initCustomFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["inject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVNode", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["isVNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["mergeProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["nextTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onActivated", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["onActivated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeMount", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["onBeforeMount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeUnmount", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["onBeforeUnmount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeUpdate", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["onBeforeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeactivated", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["onDeactivated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorCaptured", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["onErrorCaptured"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMounted", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["onMounted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onRenderTracked", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["onRenderTracked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onRenderTriggered", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["onRenderTriggered"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUnmounted", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUpdated", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["onUpdated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openBlock", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["openBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popScopeId", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["popScopeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "provide", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["provide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushScopeId", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queuePostFlushCb", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["queuePostFlushCb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerRuntimeCompiler", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["registerRuntimeCompiler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderList", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["renderList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderSlot", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["renderSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveComponent", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveDirective", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["resolveDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveDynamicComponent", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["resolveDynamicComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveTransitionHooks", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["resolveTransitionHooks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBlockTracking", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["setBlockTracking"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDevtoolsHook", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["setDevtoolsHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTransitionHooks", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["setTransitionHooks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ssrContextKey", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["ssrContextKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ssrUtils", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["ssrUtils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toHandlers", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["toHandlers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformVNodeArgs", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["transformVNodeArgs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSSRContext", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["useSSRContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTransitionState", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["useTransitionState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["version"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["watch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchEffect", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["watchEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCtx", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["withCtx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDirectives", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["withDirectives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScopeId", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["withScopeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["Transition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["TransitionGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["createApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSSRApp", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["createSSRApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["hydrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCssModule", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["useCssModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCssVars", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["useCssVars"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vModelCheckbox", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["vModelCheckbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vModelDynamic", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["vModelDynamic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vModelRadio", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["vModelRadio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vModelSelect", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["vModelSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vModelText", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["vModelText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vShow", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["vShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withKeys", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["withKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withModifiers", function() { return _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["withModifiers"]; });

/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_compiler_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/compiler-dom */ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js");






function initDev() {
  var target = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["getGlobalThis"])();
  target.__VUE__ = true;
  Object(_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["setDevtoolsHook"])(target.__VUE_DEVTOOLS_GLOBAL_HOOK__);
  {
    Object(_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["initCustomFormatter"])();
  }
} // This entry is the "full-build" that includes both the runtime


 true && initDev();
var compileCache = Object.create(null);

function compileToFunction(template, options) {
  if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(template)) {
    if (template.nodeType) {
      template = template.innerHTML;
    } else {
       true && Object(_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["warn"])("invalid template option: ", template);
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
    }
  }

  var key = template;
  var cached = compileCache[key];

  if (cached) {
    return cached;
  }

  if (template[0] === '#') {
    var el = document.querySelector(template);

    if ( true && !el) {
      Object(_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["warn"])("Template element not found or is empty: ".concat(template));
    } // __UNSAFE__
    // Reason: potential execution of JS expressions in in-DOM template.
    // The user must make sure the in-DOM template is trusted. If it's rendered
    // by the server, the template should not contain any user data.


    template = el ? el.innerHTML : "";
  }

  var _compile = Object(_vue_compiler_dom__WEBPACK_IMPORTED_MODULE_2__["compile"])(template, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["extend"])({
    hoistStatic: true,
    onError: function onError(err) {
      if (true) {
        var message = "Template compilation error: ".concat(err.message);
        var codeFrame = err.loc && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_1__["generateCodeFrame"])(template, err.loc.start.offset, err.loc.end.offset);
        Object(_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["warn"])(codeFrame ? "".concat(message, "\n").concat(codeFrame) : message);
      } else {}
    }
  }, options)),
      code = _compile.code; // The wildcard import results in a huge object with every export
  // with keys that cannot be mangled, and can be quite heavy size-wise.
  // In the global build we know `Vue` is available globally so we can avoid
  // the wildcard object.


  var render = new Function('Vue', code)(_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__);
  render._rc = true;
  return compileCache[key] = render;
}

Object(_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__["registerRuntimeCompiler"])(compileToFunction);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-40c92269c7c1c16caac1.js.map