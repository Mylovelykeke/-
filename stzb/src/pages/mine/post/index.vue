<template>
  <div class="content">
      <div class="datemodel">
          <div class="dateTime">
            <span>4</span>
            <span class="rule">/</span>
            <span>27</span>
          </div>
        <vue-card :userflag='false' :footer='false' :content='content' />
      </div>
  </div>
</template>

<script>
import vueCard from '@/components/card/card'
export default {
    components: {
      vueCard
    },
    data(){
        let a = {
        time: '2012-12-08 02.14',
        ImgArray:[],
        title: '安静速度快快的经开是哪个出售！！！！！',
        brief: 'tip: 如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则有可能导致 setData 被不停地调用，因而通常情况下请在改变 current 值前检测 source 字段来判断是否是由于用户触摸引起。'
      }
      return{
           content: (new Array(5)).fill(a)
      }
    }
}
</script>

<style lang='scss'>
@import 'index.scss';
</style>