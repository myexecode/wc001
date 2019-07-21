// components/my-select/my-select.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        poter : 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        incrementFn(num=10){
            let { poter } = this.data;
            this.setData({
                poter : poter + num
            })
        } 
    }
})
