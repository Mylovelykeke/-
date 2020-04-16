<template>
  <div>
      <!-- 选项 -->
      <div class="header">
            <div class="header-title" @click="selectType">
                <span>
                    出租房子
                </span>
                <i class="iconfont icon-xiala"></i>
            </div>
      </div>
      <!-- input -->
      <div class="main">
          <input type="text" placeholder="加个标题哟~">
          <textarea name="" placeholder="尽情发挥吧 ~"></textarea>
      </div>
      <!-- 其他信息 -->
      <div style="overflow:hidden">
        <div class="ShowImg" v-for="v in 2 " :key="v">
            <div class="uploadImg">
                <i class="iconfont icon-tianjia"></i>
            </div>
        </div>
      </div>
      <div>
          <i-button bind:click="handleClick" type="primary"  size="small">发布</i-button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            flag:false,
            actions4: [
                {
                    name: '出租房子'
                },
                {
                    name: '求租房子'
                },
                {
                    name: '其他'
                }
            ],
        }
    },
    methods:{
        handleClick(e){
            console.log(e)
        },
        selectType(){
            this.flag = true
        }
    }
}
</script>

<style lang='scss' scoped>
    @import 'index.scss';
</style>