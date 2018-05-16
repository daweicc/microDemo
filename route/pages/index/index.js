//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //-------------------首页图片轮播开始---------------
    imgUrls: [
      '/public/common/img/index/index1.png',
      '/public/common/img/index/index2.png',
      '/public/common/img/index/index3.png'
    ],
    //是否显示图片上的点
    indicatorDots: true,
    //是否自动轮播
    autoplay: false,
    //自动切换时间间隔
    interval: 1000,
    //滑动动画时长
    duration: 1000
    //-------------------首页图片轮播结束---------------
  },

  //-------------------首页图片轮播开始---------------
  //点击事件
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function () {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  // 如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则有可能导致 setData 被不停地调用，因而通常情况下请在改变 current 值前检测 source 字段来判断是否是由于用户触摸引起
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

//-------------------首页图片轮播结束---------------

 
})
