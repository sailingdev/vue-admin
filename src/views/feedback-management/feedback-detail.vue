<template lang="html">

  <section class="product-detail">
    <div class="row">
      <div class="col-lg-12 grid-margin ">
        <div class="card" style="margin-bottom: 0; padding-bottom: 0">
          <div class="card-body main-card-body">
            <span class="card-title" style="font-size: 22px"><b>举报详情</b></span>
            <hr style="margin-left: auto; margin-right: auto; background-color: black;" />
            <div class="col-lg-10 offset-1">
              <!-- pictures -->
              <div style="margin-bottom: 25px;">
                <div class="row">
                  <label for="name" class="col-form-label"><b>商品详情：</b></label>
                  <div class="text-center">
                    <div class="products" style="margin-left: 20px">
                      <span class="product" v-for="image in product_images" :key="image.id">
                        <img :src="getImageUrl(image)" style="width: 170px; height: 170px" @click="image_click" />
                      </span>
                    </div>
                    <p style="margin-top: 0; margin-bottom: 0; font-weight: bold">NIKE Kobe 2k4 Ftb 45 全新配盒</p>
                    <p style="margin-top: 0; margin-bottom: 0; font-weight: bold">NIKE</p>
                    <p style="margin-top: 0; margin-bottom: 0; font-weight: bold">¥1750</p>
                    <p style="margin-top: 0; margin-bottom: 0">NIKE Kobe 2k4 Ftb 45 全新配盒 轻微氧化 全网最低价秒杀¥1750</p>
                  </div>
                </div>
              </div>
              <!-- feedback submitter picture -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>举报人信息：</b></label>
                <div class="col-lg-10">
                  <img :src="getPictureUrl('face27.jpg')" class="profile-image" />
                  <p style="position: absolute; top: 10px; left: 120px; font-size: 16px; font-weight: bold">用户8234318c</p>
                  <small style="position: absolute; top: 40px; left: 120px; font-size: 10px;">举报次数：132次</small>
                </div>
              </div>

              <!-- feedback submission reason input -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>举报理由：</b></label>
                <div class="col-lg-10">
                  <input type="text" class="text-input form-control" placehoder="举报理由" value="Billionaire Boys  经典回收到回复开始速度快">
                </div>
              </div>

              <!-- feedback time input -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>举报时间：</b></label>
                <div class="col-lg-10">
                  <input type="text" class="text-input form-control" placehoder="举报时间" value="2020-8-12 14:23">
                </div>
              </div>

              <!-- feedback receiver picture -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>被举报人信息：</b></label>
                <div class="col-lg-10">
                  <img :src="getPictureUrl('face23.jpg')" class="profile-image" />
                  <p style="position: absolute; top: 10px; left: 120px; font-size: 16px; font-weight: bold">用户8234319c</p>
                  <small style="position: absolute; top: 40px; left: 120px; font-size: 10px;">被举报次数：132次</small>
                </div>
              </div>

              <!--result checkbox and textarea -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>处理结果：</b></label>
                <div class="col-lg-10 row" style="margin-left: 20px;">
                  <b-form-group>
                    <b-form-checkbox-group v-model="process" class="row">
                      <b-form-checkbox class="col-lg-12" value="假冒商品，违法违禁商品">假冒商品，违法违禁商品</b-form-checkbox>
                      <b-form-checkbox class="col-lg-12" value="商品信息与图文不符合，抄袭盗用他人图片信息">商品信息与图文不符合，抄袭盗用他人图片信息</b-form-checkbox>
                      <b-form-checkbox class="col-lg-12" value="低俗色情，反动涉政等违法言论图片">低俗色情，反动涉政等违法言论图片</b-form-checkbox>
                      <b-form-checkbox class="col-lg-12" value="人身攻击，侮辱谩骂等行为">人身攻击，侮辱谩骂等行为</b-form-checkbox>
                      <b-form-checkbox class="col-lg-12" value="冒充官方，或他人账户">冒充官方，或他人账户</b-form-checkbox>
                      <b-form-checkbox class="col-lg-12" value="欺诈骗钱行为">欺诈骗钱行为</b-form-checkbox>
                      <b-form-checkbox class="col-lg-12" value="其他理由">其他理由</b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-form-group>
                  <textarea class="form-control" style="font-size: 12px; line-height: 2em; margin-top: 10px" maxlength="200" rows="4"></textarea>
                </div>
              </div>

              <!-- submit button -->
              <div class="form-row">
                <button class="btn btn-secondary btn-rounded col-lg-3 offset-2"><span style="font-size: 25px; font-weight: bold">无效举报</span></button>
                <button v-b-modal.modalmd class="btn btn-dark btn-rounded col-lg-3 offset-1"><span style="font-size: 25px; font-weight: bold">有效举报</span></button>
              </div>

              <!-- modal -->
              <b-modal id="modalmd" size="md" centered hide-footer>
                <h2 class="text-center" style="font-weight: bold; padding-bottom: 20px">有效举报</h2>
                <h4 class="text-center" style="padding-bottom: 20px">需要一键下架关联商品吗？</h4>
                <div class="row">
                  <button class="btn btn-secondary col-lg-4 offset-1" style="border-radius: 22px"><strong>无需下架</strong></button>
                  <button class="btn btn-dark col-lg-4 offset-2" style="border-radius: 22px"><strong>一键下架</strong></button>
                </div>
              </b-modal>
            </div>
            <lightbox id="mylightbox" ref="lightbox" :images="images" :directory="images_dir" :timeoutDuration="5000" />
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import Lightbox from 'vue-my-photos'
export default {
  name: 'product-detail',
  components: { Lightbox },
  data () {
    return {
      images_dir: '/static/img/',
      product_images: [
        'computer2.jpg', 'computer5.jpg', 'model1.png', 'model2.png'
      ],
      items: [
        {
          id: '45685229878',
          images: ['model1.png', 'model1.png', 'model1.png', 'model1.png'],
          brand: 'GUCCI',
          name: 'Jeans',
          status: '已下架',
          price: '¥222',
          delivery_status: '审核'
        },
        {
          id: '4568522123278',
          images: ['model2.png', 'model2.png', 'model2.png'],
          brand: 'Billionaire Boys 经典回',
          name: 'Jeans',
          status: '已下架',
          price: '¥222',
          delivery_status: '审核'
        }
      ],
      orders: [
        {
          id: '45685229878',
          time: '2020-08-07',
          sell: '小小尚贩',
          buy: 'WISHIS',
          status: '待付款',
          price: '¥222',
          method: '支付宝'
        },
        {
          id: '45685239878',
          time: '2020-08-08',
          sell: '小小尚贩',
          buy: 'WISHIS',
          status: '待收货',
          price: '¥222',
          method: '零钱包'
        },
        {
          id: '45683239878',
          time: '2020-08-08',
          sell: '小小尚贩',
          buy: 'WISHIS',
          status: '待收货',
          price: '¥222',
          method: '零钱包'
        }
      ],
      users: [
        {
          id: '156945894',
          picture: 'face27.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自然',
          status: '不活跃',
          user_status: '已封号'
        }, {
          id: '123659898',
          picture: 'face2.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自然',
          status: '活跃中',
          user_status: '正常'
        }, {
          id: '4556552982',
          picture: 'face8.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自然',
          status: '不活跃',
          user_status: '正常'
        }, {
          id: '125416879',
          picture: 'face13.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自然',
          status: '活跃中',
          user_status: '正常'
        }, {
          id: '159785646',
          picture: 'face23.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自然',
          status: '不活跃',
          user_status: '已封号'
        }
      ],
      selected: true,
      process: [],
      images: []
    }
  },
  methods: {
    image_click () {
      this.images = []
      this.images.push({name: 'computer2.a4b6c0d.jpg', alt: 'Computer'})
      this.images.push({name: 'computer5.d48bad5.jpg', alt: 'Computer'})
      this.images.push({name: 'model1.528c781.png', alt: 'Clothes'})
      this.images.push({name: 'model2.1a4c0cd.png', alt: 'Jacket'})
      this.$refs.lightbox.show(this.images[0].name)
    },
    getImageUrl (pic) {
      return require('../../assets/images/product-images/' + pic)
    },
    getPictureUrl (pic) {
      return require('../../assets/images/faces/' + pic)
    },
    getProductsUrl (pic) {
      return require('../../assets/images/product-images/computer' + pic + '.jpg')
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'feedback-detail')
    this.images = []
    this.images.push({name: 'computer2.a4b6c0d.jpg', alt: 'Computer'})
    this.images.push({name: 'computer5.d48bad5.jpg', alt: 'Computer'})
    this.images.push({name: 'model1.528c781.png', alt: 'Clothes'})
    this.images.push({name: 'model2.1a4c0cd.png', alt: 'Jacket'})
  }
}
</script>

