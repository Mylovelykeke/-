<template>
    <div>
        <div class="header">
            <searchInput :type='false'  :value='val'>
            <!-- <div slot="icon">
                <i class="iconfont icon-guanbi"></i>
            </div> -->
            </searchInput>
        </div>
        <div class="content">
            <vue-card  :content='content' />
        </div>
    </div>
</template>

<script>
import searchInput from '@/components/searchInput/index'
import vueCard from '@/components/card/card'
export default {    
    components:{
        searchInput,
        vueCard
    },
    onLoad(options){
        this.val = options.search
    },
    data(){
        let a = {
        time: '2012-12-08 02.14',
        userInfo: {
          name: '丁香医生',
          avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai'
        },
        ImgArray:[],
        title: '安静速度快快的经开是哪个出售！！！！！',
        brief: 'tip: 如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则有可能导致 setData 被不停地调用，因而通常情况下请在改变 current 值前检测 source 字段来判断是否是由于用户触摸引起。'
      }
      return{
          content: (new Array(30)).fill(a),
          val:''
      }
    }
}
</script>

<style lang='scss' scoped>
@import 'index.scss';
</style>