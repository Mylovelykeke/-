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
            <i-cell title="位置" :value='val.title' is-link  url="/pages/searchlocation/main"></i-cell>
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
export default {
    components:{
        WxImgPicker
    },
    data(){
        return{
            val:'小区名称或地址',
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
           this.val = res
        });
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
            this.$httpWX.post({
                url: 'http://localhost:4000/api/article',
                data: {
                    'openid': openid,
                    "summary":this.name,
                    'title': this.title,
                    'content': this.content,
                    'locationinfo': this.val,
                    'files':files
                },
            }).then(res => {
                if(res.code == 0){
                   
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