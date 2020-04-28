<template>
  <div class="main">
        <div class="nav">
            <div class="back">
                <i class="iconfont icon-fanhui" @click="back"></i>
            </div>
            <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                <swiper-item>
                    <block >
                        <video
                        :autoplay='false' 
                        loop
                        class="swiper-item"
                        :show-play-btn='true'
                        :controls='true'
                        objectFit="fill" 
                        :show-mute-btn='false'
                        poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574066857005&di=27dc7334bc80c4336d3443e8ecde3160&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F17%2F02%2F06%2Fed0c0ddc6271b0717ca64ffdf847eab6.jpg"
                        :show-center-play-btn='true'
                        :vslide-gesture-in-fullscreen='true'
                        src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" 
                        ></video>
                    </block>
                </swiper-item>
                <swiper-item v-for="(item, index) in images" :key="index">
                    <image :src="item.url"  :data-src='item.url' class="slide-image" mode="aspectFill" @click='previewImage(item)' />
                </swiper-item>
            </swiper>
        </div>
        <div class="detail_userinfo">
            <img :src="userInfo.avatar" alt="">
            <span class="user-name">{{userInfo.name}}</span>
            <span class="attest">
                <i class="iconfont icon-shimingrenzheng"></i>
            </span>
            <span class="flower" v-for="count  in 5"  :key="count">
                <i class="iconfont icon-icon-test" ></i>
            </span>
        </div>
        <div class="content">
            <div class="detail-item">
                <div class="title">
                    {{title}}
                </div>
            </div>
            <div class="location">
                <div class="location-info">
                    <i class="iconfont icon-zb"></i>
                    南京经理撒大苏打顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶
                </div>
                <div class="location-right">
                    <i class="iconfont icon-youjiantou"></i>
                </div>
            </div>
            <div class="article">
                {{brief}}
            </div>
            <div class="content-footer">
                <div>
                    发表于 2012-19-20 08:27
                </div>
                <div class="content-phone">
                    <div>
                        <i class="iconfont icon-dianhua"></i>
                        <span>联系电话</span>
                        <span class="content-count">200人咨询</span>
                    </div>
                    <span>获取</span>
                </div>
            </div>
        </div>
        <div class="notice">
            <div class="notice-title">
                <span>租房须知</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
            <span>若房东向您索要中介费，你可举报！</span>
            <div class="report">
                <i class="iconfont icon-jubao"></i>
                <span>举报</span>
            </div>
        </div>
        <div>
            <chat-common />
        </div>
        <div class="all-commonents">
            <div class="commonents-title">全部评论</div>
            <commonentItem :comment='comment'/>
        </div>
        <!-- 广告 -->
        <!-- <div>
            <SwiperImg :swiper="swiper" :images='images'/>
        </div> -->
  </div>
</template>

<script>
import ChatCommon from "@/components/chat/index";
import SwiperImg from "@/components/swiper/index";
import commonentItem from "@/components/commonent_item/index";
export default {
    data(){
        return{
            swiper:"swiper",
            payment:'',
            title:'中国水水倒萨大零秒十六点三顶顶顶顶顶了多少水水水水水水水水水水水水',
            userInfo:{
                name:'丁香医生',
                avatar:'https://profile.csdnimg.cn/9/2/9/3_xiasohuai'
            },
            brief:'的撒顶顶顶顶顶顶顶顶顶顶顶顶顶顶             顶顶顶大飒飒大苏打撒旦撒啊啊啊啊啊啊啊啊啊啊实打实大苏打据后期维护情况i外界保护你的撒顶顶顶顶顶顶顶顶顶顶顶顶           顶顶顶顶顶大飒飒大苏打撒旦撒啊啊啊啊啊啊啊啊啊啊实打实大苏打据后期维护情况i外界保护你',
            indicatorDots: false,
            autoplay: false,
            interval: 3000,
            duration: 500,
            images: [
                {
                url:'../../static/images/fz.jpg'
                },
                {
                url:'../../static/images/fz.jpg'
                }
            ],
            num:'356人',
            comment: [
                {
                    responder: "有毒的黄同学",
                    reviewers:'',
                    time: "2016-08-17",
                    content: "好,讲得非常好，good",
                    reply: [
                        {
                            responder: "有毒的黄同学",
                            reviewers: "傲娇的",
                            time: "2016-09-05",
                            content: "你说得对"
                        },
                        {
                            responder: "傲娇的",
                            reviewers: "有毒的黄同学",
                            time: "2016-09-05",
                            content: "很强"
                        }
                    ]
                },
                {
                    responder: "Freedom小黄",
                    reviewers:'',
                    time: "2016-08-17",
                    content: "好,讲得非常好，good",
                    reply: []
                }
            ]
        }
    },
    components: {
        ChatCommon,
        SwiperImg,
        commonentItem
     },
     methods:{
         back(){
            wx.navigateBack({
                delta:1
            }) 
         },
         previewImage(item){
            //图片预览
            wx.previewImage({
                current: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586861056244&di=a253087f5d208e926833a1cef0ad4eee&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181003%2F0f8307fe3de6468d8b51c53b276e9e1b.jpeg", // 当前显示图片的http链接
                urls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586861056244&di=a253087f5d208e926833a1cef0ad4eee&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181003%2F0f8307fe3de6468d8b51c53b276e9e1b.jpeg'],// 需要预览的图片http链接列表
                success: function (res) { },
                fail: function (res) {
                console.log(res);
                },
            })
         }
     }
}
</script>

<style lang ="scss" scoped>
    @import './index.scss';
</style>