
<template>
  <div class="table-box">
    <div class="head">
      <div class="title">事件处理</div>
      <div class="tab-list">
        <span class="item" v-for="(item, index) in tabList" :key="index">
          {{ item }}
        </span>
      </div>
    </div>
    <div class="table">
      <div class="t-head">
        <div class="tr">
          <div class="th">企业名称</div>
          <div class="th th1">派单事项</div>
          <div class="th th2">所属街道</div>
          <div class="th th3">接收部门</div>
          <div class="th th4">处理状态</div>
        </div>
      </div>
      <div class="t-body">
        <div class="tr">
          <div class="td">企业名称</div>
          <div class="td td1">派单事项</div>
          <div class="td td2">所属街道</div>
          <div class="td td3">接收部门</div>
          <div class="td td4">处理状态</div>
        </div>
      </div>
    </div>
    <lr-arrow></lr-arrow>
  </div>
</template>

<script>
import lrArrow from '../../components/lrArrow'
export default {
  components: {
    lrArrow,
  },

  data () {
    return {
      tabList: ['停车', '客运', '单车', '货运', '汽修', '道路']
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
<style lang="scss">
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
    background: linear-gradient(92deg, #0825b7, #01b4ff);
    opacity: 0.59;
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
        background: rgba(23, 106, 231, 0.3);
        border: 1px solid #176ae7;
        border-radius: 4px;
        font-size: vw(16);
        color: #ffffff;
        margin-left: vw(5);
      }
    }
  }
  .table {
    flex: 1;
    .t-head {
      height: vh(39);
      border-bottom: 1px solid #1436ab;
      .tr {
        height: 100%;
        display: flex;
        .th {
          width: 12%;
          font-size: vw(16);
          font-weight: bold;
          color: #b2d1ff;
          text-align: center;
          border-right: 1px solid #1436ab;
          line-height: vh(39);
          &.th1 {
          }
          &.th2 {
          }
          &.th3 {
          }
          &.th4 {
            border-right: none;
          }
        }
      }
    }
    .t-body {
      .tr {
        display: flex;
        border-bottom: 1px solid #1436ab;
        .td {
          width: 12%;
          font-size: vw(18);
          color: #45aeff;
          line-height: vh(24);
          text-align: center;
          border-right: 1px solid #1436ab;
          &.td1 {
          }
          &.td2 {
          }
          &.td3 {
          }
          &.td4 {
            border-right: none;
          }
        }
      }
    }
  }
}
</style>
