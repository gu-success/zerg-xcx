import { Base } from '../../utils/base.js';
class Product extends Base{
  constructor(){
    super();
  }

  getProductInfo(id,callBack){
    var params = {
      url:'product/'+id,
      sCollBack: function (res){
        callBack & callBack(res);
      }
    }
    this.request(params);
  }
}
export {Product};