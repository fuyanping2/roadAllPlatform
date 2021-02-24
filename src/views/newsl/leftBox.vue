<template>
  <div class="left-box">
    <div class="parking all-rl">
      <div class="lb"></div>
      <div class="rb"></div>
      <div class="tit">
        <span class="btnid" @click="toSearchProduct(1)">停车</span>
        <div>
         
          <img
            @click="tothree(1)"
            class="btnid"
            style="cursor:pointer"
            src="../../assets/image/next_page_nor@3x.png"
            alt
          />
        </div>
      </div>
      <div class="center-box">
        <div class="num-box">
          <span class="font1">发现事件</span>
          <div>
            <span class="font2">5</span>
            <span class="font3">起</span>
          </div>
        </div>
        <div class="line-box">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line1"></div>
        </div>
      </div>
      <div class="dashboard-box">
        <div class="progress-circle">
          <svg viewBox="0 0 100 100">
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                <start offset="0%" style="stop-color:rgb(1, 180, 255);stop-opacity:1" />
                <stop offset="10%" style="stop-color:rgb(1, 180, 255);stop-opacity:1" />
                <stop offset="91%" style="stop-color:rgb(3, 54, 255);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgb(1, 180, 255);stop-opacity:1" />
              </linearGradient>
            </defs>
            <path
              d="
                M 50 50
                m 0 45
                a 45 45 0 1 1 0 -90
                a 45 45 0 1 1 0 90
                "
              stroke="#262795"
              stroke-width="10"
              fill="none"
              class="el-progress-circle__track"
              style="stroke-dasharray: 210px, 282.743px; stroke-dashoffset: -35.3429px;"
            />
            <path
              d="
                M 50 50
                m 0 45
                a 45 45 0 1 1 0 -90
                a 45 45 0 1 1 0 90
                "
              stroke="url(#grad1)"
              fill="none"
              stroke-linecap="butt"
              stroke-width="10"
              class="el-progress-circle__path"
              style="stroke-dasharray: 200px, 282.743px; stroke-dashoffset: -35.3429px; transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s;"
            />
          </svg>
          <div class="numfont">
            97.23
            <font style="font-family: DS-Digital;">%</font>
          </div>
          <div class="listnum">场库联网率</div>
        </div>
        <div class="progress-circle">
          <svg viewBox="0 0 100 100">
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" style="stop-color:rgb(1, 180, 255);stop-opacity:1" />
                <stop offset="10%" style="stop-color:rgb(1, 180, 255);stop-opacity:1" />
                <stop offset="90%" style="stop-color:rgb(3, 54, 255);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgb(1, 180, 255);stop-opacity:1" />
              </linearGradient>
            </defs>
            <path
              d="
                M 50 50
                m 0 45
                a 45 45 0 1 1 0 -90
                a 45 45 0 1 1 0 90
                "
              stroke="#262795"
              stroke-width="10"
              fill="none"
              class="el-progress-circle__track"
              style="stroke-dasharray: 210px, 282.743px; stroke-dashoffset: -35.3429px;"
            />
            <path
              d="
                M 50 50
                m 0 45
                a 45 45 0 1 1 0 -90
                a 45 45 0 1 1 0 90
                "
              stroke="url(#grad1)"
              fill="none"
              stroke-linecap="butt"
              stroke-width="10"
              class="el-progress-circle__path"
              style="stroke-dasharray: 60px, 282.743px; stroke-dashoffset: -35.3429px; transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s;"
            />
          </svg>
          <div class="numfont">37%</div>
          <div class="listnum">泊位占有率</div>
        </div>
      </div>
    </div>
    <div class="traffic all-rl">
      <div class="lb"></div>
      <div class="rb"></div>
      <div class="tit">
        <span class="btnid" style="cursor:pointer" @click="toSearchProduct(2)">客运</span>
        <div>
          <img
          @click="tothree(2)"
            class="btnid"
            style="cursor:pointer"
            src="../../assets/image/next_page_nor@3x.png"
            alt
          />
        </div>
      </div>
      <div class="center-box">
        <div class="num-box">
          <span class="font1">发现事件</span>
          <div>
            <span class="font2">5</span>
            <span class="font3">起</span>
          </div>
        </div>
        <div class="line-box">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line1"></div>
        </div>
      </div>
      <div
        style="display:flex; justify-content: space-between;box-sizing:border-box;padding:28px 18px;padding-bottom:24px"
      >
        <div class="transport-box">
          <img src="../../assets/image/icon-1@3x.png" alt />
          <div class="right-num">
            <span class="font1">公交线路</span>
            <div class="minri">
              <span class="font2">339</span>
              <span class="font3">条</span>
            </div>
          </div>
        </div>
        <div class="transport-box">
          <img src="../../assets/image/icon-2@3x.png" alt />
          <div class="right-num">
            <span class="font1">运营里程</span>
            <div class="minri">
              <span class="font2">2360</span>
              <span class="font3">万千米</span>
            </div>
          </div>
        </div>
      </div>
      <div
        style="display:flex; justify-content: space-between;box-sizing:border-box;padding:0 18px;padding-bottom:0"
      >
        <div class="transport-box">
          <img src="../../assets/image/icon-3@3x.png" alt />
          <div class="right-num">
            <span class="font1">全日班次执行率</span>
            <div class="minri">
              <span class="font2">99</span>
              <span class="font3">%</span>
            </div>
          </div>
        </div>
        <div class="transport-box">
          <img src="../../assets/image/icon-4@3x.png" alt />
          <div class="right-num">
            <span class="font1">客运量</span>
            <div class="minri">
              <span class="font2">3167</span>
              <span class="font3">万人次</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bike all-rl">
      <div class="lb"></div>
      <div class="rb"></div>
      <div class="tit">
        <span class="btnid" style="cursor:pointer" @click="toSearchProduct(3)">单车</span>
        <div>
         
          <img
            class="btnid"
            @click="tothree(3)"
            style="cursor:pointer"
            src="../../assets/image/next_page_nor@3x.png"
            alt
          />
        </div>
      </div>
      <div
        style="display:flex; justify-content: space-between;box-sizing:border-box;padding:20px 18px"
      >
        <div class="transport-box transport-box1">
          <div class="right-num">
            <span class="font1">活跃率</span>
            <div class="minri">
              <span class="font4">69.17%</span>
              <span class="font3"></span>
            </div>
          </div>
        </div>
        <div class="transport-box transport-box1">
          <div class="right-num">
            <span class="font1">发现事件</span>
            <div
              class="minri"
              style="display:flex; justify-content: space-between;box-sizing:border-box;padding-right:18px"
            >
              <span class="font4" style="color:#FF9000">3</span>
              <span class="font3" style="color:#FF9000">起</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../../api/index.js";
