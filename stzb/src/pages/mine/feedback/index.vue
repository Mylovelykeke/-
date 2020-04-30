<template>
  <div>
      <div class="txt">
         <textarea maxlength='500' v-model="value" placeholder="请描述你的问题,我们会尽快处理并回复(必填)"></textarea>
      </div>
      <div class="txt-num">{{sum}}</div>
      <!-- 其他信息 -->
      <wx-imgPicker :imgList='ImgArray'/>
      <i-button bind:click="handleClick" type="primary" :disabled='!flag'>提交</i-button>
  </div>
</template>

<script>
import WxImgPicker from '../../../components/imgPicker'
export default {
    components:{
      WxImgPicker 
    },
    data(){
      return{
        ImgArray:[],
        value:'',
        flag:false
      }
    },
    computed:{
      sum(){
        return 500-this.value.length
      }
    },
    watch:{
      value(){
        console.log(this.flag)
        this.flag = this.value.length>=15
      }
    }
}
</script>

<style lang='scss' scoped>
    @import 'index.scss';
</style>