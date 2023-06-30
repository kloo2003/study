<template>
  <el-menu class="el-menu-demo" style=" width: 80%; border: none; margin-left: 10.5%;" mode="horizontal"
    :ellipsis="false">
    <img src="../image/ll.png" style="width: 110px; height: 60px;">
    <div class="flex-grow" />
    <el-menu-item index="1">首页</el-menu-item>
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
  <el-row class="tac" style=" width: 100%; background-color:#eff8e6 z-index: 999;">
    <el-col class="tac-box" :span="12" style=" margin-left: 10.5%;">
      <el-menu active-text-color="black" class="el-menu-vertical-demo" default-active="2" text-color="black"
        style="width: 200px; height: 800px; background-color: white; border: 1 solid red;">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>个人中心</span>
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
    </el-row>
    <div class="all">

      <div class="listdata">
        <span>111111</span>

        <div class="list-footer"></div>
      </div>

      <div class="right1">
        <span>我的钱包</span>
        <hr />
        <div class="right2"></div>
      </div>

      <el-form :model="form" label-width="120px">
        <el-form-item label="请输入您的名字">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="请选择您的所在地">
          <el-select v-model="form.region" placeholder="请选择您的所在地">
            <el-option label="地区一" value="成都" />
            <el-option label="地区二" value="上海" />
          </el-select>
        </el-form-item>
        <el-form-item label="请选择您的时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" type="date" placeholder="请选择日期" style="width: 100%" />
          </el-col>
          <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-time-picker v-model="form.date2" placeholder="请选择时间" style="width: 100%" />
          </el-col>
        </el-form-item>
        <el-form-item label="是否隐藏信息">
          <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="请选择您可以接受或参与的活动类型">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="线上促销活动" name="type" />
            <el-checkbox label="线下活动" name="type" />
            <el-checkbox label="直播商品特卖" name="type" />
            <el-checkbox label="商家直接接触售卖" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="您的性别">
          <el-radio-group v-model="form.resource">
            <el-radio label="男" />
            <el-radio label="女" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="您对京东商城的意见或建议">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认</el-button>
          <el-button>C取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script scope setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}

.all {
  margin-left: 25%;
  margin-top: -58%;
  width: 100%;
  height: 100%;
  border: 1px solid yellow;

}

.listdata {
  width: 350px;
  height: 360px;
  background-color: rgb(223, 4, 4);
  background-image:url(../image/red.png);
  background-size: 350px 280px ;
  z-index: 1;
}
.listdata span{
  color: rgb(218, 2, 2);
}

.list-footer {
  width: 100%;
  height: 80px;
  background-image:url(../image/black.png);
  background-size: 355px 80px ;
  margin-top: 74.5%;


}

.right {
  margin-top: 40px;
  margin-top: 13%;
}

.right1 {
  width: 650px;
  height: 300px;
  z-index: 1;
  margin-top: -23%;
  margin-left: 25.5%;
  margin-bottom: 80px;
}
.right2{
  width: 650px;
  height: 189px;
  margin-top:20px;
  background-image:url(../image/buttom.png);
  background-size: 650px 159px ;
  overflow: hidden;
}
</style>
