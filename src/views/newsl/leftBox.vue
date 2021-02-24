<template>
  <div class="left-box">
    <div class="parking all-rl">
      <div class="tit"><span>停车</span></div>
    </div>
    <div class="traffic all-rl">
      <div class="tit"><span>停车</span></div>
    </div>
    <div class="bike all-rl">
      <div class="tit"><span>停车</span></div>
    </div>
  </div>
</template>

<script>
import API from '../../api/index.js'
import countup from './scrolltime'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  created () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.left-box {
  width: 100%;
  height: 100%;
  font-family: Microsoft YaHei;
  font-weight: 400;
  .all-rl {
    border: 1px solid rgba(55, 85, 218, 0.3);
    .tit {
      height: vh(44);
      background: linear-gradient(92deg, #0825b7, #01b4ff);
      opacity: 0.59;
      font-size: vh(24);
      span {
        font-family: FZDaHei-B02S;
        font-weight: 400;
        color: #0096ff;
        line-height: vh(44);
        background: linear-gradient(
          92deg,
          #0072ff 0%,
          #00eaff 48.8525390625%,
          #01aaff 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding-left: vw(20);
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
