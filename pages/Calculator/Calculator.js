var app = getApp()
var util = require('../../utils/util.js');

var selNum = 0;
var inputShowArr = '';
var processArr = '';
var inputNow = '';
var inputNowMem = '';
var lastInput = 0;
var resultShowNum = 0;
var resultTemp = 0;
var lastAlg = '';
var vLastAlg = '';



Page({
  data: {
    sel: ['普通','科学','单位转换'],
    selNum: 0,
    inputShowArr: '',
    resultShowNum: 0,
  },
  
  //选择计算器模式
  select: function (e) {
    console.log('返回',e.detail.value);
    this.setData({
      selNum: e.detail.value
    });
  },

  //清零
  butC: function () {
    inputShowArr = '';
    processArr = '';
    inputNow = '';
    inputNowMem = '';
    resultShowNum = 0;
    resultTemp = 0;
    lastAlg = '';
    vLastAlg = '';
    this.onShow();
  },

  //数字按钮
  but9: function () {
    processArr = processArr.concat('9');
    inputShowArr = processArr;
    inputNow = inputNow.concat('9');
    if (lastAlg == '') {
      resultShowNum = Number(inputNow);
    }
    else {
      if (lastInput == 1) {
        resultShowNum = resultTemp;
      }
      if (lastInput == 0) {
        this.getRight(lastAlg);
        lastInput = 1;
      }
    }
    this.onShow();
  },
  but8: function () {
    processArr = processArr.concat('8');
    inputShowArr = processArr;
    inputNow = inputNow.concat('8');
    if (lastAlg == '') {
      resultShowNum = Number(inputNow);
    }
    else {
      if (lastInput == 1) {
        resultShowNum = resultTemp;
      }
      if (lastInput == 0) {
        this.getRight(lastAlg);
        lastInput = 1;
      }
    }
    this.onShow();
  },
  but7: function () {
    processArr = processArr.concat('7');
    inputShowArr = processArr;
    inputNow = inputNow.concat('7');
    if (lastAlg == '') {
      resultShowNum = Number(inputNow);
    }
    else {
      if (lastInput == 1) {
        resultShowNum = resultTemp;
      }
      if (lastInput == 0) {
        this.getRight(lastAlg);
        lastInput = 1;
      }
    }
    this.onShow();
  },
  but6: function () {
    processArr = processArr.concat('6');
    inputShowArr = processArr;
    inputNow = inputNow.concat('6');
    if (lastAlg == '') {
      resultShowNum = Number(inputNow);
    }
    else {
      if (lastInput == 1) {
        resultShowNum = resultTemp;
      }
      if (lastInput == 0) {
        this.getRight(lastAlg);
        lastInput = 1;
      }
    }
    this.onShow();
  },
  but5: function () {
    processArr = processArr.concat('5');
    inputShowArr = processArr;
    inputNow = inputNow.concat('5');
    if (lastAlg == '') {
      resultShowNum = Number(inputNow);
    }
    else {
      if (lastInput == 1) {
        resultShowNum = resultTemp;
      }
      if (lastInput == 0) {
        this.getRight(lastAlg);
        lastInput = 1;
      }
    }
    this.onShow();
  },
  but4: function () {
    processArr = processArr.concat('4');
    inputShowArr = processArr;
    inputNow = inputNow.concat('4');
    if (lastAlg == '') {
      resultShowNum = Number(inputNow);
    }
    else {
      if (lastInput == 1) {
        resultShowNum = resultTemp;
      }
      if (lastInput == 0) {
        this.getRight(lastAlg);
        lastInput = 1;
      }
    }
    this.onShow();
  },
  but3: function () {
    processArr = processArr.concat('3');
    inputShowArr = processArr;
    inputNow = inputNow.concat('3');
    if (lastAlg == '') {
      resultShowNum = Number(inputNow);
    }
    else {
      if (lastInput == 1) {
        resultShowNum = resultTemp;
      }
      if (lastInput == 0) {
        this.getRight(lastAlg);
        lastInput = 1;
      }
    }
    this.onShow();
  },
  but2: function () {
    processArr = processArr.concat('2');
    inputShowArr = processArr;
    inputNow = inputNow.concat('2');
    if (lastAlg == '') {
      resultShowNum = Number(inputNow);
    }
    else {
      if (lastInput == 1) {
        resultShowNum = resultTemp;
      }
      if (lastInput == 0) {
        this.getRight(lastAlg);
        lastInput = 1;
      }
    }
    this.onShow();
  },
  but1: function () {
    processArr = processArr.concat('1');
    inputShowArr = processArr;
    inputNow = inputNow.concat('1');
    if (lastAlg == '') {
      resultShowNum = Number(inputNow);
    }
    else {
      if (lastInput == 1) {
        resultShowNum = resultTemp;
      }
      if (lastInput == 0) {
        this.getRight(lastAlg);
        lastInput = 1;
      }
    }
    this.onShow();
  },
  but0: function () {
    processArr = processArr.concat('0');
    inputShowArr = processArr;
    inputNow = inputNow.concat('0');
    if (lastAlg == '') {
      resultShowNum = Number(inputNow);
    }
    else {
      if (lastInput == 1) {
        resultShowNum = resultTemp;
      }
      if (lastInput == 0) {
        this.getRight(lastAlg);
        lastInput = 1;
      }
    }
    this.onShow();
  },
  butP: function () {
    processArr = processArr.concat('.');
    inputShowArr = processArr;
    inputNow = inputNow.concat('.');
    resultShowNum = resultTemp;
    this.onShow();
  },
  but100: function () {
    processArr = processArr.concat('%');
    inputShowArr = processArr;
    inputNow = inputNow/100;
    if (lastAlg != '') {
      resultShowNum = resultTemp;
      this.getRight(lastAlg);
      lastInput = 0;
    }
    if (lastAlg == '') {
      resultShowNum = inputNow;
    }
    this.onShow();
  },

  //算法按钮
  //加Add
  butA: function () {
    processArr = processArr.concat('+');
    inputShowArr = processArr;
    if (lastInput == 1) {
      if (inputNow.length == 1) {}
      else {
        this.getRight(lastAlg);
      }
      lastInput = 0;
    }
    resultTemp = resultShowNum;
    inputNow = '';
    vLastAlg = lastAlg;
    lastAlg = '+';
    this.onShow();
  },
  //减Subtract
  butS: function () {
    processArr = processArr.concat('-');
    inputShowArr = processArr;
    if (lastInput == 1) {
      if (inputNow.length == 1) { }
      else {
        this.getRight(lastAlg);
      }
      lastInput = 0;
    }
    resultTemp = resultShowNum;
    inputNow = '';
    vLastAlg = lastAlg;
    lastAlg = '-';
    this.onShow();
  },
  //乘Multiply
  butM: function () {
    processArr = processArr.concat('×');
    inputShowArr = processArr;
    if (lastInput == 1) {
      if (inputNow.length == 1) { }
      else {
        this.getRight(lastAlg);
      }
      lastInput = 0;
    }
    resultTemp = resultShowNum;
    inputNow = '';
    vLastAlg = lastAlg;
    lastAlg = '*';
    this.onShow();
  },
  //除Divide
  butD: function () {
    processArr = processArr.concat('÷');
    inputShowArr = processArr;
    if (lastInput == 1) {
      if (inputNow.length == 1) { }
      else {
        this.getRight(lastAlg);
      }
      lastInput = 0;
    }
    resultTemp = resultShowNum;
    inputNow = '';
    vLastAlg = lastAlg;
    lastAlg = '/';
    this.onShow();
  },
  //等号Equal
  butE: function () {
    if (lastAlg != '=') {
      processArr = processArr.concat('=');
      inputShowArr = processArr;
      processArr = '';
      vLastAlg = lastAlg;
      inputNowMem = inputNow;
      if (lastInput == 1) {
        if (inputNow.length == 1) {}
        else {
          this.getRight(lastAlg);
        }
        lastInput = 0;
      }
    }

    inputNow = '';

    if (lastAlg == '=') {
      if (vLastAlg == '+') {
        resultShowNum += Number(inputNowMem);
      }
      if (vLastAlg == '-') {
        resultShowNum -= Number(inputNowMem);
      }
      if (vLastAlg == '*') {
        resultShowNum *= Number(inputNowMem);
      }
      if (vLastAlg == '/') {
        resultShowNum /= Number(inputNowMem);
      }
    }

    lastAlg = '=';

    this.onShow();
  },

  //矫正计算
  getRight: function (e) {
    if (e == '+') {
      resultShowNum += Number(inputNow);
      console.log('+',inputNow);
    }
    if (e == '-') {
      resultShowNum -= Number(inputNow);
      console.log('-', inputNow);
    }
    if (e == '*') {
      resultShowNum *= Number(inputNow);
      console.log('*', inputNow);
    }
    if (e == '/') {
      resultShowNum /= Number(inputNow);
      console.log('/', inputNow);
    }
  },

  //Back
  butB: function () {
    var bTemp = '';
    bTemp = inputShowArr[inputShowArr.length-1];
    console.log(inputShowArr.length,bTemp);
    if (bTemp == '+' || bTemp == '-' || bTemp == '*' || bTemp == '/') {
      processArr = processArr.slice(0,processArr.length-1);
      inputShowArr = processArr;
      lastAlg = vLastAlg;
      resultShowNum = resultTemp;
      inputNow = inputNowMem;
      console.log(processArr+'A1');
    }
    if (bTemp == '9' || bTemp == '8' || bTemp == '7' || bTemp == '6' || bTemp == '5' || bTemp == '4' || bTemp == '3' || bTemp == '2' || bTemp == '1' || bTemp == '0') {
      processArr = processArr.slice(0, processArr.length - inputNow.length);
      inputShowArr = processArr;
      resultShowNum = resultTemp;
      inputNow = '';
      lastInput = 0;
      console.log(processArr + 'B1');
    }

    if (bTemp == '=') {}

    /*if (bTemp == '%') {}
    if (bTemp == '.') {}*/

    this.onShow();
    
    /*wx.showModal({
      title: '',
      content: '额，脑子太乱了，暂且放一放...',
    });*/
  },



  onShow: function () {
    selNum = selNum;
    inputShowArr = inputShowArr;
    processArr = processArr
    inputNow = inputNow;
    inputNowMem = inputNowMem;
    resultShowNum = resultShowNum;
    resultTemp = resultTemp;
    lastAlg = lastAlg;
    vLastAlg = vLastAlg;
    this.setData({
      selNum: selNum,
      inputShowArr: inputShowArr,
      processArr: processArr,
      inputNow: inputNow,
      inputNowMem: inputNowMem,
      resultShowNum: resultShowNum,
      resultTemp: resultTemp,
      lastAlg: lastAlg,
      vLastAlg: vLastAlg,
      lastInput: lastInput
    });
  },

  onShareAppMessage: function () {
    
  }
})