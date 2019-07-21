// components/my-cop/my-cop.js
Component({
    // 设置样式是否穿透
    options: {  // 2.65以上版本才支持
        styleIsolation : "ioslated" // 互不影响
        // styleIsolation: 'shared'   // 相互影响
        // styleIsolation : "apply-shared"  // 页面样式 影响 组件样式
    },
    // 设置外部自定义class类名
    externalClasses : ["my-class"],
    /**
     * 组件的属性列表
     */
    properties: {
        btn : {
            type : Boolean,
            value : false,
            observer : (newV,oldV) => {
                console.log(newV,'--',oldV);
            }
        },
        propA: {
            type: Number,
            value: 0,
            observer: (newV, oldV) => {
                console.log(newV, '--', oldV);
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        msg : "my-cop 组件"
    },
    ready(){
        // console.log(this.data)
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onAddEvent(){
            // console.log('----------')
            this.triggerEvent("myCopAddEvent",{},{})
        }
    }
})
