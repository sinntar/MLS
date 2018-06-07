webpackHotUpdate(6,{

/***/ "./pages/reService/listings/media/listingImages.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module, Buffer) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_reService__ = __webpack_require__("./ethereum/reService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ethereum_ipfs__ = __webpack_require__("./ethereum/ipfs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");

var _jsxFileName = "/Users/SRaju/Dev/BlockChain/blockchain-mls/pages/reService/listings/media/listingImages.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var ListingImageSummary = function (_Component) {
  _inherits(ListingImageSummary, _Component);

  function ListingImageSummary() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, ListingImageSummary);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListingImageSummary.__proto__ || Object.getPrototypeOf(ListingImageSummary)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      ipfsHash: null,
      buffer: "",
      ethAddress: "",
      blockNumber: "",
      transactionHash: "",
      gasUsed: "",
      txReceipt: "",
      loading: false,
      errorMessage: ""
    }, _this.captureFile = function (event) {
      _this.setState({ loading: true, errorMessage: "" });
      event.stopPropagation();
      event.preventDefault();
      var file = event.target.files[0];

      console.log("Got file", file);

      var reader = new window.FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = function () {
        return _this.convertToBuffer(reader);
      };
    }, _this.convertToBuffer = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(reader) {
        var buffer;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Buffer.from(reader.result);

              case 2:
                buffer = _context.sent;

                //set this buffer -using es6 syntax
                _this.setState({ buffer: buffer });
                _this.onClick();
                _this.onSubmit();
                _this.setState({ loading: false });
                console.log("Loading State is False");

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onClick = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              console.log("Entered OnClick");
              _this.setState({ blockNumber: "waiting.." });
              _this.setState({ gasUsed: "waiting..." });
              //get Transaction Receipt in console on click
              //See: https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransactionreceipt
              _context2.next = 6;
              return __WEBPACK_IMPORTED_MODULE_6__ethereum_web3__["a" /* default */].eth.getTransactionReceipt(_this.state.transactionHash, function (err, txReceipt) {
                console.log(err, txReceipt);
                _this.setState({ txReceipt: txReceipt });
              });

            case 6:
              _context2.next = 8;
              return _this.setState({ blockNumber: _this.state.txReceipt.blockNumber });

            case 8:
              _context2.next = 10;
              return _this.setState({ gasUsed: _this.state.txReceipt.gasUsed });

            case 10:
              _context2.next = 16;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);

              //try

              console.log(_context2.t0);
              _this.setState({ errorMessage: _context2.t0.message });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 12]]);
    })), _this.createMediaLink = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var accounts, reService;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log("** The IPFS Hash is -> " + _this.state.ipfsHash);
              console.log("** The Property ID is -> " + _this.props.propertyId);

              _context3.next = 4;
              return __WEBPACK_IMPORTED_MODULE_6__ethereum_web3__["a" /* default */].eth.getAccounts();

            case 4:
              accounts = _context3.sent;
              reService = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_reService__["a" /* default */])(_this.state.ethAddress);
              _context3.prev = 6;
              _context3.next = 9;
              return reService.methods.uploadPropertyMedia(_this.props.propertyId, _this.state.ipfsHash).send({
                from: accounts[0]
              });

            case 9:

              console.log("Before Router Push");
              console.log("The Address is ->  " + _this.props.address);
              console.log("The Propert ID is -> " + _this.props.propertyId);

              Router.pushRoute("/reService/" + _this.props.address + "/listings/media/" + _this.props.propertyId + "/listingImages");
              _context3.next = 19;
              break;

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](6);

              console.log("Oops Error ... " + _context3.t0.message);
              _this.setState({ errorMessage: _context3.t0.message });

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this2, [[6, 15]]);
    })), _this.onSubmit = function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(event) {
        var accounts, ethAddress, reService;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return __WEBPACK_IMPORTED_MODULE_6__ethereum_web3__["a" /* default */].eth.getAccounts();

              case 2:
                accounts = _context4.sent;


                console.log("Sending from Metamask account: " + accounts[0]);
                console.log("Eth Address : " + _this.props.address);

                //obtain contract address from storehash.js
                ethAddress = _this.props.address;

                _this.setState({ ethAddress: ethAddress });
                reService = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_reService__["a" /* default */])(ethAddress);
                //save document to IPFS,return its hash#, and set hash# to state
                //https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md#add

                _context4.next = 10;
                return __WEBPACK_IMPORTED_MODULE_5__ethereum_ipfs__["a" /* default */].add(_this.state.buffer, function (err, ipfsHash) {
                  console.log(err, ipfsHash);
                  //setState by setting ipfsHash to ipfsHash[0].hash
                  _this.setState({ ipfsHash: ipfsHash[0].hash });
                  console.log("The IPFS Hash is -> " + _this.state.ipfsHash);
                  // call Ethereum contract method "sendHash" and .send IPFS hash to etheruem contract
                  //return the transaction hash from the ethereum contract
                  //see, this https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send

                  reService.methods.sendHash(_this.state.ipfsHash).send({
                    from: accounts[0]
                  }, function (error, transactionHash) {
                    console.log("The Transaction Hash is " + transactionHash);
                    _this.createMediaLink();
                    _this.setState({ transactionHash: transactionHash });
                  }); //storehash
                });

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this2);
      }));

      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListingImageSummary, [{
    key: "renderMedia",
    //onSubmit

    value: function renderMedia() {
      return this.props.list.map(function (list) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          key: list.proertyId,
          "class": "ui image",
          src: "https://gateway.ipfs.io/ipfs/" + list.mediaURL,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "h3",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 195
            }
          },
          " Listing Image Summary "
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Form */],
          { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
              fileName: _jsxFileName,
              lineNumber: 197
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { floated: "right", loading: this.state.loading, __source: {
                fileName: _jsxFileName,
                lineNumber: 198
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "label",
              { "for": "file", "class": "ui icon button", style: { float: "right" }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 199
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { "class": "upload icon", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 200
                }
              }),
              this.state.loading ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { "class": "ui active centered inline loader", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 202
                }
              }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { "class": "none", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 204
                }
              }),
              "\xA0\xA0Upload Media"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
              type: "file",
              id: "file",
              onChange: this.captureFile,
              style: { display: "none" },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 208
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { "class": "ui medium images", __source: {
                fileName: _jsxFileName,
                lineNumber: 215
              }
            },
            this.renderMedia()
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Message */], { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            }
          })
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
      var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5(props) {
        var _props$query, address, propertyId, reService, listingsCount, listings, list;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _props$query = props.query, address = _props$query.address, propertyId = _props$query.propertyId;

                console.log("Address Is -> " + address);
                console.log("The Selected Property ID is ->" + propertyId);
                reService = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_reService__["a" /* default */])(address);
                _context5.prev = 4;
                _context5.next = 7;
                return reService.methods.getPropertyMediaCount().call();

              case 7:
                listingsCount = _context5.sent;


                console.log("Total Image Count -> " + listingsCount);
                _context5.next = 11;
                return Promise.all(Array(parseInt(listingsCount)).fill().map(function (element, index) {
                  return reService.methods.propertyMediaData(index).call();
                }));

              case 11:
                listings = _context5.sent;
                list = listings.filter(function (list) {
                  //console.log(list.propertyId);
                  if (list.propertyId == propertyId) {
                    return list;
                  }
                });


                console.log(list);

                //console.log(listings);
                return _context5.abrupt("return", {
                  list: list,
                  listingsCount: listingsCount,
                  address: address,
                  propertyId: propertyId
                });

              case 17:
                _context5.prev = 17;
                _context5.t0 = _context5["catch"](4);

                console.log("Oops -> " + _context5.t0.message);

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[4, 17]]);
      }));

      function getInitialProps(_x3) {
        return _ref6.apply(this, arguments);
      }

      return getInitialProps;
    }() //onClick
    //createMediaLink

  }]);

  return ListingImageSummary;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = ListingImageSummary;

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ListingImageSummary, "ListingImageSummary", "/Users/SRaju/Dev/BlockChain/blockchain-mls/pages/reService/listings/media/listingImages.js");
  reactHotLoader.register(_default, "default", "/Users/SRaju/Dev/BlockChain/blockchain-mls/pages/reService/listings/media/listingImages.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/reService/listings/media/listingImages")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ })

})
//# sourceMappingURL=6.a6e7b4448998ee6eb6dc.hot-update.js.map