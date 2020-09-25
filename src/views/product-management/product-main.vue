<template lang="html">

  <section class="product-main">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="col-md-12 text-center" style="padding-top: 100px; padding-bottom: 100px">
              <img src="../../assets/images/dashboard/title_image.png" />
            </div>
            <div class="d-flex justify-content-center" style="padding-bottom: 50px;">
              <div style="position: relative; margin-right: 50px" @click="$router.push('../product-list')">
                <img style="width: 300px; height: 300px;" src="../../assets/images/product-images/computer1.jpg" />
                <img style="width: 300px; height: 300px; position: absolute; top: 0; left: 0; background-color: #424964; opacity: 0.7" />
                <div style="position: absolute; left: 20px; top: 140px">
                  <span style="font-weight: bold; font-size: 30px; color: white">商品管理</span><br />
                  <span style="font-weight: bold; font-size: 40px; color: white">334</span><br />
                  <span style="font-size: 14px; color: white; line-height: 1">帮你轻松断舍离，旧物变收入，即买即 卖，<br />一秒折现</span>
                </div>
              </div>
              <div style="position: relative; margin-right: 50px" @click="$router.push('../field-list')">
                <img style="width: 300px; height: 300px" src="../../assets/images/product-images/computer2.jpg" />
                <img style="width: 300px; height: 300px; position: absolute; top: 0; left: 0; background-color: #424964; opacity: 0.7" />
                <div style="position: absolute; left: 20px; top: 140px">
                  <span style="font-weight: bold; font-size: 30px; color: white">专栏管理</span><br />
                  <span style="font-weight: bold; font-size: 40px; color: white">33</span><br />
                  <span style="font-size: 14px; color: white; line-height: 1">展示你的潮流态度，搭建专属你的潮流<br />文化</span>
                </div>
              </div>
              <div style="position: relative; margin-right: 50px" @click="$router.push('../product-list')">
                <img style="width: 300px; height: 300px" src="../../assets/images/product-images/computer5.jpg" />
                <img style="width: 300px; height: 300px; position: absolute; top: 0; left: 0; background-color: #424964; opacity: 0.7" />
                <div style="position: absolute; left: 20px; top: 140px">
                  <span style="font-weight: bold; font-size: 30px; color: white">特辑管理</span><br />
                  <span style="font-weight: bold; font-size: 40px; color: white">33</span><br />
                  <span style="font-size: 14px; color: white; line-height: 1">风格多元随你造，品牌分类跟你走</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">

export default {
  name: 'product-main',
  methods: {
    getImageUrl (pic) {
      return require('../../assets/images/product-images/computer' + pic + '.jpg')
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'product-main')
  }
}
</script>

<style scoped lang="scss">
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

.page-item button {
  border: none;
}
</style>
