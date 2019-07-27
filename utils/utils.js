const TOKEN = "token";

const checkTokenFn = (token) => {
    return true; // 暂时没有后台，所以直接返回 true
}

const loginFn = () => {
    wx.login({
        success: (res) => {
            // console.log(res)
            wx.setStorageSync(TOKEN, res.code);
        },
        fail: (err) => {
            console.log(err)
        }
    })
}

export default {
    TOKEN,
    checkTokenFn,
    loginFn
}