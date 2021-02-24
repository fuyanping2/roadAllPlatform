import API from '../../api/index'
export default class Map {
  constructor(data) {
    Object.assign(this, this.data(data))
    this.mounted()
  }

  // 数据
  data (data) {
    return {
      el: data.el, // 地图容器
      pointGroup: new AMap.OverlayGroup(), // 市点集合
      boundarys: {}, // 边界
      map: null, // 地图实例
      viewMode: '3D',
      mapCenter: [121.50441089920331, 31.139083237482964], // 默认地图中心点
      all3dmap: [],
      textsa: '',
      textsaarr: [],
      // 图层类型 0标准图层 1卫星图层 , new AMap.TileLayer.RoadNet()
      mapLayers: [[new AMap.TileLayer()], [new AMap.TileLayer.Satellite()]],
      // 自定义地图 0 标准 1 自定义
      mapStyle: [
        'amap://styles/normal',
        'amap://styles/d67717253a691e523956e9482ca38f1e'
      ],
      infoWindow: null,
    }
  }

  // 方法调用
  mounted () {
    this.initMap()
    this.initInfoWindow()
  }

  // 初始化地图
  initMap () {
    this.map = new AMap.Map(this.el, {
      rotateEnable: false,
      pitchEnable: false,
      pitch: 50,
      // rotation: 45,
      skyColor: '#004177',
      // viewMode: '3D', // 开启3D视图,默认为关闭
      mapStyle: this.mapStyle[1], // 自定义地图样式
      zoom: 12, // 地图级别
      defaultCursor: 'pointer',

      zooms: [8, 20],
      center: this.mapCenter, // 中心点
      resizeEnable: true, // 监控地图容器尺寸变化
      layers: this.mapLayers[0], // 图层
      expandZoomRange: true // 是否支持可以扩展最大缩放级别 到20级
    })
    this.map.add(this.pointGroup) //市点集合
  }
  // 初始化信息窗口
  initInfoWindow () {
    this.infoWindow = new AMap.InfoWindow({
      isCustom: true,
      autoMove: true,
      anchor: 'top-right',
      offset: new AMap.Pixel(-4, -16)
    })
  }
  // 关闭信息窗口
  closeInfoWindow (callback) {
    this.infoWindow.close()
    callback && callback()
  }
  // 添加点集合
  addPointGroup (overlays) {
    this.pointGroup.addOverlays(overlays)
    this.map.add(this.pointGroup)
  }

  // 移除点集合
  removePointGroup () {
    this.pointGroup.clearOverlays()
  }
  mapcle(){
    this.map.clearMap()
  }

  // 创建点标记
  createPoint (row,num) {
    // console.log(row,'创建类别点标记')
    let icon=num==1?require("../../assets/image/tc.png"):num==2?require("../../assets/image/ky.png"):num==3?require("../../assets/image/dc.png")
    :num==4?require("../../assets/image/hy.png"):num==5?require("../../assets/image/qx.png"):num==6?require("../../assets/image/dl.png"):'';
    let point = new AMap.Marker({
      position: new AMap.LngLat(row.lng, row.lat),
      offset: new AMap.Pixel(-14, -16),
      icon: new AMap.Icon({
        size: new AMap.Size(26, 32),
        image: icon,
        imageSize: new AMap.Size(26, 32)
      }), // 添加 Icon 图标 URL
      map:this.map,
      extData: {row }
    })

    point.on('click', e => {
      let str = e.target.Ce.extData.row
      // if (curName != '公交场站分布') {
      //   this.createInfoWindow(str, curName)
      // } else {
      //   this.createInfoWindow1(str)
      // }
    })

    this.map.add(point)
  }

  // 打开信息窗口
  createInfoWindow (row, curName) {
    this.infoWindow.setContent(this.setContentType(row, curName))
    this.infoWindow.open(this.map, new AMap.LngLat(row.lon, row.lat))
  }
  // 打开信息窗口
  createInfoWindow1 (row) {
    this.infoWindow.setContent(this.setContentType1(row))
    this.infoWindow.open(this.map, new AMap.LngLat(row.lon, row.lat))
  }
  setContentType (row, curName) {
    if (curName == '电子站牌点位分布') {
      return `
          <div class="info-win">
            <div class="win-triangle"></div>
            <div class="closeBtn"></div>
            <div class="info-box">
              <div class="info-content">
                <div class="info-list"> 站点名称：${row.name || '--'}</div>
                <div class="info-list"> 路名：${row.road_name || '--'}</div>
                <div class="info-list"> 地址：${row.address ||
        '--'}</div>
                <div class="info-list"> 环域：${row.area || '--'}</div>
                <div class="info-list"> 区属：${row.district || '--'}</div>
                <div class="info-list"> 片区：${row.zone || '--'}</div>
                <div class="info-list"> 车向：${row.region || '--'}</div>
              </div>
            </div>
          </div>
      `
    } 

  }
  setContentType1 (row) {
    return `
        <div class="info-win">
          <div class="win-triangle"></div>
          <div class="closeBtn"></div>
          <div class="info-box">
            <div class="info-content">
              <div class="info-list"> 停保场名称：${row.park_name || '--'}</div>
              <div class="info-list"> 地址：${row.park_address || '--'}</div>
              <div class="info-list"> 占地面积：${row.park_area ||
      '--'}</div>
              <div class="info-list"> 建筑面积：${row.construction_area || '--'}</div>
              <div class="info-list"> 运管单位：${row.pipe_unit_name || '--'}</div>
              <div class="info-list"> 产权归属：${row.ownership_rights_unit_name || '--'}</div>
              <div class="info-list"> 使用单位：${row.use_unit_name || '--'}</div>
              <div class="info-list"> 物业公司：${row.property_company_name || '--'}</div>
              <div class="info-list"> 场站分类：${row.park_type_code || '--'}</div>
              <div class="info-list"> 停放车辆数：${row.park_num || '--'}</div>
              <div class="info-list"> 街镇：${row.town || '--'}</div>
            </div>
          </div>
        </div>

    `
  }
  // 三林边界划线
  setPolygon (data) {
    var polygon = new AMap.Polygon({
      path: data,
      fillColor: 'rgba(255,255,255,0)', // 多边形填充颜色
      borderWeight: 2, // 线条宽度，默认为 1
      strokeColor: '#00ff66', // 线条颜色
    });

    this.map.add(polygon);
  }
  // 边界划线
  setPolygonStreet (data) {
    var polygon = new AMap.Polygon({
      path: data,
      fillColor: 'rgba(255,255,255,0)', // 多边形填充颜色
      borderWeight: 4, // 线条宽度，默认为 1
      strokeColor: '#0ab7ff', // 线条颜色
    });

    this.map.add(polygon);
  }
}
