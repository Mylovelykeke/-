<template>
    <div class="content">
        <div class="common-content" v-for="(v,index) in comment" :key="index" >
            <div class="common-author">
                <img :src="headeImg" alt="">
            </div>
            <div class="common-main">
                <div>
                    <span class="authorname" @click="OnClickReplyName(v.id,v.name)">{{v.name}}</span>
                    <i class="iconfont icon-jiantou" v-if="v.replyUserName"></i>
                    <span @click="OnClickReplyName(v.parentCommentId,v.replyUserName)" class="otherone" >{{v.replyUserName || ''}}</span>
                </div>
                <div class="common-time">
                    <span>{{v.createAt}}</span>
                </div>
                <div class="content" @click="OnClickReplyName(v.id,v.name)">
                {{v.content}}
                </div>
                <!-- 子集 -->
                <div class="child-bg">
                    <div class="common-content common-content-child"  v-for="(val,key) in v.children" :key="key">
                        <div class="common-author">
                            <img :src="headeImg" alt="">
                        </div>
                        <div class="common-main">
                            <div>
                                <span class="authorname" @click="OnClickReplyName(v.id,val.name)">{{val.name}}</span>
                                <i class="iconfont icon-jiantou"></i>
                                <span class="otherone" @click="OnClickReplyName(v.id,val.replyUserName)" >{{val.replyUserName}}</span>
                            </div>
                            <div class="common-time">
                                <span>{{val.createAt}}</span>
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
                    <div class="commentes" v-if="v.children&&v.children.length>1" @click="getItemDetail">
                        查看全部{{v.children&&v.children.length}}评论
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
        OnClickReplyName(id,name){
            this.$emit('ReplyName',{'id':id,'name':name})  
        },
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