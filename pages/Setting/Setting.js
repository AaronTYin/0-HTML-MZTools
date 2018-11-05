Page({
  data: {
    setting: {}
  },

  getSetting() {
    wx.getSetting({
      success: (res) => {
        console.log(res)
        this.setData({ setting: res.authSetting })
      }
    })
  },

  onShareAppMessage: function () {

  }
})
