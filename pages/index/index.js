// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 0,
    latitude:0
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  bindtap:function(e){
    switch(e.controlId){
      case 1: this.movetoCenter();
      break;
      case 2: 
      if(this.times){
        wx.navigateBack({
          delta:1
        })
      }else{
        wx.scanCode({
          success: (res) => {
            wx.showLoading({
              title: '正在加载',
            })
            wx.request({
              url: 'https://www.easy-mock.com/mock/5d1dedf1330a57553d679576/zzx/demo#!method=get',
              success: (res) => {
                wx.hideLoading()
                wx.redirectTo({
                  url: '../scan/index?password=' + res.data.data.password + '&number=' + res.data.data.number,
                  success: (res) => {
                    wx.showToast({
                      title: '获取密码成功',
                    })
                  }
                })
              }
            })

          }
        })
      }
      break;
      case 3:
      wx.navigateTo({
        url: '../warn/index',
      })
      break;
      case 5:
       wx.navigateTo({
        url: '../my/index',
      })
    }
  },
  onLoad: function (options) {
    this.times = options.times;
    wx.getLocation({
      success: (res) => {
        this.setData({
          longitude:res.longitude,
          latitude:res.latitude
        }) 
      },
    })
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          controls:[{
            id:1,
            iconPath:"/images/location.png",
            position:{
                left:20,
                top:res.windowHeight-80,
                width:50,
                height:50
            },
            clickable:true
          },{
            id:2,
            iconPath:"/images/use.png",
            position:{
              left:res.windowWidth/2 - 40,
              top:res.windowHeight-100,
              width:80,
              height:80
            },
            clickable:true
          },{
            id:3,
            iconPath:"/images/warn.png",
            position:{
              left:res.windowWidth - 70,
              top:res.windowHeight - 80,
              width: 50,
              height: 50
            },
            clickable: true
          },{
            id:4,
            iconPath:"/images/marker.png",
            position:{
              left:res.windowWidth/2 - 20,
              top:res.windowHeight/2 - 50,
              width:40,
              height:50
            }
          },{
            id:5,
            iconPath:"/images/avatar.png",
            position:{
              left: res.windowWidth - 70,
              top: res.windowHeight - 160,
              width:50,
              height:50
            },
            clickable: true
          }]
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     this.mapId = wx.createMapContext("ofo-map") 
     this.movetoCenter()
  },
  movetoCenter: function(){
     this.mapId.moveToLocation()
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