<template>
  <div>
    <div class="header">
      <div class="item_msg">
        <div class="item_img">
          <img :src="imgUrls" alt="">
        </div>
        <div class="item_name">
          <div>暂无小主信息</div>
          <div>暂无学校信息</div>
        </div>
      </div>
      <div class="item_right">
        <div>信用分</div>
        <span>30</span>
      </div>
    </div>
    <!-- 余额 -->
    <div class="main-radius"> 
      <titleBar :titleColor='"rgb(255, 218, 68)"' :title="title" />
      <div class="history_order">
        <div>
          <i>24</i>
          我的帖子
        </div>
        <div>
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
        <i-cell title="打卡计划" is-link>
          <div slot="icon">
            <i class="iconfont icon-daqia"></i>
          </div>
          <span slot="footer" class="tag">
            好习惯养成记
          </span>
        </i-cell>
        <i-cell title="联系客服" is-link>
          <div slot="icon">
            <i class="iconfont icon-lianxikefu"></i>
          </div>
        </i-cell>
        <i-cell title="意见反馈" is-link>
          <div slot="icon">
            <i class="iconfont icon-yijianfankui"></i>
          </div>
        </i-cell>
        <i-cell title="商务合作" is-link url="/pages/work/main">
          <div slot="icon">
            <i class="iconfont icon-hezuo-tianchong"></i>
          </div>
        </i-cell>
        <i-cell title="用户设置" is-link>
          <div slot="icon">
            <i class="iconfont icon-shezhi"></i>
          </div>
        </i-cell>
      </i-cell-group>
    </div>
  </div>
</template>

<script>
  import titleBar from "../../components/titleBar";
  export default {
    components: {
      titleBar
    },
    data() {
      return {
        title: "我的报名",
        logs: [],
        imgUrls: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
      }
    },

    created() {}
  }
</script>

<style lang='scss' scoped>
  @import '/index.scss';
</style>