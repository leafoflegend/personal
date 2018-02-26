(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(14);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return me; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return aboutHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return aboutText1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return aboutText2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return callToContact; });
var me = ['a software engineer', 'imaginative', 'a teaching fellow', 'inquisitive', 'a gamer', 'innovative', 'a Ravenclaw', 'inventive'],
    description = 'After graduating in 2014 from NYU with a B.A. in Economics, I decided to tap into my creative side and follow in my parents\' entrepreneurial footsteps by launching a graphic design company. I learned so much during that time, but everything I created was static. Craving to expand my technical capabilities coupled with a desire to build dynamic apps and a love for languages, I became a software engineer. Currently, I\'m building a travel chat-bot app for Google Assistant and taking Coursera\'s Machine Learning course.',
    aboutHeader = 'Creating useful and engaging software',
    aboutText1 = 'I\u2019m a software engineer advanced in JavaScript, Node.js, Express.js, SQL, PostgreSQL, Sequelize, React.js, Redux, React-Redux, and CSS. I also have some experience with Python and robotics hardware from independent projects. I thrive in environments that constantly push me to learn and want to learn more programming languages, including C++, Java, Swift, and Go.',
    aboutText2 = 'When I\u2019m not on the job, I love catching a game of soccer, strumming my bass guitar, following the latest fashion trends, or taking photos while traveling.',
    callToContact = ['Feel free to contact me for hiring', 'opportunities, collaborations, insight,', 'or feedback. If forms are not your', 'style, reach out to me via any of the', 'methods located at the bottom of the', 'page. I\'m looking forward to chatting', 'with you soon!'];



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);


// Initialize firebase with config obj directly placed
var fire = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.initializeApp({
  apiKey: "AIzaSyCSDIJcPHNNOU9aob-hTKJr1Gs2aBfXF6k",
  authDomain: "elenicodes.firebaseapp.com",
  databaseURL: "https://elenicodes.firebaseio.com",
  projectId: "elenicodes",
  storageBucket: "elenicodes.appspot.com",
  messagingSenderId: "928734970131"
});

var db = fire.database();
/* harmony default export */ __webpack_exports__["a"] = (db);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return siteKey; });
/* unused harmony export secretKey */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return socialLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return action; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_entypo__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_entypo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_entypo__);



// my information
var socialLinks = [['https://www.github.com/datgreekchick', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_entypo__["EntypoGithub"], { alt: 'github' })], ['https://www.linkedin.com/in/eleniarvanitis', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_entypo__["EntypoLinkedinWithCircle"], { alt: 'linkedIn' })], ['https://www.medium.com/@datgreekchick', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_entypo__["EntypoMedium"], { alt: 'medium' })], ['https://www.twitter.com/datgreekchick', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_entypo__["EntypoTwitter"], { alt: 'twitter' })], ['mailto:eleni.arvanitis@me.com', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_entypo__["EntypoMail"], { alt: 'email' })]];

// recaptcha info
var siteKey = '6LclR0UUAAAAADO_wBHo6xs4XU6pKKwm6stzYVpP',
    secretKey = '6LclR0UUAAAAAGcyBKHBJ_cEWCqKo6TGqgdl-fA1';

// grab contact info and place it in Google doc via this script
var action = 'https://script.google.com/a/nyu.edu/macros/s/AKfycbz_ejWTN9ntUMDKmTWcRSTX4djcwWlmuspvwKtwefWs2YrwMnhL/exec';



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hot_loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hot_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_hot_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_App__ = __webpack_require__(11);






function main() {
  Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_hot_loader__["AppContainer"],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__client_App__["a" /* default */], null)
  ), document.getElementById('main'));
}

main();

module.hot && module.hot.accept('~/client/App', main);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_assets_styles_index_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_assets_styles_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__public_assets_styles_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_assets_styles_button_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_assets_styles_button_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__public_assets_styles_button_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_components_Navbar__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_components_About__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__client_components_Home__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__client_components_Work__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__client_components_Articles__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__client_components_Contact__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__client_components_Footer__ = __webpack_require__(45);














