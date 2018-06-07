webpackHotUpdate(4,{

/***/ "./pages/reService/listings/listingsSummary.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ListingRow__ = __webpack_require__("./components/ListingRow.js");

var _jsxFileName = "/Users/SRaju/Dev/BlockChain/blockchain-mls/pages/reService/listings/listingsSummary.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var ListingsSummary = function (_Component) {
  _inherits(ListingsSummary, _Component);

  function ListingsSummary() {
    _classCallCheck(this, ListingsSummary);

    return _possibleConstructorReturn(this, (ListingsSummary.__proto__ || Object.getPrototypeOf(ListingsSummary)).apply(this, arguments));
  }

  _createClass(ListingsSummary, [{
    key: "renderRows",
    value: function renderRows() {
      var _this2 = this;

      return this.props.listings.map(function (listing, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ListingRow__["a" /* default */], {
          key: index,
          id: index,
          listing: listing,
          address: _this2.props.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        });
      });
    }
  }, {
    key: "renderCards",
    value: function renderCards() {
      var _this3 = this;

      return this.props.listings.map(function (listing, index) {
        var extra = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "a",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Icon */], { name: "user", __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__routes__["Link"],
            {
              route: "/reService/" + _this3.props.address + "/listings/media/" + listing.propertyId + "/listingImages",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            },
            "View Media"
          )
        );

        var desc = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Column,
              { width: 8, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                }
              },
              "PropertyID: ",
              listing.propertyId
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Column,
              { width: 8, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                }
              },
              "Zip: ",
              listing.zipCode
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Column,
              { width: 8, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              },
              "Size: ",
              listing.size
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Column,
              { width: 8, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                }
              },
              "Price: ",
              listing.price
            )
          )
        );

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Card */], {
          image: "https://gateway.ipfs.io/ipfs/QmWDQpBNjrobkHhyCjgDFJXXVMc3NQjFcLkG1hTDKB3ZPq",
          header: listing.propertyType,
          meta: listing.saleType,
          description: desc,
          extra: extra,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["g" /* Table */].Header,
          Row = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["g" /* Table */].Row,
          HeaderCell = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["g" /* Table */].HeaderCell,
          Body = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["g" /* Table */].Body;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "ui breadcrumb", __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__routes__["Link"],
            { route: "/", __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { className: "section", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 95
                }
              },
              "Home"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { className: "divider", __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              }
            },
            " / "
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__routes__["Link"],
            { route: "/", __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { className: "section", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 99
                }
              },
              "Contracts"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { className: "divider", __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              }
            },
            " / "
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            { className: "active section", __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              }
            },
            "Listings"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { style: { margin: "0px 0px 20px 0px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "ui grid", __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { className: "ten wide column", __source: {
                fileName: _jsxFileName,
                lineNumber: 106
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "h1",
              { className: "ui header", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 107
                }
              },
              "Listings"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Label,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108
                }
              },
              this.props.listingsCount
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { className: "six wide column", __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__routes__["Link"],
              {
                route: "/reService/" + this.props.address + "/listings/listingNew",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "a",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
                  floated: "right",
                  content: "Create Listing",
                  icon: "add circle",
                  color: "teal",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                  }
                })
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { style: { margin: "0px 0px 20px 0px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Card */].Group,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            }
          },
          this.renderCards()
        ),
        "// ",
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 127
            }
          },
          "Found ",
          this.props.listingsCount,
          " Listings. "
        ),
        "// ",
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            }
          },
          "The Contract Address is ",
          this.props.address,
          " "
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
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(props) {
        var address, reService, listingsCount, listings;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;

                console.log("Listings Summary" + address);
                reService = Object(__WEBPACK_IMPORTED_MODULE_5__ethereum_reService__["a" /* default */])(address);
                _context.next = 5;
                return reService.methods.getBasicPropertyInfoCount().call();

              case 5:
                listingsCount = _context.sent;


                console.log("Media Count -> " + listingsCount);
                _context.next = 9;
                return Promise.all(Array(parseInt(listingsCount)).fill().map(function (element, index) {
                  return reService.methods.propertyListings(index).call();
                }));

              case 9:
                listings = _context.sent;

                console.log(listings);
                return _context.abrupt("return", {
                  listings: listings,
                  listingsCount: listingsCount,
                  address: address
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ListingsSummary;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = ListingsSummary;

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ListingsSummary, "ListingsSummary", "/Users/SRaju/Dev/BlockChain/blockchain-mls/pages/reService/listings/listingsSummary.js");
  reactHotLoader.register(_default, "default", "/Users/SRaju/Dev/BlockChain/blockchain-mls/pages/reService/listings/listingsSummary.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/reService/listings/listingsSummary")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.aeb2f09e5bd8773de607.hot-update.js.map