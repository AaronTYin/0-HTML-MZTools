//获取应用实例
var app = getApp()

var util = require('../../utils/util.js');

var tabIndex = 0;
var timeA_begin = '';
var timeA_end = '';
var timeA_show = [0,0,0];
var timeB_save = [0,0,0];
var timeA_flag = 's0';
var timer;
var inputSaveA = '';
var inputValueA = '';
var modalInputSaveA = '';


Page({
  data: {
    tabIndex: 0,
    timeA_show: [0,0,0],
    timeB_save: [0,0,0],
    disabledStart: false,
    disabledStop: true,
    disabledSett: false,
    holdText: '暂停',
    inputValueA: '',
    modalInputSaveA: '',
    modalHiddenA: true,   //是否隐藏
    modalHiddenT: true,
  },



  // tab menu 切换
  changeTab: function (e) {
    var id = e.currentTarget.id;
    var that = this;

    if (id == 'indexA') {
      tabIndex = 0;
      this.setData({
        tabIndex: 0,
        disabledStart: false
      });
    }
    if (id == 'indexB') {
      tabIndex = 1;
      this.setData({
        tabIndex: 1,
        disabledStart: true
      });
    }
  },

  //输入框文字同步
  inputA: function(e){
    inputValueA = e.detail.value;   //可以把inputSaveA和inputValueA合并
    inputSaveA = e.detail.value;
    this.setData({
      inputValueA: e.detail.value,
      inputSaveA: e.detail.value
    });
  },
  modalInputA: function(e){
    modalInputSaveA = e.detail.value;
    this.setData({
      modalInputSaveA: e.detail.value
    });
  },
  settInputH: function (e) {
    timeA_show[2] = e.detail.value;
    this.setData({
      'timeA_show[2]': e.detail.value
    });
  },
  settInputM: function (e) {
    timeA_show[1] = e.detail.value;
    this.setData({
      'timeA_show[1]': e.detail.value
    });
  },
  settInputS: function (e) {
    timeA_show[0] = e.detail.value;
    this.setData({
      'timeA_show[0]': e.detail.value
    });
  },
  settConfirm: function(){
    timeB_save = timeA_show;
    this.setData({
      modalHiddenT: true,
      disabledStart: false,
      timeB_save: timeA_show
    });
    this.showTime();
  },
  settCancel: function(){
    this.setData({
      'timeA_show[2]': 0,
      'timeA_show[1]': 0,
      'timeA_show[0]': 0,
      modalHiddenT: true,
    });
  },

  //时间控制
  beginTime: function (){
    timeA_begin = util.formatTime(new Date());
    this.setData({
      timeA_begin: util.formatTime(new Date())
    });
  },
  endTime: function (){
    timeA_end = util.formatTime(new Date());
    this.setData({
      timeA_end: util.formatTime(new Date())
    });
  },
  runTime: function(){
    var that = this;
    if (timeA_flag == 's1' || timeA_flag == 'h1') {
      if(tabIndex == 0){
        timer = setTimeout(function () {
          timeA_show[0]++;
          that.showTime();
          that.runTime();
        }, 1000);
      }
      if(tabIndex == 1){
        timer = setTimeout(function(){
          timeA_show[0]--;
          that.showTime();
          that.runTime();
        },1000);
      }
    }
    else if (timeA_flag == 's0' || timeA_flag == 'h0') {
      clearTimeout(timer);
    }
  },
  showTime: function(){
    if(timeA_show[0] >= 60){
      timeA_show[1]++;
      timeA_show[0] = 0;
      if(timeA_show[1] >= 60){
        timeA_show[2]++;
        timeA_show[1] = 0;
      }
    }
    if(timeA_show[0] < 0){
      timeA_show[1]--;
      timeA_show[0] = 59;
      if(timeA_show[1] < 0){
        timeA_show[2]--;
        timeA_show[1] = 59;
      }
    }
    this.setData({
      timeA_show: timeA_show
    });
  },

  //按钮控制
  start: function(){
    timeA_flag = 's1';
    this.setData({
      disabledStart: true,
      disabledStop: false,
      disabledSett: true
    });
    this.beginTime();
    this.runTime();
  },
  stop: function(){
    timeA_flag = 's0';
    this.endTime();
    this.setData({
      disabledStop: true,
      disabledSett: false,
      modalHiddenA: false,
    });
    if (tabIndex == 0) {
      this.setData({
        disabledStart: false
      });
    }
    if(tabIndex == 1){
      this.setData({
        disablesStart: true
      });
    }
  },
  hold: function(){
    if(timeA_flag == 's1' || timeA_flag == 'h1'){
      timeA_flag = 'h0';
      this.setData({
        holdText: '继续'
      });
    }
    else if(timeA_flag == 'h0'){
      timeA_flag = 'h1';
      this.setData({
        holdText: '暂停'
      });
      this.runTime();
    }
  },
  sett: function(){
    this.setData({
      modalHiddenT: false,
    });
  },


  //弹窗
  modalA: function(){
    if(inputValueA == ''){
      app.tempData.title = '无标题';
    }
    else{
      app.tempData.title = inputValueA;
    }
    app.tempData.beginTime = timeA_begin;
    app.tempData.endTime = timeA_end;
    app.tempData.addText = modalInputSaveA;
    if (tabIndex == 0) {
      app.tempData.contTime = timeA_show;
    }
    if (tabIndex == 1) {
      app.tempData.contTime = timeB_save;
    }
    app.tempData.constI++;

    timeA_show = [0,0,0];
    inputValueA = '';
    modalInputSaveA = '';
    this.setData({
      modalHiddenA: true,
      timeA_show: timeA_show,
      inputValueA: inputValueA,
      modalInputSaveA: modalInputSaveA
    });
    wx.switchTab({
      url: '../task/task'
    });
  }

})