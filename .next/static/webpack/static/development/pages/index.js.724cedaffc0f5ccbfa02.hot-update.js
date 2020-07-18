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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.onscroll = function () {
      if (router.route === "/") {
        if (window.pageYOffset > navRef.current.offsetTop + 50) {
          setSticky("navbarFixedTop pb-2 pt-3");
        } else {
          setSticky("pb-4");
        }
      } else {
        console.log("not scrolled");
      }
    };
  }, [navRef]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 1,
    className: "v-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "navBarBtn",
    variant: "contained",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "\u0627\u0631\u0633\u0627\u0644 \u062F\u0631\u062E\u0648\u0627\u0633\u062A")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 10,
    className: "v-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("nav", {
    className: "navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "خانه",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "فروشگاه",
    path: "/store",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "پشتیبانی",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "اخبار",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "بلاگ",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "تماس با ما",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }), __jsx(_navbar_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "درباره ما",
    path: "/",
    subMenu: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 1,
    className: "v-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/img/logo.svg",
    alt: "Logo",
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b29scy9ob21lL2hlYWRlci9OYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInN0aWNreSIsInNldFN0aWNreSIsIm5hdlJlZiIsInVzZVJlZiIsInJvdXRlIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwid2luZG93Iiwib25zY3JvbGwiLCJyb3V0ZXIiLCJwYWdlWU9mZnNldCIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsIm5hdmJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxFQURaO0FBQUEsTUFDakJDLE1BRGlCO0FBQUEsTUFDVEMsU0FEUzs7QUFFeEIsTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLDZEQUFTLEVBQXZCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxVQUFNLENBQUNDLFFBQVAsR0FBa0IsWUFBTTtBQUN0QixVQUFJQyxNQUFNLENBQUNMLEtBQVAsS0FBaUIsR0FBckIsRUFBMEI7QUFDeEIsWUFBSUcsTUFBTSxDQUFDRyxXQUFQLEdBQXFCUixNQUFNLENBQUNTLE9BQVAsQ0FBZUMsU0FBZixHQUEyQixFQUFwRCxFQUF3RDtBQUN0RFgsbUJBQVMsQ0FBQywwQkFBRCxDQUFUO0FBQ0QsU0FGRCxNQUVPO0FBQ0xBLG1CQUFTLENBQUMsTUFBRCxDQUFUO0FBQ0Q7QUFDRixPQU5ELE1BTU87QUFDTFksZUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNEO0FBQ0YsS0FWRDtBQVdELEdBWlEsRUFZTixDQUFDWixNQUFELENBWk0sQ0FBVDtBQWNBLFNBQ0Us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cUQ7OztLQUhWUixNO0FBcURTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzI0Y2VkYWZmYzBmNWNjYmZhMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdyaWQsIEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTmF2YmFySXRlbXMgZnJvbSBcIi4vbmF2YmFyL05hdmJhckl0ZW1zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3N0aWNreSwgc2V0U3RpY2t5XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgbmF2UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgaWYgKHJvdXRlci5yb3V0ZSA9PT0gXCIvXCIpIHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gbmF2UmVmLmN1cnJlbnQub2Zmc2V0VG9wICsgNTApIHtcclxuICAgICAgICAgIHNldFN0aWNreShcIm5hdmJhckZpeGVkVG9wIHBiLTIgcHQtM1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0U3RpY2t5KFwicGItNFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJub3Qgc2Nyb2xsZWRcIik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSwgW25hdlJlZl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIGNsYXNzTmFtZT17W1wibmF2YmFyVFwiLCBzdGlja3ldLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgIHJlZj17KG5hdmJhcikgPT4ge1xyXG4gICAgICAgICAgbmF2UmVmLmN1cnJlbnQgPSBuYXZiYXI7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gc209ezF9IGNsYXNzTmFtZT1cInYtY2VudGVyXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm5hdkJhckJ0blwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cclxuICAgICAgICAgICAg2KfYsdiz2KfZhCDYr9ix2K7ZiNin2LPYqlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gc209ezEwfSBjbGFzc05hbWU9XCJ2LWNlbnRlclwiPlxyXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXJJdGVtcyB0aXRsZT17XCLYrtin2YbZh1wifSBwYXRoPXtcIi9cIn0gc3ViTWVudT17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgPE5hdmJhckl0ZW1zIHRpdGxlPXtcItmB2LHZiNi02q/Yp9mHXCJ9IHBhdGg9e1wiL3N0b3JlXCJ9IHN1Yk1lbnU9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXJJdGVtcyB0aXRsZT17XCLZvti02KrbjNio2KfZhtuMXCJ9IHBhdGg9e1wiL1wifSBzdWJNZW51PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8TmF2YmFySXRlbXMgdGl0bGU9e1wi2KfYrtio2KfYsVwifSBwYXRoPXtcIi9cIn0gc3ViTWVudT17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgPE5hdmJhckl0ZW1zIHRpdGxlPXtcItio2YTYp9qvXCJ9IHBhdGg9e1wiL1wifSBzdWJNZW51PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8TmF2YmFySXRlbXMgdGl0bGU9e1wi2KrZhdin2LMg2KjYpyDZhdinXCJ9IHBhdGg9e1wiL1wifSBzdWJNZW51PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8TmF2YmFySXRlbXMgdGl0bGU9e1wi2K/Ysdio2KfYsdmHINmF2KdcIn0gcGF0aD17XCIvXCJ9IHN1Yk1lbnU9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gc209ezF9IGNsYXNzTmFtZT1cInYtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2xvZ28uc3ZnXCIgYWx0PVwiTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9