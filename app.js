const TOKEN = "token";

App({
    onLaunch: function() {
        // // 从缓存中获取登录token
        // let token = wx.getStorageSync(TOKEN);
        // // 判断是否有token
        // if (token && token.length > 0){
        //     // 判断token是否过期
        //     let token_res = this.checkTokenFn(token);
        //     if (token_res) {
        //         console.log("已经登录")
        //     } else {
        //         console.log("token 过期重新登录")
        //         this.loginFn(); // 执行登录
        //     }
        // }else{
        //     console.log("执行登录")
        //     this.loginFn(); // 执行登录
        // }
        
    },
    checkTokenFn(token){
        return true; // 暂时没有后台，所以直接返回 true
    },
    loginFn(){
        wx.login({
            success : (res) => {
                // console.log(res)
                wx.setStorageSync(TOKEN, res.code);
            },
            fail : (err) => {
                console.log(err)
            }
        })
    }
})