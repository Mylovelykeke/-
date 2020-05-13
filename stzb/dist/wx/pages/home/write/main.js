require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([16],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(146);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7d3df560_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(156);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(147)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7d3df560"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7d3df560_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\write\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d3df560", Component.options)
  } else {
    hotAPI.reload("data-v-7d3df560", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 147:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_imgPicker__ = __webpack_require__(54);


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
        WxImgPicker: __WEBPACK_IMPORTED_MODULE_2__components_imgPicker__["a" /* default */]
    },
    data: function data() {
        return {
            locationinfo: null,
            ImgArray: [],
            name: '',
            content: '',
            title: '',
            flag: false,
            actions: [{
                name: '出租房子'
            }, {
                name: '求租房子'
            }, {
                name: '其他'
            }]
        };
    },
    onShow: function onShow() {
        var _this = this;

        this.$bus.$on('updateData', function (res) {
            console.log(res);
            _this.locationinfo = res;
        });
    },
    onLoad: function onLoad() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
    },

    methods: {
        handleClick: function handleClick(_ref) {
            var name = _ref.name;

            this.name = name;
            this.flag = false;
        },
        selectType: function selectType() {
            this.flag = true;
        },
        changData: function changData(val) {
            this.val = val;
        },
        edit: function edit() {
            if (!this.title) {
                this.$Message({
                    content: '至少输入文章标题',
                    type: 'warning'
                });
                return;
            }
            if (this.content.length < 15) {
                this.$Message({
                    content: '至少输入15个字',
                    type: 'warning'
                });
                return;
            }
            var files = '';
            if (Array.isArray(this.ImgArray)) {
                try {
                    files = this.ImgArray.map(function (t) {
                        return t.id;
                    }).join(',');
                } catch (e) {
                    console.log(e);
                }
            }
            var openid = '11111111111111111111';
            var location = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.locationinfo);
            this.$httpWX.post({
                url: 'http://localhost:4000/api/article/created',
                data: {
                    'openid': openid,
                    "summary": this.name,
                    'title': this.title,
                    'content': this.content,
                    'locationinfo': location,
                    'files': files
                }
            }).then(function (res) {
                if (res.statusCode == 200) {
                    wx.switchTab({
                        url: '/pages/home/main',
                        success: function success() {
                            var page = getCurrentPages().pop();
                            console.log('page', page);
                            if (page == undefined || page == null) return;
                            page.onLoad();
                        }, //接口调用成功的回调函数
                        fail: function fail() {}, //接口调用失败的回调函数
                        complete: function complete() {} //接口调用结束的回调函数（调用成功、失败都会执行）
                    });
                }
            });
        }
    },
    mounted: function mounted() {
        this.name = this.actions[0].name;
    }
});

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "content",
    attrs: {
      "id": "toast"
    }
  }, [_c('i-modal', {
    attrs: {
      "visible": _vm.flag,
      "action-mode": "vertical",
      "show-cancel": false,
      "show-ok": false,
      "mpcomid": '0'
    }
  }, _vm._l((_vm.actions), function(val, index) {
    return _c('div', {
      key: index,
      staticClass: "modalItem",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleClick(val)
        }
      }
    }, [_vm._v("\n              " + _vm._s(val.name) + "\n          ")])
  })), _vm._v(" "), _c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "header-title",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.selectType
    }
  }, [_c('span', [_vm._v("\n                  " + _vm._s(_vm.name) + "\n              ")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-xiala"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "headerInput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.title),
      expression: "title"
    }],
    attrs: {
      "type": "text",
      "placeholder": "加个标题哟~",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.title = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content),
      expression: "content"
    }],
    attrs: {
      "name": "",
      "placeholder": "尽情发挥吧 ~",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('wx-imgPicker', {
    attrs: {
      "imgList": _vm.ImgArray,
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', [_c('i-cell-group', {
    attrs: {
      "mpcomid": '4'
    }
  }, [(!_vm.locationinfo) ? _c('i-cell', {
    attrs: {
      "title": "位置",
      "value": "小区名称或地址",
      "is-link": "",
      "url": "/pages/searchlocation/main",
      "mpcomid": '3'
    }
  }) : _c('i-cell', {
    attrs: {
      "title": "位置",
      "value": _vm.locationinfo && _vm.locationinfo.title,
      "is-link": "",
      "url": "/pages/searchlocation/main",
      "mpcomid": '2'
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', [_c('i-button', {
    attrs: {
      "type": "primary",
      "size": "small",
      "i-class": "publish",
      "form-type": "submit",
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "click": _vm.edit
    }
  }, [_vm._v("发布")])], 1), _vm._v(" "), _c('i-message', {
    attrs: {
      "id": "message",
      "mpcomid": '6'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7d3df560", esExports)
  }
}

/***/ })

},[145]);