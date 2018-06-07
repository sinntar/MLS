webpackHotUpdate(6,{

/***/ "./pages/reService/listings/listingNew.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ethereum_reService__ = __webpack_require__("./ethereum/reService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ethereum_data_propertyType__ = __webpack_require__("./ethereum/data/propertyType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ethereum_data_saleType__ = __webpack_require__("./ethereum/data/saleType.js");

var _jsxFileName = "/Users/SRaju/Dev/BlockChain/blockchain-mls/pages/reService/listings/listingNew.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var ListingsNew = function (_Component) {
  _inherits(ListingsNew, _Component);

  function ListingsNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, ListingsNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListingsNew.__proto__ || Object.getPrototypeOf(ListingsNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMessage: "",
      loading: false,
      propertyId: "",
      propertyType: "",
      saleType: "",
      zipCode: "",
      size: "",
      price: ""
    }, _this.onSubmit = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(event) {
        var reService, accounts;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                console.log("Entering onSubmit");

                console.log(_this.state.propertyId);
                console.log(_this.state.propertyType);
                console.log(_this.state.saleType);
                console.log(_this.state.zipCode);
                console.log(_this.state.size);
                console.log(_this.state.price);

                _this.setState({ loading: true, errorMessage: "" });
                _context.prev = 9;
                reService = Object(__WEBPACK_IMPORTED_MODULE_5__ethereum_reService__["a" /* default */])(_this.props.address);
                _context.next = 13;
                return __WEBPACK_IMPORTED_MODULE_6__ethereum_web3__["a" /* default */].eth.getAccounts();

              case 13:
                accounts = _context.sent;

                console.log("Accounts -> " + accounts[0]);
                _context.next = 17;
                return reService.methods.createListing(_this.state.propertyId, _this.state.propertyType, _this.state.saleType, _this.state.zipCode, _this.state.size, _this.state.price).send({
                  from: accounts[0]
                });

              case 17:
                __WEBPACK_IMPORTED_MODULE_3__routes__["Router"].pushRoute("/reService/" + _this.props.address + "/listings/listingsSummary");
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](9);

                _this.setState({ errorMessage: _context.t0.message });

              case 23:
                _this.setState({ loading: false });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[9, 20]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListingsNew, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "ui breadcrumb", __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__routes__["Link"],
            { route: "/", __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { className: "section", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                }
              },
              "Home"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { className: "divider", __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              }
            },
            " / "
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__routes__["Link"],
            { route: "/", __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { className: "section", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                }
              },
              "Contracts"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { className: "divider", __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            },
            " / "
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__routes__["Link"],
            {
              route: "/reService/" + this.props.address + "/listings/listingsSummary",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { className: "section", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                }
              },
              "Listings"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { className: "divider", __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              }
            },
            " / "
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            { className: "active section", __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            },
            "New"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { style: { margin: "0px 0px 20px 0px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "h1",
          { className: "ui header", __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            }
          },
          "Create New Listings"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { style: { margin: "0px 0px 20px 0px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Form */],
          { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Form */].Field,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "label",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 96
                }
              },
              " Property ID "
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["h" /* Input */], {
              placeholder: "1A333545",
              value: this.state.propertyId,
              onChange: function onChange(event) {
                return _this3.setState({ propertyId: event.target.value });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "label",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 104
                }
              },
              " Property Type "
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Dropdown */], {
              placeholder: "Commercial",
              fluid: true,
              selection: true,
              options: __WEBPACK_IMPORTED_MODULE_7__ethereum_data_propertyType__["a" /* default */],
              value: this.state.propertyType,
              onChange: function onChange(event) {
                return _this3.setState({ propertyType: event.target.textContent });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "label",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 115
                }
              },
              " Sale Type "
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Dropdown */], {
              placeholder: "Sale",
              fluid: true,
              selection: true,
              options: __WEBPACK_IMPORTED_MODULE_8__ethereum_data_saleType__["a" /* default */],
              value: this.state.saleType,
              onChange: function onChange(event) {
                return _this3.setState({ saleType: event.target.textContent });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "label",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 126
                }
              },
              " Zip Code "
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["h" /* Input */], {
              placeholder: "75028",
              value: this.state.zipCode,
              onChange: function onChange(event) {
                return _this3.setState({ zipCode: event.target.value });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "label",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 132
                }
              },
              " Size "
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["h" /* Input */], {
              label: "Sq Feet",
              labelPosition: "right",
              placeholder: "5000",
              value: this.state.size,
              onChange: function onChange(event) {
                return _this3.setState({ size: event.target.value });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "label",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 140
                }
              },
              " Price "
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["h" /* Input */], {
              label: "$ per Sq Feet",
              labelPosition: "right",
              placeholder: "95",
              value: this.state.price,
              onChange: function onChange(event) {
                return _this3.setState({ price: event.target.value });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 141
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["k" /* Message */], { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */],
            { loading: this.state.loading, floated: "right", color: "teal", __source: {
                fileName: _jsxFileName,
                lineNumber: 151
              }
            },
            "Save"
          )
        )
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(props) {
        var address;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;

                console.log("Listing New Page " + address);
                return _context2.abrupt("return", { address: address });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ListingsNew;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = ListingsNew;


/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ListingsNew, "ListingsNew", "/Users/SRaju/Dev/BlockChain/blockchain-mls/pages/reService/listings/listingNew.js");
  reactHotLoader.register(_default, "default", "/Users/SRaju/Dev/BlockChain/blockchain-mls/pages/reService/listings/listingNew.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/reService/listings/listingNew")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.9904a90b6f88fe39b357.hot-update.js.map