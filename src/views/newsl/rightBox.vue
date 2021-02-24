<template>
  <div class="right-boxsa">
    <div class="transport all-rl">
      <div class="tit">
        <span>货运</span>
         <div>
          <img
             @click="toSearchProduct(4)"
            class="btnid"
            style="cursor:pointer;margin-right:10px"
            src="../../assets/image/icon_0_1@3x.png"
            alt
          />
          <img
            class="btnid"
            @click="tothree(1)"
            style="cursor:pointer"
            src="../../assets/image/next_page_nor@3x.png"
            alt
          />
        </div>
      </div>
      <div class="content">
        <div class="t-top">
          <div class="top-l">
            <span class="title">货运车辆</span>
            <div class="num">43070<span>辆</span></div>
          </div>
          <div class="top-r">
            <span class="title">危运企业</span>
            <div class="num">54<span>辆</span></div>
          </div>
        </div>
        <div class="line-tb"></div>
        <div class="line-tb1"></div>
        <div class="t-bottom">
          <div class="bottom-l">
            <span class="title">普运企业</span>
            <div class="num">4081<span>辆</span></div>
          </div>
          <div class="bottom-r">
            <span class="title">发现事件</span>
            <div class="num orange">8<span>起</span></div>
          </div>
        </div>
      </div>
      <lr-arrow></lr-arrow>
    </div>
    <div class="repaire all-rl">
      <div class="tit">
        <span>汽修</span>
         <div>
          <img
              @click="toSearchProduct(5)"
            class="btnid"
            style="cursor:pointer;margin-right:10px"
            src="../../assets/image/icon_0_1@3x.png"
            alt
          />
          <img
          @click="tothree(2)"
            style="cursor:pointer"
            src="../../assets/image/next_page_nor@3x.png"
            alt
          />
        </div>
      </div>
      <div class="content">
        <div class="r-top">
          <div class="title">发现事件</div>
          <div class="num">43070<span>辆</span></div>
        </div>
        <lr-common></lr-common>
        <div class="r-bottom">
          <div class="title">年度综合维修总量</div>
          <div class="num-list">
            <div class="num">
              <span>2</span>
              <span>5</span>
              <span>8</span>
              <span>2</span>
              <span>4</span>
              <span>1</span>
            </div>
            <span class="subtit">辆次</span>
          </div>
        </div>
      </div>
      <lr-arrow></lr-arrow>
    </div>
    <div class="route all-rl">
      <div class="tit">
        <span>道路</span>
        <div>
          <img
            @click="toSearchProduct(6)"
            class="btnid"
            style="cursor:pointer;margin-right:10px"
            src="../../assets/image/icon_0_1@3x.png"
            alt
          />
          <img
            class="btnid"
            @click="tothree(3)"
            style="cursor:pointer"
            src="../../assets/image/next_page_nor@3x.png"
            alt
          />
        </div>
      </div>
      <div class="content">
        <div class="r-top">
          <div class="title">发现事件</div>
          <div class="num">7<span>辆</span></div>
        </div>
        <lr-common></lr-common>
        <div class="r-bottom">
          <div class="route-list">
            <div class="item" v-for="(item, index) in routeList" :key="index">
              <div class="title">{{ item.name }}</div>
              <div class="rate">{{ item.rate }}%</div>
              <div class="process">
                <span
                  v-for="(items, indexs) in item.process"
                  :key="indexs"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <lr-arrow></lr-arrow>
    </div>
  </div>
</template>

