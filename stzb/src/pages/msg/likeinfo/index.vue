<template>
  <div>
    <div class="content" v-for="(val,index) in list" :key="index">
      <i-card i-class='card-small' :full='true' :title="val.username" :extra="val.extra"  :thumb="val.avatar" @click="handleItem(val)">
          <view slot="content" style="font-weight:bold;">{{val.title}}</view>
          <view slot="footer" class="footer">{{val.content}}</view>
      </i-card>
    </div>
    <i-load-more tip="暂无更多数据" :loading="false" />
  </div>
</template>

<script>
export default {
    data(){
      return{
        list:[
          {
            avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
            username:'大黄和搭勾',
            extra:'赞了我的帖子',
            title:'南京地区哪儿有租房子的呀',
            content:'是的撒大苏打大苏打u回到家撒会卡顿是多少空间狄拉克111111111111111111111111111111111111111就'
          },
          {
            avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
            username:'大黄和搭勾',
            extra:'赞了我的帖子',
            title:'南京地区哪儿有租房子的呀',
            content:'是的撒大苏打大苏打u回到家撒会卡顿是多少空间狄拉克就'
          },
          {
            avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
            username:'大黄和搭勾',
            extra:'赞了我的回复',
            title:'南京地区哪儿有租房子的呀',
            content:'垃圾垃圾的东西'
          },
           {
            avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
            username:'大黄和搭勾',
            extra:'赞了我的帖子',
            title:'南京地区哪儿有租房子的呀',
            content:'是的撒大苏打大苏打u回到家撒会卡顿是多少空间狄拉克111111111111111111111111111111111111111就'
          },
          {
            avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
            username:'大黄和搭勾',
            extra:'赞了我的帖子',
            title:'南京地区哪儿有租房子的呀',
            content:'是的撒大苏打大苏打u回到家撒会卡顿是多少空间狄拉克就'
          },
          {
            avatar: 'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
            username:'大黄和搭勾',
            extra:'赞了我的回复',
            title:'南京地区哪儿有租房子的呀',
            content:'垃圾垃圾的东西'
          }
        ]
      }
    },
    methods:{
      handleItem(){
        wx.navigateTo({
            url:"/pages/details/main"
        })
      }
    }
}
</script>

<style lang='scss' scoped>
@import 'index.scss';
</style>