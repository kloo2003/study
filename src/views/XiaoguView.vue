<style scoped>
.carousel-caption :hover {
  color: rgb(255, 255, 255);
}

.header {
  width: 100%;
  height: 170px;
  margin-left: 0px;
  margin-top: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.header-top {
  width: 100%;
  height: 32px;
  background-color: rgb(230, 230, 230);

}

.btn-group button {
  margin-left: -2px;
  line-height: -10px;
  color: rgb(170, 170, 170);
  font-size: x-small;
}

.ip1 {
  width: 280px;
  padding: 0px;
  padding-top: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.ip1 p {
  font-size: x-small;
  width: 40px;
  text-align: center;
}

.ip1 p:hover {
  background-color: rgb(228, 228, 228);
  color: red;
}

.ip2 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.ip3 {
  width: 208px;
  padding: 10px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.ip4 {
  width: 160px;
  padding: 10px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.ip5 {
  width: 160px;
  padding: 10px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.ip6 {
  width: 1200px;
  height: 140px;
  padding: 5px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.ip61 {
  font-weight: 600;
  font-size: small;
  margin-left: 5px;
  width: 290px;
}

.ip6-1 {
  width: 290px;
  line-height: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: -14px;
}

.ip6-1 :hover {
  color: red;
}

.ip6-1 p {
  padding: 11px;
}

.verticalBar {
  width: 1px;
  height: 140px;
  background: rgb(230, 230, 230);
  display: inline-block;
  margin-top: -120px;
  margin-left: 285px;

}

.ip2 p,
.ip3 p,
.ip4 p,
.ip5 p,
.ip6 p {
  font-size: x-small;
}

.ip2 p:hover,
.ip3 p:hover,
.ip4 p:hover,
.ip5 p:hover {
  color: red;
}

.nav1 {
  width: 720px;
  height: 32px;
  margin-left: 40%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: x-small;
  line-height: 32px;
  color: rgb(170, 170, 170);
}

.nav1 button {
  font-size: x-small;
  color: rgb(170, 170, 170);
  line-height: 8px;
}

.nav1 div:hover,
.nav1 button:hover {
  color: rgb(255, 51, 51);
}

.dropdown-menu p {
  margin: 5px;
}

.carousel-caption h5,
.carousel-caption p {
  color: rgb(66, 247, 253);
}

#atlas {
  position: absolute;
  top: -0.5px;
  right: 286px;
  width: 170px;
  height: 480px;
  overflow: hidden;
}

#table {
  width: 928px;
  height: 450;
  position: absolute;
  z-index: 1;
}

#table img {
  margin-top: 5px;
  padding: 5px;
}

.arrow1 {
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  border-radius: 0 20px 20px 0;
  width: 25px;
  height: 25px;
  position: absolute;
  z-index: 2;
  top: 230px;
  background: rgb(128, 126, 126);
  color: #fff;
}

.arrow2 {
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  border-radius: 20px 0 0 20px;
  width: 25px;
  height: 25px;
  position: absolute;
  z-index: 2;
  top: 230px;
  background: rgb(128, 126, 126);
  color: #fff;
}

#left {
  left: -5px;
}

#right {
  right: -5px;
}

.arrow1:hover,
.arrow2:hover {
  background-color: rgb(183, 184, 186);
}

.header-contion {
  width: 100%;
  height: 140px;
}

.nav2 {
  width: 480px;
  height: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 25%;
  margin-top: 65px;
}

.nav3 {
  width: 760px;
  height: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 22%;
  margin-top: 23px;
  line-height: 26px;

}

.nav3 p {
  color: black;
  font-size: 15px;
}

.nav2 p {
  font-size: x-small;
  color: rgb(170, 170, 170);
}

.nav2 p:hover,
.nav3 p:hover {
  color: red;
}

.cart {
  height: 36px;
  width: 120px;
  border: 1px solid rgb(229, 228, 228);
  margin-top: -111px;
  margin-left: 66.5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.cart * {
  line-height: 35px;
  color: rgb(225, 18, 18);
  margin-left: 5px;
  margin-right: 5px;
}

.cart button {
  font-size: x-small;
  height: 20px;
  width: 70px;
  line-height: 2px;
  margin-left: -9px;
  margin-top: -5px;
}
.cart-num{
  height: 15px;
  width: 18px;
  background-color: rgb(225, 18, 18);
  padding: 0px;
  border-radius: 7px;
  margin-top: -33px;
  margin-left: -23px;
}
.cart-num span{
  position: absolute;
  margin-top: -10px;
  margin-left: 6px;
  color: white;
  font-size: 5px;
  font-weight: 500;
}


.leftlist {
  position: absolute;
  left: 75px;
  width: 200px;
  height: 480px;
  border: 0.5px solid rgb(218, 216, 216);
  padding: 10px;
  margin-left: 5px;
  line-height: 10px;
  z-index: 1;
}

.leftlist p {
  color: black;
}

.rightlist {
  position: absolute;
  top: 0px;
  right: 73px;
  width: 200px;
  height: 480px;
  border: 0.5px solid rgb(218, 216, 216);
  font-size: smaller;
}

.right1 {
  width: 200px;
  height: 80px;
}

.right1-img {
  width: 45px;
  height: 45px;
  border: 2px solid rgb(237, 237, 237);
  border-radius: 25px;
  overflow: hidden;
  margin-left: 25px;
  margin-top: 10px;
}

.right1-re {
  width: 90px;
  height: 45px;
  line-height: 5px;
  margin-top: -35px;
  margin-left: 80px;
}

.right1-re p,
.right1-new p,
.right1-vip p {
  font-size: x-small;
}

.right1-new,
.right1-vip {
  width: 80px;
  height: 28px;
  text-align: center;
  line-height: 25px;
  border-radius: 20px;

}

.right1-new {
  background-color: red;
  margin-left: 15px;
}

.right1-vip {
  background-color: black;
  margin-top: -28px;
  margin-left: 105px;

}

.right1-new p {
  color: white;
}

.right1-vip p {
  color: rgb(236, 229, 10);
}

.right2 {
  height: 120px;
  width: 170px;
  margin-top: -7px;
  margin-left: 12px;
}

.right2-1 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3px;
}

.right2-2 {
  width: 200px;
  margin-top: -10px;
  margin-left: 5px;
  line-height: 4px;
}

.right2-2 p {
  font-size: x-small;
}

.back {
  width: 200px;
  height: 240px;
  position: absolute;
  bottom: 0px;
}

.back1,
.back2,
.back3,
.back4 {
  width: 200px;
  height: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.back1 i,
.back2 i,
.back3 i,
.back4 i {
  margin-top: 5px;
  margin-left: 3px;
}

.back1 p,
.back2 p,
.back3 p,
.back4 p {
  line-height: 50px;
  margin-right: 2px;
  font-size: x-small;
  color: rgb(68, 66, 66);
}

.back i {
  font-size: 25px;
  padding: 10px;
  line-height: 0px;
}

.header-footer {
  width: 1186px;
  height: 400px;
  position: absolute;
  margin-top: 15px;
  left: 90px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}


.header-footer>div {
  width: 190px;
  height: 230px;
  cursor: pointer;
}

.fot-goods {
  border-right: 1px solid rgb(228, 228, 228);
}

.fot-goods:hover {
  border: 1px solid red;
}


.fot-ms {
  border: 0px;
  background-color: rgb(225, 4, 4);
}

.fot-time {
  width: 140px;
  height: 45px;
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  line-height: 40px;
}

.fot-time p {
  color: white;
  font-size: 25px;
  font-weight: 700;
  background-color: rgb(37, 37, 37);
  width: 35px;
  text-align: center;
}

.fot-time span {
  font-size: 30px;
  color: white;
  font-weight: 600;
}

.bornav {
  width: 60px;
  height: 360px;
  border: 1px solid rgb(211, 211, 211);
  margin-left: 94.5%;
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
}

.bornav div {
  width: 60px;
  height: 60px;
  border-bottom: 0.5px solid rgb(223, 223, 223);
}

.bornav div:hover {
  background-color: rgb(204, 63, 63);
}

.bornav div p {
  color: black;
  width: 40px;
  line-height: 18px;
  margin-top: 10px;
  margin-left: 14px;
}

.bornav1 {
  width: 60px;
  height: 60px;
  border-bottom: 0.5px solid rgb(223, 223, 223);

}

.bornav1>* {
  line-height: 5px;
  margin-left: 14px;
  margin-top: 10px;
}

.bornav1 span :hover {
  background-color: rgb(204, 63, 63);
  color: white;
}

.bornav div p:hover {
  color: white;
}

.mycart {
  color: black;
  font-size: x-small;
  width: 350px;
}

.item {
  width: 100%;
  height: 80px;
}

.item-r {
  width: 265px;
  height: 80px;
  position: absolute;
  margin-top: -60px;
  margin-left: 83px;
}

.item-title {
  width: 160px;
  line-height: 20px;
  margin-top: 7px;
  color: black;
}

.item-price {
  position: absolute;
  top: 1px;
  right: 10px;
  color: black;
  font-weight: 700;
}

.item-opt {
  position: absolute;
  top: 30px;
  right: -3px;
}

.lrimg {
  width: 100%;
  height: 20px;
  position: absolute;
  top: 45px;
}

.fot-pd {
  width: 80%;
  margin-top: 20px;
  margin-left: 10.5%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: rgb(243, 243, 243);
}



.tv {
  width: 220px;
  height: 320px;
  background-color: white;
  margin: 10px;
  padding: 10px;
}

.tv-shadow {
  width: 220px;
  height: 320px;
  position: relative;
  margin-top: -10px;
  margin-left: -10px;
}

.tv-shadow::before {
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

.tv-shadow:hover::before {
  opacity: 1;
}

.tv-img {
  border: 1px solid #dedede;
  margin-left: 34px;
  margin-top: 20px;
}

.tv-title {
  width: 180px;
  margin-left: 20px;
  margin-top: 40px;
  font-size: small;
}

.tv-find {
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

.tv-shadow:hover .tv-find {
  display: block;

}

.tv-price {
  margin-left: 20px;
  margin-top: 20px;
  font-size: larger;
  font-weight: 700;
  color: rgb(210, 3, 3);
}

.tv-price>span {
  font-weight: 700;
  font-size: small;
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



<template>
  <div class="header">
    <!-- 头部内容区 -->
    <div class="header-top">
      <!-- 图标地区 -->
      <i class="fa fa-map-marker" aria-hidden="true"
        style="position: absolute; left: 110px; color: red; line-height: 30px;">
        <div class="btn-group">
          <button class="btn btn-sm" type="button" data-toggle="dropdown" aria-expanded="false">
            四川
          </button>
          <div class="dropdown-menu">
            <div class="ip1">
              <p>北京</p>
              <p>上海</p>
              <p>天津</p>
              <p>重庆</p>
              <p>河北</p>
              <p>山西</p>
              <p>河南</p>
              <p>辽宁</p>
              <p>吉林</p>
              <p>黑龙江</p>
              <p>内蒙古</p>
              <p>江苏</p>
              <p>山东</p>
              <p>安徽</p>
              <p>浙江</p>
              <p>福建</p>
              <p>湖北</p>
              <p>湖南</p>
              <p>广东</p>
              <p>广西</p>
              <p>江西</p>
              <p style="background-color: red; color: white;">四川</p>
              <p>海南</p>
              <p>贵州</p>
              <p>云南</p>
            </div>
            <div class="dropdown-divider"></div>
            <div class="ip2">
              <p>中國港澳</p>
              <p>中國台灣</p>
              <p>京东全球</p>
            </div>
          </div>
        </div>
      </i>
      <!-- 顶部导航栏字段 -->
      <div class="nav1">
        <div>你好，请登录</div>
        <div style="color: red;">免费注册</div>|
        <div @click="List()">我的订单</div>|
        <div class="dropdown">
          <button class="btn btn-sm" type="button" data-toggle="dropdown" aria-expanded="false">
            我的京东
          </button>
          <div class="dropdown-menu">
            <div class="ip3">
              <p>待处理订单</p>
              <p>我的问答</p>
              <p>降价商品</p>
              <p>返修退换货</p>
              <p>我的关注</p>
            </div>
            <div class="dropdown-divider"></div>
            <div class="ip3">
              <p>我的京东</p>
              <p>我的优惠券</p>
              <p>我的白条</p>
              <p>我的理财</p>
            </div>
            <div class="dropdown-divider"></div>
            <div class="ip3">
              <p>帮助中心</p>
              <p>售后服务</p>
              <p>在线客服</p>
              <p>意见建议</p>
              <p>电话客服</p>
              <p>客服邮箱</p>
              <p>金融咨询</p>
              <p>全球售客服</p>
              <p>企业客服</p>
            </div>
          </div>
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>|

        <div class="dropdown">
          <button class="btn btn-sm" type="button" data-toggle="dropdown" aria-expanded="false">
            企业采购
          </button>
          <div class="dropdown-menu">
            <div class="ip4">
              <p>企业购</p>
              <p>公共采购</p>
              <p>工业品</p>
              <p>商用场景馆</p>
              <p>礼品卡</p>
              <p>微信企业购</p>
              <p>工品优选</p>
              <p>京东锦礼</p>
              <p>企业购专业版</p>
              <p>大中型客户采购</p>
            </div>
          </div>
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>|

        <div class="dropdown">
          <button class="btn btn-sm" type="button" data-toggle="dropdown" aria-expanded="false">
            商家服务
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="ip5">
              <p>合作招商</p>
              <p>学习中心</p>
              <p>商家后台</p>
              <p>京麦工作台</p>
              <p>商家帮助</p>
              <p>规则平台</p>
            </div>
          </div>
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>|

        <div class="dropdown">
          <button class="btn btn-sm" type="button" data-toggle="dropdown" aria-expanded="false">
            网站导航
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="ip6">
              <div>
                <div class="ip61" style="color: black;">特色主题</div>
                <div class="ip6-1">
                  <p>京东金融</p>
                  <p>全球售</p>
                  <p>台湾售</p>
                  <p>俄语站</p>
                  <p>装机大师</p>
                  <p>港澳售</p>
                  <p>秒杀</p>
                  <p>印尼站</p>
                  <p>陪伴计划</p>
                  <p>出海招商</p>
                  <p>拍拍二手</p>
                </div>
                <div class="verticalBar"></div>
              </div>
              <div>
                <div class="ip61" style="color: black;">行业频道</div>
                <div class="ip6-1">
                  <p>手机</p>
                  <p>智能数码</p>
                  <p>电脑办公</p>
                  <p>家用电器</p>
                  <p>京东小家</p>
                  <p>京东生鲜</p>
                  <p>母婴</p>
                  <p>食品</p>
                  <p>农资频道</p>
                  <p>整车</p>
                  <p>图书</p>
                  <p>劳动防护</p>
                </div>
                <div style="position: absolute; top:130px;" class="verticalBar"></div>
              </div>
              <div>
                <div class="ip61" style="color: black;">生活服务</div>
                <div class="ip6-1">
                  <p>白条</p>
                  <p>京东金融App</p>
                  <p>京东小金库</p>
                  <p>话费</p>
                  <p>水电煤</p>
                  <p>彩票</p>
                  <p>机票酒店</p>
                  <p>电影票</p>
                  <p>京东到家</p>
                  <p>游戏</p>
                  <p>拍拍回收</p>
                  <p>买车险</p>
                </div>
                <div style="position: absolute; top:130px;" class="verticalBar"></div>
              </div>
              <div>
                <div class="ip61" style="color: black;">更多精选</div>
                <div class="ip6-1">
                  <p>合作招商</p>
                  <p>京东通信</p>
                  <p>京东E卡</p>
                  <p>企业采购</p>
                  <p>服务市场</p>
                  <p>校园加盟</p>
                  <p>知识产权维护</p>
                  <p>京东安联保险</p>
                  <p>京东保险代理</p>
                  <p>京东零售云</p>
                  <p>关于我们</p>
                </div>
              </div>
            </div>
          </div>
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>|

        <div>手机京东</div>|
        <div>网站无障碍</div>
      </div>
    </div>
    <!-- 搜索框左右两侧图片 -->
    <div class="lrimg">
      <img src="../image/logo1.png" width="180" height="115" style="margin-left: 7%;">
      <img src="../image/logo2.png" width="210" height="95" style="margin-left: 58%;">
    </div>


    <!-- 搜索框 -->
    <div style="position:absolute;  margin-left: 25%; margin-top: 28px;">

      <input id="text" type="text" @dblclick="Main()" placeholder="请输入你想要的宝贝" style="width:520px; font-size: x-small; height: 36px; padding-left:10px;
          background:rgba(255,255,255,.5); border:2px solid  rgb(241, 12, 12)">

      <input v-on:click="search()" id="button" type="button" value="搜索"  style="height:36px; width:70px; left: 488px; color: white; position: absolute; 
          background:rgb(241, 12, 12);border: 0.5px solid rgb(241, 12, 12);">
    </div>
    
    <!-- 搜索框下字段 -->
    <div class="header-contion">
      <div class="nav2">
        <p style="color: red;">诺力打牌周</p>
        <p>电竞装备</p>
        <p>热卖潮品</p>
        <p>海信Ace2</p>
        <p>iPone14</p>
        <p>京东买药</p>
        <p>任天堂</p>
        <p>品质装修</p>
      </div>

      <!-- 轮播图上字段 -->
      <div class="nav3">
        <p>京东家电</p>
        <p>进口好物</p>
        <p>京东五金城</p>
        <p>PLUS会员</p>
        <p>拍卖</p>
        <p>京东超市</p>
        <p>便宜包邮</p>
        <p>京东生鲜</p>
        <p>电脑数码</p>
        <p @click="Movie()">京东电影</p>

      </div>

      <!-- 动态购物车 -->
      <div class="cart" @dblclick="cart()">
        <i class="fa fa-cart-plus" aria-hidden="true"></i>
        <div class="dropdown">
          <button class="btn btn-sm" type="button" data-toggle="dropdown" aria-expanded="false">
            我的购物车
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="mycart">
              <div class="item" v-for="item in cartlist" :key="item.id">
                <div class="item-l">
                  <img :src="item.src" class="item-img" width="60" height="60">
                </div>
                <div class="item-r">
                  <div class="item-title">{{ item.title }}</div>
                  <div class="item-price">¥ {{ item.price }} x {{ item.num }}</div>
                  <div class="item-opt"><button @click=del(item.id) style="border: none; color: black;">删除</button></div>
                </div>
              </div>
            </div>
          </div>
          <div class="cart-num"><span>{{ cartlist.length }}</span></div>
        </div>
      </div>
    </div>
  </div>

  <!--内容区-->
  <div class="mui-card" style="height: 480px; margin-top: 15px;">
    <!-- 轮播图左侧盒子 -->
    <div class="leftlist">
      <p><a class="left-a">家用家电</a></p>
      <p><a>手机</a>&nbsp;/&nbsp;<a>运营商</a>&nbsp;/&nbsp;<a>数码</a></p>
      <p><a>电脑</a>&nbsp;/&nbsp;<a>办公</a></p>
      <p><a>家居</a>&nbsp;/&nbsp;<a>家具</a>&nbsp;/&nbsp;<a>家装</a>&nbsp;/&nbsp;<a>厨具</a></p>
      <p><a>男装</a>&nbsp;/&nbsp;<a>女装</a>&nbsp;/&nbsp;<a>童装</a>&nbsp;/&nbsp;<a>内衣</a></p>
      <p><a>美妆</a>&nbsp;/&nbsp;<a>个护清洁</a>&nbsp;/&nbsp;<a>宠物</a></p>
      <p><a>女鞋</a>&nbsp;/&nbsp;<a>箱包</a>&nbsp;/&nbsp;<a>钟表</a>&nbsp;/&nbsp;<a>珠宝</a></p>
      <p><a>男鞋</a>&nbsp;/&nbsp;<a>运动</a>&nbsp;/&nbsp;<a>户外</a></p>
      <p><a>房产</a>&nbsp;/&nbsp;<a>汽车</a>&nbsp;/&nbsp;<a>汽车用品</a></p>
      <p><a>母婴</a>&nbsp;/&nbsp;<a>玩具乐器</a></p>
      <p><a>食品</a>&nbsp;/&nbsp;<a>酒类</a>&nbsp;/&nbsp;<a>生鲜</a>&nbsp;/&nbsp;<a>特产</a></p>
      <p><a>艺术</a>&nbsp;/&nbsp;<a>礼品鲜花</a>&nbsp;/&nbsp;<a>农牧园艺</a></p>
      <p><a>医药保健</a>&nbsp;/&nbsp;<a>计生情趣</a></p>
      <p><a>图书</a>&nbsp;/&nbsp;<a>文娱</a>&nbsp;/&nbsp;<a>教育</a>&nbsp;/&nbsp;<a>电子书</a></p>
      <p><a>机票</a>&nbsp;/&nbsp;<a>酒店</a>&nbsp;/&nbsp;<a>旅游</a>&nbsp;/&nbsp;<a>生活</a></p>
      <p><a>支付</a>&nbsp;/&nbsp;<a>白条</a>&nbsp;/&nbsp;<a>保险</a>&nbsp;/&nbsp;<a>金融</a></p>
      <p><a>安装</a>&nbsp;/&nbsp;<a>维修</a>&nbsp;/&nbsp;<a>清洁</a>&nbsp;/&nbsp;<a>二手</a></p>
      <p><a>工艺品</a>&nbsp;/&nbsp;<a>元器件</a></p>
    </div>


    <!--轮播图1-->
    <div class="mui-card-content" style="margin-top: 0px;">
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators" style=" margin-left: 1.5%;">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../image/b001.jpg" class="d-block" height="480" width="590" alt="..." style="margin-left: 21.5%;">
            <div class="carousel-caption d-none d-md-block" style=" margin-left: -13%;">
              <h5>First slide goods</h5>
              <p>海尔（Haier）滚筒洗衣机全自动 10公斤大容量洗烘一体机</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../image/b002.jpg" class="d-block" height="480" width="590" alt="..." style="margin-left: 21.5%;">
            <div class="carousel-caption d-none d-md-block" style=" margin-left: -13%;">
              <h5>Second slide goods</h5>
              <p>真无线蓝牙耳机双耳运动型入耳式高音质高端2023年新款男女士款</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../image/b003.jpg" class="d-block" height="480" width="590" alt="..." style="margin-left: 21.5%;">
            <div class="carousel-caption d-none d-md-block" style=" margin-left: -13%;">
              <h5>Third slide goods</h5>
              <p>鸿星尔克运动鞋男跑步鞋子男士网面透气春夏季气垫减震慢跑休闲鞋</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../image/b004.jpg" class="d-block" height="480" width="590" alt="..." style="margin-left: 21.5%;">
            <div class="carousel-caption d-none d-md-block" style=" margin-left: -13%;">
              <h5>Fourth slide goods</h5>
              <p> 小米笔记本电脑 红米 RedmiBookPro 14英寸 2.5K高清屏 高性能轻薄本</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../image/b005.jpg" class="d-block" height="480" width="590" alt="..." style="margin-left: 21.5%;">
            <div class="carousel-caption d-none d-md-block" style=" margin-left: -13%;">
              <h5>Fifth slide goods</h5>
              <p>ROG冰刃7 双屏 16英寸 设计师高性能 游戏本笔记本电脑</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../image/b006.jpg" class="d-block" height="480" width="590" alt="..." style="margin-left: 21.5%;">
            <div class="carousel-caption d-none d-md-block" style=" margin-left: -13%;">
              <h5>Sixth slide goods</h5>
              <p>伊利 金典纯牛奶250ml*12盒/箱（礼盒装）企业福利推荐</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev"
          style="margin-left: 16.5%; background-color: transparent; border: 0px solid;">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next"
          style="margin-right: 30.2%; background-color: transparent; border: 0px solid;">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
    </div>

    <!--轮播图2-->
    <div id="atlas">
      <div id="table" style="left: -191px; top: -8.5px;">

        <img src="../image/b113.jpg.webp" width="185" height="160" alt="" />
        <img src="../image/b111.jpg.webp" width="185" height="160" alt="" />
        <img src="../image/b112.jpg.webp" width="185" height="160" alt="" />
        <img src="../image/b113.jpg.webp" width="185" height="160" alt="" />
        <img src="../image/b111.jpg.webp" width="185" height="160" alt="" />

        <img src="../image/b116.jpg.webp" width="185" height="160" alt="" />
        <img src="../image/b114.jpg.webp" width="185" height="160" alt="" />
        <img src="../image/b115.jpg.webp" width="185" height="160" alt="" />
        <img src="../image/b116.jpg.webp" width="185" height="160" alt="" />
        <img src="../image/b114.jpg.webp" width="185" height="160" alt="" />

        <img src="../image/b119.jpg.webp" width="185" height="160" alt="" />
        <img src="../image/b117.jpg.webp" width="185" height="160" alt="" />
        <img src="../image/b118.jpg.webp" width="185" height="160" alt="" />
        <img src="../image/b119.jpg.webp" width="185" height="160" alt="" />
        <img src="../image/b117.jpg.webp" width="185" height="160" alt="" />
      </div>
      <a class="arrow1" id="left" onclick="left()">&lt;</a>
      <a class="arrow2" id="right" onclick="right()">&gt;</a>
    </div>
    
    <!-- 轮播图右侧盒子 -->
    <div class="rightlist">

      <div class="right1">
        <div class="right1-img">
          <img src="../image/下载.png" width="45" height="45" style="margin-left: -2px;" />
        </div>
        <div class="right1-re">
          <p>Hi~欢迎逛京东!</p>
          <p>登录&nbsp;|&nbsp;注册</p>
        </div>
        <div class="right1-new">
          <p>新人福利</p>
        </div>
        <div class="right1-vip">
          <p>PLUS会员</p>
        </div>
      </div>
      <hr style="border: 0.5px solid rgb(237, 236, 236); margin-top: 15px; width: 100px; text-align: center;" />
      <div class="right2">
        <div class="right2-1">
          <p style="font-weight: 600; color: black;">京东快报</p>
          <p style="font-size: x-small;">更多&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
        </div>
        <div class="right2-2">
          <p><a
              style="color: rgb(254, 53, 53); background-color: rgb(252, 212, 212);">热评</a>&nbsp;&nbsp;&nbsp;&nbsp;<a>华硕灵耀14
              2023: ...</a></p>
          <p><a
              style="color: rgb(254, 53, 53); background-color: rgb(252, 212, 212);">热评</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>【新品尝鲜】现代轻...</a>
          </p>
          <p><a
              style="color: rgb(254, 53, 53); background-color: rgb(252, 212, 212);">推荐</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>【店长推荐】原木风...</a>
          </p>
          <p><a
              style="color: rgb(254, 53, 53); background-color: rgb(252, 212, 212);">推荐</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>【新品尝鲜】意式头...</a>
          </p>
        </div>
      </div>
      <hr style="border: 0.5px solid rgb(237, 236, 236); margin-top: -4px; width: 100px; text-align: center;" />
      <div class="back">
        <div class="back1">
          <i class="fa fa-bank" aria-hidden="true" style="color: rgb(90, 227, 191);">
            <p>酒店</p>
          </i>
          <i class="fa fa-wrench" aria-hidden="true"
            style="position: absolute; margin-left: 36%; color: rgb(66, 178, 227);">
            <p style="position: absolute; left: 5px;">五金城</p>
          </i>
          <i class="fa fa-tint" aria-hidden="true" style="color: rgb(112, 236, 203);">
            <p>加油卡</p>
          </i>
        </div>
        <div class="back2">
          <i class="fa fa-youtube-play" aria-hidden="true" style="color: rgb(253, 121, 109);">
            <p>电影</p>
          </i>
          <i class="fa fa-space-shuttle" aria-hidden="true"
            style="position: absolute; margin-left: 34%; color: rgb(239, 170, 106);">
            <p style="position: absolute; left: 12px;">机票</p>
          </i>
          <i class="fa fa-jsfiddle" aria-hidden="true" style="color: rgb(112, 236, 203);">
            <p>云建站</p>
          </i>
        </div>
        <div class="back3">
          <i class="fa fa-file-o" aria-hidden="true" style="color: rgb(253, 121, 109);">
            <p>白条</p>
          </i>
          <i class="fa fa-tablet" aria-hidden="true"
            style="position: absolute; margin-left: 37%; color: rgb(239, 170, 106);">
            <p style="position: absolute; left: 5px; ">话费</p>
          </i>
          <i class="fa fa-bus" aria-hidden="true" style="color: rgb(66, 178, 227);">
            <p>火车票</p>
          </i>
        </div>
        <div class="back4">
          <i class="fa fa-rocket" aria-hidden="true" style="color: rgb(253, 121, 109);">
            <p>游戏</p>
          </i>
          <i class="fa fa-list-alt" aria-hidden="true"
            style="position: absolute; margin-left: 35%; color: rgb(239, 170, 106);">
            <p style="position: absolute; left: 5px; ">礼品卡</p>
          </i>
          <i class="fa fa-black-tie" aria-hidden="true" style="color: rgb(66, 178, 227);">
            <p>企业购</p>
          </i>
        </div>





      </div>

    </div>
  </div>

  <!-- 底部秒杀商品框 -->
  <div class="header-footer">
    <div class="fot-ms">
      <p style="font-size: 30px; font-weight: 600; color: white; text-align: center; margin-top: 20px;">京东秒杀</p>
      <i class="fa fa-bolt" aria-hidden="true"
        style="color: white; font-size: 45px; margin-left: 41%; margin-top: 8px;"></i>
      <p style="color: white; font-size:18px; text-align: center; margin-top: 2px;">18:00 点场 距结束</p>
      <div class="fot-time">

        <p>00</p>
        <span>:</span>
        <p>05</p>
        <span>:</span>
        <p>20</p>
      </div>


    </div>
    <div class="fot-goods">
      <img src="../image/sp1.jpg.webp" width="140" height="140" style="margin-left: 25px;">
      <p style="font-size: x-small; color: black; text-align: center;">惯性越野四驱玩具车男孩2-...</p>
      <p style="color: red; font-weight: 600; text-align: center;">￥5.80</p>
    </div>
    <div class="fot-goods">
      <img src="../image/sp2.jpg.webp" width="140" height="140" style="margin-left: 25px;">
      <p style="font-size: x-small; color: black; text-align: center;">飞利浦 27英寸NanoIPS 2K...</p>
      <p style="color: red; font-weight: 600; text-align: center;">￥2099</p>
    </div>
    <div class="fot-goods">
      <img src="../image/sp3.jpg.webp" width="140" height="140" style="margin-left: 25px;">
      <p style="font-size: x-small; color: black; text-align: center;">美的(Midea) 新风空调 大...</p>
      <p style="color: red; font-weight: 600; text-align: center;">￥3198</p>
    </div>
    <div class="fot-goods">
      <img src="../image/sp4.jpg.webp" width="140" height="140" style="margin-left: 25px;">
      <p style="font-size: x-small; color: black; text-align: center; ">邦先生超薄隐形嵌入式电动...</p>
      <p style="color: red; font-weight: 600; text-align: center;">￥1399</p>
    </div>
    <div style="border: 1px solid rgb(225, 225, 225);">
      <img src="../image/by.png" width="170" height="215" style="margin-left: 10px;">
    </div>
  </div>

  <!-- 侧边导航栏 -->
  <div class="bornav">
    <div>
      <p>京东秒杀</p>
    </div>
    <div>
      <img src="../image/bornav.png" width="58" height="60" alt="" />
    </div>
    <div>
      <p>广场频道</p>
    </div>
    <div>
      <p>为您推荐</p>
    </div>
    <div class="bornav1">
      <i class="fa fa-comment-o" aria-hidden="true" style="margin-left: 20px;"></i>
      <p>客服</p>
    </div>
    <div class="bornav1">
      <i class="fa fa-pencil" aria-hidden="true" style="margin-left: 20px;"></i>
      <p>反馈</p>
    </div>
  </div>


  <!-- 频道广场 -->
  <h2 style="text-align: center; font-weight: 600; margin-top: -90px;">频道广场</h2>
  <div class="fot-pd">
    <div class="tv" v-for="(shop, shopping) in shop" :key="shopping">
      <div class="tv-shadow">
        <img :src="shop.image" class="tv-img" width="150" height="150">
        <div class="tv-title">{{ shop.title }}</div>
        <div class="tv-price">￥{{ shop.price }}.<span>{{ shop.radix }}</span></div>
        <div class="tv-find">
          <i class="fa fa-eye" aria-hidden="true">&nbsp;&nbsp;找相似</i>
        </div>
      </div>
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
window.onload = function () {
  var table = document.getElementById("table");
  var left = document.getElementById("left");
  var right = document.getElementById("right");
  var animated = false;

  function animate(offset) {
    animated = true;

    //控制图片切换流畅度
    var newleft1 = parseInt(table.style.left) + offset;
    var time = 700;//图片切换时间
    var interval = 10;//位移间隔
    var speed = offset / (time / interval);//每次移动的位移量

    //递归实现无限切换
    function go() {
      if ((speed < 0 && parseInt(table.style.left) > newleft1) || (speed > 0 && parseInt(table.style.left) < newleft1)) {
        table.style.left = parseInt(table.style.left) + speed + "px";
        setTimeout(go, interval);
      }
      else {
        animated = false;
        table.style.left = newleft1 + "px";

        if (newleft1 > -191.5) {
          table.style.left = -565.5 + "px";
        }
        if (newleft1 < -565.5) {
          table.style.left = -191.5 + "px";
        }
      }
    }
    go();
  }
  // 副轮播图切换
  right.onclick = function () {
    if (animated == false) {
      animate(-185.5);
    }
  }
  left.onclick = function () {
    if (animated == false) {
      animate(185.5);
    }
  }
}


export default {
  name: "CartView",
  data() {
    return {
      shop: []
    }
  },
  methods: {
    del(id) {
      this.$store.dispatch("del", id);
    },
    cart() {
      this.$router.replace('/Cart')
    },
    Main() {
      this.$router.replace('/Main')
    },
    Movie(){
      this.$router.replace('/Movie')
    },
    List() {
      this.$router.replace('/List')
    },
    search() {
      var obj = document.getElementById("text").value;
      console.log(obj)
      window.location.href = "https://search.jd.com/Search?keyword=" + obj;
    }
  },
  computed: {
    cartlist() {
      return this.$store.state.items
    },
    totalPrice() {
      return this.$store.getters.totalPrice
    }
  },
  mounted() {
    this.$http.get('http://localhost:3000/tv').then((result) => {
      console.log(result.data)
      this.shop = result.data
    }).catch((error) => {
      console.log(error, 'error')
    })
  }
}

</script>
