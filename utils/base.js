import {Config} from '../utils/config.js';
class Base{
  constructor(){
    this.baseRequestUrl = Config.resUrl;
  }
  request(params){
    var url = this.baseRequestUrl + params.url;
    if (!params.type){
      params.type = 'GET';
    }
    wx.request({
      url: url,
      method: params.type,
      data: params.data,
      header:{
        'concent-type':'application/josn',
        'token':wx.getStorageSync('token')
      },
      success:function(res){
        params.sCollBack && params.sCollBack(res.data)
      },
      fail:function(err){
        console.log(err);
      }
    })
  }

  getDataSet(event,key){
    return event.currentTarget.dataset[key];
  }
}

export {Base};