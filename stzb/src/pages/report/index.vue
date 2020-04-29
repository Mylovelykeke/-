<template>
  <div>
      <div class="report">
        <span class="title">帖子信息</span>
        <div>
             <vue-card :footer='false' :content='content' />
        </div>
      </div>
      <div class="report_type">
          <span class="title">举报类型</span>
          <div class="type_arr clearfix">
              <div v-for="(val,index) in list" @click="handleItem(index)" :class="index===ITEM?'line':''" :key="index">{{val}}</div>
          </div>
      </div>
      <div class="report_account">
          <span class="title">请填写举报理由(选填)</span>
          <div class="content">
              <textarea maxlength='200' @input="watchVal" v-model='value' rows="1" placeholder='描述理由请不要超过200字'></textarea>
              <div class="scope">{{sum}}/200</div>
          </div>
      </div>
      <div class="submit">
          <i-button bind:click="handleClick" type="primary" disabled>提交</i-button>
      </div>
  </div>
</template>

<script>
import vueCard from '@/components/card/card'
export default {
    components:{
        vueCard
    },
    data(){
        return{
            ITEM:null,
            value:"",
            sum:0,
            content:[{
                time: '2012-12-08 02.14',
                userInfo: {
                name: '丁香医生',
                avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai'
                },
                ImgArray:[],
                title: '安静速度快快的经开是哪个出售！！！！！',
                brief: 'tip: 如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则有可能导致 setData 被不停地调用，因而通常情况下请在改变 current 值前检测 source 字段来判断是否是由于用户触摸引起。'
            }],
            list:['低俗色情','垃圾广告','内容低俗无意义','辱骂攻击','其他违法信息','抄袭我的内容','暴露我的隐私','内容里有关无我的不实描述']
        }
    },
    methods:{
        handleItem(index){
            this.ITEM = index
        },
        watchVal(){
            this.sum = this.value.length;
        }
    }
}
</script>

<style lang='scss' scoped>
@import  'index.scss';
</style>