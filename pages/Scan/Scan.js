Page({
  data: {
    result: ''
  },

  scanCode() {
    var that = this
    wx.scanCode({
      success(res) {
        that.setData({
          result: res.result
        })
      },
    });
  },

  onShareAppMessage: function () {

  }
})
