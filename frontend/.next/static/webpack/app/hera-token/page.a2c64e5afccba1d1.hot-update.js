"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/hera-token/page",{

/***/ "(app-pages-browser)/./config/wagmi.config.ts":
/*!********************************!*\
  !*** ./config/wagmi.config.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: function() { return /* binding */ config; },\n/* harmony export */   ganache: function() { return /* binding */ ganache; }\n/* harmony export */ });\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/@wagmi/core/dist/esm/createConfig.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/viem/_esm/clients/transports/http.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi/chains */ \"(app-pages-browser)/./node_modules/viem/_esm/chains/definitions/goerli.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/chains */ \"(app-pages-browser)/./node_modules/viem/_esm/chains/definitions/sepolia.js\");\n\n\nconst ganache = {\n    id: 1337,\n    name: \"Ganache\",\n    nativeCurrency: {\n        name: \"Ganache\",\n        symbol: \"GAN\",\n        decimals: 18\n    },\n    rpcUrls: {\n        default: {\n            http: [\n                \"http://127.0.0.1:7545\"\n            ]\n        }\n    }\n};\nconst config = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.createConfig)({\n    chains: [\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_1__.goerli,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_2__.sepolia,\n        ganache\n    ],\n    transports: {\n        // [mainnet.id]: http(),\n        // [sepolia.id]: http(),\n        [ganache.id]: (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.http)()\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbmZpZy93YWdtaS5jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW9EO0FBQ2E7QUFNMUQsTUFBTUksVUFBVTtJQUNyQkMsSUFBSTtJQUNKQyxNQUFNO0lBQ05DLGdCQUFnQjtRQUFDRCxNQUFNO1FBQVdFLFFBQVE7UUFBT0MsVUFBVTtJQUFFO0lBQzdEQyxTQUFTO1FBQUNDLFNBQVM7WUFBQ1gsTUFBTTtnQkFBQzthQUF3QjtRQUFBO0lBQUM7QUFFdEQsRUFBMEI7QUFHbkIsTUFBTVksU0FBU1gsbURBQVlBLENBQUM7SUFDakNZLFFBQVE7UUFBQ1YsZ0RBQU1BO1FBQUVELGlEQUFPQTtRQUFFRTtLQUFRO0lBQ2xDVSxZQUFZO1FBQ1Ysd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4QixDQUFDVixRQUFRQyxFQUFFLENBQUMsRUFBRUwsMkNBQUlBO0lBRXBCO0FBQ0YsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25maWcvd2FnbWkuY29uZmlnLnRzPzdiMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHR0cCwgY3JlYXRlQ29uZmlnLCBDb25uZWN0b3J9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0IHtsb2NhbGhvc3QsIG1haW5uZXQsIHNlcG9saWEsIGdvZXJsaX0gZnJvbSBcIndhZ21pL2NoYWluc1wiO1xuaW1wb3J0IHtFSVAxMTkzUmVxdWVzdEZuLCBUcmFuc3BvcnRDb25maWcsIHR5cGUgQ2hhaW59IGZyb20gJ3ZpZW0nXG5pbXBvcnQge1N0b3JlQXBpfSBmcm9tICd6dXN0YW5kL3ZhbmlsbGEnO1xuXG5cblxuZXhwb3J0IGNvbnN0IGdhbmFjaGUgPSB7XG4gIGlkOiAxMzM3LFxuICBuYW1lOiAnR2FuYWNoZScsXG4gIG5hdGl2ZUN1cnJlbmN5OiB7bmFtZTogJ0dhbmFjaGUnLCBzeW1ib2w6ICdHQU4nLCBkZWNpbWFsczogMTh9LFxuICBycGNVcmxzOiB7ZGVmYXVsdDoge2h0dHA6IFsnaHR0cDovLzEyNy4wLjAuMTo3NTQ1J119fSxcblxufSBhcyBjb25zdCBzYXRpc2ZpZXMgQ2hhaW5cblxuXG5leHBvcnQgY29uc3QgY29uZmlnID0gY3JlYXRlQ29uZmlnKHtcbiAgY2hhaW5zOiBbZ29lcmxpLCBzZXBvbGlhLCBnYW5hY2hlXSxcbiAgdHJhbnNwb3J0czoge1xuICAgIC8vIFttYWlubmV0LmlkXTogaHR0cCgpLFxuICAgIC8vIFtzZXBvbGlhLmlkXTogaHR0cCgpLFxuICAgIFtnYW5hY2hlLmlkXTogaHR0cCgpXG4gICAgLy8gW2dvZXJsaS5pZF06aHR0cCgpXG4gIH0sXG59KVxuIl0sIm5hbWVzIjpbImh0dHAiLCJjcmVhdGVDb25maWciLCJzZXBvbGlhIiwiZ29lcmxpIiwiZ2FuYWNoZSIsImlkIiwibmFtZSIsIm5hdGl2ZUN1cnJlbmN5Iiwic3ltYm9sIiwiZGVjaW1hbHMiLCJycGNVcmxzIiwiZGVmYXVsdCIsImNvbmZpZyIsImNoYWlucyIsInRyYW5zcG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./config/wagmi.config.ts\n"));

/***/ })

});