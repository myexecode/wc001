
const dampNum = 0.95; // 衰减指数
const transitionExp = 0.3; // 回弹动画的时长

let lastY = 0;  // 存储手指按下时的y轴位置
let rubNum = 1; // 摩擦力
let refreshState = 0; // 刷新状态： 0-初始状态，1-正在刷新,

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
        offsetHeight : -50,
        pullDownTip: "下拉刷新",
        tstNum : 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //触摸开始
        handletouchstart: function (event) {
            if (refreshState == 1){
                console.log('刷新中...')
                return;
            }
            lastY = event.touches[0].clientY;
        },
        //触摸移动
        handletouchmove: function (event) {
            // console.log(event);

            if (refreshState == 1) {
                return;
            }

            let moveY = event.touches[0].clientY;
            let offsetY = moveY - lastY;

            rubNum *= dampNum; // 衰减摩擦力
            // console.log(rubNum,'===');
            offsetY *= rubNum; // 摩擦偏移量

            let { offsetHeight } = this.data;

            // console.log(offsetY,'===');
            this.setData({
                offsetHeight: offsetHeight + offsetY
            });

            // console.log(this.data.offsetHeight)

            lastY = moveY;
        },
        //触摸结束
        handletouchend: function (event) {
            // console.log(event);
            // console.log(this.data.offsetHeight,'end---');

            if (refreshState == 1) {
                return;
            }

            this.setData({
                tstNum: transitionExp
            });

            if ( this.data.offsetHeight > 0 ){

                refreshState = 1;

                this.setData({
                    offsetHeight: 0,
                    pullDownTip : "正在刷新"
                })

                setTimeout( () => {
                    this.stopPullRefresh();
                },2000 )

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
                offsetHeight: -50,
                pullDownTip: "下拉刷新"
            },() => {
                this.setData({
                    tstNum: 0
                });
                refreshState = 0;
            })

        }
    }
})
