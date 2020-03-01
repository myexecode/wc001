// pages/home/home.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        oRefresh : null,
        isFullCover : false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.data.oRefresh = this.selectComponent("#refresh_wrap_id");
    },
    onPullDownRefreshEvent(){
        this.setData({
            isFullCover : true
        });
        setTimeout(() => {
            this.data.oRefresh.stopPullRefresh();
            this.setData({
                isFullCover: false
            });
        }, 2000)
    }
    
})