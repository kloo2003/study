<template>
  <div class="header-top">

    <!-- 图标地区 -->
    <i class="fa fa-map-marker" aria-hidden="true"
      style="position: absolute; left: 110px; color: red; line-height: 30px;">
      <div class="btn-group">
        <button class="btn btn-sm" style="border: none;" type="button" data-toggle="dropdown" aria-expanded="false">
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

  <div class="mui-card">
    <!--页眉，放置标题-->

    <!-- 顶部内容 -->
    <div class="mui-card-header">

      <!-- logo图片 -->
      <div class="lrimg">
        <img src="../image/cart.jpg" width="170" height="105">
      </div>


      <!-- 搜索框 -->
      <div style="position:absolute;  margin-left: 50%; margin-top: 40px;">

        <input id="text" type="text" @dblclick="Main()" style="width:220px; font-size: x-small; height: 30px; margin-left:205px;
          background:rgba(255,255,255,.5); border:2px solid  rgb(241, 12, 12)">

        <input v-on:click="search()" id="button" type="button" value="搜索"
          style="height:30px; width:70px; left: 422px; position: absolute; 
          background:rgb(241, 12, 12);border: 0.5px solid rgb(241, 12, 12); color: white; font-weight: 600; line-height: 10px;">
      </div>

    </div>

    <!--内容区-->
    <div class="mui-card-content">
      <!-- 购物车 -->
      <div class="list">
        <div class="item" v-for="item in cartlist" :key="item.id">
          <div class="item-l">
            <input type="checkbox" v-model="item.state" @change="totalPrice()">
            <img :src="item.src" class="item-img">
          </div>
          <div class="item-r">
            <div class="item-title">
              <span>{{ item.title }}</span>
              <small>x {{ item.num }}</small>
              <h3 style="display:inline-block; position: absolute; margin-left:40px;font-size:15px">￥{{ item.price }}</h3>
              <div class="myCounter">
                <button class="btn-left"
                  @click="item.num < 1 ? item.num = 0 : item.num--; totalPrice()"><span>-</span></button>
                <input type="number" class="form-count" v-model.number="item.num" @change="totalPrice()">
                <button class="btn-right" @click="item.num++; totalPrice()"><span>+</span></button>
              </div>
            </div>
            <div class="item-opt">
              <button @click=del(item.id)>删除</button>
              <p>移入关注</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--页脚，放置补充信息或支持的操作-->

    <div class="mui-card-footer">
      <div class="cart-floatbar">
        <div class="cart-toolbar">
          <div class="option-box">
            <div class="left">
              <div class="select-all">
                <input type="checkbox" class="checkAll" v-model="allCheck">全选
              </div>
              <div class="operation">
                <a href="#none" class="opt-batch-remove" @click="deleteAllGoods">删除选中的商品</a>
                <a href="#none" class="opt-cleaner" title="亲，点我可快速清理购物车商品哦"
                  @click="deleteAllGoods"><strong>清理购物车</strong></a>
              </div>
            </div>
            <div class="right">
              <div class="conbine">
                <div class="btn-area">
                  <a class="common-submit-btn" style="height: 49px;" href="#none" @click="settlement"><b>去结算</b></a>
                </div>
                <div class="price-sum">
                  <div>
                    <div class="price-sum-amount">
                      <div class="price-show">
                        <span class="txt" style="line-height: 33px;">总价：</span>
                        <span class="price priceShow"><em>{{ sumprice }}</em></span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-lightbulb" viewBox="0 0 16 16" style="margin-left:5px;">
                          <path
                            d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                        </svg>
                      </div>
                      <span class="amount-sum" style="line-height: 33px;">
                        已选择<em>{{ sumnum }}</em>件商品
                      </span>
                    </div>
                    <div class="price-sum-extra"></div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="block"></div>

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
import '../../Lib/mui/css/optionbox.css'
export default {
  name: "CartView",
  data() {
    return {
      items: [],
      cartlist: [],
      sumprice: 0,
      sumnum: 0
    }
  },
  methods: {
    del(id) {
      this.$store.dispatch("del", id);
    },
    delAll() {
      this.$store.dispat
    },
    List() {
      this.$router.replace('/List')
    },
    Main() {
      this.$router.replace('/Main')
    },
    search() {
      var obj = document.getElementById("text").value;
      console.log(obj)
      window.location.href = "https://search.jd.com/Search?keyword=" + obj;
    },
    cartlist1() {
      this.cartlist = this.$store.state.items;
    },

    //结算
    settlement() {
      var outcome = confirm('共计' + this.sumprice + '元')
      alert('结算成功')
      if (outcome) {
        this.cartlist = this.cartlist.filter((item) => {
          return item.state != true
        })
      }
      this.sumprice = 0;
      this.$store.state.items = [];
      this.sumnum = 0;
    },
    //删除勾选的商品
    deleteAllGoods() {
      var isDeleteAll = confirm("确认删除全部已勾选商品吗？")
      if (isDeleteAll) {
        this.cartlist = this.cartlist.filter((item) => {
          return item.state != true
        })
      }
      this.sumprice = 0;
      this.sumnum = 0;
      this.$store.state.items = [];
    },
    //计算总数
    totalNum() {
      this.sumnum = 0
      this.cartlist.forEach((item) => {
        if (item.state == true) {
          this.sumnum += item.count;
        }
      });
    },
    totalPrice() {
      this.totalNum()
      // console.log(this.cartlist)
      this.sumprice = 0;
      this.sumprice.toFixed(2)
      this.cartlist.forEach((item) => {
        // console.log(item)
        if (item.state == true) {
          this.sumprice += item.price * item.num
          this.sumprice.toFixed(2)
        }
      })
      this.sumprice.toFixed(2)
    },
    mounted() {
      this.cartlist1();
      this.totalPrice();
      this.totalNum();
    }
  },
  computed: {

    allCheck: {
      get() {
        return this.cartlist.every(item => item.state)
      },
      set(val) {
        this.cartlist.forEach(item => item.state = val)
      }
    }

  },
  created() {
    this.mounted()
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  margin: 0;
  font-size: 12px;
  box-sizing: border-box;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.btn {
  margin: 0 2px;
  border: 1px solid #888;
}



.myCounter {
  display: inline-block;
  margin-left: 18%;

}

.item {
  border: 1px dashed #ccc;
  padding: 10px;
}

.item::after {
  content: "";
  display: block;
  clear: both;
}

.item-l {
  float: left;
  font-size: 0;
}

.item-r {
  float: left;
  padding-left: 20px;
}

.item-img {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}


.item-opt {
  margin-top: -30px;
}


.item-opt button {
  border: 0;
  background: none;
  margin-left: 780px;
  color: #989898;
  padding: 4px 5px;
  cursor: pointer;
}

.item-opt p {
  position: absolute;
  margin-left: 76.2%;
}

.item::after {
  content: "";
  display: block;
  clear: both;
}

.item-l {
  float: left;
  font-size: 0;
}

.item-r {
  float: left;
  padding-left: 20px;
}

.item-img {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}

.item-title {
  font-size: 14px;
  margin-top: 10px;
}

.item-title>small {
  color: #888;
  font-size: 12px;
}


.btn-left {
  width: 1px;
  height: 20px;
  border-radius: 5px;
}

.form-count {
  width: 50px;
  height: 20px;
  text-align: center;
  margin: 0 5px;
  vertical-align: middle;
  margin-top: -5px;
}

.btn-right {
  width: 1px;
  height: 20px;
  border-radius: 5px;
}

.btn-right span,
.btn-left span {
  position: absolute;
  margin-top: -12px;
  margin-left: -6px;
  font-size: 15px;
}

.header-top {
  width: 100%;
  height: 32px;
  margin-top: 10px;
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
  border: none;
}

.nav1 div:hover,
.nav1 button:hover {
  color: rgb(255, 51, 51);
}

.dropdown-menu p {
  margin: 5px;
}

.lrimg {
  width: 100%;
  height: 20px;
  margin-left: 140px;
  margin-top: -55px;
}

.mui-card-content {
  width: 75%;
  margin-left: 12.5%;
}

.mui-card-header {
  height: 150px;
}

.cart-floatbar {
  margin-left: 11.5%;
}

.cart-toolbar {
  width: 1015px;
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
