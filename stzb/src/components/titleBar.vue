<template>
    <div class="title">
        <span class="title_block" :style="{background:titleColor}"></span>
        <span class="title_text">{{title}}</span>
        <div class="title-right"><slot name="next"></slot></div>
    </div>
</template>

<script>
export default {
    props:{
        titleColor: {
            default: "#000000"
        },
        title:{
            default:"推荐"
        }
    },
   data(){
       return{
           title:'11'
       }
   }
};
</script>

<style lang="scss" scoped>
    .title{
        position: relative;
        span{
            display: inline-block;
        }
        .title_block{
            width: 5px;
            height: 16px;
            display: inline-block;
            margin-left:10px;
            margin-right:10px;
            vertical-align: -1px;
        }
        .title_text{
            font-size: 14px;
            font-weight: bold;
        }
        .title-right{
            position: absolute;
            right: 15px;
            top: 2px;
            color: #777;
            font-size: 14px;
        }
    }
</style>