<script>
import countup from './scrolltime';
import lrCommon from '../../components/lrCommon'
import lrArrow from '../../components/lrArrow'
export default {
  components: {
    lrCommon,
    lrArrow
  },
  name: "rightBox",
  data () {
    return {
      routeList: [
        {
          name: '道路完好率',
          rate: '99.99',
        }, {
          name: '道路保洁率',
          rate: '100',
        }, {
          name: '桥梁巡检率',
          rate: '100',
        }, {
          name: '桥梁完损率',
          rate: '99.89',
        },
      ]
    }
  },
  mounted () {
    this.routeList.forEach((item, index) => {
      if (parseFloat(item.rate) >= 100) {
        this.$set(this.routeList[index], 'process', 10)
      } else if (parseFloat(item.rate) <= 10) {
        this.$set(this.routeList[index], 'process', 1)
      } else if (parseFloat(item.rate) > 10 || parseFloat(item.rate) < 100) {
        this.$set(this.routeList[index], 'process', parseFloat(item.rate.split('')[0]))
      }
    })
    console.log(this.routeList)
  },
  created () {
  },
  methods: {
    toSearchProduct (val) {
      this.$emit('parentEvent',val)
    },
    tothree(val){
       switch (val) {
        case 1:
          window.open('http://140.207.49.34:8888/')
          break;
        case 2:
           window.open('http://180.167.126.120:81/newVehiclerepair/#/fourRevision')
          break;
        case 3:
          window.open('http://106.14.198.128:18181/viewsharebike/#/')
          break;
     
        default:
      }
    }
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
      box-shadow: 0px 0px vh(16) 0 rgba(2, 36, 108, 1) inset;
    box-sizing: border-box;
    .tit {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: vh(44);
      background: linear-gradient(  92deg,
        rgba(8, 37, 183, 0.59),
        RGBA(7, 50, 132, 1),
        rgba(1, 17, 73, 1));
      font-size: vh(24);
      padding: 0 vw(20);
      span {
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
      }
      img {
        width: vw(22);
        height: vh(28);
      }
    }
    &.transport {
      display: flex;
      flex-direction: column;
      position: relative;
      height: vh(260);
      margin-bottom: vh(20);
      .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-content: space-around;
        justify-content: space-around;
        position: relative;
        .t-top,
        .t-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .title {
            display: block;
            font-size: vw(18);
            text-align: center;
            color: #fefefe;
          }
          .num {
            font-size: vw(40);
            font-family: DIN;
            font-weight: bold;
            color: #20fdfa;
            margin-top: vh(20);
            text-align: center;
            span {
              font-size: vw(18);
              font-weight: bold;
              color: #1ee9e8;
              padding-left: vw(10);
            }
            &.orange {
              color: #ff9000;
              span {
                color: #ff9000;
              }
            }
          }
        }

        .top-l,
        .top-r,
        .bottom-l,
        .bottom-r {
          width: 49.5%;
        }

        .t-top {
        }
        .line-tb {
          width: 90%;
          border: 1px solid #1c65fe;
          opacity: 0.37;
          margin: 0 auto;
        }
        .line-tb1 {
          position: absolute;
          top: 5%;
          bottom: 5%;
          left: 49%;
          border: 1px solid #1c65fe;
          opacity: 0.37;
        }
        .t-bottom {
        }
      }
    }
    &.repaire {
      display: flex;
      flex-direction: column;
      position: relative;
      height: vh(282);
      margin-bottom: vh(20);
      .content {
        flex: 1;
        .r-top {
          height: vh(75);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 vw(30);
          .title {
            font-size: vw(24);
            color: #b2d1ff;
          }
          .num {
            font-size: vw(40);
            font-family: DIN;
            font-weight: bold;
            color: #ff9000;
            span {
              font-size: vw(16);
              color: #ff9000;
              padding-left: vw(10);
            }
          }
        }
        .r-bottom {
          .title {
            font-size: vw(18);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #fefefe;
            margin-top: vh(25);
            padding: 0 vw(30);
          }
          .num-list {
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            padding: 0 vw(30);
            .num {
              display: flex;
              margin-top: vh(20);
              span {
                display: block;
                width: vw(43);
                height: vh(59);
                border: 1px solid #0276c5;
                font-size: vw(34);
                font-family: DIN;
                font-weight: bold;
                color: #00a4ff;
                opacity: 0.6;
                margin-right: vw(10);
                text-align: center;
                line-height: vh(59);
                background: rgba(2, 118, 197, 0.3);
              }
            }
            .subtit {
              font-size: vw(18);
              font-weight: bold;
              color: #00a4ff;
              padding-left: vw(5);
            }
          }
        }
      }
    }
    &.route {
      display: flex;
      flex-direction: column;
      position: relative;
      height: vh(380);
      .content {
        flex: 1;
        .r-top {
          height: vh(75);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 vw(30);
          .title {
            font-size: vw(24);
            color: #b2d1ff;
          }
          .num {
            font-size: vw(40);
            font-family: DIN;
            font-weight: bold;
            color: #ff9000;
            span {
              font-size: vw(16);
              color: #ff9000;
              padding-left: vw(10);
            }
          }
        }
        .r-bottom {
          flex: 1;
          width: 100%;
          .route-list {
            display: flex;
            flex-wrap: wrap;
            padding: vh(35) vw(10) vh(35);
            box-sizing: border-box;
            .item {
              position: relative;
              width: vw(212);
              height: vh(82);
              background: url('../../assets/image/two/box_2@3x.png');
              background-size: vw(212) vh(82);
              margin-bottom: vw(10);
              &:nth-child(odd) {
                margin-right: vw(13);
              }
              .title {
                position: absolute;
                top: vh(10);
                left: vw(5);
                font-size: vw(16);
                color: #b2d1ff;
              }
              .rate {
                position: absolute;
                top: vh(10);
                right: vw(10);
                font-size: vw(34);
                font-family: DIN;
                font-weight: bold;
                color: #e5efff;
              }
              .process {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                position: absolute;
                bottom: vh(10);
                left: 50%;
                width: vw(183);
                height: vh(12);
                margin-left: vw(-91.5);
                border: vh(1) solid #193968;
                span {
                  display: block;
                  width: vw(15);
                  height: vh(6);
                  background: #176ae7;
                  margin: 0 vw(1.5);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
