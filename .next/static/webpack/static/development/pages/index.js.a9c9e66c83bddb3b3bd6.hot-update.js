webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/tools/home/header/Navbar.js":
/*!****************************************************!*\
  !*** ./src/components/tools/home/header/Navbar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/NavbarItems */ "./src/components/tools/home/header/navbar/NavbarItems.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Alireza\\Documents\\Project\\tkalahn\\src\\components\\tools\\home\\header\\Navbar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Navbar = function Navbar(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      sticky = _useState[0],
      setSticky = _useState[1];

  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var route = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  console.log(route);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.onscroll = function () {
      if (window.pageYOffset > navRef.current.offsetTop + 50) {
        setSticky("navbarFixedTop pb-2 pt-3");
      } else {
        setSticky("pb-4");
      }
    };
  }, [navRef]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    className: ["navbarT", sticky].join(" "),
    ref: function ref(navbar) {
      navRef.current = navbar;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 1,
    className: "v-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "navBarBtn",
    variant: "contained",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "\u0627\u0631\u0633\u0627\u0644 \u062F\u0631\u062E\u0648\u0627\u0633\u062A")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 10,
    className: "v-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("nav", {
    className: "navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "خانه",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "فروشگاه",
    path: "/store",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "پشتیبانی",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "اخبار",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "بلاگ",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "تماس با ما",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "درباره ما",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 1,
    className: "v-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/img/logo.svg",
    alt: "Logo",
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }))));
};

_s(Navbar, "ZHIausbGaFMtIb2fb4FoBX1RhYo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b29scy9ob21lL2hlYWRlci9OYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInN0aWNreSIsInNldFN0aWNreSIsIm5hdlJlZiIsInVzZVJlZiIsInJvdXRlIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIndpbmRvdyIsIm9uc2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJjdXJyZW50Iiwib2Zmc2V0VG9wIiwiam9pbiIsIm5hdmJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxFQURaO0FBQUEsTUFDakJDLE1BRGlCO0FBQUEsTUFDVEMsU0FEUzs7QUFFeEIsTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLDZEQUFTLEVBQXZCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0FJLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxVQUFNLENBQUNDLFFBQVAsR0FBa0IsWUFBTTtBQUN0QixVQUFJRCxNQUFNLENBQUNFLFdBQVAsR0FBcUJULE1BQU0sQ0FBQ1UsT0FBUCxDQUFlQyxTQUFmLEdBQTJCLEVBQXBELEVBQXdEO0FBQ3REWixpQkFBUyxDQUFDLDBCQUFELENBQVQ7QUFDRCxPQUZELE1BRU87QUFDTEEsaUJBQVMsQ0FBQyxNQUFELENBQVQ7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQVJRLEVBUU4sQ0FBQ0MsTUFBRCxDQVJNLENBQVQ7QUFVQSxTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxhQUFTLE1B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ZXNcXGluZGV4LmpzLmE5YzllNjZjODNiZGRiM2IzYmQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBHcmlkLCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IE5hdmJhckl0ZW1zIGZyb20gXCIuL25hdmJhci9OYXZiYXJJdGVtc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzdGlja3ksIHNldFN0aWNreV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IG5hdlJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnNvbGUubG9nKHJvdXRlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gbmF2UmVmLmN1cnJlbnQub2Zmc2V0VG9wICsgNTApIHtcclxuICAgICAgICBzZXRTdGlja3koXCJuYXZiYXJGaXhlZFRvcCBwYi0yIHB0LTNcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U3RpY2t5KFwicGItNFwiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbbmF2UmVmXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgY2xhc3NOYW1lPXtbXCJuYXZiYXJUXCIsIHN0aWNreV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgcmVmPXsobmF2YmFyKSA9PiB7XHJcbiAgICAgICAgICBuYXZSZWYuY3VycmVudCA9IG5hdmJhcjtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBzbT17MX0gY2xhc3NOYW1lPVwidi1jZW50ZXJcIj5cclxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibmF2QmFyQnRuXCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxyXG4gICAgICAgICAgICDYp9ix2LPYp9mEINiv2LHYrtmI2KfYs9iqXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBzbT17MTB9IGNsYXNzTmFtZT1cInYtY2VudGVyXCI+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPE5hdmJhckl0ZW1zIHRpdGxlPXtcItiu2KfZhtmHXCJ9IHBhdGg9e1wiL1wifSBzdWJNZW51PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8TmF2YmFySXRlbXMgdGl0bGU9e1wi2YHYsdmI2LTar9in2YdcIn0gcGF0aD17XCIvc3RvcmVcIn0gc3ViTWVudT17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgPE5hdmJhckl0ZW1zIHRpdGxlPXtcItm+2LTYqtuM2KjYp9mG24xcIn0gcGF0aD17XCIvXCJ9IHN1Yk1lbnU9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXJJdGVtcyB0aXRsZT17XCLYp9iu2KjYp9ixXCJ9IHBhdGg9e1wiL1wifSBzdWJNZW51PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8TmF2YmFySXRlbXMgdGl0bGU9e1wi2KjZhNin2q9cIn0gcGF0aD17XCIvXCJ9IHN1Yk1lbnU9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXJJdGVtcyB0aXRsZT17XCLYqtmF2KfYsyDYqNinINmF2KdcIn0gcGF0aD17XCIvXCJ9IHN1Yk1lbnU9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXJJdGVtcyB0aXRsZT17XCLYr9ix2KjYp9ix2Ycg2YXYp1wifSBwYXRoPXtcIi9cIn0gc3ViTWVudT17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBzbT17MX0gY2xhc3NOYW1lPVwidi1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvbG9nby5zdmdcIiBhbHQ9XCJMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=