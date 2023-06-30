<template>
    <!-- 顶部 -->
    <div class="top">
        <!-- 左边 -->
        <div class="logo">
            <!-- <img src="img/logo.png" alt="" class="logo"> -->
            <h2 class="wel">欢迎登录</h2>
        </div>

        <!-- 右边 -->
        <div class="survey">
            <!-- <img src="img/massage.png" alt="" > -->
            <a href="#">登录页面，调查问卷</a>
        </div>
    </div>
    <!-- 条款法律 -->
    <div class="policy">
        <!-- <img src="img/warn.png" alt=""> -->
        <span class="text">依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版<a href="#"
                class="policy">《京东隐私政策》</a>已上线，将更有利于保护您的个人隐私。</span>
    </div>
    <!-- 主界面 -->
    <div class="main">
        <!-- 主界面下的子盒子用于放背景图片 -->
        <div class="img">
            <img src="../image/Login1.png" width="475" height="475">
            <!-- 登录页 -->
            <div class="login">
                <!-- 登录页顶部 -->
                <div class="top">
                    <!-- <img src="img/warn.png" alt=""> -->
                    <span>京东不会以任何理由要求您转账汇款，谨防诈骗。</span>
                </div>
                <!-- 账户登录和扫码登录选项卡 -->
                <div id="tab">
                    <div class="sel">
                        <ul>
                            <div class="left">
                                <li class="off"><a href="">扫码登录</a></li>
                            </div>
                            <div class="right">
                                <li class="on"><a href="">账户登录</a></li>
                            </div>
                        </ul>
                    </div>
                    <!-- 账户密码登录界面 -->
                    <div class="m">
                        <div class="show">
                            <div class="inputs">
                                <input type="text" class="user">
                                <input type="password" name='password' class="pwd">
                                <span class="user_img"></span>
                                <span class="pwd_img"></span>
                                <a href="#">忘记密码</a>
                                <input type="button" class="button" value="登&nbsp;&nbsp;&nbsp;&nbsp;录">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 登录页底部 -->
                <div class="login-bottom">
                    <!-- 第三方登录界面 -->
                    <div class="other-login">
                        <!-- <img src="img/qq.png" alt="">&nbsp; -->
                        <a href="#">QQ</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <!-- <img src="img/WeChat.png" alt="">&nbsp; -->
                        <a href="#">微信</a>
                    </div>
                    <!-- 注册界面 -->
                    <div class="enroll">
                        <!-- <img src="img/login.png" alt=""> -->
                        <a href="#">立即注册</a>
                    </div>
                </div>
            </div>

        </div>


        <!-- 底部 -->
        <div class="bottom">
            <ul class="about">
                <a href="#"> 关于我们 </a><span>|</span>
                <a href="#"> 联系我们 </a><span>|</span>
                <a href="#"> 人才招聘 </a><span>|</span>
                <a href="#"> 商家入驻 </a><span>|</span>
                <a href="#"> 广告服务 </a><span>|</span>
                <a href="#"> 手机京东 </a><span>|</span>
                <a href="#"> 友情链接 </a><span>|</span>
                <a href="#"> 销售联盟 </a><span>|</span>
                <a href="#"> 京东社区 </a><span>|</span>
                <a href="#"> 京东公益 </a><span>|</span>
                <a href="#"> English Site </a>
            </ul>
            <!-- 底部版权 -->
            <p class="copy">
                Copyright 2004-2021 京东JD.com 版权所有
            </p>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "FindView",
    created() {
        // 去发ajax请求获取后端的数据 赋值给vuex
    },
    data() {
        return {
        }
    },
    computed: {
        goodslist() {
            return this.$store.state.list;
        }
    },
    methods: {
        add(item) {
            this.$store.dispatch('add', item);
        }
    }
}
</script>
<style>
/* 顶部基础设置 */
.top {
    width: 1000px;
    margin: 0 auto;
    padding: 18px;
    overflow: hidden;
}

/* 左浮动京东logo和欢迎登录 */
.top .logo .logo,
.top .logo .wel {
    float: left;
}

/* 调整京东logo和欢迎登录之间的距离以及字体颜色和样式 */
.top .logo .wel {
    height: 60px;
    line-height: 70px;
    font-weight: normal;
    margin-left: 25px;
    color: #333333;
}

/* 使用元素的相对定位将其调整到合适的界面并调整字体颜色和样式 */
.top .survey {
    position: relative;
    float: right;
    top: 45px;
    font-size: 12px;
    font-family: SimSun;
    color: #999999;
}

