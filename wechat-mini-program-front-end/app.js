// app.js
App({
  onLaunch() {
    const user = wx.getStorageSync('user')
    if (!user) {
      wx.navigateTo({
        url: './pages/login/login',
      })
    }
  },
  globalData: {
    userInfo: null
  }
})