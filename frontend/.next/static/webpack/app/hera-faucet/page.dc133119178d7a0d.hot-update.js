"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/hera-faucet/page",{

/***/ "(app-pages-browser)/./config/wagmi.config.ts":
/*!********************************!*\
  !*** ./config/wagmi.config.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: function() { return /* binding */ config; },\n/* harmony export */   ganache: function() { return /* binding */ ganache; }\n/* harmony export */ });\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/@wagmi/core/dist/esm/createConfig.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/viem/_esm/clients/transports/http.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wagmi/chains */ \"(app-pages-browser)/./node_modules/viem/_esm/chains/definitions/localhost.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/chains */ \"(app-pages-browser)/./node_modules/viem/_esm/chains/definitions/goerli.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/chains */ \"(app-pages-browser)/./node_modules/viem/_esm/chains/definitions/sepolia.js\");\n\n\nconsole.log(wagmi_chains__WEBPACK_IMPORTED_MODULE_0__.localhost);\nconst ganache = {\n    id: 1337,\n    name: \"Ganache\",\n    nativeCurrency: {\n        name: \"Ganache\",\n        symbol: \"GAN\",\n        decimals: 18\n    },\n    rpcUrls: {\n        default: {\n            http: [\n                \"http://127.0.0.1:7545\"\n            ]\n        }\n    }\n};\nconst config = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.createConfig)({\n    chains: [\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_2__.goerli,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.sepolia,\n        ganache\n    ],\n    transports: {\n        // [mainnet.id]: http(),\n        // [sepolia.id]: http(),\n        [wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.sepolia.id]: (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.http)(),\n        // [goerli.id]:http()\n        1337: function(params) {\n            throw new Error(\"Function not implemented.\");\n        },\n        5: function(params) {\n            throw new Error(\"Function not implemented.\");\n        }\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbmZpZy93YWdtaS5jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvRDtBQUNhO0FBS2pFSyxRQUFRQyxHQUFHLENBQUNKLG1EQUFTQTtBQUVkLE1BQU1LLFVBQVU7SUFDckJDLElBQUk7SUFDSkMsTUFBTTtJQUNOQyxnQkFBZ0I7UUFBQ0QsTUFBTTtRQUFXRSxRQUFRO1FBQU9DLFVBQVU7SUFBRTtJQUM3REMsU0FBUztRQUFDQyxTQUFTO1lBQUNkLE1BQU07Z0JBQUM7YUFBd0I7UUFBQTtJQUFDO0FBRXRELEVBQTBCO0FBR25CLE1BQU1lLFNBQVNkLG1EQUFZQSxDQUFDO0lBQ2pDZSxRQUFRO1FBQUNaLGdEQUFNQTtRQUFFRCxpREFBT0E7UUFBRUk7S0FBUTtJQUNsQ1UsWUFBWTtRQUNWLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsQ0FBQ2QsaURBQU9BLENBQUNLLEVBQUUsQ0FBQyxFQUFFUiwyQ0FBSUE7UUFDbEIscUJBQXFCO1FBRXJCLE1BQU0sU0FBVWtCLE1BS3VDO1lBS3JELE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUNBLEdBQUcsU0FBVUQsTUFLMEM7WUFLckQsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO0lBQ0Y7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbmZpZy93YWdtaS5jb25maWcudHM/N2IzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBodHRwLCBjcmVhdGVDb25maWcsIENvbm5lY3Rvcn0gZnJvbSAnd2FnbWknXG5pbXBvcnQge2xvY2FsaG9zdCwgbWFpbm5ldCwgc2Vwb2xpYSwgZ29lcmxpfSBmcm9tIFwid2FnbWkvY2hhaW5zXCI7XG5pbXBvcnQge0VJUDExOTNSZXF1ZXN0Rm4sIFRyYW5zcG9ydENvbmZpZywgdHlwZSBDaGFpbn0gZnJvbSAndmllbSdcbmltcG9ydCB7U3RvcmVBcGl9IGZyb20gJ3p1c3RhbmQvdmFuaWxsYSc7XG5cblxuY29uc29sZS5sb2cobG9jYWxob3N0KTtcblxuZXhwb3J0IGNvbnN0IGdhbmFjaGUgPSB7XG4gIGlkOiAxMzM3LFxuICBuYW1lOiAnR2FuYWNoZScsXG4gIG5hdGl2ZUN1cnJlbmN5OiB7bmFtZTogJ0dhbmFjaGUnLCBzeW1ib2w6ICdHQU4nLCBkZWNpbWFsczogMTh9LFxuICBycGNVcmxzOiB7ZGVmYXVsdDoge2h0dHA6IFsnaHR0cDovLzEyNy4wLjAuMTo3NTQ1J119fSxcblxufSBhcyBjb25zdCBzYXRpc2ZpZXMgQ2hhaW5cblxuXG5leHBvcnQgY29uc3QgY29uZmlnID0gY3JlYXRlQ29uZmlnKHtcbiAgY2hhaW5zOiBbZ29lcmxpLCBzZXBvbGlhLCBnYW5hY2hlXSxcbiAgdHJhbnNwb3J0czoge1xuICAgIC8vIFttYWlubmV0LmlkXTogaHR0cCgpLFxuICAgIC8vIFtzZXBvbGlhLmlkXTogaHR0cCgpLFxuICAgIFtzZXBvbGlhLmlkXTogaHR0cCgpLFxuICAgIC8vIFtnb2VybGkuaWRdOmh0dHAoKVxuXG4gICAgMTMzNzogZnVuY3Rpb24gKHBhcmFtczoge1xuICAgICAgY2hhaW4/OiBDaGFpbiB8IHVuZGVmaW5lZDtcbiAgICAgIHBvbGxpbmdJbnRlcnZhbD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAgIHJldHJ5Q291bnQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgICB0aW1lb3V0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIH0gJiB7IGNvbm5lY3RvcnM/OiBTdG9yZUFwaTxDb25uZWN0b3JbXT4gfCB1bmRlZmluZWQ7IH0pOiB7XG4gICAgICBjb25maWc6IFRyYW5zcG9ydENvbmZpZzxzdHJpbmcsIEVJUDExOTNSZXF1ZXN0Rm4+O1xuICAgICAgcmVxdWVzdDogRUlQMTE5M1JlcXVlc3RGbjtcbiAgICAgIHZhbHVlPzogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgICB9IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gbm90IGltcGxlbWVudGVkLicpO1xuICAgIH0sXG4gICAgNTogZnVuY3Rpb24gKHBhcmFtczoge1xuICAgICAgY2hhaW4/OiBDaGFpbiB8IHVuZGVmaW5lZDtcbiAgICAgIHBvbGxpbmdJbnRlcnZhbD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAgIHJldHJ5Q291bnQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgICB0aW1lb3V0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIH0gJiB7IGNvbm5lY3RvcnM/OiBTdG9yZUFwaTxDb25uZWN0b3JbXT4gfCB1bmRlZmluZWQ7IH0pOiB7XG4gICAgICBjb25maWc6IFRyYW5zcG9ydENvbmZpZzxzdHJpbmcsIEVJUDExOTNSZXF1ZXN0Rm4+O1xuICAgICAgcmVxdWVzdDogRUlQMTE5M1JlcXVlc3RGbjtcbiAgICAgIHZhbHVlPzogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgICB9IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgfSxcbn0pXG4iXSwibmFtZXMiOlsiaHR0cCIsImNyZWF0ZUNvbmZpZyIsImxvY2FsaG9zdCIsInNlcG9saWEiLCJnb2VybGkiLCJjb25zb2xlIiwibG9nIiwiZ2FuYWNoZSIsImlkIiwibmFtZSIsIm5hdGl2ZUN1cnJlbmN5Iiwic3ltYm9sIiwiZGVjaW1hbHMiLCJycGNVcmxzIiwiZGVmYXVsdCIsImNvbmZpZyIsImNoYWlucyIsInRyYW5zcG9ydHMiLCJwYXJhbXMiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./config/wagmi.config.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/viem/_esm/chains/definitions/localhost.js":
