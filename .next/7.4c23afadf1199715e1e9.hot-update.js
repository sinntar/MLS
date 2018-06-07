webpackHotUpdate(7,{

/***/ "./pages/reService/new.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ethereum_factory__ = __webpack_require__("./ethereum/factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");

var _jsxFileName = "/Users/SRaju/Dev/BlockChain/blockchain-mls/pages/reService/new.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var REServiceNew = function (_Component) {
  _inherits(REServiceNew, _Component);

  function REServiceNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, REServiceNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = REServiceNew.__proto__ || Object.getPrototypeOf(REServiceNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minContribution: "",
      errorMessage: "",
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(event) {
        var accounts;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: "" });
                _context.prev = 2;
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_6__ethereum_web3__["a" /* default */].eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return __WEBPACK_IMPORTED_MODULE_5__ethereum_factory__["a" /* default */].methods.CreateREService(_this.state.minContribution).send({
                  from: accounts[0]
                });

              case 8:
                __WEBPACK_IMPORTED_MODULE_3__routes__["Router"].pushRoute("/");
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 14:
                _this.setState({ loading: false });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(REServiceNew, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "ui breadcrumb", style: { margin: "0px 0px 20px 0px" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            { className: "section", __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            "MLS"
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { className: "divider", __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            " / "
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__routes__["Link"],
            { route: "/", __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { className: "section", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              "Contracts"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { className: "divider", __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            " / "
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            { className: "active section", __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            "New"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "h1",
          { className: "ui header", __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          },
          "Create New Contract"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Form */],
          { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Form */].Field,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "label",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              },
              " Minimum Contribution "
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["h" /* Input */], {
              label: "Wei",
              labelPosition: "right",
              placeholder: "100 Wei",
              value: this.state.minContribution,
              onChange: function onChange(event) {
                return _this3.setState({ minContribution: event.target.value });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["k" /* Message */], { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */],
            { loading: this.state.loading, color: "teal", floated: "right", __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            },
            "Submit"
          )
        )
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return REServiceNew;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = REServiceNew;


/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REServiceNew, "REServiceNew", "/Users/SRaju/Dev/BlockChain/blockchain-mls/pages/reService/new.js");
  reactHotLoader.register(_default, "default", "/Users/SRaju/Dev/BlockChain/blockchain-mls/pages/reService/new.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/reService/new")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.4c23afadf1199715e1e9.hot-update.js.map