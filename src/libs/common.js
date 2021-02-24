import Bus from 'vue'
import screenfull from 'screenfull'
import moment from 'moment'
import echarts from 'echarts' // 引入echarts
// require('echarts/map/js/china.js')
// require('echarts-extension-amap')
moment.locale('zh-cn')
export default {
  install (Vue) {
    // 组件通讯
    Vue.prototype.$Bus = new Bus()
    // 时间插件
    Vue.prototype.$moment = moment
    // 生成从minNum到maxNum的随机数
    Vue.prototype.$randomNum = (Min, Max) => {
      const Range = Max - Min
      const Rand = Math.random()
      return Min + Math.round(Rand * Range)
    }
    /**
     *@method echarts
     */
    Vue.prototype.$echarts = echarts

    /**
     *@method 深拷贝
     *@param {Obj} 需要拷贝的 对象 数组
     *@return {Obj}
     */
    Vue.prototype.cloneObj = function (obj) {
      let _this = this
      let str
      let newobj = obj.constructor === Array ? [] : {}
      if (typeof obj !== 'object') {
        return
      } else if (window.JSON) {
        str = JSON.stringify(obj)
        newobj = JSON.parse(str)
      } else {
        for (var i in obj) {
          newobj[i] =
            typeof obj[i] === 'object' ? _this.cloneObj(obj[i]) : obj[i]
        }
      }
      return newobj
    }

    /**
     * @method 事件委托
     * @param {any} 数据
     * @return {any}
     */
    Vue.prototype.$eventDelegate = (
      parentSelector,
      targetSelector,
      events,
      foo
    ) => {
      // 触发执行的函数
      function triFunction (e) {
        // 兼容性处理
        const event = e

        // 获取到目标阶段指向的元素
        let target = event.target || event.srcElement

        // 获取到代理事件的函数
        const currentTarget = event.currentTarget

        // 处理 matches 的兼容性
        if (!Element.prototype.matches) {
          Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector
        }

        // 遍历外层并且匹配
        while (target !== currentTarget) {
          // 判断是否匹配到我们所需要的元素上
          if (target.matches(targetSelector)) {
            const sTarget = target
            // 执行绑定的函数，注意 this
            foo.call(sTarget, Array.prototype.slice.call(arguments))
          }

          target = target.parentNode
        }
      }

      // 如果有多个事件的话需要全部一一绑定事件
      events.split('.').forEach(evt => {
        // 多个父层元素的话也需要一一绑定
        Array.prototype.slice
          .call(document.querySelectorAll(parentSelector))
          .forEach($p => {
            $p.addEventListener(evt, triFunction)
          })
      })
    }
  }
}
window.document.onkeydown = function (e) {
  const keynum = window.event ? e.keyCode : e.which
  // 阻止浏览器全屏事件
  if (keynum === 122) {
    e.preventDefault()
    screenfull.toggle()
  }
}
