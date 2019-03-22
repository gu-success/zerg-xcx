import {Base} from '../../utils/base.js';
class Theme extends Base{
  constructor(){
    super();
  }
  
  getThemeData(id,callBack){
    var params = {
      url:'theme/'+id,
      sCollBack: function (res) {
        callBack & callBack(res);
      }
    }
    this.request(params)
  }
}
export {Theme}