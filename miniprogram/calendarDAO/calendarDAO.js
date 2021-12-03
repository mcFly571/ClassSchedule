Component({
  /**
   * 组件的属性列表
   */
  properties:{
    currentYear:{
      type:Number,
      value:new Date().getFullYear()
    },
    currentMonth:{
      type:Number,
      value:new Date().getMonth() + 1
    }
  },
  /**
   * 组件的初始数据
   */
  data:{
    currentMonthDateLen:0,  //当月天数
    preMonthDateLen:0,  //当月中，上月多余天数
    allArr:[],  //当月所有数据
    rDate:0,
    rYear:0,
    rMonth:0
  },
  ready(){
    this.getAllArr()
  },
  /**
   * 数组的方法列表
   */
  methods:{
    //获取某年某月总共多少天
    getDateLen(year, month){
      let actualMonth = month - 1;
      let timeDistance = +new Date(year, month) - +new Date(year, actualMonth);
      return timeDistance / (1000 * 60 * 60 * 24);
    },
    //获取某月1号是周几
    getFirstDateWeek(year, month){
      return new Date(year, month - 1, 1).getDay()
    },
    //上月 年、月
    preMonth(year, month){
      if(month == 1){
        return {
          year: --year,
          month: 12
        }
      }else{
        return{
          year:year,
          month:--month
        }
      }
    },
    //下月 年、月
    nextMonth(year, month){
      if(month == 12){
        return{
          year:++year,
          month:1
        }
      }else{
        return{
          year:year,
          month:++month
        }
      }
    },
    //获取当月数据，返回数组
    getCurrentArr(){
      this.isNow()
      let currentMonthDateLen = this.getDateLen(this.data.currentYear, this.data.currentMonth)  //获取当月天数
      let currentMonthDateArr = []
      if(currentMonthDateLen > 0){
        for(let i = 1; i <= currentMonthDateLen; ++i){
          currentMonthDateArr.push({
            month:'current',
            date:i,
            // 判断今天为几号
            isCurrentDate: i == this.data.rDate ?  true : false,
          })
        }
      }
      this.setData({
        currentMonthDateLen
      })
      return currentMonthDateArr
    },
    //获取当月中，上月多余数据，返回数组
    getPreArr(){
      let preMonthDateLen = this.getFirstDateWeek(this.data.currentYear, this.data.currentMonth)  //当月1号是周几 == 上月残余天数
      let preMonthDateArr = []  //定义空数组
      if(preMonthDateLen > 0){
        let{year, month} = this.preMonth(this.data.currentYear, this.data.currentMonth) //获取上月年、月
        let date = this.getDateLen(year, month)
        for(let i = 0; i < preMonthDateLen; ++i){
          preMonthDateArr.unshift({ //尾部追加
            month:'pre',
            date:date
          })
          --date
        }
      }
      this.setData({
        preMonthDateLen
      })
      return preMonthDateArr
    },
    //获取当月中，下月多余数据，返回数组
    getNextArr(){
      let nextMonthDateLen = 42 - this.data.preMonthDateLen - this.data.currentMonthDateLen //下月多余天数
      let nextMonthDateArr = [] //定义空数组
      if(nextMonthDateLen > 0){
        for(let i = 1; i <= nextMonthDateLen; ++i){
          nextMonthDateArr.push({
            month: 'next',  //只是为了增加标识，区分当前月、上月
            date: i,
          })
        }
      }
      return nextMonthDateArr
    },

    //整合当前所有数据
    getAllArr(){
      let preArr = this.getPreArr()
      let currentArr = this.getCurrentArr()
      let nextArr = this.getNextArr()
      let allArr = [...preArr, ...currentArr, ...nextArr]
      this.setData({
        allArr
      })
      let sendObj = {
        currentYear: this.data.currentYear,
        currentMonth: this.data.currentMonth,
        allArr: allArr
      }
      this.triggerEvent('sendObj', sendObj)
    },

    //点击上月
    gotoPreMonth(){
      let{year, month} = this.preMonth(this.data.currentYear, this.data.currentMonth)
      this.setData({
        currentYear: year,
        currentMonth: month
      })
      this.getAllArr()
    },

    //点击下月
    gotoNextMonth(){
      let{year, month} = this.nextMonth(this.data.currentYear, this.data.currentMonth)
      this.setData({
        currentYear: year,
        currentMonth: month
      })
      this.getAllArr()
    },
    isNow(){
      let timestamp = Date.parse(new Date())
      let date = new Date(timestamp)
      
      this.setData({
        rYear : date.getFullYear(),
        rMonth : (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1),
        rDate : date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      })
    },

    gotoNewView:function({currentTarget}){
      let iYear = currentTarget.dataset.year
      let iMonth = currentTarget.dataset.month
      let iDate = currentTarget.dataset.date
      let dateStr = iYear+"-"+iMonth+"-"+iDate
      // 点击的日期为星期几
      let dayOfWeek = new Date(dateStr).getDay()
      // 调用全局变量app来判断是否登录
      var app = getApp()
      if(app.globalData.isLogin == true){   //已登录
        if(dayOfWeek == 0){
          // bindtap点击事件，传送到对应的星期行程表
          wx.navigateTo({
            url: '/view/Schedule/sunday/sunday',
          })
        } else if (dayOfWeek == 1) {  
          wx.navigateTo({
            url: '/view/Schedule/monday/monday',
          })
        } else if (dayOfWeek == 2) {  
          wx.navigateTo({
            url: '/view/Schedule/tuesday/tuesday',
          })
        } else if (dayOfWeek == 3) {  
          wx.navigateTo({
            url: '/view/Schedule/wednesday/wednesday',
          })
        } else if (dayOfWeek == 4) {  
          wx.navigateTo({
            url: '/view/Schedule/thursday/thursday',
          })
        } else if (dayOfWeek == 5) {  
          wx.navigateTo({
            url: '/view/Schedule/friday/friday',
          })
        } else if (dayOfWeek == 6) {  
          wx.navigateTo({
            url: '/view/Schedule/saturday/saturday',
          })
        }
      }else{
        wx.switchTab({
          url: '/view/login/login',
        })
      }
    }
  }
})