<template>
    <div>
        <!-- 仲裁庭 -->
        <div  class="content">
            <div class="arb">
                <i-cell-group i-class='arb' >
                    <i-cell i-class='arbtext'  title="仲裁大厅" url="/pages/mine/arbitration/main" value='举报处罚管理' is-link>
                        <div class='arb-img' slot='icon'>
                            <img width="30" src="../../../../static/images/wg.png" alt="">
                        </div>
                    </i-cell>
                </i-cell-group>
            </div>
            <div class="arb1">
                <i-card title="举报" :full='true' extra="查看使用帮助" thumb="../../../static/images/jb.png">
                    <view slot="content">您目前没有举报过任何内容</view>
                    <view slot="footer">欢迎随手举报垃圾广告，不友善和不规范转载等违规内容，一起建设健康的社区环境</view>
                </i-card>
            </div>
            <div class="arb1">
                <i-card title="审核内容" :full='true' extra="查看使用帮助" thumb="../../../static/images/sh.png">
                    <view slot="content">你目前尚未申请该权限</view>
                    <view slot="footer">审核功能分为24小时投票及人工审核，权限功能请查看相关的使用帮助</view>
                </i-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style lang='scss'>
@import 'index.scss';
</style>