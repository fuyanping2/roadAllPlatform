
<template>
  <div class="third-revision">
    <div class="header-box">
      <div id="guang"></div>
      <div class="tit"></div>
    </div>
    <div class="main">
      <div class="leftMainbox">
        <left-box @parentEvent="toClick"></left-box>
      </div>
      <div class="map-box">
        <div class="map">
          <div class="map-head">
            <span>GIS</span>
          </div>
          <div ref="compreMap" class="compreRight" id="compreMap"></div>
          <lr-arrow></lr-arrow>
        </div>
        <table-box></table-box>
      </div>
      <div class="rightMainbox">
        <right-box @parentEvent="toClick"></right-box>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./myMap.js";
import resource from "./resource.js";
import leftBox from "./leftBox.vue";
import rightBox from "./rightBox.vue";
import tableBox from "./tableBox.vue";
import qxdata from "./qx.json";
import kydata from "./ky.json";
import dcdata from "./dc.json";
import lrArrow from "../../components/lrArrow";

let MyMap = null; // 地图实例
export default {
  components: {
    leftBox,
    rightBox,
    tableBox,
    lrArrow
  },

  data() {
    return {};
  },

  mounted() {
    MyMap = new Map({ el: "compreMap" });
  },
  created() {},
  methods: {
    toClick(msg) {
       MyMap.mapcle()
      switch (msg) {
        case 1:
          // this.initpoint()
          break;
        case 2:
           this.initpoint(kydata,msg)
          break;
        case 3:
           this.initpoint(dcdata,msg)
          break;
        case 4:
          //  this.initpoint(kydata,msg)
          break;
        case 5:
           this.initpoint(qxdata,msg)
          break;
        case 6:
          //  this.initpoint(kydata,msg)
          break;
        default:
      }
    },
    initpoint(data, icon) {
      console.log(data)
      data.forEach(iteam => {
        if(iteam.lng&&iteam.lat){
          MyMap.createPoint(iteam, icon);
        }
        
      });
      // MyMap.createPoint
    }
  }
};
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
.third-revision {
  width: 100%;
  height: 100%;
  background: url("../../assets/image/two/bj@3x.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  position: relative;
  overflow: hidden;
  font-family: Microsoft YaHei;
  font-weight: 400;
  .header-box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: vw(61);
    background: url("../../assets/image/two/img_top@3x.png") no-repeat;
    background-size: 100% 100%;
    font-size: vw(18);
    color: rgba(76, 177, 255, 1);
    overflow: hidden;
    margin-top: vw(7);

    .time {
      position: absolute;
      left: vw(36);
      top: vh(15);
      display: flex;
      align-items: center;
      .year {
      }
      .week {
        padding-left: vw(10);
      }
      .secend {
        padding-left: vw(15);
      }
      .nongli {
        padding-left: vw(15);
      }
    }
    .tit {
      width: vw(420);
      height: vh(33);
      font-size: vw(32);
      font-weight: bold;
      color: rgba(10, 183, 255, 1);
      text-align: center;
    }
    .weather {
      display: flex;
      position: absolute;
      right: vw(36);
      top: vh(15);
      .wea {
        padding-left: vw(15);
        img {
          width: vw(14);
          height: vh(12);
        }
      }
      .wea1 {
        padding-left: vw(15);
        padding-right: vw(15);
        width: vw(20);
        height: vh(20);
        display: flex;
        justify-content: center;
        align-items: center;
        .close-path {
          width: vw(20);
          height: vh(20);
        }
      }
    }
  }
  #guang {
    display: block;
    position: absolute;

    width: vw(300);
    height: 100%;
    top: 0;
    left: vw(550);
    overflow: hidden;
    transform: skewX(30deg);
    animation: Tada 15s 0s infinite;
    @keyframes Tada {
      0%,
      94% {
        left: vw(600);
        opacity: 0;
      }
      94.5% {
        left: vw(600);
        opacity: 1;
      }
      100% {
        left: vw(1000);
        display: none;
      }
    }
    background: -webkit-linear-gradient(
      left,
      rgba(4, 172, 178, 0) 0,
      rgba(4, 172, 178, 0.5) 50%,
      rgba(4, 172, 178, 0) 100%
    );
  }
  .main {
    position: relative;
    display: flex;
    justify-content: flex-start;
    padding: vh(28) vw(22) vh(22);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .leftMainbox {
      width: vw(460);
      height: 100%;
    }
    .map-box {
      flex: 1;
      height: 100%;
      margin: 0 vw(22) 0 vw(22);
      .map {
        position: relative;
        border: 1px solid rgba(55, 85, 218, 0.3);
        margin-bottom: vh(20);
        width: 100%;
        height: vh(676);
        .map-head {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: vh(42);
          line-height: vh(42);
          text-align: center;
          background: linear-gradient(
            92deg,
            rgba(8, 37, 183, 0.59),
            rgba(1, 180, 255, 0.59),
            rgba(1, 17, 73, 1)
          );
          z-index: 1;
          span {
            font-size: vw(24);
            font-weight: bold;
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
        }

        #compreMap {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: vh(676);
        }
      }
    }
    .rightMainbox {
      width: vw(460);
      font-family: Microsoft YaHei;
      font-weight: 400;
    }
  }
}
</style>
