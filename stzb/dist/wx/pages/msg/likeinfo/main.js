require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(207);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_482a1bb4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(210);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(208)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-482a1bb4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_482a1bb4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\msg\\likeinfo\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-482a1bb4", Component.options)
  } else {
    hotAPI.reload("data-v-482a1bb4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 208:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 209:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      list: [{
        avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
        username: '大黄和搭勾',
        extra: '赞了我的帖子',
        title: '南京地区哪儿有租房子的呀',
        content: '是的撒大苏打大苏打u回到家撒会卡顿是多少空间狄拉克111111111111111111111111111111111111111就'
      }, {
        avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
        username: '大黄和搭勾',
        extra: '赞了我的帖子',
        title: '南京地区哪儿有租房子的呀',
        content: '是的撒大苏打大苏打u回到家撒会卡顿是多少空间狄拉克就'
      }, {
        avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
        username: '大黄和搭勾',
        extra: '赞了我的回复',
        title: '南京地区哪儿有租房子的呀',
        content: '垃圾垃圾的东西'
      }, {
        avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
        username: '大黄和搭勾',
        extra: '赞了我的帖子',
        title: '南京地区哪儿有租房子的呀',
        content: '是的撒大苏打大苏打u回到家撒会卡顿是多少空间狄拉克111111111111111111111111111111111111111就'
      }, {
        avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
        username: '大黄和搭勾',
        extra: '赞了我的帖子',
        title: '南京地区哪儿有租房子的呀',
        content: '是的撒大苏打大苏打u回到家撒会卡顿是多少空间狄拉克就'
      }, {
        avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
        username: '大黄和搭勾',
        extra: '赞了我的回复',
        title: '南京地区哪儿有租房子的呀',
        content: '垃圾垃圾的东西'
      }]
    };
  },

  methods: {
    handleItem: function handleItem() {
      wx.navigateTo({
        url: "/pages/home/details/main"
      });
    }
  }
});

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._l((_vm.list), function(val, index) {
    return _c('div', {
      key: index,
      staticClass: "content"
    }, [_c('i-card', {
      attrs: {
        "i-class": "card-small",
        "full": true,
        "title": val.username,
        "extra": val.extra,
        "thumb": val.avatar,
        "eventid": '0_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleItem(val)
        }
      }
    }, [_c('view', {
      staticStyle: {
        "font-weight": "bold"
      },
      slot: "content"
    }, [_vm._v(_vm._s(val.title))]), _vm._v(" "), _c('view', {
      staticClass: "footer",
      slot: "footer"
    }, [_vm._v(_vm._s(val.content))])])], 1)
  }), _vm._v(" "), _c('i-load-more', {
    attrs: {
      "tip": "暂无更多数据",
      "loading": false,
      "mpcomid": '1'
    }
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-482a1bb4", esExports)
  }
}

/***/ })

},[206]);