require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([20],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [(_vm.showSkeleton) ? _c('skeleton', {
    attrs: {
      "selector": "skeleton",
      "bgcolor": "#FFF",
      "flag": true,
      "mpcomid": '0'
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "responder"
  }, [_c('commonentItem', {
    attrs: {
      "comment": _vm.responderItem,
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "ReplyName": _vm.OnClickReplyName
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "reviewers"
  }, [_c('div', {
    staticClass: "review-title  skeleton-radius"
  }, [_vm._v(_vm._s(_vm.reviewersItem.length) + "条回复")]), _vm._v(" "), _c('commonentItem', {
    attrs: {
      "comment": _vm.reviewersItem,
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "ReplyName": _vm.OnClickReplyName
    }
  })], 1), _vm._v(" "), _c('div', [_c('chat-common', {
    attrs: {
      "plaVal": _vm.plaVal,
      "focus": _vm.focus,
      "eventid": '2',
      "mpcomid": '3'
    },
    on: {
      "sendMsg": _vm.sendMsg
    }
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-ce39e26c", esExports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(93);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_ce39e26c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(110);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(94)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ce39e26c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_ce39e26c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\common_item_detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ce39e26c", Component.options)
  } else {
    hotAPI.reload("data-v-ce39e26c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_skeleton_index__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_chat_index__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_commonent_item_index__ = __webpack_require__(53);

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
        commonentItem: __WEBPACK_IMPORTED_MODULE_3__components_commonent_item_index__["a" /* default */],
        ChatCommon: __WEBPACK_IMPORTED_MODULE_2__components_chat_index__["a" /* default */],
        skeleton: __WEBPACK_IMPORTED_MODULE_1__components_skeleton_index__["a" /* default */]
    },
    onLoad: function onLoad(options) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
        var parentCommentId = '268c44d2-67d5-4602-9b92-913ed773a845' || options.id;
        this.parentCommentId = parentCommentId;
        this.OnGetCommonList(parentCommentId);
    },
    data: function data() {
        return {
            responderItem: [],
            reviewersItem: [],
            showSkeleton: true,
            focus: false,
            plaVal: '我也说一句。。。。',
            replyUserName: '',
            hostId: '',
            parentCommentId: ''
        };
    },

    methods: {
        OnGetCommonList: function OnGetCommonList(id) {
            var _this = this;

            this.$httpWX.get({
                url: 'http://localhost:4000/api/comment/' + id
            }).then(function (res) {
                console.log(res);
                if (res.statusCode == 200) {
                    _this.hostId = res.data.parent.hostId;
                    _this.replyUserName = res.data.parent.name;
                    _this.responderItem = [res.data.parent];
                    _this.reviewersItem = res.data.children;
                    setTimeout(function () {
                        _this.showSkeleton = false;
                    }, 500);
                }
            });
        },
        OnClickReplyName: function OnClickReplyName(val) {
            console.log(val);
            this.focus = true;
            this.value = '';
            this.replyUserName = val.name;
            this.plaVal = '@' + val.name;
            this.parentCommentId = val.id;
        },
        sendMsg: function sendMsg(val) {
            var that = this;
            this.$httpWX.post({
                url: 'http://localhost:4000/api/comment',
                data: {
                    hostId: that.hostId,
                    name: '垃圾人呀',
                    replyUserName: that.replyUserName,
                    email: '1115796788',
                    content: val,
                    parentCommentId: that.parentCommentId,
                    createByAdmin: false
                }
            }).then(function (res) {
                if (res.statusCode == 200) {
                    that.OnGetCommonList(that.parentCommentId);
                }
            });
        }
    }
});

/***/ })

},[92]);