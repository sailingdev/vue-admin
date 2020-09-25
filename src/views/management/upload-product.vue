<template lang="html">

  <section class="upload-product">
    <div class="row">
      <div class="col-lg-12 grid-margin ">
        <div class="card" style="margin-bottom: 0; padding-bottom: 0">
          <div class="card-body main-card-body">
            <span style="font-size: 22px; font-weight: bold">发布新推送</span>
            <hr style="margin-left: auto; margin-right: auto; background-color: black;" />
            <div class="col-lg-10 offset-1">
              <!-- name input -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>推送名称：</b></label>
                <div class="col-lg-10 row justify-content-between" style="margin-left: 20px">
                  <b-form-input class="col-lg-11 text-input" type="text" id="number" placeholder="特辑名称" style="font-size: 14px" value="Billionaire Boys  经典回收到回复开始速度快"></b-form-input>
                </div>
              </div>
              <!-- type checkbox -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>推送类型：</b></label>
                <div class="col-lg-10 row justify-content-start" style="margin-left: 20px; margin-top: 5px;">
                  <b-form-radio-group v-model="type" @input="clickPass">
                    <b-form-radio value="特辑">特辑</b-form-radio>
                    <b-form-radio value="专栏">专栏</b-form-radio>
                    <b-form-radio value="商品">商品</b-form-radio>
                    <b-form-radio value="活动H5">活动H5</b-form-radio>
                    <b-form-radio value="纯文字">纯文字</b-form-radio>
                  </b-form-radio-group>
                </div>
              </div>
            </div>

            <div class="table-responsive" style="margin-bottom: 25px">
              <table class="table center-aligned-table" style="text-align: center">
                <thead>
                  <tr>
                    <th class="border-bottom-0"><b>商品ID</b></th>
                    <th class="border-bottom-0"><b>商品图片</b></th>
                    <th class="border-bottom-0"><b>商品品牌</b></th>
                    <th class="border-bottom-0"><b>商品名称</b></th>
                    <th class="border-bottom-0"><b>商品状态</b></th>
                    <th class="border-bottom-0"><b>价格</b></th>
                    <th class="border-bottom-0"><b>审核状态</b></th>
                    <th class="border-bottom-0"><b>操作</b></th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background-color: #dee2e6;">
                    <td style="padding-bottom: 0; padding-top: 0">12354564468</td>
                    <td style="padding-bottom: 0; padding-top: 0">
                      <div class="products">
                        <span class="product" v-for="i in [1, 2, 3, 4]" :key="i">
                          <img class="animation-product" src="../../assets/images/product-images/model1.png" />
                        </span>
                      </div>
                    </td>
                    <td style="padding-bottom: 0; padding-top: 0">Surprem</td>
                    <td style="padding-bottom: 0; padding-top: 0">Billionaire Boys 经典</td>
                    <td style="padding-bottom: 0; padding-top: 0">已售出</td>
                    <td style="padding-bottom: 0; padding-top: 0">¥222</td>
                    <td style="padding-bottom: 0; padding-top: 0"><label style="color: green; margin-bottom: 0">审核通过</label></td>
                    <td style="padding-bottom: 0; padding-top: 0"><b-button variant="dark" class="btn-fw">查看样情</b-button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- description input textarea -->
            <div class="col-lg-10 offset-1">
                <div class="form-row" style="margin-bottom: 25px;">
                    <label for="name" class="col-form-label"><b>推送内容：</b></label>
                    <div class="col-lg-10 row justify-content-between" style="margin-left: 20px">
                        <textarea class="form-control" style="font-size: 14px; line-height: 2em" maxlength="200" rows="5">刷卡电话卡和大白菜v吃点醋可对 电视看吃的烧烤吃点苦和成都哈彻底碎成和醋可对伤口擦出的甲壳虫寄生虫病就开始吃必胜客坚持才能到家考涅楚克觉得随处可见的长时间
