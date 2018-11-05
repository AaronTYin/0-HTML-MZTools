var bgColor = 'black';
var switchFlag = 0;
var currentLight = 0;

Page({
  data: {
    bgColor: 'black',
    switchFlag: 0,
    currentLight: 0
  },

  btnSwitch: function (){
    if(bgColor=='black'){
      bgColor = 'white';
      switchFlag = 1;
      currentLight = 0.5;
    }
    else if(bgColor=='white'){
      bgColor = 'black';
      switchFlag = 0;
      currentLight = 0;
    }
    wx.setScreenBrightness({
      value: currentLight
    });
    this.setData({
      bgColor: bgColor,
      switchFlag: switchFlag,
      currentLight: currentLight*100
    });
  },

  lightChanging: function (e){
    var ligthTmp = e.detail.value;
    currentLight = ligthTmp/100;
    wx.setScreenBrightness({
      value: currentLight
    });
  },

  onShareAppMessage: function () {

  }
})