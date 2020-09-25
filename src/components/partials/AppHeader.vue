<template lang="html">
  <b-navbar class="fixed-top" toggleable="md" type="dark" variant="info">
    <div class="text-center navbar-brand-wrapper align-items-top justify-content-center">
      <div class="navbar-brand" style="margin-top: 10px">
        <b style="font-size: 22px; color: black">奉茂科技有限公司</b>
        <p style="font-size: 14px; color: black">FENGMAOKEJIYOUXIANGGONGSI</p>
      </div>
    </div>

    <div class="navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0" style="background-color: black">
      <h4 v-if="$store.getters.getUrl==='dashboard'" style="margin-left: 20px; margin-top: 20px; color: white"><b>首页</b></h4>
      <h4 v-if="$store.getters.getUrl==='user-list'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/user-list" style="color: white; font-weight: bold; opacity: 0.8">用户管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">全部用户</span></h4>
      <h4 v-if="$store.getters.getUrl==='user-detail'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/user-list" style="color: white; font-weight: bold; opacity: 0.8">用户管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">用户详情</span></h4>
      <h4 v-if="$store.getters.getUrl==='product-list'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/product-list" style="color: white; font-weight: bold; opacity: 0.8">商品管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">全部商品</span></h4>
      <h4 v-if="$store.getters.getUrl==='product-detail'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/product-list" style="color: white; font-weight: bold; opacity: 0.8">商品管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">商品详情</span></h4>
      <h4 v-if="$store.getters.getUrl==='product-upload'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/product-list" style="color: white; font-weight: bold; opacity: 0.8">商品管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">上传商品</span></h4>
      <h4 v-if="$store.getters.getUrl==='order-list'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/order-list" style="color: white; font-weight: bold; opacity: 0.8">订单管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">全部订单</span></h4>
      <h4 v-if="$store.getters.getUrl==='order-detail'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/order-list" style="color: white; font-weight: bold; opacity: 0.8">订单管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">订单详情</span></h4>
      <h4 v-if="$store.getters.getUrl==='special-feature-list'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/special-feature-list" style="color: white; font-weight: bold; opacity: 0.8">特辑管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">全部特辑</span></h4>
      <h4 v-if="$store.getters.getUrl==='special-feature-detail'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/special-feature-list" style="color: white; font-weight: bold; opacity: 0.8">特辑管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">特辑详情</span></h4>
      <h4 v-if="$store.getters.getUrl==='special-feature-upload'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/special-feature-list" style="color: white; font-weight: bold; opacity: 0.8">特辑管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">上传特辑</span></h4>
      <h4 v-if="$store.getters.getUrl==='field-list'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/field-list" style="color: white; font-weight: bold; opacity: 0.8">专栏管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">全部专栏</span></h4>
      <h4 v-if="$store.getters.getUrl==='field-detail'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/field-list" style="color: white; font-weight: bold; opacity: 0.8">专栏管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">专栏详情</span></h4>
      <h4 v-if="$store.getters.getUrl==='field-upload'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/field-list" style="color: white; font-weight: bold; opacity: 0.8">专栏管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">上传专栏</span></h4>
      <h4 v-if="$store.getters.getUrl==='management-list'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/management-list" style="color: white; font-weight: bold; opacity: 0.8">运营管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">全部运营</span></h4>
      <h4 v-if="$store.getters.getUrl==='management-upload'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/management-list" style="color: white; font-weight: bold; opacity: 0.8">运营管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">发布新推送</span></h4>
      <h4 v-if="$store.getters.getUrl==='management-detail'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/management-list" style="color: white; font-weight: bold; opacity: 0.8">运营管理</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">运营详情</span></h4>
      <h4 v-if="$store.getters.getUrl==='feedback-list'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/feedback-list" style="color: white; font-weight: bold; opacity: 0.8">举报反馈</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">全部举报反馈</span></h4>
      <h4 v-if="$store.getters.getUrl==='feedback-detail'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <a href="http://localhost:8080/#/feedback-list" style="color: white; font-weight: bold; opacity: 0.8">举报反馈</a> <span style="color: white"> > </span>  <span style="color: white; font-weight: bold">举报反馈</span></h4>
      <h4 v-if="$store.getters.getUrl==='to-do'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <span style="color: white">待处理事物 </span></h4>
      <h4 v-if="$store.getters.getUrl==='profile'" style="margin-left: 20px; margin-top: 20px"><a href="http://localhost:8080/#/dashboard" style="color: white; font-weight: bold; opacity: 0.8">首页</a> <span style="color: white"> > </span>  <span style="color: white">账号设置 </span></h4>

      <b-navbar-nav class="ml-auto">
        <input type="text" placeholder="请输入内容" style="width: 200px; height: 40px; border-radius: 20px; margin-top: 5px; padding-left: 15px" />
        <b-nav-item-dropdown right class="preview-list">
          <template slot="button-content">
            <img src="../../assets/images/faces/face27.jpg" alt="profile image" class="img-xs" style="border-radius: 20px" />
            <span style="color: white; padding-left: 10px">Feng Mao</span>
          </template>
          <b-dropdown-item href="#" class="preview-item flex-wrap" style="padding-top: 0; padding-bottom: 0" @click="profile"><b style="opacity: 0.7">账号设置</b></b-dropdown-item>
          <b-dropdown-item href="#" class="preview-item flex-wrap" style="padding-top: 0; padding-bottom: 0" @click="setLogout"><b style="opacity: 0.7">推出登陆</b></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <button class="navbar-toggler navbar-toggler-right align-self-center" type="button" @click="collapedMobileSidebar()">
        <span class="mdi mdi-menu"></span>
      </button>
    </div>
  </b-navbar>
</template>

<script lang="js">
export default {
  name: 'app-header',
  methods: {
    collapedMobileSidebar: () => {
      document.querySelector('.sidebar').classList.toggle('active')
    },
    setLogout () {
      this.$store.commit('setLogout')
      this.$router.push('../../login')
    },
    profile () {
      this.$router.push('../../profile')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
