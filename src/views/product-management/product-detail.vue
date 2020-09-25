<template lang="html">

  <section class="product-detail">
    <div class="row">
      <div class="col-lg-12 grid-margin ">
        <div class="card" style="margin-bottom: 0; padding-bottom: 0">
          <div class="card-body main-card-body">
            <span class="card-title" style="font-size: 22px"><b>商品洋情</b></span>
            <hr style="margin-left: auto; margin-right: auto; background-color: black;" />
            <div class="col-lg-12">
              <!-- name input -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>商品标题：</b></label>
                <div class="col-lg-10">
                  <input type="text" class="text-input form-control" placeholder="请输入商品标题" />
                  <span style="position: absolute; right: 10px; top: 15px; font-size: 12px; opacity: 0.5">0/60</span>
                </div>
              </div>
              <!-- brand input -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>商品品牌：</b></label>
                <div class="col-lg-10">
                  <input type="text" class="text-input form-control" placeholder="请输入商品品牌">
                </div>
              </div>
              <!-- quality buttons -->
              <div class="form-row" style="margin-bottom: 25px;">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="padding-bottom: 0; margin-bottom: 0"><b>商品风格：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0.5; padding-top: 0; margin-top: 0">(可多选)</label>
                </div>
                <div class="col-lg-10 d-flex justify-content-between">
                  <button class="btn btn-dark" style="width: 100%; margin-right: 10px">简约</button>
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">机能</button>
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">高街</button>
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">先锋</button>
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">耆湖</button>
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">日潮</button>
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">复古</button>
                  <button class="btn btn-secondary" style="width: 100%">运动</button>
                </div>
              </div>
              <!-- category buttons: 6 rows -->
              <div class="form-row" style="margin-bottom: 10px;">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="padding-bottom: 0; margin-bottom: 0"><b>商品类别：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0.5; padding-top: 0; margin-top: 0">(可多选)</label>
                </div>
                <div class="col-lg-10 d-flex justify-conetent-between">
                  <button class="btn btn-dark" style="margin-right: 10px; padding-left: 12px; padding-right: 12px">鞋子</button>
                  <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 12px; padding-right: 12px">休闲鞋</button>
                  <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 12px; padding-right: 12px">运动鞋</button>
                  <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 12px; padding-right: 12px">皮鞋</button>
                  <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 12px; padding-right: 12px">凉鞋/拖鞋拖鞋</button>
                  <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 12px; padding-right: 12px">高跟鞋</button>
                  <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 12px; padding-right: 12px">平底鞋</button>
                  <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 12px; padding-right: 12px">高跟鞋</button>
                  <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 12px; padding-right: 12px">复古</button>
                  <button class="btn btn-secondary" style="padding-right: 10px; padding-left: 12px; padding-right: 12px">其他</button>
                </div>
              </div>
              <div class="form-row" style="margin-bottom: 10px;">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="opacity: 0; padding-bottom: 0; margin-bottom: 0"><b>商品类别：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0; padding-top: 0; margin-top: 0">(可多选)</label>
                </div>
                <div class="col-lg-10 d-flex justify-conetent-between">
                  <button class="btn btn-dark" style="margin-right: 10px">手提包</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">双肩包</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">旅行箱/包</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">单肩包</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">腰包/胸包</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">其他</button>
                </div>
              </div>
              <div class="form-row" style="margin-bottom: 10px;">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="opacity: 0; padding-bottom: 0; margin-bottom: 0"><b>商品类别：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0; padding-top: 0; margin-top: 0">(可多选)</label>
                </div>
                <div class="col-lg-10 d-flex justify-conetent-between">
                  <button class="btn btn-dark" style="margin-right: 10px">女装</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">外套</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">卫衣/帽衫</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">短袖/长袖</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">毛衣/针织衫</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">连体装</button>
                  <button class="btn btn-secondary" style="padding-right: 10px">其他</button>
                </div>
              </div>
              <div class="form-row" style="margin-bottom: 10px;">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="opacity: 0; padding-bottom: 0; margin-bottom: 0"><b>商品类别：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0; padding-top: 0; margin-top: 0">(可多选)</label>
                </div>
                <div class="col-lg-10 d-flex justify-conetent-between">
                  <button class="btn btn-dark" style="margin-right: 10px">首饰/手表</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">腰带</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">眼镜/太阳镜</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">帽子</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">围巾</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">其他</button>
                </div>
              </div>
              <div class="form-row" style="margin-bottom: 10px;">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="opacity: 0; padding-bottom: 0; margin-bottom: 0"><b>商品类别：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0; padding-top: 0; margin-top: 0">(可多选)</label>
                </div>
                <div class="col-lg-10 d-flex justify-conetent-between">
                  <button class="btn btn-dark" style="margin-right: 10px; padding-left: 18px; padding-right: 18px">bearbrick</button>
                  <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 18px; padding-right: 18px">lego</button>
                  <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 18px; padding-right: 18px">kaws</button>
                  <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 18px; padding-right: 18px">Daniel Arsham</button>
                  <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 18px; padding-right: 18px">Supreme</button>
                  <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 18px; padding-right: 18px">盲盒</button>
                  <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 18px; padding-right: 18px">版画</button>
                  <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 18px; padding-right: 18px">其他</button>
                </div>
              </div>
              <div class="form-row" style="margin-bottom: 25px;">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="opacity: 0; padding-bottom: 0; margin-bottom: 0"><b>商品类别：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0; padding-top: 0; margin-top: 0">(可多选)</label>
                </div>
                <div class="col-lg-10 d-flex justify-conetent-between">
                  <button class="btn btn-dark" style="margin-right: 10px">休闲裤</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">西装裤</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">运动裤</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">短裤</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">牛仔裤</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">其他</button>
                </div>
                <div style="position: absolute; right: 40px; margin-top: 10px">
                  <b-button variant="dark" class="btn-rounded"><span style="font-size: 16px">查找</span></b-button>&nbsp;
                  <b-button variant="secondary" class="btn-rounded"><span style="font-size: 16px" @click="clear">清空</span></b-button>
                </div>
              </div>

              <!-- firsthand/secondhand button -->
              <div class="form-row" style="margin-bottom: 25px;">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="padding-bottom: 0; margin-bottom: 0"><b>新旧程度：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0.5; padding-top: 0; margin-top: 0;">(必选)</label>
                </div>
                <div class="col-lg-3 d-flex justify-content-between">
                  <button class="btn btn-dark" style="width: 100%; margin-right: 10px">全新</button>
                  <button class="btn btn-secondary" style="width: 100%">二手</button>
                </div>
              </div>
              <!-- size buttons -->
              <div class="form-row" style="margin-bottom: 10px;">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="padding-bottom: 0; margin-bottom: 0"><b>商品尺码：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0.5; padding-top: 0; margin-top: 0;">(必选)</label>
                </div>
                <div class="col-lg-10 d-flex justify-content-between" style="margin-bottom: 5px;">
                  <button class="btn btn-dark" style="width: 100%; margin-right: 10px">XSS</button>
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">XS</button>
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">S</button>
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">M</button>
                  <button class="btn btn-secondary" style="width: 100%;">L</button>
                </div>
              </div>
              <div class="form-row" style="margin-bottom: 5px">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="opacity: 0; padding-bottom: 0; margin-bottom: 0"><b>商品尺码：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0; padding-top: 0; margin-top: 0;">(必选)</label>
                </div>
                <div class="col-lg-10 d-flex justify-content-between" style="margin-bottom: 5px;">
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">XL</button>
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">XXL</button>
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">XXXL</button>
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">34</button>
                  <button class="btn btn-secondary" style="width: 100%;">36</button>
                </div>
              </div>
              <div class="form-row" style="margin-bottom: 5px">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="opacity: 0; padding-bottom: 0; margin-bottom: 0"><b>商品尺码：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0; padding-top: 0; margin-top: 0;">(必选)</label>
                </div>
                <div class="col-lg-10 d-flex justify-content-between" style="margin-bottom: 5px;">
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">37</button>
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">38</button>
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">39</button>
                  <button class="btn btn-secondary" style="width: 100%; margin-right: 10px">40</button>
                  <button class="btn btn-secondary" style="width: 100%;">41</button>
                </div>
              </div>
              <!-- description textarea -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>商品描述：</b></label>
                <div class="col-lg-10">
                  <textarea class="form-control" style="font-size: 14px; line-height: 2em" maxlength="200" rows="5">请详细描述你的商品，吸引更多的买家关注…  2020改版精进版型
