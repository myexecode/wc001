import {
    HOST,
    TIME
} from "./config.js";

const api = (params) => {
    wx.showLoading({
        title: '...'
    })
    return new Promise( (resolve,reject) => {
        wx.request({
            url: HOST + params.url,
            data: params.data,
            timeout: params.t || TIME,
            method: params.method || "get",
            success: res => resolve(res),
            fail: err => {

                wx.showToast({
                    title: '网络请求失败',
                    icon : "none",
                    duration : 3000
                })

                return reject(err);
            },
            complete: end => { 
                wx.hideLoading();
             }
        })
    } )
}

export default api;