import { Category } from 'category-model.js';
var category = new Category();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentMenuIndex: 0 ,
    ladedDate:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
  },

  _loadData:function(){
    category.getCategoryType((res)=>{
      this.setData({
        categoryTypeArr: res
      })
      category.getProductsByCategory(res[0].id, (data) => {
        var dataObj = {
          procucts: data,
          topImgUrl: res[0].topic_img.url,
          title: res[0].name
        };
        this.setData({
          categoryProducts: dataObj
        })
        this.data.ladedDate[0] = dataObj;
      })
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '分类',
    })
  },

  changeCategory(event){
    var index = category.getDataSet(event, 'index');
    var id = category.getDataSet(event, 'id');

    this.setData({
      currentMenuIndex: index
    });
    if (!this.isLadedDate(index)){
      category.getProductsByCategory(id, (data) => {
        var dataObj = {
          procucts: data,
          topImgUrl: this.data.categoryTypeArr[index].topic_img.url,
          title: this.data.categoryTypeArr[index].name
        };
        this.setData({
          categoryProducts: dataObj
        })
        this.data.ladedDate[index] = dataObj;
      })
    }else{
      this.setData({
        categoryProducts: this.data.ladedDate[index]
      })
    }
  },

  isLadedDate:function(index){
    if (this.data.ladedDate[index]){
      return true;
    }
    return false;
  },

  onProductsItemTap: function (event) {
    var id = category.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id,
    })
  }
})