require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(168);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_8ec56d38_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(171);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(169)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8ec56d38"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_8ec56d38_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mine\\arbitration\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8ec56d38", Component.options)
  } else {
    hotAPI.reload("data-v-8ec56d38", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 169:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        Onlookers: function Onlookers() {
            wx.navigateTo({
                url: "/pages/mine/arbitration_item/main"
            });
        }
    }
});

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "header"
  }, [_c('span', [_vm._v("仲裁大厅")]), _vm._v(" "), _c('span', [_c('i', {
    staticClass: "iconfont icon-qiehuan"
  }), _vm._v("\n            切换至最新\n        ")], 1)]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, _vm._l((10), function(val, index) {
    return _c('div', {
      key: index,
      staticClass: "main"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v("评论被举报为(包含不友善内容)")]), _vm._v(" "), _vm._m(0, true), _vm._v(" "), _c('div', [_vm._m(1, true), _vm._v(" "), _c('i-progress', {
      attrs: {
        "percent": "25",
        "strokeWidth": "12",
        "hide-info": "",
        "mpcomid": '0_' + index
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "footer",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": _vm.Onlookers
      }
    }, [_vm._v(" \n                前往围观\n                "), _c('i', {
      staticClass: "iconfont icon-youjiantou"
    })], 1)])
  }))])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rep"
  }, [_c('div', {
    staticClass: "img"
  }, [_c('img', {
    attrs: {
      "src": "https://profile.csdnimg.cn/C/9/6/3_eva3288",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "repcontent"
  }, [_c('div', {
    staticClass: "author"
  }, [_vm._v("大肆夸奖打瞌睡的卡上")]), _vm._v(" "), _c('div', {
    staticClass: "violation"
  }, [_vm._v("\n                     实打实的和卡仕达卡仕达看见1111111111111111111111111111哈萨克接电话大苏打实打实大苏打实打实打算\n                   ")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pro_text"
  }, [_c('div', [_vm._v("62%不违规")]), _vm._v(" "), _c('div', [_vm._v("38%不违规")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8ec56d38", esExports)
  }
}

/***/ })

},[167]);