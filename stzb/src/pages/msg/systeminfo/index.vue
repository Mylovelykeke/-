<template>
  <div>
    <i-cell-group >
        <i-cell v-for="(val,key) in list" :key='key' :title="val.title" :label='val.time'>
            <div class="icon-info" slot="icon">
              <img src="../../../../static/images/dy.png" alt="">
            </div>
        </i-cell>
    </i-cell-group>
    <i-load-more tip="暂无更多数据" :loading="false" />
  </div>
</template>

<script>
export default {
    data(){
        return{
          list:[
            {
              title:'回答被删除，你被禁言1天',
              time:'2012-12-09'
            },
            {
              title:'疾风喃喃发布了求租贴',
              time:'2012-12-09'
            },
            {
              title:'你举报的帖子已处理，速去查看',
              time:'2012-12-09'
            }
          ]
        }
    }
}
</script>

<style lang='scss' scoped>
@import 'index.scss';
</style>