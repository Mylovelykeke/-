<template>
    <div>
        <div class="header">
            <searchInput :type='false'  :value='val'>
            <!-- <div slot="icon">
                <i class="iconfont icon-guanbi"></i>
            </div> -->
            </searchInput>
        </div>
        <div class="content">
            <vue-card  @getViewDetail="getViewDetail" @getViewShare='OnclickShare' :content='content' />
        </div>
    </div>
</template>

<script>
import searchInput from '@/components/searchInput/index'
import vueCard from '@/components/card/card'
export default {    
    components:{
        searchInput,
        vueCard
    },
    onLoad(options){
        Object.assign(this.$data, this.$options.data())
        this.val = options.search ||3
        this.OnGetSearch()
    },
    data(){
      return{
          content: [],
          val:'',
          ShareAppMessage:''
      }
    },
    methods:{
        OnGetSearch(){
            let that = this
            this.$httpWX.get({
                url: 'http://localhost:4000/api/article/search',
                data:{
                    keyword:that.val
                }
            }).then(res => {
                if(res.statusCode == 200){
                    that.content = res.data
                }
            })
        },
        OnclickShare(val){
            this.ShareAppMessage = val
        },
        getViewDetail(id) {
        wx.navigateTo({
          url: "/pages/home/details/main?id="+id,
        })
      },
    },
    onShareAppMessage(data){
        let that =this;
        return {
            title: that.ShareAppMessage.title, // 转发后 所显示的title
            path: "/pages/home/details/?id="+that.ShareAppMessage.id, // 相对的路径
            success: (res)=>{    // 成功后要做的事情
            console.log(res.shareTickets[0])
            // console.log
            
            wx.getShareInfo({
                shareTicket: res.shareTickets[0],
                success: (res)=> { 
                that.setData({
                    isShow:true
                }) 
                console.log(that.setData.isShow)
                },
                fail: function (res) { console.log(res) },
                complete: function (res) { console.log(res) }
            })
            },
            fail: function (res) {
            // 分享失败
            console.log(res)
            }
        }
    },
}
</script>

<style lang='scss' scoped>
@import 'index.scss';
</style>