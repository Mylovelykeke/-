<template>
    <div class="common-content">
        <div class="common-author">
            <img :src="headeImg" alt="">
        </div>
        <div class="common-main">
            <div>
                <span class="authorname">{{authorname}}</span>
                <i class="iconfont icon-jiantou"></i>
                <span class="otherone">{{othername}}</span>
            </div>
            <div class="common-time">
                <span>{{publictime}}</span>
            </div>
            <div class="content">
               {{content}}
            </div>
        </div>
        <div class="common-like">
            <span>{{likenum}}</span>
            <i class="iconfont icon-like"></i>
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
    },
    data(){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>
    @import '/index.scss'
</style>