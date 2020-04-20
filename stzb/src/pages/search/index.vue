<template>
  <div>
      <search-input :region='region' :type='false' @confirmResult='search'/>
      <div class="main">
        <i-cell-group i-class ='main-border'>
          <i-cell v-for="(val,index) in searchArray" :title="val.title" :label='val.address' :key="index" @click="bindAddressItem(val)"></i-cell>
        </i-cell-group>
      </div>
  </div>
</template>

<script>
import searchInput from '@/components/searchInput/index'
export default {
    components:{
      searchInput
    },
    data(){
      return{
        region:'南京',
        value:'',
        searchArray:[]
      }
    },
    methods: {
      search(val){
        this.$httpWX.get({
          url: 'https://apis.map.qq.com/ws/place/v1/suggestion',
          data: {
            'keyword': val,
            'region': this.region,
            'region_fix': '1',
            'policy': '0',
            'output': 'json',
            'key': 'TBHBZ-T5TH4-HVRUA-XTF2Z-BP2WF-URFHY'
          }
        }).then(res => {
          console.log(res)
            this.searchArray = res.data
        })
      },
      bindAddressItem(val){
        this.$bus.$emit('updateData',val);
        wx.navigateBack({
          delta: 1
        })
      }
    }
}
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>