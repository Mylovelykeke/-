<template>
  <div >
    <div class="content" v-for="(val,index) in content" :key="index">
      <div @click="ViewDetail">
        <div class="card-title">
          {{val.title}}
        </div>
        <div class="card-main">
          <div class="card-ide">
            <img :src="val.userInfo.avatar" alt="">
            <p>
              {{val.userInfo.name}}
            </p>
            <div>

            </div>
          </div>
          <!-- <div class="showImg">
                        <img :src="userInfo.headerImg" alt="">
                    </div> -->
          <div class="card-msg">
            <div>
              {{val.brief}}
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
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