/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["BrowserRouter"],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__client_components_Navbar__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_6__client_components_Home__["a" /* default */] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/about', component: __WEBPACK_IMPORTED_MODULE_5__client_components_About__["a" /* default */] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/work', component: __WEBPACK_IMPORTED_MODULE_7__client_components_Work__["a" /* default */] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/articles', component: __WEBPACK_IMPORTED_MODULE_8__client_components_Articles__["a" /* default */] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/contact', component: __WEBPACK_IMPORTED_MODULE_9__client_components_Contact__["a" /* default */] })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__client_components_Footer__["a" /* default */], null)
    )
  );
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,800);", ""]);

// module
exports.push([module.i, "* {\n    font-family: 'Open Sans', sans-serif;\n    color: ghostwhite;\n}\n\nbody {\n    background-color: rgba(0, 0, 0, 0.9);\n}\n\n*:focus {\n    outline: none;\n}", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./button.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./button.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "button {\n    flex: 1 1 auto;\n    margin: 7% auto;\n    padding: 10px 25px;\n    border: 2px solid #e0bf9f;\n    text-align: center;\n    text-transform: uppercase;\n    font-size: large;\n    position: relative;\n    overflow: hidden;\n    transition: .4s;\n    background-color: transparent;\n    color: ghostwhite;\n}\n\nbutton:after {\n    position: absolute;\n    transition: .4s;\n    content: '';\n    width: 100%;\n    bottom: 0;\n    background: #e0bf9f;\n    height: 120%;\n    left: -110%;\n    transform: skewX(20deg);\n    z-index: -1;\n}\n\nbutton:hover {\n    cursor: pointer;\n    color: rgba(0, 0, 0, 0.9);\n}\n\nbutton:hover:after {\n    left: -10%;\n    width: 150%;\n}\n\nbutton:focus {\n    outline: none;\n}", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_assets_styles_navbar_css__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_assets_styles_navbar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__public_assets_styles_navbar_css__);





var logo = '/assets/img/ea-logo-cream.png',
    nav = ['about', 'work', 'articles', 'contact'];

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'nav',
    { role: 'navigation', className: 'nav-bar' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
      { to: '/' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'logo', src: logo, alt: 'ea-logo-cream' })
    ),
    nav.map(function (link) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
        { key: link, to: '/' + link, className: 'underline' },
        '' + link[0].toUpperCase() + link.slice(1)
      );
    })
  );
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./navbar.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./navbar.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".nav-bar {\n    top: 0;\n    font-size: 23px;\n    font-weight: 800;\n    color: ghostwhite;\n    display: flex;\n    justify-content: space-around;\n    align-items: right;\n    margin: 0; padding: 1rem 0;\n    width: 100%;\n}\n\na {\n    text-decoration: none;\n    position: relative;\n    color: ghostwhite;\n}\n\na.underline:before {\n    content: \"\";\n    position: absolute;\n    width: 100%; height: 2px;\n    bottom: 0; left: 0;\n    background-color: #e0bf9f;\n    visibility: hidden;\n    transform: scaleX(0);\n    -webkit-transform: scaleX(0);\n    transition: all 0.3s ease-in-out 0s;\n    -webkit-transition: all 0.3s ease-in-out 0s;\n}\n\na.underline:hover:before {\n    color: #e0bf9f;\n    visibility: visible;\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n}\n\na.underline.active {\n    color: #e0bf9f;\n}\n\n.logo {\n    max-width: 35%; max-height: 35%;\n    display: inline;\n    float: left;\n}", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_about__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_assets_styles_about_css__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_assets_styles_about_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__public_assets_styles_about_css__);





/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'about' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      { className: 'about-header' },
      __WEBPACK_IMPORTED_MODULE_2__content_about__["a" /* aboutHeader */]
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      { className: 'about-text' },
      __WEBPACK_IMPORTED_MODULE_2__content_about__["b" /* aboutText1 */]
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      { className: 'about-text' },
      __WEBPACK_IMPORTED_MODULE_2__content_about__["c" /* aboutText2 */]
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
      { exact: true, to: '/work' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        null,
        'See my work'
      )
    )
  );
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./about.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./about.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".about {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    padding: 7% 3%; margin-right: 60%;\n}\n\n.about-header {\n    font-size: 35pt;\n    font-weight: 800;\n    color: ghostwhite;\n    margin-bottom: 4%;\n}\n\n.about-text {\n    font-weight: 300;\n    font-size: 17px;\n    color: ghostwhite;\n}", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_text_loop__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_text_loop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_text_loop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_assets_styles_home_css__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_assets_styles_home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__public_assets_styles_home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_about__ = __webpack_require__(4);







