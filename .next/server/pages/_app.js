/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./chain.js":
/*!******************!*\
  !*** ./chain.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BSC\": () => (/* binding */ BSC),\n/* harmony export */   \"Goerli\": () => (/* binding */ Goerli),\n/* harmony export */   \"Sepolia\": () => (/* binding */ Sepolia)\n/* harmony export */ });\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var _usdt_abi_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usdt_abi.json */ \"./usdt_abi.json\");\n/* harmony import */ var _busd_abi_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./busd_abi.json */ \"./busd_abi.json\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi_chains__WEBPACK_IMPORTED_MODULE_0__]);\nwagmi_chains__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// const customBSCTestnet = {\n//   ...bsc,\n//   ico_address: '0xC9608Fb99b048ef9B031eE12A34776c50d89A7EE',\n//   stable_coin_address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',\n//   stable_coin_name: 'BUSD',\n//   exponent: 18,\n//   abi: abiBUSD,\n//   id: 56\n// }\n// const customSepolia = {\n//   ...mainnet,\n//   ico_address: '0xEAc6748A13Ef82fDB95352020F78f982Cea09f03',\n//   stable_coin_address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',\n//   stable_coin_name: 'USDT',\n//   exponent: 6,\n//   abi: abiUSDT,\n//   id: 1\n// }\n// const customGoerli = {\n//   ...mainnet,\n//   ico_address: '0xF194baD7A9F22F091eB7B0b3F894f8Cb56d5016C',\n//   stable_coin_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',\n//   stable_coin_name: 'USDC',\n//   exponent: 6,\n//   abi: abiUSDC,\n//   id: 1\n// }\nconst BSC = {\n    ...wagmi_chains__WEBPACK_IMPORTED_MODULE_0__.bsc,\n    ico_address: \"0xC9608Fb99b048ef9B031eE12A34776c50d89A7EE\",\n    stable_coin_address: \"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56\",\n    stable_coin_name: \"BUSD\",\n    exponent: 18,\n    abi: _busd_abi_json__WEBPACK_IMPORTED_MODULE_2__,\n    id: 56\n};\nconst Sepolia = {\n    ...wagmi_chains__WEBPACK_IMPORTED_MODULE_0__.mainnet,\n    ico_address: \"0xEAc6748A13Ef82fDB95352020F78f982Cea09f03\",\n    stable_coin_address: \"0xdAC17F958D2ee523a2206206994597C13D831ec7\",\n    stable_coin_name: \"USDT\",\n    exponent: 6,\n    abi: _usdt_abi_json__WEBPACK_IMPORTED_MODULE_1__,\n    id: 1\n};\nconst Goerli = {\n    ...wagmi_chains__WEBPACK_IMPORTED_MODULE_0__.mainnet,\n    ico_address: \"0xF194baD7A9F22F091eB7B0b3F894f8Cb56d5016C\",\n    stable_coin_address: \"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48\",\n    stable_coin_name: \"USDC\",\n    exponent: 6,\n    abi: _usdt_abi_json__WEBPACK_IMPORTED_MODULE_1__,\n    id: 1\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jaGFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUU7QUFDbkM7QUFDQTtBQUNBO0FBRXRDLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osK0RBQStEO0FBQy9ELHVFQUF1RTtBQUN2RSw4QkFBOEI7QUFDOUIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsSUFBSTtBQUNKLDBCQUEwQjtBQUMxQixnQkFBZ0I7QUFDaEIsK0RBQStEO0FBQy9ELHVFQUF1RTtBQUN2RSw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsSUFBSTtBQUNKLHlCQUF5QjtBQUN6QixnQkFBZ0I7QUFDaEIsK0RBQStEO0FBQy9ELHVFQUF1RTtBQUN2RSw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsSUFBSTtBQUVKLE1BQU1RLE1BQU07SUFDVixHQUFHSiw2Q0FBRztJQUNOSyxhQUFhO0lBQ2JDLHFCQUFxQjtJQUNyQkMsa0JBQWtCO0lBQ2xCQyxVQUFVO0lBQ1ZDLEtBQUtQLDJDQUFPQTtJQUNaUSxJQUFJO0FBQ047QUFDQSxNQUFNQyxVQUFVO0lBQ2QsR0FBR1osaURBQU87SUFDVk0sYUFBYTtJQUNiQyxxQkFBcUI7SUFDckJDLGtCQUFrQjtJQUNsQkMsVUFBVTtJQUNWQyxLQUFLUiwyQ0FBT0E7SUFDWlMsSUFBSTtBQUNOO0FBQ0EsTUFBTUUsU0FBUztJQUNiLEdBQUdiLGlEQUFPO0lBQ1ZNLGFBQWE7SUFDYkMscUJBQXFCO0lBQ3JCQyxrQkFBa0I7SUFDbEJDLFVBQVU7SUFDVkMsS0FBS04sMkNBQU9BO0lBQ1pPLElBQUk7QUFDTjtBQUUrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dhZ21pLy4vY2hhaW4uanM/M2E0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBic2NUZXN0bmV0LCBzZXBvbGlhLCBnb2VybGksIG1haW5uZXQsIGJzYyB9IGZyb20gJ3dhZ21pL2NoYWlucyc7XHJcbmltcG9ydCBhYmlVU0RUIGZyb20gJy4vdXNkdF9hYmkuanNvbic7XHJcbmltcG9ydCBhYmlCVVNEIGZyb20gJy4vYnVzZF9hYmkuanNvbic7XHJcbmltcG9ydCBhYmlVU0RDIGZyb20gJy4vdXNkdF9hYmkuanNvbic7XHJcblxyXG4vLyBjb25zdCBjdXN0b21CU0NUZXN0bmV0ID0ge1xyXG4vLyAgIC4uLmJzYyxcclxuLy8gICBpY29fYWRkcmVzczogJzB4Qzk2MDhGYjk5YjA0OGVmOUIwMzFlRTEyQTM0Nzc2YzUwZDg5QTdFRScsXHJcbi8vICAgc3RhYmxlX2NvaW5fYWRkcmVzczogJzB4ZTllN0NFQTNEZWRjQTU5ODQ3ODBCYWZjNTk5YkQ2OUFEZDA4N0Q1NicsXHJcbi8vICAgc3RhYmxlX2NvaW5fbmFtZTogJ0JVU0QnLFxyXG4vLyAgIGV4cG9uZW50OiAxOCxcclxuLy8gICBhYmk6IGFiaUJVU0QsXHJcbi8vICAgaWQ6IDU2XHJcbi8vIH1cclxuLy8gY29uc3QgY3VzdG9tU2Vwb2xpYSA9IHtcclxuLy8gICAuLi5tYWlubmV0LFxyXG4vLyAgIGljb19hZGRyZXNzOiAnMHhFQWM2NzQ4QTEzRWY4MmZEQjk1MzUyMDIwRjc4Zjk4MkNlYTA5ZjAzJyxcclxuLy8gICBzdGFibGVfY29pbl9hZGRyZXNzOiAnMHhkQUMxN0Y5NThEMmVlNTIzYTIyMDYyMDY5OTQ1OTdDMTNEODMxZWM3JyxcclxuLy8gICBzdGFibGVfY29pbl9uYW1lOiAnVVNEVCcsXHJcbi8vICAgZXhwb25lbnQ6IDYsXHJcbi8vICAgYWJpOiBhYmlVU0RULFxyXG4vLyAgIGlkOiAxXHJcbi8vIH1cclxuLy8gY29uc3QgY3VzdG9tR29lcmxpID0ge1xyXG4vLyAgIC4uLm1haW5uZXQsXHJcbi8vICAgaWNvX2FkZHJlc3M6ICcweEYxOTRiYUQ3QTlGMjJGMDkxZUI3QjBiM0Y4OTRmOENiNTZkNTAxNkMnLFxyXG4vLyAgIHN0YWJsZV9jb2luX2FkZHJlc3M6ICcweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDgnLFxyXG4vLyAgIHN0YWJsZV9jb2luX25hbWU6ICdVU0RDJyxcclxuLy8gICBleHBvbmVudDogNixcclxuLy8gICBhYmk6IGFiaVVTREMsXHJcbi8vICAgaWQ6IDFcclxuLy8gfVxyXG5cclxuY29uc3QgQlNDID0ge1xyXG4gIC4uLmJzYyxcclxuICBpY29fYWRkcmVzczogJzB4Qzk2MDhGYjk5YjA0OGVmOUIwMzFlRTEyQTM0Nzc2YzUwZDg5QTdFRScsXHJcbiAgc3RhYmxlX2NvaW5fYWRkcmVzczogJzB4ZTllN0NFQTNEZWRjQTU5ODQ3ODBCYWZjNTk5YkQ2OUFEZDA4N0Q1NicsXHJcbiAgc3RhYmxlX2NvaW5fbmFtZTogJ0JVU0QnLFxyXG4gIGV4cG9uZW50OiAxOCxcclxuICBhYmk6IGFiaUJVU0QsXHJcbiAgaWQ6IDU2XHJcbn1cclxuY29uc3QgU2Vwb2xpYSA9IHtcclxuICAuLi5tYWlubmV0LFxyXG4gIGljb19hZGRyZXNzOiAnMHhFQWM2NzQ4QTEzRWY4MmZEQjk1MzUyMDIwRjc4Zjk4MkNlYTA5ZjAzJyxcclxuICBzdGFibGVfY29pbl9hZGRyZXNzOiAnMHhkQUMxN0Y5NThEMmVlNTIzYTIyMDYyMDY5OTQ1OTdDMTNEODMxZWM3JyxcclxuICBzdGFibGVfY29pbl9uYW1lOiAnVVNEVCcsXHJcbiAgZXhwb25lbnQ6IDYsXHJcbiAgYWJpOiBhYmlVU0RULFxyXG4gIGlkOiAxXHJcbn1cclxuY29uc3QgR29lcmxpID0ge1xyXG4gIC4uLm1haW5uZXQsXHJcbiAgaWNvX2FkZHJlc3M6ICcweEYxOTRiYUQ3QTlGMjJGMDkxZUI3QjBiM0Y4OTRmOENiNTZkNTAxNkMnLFxyXG4gIHN0YWJsZV9jb2luX2FkZHJlc3M6ICcweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDgnLFxyXG4gIHN0YWJsZV9jb2luX25hbWU6ICdVU0RDJyxcclxuICBleHBvbmVudDogNixcclxuICBhYmk6IGFiaVVTREMsXHJcbiAgaWQ6IDFcclxufVxyXG5cclxuZXhwb3J0IHsgQlNDLCBTZXBvbGlhLCBHb2VybGkgfSJdLCJuYW1lcyI6WyJic2NUZXN0bmV0Iiwic2Vwb2xpYSIsImdvZXJsaSIsIm1haW5uZXQiLCJic2MiLCJhYmlVU0RUIiwiYWJpQlVTRCIsImFiaVVTREMiLCJCU0MiLCJpY29fYWRkcmVzcyIsInN0YWJsZV9jb2luX2FkZHJlc3MiLCJzdGFibGVfY29pbl9uYW1lIiwiZXhwb25lbnQiLCJhYmkiLCJpZCIsIlNlcG9saWEiLCJHb2VybGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./chain.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3modal/ethereum */ \"@web3modal/ethereum\");\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3modal/react */ \"@web3modal/react\");\n/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/chain */ \"./chain.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_2__, _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_3__, _web3modal_react__WEBPACK_IMPORTED_MODULE_4__, _chain__WEBPACK_IMPORTED_MODULE_5__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_2__, _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_3__, _web3modal_react__WEBPACK_IMPORTED_MODULE_4__, _chain__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst projectId = \"002e902fa56196e08f66137e6f87ba90\";\nconst chains = [\n    _chain__WEBPACK_IMPORTED_MODULE_5__.BSC,\n    _chain__WEBPACK_IMPORTED_MODULE_5__.Sepolia,\n    _chain__WEBPACK_IMPORTED_MODULE_5__.Goerli\n];\nconsole.log(\"chains app\", chains);\nconst { provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.configureChains)(chains, [\n    (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_3__.w3mProvider)({\n        projectId\n    })\n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.createClient)({\n    autoConnect: true,\n    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_3__.w3mConnectors)({\n        projectId: projectId,\n        version: \"2\",\n        appName: \"LGCT\",\n        chains\n    }),\n    provider\n});\nconst ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_3__.EthereumClient(wagmiClient, chains);\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_2__.WagmiConfig, {\n                client: wagmiClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Wagmi-test-main\\\\pages\\\\_app.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Wagmi-test-main\\\\pages\\\\_app.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_4__.Web3Modal, {\n                projectId: projectId,\n                ethereumClient: ethereumClient\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Wagmi-test-main\\\\pages\\\\_app.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDc0M7QUFDYTtBQUVwQztBQUNHO0FBRS9DLE1BQU1VLFlBQVk7QUFFbEIsTUFBTUMsU0FBUztJQUFDSix1Q0FBR0E7SUFBRUUsMkNBQU9BO0lBQUVELDBDQUFNQTtDQUFDO0FBRXJDSSxRQUFRQyxHQUFHLENBQUMsY0FBY0Y7QUFFMUIsTUFBTSxFQUFFRyxTQUFRLEVBQUUsR0FBR2Qsc0RBQWVBLENBQ2xDVyxRQUNBO0lBQUNOLGdFQUFXQSxDQUFDO1FBQUVLO0lBQVU7Q0FBRztBQUc5QixNQUFNSyxjQUFjZCxtREFBWUEsQ0FBQztJQUMvQmUsYUFBYSxJQUFJO0lBQ2pCQyxZQUFZYixrRUFBYUEsQ0FBQztRQUFFTSxXQUFXQTtRQUFXUSxTQUFTO1FBQUtDLFNBQVM7UUFBUVI7SUFBTztJQUN4Rkc7QUFDRjtBQUNBLE1BQU1NLGlCQUFpQixJQUFJakIsK0RBQWNBLENBQUNZLGFBQWFKO0FBRXhDLFNBQVNVLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRCxxQkFDRTs7MEJBQ0UsOERBQUNyQiw4Q0FBV0E7Z0JBQUNzQixRQUFRVDswQkFDbkIsNEVBQUNPO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OzBCQUUxQiw4REFBQ2pCLHVEQUFTQTtnQkFBQ0ksV0FBV0E7Z0JBQVdVLGdCQUFnQkE7Ozs7Ozs7O0FBR3ZELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWdtaS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHsgRXRoZXJldW1DbGllbnQsIHczbUNvbm5lY3RvcnMsIHczbVByb3ZpZGVyIH0gZnJvbSAnQHdlYjNtb2RhbC9ldGhlcmV1bSdcblxuaW1wb3J0IHsgV2ViM01vZGFsIH0gZnJvbSAnQHdlYjNtb2RhbC9yZWFjdCdcbmltcG9ydCB7IEJTQywgR29lcmxpLCBTZXBvbGlhIH0gZnJvbSAnQC9jaGFpbic7XG5cbmNvbnN0IHByb2plY3RJZCA9ICcwMDJlOTAyZmE1NjE5NmUwOGY2NjEzN2U2Zjg3YmE5MCdcblxuY29uc3QgY2hhaW5zID0gW0JTQywgU2Vwb2xpYSwgR29lcmxpXTtcblxuY29uc29sZS5sb2coJ2NoYWlucyBhcHAnLCBjaGFpbnMpO1xuXG5jb25zdCB7IHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG4gIGNoYWlucyxcbiAgW3czbVByb3ZpZGVyKHsgcHJvamVjdElkIH0pXVxuKTtcblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9yczogdzNtQ29ubmVjdG9ycyh7IHByb2plY3RJZDogcHJvamVjdElkLCB2ZXJzaW9uOiBcIjJcIiwgYXBwTmFtZTogXCJMR0NUXCIsIGNoYWlucyB9KSxcbiAgcHJvdmlkZXJcbn0pXG5jb25zdCBldGhlcmV1bUNsaWVudCA9IG5ldyBFdGhlcmV1bUNsaWVudCh3YWdtaUNsaWVudCwgY2hhaW5zKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9XYWdtaUNvbmZpZz5cbiAgICAgIDxXZWIzTW9kYWwgcHJvamVjdElkPXtwcm9qZWN0SWR9IGV0aGVyZXVtQ2xpZW50PXtldGhlcmV1bUNsaWVudH0gLz5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiRXRoZXJldW1DbGllbnQiLCJ3M21Db25uZWN0b3JzIiwidzNtUHJvdmlkZXIiLCJXZWIzTW9kYWwiLCJCU0MiLCJHb2VybGkiLCJTZXBvbGlhIiwicHJvamVjdElkIiwiY2hhaW5zIiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsImNvbm5lY3RvcnMiLCJ2ZXJzaW9uIiwiYXBwTmFtZSIsImV0aGVyZXVtQ2xpZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@web3modal/ethereum":
