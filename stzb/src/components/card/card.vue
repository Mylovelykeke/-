<template>
  <div >
    <div class="content" v-for="(val,index) in content" :key="index">
      <div @click="ViewDetail">
        <div class="card-title">
          {{val.title}}
        </div>
        <div class="card-main">
          <div class="card-ide" v-if="userflag">
            <img :src="val.userInfo.avatar" alt="">
            <p>
              {{val.userInfo.name}}
            </p>
            <div>

            </div>
          </div>
          <div class="showImg"  v-if="val.ImgArray.length>0">
              <img :src="val.ImgArray[0].url" mode='heightFix' alt="">
          </div>
          <div class="card-msg">
            <div>
              {{val.brief}}
            </div>
          </div>
        </div>
      </div>
      <div class="footer" v-if="footer">
        <div>
          <i class="iconfont icon-share"></i>
          <i class="iconfont icon-xx"></i>
          <i class="iconfont icon-qita"></i>
        </div>
        <div>
          {{val.time}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
        content:{
            default:[]
        },
        userflag:{
          type:Boolean,
          default:true
        },
        footer:{
          type:Boolean,
          default:true
        }
    },
    data() {
      return {
    
      }
    },
    methods: {
      ViewDetail() {
        this.$emit('getViewDetail', '调用url')
      }
    }
  }
</script>

<style scoped lang='scss'>
  @import './card.scss';
</style>