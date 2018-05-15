var app = getApp();

var taskTitle = [];
var taskBeginTime = [];
var taskEndTime = [];
var taskContTime = [];
var taskAddText = [];
var taskI = -1;
var taskJ = [];
var taskTapI = 0;
var tempE;



Page({
  data: {
    /*'taskTitle[0]': app.tempData.title,
    'taskBeginTime[0]': app.tempData.beginTime,
    'taskEndTime[0]': app.tempData.endTime,
    'taskContTime[0]': app.tempData.contTime,
    'taskAddText[0]': app.tempData.addText,
    taskJ: []*/
    modalHiddenTask: true
  },
  onLoad: function(){
    //数据读取
    taskTitle = wx.getStorageSync('title') || [];
    taskBeginTime = wx.getStorageSync('begintime') || [];
    taskEndTime = wx.getStorageSync('endtime') || [];
    taskContTime = wx.getStorageSync('conttime') || [];
    taskAddText = wx.getStorageSync('addtext') || [];
    taskJ = wx.getStorageSync('j') || [];
    taskI = app.tempData.constI;
    app.tempData.constI = (wx.getStorageSync('i') || taskI) + 1;
  },
  onShow: function(){
    taskI = app.tempData.constI;

    if(taskJ[taskJ.length-1] != taskI){
      taskJ.push(taskI);
    }
    if(app.tempData.title != '' || null){
    taskTitle[taskI] = app.tempData.title;
    taskBeginTime[taskI] = app.tempData.beginTime;
    taskEndTime[taskI] = app.tempData.endTime;
    taskContTime[taskI] = app.tempData.contTime;
    taskAddText[taskI] = app.tempData.addText;
    }

    this.setData({
      taskI: taskI,
      taskJ: taskJ,
      taskTitle: taskTitle,
      taskBeginTime: taskBeginTime,
      taskEndTime: taskEndTime,
      taskContTime: taskContTime,
      taskAddText: taskAddText
    });
  },
  onHide: function(){
    //数据存储
    if (taskTitle[taskI] != '' || null) {
      wx.setStorageSync('title', taskTitle);
      wx.setStorageSync('begintime', taskBeginTime);
      wx.setStorageSync('endtime', taskEndTime);
      wx.setStorageSync('conttime', taskContTime);
      wx.setStorageSync('addtext', taskAddText);
      wx.setStorageSync('j', taskJ);
      wx.setStorageSync('i', app.tempData.constI);
    }
  },
  onUnload: function(){
    if (taskTitle[taskI] != '' || null) {
      wx.setStorageSync('title', taskTitle);
      wx.setStorageSync('begintime', taskBeginTime);
      wx.setStorageSync('endtime', taskEndTime);
      wx.setStorageSync('conttime', taskContTime);
      wx.setStorageSync('addtext', taskAddText);
      wx.setStorageSync('j', taskJ);
      wx.setStorageSync('i', app.tempData.constI);
    }
  },

  tapi: function(e){
    taskTapI = parseInt(e.currentTarget.id);
    this.setData({
      modalHiddenTask: false
    });
  },
  taskConfirm: function(){
    var s = 0;
    console.log(taskTapI);
    for (s = taskTapI + 1; s <= taskI - 1; s++) {
      taskTitle[s] = taskTitle[s + 1];
      taskBeginTime[s] = taskBeginTime[s + 1];
      taskEndTime[s] = taskEndTime[s + 1];
      taskContTime[s] = taskContTime[s + 1];
      taskAddText[s] = taskAddText[s + 1];
    }
    //taskI--;
    app.tempData.constI--;
    taskTitle.splice(-1, 1);
    taskBeginTime.splice(-1, 1);
    taskEndTime.splice(-1, 1);
    taskContTime.splice(-1, 1);
    taskAddText.splice(-1, 1);
    taskJ.splice(-1, 1);

    this.setData({
      taskTitle: taskTitle,
      taskBeginTime: taskBeginTime,
      taskEndTime: taskEndTime,
      taskContTime: taskContTime,
      taskAddText: taskAddText,
      taskJ: taskJ,
      taskI: taskI,
      modalHiddenTask: true
    });
  },
  taskCancel: function(){
    this.setData({
      modalHiddenTask: true
    });
  }

})