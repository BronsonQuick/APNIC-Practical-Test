(this["webpackJsonpapnic-theme"] = this["webpackJsonpapnic-theme"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_assets_images_apnic_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/assets/images/apnic.svg */ "./src/assets/images/apnic.svg");
/* harmony import */ var _src_assets_images_apnic_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_assets_images_apnic_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.module.css */ "./src/App.module.css");
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Labs_Labs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Labs/Labs.js */ "./src/components/Labs/Labs.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Volumes/Sites/apnic-practical-test/wp_data/themes/apnic-theme/react-src/src/App.js";





axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.baseURL = ' https://academy.apnic.net/wp-json/academy';

function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: _App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _src_assets_images_apnic_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    className: _App_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Logo,
    alt: "APNIC Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Labs_Labs_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/App.module.css":
/*!****************************!*\
  !*** ./src/App.module.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Logo":"App_Logo__3Ad8t","Header":"App_Header__ZS1m2"};

/***/ }),

/***/ "./src/UI/Spinner/Spinner.js":
/*!***********************************!*\
  !*** ./src/UI/Spinner/Spinner.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner_Spinner_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Spinner/Spinner.module.css */ "./src/UI/Spinner/Spinner.module.css");
/* harmony import */ var _Spinner_Spinner_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Spinner_Spinner_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Sites/apnic-practical-test/wp_data/themes/apnic-theme/react-src/src/UI/Spinner/Spinner.js";



const spinner = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _Spinner_Spinner_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Loader,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Loading labs..."));

/* harmony default export */ __webpack_exports__["default"] = (spinner);

/***/ }),

/***/ "./src/UI/Spinner/Spinner.module.css":
/*!*******************************************!*\
  !*** ./src/UI/Spinner/Spinner.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Loader":"Spinner_Loader__3warB","load2":"Spinner_load2__3Peqf"};

/***/ }),

/***/ "./src/assets/images/apnic.svg":
/*!*************************************!*\
  !*** ./src/assets/images/apnic.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/apnic.6df07f49.svg";

/***/ }),

/***/ "./src/components/Labs/Lab.css":
/*!*************************************!*\
  !*** ./src/components/Labs/Lab.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Labs/Lab.js":
/*!************************************!*\
  !*** ./src/components/Labs/Lab.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Lab_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lab.css */ "./src/components/Labs/Lab.css");
/* harmony import */ var _Lab_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Lab_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Sites/apnic-practical-test/wp_data/themes/apnic-theme/react-src/src/components/Labs/Lab.js";



const Lab = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, props.name);

/* harmony default export */ __webpack_exports__["default"] = (Lab);

/***/ }),

/***/ "./src/components/Labs/Labs.js":
/*!*************************************!*\
  !*** ./src/components/Labs/Labs.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lab */ "./src/components/Labs/Lab.js");
/* harmony import */ var _UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Spinner/Spinner */ "./src/UI/Spinner/Spinner.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_list_drag_and_drop_lib_RLDD__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-list-drag-and-drop/lib/RLDD */ "../../../../node_modules/react-list-drag-and-drop/lib/RLDD.js");
/* harmony import */ var react_list_drag_and_drop_lib_RLDD__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_list_drag_and_drop_lib_RLDD__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Volumes/Sites/apnic-practical-test/wp_data/themes/apnic-theme/react-src/src/components/Labs/Labs.js";






class Labs extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      labs: null,
      total: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps);
    console.log(prevState);
    console.log(this.state);
    console.log('updated');
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/virtual-labs').then(response => {
      const virtualLabs = response.data.virtualLabs;
      let labs = virtualLabs.map(lab => {
        return {
          id: lab.id,
          name: lab.name,
          description: lab.description,
          durationMinutes: lab.durationMinutes,
          formattedDuration: lab.formattedDuration,
          URL: lab.viewDetailsURL,
          image: lab.thumbnail,
          language: lab.language,
          demoName: lab.labDemoName,
          demoURL: lab.labDemoURL,
          index: null
        };
      });
      this.setState({
        labs: labs,
        total: virtualLabs.length
      });
    }).catch(error => {
      return error;
    });
  }

  handleRLDDChange(newItems) {
    this.setState({
      labs: newItems
    });
  }

  itemRenderer(item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lab__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "item",
      key: item.id,
      name: item.name,
      index: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    });
  }

  render() {
    let labs = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    });

    if (this.state.labs) {
      labs = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_list_drag_and_drop_lib_RLDD__WEBPACK_IMPORTED_MODULE_4___default.a, {
        items: this.state.labs,
        itemRenderer: this.itemRenderer.bind(this),
        onChange: this.handleRLDDChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, labs);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Labs);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Volumes/Sites/apnic-practical-test/wp_data/themes/apnic-theme/react-src/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/apnic-practical-test/wp_data/themes/apnic-theme/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map