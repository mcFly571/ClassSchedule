Page({
  data:{
    nickName:'',
    icon:'',
    userCode:'',
    hasLogin:'',
    getOpenid:''
  },
  login(){
    var app = getApp()
    console.log('点击事件执行了')
    // console.log(app.globalData.isLogin)
    // http://1.13.8.27/wx_login.php
    wx.getUserProfile({
      desc: '需要授权登录',
      success:res=>{
        app.globalData.isLogin=true
        var user = res.userInfo
        console.log(user)
        console.log('登录成功')
        this.setData({
          nickName:user.nickName,
          icon:user.avatarUrl,
          hasLogin:app.globalData.isLogin
        })       
        wx.login({
          success:res=>{
            var code = res.code
            this.setData({
              userCode:code
            })
            // console.log(this.data.userCode)
            // console.log(this.data.nickName)
            //连接服务器
            wx.request({
              url: 'http://www.mcflyuuuuu.top/wx_program/userLogin.php',
              data:{
                code:this.data.userCode,
                nickName:this.data.nickName,
              },
              success:res=>{
                console.log(res)
                // console.log(res.data.openid)
                app.globalData.openid = res.data.openid
                console.log(app.globalData.openid)
              }
            })
          }
        })
      }
    })
  },
  outLogin(){
    var app = getApp()
    app.globalData.isLogin = false
    console.log('登录已退出')
    this.setData({
      hasLogin:app.globalData.isLogin
    })
  }
})