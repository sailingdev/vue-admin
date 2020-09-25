<template lang="html">

  <section class="product-list">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="card-title">
              <span style="font-size: 22px; font-weight: bold">商品管理</span>
              <b-button variant="dark" class="btn-fw btn-rounded normal-button" style="position: absolute; right: 20px" @click="$router.push('../product-upload')">上传商品</b-button>
            </div>
            <hr style="margin-left: auto; margin-right: auto; background-color: black;" />

            <b-button variant="secondary" class="btn-fw btn-rounded normal-button" @click="all">全部商品（2313）</b-button>&nbsp;&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="passing">未审核（235）</b-button>&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="passed">审核通过（235）</b-button>&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="notPassed">审核未通过（235）</b-button>

            <!-- search input and buttons: 1 row -->
            <div class="button-panel row">
                <div class="search-box">
                    <i class="fa fa-search search-icon"></i>
                    <b-form-input class="search-input" placeholder="查询商品名称/商品货号" v-model="name" @input="change"></b-form-input>
                </div>
            </div>

            <!-- quality & category buttons: 6 rows -->
            <div class="row button-panel">
              <div class="col-lg-2">
                <div class="row">
                <span class="col-lg-12 text-center" style="font-size: 16px">商品风格:</span>
                <span class="col-lg-12 text-center" style="font-size: 16px; opacity: 0.5">(可多选)</span>
                </div>
              </div>
              <b-button variant="dark" class="col-lg-1" style="font-size: 16px; margin-right: 10px">简约</b-button>
              <b-button variant="secondary" class="col-lg-1" style="font-size: 16px; margin-right: 10px">机能</b-button>
              <b-button variant="secondary" class="col-lg-1" style="font-size: 16px; margin-right: 10px">高街</b-button>
              <b-button variant="secondary" class="col-lg-1" style="font-size: 16px; margin-right: 10px">先锋</b-button>
              <b-button variant="secondary" class="col-lg-1" style="font-size: 16px; margin-right: 10px">耆湖</b-button>
              <b-button variant="secondary" class="col-lg-1" style="font-size: 16px; margin-right: 10px">日潮</b-button>
              <b-button variant="secondary" class="col-lg-1" style="font-size: 16px; margin-right: 10px">复古</b-button>
              <b-button variant="secondary" class="col-lg-1" style="font-size: 16px; margin-right: 10px">运动</b-button>
            </div>
            <div class="row button-panel">
              <div class="col-lg-2">
                <div class="row">
                <span class="col-lg-12 text-center" style="font-size: 16px;">商品类别:</span>
                <span class="col-lg-12 text-center" style="opacity: 0; font-size: 16px;">商品类别</span>
                </div>
              </div>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">鞋子</b-button>
                <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">休闲鞋</b-button>
                <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">运动鞋</b-button>
                <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">皮鞋</b-button>
                <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">凉鞋/拖鞋</b-button>
                <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">高跟鞋</b-button>
                <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">平底鞋</b-button>
                <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">其他</b-button>
            </div>
            <div class="row button-panel">
              <div class="col-lg-2">
                <div class="row">
                <span class="col-lg-12" style="opacity: 0; font-size: 16px;">商品类别</span>
                <span class="col-lg-12" style="opacity: 0; font-size: 16px;">商品类别</span>
                </div>
              </div>
              <b-button variant="dark" style="font-size: 16px; margin-right: 10px">手提包</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">双肩包</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">旅行箱/包</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">单肩包</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">腰包/胸包</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">其他</b-button>
            </div>
            <div class="row button-panel">
              <div class="col-lg-2">
                <div class="row">
                <span class="col-lg-12" style="opacity: 0; font-size: 16px;">商品类别</span>
                <span class="col-lg-12" style="opacity: 0; font-size: 16px;">商品类别</span>
                </div>
              </div>
              <b-button variant="dark" style="font-size: 16px; margin-right: 10px">女装</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">外套</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">卫衣/帽衫</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">短袖/长袖</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">毛衣/针织衫</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">连体装</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">其他</b-button>
            </div>
            <div class="row button-panel">
              <div class="col-lg-2">
                <div class="row">
                <span class="col-lg-12" style="opacity: 0; font-size: 16px;">商品类别</span>
                <span class="col-lg-12" style="opacity: 0; font-size: 16px;">商品类别</span>
                </div>
              </div>
              <b-button variant="dark" style="font-size: 16px; margin-right: 10px">首饰/手表</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">腰带</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">眼镜/太阳镜</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">帽子</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">围巾</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">其他</b-button>
            </div>
            <div class="row button-panel">
              <div class="col-lg-2">
                <div class="row">
                <span class="col-lg-12" style="opacity: 0; font-size: 16px;">商品类别</span>
                <span class="col-lg-12" style="opacity: 0; font-size: 16px;">商品类别</span>
                </div>
              </div>
              <b-button variant="dark" style="font-size: 14px; margin-right: 10px; padding-left: 15px; padding-right: 15px">bearbrick</b-button>
              <b-button variant="secondary" style="font-size: 14px; margin-right: 10px; padding-left: 15px; padding-right: 15px">lego</b-button>
              <b-button variant="secondary" style="font-size: 14px; margin-right: 10px; padding-left: 15px; padding-right: 15px">kaws</b-button>
              <b-button variant="secondary" style="font-size: 14px; margin-right: 10px; padding-left: 15px; padding-right: 15px">Daniel Arsham</b-button>
              <b-button variant="secondary" style="font-size: 14px; margin-right: 10px; padding-left: 15px; padding-right: 15px">Supreme</b-button>
              <b-button variant="secondary" style="font-size: 14px; margin-right: 10px; padding-left: 15px; padding-right: 15px">盲盒</b-button>
              <b-button variant="secondary" style="font-size: 14px; margin-right: 10px; padding-left: 15px; padding-right: 15px">版画</b-button>
              <b-button variant="secondary" style="font-size: 14px; margin-right: 10px; padding-left: 15px; padding-right: 15px">其他</b-button>
            </div>
            <div class="row button-panel">
              <div class="col-lg-2">
                <div class="row">
                <span class="col-lg-12" style="opacity: 0; font-size: 16px;">商品类别</span>
                <span class="col-lg-12" style="opacity: 0; font-size: 16px;">商品类别</span>
                </div>
              </div>
              <b-button variant="dark" style="font-size: 16px; margin-right: 10px">休闲裤</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">西装裤</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">运动裤</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">短裤</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">牛仔裤</b-button>
              <b-button variant="secondary" style="font-size: 16px; margin-right: 10px">其他</b-button>
              <div style="position: absolute; right: 40px; margin-top: 10px">
                <b-button variant="dark" class="btn-rounded"><span style="font-size: 16px">查找</span></b-button>&nbsp;
                <b-button variant="secondary" class="btn-rounded"><span style="font-size: 16px" @click="clear">清空</span></b-button>
              </div>
            </div>

            <!-- product table -->
            <b-table :fields="fields" :items="products" id="product_table" :per-page="perPage" :current-page="currentPage" :responsive="true" :bordered="true" head-variant="light" style="margin-top: 30px;">
              <template v-slot:head()="data">
                <span class="font-weight-bold">{{data.label}}</span>
              </template>
              <template v-slot:cell(index)="data">
                <input type="checkbox" true-value="yes" false-value="no" />
              </template>
              <template v-slot:cell(images)="data">
                <div class="products">
                  <span class="product" v-for="image in data.item.images" :key="image.id">
                    <img class="animation-product" :src="getImageUrl(image)" @click="image_click(data.item.id)" />
                  </span>
                </div>
              </template>
              <template v-slot:cell(status)="data">
                <label :style="[data.item.status == '审核未通过' ? {color: 'red'} : data.item.status == '审核通过' ? {color: 'green'} : {opacity: 0.5}]">{{data.item.status}}</label>
              </template>
              <template v-slot:cell(action)="data">
                <button class="btn btn-outline" @click="$router.push('../product-detail')" style="padding-right: 10px"><i class="fa fa-pencil fa-2x" style="opacity: 0.8"></i></button>
                <button v-b-modal.modalmd class="btn btn-outline" style="padding-left: 10px"><i class="fa fa-trash fa-2x" style="opacity: 0.8"></i></button>
              </template>
              <template v-slot:cell()="data">{{data.value}}</template>
            </b-table>
            <b-pagination align="center" class="col-lg-2 offset-md-5" v-model="currentPage" :total-rows="getProducts()" :per-page="perPage" aria-controls="products_table" style="margin-top: 20px"></b-pagination>
            <div class="col-lg-6 offset-6 row justify-content-end" style="padding-top: 20px">
              <b-button variant="dark" class="btn-fw btn-rounded normal-button" style="margin-right: 20px;" >批量删除</b-button>
              <b-button variant="dark" class="btn-fw btn-rounded normal-button" style="margin-right: 20px;" >批量下架</b-button>
              <b-button variant="dark" class="btn-fw btn-rounded normal-button" style="margin-right: 20px;" >批量上架</b-button>
            </div>

            <!-- delete modal -->
            <b-modal id="modalmd" size="md" centered hide-footer>
              <h2 class="text-center" style="font-weight: bold; padding-bottom: 20px">确认删除</h2>
              <h4 class="text-center" style="padding-bottom: 20px">确认删除商品后不可恢复</h4>
              <div class="row" style="justify-content-center">
                <button class="btn btn-secondary col-lg-4 offset-1" style="border-radius: 20px"><strong>取消</strong></button>
                <button class="btn btn-dark col-lg-4 offset-2" style="border-radius: 20px"><strong>确定</strong></button>
              </div>
            </b-modal>

            <lightbox id="mylightbox" ref="lightbox" :images="images" :directory="images_dir" :timeoutDuration="5000" />
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import Datepicker from 'vuejs-datepicker'
import Lightbox from 'vue-my-photos'

