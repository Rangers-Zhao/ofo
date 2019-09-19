// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   userInfo:{
     avatarImg:"",
     nickName:"未登录"
   },
   actionText:"登录",
   btnType:"primary"
  },
  bindtap:function(){
    if(this.data.userInfo.avatarImg == ""){
      wx.login({
        success:(res)=>{
          wx.getUserInfo({
            success:(res)=>{
              this.setData({
                userInfo:{
                  avatarImg:res.userInfo.avatarUrl,
                  nickName:res.userInfo.nickName
                },
                actionText:"退出登录",
                btnType:"warn"
              })
              wx.setStorage({
                key: 'userInfo',
                data:{
                  userInfo: {
                    avatarImg: res.userInfo.avatarUrl,
                    nickName: res.userInfo.nickName
                  },
                  actionText: "退出登录",
                  btnType: "warn"
                }
              })
            }
          })
        }
      })
    }else{
      wx.removeStorageSync("userInfo")
      this.setData({
        userInfo: {
          avatarImg: "",
          nickName: "未登录"
        },
        actionText: "登录",
        btnType: "primary"
      })
    }
  },
  movetoWellat:function(){
    wx.navigateTo({
      url: '../wellat/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success: (res) =>{
        this.setData({
          userInfo: {
            avatarImg: res.data.userInfo.avatarImg,
            nickName: res.data.userInfo.nickName
          },
          actionText: res.data.actionText,
          btnType: res.data.btnType
        })
      }
    })
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