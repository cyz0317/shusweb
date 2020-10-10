<template>
  <lazy-component>
    <div>
      <div class="morehead">招聘职位</div>
      <div class="recontents">
        <div class="morecontent">
          <span class="reheadst">共{{ posnums.length }}个职位</span>
        </div>
        <div
          class="recontent"
          v-for="(pos, index) in posnums.slice(
            (currentPage - 1) * pagesize,
            currentPage * pagesize
          )"
          :key="index"
        >
          <div class="reconto">
            <span class="recontosf">{{ pos.name }}</span>
            <div class="recontoss">
              <img src="../assets/didian.png" alt />
              <div class="recontdiv">
                <span class="recontossf">{{ pos.place }}</span>
                <span class="recontossf">{{ pos.numpeo }}</span>
                <span class="recontossf">{{ pos.education }}</span>
              </div>
            </div>
            <div class="recontost">
              <img src="../assets/shijian.png" alt />
              发布于{{ pos.time }}
            </div>
          </div>
          <div class="recontt" v-if="pos.showtype">
            <div :class="[{ reconttffuben: pos.showtype }, 'reconttf']">
              <span class="reconttfsf">岗位职责</span>
              <span class="reconttfss" v-html="pos.responsibility"></span>
            </div>
            <div :class="[{ reconttffuben: pos.showtype }, 'reconttf']">
              <span class="reconttfsf">任职要求</span>
              <span class="reconttfss" v-html="pos.require"></span>
            </div>
          </div>
          <div class="reconts">
            <span @click="showToggle(index)">{{
              pos.showtype ? "收起" : "查看详情"
            }}</span>
          </div>
        </div>
        <div class="bottomfenye">
          <el-pagination
            class="fenye"
            background
            layout="prev, pager, next"
            :total="posnums.length"
            :current-page="currentPage"
            :page-size="pagesize"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
      </div>
    </div>
  </lazy-component>
