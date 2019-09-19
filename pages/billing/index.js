// pages/billing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionText:"正在计费",
    hours:0,
    minutes:0,
    second:0,
    disabled:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var s = 0,
        m = 0,
        h = 0;
    this.setData({
      number:options.number
    })
    this.times = setInterval(()=>{
      s++;
      if (s == 60) {
        s = 0;
        m++;
        if (m == 60) {
          m = 0;
          h++;
          this.setData({
            hours: h
          })
        }
        this.setData({
          minutes: m
        })
      }
      this.setData({
        second:s
      })
    },200)
  },
  endRide:function(){
    clearInterval(this.times);
    this.times = "";
    this.setData({
      actionText:"本次骑行时间",
      disabled:true
    })
  },
  movetoIndex:function(){
    if(this.times){
      wx.navigateTo({
        url: '../index/index?times='+this.times,
      })
    }else{
      wx.redirectTo({
        url: '../index/index',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})