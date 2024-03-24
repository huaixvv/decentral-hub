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

/***/ "(app-pages-browser)/./app/hera-faucet/page.tsx":
/*!**********************************!*\
  !*** ./app/hera-faucet/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hera_faucet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hera-faucet.css */ \"(app-pages-browser)/./app/hera-faucet/hera-faucet.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wagmi/core */ \"(app-pages-browser)/./node_modules/@wagmi/core/dist/esm/actions/writeContract.js\");\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wagmi/core */ \"(app-pages-browser)/./node_modules/@wagmi/core/dist/esm/actions/connect.js\");\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wagmi/core */ \"(app-pages-browser)/./node_modules/@wagmi/core/dist/esm/connectors/injected.js\");\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wagmi/core */ \"(app-pages-browser)/./node_modules/@wagmi/core/dist/esm/actions/disconnect.js\");\n/* harmony import */ var _config_wagmi_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/wagmi.config */ \"(app-pages-browser)/./config/wagmi.config.ts\");\n/* harmony import */ var _barrel_optimize_names_Popconfirm_message_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Popconfirm,message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var _barrel_optimize_names_Popconfirm_message_antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Popconfirm,message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/popconfirm/index.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utils */ \"(app-pages-browser)/./utils/utils.tsx\");\n/* harmony import */ var _abi_hera_faucet_abi_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/abi/hera.faucet.abi.json */ \"(app-pages-browser)/./abi/hera.faucet.abi.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst contract = {\n    address: _abi_hera_faucet_abi_json__WEBPACK_IMPORTED_MODULE_5__.contractAddress,\n    abi: _abi_hera_faucet_abi_json__WEBPACK_IMPORTED_MODULE_5__.abi\n};\nconst Faucet = ()=>{\n    _s();\n    const [loginAddress, setLoginAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [messageApi, contextHolder] = _barrel_optimize_names_Popconfirm_message_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"].useMessage();\n    const Withdraw = async ()=>{\n        try {\n            if (!loginAddress) {\n                messageApi.error(\"Wallet is not connected!\");\n                return;\n            }\n            await (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_7__.writeContract)(_config_wagmi_config__WEBPACK_IMPORTED_MODULE_3__.config, {\n                ...contract,\n                functionName: \"withdraw\"\n            });\n            messageApi.success(\"withdraw success\");\n        } catch (e) {\n            var _error_cause;\n            // console.log(e);\n            const error = e;\n            // @ts-ignore\n            messageApi.error((error === null || error === void 0 ? void 0 : (_error_cause = error.cause) === null || _error_cause === void 0 ? void 0 : _error_cause.message) || e.message);\n        }\n    };\n    const handleConnectWallet = (loginAddress)=>{\n        setLoginAddress(loginAddress);\n    };\n    const handleDisConnectWallet = ()=>{\n        setLoginAddress(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            contextHolder,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-3xl mt-5 font-bold\",\n                                children: \"Hera Faucet\"\n                            }, void 0, false, {\n                                fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-faucet/page.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectWallet, {\n                                onDisconnected: handleDisConnectWallet,\n                                onConnected: handleConnectWallet,\n                                loginAddress: loginAddress\n                            }, void 0, false, {\n                                fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-faucet/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-faucet/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"faucet-hr mb-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-faucet/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-lg mt-4 title-2\",\n                        children: \"Withdraw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-faucet/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex justify-center flex-wrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-3/4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border border-gray-600 flex justify-center items-center flex-wrap text-left mt-6 h-24\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-left\",\n                                        children: [\n                                            \"You are allowed to withdraw once a day.\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-faucet/page.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 56\n                                            }, undefined),\n                                            \"You are allowed to withdraw 1 Hera token every time.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-faucet/page.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-faucet/page.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-faucet/page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: Withdraw,\n                                className: \"w-3/4 bg-gray-700 text-white py-2 px-6 rounded text-center cursor-pointer mt-10 address-button\",\n                                children: \"Withdraw\"\n                            }, void 0, false, {\n                                fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-faucet/page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-faucet/page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-faucet/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Faucet, \"L0sLz2fCP6ys3ivF+nlwCVPVqzM=\", false, function() {\n    return [\n        _barrel_optimize_names_Popconfirm_message_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"].useMessage\n    ];\n});\n_c = Faucet;\nconst ConnectWallet = (param)=>{\n    let { onConnected, onDisconnected, loginAddress } = param;\n    _s1();\n    // const [loginAddress, setLoginAddress] = useState<string>(\"\");\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const con = async ()=>{\n        // disconnect wallet\n        if (loginAddress) {\n            setOpen(true);\n        } else {\n            const res = await (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_8__.connect)(_config_wagmi_config__WEBPACK_IMPORTED_MODULE_3__.config, {\n                connector: (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_9__.injected)()\n            });\n            // setLoginAddress(res?.accounts[0] || \"\");\n            onConnected(res === null || res === void 0 ? void 0 : res.accounts[0]);\n        }\n    };\n    const confirm = async (e)=>{\n        await (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_10__.disconnect)(_config_wagmi_config__WEBPACK_IMPORTED_MODULE_3__.config);\n        // setLoginAddress(\"\");\n        onDisconnected();\n        setOpen(false);\n    };\n    const cancel = (e)=>{\n        setOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Popconfirm_message_antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            open: open,\n            title: \"Disconnect Wallet?\",\n            // @ts-ignore\n            onConfirm: confirm,\n            // @ts-ignore\n            onCancel: cancel,\n            okType: \"danger\",\n            okText: \"Yes\",\n            cancelText: \"No\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: con,\n                className: \"w-40 h-8 leading-8 mt-6 bg-black text-white text-center cursor-pointer rounded\",\n                children: loginAddress ? (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.truncateText)(loginAddress, 10) : \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-faucet/page.tsx\",\n                lineNumber: 130,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/huaixv/Desktop/work-space/web3/decentral-hub/frontend/app/hera-faucet/page.tsx\",\n            lineNumber: 119,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s1(ConnectWallet, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c1 = ConnectWallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Faucet);\nvar _c, _c1;\n$RefreshReg$(_c, \"Faucet\");\n$RefreshReg$(_c1, \"ConnectWallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9oZXJhLWZhdWNldC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ0s7QUFDdUU7QUFDekQ7QUFDSjtBQUNFO0FBRVc7QUFHdEQsTUFBTVUsV0FBVztJQUNmQyxTQUFTRixzRUFBNEI7SUFDckNJLEtBQUtKLDBEQUFnQjtBQUN2QjtBQUVBLE1BQU1LLFNBQVM7O0lBRWIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2hCLCtDQUFRQSxDQUFTO0lBQ3pELE1BQU0sQ0FBQ2lCLFlBQVlDLGNBQWMsR0FBR1osc0ZBQU9BLENBQUNhLFVBQVU7SUFHdEQsTUFBTUMsV0FBVztRQUVmLElBQUk7WUFDRixJQUFJLENBQUNMLGNBQWM7Z0JBQ2pCRSxXQUFXSSxLQUFLLENBQUM7Z0JBQ2pCO1lBQ0Y7WUFFQSxNQUFNakIsMERBQWFBLENBQUNDLHdEQUFNQSxFQUFFO2dCQUMxQixHQUFHSyxRQUFRO2dCQUNYWSxjQUFjO1lBQ2hCO1lBQ0FMLFdBQVdNLE9BQU8sQ0FBQztRQUNyQixFQUFFLE9BQU9DLEdBQUc7Z0JBS09IO1lBSGpCLGtCQUFrQjtZQUNsQixNQUFNQSxRQUFRRztZQUNkLGFBQWE7WUFDYlAsV0FBV0ksS0FBSyxDQUFDQSxDQUFBQSxrQkFBQUEsNkJBQUFBLGVBQUFBLE1BQU9JLEtBQUssY0FBWkosbUNBQUFBLGFBQWNmLE9BQU8sS0FBSWtCLEVBQUVsQixPQUFPO1FBQ3JEO0lBQ0Y7SUFFQSxNQUFNb0Isc0JBQXNCLENBQUNYO1FBQzNCQyxnQkFBZ0JEO0lBQ2xCO0lBRUEsTUFBTVkseUJBQXlCO1FBQzdCWCxnQkFBZ0I7SUFDbEI7SUFFQSxxQkFDRTs7WUFDR0U7MEJBQ0QsOERBQUNVOztrQ0FDQyw4REFBQ0E7d0JBQUlDLFdBQVc7OzBDQUNkLDhEQUFDRDtnQ0FBSUMsV0FBVzswQ0FBMkI7Ozs7OzswQ0FDM0MsOERBQUNDO2dDQUNDQyxnQkFBZ0JKO2dDQUNoQkssYUFBYU47Z0NBQ2JYLGNBQWNBOzs7Ozs7Ozs7Ozs7a0NBRWxCLDhEQUFDa0I7d0JBQUdKLFdBQVc7Ozs7OztrQ0FFZiw4REFBQ0Q7d0JBQUlDLFdBQVc7a0NBQXdCOzs7Ozs7a0NBRXhDLDhEQUFDRDt3QkFBSUMsV0FBVzs7MENBQ2QsOERBQUNEO2dDQUFJQyxXQUFXOzBDQUNkLDRFQUFDRDtvQ0FBSUMsV0FBVzs4Q0FDZCw0RUFBQ0s7d0NBQUVMLFdBQVc7OzRDQUFhOzBEQUNjLDhEQUFDTTs7Ozs7NENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQU1sRCw4REFBQ1A7Z0NBQ0NRLFNBQVNoQjtnQ0FDVFMsV0FBVTswQ0FBaUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXZIO0dBdkVNZjs7UUFHZ0NSLHNGQUFPQSxDQUFDYTs7O0tBSHhDTDtBQXlFTixNQUFNZ0IsZ0JBQWdCO1FBQUMsRUFBQ0UsV0FBVyxFQUFFRCxjQUFjLEVBQUVoQixZQUFZLEVBQUs7O0lBRXBFLGdFQUFnRTtJQUNoRSxNQUFNLENBQUNzQixNQUFNQyxRQUFRLEdBQUd0QywrQ0FBUUEsQ0FBVTtJQUUxQyxNQUFNdUMsTUFBTTtRQUNWLG9CQUFvQjtRQUNwQixJQUFJeEIsY0FBYztZQUNoQnVCLFFBQVE7UUFDVixPQUFPO1lBQ0wsTUFBTUUsTUFBTSxNQUFNdkMsb0RBQU9BLENBQUNJLHdEQUFNQSxFQUFFO2dCQUFDb0MsV0FBV3RDLHFEQUFRQTtZQUFFO1lBQ3hELDJDQUEyQztZQUMzQzZCLFlBQVlRLGdCQUFBQSwwQkFBQUEsSUFBS0UsUUFBUSxDQUFDLEVBQUU7UUFDOUI7SUFDRjtJQUVBLE1BQU1DLFVBQVUsT0FBT25CO1FBQ3JCLE1BQU10Qix3REFBVUEsQ0FBQ0csd0RBQU1BO1FBQ3ZCLHVCQUF1QjtRQUN2QjBCO1FBQ0FPLFFBQVE7SUFDVjtJQUVBLE1BQU1NLFNBQVMsQ0FBQ3BCO1FBQ2RjLFFBQVE7SUFDVjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDL0IsdUZBQVVBO1lBQ1Q4QixNQUFNQTtZQUNOUSxPQUFNO1lBQ04sYUFBYTtZQUNiQyxXQUFXSDtZQUNYLGFBQWE7WUFDYkksVUFBVUg7WUFDVkksUUFBTztZQUNQQyxRQUFPO1lBQ1BDLFlBQVc7c0JBRVgsNEVBQUN0QjtnQkFDQ1EsU0FBU0c7Z0JBQ1RWLFdBQVc7MEJBQ1ZkLGVBQWVQLDBEQUFZQSxDQUFDTyxjQUFjLE1BQU07Ozs7Ozs7Ozs7OztBQUszRDtJQWhETWU7TUFBQUE7QUFrRE4sK0RBQWVoQixNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9oZXJhLWZhdWNldC9wYWdlLnRzeD8zMjFlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgXCIuL2hlcmEtZmF1Y2V0LmNzc1wiXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdCwgZGlzY29ubmVjdCwgaW5qZWN0ZWQsIHdyaXRlQ29udHJhY3QsIHR5cGUgV3JpdGVDb250cmFjdEVycm9yVHlwZX0gZnJvbSBcIkB3YWdtaS9jb3JlXCI7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIkAvY29uZmlnL3dhZ21pLmNvbmZpZ1wiO1xuaW1wb3J0IHttZXNzYWdlLCBQb3Bjb25maXJtfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHt0cnVuY2F0ZVRleHR9IGZyb20gXCJAL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQge2V0aGVyc30gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IGNvbnRyYWN0RGF0YSBmcm9tIFwiQC9hYmkvaGVyYS5mYXVjZXQuYWJpLmpzb25cIjtcblxuXG5jb25zdCBjb250cmFjdCA9IHtcbiAgYWRkcmVzczogY29udHJhY3REYXRhLmNvbnRyYWN0QWRkcmVzcyBhcyBgMHgke3N0cmluZ31gLFxuICBhYmk6IGNvbnRyYWN0RGF0YS5hYmlcbn1cblxuY29uc3QgRmF1Y2V0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtsb2dpbkFkZHJlc3MsIHNldExvZ2luQWRkcmVzc10gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbbWVzc2FnZUFwaSwgY29udGV4dEhvbGRlcl0gPSBtZXNzYWdlLnVzZU1lc3NhZ2UoKTtcblxuXG4gIGNvbnN0IFdpdGhkcmF3ID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmICghbG9naW5BZGRyZXNzKSB7XG4gICAgICAgIG1lc3NhZ2VBcGkuZXJyb3IoXCJXYWxsZXQgaXMgbm90IGNvbm5lY3RlZCFcIilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHdyaXRlQ29udHJhY3QoY29uZmlnLCB7XG4gICAgICAgIC4uLmNvbnRyYWN0LFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwid2l0aGRyYXdcIixcbiAgICAgIH0pO1xuICAgICAgbWVzc2FnZUFwaS5zdWNjZXNzKFwid2l0aGRyYXcgc3VjY2Vzc1wiKVxuICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgLy8gY29uc29sZS5sb2coZSk7XG4gICAgICBjb25zdCBlcnJvciA9IGUgYXMgV3JpdGVDb250cmFjdEVycm9yVHlwZVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgbWVzc2FnZUFwaS5lcnJvcihlcnJvcj8uY2F1c2U/Lm1lc3NhZ2UgfHwgZS5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNvbm5lY3RXYWxsZXQgPSAobG9naW5BZGRyZXNzOnN0cmluZykgPT4ge1xuICAgIHNldExvZ2luQWRkcmVzcyhsb2dpbkFkZHJlc3MpXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGlzQ29ubmVjdFdhbGxldCA9ICgpID0+IHtcbiAgICBzZXRMb2dpbkFkZHJlc3MoXCJcIilcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Y29udGV4dEhvbGRlcn1cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImZsZXgganVzdGlmeS1iZXR3ZWVuXCJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRleHQtM3hsIG10LTUgZm9udC1ib2xkXCJ9PkhlcmEgRmF1Y2V0PC9kaXY+XG4gICAgICAgICAgPENvbm5lY3RXYWxsZXRcbiAgICAgICAgICAgIG9uRGlzY29ubmVjdGVkPXtoYW5kbGVEaXNDb25uZWN0V2FsbGV0fVxuICAgICAgICAgICAgb25Db25uZWN0ZWQ9e2hhbmRsZUNvbm5lY3RXYWxsZXR9XG4gICAgICAgICAgICBsb2dpbkFkZHJlc3M9e2xvZ2luQWRkcmVzc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhyIGNsYXNzTmFtZT17XCJmYXVjZXQtaHIgbWItOFwifS8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widGV4dC1sZyBtdC00IHRpdGxlLTJcIn0+V2l0aGRyYXc8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXBcIn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widy0zLzRcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJib3JkZXIgYm9yZGVyLWdyYXktNjAwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtd3JhcCB0ZXh0LWxlZnQgbXQtNiBoLTI0XCJ9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1widGV4dC1sZWZ0XCJ9PlxuICAgICAgICAgICAgICAgIFlvdSBhcmUgYWxsb3dlZCB0byB3aXRoZHJhdyBvbmNlIGEgZGF5Ljxici8+XG4gICAgICAgICAgICAgICAgWW91IGFyZSBhbGxvd2VkIHRvIHdpdGhkcmF3IDEgSGVyYSB0b2tlbiBldmVyeSB0aW1lLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9e1dpdGhkcmF3fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zLzQgYmctZ3JheS03MDAgdGV4dC13aGl0ZSBweS0yIHB4LTYgcm91bmRlZCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlciBtdC0xMCBhZGRyZXNzLWJ1dHRvblwiPlxuICAgICAgICAgICAgV2l0aGRyYXdcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxuXG59XG5cbmNvbnN0IENvbm5lY3RXYWxsZXQgPSAoe29uQ29ubmVjdGVkLCBvbkRpc2Nvbm5lY3RlZCwgbG9naW5BZGRyZXNzfTphbnkpID0+IHtcblxuICAvLyBjb25zdCBbbG9naW5BZGRyZXNzLCBzZXRMb2dpbkFkZHJlc3NdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGNvbiA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBkaXNjb25uZWN0IHdhbGxldFxuICAgIGlmIChsb2dpbkFkZHJlc3MpIHtcbiAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNvbm5lY3QoY29uZmlnLCB7Y29ubmVjdG9yOiBpbmplY3RlZCgpfSk7XG4gICAgICAvLyBzZXRMb2dpbkFkZHJlc3MocmVzPy5hY2NvdW50c1swXSB8fCBcIlwiKTtcbiAgICAgIG9uQ29ubmVjdGVkKHJlcz8uYWNjb3VudHNbMF0pXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbmZpcm0gPSBhc3luYyAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBhd2FpdCBkaXNjb25uZWN0KGNvbmZpZyk7XG4gICAgLy8gc2V0TG9naW5BZGRyZXNzKFwiXCIpO1xuICAgIG9uRGlzY29ubmVjdGVkKClcbiAgICBzZXRPcGVuKGZhbHNlKVxuICB9O1xuXG4gIGNvbnN0IGNhbmNlbCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIHNldE9wZW4oZmFsc2UpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFBvcGNvbmZpcm1cbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgdGl0bGU9XCJEaXNjb25uZWN0IFdhbGxldD9cIlxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG9uQ29uZmlybT17Y29uZmlybX1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBvbkNhbmNlbD17Y2FuY2VsfVxuICAgICAgICBva1R5cGU9XCJkYW5nZXJcIlxuICAgICAgICBva1RleHQ9XCJZZXNcIlxuICAgICAgICBjYW5jZWxUZXh0PVwiTm9cIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17Y29ufVxuICAgICAgICAgIGNsYXNzTmFtZT17XCJ3LTQwIGgtOCBsZWFkaW5nLTggbXQtNiBiZy1ibGFjayB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyIHJvdW5kZWRcIn0+XG4gICAgICAgICAge2xvZ2luQWRkcmVzcyA/IHRydW5jYXRlVGV4dChsb2dpbkFkZHJlc3MsIDEwKSA6IFwiQ29ubmVjdCBXYWxsZXRcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BvcGNvbmZpcm0+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmF1Y2V0XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjb25uZWN0IiwiZGlzY29ubmVjdCIsImluamVjdGVkIiwid3JpdGVDb250cmFjdCIsImNvbmZpZyIsIm1lc3NhZ2UiLCJQb3Bjb25maXJtIiwidHJ1bmNhdGVUZXh0IiwiY29udHJhY3REYXRhIiwiY29udHJhY3QiLCJhZGRyZXNzIiwiY29udHJhY3RBZGRyZXNzIiwiYWJpIiwiRmF1Y2V0IiwibG9naW5BZGRyZXNzIiwic2V0TG9naW5BZGRyZXNzIiwibWVzc2FnZUFwaSIsImNvbnRleHRIb2xkZXIiLCJ1c2VNZXNzYWdlIiwiV2l0aGRyYXciLCJlcnJvciIsImZ1bmN0aW9uTmFtZSIsInN1Y2Nlc3MiLCJlIiwiY2F1c2UiLCJoYW5kbGVDb25uZWN0V2FsbGV0IiwiaGFuZGxlRGlzQ29ubmVjdFdhbGxldCIsImRpdiIsImNsYXNzTmFtZSIsIkNvbm5lY3RXYWxsZXQiLCJvbkRpc2Nvbm5lY3RlZCIsIm9uQ29ubmVjdGVkIiwiaHIiLCJwIiwiYnIiLCJvbkNsaWNrIiwib3BlbiIsInNldE9wZW4iLCJjb24iLCJyZXMiLCJjb25uZWN0b3IiLCJhY2NvdW50cyIsImNvbmZpcm0iLCJjYW5jZWwiLCJ0aXRsZSIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwib2tUeXBlIiwib2tUZXh0IiwiY2FuY2VsVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/hera-faucet/page.tsx\n"));

/***/ })

});