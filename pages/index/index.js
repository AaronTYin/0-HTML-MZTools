//获取应用实例
var app = getApp()

var util = require('../../utils/util.js');

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
  toPhoneInfo: function () {
    wx.navigateTo({
      url: '../PhoneInfo/PhoneInfo'
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
  //右上角分享
  onShareAppMessage: function () {

  }
})