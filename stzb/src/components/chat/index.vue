<template>
  <div class="chat-footer">
     <div class="chat-inp">
         <input type="text" v-model='val' :focus="focus" :placeholder="plaVal">
     </div>
     <div class="btn-send" :style="{background:val?'':'#ccc'}" @click="sendMsg()">
        发送
     </div>
    <!-- <div>
        <i class="iconfont icon-xx"></i>
    </div> -->
  </div>
</template>

<script>
export default {
    props:{
      focus:{
        type:Boolean,
        default:true
      },
      plaVal:{
        type:String,
        default:'我也说一句。。。。'
      }
    },
    data(){
      return{
        val:'',
      }
    },
    methods:{
      sendMsg(){
        if(!this.val){
          return
        }
        this.$emit('sendMsg',this.val)
      },
      foucus(){
         this.$emit('a',this.val)
      }
    }
}
</script>

<style lang='scss' scoped>
@import './index.scss'
</style>