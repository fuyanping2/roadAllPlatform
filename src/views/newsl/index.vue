
<template>
  <div class="third-revision">
    <div class="header-box">
      <div id="guang"></div>
      <div class="tit">道路运输综合监管平台</div>
    </div>
    <div class="main">
      <div class="leftMainbox">
        <left-box></left-box>
      </div>
      <div class="map-box">
        <div ref="compreMap" class="compreRight" id="compreMap"></div>
      </div>
      <div class="rightMainbox">
        <right-box></right-box>
      </div>
    </div>
  </div>
</template>

<script>
import Map from './myMap.js';
import resource from "./resource.js";
import leftBox from './leftBox.vue'
import rightBox from './rightBox.vue'

let MyMap = null // 地图实例
export default {
  components: {
    leftBox,
    rightBox,
  },

  data () {
    return {

    }
  },

  mounted () {
    MyMap = new Map({ el: "compreMap" });
  },
  created () {
  },
  methods: {

  }
}
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
.third-revision {
  width: 100%;
  height: 100%;
  background: url('../../assets/image/two/bj@3x.png');
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
    height: vh(90);
    background: url('../../assets/image/two/img_top@3x.png') no-repeat;
    background-size: 100% vh(90);
    font-size: vw(18);
    color: rgba(76, 177, 255, 1);
    overflow: hidden;

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
      #compreMap {
        width: 100%;
        height: 100%;
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
