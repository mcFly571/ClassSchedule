Page({
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp()
    wx.request({
      url: 'http://www.mcflyuuuuu.top/wx_program/displayRecord.php',
      data:{
        openid:app.globalData.openid,
        dayOfWeek:"星期一",
      },
      success: result=>{
        console.log(result)
        this.setData({
          scheduleData:result.data.daySchedule,
        })
      }
    })
  }
})