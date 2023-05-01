"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/ethereum */ \"./node_modules/@web3modal/ethereum/dist/index.js\");\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3modal/react */ \"./node_modules/@web3modal/react/dist/index.js\");\n/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/chain */ \"./chain.js\");\n\n\n\n\n\n\nconst projectId = \"002e902fa56196e08f66137e6f87ba90\";\nconst chains = [\n    _chain__WEBPACK_IMPORTED_MODULE_4__.BSC,\n    _chain__WEBPACK_IMPORTED_MODULE_4__.Sepolia,\n    _chain__WEBPACK_IMPORTED_MODULE_4__.Goerli\n];\nconsole.log(\"chains app\", chains);\nconst { provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)(chains, [\n    (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__.w3mProvider)({\n        projectId\n    })\n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createClient)({\n    autoConnect: true,\n    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__.w3mConnectors)({\n        projectId: projectId,\n        version: \"2\",\n        appName: \"LGCT\",\n        chains\n    }),\n    provider\n});\nconst ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__.EthereumClient(wagmiClient, chains);\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n                client: wagmiClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Wagmi-test-main\\\\pages\\\\_app.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Wagmi-test-main\\\\pages\\\\_app.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_3__.Web3Modal, {\n                projectId: projectId,\n                ethereumClient: ethereumClient\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Wagmi-test-main\\\\pages\\\\_app.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDc0M7QUFDYTtBQUVwQztBQUNHO0FBRS9DLE1BQU1VLFlBQVk7QUFFbEIsTUFBTUMsU0FBUztJQUFDSix1Q0FBR0E7SUFBRUUsMkNBQU9BO0lBQUVELDBDQUFNQTtDQUFDO0FBRXJDSSxRQUFRQyxHQUFHLENBQUMsY0FBY0Y7QUFFMUIsTUFBTSxFQUFFRyxTQUFRLEVBQUUsR0FBR2Qsc0RBQWVBLENBQ2xDVyxRQUNBO0lBQUNOLGdFQUFXQSxDQUFDO1FBQUVLO0lBQVU7Q0FBRztBQUc5QixNQUFNSyxjQUFjZCxtREFBWUEsQ0FBQztJQUMvQmUsYUFBYSxJQUFJO0lBQ2pCQyxZQUFZYixrRUFBYUEsQ0FBQztRQUFFTSxXQUFXQTtRQUFXUSxTQUFTO1FBQUtDLFNBQVM7UUFBUVI7SUFBTztJQUN4Rkc7QUFDRjtBQUNBLE1BQU1NLGlCQUFpQixJQUFJakIsK0RBQWNBLENBQUNZLGFBQWFKO0FBRXhDLFNBQVNVLElBQUksS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4QjtJQUMxQixxQkFDRTs7MEJBQ0UsOERBQUNyQiw4Q0FBV0E7Z0JBQUNzQixRQUFRVDswQkFDbkIsNEVBQUNPO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OzBCQUUxQiw4REFBQ2pCLHVEQUFTQTtnQkFBQ0ksV0FBV0E7Z0JBQVdVLGdCQUFnQkE7Ozs7Ozs7O0FBR3ZELENBQUM7S0FUdUJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHsgRXRoZXJldW1DbGllbnQsIHczbUNvbm5lY3RvcnMsIHczbVByb3ZpZGVyIH0gZnJvbSAnQHdlYjNtb2RhbC9ldGhlcmV1bSdcblxuaW1wb3J0IHsgV2ViM01vZGFsIH0gZnJvbSAnQHdlYjNtb2RhbC9yZWFjdCdcbmltcG9ydCB7IEJTQywgR29lcmxpLCBTZXBvbGlhIH0gZnJvbSAnQC9jaGFpbic7XG5cbmNvbnN0IHByb2plY3RJZCA9ICcwMDJlOTAyZmE1NjE5NmUwOGY2NjEzN2U2Zjg3YmE5MCdcblxuY29uc3QgY2hhaW5zID0gW0JTQywgU2Vwb2xpYSwgR29lcmxpXTtcblxuY29uc29sZS5sb2coJ2NoYWlucyBhcHAnLCBjaGFpbnMpO1xuXG5jb25zdCB7IHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG4gIGNoYWlucyxcbiAgW3czbVByb3ZpZGVyKHsgcHJvamVjdElkIH0pXVxuKTtcblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9yczogdzNtQ29ubmVjdG9ycyh7IHByb2plY3RJZDogcHJvamVjdElkLCB2ZXJzaW9uOiBcIjJcIiwgYXBwTmFtZTogXCJMR0NUXCIsIGNoYWlucyB9KSxcbiAgcHJvdmlkZXJcbn0pXG5jb25zdCBldGhlcmV1bUNsaWVudCA9IG5ldyBFdGhlcmV1bUNsaWVudCh3YWdtaUNsaWVudCwgY2hhaW5zKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9XYWdtaUNvbmZpZz5cbiAgICAgIDxXZWIzTW9kYWwgcHJvamVjdElkPXtwcm9qZWN0SWR9IGV0aGVyZXVtQ2xpZW50PXtldGhlcmV1bUNsaWVudH0gLz5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiRXRoZXJldW1DbGllbnQiLCJ3M21Db25uZWN0b3JzIiwidzNtUHJvdmlkZXIiLCJXZWIzTW9kYWwiLCJCU0MiLCJHb2VybGkiLCJTZXBvbGlhIiwicHJvamVjdElkIiwiY2hhaW5zIiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsImNvbm5lY3RvcnMiLCJ2ZXJzaW9uIiwiYXBwTmFtZSIsImV0aGVyZXVtQ2xpZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});