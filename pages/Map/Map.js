var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var tabIndex = 1;


Page({
  data: {
    tabIndex: 1,
    currentLon: '',
    currentLat: '',
    markers: [],
  },

  changeTab: function (e) {
    var id = e.currentTarget.id;
    var that = this;
    if (id == 'indexA') {
      tabIndex = 1;
      this.setData({
        tabIndex: 1
      });
    }
    if (id == 'indexB') {
      tabIndex = 2;
      this.setData({
        tabIndex: 2,
      });
    }
    if (id == 'indexC') {
      tabIndex = 3;
      this.setData({
        tabIndex: 3,
      });
    }
  },

  onLoad: function (res) {
    var that = this;
    this.getCurrentLocation();
  },

  getCurrentLocation: function () {
    var that = this;
    wx.getLocation({
      type: 'gcj02',  //用wgs84方式会有一定的偏差
      success: function (res) {
        var latitude = res.latitude;  //经度
        var longitude = res.longitude;  //维度
        console.log('location', res);
        that.setData({
          currentLat: latitude,
          currentLon: longitude,
          //markers: [{ latitude: latitude, longitude: longitude, icoPath: '' }]
        });
        that.configMap();
      },
    })
  },
  configMap: function () {
    var that = this;
    var qqmapsdk = new QQMapWX({
      key: 'OLIBZ-TG2W3-I7Q3I-3FGKQ-I5NJK-RJFKB'
    });
    console.log('经纬度', that.data.currentLat ,that.data.currentLon);
    qqmapsdk.search({
      keyword: '超市',
      location: {
        latitude: that.data.currentLat,
        longitude: that.data.currentLon
      },
      success: function (res) {
        console.log('qqmap_success', res);
      },
      fail: function (res) {
        console.log('qqmap_fail', res);
      }
    });
  },
  // 点击搜索框
  bindSearchTap: function () {
    var that = this
    wx.chooseLocation({
      success(res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        console.log(res)
        that.setData({
          currentLat: latitude,
          currentLon: longitude,
          markers: [{ latitude: latitude, longitude: longitude, icoPath: '' }]
        });
      }
    });
  },





  

  onShareAppMessage: function () {

  }
})