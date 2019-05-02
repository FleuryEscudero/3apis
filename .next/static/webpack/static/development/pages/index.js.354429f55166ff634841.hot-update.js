webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Event.js":
/*!*****************************!*\
  !*** ./components/Event.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/media/fly/Data1/Programacion/workspaces/reactJs/curso/bitcoin/components/Event.js";


var Event = function Event(props) {
  /* const { author, title, description, urlToImage, source, url } = props.uNew;
   let image;
  if (urlToImage !== '') {
      image = <img src={urlToImage} alt={title} className="card-img-top" />
  } else {
      <p><strong>Imagen no Disponible</strong></p>
  } */
  return (
    /*  <div className="col-md-6 col-12 mb-4">
         <div className="card">
             <div className="card-image">
                 {image}
             </div>
             <div className="card-header">
                 <h4>{title}</h4>
             </div>
             <div className="card-body">
                 <div>
                     <p className="card-text"> {description}</p>
                     <p className="card-text"> {author} - {source.name}</p>
                     <p className="card-text"><a href={url} target="_blank" className="btn btn-primary d-block">Mas..</a></p>
                 </div>
             </div>
         </div>
     </div> */
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "desde evento")
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./components/Events.js":
/*!******************************!*\
  !*** ./components/Events.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event */ "./components/Event.js");
var _jsxFileName = "/media/fly/Data1/Programacion/workspaces/reactJs/curso/bitcoin/components/Events.js";



var Events = function Events(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.events.map(function (event) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Event__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: events,
      event: events,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Master__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Master */ "./components/Master.js");
/* harmony import */ var _components_Price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Price */ "./components/Price.js");
/* harmony import */ var _components_News__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/News */ "./components/News.js");
/* harmony import */ var _components_Events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Events */ "./components/Events.js");


var _jsxFileName = "/media/fly/Data1/Programacion/workspaces/reactJs/curso/bitcoin/pages/index.js";







var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Master__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Precio del bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Price__WEBPACK_IMPORTED_MODULE_5__["default"], {
    bitcoin: props.bitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Noticias sobre el Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_News__WEBPACK_IMPORTED_MODULE_6__["default"], {
    news: props.news,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Pr\xF3ximos eventos Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Events__WEBPACK_IMPORTED_MODULE_7__["default"], {
    events: props.events,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var token, price, result, news, newsBitcoin, Revents, events;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          token = 'FDPHTQSVCXNHC2VMHRFI';
          _context.next = 3;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://api.coinmarketcap.com/v2/ticker/1/');

        case 3:
          price = _context.sent;
          _context.next = 6;
          return price.json();

        case 6:
          result = _context.sent;
          _context.next = 9;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-02&sortBy=publishedAt&apiKey=96a7e34875c44d3ea4083290e5b7c714&language=es');

        case 9:
          news = _context.sent;
          _context.next = 12;
          return news.json();

        case 12:
          newsBitcoin = _context.sent;
          _context.next = 15;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&sort_by=date&token=".concat(token, "&location.address=mexico+city&locale=es_MX"));

        case 15:
          Revents = _context.sent;
          _context.next = 18;
          return Revents.json();

        case 18:
          events = _context.sent;
          return _context.abrupt("return", {
            bitcoin: result.data.quotes.USD,
            news: newsBitcoin.articles,
            events: events.events
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.354429f55166ff634841.hot-update.js.map