require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([19],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(108);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3f0bfc00_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(109)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3f0bfc00"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3f0bfc00_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f0bfc00", Component.options)
  } else {
    hotAPI.reload("data-v-3f0bfc00", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 109:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_card_card__ = __webpack_require__(16);

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
  data: function data() {
    var a = {
      time: '2012-12-08 02.14',
      userInfo: {
        name: '丁香医生',
        avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai'
      },
      ImgArray: [{
        url: 'http://localhost:4000/public/7.png'
      }],
      title: '安静速度快快的经开是哪个出售！！！！！',
      brief: 'tip: 如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则有可能导致 setData 被不停地调用，因而通常情况下请在改变 current 值前检测 source 字段来判断是否是由于用户触摸引起。'
    };
    return {
      current: '0',
      clientHeight: 0,
      swiperIndex: '0',
      content: []
    };
  },
  created: function created() {
    var that = this;
    wx.getSystemInfo({
      success: function success(res) {
        that.clientHeight = res.windowHeight;
      }
    });
  },
  onLoad: function onLoad() {
    this.OnGetList();
  },

  components: {
    vueCard: __WEBPACK_IMPORTED_MODULE_1__components_card_card__["a" /* default */]
  },
  onPullDownRefresh: function onPullDownRefresh() {
    wx.showNavigationBarLoading(); //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading(); //完成停止加载
      wx.stopPullDownRefresh(); //停止下拉刷新
    }, 1500);
  },

  methods: {
    OnGetList: function OnGetList() {
      var _this = this;

      this.$httpWX.get({
        url: 'http://localhost:4000/api/article'
      }).then(function (res) {
        var _content;

        console.log(res.data[0]);
        var list = res.data[0];
        (_content = _this.content).push.apply(_content, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(list));
        console.log(_this.content);
      });
    },

    //拖拽
    drapchange: function drapchange(e) {
      console.log(e);
    },
    swiperChange: function swiperChange(e) {
      this.current = e.target.current;
    },
    handleChange: function handleChange(e) {
      this.current = e.target.key;
      this.swiperIndex = e.target.key;
    },
    getViewDetail: function getViewDetail(id) {
      wx.navigateTo({
        url: "/pages/home/details/main?id=" + id
      });
    },
    OnReleaseArticle: function OnReleaseArticle() {
      wx.navigateTo({
        url: "/pages/home/write/main"
      });
    },
    showInput: function showInput() {
      wx.navigateTo({
        url: "/pages/home/searchpage/main"
      });
    },
    OnclickShare: function OnclickShare() {
      this.onShareAppMessage();
    }
  },
  onShareAppMessage: function onShareAppMessage() {
    console.log(11111111);
    var that = this;
    return {
      title: '简直走别拐弯', // 转发后 所显示的title
      path: "/pages/home/details/main", // 相对的路径
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

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('vtu-navbar', {
    attrs: {
      "title": "Navbar",
      "use-bar-slot": "",
      "bg-color": "white",
      "goHome": false,
      "mpcomid": '0'
    }
  }, [_c('div', {
    staticClass: "head"
  }, [_c('view', [_c('div', {
    staticClass: "search-bar"
  }, [_c('div', {
    staticClass: "search-bar__box "
  }, [_c('view', {
    staticClass: "search-bar__label",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.showInput
    }
  }, [_c('icon', {
    staticClass: "icon-search",
    attrs: {
      "size": "14",
      "type": "search",
      "role": "img"
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "search-bar__text"
  }, [_vm._v("搜索")])], 1)])])])])]), _vm._v(" "), _c('div', {
    staticClass: "msg"
  }, [_c('i-notice-bar', {
    attrs: {
      "icon": "systemprompt",
      "mpcomid": '1'
    }
  }, [_vm._v("\n      点击\"•●•\"添加到我的小程序，快速寻找\n    ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "searchhead"
  }, [_c('i-tabs', {
    attrs: {
      "current": _vm.current,
      "eventid": '1',
      "mpcomid": '4'
    },
    on: {
      "change": _vm.handleChange
    }
  }, [_c('i-tab', {
    key: "0",
    attrs: {
      "title": "求租广场",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "1",
    attrs: {
      "title": "房源",
      "mpcomid": '3'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "swiperAuto"
  }, [(_vm.current == 0) ? _c('div', [_c('vue-card', {
    attrs: {
      "content": _vm.content,
      "eventid": '2',
      "mpcomid": '5'
    },
    on: {
      "getViewDetail": _vm.getViewDetail,
      "getViewShare": _vm.OnclickShare
    }
  })], 1) : (_vm.current == 1) ? _c('div', _vm._l((_vm.list), function(val, index) {
    return _c('div', {
      key: index,
      staticClass: "headstream"
    }, [_c('i-card', {
      attrs: {
        "i-class": "card-small",
        "full": true,
        "title": val.username,
        "thumb": val.avatar,
        "eventid": '3_' + index,
        "mpcomid": '6_' + index
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
  })) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "publish",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.OnReleaseArticle
    }
  }, [_c('div', {}, [_c('i', {
    staticClass: "iconfont icon-fabu"
  })], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3f0bfc00", esExports)
  }
}

/***/ })

},[107]);