<template>
  <div >
    <div class="content" v-for="(val,index) in content" :key="index">
      <div @click="ViewDetail(val.id)">
        <div class="card-title">
          {{val.title}}
        </div>
        <div class="card-main">
          <div class="card-ide" v-if="userflag">
            <img :src="val.userInfo&&val.userInfo.avatar || 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai'" alt="">
            <p>
              {{val.userInfo&&val.userInfo.name || '访客'}}
            </p>
            <div>

            </div>
          </div>
          <div class="showImg"  v-if="val.files.length>0">
              <img :src="val.files[0].url" mode='heightFix' alt="">
          </div>
          <div class="card-msg">
            <div>
              {{val.content}}
            </div>
          </div>
        </div>
      </div>
      <div class="footer" v-if="footer">
        <div class="btn">
          <button open-type='share'>
             <i class="iconfont icon-share" style="font-size:22px"></i>
          </button>
          <i class="iconfont icon-xx"></i>
          <i class="iconfont icon-qita"></i>
        </div>
        <div>
          {{val.createAt}}
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
      ViewDetail(id) {
        this.$emit('getViewDetail', id)
      },
      share(){
         this.$emit('getViewShare', '调用url')
      }
    }
  }
</script>

<style scoped lang='scss'>
  @import './card.scss';
</style>