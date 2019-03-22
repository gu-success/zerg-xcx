import {Theme} from 'theme-model.js';
var theme = new Theme();
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
    this.data.id = options.id;
    this.data.name = options.name;
    this._loadData();
  },
  onReady(){
    wx.setNavigationBarTitle({
      title:this.data.name,
    })
  },
  _loadData(){
    theme.getThemeData(this.data.id,(res)=>{
      this.setData({
        'themeArr': res
      })
    })
  },
  onProductsItemTap: function (event) {
    var id = theme.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id,
    })
  }
})