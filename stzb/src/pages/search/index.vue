<template>
  <div>
      <!-- 搜索 -->
      <div class="search-bar">
          <div class="search-content">
              <icon  class="icon-search" size="14" type="search" role="img"></icon>
              <input confirm-type="search" @confirm="search($event)" placeholder="请输入小区，地铁站或地址" v-model="value">
              <div class="close" v-show="value"  @click="remove"> 
                <i class="iconfont icon-guanbi" ref="input"></i>
              </div>
          </div>
          <div class="cancel" @click="cancel">
              取消
          </div>
      </div>
      <div class="main">
        <i-cell-group i-class ='main-border'>
          <i-cell title="只显示箭头" label='11111111' ></i-cell>
        </i-cell-group>
      </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        value:''
      }
    },
    methods: {
      remove(){
        console.log(1)
        this.value = ''
        this.$refs.input.focus()
      },
      cancel(){
        wx.navigateBack({
          delta: 1
        })
      }
    },
    search(e){
      alert(1)
       this.$httpWX.post({
          url: 'https://apis.map.qq.com/ws/place/v1/suggestion',
          data: {
            'keyword': '1',
            'region': '深圳',
            'region_fix': '0',
            'policy': '0',
            'output': 'json',
            'key': 'TBHBZ-T5TH4-HVRUA-XTF2Z-BP2WF-URFHY'
          }
        }).then(res => {
          console.log(res)
        })
    }
}
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>