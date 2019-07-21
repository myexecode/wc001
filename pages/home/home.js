// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        price : 0,
        num : 1,
        tabList : [
            {title : "苹果"},
            { title: "西瓜" },
            { title: "香蕉" },
            { title: "桃子" }
        ],
        isShowTmp : true
    },
    onAddEvent() {
        // console.log('========')
        let { price, num } = this.data;
        this.setData({
            price: ++price,
            num: ++num
        })
    }, 
    onTabarChangeEvent(e){
        console.log(e)
    },
    onChangeSelectCop(){
        let oSelect = this.selectComponent('#select_id'); // 获取组件对象

        // 调用组件内的函数，改变组件数据
        oSelect.incrementFn(20);
    },
    onDeletTmp(){
        let { isShowTmp } = this.data;
        console.log(isShowTmp,'onDeletTmp')
        this.setData({
            isShowTmp: !isShowTmp
        })
    }
})