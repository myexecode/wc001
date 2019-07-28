// components/m-swiper/m-swiper.js
Component({
    properties: {
        dataLsit : {
            type : Array,
            value : []
        },
        oConfig : {
            type : Object,
            value : {}
        }
    },
    data: {
        current : 0,
        _oConfig : {
            typeMode : 0,
            autoplay : true,
            dots : true,
            acColor: '#ff5777',
            circular : true,
            prevMg : "0rpx",
            nextMg : "0rpx",
            timer : 3000
        },
        typeModeArr : ["df_mode","scal_mode"]
    },
    methods: {
        onAnimationfinish(e){
            // console.log(e,'=======');
            let { current } = e.detail;
            this.setData({
                current
            })
        }
    },
    externalClasses: [],
    attached() {
        let { oConfig, _oConfig } = this.data;
        let newConfig = Object.assign({}, _oConfig, oConfig);
        this.setData({
            _oConfig: newConfig
        })
    }
})
