// view/userControl/c5/c5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  mfAttribute:function(e){
    this.setData({
      mFir:e.detail.value
    })
  },
  msAttribute:function(e){
    this.setData({
      mSec:e.detail.value
    })
  },
  afAttribute:function(e){
    this.setData({
      aFir:e.detail.value
    })
  },
  asAttribute:function(e){
    this.setData({
      aSec:e.detail.value
    })
  },

  //连接数据库的基本信息
  dbLink:function(){
    var app = getApp()
    console.log(app.globalData.openid)
    wx.request({
      url: 'http://www.mcflyuuuuu.top/wx_program/insertRecord.php', //服务器地址(php文件)
      // 传到服务器的数据
      data:{
        openid:app.globalData.openid,
        dayOfWeek:"星期五",
        mFir:this.data.mFir,  
        mSec:this.data.mSec,
        aFir:this.data.aFir,
        aSec:this.data.aSec
      },
      success:function(res){
        console.log(res)
      }
    })
    wx.showLoading({
      title: 'inserting',
    })

    setTimeout(function (){
      wx.hideLoading()
      wx.showToast({
        title: 'success',
      })
    },1500)
  }
})