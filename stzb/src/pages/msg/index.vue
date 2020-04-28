<template>
    <div>
        <div class="header">
            <div class="notice">
              <i-cell-group>
              </i-cell-group>
              <i-cell-group>
                  
                  <i-cell title="系统消息" is-link url="/pages/msg/systeminfo/main">
                      <div slot="icon">
                          <img class="notice-img dy" src="../../../static/images/dy.png" alt="">
                      </div>
                  </i-cell>
                  <i-cell title="点赞" is-link url="/pages/msg/likeinfo/main">
                      <div slot="icon">
                          <img class="notice-img" src="../../../static/images/dz.png" alt="">
                      </div>
                  </i-cell>
              </i-cell-group>
            </div>
        </div>
        <div class="content"> 
            <div v-for="(val,index) in comment" :key="index">
                <i-swipeout  i-class="i-swipeout-demo-item" :unclosable='false' :actions='actions' @change="handleClickItem">
                    <div slot="content">
                        <div @click="handleClick">
                            <div class="i-swipeout-image">
                                <img :src="val.headeImg" alt="">
                            </div>
                            <div class="i-swipeout-des">
                                <div class="i-swipeout-des-h2">
                                    <div>
                                        {{val.responder}}
                                    </div>
                                    <div>
                                        {{val.time}}
                                    </div>
                                </div>
                                <div class="i-swipeout-des-detail">{{val.content}}.</div>
                            </div>
                        </div>
                    </div>
                </i-swipeout>
            </div>
            <i-load-more tip="暂无更多数据" :loading="false" />
        </div>
    </div>
</template>

<script>
export default {
    data(){
      return{
          comment: [
            {
                responder: "有毒的黄同学",
                headeImg:'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
                reviewers: "傲娇的",
                time: "2016-09-05",
                content: "你说得对"
            },
            {
                responder: "傲娇的",
                reviewers: "有毒的黄同学",
                headeImg:'https://profile.csdnimg.cn/9/2/9/3_xiasohuai',
                time: "2016-09-05",
                content: "很强"
            }
        ],
        actions : [
            {
                id:0,
                name : '删除',
                color : '#fff',
                fontsize : '20',
                width : 100,
                icon : 'trash',
                background : '#ed3f14'
            },
            {
                id:1,
                name : '收藏',
                color : '#fff',
                fontsize : '20',
                width : 100,
                icon : 'collection',
                background : 'rgb(243, 173, 93)'
            },
            {
                 id:2,
                name : '返回',
                width : 100,
                color : '#80848f',
                fontsize : '20',
                icon : 'undo'
            }
        ]
      }
    },
    methods:{
        handleClickItem(e){
            console.log(e)
        },
        handleClick(){
            wx.navigateTo({
                url:"/pages/common_item_detail/main"
            })
        }
    }
}
</script>

<style lang='scss' scoped>
@import 'index.scss';
</style>