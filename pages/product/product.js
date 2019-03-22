import { Product } from 'product-model.js';
var product = new Product();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countsArray : [1,2,3,4,5,6,7,8,9,10],
    options: ['商品详情', '产品参数', '售后保障'],
    productCounts : 1,
    currentTabsIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id = options.id;
    this._onLoad();
  },
  onReady() {
    wx.setNavigationBarTitle({
      title: '商品详情',
    })
  },
  _onLoad:function(){
    product.getProductInfo(this.data.id,(res)=>{
      this.setData({
        'productinfo': res
      })
    })
  },

  bindPickerChange:function(event){
    this.setData({
      productCounts: this.data.countsArray[event.detail.value]
    })
  },

  onTabsItemTap:function(event){
    this.setData({
        currentTabsIndex: product.getDataSet(event, 'index')
    })
  }
})