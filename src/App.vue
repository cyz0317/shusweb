<template>
  <div id="app">
    <div class="head">
      <div class="topf">
        <img src="./assets/top/toplogo.png" alt class="topfimg1" />
        <img src="./assets/top/right.png" alt class="topfimg2" @click="showPopup" />
        <van-popup
          v-model="show"
          position="right"
          closeable
          :style="{ height: '100%',width:'70%' }"
        >
          <div class="topss">
            <van-cell
              title="首页"
              is-link
              size="large"
              to="/"
              :border="true"
              @click="showPopup"
            />
            <van-cell
              title="招聘信息"
              is-link
              size="large"
              to="/Recruitment"
              :border="true"
              @click="showPopup"
            />
            <van-cell title="商务合作" is-link size="large" :border="true" @click="Submit()" />
          </div>
        </van-popup>
      </div>
    </div>
    <router-view />
    <div class="bottom" id="bo">
      <div class="bottomf">
        <div class="bottomff">
          <img src="./assets/bottom/bottomlogo.png" alt />
        </div>
        <div class="bottomfs">
          <span class="bottomfss1">商务合作</span>
          <div class="bottomfss2">
            <span>联系方式：010-83030086</span>
            <span>合作邮箱：business@shus.cn</span>
            <span>地址：北京市海淀区知春路7号致真大厦A座805</span>
          </div>
        </div>
      </div>
      <div class="bottoms"></div>
      <div class="bottomt">
        <span @click="tiaozhuan">京ICP备20023335号</span>
        <span>数势科技 版权所有</span>
        <span>Copyright © 2020-2020 Shus. All Rights Reserved.</span>
      </div>
    </div>
  </div>
</template>

<style>
.head {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  /* padding-top: 18px; */
}
.topf {
  width: 682px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
}
.topfimg1 {
  width: 211px;
  height: 64px;
}
.topfimg2 {
  width: 40px;
  height: 30px;
}
.topss {
  width: 400px;
  height: 100%;
  margin-top: 100px;
  margin-left: 50px;
}
.bottom {
  width: 100%;
  height: 380px;
  background: url("./assets/bottom/bottombg.png") no-repeat;
  background-size: 100% 100%;
}
.bottomf {
  width: 682px;
  height: 250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.bottomff {
  height: 160px;
  width: 286px;
  display: flex;
  align-items: center;
}
.bottomff img {
  margin: 0 auto;
  width: 202px;
  height: 61px;
}
.bottomfs {
  width: 396px;
  height: auto;
  border-left: 1px solid;
  border-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  padding-left: 36px;
}
.bottomfs span {
  display: inline-block;
}
.bottomfss1 {
  width: auto;
  height: 24px;
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 30px;
}
.bottomfss2 {
  width: auto;
  height: 102px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bottomfss2 span {
  width: 424px;
  height: auto;
  display: block;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 300;
  color: #ffffff;
  /* line-height: 8px; */
  transform-origin: 0 0;
  transform: scale(0.8);
}
.bottoms {
  width: 682px;
  height: 1px;
  background: linear-gradient(90deg, #3c8cff 0%, #00ffff 100%);
  opacity: 0.6;
  margin: 0 auto;
}
.bottomt {
  width: 100%;
  height: 70px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 300;
  color: #ffffff;
  padding-top: 5px;
  margin: 0 auto;
  position: relative;
  top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transform: scale(0.8);
}
.bottomt span{
  display: block;
  height: auto;
  width: auto;
}
</style>
<script>
export default {
  name: "app",
  data() {
    return {
      show: false,
      titlet: "",
      rous: "",
    };
  },
  methods: {
    showPopup() {
      // 判断是首页还是其他页
      if ("/" == this.$route.path) {
        
        this.titlet = "招聘信息";
        this.rous = "/Recruitment";
      } else {
        this.titlet = "首页";
        this.rous = "/";
      }
      this.show = !this.show;
    },
    Submit() {
      this.show = false;
      document.getElementById("bo").scrollIntoView(true);
    },
    tiaozhuan(){
      window.location.href = 'https://beian.miit.gov.cn/#/Integrated/index'
    }
  },
};
</script>