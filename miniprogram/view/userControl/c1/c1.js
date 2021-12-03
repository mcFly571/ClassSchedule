Page({
  //数据库表中属性
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
        dayOfWeek:"星期一",
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