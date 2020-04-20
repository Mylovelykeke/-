<template>
    <div>
        <search-post tip='请输入关键词搜索'></search-post>
    </div>
</template>

<script>
import searchPost from '@/components/searchInput/index'
export default {
    components:{
        searchPost
    },
    methods:{
        search(){
            console.log(1)
        }
    }
}
</script>

<style>

</style>