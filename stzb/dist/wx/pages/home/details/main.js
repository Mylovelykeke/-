require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(112);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_c0ff5b1a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(123);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(113)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c0ff5b1a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_c0ff5b1a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\details\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c0ff5b1a", Component.options)
  } else {
    hotAPI.reload("data-v-c0ff5b1a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 113:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_chat_index__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_swiper_index__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_commonent_item_index__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_skeleton_index__ = __webpack_require__(51);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            hostId: '',
            flag: true,
            showSkeleton: true,
            parentCommentId: '',
            focus: false,
            plaVal: '我也说一句。。。。',
            value: '',
            replyUserName: '',
            itemInfo: '',
            location: '',
            swiper: "swiper",
            payment: '',
            title: '',
            userInfo: {
                name: '访客',
                avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai'
            },
            content: '',
            indicatorDots: false,
            autoplay: false,
            interval: 3000,
            duration: 500,
            files: [],
            num: '356人',
            comment: []
        };
    },

    components: {
        ChatCommon: __WEBPACK_IMPORTED_MODULE_2__components_chat_index__["a" /* default */],
        SwiperImg: __WEBPACK_IMPORTED_MODULE_3__components_swiper_index__["a" /* default */],
        commonentItem: __WEBPACK_IMPORTED_MODULE_4__components_commonent_item_index__["a" /* default */],
        skeleton: __WEBPACK_IMPORTED_MODULE_5__components_skeleton_index__["a" /* default */]
    },
    onPullDownRefresh: function onPullDownRefresh() {
        wx.showNavigationBarLoading(); //在标题栏中显示加载
        this.OnGetCommonList(this.hostId);
        //模拟加载
        setTimeout(function () {
            // complete
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
        }, 1500);
    },
    onLoad: function onLoad(options) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
        var hostId = options.id;
        this.hostId = hostId;
        this.OnAddViews(hostId);
        this.OnGetItemDetail(hostId);
    },
    onShow: function onShow(options) {
        console.log(options);
        if (this.flag) {
            this.OnGetCommonList(this.hostId);
        } else {
            this.flag = true;
            return;
        }
    },

    methods: {
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
                    that.OnGetCommonList(that.hostId);
                }
            });
        },
        OnGetItemDetail: function OnGetItemDetail(id) {
            var _this = this;

            this.$httpWX.get({
                url: 'http://localhost:4000/api/article/' + id
            }).then(function (res) {
                var _res$data = res.data,
                    title = _res$data.title,
                    content = _res$data.content,
                    files = _res$data.files,
                    locationinfo = _res$data.locationinfo,
                    createAt = _res$data.createAt;

                _this.itemInfo = res.data;
                _this.title = title;
                _this.content = content;
                _this.files = files;
                _this.location = JSON.parse(locationinfo);
                setTimeout(function () {
                    _this.showSkeleton = false;
                }, 500);
            });
        },

        /**
         * 观看加1
         *  
         */
        OnAddViews: function OnAddViews(id) {
            this.$httpWX.post({
                url: 'http://localhost:4000/api/article/' + id + '/views'
            }).then(function (res) {
                console.log(res, '观看加1');
            });
        },
        OnGetCommonList: function OnGetCommonList(id) {
            var _this2 = this;

            this.$httpWX.get({
                url: 'http://localhost:4000/api/comment/host/' + id
            }).then(function (res) {
                var comment = [];
                comment.push.apply(comment, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(res.data[0]));
                _this2.comment = comment;
            });
        },
        OnclickReport: function OnclickReport() {
            wx.navigateTo({
                url: "/pages/report/main"
            });
        },
        back: function back() {
            wx.navigateBack({
                delta: 1
            });
        },
        previewImage: function previewImage(item) {
            console.log(item);
            this.flag = false;
            //图片预览
            var urls = this.files.map(function (data) {
                return data.url;
            });
            console.log(urls);
            wx.previewImage({
                current: item.url, // 当前显示图片的http链接
                urls: urls, // 需要预览的图片http链接列表
                success: function success(res) {},
                fail: function fail(res) {
                    console.log(res);
                }
            });
        }
    }
});

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_755bac1e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(122);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(120)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_755bac1e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\swiper\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-755bac1e", Component.options)
  } else {
    hotAPI.reload("data-v-755bac1e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    images: {
      type: Array
    },
    swiper: {}
  },
  data: function data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500
    };
  }
});

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('swiper', {
    class: _vm.swiper,
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration
    }
  }, _vm._l((_vm.images), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item.url,
        "mode": "aspectFill"
      }
    })])], 1)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-755bac1e", esExports)
  }
}

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [(_vm.showSkeleton) ? _c('skeleton', {
    attrs: {
      "selector": "skeleton",
      "bgcolor": "#FFF",
      "mpcomid": '0'
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "nav skeleton-rect"
  }, [_c('div', {
    staticClass: "back"
  }, [_c('i', {
    staticClass: "iconfont icon-fanhui",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.back
    }
  })], 1), _vm._v(" "), (_vm.files && _vm.files.length > 0) ? _c('swiper', {
    staticClass: "swiper",
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration
    }
  }, _vm._l((_vm.files), function(item, index) {
    return _c('swiper-item', {
      key: index,
      attrs: {
        "mpcomid": '1_' + index
      }
    }, [_c('image', {
      staticClass: "slide-image  ",
      attrs: {
        "src": item.url,
        "data-src": item.url,
        "mode": "aspectFill",
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.previewImage(item)
        }
      }
    })])
  })) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "detail_userinfo",
    style: ({
      'padding-top': _vm.files && _vm.files.length > 0 ? '' : '80px'
    })
  }, [_c('img', {
    staticClass: "skeleton-rect",
    attrs: {
      "src": _vm.userInfo.avatar,
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "user-name skeleton-rect"
  }, [_vm._v(_vm._s(_vm.userInfo.name))]), _vm._v(" "), _c('span', {
    staticClass: "attest skeleton-rect"
  }, [_c('i', {
    staticClass: "iconfont icon-shimingrenzheng"
  })], 1), _vm._v(" "), _vm._l((5), function(count, index) {
    return _c('span', {
      key: count,
      staticClass: "flower"
    }, [_c('i', {
      staticClass: "iconfont icon-icon-test"
    })], 1)
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "content",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.OnClickReplyName({
          id: 1,
          name: '访客'
        })
      }
    }
  }, [_c('div', {
    staticClass: "detail-item"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n                  " + _vm._s(_vm.title) + "\n              ")])]), _vm._v(" "), (_vm.location) ? _c('div', {
    staticClass: "location skeleton-rect"
  }, [_c('div', {
    staticClass: "location-info"
  }, [_c('i', {
    staticClass: "iconfont icon-zb"
  }), _vm._v("\n                  " + _vm._s(_vm.location && _vm.location.address) + "\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "location-right"
  }, [_c('i', {
    staticClass: "iconfont icon-youjiantou"
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "article "
  }, [_vm._v("\n              " + _vm._s(_vm.content) + "\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "content-footer"
  }, [_c('div', {
    staticClass: "skeleton-rect"
  }, [_vm._v("\n                  发表于 " + _vm._s(_vm.itemInfo && _vm.itemInfo.createAt) + "\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "content-phone"
  }, [_c('div', [_c('i', {
    staticClass: "iconfont icon-dianhua"
  }), _vm._v(" "), _c('span', [_vm._v("联系电话")]), _vm._v(" "), _c('span', {
    staticClass: "content-count"
  }, [_vm._v("200人咨询")])], 1), _vm._v(" "), _c('span', [_vm._v("获取")])])])]), _vm._v(" "), _c('div', {
    staticClass: "notice"
  }, [_c('div', {
    staticClass: "notice-title"
  }, [_c('span', [_vm._v("租房须知")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-youjiantou"
  })], 1), _vm._v(" "), _c('span', [_vm._v("若房东向您索要中介费，你可举报！")]), _vm._v(" "), _c('div', {
    staticClass: "report",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.OnclickReport
    }
  }, [_c('i', {
    staticClass: "iconfont icon-jubao"
  }), _vm._v(" "), _c('span', [_vm._v("举报")])], 1)]), _vm._v(" "), _c('div', [_c('chat-common', {
    attrs: {
      "plaVal": _vm.plaVal,
      "focus": _vm.focus,
      "eventid": '4',
      "mpcomid": '2'
    },
    on: {
      "sendMsg": _vm.sendMsg
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "all-commonents"
  }, [_c('div', {
    staticClass: "commonents-title"
  }, [_vm._v("全部评论")]), _vm._v(" "), _c('commonentItem', {
    attrs: {
      "comment": _vm.comment,
      "eventid": '5',
      "mpcomid": '3'
    },
    on: {
      "ReplyName": _vm.OnClickReplyName
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c0ff5b1a", esExports)
  }
}

/***/ })

},[111]);