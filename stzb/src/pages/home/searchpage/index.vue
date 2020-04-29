<template>
    <div class="content">
        <search-post tip='请输入关键词搜索' @confirmResult='search'>
            <div slot="icon">
                <i class="iconfont icon-guanbi"></i>
            </div>
        </search-post>
    </div>
</template>

<script>
import searchPost from '@/components/searchInput/index'
export default {
    components:{
        searchPost
    },
    methods:{
        search(val){
            wx.navigateTo({
                url:'/pages/home/showdetail/main?search='+val,
            })
        }
    }
}
</script>

<style lang='scss' scoped>
@import 'index.scss';
</style>