
const host = "http://lusjh.com/";

const api = (options) => {

    return new Promise((resolve, reject) => {
        wx.request({
            url: host + options.url,
            method: options.mt || "get",
            data: options.data || {},
            success: resolve,
            fail: reject
        })
    })

};




export default {
    getConfig : opt => api({url: "xjh/public/home/index/newarticlefn",data : opt.data})
}