/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'me' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'text-carousel' },
      'I am',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_text_loop___default.a,
        null,
        __WEBPACK_IMPORTED_MODULE_4__content_about__["f" /* me */].map(function (descriptor) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'carousel-items',
              key: descriptor },
            descriptor
          );
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'home-description' },
        __WEBPACK_IMPORTED_MODULE_4__content_about__["e" /* description */]
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
        { to: '/contact' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          null,
          'Say hi'
        )
      )
    )
  );
});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-text-loop");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./home.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./home.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".me {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 0 3%;\n}\n\n.text-carousel {\n    padding: 7% 3%; margin-left: 60%;\n    font-size: 25px;\n    flex-direction: column;\n    flex-wrap: wrap;\n}\n\n.carousel-items {\n    font-weight: 800;\n    color: #e0bf9f;\n    padding: 0 0 0 5%;\n}\n\n.home-description {\n    font-size: 15pt;\n    font-weight: 300;\n    margin: 10% 0 0 0; padding: 0 0 10% 0;\n}", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Expand__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_assets_styles_work_css__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_assets_styles_work_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__public_assets_styles_work_css__);




/* harmony default export */ __webpack_exports__["a"] = (function () {
  window.scroll(0, 0);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'work' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: '/assets/Eleni-Arvanitis-Resume.pdf', target: '_blank' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { className: 'resume-button' },
        'View Resume'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Expand__["a" /* default */], null)
  );
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_assets_styles_expand_css__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_assets_styles_expand_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__public_assets_styles_expand_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_fire__ = __webpack_require__(5);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Expand = function (_Component) {
  _inherits(Expand, _Component);

  function Expand() {
    var _temp, _this, _ret;

    _classCallCheck(this, Expand);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { projects: [], isHidden: true, selectedElem: '' }, _this.toggle = function (evt) {
      return _this.setState({
        isHidden: !_this.state.isHidden,
        selectedElem: evt.target.innerText
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Expand.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    __WEBPACK_IMPORTED_MODULE_2__content_fire__["a" /* default */].ref('work').once('value', function (snap) {
      for (var i = 0; i < snap.val().length; i++) {
        _this2.setState({ projects: [].concat(_this2.state.projects, [snap.val()[i]]) });
      }
    });
  };

  Expand.prototype.render = function render() {
    var _this3 = this;

    var _state = this.state,
        projects = _state.projects,
        isHidden = _state.isHidden,
        selectedElem = _state.selectedElem;


    return projects.map(function (project) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { key: project.name, className: 'project' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'line', onClick: _this3.toggle },
          project.name.toUpperCase()
        ),
        !isHidden && selectedElem === project.name.toUpperCase() ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'detail' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'role' },
            project.role
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'description' },
            project.description
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          project.technologies.map(function (technology) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'tech', key: technology },
              technology.toUpperCase()
            );
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          project.links.map(function (link, i) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { key: project.name + '-link' + i,
                href: link['code'] ? link['code'] : link['youtube'] ? link['youtube'] : link['demo'], target: '_blank' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { className: 'project-links' },
                link['code'] ? 'code' : link['youtube'] ? 'youtube' : 'demo'
              )
            );
          })
        ) : null
      );
    });
  };

  return Expand;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Expand);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./expand.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./expand.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".detail {\n    flex-direction: column;\n    flex-wrap: wrap;\n    font-size: 15px;\n    font-weight: 300;\n    padding: 5px 15%;\n    cursor: default;\n}\n\n.role {\n    font-size: 20px;\n    color: #e0bf9f;\n    font-style: italic;\n    font-weight: 800;\n}\n\n.project-description {\n    padding: 0 3%;\n}\n\n.tech {\n    border: 1px solid #e0bf9f;\n    border-radius: 8px;\n    padding: 7px 18px;\n    margin-right: 10px;\n    font-size: 12px;\n}\n\nbutton.project-links {\n    margin: 5% 2% 0 2%;\n}", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./work.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./work.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".project {\n    align-items: center;\n    justify-content: center;\n    padding: 18px 0;\n    font-size: 28pt;\n    font-weight: 800;\n    text-align: center;\n    cursor: pointer;\n}\n\n.line {\n    line-height: 0.5;\n    display: inline-block;\n    position: relative;\n}\n\n.line:hover {\n    color: #e0bf9f;\n}\n\n.line:before,\n.line:after {\n    content: \"\";\n    position: absolute;\n    height: 9px;\n    border-bottom: 1px solid ghostwhite;\n    border-top: 1px solid ghostwhite;\n    top: 1px;\n    width: 50%;\n}\n\n.line:before {\n    right: 100%;\n    margin-right: 15px;\n    padding-top: 5px;\n}\n\n.line:after {\n    left: 100%;\n    margin-left: 15px;\n    padding-top: 5px;\n}\n\nbutton.resume-button {\n    position: relative;\n    display: flex;\n    align-items: center;\n    margin: 4% auto;\n}", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_assets_styles_articles_css__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_assets_styles_articles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__public_assets_styles_articles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_fire__ = __webpack_require__(5);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Articles = function (_Component) {
  _inherits(Articles, _Component);

  function Articles() {
    var _temp, _this, _ret;

    _classCallCheck(this, Articles);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { articles: [] }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Articles.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    __WEBPACK_IMPORTED_MODULE_2__content_fire__["a" /* default */].ref('articles').once('value', function (snap) {
      for (var i = snap.val().length - 1; i > -1; i--) {
        _this2.setState({ articles: [].concat(_this2.state.articles, [snap.val()[i]]) });
      }
    });
  };

  Articles.prototype.render = function render() {
    var articles = this.state.articles;


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'all-articles' },
      articles.map(function (article) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { key: article.title,
            className: 'article' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            { className: 'article-title' },
            article.title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'date-posted' },
            article['date-posted']
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'description' },
            article.description
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: article.link, target: '_blank' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              null,
              'Read More \u2197'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null)
        );
      })
    );
  };

  return Articles;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Articles);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./articles.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./articles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "hr {\n    border-color: #e0bf9f;\n}\n\n.all-articles {\n    padding-top: 2%;\n}\n\n.article {\n    padding: 10px 20%;\n}\n\n.article-title {\n    color: #e0bf9f;\n    font-size: 18pt;\n}\n\n.date-posted {\n    font-style: italic;\n}\n\n.description {\n    font-size: large;\n}\n\nbutton {\n    margin: 3% auto 5% auto;\n}", ""]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_about__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_assets_styles_contact_css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_assets_styles_contact_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__public_assets_styles_contact_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_assets_styles_arrows_css__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_assets_styles_arrows_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__public_assets_styles_arrows_css__);







