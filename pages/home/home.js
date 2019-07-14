// pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: 'http://lusjh.com/specials/gaojidongxiao/img/2.jpg',
    isHideShow : true,
    qCode: "http://tmp/wx9aa6a5838f8c0adb.o6zAJswLeNkpcZDrUcWA3zd-YBYo.GkgCZfqBM4Pu19ffefc0bc8d414ff1f8e65df8a95d46.png",
    qCodeBg: "http://tmp/wx9aa6a5838f8c0adb.o6zAJswLeNkpcZDrUcWA3zd-YBYo.wEQUceBLtrni2d4270e0a22e3190f8252d98be077062.jpg",
    accessTokken: "23_zojVrWcx--LTtuJyW4zHJwE5NELok0bE0Dvth_ukjJ0CxMS8Wz35XEbQhWJyRjdmELkm33ytvpYYs1IqSBNCNg-dAK73aQ6Ap3MCJY0KQJ9RqIBxAMFXorTxwTSju2aorXXEWnVfENYlgymROLZaAGAHES"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 9ab618fb18aac2568dd152ea99d1f0b9
    // ""
  },
  onCreateQCodeToShare(){
    // 选择并缓存测试小程序码
    // wx.chooseImage({
    //   count: 1,
    //   sizeType: ['original', 'compressed'],
    //   sourceType: ['album', 'camera'],
    //   success(res) {
    //     // tempFilePath可以作为img标签的src属性显示图片
    //     console.log(res.tempFilePaths)
    //   }
    // })
    // 显示canvas外框
    this.setData({
      isHideShow : false
    })
    // 获取 目标图片外框和canvas的react 尺寸
    let query = wx.createSelectorQuery();
    query.select('#taget_img_wrap').boundingClientRect();
    query.select('#canvas_wrap').boundingClientRect();
    query.exec( (res) => {
      this.clipImgFn(res[0],res[1]); // 裁剪图片并渲染到canvas中
    })
  },
  // 裁剪指定图片
  clipImgFn(tagSize,cavasSize){
    // console.log(res,'---')
    let { imgUrl, qCode, qCodeBg } = this.data;
    let wxGetImageInfo = this.promisify(wx.getImageInfo);
    Promise.all([
      wxGetImageInfo({
        src: qCodeBg
      }),
      wxGetImageInfo({
        src: qCode
      })
    ]).then(imgSize => {
      // console.log(imgSize)
      if (imgSize[0].errMsg == 'getImageInfo:ok' && imgSize[1].errMsg == 'getImageInfo:ok'){
        let imgDs = this.calculateRelativeOffset(tagSize, imgSize[0]);
        let cvsDs = this.calculateRelativeOffset(tagSize, cavasSize);
      // console.log(disRect,'rr');
        let ctx = wx.createCanvasContext('share_canvas');
        // 绘制背景图
        ctx.drawImage(imgSize[0].path, imgDs.x, imgDs.y, imgDs.w, imgDs.h, cvsDs.x, cvsDs.y, imgDs.w,imgDs.h);
        // ctx.drawImage(imgSize[0].path,50, 50, 150, 150,0,0,150,150);
        // 绘制文字
        ctx.setTextAlign('center');
        ctx.setFillStyle('#f3a721');
        ctx.setFontSize(22);
        ctx.fillText('作者：卢少杰', cavasSize.width / 2, 50);
        // 绘制小程序码
        let codeSize = 150;
        let codePst = {
          x: cavasSize.width - codeSize,
          y: cavasSize.height - codeSize
        };
        ctx.drawImage(imgSize[1].path, codePst.x, codePst.y, codeSize, codeSize);
        ctx.draw();
      }else{
        wx.showToast({
          title: "图片裁剪失败"
        })
      }
    })
  },
  // 保存二维码图片
  onSaveInviteCard(){
    // cavas生成图片
    wx.canvasToTempFilePath({
      canvasId: 'share_canvas',
      fileType:'jpg',
      quality:1,
      success(res) {
        // console.log(res.tempFilePath);
        // 保存图片到本地相册
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            console.log(res);
            wx.showToast({
              title: '保存成功'
            })
          },
          fail(err){
            console.log(err,'图片保存失败');
          }
        })
      },
      fail(err) {
        console.log(err,'cavas生成图片失败');
      }
    })
  },
  // 计算两个矩形的相对偏移量(即：下矩形定位于大矩形的中心位置，计算小矩形左上角距大矩形左上角的距离)
  // rectL大矩形尺寸信息，rectS小尺寸信息
  calculateRelativeOffset(rectS,rectL){
    // console.log(rect1, rect2,'aaa')
    let disW = rectL.width - rectS.width;
    let disH = rectL.height - rectS.height;
    let obj = {
      x: disW > 0 ? disW / 2 : 0,
      y: disH > 0 ? disH / 2 : 0,
      w: rectS.width,
      h: rectS.height
    }
    return obj;
  },
  // canvas出错的回调函数
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  // promise 封装
  promisify: api => {
    return (options, ...params) => {
      return new Promise((resolve, reject) => {
        const extras = {
          success: resolve,
          fail: reject
        }
        api({ ...options, ...extras }, ...params)
      })
    }
  },
  // 
  onOff(){
    let { isHideShow} = this.data;
    this.setData({
      isHideShow: !isHideShow
    })
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