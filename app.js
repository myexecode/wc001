import api from "/api/comon-api.js";

App({

    /**
     * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     */
    onLaunch: function() {

        // 古老的原生调用方式-------------------
        // wx.request({
        //     url: 'http://lusjh.com/xjh/public/home/index/newarticlefn',
        //     success(res){
        //         console.log(res);
        //     },
        //     fail(err){
        //         console.log(err);
        //     }
        // })

        // 使用 promise 封装的方式 -- 1
        // api({
        //     url: "http://lusjh.com/xjh/public/home/index/newarticlefn"
        // }).then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })

        // 使用 promise 封装的方式-- 2
        api.getConfig({}).then( res => {
            console.log(res)
        } )
    },

    /**
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     */
    onShow: function(options) {

    },

    /**
     * 当小程序从前台进入后台，会触发 onHide
     */
    onHide: function() {

    },

    /**
     * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
     */
    onError: function(msg) {

    }
})