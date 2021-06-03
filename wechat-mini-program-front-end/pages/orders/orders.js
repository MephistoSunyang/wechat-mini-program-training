const configs = require('../../common/configs.js')

// pages/orders/orders.js
Page({

  data: {
    loading: false,
    orders: [],
    visibleIndexs: []
  },

  onShow: function(options) {
    this.getOrders()
  },

  getOrders() {
    this.setData({
      loading: true
    })
    const user = wx.getStorageSync('user')
    const userId = user.id
    wx.request({
      url: `${ configs.api }/orders?join=user&join=product`,
      success: (result) => {
        result.data.forEach((order) => {
          order.createdDate = this.formatCreatedDate(order.createdDate)
        })
        this.setData({
          loading: false,
          orders: result.data
        })
        console.log('get orders result', result)
      }
    })
  },

  visibleChange(event) {
    this.setData({
      visibleIndexs: event.detail,
    })
    console.log('visible change', event)
  },

  formatCreatedDate(createdDate) {
    return createdDate.split('T')[0].replace(/-/g, '/')
  }
})