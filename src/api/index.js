import * as http from '@/libs/http'
export default {
  // 公交场站分类统计
  getclassifycountCzStation (params = {}) {
    return http.urlParams('get', '/classify/countCzStation')
  },
  // 公交线路分类统计
  getclassifycountRoute (params = {}) {
    return http.urlParams('get', '/classify/countRoute')
  },
  // 公交站点分类统计
  getclassifycountSite (params = {}) {
    return http.urlParams('get', '/classify/countSite')
  },
  // 场站个数
  getczStaioncount (params = {}) {
    return http.urlParams('get', '/czStaion/count')
  },
  // 场站列表
  getczStaionlist (params = {}) {
    return http.urlParams('get', '/czStaion/list')
  },
  // 基本站点个数
  getbaseSitecount (params = {}) {
    return http.urlParams('get', '/baseSite/count')
  },
  // 基本站点列表
  getbaseSitelist (params = {}) {
    return http.urlParams('get', '/baseSite/list')
  },
  // 基本站点编码列表
  geteBaseSitecountSite () {
    return http.urlParams('get', '/baseSite/countSite')
  },
  // 基本站点列表
  geteBaseSitelistSite () {
    return http.urlParams('get', '/baseSite/list')
  },
  // 站点编码查询
  geteBaseSitequerySite (params = {}) {
    return http.urlParams('get', '/baseSite/querySite', params)
  },
  // 基本线路条数
  getbaseRoutecount (params = {}) {
    return http.urlParams('get', '/baseRoute/count')
  },
  // 公交首末站点个数
  getstartOrEndStationcount (params = {}) {
    return http.urlParams('get', '/startOrEndStation/count')
  },
  // 公交首末站点列表
  getstartOrEndStationlist (params = {}) {
    return http.urlParams('get', '/startOrEndStation/list')
  },
  // 电子站牌设备分类
  geteSituationcountDevice (params = {}) {
    return http.urlParams('get', '/eSituation/countDevice')
  },
  // 电子站牌设备状态
  geteSituationcountDeviceStatus (params = {}) {
    return http.urlParams('get', '/eSituation/countDeviceStatus')
  },
  // 市电型亭牌合一通电情况
  geteSituationcountSdDeviceStatus (params = {}) {
    return http.urlParams('get', '/eSituation/countSdDeviceStatus')
  },
  // 电子站牌服务情况
  geteSituationcountService (params = {}) {
    return http.urlParams('get', '/eSituation/countService')
  },
  // 在线率趋势
  geteSituationstatusTrend (params = {}) {
    return http.urlParams('get', '/eSituation/statusTrend')
  },
  // 电子站牌养护情况
  getmaintainlist (params = {}) {
    return http.urlParams('get', '/maintain/list')
  },
  // 基本设备的个数
  geteBaseSitecountDevice (params = {}) {
    return http.urlParams('get', '/eBaseSite/countDevice')
  },
  // 设备站点列表
  geteBaseSitelist (params = {}) {
    return http.urlParams('get', '/eBaseSite/list', params)
  },
  // 三林边界经纬度
  getbaseTown () {
    return http.urlParams('get', '/town/baseTown')
  },
  // 边界经纬度
  getdmStreet () {
    return http.urlParams('get', '/town/dmStreet')
  },

}
