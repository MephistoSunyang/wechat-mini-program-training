import Toast from '@vant/weapp/toast/toast'
import Dialog from '@vant/weapp/dialog/dialog'
const configs = require('../../common/configs.js')

// pages/products/products.js
Page({

  data: {
    loading: false,
    products: []
  },

  onShow: function(options) {
    this.getProducts()
  },

  getProducts() {
    this.setData({
      loading: true
    })
    wx.request({
      url: `${ configs.api }/products`,
      success: (result) => {
        this.setData({
          loading: false,
          products: result.data
        })
        console.log('get products result', result)
      }
    })
  },

  buy(event) {
    const user = wx.getStorageSync('user')
    const userId = user.id
    const productId = event.currentTarget.dataset.productId
    Dialog.confirm({
        message: '确认购买当前产品吗？',
      })
      .then(() => {
        Toast.loading({
          message: '商品购买中...',
          mask: true
        })
        wx.request({
          method: 'post',
          url: `${ configs.api }/orders`,
          data: {
            userId,
            productId
          },
          success: (result) => {
            Toast({
              type: 'success',
              message: '购买成功',
              mask: true,
              duration: 1000
            })
            console.log('create order result', result)
          }
        })
      })
    console.log('user', user)
    console.log('buy event', event)
  }
})