/* harmony default export */ __webpack_exports__["a"] = (function () {
  window.scroll(0, 0);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'contact' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      'Let\'s Work Together!'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'contact-form' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Form__["a" /* default */], null)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'contact-footer' },
        __WEBPACK_IMPORTED_MODULE_2__content_about__["d" /* callToContact */].map(function (line) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { key: line },
            line,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null)
          );
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'arrows' })
      )
    )
  );
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_google_recaptcha__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_google_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_google_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_secrets__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { name: '', email: '', message: '', 'g-recaptcha-response': '' }, _this.handleChange = function (propertyName) {
      return function (evt) {
        var _extends2;

        console.log(propertyName + ': ' + _this.state[propertyName]);

        _this.setState(_extends({}, _this.state, (_extends2 = {}, _extends2[propertyName] = evt.target.value, _extends2)));
      };
    }, _this.verifyHumanity = function (req) {
      _this.setState({ 'g-recaptcha-response': req });
    }, _this.handleSubmit = function (evt) {
      evt.preventDefault();
      _this.setState({ name: '', email: '', message: '' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Form.prototype.render = function render() {
    var _this2 = this;

    var _state = this.state,
        name = _state.name,
        email = _state.email,
        message = _state.message,
        inputs = [{ type: 'text', name: 'Name', value: name, placeholder: 'Bilbo Baggins' }, { type: 'email', name: 'Email', value: email, placeholder: 'burglar@shire.com' }];


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'form',
      { id: 'gform', onSubmit: this.handleSubmit,
        action: __WEBPACK_IMPORTED_MODULE_2__content_secrets__["a" /* action */], method: 'POST' },
      inputs.map(function (input) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { className: 'form-label', key: input.type },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-input', type: input.type,
            name: input.name, required: true,
            onChange: _this2.handleChange(input.name.toLowerCase()),
            placeholder: input.placeholder, value: input.value }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null)
        );
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'label',
        { className: 'form-label' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { className: 'form-input', name: 'message',
          placeholder: 'We\'re looking for a wizard to travel with us to the Lonely Mountain',
          value: message, onChange: this.handleChange('message') }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_google_recaptcha___default.a, { ref: 'recaptcha', sitekey: __WEBPACK_IMPORTED_MODULE_2__content_secrets__["b" /* siteKey */], theme: 'dark',
        onChange: this.verifyHumanity }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { type: 'submit' },
        'Submit'
      )
    );
  };

  return Form;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-google-recaptcha");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-entypo");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./contact.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./contact.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".contact {\n    overflow: hidden;\n    padding: 0 5%;\n}\n\nh2 {\n    font-size: 60pt;\n}\n\n.contact-form {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n}\n\n#gform {\n    flex-flow: column nowrap;\n}\n\ninput {\n    -webkit-backface-visibility: hidden;\n    font-size: 22pt;\n}\n\ntextarea {\n    resize: vertical;\n    min-height: 65px;\n    max-height: 300px;\n}\n\ninput, textarea {\n    font-size: 22px;\n    width: calc(100%/0.7);\n    padding: 5px 0;\n    background: transparent;\n    border: transparent;\n    border-bottom: 1.5px solid gray;\n}\n\n.form-input {\n    margin-bottom: 60px;\n}\n\n.form-input:focus {\n    border-bottom: 1.5px solid #e0bf9f;\n    transition: all 0.25s ease-in-out;\n}\n\n.contact-footer {\n    padding-top: 5%;\n    font-size: 22px;\n}", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./arrows.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./arrows.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/* Edited by me - Originally by Atticus Koya */\n\n.arrows {\n  position: relative;\n  top: 20%; left: 48%;\n  width: 80px; height: 80px;\n  transform: translate(-50%, -50%);\n}\n\n.arrows:before {\n  content: '';\n  position: absolute;\n  width: 100%; height: 100%;\n  border-left: 27px solid rgba(0,0,0,0.7);\n  border-bottom: 27px solid rgba(0,0,0,0.7);\n  transform: translate(27px, 107px) rotate(-45deg);\n  animation: arrows 3s linear infinite;\n}\n\n.arrows:after {\n  content: '';\n  position: absolute;\n  width: 100%; height: 100%;\n  border-left: 27px solid rgba(0,0,0,0.7);\n  border-bottom: 27px solid rgba(0,0,0,0.7);\n  transform: translate(53px, 0) rotate(-45deg) ;\n  animation: arrows 3s linear infinite -1.5s;\n}\n\n@keyframes arrows {\n  0% {\n    border-left: 27px solid rgba(0,0,0,0);\n    border-bottom: 27px solid rgba(0,0,0,0);\n    transform: translate(-13px, -53px) rotate(-45deg) ;\n  }\n  10%, 90% {\n    border-left: 27px solid rgba(0,0,0,0);\n    border-bottom: 27px solid rgba(0,0,0,0);\n  }\n  50% {\n    border-left: 27px solid rgba(0,0,0,0.7);\n    border-bottom: 27px solid rgba(0,0,0,0.7);\n    transform: translate(-13px, 0) rotate(-45deg) ;\n  }\n  100% {\n    border-left: 27px solid rgba(0,0,0,0);\n    border-bottom: 27px solid rgba(0,0,0,0);\n    transform: translate(-13px, 53px) rotate(-45deg) ;\n  }\n}", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_secrets__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_assets_styles_footer_css__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_assets_styles_footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__public_assets_styles_footer_css__);





/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'footer', role: 'contentinfo' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { className: 'copyright' },
      '\xA9 2018 Eleni Arvanitis'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_1__content_secrets__["c" /* socialLinks */].map(function (link) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { key: link[0], className: 'icons',
            href: link[0], rel: 'noopener',
            target: '_blank' },
          link[1]
        );
      })
    )
  );
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./footer.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./footer.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".footer {\n    padding: 2%;\n    display: flex;\n    justify-content: space-between;\n}\n\n.copyright {\n    color: #858686;\n}\n\n.icons {\n    padding-left: 12px;\n}", ""]);

// exports


/***/ })
/******/ ])));