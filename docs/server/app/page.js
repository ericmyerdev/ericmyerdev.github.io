(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 5092:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./projects": 5926,
	"./projects.js": 5926,
	"utils/projects": 5926,
	"utils/projects.js": 5926
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 5092;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 1830:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/get-img-props");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 6864:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 2210:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config");

/***/ }),

/***/ 5359:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context");

/***/ }),

/***/ 7160:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 2336:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 120:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8423:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 8658:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once");

/***/ }),

/***/ 4319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1865);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6327);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_1__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

    const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6030)), "/Users/ericmyer/Documents/Projects/web/onedayprojects/app/page.jsx"],
          
        }]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9562)), "/Users/ericmyer/Documents/Projects/web/onedayprojects/app/layout.jsx"],
          
        }
      ]
      }.children;
    const pages = ["/Users/ericmyer/Documents/Projects/web/onedayprojects/app/page.jsx"];
    
    const originalPathname = "/page"
    const __next_app__ = {
      require: __webpack_require__,
      // all modules are in the entry chunk, so we never actually need to load chunks in webpack
      loadChunk: () => Promise.resolve()
    }

    
  

/***/ }),

/***/ 4502:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9150, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7734, 23))

/***/ }),

/***/ 7561:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5457, 23))

/***/ }),

/***/ 8379:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "style_container__cOdUb",
	"title": "style_title__V1b_8"
};


/***/ }),

/***/ 6030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./utils/projects.js + 2 modules
var projects = __webpack_require__(5926);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1518);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/linkScroller/style.module.scss
var style_module = __webpack_require__(8379);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./components/linkScroller/index.jsx



const scroller = ({ Items, Query, Path })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (style_module_default()).container,
        children: Items.map(({ id, name }, idx)=>{
            const link = Query ? `?${Query}=${id}` : `${id}`;
            return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `${Path ? `${Path}/` : ""}${link}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: (style_module_default()).title,
                    children: name
                })
            }, idx);
        })
    });
};
/* harmony default export */ const linkScroller = (scroller);

;// CONCATENATED MODULE: ./app/page.jsx



const page_projects = (0,projects/* getProjects */.mW)();
const Page = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(linkScroller, {
            Path: "/projects",
            Items: page_projects
        })
    });
};
/* harmony default export */ const page = (Page);


/***/ }),

/***/ 5926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  mW: () => (/* binding */ getProjects)
});

// UNUSED EXPORTS: getProject, getProjectPaths

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./utils/projects.js


const projectDir = external_path_default().join(process.cwd(), "app", "projects");
const formatName = (name)=>{
    const strArr = name.split("-");
    const cappedArr = strArr.map((str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
    return cappedArr.join(" ");
};
const getProject = async (id)=>{
    const { default: component } = await __webpack_require__(5092)(`${projectDir}/${id}`);
    const name = formatName(id);
    return {
        id,
        name,
        component
    };
};
const getProjects = ()=>{
    const projectPaths = external_fs_default().readdirSync(projectDir);
    const projectArr = projectPaths.filter((projectId)=>!projectId.includes(".")).map((projectId)=>{
        const name = formatName(projectId);
        return {
            id: projectId,
            name
        };
    });
    return projectArr;
};
const getProjectPaths = ()=>{
    const projectPaths = fs.readdirSync(projectDir);
    const projectArr = projectPaths.map((project)=>{
        return {
            id: project
        };
    });
    return projectArr;
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [450,785], () => (__webpack_exec__(4319)));
module.exports = __webpack_exports__;

})();