/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/DOMcontent.js":
/*!*******************************!*\
  !*** ./src/app/DOMcontent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainContent": () => (/* binding */ mainContent),
/* harmony export */   "navUI": () => (/* binding */ navUI),
/* harmony export */   "sidebarUI": () => (/* binding */ sidebarUI)
/* harmony export */ });
/* harmony import */ var _assets_26_write_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/26-write.svg */ "./src/assets/26-write.svg");
/* harmony import */ var _assets_61_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/61-trash.svg */ "./src/assets/61-trash.svg");


var d = document;
var container = d.getElementById("container");

var navUI = function () {
  var navbar = d.createElement("nav");
  var navItems = d.createElement("div");
  navItems.className = "nav-items";
  navItems.innerHTML = "\n        <input type=\"button\" class=\"btn\" id=\"nav-menu\">\n        <h1 class=\"nav-logo\">ToDo List</h1>\n    ";
  navbar.appendChild(navItems);
  container.appendChild(navbar);
}();

var sidebarUI = function () {
  var sidebar = d.createElement("aside");
  sidebar.setAttribute("id", "sidebar");
  var sidebarContent = d.createElement("div");
  sidebarContent.className = "sidebar-content";
  sidebarContent.setAttribute = "sidebar-content";
  sidebarContent.innerHTML = "\n        <h2 class=\"sidebar-header\">Projects</h2>\n        <div class=\"list-of-projects\">\n            <div class=\"project-tasks\">All Tasks</div>\n        </div>\n        <form class=\"sidebar-form\">\n            <input type=\"text\" class=\"set-project-name\" placeholder=\"Enter New Project's Name\">\n            <div class=\"sidebar-btn-wrapper\">\n                <button class=\"sidebar-form-btn add-project\">Add</button>\n                <button class=\"sidebar-form-btn cancel-project\">Add</button>\n            </div>\n        </form>\n        <button class=\"add-new-project\">Add New Project</button>\n    ";
  sidebar.appendChild(sidebarContent);
  container.appendChild(sidebar);
}();

