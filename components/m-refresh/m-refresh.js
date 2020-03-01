// *: 必须在组件外部加一层外框并且固定宽高
const dampNum = 0.95; // 衰减指数
const transitionExp = 0.3; // 回弹动画的时长

const refreshTipHeight = 50; // 刷新提示文字或动画的dom高度，初始化的偏移量回取此值的负数

let lastY = 0;  // 存储手指按下时的y轴位置
let rubNum = 1; // 摩擦力

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // 触发下拉刷新的滑动距离(大于0 ，因为组件初始会在y轴便宜 offsetHeight 值，
        // 所以下拉刷新的实际距离是：downRefreshDistance + Math.abs(offsetHeight) )
        downRefreshDistance : {
            type : Number,
            value : 0
        },
        // 是否启用刷新功能 false 将关闭所有事件监听
        isListenRefresh : {
            type : Boolean,
            value : true
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        refreshState: 0, // 刷新状态： 0-初始状态，1,松开刷新，2-正在刷新,
        _refreshTipHeight: refreshTipHeight,
        offsetHeight: -refreshTipHeight,  // 
        pullDownTip: ["下拉刷新", "松开刷新","正在刷新"],
        tstNum: 0  // 真正起作用的回弹动画的时长
    },
    attached(){

    },

    /**
     * 组件的方法列表
     */
    methods: {
        //触摸开始
        handletouchstart: function (event) {
            if (!this.data.isListenRefresh){
                return;
            }
            if (this.data.refreshState == 2){
                console.log('刷新中...')
                return;
            }
            lastY = event.touches[0].clientY;
        },
        //触摸移动
        handletouchmove: function (event) {
            // console.log(event);
            if (!this.data.isListenRefresh) {
                return;
            }

            if (this.data.refreshState == 2) {
                return;
            }

            let moveY = event.touches[0].clientY;
            let offsetY = moveY - lastY;

            // console.log(offsetY,'===');
            if (offsetY < 0){
                // 当offsetY小于0时说明是上拉操作，暂不做上拉加载功能
                // console.log("上拉加载...");
                return;
            }

            // 当偏移量小于1时不做摩擦处理
            if (offsetY > 1){
                rubNum *= dampNum; // 衰减摩擦力
                // console.log(rubNum,'===');
                offsetY *= rubNum; // 摩擦偏移量
            }

            let { offsetHeight, refreshState, downRefreshDistance } = this.data;
            offsetHeight = offsetHeight + offsetY;
            // console.log(offsetY,'===');
            this.setData({
                offsetHeight,
                refreshState: offsetHeight > downRefreshDistance ? 1 : refreshState
            });

            // console.log(this.data.offsetHeight)

            lastY = moveY;
        },
        //触摸结束
        handletouchend: function (event) {
            // console.log(event);
            // console.log(this.data.offsetHeight,'end---');
            if (!this.data.isListenRefresh) {
                return;
            }

            if (this.data.refreshState == 2) {
                return;
            }
            let { offsetHeight, downRefreshDistance } = this.data;

            // 开启回弹动画
            this.setData({
                tstNum: transitionExp
            });

            // 一开始的偏移量默认是-50
            if ( offsetHeight > downRefreshDistance ){

                this.setData({
                    offsetHeight: 0,
                    refreshState : 2
                })

                // 发送正在刷新事件
                this.triggerEvent('pullDownRefreshEvent');

            }else{
                this.stopPullRefresh();
            }

            rubNum = 1;
        },
        //触摸取消
        handletouchcancel: function (event) {
            console.log(event);
        },
        //停止刷新
        stopPullRefresh() {
            this.setData({
                offsetHeight: -refreshTipHeight
            },() => {
                // 关闭回弹动画
                this.setData({
                    tstNum: 0,
                    refreshState : 0
                });
            })

        }
    }
})
