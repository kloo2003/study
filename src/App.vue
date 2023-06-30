<template>
  <nav>
    <!--  <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Xiaogu">Xiaogu</router-link> 

    <router-link to="/">Register</router-link> |
    <router-link to="/Login">Login</router-link>-->
  </nav>
  <div class="header"></div>
  <div class="content"></div>

  <div class="footer">
    <div @click="Login()" class="my">
      <span>首页</span>
      <i class="fa fa-home" aria-hidden="true"></i>
    </div>
    <div @click="goods()" class="my">
      <span>新品</span>
      <i class="fa fa-shopping-bag" aria-hidden="true"></i>
    </div>
    <div @click="shop()" class="my">
      <span>逛一逛</span>
      <i class="fa fa-google-wallet" aria-hidden="true"></i>
    </div>
    <div @click="cart()" class="my">
      <span>购物车</span>
      <i class="fa fa-cart-plus" aria-hidden="true"></i>
    </div>
    <div @click="my()" class="my">
      <span>我的</span>
      <i class="fa fa-user" aria-hidden="true"></i>
    </div>
  </div>
  <router-view />
</template>

<style scoped>
* {
  padding: 0px;
  box-sizing: border-box;
}

.header {
  margin-top: -70px;
}

.footer {
  border: 0.5px solid rgb(187, 185, 185);
  border-radius: 3px;
  background-color: rgb(247, 246, 246);
  height: 45px;
  width: 100%;
  line-height: 5px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  position: absolute;
  bottom: 1px;
  left: -10px;
  position: fixed;
  z-index: 1;
}

span {
  font-size: x-small;
}

.my {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
}

.my:hover {
  color: red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<script>
export default {
  name: "OneView",
  methods: {
    Login() {
      this.$router.replace('/Xiaogu')
    },
    goods() {
      this.$router.replace('/New')
    },
    shop() {
      this.$router.replace('/Shop')
    }
    ,
    cart() {
      this.$router.replace('/Cart')
    },
    my() {
      this.$router.replace('/My')
    }
  }

}







</script>

