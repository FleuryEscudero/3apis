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
  var _props$event = props.event,
      description = _props$event.description,
      url = _props$event.url,
      logo = _props$event.logo,
      name = _props$event.name,
      organization_id = _props$event.organization_id;
  var image;

  if (logo.url !== '') {
    image = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: logo.url,
      alt: organization_id,
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  } else {
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Imagen no Disponible"));
  }

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
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, image))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ })

})
//# sourceMappingURL=index.js.c791a6ed5d1a537925dc.hot-update.js.map