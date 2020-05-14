<template>
  <div>
    <div class="content" id="toast">
        <i-modal :visible='flag' action-mode='vertical' :show-cancel='false' :show-ok='false'>
            <div v-for="(val,index) in actions" class="modalItem" :key="index" @click="handleClick(val)">
                {{val.name}}
            </div>
        </i-modal>
    <!-- 选项 -->
        <div class="header">
            <div class="header-title" @click="selectType">
                <span>
                    {{name}}
                </span>
                <i class="iconfont icon-xiala"></i>
            </div>
            <div class="headerInput">
                <input type="text" placeholder="加个标题哟~" v-model="title">
            </div>
        </div>
    <!-- input -->
    <div class="main">
        <textarea name="" placeholder="尽情发挥吧 ~"  v-model="content"></textarea>
    </div>
    <!-- 其他信息 -->
    <wx-imgPicker :imgList='ImgArray'/>
    <div>
        <i-cell-group>
            <i-cell title="位置" v-if="!locationinfo" value='小区名称或地址'  is-link  url="/pages/searchlocation/main"></i-cell>
            <i-cell title="位置" v-else :value='locationinfo&&locationinfo.title' is-link  url="/pages/searchlocation/main"></i-cell>
        </i-cell-group>
    </div>
    </div>
      <div>
          <i-button  type="primary" size="small" i-class='publish' form-type='submit' @click="edit">发布</i-button>
      </div>
      <i-message id="message" />
  </div>
</template>

<script>
import WxImgPicker from '../../../components/imgPicker'
import { getUserCode } from '../../../utils/getuserInfo' 
export default {
    components:{
        WxImgPicker
    },
    data(){
        return{
            locationinfo:null,
            ImgArray:[],
            name:'',
            content:'',
            title:'',
            flag:false,
            actions: [
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
    onShow(){
        this.$bus.$on('updateData',res=>{
            console.log(res)
           this.locationinfo = res
        });
    },
    onLoad(){
      Object.assign(this.$data, this.$options.data())
    },
    methods:{
        handleClick({name}){
            this.name = name
            this.flag = false
        },
        selectType(){
            this.flag = true
        },
        changData(val){
            this.val = val
        },
        edit(){
            if(!this.title){
                this.$Message({
                    content: '至少输入文章标题',
                    type: 'warning',
                });
                return
            }
            if(this.content.length<15){
                this.$Message({
                    content: '至少输入15个字',
                    type: 'warning',
                });
                return
            }
            let files =''
            if (Array.isArray(this.ImgArray)) {
                try {
                    files = this.ImgArray.map((t) => t.id).join(',');
                } catch (e) {
                    console.log(e);
                }
            }
            let openid = '11111111111111111111'
            let location = JSON.stringify(this.locationinfo)
            this.$httpWX.post({
                url: 'http://localhost:4000/api/article/created',
                data: {
                    'openid': openid,
                    "summary":this.name,
                    'title': this.title,
                    'content': this.content,
                    'locationinfo': location,
                    'files':files
                },
            }).then(res => {
                if(res.statusCode == 200){
                   wx.switchTab({
                        url:'/pages/home/main',
                        success:function(){
                            var page = getCurrentPages().pop();
                            console.log('page',page)
                            if (page == undefined || page == null) return;
                            page.onLoad();
                        }, //接口调用成功的回调函数
                        fail:function(){}, //接口调用失败的回调函数
                        complete:function(){} //接口调用结束的回调函数（调用成功、失败都会执行）
                    })
                }
            })
        },
        
    },
    mounted(){
        this.name = this.actions[0].name
    }
}
</script>

<style lang='scss' scoped>
    @import 'index.scss';
</style>