/* 政策条款  改背景色、字体、字号并居中*/
.policy {
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #fff8f0;
    width: 100%;
    text-align: center;
    font-size: 12px;
    font-family: SimSun;
    color: #999999;
}

/* 条款 调整颜色*/
.policy .policy {
    padding: 0px;
    color: #333333;
}

/* 定义主界面高度和颜色*/
.main {
    height: 475px;
    background-color: #E93854;
}

/* 导入背景图并居中 */
.main .img {
    width: 990px;
    height: 475px;
    /* 或者100% */
    margin: 0 auto;
    /* background: url(../img/main.png); */
}

/* 定义登录页面的高度宽度 并定位好位置 */
.main .img .login {
    width: 350px;
    height: 410px;
    background-color: white;
    float: right;
    margin-top: 15px;
}

/* 上边的提醒警告栏 修改padding 字号 字体 */
.main .img .login .top {
    text-align: center;
    width: 350px;
    padding: 10px 0;
    background-color: #fff8f0;
    color: #666666;
    font-size: 12px;
    font-family: SimSun;
}

/* 扫码登录和账号登录大盒子 */
.main .img .login .sel {
    width: 350px;
    height: 56px;
    display: block;
}

/* 扫码登录和账号登录 */
.main .img .login .left,
.main .img .login .right {
    width: 175px;
    height: 55px;
    text-align: center;
    line-height: 55px;
    font-size: 18px;
    border-bottom: 1px solid #f4f4f4;
}

.main .img .login .left {
    float: left;
}

.main .img .login .right {
    float: right;
}

/* 取消放上去的下划线 */
.main .img .login a:hover {
    text-decoration: none;
}

.main .img .login .right a {
    color: #E93854;
    font-weight: bolder;
}

/* 两个输入框都定位 */
.show {
    padding-top: 33px;
    padding-left: 20px;
    padding-right: 20px;
}

.show .user,
.show .pwd {
    width: 304px;
    height: 38px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    padding-left: 50px;
    box-sizing: border-box;
}

.inputs {
    position: relative;
}

/* 图标位置定位 */
.show span {
    display: block;
    width: 36px;
    height: 36px;
    border-right: 1px solid #ccc;
    background-color: #f3f3f3;
    position: absolute;
}

/* 将图标导入 */
.show .user_img {
    top: 1px;
    left: 1px;
    /* background: url("../img/account.jpg") no-repeat; */
}

.show .pwd_img {
    top: 59px;
    left: 1px;
    /* background: url("../img/password.jpg") no-repeat; */
}

/* 忘记密码定位 */
.inputs a {
    float: right;
    font-size: 12px;
    font-family: SimSun;
    padding-bottom: 30px;
}

/* 登录按钮定位 */
.inputs .button {
    border: 1px solid #e85356;
    display: block;
    width: 302px;
    background: #e4393c;
    height: 31px;
    line-height: 31px;
    color: #fff;
    font-size: 20px;
}

/* 底部第三方登录和注册 */
.login-bottom {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #f4f4f4;
    background-color: #fcfcfc;
    display: flex;
    justify-content: space-around;
    padding-top: 40px;
}

/* 调整底部的一些细节 图标与文字的位置等 */
.login-bottom .other-login a {
    position: relative;
    font-size: 12px;
    bottom: 5px;
}

.login-bottom .enroll a {
    position: relative;
    font-family: SimSun;
    font-size: 14px;
    color: #E93854;
    bottom: 3px;
}

/* 底部基础设置 与中央部分的距离调整 文字居中 字体、字号、颜色 */
.bottom {
    margin-top: 25px;
    text-align: center;
    font-size: 12px;
    font-family: SimSun;
    color: #666666;
}

/* 调整版权和关于我们项目之间的距离 */
.bottom .copy {
    margin-top: 12px;
}

/* 基本预设 */

/*清除页面中标签自带的外间距和内填充*/
* {
    margin: 0;
    padding: 0;
}

/*清除ul自带的列表符*/
ul,
li {
    list-style: none;
}

/*去掉a自带的下划线*/
a {
    color: #666666;
    text-decoration: none;
}

/* 删除a点击后变蓝色   */
a:visited {
    color: #999999;
    text-decoration: none;
}

/* 点击a上面有下划线 且变红*/
a:hover {
    text-decoration: underline;
    color: red;
}

/*去掉img自带的边框<当图像加上a标签后，IE浏览器在不去除图像边框时会显示边框>*/
img {
    border: none;
}

html {
    height: 100%;
}

body {
    min-height: 100%;
    position: relative;
}</style>