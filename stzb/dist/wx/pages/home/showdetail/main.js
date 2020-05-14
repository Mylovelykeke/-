require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([17],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(144);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_d68b885a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(147);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(145)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d68b885a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_d68b885a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\showdetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d68b885a", Component.options)
  } else {
    hotAPI.reload("data-v-d68b885a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 145:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_searchInput_index__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_card_card__ = __webpack_require__(17);

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
        searchInput: __WEBPACK_IMPORTED_MODULE_1__components_searchInput_index__["a" /* default */],
        vueCard: __WEBPACK_IMPORTED_MODULE_2__components_card_card__["a" /* default */]
    },
    onLoad: function onLoad(options) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
        this.val = options.search || 3;
        this.OnGetSearch();
    },
    data: function data() {
        return {
            content: [],
            val: '',
            ShareAppMessage: ''
        };
    },

    methods: {
        OnGetSearch: function OnGetSearch() {
            var that = this;
            this.$httpWX.get({
                url: 'http://localhost:4000/api/article/search',
                data: {
                    keyword: that.val
                }
            }).then(function (res) {
                if (res.statusCode == 200) {
                    that.content = res.data;
                }
            });
        },
        OnclickShare: function OnclickShare(val) {
            this.ShareAppMessage = val;
        },
        getViewDetail: function getViewDetail(id) {
            wx.navigateTo({
                url: "/pages/home/details/main?id=" + id
            });
        }
    },
    onShareAppMessage: function onShareAppMessage(data) {
        var that = this;
        return {
            title: that.ShareAppMessage.title, // 转发后 所显示的title
            path: "/pages/home/details/?id=" + that.ShareAppMessage.id, // 相对的路径
            success: function success(res) {
                // 成功后要做的事情
                console.log(res.shareTickets[0]);
                // console.log

                wx.getShareInfo({
                    shareTicket: res.shareTickets[0],
                    success: function success(res) {
                        that.setData({
                            isShow: true
                        });
                        console.log(that.setData.isShow);
                    },
                    fail: function fail(res) {
                        console.log(res);
                    },
                    complete: function complete(res) {
                        console.log(res);
                    }
                });
            },
            fail: function fail(res) {
                // 分享失败
                console.log(res);
            }
        };
    }
});

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "header"
  }, [_c('searchInput', {
    attrs: {
      "type": false,
      "value": _vm.val,
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('vue-card', {
    attrs: {
      "content": _vm.content,
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "getViewDetail": _vm.getViewDetail,
      "getViewShare": _vm.OnclickShare
    }
  })], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d68b885a", esExports)
  }
}

/***/ })

},[143]);