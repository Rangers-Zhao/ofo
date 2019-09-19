// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:{
      num:0,
      desc:''
    },
    actionText:"拍照/相册",
    picUrls:[],
    checkboxValues:[],
    btnColor:"#f2f2f2",
    itemsValue:[
      {
        value:"私锁私用",
        checked:false,
        color: "#b9dd08"
      },
       {
        value: "车牌缺损",
        checked: false,
        color: "#b9dd08"
      },
       {
        value: "轮胎坏了",
        checked: false,
        color: "#b9dd08"
      },
       {
        value: "违规乱停",
        checked: false,
        color: "#b9dd08"
      },
       {
        value: "密码不对",
        checked: false,
        color: "#b9dd08"
      },
       {
        value: "刹车坏了",
        checked: false,
        color: "#b9dd08"
      }
      ,
      {
        value: "车锁坏了",
        checked: false,
        color: "#b9dd08"
      }
      ,
      {
        value: "其他故障",
        checked: false,
        color: "#b9dd08"
      }
    ]
  },
  changeCheckbox:function(e){
   if(e.detail.value.length){
     this.setData({
       checkboxValues: e.detail.value,
       btnColor: '#b9dd08'
     })
   }else{
     this.setData({
       checkboxValues: e.detail.value,
       btnColor: '#f2f2f2'
     })
   } 
  },
  clickPhoto:function(e){
   wx.chooseImage({
     success:(res)=>{
       var _picUrls = this.data.picUrls;
       for(var i=0;i<res.tempFilePaths.length;i++){
         _picUrls.push(res.tempFilePaths[i])
       }
       this.setData({
         picUrls:_picUrls,
         actionText:"+"
       })
     },
   })
  },
  delPic:function(e){
   var _picUrls = this.data.picUrls;
   _picUrls.splice(e.target.dataset.index,1);
   if(_picUrls.length === 0){
     this.setData({
       actionText:"拍照/相册"
     })
   }
   this.setData({
     picUrls:_picUrls
   })
  },
  changeNumber:function(e){
    this.setData({
      inputValue:{
        num: e.detail.value,
        desc:this.data.inputValue.desc
      }
    })
  },
  changeDesc:function(e){
    this.setData({
      inputValue: {
        num: this.data.inputValue.num,
        desc: e.detail.value
      }
    })
  },
  submit:function(e){
    if(this.data.checkboxValues.length && this.data.picUrls.length){
      wx.showLoading({
        title: '正在提交',
      })
      wx.request({
        url: 'https://www.easy-mock.com/mock/5d1dedf1330a57553d679576/zzx/successSubmit#!method=get',
        success:(res)=>{
         wx.hideLoading()
         wx.redirectTo({
           url: '../index/index',
         })
          wx.showToast({
            title: '提交成功',
          })
        }
      })
    }else{
      wx.showModal({
        title: '警告',
        content: '请填写完整信息',
        success:(res)=>{
          if(res.cancel){
            wx.redirectTo({
              url: '../index/index',
            })
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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