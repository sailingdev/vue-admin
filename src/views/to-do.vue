<template lang="html">
  <div id="user-detail">
  <section class="user-detail">
    <div class="row">
      <div class="col-lg-12 grid-margin ">
        <div class="card" style="margin-bottom: 0; padding-bottom: 0">
          <div class="card-body main-card-body">
            <span class="card-title" style="font-size: 22px"><b>待处理事物（7623）</b></span>
            <hr style="margin-left: auto; margin-right: auto; background-color: black;" />
            <div>
            <b-tabs active-nav-item-class="font-weight-bold text-black">
              <!-- tab 1: 商品 -->
              <b-tab :title="tabTitles[0]" active>
                <div class="search-box row">
                    <div class="col-lg-4">
                        <i class="fa fa-search search-icon"></i>
                        <b-form-input class="search-input" placeholder="查询商品名称/商品货号" v-model="product_name" @input="change_product"></b-form-input>
                    </div>
                    <div class="col-lg-8 text-right">
                        <span>注明排序 审核通过最底下 然后不审核未通过 然后最前面是未审核</span>
                    </div>
                </div>

                <div class="row button-panel">
                  <div class="col-lg-2">
                    <div class="row">
                    <span class="col-lg-12 text-center font-weight-bold" style="font-size: 16px; padding-top: 10px;">商品类别:</span>
                    <span class="col-lg-12" style="opacity: 0; font-size: 16px;">商品类别</span>
                    </div>
                  </div>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">鞋子</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">休闲鞋</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">运动鞋</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">皮鞋</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">凉鞋/拖鞋</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">高跟鞋</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">平底鞋</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">其他</b-button>
                </div>
                <div class="row button-panel">
                  <div class="col-lg-2">
                    <div class="row">
                    <span class="col-lg-12" style="opacity: 0; font-size: 16px;">商品类别</span>
                    <span class="col-lg-12" style="opacity: 0; font-size: 16px;">商品类别</span>
                    </div>
                  </div>
                  <b-button variant="dark" style="font-size: 14px; margin-right: 10px">手提包</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">双肩包</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">旅行箱/包</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">单肩包</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">腰包/胸包</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">其他</b-button>
                </div>
                <div class="row button-panel">
                  <div class="col-lg-2">
                    <div class="row">
                    <span class="col-lg-12" style="opacity: 0; font-size: 14px;">商品类别</span>
                    <span class="col-lg-12" style="opacity: 0; font-size: 14px;">商品类别</span>
                    </div>
                  </div>
                  <b-button variant="dark" style="font-size: 14px; margin-right: 10px">女装</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">外套</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">卫衣/帽衫</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">短袖/长袖</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">毛衣/针织衫</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">连体装</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">其他</b-button>
                </div>
                <div class="row button-panel">
                  <div class="col-lg-2">
                    <div class="row">
                    <span class="col-lg-12" style="opacity: 0; font-size: 14px;">商品类别</span>
                    <span class="col-lg-12" style="opacity: 0; font-size: 14px;">商品类别</span>
                    </div>
                  </div>
                  <b-button variant="dark" style="font-size: 14px; margin-right: 10px">首饰/手表</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">腰带</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">眼镜/太阳镜</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">帽子</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">围巾</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">其他</b-button>
                </div>
                <div class="row button-panel">
                  <div class="col-lg-2">
                    <div class="row">
                    <span class="col-lg-12" style="opacity: 0; font-size: 14px;">商品类别</span>
                    <span class="col-lg-12" style="opacity: 0; font-size: 14px;">商品类别</span>
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
                    <span class="col-lg-12" style="opacity: 0; font-size: 14px;">商品类别</span>
                    <span class="col-lg-12" style="opacity: 0; font-size: 14px;">商品类别</span>
                    </div>
                  </div>
                  <b-button variant="dark" style="font-size: 14px; margin-right: 10px">休闲裤</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">西装裤</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">运动裤</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">短裤</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">牛仔裤</b-button>
                  <b-button variant="secondary" style="font-size: 14px; margin-right: 10px">其他</b-button>
                  <div style="position: absolute; right: 40px; margin-top: 10px">
                    <b-button variant="dark" class="btn-rounded"><span style="font-size: 16px">查找</span></b-button>&nbsp;
                    <b-button variant="secondary" class="btn-rounded"><span style="font-size: 16px" @click="clear_products">清空</span></b-button>
                  </div>
                </div>

                <b-table :fields="product_fields" :items="temp_products" id="product_table" :per-page="perPage" :current-page="currentPage" :responsive="true" :bordered="true" head-variant="light" style="padding-top: 30px">
                  <template v-slot:head()="data">
                    <span class="font-weight-bold">{{data.label}}</span>
                  </template>
                  <template v-slot:cell(index)="data">
                    <input type="checkbox" true-value="yes" false-value="no" :checked="data.item.selected" @change="data.item.selected=!data.item.selected">
                  </template>
                  <template v-slot:cell(images)="data">
                    <div class="products">
                      <span class="product" v-for="image in data.item.images" :key="image.id">
                        <img class="animation-product" :src="getImageUrl(image)" @click="image_click(data.item.id)" />
                      </span>
                    </div>
                  </template>
                  <template v-slot:cell(status)="data">
                    <label :style="[data.item.status == '审核未通过' ? {color: 'red'} : {color: 'green'}]">{{data.item.status}}</label>
                  </template>
                  <template v-slot:cell(delivery_status)="data">
                    <label :style="[data.item.delivery_status == '待审核' ? {color: 'red'} : {color: 'green'}]">{{data.item.delivery_status}}</label>
                  </template>
                  <template v-slot:cell(action)="data">
                    <b-button variant="dark" class="btn-fw">查看样情</b-button>
                  </template>
                  <template v-slot:cell()="data">{{data.value}}</template>
                </b-table>
                <b-pagination align="center" v-model="currentProductPage" :total-rows="getProducts()" :per-page="perPage" aria-controls="product_table" style="margin-top: 10px"></b-pagination>
                <div class="col-lg-6 offset-6 row justify-content-end" style="padding-top: 20px">
                    <b-button v-b-modal.modalmd variant="dark" class="btn-fw btn-rounded normal-button" @click="selected_item='product'">一键处理</b-button>
                </div>
              </b-tab>

              <!-- tab 2: 特辑 -->
              <b-tab :title="tabTitles[1]">
                <div class="button-panel row">
                    <div class="search-box">
                        <i class="fa fa-search search-icon"></i>
                        <b-form-input class="search-input" placeholder="查询特辑名称" v-model="special_feature_name" @input="change_special_feature"></b-form-input>
                    </div>
                    <div class="row">
                        <span class="normal-label">开始时间：</span>
                        <datepicker placeholder="请选择开始时间" format="yyyy-MM-dd" v-model="start_special_feature_time"></datepicker>
                    </div>&nbsp;&nbsp;&nbsp;
                    <div class="row">
                        <span class="normal-label">结束时间：</span>
                        <datepicker class="my-datepicker" placeholder="请选择结束时间" format="yyyy-MM-dd" v-model="end_special_feature_time"></datepicker>
                    </div>
                    <div style="position: absolute; right: 40px">
                        <b-button variant="dark" class="btn-rounded"><span style="font-size: 16px" @click="search_special_features">查找</span></b-button>&nbsp;
                        <b-button variant="secondary" class="btn-rounded"><span style="font-size: 16px" @click="clear_special_features">清空</span></b-button>
                    </div>
                </div>
                <b-table :fields="special_feature_fields" :items="temp_special_features" id="special_feature_table" :per-page="perPage" :current-page="currentPage" :responsive="true" :bordered="true" head-variant="light" style="padding-top: 30px">
                  <template v-slot:head()="data">
                    <span class="font-weight-bold">{{data.label}}</span>
                  </template>
                  <template v-slot:cell(index)="data">
                    <input type="checkbox" true-value="yes" false-value="no" :checked="data.item.selected" @change="data.item.selected=!data.item.selected">
                  </template>
                  <template v-slot:cell(status)="data">
                    <label :style="[data.item.status == '审核未通过' ? {color: 'red'} : data.item.status == '审核通过' ? {color: 'green'} : {opacity: 0.3}]">{{data.item.status}}</label>
                  </template>
                  <template v-slot:cell(action)="data">
                    <b-button variant="dark" class="btn-fw" @click="$router.push('../special-feature-detail')">查看洋情</b-button>
                  </template>
                  <template v-slot:cell()="data">{{data.value}}</template>
                </b-table>
                <b-pagination align="center" class="col-md-2 offset-md-5" v-model="currentPage" :total-rows="getFields()" :per-page="perPage" aria-controls="special_feature_table" style="margin-top: 20px"></b-pagination>
                <div class="col-lg-6 offset-6 row justify-content-end" style="padding-top: 20px">
                    <b-button v-b-modal.modalmd variant="dark" class="btn-fw btn-rounded normal-button" @click="selected_item='special_feature'">一键处理</b-button>
                </div>
              </b-tab>

              <!-- tab 3: 专栏 -->
              <b-tab :title="tabTitles[2]">
                <b-table :fields="field_fields" :items="temp_fields" id="field_table" :per-page="perPage" :current-page="currentPage" :responsive="true" :bordered="true" head-variant="light">
                  <template v-slot:head()="data">
                    <span class="font-weight-bold">{{data.label}}</span>
                  </template>
                  <template v-slot:cell(index)="data">
                    <input type="checkbox" true-value="yes" false-value="no" :checked="data.item.selected" @change="data.item.selected=!data.item.selected">
                  </template>
                  <template v-slot:cell(status)="data">
                    <label :style="[data.item.status == '审核未通过' ? {color: 'red'} : data.item.status == '审核通过' ? {color: 'green'} : {opacity: 0.5}]">{{data.item.status}}</label>
                  </template>
                  <template v-slot:cell(action)="data">
                    <button class="btn btn-outline" @click="$router.push('../field-detail')" style="padding-right: 10px"><i class="fa fa-pencil fa-2x" style="opacity: 0.8"></i></button>
                    <button v-b-modal.modalmd class="btn btn-outline" style="padding-left: 10px"><i class="fa fa-trash fa-2x" style="opacity: 0.8"></i></button>
                  </template>
                  <template v-slot:cell()="data">{{data.value}}</template>
                </b-table>
                <b-pagination align="center" class="col-md-2 offset-md-5" v-model="currentPage" :total-rows="getFields()" :per-page="perPage" aria-controls="field_table" style="margin-top: 20px"></b-pagination>
                <div class="col-lg-6 offset-6 row justify-content-end" style="padding-top: 20px">
                    <b-button v-b-modal.modalmd variant="dark" class="btn-fw btn-rounded normal-button" @click="selected_item='field'">一键处理</b-button>
                </div>
              </b-tab>

              <!-- tab 4: 举报 -->
              <b-tab :title="tabTitles[3]">
                <div class="row">
                    <div class="search-box">
                        <i class="fa fa-search search-icon"></i>
                        <b-form-input class="search-input" placeholder="查询推送关键字" v-model="feedback_name" @input="change_feedback"></b-form-input>
                    </div>
                    <div class="row">
                        <span class="normal-label">开始时间：</span>
                        <datepicker placeholder="请选择开始时间" format="yyyy-MM-dd" v-model="start_feedback_time"></datepicker>
                    </div>&nbsp;&nbsp;&nbsp;
                    <div class="row">
                        <span class="normal-label">结束时间：</span>
                        <datepicker class="my-datepicker" placeholder="请选择结束时间" format="yyyy-MM-dd" v-model="end_feedback_time"></datepicker>
                    </div>
                    <div style="position: absolute; right: 40px">
                        <b-button variant="dark" class="btn-rounded"><span style="font-size: 16px" @click="search_feedback">查找</span></b-button>&nbsp;
                        <b-button variant="secondary" class="btn-rounded"><span style="font-size: 16px" @click="clear_feedback">清空</span></b-button>
                    </div>
                </div>

                <b-table :fields="feedback_fields" :items="temp_feedbacks" id="feedback_table" :per-page="perPage" :current-page="currentPage" :responsive="true" :bordered="true" head-variant="light" style="padding-top: 30px">
                  <template v-slot:head()="data">
                    <span class="font-weight-bold">{{data.label}}</span>
                  </template>
                  <template v-slot:cell(index)="data">
                    <input type="checkbox" true-value="yes" false-value="no" :checked="data.item.selected" @change="data.item.selected=!data.item.selected">
                  </template>
                  <template v-slot:cell(status)="data">
                    <label :style="[data.item.status == '未解决' ? {color: 'red'} : {color: 'green'}]">{{data.item.status}}</label>
                  </template>
                  <template v-slot:cell(action)="data">
                    <b-button variant="dark" class="btn-fw" @click="$router.push('../feedback-detail')">查看洋情</b-button>
                  </template>
                  <template v-slot:cell()="data">{{data.value}}</template>
                </b-table>
                <b-pagination align="center" class="col-lg-2 offset-5" v-model="currentPage" :total-rows="getFeedbacks()" :per-page="perPage" aria-controls="feedback_table" style="margin-top: 20px"></b-pagination>
                <div class="col-lg-6 offset-6 row justify-content-end" style="padding-top: 20px">
                    <b-button v-b-modal.modalmd variant="dark" class="btn-fw btn-rounded normal-button" style="margin-right: 20px;" @click="selected_item='feedback'">一键处理</b-button>
                </div>
              </b-tab>

              <!-- tab 5: 其他 -->
              <b-tab :title="tabTitles[4]">
                <div class="row">
                  <i class="fa fa-search search-icon"></i>
                  <b-form-input class="search-input" placeholder="查询用户名称/用户ID" v-model="user_name" @input="change_user"></b-form-input>
                  <div class="row">
                        <span class="normal-label">开始时间：</span>
                        <datepicker placeholder="请选择开始时间" format="yyyy-MM-dd" v-model="start_user_time"></datepicker>
                    </div>&nbsp;&nbsp;&nbsp;
                    <div class="row">
                        <span class="normal-label">结束时间：</span>
                        <datepicker class="my-datepicker" placeholder="请选择结束时间" format="yyyy-MM-dd" v-model="end_user_time"></datepicker>
                    </div>
                    <div style="position: absolute; right: 40px">
                        <b-button variant="dark" class="btn-rounded"><span style="font-size: 16px" @click="search_user">查找</span></b-button>&nbsp;
                        <b-button variant="secondary" class="btn-rounded"><span style="font-size: 16px" @click="clear_user">清空</span></b-button>
                    </div>
                </div>

                <b-table :fields="user_fields" :items="temp_users" id="fans_table" :per-page="perPage" :current-page="currentFansPage" :responsive="true" :bordered="true" head-variant="light" style="padding-top: 30px">
                  <template v-slot:head()="data">
                    <span class="font-weight-bold">{{data.label}}</span>
                  </template>
                  <template v-slot:cell(index)="data">
                    <input type="checkbox" true-value="yes" false-value="no" :checked="data.item.selected" @change="data.item.selected=!data.item.selected">
                  </template>
                  <template v-slot:cell(picture)="data">
                    <img :src="getPictureUrl(data.item.picture)" style="border-radius: 50%; width: 50%" />
                  </template>
                  <template v-slot:cell(status)="data">
                    <label
                      :style="[data.item.status == '不活跃' ? {color: 'red'} : {color: 'green'}]"
                    >{{data.item.status}}</label>
                  </template>
                  <template v-slot:cell(user_status)="data">
                    <label
                      :style="[data.item.user_status == '已封号' ? {color: 'red'} : {color: 'green'}]"
                    >{{data.item.user_status}}</label>
                  </template>
                  <template v-slot:cell(action)="data">
                    <b-button variant="dark" class="btn-fw" @click="$router.push('../user-detail')">查看洋情</b-button>
                  </template>
                  <template v-slot:cell()="data">{{data.value}}</template>
                </b-table>
                <b-pagination align="center" v-model="currentFansPage" :total-rows="getFans()" :per-page="perPage" aria-controls="fans_table" style="margin-top: 10px"></b-pagination>
                <div class="col-lg-6 offset-6 row justify-content-end" style="padding-top: 20px">
                    <b-button v-b-modal.modalmd variant="dark" class="btn-fw btn-rounded normal-button" style="margin-right: 20px;" @click="selected_item='user'">一键处理</b-button>
                </div>
              </b-tab>
            </b-tabs>
            </div>
            <b-modal ref="modalmd" id="modalmd" size="md" centered hide-footer>
                <h2 class="text-center" style="font-weight: bold; padding-bottom: 20px">一键处理</h2>
                <h4 class="text-center" style="padding-bottom: 20px">确定要一键处理举报反馈吗？</h4>
                <div class="row" style="justify-content-center">
                    <button class="btn btn-secondary col-lg-4 offset-1" style="border-radius: 20px" @click="batch_process_cancel"><strong>无效举报</strong></button>
                    <button class="btn btn-dark col-lg-4 offset-2" style="border-radius: 20px" @click="batch_process_ok"><strong>有效举报</strong></button>
                </div>
            </b-modal>
            <lightbox id="mylightbox" ref="lightbox" :images="images" :directory="images_dir" :timeoutDuration="5000" />
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script lang="js">
import Datepicker from 'vuejs-datepicker'
import Lightbox from 'vue-my-photos'
export default {
  name: 'user-detail',
  components: {
    Datepicker,
    Lightbox
  },
  data () {
    return {
      selected_item: 'product',
      images_dir: '/static/img/',
      images: [],
      perPage: 5,
      currentPage: 1,
      currentProductPage: 1,
      currentOrderPage: 1,
      currentFavouritesPage: 1,
      currentFollowersPage: 1,
      currentFansPage: 1,
      start_feedback_time: '',
      start_field_time: '',
      start_special_feature_time: '',
      start_user_time: '',
      end_feedback_time: '',
      end_field_time: '',
      end_special_feature_time: '',
      end_user_time: '',
      product_name: '',
      special_feature_name: '',
      field_name: '',
      feedback_name: '',
      user_name: '',
      tabTitles: [
        '商品待审核（27）',
        '特辑待审核（15）',
        '专栏待审核（32）',
        '举报审核（82）',
        '其他（22）'
      ],
      product_fields: [
        {key: 'index', label: '全选', class: 'text-center'},
        {key: 'id', label: '商品ID', class: 'text-center'},
        {key: 'images', label: '商品图片', class: 'text-center'},
        {key: 'brand', label: '商品品牌', class: 'text-center'},
        {key: 'name', label: '商品名称', class: 'text-center'},
        {key: 'status', label: '商品状态', class: 'text-center'},
        {key: 'price', label: '价格', class: 'text-center'},
        {key: 'delivery_status', label: '审核状态', class: 'text-center'},
        {key: 'action', label: '操作', class: 'text-center'}
      ],
      special_feature_fields: [
        {key: 'index', label: '全选', class: 'text-center'},
        {key: 'id', label: '特辑编号', class: 'text-center'},
        {key: 'time', label: '提交时间', class: 'text-center'},
        {key: 'name', label: '特辑名称', class: 'text-center'},
        {key: 'owner', label: '特辑作者', class: 'text-center'},
        {key: 'quantity', label: '特辑商品数', class: 'text-center'},
        {key: 'status', label: '审核状态', class: 'text-center'},
        {key: 'action', label: '操作', class: 'text-center'}
      ],
      field_fields: [
        {key: 'index', label: '全选', class: 'text-center'},
        {key: 'name', label: '专栏名称', class: 'text-center'},
        {key: 'owner', label: '专栏简介', class: 'text-center'},
        {key: 'time', label: '上传时间', class: 'text-center'},
        {key: 'status', label: '状态', class: 'text-center'},
        {key: 'action', label: '操作', class: 'text-center'}
      ],
      feedback_fields: [
        {key: 'index', label: '全选', class: 'text-center'},
        {key: 'time', label: '举报时间', class: 'text-center'},
        {key: 'reason', label: '举报理由', class: 'text-center'},
        {key: 'person', label: '举报人', class: 'text-center'},
        {key: 'status', label: '审核状态', class: 'text-center'},
        {key: 'result', label: '处理结果', class: 'text-center'},
        {key: 'action', label: '操作', class: 'text-center'}
      ],
      user_fields: [
        {key: 'index', label: '全选', class: 'text-center'},
        { key: 'id', label: '用户账号', class: 'text-center' },
        { key: 'time', label: '用户时间', class: 'text-center' },
        { key: 'picture', label: '用户头像', class: 'text-center' },
        { key: 'name', label: '用户名称', class: 'text-center' },
        { key: 'product', label: '用户商品', class: 'text-center' },
        { key: 'type', label: '用户类型', class: 'text-center' },
        { key: 'status', label: '用户状态', class: 'text-center' },
        { key: 'user_status', label: '账号用户状态', class: 'text-center' },
        { key: 'action', label: '', class: 'text-center' }
      ],
      items: [
        {
          id: '45685229878',
          images: ['model1.png', 'model1.png', 'model1.png', 'model1.png'],
          brand: 'GUCCI',
          name: 'Jeans',
          status: '审核通过',
          price: '¥222',
          delivery_status: '待审核',
          selected: false
        },
        {
          id: '4568522123278',
          images: ['model2.png', 'model2.png', 'model2.png'],
          brand: 'Billionaire Boys 经典回',
          name: 'Jackets',
          status: '审核通过',
          price: '¥222',
          delivery_status: '待审核',
          selected: false
        }
      ],
      orders: [
        {
          id: '45685229878',
          time: '2020-08-01',
          sell: '小小尚贩',
          buy: 'WISHIS',
          status: '待付款',
          price: '¥222',
          method: '支付宝'
        },
        {
          id: '45685239878',
          time: '2020-08-02',
          sell: '小小尚贩',
          buy: 'WISHIS',
          status: '待收货',
          price: '¥222',
          method: '零钱包'
        },
        {
          id: '45683239878',
          time: '2020-08-03',
          sell: '小小尚贩',
          buy: 'WISHIS',
          status: '待收货',
          price: '¥222',
          method: '零钱包'
        }
      ],
      users: [
        {
          select: '034',
          id: '156945894',
          picture: 'face27.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自然',
          status: '不活跃',
          user_status: '已封号',
          time: '2020-08-01',
          selected: false
        },
        {
          select: '034',
          id: '123659898',
          picture: 'face2.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自运营',
          status: '不活跃',
          user_status: '正常',
          time: '2020-08-02',
          selected: false
        },
        {
          select: '034',
          id: '4556552982',
          picture: 'face8.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自然',
          status: '不活跃',
          user_status: '正常',
          time: '2020-08-03',
          selected: false
        },
        {
          select: '034',
          id: '125416879',
          picture: 'face13.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自运营',
          status: '不活跃',
          user_status: '正常',
          time: '2020-08-04',
          selected: false
        },
        {
          select: '034',
          id: '159785646',
          picture: 'face23.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自然',
          status: '不活跃',
          user_status: '已封号',
          time: '2020-08-05',
          selected: false
        },
        {
          select: '034',
          id: '4556123982',
          picture: 'face8.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自运营',
          status: '不活跃',
          user_status: '正常',
          time: '2020-08-06',
          selected: false
        },
        {
          select: '034',
          id: '125445679',
          picture: 'face13.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自然',
          status: '不活跃',
          user_status: '正常',
          time: '2020-08-07',
          selected: false
        },
        {
          select: '034',
          id: '1597878946',
          picture: 'face23.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自运营',
          status: '不活跃',
          user_status: '已封号',
          time: '2020-08-08'
        }
      ],
      special_features: [
        {
          id: '45685229878',
          time: '2020-08-01',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '213个',
          status: '审核未通过',
          selected: false
        },
        {
          id: '45685239878',
          time: '2020-08-02',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '189个',
          status: '审核未通过',
          selected: false
        },
        {
          id: '45683239878',
          time: '2020-08-03',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '213个',
          status: '审核未通过',
          selected: false
        },
        {
          id: '45621229878',
          time: '2020-08-04',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '189个',
          status: '审核未通过',
          selected: false
        },
        {
          id: '45685329878',
          time: '2020-08-05',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '213个',
          status: '审核未通过',
          selected: false
        },
        {
          id: '45683569878',
          time: '2020-08-06',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '189个',
          status: '审核未通过',
          selected: false
        },
        {
          id: '45686539878',
          time: '2020-08-07',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '213个',
          status: '审核未通过',
          selected: false
        }
      ],
      fields: [
        {
          id: '45685229878',
          time: '2020-08-01',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '213个',
          status: '审核未通过',
          selected: false
        },
        {
          id: '45685239878',
          time: '2020-08-02',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '279个',
          status: '审核未通过',
          selected: false
        },
        {
          id: '45683239878',
          time: '2020-08-03',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '222个',
          status: '审核未通过',
          selected: false
        },
        {
          id: '45621229878',
          time: '2020-08-04',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '237个',
          status: '审核未通过',
          selected: false
        },
        {
          id: '45685329878',
          time: '2020-08-05',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '300个',
          status: '审核未通过',
          selected: false
        },
        {
          id: '45683569878',
          time: '2020-08-06',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '123个',
          status: '审核未通过',
          selected: false
        },
        {
          id: '45686539878',
          time: '2020-08-07',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '223个',
          status: '审核未通过',
          selected: false
        }
      ],
      feedbacks: [
        {
          id: '45685229878',
          time: '2020-08-01',
          reason: '小小商贩市场发生在v饭',
          person: 'WISHIS',
          status: '未解决',
          result: '无',
          selected: false
        },
        {
          id: '45685239878',
          time: '2020-08-02',
          reason: '小小商贩⬆️都是犯的错',
          person: 'SAJCDFEJ',
          status: '未解决',
          result: '无效举报',
          selected: false
        },
        {
          id: '45683239878',
          time: '2020-08-03',
          reason: '小小商贩市场发生在v饭',
          person: 'WISHIS',
          status: '未解决',
          result: '无',
          selected: false
        },
        {
          id: '45621229878',
          time: '2020-08-04',
          reason: '小小商贩⬆️都是犯的错',
          person: 'SAJCDFEJ',
          status: '未解决',
          result: '无效举报',
          selected: false
        },
        {
          id: '45685329878',
          time: '2020-08-05',
          reason: '小小商贩市场发生在v饭',
          person: 'WISHIS',
          status: '未解决',
          result: '无',
          selected: false
        },
        {
          id: '45683569878',
          time: '2020-08-06',
          reason: '小小商贩⬆️都是犯的错',
          person: 'SAJCDFEJ',
          status: '未解决',
          result: '无效举报',
          selected: false
        },
        {
          id: '45686539878',
          time: '2020-08-07',
          reason: '小小商贩市场发生在v饭',
          person: 'WISHIS',
          status: '未解决',
          result: '无',
          selected: false
        }
      ],
      temp_feedbacks: [],
      temp_fields: [],
      temp_special_features: [],
      temp_users: [],
      temp_products: []
    }
  },
  methods: {
    batch_process_ok () {
      switch (this.selected_item) {
        case 'product':
          this.items.forEach(item => {
            if (item.selected) {
              if (item.selected) {
                item.delivery_status = '审核通过'
                item.selected = false
              }
            }
          })
          break
        case 'special_feature':
          this.special_features.forEach(item => {
            if (item.selected) {
              item.status = '审核通过'
              item.selected = false
            }
          })
          break
        case 'field':
          this.fields.forEach(item => {
            if (item.selected) {
              item.status = '审核通过'
              item.selected = false
            }
          })
          break
        case 'feedback':
          this.feedbacks.forEach(item => {
            if (item.selected) {
              item.status = '已解决'
              item.selected = false
            }
          })
          break
        case 'user':
          this.users.forEach(item => {
            if (item.selected) {
              item.status = '活跃中'
              item.selected = false
            }
          })
          break
      }
      this.$refs['modalmd'].hide()
    },
    batch_process_cancel () {
      this.$refs['modalmd'].hide()
      this.items.forEach((item) => {
        item.selected = false
      })
      this.special_features.forEach((item) => {
        item.selected = false
      })
      this.fields.forEach((item) => {
        item.selected = false
      })
      this.feedbacks.forEach((item) => {
        item.selected = false
      })
      this.users.forEach((item) => {
        item.selected = false
      })
    },
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
    },
    getImageUrl (pic) {
      return require('../assets/images/product-images/' + pic)
    },
    getPictureUrl (pic) {
      return require('../assets/images/faces/' + pic)
    },
    getProducts () {
      return this.temp_products.length
    },
    getOrders () {
      return this.orders.length
    },
    getFavourites () {
      return this.items.length
    },
    getFollowers () {
      return this.users.length
    },
    getFans () {
      return this.temp_users.length
    },
    getFields () {
      return this.fields.length
    },
    getFeedbacks () {
      return this.feedbacks.length
    },
    search_special_features () {
      var month = ''
      var date = ''
      var startDate = ''
      var endDate = ''
      if (this.start_special_feature_time !== '') {
        if (this.start_special_feature_time.getMonth() + 1 < 10) {
          month = '0' + (this.start_special_feature_time.getMonth() + 1)
        } else {
          month = this.start_special_feature_time.getMonth() + 1
        }
        if (this.start_special_feature_time.getDate() < 10) {
          date = '0' + this.start_special_feature_time.getDate()
        } else {
          date = this.start_special_feature_time.getDate()
        }
        startDate = this.start_special_feature_time.getFullYear() + '-' + month + '-' + date
      }
      if (this.end_special_feature_time !== '') {
        if (this.end_special_feature_time.getMonth() + 1 < 10) {
          month = '0' + (this.end_special_feature_time.getMonth() + 1)
        } else {
          month = this.end_special_feature_time.getMonth() + 1
        }
        if (this.end_special_feature_time.getDate() < 10) {
          date = '0' + this.end_special_feature_time.getDate()
        } else {
          date = this.end_special_feature_time.getDate()
        }
        endDate = this.end_special_feature_time.getFullYear() + '-' + month + '-' + date
      }
      this.temp_special_features = []
      if (startDate === '' && endDate === '') {
        this.special_features.forEach(item => this.temp_special_features.push(item))
      } else if (startDate === '') {
        this.special_features.forEach(item => {
          if (item.time <= endDate) {
            this.temp_special_features.push(item)
          }
        })
      } else if (endDate === '') {
        this.special_features.forEach(item => {
          if (item.time >= startDate) {
            this.temp_special_features.push(item)
          }
        })
      } else {
        this.special_features.forEach(item => {
          if (item.time >= startDate && item.time <= endDate) {
            this.temp_special_features.push(item)
          }
        })
      }
    },
    getSpecialFeatures () {
      return this.temp_special_features.length
    },
    clear_special_features () {
      this.start_special_feature_time = ''
      this.end_special_feature_time = ''
      this.temp_special_features = []
      this.special_feature_name = ''
      this.special_features.forEach(item => this.temp_special_features.push(item))
    },
    search_field () {
      var month = ''
      var date = ''
      var startDate = ''
      var endDate = ''
      if (this.start_field_time !== '') {
        if (this.start_field_time.getMonth() + 1 < 10) {
          month = '0' + (this.start_field_time.getMonth() + 1)
        } else {
          month = this.start_field_time.getMonth() + 1
        }
        if (this.start_field_time.getDate() < 10) {
          date = '0' + this.start_field_time.getDate()
        } else {
          date = this.start_field_time.getDate()
        }
        startDate = this.start_field_time.getFullYear() + '-' + month + '-' + date
      }
      if (this.end_special_feature_time !== '') {
        if (this.end_special_feature_time.getMonth() + 1 < 10) {
          month = '0' + (this.end_special_feature_time.getMonth() + 1)
        } else {
          month = this.end_special_feature_time.getMonth() + 1
        }
        if (this.end_special_feature_time.getDate() < 10) {
          date = '0' + this.end_special_feature_time.getDate()
        } else {
          date = this.end_special_feature_time.getDate()
        }
        endDate = this.end_special_feature_time.getFullYear() + '-' + month + '-' + date
      }
      this.temp_fields = []
      if (startDate === '' && endDate === '') {
        this.fields.forEach(item => this.temp_fields.push(item))
      } else if (startDate === '') {
        this.fields.forEach(item => {
          if (item.time <= endDate) {
            this.temp_fields.push(item)
          }
        })
      } else if (endDate === '') {
        this.fields.forEach(item => {
          if (item.time >= startDate) {
            this.temp_fields.push(item)
          }
        })
      } else {
        this.fields.forEach(item => {
          if (item.time >= startDate && item.time <= endDate) {
            this.temp_fields.push(item)
          }
        })
      }
    },
    clear_field () {
      this.start_field_time = ''
      this.end_special_feature_time = ''
      this.temp_fields = []
      this.field_name = ''
      this.fields.forEach(item => this.temp_fields.push(item))
    },
    search_feedback () {
      var month = ''
      var date = ''
      var startDate = ''
      var endDate = ''
      if (this.start_feedback_time !== '') {
        if (this.start_feedback_time.getMonth() + 1 < 10) {
          month = '0' + (this.start_feedback_time.getMonth() + 1)
        } else {
          month = this.start_feedback_time.getMonth() + 1
        }
        if (this.start_feedback_time.getDate() < 10) {
          date = '0' + this.start_feedback_time.getDate()
        } else {
          date = this.start_feedback_time.getDate()
        }
        startDate = this.start_feedback_time.getFullYear() + '-' + month + '-' + date
      }
      if (this.end_feedback_time !== '') {
        if (this.end_feedback_time.getMonth() + 1 < 10) {
          month = '0' + (this.end_feedback_time.getMonth() + 1)
        } else {
          month = this.end_feedback_time.getMonth() + 1
        }
        if (this.end_feedback_time.getDate() < 10) {
          date = '0' + this.end_feedback_time.getDate()
        } else {
          date = this.end_feedback_time.getDate()
        }
        endDate = this.end_feedback_time.getFullYear() + '-' + month + '-' + date
      }
      this.temp_feedbacks = []
      if (startDate === '' && endDate === '') {
        this.feedbacks.forEach(item => this.temp_feedbacks.push(item))
      } else if (startDate === '') {
        this.feedbacks.forEach(item => {
          if (item.time <= endDate) {
            this.temp_feedbacks.push(item)
          }
        })
      } else if (endDate === '') {
        this.feedbacks.forEach(item => {
          if (item.time >= startDate) {
            this.temp_feedbacks.push(item)
          }
        })
      } else {
        this.feedbacks.forEach(item => {
          if (item.time >= startDate && item.time <= endDate) {
            this.temp_feedbacks.push(item)
          }
        })
      }
    },
    clear_feedback () {
      this.start_feedback_time = ''
      this.end_feedback_time = ''
      this.temp_feedbacks = []
      this.feedback_name = ''
      this.feedbacks.forEach(item => this.temp_feedbacks.push(item))
    },
    search_user () {
      var month = ''
      var date = ''
      var startDate = ''
      var endDate = ''
      if (this.start_user_time !== '') {
        if (this.start_user_time.getMonth() + 1 < 10) {
          month = '0' + (this.start_user_time.getMonth() + 1)
        } else {
          month = this.start_user_time.getMonth() + 1
        }
        if (this.start_user_time.getDate() < 10) {
          date = '0' + this.start_user_time.getDate()
        } else {
          date = this.start_user_time.getDate()
        }
        startDate = this.start_user_time.getFullYear() + '-' + month + '-' + date
      }
      if (this.end_user_time !== '') {
        if (this.end_user_time.getMonth() + 1 < 10) {
          month = '0' + (this.end_user_time.getMonth() + 1)
        } else {
          month = this.end_user_time.getMonth() + 1
        }
        if (this.end_user_time.getDate() < 10) {
          date = '0' + this.end_user_time.getDate()
        } else {
          date = this.end_user_time.getDate()
        }
        endDate = this.end_user_time.getFullYear() + '-' + month + '-' + date
      }
      this.temp_users = []
      if (startDate === '' && endDate === '') {
        this.users.forEach(item => this.temp_users.push(item))
      } else if (startDate === '') {
        this.users.forEach(item => {
          if (item.time <= endDate) {
            this.temp_users.push(item)
          }
        })
      } else if (endDate === '') {
        this.users.forEach(item => {
          if (item.time >= startDate) {
            this.temp_users.push(item)
          }
        })
      } else {
        this.users.forEach(item => {
          if (item.time >= startDate && item.time <= endDate) {
            this.temp_users.push(item)
          }
        })
      }
    },
    clear_user () {
      this.start_user_time = ''
      this.end_user_time = ''
      this.temp_users = []
      this.user_name = ''
      this.users.forEach(item => this.temp_users.push(item))
    },
    clear_products () {
      this.product_name = ''
      this.temp_products = []
      this.items.forEach(item => this.temp_products.push(item))
    },
    change_product () {
      this.temp_products = []
      if (this.product_name === '') {
        this.items.forEach(item => this.temp_products.push(item))
      } else {
        this.items.forEach(item => {
          if (item.id.includes(this.product_name) || item.name.includes(this.product_name)) {
            this.temp_products.push(item)
          }
        })
      }
    },
    change_special_feature () {
      this.temp_special_features = []
      if (this.special_feature_name === '') {
        this.special_features.forEach(item => this.temp_special_features.push(item))
      } else {
        this.special_features.forEach(item => {
          if (item.name.includes(this.special_feature_name)) {
            this.temp_special_features.push(item)
          }
        })
      }
    },
    change_field () {
      this.temp_fields = []
      if (this.field_name === '') {
        this.fields.forEach(item => this.temp_fields.push(item))
      } else {
        this.fields.forEach(item => {
          if (item.name.includes(this.field_name)) {
            this.temp_fields.push(item)
          }
        })
      }
    },
    change_feedback () {
      this.temp_feedbacks = []
      if (this.feedback_name === '') {
        this.feedbacks.forEach(item => this.temp_feedbacks.push(item))
      } else {
        this.feedbacks.forEach(item => {
          if (item.person.includes(this.feedback_name)) {
            this.temp_feedbacks.push(item)
          }
        })
      }
    },
    change_user () {
      this.temp_users = []
      if (this.user_name === '') {
        this.users.forEach(item => this.temp_users.push(item))
      } else {
        this.users.forEach(item => {
          if (item.id.includes(this.user_name) || item.name.includes(this.user_name)) {
            this.temp_users.push(item)
          }
        })
      }
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'to-do')
    this.special_features.forEach(item => this.temp_special_features.push(item))
    this.users.forEach(item => this.temp_users.push(item))
    this.fields.forEach(item => this.temp_fields.push(item))
    this.feedbacks.forEach(item => this.temp_feedbacks.push(item))
    this.items.forEach(item => this.temp_products.push(item))
  }
}
</script>

<style lang="scss">
.lightbox-close {
  margin-top: 50px;
}
</style>

<style scoped lang="scss">
.tab-title-class {
  font-size: 40px;
  font-weight: bold;
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

.animation-product[data-v-1309a0f3]:hover {
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
  font-size: 16px;
}

.normal-text {
  font-size: 16px;
}
</style>
