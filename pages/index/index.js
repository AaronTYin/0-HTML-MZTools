var app = getApp()

Page({
  data: {
  },

  //应用切换
  toTimeTask: function () {
    wx.navigateTo({
      url: '../TimeTask/TimeTask'
    });
  },
  toCalculator: function () {
    wx.navigateTo({
      url: '../Calculator/Calculator'
    });
  },
  toLifePlan: function (){
    wx.showToast({
      title: '功能开发中...',
      icon: 'none'
    });
  },
  toPhoneInfo: function () {
    wx.navigateTo({
      url: '../PhoneInfo/PhoneInfo'
    });
  },
  toWeather: function (){
    wx.navigateTo({
      url: '../Weather/Weather'
    });
  },
  toMap: function (){
    wx.navigateTo({
      url: '../Map/Map'
    });
  },
  toHexadecimalC: function (){
    wx.navigateTo({
      url: '../HexadecimalC/HexadecimalC'
    });
  },
  toFlashlight: function (){
    wx.navigateTo({
      url: '../Flashlight/Flashlight'
    });
  },
  toClipboard: function (){
    wx.navigateTo({
      url: '../Clipboard/Clipboard'
    });
},
  toScan: function (){
    wx.navigateTo({
      url: '../Scan/Scan'
    });
  },
  toSetting: function (){
    wx.navigateTo({
      url: '../Setting/Setting'
    });
  },


  launchAppError: function () {
    console.log(e.detail.errMsg+'WeChat');
  },



  onLoad: function (options) {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onShareAppMessage: function () {

  }
})