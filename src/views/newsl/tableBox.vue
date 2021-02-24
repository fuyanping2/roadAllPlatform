
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
          entyName: '上海市浦东新区洋泾街道崮山路931号蓝星大厦附近汽修企业',
          taskName: '占道经营',
          occurStreet: '曹路镇',
          handleDept: '城管执法局',
          currentStatus: "推送",
          dispatchTarget: '推送至大数据中心',
          zhuangtai: [
            {
              color: "blue",
              name: "发现",
              time: "2021-02-18 10:27:20",
            },
            {
              color: "red",
              name: "推送",
              time: "2021-02-22 17:37:39",
            },
            {
              color: "grey",
              name: "接收",
              time: null,
              desc: null
            },
            {
              color: "grey",
              name: "反馈",
              time: null,
              url: null,
              desc: null
            }
          ]
        },
        {
          entyName: '上海市浦东新区高桥镇天鹅泉公寓附近汽修企业',
          taskName: '停车场库联网异常',
          occurStreet: '陆家嘴街道',
          handleDept: '停车科',
          currentStatus: "反馈",
          dispatchTarget: '委内处置',
          zhuangtai: [
            {
              color: "blue",
              name: "发现",
              time: "2021-02-20 01:00:00",
            },
            {
              color: "red",
              name: "推送",
              time: "2021-02-20 02:00:00",
            },
            {
              color: "blue",
              name: "接收",
              time: '2021-02-20 02:00:10',
              desc: null
            },
            {
              color: "green",
              name: "反馈",
              time: '2021-02-21 01:00:00',
              url: null,
              desc: null
            }
          ]
        },
        {
          entyName: '上海川曦汽车技术服务有限公司',
          taskName: '维修档案未上传',
          occurStreet: '川沙新镇',
          handleDept: '汽修科',
          currentStatus: "反馈",
          dispatchTarget: '协同接收',
          zhuangtai: [
            {
              color: "blue",
              name: "发现",
              time: "2021-02-01 01:00:00",
            },
            {
              color: "red",
              name: "推送",
              time: "2021-02-01 02:00:00",
            },
            {
              color: "blue",
              name: "接收",
              time: '2021-02-01 02:00:10',
              desc: null
            },
            {
              color: "green",
              name: "反馈",
              time: '2021-02-04 01:00:00',
              url: null,
              desc: null
            }
          ]
        },
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
    replycloseSa () {
      this.replyflag = false
    },
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
    height: vh(84.5) !important;
  }
  .fensa {
    background: #02072d;
    position: relative;

    .closeBtn {
      width: vw(26);
      height: vh(26);
      background: url('../../assets/image/two/close_2@3x.png') no-repeat;
      background-size: contain;
      cursor: pointer;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .fensa2 {
    .reply-dialog {
      width: vw(896);
      height: vw(730);
      background: url('../../assets/image/two/bj_big@3x.png');
      background-size: 100% 100%;
      position: relative;
      //标题
      .dialog-title {
        width: 100%;
        height: vw(44);
        line-height: vw(44);
        padding-left: vw(65);
        font-size: vw(24);
        position: relative;
        color: #fff;
        .replycloseBtn {
          position: absolute;
          right: vw(6);
          top: vw(6);
          width: vw(26);
          height: vw(26);
          background: url('../../assets/image/two/close@3x.png') no-repeat;
          background-size: contain;
          cursor: pointer;
        }
      }
      //中间的焦点图
      .dialog-banner {
        width: vw(456);
        height: vw(335);
        margin: vw(20) auto;
      }
      .dialog-banner1 {
        background: url('../../assets/image/two/liuc1@3x.png') no-repeat;
        background-size: 100% 100%;
      }
      .dialog-banner2 {
        background: url('../../assets/image/two/liuc2@3x.png') no-repeat;
        background-size: 100% 100%;
      }
      .dialog-banner3 {
        background: url('../../assets/image/two/liuc3@3x.png') no-repeat;
        background-size: 100% 100%;
      }
      .dialog-banner4 {
        background: url('../../assets/image/two/liuc4@3x.png') no-repeat;
        background-size: 100% 100%;
      }
      .dialog-banner5 {
        background: url('../../assets/image/two/zt1@3x.png') no-repeat;
        background-size: 100% 100%;
      }
      .dialog-banner6 {
        background: url('../../assets/image/two/zt2@3x.png') no-repeat;
        background-size: 100% 100%;
      }
      .dialog-banner7 {
        background: url('../../assets/image/two/zt3@3x.png') no-repeat;
        background-size: 100% 100%;
      }
      .dialog-banner8 {
        background: url('../../assets/image/two/zt4@3x.png') no-repeat;
        background-size: 100% 100%;
      }
      //列表
      .dialog-main {
        color: #fff;
        font-size: vw(19);

        .rightsa {
          display: flex;
          justify-content: flex-start;
          .leftsa {
            width: vw(112);
            height: 100%;
          }
          .saul {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            padding: vw(15);
            position: relative;
            flex: 1;
            // min-height: vw(300);
            .lineprocess {
              position: absolute;
              top: 0;
              left: vw(22);
              width: vw(17);
              height: 100%;
              background: url('../../assets/image/two/down@3x.png') no-repeat;
              background-size: 100% 100%;
            }
            .sali {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: vw(20);
              position: relative;
              z-index: 12;

              .chakantupi {
                position: absolute;
                top: 50%;
                left: vw(-60);
                width: vw(104);
                height: vw(32);
                background: url('../../assets/image/two/bj_7_2@3x.png')
                  no-repeat;
                background-size: 100% 100%;
                text-align: center;
                line-height: vw(32);
                margin-right: vw(8);
                transform: translate(-50%, -50%);
              }
              .div-standout {
                width: vw(122);
                height: vw(33);
                background: url('../../assets/image/two/img_blue@3x.png')
                  no-repeat;
                background-size: 100% 100%;
                text-indent: vw(60);
                line-height: vw(33);
                color: #019eff;
                margin-right: vw(8);
                font-weight: bold;
              }
              .div-standoutactive {
                background: url('../../assets/image/two/img_yellow@3x.png')
                  no-repeat;
                background-size: 100% 100%;
                color: #ffd25e;
              }
              .span-standout {
                flex: 1;
                line-height: vw(26);
              }
            }
          }
        }
      }
    }
    .reply-dialog ::-webkit-scrollbar {
      width: 8px;
      height: 116px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    .reply-dialog ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(71, 195, 191, 0.3);
      border-radius: 10px;
      background-color: #f5f5f5;
    }

    /*定义滑块 内阴影+圆角*/
    .reply-dialog ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(134, 213, 218, 0.3);
      background-color: rgb(36, 17, 94);
    }
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
      overflow: hidden;
      cursor: pointer;
      #swiper1 {
        flex: 1;
        width: 100%;
        height: vh(168);
        overflow: hidden;
        .swiper-slide {
          width: 100%;
          height: vh(84.5);
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
              height: vh(84.5);
              line-height: vh(84.5);
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
              height: vh(84.5);
              box-sizing: border-box;
              padding: 0 vw(50);
              border-right: 1px solid #1436ab;
            }
          }
        }
      }
    }
  }
}
</style>
