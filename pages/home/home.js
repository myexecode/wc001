// pages/home/home.js

import utils from "../../utils/utils.js";

const app  = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(utils.TOKEN)
  },
  onLogin(){
      // 从缓存中获取登录token
      let token = wx.getStorageSync(utils.TOKEN);
      // 判断是否有token
      if (token && token.length > 0) {
          // 判断token是否过期
          let token_res = utils.checkTokenFn(token);
          if (token_res) {
              console.log("已经登录")
          } else {
              console.log("token 过期重新登录")
              utils.loginFn(); // 执行登录
          }
      } else {
          console.log("执行登录")
          utils.loginFn(); // 执行登录
      }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})