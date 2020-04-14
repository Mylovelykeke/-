<template>
    <div>
        <div class="msg">
            <i-notice-bar   icon="systemprompt" loop>
                点击"•●•"添加到我的小程序，快速寻找
            </i-notice-bar> 
        </div>
        <div>
            <div class="head">
                <view>
                    <!-- 搜索 -->
                    <div class="search-bar">
                        <div class="search-bar__box ">
                            <view @click ="showInput" class="search-bar__label">
                                <icon class="icon-search" size="14" type="search" role="img"></icon>
                                <view class="search-bar__text">搜索</view>
                            </view> 
                        </div>
                    </div>
                
                </view>
            </div>
        </div>
        <div class="home-card" v-for="(index, val) in 10" :key="index" :val = val>
            <vue-card @getViewDetail="getViewDetail" />
        </div>
    </div>
</template>
<script>
import vueCard from '@/components/card/card'
export default {
  components: {
    vueCard
  },
  methods:{
      getViewDetail(){
        wx.navigateTo({
            url: "/pages/details/main",
        })
      }
  }
}
</script>
<style lang = "scss" scoped >
   @import './index.scss';
</style>