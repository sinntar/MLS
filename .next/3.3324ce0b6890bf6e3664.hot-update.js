webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_factory__ = __webpack_require__("./ethereum/factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);

var _jsxFileName = "/Users/SRaju/Dev/BlockChain/blockchain-mls/pages/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var REServiceIndex = function (_Component) {
  _inherits(REServiceIndex, _Component);

  function REServiceIndex() {
    _classCallCheck(this, REServiceIndex);

    return _possibleConstructorReturn(this, (REServiceIndex.__proto__ || Object.getPrototypeOf(REServiceIndex)).apply(this, arguments));
  }

  _createClass(REServiceIndex, [{
    key: "renderREServices",
    value: function renderREServices() {
      var items = this.props.reServices.map(function (contract) {
        return {
          header: contract.name,
          meta: "Address: " + contract.address,
          description: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__routes__["Link"],
            {
              route: "/reService/" + contract.address + "/listings/listingsSummary",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
              color: "teal",
              floated: "right",
              content: "View",
              icon: "right arrow",
              labelPosition: "right",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            })
          ),
          fluid: true
        };
      });
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Card */].Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "ui breadcrumb", style: { margin: "0px 0px 20px 0px" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__routes__["Link"],
            { route: "/", __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { className: "section", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              },
              "Home"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { className: "divider", __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            },
            " / "
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            { className: "active section", __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            "Contracts"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { className: "ui grid", __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              { className: "ten wide column", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "h1",
                { className: "ui header", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  }
                },
                "Contracts"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              { className: "six wide column", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5__routes__["Link"],
                { route: "/reService/new", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "a",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
                    color: "teal",
                    floated: "right",
                    content: "New Contract",
                    icon: "add circle",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    }
                  })
                )
              )
            )
          ),
          this.renderREServices()
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
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var reServices, obj, i;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3__ethereum_factory__["a" /* default */].methods.deployedREServices().call();

              case 2:
                reServices = _context.sent;

                console.log("****************");
                console.log(reServices);
                obj = [];

                for (i = 0; i < reServices.length; i++) {
                  obj.push({ address: reServices[i], name: "Contract " + i });
                }
                console.log(obj);
                return _context.abrupt("return", { reServices: obj });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return REServiceIndex;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = REServiceIndex;


/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REServiceIndex, "REServiceIndex", "/Users/SRaju/Dev/BlockChain/blockchain-mls/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/SRaju/Dev/BlockChain/blockchain-mls/pages/index.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.3324ce0b6890bf6e3664.hot-update.js.map