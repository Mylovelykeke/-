<template>
  <div>
   <vtu-navbar title="Navbar" use-bar-slot bg-color='white' :goHome="false">
      <div class="head">
        <view>
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
   </vtu-navbar>
    <div class="msg">
      <i-notice-bar icon="systemprompt">
        点击"•●•"添加到我的小程序，快速寻找
      </i-notice-bar>
    </div>
    <div class="searchhead">
      
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
        <vue-card @getViewDetail="getViewDetail"  :content='content' />
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
        content:[],
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
    onLoad(){
      Object.assign(this.$data, this.$options.data())
      this.OnGetList()
    },
    components: {
      vueCard
    },
    onPullDownRefresh() {
      wx.showNavigationBarLoading() //在标题栏中显示加载
      this.OnGetList()
      //模拟加载
      setTimeout(function () {
        // complete
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }, 1500);
    },
    methods: {
      OnGetList(){
        this.$httpWX.get({
            url: 'http://localhost:4000/api/article',
        }).then(res => {
           console.log(res.data[0])
           let list = res.data[0]
           this.content = list
           console.log(this.content)
        })
      },
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
      getViewDetail(id) {
        wx.navigateTo({
          url: "/pages/home/details/main?id="+id,
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