var mainContent = function () {
  var tasksMain = d.createElement("div");
  tasksMain.setAttribute("id", "tasks-main");
  var taskHeader = d.createElement("div");
  taskHeader.className = "task-header";
  taskHeader.innerHTML = "\n        <h2 class=\"tasks-header\">All Tasks</h2>\n        <button class=\"add-task-btn\">Add Task</button>\n    ";
  var taskTable = d.createElement("table");
  taskTable.className = "task-table";
  taskTable.innerHTML = "\n        <thead>\n            <tr>\n                <th class=\"input-radio-header\"></th>\n                <th>Task</th>\n                <th>Due</th>\n                <th>Project</th>\n                <th>Level</th>\n                <th class=\"controls-header\"></th>\n            </tr>\n        </thead>\n    ";
  tasksMain.appendChild(taskHeader);
  tasksMain.appendChild(taskTable);
  container.appendChild(tasksMain);
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/82-menu-3.svg */ "./src/assets/82-menu-3.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Main Colors */\n/* Level of Importance Colors */\nnav {\n  background-color: #F47C7C;\n  padding: 10px 20px;\n  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.3294117647);\n  position: relative;\n  z-index: 1;\n}\n\n.nav-items {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n#nav-menu {\n  width: 25px;\n  height: 25px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  border: 1px solid #FFFFFF;\n  cursor: pointer;\n}\n\n.nav-logo {\n  font-size: clamp(1.3rem, 2.5vw, 1.8rem);\n  font-weight: 800;\n  color: #FFFFFF;\n  margin-left: 5%;\n}\n\n#sidebar {\n  display: none;\n  width: 350px;\n  height: 100vh;\n  background-color: #FAD4D4;\n  padding: 30px 20px;\n}\n\n.sidebar-header {\n  font-size: clamp(1.4rem, 2.5vw, 1.8rem);\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n.project-tasks, .set-project-name {\n  width: 100%;\n  font-size: clamp(0.9rem, 2.5vw, 1rem);\n  font-weight: 500;\n  color: #000000;\n  background-color: #FFFFFF;\n  border: 1px solid #F47C7C;\n  border-radius: 10px;\n  padding: 15px 20px;\n  margin-bottom: 15px;\n}\n\n.sidebar-form {\n  display: none;\n}\n\n.sidebar-btn-wrapper {\n  display: flex;\n  gap: 15px;\n}\n\n.add-project {\n  width: 100%;\n  font-size: clamp(0.9rem, 2.5vw, 1rem);\n  font-weight: 800;\n  color: #FFFFFF;\n  background-color: #F47C7C;\n  border: 1px solid #F47C7C;\n  border-radius: 10px;\n  padding: 15px 20px;\n  margin-bottom: 15px;\n}\n\n.cancel-project {\n  width: 100%;\n  font-size: clamp(0.9rem, 2.5vw, 1rem);\n  font-weight: 800;\n  color: #000000;\n  background-color: #ffffff;\n  border: 1px solid #F47C7C;\n  border-radius: 10px;\n  padding: 15px 20px;\n  margin-bottom: 15px;\n  border: none;\n  padding: 5px 5px;\n}\n\n.all-tasks {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.editText, .delete {\n  width: 25px;\n  margin-left: 5px;\n}\n\n.sidebar-form-btn {\n  width: 50%;\n}\n\n.add-new-project {\n  width: 100%;\n  font-size: clamp(0.9rem, 2.5vw, 1rem);\n  font-weight: 600;\n  color: #FFFFFF;\n  background-color: #F47C7C;\n  border: 1px solid #F47C7C;\n  border-radius: 10px;\n  padding: 15px 20px;\n  margin-bottom: 15px;\n}\n\n.active {\n  display: block !important;\n}\n\n#tasks-main {\n  margin: 30px 15px;\n}\n\n.task-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.add-task-btn {\n  width: 100%;\n  font-size: clamp(0.9rem, 2.5vw, 1rem);\n  font-weight: 800;\n  color: #FFFFFF;\n  background-color: #F47C7C;\n  border: 1px solid #F47C7C;\n  border-radius: 10px;\n  padding: 15px 20px;\n  margin-bottom: 15px;\n  width: 115px;\n  padding: 10px 10px;\n  margin-bottom: 0;\n}\n\ntable {\n  width: 100%;\n}\n\nthead {\n  border-bottom: 1px solid #F47C7C;\n}\n\nth {\n  width: 270px;\n}\n\n.input-radio-header {\n  width: 80px;\n}\n\n.controls-header {\n  width: 160px;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #FFF2F2;\n}", "",{"version":3,"sources":["webpack://./src/styles/_variables.scss","webpack://./src/styles/_navbar.scss","webpack://./src/styles/main.scss","webpack://./src/styles/_sidebar.scss","webpack://./src/styles/_taskMain.scss"],"names":[],"mappings":"AAMA,gBAAA;AAIA,+BAAA;ACVA;EACI,yBDMQ;ECLR,kBAAA;EACA,kDAAA;EACA,kBAAA;EACA,UAAA;ACIJ;;ADDA;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;ACIJ;;ADDA;EACI,WAAA;EACA,YAAA;EACA,yDAAA;EACA,wBAAA;EACA,6BAAA;EACA,4BAAA;EACA,yBAAA;EACA,eAAA;ACIJ;;ADDA;EACI,uCAAA;EACA,gBD1BS;EC2BT,cAAA;EACA,eAAA;ACIJ;;ACjCA;EACI,aAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;ADoCJ;;AChCA;EACI,uCAAA;EACA,gBHRQ;EGSR,mBAAA;ADmCJ;;AChCA;EHCI,WAAA;EACA,qCAAA;EACA,gBAdK;EAeL,cGHiC;EHIjC,yBGJwB;EHKxB,yBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AEmCJ;;ACxCA;EACI,aAAA;AD2CJ;;ACxCA;EACI,aAAA;EACA,SAAA;AD2CJ;;ACxCA;EHZI,WAAA;EACA,qCAAA;EACA,gBAjBS;EAkBT,cGUoC;EHTpC,yBAbQ;EAcR,yBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AEwDJ;;AChDA;EHhBI,WAAA;EACA,qCAAA;EACA,gBAjBS;EAkBT,cGciC;EHbjC,yBGawB;EHZxB,yBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EGUA,YAAA;EACA,gBAAA;AD2DJ;;ACxDA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AD2DJ;;ACxDA;EACI,WAAA;EACA,gBAAA;AD2DJ;;ACxDA;EACI,UAAA;AD2DJ;;ACxDA;EHrCI,WAAA;EACA,qCAAA;EACA,gBAfQ;EAgBR,cGmCoC;EHlCpC,yBAbQ;EAcR,yBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AEiGJ;;AChEA;EACI,yBAAA;ADmEJ;;AE7HA;EAEI,iBAAA;AF+HJ;;AE5HA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AF+HJ;;AE5HA;EJKI,WAAA;EACA,qCAAA;EACA,gBAjBS;EAkBT,cIPoC;EJQpC,yBAbQ;EAcR,yBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EIXA,YAAA;EACA,kBAAA;EACA,gBAAA;AFuIJ;;AEpIA;EACI,WAAA;AFuIJ;;AEpIA;EACI,gCAAA;AFuIJ;;AEpIA;EACI,YAAA;AFuIJ;;AEpIA;EACI,WAAA;AFuIJ;;AEpIA;EACI,YAAA;AFuIJ;;AAnKA;EACI,sBAAA;EACA,UAAA;EACA,SAAA;AAsKJ;;AAnKA;EACI,kCFdG;EEeH,yBFPc;AE6KlB","sourcesContent":["$font: 'Poppins', sans-serif;\n$extra-bold: 800;\n$bold: 700;\n$semi-bold: 600;\n$medium: 500;\n$regular: 400;\n/* Main Colors */\n$dark-pink: #F47C7C;\n$very-light-pink: #FFF2F2;\n$light-pink: #FAD4D4;\n/* Level of Importance Colors */\n$very-important: #FF5D5D;\n$important: #94B49F;\n$less-important: #FFBF86;\n\n@mixin sidebarButtons($bg-color, $text-color, $weight) {\n    width: 100%;\n    font-size: clamp(0.9rem, 2.5vw, 1rem);\n    font-weight: $weight;\n    color: $text-color;\n    background-color: $bg-color;\n    border: 1px solid $dark-pink;\n    border-radius: 10px;\n    padding: 15px 20px;\n    margin-bottom: 15px;\n}","nav {\n    background-color: $dark-pink;\n    padding: 10px 20px;\n    box-shadow: 5px 0 10px #00000054;\n    position: relative;\n    z-index: 1;\n}\n\n.nav-items {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n#nav-menu {\n    width: 25px;\n    height: 25px;\n    background-image: url(\"../assets/82-menu-3.svg\");\n    background-size: contain;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    border: 1px solid #FFFFFF;\n    cursor: pointer;\n}\n\n.nav-logo {\n    font-size: clamp(1.3rem, 2.5vw, 1.8rem);\n    font-weight: $extra-bold;\n    color: #FFFFFF;\n    margin-left: 5%;\n}","// add bootstrap\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');\n@import './variables';\n@import './navbar';\n@import './sidebar';\n@import './taskMain';\n\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    font-family: $font;\n    background-color: $very-light-pink;\n}\n\n","#sidebar {\n    display: none;\n    width: 350px;\n    height: 100vh;\n    background-color: #FAD4D4;\n    padding: 30px 20px;\n    // position: relative;\n}\n\n.sidebar-header {\n    font-size: clamp(1.4rem, 2.5vw, 1.8rem);\n    font-weight: $semi-bold;\n    margin-bottom: 20px;\n}\n\n.project-tasks, .set-project-name {\n    @include sidebarButtons(#FFFFFF, #000000, $medium)\n}\n\n.sidebar-form {\n    display: none;\n}\n\n.sidebar-btn-wrapper {\n    display: flex;\n    gap: 15px;\n}\n\n.add-project {\n    @include sidebarButtons($dark-pink, #FFFFFF, $extra-bold)\n}\n\n.cancel-project {\n    @include sidebarButtons(#ffffff, #000000, $extra-bold);\n    border: none;\n    padding: 5px 5px;\n}\n\n.all-tasks {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.editText, .delete {\n    width: 25px;\n    margin-left: 5px;\n}\n\n.sidebar-form-btn {\n    width: 50%;\n}\n\n.add-new-project {\n    @include sidebarButtons($dark-pink, #FFFFFF, $semi-bold)\n}\n\n.active {\n    display: block !important;\n}\n\n","#tasks-main {\n    // position: relative;\n    margin: 30px 15px;\n}\n\n.task-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.add-task-btn {\n    @include sidebarButtons($dark-pink, #FFFFFF, $extra-bold);\n    width: 115px;\n    padding: 10px 10px;\n    margin-bottom: 0;\n}\n\ntable {\n    width: 100%;\n}\n\nthead {\n    border-bottom: 1px solid $dark-pink;\n}\n\nth {\n    width: 270px;\n}\n\n.input-radio-header {\n    width: 80px;\n}\n\n.controls-header {\n    width: 160px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/26-write.svg":
/*!*********************************!*\
  !*** ./src/assets/26-write.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26-write.svg";

/***/ }),

/***/ "./src/assets/61-trash.svg":
/*!*********************************!*\
  !*** ./src/assets/61-trash.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61-trash.svg";

/***/ }),

/***/ "./src/assets/82-menu-3.svg":
/*!**********************************!*\
  !*** ./src/assets/82-menu-3.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82-menu-3.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _app_DOMcontent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/DOMcontent */ "./src/app/DOMcontent.js");


 // navUI();
})();

/******/ })()
;
//# sourceMappingURL=mainc14a2ca4514aedda4791.js.map