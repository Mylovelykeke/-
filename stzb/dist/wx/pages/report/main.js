require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(189);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_032f1c95_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(192);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(190)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-032f1c95"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_032f1c95_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\report\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-032f1c95", Component.options)
  } else {
    hotAPI.reload("data-v-032f1c95", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 190:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card_card__ = __webpack_require__(16);
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
        vueCard: __WEBPACK_IMPORTED_MODULE_0__components_card_card__["a" /* default */]
    },
    data: function data() {
        return {
            ITEM: null,
            value: "",
            sum: 0,
            content: [{
                time: '2012-12-08 02.14',
                userInfo: {
                    name: '丁香医生',
                    avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai'
                },
                ImgArray: [],
                title: '安静速度快快的经开是哪个出售！！！！！',
                brief: 'tip: 如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则有可能导致 setData 被不停地调用，因而通常情况下请在改变 current 值前检测 source 字段来判断是否是由于用户触摸引起。'
            }],
            list: ['低俗色情', '垃圾广告', '内容低俗无意义', '辱骂攻击', '其他违法信息', '抄袭我的内容', '暴露我的隐私', '内容里有关无我的不实描述']
        };
    },

    methods: {
        handleItem: function handleItem(index) {
            this.ITEM = index;
        },
        watchVal: function watchVal() {
            this.sum = this.value.length;
        }
    }
});

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "report"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("帖子信息")]), _vm._v(" "), _c('div', [_c('vue-card', {
    attrs: {
      "footer": false,
      "content": _vm.content,
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "report_type"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("举报类型")]), _vm._v(" "), _c('div', {
    staticClass: "type_arr clearfix"
  }, _vm._l((_vm.list), function(val, index) {
    return _c('div', {
      key: index,
      class: index === _vm.ITEM ? 'line' : '',
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleItem(index)
        }
      }
    }, [_vm._v(_vm._s(val))])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "report_account"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("请填写举报理由(选填)")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.value),
      expression: "value"
    }],
    attrs: {
      "maxlength": "200",
      "rows": "1",
      "placeholder": "描述理由请不要超过200字",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.value)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.value = $event.target.value
      }, _vm.watchVal]
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "scope"
  }, [_vm._v(_vm._s(_vm.sum) + "/200")])])]), _vm._v(" "), _c('div', {
    staticClass: "submit"
  }, [_c('i-button', {
    attrs: {
      "bind:click": "handleClick",
      "type": "primary",
      "disabled": "",
      "mpcomid": '1'
    }
  }, [_vm._v("提交")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-032f1c95", esExports)
  }
}

/***/ })

},[188]);