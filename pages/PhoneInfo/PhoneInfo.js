var app = getApp()

var util = require('../../utils/util.js');

var ibrand = '';
var imodel = '';
var ipixelRatio = '';
var iscreenWidth = '';
var iscreenHeight = '';
var iwindowWidth = '';
var iwindowHeight = '';
var istatusBarHeight = '';
var ilanguage = '';
var iversion = '';
var isystem = '';
var iplatform = '';
var ifontSizeSetting = '';
var iSDKVersion = '';


Page({
  data: {
    ibrand: '',
    imodel: '',
    ipixelRatio: '',
    iscreenWidth: '',
    iscreenHeight: '',
    iwindowWidth: '',
    iwindowHeight: '',
    istatusBarHeight: '',
    ilanguage: '',
    iversion: '',
    isystem: '',
    iplatform: '',
    ifontSizeSetting: '',
    iSDKVersion: ''
  },

  onLoad: function (options) {
    
  },
  onShow: function () {
    wx.getSystemInfo({
      success: function (res) {
        ibrand = res.brand;
        imodel = res.model;
        ipixelRatio = res.pixelRatio;
        iscreenWidth = res.screenWidth;
        iscreenHeight = res.screenHeight;
        iwindowWidth = res.windowWidth;
        iwindowHeight = res.windowHeight;
        istatusBarHeight = res.statusBarHeight;
        ilanguage = res.language;
        iversion = res.version;
        isystem = res.system;
        iplatform = res.platform;
        ifontSizeSetting = res.fontSizeSetting;
        iSDKVersion = res.SDKVersion;
      }
    });
    this.setData({
      ibrand: ibrand,
      imodel: imodel,
      ipixelRatio: ipixelRatio,
      iscreenWidth: iscreenWidth,
      iscreenHeight: iscreenHeight,
      iwindowWidth: iwindowWidth,
      iwindowHeight: iwindowHeight,
      istatusBarHeight: istatusBarHeight,
      ilanguage: ilanguage,
      iversion: iversion,
      isystem: isystem,
      iplatform: iplatform,
      ifontSizeSetting: ifontSizeSetting,
      iSDKVersion: iSDKVersion
    });
  },
  onHide: function () {
    
  },
  onUnload: function () {
    
  },
  onShareAppMessage: function () {
    
  }
})