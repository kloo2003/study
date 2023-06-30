<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../image/movie1.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../image/movie2.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../image/movie3.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../image/movie4.jpg" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev"
      style="background-color: transparent; border: 0px solid">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next"
      style="background-color: transparent; border: 0px solid">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>

  <div class="list-main">
    <div class="list-all" v-for="item in movie" :key="item.id">
      <div class="list-img">
        <img :src="item.img" />
        <div class="list-score">
          <div class="list-kinds">{{ item.cat }}</div>
          <span>评分：{{ item.mk }}</span>
        </div>
      </div>
      <div class="list-info">
        <div class="list-title">{{ item.nm }}</div>
        <div class="list-director">{{ item.desc }}</div>
      </div>
      <!-- <div class="list-button">
        <button>点我购票</button>
      </div> -->
    </div>
  </div>

  <!-- 底部版权声明 -->
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
import axios from "axios";
export default {
  data() {
    return {
      movie: [],
    };
  },
  methods: {
    getdata() {
      axios.get("/api/mmdb/movie/v3/list/hot.json?ct=成都&ci=59&channelId=4").then((result) => {
        console.log(result.data.data.hot);
        this.movie = result.data.data.hot;
      })
        .catch((error) => {
          console.log(error, "error");
        });
    },
  },
  created() {
    this.getdata();
  },
};
</script>

<style scoped>
.list-main {
  width: 85%;
  margin-top: 20px;
  margin-left: 8%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.list-all {
  width: 238px;
  height: 435px;
  margin-bottom: 40px;
}

.list-img {
  margin-right: 10px;
  width: 100%;
  height: 360px;
  flex-shrink: 0;
}

.list-score {
  height: 30px;
  width: 100%;
  background-color: #000;
  opacity: 0.7;
  color: white;
  font-weight: 600;
  margin-top: -30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.list-kinds {
  font-size: 12px;
  font-weight: 100;
  line-height: 30px;
}

.list-score:hover {
  opacity: 0.9;
}

.list-info {
  width: 100%;
  height: 74px;
}

.list-title {
  text-align: center;
  font-weight: 600;
  color: black;
  font-size: 17px;
}

.list-director {
  font-size: 13px;
  margin-top: 10px;
}

.list-img img {
  width: 100%;
  height: 100%;
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
