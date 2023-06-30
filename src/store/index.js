import { createStore } from 'vuex'

export default createStore({
    state: {
        list: [
            { 'id': 1, 'count':1,'states':true,'title': '【经典款】鸿星尔克男鞋网面跑步鞋透气跑鞋轻便耐磨减...', 'price': 149.99, src: require('../image/sp1.jpg') },
            { 'id': 2, 'count':1,'states':true,'title': 'ROG枪神 7 Plus 超竞版 第13代英特尔酷睿i9 18英寸 星云...', 'price': 12999, src: require('../image/sp2.jpg') },
            { 'id': 3, 'count':1,'states':true,'title': '京彩莲门帘透明空调门帘磁铁自吸磁吸PVC塑料超市商场...', 'price': 10.99, src: require('../image/sp3.jpg') },
            { 'id': 4, 'count':1,'states':true,'title': '华为（HUAWEI）蓝牙耳机 FreeBuds 5i 真无线TW...', 'price': 399, src: require('../image/sp4.jpg') },
            { 'id': 5, 'count':1,'states':true,'title': '西萤 PVC折叠门推拉门免打孔简易门免安装开放式厨房折...', 'price': 10.99, src: require('../image/sp5.jpg') },
            { 'id': 6, 'count':1,'states':true,'title': 'FSL佛山照明LED灯管T8双端长0.6米8W日光色6500...', 'price': 10.99, src: require('../image/sp6.jpg') },
            { 'id': 7, 'count':1,'states':true,'title': '【现货速发】小米12S Pro 骁龙8+ 徕卡专业光学镜头 5G...', 'price': 3599, src: require('../image/sp7.jpg') },
            { 'id': 8, 'count':1,'states':true,'title': '华为/HUAWEI P60 256GB 羽纱黑 超聚光XMAGE影像...', 'price': 4688, src: require('../image/sp8.jpg') },
            { 'id': 9, 'count':1,'states':true,'title': '捷安特（GIANT）2022新款公路自行车赛车变速活飞弯把...', 'price': 896, src: require('../image/sp9.jpg') },
            { 'id': 10, 'count':1,'states':true,'title': '吉普（Jeep）自行车山地车成人双碟刹减震山地自行车男...', 'price': 839, src: require('../image/sp10.jpg') },
            { 'id': 11, 'count':1,'states':true,'title': '菲利普（PHILLIPS） 公路车自行车弯把16级变速手变一体...', 'price': 1598, src: require('../image/sp11.jpg') },
            { 'id': 12, 'count':1,'states':true,'title': '土拨鼠（MARMOT）全球十大碳纤维自行车品牌排行榜超...', 'price': 10796, src: require('../image/sp12.jpg') },
            { 'id': 13, 'count':1,'states':true,'title': '韵优利EVA踩屎感凉拖鞋女夏季款室内家居时尚厚底防滑...', 'price': 12.55, src: require('../image/sp13.jpg') },
            { 'id': 14, 'count':1,'states':true,'title': 'AHC 男士护肤品套装礼盒(爽肤水+乳液+洁面) 控油 ...', 'price': 208.9, src: require('../image/sp14.jpg') },
            { 'id': 15, 'count':1,'states':true,'title': '迪路仕DEROACE自行车灯前灯山地车强光手电筒充电夜骑...', 'price': 33.4, src: require('../image/sp15.jpg') },
            { 'id': 16, 'count':1,'states':true,'title': ' 谷雨光果甘草水乳套装护肤品套装补水保湿提亮肤色水乳 ...', 'price': 359, src: require('../image/sp16.jpg') },
            { 'id': 17, 'count':1,'states':true,'title': ' 海澜之家（HLA）石墨烯冰丝内裤男士抗菌薄透气运动无痕平角 ...', 'price': 69, src: require('../image/sp17.jpg') },
            { 'id': 18, 'count':1,'states':true,'title': ' 妙逸洛夏季学生少女高中生初中生女生短袖套装衣服夏天韩 ...', 'price': 54.8, src: require('../image/sp18.jpg') },
            { 'id': 19, 'count':1,'states':true,'title': ' 喵驼中小学生6-8-10-12岁女孩女童古装汉服儿童古装长袖连 ...', 'price': 139, src: require('../image/sp19.jpg') },
            { 'id': 20, 'count':1,'states':true,'title': ' 谷雨 白千雪绒松露水乳护肤品套装洁面水乳精华液面霜膜油痘 ...', 'price': 109, src: require('../image/sp20.jpg') },
            { 'id': 21, 'count':1,'states':true,'title': ' 谷雨 白千雪绒松露水乳护肤品套装洁面水乳精华液面霜膜油 ...', 'price': 109, src: require('../image/sp21.jpg') },
            { 'id': 22, 'count':1,'states':true,'title': ' 永久 自行车脚撑山地车骑行装备配件公路踢停放靠脚支架子车梯 ...', 'price': 19.9, src: require('../image/sp22.jpg') },
            { 'id': 23, 'count':1,'states':true,'title': ' 洛克兄弟（ROCKBROS） 自行车维修家用五金组合补胎工具 ...', 'price': 13.8, src: require('../image/sp23.jpg') },
            { 'id': 24, 'count':1,'states':true,'title': ' 雨意云情 夏天女生法式气质衬衣连衣裙少女生夏装2023新款初中 ...', 'price': 109, src: require('../image/sp24.jpg') },
            { 'id': 25, 'count':1,'states':true,'title': ' HLA海澜之家男士内裤莫代尔内裤男冰丝网孔透气夏季四角青 ...', 'price': 59, src: require('../image/sp25.jpg') },
            { 'id': 26, 'count':1,'states':true,'title': ' 洛克兄弟（ROCKBROS）骑行眼镜偏光变色近视男女户外运动跑 ...', 'price': 39, src: require('../image/sp26.jpg') },
            { 'id': 27, 'count':1,'states':true,'title': ' 回力断码运动凉鞋女款夏季外穿2023年法式复古老爹厚底松糕软 ...', 'price': 104.4, src: require('../image/sp27.jpg') },
            { 'id': 28, 'count':1,'states':true,'title': ' 洛克兄弟自行车包手机触屏车前包上管包山地车马鞍包骑行装备配 ...', 'price': 38, src: require('../image/sp28.jpg') },
            { 'id': 29, 'count':1,'states':true,'title': ' 和风雨男士护肤品套装增白洗面奶控油洁面保湿补水乳秋冬学生祛 ...', 'price': 179.9, src: require('../image/sp29.jpg') },
            { 'id': 30, 'count':1,'states':true,'title': '  红地球（red earth） 亮彩明星草本精华粉底液 自然不脱妆节日 ...', 'price': 108, src: require('../image/sp30.jpg') },
            { 'id': 31, 'count':1,'states':true,'title': ' 欧普灯简约超薄个性创意墙灯过道庭院阳台走廊过道户外防水楼梯 ...', 'price': 98, src: require('../image/sp31.jpg') },
            { 'id': 32, 'count':1,'states':true,'title': ' 洛克兄弟（ROCKBROS）自行车头盔一体成型骑行头盔山地车公路车 ...', 'price': 179, src: require('../image/sp32.jpg') },
            { 'id': 33, 'count':1,'states':true,'title': ' LATE TIME渐变鲨鱼儿童拖鞋夏卡通男童室内家用软底防滑家 ...', 'price': 39.8, src: require('../image/sp33.jpg') },
            { 'id': 34, 'count':1,'states':true,'title': ' CARSENKENNARD春夏季玛丽珍鞋女2023时尚新款蝴蝶结珍珠踝 ...', 'price': 56, src: require('../image/sp34.jpg') },
            { 'id': 35, 'count':1,'states':true,'title': ' 洛克兄弟（ROCKBROS） 自行车货架铝合金山地车快拆式载人后 ...', 'price': 69, src: require('../image/sp35.jpg') },
            { 'id': 36, 'count':1,'states':true,'title': ' 大行（DAHON） 自行车头盔磁吸风镜一体头盔男女通用安全帽...', 'price': 168.6, src: require('../image/sp36.jpg') },
        ],  
        items: [

        ]//放购物车数据
    },
    getters: {
        totalPrice(state) {
            var total = 0;
            for (var i = 0; i < state.items.length; i++) {
                total += state.items[i].price * state.items[i].num;
            }
            return total.toFixed(2);
        }
    },
    mutations: {
        ADD(state, value) {
            state.items.push({
                id: value.id,
                title: value.title,
                price: value.price,
                count: value.count,
                state: value.states,
                num: 1,
                src: value.src
            })
        },
        // 对items 删除数据 value: id
        DEL(state, id) {
            state.items.forEach((item, index, arr) => {
                if (item.id == id) {
                    arr.splice(index, 1);
                }
            })
        }
    },
    actions: {
        add(context, value) {
            // 判断是否购物车中存在该待添加的商品
            const v = context.state.items.find(v => v.id == value.id)
            if (v) {
                // 改数量
                ++v.num;
            } else {
                // 调用Mutations去加一个
                context.commit('ADD', value);
            }
            console.log(context.state.items);
            alert("新增成功")
        },
        add1(context, value) {
            // 判断是否购物车中存在该待添加的商品
            const v = context.state.items.find(v => v.id == value.id)
            if (v) {
                // 改数量
                ++v.num;
            } else {
                // 调用Mutations去加一个
                context.commit('ADD', value);
            }
            console.log(context.state.items);
        },
        //删除
        del(context, id) {
            context.commit('DEL', id);
            alert("删除成功")
        }
    },
    modules: {
    }
})
