<template>
    <div class="main">
        <div class="responder">
            <commonentItem :comment='responderItem'/>
        </div>
        <div class="reviewers">
            <div class="review-title">{{reviewersItem.length}}条回复</div>
            <commonentItem :comment='reviewersItem'/>
        </div>
        <div>
            <chat-common />
        </div>
    </div>
</template>

<script>
import ChatCommon from "@/components/chat/index";
import commonentItem from "@/components/commonent_item/index";
export default {
    components: {
        commonentItem,
        ChatCommon
    },
    data(){
        return{
            responderItem: [
                {
                    responder: "有毒的黄同学",
                    reviewers:'',
                    time: "2016-08-17",
                    content: "好,讲得非常好，good",
                    reply: [
                    ]
                }
            ],
            reviewersItem:[
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
        }
    }
}
</script>

<style lang='scss' scoped>
@import 'index.scss';
</style>