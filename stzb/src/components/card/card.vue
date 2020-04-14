<template>
   <div class="content">
       <div class="card-title">
           {{title}}
       </div>
       <div class="card-main">
           <div class="card-ide">
               <img :src="userInfo.headerImg" alt="">
               <p>
                {{userInfo.name}}
               </p>
               <div>

               </div>
           </div>
           <div class="showImg">
               <img :src="userInfo.headerImg" alt="">
           </div>
           <div class="card-msg">
               <div>
                   {{brief}}
               </div>
           </div>
       </div>
       <div class="footer">
            
       </div>
   </div>
</template>

<script>
export default {
    data(){
        return{
            title:'中国水水倒萨大零秒十六点三顶顶顶顶顶了多少水水水水水水水水水水水水',
            userInfo:{
                name:'丁香医生',
                headerImg:'https://profile.csdnimg.cn/9/2/9/3_xiasohuai'
            },
            brief:'的撒顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶大飒飒大苏打撒旦撒啊啊啊啊啊啊啊啊啊啊实打实大苏打据后期维护情况i外界保护你的撒顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶大飒飒大苏打撒旦撒啊啊啊啊啊啊啊啊啊啊实打实大苏打据后期维护情况i外界保护你'
        }
    }
}
</script>

<style scoped lang='scss'>
    @import './card.scss';
</style>