// components/my-tabbar/my-tabbar.js
Component({
    properties: {
        propList : {
            type : Array,
            value : [
                {title : 'a'},
                { title: 'b' },
                { title: 'c' },
            ]
        }
    },
    data: {
        currentIndex : 0
    },
    methods: {
        onChangeTab(e){
            // console.log(e.currentTarget)
            let { index, tab } = e.currentTarget.dataset;
            this.setData({
                currentIndex : index
            })
            this.triggerEvent("tabarChangeEvent",{index,tab},{});
        }
    }
})
