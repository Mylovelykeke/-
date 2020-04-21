<template>
  <div>
      <!-- 搜索 -->
      <div class="search-bar">
          <div class="search-address" v-if="region">
              {{region}}
              <i class="iconfont icon-xiala"></i>
          </div>
          <div class="search-content">
              <icon  class="icon-search" size="14" type="search" role="img"></icon>
              <input confirm-type="search"  :placeholder="tip" v-model="value" @confirm="search">
              <div class="close" v-show="value"  @click="remove"> 
                  <slot name='icon'></slot>
              </div>
          </div>
          <div class="cancel" @click="cancel">
              取消
          </div>
      </div>
      <div v-if="type&&!value" >
        <i-cell-group>
            <i-cell :title="v" v-for="(v,key) in historyArray" :key="key" @click="hSearchItem(v)">
                 <div slot='icon'>
                    <i class="iconfont icon-lishi"></i>
                 </div>
                 <div slot="footer">
                     <i class="iconfont icon-close" @click="clearItem(v,key)"></i>
                 </div>
            </i-cell>
        </i-cell-group>
        <div class="clear" @click="clear" v-show='historyArray.length>0'>
            清空搜索记录
        </div>
      </div>
  </div>
</template>

<script>
export default {
    watch(){

    },
    props:{
        value:{
            type:String,
            default:''
        },
        type:{
           type:Boolean,
           default:true 
        },
        tip:{
            type:String,
            default:'请输入小区，地铁站或地址'
        },
        region:{
            type:String,
            default:''
        }
    },
    data(){
       return{
           value:this.value,
           historyArray:[]
       } 
    },
    created(){
        if(wx.getStorageSync("search")){
            let str = wx.getStorageSync("search")
            this.historyArray = str.split(',')
            console.log(this.historyArray)
        }
    },
    methods:{
        hSearchItem(value){
            console.log(value)
        },
        search(){
            if(this.type){
                if(wx.getStorageSync("search")){
                    let arr = wx.getStorageSync("search")
                    arr =  this.value + ',' +  arr 
                    wx.setStorageSync('search',arr)
                }else{
                    let arr =this.value
                    wx.setStorageSync('search',arr)
                }
            }
            this.$emit('confirmResult',this.value)
        }, 
        remove(){
            this.value = ''
        },
        cancel(){
            wx.navigateBack({  
                delta: 1
            })
        },
        clear(){
            this.historyArray = []
            wx.clearStorage()
        },
        clearItem(v,index){
            let arr = wx.getStorageSync("search").split(',')
            arr.splice(index,1)
            this.historyArray = arr
            let arr1 = arr.join(',')
            wx.setStorageSync('search',arr1)
        }
    }
}
</script>

<style lang='scss' scoped>
@import 'index.scss';
</style>