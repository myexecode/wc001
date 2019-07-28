// components/m-shoplist/m-shoplist.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        dataList : {
            type: Array,
            value : []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        currentI : 0,
        _test : [
            {
                id: 0,
                txt: 'a'
            },
            {
                id: 1,
                txt: 'b'
            },
            {
                id: 2,
                txt: 'c'
            }
        ]
    },
    methods: {
        onClick(e){
            // console.log(e,'===');
            let { index, info } = e.currentTarget.dataset;
            this.setData({
                currentI : index
            })

            this.triggerEvent( "tabChangeEvent",info );
        }
    }
})