export default {
  name: 'product-list',
  components: {
    Datepicker,
    Lightbox
  },
  data () {
    return {
      images_dir: '/static/img/',
      perPage: 5,
      currentPage: 1,
      fields: [
        { key: 'index', label: '全选', class: 'text-center' },
        { key: 'name', label: '商品名称', class: 'text-center' },
        { key: 'images', label: '商品图片', class: 'text-center' },
        { key: 'brand', label: '商品品牌', class: 'text-center' },
        { key: 'price', label: '价格', class: 'text-center' },
        { key: 'status', label: '状态', class: 'text-center' },
        { key: 'action', label: '操作', class: 'text-center' }
      ],
      items: [
        {
          id: '45685229878',
          images: ['model1.png', 'model1.png', 'model1.png', 'model1.png'],
          brand: 'GUCCI',
          name: 'Jeans',
          status: '审核通过',
          price: '¥222'
        },
        {
          id: '4568522123278',
          images: ['model2.png', 'model2.png', 'model2.png'],
          brand: 'Billionaire Boys 经典回',
          name: 'Jeans',
          status: '审核中',
          price: '¥222'
        },
        {
          id: '45685119878',
          images: ['model1.png', 'model1.png', 'model1.png', 'model1.png'],
          brand: 'GUCCI',
          name: 'Billionaire Boys',
          status: '审核未通过',
          price: '¥222'
        },
        {
          id: '4563322123278',
          images: ['model2.png', 'model2.png', 'model2.png'],
          brand: 'Billionaire Boys',
          name: 'Billionaire Boys 经典回',
          status: '审核中',
          price: '¥222'
        },
        {
          id: '345685229878',
          images: ['model1.png', 'model1.png', 'model1.png', 'model1.png'],
          brand: 'GUCCI',
          name: 'Billionaire Boys 经典回',
          status: '审核未通过',
          price: '¥222'
        },
        {
          id: '4568556123278',
          images: ['model2.png', 'model2.png', 'model2.png'],
          brand: 'Billionaire Boys',
          name: 'Billionaire Boys 经典回',
          status: '审核通过',
          price: '¥222'
        },
        {
          id: '45685229889',
          images: ['model1.png', 'model1.png', 'model1.png', 'model1.png'],
          brand: 'GUCCI',
          name: 'Billionaire Boys 经典回',
          status: '审核通过',
          price: '¥222'
        },
        {
          id: '4568522123256',
          images: ['model2.png', 'model2.png', 'model2.png'],
          brand: 'Billionaire Boys',
          name: 'Billionaire Boys 经典回',
          status: '审核未通过',
          price: '¥222'
        }
      ],
      products: [],
      name: '',
      images: []
    }
  },
  methods: {
    image_click (ind) {
      this.images = []
      this.items.forEach(item => {
        if (item.id === ind) {
          if (item.images.length % 2 === 0) {
            item.images.forEach(image => this.images.push({name: 'model1.528c781.png', 'alt': 'Model images'}))
          } else {
            item.images.forEach(image => this.images.push({name: 'model2.1a4c0cd.png', 'alt': 'Model images'}))
          }
        }
      })
      this.$refs.lightbox.show(this.images[0].name)
      console.log(this.images)
    },
    getImageUrl (pic) {
      return require('../../assets/images/product-images/' + pic)
    },
    getProducts () {
      return this.items.length
    },
    all () {
      this.products = []
      this.items.forEach(item => this.products.push(item))
    },
    passing () {
      this.products = []
      this.items.forEach(item => {
        if (item.status === '审核中') {
          this.products.push(item)
        }
      })
    },
    passed () {
      this.products = []
      this.items.forEach(item => {
        if (item.status === '审核通过') {
          this.products.push(item)
        }
      })
    },
    notPassed () {
      this.products = []
      this.items.forEach(item => {
        if (item.status === '审核未通过') {
          this.products.push(item)
        }
      })
    },
    change () {
      this.products = []
      if (this.name === '') {
        this.items.forEach(item => this.products.push(item))
      } else {
        this.items.forEach(item => {
          if (item.id.includes(this.name) || item.name.includes(this.name)) {
            this.products.push(item)
          }
        })
      }
    },
    clear () {
      this.name = ''
      this.products = []
      this.items.forEach(item => this.products.push(item))
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'product-list')
    this.items.forEach(item => this.products.push(item))
    this.images = []
    this.items[0].images.forEach(item => this.images.push({name: item, alt: 'Model pictures'}))
  }
}
</script>

<style lang="scss">
.lightbox-close {
  margin-top: 50px;
}
</style>

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
  width: 70px;
  -webkit-box-sizing:border-box;
  box-sizing:border-box;
  overflow:hidden;
  white-space:normal;
  word-break:break-all;
  line-height:15px;
  padding-right:10px;
  text-overflow:ellipsis;
  white-space:nowrap
}

.animation-product[data-v-6c0f8400]:hover {
  -webkit-transform: scale(1.5, 1.15);
  transform: scale(1.5, 1.15);
  -webkit-transition: all .8s;
  transition: all .8s;
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

.product img:hover {
  z-index: 100;
}
</style>
