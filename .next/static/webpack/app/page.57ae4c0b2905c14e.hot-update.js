"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/Components/Card.tsx":
/*!*************************************!*\
  !*** ./src/app/Components/Card.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\nfunction Card(param) {\n    let { Titulo, Imagen, Descripcion } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-7 bg-zinc-600 rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" text-black dark:text-[#FFD850] text-2xl mb-4 font-bold\",\n                children: Titulo\n            }, void 0, false, {\n                fileName: \"/Users/abrahamsaldivar/Desktop/Fox-Coding-Website/src/app/Components/Card.tsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" h-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"rounded-2xl\",\n                    src: Imagen,\n                    width: 1500,\n                    height: 300,\n                    alt: \"Fox Coding Hackaton Image\",\n                    loading: \"lazy\",\n                    style: {\n                        objectFit: \"cover\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/abrahamsaldivar/Desktop/Fox-Coding-Website/src/app/Components/Card.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abrahamsaldivar/Desktop/Fox-Coding-Website/src/app/Components/Card.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-black dark:text-white mt-4\",\n                children: Descripcion\n            }, void 0, false, {\n                fileName: \"/Users/abrahamsaldivar/Desktop/Fox-Coding-Website/src/app/Components/Card.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abrahamsaldivar/Desktop/Fox-Coding-Website/src/app/Components/Card.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50cy9DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzhCO0FBTWYsU0FBU0MsS0FBSyxLQUFzQztRQUF0QyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsV0FBVyxFQUFTLEdBQXRDO0lBQ3pCLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFZOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1ZKOzs7Ozs7MEJBRUwsOERBQUNHO2dCQUFJQyxXQUFVOzBCQUNmLDRFQUFDTixrREFBS0E7b0JBQ0ZNLFdBQVU7b0JBQ1ZDLEtBQUtKO29CQUNMSyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxLQUFJO29CQUNKQyxTQUFRO29CQUNSQyxPQUFPO3dCQUFFQyxXQUFXO29CQUFROzs7Ozs7Ozs7OzswQkFHaEMsOERBQUNSO2dCQUFJQyxXQUFVOzBCQUNkRjs7Ozs7Ozs7Ozs7O0FBSWI7S0F0QndCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NvbXBvbmVudHMvQ2FyZC50c3g/ZTA2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIlxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIFRpdHVsbzpzdHJpbmcsXG4gICAgSW1hZ2VuOnN0cmluZyxcbiAgICBEZXNjcmlwY2lvbjpzdHJpbmdcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoeyBUaXR1bG8sIEltYWdlbiwgRGVzY3JpcGNpb24gfTogUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHAtNyBiZy16aW5jLTYwMCByb3VuZGVkLTJ4bGB9ID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtYmxhY2sgZGFyazp0ZXh0LVsjRkZEODUwXSB0ZXh0LTJ4bCBtYi00IGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIHtUaXR1bG99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtNFwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGxcIlxuICAgICAgICAgICAgICAgIHNyYz17SW1hZ2VufVxuICAgICAgICAgICAgICAgIHdpZHRoPXsxNTAwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgICAgIGFsdD1cIkZveCBDb2RpbmcgSGFja2F0b24gSW1hZ2VcIlxuICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6ICdjb3ZlcicgfX0gXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIG10LTRcIj5cbiAgICAgICAgICAgIHtEZXNjcmlwY2lvbn0gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsIkNhcmQiLCJUaXR1bG8iLCJJbWFnZW4iLCJEZXNjcmlwY2lvbiIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwibG9hZGluZyIsInN0eWxlIiwib2JqZWN0Rml0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Components/Card.tsx\n"));

/***/ })

});