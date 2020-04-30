require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([16],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(128);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7d3df560_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(138);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(129)
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

/***/ 129:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_imgPicker__ = __webpack_require__(42);
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
        WxImgPicker: __WEBPACK_IMPORTED_MODULE_0__components_imgPicker__["a" /* default */]
    },
    data: function data() {
        return {
            val: '小区名称或地址',
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
            _this.val = res;
        });
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
            var _this2 = this;

            var openid = wx.getStorageSync('openid');
            this.$httpWX.post({
                url: 'http://localhost:3000/articles/edit',
                data: {
                    'openid': openid,
                    "type": this.name,
                    'title': this.title,
                    'content': this.content,
                    'locationinfo': this.val
                }
            }).then(function (res) {
                if (res.code == 0) {
                    if (_this2.ImgArray.length > 0) {
                        _this2.upLoad(_this2.ImgArray, 0, _this2.ImgArray.length, res.data.articleid);
                    }
                }
            });
        },
        upLoad: function upLoad(imgPath, i, upLength, articleid) {
            var that = this;
            //上传文件
            wx.uploadFile({
                url: 'http://localhost:3000/articles/upload',
                filePath: imgPath[i].url,
                name: 'file',
                formData: {
                    method: 'POST', //请求方式
                    articleid: articleid
                },
                success: function success(res) {
                    console.log('上传成功' + i);
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    // that.files = that.files.concat(imgPath[i]);		//合并图片显示数组
                    // let imgData = JSON.parse(res.data);
                    // that.upImg.push(imgData.data);
                    console.log(res, '???????');
                },
                fail: function fail(res) {
                    console.log(res);
                    // wx.hideLoading();
                    // wx.showModal({
                    //     title: '错误提示',
                    //     content: '上传图片失败',
                    //     showCancel: false,
                    //     success: function (res) { }
                    // })
                },
                complete: function complete() {
                    i++;
                    if (i == upLength) {
                        wx.hideLoading(); //上传结束，隐藏loading
                    } else {
                        that.upLoad(imgPath, i, upLength, articleid);
                    }
                }
            });
        }
    },
    mounted: function mounted() {
        this.name = this.actions[0].name;
    }
});

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "content"
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
      "mpcomid": '3'
    }
  }, [_c('i-cell', {
    attrs: {
      "title": "位置",
      "value": _vm.val.title,
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
      "mpcomid": '4'
    },
    on: {
      "click": _vm.edit
    }
  }, [_vm._v("发布")])], 1)])
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

},[127]);