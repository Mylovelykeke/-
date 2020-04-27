<template>
    <div>
        <div class="header">
            <div class="notice">
              <i-cell-group>
                  <i-cell title="系统消息" label='11111111111111111111111111' is-link>
                      <div slot="icon">
                          <img class="notice-img" src="../../../static/images/dy.png" alt="">
                      </div>
                  </i-cell>
              </i-cell-group>
              <i-cell-group>
                  <i-cell title="点赞" label='11111111111111111111111111' is-link>
                      <div slot="icon">
                          <img class="notice-img" src="../../../static/images/dy.png" alt="">
                      </div>
                  </i-cell>
              </i-cell-group>
            </div>
        </div>
        <div class="content"> 
            <i-swipeout  i-class="i-swipeout-demo-item" :unclosable='false' :actions='actions'>
                <view slot="content">
                  <view class="i-swipeout-image">
                        <img src="../../../static/images/dy.png" alt="">
                  </view>
                  <view class="i-swipeout-des">
                        <view class="i-swipeout-des-h2">系统消息</view>
                        <view class="i-swipeout-des-detail">乐观善良的7个小矮人原本过着简单快乐的生活，不料诅咒公主的巫婆利用小矮人进入.</view>
                  </view>
                </view>
            </i-swipeout>
        </div>
    </div>
</template>

<script>
export default {
    data(){
      return{
        actions : [
            {
                name : '喜欢',
                color : '#fff',
                fontsize : '20',
                width : 100,
                icon : 'like',
                background : '#ed3f14'
            },
            {
                name : '返回',
                width : 100,
                color : '#80848f',
                fontsize : '20',
                icon : 'undo'
            }
        ]
      }
    }
}
</script>

<style lang='scss' scoped>
@import 'index.scss';
</style>