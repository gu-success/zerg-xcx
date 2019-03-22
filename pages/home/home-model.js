import {Base} from '../../utils/base.js';
class Home extends Base{
  constructor(){
    super();
  }
  getBannerData(id,callBack){
    var params = {
      url: 'banner/' + id,
      sCollBack:function(res){
        callBack & callBack(res.items);
      }
    };
    this.request(params);
  }

  getThemeData(ids, callBack){
    var params = {
      url: 'theme?ids=' + ids,
      sCollBack: function (res) {
        callBack & callBack(res);
      }
    };
    this.request(params);
  }

  getProductsData(callBack) {
    var params = {
      url: 'product/recent',
      sCollBack: function (res) {
        callBack & callBack(res);
      }
    };
    this.request(params);
  }
}

export{Home};