例：商品故事：如购买渠道，商品背景
商品状态：新旧程度详细描述/穿过几次
商品材质/版型：纯棉/宽松
是否包邮：买卖双方自行商议</textarea>
                  <span style="position: absolute; right: 10px; bottom: 5px; font-size: 12px; opacity: 0.5">45/200</span>
                </div>
              </div>
              <!-- price input -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>商品价格：</b></label>
                <div class="col-lg-10">
                  <input type="text" class="text-input form-control" placehoder="商品价格" value="¥ 450">
                </div>
              </div>
              <!-- drawback toggle -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>是否有瑕疵：</b></label>
                <div class="col-lg-10" style="padding-top: 5px">
                  <label class="switch">
                    <input type="checkbox" checked @change="selected=!selected">
                    <span class="slider round"></span>
                  </label>
                  <div class="row" :style="[selected ? {display: 'block'} : {display: 'none'}]">
                    <textarea class="form-control" style="font-size: 14px; line-height: 2em" maxlength="200" rows="3">请简述商品瑕疵信息。</textarea>
                  </div>
                </div>
              </div>
              <!-- picture -->
              <div class="form-row" style="margin-bottom: 5px">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="padding-bottom: 0; margin-bottom: 0"><b>商品图片：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0.5; padding-top: 0; margin-top: 0;">(3-8张)</label>
                </div>
                <div class="col-lg-10 justify-content-between row" style="margin-left: 5px; margin-right: 5px; margin-bottom: 10px">
                  <div v-for="item in [1, 2, 3, 4]" :key="item" style="position: relative">
                    <img class="product-image" :src="getProductsUrl(item)" />
                    <div style="position: absolute; left: 10%; top: 40%">
                      <button class="btn btn-outline"><i class="fa fa-edit" style="color: white"><span style="font-weight: bold; font-size: 12px; color: white;">设为封面</span></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row" style="margin-bottom: 25px">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="padding-bottom: 0; margin-bottom: 0; opacity: 0"><b>商品图片：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0; padding-top: 0; margin-top: 0;">(3-8张)</label>
                </div>
                <div class="col-lg-10 justify-content-between row" style="margin-left: 5px; margin-right: 5px">
                  <div v-for="item in [1, 2]" :key="item" style="position: relative; margin-right: 15px">
                    <img class="product-image" :src="getProductsUrl(item)" />
                    <div style="position: absolute; left: 10%; top: 40%">
                      <button class="btn btn-outline"><i class="fa fa-edit" style="color: white"><span style="font-weight: bold; font-size: 12px; color: white;">设为封面</span></i></button>
                    </div>
                  </div>
                  <div class="product-image-div" :style="[image1_selected == true ? {borderStyle: 'none'} : {borderStyle: 'dotted'}]">
                    <img class="product-image" :style="[image1_selected == true ? {opacity: 1} : {opacity: 0}]" :src="picture1_url" />
                    <div style="position: absolute; left: 25%; top: 25%;">
                      <button class="btn btn-outline" @click="file1DialogTrigger" :style="[image1_selected == true ? {display: 'none'} : {display: 'block'}]"><i class="fa fa-plus fa-4x"></i></button>
                    </div>
                    <div class="product-image-edit" :style="[image1_selected == true ? {display: 'block'} : {display: 'none'}]">
                      <button class="btn btn-outline"><i class="fa fa-edit" style="color: white"><span style="font-weight: bold; font-size: 12px; color: white;">设为封面</span></i></button>
                    </div>
                    <input class="file1-upload" ref="file1-upload" type="file" accept="image/*" @change="change_file1" style="display: none" />
                  </div>
                  <div class="product-image-div" :style="[image2_selected == true ? {borderStyle: 'none'} : {borderStyle: 'dotted'}, image1_selected == true ? {opacity: 1} : {opacity: 0}]">
                    <img class="product-image" :style="[image2_selected == true ? {opacity: 1} : {opacity: 0}]" :src="picture2_url" />
                    <div style="position: absolute; left: 25%; top: 25%;">
                      <button class="btn btn-outline" @click="file2DialogTrigger" :style="[image2_selected == true ? {display: 'none'} : {display: 'block'}]"><i class="fa fa-plus fa-4x"></i></button>
                    </div>
                    <div class="product-image-edit" :style="[image2_selected == true ? {display: 'block'} : {display: 'none'}]">
                      <button class="btn btn-outline"><i class="fa fa-edit" style="color: white"><span style="font-weight: bold; font-size: 12px; color: white;">设为封面</span></i></button>
                    </div>
                    <input class="file2-upload" ref="file2-upload" type="file" accept="image/*" @change="change_file2" style="display: none" />
                  </div>
                </div>
              </div>
              <!-- submit button -->
              <div class="form-row" style="justify-content-center">
                <button class="btn btn-secondary col-lg-3 offset-1" style="border-radius: 20px"><span style="font-size: 24px; font-weight: bold">取消</span></button>
                <button class="btn btn-dark col-lg-6 offset-1" style="border-radius: 20px"><span style="font-size: 24px; font-weight: bold">确定</span></button>
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
  name: 'product-detail',
  data () {
    return {
      image1_selected: false,
      image2_selected: false,
      picture1_url: require('../../assets/images/product-images/computer1.jpg'),
      picture2_url: require('../../assets/images/product-images/computer1.jpg'),
      selected: true,
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
    file1DialogTrigger () {
      this.$refs['file1-upload'].click()
    },
    file2DialogTrigger () {
      this.$refs['file2-upload'].click()
    },
    change_file1 (e) {
      this.image1_selected = true
      if (!e.target.files.length) return
      var reader = new FileReader()
      reader.onload = (elem) => {
        this.picture1_url = elem.target.result
      }
      reader.readAsDataURL(e.target.files[0])
    },
    change_file2 (e) {
      this.image2_selected = true
      if (!e.target.files.length) return
      var reader = new FileReader()
      reader.onload = (elem) => {
        this.picture2_url = elem.target.result
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
    },
    clear () {}
  },
  mounted () {
    this.$store.commit('setUrl', 'product-detail')
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

.product-image-div {
  position: relative;
  margin-left: 5px;
  margin-right: 5px;
}

.product-image-edit {
  position: absolute;
  left: 10%;
  top: 40%;
}

.product-image {
  width: 180px;
  height: 180px;
}
</style>
