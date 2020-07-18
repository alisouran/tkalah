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
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Navbar = function Navbar(props) {
  _s2();

  var _s = $RefreshSig$();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      sticky = _useState[0],
      setSticky = _useState[1];

  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(_s(function () {
    _s();

    var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

    window.onscroll = function () {
      if (router.pathname === "/") {
        if (window.pageYOffset > navRef.current.offsetTop + 50 || window.pageYOffset > 50) {
          setSticky("navbarFixedTop pb-2 pt-3");
        } else {
          setSticky("pb-4");
        }
      } else {
        console.log("not scrolled");
      }
    };
  }, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
    return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
  }), [navRef]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 1,
    className: "v-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "navBarBtn",
    variant: "contained",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "\u0627\u0631\u0633\u0627\u0644 \u062F\u0631\u062E\u0648\u0627\u0633\u062A")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 10,
    className: "v-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("nav", {
    className: "navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "خانه",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "فروشگاه",
    path: "/store",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "پشتیبانی",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "اخبار",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "بلاگ",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "تماس با ما",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "درباره ما",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 1,
    className: "v-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/img/logo.svg",
    alt: "Logo",
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }))));
};

_s2(Navbar, "qyXz+IHiIe8MdtG2kn03axwYrtE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b29scy9ob21lL2hlYWRlci9OYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInN0aWNreSIsInNldFN0aWNreSIsIm5hdlJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsIndpbmRvdyIsIm9uc2Nyb2xsIiwicGF0aG5hbWUiLCJwYWdlWU9mZnNldCIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsIm5hdmJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxFQURaO0FBQUEsTUFDakJDLE1BRGlCO0FBQUEsTUFDVEMsU0FEUzs7QUFFeEIsTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFFQUMseURBQVMsSUFBQyxZQUFNO0FBQUE7O0FBQ2QsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQUMsVUFBTSxDQUFDQyxRQUFQLEdBQWtCLFlBQU07QUFDdEIsVUFBSUgsTUFBTSxDQUFDSSxRQUFQLEtBQW9CLEdBQXhCLEVBQTZCO0FBQzNCLFlBQ0VGLE1BQU0sQ0FBQ0csV0FBUCxHQUFxQlIsTUFBTSxDQUFDUyxPQUFQLENBQWVDLFNBQWYsR0FBMkIsRUFBaEQsSUFDQUwsTUFBTSxDQUFDRyxXQUFQLEdBQXFCLEVBRnZCLEVBR0U7QUFDQVQsbUJBQVMsQ0FBQywwQkFBRCxDQUFUO0FBQ0QsU0FMRCxNQUtPO0FBQ0xBLG1CQUFTLENBQUMsTUFBRCxDQUFUO0FBQ0Q7QUFDRixPQVRELE1BU087QUFDTFksZUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNEO0FBQ0YsS0Fi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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0F6QkYsQ0FERixDQURGO0FBaUNELENBdkREOztJQUFNbkIsTTs7S0FBQUEsTTtBQXlEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjU0MWFmNjcyMGY3NzNmN2RmYWNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBHcmlkLCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IE5hdmJhckl0ZW1zIGZyb20gXCIuL25hdmJhci9OYXZiYXJJdGVtc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzdGlja3ksIHNldFN0aWNreV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IG5hdlJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAocm91dGVyLnBhdGhuYW1lID09PSBcIi9cIikge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCA+IG5hdlJlZi5jdXJyZW50Lm9mZnNldFRvcCArIDUwIHx8XHJcbiAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgPiA1MFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgc2V0U3RpY2t5KFwibmF2YmFyRml4ZWRUb3AgcGItMiBwdC0zXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRTdGlja3koXCJwYi00XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBzY3JvbGxlZFwiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbbmF2UmVmXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgY2xhc3NOYW1lPXtbXCJuYXZiYXJUXCIsIHN0aWNreV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgcmVmPXsobmF2YmFyKSA9PiB7XHJcbiAgICAgICAgICBuYXZSZWYuY3VycmVudCA9IG5hdmJhcjtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBzbT17MX0gY2xhc3NOYW1lPVwidi1jZW50ZXJcIj5cclxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibmF2QmFyQnRuXCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxyXG4gICAgICAgICAgICDYp9ix2LPYp9mEINiv2LHYrtmI2KfYs9iqXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBzbT17MTB9IGNsYXNzTmFtZT1cInYtY2VudGVyXCI+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPE5hdmJhckl0ZW1zIHRpdGxlPXtcItiu2KfZhtmHXCJ9IHBhdGg9e1wiL1wifSBzdWJNZW51PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8TmF2YmFySXRlbXMgdGl0bGU9e1wi2YHYsdmI2LTar9in2YdcIn0gcGF0aD17XCIvc3RvcmVcIn0gc3ViTWVudT17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgPE5hdmJhckl0ZW1zIHRpdGxlPXtcItm+2LTYqtuM2KjYp9mG24xcIn0gcGF0aD17XCIvXCJ9IHN1Yk1lbnU9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXJJdGVtcyB0aXRsZT17XCLYp9iu2KjYp9ixXCJ9IHBhdGg9e1wiL1wifSBzdWJNZW51PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8TmF2YmFySXRlbXMgdGl0bGU9e1wi2KjZhNin2q9cIn0gcGF0aD17XCIvXCJ9IHN1Yk1lbnU9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXJJdGVtcyB0aXRsZT17XCLYqtmF2KfYsyDYqNinINmF2KdcIn0gcGF0aD17XCIvXCJ9IHN1Yk1lbnU9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXJJdGVtcyB0aXRsZT17XCLYr9ix2KjYp9ix2Ycg2YXYp1wifSBwYXRoPXtcIi9cIn0gc3ViTWVudT17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBzbT17MX0gY2xhc3NOYW1lPVwidi1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvbG9nby5zdmdcIiBhbHQ9XCJMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=