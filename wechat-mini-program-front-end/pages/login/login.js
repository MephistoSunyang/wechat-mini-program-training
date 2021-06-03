import Toast from '@vant/weapp/toast/toast'
const configs = require('../../common/configs.js')

// pages/login/login.js
Page({

  data: {
    username: '',
    password: ''
  },

  usernameChange(event) {
    this.setData({
      username: event.detail
    })
    console.log('username change', event)
  },

  passwordChange(event) {
    this.setData({
      password: event.detail
    })
    console.log('password change', event)
  },

  login() {
    Toast.loading({
      message: '登陆中...',
      mask: true
    })
    wx.request({
      method: 'post',
      url: `${configs.api}/login`,
      data: {
        username: this.data.username,
        password: this.data.password
      },
      success: (result) => {
        Toast({
          type: 'success',
          message: '登录成功！',
          mask: true,
          duration: 1000,
          onClose: () => {
            wx.navigateBack()
          }
        })
        wx.setStorageSync('user', result.data)
        console.log('login result', result)
      }
    })
  }
})