<style lang="scss">
.lightbox-close {
  margin-top: 50px;
}
</style>

<style scoped lang="scss">
.form-group {
  margin-bottom: 5px;
}

.profile-picture {
  vertical-align: top;
  display: inline-block;
  text-align: center;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.profile-caption {
  display: block;
  padding-top: 5px;
}

.edit-link {
  text-align: center;
  padding-top: 8px;
  color: black;
  opacity: 0.3;
}

.dropdown-selector {
  padding: 0 0 0 0;
}

.text-input {
  font-size: 16px;
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
}

.button-panel {
  padding-top: 10px;
  position: relative;
}

.products {
  display: inline-flex;
  flex-direction: row;
}

.product {
  position: relative;
  overflow: hidden;
  width: 150px;
  height: 150px;
}

.product:not(:first-child) {
  margin-left: -30px;
}

.product img {
  display: block;
}

.normal-label {
  padding: 5px 0 0 20px;
}

.normal-text {
  font-size: 15px;
}

// bootstrap on/off switch
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #424964;
}
input:focus + .slider {
  box-shadow: 0 0 1px #424964;
}
input:checked + .slider:before {
  -webkit-transform: translateX(34px);
  -ms-transform: translateX(34px);
  transform: translateX(34px);
}
.slider.round {
  border-radius: 16px;
}
.slider.round:before {
  border-radius: 50%;
}

.page-item button {
  border: none;
}
</style>
