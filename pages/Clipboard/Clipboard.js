var cpContent = '　　空';

Page({
  data: {
    cpContent: '　　空',
  },

  onShow: function (){
    var that = this;
    wx.getClipboardData({
      success: function (res){
        var cpTmp = '　　'+res.data;
        that.setData({
          cpContent: cpTmp
        });
      }
    });
  },
  clearCP: function (){
    cpContent = '　　空';
    wx.setClipboardData({
      data: ' ',
      success: function (){
        wx.showModal({
          title: '',
          content: '由于系统输入法原因，暂时无法清空剪切板，请等待后续更新...',
          showCancel: false
        });
        wx.showToast({
          title: '',
          icon: 'none',
          duration: 0
        });
        console.log("success");
      },
      fail: function () {
        wx.showModal({
          title: '',
          content: '由于系统输入法原因，设置剪切板失败，请等待后续更新...',
          showCancel: false
        });
        console.log("fail");
      }
    });
    this.setData({
      cpContent: cpContent
    });
  },

  onShareAppMessage: function () {

  }
})