function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _video_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./video/video.component */
    "./src/app/video/video.component.ts");

    var routes = [{
      path: '',
      component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }, {
      path: 'v/:vid',
      component: _video_video_component__WEBPACK_IMPORTED_MODULE_3__["VideoComponent"]
    }, {
      path: 's/:term',
      component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _search_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./search-handler.service */
    "./src/app/search-handler.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_search_handler_service__WEBPACK_IMPORTED_MODULE_1__["SearchHandlerService"]])],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          providers: [_search_handler_service__WEBPACK_IMPORTED_MODULE_1__["SearchHandlerService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _video_video_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./video/video.component */
    "./src/app/video/video.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], _video_video_component__WEBPACK_IMPORTED_MODULE_7__["VideoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], _video_video_component__WEBPACK_IMPORTED_MODULE_7__["VideoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _search_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../search-handler.service */
    "./src/app/search-handler.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function MainComponent_section_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var res_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", "url(" + res_r3.snippet.thumbnails.high.url + ")", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, "/v/" + res_r3.id.videoId));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](res_r3.snippet.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](res_r3.snippet.description);
      }
    }

    function MainComponent_section_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainComponent_section_5_div_2_Template, 6, 7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Loading more videos...");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.results);
      }
    }

    function MainComponent_section_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Suggested videos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, "/v/" + ctx_r1.suggestedVideos[ctx_r1.suggestionIdx].id.videoId));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", "url(" + ctx_r1.suggestedVideos[ctx_r1.suggestionIdx].snippet.thumbnails.high.url + ")", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.suggestedVideos[ctx_r1.suggestionIdx].snippet.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.suggestedVideos[ctx_r1.suggestionIdx].snippet.description);
      }
    }

    var _c1 = function _c1() {
      return ["/"];
    };

    var _c2 = function _c2(a0) {
      return {
        "big": a0
      };
    };

    var MainComponent =
    /*#__PURE__*/
    function () {
      //for                       Searching                             Getting path
      function MainComponent(search, router, route) {
        _classCallCheck(this, MainComponent);

        this.search = search;
        this.router = router;
        this.route = route;
        this.title = 'yt-dog-video';
        this.term = "";
        this.searchConducted = false;
        this.showSuggestions = false;
        this.nextPage = "firtPage"; //token for the next page

        this.suggestionIdx = 0;
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.term = this.route.snapshot.paramMap.get("term"); //handle search links

          if (this.term) this.doSearch();else this.unsearch();
        }
      }, {
        key: "searchRedirect",
        value: function searchRedirect() {
          this.router.navigate(['/s/' + this.term]);
          this.doSearch();
        }
      }, {
        key: "doSearch",
        value: function doSearch() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.term) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    _context.next = 4;
                    return this.search.search(this.term, "firstPage");

                  case 4:
                    res = _context.sent;
                    this.results = res.items;
                    this.showSuggestions = false;
                    this.searchConducted = true;
                    console.log(this.results);
                    this.nextPage = res.nextPageToken;
                    clearInterval(this.suggestionLooper);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "unsearch",
        value: function unsearch() {
          this.searchConducted = false;
          this.nextPage = "firstPage";
          this.getSuggestions();
        } //for infinite scrolling

      }, {
        key: "continueSearch",
        value: function continueSearch() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.search.search(this.term, this.nextPage);

                  case 2:
                    res = _context2.sent;
                    console.log(res);
                    this.results = this.results.concat(res.items);
                    console.log(this.results);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getSuggestions",
        value: function getSuggestions() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.search.search("", "firstPage");

                  case 2:
                    res = _context3.sent;
                    this.suggestedVideos = res.items;
                    this.showSuggestions = true;
                    this.suggestionLooper = setInterval(function () {
                      _this.suggestionIdx = ++_this.suggestionIdx % _this.suggestedVideos.length;
                    }, 5000);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "onWindowScroll",
        value: function onWindowScroll() {
          //additional support for browsers
          var pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
          var max = document.documentElement.scrollHeight - 20; //start a bit from bottom for better UX

          if (pos >= max && this.searchConducted) this.continueSearch();
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_search_handler_service__WEBPACK_IMPORTED_MODULE_2__["SearchHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      hostBindings: function MainComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function MainComponent_scroll_HostBindingHandler($event) {
            return ctx.onWindowScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_search_handler_service__WEBPACK_IMPORTED_MODULE_2__["SearchHandlerService"]])],
      decls: 7,
      vars: 8,
      consts: [[1, "app-root", 3, "scroll"], [3, "routerLink"], [3, "ngClass"], ["id", "search", "matInput", "", "placeholder", "Search", "type", "text", 3, "ngModel", "ngModelChange", "keyup.enter"], [4, "ngIf"], [1, "video-holder"], ["class", "video-card", 3, "backgroundImage", "routerLink", 4, "ngFor", "ngForOf"], [1, "loading"], [1, "video-card", 3, "routerLink"], [1, "vc-content"], [1, "suggested-video-card", 3, "routerLink"], [1, "thumbnail"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function MainComponent_Template_div_scroll_0_listener($event) {
            return ctx.onWindowScroll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Watch Dogs");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.term = $event;
          })("keyup.enter", function MainComponent_Template_input_keyup_enter_4_listener($event) {
            return ctx.searchRedirect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MainComponent_section_5_Template, 6, 1, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MainComponent_section_6_Template, 10, 7, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, !ctx.searchConducted));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.term);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchConducted);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSuggestions);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["h1.big[_ngcontent-%COMP%] {\n  font-size: 6em;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  -webkit-transition: 0.75s;\n  transition: 0.75s;\n}\n\n.video-holder[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  height: auto;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.suggested-video-card[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n  width: 80%;\n  max-width: 600px;\n  left: auto;\n  right: auto;\n  height: 11em;\n  background-color: #D78A76;\n  border-radius: 0.5em;\n  border: none;\n  -webkit-transition: 0.25s;\n  transition: 0.25s;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  overflow: hidden;\n}\n\n.suggested-video-card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  -webkit-transition: 0.75s;\n  transition: 0.75s;\n}\n\n.suggested-video-card[_ngcontent-%COMP%]:hover {\n  width: calc(80% + 1em);\n  max-width: calc(600px + 1em);\n  height: 12em;\n  margin-top: -0.5em;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.suggested-video-card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: inline-block;\n  width: 50%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.video-card[_ngcontent-%COMP%] {\n  margin: 1em;\n  padding: 1em;\n  display: block;\n  width: 18em;\n  height: 9em;\n  background-color: #D78A76;\n  border-radius: 0.5em;\n  border: none;\n  overflow: hidden;\n  -webkit-transition: 0.25s;\n  transition: 0.25s;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  text-align: left;\n}\n\n.video-card[_ngcontent-%COMP%]   .vc-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 4em;\n  margin: -4em;\n}\n\n.suggested-video-card[_ngcontent-%COMP%]   .vc-content[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: inline-block;\n  width: calc(50% - 16px);\n  padding: 0;\n  margin: 0;\n  padding-left: 8px;\n  padding-right: 8px;\n  vertical-align: top;\n}\n\n.video-card[_ngcontent-%COMP%]:hover   .vc-content[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n.video-card[_ngcontent-%COMP%]   .vc-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: justify;\n  margin-top: 0;\n  text-shadow: 0 0 5px #494949;\n  z-index: 100;\n}\n\n.video-card[_ngcontent-%COMP%]   .vc-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: justify;\n  margin-top: 100%;\n  color: #ffffffff;\n  -webkit-transition: 0.125s;\n  transition: 0.125s;\n  bottom: 0;\n  width: calc(100%);\n  margin-left: -0.75em;\n  padding: 0.75em;\n  padding-bottom: 50%;\n  padding-top: 50%;\n  max-height: 8em;\n  text-overflow: ellipsis;\n  white-space: wrap;\n  font-size: 1em;\n}\n\n.suggested-video-card[_ngcontent-%COMP%]   .vc-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: justify;\n  margin: 0;\n  padding: 0;\n  padding-top: 8px;\n  text-shadow: 0 0 5px #494949;\n  z-index: 100;\n}\n\n.suggested-video-card[_ngcontent-%COMP%]   .vc-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: justify;\n  color: #ffffffff;\n  -webkit-transition: 0.125s;\n  transition: 0.125s;\n  bottom: 0;\n  width: auto;\n  padding: 0;\n  padding-top: 0.75em;\n  max-height: 8em;\n  text-overflow: ellipsis;\n  white-space: wrap;\n  font-size: 1em;\n  margin: 0;\n  text-shadow: 0 0 5px #494949;\n}\n\n.video-card[_ngcontent-%COMP%]:hover   .vc-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: -50%;\n  text-shadow: 0 0 8px #494949;\n}\n\n.video-card[_ngcontent-%COMP%]:hover {\n  margin: 0.75em;\n  padding: 1.25em;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n@media only screen and (max-width: 450px) {\n  .video-card[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXEpvblNlXFxEb2N1bWVudHNcXFVTRlxcUGVyc29uYWxcXHl0LWRvZy12aWRlby9zcmNcXGFwcFxcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL0M6XFxVc2Vyc1xcSm9uU2VcXERvY3VtZW50c1xcVVNGXFxQZXJzb25hbFxceXQtZG9nLXZpZGVvL3NyY1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFBQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRXZCUztFRndCVCxvQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUFBLGlCQUFBO0VBQ0Esd0VFdEJhO0VGdUJiLGdCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUFBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEVFakNtQjtBRGlDdkI7O0FER0E7RUFDSSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJFNURTO0VGNkRULG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFBQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHdFRS9EYTtFRmdFYixnQkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxrQ0FBQTtVQUFBLDBCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUFBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEVFdkptQjtBRHVKdkI7O0FER0E7RUFDSTtJQUNJLFdBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vY29sb3JzLnNjc3MnO1xyXG5oMS5iaWcge1xyXG4gICAgZm9udC1zaXplOiA2ZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgdHJhbnNpdGlvbjogMC43NXM7XHJcbn1cclxuXHJcbi52aWRlby1ob2xkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWdnZXN0ZWQtdmlkZW8tY2FyZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDExZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaXRlbS1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgICBib3gtc2hhZG93OiAkZWxlbWVudC1zaGFkb3c7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc3VnZ2VzdGVkLXZpZGVvLWNhcmQgKiB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjc1cztcclxufVxyXG5cclxuLnN1Z2dlc3RlZC12aWRlby1jYXJkOmhvdmVyIHtcclxuICAgIHdpZHRoOiBjYWxjKDgwJSArIDFlbSk7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoNjAwcHggKyAxZW0pO1xyXG4gICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLTAuNWVtO1xyXG4gICAgYm94LXNoYWRvdzogJGVsZW1lbnQtc2hhZG93LWhvdmVyO1xyXG59XHJcblxyXG4uc3VnZ2VzdGVkLXZpZGVvLWNhcmQgLnRodW1ibmFpbCB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udmlkZW8tY2FyZCB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDE4ZW07XHJcbiAgICBoZWlnaHQ6IDllbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRpdGVtLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJveC1zaGFkb3c6ICRlbGVtZW50LXNoYWRvdztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi52aWRlby1jYXJkIC52Yy1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiA0ZW07XHJcbiAgICBtYXJnaW46IC00ZW07XHJcbn1cclxuXHJcbi5zdWdnZXN0ZWQtdmlkZW8tY2FyZCAudmMtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDE2cHgpO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLnZpZGVvLWNhcmQ6aG92ZXIgLnZjLWNvbnRlbnQge1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbn1cclxuXHJcbi52aWRlby1jYXJkIC52Yy1jb250ZW50IGgyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYig3MywgNzMsIDczKTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLnZpZGVvLWNhcmQgLnZjLWNvbnRlbnQgaDMge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIG1hcmdpbi10b3A6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xMjVzO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSk7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNzVlbTtcclxuICAgIHBhZGRpbmc6IDAuNzVlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNTAlO1xyXG4gICAgbWF4LWhlaWdodDogOGVtO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4uc3VnZ2VzdGVkLXZpZGVvLWNhcmQgLnZjLWNvbnRlbnQgaDIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYig3MywgNzMsIDczKTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLnN1Z2dlc3RlZC12aWRlby1jYXJkIC52Yy1jb250ZW50IGgzIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xMjVzO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNzVlbTtcclxuICAgIG1heC1oZWlnaHQ6IDhlbTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYig3MywgNzMsIDczKTtcclxufVxyXG5cclxuLnZpZGVvLWNhcmQ6aG92ZXIgLnZjLWNvbnRlbnQgaDMge1xyXG4gICAgbWFyZ2luLXRvcDogLTUwJTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgOHB4IHJnYig3MywgNzMsIDczKTtcclxufVxyXG5cclxuLnZpZGVvLWNhcmQ6aG92ZXIge1xyXG4gICAgbWFyZ2luOiAwLjc1ZW07XHJcbiAgICBwYWRkaW5nOiAxLjI1ZW07XHJcbiAgICBib3gtc2hhZG93OiAkZWxlbWVudC1zaGFkb3ctaG92ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIC52aWRlby1jYXJkIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxufSIsImgxLmJpZyB7XG4gIGZvbnQtc2l6ZTogNmVtO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB0cmFuc2l0aW9uOiAwLjc1cztcbn1cblxuLnZpZGVvLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdWdnZXN0ZWQtdmlkZW8tY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogYXV0bztcbiAgaGVpZ2h0OiAxMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDc4QTc2O1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3VnZ2VzdGVkLXZpZGVvLWNhcmQgKiB7XG4gIHRyYW5zaXRpb246IDAuNzVzO1xufVxuXG4uc3VnZ2VzdGVkLXZpZGVvLWNhcmQ6aG92ZXIge1xuICB3aWR0aDogY2FsYyg4MCUgKyAxZW0pO1xuICBtYXgtd2lkdGg6IGNhbGMoNjAwcHggKyAxZW0pO1xuICBoZWlnaHQ6IDEyZW07XG4gIG1hcmdpbi10b3A6IC0wLjVlbTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbi5zdWdnZXN0ZWQtdmlkZW8tY2FyZCAudGh1bWJuYWlsIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udmlkZW8tY2FyZCB7XG4gIG1hcmdpbjogMWVtO1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMThlbTtcbiAgaGVpZ2h0OiA5ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNENzhBNzY7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuMjVzO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnZpZGVvLWNhcmQgLnZjLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA0ZW07XG4gIG1hcmdpbjogLTRlbTtcbn1cblxuLnN1Z2dlc3RlZC12aWRlby1jYXJkIC52Yy1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDE2cHgpO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi52aWRlby1jYXJkOmhvdmVyIC52Yy1jb250ZW50IHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG59XG5cbi52aWRlby1jYXJkIC52Yy1jb250ZW50IGgyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICM0OTQ5NDk7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLnZpZGVvLWNhcmQgLnZjLWNvbnRlbnQgaDMge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW4tdG9wOiAxMDAlO1xuICBjb2xvcjogI2ZmZmZmZmZmO1xuICB0cmFuc2l0aW9uOiAwLjEyNXM7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSk7XG4gIG1hcmdpbi1sZWZ0OiAtMC43NWVtO1xuICBwYWRkaW5nOiAwLjc1ZW07XG4gIHBhZGRpbmctYm90dG9tOiA1MCU7XG4gIHBhZGRpbmctdG9wOiA1MCU7XG4gIG1heC1oZWlnaHQ6IDhlbTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiB3cmFwO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLnN1Z2dlc3RlZC12aWRlby1jYXJkIC52Yy1jb250ZW50IGgyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzQ5NDk0OTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uc3VnZ2VzdGVkLXZpZGVvLWNhcmQgLnZjLWNvbnRlbnQgaDMge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBjb2xvcjogI2ZmZmZmZmZmO1xuICB0cmFuc2l0aW9uOiAwLjEyNXM7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiAwLjc1ZW07XG4gIG1heC1oZWlnaHQ6IDhlbTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiB3cmFwO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjNDk0OTQ5O1xufVxuXG4udmlkZW8tY2FyZDpob3ZlciAudmMtY29udGVudCBoMyB7XG4gIG1hcmdpbi10b3A6IC01MCU7XG4gIHRleHQtc2hhZG93OiAwIDAgOHB4ICM0OTQ5NDk7XG59XG5cbi52aWRlby1jYXJkOmhvdmVyIHtcbiAgbWFyZ2luOiAwLjc1ZW07XG4gIHBhZGRpbmc6IDEuMjVlbTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnZpZGVvLWNhcmQge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG59IiwiJGl0ZW0tY29sb3ItLWRhcms6ICM0MTQxNDE7XHJcbiRiZy1jb2xvci0tZGFyazogIzI1MjUyNTtcclxuJGZvbnQtY29sb3ItLWRhcms6ICNmZmZmZmY7XHJcbiRoaWdobGlnaHQtY29sb3ItLWRhcms6ICNhZjA0MDQ7XHJcbiRpdGVtLWNvbG9yOiAjRDc4QTc2O1xyXG4kaXRlbS1jb2xvci1kazogcmdiKDE1OCwgOTksIDg1KTtcclxuJGJnLWNvbG9yOiAjNTg1NTU3O1xyXG4kZm9udC1jb2xvcjogI0ZGRjtcclxuJGhpZ2hsaWdodC1jb2xvcjogI0YyQTU0MTtcclxuJGVsZW1lbnQtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSxcclxuMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbiRlbGVtZW50LXNoYWRvdy1ob3ZlcjogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSxcclxuMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.scss'],
          providers: [_search_handler_service__WEBPACK_IMPORTED_MODULE_2__["SearchHandlerService"]]
        }]
      }], function () {
        return [{
          type: _search_handler_service__WEBPACK_IMPORTED_MODULE_2__["SearchHandlerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, {
        onWindowScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ["window:scroll", ["$event"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/search-handler.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/search-handler.service.ts ***!
    \*******************************************/

  /*! exports provided: SearchHandlerService */

  /***/
  function srcAppSearchHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchHandlerService", function () {
      return SearchHandlerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var SearchHandlerService =
    /*#__PURE__*/
    function () {
      function SearchHandlerService() {
        _classCallCheck(this, SearchHandlerService);

        this.apiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiKey;
        this.searchUrl = "https://www.googleapis.com/youtube/v3/search?key=".concat(this.apiKey, "&part=snippet&type=video&maxResults=50&q=dog");
        this.detailsUrl = "https://www.googleapis.com/youtube/v3/videos?part=id%2C%20snippet&key=".concat(this.apiKey, "&id=");
      }

      _createClass(SearchHandlerService, [{
        key: "search",
        value: function search(term, page) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var apiCall, response, data;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    apiCall = this.searchUrl;
                    if (term) apiCall += "%20" + term;
                    if (page != "firstPage") apiCall += "&pageToken=".concat(page);
                    _context4.next = 5;
                    return fetch(apiCall);

                  case 5:
                    response = _context4.sent;
                    _context4.next = 8;
                    return response.json();

                  case 8:
                    data = _context4.sent;
                    return _context4.abrupt("return", data);

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getVideoDetails",
        value: function getVideoDetails(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var response, data;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return fetch(this.detailsUrl + id);

                  case 2:
                    response = _context5.sent;
                    _context5.next = 5;
                    return response.json();

                  case 5:
                    data = _context5.sent;
                    return _context5.abrupt("return", data);

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return SearchHandlerService;
    }();

    SearchHandlerService.ɵfac = function SearchHandlerService_Factory(t) {
      return new (t || SearchHandlerService)();
    };

    SearchHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SearchHandlerService,
      factory: SearchHandlerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/video/video.component.ts":
  /*!******************************************!*\
    !*** ./src/app/video/video.component.ts ***!
    \******************************************/

  /*! exports provided: VideoComponent */

  /***/
  function srcAppVideoVideoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoComponent", function () {
      return VideoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _search_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../search-handler.service */
    "./src/app/search-handler.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var VideoComponent =
    /*#__PURE__*/
    function () {
      function VideoComponent(route, router, sanitizer, search) {
        _classCallCheck(this, VideoComponent);

        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.search = search;
        this.videoID = '';
      }

      _createClass(VideoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.videoID = this.route.snapshot.paramMap.get("vid");
          this.getVideoDetails();
        }
      }, {
        key: "getVideoUrl",
        value: function getVideoUrl() {
          return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/".concat(this.videoID));
        }
      }, {
        key: "getVideoDetails",
        value: function getVideoDetails() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.search.getVideoDetails(this.videoID);

                  case 2:
                    this.video = _context6.sent;

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "searchRedirect",
        value: function searchRedirect() {
          if (!this.term) return;
          this.router.navigate(['/s/' + this.term]);
        }
      }]);

      return VideoComponent;
    }();

    VideoComponent.ɵfac = function VideoComponent_Factory(t) {
      return new (t || VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_search_handler_service__WEBPACK_IMPORTED_MODULE_2__["SearchHandlerService"]));
    };

    VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: VideoComponent,
      selectors: [["app-video"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_search_handler_service__WEBPACK_IMPORTED_MODULE_2__["SearchHandlerService"]])],
      decls: 10,
      vars: 5,
      consts: [[1, "video-container"], ["id", "search", "matInput", "", "placeholder", "Search for more dog videos", "type", "text", 1, "wide", "sm", 3, "ngModel", "ngModelChange", "keyup.enter"], ["frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "video-frame", 3, "src"]],
      template: function VideoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VideoComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.term = $event;
          })("keyup.enter", function VideoComponent_Template_input_keyup_enter_1_listener($event) {
            return ctx.searchRedirect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "iframe", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.term);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.getVideoUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.video.items[0].snippet.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.video.items[0].snippet.channelTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.video.items[0].snippet.localized.description, " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.video-frame[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56.25vw;\n  max-height: 450px;\n}\n\n.video-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 800px;\n  margin: auto;\n  background-color: #9e6355;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-top: 1em;\n  margin-bottom: 1em;\n  padding-bottom: 1em;\n  border-radius: 0.25em;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: start;\n  padding: 0 0.5em;\n}\n\n.wide[_ngcontent-%COMP%] {\n  display: block;\n  width: calc(100% - 2.5em) !important;\n  max-width: calc(800px - 2.5em) !important;\n  margin: 1em !important;\n}\n\n.sm[_ngcontent-%COMP%] {\n  font-size: 1.5em !important;\n}\n\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  padding: 0 1em;\n}\n\nhr[_ngcontent-%COMP%] {\n  background-color: #F2A541;\n  border-color: #F2A541;\n}\n\n@media screen and (max-width: 900px) {\n  .video-container[_ngcontent-%COMP%] {\n    margin-top: 0;\n    border-radius: 0;\n    min-height: calc(100% - 1em);\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vQzpcXFVzZXJzXFxKb25TZVxcRG9jdW1lbnRzXFxVU0ZcXFBlcnNvbmFsXFx5dC1kb2ctdmlkZW8vc3JjXFxhcHBcXHZpZGVvXFx2aWRlby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvL0M6XFxVc2Vyc1xcSm9uU2VcXERvY3VtZW50c1xcVVNGXFxQZXJzb25hbFxceXQtZG9nLXZpZGVvL3NyY1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRVhZO0VGWVosd0VFUmE7RUZTYixlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0FDQUo7O0FER0E7RUFDSSwyQkFBQTtBQ0FKOztBREdBOztFQUVJLGNBQUE7QUNBSjs7QURHQTtFQUNJLHlCRXRDYztFRnVDZCxxQkV2Q2M7QUR1Q2xCOztBREdBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSw0QkFBQTtJQUNBLGdCQUFBO0VDQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vY29sb3JzLnNjc3MnO1xyXG5ib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udmlkZW8tZnJhbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU2LjI1dnc7IC8vMTY6OSByYXRpb1xyXG4gICAgbWF4LWhlaWdodDogNDUwcHg7XHJcbn1cclxuXHJcbi52aWRlby1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGl0ZW0tY29sb3ItZGs7XHJcbiAgICBib3gtc2hhZG93OiAkZWxlbWVudC1zaGFkb3c7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIHBhZGRpbmc6IDAgMC41ZW07XHJcbn1cclxuXHJcbi53aWRlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIuNWVtKSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKDgwMHB4IC0gMi41ZW0pICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDFlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc20ge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oMixcclxuaDMge1xyXG4gICAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAudmlkZW8tY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gMWVtKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG59IiwiYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi52aWRlby1mcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU2LjI1dnc7XG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xufVxuXG4udmlkZW8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllNjM1NTtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBwYWRkaW5nOiAwIDAuNWVtO1xufVxuXG4ud2lkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMi41ZW0pICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogY2FsYyg4MDBweCAtIDIuNWVtKSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDFlbSAhaW1wb3J0YW50O1xufVxuXG4uc20ge1xuICBmb250LXNpemU6IDEuNWVtICFpbXBvcnRhbnQ7XG59XG5cbmgyLFxuaDMge1xuICBwYWRkaW5nOiAwIDFlbTtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJBNTQxO1xuICBib3JkZXItY29sb3I6ICNGMkE1NDE7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC52aWRlby1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAxZW0pO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn0iLCIkaXRlbS1jb2xvci0tZGFyazogIzQxNDE0MTtcclxuJGJnLWNvbG9yLS1kYXJrOiAjMjUyNTI1O1xyXG4kZm9udC1jb2xvci0tZGFyazogI2ZmZmZmZjtcclxuJGhpZ2hsaWdodC1jb2xvci0tZGFyazogI2FmMDQwNDtcclxuJGl0ZW0tY29sb3I6ICNENzhBNzY7XHJcbiRpdGVtLWNvbG9yLWRrOiByZ2IoMTU4LCA5OSwgODUpO1xyXG4kYmctY29sb3I6ICM1ODU1NTc7XHJcbiRmb250LWNvbG9yOiAjRkZGO1xyXG4kaGlnaGxpZ2h0LWNvbG9yOiAjRjJBNTQxO1xyXG4kZWxlbWVudC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLFxyXG4wIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxuJGVsZW1lbnQtc2hhZG93LWhvdmVyOiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLFxyXG4wIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTsiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-video',
          templateUrl: './video.component.html',
          styleUrls: ['./video.component.scss'],
          providers: [_search_handler_service__WEBPACK_IMPORTED_MODULE_2__["SearchHandlerService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: _search_handler_service__WEBPACK_IMPORTED_MODULE_2__["SearchHandlerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiKey: "AIzaSyBSDny-5xoh8sZjTuG51_4Z5V1713Qp3t0"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\JonSe\Documents\USF\Personal\yt-dog-video\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map