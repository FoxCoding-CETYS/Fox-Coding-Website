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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_github_mark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../public/github-mark */ \"(app-pages-browser)/./public/github-mark.tsx\");\n\n\n\nfunction Card(param) {\n    let { Titulo, Imagen, Descripcion } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-7 bg-zinc-600 rounded-2xl flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" text-black dark:text-[#FFD850] text-2xl mb-4 font-bold\",\n                children: Titulo\n            }, void 0, false, {\n                fileName: \"/Users/abrahamsaldivar/Desktop/Fox-Coding-Website/src/app/Components/Card.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-80 relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"rounded-2xl\",\n                    src: Imagen,\n                    fill: true,\n                    alt: \"Fox Coding Hackaton Image\",\n                    loading: \"lazy\",\n                    style: {\n                        objectFit: \"cover\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/abrahamsaldivar/Desktop/Fox-Coding-Website/src/app/Components/Card.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abrahamsaldivar/Desktop/Fox-Coding-Website/src/app/Components/Card.tsx\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-black dark:text-white mt-4\",\n                children: Descripcion\n            }, void 0, false, {\n                fileName: \"/Users/abrahamsaldivar/Desktop/Fox-Coding-Website/src/app/Components/Card.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-row-reverse\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_github_mark__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/abrahamsaldivar/Desktop/Fox-Coding-Website/src/app/Components/Card.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abrahamsaldivar/Desktop/Fox-Coding-Website/src/app/Components/Card.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abrahamsaldivar/Desktop/Fox-Coding-Website/src/app/Components/Card.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50cy9DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM4QjtBQUN3QjtBQU12QyxTQUFTRSxLQUFLLEtBQXNDO1FBQXRDLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxXQUFXLEVBQVMsR0FBdEM7SUFDekIscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVk7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDVko7Ozs7OzswQkFFRCw4REFBQ0c7Z0JBQUlDLFdBQVU7MEJBQ2YsNEVBQUNQLGtEQUFLQTtvQkFDRk8sV0FBVTtvQkFDVkMsS0FBS0o7b0JBQ0xLLElBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pDLFNBQVE7b0JBQ1JDLE9BQU87d0JBQUVDLFdBQVc7b0JBQVE7Ozs7Ozs7Ozs7OzBCQUdwQyw4REFBQ1A7Z0JBQUlDLFdBQVU7MEJBQ2RGOzs7Ozs7MEJBRUQsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDTiwyREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7S0F4QndCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NvbXBvbmVudHMvQ2FyZC50c3g/ZTA2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIlxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgR2l0SHViTG9nbyBmcm9tICcuLy4uLy4uLy4uL3B1YmxpYy9naXRodWItbWFyaydcbmludGVyZmFjZSBQcm9wcyB7XG4gICAgVGl0dWxvOnN0cmluZywgXG4gICAgSW1hZ2VuOnN0cmluZyxcbiAgICBEZXNjcmlwY2lvbjpzdHJpbmdcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoeyBUaXR1bG8sIEltYWdlbiwgRGVzY3JpcGNpb24gfTogUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHAtNyBiZy16aW5jLTYwMCByb3VuZGVkLTJ4bCBmbGV4LWNvbGB9ID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtYmxhY2sgZGFyazp0ZXh0LVsjRkZEODUwXSB0ZXh0LTJ4bCBtYi00IGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIHtUaXR1bG99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTgwIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtJbWFnZW59XG4gICAgICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiRm94IENvZGluZyBIYWNrYXRvbiBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiAnY292ZXInIH19IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIG10LTRcIj5cbiAgICAgICAgICAgIHtEZXNjcmlwY2lvbn0gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1yb3ctcmV2ZXJzZVwiPlxuICAgICAgICAgICAgICAgIDxHaXRIdWJMb2dvLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIkltYWdlIiwiR2l0SHViTG9nbyIsIkNhcmQiLCJUaXR1bG8iLCJJbWFnZW4iLCJEZXNjcmlwY2lvbiIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImZpbGwiLCJhbHQiLCJsb2FkaW5nIiwic3R5bGUiLCJvYmplY3RGaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Components/Card.tsx\n"));

/***/ })

});