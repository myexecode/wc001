// components/temp/temp.js
Component({
    // -----------------让使用者可以给组件传入数据
    properties : {
        title : {
            type : String,
            value : '',
            observer : (newv,oldv) => {

            }
        }
    },
    // ---------定义组件内部的初始化数据
    data : {
        counter : 0
    },
    // --------------- 自定义组件内部的初始化结构
    options : {
        multipleSlots : true, // 开启多插槽
        styleIsolation : ''  // 设置样式的隔离方式
    },
    // --------------------用于定义组件内部的函数
    methods : {

    },
    // -----------------------外界给组件传入额外的样式
    externalClasses : [],
    // -----------------------可以监听properties/data的改变
    observers : {
        counter : (newv) => {
            console.log(newv);
        }
    },
    // ----------------------组件中监听生命周期函数
    // 1 监听所在页面的生命周期
    pageLifetimes : {
        show(){
            console.log("页面显示出来")
        },
        hide(){
            console.log("页面隐藏起来")
        },
        resize(){
            console.log("尺寸发生改变")
        }
    },
    lifetimes : {
        created(){
            console.log("组价被创建")
        },
        attached(){
            console.log("组件被添加到页面中")
        },
        ready(){
            console.log("组件被渲染出来")
        },
        movied(){
            console.log("组件被移动到节点树的另一个位置")
        },
        detached(){
            console.log("组件被移除掉")
        }
    }

})
