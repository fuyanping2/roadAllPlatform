<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url("./assets/iconfont/iconfont.css");

html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  overflow: hidden;
  width: 100%;
  height: 100%;
  font-size: vw(16);
  font-family: "MicrosoftYaHei","Microsoft YaHei","Helvetica Neue", Helvetica, "PingFang SC",
    "Hiragino Sans GB", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1;
  user-select: none;
}
div {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
/* // 滚动条滑块的样式 */
body ::-webkit-scrollbar {
  width: 8px;
  height: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

/*定义滚动条轨道 内阴影+圆角*/
body ::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(71, 195, 191, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

/*定义滑块 内阴影+圆角*/
body ::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(134, 213, 218, 0.3);
  background-color: rgb(36, 17, 94);
}
.el-scrollbar__wrap {
  overflow: hidden !important;
  overflow-y: scroll !important;
}
.dot1,
.dot2,
.dot3,
.dot4 {
  width: vw(3);
  height: vw(3);
  background: rgba(0, 215, 255, 1);
  z-index: 1;
}
.dot1 {
  position: absolute;
  top: 0;
  left: 0;
}
.dot2 {
  position: absolute;
  top: 0;
  right: 0;
}
.dot3 {
  position: absolute;
  bottom: 0;
  right: 0;
}
.dot4 {
  position: absolute;
  bottom: 0;
  left: 0;
}

.dott1 {
  position: absolute;
  top: vh(-1);
  left: vw(-1);
}
.dott2 {
  position: absolute;
  top: vh(-1);
  right: vw(-1);
}
.dott3 {
  position: absolute;
  bottom: vh(-1);
  right: vw(-1);
}
.dott4 {
  position: absolute;
  bottom: vh(-1);
  left: vw(-1);
}
.amap-logo,
.amap-copyright {
  display: none !important;
}
</style>
