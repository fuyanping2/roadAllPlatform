
<template>
  <div class="table-box">
    <!-- 协同监管 -->
    <el-dialog
      :visible.sync="replyflag"
      custom-class="fensa fensa2"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <!-- <el-dialog width="30%"
                 title=""
                 custom-class="fensa"
                 :show-close="false"
                 :visible.sync="innerVisible"
                 append-to-body>

        <div class="replycloseBtn1"
             @click="innerVisible=false"></div>

        <div class="swipwedbp">

          <div class="swiper-container swiper-containerqw"
               id="swipersa8">
            <div class="swiper-wrapper">
              <div class="swiper-slide"
                   v-for="(iteam,index) in imglistsa"
                   :key="index"
                   :autoplay='5000'>
                <el-image style="width: 100%; height: 100%"
                          :src="IP+iteam"
                          fit="fill"></el-image>

              </div>

            </div>
          </div>
        </div>
        <div class="indetab">{{indexbgd}}/{{indexallsa}}</div>

      </el-dialog>-->
      <div class="reply-dialog">
        <div class="dialog-title">
          动态监管全流程
          <div class="replycloseBtn" @click="replycloseSa()"></div>
        </div>
        <div
          v-show="
            (replyData.dispatchTarget == '协同接收') &
            (replyData.currentStatus == '接收')
          "
          class="dialog-banner dialog-banner1"
        ></div>
        <div
          v-show="
            (replyData.dispatchTarget == '协同接收') &
            (replyData.currentStatus == '处置')
          "
          class="dialog-banner dialog-banner2"
        ></div>
        <div
          v-show="
            (replyData.dispatchTarget == '协同接收') &
            (replyData.currentStatus == '完成')
          "
          class="dialog-banner dialog-banner3"
        ></div>
        <div
          v-show="
            (replyData.dispatchTarget == '协同接收') &
            (replyData.currentStatus == '反馈')
          "
          class="dialog-banner dialog-banner4"
        ></div>
        <div
          v-show="
            (replyData.dispatchTarget == '推送至大数据中心') &
              (replyData.currentStatus == '发现') ||
            (replyData.dispatchTarget == '推送至城运中心') &
              (replyData.currentStatus == '发现') ||
            (replyData.dispatchTarget == '委内处置') &
              (replyData.currentStatus == '发现')
          "
          class="dialog-banner dialog-banner5"
        ></div>
        <div
          v-show="
            (replyData.dispatchTarget == '推送至大数据中心') &
              (replyData.currentStatus == '推送') ||
            (replyData.dispatchTarget == '推送至城运中心') &
              (replyData.currentStatus == '推送') ||
            (replyData.dispatchTarget == '委内处置') &
              (replyData.currentStatus == '推送')
          "
          class="dialog-banner dialog-banner6"
        ></div>
        <div
          v-show="
            (replyData.dispatchTarget == '推送至大数据中心') &
              (replyData.currentStatus == '接收') ||
            (replyData.dispatchTarget == '推送至城运中心') &
              (replyData.currentStatus == '接收') ||
            (replyData.dispatchTarget == '委内处置') &
              (replyData.currentStatus == '接收')
          "
          class="dialog-banner dialog-banner7"
        ></div>
        <div
          v-show="
            (replyData.dispatchTarget == '推送至大数据中心') &
              (replyData.currentStatus == '反馈') ||
            (replyData.dispatchTarget == '推送至城运中心') &
              (replyData.currentStatus == '反馈') ||
            (replyData.dispatchTarget == '委内处置') &
              (replyData.currentStatus == '反馈')
          "
          class="dialog-banner dialog-banner8"
        ></div>

        <div class="dialog-main">
          <div class="rightsa">
            <div class="line"></div>
            <div class="leftsa">
              <!-- <div :class="(imgtype=='反馈'&&index==3)||(imgtype=='接收'&&index==2)||(imgtype=='发现'&&index==0)||(imgtype=='推送'&&index==1)||(imgtype=='接收'&&index==0)||(imgtype=='处置'&&index==1)||(imgtype=='完成'&&index==2)?'chakantupi':'chakantupi1'"
                   v-for="(itam,index) in replyData.zhuangtai"
                   :key="index">
              </div>-->
            </div>
            <div class="saul">
              <div class="lineprocess"></div>
              <div
                v-for="(itam, index) in replyData.zhuangtai"
                :key="index"
                :class="
                  replyData.currentStatus == itam.name
                    ? 'sali standout'
                    : 'sali'
                "
              >
                <el-popover
                  v-if="itam.url"
                  placement="right"
                  width="690"
                  height="700"
                  popper-class="swipwedbp"
                  trigger="click"
                >
                  <div
                    class="swiper-container swiper-containerqw"
                    id="swipersa8"
                  >
                    <div class="swiper-wrapper">
                      <div
                        class="swiper-slide"
                        v-for="(iteam, index) in itam.imglistsa"
                        :key="index"
                        :autoplay="5000"
                      >
                        <el-image
                          style="width: 100%; height: 100%"
                          :src="iteam"
                          fit="fill"
                        ></el-image>
                      </div>
                    </div>
                  </div>
                  <div class="indetab">
                    {{ indexbgd }}/{{ itam.indexallsa }}
                  </div>
                  <div class="chakantupi" slot="reference">查看图片</div>
                </el-popover>

                <div
                  :class="
                    replyData.currentStatus == itam.name
                      ? 'div-standout div-standoutactive'
                      : 'div-standout'
                  "
                >
                  {{ itam.name }}
                </div>
                <div class="span-standout">
                  {{ itam.time }}&nbsp;&nbsp;{{ itam.desc }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
    <!-- 协同监管 -->
    <div class="head">
      <div class="title">事件处理</div>
      <div class="tab-list">
        <span
          :class="[curTabIndex == index ? 'item item-active' : 'item']"
          v-for="(item, index) in tabList"
          :key="index"
          @click="clickTab(item, index)"
        >
          {{ item }}
        </span>
      </div>
    </div>
    <div class="orders tableBox1">
      <div class="table-head">
        <div class="thead thead1">企业名称</div>
        <div class="thead thead2">派单事项</div>
        <div class="thead thead3">所属街镇</div>
        <div class="thead thead4">接收部门</div>
        <div class="thead thead5">处理状态</div>
      </div>
      <div
        class="table-body"
        @mouseenter="ouseentertable"
        @mouseleave="mouseleavetable"
      >
        <div v-if="findVisible.length == 0" style="text-align: center">
          <img src="../../assets/image/two/qsttable.png" />
        </div>
        <div class="swiper-container" id="swiper1">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(iteam, index) in findVisible"
              :key="index"
              :autoplay="5000"
            >
              <div class="allData">
                <div class="table-foncom table-foncom1">
                  {{ iteam.entyName }}
                </div>
                <div class="table-foncom table-foncom2">
                  {{ iteam.taskName }}
                </div>
                <div class="table-foncom table-foncom3">
                  {{ iteam.occurStreet }}
                </div>
                <div class="table-foncom table-foncom4">
                  {{ iteam.handleDept }}
                </div>
                <div class="statusSa">
                  <ProcessLine
                    v-on:changeprocess="changeprocess($event)"
                    v-bind:statusData="iteam"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <lr-arrow></lr-arrow>
  </div>
</template>

<script>
import ProcessLine from "./process";
import Swiper from "swiper";
import lrArrow from '../../components/lrArrow'
export default {
  components: {
    lrArrow,
    ProcessLine
  },

  data () {
    return {
      tabList: ['停车', '客运', '单车', '货运', '汽修', '道路'],
      findVisible: [
        {
          entyName: '9999',
          taskName: '9999',
          occurStreet: '9999',
          handleDept: '9999',
        },
        {
          entyName: '9999',
          taskName: '9999',
          occurStreet: '9999',
          handleDept: '9999',
        }
      ],
      swipertable: null,
      statusData: [],
      replyflag: false,
      replyData: {}, // 反馈数据
      curTabIndex: 0
    }
  },
  mounted () {
    this.initSwipertable()
  },
  created () {
  },
  methods: {
    clickTab (item, index) {
      this.curTabIndex = index
    },
    // 查看回复信息
    changeprocess (data) {
      let that = this
      this.imgtype = "";
      if (data.isfase == true) {
        this.replyflag = true;
        this.replyData = data.row
        this.replyData.zhuangtai.forEach(item => {
          item.imglistsa = []
          if (item.url) {
            item.imglistsa = item.url.split(',')
            item.indexallsa = item.imglistsa.length
          }
        })

      }
    },
    initSwipertable () {
      this.swipertable = new Swiper("#swiper1", {
        loop: false, // 循环模式选项
        direction: 'vertical',
        slidesPerView: 2,
        slidesPerGroup: 2,
        mousewheel: true,
        // autoplay: {
        //   delay: 10000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: true,
        // },
        autoplay: true,
        //preventLinksPropagation: false,  // 阻止点击事件冒泡
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      });
    },
    ouseentertable () {
      this.swipertable.autoplay.stop();
    },
    mouseleavetable () {
      this.swipertable.autoplay.start();
    },

  }
}
</script>
<style lang="scss">
.table-box {
  .swiper-slide {
    width: 100%;
    height: vh(85) !important;
  }
}
</style>
<style lang="scss" scoped>
.table-box {
  position: relative;
  display: flex;
  flex-direction: column;
  height: vh(265);
  border: 1px solid rgba(55, 85, 218, 0.3);
  font-family: Microsoft YaHei;
  font-weight: 400;
  .head {
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 44px;
    background: linear-gradient(
      92deg,
      rgba(1, 180, 255, 0.2),
      rgba(1, 17, 73, 1)
    );
    padding: 0 vw(22);
    .title {
      font-size: vw(24);
      line-height: 44px;
      font-family: FZDaHei-B02S;
      color: #0096ff;
      background: linear-gradient(
        92deg,
        #0072ff 0%,
        #00eaff 48.8525390625%,
        #01aaff 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .tab-list {
      line-height: 44px;
      .item {
        padding: vh(7) vw(23);
        border: 1px solid #176ae7;
        border-radius: 4px;
        font-size: vw(16);
        color: #ffffff;
        margin-left: vw(5);
        cursor: pointer;
        &.item-active {
          background: rgba(23, 106, 231, 0.3);
        }
      }
    }
  }
  //表格样式
  .tableBox1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    .table-head {
      width: 100%;
      height: vw(39);
      line-height: vw(39);
      background: rgba(13, 57, 133, 0.6);
      box-shadow: rgba(153, 204, 255, 0.18) 0 0 0.05rem 0.01rem inset;
      font-size: vw(16);
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .thead {
        text-align: center;
        height: 100%;
        border-right: 1px solid #1436ab;
      }
      .thead1 {
        width: 22%;
      }
      .thead2 {
        width: 13%;
      }
      .thead3 {
        width: 13%;
      }
      .thead4 {
        width: 13%;
      }
      .thead5 {
        flex: 1;
      }
    }
    .table-body {
      flex: 1;
      font-size: vw(18);
      cursor: pointer;
      #swiper1 {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .swiper-slide {
          width: 100%;
          height: vh(85);

          .allData {
            width: 100%;
            // height: vw(79);
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #45aeff;
            border-bottom: 1px solid #1436ab;
            box-sizing: border-box;
            .table-foncom {
              font-size: vw(18);
              text-align: center;
              height: vh(85);
              line-height: vh(85);
              border-right: 1px solid #1436ab;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              box-sizing: border-box;
              padding: 0 vw(4);
            }
            .table-foncom1 {
              width: 22%;
              border-left: 1px solid #1436ab;
            }
            .table-foncom2 {
              width: 13%;
              color: #ffd25e;
            }
            .table-foncom3 {
              width: 13%;
            }
            .table-foncom4 {
              width: 13%;
            }
            .statusSa {
              flex: 1;
              height: vh(85);
              box-sizing: border-box;
              padding: 0 vw(90);
              border-right: 1px solid #1436ab;
            }
          }
        }
      }
    }
  }
}
</style>