</template>
<style>
.bottomfenye {
  width: 100%;
  height: 80px;
}
.fenye {
  display: flex;
  justify-content: center;
}
.reconts {
  width: 628px;
  height: 57px;
  text-align: center;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #0021a3;
  line-height: 57px;
  border-top: 1px dashed;
  border-color: rgba(51, 51, 51, 0.5);
  margin-top: 25px;
  opacity: 0.7;
}
.reconts span {
  cursor: pointer;
}
.reconttf {
  width: 100%;
  height: 0;
  margin-top: 25px;
  overflow: hidden;
  transition: height 2s;
}
.reconttffuben {
  height: auto;
}
.reconttfsf {
  display: block;
  width: 150px;
  height: 35px;
  font-size: 22px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 35px;
  margin-bottom: 8px;
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
.recontossf {
  width: 230px;
  height: auto;
}
.recontdiv {
  width: 600px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-bottom: 5px;
}
.reconto {
  width: 670px;
  height: 115px;
  margin: 0 auto;
}
.reconto span {
  display: block;
}
.recontosf {
  width: auto;
  height: 68px;
  font-size: 28px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 68px;
}
.recontoss {
  display: flex;
  width: 650px;
  height: 25px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #333333;
  align-items: center;
  opacity: 0.6;
}
.reconto img {
  width: 25px;
  height: 25px;
  margin-right: 9px;
}
.recontost {
  display: flex;
  width: 670px;
  height: 25px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #333333;
  opacity: 0.6;
  margin-top: 10px;
}
.recontents {
  width: 100%;
  height: auto;
  background: #f5f9ff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.recontent {
  width: 670px;
  height: auto;
  background: #ffffff;
  border: 0px solid #d2d2d2;
  box-shadow: 0px 0px 22px 0px rgba(21, 0, 3, 0.1);
  padding-left: 40px;
  margin-bottom: 48px;
}
.reheadst {
  display: block;
  width: auto;
  height: 40px;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #82898f;
  line-height: 40px;
  position: relative;
  left: 20px;
}
.morehead {
  width: 750px;
  height: auto;
  background: url("../assets/top/head.png") no-repeat;
  background-size: 100% 100%;
  font-size: 28px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 74px;
  text-align: center;
}
.morecontent {
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
}
</style>
<script>
export default {
  name: "app",
  data() {
    return {
      fons: 0,
      showword: "查看详情",
      showtype: false,
      currentPage: 1, //初始页
      pagesize: 4, //    每页的数据
      posnums: [
        {
          showtype: false,
          name: "大数据开发工程师",
          place: "北京，上海",
          numpeo: "人数不限",
          education: "本科",
          time: "2020.09.21",
          responsibility:
            "1、负责公司大数据平台的架构规划与设计，以提升平台的存储能力和计算能力<br>2、研究行内最前沿的技术发展方向，突破现有的技术难题<br>3、负责部门内外的合作协调，优化资源结构，提高单产效率<br>4、掌握大规模高并发访问、大数据开发等处理经验<br>5、负责hadoop, hive, presto, kylin, alluxio等开源软件其中之一的核心代码优化与开发",
          require:
            "1、5年以上大数据领域专业技术开发经验,熟悉大数据技术生态圈相关的技术，对于大数据技术架构有独特见解<br>2、理解JVM 运行机制和内存管理, 有针对JVM GC优化经验<br>3、熟悉分布式系统的监控、运维、故障恢复，高可用原理和设计理念;掌握Hadoop, Kafka, Zookeeper, Hbase, Spark，flink等原理，熟悉k8s及DOCKER优先<br>4、有参与大规模分布式调度, 存储或计算其中之一的研发与设计<br>5、 熟练的Linux系统, 网络, 内存和存储等方面知识",
        },
        {
          showtype: false,
          name: "数据产品经理",
          place: "北京，上海",
          numpeo: "人数不限",
          education: "本科",
          time: "2020.09.21",
          responsibility:
            "1、负责大数据产品的规划和落地，包括业务调研、需求分析、产品定位、产品架构、模型算法及详细功能的设计<br>2、负责规划数据在客户侧的应用，能基于客户诉求，使用数据产品指导客户使用<br>3、产品全生命周期跟进，协调各种资源保证产品顺利落地，同时负责后期产品持续运营<br>4、能将业务语言转化为产品语言，并能协调研发部门，推动产品落地",
          require:
            "1、本科及以上学历，有大数据领域从业经验优先<br>2、三年及以上工作经验，一年以上大数据产品经验 或者互联网领域产品经验<br>3、有较丰富的产品实践经验，包括需求调研分析、产品原型设计、PRD编写、产品运营管理等<br>4、具有数据挖掘分析功底及敏锐的数据洞察力<br>5、较强的责任心、沟通能力和协作能力",
        },
        {
          showtype: false,
          name: "BI工程师",
          place: "北京，上海",
          numpeo: "人数不限",
          education: "本科",
          time: "2020.09.21",
          responsibility:
            "1、负责数据仓库建设与模型设计工作<br>2、负责数据仓库ETL设计与优化工作，保障数据稳定性和准确性<br>3、开发和维护数据仓库相关内容，能将客户诉求转化为数据需求并落地<br>4、负责制定数据管理规范和流程",
          require:
            "1、从事数据仓库建设领域至少1年以上，掌握数据仓库各类建模理论，具备大型数据仓库架构设计、模型设计和处理性能调优等相关经验<br>2、具有较强的数据模型和数据架构基础，良好的逻辑思维能力，能够从繁杂的业务与海量数据中理清逻辑，并结合业务和数据，相辅相成<br>3、掌握大规模数据处理、分布式计算等相关技术，如Hadoop、Hive、Spark、storm、flink等<br>4、掌握JAVA/Python/Shell/Perl等一门以上语言",
        },
        {
          showtype: false,
          name: "软件开发工程师(Java方向)",
          place: "北京，上海",
          numpeo: "人数不限",
          education: "本科",
          time: "2020.09.21",
          responsibility:
            "1、负责大数据相关产品的软件开发及架构设计，保证系统稳定性、性能优化等相关工作<br>2、保持技术前瞻性，持续推动系统架构的合理性<br>3、探索并应用大数据前沿技术，如海量数据的即席查询、微服务等<br>4、负责系统性能调优与优化",
          require:
            "1、JAVA基础扎实，包括JVM、IO、多线程、并发、网络，深刻理解面向对象、设计原则、封装抽象等<br>2、熟练使用常用的Java技术框架，并对java web的各种开源框架如Spring、Struts、Hibernate等有深入的应用和优化经验，掌握原理和机制<br>3、熟悉分布式系统的设计和应用，熟悉数据库、缓存、消息队列、RPC等内部机制<br>4、对Kylin、Druid、clickhouse、impala、kudu、presto等引擎使用场景及特性有使用和调优经验，对常见的OLAP引擎有深入研究及优化经验<br>5、熟悉Web相关中间件，tomcat、nginx、haproxy<br>6、熟悉MYSQL、ORACLE等关系型数据库其中之一，熟练掌握SQL",
        },
        {
          showtype: false,
          name: "算法工程师",
          place: "北京，上海",
          numpeo: "人数不限",
          education: "本科",
          time: "2020.09.21",
          responsibility:
            "1. 根据不同的客户诉求业，负责进行数据分析、数据挖掘的技术实现落地，负责关键数据建模和算法、工程技术的研究和实现<br>2. 通过专项分析清晰定位客户场景特征，结合发展状况，通过统计与深度运营分析挖掘，发现风险与机会，发现瓶颈，研究用户行为，提供指导运营的数据化解决方案<br>3. 负责项目中的数据挖掘方案的设计、核心算法的设计和验证、算法工程化技术实现以及效果评估、线上产品运维，负责部门内部的持续提供新技术的驱动升级",
          require:
            "1、5年以上数据分析、挖掘、数据类产品规划、架构方案、算法实践的相关工作经验<br>2、统计、数学、计算机等相关专业，具备统计学、应用数学、数据挖掘、机器学习、概率统计基础理论知识，熟练掌握机器学习算法原理，熟悉常见的机器学习算法；了解数据挖掘前沿技术、机器学习、深度学习等人工智能发展方向和最新成果<br>3、逻辑严谨，具备独立分析能力，有良好的逻辑思维和定义以及解决问题的能力<br>4、具备丰富的编程技术基础，熟悉hadoop/hive/hbase等大数据平台、storm/sparkstreaming实时数据计算、主流机器学习、深度学习平台如sktlearn/theano/tensorflow的编程算法设计等技术，具有海量数据处理经验。熟悉关系数据库；熟悉常用工具如SAS，R，python等<br>5、具备大数据处理能力和经验，具备良好的数据分析和可视化能力<br>6、工作主动、自驱动，优秀的沟通协调和团队精神，较强的学习研究能力、抗压能力，可以独立承担并且主导项目的推进<br>",
        },
        {
          showtype: false,
          name: "电商产品经理",
          place: "北京，上海",
          numpeo: "人数不限",
          education: "本科",
          time: "2020.09.21",
          responsibility:
            "1、作为行业领域专家，为客户提供咨询解决方案<br>2、关注电商模式及应用相关方向的前沿研究，分析行业内产品、用户情况，根据客户业务情况，优化产品，制定产品策略<br>3、负责规划、设计电商业务系统架构，包括B2C模式、B2B模式、全渠道等模式，落地数势的PaaS及SaaS产品线<br>",
          require:
            "1、5年以上工作经验，其中近3年需在电商平台有产品相关工作经验<br>2、具有搭建B2C/B2B/新零售场景和平台的产品经验或者具有供应链产品、物流产品的工作经验<br>3、有自己完整产品知识体系，历过多个0-1阶段的产品经验<br>4、知名电商平台或技术公司背景者优先",
        },
        {
          showtype: false,
          name: "战略合作经理",
          place: "北京，上海",
          numpeo: "人数不限",
          education: "本科",
          time: "2020.09.21",
          responsibility:
            "1、通过与业界公司双赢合作，达成在数据化系统服务的客户快速覆盖及方案交付<br>2、负责拓展行业内各上下游公司信息，了解其产品、组织、业务，完成以本公司为核心的商业生态图谱建设<br>3、基于本公司业务，根据要求分发项目至上下游合作公司，达成本公司方案交付<br>4、基于本公司生态及能力现状，寻找上下游合作伙伴，达成拓展新客户目标",
          require:
            "1、熟悉企业数字化升级市场或业务经营性软件服务市场（系统类，非硬件类或流程类）<br>2、具备将商务需求转化成产品方案的能力<br>3、良好的语言、文字沟通能力及职业素养，有一定组织协调能力<br>4、相关工作经验5年及以上，具有一定客户资源或渠道资源关系者优先。有较强的商务合作能力，形象好气质佳者优先",
        },
        {
          showtype: false,
          name: "电商Java架构师",
          place: "北京，上海",
          numpeo: "人数不限",
          education: "本科",
          time: "2020.09.21",
          responsibility:
            "1、进行公司产品数字化零售或数字化营销或数字化分销电商系统的设计与开发<br>2、能够独立完成高质量的业务需求代码<br>3、协助业务梳理，参与业务规划的技术选型和架构设计<br>4、对小组成员做代码code review,及时指出问题并跟踪改进,时刻关注前沿技术",
          require:
            "1、扎实的JAVA 编程基础功，对 JVM 原理有一定的了解；熟悉java领域相关技术栈<br>2、熟练运用SpringBoot，SpringCloud，Dubbo，mybatis等服务框架，了解机制<br>3、熟悉分布式架构常见组件，如：API网关、消息队列、分布式缓存、Nosql，zookeeper，数据库中间件等<br>4、对系统架构有比较体系化的掌握，熟悉双活架构、服务治理、过载保护、熔断降级等高可用架构理念<br>5、强烈的责任心，有吃苦精神，对代码质量高要求，学习能力强<br>6、加分项：熟悉APM监控、分布式调用链追踪等监控技术<br>7、加分项：有高并发线上系统研发经验，熟练使用常用的性能优化方法和工具<br>8、加分项： 有企业系统实战经验或丰富的SaaS电商平台经验",
        },
      ],
    };
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size;
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
    },
    showToggle(index) {
      if (this.currentPage != 1) {
        this.fons = (this.currentPage - 1) * (index + 4);
        this.posnums[this.fons].showtype = !this.posnums[this.fons].showtype;
      } else this.posnums[index].showtype = !this.posnums[index].showtype;
    },
  },
};
</script>