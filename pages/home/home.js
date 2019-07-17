// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onCreateCanvas(){
    console.log('canvas');
    const ctx = wx.createCanvasContext('firstCanvas');
    let that = this;

  
    
    // that.drawRoundRect2(ctx, 0, 0, 150, 200, 6);
    
    // ctx.save();
    ctx.setFillStyle('red');
    ctx.fillRect(0, 0, 150, 200);
    ctx.draw();
    // wx.downloadFile({
    //   url: 'http://lusjh.com/static/images/banner00.jpg',
    //   success: function (res) {

    //     // that.borderRadiusFn(ctx);

    //     ctx.drawImage(res.tempFilePath,0, 0,150,200)

    //     that.drawRoundRect2(ctx, 0, 0, 150, 200, 6);

    //     ctx.save();
        

    //     ctx.draw()
    //   }
    // })
  },
  onMone(){
    return false;
  },
  borderRadiusFn(ctx){
    let r = Math.sqrt(100 * 100 + 75 * 75);
    console.log(r)
    ctx.setFillStyle("#fff")
    ctx.beginPath();
    ctx.arc(6, 6, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.clip();
  },
  drawRoundRect2(ctx, x, y, width, height, radius){
    ctx.setStrokeStyle('#000')
    ctx.setLineWidth(5)
    ctx.beginPath();
    ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
    ctx.lineTo(width - radius + x, y);
    ctx.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);
    ctx.lineTo(width + x, height + y - radius);
    ctx.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2);
    ctx.lineTo(radius + x, height + y);
    ctx.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.clip();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onCreateCanvas();
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