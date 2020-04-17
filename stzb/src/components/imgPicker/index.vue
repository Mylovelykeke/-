<template>
  <div>
    <div style="overflow:hidden">
      <div class="ShowImg finish" v-for="(v,k) in imgList" :key="k">
        <div class="uploadImg">
          <img :src="v.url" alt="" mode='aspectFill' @click="previewImage(v,k)">
          <div>
            <i class="iconfont icon-guanbi" @click="deleteItem(k)"></i>
          </div>
        </div>
      </div>
      <div class="ShowImg" @click="uploadImg" v-if="imgList.length < countChild">
        <div class="uploadImg">
          <i class="iconfont icon-tianjia"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      preview: {
        type: Boolean,
        default: true
      },
      imgList: {
        type: Array,
        default: []
      },
      count: {
        type: Number,
        default: 9
      },
      sourceType: {
        type: Array,
        default: ['album', 'camera']
      },
      sizeType: {
        type: Array,
        default: ['original', 'compressed']
      },
      maxSize: {
        type: Number,
        default: 0
      },
      maxWidth: {
        type: Number,
        default: 0
      },
      maxHeight: {
        type: Number,
        default: 0
      }
    },
    data() {
        return {
            countChild:this.count
      }
    },
    
    mounted(){
        console.log(this.sizeType)
    },
    methods: {
      deleteItem(index) {
        this.imgList.splice(index, 1)
      },
      uploadImg() {
        let self = this
        wx.chooseImage({
          count: self.count - self.imgList.length,
          sizeType: self.sizeType,
          sourceType: self.sourceType,
          success: async (res) => {
            // // tempFilePath可以作为img标签的src属性显示图片
            // const tempFilePaths = res.tempFilePaths
            // console.log(tempFilePaths)
            // that.imgList.push(...tempFilePaths)
            var tempFilePath = [];
            for (var i = 0; i < res.tempFilePaths.length; i++) {
              let fileSize = parseInt(res.tempFiles[i].size / 1024)
              if (self.maxSize && res.tempFiles[i] && self.maxSize < fileSize) {
                let maxSizeStr = self.maxSize + 'kb'
                if (self.maxSize >= 1024) maxSizeStr = parseFloat((self.maxSize / 1024).toFixed(2)) + "M"
                wx.showToast({
                  title: "上传图片不能大于" + maxSizeStr,
                  icon: 'none',
                  duration: 2000
                })
                return
              }

              if (self.maxWidth || self.maxHeight) {
                let tempInfo = await self.getImageInfo(res.tempFilePaths[i])
                if (self.maxWidth && tempInfo.width > self.maxWidth) {
                  wx.showToast({
                    title: "上传图片宽度不能大于" + self.maxWidth + "px",
                    icon: 'none',
                    duration: 2000
                  })
                  return
                }
                if (self.maxHeight && tempInfo.height > self.maxHeight) {
                  wx.showToast({
                    title: "上传图片高度不能大于" + self.maxHeight + "px",
                    icon: 'none',
                    duration: 2000
                  })
                  return
                }
              }

              tempFilePath.push({
                url: res.tempFilePaths[i]
              });
            }
            this.imgList = tempFilePath
          }
        })
      },
      previewImage(item, index) {
        if (this.preview) {
          let urls = []
          this.imgList.forEach(item => {
            urls.push(item.url)
          })
          wx.previewImage({
            current: item.url,
            urls: urls
          })
        }
        this.$emit('preview', {
          current: item.url,
          all: this.imgList,
          index: index
        });
      },
    }
  }
</script>

<style lang='scss' scoped>
  @import 'index.scss';
</style>