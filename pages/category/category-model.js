import { Base } from '../../utils/base.js';
class Category extends Base{
  constructor(){
    super();
  }

  /*获取所有分类*/
  getCategoryType(callBack){
    var params = {
      url: 'category/all',
      sCollBack:function(res){
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
  
  /*获得某种分类的商品*/
  getProductsByCategory(id,callBack){
    var params = {
      url: 'product/by_category?id=' + id,
      sCollBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}
export {Category};