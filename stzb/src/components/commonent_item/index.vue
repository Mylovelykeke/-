<template>
    <div class="content">
        <div class="common-content" v-for="(v,index) in comment" :key="index" >
            <div class="common-author">
                <img :src="headeImg" alt="">
            </div>
            <div class="common-main">
                <div>
                    <span class="authorname">{{v.responder}}</span>
                    <i class="iconfont icon-jiantou" v-if="v.reviewers"></i>
                    <span class="otherone">{{v.reviewers}}</span>
                </div>
                <div class="common-time">
                    <span>{{v.time}}</span>
                </div>
                <div class="content">
                {{v.content}}
                </div>
                <!-- 子集 -->
                <div class="child-bg">
                    <div class="common-content common-content-child"  v-for="(val,key) in v.reply" :key="key">
                        <div class="common-author">
                            <img :src="headeImg" alt="">
                        </div>
                        <div class="common-main">
                            <div>
                                <span class="authorname">{{val.reviewers}}</span>
                                <i class="iconfont icon-jiantou"></i>
                                <span class="otherone">{{val.responder}}</span>
                            </div>
                            <div class="common-time">
                                <span>{{val.time}}</span>
                            </div>
                            <div class="content">
                            {{val.content}}
                            </div>
                        </div>
                        <div class="common-like">
                            <span>{{likenum}}</span>
                            <i class="iconfont icon-like"></i>
                        </div>
                    </div>
                    <div class="commentes" v-if="v.reply&&v.reply.length>1" @click="getItemDetail">
                        查看全部{{v.reply&&v.reply.length}}评论
                        <i class="iconfont icon-youjiantou"></i>
                    </div>
                </div>
            </div>
            <div class="common-like">
                <span>{{likenum}}</span>
                <i class="iconfont icon-like"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        authorname:{
            type:'string',
            default:'001'
        },
        othername:{
            type:'string',
            default:'002'
        },
        publictime:{
            type:'string',
            default:'2020.01.01'
        },
        headeImg:{
            default:'https://profile.csdnimg.cn/9/2/9/3_xiasohuai'
        },
        content:{
            default:'1111111111111111111sssssssd2是顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶11'
        },
        likenum:{
            default:'123'
        },
        comment:{
            default:[]
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        getItemDetail(){
           wx.navigateTo({
                url: "/pages/common_item_detail/main",
            })
        }
    }
}
</script>

<style lang='scss' scoped>
    @import '/index.scss'
</style>