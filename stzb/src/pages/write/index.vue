<template>
  <div>
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
            <i-cell title="位置" :value='val.title' is-link  url="/pages/search/main"></i-cell>
        </i-cell-group>
      </div>
      <div>
          <i-button  type="primary" size="small" i-class='publish' form-type='submit' @click="edit">发布</i-button>
      </div>
  </div>
</template>

<script>
import WxImgPicker from '../../components/imgPicker' 
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
            let openid = wx.getStorageSync('openid')
            this.$httpWX.post({
                url: 'http://localhost:3000/articles/edit',
                data: {
                    'openid': openid,
                    "type":this.name,
                    'title': this.title,
                    'content': this.content,
                    'locationinfo': this.val
                },
            }).then(res => {
                if(res.code == 0){
                    if(this.ImgArray.length>0){
                        this.upLoad(this.ImgArray,0,this.ImgArray.length,res.data.articleid)
                    }
                }
            })
        },
        upLoad(imgPath,i,upLength,articleid){
            let that = this;
            //上传文件
            wx.uploadFile({
                url: 'http://localhost:3000/articles/upload',
                filePath: imgPath[i].url,
                name: 'file',
                formData: {
                    method: 'POST',  //请求方式
                    articleid:articleid
                },
                success: function (res) {
                    console.log('上传成功' + i);
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                // that.files = that.files.concat(imgPath[i]);		//合并图片显示数组
                // let imgData = JSON.parse(res.data);
                // that.upImg.push(imgData.data);
                    console.log(res,'???????');
                },
                fail: function (res) {
                    console.log(res);
                    // wx.hideLoading();
                    // wx.showModal({
                    //     title: '错误提示',
                    //     content: '上传图片失败',
                    //     showCancel: false,
                    //     success: function (res) { }
                    // })
                },
                complete: function(){
                    i++;
                    if(i == upLength){
                        wx.hideLoading();    //上传结束，隐藏loading
                    }else{
                        that.upLoad(imgPath,i,upLength,articleid)
                    }
                }
            });
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