<template lang="html">

  <section class="field-upload">
    <div class="row">
      <div class="col-lg-12 grid-margin ">
        <div class="card" style="margin-bottom: 0; padding-bottom: 0">
          <div class="card-body main-card-body">
            <span class="card-title" style="font-size: 22px">
              <b>发布新专栏</b>
              <b-button variant="dark" class="btn-fw btn-rounded normal-button offset-md-9"><strong>预览</strong></b-button>
            </span>
            <hr style="margin-left: auto; margin-right: auto; background-color: black;" />
            <div class="col-md-8 offset-md-2">
              <!-- special feature name input -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>专栏标题：</b></label>
                <div class="col-md-10">
                  <input type="text" class="text-input form-control" placeholder="请输入特辑标题" />
                  <span style="position: absolute; right: 10px; top: 15px; font-size: 12px; opacity: 0.5">0/60</span>
                </div>
              </div>
              <!-- field description input -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>专栏简介：</b></label>
                <div class="col-md-10">
                  <textarea class="form-control" style="font-size: 14px; line-height: 2em" maxlength="200" rows="5" placeholder="输入特辑内容"></textarea>
                </div>
              </div>

              <!-- field picture -->
              <div class="form-row" style="margin-bottom: 25px;">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="padding-bottom: 0; margin-bottom: 0"><b>特辑头图：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0.5; padding-top: 0; margin-top: 0;">(3-8张)</label>
                </div>
                <div class="col-md-10" style="margin-left: 5px; margin-right: 5px">
                  <div class="d-flex justify-content-start" style="margin-bottom: 5px;">
                    <div class="field-picture-div" :style="[image_selected ? {borderStyle: 'none'} : {borderStyle: 'dotted'}]">
                      <img class="field-picture" :src="picture_url" :style="[image_selected ? {opacity: 1} : {opacity: 0}]" />
                      <div class="field-picture-edit" :style="[image_selected ? {display: 'none'} : {display: 'block'}]">
                        <button class="btn btn-primary-outline" @click="fileDialogTrigger"><i class="fa fa-plus fa-4x"></i></button>
                      </div>
                      <input ref="file-upload" type="file" accept="image/*" @change="change_file" style="display: none" />
                    </div>
                  </div>
                  <span style="color: red">*(请上传3:2不失真高质量的图片，方便提升你的专栏内容质量)</span>
                </div>
              </div>

              <!-- field text and picture add button -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>绑定：</b></label>
                <button class="btn btn-dark col-md-4" style="margin-left: 40px;">添加商品</button>
              </div>

              <!-- origin source -->
              <div class="form-row" style="margin-bottom: 25px">
                <label for="name" class="col-form-label"><b>出处来源：</b></label>
                <div class="col-md-10">
                  <b-form-checkbox value="yes" unchecked-value="no" style="width: 100%; margin-bottom: 10px">原创</b-form-checkbox>
                  <b-form-checkbox value="yes" unchecked-value="no" style="width: 100%; margin-bottom: 10px">转载</b-form-checkbox>
                  <input type="text" class="text-input form-control" placeholder="请注明转载出处*" />
                </div>
              </div>
              <!-- submit button -->
              <div class="form-row" style="padding-top: 25px">
                <div class="col-md-8 offset-2">
                  <button class="btn btn-dark" style="width: 100%; border-radius: 30px;"><span style="font-size: 22px; font-weight: bold">发布</span></button>
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
  name: 'field-upload',
  data () {
    return {
      image_selected: false,
      picture_url: require('../../assets/images/product-images/computer1.jpg'),
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
      ]
    }
  },
  methods: {
    fileDialogTrigger () {
      this.$refs['file-upload'].click()
    },
    change_file (e) {
      this.image_selected = true
      if (!e.target.files.length) return
      var reader = new FileReader()
      reader.onload = (elem) => {
        this.picture_url = elem.target.result
      }
      reader.readAsDataURL(e.target.files[0])
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
    this.$store.commit('setUrl', 'field-upload')
  }
}
</script>

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
  width: 220px;
  height: 220px;
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
  width: 50px;
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

.field-picture-div {
  position: relative;
  margin-right: 8px;
}

.field-picture-edit {
  position: absolute;
  left: 60px;
  top: 60px;
}

.field-picture {
  width: 200px;
  height: 200px;
}
</style>
