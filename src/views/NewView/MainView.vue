<template>
  <div class="all">
    <div class="logo">
      <img src="../image/cart.jpg" style="width: 190px; height: 120px;" @click="back()">
    </div>
    <div class="input"><input type="text" placeholder="请输入你想搜索的宝贝"
        style="width: 500px;  height: 35px; border: 1.5px solid red;outline: none;" v-model="msg">
      <div>
        <button
          style="width: 80px; margin-left:-2px;height: 35px;background-color: red;color:white;font-size: 15px;border: none;" @click="getDate()">搜索
        </button>
      </div>
    </div>
  </div>
  <div class="main">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">超市生鲜</el-menu-item>
      <el-menu-item index="2">京东国际</el-menu-item>
      <el-menu-item index="3">京东五金城 </el-menu-item>
      <el-sub-menu index="4">
        <template #title>商品分类</template>
        <el-menu-item index="4-1" @click="getDatadian()">空调风扇</el-menu-item>
        <el-menu-item index="4-2">个人清洁</el-menu-item>
        <el-menu-item index="4-3">宠物</el-menu-item>
        <el-menu-item index="4-4">户外</el-menu-item>
        <el-menu-item index="4-5">食品</el-menu-item>
        <el-menu-item index="4-6">图书</el-menu-item>
        <el-menu-item index="4-7">工业品</el-menu-item>
        <el-menu-item index="4-8">礼品鲜花</el-menu-item>
        <el-menu-item index="4-9">手机电脑</el-menu-item>
        <el-sub-menu index="4-10">
          <template #title>爆款服饰</template>
          <el-menu-item index="4-4-1" @click="getDatanan()">男装</el-menu-item>
          <el-menu-item index="4-4-2" @click="getDatanv()">女装</el-menu-item>
          <el-menu-item index="4-4-3" @click="getDatatong()">童装</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
    <div class="home"><span>全部搜索结果 > </span><span>{{ msgs }}</span></div>
    <div class="data">

      <div class="shopdata" v-for="item in shop" :key="item">
        <div class="tv-shadow">
          <div class="shopimg"><img :src="item.product_img_url" style="width: 220px; height: 220px;"></div>
          <div class="shopprice"><span style="width: 10px; height: 20px; color: red;">￥</span><span
              style="font-size: 23px; color: red;">{{ item.product_price }}</span></div>
          <div class="shopname">{{ item.product_name }}</div>
          <div class="tv-find">
            <i class="fa fa-eye" aria-hidden="true" @click="outdata()">点击查看详情</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default ({
  data() {
    return {
      shop: [],
      msg: "",
      msgs: ""
    }
  },
  methods: {
    getDate() {
      var key = this.msg
      this.msgs = this.msg
      Axios.get("http://goods.yuanxiaojiang.com/api/product/search?key=" + key).then((result) => {
        console.log(result.data.Data)
        this.shop = result.data.Data
        console.log(this.shop)
      }).catch((error) => {
        console.log(error, 'error')
      })
    },
    getDatanan() {
      var key = "男装"
      this.msg = "男装"
      this.msgs = "男装"
      Axios.get("http://goods.yuanxiaojiang.com/api/product/search?key=" + key).then((result) => {
        console.log(result.data.Data)
        this.shop = result.data.Data
        console.log(this.shop)
      }).catch((error) => {
        console.log(error, 'error')
      })
    },
    getDatanv() {
      var key = "女装"
      this.msg = "女装"
      this.msgs = "女装"
      Axios.get("http://goods.yuanxiaojiang.com/api/product/search?key=" + key).then((result) => {
        console.log(result.data.Data)
        this.shop = result.data.Data
        console.log(this.shop)
      }).catch((error) => {
        console.log(error, 'error')
      })
    },
    getDatatong() {
      var key = "童装"
      this.msg = "童装"
      this.msgs = "童装"
      Axios.get("http://goods.yuanxiaojiang.com/api/product/search?key=" + key).then((result) => {
        console.log(result.data.Data)
        this.shop = result.data.Data
        console.log(this.shop)
      }).catch((error) => {
        console.log(error, 'error')
      })
    },
    getDatadian() {
      var key = "空调"
      this.msg = "空调"
      this.msgs = "空调"
      Axios.get("http://goods.yuanxiaojiang.com/api/product/search?key=" + key).then((result) => {
        console.log(result.data.Data)
        this.shop = result.data.Data
        console.log(this.shop)
      }).catch((error) => {
        console.log(error, 'error')
      })
    },
    back(){
      this.$router.replace('/Xiaogu')
    }
  }
})
</script>

<style scoped>
.data {
  width: 80%;
  margin-left: 15%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.shopdata {
  margin-top: 15px;
  margin-left: 20px;
}

.shopdata:hover {
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}

.tv-shadow {
  position: relative;
}

.tv-shadow::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.5));
  opacity: 0;
  transition: all 1s;
}

.tv-shadow:hover::before {
  opacity: 1;
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

.shopname {
  font-size: small;
  font-weight: 600;
  width: 220px;
  color: rgb(172, 172, 172);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}


.flex-grow {
  flex-grow: 1;
}

.all {
  display: flex;
  flex-direction: row;
}

.input {
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-left: 300px;
}



.cart {
  height: 36px;
  width: 120px;
  border: 1px solid rgb(240, 237, 237);
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.cart * {
  color: red;
  margin-left: 5px;
  margin-right: 5px;
}

.row1 {
  color: rgb(122, 121, 118);
}

.data {
  display: flex;
  flex-direction: row;
}
</style>
