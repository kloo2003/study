<style scoped>
.mui-card-content {
  background-color: rgb(243, 243, 243);
  width: 92%;
  margin-left: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  margin-top: 10px;
}

.shop {
  width: 220px;
  height: 320px;
  background-color: white;
  margin: 10px;
  padding: 10px;
}

.shop-shadow {
  width: 220px;
  height: 320px;
  position: relative;
  margin-top: -10px;
  margin-left: -10px;
}

.shop-shadow::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(255, 255, 255, 1));
  opacity: 0;
  transition: all 1s;
}

.shop-shadow:hover::before {
  opacity: 1;
}

.shop-img {
  border: 1px solid #dedede;
  margin-left: 34px;
  margin-top: 20px;
}

.shop-title {
  width: 180px;
  margin-left: 20px;
  margin-top: 40px;
}

.shop-find {
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.5s;
  color: white;
  height: 30px;
  width: 120px;
  text-align: center;
  line-height: 28px;
  margin-top: -47px;
  margin-left: 24%;
  border-radius: 15px;
  font-size: x-small;
  display: none;
  z-index: 999;
  position: absolute;
}

.shop-shadow:hover .shop-find {
  display: block;

}

.shop-price {
  margin-left: 20px;
  margin-top: 20px;
  font-size: larger;
  font-weight: 700;
  color: rgb(210, 3, 3);
}

.mui-card-footer {
  height: 200px;
}

.box {
  height: 851px;
  width: 1400px;
  margin: 0 auto;
}

.imgbox {
  height: 600px;
  width: 600px;
  float: left;
}

.bigbox {
  position: relative;
  height: 600px;
  width: 600px;
}

.mask {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  height: 350px;
  background-color: rgb(250, 252, 101);
  opacity: .5;
  border: 1px solid #ccc;
  cursor: move;
}

.big {
  display: none;
  position: absolute;
  width: 550px;
  height: 550px;
  left: 400px;
  top: 0;
  background-color: brown;
  overflow: hidden;
}

.big img {
  position: absolute;
  left: 0;
  top: 0;
}

span .xiaohezi {
  height: 61px;
  width: 58px;
  vertical-align: middle;
}

.detail {
  height: 868px;
  width: 748px;
  float: right;
  margin-left: 10px;

}

.mendian {
  height: 74px;
  width: 743px;
  font-size: 14px;
  font-weight: bolder;
}

.style {
  color: white;
  background-color: rgb(1, 170, 248);
  font-size: 26px;
  height: 80px;
  width: 40px;
}

.dao {
  height: 600px;
  width: 800px;
  background-color: antiquewhite;
}

.miao {
  height: 40px;
  width: 800px;
  line-height: 50px;
  background-color: rgb(247, 5, 211);
  text-align: left;

}

.font {
  color: white;
  font-size: 27px;
  height: 50px;
  width: 200px;
}

.biao {
  font-size: 26px;
}

.hui {
  font-size: 18px;
  color: darkgray;
  text-align-last: justify;
  font-weight: 300;

}

.jia {
  color: brown;
  font-size: 28px;
}

.kuang {
  border: 1px solid rgb(166, 166, 166);
  color: rgb(116, 116, 116);
  margin: 1px;
  font-size: 20px;
  align-items: center;
  width: 150px;
  line-height: 45px;
  font-weight: 300;
}

.kuang:hover {
  border-color: red;
}

.kuang span {
  margin-left: 20px;

}

.dahezi {
  display: flex;
  justify-content: space-between;

}

.jiangjia {
  font-weight: 500;
  color: rgb(33, 71, 161);
  font-size: 15px;
}



.youhuo {
  font-weight: 500;
  color: rgb(171, 174, 174);
  font-size: 10px;
}

.cuxiao {
  font-weight: 500;
  color: rgb(204, 8, 8);
  font-size: 15px;
}

.xiancu {
  font-weight: 500;
  color: rgb(204, 8, 8);
  font-size: 20px;
  border: 1px solid red;
}

.daoji {
  font-size: 24px;
  color: red;
  border: 1px solid red;
  text-align: center;
  width: 600px;
  margin: 20% auto;
  line-height: 50px;

}

.copyright {
  width: 100%;
  height: 550px;
  background-color: #ecebeb;
}

.copy1 {
  width: 85%;
  height: 120px;
  margin-left: 7.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.copy1-box {
  width: 23%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 105px;
}

.copy1-box p {
  color: rgba(255, 0, 0, 0.835);
  font-size: 30px;
  font-weight: 600;
  margin-top: 5px;
}

.copy1-box span {
  font-size: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.777);
  margin-left: -30px;
}

.copy2,
.copy3,
.copy4,
.copy5,
.copy6,
.copy7,
.copy8 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}

.copy2 {
  width: 90%;
  height: 220px;
  margin-left: 7.5%;
}

.copy2-box {
  width: 15%;
}

.copy2-box p {
  font-size: 14px;
  font-weight: 600;
  color: #7f7f7f;
  margin-top: 15px;
  margin-left: 20px;
  margin-bottom: 8px;
}

