<template>
    <div class="main">
        <div class="responder">
            <commonentItem @ReplyName='OnClickReplyName' :comment='responderItem'/>
        </div>
        <div class="reviewers">
            <div class="review-title">{{reviewersItem.length}}条回复</div>
            <commonentItem @ReplyName='OnClickReplyName' :comment='reviewersItem'/>
        </div>
        <div>
            <chat-common  :plaVal='plaVal' :focus='focus'  @sendMsg='sendMsg' />
        </div>
    </div>
</template>

<script>
import ChatCommon from "@/components/chat/index";
import commonentItem from "@/components/commonent_item/index";
export default {
    components: {
        commonentItem,
        ChatCommon,
    },
    onLoad(options) {
        Object.assign(this.$data, this.$options.data())
        let parentCommentId = options.id
        this.parentCommentId = parentCommentId
        this.OnGetCommonList(parentCommentId)
    },
    data() {
        return{
            responderItem: [],
            reviewersItem:[],
            focus:false,
            plaVal:'我也说一句。。。。',
            replyUserName:'',
            hostId:'',
            parentCommentId:''
        }
    },
    methods: {
        OnGetCommonList(id) {
            this.$httpWX.get({
                url: 'http://localhost:4000/api/comment/'+id,
            }).then(res => {
                console.log(res)
                  if(res.statusCode == 200){
                    this.hostId = res.data.parent.hostId
                    this.replyUserName = res.data.parent.name
                    this.responderItem = [res.data.parent]
                    this.reviewersItem = res.data.children
                  }
            })
        },
        OnClickReplyName(val) {
            console.log(val)
            this.focus = true
            this.value = ''
            this.replyUserName = val.name
            this.plaVal = '@'+ val.name
            this.parentCommentId = val.id
        },
        sendMsg(val) {
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
                    that.OnGetCommonList(that.parentCommentId)
                }
            })
        },
    }
}
</script>

<style lang='scss' scoped>
@import 'index.scss';
</style>