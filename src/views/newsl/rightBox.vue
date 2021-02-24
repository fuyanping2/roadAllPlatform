<template>
  <div class="right-boxsa">
    <div class="transport all-rl">
      <div class="tit"><span>停车</span></div>
    </div>
    <div class="repaire all-rl">
      <div class="tit"><span>停车</span></div>
    </div>
    <div class="route all-rl">
      <div class="tit"><span>停车</span></div>
    </div>
  </div>
</template>

<script>
import countup from './scrolltime';
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
.right-boxsa {
  width: 100%;
  height: 100%;
  font-family: Microsoft YaHei;
  font-weight: 400;
  .all-rl {
    border: 1px solid rgba(55, 85, 218, 0.3);
    .tit {
      height: vh(44);
      background: linear-gradient(92deg, #01b4ff, #0825b7);
      opacity: 0.59;
      font-size: vh(24);
      text-align: right;
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
        padding-right: vw(20);
      }
    }
  }
  .transport {
    height: vh(260);
    margin-bottom: vh(20);
  }
  .repaire {
    height: vh(282);
    margin-bottom: vh(20);
  }
  .route {
    height: vh(380);
  }
}
</style>
