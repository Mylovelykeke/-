<template>
  <div>
    <div class="msg">
      <i-notice-bar icon="systemprompt">
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
        <i-tab key="0" title="求租广场"></i-tab>
        <i-tab key="1" title="房源"></i-tab>
      </i-tabs>
    </div>
    <!-- swiper 滑动页 -->
    <div class="swiperAuto">
      <!-- <swiper :current='swiperIndex' :style="{height:clientHeight?clientHeight+'px':'auto'}" @change="swiperChange"
        @transition="swipertransition">
        <swiper-item item-id='2'>
          <scroll-view :scroll-y="true" :style="{height: clientHeight?clientHeight+'px':'auto'}">
            <div class="home-card" :key="index" :val=val>
              <vue-card @getViewDetail="getViewDetail"  :content='content' />
            </div>
          </scroll-view>
        </swiper-item> -->
        <!-- <swiper-item item-id='2'>
          <scroll-view :scroll-y="true" :style="{height: clientHeight?clientHeight+'px':'auto'}">
            <div class="home-card" :key="index" :val=val>
              <vue-card @getViewDetail="getViewDetail" />
            </div>
          </scroll-view>
        </swiper-item>
      </swiper> -->
      <div v-if="current==0">
        <vue-card @getViewDetail="getViewDetail" @getViewShare='OnclickShare' :content='content' />
      </div>
      <div v-else-if="current==1">
          <div class="headstream" v-for="(val,index) in list" :key="index">
            <i-card i-class='card-small' :full='true' :title="val.username"  :thumb="val.avatar" @click="handleItem(val)">
                <view slot="content" style="font-weight:bold;">{{val.title}}</view>
                <view slot="footer" class="footer">{{val.content}}</view>
            </i-card>
          </div>
      </div>
    </div>
    <!-- 拖拽区域 -->
    <div class="publish" @click="OnReleaseArticle">
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
        ImgArray:[{
          url:'http://localhost:4000/public/7.png'
        }],
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
            ImgArray:[{
              url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587399769120&di=ea07b7cd3e84d194881f99db45caafb4&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn05%2F137%2Fw602h335%2F20181101%2F35fd-hnfikve0635159.jpg'
            }],
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
        ],
         list:[
          {
            avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
            username:'大黄和搭勾',
            extra:'赞了我的帖子',
            title:'南京地区哪儿有租房子的呀',
            content:'是的撒大苏打大苏打u回到家撒会卡顿是多少空间狄拉克111111111111111111111111111111111111111就'
          },
          {
            avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
            username:'大黄和搭勾',
            extra:'赞了我的帖子',
            title:'南京地区哪儿有租房子的呀',
            content:'是的撒大苏打大苏打u回到家撒会卡顿是多少空间狄拉克就'
          },
          {
            avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
            username:'大黄和搭勾',
            extra:'赞了我的回复',
            title:'南京地区哪儿有租房子的呀',
            content:'垃圾垃圾的东西'
          },
           {
            avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
            username:'大黄和搭勾',
            extra:'赞了我的帖子',
            title:'南京地区哪儿有租房子的呀',
            content:'是的撒大苏打大苏打u回到家撒会卡顿是多少空间狄拉克111111111111111111111111111111111111111就'
          },
          {
            avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
            username:'大黄和搭勾',
            extra:'赞了我的帖子',
            title:'南京地区哪儿有租房子的呀',
            content:'是的撒大苏打大苏打u回到家撒会卡顿是多少空间狄拉克就'
          },
          {
            avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
            username:'大黄和搭勾',
            extra:'赞了我的回复',
            title:'南京地区哪儿有租房子的呀',
            content:'垃圾垃圾的东西'
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
      // wx.login({
      //   success (res) {
      //     if (res.code) {
      //       //发起网络请求
      //       wx.request({
      //         url: 'http://localhost:3000/wxLogin',
      //         data: {
      //           code: res.code
      //         },
      //         success(res){
      //           console.log(res.data.data.openid)
      //           wx.setStorageSync('openid',res.data.data.openid)
      //         }
      //       })
      //     } else {
      //       console.log('登录失败！' + res.errMsg)
      //     }
      //   }
      // })
      // this.$httpWX.get({
      //       url: 'http://localhost:3000/articles',
      //   }).then(res => {
      //      console.log(res)
      //   })
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
          url: "/pages/home/details/main",
        })
      },
      OnReleaseArticle(){
        wx.navigateTo({
          url: "/pages/home/write/main",
        })
      },
      showInput(){
        wx.navigateTo({
          url: "/pages/home/searchpage/main",
        })
      },
      OnclickShare(){
        this.onShareAppMessage()
      }
    },
    onShareAppMessage(){
      console.log(11111111)
      let that =this;
      return {
        title: '简直走别拐弯', // 转发后 所显示的title
        path: "/pages/home/details/main", // 相对的路径
        success: (res)=>{    // 成功后要做的事情
          console.log(res.shareTickets[0])
          // console.log
        
          wx.getShareInfo({
            shareTicket: res.shareTickets[0],
            success: (res)=> { 
              that.setData({
                isShow:true
              }) 
              console.log(that.setData.isShow)
            },
            fail: function (res) { console.log(res) },
            complete: function (res) { console.log(res) }
          })
        },
        fail: function (res) {
          // 分享失败
          console.log(res)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import './index.scss';
</style>