<template>
    <div>
        <div class="msg">
            <i-notice-bar closable>
                点击"•●•"添加到我的小程序，快速寻找
            </i-notice-bar> 
      </div>
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
      <div class="home-card">
          <card />
      </div>
    </div>
</template>
<script>
import card from '@/components/card/card'
export default {
  components: {
    card
  }
}
</script>
<style lang = "scss" scoped >
   @import './index.scss';
</style>