<template>
  <div>
    <div class="wrap"  v-show="flag">
      <!-- <div v-for="(item,index) in skeletonRectLists"
           :index='index'
           :key='item'
           class="chiaroscuro"
           :class="loading=='chiaroscuro'? 'chiaroscuro':''"
           :style="{'width':item.width+'px','height':item.height+'px','background-color':'rgba(233, 2, 233,1)','position':'absolute','left':item.left+'px','top':item.top+'px'}">
      </div> -->
        <div>
          <view class="chiaroscuro" style=" width:414px;height:264px;background-color:rgba(233, 2, 233,1);position:absolute;left:0px;top:0px;"></view>
          <view class="chiaroscuro" style=" width:44px;height:44px;background-color:rgba(233, 2, 233,1);position:absolute;left:11px;top:269.5px;"></view>
          <view class="chiaroscuro" style=" width:34px;height:22px;background-color:rgba(233, 2, 233,1);position:absolute;left:66px;top:280.5px;"></view>
          <view class="chiaroscuro" style=" width:25.125px;height:24px;background-color:rgba(233, 2, 233,1);position:absolute;left:111px;top:279.5px;"></view>
          <view class="chiaroscuro" style=" width:392px;height:47px;background-color:rgba(233, 2, 233,1);position:absolute;left:11px;top:335px;"></view>
          <view class="chiaroscuro" style=" width:392px;height:66px;background-color:rgba(233, 2, 233,1);position:absolute;left:11px;top:408px;"></view>
        </div>
      <!-- <div v-for="(item,index) in skeletonCircleLists"
           :index='index'
           :key='item'
           class="chiaroscuro"
           :class="loading == 'chiaroscuro' ? 'chiaroscuro' : ''"
           :style="{'width':item.width+'px','height':item.height+'px','background-color':'rgba(233, , 233,1)','border-radius':item.width+'px','position':'absolute','left':item.left+'px','top':item.top+'px'}">
      </div> -->
        <!-- <div v-if="flag">
          <div class="radius">
                  <div class="main">
                      <div class="header chiaroscuro"></div>
                      <div class="name chiaroscuro"></div>
                  </div>
                  <div class="clearfix">
                      <div class="chiaroscuro content">

                      </div>
                      <div class="chiaroscuro content">

                      </div>
                      <div class="chiaroscuro content">

                      </div>
                  </div>
          </div>
          <div class="radius">
                  <div class="main">
                      <div class="header chiaroscuro"></div>
                      <div class="name chiaroscuro"></div>
                  </div>
                  <div class="clearfix">
                      <div class="chiaroscuro content">

                      </div>
                      <div class="chiaroscuro content">

                      </div>
                      <div class="chiaroscuro content">

                      </div>
                  </div>
          </div>
        </div> -->
    </div>
    <div v-show="!flag">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

const dataArr = []
export default {
  props: {
    bgcolor: { type: String, value: '#FFF' },
    selector: { type: String, value: 'skeleton' },
    loading: { type: String, value: 'spin' },
    flag:{ type: Boolean, value: true }
  },

  data() {
    return {
      loadingAni: ['spin', 'chiaroscuro'],
      systemInfo: {},
      skeletonRectLists: [{"id":"","dataset":{},"left":0,"right":414,"top":0,"bottom":264,"width":414,"height":264},{"id":"","dataset":{},"left":11,"right":55,"top":269.5,"bottom":313.5,"width":44,"height":44},{"id":"","dataset":{},"left":66,"right":100,"top":280.5,"bottom":302.5,"width":34,"height":22},{"id":"","dataset":{},"left":111,"right":136.125,"top":279.5,"bottom":303.5,"width":25.125,"height":24},{"id":"","dataset":{},"left":11,"right":403,"top":335,"bottom":382,"width":392,"height":47},{"id":"","dataset":{},"left":11,"right":403,"top":408,"bottom":474,"width":392,"height":66}],
      skeletonCircleLists: [],
    };
  },

  components: {},

  methods: {
    rectHandle: function() {
      const that = this;
      console.log(wx.createSelectorQuery()
        .selectAll(`.${this.selector}-rect`),'????')
      //绘制不带样式的节点
      wx.createSelectorQuery()
        .selectAll(`.${this.selector}-rect`)
        .boundingClientRect()
        .exec(function(res) {
          that.skeletonRectLists = res[0];
        });
    },

    radiusHandle: function() {
      const that = this;
      wx.createSelectorQuery()
        .selectAll(`.${this.selector}-radius`)
        .boundingClientRect()
        .exec(function(res) {
          that.skeletonCircleLists = res[0];
        });
    },
  },

  onLoad: function() {
    Object.assign(this.$data, this.$options.data())
    // fetch some data
    dataArr.push({ ...this.$data })
    //默认的首屏宽高，防止内容闪现
    const that = this;
    const systemInfo = wx.getSystemInfoSync();
    (this.systemInfo = {
      width: systemInfo.windowWidth,
      height: systemInfo.windowHeight,
    }),
      (this.loading = this.loadingAni.includes(this.loading) ? this.loading : 'spin');
    //绘制背景
    wx.createSelectorQuery()
      .selectAll(`.${this.selector}`)
      .boundingClientRect()
      .exec(function(res) {
          console.log(res)
        if(res[0].length>0){
            that.systemInfo.height = res[0][0].height + res[0][0].top || 0;
        }
      });
    if(this.flag){
        this.skeletonRectLists = []
    }

  },
   onUnload() {
    dataArr.pop()
    const dataNum = dataArr.length
    if (!dataNum) return
    Object.assign(this.$data, dataArr[dataNum - 1])
  },
};
/* eslint-enable */
</script>

<style scoped>
.wrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #FFF;
  z-index: 9998;
  overflow: hidden;
}
.radius {
    padding: 10px;
    box-sizing: border-box;
}
.chiaroscuro {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  height: 40px;
  position: relative;
}
.main{
    position: relative;
    height: 30px;
}
.header{
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.name{
    position: absolute;
    top: 4px;
    left: 40px;
    width: 40%;
    height: 20px;
}
.clearfix:after{
    content: "";
    display: block;
    height: 0;
    clear:both;
    visibility: hidden;
}
.clearfix{
    zoom: 1;
}
.content{
    width: 89%;
    float: right;
    height: 15px;
    margin: 8px 0;
}
@keyframes placeHolderShimmer{
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
}
</style>