吃得好就是白菜价的好身材比剪刀手才被傻逼才能睡穿紧身裤身边触手可及的变成卡车
不尝试你把曾经撒白菜价哈不经常撒娇催啊时间啊好看健身卡u嘻哈u上课
吃洒即可查看撒娇才能看撒娇你想啊碎粗啊所以才被瞌睡虫 </textarea>
                    </div>
                </div>
            </div>

            <!-- device selection -->
            <div class="col-lg-10 offset-1">
                <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>推送类型：</b></label>
                <div class="col-lg-10 row justify-content-start" style="margin-left: 20px; margin-top: 5px;">
                  <b-form-radio-group v-model="type" @input="clickPass">
                    <b-form-radio value="IOS">IOS</b-form-radio>
                    <b-form-radio value="安卓">安卓</b-form-radio>
                    <b-form-radio value="全部">全部</b-form-radio>
                  </b-form-radio-group>
                </div>
              </div>
            </div>
            <!-- time -->
            <div class="col-lg-10 offset-1">
              <div class="form-row" style="margin-bottom: 25px">
                <label for="time" class="col-form-label"><b>选择发布推送时间：</b></label>
                <div class="time-button" :style="[start_time_added ? {display: 'block'} : {display: 'none'}]">
                    <label class="text-white" style="margin-top: 10px">{{start_time}}</label>
                    <img src="../../assets/images/menu_icons/close.png" @click="start_time_close" style="position: absolute; top: -5px; right: 0; background-color: #C4C4C4; border-radius: 50%" />
                </div>
                <div class="time-button" :style="[end_time_added ? {display: 'block'} : {display: 'none'}]">
                    <label class="text-white" style="margin-top: 10px">{{end_time}}</label>
                    <img src="../../assets/images/menu_icons/close.png" @click="end_time_close" style="position: absolute; top: -5px; right: 0; background-color: #C4C4C4; border-radius: 50%" />
                </div>
                <b-button variant="secondary" class="btn-fw btn-rounded" @click="time_click" :style="[end_time_added ? {display: 'none'} : {display: 'block'}]"><b>添加时间</b></b-button>
              </div>
            </div>
            <div class="col-lg-6 offset-3">
              <VueCtkDateTimePicker noHeader inline dark v-model="time" />
            </div>
            <div class=" justify-content-center row" style="padding-top: 100px; padding-bottom: 20px">
                <button class="btn btn-secondary btn-rounded btn-lg col-lg-3" style="margin-right: 20px"><strong style="font-size: 22px">取消</strong></button>
                <button v-b-modal.modalmd class="btn btn-dark btn-rounded btn-lg col-lg-5"><strong style="font-size: 22px">发送</strong></button>
            </div>

            <!-- products selection modal -->
            <b-modal ref="modalproduct" size="lg" centered hide-footer>
              <h2 class="text-center" style="font-weight: bold; padding-bottom: 20px">选择商品</h2>
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
                  <b-button variant="secondary" class="btn-rounded"><span style="font-size: 16px">清空</span></b-button>
                </div>
              </div>

              <!-- product table -->
              <div class="table-responsive" style="padding-top: 10px">
                <table id="product_table" class="table center-aligned-table" style="text-align: center">
                  <thead>
                    <tr>
                      <th class="border-bottom-0" style="width: 12%"><b>全选</b></th>
                      <th class="border-bottom-0" style="width: 15%"><b>商品名称</b></th>
                      <th class="border-bottom-0" style="width: 25%"><b>商品图片</b></th>
                      <th class="border-bottom-0" style="width: 12%"><b>商品品牌</b></th>
                      <th class="border-bottom-0" style="width: 12%"><b>价格</b></th>
                      <th class="border-bottom-0" style="width: 12%"><b>状态</b></th>
                      <th class="border-bottom-0" style="width: 12%"><b>操作</b></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" :key="item.id">
                      <td style="padding-bottom: 3px; padding-top: 3px"><input type="checkbox" true-value="yes" false-value="no"></td>
                      <td style="padding-bottom: 3px; padding-top: 3px">{{item.name}}</td>
                      <td style="padding-bottom: 3px; padding-top: 3px">
                        <div class="products">
                          <span class="product" v-for="image in item.images" :key="image.id">
                            <img class="animation-product" :src="getImageUrl(image)" />
                          </span>
                        </div>
                      </td>
                      <td style="padding-bottom: 3px; padding-top: 3px">{{item.brand}}</td>
                      <td style="padding-bottom: 3px; padding-top: 3px"><label>{{item.price}}</label></td>
                      <td style="padding-bottom: 3px; padding-top: 3px"><label :style="[item.status == '审核未通过' ? {color: 'red'} : item.status == '审核通过' ? {color: 'green'} : {opacity: 0.5}]">{{item.status}}</label></td>
                      <td style="padding-bottom: 3px; padding-top: 3px">
                        <button class="btn btn-outline" @click="$router.push('../product-detail')" style="padding-right: 10px"><i class="fa fa-pencil fa-2x" style="opacity: 0.8"></i></button>
                        <button v-b-modal.modalmd class="btn btn-outline" style="padding-left: 10px"><i class="fa fa-trash fa-2x" style="opacity: 0.8"></i></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <b-pagination align="center" class="col-lg-2 offset-md-5" v-model="currentPage" :total-rows="getProducts()" :per-page="perPage" aria-controls="products_table" style="margin-top: 20px"></b-pagination>
              <div class="row justify-content-center" style="padding-top: 20px">
                <button class="btn btn-secondary col-lg-2 offset-1" style="border-radius: 20px"><strong>取消</strong></button>
                <button class="btn btn-dark col-lg-2 offset-1" style="border-radius: 20px"><strong>确定</strong></button>
              </div>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'upload-product',
  components: {
    VueCtkDateTimePicker,
    Datepicker
  },
  data () {
    return {
      status: '未审核',
      perPage: 5,
      currentPage: 1,
      type: '商品',
      time: '',
      start_time_added: true,
      end_time_added: false,
      start_time: '2020-08-12 13:00 pm',
      end_time: '',
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
      special_features: [
        {
          id: '45685229878',
          time: '2020-08-07',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '213个',
          status: '审核未通过'
        },
        {
          id: '45685239878',
          time: '2020-08-08',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '189个',
          status: '审核通过'
        },
        {
          id: '45683239878',
          time: '2020-08-08',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '213个',
          status: '审核未通过'
        },
        {
          id: '45621229878',
          time: '2020-08-07',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '189个',
          status: '审核中'
        },
        {
          id: '45685329878',
          time: '2020-08-08',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '213个',
          status: '审核中'
        },
        {
          id: '45683569878',
          time: '2020-08-08',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '189个',
          status: '审核通过'
        },
        {
          id: '45686539878',
          time: '2020-08-08',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '213个',
          status: '审核未通过'
        }
      ],
      fields: [
        {
          id: '45685229878',
          time: '2020-08-07',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '213个',
          status: '审核未通过'
        },
        {
          id: '45685239878',
          time: '2020-08-08',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '189个',
          status: '审核通过'
        },
        {
          id: '45683239878',
          time: '2020-08-08',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '213个',
          status: '审核未通过'
        },
        {
          id: '45621229878',
          time: '2020-08-07',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '189个',
          status: '审核中'
        },
        {
          id: '45685329878',
          time: '2020-08-08',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '213个',
          status: '审核中'
        },
        {
          id: '45683569878',
          time: '2020-08-08',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '189个',
          status: '审核通过'
        },
        {
          id: '45686539878',
          time: '2020-08-08',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '213个',
          status: '审核未通过'
        }
      ]
    }
  },
  methods: {
    start_time_close () {
      this.start_time = ''
      this.start_time_added = false
    },
    end_time_close () {
      this.end_time = ''
      this.end_time_added = false
    },
    time_click () {
      console.log(new Date())
      if (this.start_time_added) {
        this.end_time_added = true
        this.end_time = this.time
      } else {
        this.start_time_added = true
        this.start_time = this.time
      }
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
    showModal () {
      this.$refs['modalmd'].show()
    },
    getProducts () {
      return this.items.length
    },
    getUsers () {
      return this.users.length
    },
    clickPass () {
      switch (this.type) {
        case '专栏':
          this.$store.commit('setUploadModal', 'field')
          this.$router.push('../../upload-field')
          break
        case '商品':
          this.$store.commit('setUploadModal', 'product')
          this.$router.push('../../upload-product')
          break
        case '特辑':
          this.$store.commit('setUploadModal', 'special-feature')
          this.$router.push('../../upload-special-feature')
          break
        case '活动H5':
          this.$router.push('../../upload-activity')
          break
        case '纯文字':
          this.$router.push('../../upload-letter')
          break
      }
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'management-upload')
    if (this.$store.getters.uploadModal === 'product') {
      this.$refs.modalproduct.show()
      this.$store.commit('setUploadModal', '')
    } else if (this.$store.getters.uploadModal === 'field') {
      this.$refs.modalfield.show()
      this.$store.commit('setUploadModal', '')
    } else if (this.$store.getters.uploadModal === 'special-feature') {
      this.$refs.modalspecialfeature.show()
      this.$store.commit('setUploadModal', '')
    }
    var now = new Date()
    this.time = '' + now.getFullYear() + '-' + ((now.getMonth() + 1) > 9 ? '' : '0') + (now.getMonth() + 1) + '-' + (now.getDate() > 9 ? '' : '0') + now.getDate() + ' ' + (now.getHours() > 12 ? now.getHours() - 12 : now.getHours()) + ':' + now.getMinutes() + ' ' + (now.getHours() > 12 ? 'pm' : 'am')
  }
}
</script>

<style scoped lang="scss">
.time-button {
  background-color: black;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  border-radius: 20px;
  margin-right:  40px;
}

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
  width: 60px;
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

.animation-product[data-v-286fd445]:hover {
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
