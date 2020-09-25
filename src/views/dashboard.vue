<template lang="html">

  <section class="dashboard">
    <!-- dashboard information cards -->
    <div class="col-lg-3 col-sm grid-margin stretch-card">
      <div class="card card-statistics to-do" style="margin-right: 20px" @click="$router.push('../to-do')">
        <div class="card-body">
          <div>
            <div class="fluid-container text-center">
              <span class="card-title font-weight-bold" style="font-size: 18px">待处理事务</span><br/>
              <span class="font-weight-bold" style="font-size: 48px; color: red">213</span>
            </div>
          </div>
          <p class="text-muted mt-3">
            <span style="font-size: 14px">较昨日：82</span>&nbsp;
            <img src="../assets/images/menu_icons/zengzhang_image.png" />
          </p>
        </div>
      </div>
      <div class="card card-statistics product-list" style="margin-right: 20px" @click="$router.push('../product-list')">
        <div class="card-body">
          <div>
            <div class="fluid-container text-center">
              <span class="card-title font-weight-bold" style="font-size: 18px">商品数量</span><br/>
              <span class="font-weight-bold" style="font-size: 48px; color: #6100B4">1.43k</span>
            </div>
          </div>
          <p class="text-muted mt-3">
            <span style="font-size: 14px">较昨日：82</span>&nbsp;
            <img src="../assets/images/menu_icons/xiadie_image.png" style="color: red" />
          </p>
        </div>
      </div>
      <div class="card card-statistics order-list" style="margin-right: 20px" @click="$router.push('../order-list')">
        <div class="card-body">
          <div>
            <div class="fluid-container text-center">
              <span class="card-title font-weight-bold" style="font-size: 18px">成交总额</span><br/>
              <span class="font-weight-bold" style="font-size: 48px; color: #0089B4">¥2.42k</span>
            </div>
          </div>
          <p class="text-muted mt-3">
            <span style="font-size: 14px">较昨日：82</span>&nbsp;
            <img src="../assets/images/menu_icons/zengzhang_image.png" />
          </p>
        </div>
      </div>
      <div class="card card-statistics" style="margin-right: 20px">
        <div class="card-body">
          <div>
            <div class="fluid-container text-center">
              <span class="card-title font-weight-bold" style="font-size: 18px">总用户量</span><br/>
              <span class="font-weight-bold" style="font-size: 48px; color: #4AB400">1w</span>
            </div>
          </div>
          <p class="text-muted mt-3">
            <span style="font-size: 14px">较昨日：82</span>&nbsp;
            <img src="../assets/images/menu_icons/zengzhang_image.png" />
          </p>
        </div>
      </div>
    </div>

    <!-- charts -->
    <div class="row">
      <div class="col-6 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <p class="card-title" style="font-size: 22px; font-weight: bold">商品增长</p>
              <span style="position: absolute; right: 10px; padding-top: 5px; opacity: 0.5; font-size: 14px">单位：件</span>
            </div>
            <bar-chart></bar-chart>
          </div>
        </div>
      </div>
      <div class="col-6 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <p class="card-title" style="font-size: 22px; font-weight: bold">用户增长</p>
              <span style="position: absolute; right: 10px; padding-top: 5px; opacity: 0.5; font-size: 14px">单位：人</span>
            </div>
            <line-chart fillProp="without"></line-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <p class="card-title" style="font-size: 22px; font-weight: bold">成交额</p>
              <span style="position: absolute; right: 10px; padding-top: 5px; opacity: 0.5; font-size: 14px">单位：¥</span>
            </div>
            <line-chart fillProp="with"></line-chart>
          </div>
        </div>
      </div>

  </section>

</template>

<script lang="js">

import BarChart from '../components/charts/BarChart'
import LineChart from '../components/charts/LineChart'
export default {
  name: 'dashboard',
  components: {
    BarChart,
    LineChart
  },
  methods: {
    getImageUrl (pic) {
      return require('../assets/images/product-images/computer' + pic + '.jpg')
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'dashboard')
  }
}
</script>

<style scoped lang="scss">
.vertical-line {
  width: 1px;
  min-height: 100px;
  height: 100px;
  border-left: 1px solid black;
  background: black;
  position: absolute;
  top: 20%;
  right: 0;
}

.search-box {
  align-items: center;
  position: relative;
}

.search-icon {
  opacity: 0.5;
  padding: 12px 10px 0 20px;
  height: 40px;
  position: absolute;
}

.search-input {
  font-size: 15px;
  width: 250px;
  height: 40px;
  background-color: #dee2e6;
  border-radius: 20px;
  padding-left: 50px;
  color: black;
  margin-left: 5px;
}

.button-panel {
  padding-top: 20px;
  position: relative;
}

.normal-label {
  padding: 10px 0 0 20px;
}

.normal-text {
  font-size: 15px;
  margin-top: 2px;
}

.normal-button {
  height: 40px;
}

.products {
  display: inline-flex;
  flex-direction: row;
}

.product {
  position: relative;
  overflow: hidden;
  width: 50px;
}

.product:not(:first-child) {
  margin-left: -30px;
}

.product img {
  display: block;
}

.to-do:hover {
  opacity: 0.5;
}

.product-list:hover {
  opacity: 0.5;
}

.order-list:hover {
  opacity: 0.5;
}
</style>
