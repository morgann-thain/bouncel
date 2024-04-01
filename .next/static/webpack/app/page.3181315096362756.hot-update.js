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

/***/ "(app-pages-browser)/./src/components/Grid.tsx":
/*!*********************************!*\
  !*** ./src/components/Grid.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ObjType: function() { return /* binding */ ObjType; },\n/* harmony export */   \"default\": function() { return /* binding */ Grid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ \"(app-pages-browser)/./src/components/Cell.tsx\");\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ball */ \"(app-pages-browser)/./src/components/Ball.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nvar ObjType;\n(function(ObjType) {\n    ObjType[ObjType[\"EMPTY\"] = 0] = \"EMPTY\";\n    ObjType[ObjType[\"BALL\"] = 1] = \"BALL\";\n})(ObjType || (ObjType = {}));\nfunction initializeGrid(rows, columns) {\n    // Create a 2D array filled with null (no element in the cell)\n    return Array.from({\n        length: rows\n    }, ()=>Array(columns).fill(null));\n}\nfunction updateGrid(grid, elementsArray) {\n    // Clear the grid\n    for (let row of grid){\n        row.fill(null);\n    }\n    // Populate the grid with new positions of elements\n    for (const element of elementsArray){\n        if (grid[element.row] && grid[element.row][element.column] === null) {\n            grid[element.row][element.column] = element;\n        }\n    }\n}\nfunction Grid(param) {\n    let { rows, cols, initGrid } = param;\n    _s();\n    const debug = true;\n    const [objStates, setObjStates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initGrid);\n    const [cellElts, setCellElts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const cellSize = \"calc(100vw / \".concat(Math.max(rows, cols), \")\");\n    const [grid, setGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Create a grid array for rendering\n    // dependencies\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCellElts(objStates.map((obj)=>{\n            let cellElt;\n            switch(obj.type){\n                case 0:\n                    cellElt = null;\n                    break;\n                case 1:\n                    cellElt = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Ball__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/momothain/cs234/bouncel/src/components/Grid.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 35\n                    }, this);\n                    break;\n                default:\n                    throw new Error(\"you invented a new physics element. nice.\");\n            }\n            return [\n                cellElt,\n                obj.position\n            ];\n        }));\n        // \n        setGrid(Array.from({\n            length: rows * cols\n        }, (index)=>{\n            const pos = [\n                Math.floor(index / cols),\n                index % cols\n            ];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cell__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                pos: pos,\n                size: cellSize\n            }, \"{pos[0]},{pos[1]}\", false, {\n                fileName: \"/Users/momothain/cs234/bouncel/src/components/Grid.tsx\",\n                lineNumber: 81,\n                columnNumber: 20\n            }, this);\n        }));\n    }, [\n        objStates,\n        cellSize,\n        cols,\n        rows\n    ]);\n    function s() {}\n    // Adjust cell size based on grid dimensions\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"grid\",\n                gridTemplateColumns: \"repeat(\".concat(cols, \", 1fr)\"),\n                gridTemplateRows: \"repeat(\".concat(rows, \", 1fr)\"),\n                gap: \"1px\",\n                width: \"100vw\",\n                height: \"calc(100vw * \".concat(rows, \" / \").concat(cols, \")\"),\n                margin: \"auto\"\n            },\n            children: cellElts.flatMap((row, rowIndex)=>row.map((cellContent, colIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cell__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        pos: [\n                            rowIndex,\n                            colIndex\n                        ],\n                        size: cellSize,\n                        children: cellContent\n                    }, \"\".concat(rowIndex, \"-\").concat(colIndex), false, {\n                        fileName: \"/Users/momothain/cs234/bouncel/src/components/Grid.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 29\n                    }, this)))\n        }, void 0, false, {\n            fileName: \"/Users/momothain/cs234/bouncel/src/components/Grid.tsx\",\n            lineNumber: 94,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/momothain/cs234/bouncel/src/components/Grid.tsx\",\n        lineNumber: 93,\n        columnNumber: 9\n    }, this);\n}\n_s(Grid, \"Sbg6zgibHs1pIhnRhpgfXHLc2Mg=\");\n_c = Grid;\nvar _c;\n$RefreshReg$(_c, \"Grid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0dyaWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNwQztBQUNBOztVQUlkSzs7O0dBQUFBLFlBQUFBO0FBc0JaLFNBQVNDLGVBQWVDLElBQVksRUFBRUMsT0FBZTtJQUNqRCw4REFBOEQ7SUFDOUQsT0FBT0MsTUFBTUMsSUFBSSxDQUFDO1FBQUVDLFFBQVFKO0lBQUssR0FBRyxJQUFNRSxNQUFNRCxTQUFTSSxJQUFJLENBQUM7QUFDbEU7QUFFQSxTQUFTQyxXQUFXQyxJQUFJLEVBQUVDLGFBQWE7SUFDbkMsaUJBQWlCO0lBQ2pCLEtBQUssSUFBSUMsT0FBT0YsS0FBTTtRQUNsQkUsSUFBSUosSUFBSSxDQUFDO0lBQ2I7SUFFQSxtREFBbUQ7SUFDbkQsS0FBSyxNQUFNSyxXQUFXRixjQUFlO1FBQ2pDLElBQUlELElBQUksQ0FBQ0csUUFBUUQsR0FBRyxDQUFDLElBQUlGLElBQUksQ0FBQ0csUUFBUUQsR0FBRyxDQUFDLENBQUNDLFFBQVFDLE1BQU0sQ0FBQyxLQUFLLE1BQU07WUFDakVKLElBQUksQ0FBQ0csUUFBUUQsR0FBRyxDQUFDLENBQUNDLFFBQVFDLE1BQU0sQ0FBQyxHQUFHRDtRQUN4QztJQUNKO0FBQ0o7QUFHZSxTQUFTRSxLQUFLLEtBQW1DO1FBQW5DLEVBQUVaLElBQUksRUFBRWEsSUFBSSxFQUFFQyxRQUFRLEVBQWEsR0FBbkM7O0lBQ3pCLE1BQU1DLFFBQVE7SUFDZCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR3ZCLCtDQUFRQSxDQUFhb0I7SUFDdkQsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUd6QiwrQ0FBUUEsQ0FBMEIsRUFBRTtJQUNwRSxNQUFNMEIsV0FBVyxnQkFBcUMsT0FBckJDLEtBQUtDLEdBQUcsQ0FBQ3RCLE1BQU1hLE9BQU07SUFDdEQsTUFBTSxDQUFDTixNQUFNZ0IsUUFBUSxHQUFHN0IsK0NBQVFBLENBQWMsRUFBRTtJQUVoRCxvQ0FBb0M7SUFFcEMsZUFBZTtJQUNmQyxnREFBU0EsQ0FBQztRQUNOd0IsWUFDSUgsVUFBVVEsR0FBRyxDQUFDQyxDQUFBQTtZQUNWLElBQUlDO1lBQ0osT0FBUUQsSUFBSUUsSUFBSTtnQkFDWjtvQkFDSUQsVUFBVTtvQkFDVjtnQkFDSjtvQkFDSUEsd0JBQVUsOERBQUM3Qiw2Q0FBSUE7Ozs7O29CQUNmO2dCQUNKO29CQUNJLE1BQU0sSUFBSStCLE1BQU07WUFDeEI7WUFFQSxPQUFPO2dCQUFDRjtnQkFBU0QsSUFBSUksUUFBUTthQUFDO1FBQ2xDO1FBR0osR0FBRztRQUNITixRQUFRckIsTUFBTUMsSUFBSSxDQUFDO1lBQUVDLFFBQVFKLE9BQU9hO1FBQUssR0FBRyxDQUFDaUI7WUFDekMsTUFBTUMsTUFBZ0I7Z0JBQUNWLEtBQUtXLEtBQUssQ0FBQ0YsUUFBUWpCO2dCQUFPaUIsUUFBUWpCO2FBQUs7WUFDOUQscUJBQU8sOERBQUNqQiw2Q0FBSUE7Z0JBQTJCbUMsS0FBS0E7Z0JBQUtFLE1BQU1iO2VBQXBDOzs7OztRQUN2QjtJQUVKLEdBQUc7UUFBQ0o7UUFBV0k7UUFBVVA7UUFBTWI7S0FBSztJQUVwQyxTQUFTa0MsS0FFVDtJQUdBLDRDQUE0QztJQUM1QyxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFDR0UsT0FBTztnQkFDSEMsU0FBUztnQkFDVEMscUJBQXFCLFVBQWUsT0FBTDFCLE1BQUs7Z0JBQ3BDMkIsa0JBQWtCLFVBQWUsT0FBTHhDLE1BQUs7Z0JBQ2pDeUMsS0FBSztnQkFDTEMsT0FBTztnQkFDUEMsUUFBUSxnQkFBMEI5QixPQUFWYixNQUFLLE9BQVUsT0FBTGEsTUFBSztnQkFDdkMrQixRQUFRO1lBQ1o7c0JBSUkxQixTQUFTMkIsT0FBTyxDQUFDLENBQUNwQyxLQUFLcUMsV0FDbkJyQyxJQUFJZSxHQUFHLENBQUMsQ0FBQ3VCLGFBQWFDLHlCQUNsQiw4REFBQ3BELDZDQUFJQTt3QkFBaUNtQyxLQUFLOzRCQUFDZTs0QkFBVUU7eUJBQVM7d0JBQUVmLE1BQU1iO2tDQUNsRTJCO3VCQURNLEdBQWVDLE9BQVpGLFVBQVMsS0FBWSxPQUFURTs7Ozs7Ozs7Ozs7Ozs7O0FBUXREO0dBcEV3QnBDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0dyaWQudHN4PzY1MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDZWxsIGZyb20gJy4vQ2VsbCc7XG5pbXBvcnQgQmFsbCBmcm9tICcuL0JhbGwnO1xuXG5leHBvcnQgdHlwZSBQb3NpdGlvbiA9IFtudW1iZXIsIG51bWJlcl07XG5cbmV4cG9ydCBlbnVtIE9ialR5cGUge1xuICAgIEVNUFRZLFxuICAgIEJBTEwsXG59XG5cbmludGVyZmFjZSBFbHRTdGF0ZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBwb3NpdGlvbjogUG9zaXRpb247XG4gICAgdHlwZTogT2JqVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDZWxsU3RhdGUge1xuICAgIGVsdD86IEVsdFN0YXRlO1xufVxuXG5cbmludGVyZmFjZSBHcmlkUHJvcHMge1xuICAgIHJvd3M6IG51bWJlcjtcbiAgICBjb2xzOiBudW1iZXI7XG4gICAgaW5pdEdyaWQ6IEVsdFN0YXRlW107XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVHcmlkKHJvd3M6IG51bWJlciwgY29sdW1uczogbnVtYmVyKSB7XG4gICAgLy8gQ3JlYXRlIGEgMkQgYXJyYXkgZmlsbGVkIHdpdGggbnVsbCAobm8gZWxlbWVudCBpbiB0aGUgY2VsbClcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93cyB9LCAoKSA9PiBBcnJheShjb2x1bW5zKS5maWxsKG51bGwpKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlR3JpZChncmlkLCBlbGVtZW50c0FycmF5KSB7XG4gICAgLy8gQ2xlYXIgdGhlIGdyaWRcbiAgICBmb3IgKGxldCByb3cgb2YgZ3JpZCkge1xuICAgICAgICByb3cuZmlsbChudWxsKTtcbiAgICB9XG5cbiAgICAvLyBQb3B1bGF0ZSB0aGUgZ3JpZCB3aXRoIG5ldyBwb3NpdGlvbnMgb2YgZWxlbWVudHNcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHNBcnJheSkge1xuICAgICAgICBpZiAoZ3JpZFtlbGVtZW50LnJvd10gJiYgZ3JpZFtlbGVtZW50LnJvd11bZWxlbWVudC5jb2x1bW5dID09PSBudWxsKSB7XG4gICAgICAgICAgICBncmlkW2VsZW1lbnQucm93XVtlbGVtZW50LmNvbHVtbl0gPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWQoeyByb3dzLCBjb2xzLCBpbml0R3JpZCB9OiBHcmlkUHJvcHMpIHtcbiAgICBjb25zdCBkZWJ1ZyA9IHRydWU7XG4gICAgY29uc3QgW29ialN0YXRlcywgc2V0T2JqU3RhdGVzXSA9IHVzZVN0YXRlPEVsdFN0YXRlW10+KGluaXRHcmlkKTtcbiAgICBjb25zdCBbY2VsbEVsdHMsIHNldENlbGxFbHRzXSA9IHVzZVN0YXRlPFtSZWFjdE5vZGUsIFBvc2l0aW9uXVtdPihbXSk7XG4gICAgY29uc3QgY2VsbFNpemUgPSBgY2FsYygxMDB2dyAvICR7TWF0aC5tYXgocm93cywgY29scyl9KWA7XG4gICAgY29uc3QgW2dyaWQsIHNldEdyaWRdID0gdXNlU3RhdGU8UmVhY3ROb2RlW10+KFtdKTtcblxuICAgIC8vIENyZWF0ZSBhIGdyaWQgYXJyYXkgZm9yIHJlbmRlcmluZ1xuXG4gICAgLy8gZGVwZW5kZW5jaWVzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q2VsbEVsdHMoXG4gICAgICAgICAgICBvYmpTdGF0ZXMubWFwKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGxFbHQ7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChvYmoudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIE9ialR5cGUuRU1QVFk6XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsRWx0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIE9ialR5cGUuQkFMTDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxFbHQgPSA8QmFsbCAvPjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwieW91IGludmVudGVkIGEgbmV3IHBoeXNpY3MgZWxlbWVudC4gbmljZS5cIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtjZWxsRWx0LCBvYmoucG9zaXRpb25dO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBcbiAgICAgICAgc2V0R3JpZChBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dzICogY29scyB9LCAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zOiBQb3NpdGlvbiA9IFtNYXRoLmZsb29yKGluZGV4IC8gY29scyksIGluZGV4ICUgY29sc107XG4gICAgICAgICAgICByZXR1cm4gPENlbGwga2V5PXtge3Bvc1swXX0se3Bvc1sxXX1gfSBwb3M9e3Bvc30gc2l6ZT17Y2VsbFNpemV9PjwvQ2VsbD47XG4gICAgICAgIH0pKVxuXG4gICAgfSwgW29ialN0YXRlcywgY2VsbFNpemUsIGNvbHMsIHJvd3NdKTtcblxuICAgIGZ1bmN0aW9uIHMoKSB7XG5cbiAgICB9XG5cblxuICAgIC8vIEFkanVzdCBjZWxsIHNpemUgYmFzZWQgb24gZ3JpZCBkaW1lbnNpb25zXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBgcmVwZWF0KCR7Y29sc30sIDFmcilgLFxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiBgcmVwZWF0KCR7cm93c30sIDFmcilgLFxuICAgICAgICAgICAgICAgICAgICBnYXA6ICcxcHgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBgY2FsYygxMDB2dyAqICR7cm93c30gLyAke2NvbHN9KWAsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgIGNlbGxFbHRzLmZsYXRNYXAoKHJvdywgcm93SW5kZXgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cubWFwKChjZWxsQ29udGVudCwgY29sSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbCBrZXk9e2Ake3Jvd0luZGV4fS0ke2NvbEluZGV4fWB9IHBvcz17W3Jvd0luZGV4LCBjb2xJbmRleF19IHNpemU9e2NlbGxTaXplfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NlbGxDb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNlbGwiLCJCYWxsIiwiT2JqVHlwZSIsImluaXRpYWxpemVHcmlkIiwicm93cyIsImNvbHVtbnMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJmaWxsIiwidXBkYXRlR3JpZCIsImdyaWQiLCJlbGVtZW50c0FycmF5Iiwicm93IiwiZWxlbWVudCIsImNvbHVtbiIsIkdyaWQiLCJjb2xzIiwiaW5pdEdyaWQiLCJkZWJ1ZyIsIm9ialN0YXRlcyIsInNldE9ialN0YXRlcyIsImNlbGxFbHRzIiwic2V0Q2VsbEVsdHMiLCJjZWxsU2l6ZSIsIk1hdGgiLCJtYXgiLCJzZXRHcmlkIiwibWFwIiwib2JqIiwiY2VsbEVsdCIsInR5cGUiLCJFcnJvciIsInBvc2l0aW9uIiwiaW5kZXgiLCJwb3MiLCJmbG9vciIsInNpemUiLCJzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJnYXAiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImZsYXRNYXAiLCJyb3dJbmRleCIsImNlbGxDb250ZW50IiwiY29sSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Grid.tsx\n"));

/***/ })

});