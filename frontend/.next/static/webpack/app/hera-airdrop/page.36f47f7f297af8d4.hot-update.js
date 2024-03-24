"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/hera-airdrop/page",{

/***/ "(app-pages-browser)/./app/hera-airdrop/page.tsx":
/*!***********************************!*\
  !*** ./app/hera-airdrop/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ConnectWallet */ \"(app-pages-browser)/./components/ConnectWallet.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _airdrop_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./airdrop.css */ \"(app-pages-browser)/./app/hera-airdrop/airdrop.css\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wagmi/core */ \"(app-pages-browser)/./node_modules/@wagmi/core/dist/esm/actions/writeContract.js\");\n/* harmony import */ var _config_wagmi_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/wagmi.config */ \"(app-pages-browser)/./config/wagmi.config.ts\");\n/* harmony import */ var _abi_hera_airdrop_abi_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/abi/hera.airdrop.abi.json */ \"(app-pages-browser)/./abi/hera.airdrop.abi.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/utils/units.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst contract = {\n    address: _abi_hera_airdrop_abi_json__WEBPACK_IMPORTED_MODULE_5__.contractAddress,\n    abi: _abi_hera_airdrop_abi_json__WEBPACK_IMPORTED_MODULE_5__.abi\n};\nconst HeraAirdrop = ()=>{\n    _s();\n    const [loginAddress, setLoginAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [addressList, setAddressList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [messageApi, contextHolder] = _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"].useMessage();\n    const handleConnectWallet = (loginAddress)=>{\n        setLoginAddress(loginAddress);\n    };\n    const handleDisConnectWallet = ()=>{\n        setLoginAddress(\"\");\n    };\n    const addressChange = (e)=>{\n        const addressStr = e.target.value;\n        const text = addressStr.trim();\n        const lines = text.split(\"\\n\");\n        const res = lines.map((line)=>line.trim());\n        setAddressList([\n            ...res\n        ]);\n    };\n    const AirDrop = async ()=>{\n        if (!loginAddress) {\n            messageApi.error(\"Please connect wallet\");\n            return;\n        }\n        try {\n            await (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_7__.writeContract)(_config_wagmi_config__WEBPACK_IMPORTED_MODULE_4__.config, {\n                ...contract,\n                functionName: \"drop\",\n                args: [\n                    addressList,\n                    ethers__WEBPACK_IMPORTED_MODULE_8__.parseEther(\"10\")\n                ]\n            });\n            messageApi.success(\"Airdrop success\");\n        } catch (e) {\n            var _error_cause;\n            const error = e;\n            // @ts-ignore\n            messageApi.error((error === null || error === void 0 ? void 0 : (_error_cause = error.cause) === null || _error_cause === void 0 ? void 0 : _error_cause.message) || e.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            contextHolder,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-3xl mt-5 font-bold\",\n                                children: \"Hera Airdrop\"\n                            }, void 0, false, {\n                                fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-airdrop/page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                onDisconnected: handleDisConnectWallet,\n                                onConnected: handleConnectWallet,\n                                loginAddress: loginAddress\n                            }, void 0, false, {\n                                fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-airdrop/page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-airdrop/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"faucet-hr mb-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-airdrop/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-lg mt-4 title-2\",\n                        children: \"Airdrop\"\n                    }, void 0, false, {\n                        fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-airdrop/page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center mt-6 flex-wrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                onChange: addressChange,\n                                // @ts-ignore\n                                rows: \"10\",\n                                cols: \"64\",\n                                placeholder: \"Enter your address here, one input per line, every address will receive 10 HA.\",\n                                className: \"airdrop-textarea\"\n                            }, void 0, false, {\n                                fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-airdrop/page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: AirDrop,\n                                className: \"drop-btn bg-gray-700 text-white py-2 px-6 rounded text-center cursor-pointer mt-10 address-button\",\n                                children: \"AirDrop\"\n                            }, void 0, false, {\n                                fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-airdrop/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-airdrop/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-airdrop/page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HeraAirdrop, \"hzey2DEovMORrE/lqh2Vz/8myAQ=\", false, function() {\n    return [\n        _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"].useMessage\n    ];\n});\n_c = HeraAirdrop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeraAirdrop);\nvar _c;\n$RefreshReg$(_c, \"HeraAirdrop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9oZXJhLWFpcmRyb3AvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUV1RDtBQUN4QjtBQUNUO0FBQ087QUFDMEM7QUFDMUI7QUFFVTtBQUN6QjtBQUU5QixNQUFNTyxXQUFXO0lBQ2ZDLFNBQVNILHVFQUE0QjtJQUNyQ0ssS0FBS0wsMkRBQWdCO0FBQ3ZCO0FBRUEsTUFBTU0sY0FBYzs7SUFFbEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDYSxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQSxDQUFXLEVBQUU7SUFDM0QsTUFBTSxDQUFDZSxZQUFZQyxjQUFjLEdBQUdmLDJFQUFPQSxDQUFDZ0IsVUFBVTtJQUV0RCxNQUFNQyxzQkFBc0IsQ0FBQ1A7UUFDM0JDLGdCQUFnQkQ7SUFDbEI7SUFFQSxNQUFNUSx5QkFBeUI7UUFDN0JQLGdCQUFnQjtJQUNsQjtJQUVBLE1BQU1RLGdCQUFnQixDQUFDQztRQUNyQixNQUFNQyxhQUFhRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7UUFDakMsTUFBTUMsT0FBT0gsV0FBV0ksSUFBSTtRQUM1QixNQUFNQyxRQUFRRixLQUFLRyxLQUFLLENBQUM7UUFDekIsTUFBTUMsTUFBTUYsTUFBTUcsR0FBRyxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLTCxJQUFJO1FBQ3ZDWixlQUFlO2VBQUllO1NBQUk7SUFDekI7SUFFQSxNQUFNRyxVQUFVO1FBQ2QsSUFBSSxDQUFDckIsY0FBYztZQUNqQkksV0FBV2tCLEtBQUssQ0FBQztZQUNqQjtRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU0vQiwwREFBYUEsQ0FBQ0Msd0RBQU1BLEVBQUU7Z0JBQzFCLEdBQUdHLFFBQVE7Z0JBQ1g0QixjQUFjO2dCQUNkQyxNQUFNO29CQUFDdEI7b0JBQWFSLDhDQUFpQixDQUFDO2lCQUFNO1lBQzlDO1lBQ0FVLFdBQVdzQixPQUFPLENBQUM7UUFDckIsRUFBRSxPQUFPaEIsR0FBRztnQkFHT1k7WUFGakIsTUFBTUEsUUFBUVo7WUFDZCxhQUFhO1lBQ2JOLFdBQVdrQixLQUFLLENBQUNBLENBQUFBLGtCQUFBQSw2QkFBQUEsZUFBQUEsTUFBT0ssS0FBSyxjQUFaTCxtQ0FBQUEsYUFBY2hDLE9BQU8sS0FBSW9CLEVBQUVwQixPQUFPO1FBQ3JEO0lBQ0Y7SUFHQSxxQkFDRTs7WUFDR2U7MEJBQ0QsOERBQUN1Qjs7a0NBQ0MsOERBQUNBO3dCQUFJQyxXQUFXOzswQ0FDZCw4REFBQ0Q7Z0NBQUlDLFdBQVc7MENBQTJCOzs7Ozs7MENBQzNDLDhEQUFDekMsaUVBQWFBO2dDQUNaMEMsZ0JBQWdCdEI7Z0NBQ2hCdUIsYUFBYXhCO2dDQUNiUCxjQUFjQTs7Ozs7Ozs7Ozs7O2tDQUVsQiw4REFBQ2dDO3dCQUFHSCxXQUFXOzs7Ozs7a0NBRWYsOERBQUNEO3dCQUFJQyxXQUFXO2tDQUF3Qjs7Ozs7O2tDQUN4Qyw4REFBQ0Q7d0JBQUlDLFdBQVc7OzBDQUNkLDhEQUFDSTtnQ0FDQ0MsVUFBVXpCO2dDQUNWLGFBQWE7Z0NBQ2IwQixNQUFLO2dDQUFLQyxNQUFLO2dDQUFLQyxhQUFhO2dDQUNqQ1IsV0FBVzs7Ozs7OzBDQUViLDhEQUFDRDtnQ0FDQ1UsU0FBU2pCO2dDQUNUUSxXQUFVOzBDQUFvRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUg7R0F6RU05Qjs7UUFJZ0NULDJFQUFPQSxDQUFDZ0I7OztLQUp4Q1A7QUEyRU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2hlcmEtYWlyZHJvcC9wYWdlLnRzeD84NzlmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBDb25uZWN0V2FsbGV0IGZyb20gXCJAL2NvbXBvbmVudHMvQ29ubmVjdFdhbGxldFwiO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL2FpcmRyb3AuY3NzXCJcbmltcG9ydCB7bWVzc2FnZX0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7d3JpdGVDb250cmFjdCwgdHlwZSBXcml0ZUNvbnRyYWN0RXJyb3JUeXBlfSBmcm9tIFwiQHdhZ21pL2NvcmVcIjtcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiQC9jb25maWcvd2FnbWkuY29uZmlnXCI7XG5pbXBvcnQgYWlyZHJvcEFiaURhdGEgZnJvbSBcIkAvYWJpL2hlcmEuYWlyZHJvcC5hYmkuanNvblwiO1xuaW1wb3J0IGNvbnRyYWN0RGF0YSBmcm9tIFwiQC9hYmkvaGVyYS5haXJkcm9wLmFiaS5qc29uXCI7XG5pbXBvcnQge2V0aGVyc30gZnJvbSBcImV0aGVyc1wiO1xuXG5jb25zdCBjb250cmFjdCA9IHtcbiAgYWRkcmVzczogY29udHJhY3REYXRhLmNvbnRyYWN0QWRkcmVzcyBhcyBgMHgke3N0cmluZ31gLFxuICBhYmk6IGNvbnRyYWN0RGF0YS5hYmlcbn1cblxuY29uc3QgSGVyYUFpcmRyb3AgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2xvZ2luQWRkcmVzcywgc2V0TG9naW5BZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYWRkcmVzc0xpc3QsIHNldEFkZHJlc3NMaXN0XSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcbiAgY29uc3QgW21lc3NhZ2VBcGksIGNvbnRleHRIb2xkZXJdID0gbWVzc2FnZS51c2VNZXNzYWdlKCk7XG5cbiAgY29uc3QgaGFuZGxlQ29ubmVjdFdhbGxldCA9IChsb2dpbkFkZHJlc3M6c3RyaW5nKSA9PiB7XG4gICAgc2V0TG9naW5BZGRyZXNzKGxvZ2luQWRkcmVzcylcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEaXNDb25uZWN0V2FsbGV0ID0gKCkgPT4ge1xuICAgIHNldExvZ2luQWRkcmVzcyhcIlwiKVxuICB9O1xuXG4gIGNvbnN0IGFkZHJlc3NDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBhZGRyZXNzU3RyID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgdGV4dCA9IGFkZHJlc3NTdHIudHJpbSgpO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgY29uc3QgcmVzID0gbGluZXMubWFwKGxpbmUgPT4gbGluZS50cmltKCkpXG4gICAgc2V0QWRkcmVzc0xpc3QoWy4uLnJlc10pXG4gIH1cblxuICBjb25zdCBBaXJEcm9wID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghbG9naW5BZGRyZXNzKSB7XG4gICAgICBtZXNzYWdlQXBpLmVycm9yKFwiUGxlYXNlIGNvbm5lY3Qgd2FsbGV0XCIpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgd3JpdGVDb250cmFjdChjb25maWcsIHtcbiAgICAgICAgLi4uY29udHJhY3QsXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJkcm9wXCIsXG4gICAgICAgIGFyZ3M6IFthZGRyZXNzTGlzdCwgZXRoZXJzLnBhcnNlRXRoZXIoXCIxMFwiKV1cbiAgICAgIH0pO1xuICAgICAgbWVzc2FnZUFwaS5zdWNjZXNzKFwiQWlyZHJvcCBzdWNjZXNzXCIpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgZXJyb3IgPSBlIGFzIFdyaXRlQ29udHJhY3RFcnJvclR5cGVcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG1lc3NhZ2VBcGkuZXJyb3IoZXJyb3I/LmNhdXNlPy5tZXNzYWdlIHx8IGUubWVzc2FnZSlcbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtjb250ZXh0SG9sZGVyfVxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZmxleCBqdXN0aWZ5LWJldHdlZW5cIn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widGV4dC0zeGwgbXQtNSBmb250LWJvbGRcIn0+SGVyYSBBaXJkcm9wPC9kaXY+XG4gICAgICAgICAgPENvbm5lY3RXYWxsZXRcbiAgICAgICAgICAgIG9uRGlzY29ubmVjdGVkPXtoYW5kbGVEaXNDb25uZWN0V2FsbGV0fVxuICAgICAgICAgICAgb25Db25uZWN0ZWQ9e2hhbmRsZUNvbm5lY3RXYWxsZXR9XG4gICAgICAgICAgICBsb2dpbkFkZHJlc3M9e2xvZ2luQWRkcmVzc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhyIGNsYXNzTmFtZT17XCJmYXVjZXQtaHIgbWItOFwifS8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widGV4dC1sZyBtdC00IHRpdGxlLTJcIn0+QWlyZHJvcDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTYgZmxleC13cmFwXCJ9PlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgb25DaGFuZ2U9e2FkZHJlc3NDaGFuZ2V9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICByb3dzPVwiMTBcIiBjb2xzPVwiNjRcIiBwbGFjZWhvbGRlcj17XCJFbnRlciB5b3VyIGFkZHJlc3MgaGVyZSwgb25lIGlucHV0IHBlciBsaW5lLCBldmVyeSBhZGRyZXNzIHdpbGwgcmVjZWl2ZSAxMCBIQS5cIn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJhaXJkcm9wLXRleHRhcmVhXCJ9Lz5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9e0FpckRyb3B9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wLWJ0biBiZy1ncmF5LTcwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNiByb3VuZGVkIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyIG10LTEwIGFkZHJlc3MtYnV0dG9uXCI+XG4gICAgICAgICAgICBBaXJEcm9wXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVyYUFpcmRyb3A7XG4iXSwibmFtZXMiOlsiQ29ubmVjdFdhbGxldCIsInVzZVN0YXRlIiwibWVzc2FnZSIsIndyaXRlQ29udHJhY3QiLCJjb25maWciLCJjb250cmFjdERhdGEiLCJldGhlcnMiLCJjb250cmFjdCIsImFkZHJlc3MiLCJjb250cmFjdEFkZHJlc3MiLCJhYmkiLCJIZXJhQWlyZHJvcCIsImxvZ2luQWRkcmVzcyIsInNldExvZ2luQWRkcmVzcyIsImFkZHJlc3NMaXN0Iiwic2V0QWRkcmVzc0xpc3QiLCJtZXNzYWdlQXBpIiwiY29udGV4dEhvbGRlciIsInVzZU1lc3NhZ2UiLCJoYW5kbGVDb25uZWN0V2FsbGV0IiwiaGFuZGxlRGlzQ29ubmVjdFdhbGxldCIsImFkZHJlc3NDaGFuZ2UiLCJlIiwiYWRkcmVzc1N0ciIsInRhcmdldCIsInZhbHVlIiwidGV4dCIsInRyaW0iLCJsaW5lcyIsInNwbGl0IiwicmVzIiwibWFwIiwibGluZSIsIkFpckRyb3AiLCJlcnJvciIsImZ1bmN0aW9uTmFtZSIsImFyZ3MiLCJwYXJzZUV0aGVyIiwic3VjY2VzcyIsImNhdXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25EaXNjb25uZWN0ZWQiLCJvbkNvbm5lY3RlZCIsImhyIiwidGV4dGFyZWEiLCJvbkNoYW5nZSIsInJvd3MiLCJjb2xzIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/hera-airdrop/page.tsx\n"));

/***/ })

});