import countup from "./scrolltime";

export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  created() {},
  methods: {
    toSearchProduct(val) {
      this.$emit("parentEvent", val);
    },
    tothree(val){
       switch (val) {
        case 1:
          window.open('http://10.1.30.211:18889/parkingView/#/')
          break;
        case 2:
           window.open('http://219.233.18.234/busVisual/#/twoBus')
          break;
        case 3:
          window.open('http://106.14.198.128:18181/viewsharebike/#/')
          break;
     
        default:
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.left-box {
  width: 100%;
  height: 100%;
  font-family: Microsoft YaHei;
  font-weight: 400;
  .all-rl {
    border: 1px solid rgba(55, 85, 218, 0.3);
    box-shadow: 0px 0px vh(16) 0 rgba(2, 36, 108, 1) inset;
    position: relative;
    .lb,
    .rb {
      position: absolute;
      width: vw(30);
      height: vw(30);
    }
    .lb {
      left: 0;
      bottom: 0;
      border-left: 2px solid #036cb9;
      border-bottom: 2px solid #036cb9;
    }
    .rb {
      right: 0;
      bottom: 0;
      border-right: 2px solid #036cb9;
      border-bottom: 2px solid #036cb9;
    }
    .tit {
      height: vh(44);
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding-right: vw(20);
      background: linear-gradient(
        92deg,
        rgba(8, 37, 183, 0.59),
        RGBA(7, 50, 132, 1),
        rgba(1, 17, 73, 1)
      );
      font-size: vh(24);
      span {
        // width: vw(47);
        // height: vh(23);
        display: inline-block;
        font-family: FZDaHei-B02S;
        font-weight: 800;
        color: #0096ff;
        line-height: vh(44);
        background: linear-gradient(
          92deg,
          #0072ff 4%,
          #2ce6f7 48%,
          #01aaff 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding-left: vw(20);
        //  text-shadow: 0 0 1px #00eaff,
      }
    }
    .center-box {
      .num-box {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        align-items: center;
        padding: vh(24) vw(26);
        .font1 {
          font-size: vh(24);
          color: #b2d1ff;
        }
        .font2 {
          font-size: vh(40);
          color: #ff9000;
        }
        .font3 {
          font-size: vh(16);
          color: #ff9000;
        }
      }
      .line-box {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        align-items: center;
        padding: 0 vw(24);
        .line1 {
          width: vw(10);
          height: vw(3);
          background: #4f93fc;
          border-radius: vw(1);
        }
        .line2 {
          width: vw(400);
          height: 1px;
          background: rgba(15, 67, 155, 0.8);
          margin: 0 vw(6);
        }
      }
    }
    .transport-box {
      display: flex;
      align-items: center;
      .right-num {
        display: flex;
        flex-direction: column;
        margin-left: vw(4);
        .minri {
          margin-top: vh(10);
        }
        .font1 {
          font-size: vh(18);
          color: #fefefe;
        }
        .font2 {
          font-size: vh(34);
          color: #20fdfa;
        }
        .font3 {
          color: #20fdfa;
        }
        .font4 {
          font-size: vh(28);
          color: #00faa8;
          font-family: RuixianTopHeiBoldGB1.0;
        }
      }
    }
    .transport-box1 {
      width: vw(205);
      height: vh(97);
      background: url("../../assets/image/box_1@3x.png");
      background-size: 100% 100%;
      justify-content: flex-start;
      box-sizing: border-box;
      padding-left: vw(24);
      .right-num {
        flex: 1;
      }
    }
    .dashboard-box {
      display: flex;
      justify-content: space-between;
      box-lines: border-box;
      padding: vh(26) vw(40);
      .progress-circle {
        width: vw(155);
        height: vw(137);
        position: relative;
        .numfont {
          position: relative;
          text-align: center;
          left: vw(3);
          top: -100%;
          font-size: vh(36);
          font-family: DS-Digital-Bold;
          font-weight: bold;
          margin-top: vh(40);
          background: linear-gradient(
            238deg,
            rgba(3, 199, 249, 0.77) 0%,
            rgba(52, 255, 212, 0.77) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .listnum {
          position: absolute;
          left: vw(29);
          bottom: vh(-16);
          width: vw(100);
          height: vh(32);
          box-shadow: 0 0 vh(20) 0 #0a10a2 inset;
          background: rgba(8, 9, 126, 0.49);
          border: 1px solid #1b1fff;
          border-radius: vw(14);
          color: #00caff;
          text-align: center;
          font-size: vh(18);
          line-height: vh(32);
        }
        .el-progress-circle__path {
        }
      }
    }
  }
  .parking {
    height: vh(360);
    margin-bottom: vh(20);
  }
  .traffic {
    height: vh(364);
    margin-bottom: vh(20);
  }
  .bike {
    height: vh(200);
  }
}
</style>