.copy2-box li {
  list-style: none;
  font-size: 5px;
  color: #7f7f7f;
  margin-left: -20px;
}



.copy3 p {
  font-size: 5px;
  color: #555555;
}

.copy3 {
  width: 75%;
  height: 30px;
  margin-left: 12%;
}

.copy4 {
  width: 64%;
  height: 30px;
  margin-left: 17%;

}

.copy5 {
  width: 66%;
  height: 30px;
  margin-left: 16%;
  margin-top: -10px;
}

.copy6 {
  width: 73%;
  height: 30px;
  margin-left: 12%;
  margin-top: -10px;
}

.copy7 {
  width: 15%;
  height: 30px;
  margin-left: 41%;
  margin-top: -10px;
}

.copy8 {
  width: 51%;
  height: 50px;
  margin-left: 22.5%;
  margin-top: 10px;
}

.copy4 p,
.copy5 p,
.copy6 p,
.copy7 p {
  font-size: 5px;
  color: #7f7f7f;
}

.copy3 span,
.copy4 span,
.copy5 span,
.copy6 span,
.copy7 span {
  font-size: 4px;
  color: #dbdbdb;
}

.copy2-box li:hover,
.copy3 p:hover,
.copy4 p:hover,
.copy5 p:hover,
.copy6 p:hover,
.copy7 p:hover {
  color: red;
}
</style>
<template>
  <div class="box" v-for="item in cartlist" :key="item.id">
    <div class="imgbox">
      <div class="bigbox">
        <img :src="item.src" style="width: 100%; height: 100%;">
        <div class="mask"></div>
        <div class="big"><img :src="item.src" class="bigImg"></div>
      </div>

    </div>
    <div class="detail">
      <div class="mendian">
        <a class="style">门店有货</a><a class="biao">  {{ item.title }}
 </a>
        <div class="dao">
          <div class="miao">
            <a class="font"><img src="../image/biao.jpg">京东秒杀</a>
            <a @click="getCountdown" :disabled="totalTime <60">{{content}}</a>

            <div class="jia">
              <a class="hui">秒杀价&nbsp;&nbsp;&nbsp;&nbsp;</a><a class="jia" id="money">￥69.00</a>
              <a class="jiangjia">降价通知</a>
            </div>
            <div class="jia">

              <a class="hui">促销&nbsp;&nbsp;&nbsp;&nbsp;</a><a class="xiancu">限购</a>
              <a class="cuxiao">购买不超过9件时享受单件价￥69，超出数量以结算价为准</a><br>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="xiancu">跨店满减</a>
              <a class="cuxiao">每满299元，可减50元现金，最多可减40000元 </a><br>
            </div>
            <div class="jia">
              <a class="hui">配送至 &nbsp;&nbsp;&nbsp;&nbsp;</a>
              <select>
                <option selected>四川成都市成华区保和街道</option>
                <option>四川成都市成华区二仙桥道</option>
                <option>四川成都市成华区万年场道</option>
              </select>
              <a class="youhuo">有货</a>
              <p></p>
            </div>
            <a class="hui">重量</a>
            <p></p>
            <a class="hui">服务支持&nbsp;&nbsp;&nbsp;&nbsp;</a>
            <a href="#" title="此商品支持7天报价">7天价保</a>|
            <a href="#" title="此商品破损包退还">破损包退换</a>
            <p></p>

            <p></p>
            <div class="dahezi">
              <a class="hui">白条分期</a>
              <a class="kuang" style="width:100px;"><span class="xiaohezi">不分期</span></a>
              <a class="kuang"><span class="xiaohezi">￥23.35*3期</span></a>
              <a class="kuang"><span class="xiaohezi">￥11.96*7期</span></a>
              <a class="kuang"><span class="xiaohezi">3.11*24期</span></a>
            </div>
            <p></p>
          </div>

        </div>

      </div>
    </div>
  </div>
