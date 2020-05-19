<template>
    <div class="content"  @touchend='cancel'>
       <div class="main" @touchend.stop>
           <div class="header">
               <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="">
           </div>
             <button type="primary" open-type= 'getUserInfo' @getuserinfo='onGotUserInfo'> 获取微信授权</button>
       </div>
   </div>
</template>

<script>
export default {
    props:{
    },
    data(){
        return{
            openid:'',
        }
    },
    onLoad(){
        let that = this
        wx.login({
            success (res) {
            if (res.code) {
                // 这里可以把code传给后台，后台用此获取openid及session_key
                that.$httpWX.get({
                url: '/user/logintoken?code=' + res.code
                }).then(res => {
                    if(res.data&&!res.data.errcode){
                        that.openid = res.data.openid
                    }
                })
            }
            }
        })
    },
    methods:{
        cancel(){
           this.$emit('closeMask',false)
        },
        onGotUserInfo(e){
        if(e){
          let userInfo = e.target.userInfo
          userInfo.openid = this.openid
          userInfo.password = '123456'
          this.$httpWX.post({
            url:'/user/register',
            data:{
              userInfo
            }
          }).then(res =>{
              this.$bus.$emit('userInfo',res.data);
              wx.setStorageSync('token',res.data.token)
              wx.setStorageSync('userInfo',res.data)
          })
        }
      }
    }
}
</script>

<style lang='scss' scoped>
.content{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,.5);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content:center;
}
.main {
    width: 80%;
    background: white;
    border-radius: 5px;
    padding:30px 20px;
    box-sizing: border-box;
    button{
        border-radius: 2em;
    }
}
.header{
    padding: 10px 0;
    height: 60px;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>