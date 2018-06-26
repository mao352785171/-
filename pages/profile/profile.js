// pages/profile/profile.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  logout:function(){
    wx.showModal({
      title: '友情提示',
      content: '您确定要退出吗?',
      confirmText: "确定",
      cancelText: "手滑",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          console.log('用户点击主操作')
        } else {
          console.log('用户点击辅助操作')
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //查看是否授权
      wx.getSetting({
        success:function(res){
          if (res.authSetting['scope.userInfo']){
            wx.getUserInfo({
              success: function (res) {
                console(res.userInfo)
              }
            })
          }
        }
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