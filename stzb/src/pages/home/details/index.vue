<template>
  <div class="main">
        <skeleton selector="skeleton" bgcolor="#FFF" v-if="showSkeleton"></skeleton>
        <div class="nav skeleton-rect">
            <div class="back">
                <i class="iconfont icon-fanhui" @click="back"></i>
            </div>
            <swiper v-if="files&&files.length>0" class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                <!-- <swiper-item>
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
                </swiper-item> -->
                <swiper-item v-for="(item, index) in files" :key="index">
                    <image :src="item.url"  :data-src='item.url' class="slide-image  " mode="aspectFill" @click='previewImage(item)' />
                </swiper-item>
            </swiper>
        </div>
        <div class="detail_userinfo" :style="{'padding-top':files&&files.length>0?'':'80px'}">
            <img class="skeleton-rect" :src="userInfo.avatar" alt="">
            <span class="user-name skeleton-rect">{{userInfo.name}}</span>
            <span class="attest skeleton-rect">
                <i class="iconfont icon-shimingrenzheng"></i>
            </span>
            <span class="flower" v-for="count  in 5"  :key="count">
                <i class="iconfont icon-icon-test" ></i>
            </span>
        </div>
        <div class="content" @click="OnClickReplyName({id:1,name:'访客'})">
            <div class="detail-item">
                <div class="title">
                    {{title}}
                </div>
            </div>
            <div class="location skeleton-rect" v-if='location'>
                <div class="location-info">
                    <i class="iconfont icon-zb"></i>
                    {{location&&location.address}}
                </div>
                <div class="location-right">
                    <i class="iconfont icon-youjiantou"></i>
                </div>
            </div>
            <div class="article ">
                {{content}}
            </div>
            <div class="content-footer">
                <div class="skeleton-rect">
                    发表于 {{itemInfo&&itemInfo.createAt}}
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
            <div class="report" @click="OnclickReport"> 
                <i class="iconfont icon-jubao"></i>
                <span>举报</span>
            </div>
        </div>
        <div>
            <chat-common :plaVal='plaVal' :focus='focus'  @sendMsg='sendMsg'/>
        </div>
        <div class="all-commonents">
            <div class="commonents-title">全部评论</div>
            <commonentItem @ReplyName='OnClickReplyName' :comment='comment'/>
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
import skeleton  from '@/components/skeleton/index'
export default {
    data(){
        return{
            hostId:'',
            flag:true,
            showSkeleton:true,
            parentCommentId:'',
            focus:false,
            plaVal:'我也说一句。。。。',
            value:'',
            replyUserName:'',
            itemInfo:'',
            location:'',
            swiper:"swiper",
            payment:'',
            title:'',
            userInfo:{
                name:'访客',
                avatar:'https://profile.csdnimg.cn/9/2/9/3_xiasohuai'
            },
            content:'',
            indicatorDots: false,
            autoplay: false,
            interval: 3000,
            duration: 500,
            files: [],
            num:'356人',
            comment: []
        }
    },
    components: {
        ChatCommon,
        SwiperImg,
        commonentItem,
        skeleton
     },
     onPullDownRefresh() {
        wx.showNavigationBarLoading() //在标题栏中显示加载
        this.OnGetCommonList(this.hostId)
        //模拟加载
        setTimeout(function () {
            // complete
            wx.hideNavigationBarLoading() //完成停止加载
            wx.stopPullDownRefresh() //停止下拉刷新
        }, 1500);
    },
    onLoad(options){
        Object.assign(this.$data, this.$options.data())
        let hostId =  options.id
        this.hostId = hostId
        this.OnAddViews(hostId)
        this.OnGetItemDetail(hostId)
    },
    onShow(options) {
        console.log(options)
        if(this.flag){
            this.OnGetCommonList(this.hostId)
        }else{
            this.flag = true
            return
        }
    },
     methods:{
        OnClickReplyName(val) {
            console.log(val)
            this.focus = true
            this.value = ''
            this.replyUserName = val.name
            this.plaVal = '@'+ val.name
            this.parentCommentId = val.id
        },
        sendMsg(val){
            let that = this
            this.$httpWX.post({
                url: 'http://localhost:4000/api/comment',
                data:{
                    hostId:that.hostId,
                    name: '垃圾人呀',
                    replyUserName:that.replyUserName,
                    email:'1115796788',
                    content:val,
                    parentCommentId:that.parentCommentId,
                    createByAdmin:false
                }
            }).then(res => {
                if(res.statusCode == 200){
                    that.OnGetCommonList(that.hostId )
                }
            })
        },
        OnGetItemDetail(id){
            this.$httpWX.get({
                url: 'http://localhost:4000/api/article/'+id,
            }).then(res => {
               let {title,content,files,locationinfo,createAt} = res.data
               this.itemInfo = res.data
               this.title = title
               this.content = content
               this.files = files
               this.location =JSON.parse(locationinfo)
               setTimeout(()=>{
                   this.showSkeleton = false
               },500)
            })
        },
        /**
         * 观看加1
         *  
         */
        OnAddViews(id){
            this.$httpWX.post({
                url: 'http://localhost:4000/api/article/'+id+'/views',
            }).then(res => {
                console.log(res,'观看加1')
            })
        },
        OnGetCommonList(id){
            this.$httpWX.get({
                url: 'http://localhost:4000/api/comment/host/'+id,
            }).then(res => {
                let comment = []
                comment.push(...res.data[0])
                this.comment = comment
            })
        },
         OnclickReport(){
            wx.navigateTo({
                url:"/pages/report/main"
            })
         },
         back(){
            wx.navigateBack({
                delta:1
            }) 
         },
         previewImage(item){
             console.log(item)
             this.flag = false
            //图片预览
            let urls = this.files.map(data =>{
                return data.url
            })
            console.log(urls)
            wx.previewImage({
                current: item.url, // 当前显示图片的http链接
                urls:urls,// 需要预览的图片http链接列表
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