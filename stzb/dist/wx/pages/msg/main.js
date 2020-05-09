require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(190);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_550d05d6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(193);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(191)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-550d05d6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_550d05d6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\msg\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-550d05d6", Component.options)
  } else {
    hotAPI.reload("data-v-550d05d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 191:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 192:
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
            comment: [{
                responder: "有毒的黄同学",
                headeImg: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
                reviewers: "傲娇的",
                time: "2016-09-05",
                content: "你说得对"
            }, {
                responder: "傲娇的",
                reviewers: "有毒的黄同学",
                headeImg: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
                time: "2016-09-05",
                content: "很强"
            }],
            actions: [{
                id: 0,
                name: '删除',
                color: '#fff',
                fontsize: '20',
                width: 100,
                icon: 'trash',
                background: '#ed3f14'
            }, {
                id: 1,
                name: '收藏',
                color: '#fff',
                fontsize: '20',
                width: 100,
                icon: 'collection',
                background: 'rgb(243, 173, 93)'
            }, {
                id: 2,
                name: '返回',
                width: 100,
                color: '#80848f',
                fontsize: '20',
                icon: 'undo'
            }]
        };
    },

    methods: {
        handleClickItem: function handleClickItem(e) {
            console.log(e);
        },
        handleClick: function handleClick() {
            wx.navigateTo({
                url: "/pages/common_item_detail/main"
            });
        }
    }
});

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "notice"
  }, [_c('i-cell-group', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('i-cell-group', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('i-cell', {
    attrs: {
      "title": "系统消息",
      "is-link": "",
      "url": "/pages/msg/systeminfo/main",
      "mpcomid": '1'
    }
  }, [_c('div', {
    slot: "icon"
  }, [_c('img', {
    staticClass: "notice-img dy",
    attrs: {
      "src": "../../../static/images/dy.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "点赞",
      "is-link": "",
      "url": "/pages/msg/likeinfo/main",
      "mpcomid": '2'
    }
  }, [_c('div', {
    slot: "icon"
  }, [_c('img', {
    staticClass: "notice-img",
    attrs: {
      "src": "../../../static/images/dz.png",
      "alt": ""
    }
  })])])], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._l((_vm.comment), function(val, index) {
    return _c('div', {
      key: index
    }, [_c('i-swipeout', {
      attrs: {
        "i-class": "i-swipeout-demo-item",
        "unclosable": false,
        "actions": _vm.actions,
        "eventid": '1_' + index,
        "mpcomid": '4_' + index
      },
      on: {
        "change": _vm.handleClickItem
      }
    }, [_c('div', {
      slot: "content"
    }, [_c('div', {
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": _vm.handleClick
      }
    }, [_c('div', {
      staticClass: "i-swipeout-image"
    }, [_c('img', {
      attrs: {
        "src": val.headeImg,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "i-swipeout-des"
    }, [_c('div', {
      staticClass: "i-swipeout-des-h2"
    }, [_c('div', [_vm._v("\n                                    " + _vm._s(val.responder) + "\n                                ")]), _vm._v(" "), _c('div', [_vm._v("\n                                    " + _vm._s(val.time) + "\n                                ")])]), _vm._v(" "), _c('div', {
      staticClass: "i-swipeout-des-detail"
    }, [_vm._v(_vm._s(val.content) + ".")])])])])])], 1)
  }), _vm._v(" "), _c('i-load-more', {
    attrs: {
      "tip": "暂无更多数据",
      "loading": false,
      "mpcomid": '5'
    }
  })], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-550d05d6", esExports)
  }
}

/***/ })

},[189]);