<h2 style="text-align: center; font-weight: 600;">为你推荐</h2>
    <div class="mui-card-content">
      <div class="shop" v-for="(shop, shopping) in shop" :key="shopping">
        <div class="shop-shadow">
          <img :src="shop.image" class="shop-img" width="150" height="150">
          <div class="shop-title">{{ shop.title }}</div>
          <div class="shop-price">￥{{ shop.price }}</div>
          <div class="shop-find">
            <i class="fa fa-eye" aria-hidden="true">&nbsp;&nbsp;找相似</i>
          </div>
        </div>
      </div>
    </div>  

  



  <div class="copyright">
    <div class="copy1">
      <div class="copy1-box">
        <p>多</p>
        <span>品类齐全，轻松购物</span>
      </div>
      <div class="copy1-box">
        <p>快</p>
        <span>多仓直发，急速配送</span>
      </div>
      <div class="copy1-box">
        <p>好</p>
        <span>正品行货，精致服务</span>
      </div>
      <div class="copy1-box">
        <p>省</p>
        <span>天天低价，畅选无忧</span>
      </div>
    </div>

    <hr style="margin-top: -18px;" />

    <div class="copy2">
      <div class="copy2-box">
        <p>购物指南</p>
        <ul>
          <li>购物流程</li>
          <li>会员介绍</li>
          <li>生活旅行/团购</li>
          <li>常见问题</li>
          <li>大家电</li>
          <li>联系客服</li>
        </ul>
      </div>
      <div class="copy2-box">
        <p>配送方式</p>
        <ul>
          <li>上门自提</li>
          <li>211限时达</li>
          <li>配送服务查询</li>
          <li>配送费收取标准</li>
          <li>海外配送</li>
        </ul>
      </div>
      <div class="copy2-box">
        <p>支付方式</p>
        <ul>
          <li>货到付款</li>
          <li>在线支付</li>
          <li>分期付款</li>
          <li>公司转账</li>
        </ul>
      </div>
      <div class="copy2-box">
        <p>售后服务</p>
        <ul>
          <li>售后政策</li>
          <li>价格保护</li>
          <li>退款说明</li>
          <li>返修/退换货</li>
          <li>取消订单</li>
        </ul>
      </div>
      <div class="copy2-box">
        <p>特色服务</p>
        <ul>
          <li>夺宝岛</li>
          <li>DIY装机</li>
          <li>延保服务</li>
          <li>京东E卡</li>
          <li>京东通信</li>
          <li>京鱼座智能</li>
        </ul>
      </div>
    </div>

    <hr style="margin-top: -35px;" />

    <div class="copy3">
      <p>关于我们</p>
      <span>|</span>
      <p>联系我们</p>
      <span>|</span>
      <p>联系客服</p>
      <span>|</span>
      <p>合作招商</p>
      <span>|</span>
      <p>商家帮助</p>
      <span>|</span>
      <p>营销中心</p>
      <span>|</span>
      <p>手机京东</p>
      <span>|</span>
      <p>友情链接</p>
      <span>|</span>
      <p>销售联盟</p>
      <span>|</span>
      <p>京东社区</p>
      <span>|</span>
      <p>风险检测</p>
      <span>|</span>
      <p>隐私政策</p>
      <span>|</span>
      <p>京东公益</p>
      <span>|</span>
      <p>Media & IR</p>

    </div>

    <div class="copy4">
      <p>京公网安备11000002000088号</p>
      <span>|</span>
      <p>京ICP备11041704号</p>
      <span>|</span>
      <p>ICP</p>
      <span>|</span>
      <p>互联网药品信息服务资格证编号(京)-经营性-2014-0008</p>
      <span>|</span>
      <p>新出发京零 字第大120007号</p>
    </div>

    <div class="copy5">
      <p>互联网出版许可证编号新出网证(京)字150号</p>
      <span>|</span>
      <p>出版物经营许可证</p>
      <span>|</span>
      <p>网络文化经营许可证京网文[2020]6112-1201号</p>
      <span>|</span>
      <p>违法和不良信息举报电话：4006561155</p>
    </div>

    <div class="copy6">
      <p>Copyright © 2004 - 2023 京东JD.com 版权所有</p>
      <span>|</span>
      <p>消费者维权热线：4006067733 经营证照 </p>
      <span>|</span>
      <p>(京)网械平台备字(2018)第00003号 </p>
      <span>|</span>
      <p>营业执照</p>
      <span>|</span>
      <p>增值电信业务经营许可证</p>
    </div>

    <div class="copy7">
      <p>京东旗下网站： 京东钱包</p>
      <span>|</span>
      <p>京东云 </p>
    </div>

    <div class="copy8">
      <img src="../image/copy1.png" width="100" height="31" />
      <img src="../image/copy2.png" width="100" height="31" />
      <img src="../image/copy3.png" width="100" height="31" />
      <img src="../image/copy4.png" width="100" height="32" />
      <img src="../image/copy5.png" width="100" height="31" />
      <img src="../image/copy6.png" width="100" height="31" />
    </div>

  </div>
</template>
<script>
export default {
  name: "pView",
  data() {
    return {
      shop: [],
      items: []
    }
  },
  methods: {
    Login() {
      this.$router.replace('/pView')
    },
    del(id) {
      this.$store.dispatch("del", id);
    },
    hanshu(){
      console.log(this.shop);
      console.log(this.items);
    },
    getCountdown() {
            let clock =  window.setInterval(() => {
                this.content = this. totalTime + 's后重新发送';
                this.totalTime --;
                if(this. totalTime < 0){
                    this. totalTime = 60;
                    this.content = "重新发送验证码";
                    window.clearInterval(clock);
                }
            }, 1000);
        }

  },

  mounted() {
    this.$http.get('http://localhost:3000/shop').then((result) => {
      console.log(result.data)
      this.shop = result.data
    }).catch((error) => {
      console.log(error, 'error')
    })

  },
  computed: {
    cartlist() {
      return this.$store.state.items
    },
    totalPrice() {
      return this.$store.getters.totalPrice
    }
  },
  created(){
this.hanshu()
  }

}

</script>