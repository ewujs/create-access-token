/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ajax.js":
/*!*********************!*\
  !*** ./src/ajax.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ajax\": () => /* binding */ ajax\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar ajax = function ajax(settings) {\n  var params = {};\n\n  switch (_typeof(settings)) {\n    case 'string':\n      params.url = settings;\n      break;\n\n    case 'object':\n      params = settings;\n      break;\n  }\n\n  if (!('data' in params)) params.data = {};\n  if (!('method' in params)) params.method = 'POST';\n  var promise = {\n    resolve: null,\n    reject: null\n  };\n  var request = new XMLHttpRequest();\n\n  var url = function url(_url) {\n    return params.url = _url;\n  };\n\n  var method = function method(_method) {\n    return params.method = _method;\n  };\n\n  var headers = function headers(_headers) {\n    return params.headers = _headers;\n  };\n\n  var push = function push(data, value) {\n    switch (_typeof(data)) {\n      case 'string':\n        params.data = Object.assign(_defineProperty({}, data, value), params.data);\n        break;\n\n      case 'object':\n        params.data = Object.assign(data, params.data);\n        break;\n    }\n  };\n\n  var data = function data(_data, value) {\n    return push(_data, value);\n  };\n\n  var setHeaders = function setHeaders(xhr, headers) {\n    headers = headers || {};\n    headers['Content-Type'] = 'application/x-www-form-urlencoded';\n    Object.keys(headers).forEach(function (name) {\n      headers[name] && xhr.setRequestHeader(name, headers[name]);\n    });\n  };\n\n  var send = function send(data) {\n    push(data);\n    return new Promise(function (resolve, reject) {\n      promise.resolve = resolve;\n      promise.reject = reject;\n      request.open(params.method, params.url);\n      setHeaders(request, params.headers);\n      request.send(Object.keys(params.data).map(function (key) {\n        return encodeURIComponent(key) + '=' + encodeURIComponent(params.data[key]);\n      }).join('&'));\n\n      request.onreadystatechange = function () {\n        if (request.readyState !== 4) return;\n\n        if (request.status < 200 || request.status > 299) {\n          promise.reject(request);\n          return;\n        }\n\n        promise.resolve(request.responseText);\n      };\n    });\n  };\n\n  var post = function post(data) {\n    params.method = 'POST';\n    return send(data);\n  };\n\n  var get = function get(data) {\n    params.method = 'GET';\n    return send(data);\n  };\n\n  return {\n    url: url,\n    headers: headers,\n    method: method,\n    data: data,\n    send: send,\n    post: post,\n    get: get\n  };\n};\n\n//# sourceURL=webpack://create-access-token/./src/ajax.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ \"./src/ajax.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n(function (window) {\n  var subdomain = window.location.hostname.split('.')[0];\n  var testEnv = ['cte', 'pte', 'lte'].find(function (element) {\n    return subdomain.indexOf(element) !== -1;\n  });\n  var apiDomain = '';\n\n  if (testEnv === undefined) {\n    apiDomain = subdomain.indexOf('sys') !== -1 ? 'dispatch-test.digitalriver.com' : 'api.digitalriver.com';\n  } else {\n    apiDomain = \"dispatch-\".concat(testEnv, \".digitalriverws.net\");\n  }\n\n  var getSessionToken = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(siteId) {\n      var sessionToken;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!(typeof siteId !== 'string')) {\n                _context.next = 2;\n                break;\n              }\n\n              throw new Error('Please pass the site ID.');\n\n            case 2:\n              _context.prev = 2;\n              _context.next = 5;\n              return (0,_ajax__WEBPACK_IMPORTED_MODULE_0__.ajax)({\n                url: \"https://\".concat(window.location.hostname, \"/store/\").concat(siteId, \"/SessionToken\"),\n                method: 'GET',\n                headers: {\n                  Accept: 'application/json'\n                }\n              }).send().then(function (res) {\n                return res;\n              })[\"catch\"](function (e) {\n                throw Error(e);\n              });\n\n            case 5:\n              sessionToken = _context.sent;\n              return _context.abrupt(\"return\", JSON.parse(sessionToken).session_token);\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](2);\n              console.error(_context.t0);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 9]]);\n    }));\n\n    return function getSessionToken(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var createLimitedAccessToken = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {\n      var _ref3, key, secret, siteId, sessionToken, tokenData;\n\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _ref3 = params || {}, key = _ref3.key, secret = _ref3.secret, siteId = _ref3.siteId;\n\n              if (!(typeof key !== 'string')) {\n                _context2.next = 3;\n                break;\n              }\n\n              throw new Error('Please pass a API Key.');\n\n            case 3:\n              if (!(typeof secret !== 'string')) {\n                _context2.next = 5;\n                break;\n              }\n\n              throw new Error('Please pass a API secret.');\n\n            case 5:\n              if (!(typeof siteId !== 'string')) {\n                _context2.next = 7;\n                break;\n              }\n\n              throw new Error('Please pass the site ID.');\n\n            case 7:\n              _context2.prev = 7;\n              _context2.next = 10;\n              return getSessionToken(siteId);\n\n            case 10:\n              sessionToken = _context2.sent;\n              _context2.next = 13;\n              return (0,_ajax__WEBPACK_IMPORTED_MODULE_0__.ajax)({\n                url: \"https://\".concat(apiDomain, \"/oauth20/token\"),\n                method: 'POST',\n                headers: {\n                  Authorization: \"Basic \".concat(window.btoa(key + ':' + secret))\n                },\n                data: {\n                  grant_type: 'password',\n                  dr_session_token: sessionToken\n                }\n              }).send().then(function (res) {\n                return res;\n              })[\"catch\"](function (e) {\n                throw Error(e);\n              });\n\n            case 13:\n              tokenData = _context2.sent;\n              return _context2.abrupt(\"return\", tokenData);\n\n            case 17:\n              _context2.prev = 17;\n              _context2.t0 = _context2[\"catch\"](7);\n              console.error(_context2.t0);\n\n            case 20:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[7, 17]]);\n    }));\n\n    return function createLimitedAccessToken(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var createFullAccessToken = /*#__PURE__*/function () {\n    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {\n      var _ref5, key, secret, siteId, username, password, sessionToken, tokenData;\n\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _ref5 = params || {}, key = _ref5.key, secret = _ref5.secret, siteId = _ref5.siteId, username = _ref5.username, password = _ref5.password;\n\n              if (!(typeof key !== 'string')) {\n                _context3.next = 3;\n                break;\n              }\n\n              throw new Error('Please pass a API Key.');\n\n            case 3:\n              if (!(typeof secret !== 'string')) {\n                _context3.next = 5;\n                break;\n              }\n\n              throw new Error('Please pass a API secret.');\n\n            case 5:\n              if (!(typeof siteId !== 'string')) {\n                _context3.next = 7;\n                break;\n              }\n\n              throw new Error('Please pass the site ID.');\n\n            case 7:\n              _context3.prev = 7;\n              _context3.next = 10;\n              return getSessionToken(siteId);\n\n            case 10:\n              sessionToken = _context3.sent;\n              _context3.next = 13;\n              return (0,_ajax__WEBPACK_IMPORTED_MODULE_0__.ajax)({\n                url: \"https://\".concat(apiDomain, \"/oauth20/token\"),\n                method: 'POST',\n                headers: {\n                  Authorization: \"Basic \".concat(window.btoa(key + ':' + secret))\n                },\n                data: {\n                  grant_type: 'password',\n                  username: username,\n                  password: window.btoa(password),\n                  dr_session_token: sessionToken\n                }\n              }).send().then(function (res) {\n                return res;\n              })[\"catch\"](function (e) {\n                throw Error(e);\n              });\n\n            case 13:\n              tokenData = _context3.sent;\n              return _context3.abrupt(\"return\", tokenData);\n\n            case 17:\n              _context3.prev = 17;\n              _context3.t0 = _context3[\"catch\"](7);\n              console.error(_context3.t0);\n\n            case 20:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[7, 17]]);\n    }));\n\n    return function createFullAccessToken(_x3) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  var createLimitedAccessTokenByPk = /*#__PURE__*/function () {\n    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(siteId, pk) {\n      var tokenData;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              if (!(typeof siteId !== 'string')) {\n                _context4.next = 2;\n                break;\n              }\n\n              throw new Error('Please pass the site ID.');\n\n            case 2:\n              if (!(typeof pk !== 'string')) {\n                _context4.next = 4;\n                break;\n              }\n\n              throw new Error('Please pass a public API Key.');\n\n            case 4:\n              _context4.prev = 4;\n              _context4.next = 7;\n              return (0,_ajax__WEBPACK_IMPORTED_MODULE_0__.ajax)({\n                url: \"https://\".concat(window.location.hostname, \"/store/\").concat(siteId, \"/SessionToken?apiKey=\").concat(pk),\n                method: 'GET',\n                headers: {\n                  Accept: 'application/json'\n                }\n              }).send().then(function (res) {\n                return res;\n              })[\"catch\"](function (e) {\n                throw Error(e);\n              });\n\n            case 7:\n              tokenData = _context4.sent;\n              return _context4.abrupt(\"return\", tokenData);\n\n            case 11:\n              _context4.prev = 11;\n              _context4.t0 = _context4[\"catch\"](4);\n              console.error(_context4.t0);\n\n            case 14:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[4, 11]]);\n    }));\n\n    return function createLimitedAccessTokenByPk(_x4, _x5) {\n      return _ref6.apply(this, arguments);\n    };\n  }();\n\n  var getTokenInfo = /*#__PURE__*/function () {\n    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(token) {\n      var tokenInfo;\n      return regeneratorRuntime.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              if (!(typeof token !== 'string')) {\n                _context5.next = 2;\n                break;\n              }\n\n              throw new Error('Please pass the token.');\n\n            case 2:\n              _context5.prev = 2;\n              _context5.next = 5;\n              return (0,_ajax__WEBPACK_IMPORTED_MODULE_0__.ajax)({\n                url: \"https://\".concat(apiDomain, \"/oauth20/access-tokens?token=\").concat(token),\n                method: 'GET'\n              }).send().then(function (res) {\n                return res;\n              })[\"catch\"](function (e) {\n                throw Error(e);\n              });\n\n            case 5:\n              tokenInfo = _context5.sent;\n              return _context5.abrupt(\"return\", tokenInfo);\n\n            case 9:\n              _context5.prev = 9;\n              _context5.t0 = _context5[\"catch\"](2);\n              console.error(_context5.t0);\n\n            case 12:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5, null, [[2, 9]]);\n    }));\n\n    return function getTokenInfo(_x6) {\n      return _ref7.apply(this, arguments);\n    };\n  }();\n\n  window.DRAccessToken = {\n    createLimitedAccessToken: createLimitedAccessToken,\n    createFullAccessToken: createFullAccessToken,\n    createLimitedAccessTokenByPk: createLimitedAccessTokenByPk,\n    getTokenInfo: getTokenInfo\n  };\n})(window);\n\n//# sourceURL=webpack://create-access-token/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;