var bmap = require('../../utils/bmap-wx.min.js');

Page({
  data:{
    ak:'rjs4KwwqzmgwstP0cOPRSlraLKSneVWY',
    weatherData:'',
    futureWeather:[]
  },
  
  onLoad: function (options){
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: that.data.ak
    });
    var fail = function(data){
      console.log(data);
    };
    var success = function (data){
      console.log(data);
      var weatherData = data.currentWeather[0];
      var futureWeather = data.originalData.results[0].weather_data;
      console.log(futureWeather);
      that.setData({
        weatherData: weatherData,
        futureWeather: futureWeather,
      });
    }
    BMap.weather({
      fail: fail,
      success: success
    });
  },

  onShareAppMessage: function () {

  }
})