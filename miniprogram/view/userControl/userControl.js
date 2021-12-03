// view/userControl/userControl.js
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
  //跳转到设置星期一
  gotoSetMonDay:function(){
    var app = getApp()
    if(app.globalData.isLogin == true){
      wx.navigateTo({
        url: '/view/userControl/c1/c1',
      })
    }else{
      wx.switchTab({
        url: '/view/login/login',
      })
    }
  },
  //跳转到设置星期二
  gotoSetTuesday:function(){
    var app = getApp()
    if(app.globalData.isLogin == true){
      wx.navigateTo({
        url: '/view/userControl/c2/c2',
      })
    }else{
      wx.switchTab({
        url: '/view/login/login',
      })
    }
  },
  //跳转到设置星期三
  gotoSetWednesday:function(){
    var app = getApp()
    if(app.globalData.isLogin == true){
      wx.navigateTo({
        url: '/view/userControl/c3/c3',
      })
    }else{
      wx.switchTab({
        url: '/view/login/login',
      })
    }
  },
  //跳转到设置星期四
  gotoSetThursday:function(){
    var app = getApp()
    if(app.globalData.isLogin == true){
      wx.navigateTo({
        url: '/view/userControl/c4/c4',
      })
    }else{
      wx.switchTab({
        url: '/view/login/login',
      })
    }
  },
  //跳转到设置星期五
  gotoSetFriday:function(){
    var app = getApp()
    if(app.globalData.isLogin == true){
      wx.navigateTo({
        url: '/view/userControl/c5/c5',
      })
    }else{
      wx.switchTab({
        url: '/view/login/login',
      })
    }
  },
  //跳转到设置星期六
  gotoSetSaturday:function(){
    var app = getApp()
    if(app.globalData.isLogin == true){
      wx.navigateTo({
        url: '/view/userControl/c6/c6',
      })
    }else{
      wx.switchTab({
        url: '/view/login/login',
      })
    }
  },
  //跳转到设置星期日
  gotoSetSunday:function(){
    var app = getApp()
    if(app.globalData.isLogin == true){
      wx.navigateTo({
        url: '/view/userControl/c7/c7',
      })
    }else{
      wx.switchTab({
        url: '/view/login/login',
      })
    }
  }
})