// pages/home/home.js
import regeneratorRuntime from '../../utils/runtime.js';
import homeApi from "../../service/home.js";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // // 轮播图数据
        _bannerData : [
            {
                id : 0,
                imgUrl: 'http://lusjh.com/static/images/banner00.jpg'
            },
            {
                id: 1,
                imgUrl: 'http://lusjh.com/static/images/banner01.jpg'
            },
            {
                id: 2,
                imgUrl: 'http://lusjh.com/static/images/banner02.jpg'
            },
            {
                id: 3,
                imgUrl: 'http://lusjh.com/static/images/banner03.jpg'
            }
        ],
        bannerConfig : {
            typeMode: 1,
            prevMg: "50rpx",
            nextMg: "50rpx"
        },
        bannerData : [],
        // 推荐数据
        recommended : [
            {
                id : 0,
                imgUrl : '#f00',
                txt : '十点抢卷'
            },
            {
                id: 1,
                imgUrl: '#f0f',
                txt: '好物特卖'
            },
            {
                id: 2,
                imgUrl: '#00f',
                txt: '内购福利'
            },
            {
                id: 3,
                imgUrl: '#ff0',
                txt: '初秋上新'
            }
        ],
        _recommended : [],
        // 分类商品数据
        tabList : [],
        _tabList : [
            {
                id: 0,
                txt: '儿童',
                type : 'a'
            },
            {
                id: 1,
                txt: '古装',
                type: 'b'
            },
            {
                id: 2,
                txt: '女人',
                type: 'c'
            }
        ],
        category : {
            a : {
                page : 1,
                list : []
            },
            b: {
                page: 1,
                list: []
            },
            c: {
                page: 1,
                list: []
            }
        },
        currentShopType : 'a',
        _a : [
            {
                id: 0,
                imgUrl: '#ccc',
                title: '融合舒适与时尚的服饰'
            },
            {
                id: 1,
                imgUrl: '#ccc',
                title: '十分多变百搭十分多变百搭十分多变百搭十分多变百搭'
            },
            {
                id: 2,
                imgUrl: '#ccc',
                title: '适合儿童穿着的服装'
            },
            {
                id: 3,
                imgUrl: '#ccc',
                title: '女性夏装首选服装类型'
            }
        ],
        _b: [
            {
                id: 0,
                imgUrl: '#ccc',
                title: '初语漫威长款连衣裙2018秋装新款织带后'
            },
            {
                id: 1,
                imgUrl: '#ccc',
                title: '初语薄款裙子女2019春装新款时尚H型宽松纯色开襟长款衬衫连衣裙 XL 浅水蓝'
            },
            {
                id: 2,
                imgUrl: '#ccc',
                title: '初语雪纺连衣裙仙女2018秋季新款名媛气'
            },
            {
                id: 3,
                imgUrl: '#ccc',
                title: '初语V领长款裙子女2019春装新款文艺纯'
            }
        ],
        _c: [
            {
                id: 0,
                imgUrl: '#ccc',
                title: '【新款2017】中老年妈妈装40-60岁女装'
            },
            {
                id: 1,
                imgUrl: '#ccc',
                title: '828新款天天特价七分袖白衬衫女宽松大'
            },
            {
                id: 2,
                imgUrl: '#ccc',
                title: 'Lagogo2018夏季新款小清新碎花V领吊'
            },
            {
                id: 3,
                imgUrl: '#ccc',
                title: '2019新款韩版夏季荷叶边灯笼袖上衣格子'
            }
        ]
    },
    onLoad: function(options) {
        let { 
            _bannerData,
            recommended,
            _tabList
        } = this.data;

        this.setData({
            bannerData: _bannerData,
            _recommended: recommended,
            tabList: _tabList
        })

        this.getShopList('a');
        this.getShopList('b');
        this.getShopList('c');

        // this.getMultiDataFn().then( res => {
        //     this.setData({
        //         bannerData: _bannerData,
        //         _recommended: recommended
        //     })
        // } )
    },
    async getMultiDataFn() {
        let res = await homeApi.getMultiData();
        
        return res;
    },
    onTabChange(e,data){
        // console.log(e.detail,'==')
        let { type } = e.detail;
        this.setData({
            currentShopType: type
        })
    },
    getShopList(type){

        let res = this.data[ "_" + type];
        // console.log(res,'==');
        let key = `category.${type}.list`;

        let oldList = this.data.category[type].list;
        oldList.push( ...res );
        // console.log(oldList,'--')
        this.setData({
            [key]: oldList
        })
    }
})