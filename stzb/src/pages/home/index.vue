<template>
  <div>
    <div class="msg">
      <i-notice-bar icon="systemprompt" loop>
        点击"•●•"添加到我的小程序，快速寻找
      </i-notice-bar>
    </div>
    <div class="searchhead">
      <div class="head">
        <view>
          <!-- 搜索 -->
          <div class="search-bar">
            <div class="search-bar__box ">
              <view @click="showInput" class="search-bar__label">
                <icon class="icon-search" size="14" type="search" role="img"></icon>
                <view class="search-bar__text">搜索</view>
              </view>
            </div>
          </div>

        </view>
      </div>
      <i-tabs :current="current" @change="handleChange">
        <i-tab key="0" title="求租广场" count="3"></i-tab>
        <i-tab key="1" title="房源"></i-tab>
      </i-tabs>
    </div>
    <!-- swiper 滑动页 -->
    <div class="swiperAuto">
      <swiper :current='swiperIndex' :style="{height:clientHeight?clientHeight+'px':'auto'}" @change="swiperChange"
        @transition="swipertransition">
        <swiper-item item-id='2'>
          <scroll-view :scroll-y="true" :style="{height: clientHeight?clientHeight+'px':'auto'}">
            <div class="home-card" :key="index" :val=val>
              <vue-card @getViewDetail="getViewDetail" :content='content' />
            </div>
          </scroll-view>
        </swiper-item>
        <swiper-item item-id='2'>
          <scroll-view :scroll-y="true" :style="{height: clientHeight?clientHeight+'px':'auto'}">
            <div class="home-card" :key="index" :val=val>
              <vue-card @getViewDetail="getViewDetail" />
            </div>
          </scroll-view>
        </swiper-item>
      </swiper>
    </div>
    <!-- 拖拽区域 -->
    <div class="publish">
        <div class="">
            <i class="iconfont icon-fabu"></i>
        </div>
    </div>
  </div>
</template>
<script>
  import vueCard from '@/components/card/card'
  export default {
    data() {
      let a = {
        time: '2012-12-08 02.14',
        userInfo: {
          name: '丁香医生',
          avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai'
        },
        title: '安静速度快快的经开是哪个出售！！！！！',
        brief: 'tip: 如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则有可能导致 setData 被不停地调用，因而通常情况下请在改变 current 值前检测 source 字段来判断是否是由于用户触摸引起。'
      }
      return {
        current: '0',
        clientHeight: 0,
        swiperIndex: '0',
        content: (new Array(30)).fill(a),
        content1: [{
            time: '2012-12-08 02.14',
            userInfo: {
              name: '丁香医生',
              avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai'
            },
            title: '安静速度快快的经开是哪个出售！！！！！',
            brief: 'tip: 如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则有可能导致 setData 被不停地调用，因而通常情况下请在改变 current 值前检测 source 字段来判断是否是由于用户触摸引起。'
          },
          {
            time: '2012-12-08 02.14',
            userInfo: {
              name: '王大锤',
              avatar: 'https://profile.csdnimg.cn/A/7/C/3_qq_38603437'
            },
            title: '中国水水倒萨大零秒十六点三顶顶顶顶顶了多少水水水水水水水水水水水水',
            brief: `原标题：31省区市新增46例新冠肺炎，昨日新增12例本土病例

        4月15日0—24时，31个省（自治区、直辖市）和新疆生产建设兵团报告新增确诊病例46例，其中34例为境外输入病例，12例为本土病例（广东5例，黑龙江4例，北京3例）；无新增死亡病例；新增疑似病例4例，其中3例为境外输入疑似病例（上海3例），1例为本土疑似病例（北京1例）。`
          },
          {
            time: '2012-12-08 02.14',
            userInfo: {
              name: '丁香医生',
              avatar: 'https://profile.csdnimg.cn/C/9/6/3_eva3288'
            },
            title: '中国水水倒萨大零秒十六点三顶顶顶顶顶了多少水水水水水水水水水水水水',
            brief: '的撒顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶大飒飒大苏打撒旦撒啊啊啊啊啊啊啊啊啊啊实打实大苏打据后期维护情况i外界保护你的撒顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶大飒飒大苏打撒旦撒啊啊啊啊啊啊啊啊啊啊实打实大苏打据后期维护情况i外界保护你'
          }
        ]
      }
    },
    created() {
      var that = this
      wx.getSystemInfo({
        success: function (res) {
          that.clientHeight = res.windowHeight
        }
      })
    },
    components: {
      vueCard
    },
    onPullDownRefresh() {
      wx.showNavigationBarLoading() //在标题栏中显示加载

      //模拟加载
      setTimeout(function () {
        // complete
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }, 1500);
    },
    methods: {
      //拖拽
      drapchange(e) {
          console.log(e)
      },    
      swiperChange(e) {
        this.current = e.target.current
      },
      handleChange(e) {
        this.current = e.target.key
        this.swiperIndex = e.target.key
      },
      getViewDetail() {
        wx.navigateTo({
          url: "/pages/details/main",
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import './index.scss';
</style>