require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(188);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_19006a74_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(195);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(189)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-19006a74"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_19006a74_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mine\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19006a74", Component.options)
  } else {
    hotAPI.reload("data-v-19006a74", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 189:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_titleBar__ = __webpack_require__(191);
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
  components: {
    titleBar: __WEBPACK_IMPORTED_MODULE_0__components_titleBar__["a" /* default */]
  },
  data: function data() {
    return {
      title: "我的报名",
      logs: [],
      imgUrls: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
      userInfo: null
    };
  },

  methods: {
    toPostings: function toPostings() {
      wx.navigateTo({
        url: "/pages/mine/post/main"
      });
    },
    tofavorite: function tofavorite() {
      wx.navigateTo({
        url: "/pages/mine/favorite/main"
      });
    },
    onGotUserInfo: function onGotUserInfo(e) {
      if (e) {
        this.userInfo = e.target.userInfo;
      }
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var that = this;
    wx.getSetting({
      success: function success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function success(res) {
              that.userInfo = res.userInfo;
            }
          });
        }
        /*
        * res.authSetting = {
        *   "scope.userInfo": true,
        *   "scope.userLocation": true
        * }
        */
      }
    });
  }
});

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_titleBar_vue__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_54d381de_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_titleBar_vue__ = __webpack_require__(194);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(192)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54d381de"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_titleBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_54d381de_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_titleBar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\titleBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] titleBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54d381de", Component.options)
  } else {
    hotAPI.reload("data-v-54d381de", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 192:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 193:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        titleColor: {
            default: "#000000"
        },
        title: {
            default: "推荐"
        }
    },
    data: function data() {
        return {
            title: '11'
        };
    }
});

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "title_block",
    style: ({
      background: _vm.titleColor
    })
  }), _vm._v(" "), _c('span', {
    staticClass: "title_text"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "title-right"
  }, [_vm._t("next", null, {
    mpcomid: '0'
  })], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-54d381de", esExports)
  }
}

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "header"
  }, [(_vm.userInfo) ? _c('div', {
    staticClass: "header_main"
  }, [_c('div', {
    staticClass: "item_msg"
  }, [_c('div', {
    staticClass: "item_img"
  }, [_c('img', {
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "item_name"
  }, [_c('div', [_vm._v(_vm._s(_vm.userInfo.nickName))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.userInfo.country + _vm.userInfo && _vm.userInfo.city))])])]), _vm._v(" "), _vm._m(0)]) : _c('div', {
    staticClass: "align"
  }, [_c('button', {
    attrs: {
      "type": "primary",
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.onGotUserInfo
    }
  }, [_vm._v(" 获取微信授权")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "main-radius"
  }, [_c('div', {
    staticClass: "history_order"
  }, [_c('div', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toPostings
    }
  }, [_c('i', [_vm._v("24")]), _vm._v("\n        我的帖子\n      ")], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.tofavorite
    }
  }, [_c('i', [_vm._v("0")]), _vm._v("\n        收藏夹\n      ")], 1), _vm._v(" "), _c('div', [_c('i', [_vm._v("0")]), _vm._v("\n        最近浏览\n      ")], 1)])]), _vm._v(" "), _c('div', [_c('i-cell-group', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('i-cell', {
    attrs: {
      "title": "社区建设",
      "is-link": "",
      "url": "/pages/mine/communities/main",
      "mpcomid": '0'
    }
  }, [_c('div', {
    slot: "icon"
  }, [_c('i', {
    staticClass: "iconfont icon-daqia"
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "tag",
    slot: "footer"
  }, [_vm._v("\n          举报及处罚示例\n        ")])]), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "联系客服",
      "is-link": "",
      "url": "/pages/mine/contactme/main",
      "mpcomid": '1'
    }
  }, [_c('div', {
    slot: "icon"
  }, [_c('i', {
    staticClass: "iconfont icon-lianxikefu"
  })], 1)]), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "意见反馈",
      "is-link": "",
      "url": "/pages/mine/feedback/main",
      "mpcomid": '2'
    }
  }, [_c('div', {
    slot: "icon"
  }, [_c('i', {
    staticClass: "iconfont icon-yijianfankui"
  })], 1)]), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "商务合作",
      "is-link": "",
      "url": "/pages/work/main",
      "mpcomid": '3'
    }
  }, [_c('div', {
    slot: "icon"
  }, [_c('i', {
    staticClass: "iconfont icon-hezuo-tianchong"
  })], 1)])], 1)], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item_right"
  }, [_c('div', [_vm._v("信用分")]), _vm._v(" "), _c('span', [_vm._v("30")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-19006a74", esExports)
  }
}

/***/ })

},[187]);