/*!****************************************************************!*\
  !*** ./node_modules/viem/_esm/chains/definitions/localhost.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   localhost: function() { return /* binding */ localhost; }\n/* harmony export */ });\n/* harmony import */ var _utils_chain_defineChain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/chain/defineChain.js */ \"(app-pages-browser)/./node_modules/viem/_esm/utils/chain/defineChain.js\");\n\nconst localhost = /*#__PURE__*/ (0,_utils_chain_defineChain_js__WEBPACK_IMPORTED_MODULE_0__.defineChain)({\n    id: 1_337,\n    name: 'Localhost',\n    nativeCurrency: {\n        decimals: 18,\n        name: 'Ether',\n        symbol: 'ETH',\n    },\n    rpcUrls: {\n        default: { http: ['http://127.0.0.1:8545'] },\n    },\n});\n//# sourceMappingURL=localhost.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy92aWVtL19lc20vY2hhaW5zL2RlZmluaXRpb25zL2xvY2FsaG9zdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErRDtBQUN4RCxnQ0FBZ0Msd0VBQVc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLGlDQUFpQztBQUNwRCxLQUFLO0FBQ0wsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy92aWVtL19lc20vY2hhaW5zL2RlZmluaXRpb25zL2xvY2FsaG9zdC5qcz82MTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZUNoYWluIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhaW4vZGVmaW5lQ2hhaW4uanMnO1xuZXhwb3J0IGNvbnN0IGxvY2FsaG9zdCA9IC8qI19fUFVSRV9fKi8gZGVmaW5lQ2hhaW4oe1xuICAgIGlkOiAxXzMzNyxcbiAgICBuYW1lOiAnTG9jYWxob3N0JyxcbiAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgICBkZWNpbWFsczogMTgsXG4gICAgICAgIG5hbWU6ICdFdGhlcicsXG4gICAgICAgIHN5bWJvbDogJ0VUSCcsXG4gICAgfSxcbiAgICBycGNVcmxzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHsgaHR0cDogWydodHRwOi8vMTI3LjAuMC4xOjg1NDUnXSB9LFxuICAgIH0sXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvY2FsaG9zdC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/viem/_esm/chains/definitions/localhost.js\n"));

/***/ })

});