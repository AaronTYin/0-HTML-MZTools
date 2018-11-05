var vB = '';
var vO = '';
var vD = '';
var vH = '';
var iId = '0';
var iValue = '';

Page({
  data: {
    vB: '',
    vO: '',
    vD: '',
    vH: ''
  },

  hId: function (e){
    iId = e.target.id;
  },
  hValue: function (e){
    iValue = e.detail.value;
  },

  hChange: function (e){
    if (iId == 'iB'){
      iValue = parseInt(iValue, 2);
    }
    else if (iId == 'iO') {
      iValue = parseInt(iValue, 8);
    }
    else if (iId == 'iD') {
      iValue = parseInt(iValue, 10);
    }
    else if (iId == 'iH') {
      iValue = parseInt(iValue, 16);
    }
    vB = iValue.toString(2);
    vO = iValue.toString(8);
    vD = iValue.toString(10);
    vH = iValue.toString(16);

    this.setData({
      vB: vB,
      vO: vO,
      vD: vD,
      vH: vH
    });
  },

  hClear:function (){
    vB = '';
    vO = '';
    vD = '';
    vH = '';
    iId = '0';
    iValue = '';
    this.setData({
      vB: vB,
      vO: vO,
      vD: vD,
      vH: vH,
      iId: iId,
      iValue: iValue,
    });
  },

  onShareAppMessage: function () {

  }
})