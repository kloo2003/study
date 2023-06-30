<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" style="background-color: rgb(229, 6, 6);">
    <img src="../image/ll.png" style="width: 140px; height: 60px; margin-top:15px;" @click="back()">
    <div class="flex-grow" />
    <el-menu-item index="1" style="line-height:80px;" @click="back()">首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>账户设置</template>
      <el-menu-item index="2-1">个人信息</el-menu-item>
      <el-menu-item index="2-2">我的尺码</el-menu-item>
      <el-menu-item index="2-3">我的银行卡</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>我的评价</template>
        <el-menu-item index="2-4-1">待评价</el-menu-item>
        <el-menu-item index="2-4-2">待追评</el-menu-item>
        <el-menu-item index="2-4-3">已评价</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
  <el-row class="tac">
    <el-col :span="4.5">
      <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff" style="width: 200px; height: 800px;">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>订单中心</span>
          </template>
          <el-menu-item-group title="我的订单">
            <el-menu-item index="1-1">评价下单</el-menu-item>
            <el-menu-item index="1-2">我的活动</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="关注中心">
            <el-menu-item index="1-3">关注的店铺</el-menu-item>
            <el-menu-item index="1-4">关注的商品</el-menu-item>
            <el-menu-item index="1-5">关注的的活动</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-6">
            <template #title>设置</template>
            <el-menu-item index="1-6-1">个人信息</el-menu-item>
            <el-menu-item index="1-6-1">收货地址</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>特色业务</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon>
            <document />
          </el-icon>
          <span>客户服务</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <span>设置</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <div class="listdata" style="width: 80%;">
      <h2>我感兴趣的订单</h2>
      <div class="list">
        <div class="list-all" v-for="item in cartlist" :key="item.id">
          <div class="list-img">
            <img :src="item.src">
          </div>
          <div style="color: #ccc;">
            x {{ item.num }}
          </div>
          <div class="list-info">
            <div class="list-title">{{ item.title }}</div>
            <div class="list-kinds">￥ {{ item.price }}</div>
          </div>
          <div class="item-opt"><button @click=del(item.id)>删除</button></div>
        </div>
      </div>
      <div class="item-total" v-if="cartlist.length > 0"></div>
      <div class="item-empty" v-else>最近没有下过订单哦</div>
    </div>
  </el-row>
</template>

<script>
export default {
  name: "CartView",
  data() {
    return {
      items: []
    }
  },
  methods: {
    del(id) {
      this.$store.dispatch("del", id);
    },
    back() {
      this.$router.replace('/Xiaogu')
    }
  },
  computed: {
    cartlist() {
      return this.$store.state.items
    },
    totalPrice() {
      return this.$store.getters.totalPrice
    }
  }
}
</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}

.list-all {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.list-info {
  margin-left: 500px;
}

.list-button {
  margin-left: 300px;
  float: right;
}

.list-img {
  margin-right: 10px;
  width: 85px;
  height: 90px;
  flex-shrink: 0;
}

.list-img img {
  width: 100%;
  height: 100%;
}
</style>