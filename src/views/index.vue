<template>
  <lazy-component>
    <div class="incenter">
      <div class="top">
        <div class="tops">
          <div class="topword">
            <div class="topword1">做企业数字化升级</div>
            <div class="topword1">最佳技术合作伙伴！</div>
            <!-- <div class="topword2">
              致力于成为企业数字化升级的最佳长期技术伙伴，
              为企业建设数字化经营操作系统
            </div> -->
          </div>
        </div>
      </div>
      <div class="midf">
        <div class="xuanfu">
          <div class="xuanfutop">
            <div class="xuanfuleft">
              <img src="../assets/originator.png" alt="" />
            </div>
            <div class="xuanfuright">
              <span class="xuanfuspan1">数势科技</span>
              <span class="xuanfujieshao"
                >数势科技成立于2020年6月，获得腾讯上亿元天使轮投资。<br>创始人兼CEO黎科峰博士，为前京东集团副总裁、京东商城技术委员会主席，并作为系统负责人整体驱动了京东零售数字化的成功转型。<br>黎科峰博士曾在百度担任手机百度总经理，在平安集团任执委及平安金融科技CTO，拥有数千人大型技术团队管理经验。</span
              >
            </div>
          </div>
          <div class="xuanfubottom">
            <div class="xuanfubottomle">
              <span class="xuanfuspan2">
                <span class="xuanfuspan4">{{ xuanfuwords[0].title }}</span>
                <span class="xuanfuspan5">{{ xuanfuwords[0].content }}</span>
              </span>
              <span class="xuanfuspan3">
                <span class="xuanfuspan4">{{ xuanfuwords[1].title }}</span>
                <span class="xuanfuspan5 xuanfuspan5fu">{{
                  xuanfuwords[1].content
                }}</span>
              </span>
            </div>
            <img src="../assets/midf/xuanfu.png" alt="" />
          </div>
        </div>
        <div class="midff">
          <div class="midffhead">
            <img src="../assets/midf/crown.png" alt />
            <span>我们的优势</span>
          </div>
          <div class="midffconts">
            <div
              class="midffcont"
              v-for="(cont, index) in midf"
              :key="index"
              :style="{ backgroundImage: 'url(' + cont.background + ')' }"
            >
              <span :class="[index == 2 ? 'teshu' : '', 'midc1']">{{
                cont.title
              }}</span>
              <span class="midc2">{{ cont.content }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mids">
        <div class="midshead">
          <img src="../assets/mids/midslogo.png" alt />
          <span>全渠道数字化经营操作系统</span>
        </div>
        <div class="midsconts">
          <swiper :options="swiperOptions" ref="mySwiper">
            <swiper-slide v-for="(core, index) in corevaldiv" :key="index">
              <div class="midscont">
                <div class="midscontf">
                  <img :src="core.pic" alt />
                  <div class="midscontff">
                    <span class="midscontffsf">{{ core.title }}</span>
                    <span class="midscontffss"></span>
                  </div>
                </div>
                <div class="midscontss">{{ core.content }}</div>
              </div>
            </swiper-slide>
            <!-- 常见的小圆点 -->
            <div class="swiper-pagination diandian" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <div class="zhao">
        <div class="midshead">
          <img src="../assets/midt/midtlogo.png" alt />
          <span>招聘信息</span>
        </div>
        <div class="vb">
          <div class="recontenti" v-for="post in posts" :key="post.index">
            <div class="reconto">
              <span class="recontosf">{{ post }}</span>
              <div class="recontoss">
                <img src="../assets/didian.png" alt />
                <div class="recontdiv">
                  <span class="recontossf">北京、上海 </span>
                  <span class="recontossf">人数不限</span>
                  <span class="recontossf">本科</span>
                </div>
              </div>
              <div class="recontost">
                <img src="../assets/shijian.png" alt />
                发布于2020.09.17
              </div>
            </div>
            <!-- <div class="recontsr">
              <span ><router-link to="recruitment">查看详情</router-link></span>
            </div> -->
          </div>
          <div class="nl">......</div>
          <div class="nl">
            <router-link to="recruitment">共有12个职位(查看全部)</router-link>
          </div>
        </div>
      </div>
      <!-- <div class="midt">
      <div class="midshead">
        <img src="../assets/midt/midtlogo.png" alt />
        <span>数字化技术服务</span>
      </div>
      <div class="midtcontent" v-for="(midt,index) in midts" :key="index">
        <div class="generalization">
          <div class="gens">{{midt.generalization}}</div>
        </div>
        <div class="details" v-for="(detail,i) in midt.details" :key="i">
          <div :class="[i==3?'':'detailss','detailssfu']">
            <img :src="detail.icon" alt />
            <div class="detailsss">
              <span class="detailsss1">{{detail.title}}</span>
              <span class="detailsss2">{{detail.content}}</span>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    </div>
  </lazy-component>
</template>
<style type="text/css">
@media screen and (min-width: 200px) {
  .xuanfuspan5fu {
  top: -11px;
}
  .xuanfuright {
    width: 410px;
    height: 210px;
    position: relative;
    left: 20px;
  }
  .xuanfujieshao {
    width: 623px;
    top: -60px;
    right: 108px;
    transform: scale(0.65);
    font-size: 18px;
  }
  .xuanfuspan5 {
    width: 550px;
    height: auto;
    transform: scale(0.65);
    position: relative;
    right: 95px;
    font-size: 18px;
  }
}
@media screen and (min-width: 363px) {
  .xuanfuspan5fu {
  top: -5px;
}
  .xuanfuright {
    width: 410px;
    height: 210px;
    position: relative;
    left: 20px;
  }
  .xuanfujieshao {
    width: 515px;
    top: -45px;
    right: 50px;
    transform: scale(0.8);
    font-size: 18px;
  }
  .xuanfuspan5 {
    width: 450px;
    height: auto;
    transform: scale(0.8);
    position: relative;
    right: 45px;
    font-size: 18px;
  }
}
@media screen and (min-width: 374px) {
  .xuanfuright {
    width: 410px;
    height: 210px;
    position: relative;
    left: 14px;
  }
  .xuanfujieshao {
    top: -50px;
    font-size: 24px;
  }
  .xuanfuspan5 {
    width: 450px;
    height: auto;
    font-size: 22px;
  }
}
</style>
<style>
.xuanfubottomle {
  width: 350px;
  height: 200px;
}
.xuanfubottom img {
  width: 210px;
  height: 175px;
  position: relative;
  top: 30px;
  left: 55px;
}

.xuanfujieshao {
  font-family: PingFang SC;
  font-weight: 400;
  color: #333339;
  opacity: 0.7;
  position: relative;
}
.xuanfuright span {
  display: block;
}
.xuanfuleft {
  width: 176px;
  height: 200px;
  border: 1px solid #959595;
}
.xuanfuleft img {
  width: 160px;
  height: 205px;
  position: relative;
  left: 8px;
  bottom: 15px;
}
.recontsr a {
  color: gray;
}
.nl a {
  color: gray;
  font-size: 28px;
}
.nl {
  font-size: 36px;
  text-align: center;
  color: gray;
  position: relative;
  top: -40px;
  margin: 0 auto;
}
.vb {
  padding-top: 80px;
  margin-left: 20px;
}
.recontsr {
  width: 628px;
  height: 57px;
  text-align: center;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 600;
  color: gray;
  line-height: 57px;
  border-top: 1px dashed;
  border-color: rgba(51, 51, 51, 0.5);
  margin-top: 25px;
  opacity: 0.7;
}
.reconts span {
  cursor: pointer;
}
.reconttfss {
  display: block;
  width: 630px;
  height: auto;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #333333;
  opacity: 0.6;
}
.reconto {
  width: 670px;
  height: 115px;
  margin: 0 auto;
}
.reconto span {
  display: block;
}
.recontents {
  width: 100%;
  height: auto;
  background: #f5f9ff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.recontenti {
  width: 670px;
  height: 150px;
  background: #ffffff;
  border: 0px solid #d2d2d2;
  box-shadow: 0px 0px 22px 0px rgba(21, 0, 3, 0.1);
  padding-left: 40px;
  margin-bottom: 48px;
}
.zhao {
  width: 100%;
  height: auto;
}
.swiper-wrapper {
  -webkit-transform: translate3d(0px, 0, 0);
  transform: translate3d(0px, 0, 0);
}
.diandian {
  position: relative;
  bottom: -80px;
}
.top {
  width: 100%;
  height: 776px;
}
.midf {
  width: 100%;
  height: 1750px;
}
.mids {
  width: 100%;
  height: 750px;
  background: url("../assets/mids/midsfbg.png") no-repeat;
  background-size: 100% 100%;
}
.midt {
  width: 100%;
  height: 1970px;
  background-color: #f6f7f9;
}

.tops {
  width: 100%;
  height: 776px;
  background: url("../assets/top/topbg.png") no-repeat;
  background-size: 100% 100%;
}
.topword {
  width: 551px;
  height: 169px;
  margin: 0 auto;
  position: relative;
  top: 130px;
}
.topword1 {
  width: 400px;
  height: 48px;
  font-size: 42px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 48px;
  margin: 0 auto;
  /* margin-bottom: 22px; */
  text-align: center;
}
.topword2 {
  width: 551px;
  height: 59px;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 36px;
  text-align: center;
}
.xuanfu {
  width: 682px;
  height: 500px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 20px 57px 0px rgba(0, 11, 14, 0.12);
  border-radius: 16px;
  position: relative;
  top: -100px;
}
.xuanfutop {
  width: 606px;
  height: 234px;
  position: relative;
  top: 53px;
  left: 38px;
  display: flex;
}
.xuanfubottom {
  width: 630px;
  height: 200px;
  position: relative;
  top: 33px;
  left: 38px;
  display: flex;
}
.xuanfubottom span {
  display: block;
}
.xuanfuspan1 {
  width: auto;
  height: 40px;
  font-size: 25px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #000514;
  line-height: 48px;
  position: relative;
  top: -30px;
}
.xuanfuspan2 {
  width: 320px;
  height: 80px;
  margin-top: 25px;
}
.xuanfuspan3 {
  width: auto;
  height: auto;
}
.xuanfuspan4 {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333339;
  line-height: 30px;
}
.xuanfuspan5 {
  font-family: PingFang SC;
  font-weight: 400;
  color: #333339;
  opacity: 0.7;
}
.midff {
  width: 100%;
  height: 1498px;
  margin-top: -50px;
}
.midffhead {
  width: 270px;
  height: 94px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 38px;
}
.midffhead img {
  width: 86px;
  height: 94px;
}
.midffhead span {
  display: inline-block;
  width: auto;
  height: 50px;
  font-size: 34px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #333333;
  line-height: 39px;
}
.midffconts {
  width: 619px;
  height: 1120px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.midffcont {
  width: 301px;
  height: 346px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: no-repeat;
  background-size: 100% 100%;
}
.midffcont span {
  display: block;
}
.midc1 {
  width: auto;
  height: 30px;
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 48px;
  margin-top: 45px;
  margin-bottom: 46px;
}
.midc2 {
  width: 200px;
  height: 83px;
  font-size: 22px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 30px;
}
.teshu {
  width: 240px;
  height: 53px;
  margin-bottom: 38px;
  line-height: 35px;
}
.midshead {
  width: auto;
  height: 92px;
  margin: 0 auto;
  position: relative;
  top: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.midshead img {
  width: 86px;
  height: 92px;
}
.midshead span {
  display: inline-block;
  width: auto;
  height: 60px;
  font-size: 34px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #333333;
  line-height: 46px;
}
.midtcontent {
  width: 682px;
  height: auto;
  position: relative;
  top: 68px;
  margin: 0 auto;
  box-shadow: 1px 10px 16px 0px rgba(0, 4, 12, 0.05);
  margin-bottom: 66px;
  background-color: #ffffff;
}
.generalization {
  width: 682px;
  height: 107px;
  background: #17d9ed;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.gens {
  width: 482px;
  height: 48px;
  border-left: 6px solid #ffffff;
  margin-left: 31px;
  padding-left: 25px;
  font-size: 32px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 48px;
}
.details {
  width: 682px;
  height: auto;
}
.detailss {
  border-bottom: 1px solid;
  border-color: rgba(181, 181, 181, 0.7);
}
.detailssfu {
  width: 606px;
  height: auto;
  margin-left: 28px;
  display: flex;
}
.midtcontent img {
  width: 50px;
  height: 46px;
  position: relative;
  top: 20px;
}
.detailsss {
  width: 544px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  position: relative;
  top: 10px;
  padding-bottom: 33px;
}
.detailsss span {
  display: inline-block;
}
.detailsss1 {
  /* width: 250px; */
  width: auto;
  height: 35px;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #343434;
  line-height: 48px;
  margin-bottom: 16px;
}
.detailsss2 {
  width: 544px;
  height: auto;
  font-size: 22px;
  font-family: PingFang SC;
  font-weight: 300;
  color: #343434;
  line-height: 30px;
}

.midsconts {
  width: 100%;
  height: 600px;
  position: relative;
  top: 88px;
}
.midscont {
  width: 414px;
  height: 470px;
  padding-top: 27px;
  padding-left: 38px;
  background: #ffffff;
  box-shadow: 1px 24px 38px 0px rgba(0, 4, 12, 0.08);
  border-radius: 16px;
}
.midscontf {
  height: 70px;
  width: 280px;
  display: flex;
}
.midscontss {
  width: 378px;
  height: auto;
  font-size: 22px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #343434;
  line-height: 40px;
  opacity: 0.8;
  margin-top: 15px;
}
.midscontf img {
  width: 60px;
  height: 70px;
}
.midscontff {
  width: 160px;
  height: 70px;
  display: flex;
  flex-direction: column;
  margin-left: 14px;
}

.midscontffsf {
  display: inline-block;
  width: 270px;
  height: 63px;
  font-size: 27px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #343434;
  line-height: 63px;
}
.midscontffss {
  display: inline-block;
  width: 53px;
  height: 4px;
  background: #00d4ff;
}
</style>
<script>
// import "@/assets/css/ff.css";
export default {
  name: "app",
  data() {
    return {
      swiperOptions: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        loop: false,
        effect: "coverflow",
        slidesPerView: 2,
        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 60,
          modifier: 2,
          slideShadows: false, // 滑块遮罩层
        },
        //滑动速度 好用
        speed: 1000,
        //滑动方向 好用
        direction: "horizontal",
        //小手掌抓取滑动
        grabCursor: true,
        centeredSlides: true,
        on: {
          //滑动之后回调函数
          slideChangeTransitionStart: function () {
            /* realIndex为滚动到当前的slide索引值 */
            this.imgIndex = this.realIndex - 1;
          },
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
          bulletElement: "li", //设定分页器指示器（小点）的HTML标签。
          dynamicBullets: true, //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
          dynamicMainBullets: 2, //动态分页器的主指示点的数量
          hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
          clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        },
      },
      screenWidth: document.body.clientWidth,
      posts: [
        "大数据开发工程师",
        "数据产品经理",
        "BI工程师",
        "软件开发工程师(Java方向)",
      ],
      xuanfuwords: [
        {
          title: "愿景：",
          content: "成为企业数字化升级最佳长期技术伙伴",
        },
        {
          title: "使命：",
          content:
            "为客户建设数字化经营操作系统，推动企业数字化升级，创造新的增长动力，实现数据价值普惠化",
        },
      ],
      corevaldiv: [
        {
          pic: require("../assets/mids/midsicon1.png"),
          title: "全渠道数据系统",
          content:
            "建设统一的数据系统能力，打通数据烟囱，统一数据口径，沉淀数据资产，实现一站式的大数据采、存、算、汇、管、用，为业务经营提供“大脑”和“双眼”，以高效的数据服务接口和数据应用产品驱动数字化经营",
        },
        {
          pic: require("../assets/mids/midsicon2.png"),
          title: "全渠道业务系统",
          content:
            "提供线上线下全渠道交易能力，实现线上线下交易互通、库存共享、权益一致，打通不同场景和不同业务域的统一交易、营促销以及客户服务能力",
        },
        {
          pic: require("../assets/mids/midsicon3.png"),
          title: "全渠道用户运营平台",
          content:
            "统一会员管理，建设会员画像系统，通过会员全生命周期与权益的分层管理，提升顾客忠诚度、复购率与生命周期价值。针对目标群体精准投放，通过实时监控、漏斗分析、AB测试等方式实现自动化精准营销",
        },
      ],
      midf: [
        {
          background: require("../assets/midf/1.png"),
          title: "成熟的技术",
          content: "过亿日活和双十一大促海量流量考验的技术系统能力",
        },
        {
          background: require("../assets/midf/2.png"),
          title: "深度共创共建",
          content: "与客户团队深度协作，针对性强，开放共创，授之以渔",
        },
        {
          background: require("../assets/midf/3.png"),
          title: "科技+零售/金融行业 Know-how",
          content: "零售/金融等行业领先的线上线下全渠道数字化经营经验",
        },
        {
          background: require("../assets/midf/4.png"),
          title: "简单易用",
          content: "智能易用的产品和技术平台，提供一站式服务",
        },
        {
          background: require("../assets/midf/5.png"),
          title: "数字化升级实战经验",
          content: "帮助多个大型集团企业和中型传统企业实现数字化升级",
        },
        {
          background: require("../assets/midf/6.png"),
          title: "丰富的案例",
          content: "零售/金融等行业营销系统、电商平台、技术/业务系统成功案例",
        },
      ],
      midts: [
        {
          generalization: "数字化经营解决方案",
          details: [
            {
              icon: require("../assets/midt/icon1.png"),
              title: "全场景用户运营平台",
              content:
                "统一会员管理，根据会员画像，通过客户全生命周期的触达与权益管理，提升顾客忠诚度、复购率与生命周期价值",
            },
            {
              icon: require("../assets/midt/icon2.png"),
              title: "全渠道精准营销",
              content:
                "覆盖线上线下营销的全程触点，针对目标群体精准投放，通过实时监控、漏斗分析、AB测试等方式实现自动化精准营销",
            },

            {
              icon: require("../assets/midt/icon3.png"),
              title: "全流程业务智能",
              content:
                "业务经营全程触点，通过数据清洗、加工形成整合化的数字经营资产，为业务的全流程从产品开发、选品决策、销售客服等服务，以可视化的实时BI指导业务作战",
            },

            {
              icon: require("../assets/midt/icon4.png"),
              title: "全域业务系统",
              content:
                "提供线上线下全域交易能力，实现线上线下交易互通、库存共享、权益一致，打通不同场景和不同业务域的统一交易能力（商品通/订单通/库存通/会员通/营销通/权益通/支付通/服务通）",
            },
          ],
        },
        {
          generalization: "数据系统建设",
          details: [
            {
              icon: require("../assets/midt/icon5.png"),
              title: "数据资产管理解决方案",
              content:
                "一站式数据资产管理解决方案，建立统一高效的数据采、存、算、汇、管、用机制",
            },
            {
              icon: require("../assets/midt/icon6.png"),
              title: "数据可视化解决方案",
              content:
                "一站式数据可视化解决方案，统一数据指标口径，提供场景化和自助式的配置模板，满足业务多场景的看数和分析需求，小时级完成个性化报表",
            },

            {
              icon: require("../assets/midt/icon7.png"),
              title: "数据BI建模解决方案",
              content:
                "一站式、智能化的建模平台，数仓全局规划、数据接入、规范管理、模型构建、模型服务的全流程建模能力",
            },

            {
              icon: require("../assets/midt/icon8.png"),
              title: "数据标签建模解决方案",
              content:
                "配置化的标签生产工具，业务人员无需开发能力即可生成个性化的标签以满足快速变化的业务需求",
            },
          ],
        },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(0, 1000, false)
    // eslint-disable-next-line no-unused-vars
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
};
</script>
