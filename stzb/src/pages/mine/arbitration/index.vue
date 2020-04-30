<template>
    <div>
        <div class="header">
            <span>仲裁大厅</span>
            <span>
                <i class="iconfont icon-qiehuan"></i>
                切换至最新
            </span>
        </div>
        <div class="content">
            <div class="main" v-for="(val,index) in 10" :key="index"> 
                <div class="title">评论被举报为(包含不友善内容)</div>
                <div class="rep">
                    <div class="img">
                        <img src="https://profile.csdnimg.cn/C/9/6/3_eva3288" alt="">
                    </div>
                    <div class="repcontent">
                       <div class="author">大肆夸奖打瞌睡的卡上</div>
                       <div class="violation">
                         实打实的和卡仕达卡仕达看见1111111111111111111111111111哈萨克接电话大苏打实打实大苏打实打实打算
                       </div>
                    </div>
                </div>
                <div>
                    <div class="pro_text">
                        <div>62%不违规</div>
                        <div>38%不违规</div>
                    </div>
                    <i-progress percent="25"  strokeWidth='12' hide-info></i-progress>
                </div>
                <div class="footer" @click="Onlookers"> 
                    前往围观
                    <i class="iconfont icon-youjiantou"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        Onlookers(){
            wx.navigateTo({
                url:"/pages/mine/arbitration_item/main"
            })
        }
    }
}
</script>

<style lang='scss' scoped>
@import 'index.scss';
</style>