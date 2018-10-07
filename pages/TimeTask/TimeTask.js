//获取应用实例
var app = getApp()

var util = require('../../utils/util.js');

var tabIndex = 1;
var time_begin = '';
var time_end = '';
var time_show = [0,0,0];
var time_flag = 's0';
var timer;
var inputValue = '';
var modalInputValue = '';
var taskTitle = [];
var taskBeginTime = [];
var taskEndTime = [];
var taskContTime = [];
var taskAddText = [];
var taskJ = [];
var taskI = -1;
var taskTapI = 0;


Page({
  data: {
    tabIndex: 1,
    time_show: [0,0,0],
    disabledStart: false,
    disabledStop: true,
    disabledSett: false,
    holdText: '暂停',
    inputValue: '',
    modalInputValue: '',
    modalHiddenAB: true,   //是否隐藏
    modalHiddenST: true,
    modalHiddenTask: true
  },



  // tab menu 切换
  changeTab: function (e) {
    var id = e.currentTarget.id;
    var that = this;

    if (id == 'indexA') {
      tabIndex = 1;
      this.setData({
        tabIndex: 1
      });
      if (time_flag == 's1'||time_flag == 'h1') {
        this.setData({
          disabledStart: true
        });
      }
      else {
        this.setData({
          disabledStart: false
        });
      }
    }
    if (id == 'indexB') {
      tabIndex = 2;
      this.setData({
        tabIndex: 2,
        disabledStart: true
      });
    }
    if (id == 'indexC') {
      tabIndex = 3;
      this.setData({
        tabIndex: 3,
      });
      this.onShow();
      this.clear();
    }
  },

  //输入框文字同步
  inputAB: function(e){
    inputValue = e.detail.value;
    this.setData({
      inputValue: e.detail.value
    });
  },
  modalInputAB: function(e){
    modalInputValue = e.detail.value;
    this.setData({
      modalInputValue: e.detail.value
    });
  },
  settInputH: function (e) {
    time_show[2] = e.detail.value;
    this.setData({
      'time_show[2]': e.detail.value
    });
  },
  settInputM: function (e) {
    time_show[1] = e.detail.value;
    this.setData({
      'time_show[1]': e.detail.value
    });
  },
  settInputS: function (e) {
    time_show[0] = e.detail.value;
    this.setData({
      'time_show[0]': e.detail.value
    });
  },
  settConfirm: function(){  //倒计时开始按钮
    this.setData({
      modalHiddenST: true,
      disabledStart: false,
    });
    this.showTime();
  },
  settCancel: function(){
    this.setData({
      'time_show[2]': 0,
      'time_show[1]': 0,
      'time_show[0]': 0,
      modalHiddenST: true,
    });
  },

  //时间控制
  beginTime: function (){
    time_begin = util.formatTime(new Date());
    this.setData({
      time_begin: util.formatTime(new Date())
    });
  },
  endTime: function (){
    time_end = util.formatTime(new Date());
    this.setData({
      time_end: util.formatTime(new Date())
    });
  },
  runTime: function(){
    var that = this;
    if (time_flag == 's1' || time_flag == 'h1') {
      if(tabIndex == 1){
        timer = setTimeout(function () {
          time_show[0]++;
          that.showTime();
          that.runTime();
        }, 1000);
      }
      if(tabIndex == 2){
        timer = setTimeout(function(){
          time_show[0]--;
          that.showTime();
          that.runTime();
        },1000);
      }
    }
    else if (time_flag == 's0' || time_flag == 'h0') {
      clearTimeout(timer);
    }
  },
  showTime: function(){
    if(time_show[0] >= 60){
      time_show[1]++;
      time_show[0] = 0;
      if(time_show[1] >= 60){
        time_show[2]++;
        time_show[1] = 0;
      }
    }
    if(time_show[0] < 0){
      time_show[1]--;
      time_show[0] = 59;
      if(time_show[1] < 0){
        time_show[2]--;
        time_show[1] = 59;
      }
    }
    this.setData({
      time_show: time_show
    });
  },

  //按钮控制
  start: function(){
    time_flag = 's1';
    this.setData({
      disabledStart: true,
      disabledStop: false,
      disabledSett: true
    });
    this.beginTime();
    this.runTime();
  },
  stop: function(){
    time_flag = 's0';
    this.endTime();
    this.setData({
      disabledStop: true,
      disabledSett: false,
      modalHiddenAB: false,
    });
    if (tabIndex == 0) {
      this.setData({
        disabledStart: false
      });
    }
    if(tabIndex == 2){
      this.setData({
        disablesStart: true
      });
    }
  },
  hold: function(){
    if(time_flag == 's1' || time_flag == 'h1'){
      time_flag = 'h0';
      this.setData({
        holdText: '继续'
      });
    }
    else if(time_flag == 'h0'){
      time_flag = 'h1';
      this.setData({
        holdText: '暂停'
      });
      this.runTime();
    }
  },
  sett: function(){
    this.setData({
      modalHiddenST: false,
    });
  },
  clear: function(){
    time_begin = '';
    time_end = '';
    time_show = [0, 0, 0];
    time_flag = 's0';
    inputValue = '';
    modalInputValue = '';
    clearTimeout(timer);
    this.setData({
      time_begin: time_begin,
      time_end: time_end,
      time_show: time_show,
      time_flag: time_flag,
      inputValue: inputValue,
      modalInputValue: modalInputValue,
      disabledStop: true,
      disabledSett: false
    });
    if (tabIndex == 1) {
      this.setData({
        disabledStart: false
      });
    }
    if (tabIndex == 2) {
      this.setData({
        disabledStart: true,
      });
    }
  },


  //弹窗
  modalAB: function(){
    if(inputValue == ''){
      inputValue = '无标题';
    }

    taskI++;
    
    taskJ[taskI] = taskI;
    taskTitle[taskI] = inputValue;
    taskBeginTime[taskI] = time_begin;
    taskContTime[taskI] = time_show;
    taskEndTime[taskI] = time_end;
    taskAddText[taskI] = modalInputValue;
    tabIndex = 3;
    this.setData({
      modalHiddenAB: true,
      taskJ: taskJ,
      taskTitle: taskTitle,
      taskBeginTime: taskBeginTime,
      taskContTime: taskContTime,
      taskEndTime: taskEndTime,
      taskAddText: taskAddText,
      tabIndex: tabIndex
    });
    this.onShow();
    this.clear();
  },


  //任务列表
  onLoad: function () {
    //数据读取
    taskTitle = wx.getStorageSync('title') || [];
    taskBeginTime = wx.getStorageSync('begintime') || [];
    taskEndTime = wx.getStorageSync('endtime') || [];
    taskContTime = wx.getStorageSync('conttime') || [];
    taskAddText = wx.getStorageSync('addtext') || [];
    taskJ = wx.getStorageSync('j') || [];
    taskI = wx.getStorageSync('i') || -1;
    this.onShow();
  },

  onShow: function () {
    taskTitle = taskTitle;
    taskBeginTime = taskBeginTime;
    taskContTime = taskContTime;
    taskEndTime = taskEndTime;
    taskAddText = taskAddText;
    taskJ = taskJ;
    taskI = taskI;
    this.setData({
      taskTitle: taskTitle,
      taskBeginTime: taskBeginTime,
      taskEndTime: taskEndTime,
      taskContTime: taskContTime,
      taskAddText: taskAddText,
      taskJ: taskJ,
      taskI: taskI
    });
  },
  onHide: function () {
    //数据存储
      wx.setStorageSync('title', taskTitle);
      wx.setStorageSync('begintime', taskBeginTime);
      wx.setStorageSync('endtime', taskEndTime);
      wx.setStorageSync('conttime', taskContTime);
      wx.setStorageSync('addtext', taskAddText);
      wx.setStorageSync('j', taskJ);
      wx.setStorageSync('i', taskI);
  },
  onUnload: function () {
      wx.setStorageSync('title', taskTitle);
      wx.setStorageSync('begintime', taskBeginTime);
      wx.setStorageSync('endtime', taskEndTime);
      wx.setStorageSync('conttime', taskContTime);
      wx.setStorageSync('addtext', taskAddText);
      wx.setStorageSync('j', taskJ);
      wx.setStorageSync('i', taskI);
  },

  tapi: function (e) {
    taskTapI = parseInt(e.currentTarget.id);
    this.setData({
      modalHiddenTask: false
    });
  },
  taskConfirm: function () {
    var s = 0;
    console.log(taskTapI);
    console.log(taskI);
    if (taskTapI == taskI) {}
    else {
      for (s = taskTapI; s <= taskI; s++) {
          console.log(s);
          taskTitle[s] = taskTitle[s + 1];
          taskBeginTime[s] = taskBeginTime[s + 1];
          taskEndTime[s] = taskEndTime[s + 1];
          taskContTime[s] = taskContTime[s + 1];
          taskAddText[s] = taskAddText[s + 1];
      }
    }
    taskTitle.splice(taskI, 1);
    taskBeginTime.splice(taskI, 1);
    taskEndTime.splice(taskI, 1);
    taskContTime.splice(taskI, 1);
    taskAddText.splice(taskI, 1);
    taskJ.splice(taskI,1);
    taskI--;

    this.setData({
      taskTitle: taskTitle,
      taskBeginTime: taskBeginTime,
      taskEndTime: taskEndTime,
      taskContTime: taskContTime,
      taskAddText: taskAddText,
      taskI: taskI,
      taskJ: taskJ,
      modalHiddenTask: true
    });
    this.onShow();
  },
  taskCancel: function () {
    this.setData({
      modalHiddenTask: true
    });
  },

  onShareAppMessage: function () {

  }

})