/*!**************************************!*\
  !*** external "@web3modal/ethereum" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/ethereum");;

/***/ }),

/***/ "@web3modal/react":
/*!***********************************!*\
  !*** external "@web3modal/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/react");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ "./busd_abi.json":
/*!***********************!*\
  !*** ./busd_abi.json ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"constant":false,"inputs":[],"name":"disregardProposeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"assetProtectionRole","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"r","type":"bytes32[]"},{"name":"s","type":"bytes32[]"},{"name":"v","type":"uint8[]"},{"name":"to","type":"address[]"},{"name":"value","type":"uint256[]"},{"name":"fee","type":"uint256[]"},{"name":"seq","type":"uint256[]"},{"name":"deadline","type":"uint256[]"}],"name":"betaDelegatedTransferBatch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sig","type":"bytes"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"seq","type":"uint256"},{"name":"deadline","type":"uint256"}],"name":"betaDelegatedTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"initializeDomainSeparator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"unfreeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newSupplyController","type":"address"}],"name":"setSupplyController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"target","type":"address"}],"name":"nextSeqOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newAssetProtectionRole","type":"address"}],"name":"setAssetProtectionRole","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"freeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newWhitelister","type":"address"}],"name":"setBetaDelegateWhitelister","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"decreaseSupply","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isWhitelistedBetaDelegate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"whitelistBetaDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_proposedOwner","type":"address"}],"name":"proposeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"increaseSupply","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"betaDelegateWhitelister","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposedOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"unwhitelistBetaDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"wipeFrozenAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"EIP712_DOMAIN_HASH","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isFrozen","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"supplyController","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"reclaimBUSD","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"currentOwner","type":"address"},{"indexed":true,"name":"proposedOwner","type":"address"}],"name":"OwnershipTransferProposed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldProposedOwner","type":"address"}],"name":"OwnershipTransferDisregarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"}],"name":"AddressFrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"}],"name":"AddressUnfrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"}],"name":"FrozenAddressWiped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldAssetProtectionRole","type":"address"},{"indexed":true,"name":"newAssetProtectionRole","type":"address"}],"name":"AssetProtectionRoleSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"SupplyIncreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"SupplyDecreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldSupplyController","type":"address"},{"indexed":true,"name":"newSupplyController","type":"address"}],"name":"SupplyControllerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"seq","type":"uint256"},{"indexed":false,"name":"fee","type":"uint256"}],"name":"BetaDelegatedTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldWhitelister","type":"address"},{"indexed":true,"name":"newWhitelister","type":"address"}],"name":"BetaDelegateWhitelisterSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newDelegate","type":"address"}],"name":"BetaDelegateWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldDelegate","type":"address"}],"name":"BetaDelegateUnwhitelisted","type":"event"}]');

/***/ }),

/***/ "./usdt_abi.json":
/*!***********************!*\
  !*** ./usdt_abi.json ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();