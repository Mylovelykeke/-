<template>
  <div>
    <login-component v-if='Flag' @closeMask='closeMask'/>
    <div class="header">
      <div class="header_main" v-if="userInfo">
          <div class="item_msg">
            <div class="item_img">
              <img :src="userInfo.avatarUrl" alt="">
            </div>
            <div class="item_name">
              <div>{{userInfo.nickName}}</div>
              <div>{{userInfo.country+userInfo&&userInfo.city}}</div>
            </div>
          </div>
          <div class="item_right">
            <div>信用分</div>
            <span>30</span>
          </div>
      </div>
      <div class="align" v-else>
          <div class="auth" @touchend='onGotUserInfo'>获取微信授权</div>
      </div>
    </div>
    
    <!-- 余额 -->
    <div class="main-radius"> 
      <!-- <titleBar :titleColor='"rgb(255, 218, 68)"' :title="title" /> -->
      <div class="history_order">
        <div @click="toPostings">
          <i>24</i>
          我的帖子
        </div>
        <div @click="tofavorite">
          <i>0</i>
          收藏夹
        </div>
        <div>
          <i>0</i>
          最近浏览
        </div>
      </div>
    </div>
    <!-- 详细列表 -->
    <div>
      <i-cell-group>
        <i-cell title="社区建设" is-link url="/pages/mine/communities/main">
          <div slot="icon">
            <i class="iconfont icon-daqia"></i>
          </div>
          <span slot="footer" class="tag">
            举报及处罚示例
          </span>
        </i-cell>
        <i-cell title="联系客服" is-link url="/pages/mine/contactme/main">
          <div slot="icon">
            <i class="iconfont icon-lianxikefu"></i>
          </div>
        </i-cell>
        <i-cell title="意见反馈" is-link url="/pages/mine/feedback/main">
          <div slot="icon">
            <i class="iconfont icon-yijianfankui"></i>
          </div>
        </i-cell>
        <i-cell title="商务合作" is-link url="/pages/work/main">
          <div slot="icon">
            <i class="iconfont icon-hezuo-tianchong"></i>
          </div>
        </i-cell>
        <!-- <i-cell title="用户设置" is-link>
          <div slot="icon">
            <i class="iconfont icon-shezhi"></i>
          </div>
        </i-cell> -->
      </i-cell-group>
    </div>
  </div>
</template>

<script>
  import titleBar from "../../components/titleBar";
  import loginComponent from '@/components/logincomponent'
  import { getUserCode } from '../../utils/getuserInfo'
  export default {
    components: {
      titleBar,
      loginComponent
    },
    data() {
      return {
        title: "我的报名",
        logs: [],
        imgUrls: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
        userInfo:null,
        openid:'',
        Flag:false,
      }
    },
    onShow(){
      if(wx.getStorageSync("userInfo")){
         this.userInfo = wx.getStorageSync("userInfo")
         this.Flag = false
      }
        this.$bus.$on('userInfo',res=>{
           this.userInfo = res
           this.Flag = false
        });
    },
    onLoad() {
      
    },
    methods:{
      toPostings(){
        wx.navigateTo({
          url: "/pages/mine/post/main",
        })
      },
      tofavorite(){
        wx.navigateTo({
          url: "/pages/mine/favorite/main",
        })
      },
      onGotUserInfo(){
        this.Flag = true
      },
      closeMask(){
        this.Flag = false
      }
    },
    created() {},
    mounted(){
        
    }
  }
</script>

<style lang='scss' scoped>
  @import '/index.scss';
</style>