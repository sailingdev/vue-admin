<template lang="html">
  <div id="user-detail">
  <section class="user-detail">
    <div class="row">
      <div class="col-lg-12 grid-margin ">
        <div class="card" style="margin-bottom: 0; padding-bottom: 0">
          <div class="card-body main-card-body">
            <span class="card-title" style="font-size: 22px"><b>用户洋情</b></span>
            <hr style="margin-left: auto; margin-right: auto; background-color: black;" />

            <!-- profile edit -->
            <div class="row" style="margin-bottom: 20px">
              <!-- profile picture -->
              <div class="col-lg-4 profile-picture" style="text-align: center">
                <img class="profile-image" src="../../assets/images/faces/jackie_chan.jpg" />
                <label class="profile-caption">用户成交量: 234</label>
              </div>

              <!-- profile edit inputs & dropdowns -->
              <div class="col-lg-8 text-center">
                <b-form-group class="form-group" label-for="name">
                    <div class="row">
                      <span class="col-lg-2 normal-label">用户名称</span>
                      <b-form-input class="col-lg-7 text-input" type="text" id="name" placeholder="用户名称" value="成龙"></b-form-input>
                    </div>
                </b-form-group>
                <b-form-group class="form-group" label-for="number">
                  <div class="row">
                    <span class="col-lg-2 normal-label">用户账号</span>
                    <b-form-input class="col-lg-7 text-input" type="text" id="number" placeholder="123456789" value="123456789"></b-form-input>
                    <a href="#" class="col-lg-2 edit-link">编辑</a>
                  </div>
                </b-form-group>
                <b-form-group class="form-group" label-for="adress">
                  <div class="row">
                    <span class="col-lg-2 normal-label">用户介绍</span>
                    <b-form-input class="col-lg-7 text-input" type="text" id="address" value="上海市"></b-form-input>
                  </div>
                </b-form-group>
                <b-form-group class="form-group" label-for="category">
                  <div class="row">
                    <span class="col-lg-2 normal-label">用户类型</span>
                    <b-dropdown class="col-lg-7 dropdown-selector text-input" text="自然" variant="outline-secondary">
                      <b-dropdown-item>自然</b-dropdown-item>
                      <b-dropdown-item>自运营</b-dropdown-item>
                    </b-dropdown>
                    <a href="#" class="col-lg-2 edit-link">编辑</a>
                  </div>
                </b-form-group>
                <b-form-group class="form-group" label-for="user_status">
                  <div class="row">
                    <span class="col-lg-2 normal-label">用户状态</span>
                    <b-form-input class="text-input col-lg-7" type="text" id="user_status" value="不活跃"></b-form-input>
                  </div>
                </b-form-group>
                <b-form-group class="form-group" label-for="status">
                  <div class="row">
                    <span class="col-lg-2 normal-label">账号状态</span>
                    <b-dropdown class="text-input dropdown-selector col-lg-7" text="正常" variant="outline-secondary">
                      <b-dropdown-item>正常</b-dropdown-item>
                      <b-dropdown-item>已封号</b-dropdown-item>
                    </b-dropdown>
                    <a href="#" class="col-lg-2 edit-link">编辑</a>
                  </div>
                </b-form-group>
              </div>
            </div>

            <!-- tabs -->
            <b-tabs active-nav-item-class="font-weight-bold text-black">
              <!-- tab 1 -->
              <b-tab :title="tabTitles[0]" active>
                <div class="search-box row">
                  <i class="fa fa-search search-icon"></i>
                  <b-form-input class="search-input" placeholder="查询用户名称/商品货号" v-model="product_name" @input="change_product"></b-form-input>
                </div>
                <div class="row button-panel justify-content-start">
                  <div class="col-lg-2">
                    <div class="row">
                    <span class="col-lg-12 text-center" style="font-size: 16px; padding-top: 10px">商品风格:</span>
                    <span class="col-lg-12 text-center" style="font-size: 16px; opacity: 0.5">(可多选)</span>
                    </div>
                  </div>
                  <b-button variant="dark" class="col-lg-1" style="font-size: 14px; margin-right: 10px">简约</b-button>
                  <b-button variant="secondary" class="col-lg-1" style="font-size: 14px; margin-right: 10px">机能</b-button>
                  <b-button variant="secondary" class="col-lg-1" style="font-size: 14px; margin-right: 10px">高街</b-button>
                  <b-button variant="dark" class="col-lg-1" style="font-size: 14px; margin-right: 10px">先锋</b-button>
                  <b-button variant="secondary" class="col-lg-1" style="font-size: 14px; margin-right: 10px">耆湖</b-button>
                  <b-button variant="secondary" class="col-lg-1" style="font-size: 14px; margin-right: 10px">日潮</b-button>
                  <b-button variant="secondary" class="col-lg-1" style="font-size: 14px; margin-right: 10px">复古</b-button>
                  <b-button variant="secondary" class="col-lg-1" style="font-size: 14px; margin-right: 10px">运动</b-button>
                </div>
                <div class="row button-panel">
                  <div class="col-lg-2">
                    <div class="row">
                    <span class="col-lg-12 text-center" style="font-size: 16px; padding-top: 10px">商品类别:</span>
                    <span class="col-lg-12" style="opacity: 0; font-size: 16px;">商品类别</span>
                    </div>
                  </div>
                  <b-button variant="secondary" style="font-size: 16px; margin-right: 10px; padding-left: 20px; padding-right: 20px">鞋子</b-button>
                    <b-button variant="secondary" style="font-size: 16px; margin-right: 10px; padding-left: 20px; padding-right: 20px">休闲鞋</b-button>
                    <b-button variant="secondary" style="font-size: 16px; margin-right: 10px; padding-left: 20px; padding-right: 20px">运动鞋</b-button>
                    <b-button variant="secondary" style="font-size: 16px; margin-right: 10px; padding-left: 20px; padding-right: 20px">皮鞋</b-button>
                    <b-button variant="secondary" style="font-size: 16px; margin-right: 10px; padding-left: 20px; padding-right: 20px">凉鞋/拖鞋</b-button>
                    <b-button variant="secondary" style="font-size: 16px; margin-right: 10px; padding-left: 20px; padding-right: 20px">高跟鞋</b-button>
                    <b-button variant="secondary" style="font-size: 16px; margin-right: 10px; padding-left: 20px; padding-right: 20px">平底鞋</b-button>
                    <b-button variant="secondary" style="font-size: 16px; margin-right: 10px; padding-left: 20px; padding-right: 20px">其他</b-button>
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
                    <b-button variant="secondary" class="btn-rounded"><span style="font-size: 16px" @click="clear_product">清空</span></b-button>
                  </div>
                </div>

                <b-table :fields="product_fields" :items="temp_products" id="product_table" :per-page="perPage" :current-page="currentProductPage" :responsive="true" :bordered="true" head-variant="light" style="padding-top: 30px">
                  <template v-slot:head()="data">
                    <span class="font-weight-bold">{{data.label}}</span>
                  </template>
                  <template v-slot:cell(images)="data">
                    <div class="products">
                      <span class="product" v-for="image in data.item.images" :key="image.id">
                        <img :src="getImageUrl(image)" @click="image_click(data.item.id)" />
                      </span>
                    </div>
                  </template>
                  <template v-slot:cell(delivery_status)="data">
                    <label :style="[data.item.delivery_status == '已封号' ? {color: 'red'} : {color: 'green'}]">{{data.item.delivery_status}}</label>
                  </template>
                  <template v-slot:cell(action)="data">
                    <b-button variant="dark" class="btn-fw">查看样情</b-button>
                  </template>
                  <template v-slot:cell()="data">{{data.value}}</template>
                </b-table>
                <b-pagination align="center" v-model="currentProductPage" :total-rows="getProducts()" :per-page="perPage" aria-controls="product_table" style="margin-top: 10px"></b-pagination>
              </b-tab>

              <!-- tab 2 -->
              <b-tab :title="tabTitles[1]">
                <div class="button-panel row">
                    <div class="search-box">
                        <i class="fa fa-search search-icon"></i>
                        <b-form-input class="search-input" placeholder="查询订单编号/买卖方用户名" v-model="order_name" @input="change_order"></b-form-input>
                    </div>
                    <div class="row">
                        <span class="normal-label">开始时间：</span>
                        <datepicker placeholder="请选择开始时间" format="yyyy-MM-dd" v-model="start_order_time"></datepicker>
                    </div>&nbsp;&nbsp;&nbsp;
                    <div class="row">
                        <span class="normal-label">结束时间：</span>
                        <datepicker class="my-datepicker" placeholder="请选择结束时间" format="yyyy-MM-dd" v-model="end_order_time"></datepicker>
                    </div>
                    <div style="position: absolute; right: 30px">
                        <b-button variant="dark" class="btn-rounded"><span style="font-size: 16px" @click="search_order">查找</span></b-button>&nbsp;
                        <b-button variant="secondary" class="btn-rounded"><span style="font-size: 16px" @click="clear_order">清空</span></b-button>
                    </div>
                </div>

                <b-table :fields="order_fields" :items="temp_orders" id="order_table" :per-page="perPage" :current-page="currentOrderPage" :responsive="true" :bordered="true" head-variant="light" style="padding-top: 30px">
                  <template v-slot:head()="data">
                    <span class="font-weight-bold">{{data.label}}</span>
                  </template>
                  <template v-slot:cell(method)="data">
                    <label :style="[data.item.method == '零钱包' ? {opacity: 0.4} : {opacity: 1}]">{{data.item.method}}</label>
                  </template>
                  <template v-slot:cell(action)="data">
                    <b-button variant="dark" class="btn-fw">查看样情</b-button>
                  </template>
                  <template v-slot:cell()="data">{{data.value}}</template>
                </b-table>
                <b-pagination align="center" v-model="currentOrderPage" :total-rows="getOrders()" :per-page="perPage" aria-controls="order_table" style="margin-top: 10px"></b-pagination>
              </b-tab>

              <!-- tab 3 -->
              <b-tab :title="tabTitles[2]">
                <div class="button-panel row">
                    <div class="search-box">
                        <i class="fa fa-search search-icon"></i>
                        <b-form-input class="search-input" placeholder="查询订单编号/买卖方用户名" v-model="bought_order_name" @input="change_bought_order"></b-form-input>
                    </div>
                    <div class="row">
                        <span class="normal-label">开始时间：</span>
                        <datepicker placeholder="请选择开始时间" format="yyyy-MM-dd" v-model="start_bought_order_time"></datepicker>
                    </div>&nbsp;&nbsp;&nbsp;
                    <div class="row">
                        <span class="normal-label">结束时间：</span>
                        <datepicker class="my-datepicker" placeholder="请选择结束时间" format="yyyy-MM-dd" v-model="end_bought_order_time"></datepicker>
                    </div>
                    <div style="position: absolute; right: 30px">
                        <b-button variant="dark" class="btn-rounded"><span style="font-size: 16px" @click="search_bought_order">查找</span></b-button>&nbsp;
                        <b-button variant="secondary" class="btn-rounded"><span style="font-size: 16px" @click="clear_bought_order">清空</span></b-button>
                    </div>
                </div>

                <b-table :fields="order_fields" :items="temp_bought_orders" id="bought_order_table" :per-page="perPage" :current-page="currentBoughtOrderPage" :responsive="true" :bordered="true" head-variant="light" style="padding-top: 30px">
                  <template v-slot:head()="data">
                    <span class="font-weight-bold">{{data.label}}</span>
                  </template>
                  <template v-slot:cell(method)="data">
                    <label :style="[data.item.method == '零钱包' ? {opacity: 0.4} : {opacity: 1}]">{{data.item.method}}</label>
                  </template>
                  <template v-slot:cell(action)="data">
                    <b-button variant="dark" class="btn-fw">查看样情</b-button>
                  </template>
                  <template v-slot:cell()="data">{{data.value}}</template>
                </b-table>
                <b-pagination align="center" v-model="currentBoughtOrderPage" :total-rows="getBoughtOrders()" :per-page="perPage" aria-controls="bought_order_table" style="margin-top: 10px"></b-pagination>
              </b-tab>

              <!-- tab 4 -->
              <b-tab :title="tabTitles[3]">
                <div class="search-box row">
                  <i class="fa fa-search search-icon"></i>
                  <b-form-input class="search-input" placeholder="查询用户名称/商品货号" v-model="favourites_name" @input="change_favourites"></b-form-input>
                </div>
                <div class="row button-panel">
                  <div style="padding-top: 5px; padding-right: 5px">
                    <span>商品分类:</span>
                  </div>
                  <b-dropdown class="dropdown-selector text-input" text="请选择商品类别" variant="outline-secondary" style="margin-right: 20px">
                    <b-dropdown-item>自然</b-dropdown-item>
                    <b-dropdown-item>自运营</b-dropdown-item>
                  </b-dropdown>
                  <div style="padding-top: 5px; padding-right: 5px">
                    <span>商品品牌:</span>
                  </div>
                  <b-dropdown class="dropdown-selector text-input" text="请选择品牌" variant="outline-secondary" style="margin-right: 20px">
                    <b-dropdown-item>自然</b-dropdown-item>
                    <b-dropdown-item>自运营</b-dropdown-item>
                  </b-dropdown>
                  <div style="padding-top: 5px; padding-right: 5px">
                    <span>商品风格:</span>
                  </div>
                  <b-dropdown class="dropdown-selector text-input" text="请选择风格" variant="outline-secondary">
                    <b-dropdown-item>自然</b-dropdown-item>
                    <b-dropdown-item>自运营</b-dropdown-item>
                  </b-dropdown>
                  <div style="position: absolute; right: 40px">
                    <b-button variant="dark" class="btn-rounded"><span style="font-size: 16px">查找</span></b-button>&nbsp;
                    <b-button variant="secondary" class="btn-rounded"><span style="font-size: 16px" @click="clear_favourites">清空</span></b-button>
                  </div>

                  <b-table :fields="product_fields" :items="temp_favourites" id="favourites_table" :per-page="perPage" :current-page="currentFavouritesPage" :responsive="true" :bordered="true" head-variant="light" style="padding-top: 30px">
                  <template v-slot:head()="data">
                    <span class="font-weight-bold">{{data.label}}</span>
                  </template>
                  <template v-slot:cell(images)="data">
                    <div class="products">
                      <span class="product" v-for="image in data.item.images" :key="image.id">
                        <img :src="getImageUrl(image)" @click="image_click(data.item.id)" />
                      </span>
                    </div>
                  </template>
                  <template v-slot:cell(delivery_status)="data">
                    <label :style="[data.item.delivery_status == '已封号' ? {color: 'red'} : {color: 'green'}]">{{data.item.delivery_status}}</label>
                  </template>
                  <template v-slot:cell(action)="data">
                    <b-button variant="dark" class="btn-fw">查看样情</b-button>
                  </template>
                  <template v-slot:cell()="data">{{data.value}}</template>
                </b-table>
                  <b-pagination align="center" class="col-lg-2 offset-md-5" v-model="currentFavouritesPage" :total-rows="getFavourites()" :per-page="perPage" aria-controls="favourites_table" style="margin-top: 10px"></b-pagination>
                </div>
              </b-tab>

              <!-- tab 5 -->
              <b-tab :title="tabTitles[4]">
                <div class="search-box row">
                  <i class="fa fa-search search-icon"></i>
                  <b-form-input class="search-input" placeholder="查询用户名称/用户ID" v-model="followers_name" @input="change_followers"></b-form-input>
                  <div style="position: absolute; right: 0">
                    <b-button variant="dark" class="btn-rounded"><span style="font-size: 16px">查找</span></b-button>&nbsp;
                    <b-button variant="secondary" class="btn-rounded"><span style="font-size: 16px" @click="clear_followers">清空</span></b-button>
                  </div>
                </div>

                <b-table :fields="followers_fields" :items="temp_followers" id="followers_table" :per-page="perPage" :current-page="currentFollowersPage" :responsive="true" :bordered="true" head-variant="light" style="padding-top: 30px">
                  <template v-slot:head()="data">
                    <span class="font-weight-bold">{{data.label}}</span>
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
                <b-pagination align="center" v-model="currentFollowersPage" :total-rows="getFollowers()" :per-page="perPage" aria-controls="followers_table" style="margin-top: 10px"></b-pagination>
              </b-tab>

            </b-tabs>

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
      images_dir: '/static/img/',
      images: [],
      perPage: 5,
      currentProductPage: 1,
      currentOrderPage: 1,
      currentFavouritesPage: 1,
      currentFollowersPage: 1,
      currentFansPage: 1,
      currentBoughtOrderPage: 1,
      start_order_time: '',
      end_order_time: '',
      start_user_time: '',
      end_user_time: '',
      start_bought_order_time: '',
      end_bought_order_time: '',
      product_name: '',
      order_name: '',
      favourites_name: '',
      followers_name: '',
      fans_name: '',
      bought_order_name: '',
      tabTitles: [
        'TA的商品 (234)',
        'TA的出的订单 (23)',
        'TA的买到的订单 (32)',
        'TA的收藏 (213)',
        'TA的关注 (27)'
      ],
      order_fields: [
        {key: 'id', label: '订单编号', class: 'text-center'},
        {key: 'time', label: '提交时间', class: 'text-center'},
        {key: 'sell', label: '卖家名称', class: 'text-center'},
        {key: 'buy', label: '买家名称', class: 'text-center'},
        {key: 'status', label: '订单状态', class: 'text-center'},
        {key: 'price', label: '订单金额', class: 'text-center'},
        {key: 'method', label: '支付方式', class: 'text-center'},
        {key: 'action', label: '操作', class: 'text-center'}
      ],
      product_fields: [
        {key: 'id', label: '商品ID', class: 'text-center'},
        {key: 'images', label: '商品图片', class: 'text-center'},
        {key: 'brand', label: '商品品牌', class: 'text-center'},
        {key: 'name', label: '商品名称', class: 'text-center'},
        {key: 'status', label: '商品状态', class: 'text-center'},
        {key: 'price', label: '价格', class: 'text-center'},
        {key: 'delivery_status', label: '审核状态', class: 'text-center'},
        {key: 'action', label: '操作', class: 'text-center'}
      ],
      followers_fields: [
        {key: 'id', label: '用户账号', class: 'text-center'},
        {key: 'picture', label: '用户头像', class: 'text-center'},
        {key: 'name', label: '用户名称', class: 'text-center'},
        {key: 'product', label: '用户商品', class: 'text-center'},
        {key: 'type', label: '用户类型', class: 'text-center'},
        {key: 'status', label: '用户状态', class: 'text-center'},
        {key: 'user_status', label: '账号状态', class: 'text-center'},
        {key: 'action', label: '', class: 'text-center'}
      ],
      fans_fields: [
        {key: 'id', label: '用户账号', class: 'text-center'},
        {key: 'time', label: '用户时间', class: 'text-center'},
        {key: 'picture', label: '用户头像', class: 'text-center'},
        {key: 'name', label: '用户名称', class: 'text-center'},
        {key: 'product', label: '用户商品', class: 'text-center'},
        {key: 'type', label: '用户类型', class: 'text-center'},
        {key: 'status', label: '用户状态', class: 'text-center'},
        {key: 'user_status', label: '账号状态', class: 'text-center'},
        {key: 'action', label: '', class: 'text-center'}
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
          name: 'Jacket',
          status: '已下架',
          price: '¥222',
          delivery_status: '审核'
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
          time: '2020-08-01'
        },
        {
          select: '034',
          id: '123659898',
          picture: 'face2.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自运营',
          status: '活跃中',
          user_status: '正常',
          time: '2020-08-02'
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
          time: '2020-08-03'
        },
        {
          select: '034',
          id: '125416879',
          picture: 'face13.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自运营',
          status: '活跃中',
          user_status: '正常',
          time: '2020-08-04'
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
          time: '2020-08-05'
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
          time: '2020-08-06'
        },
        {
          select: '034',
          id: '125445679',
          picture: 'face13.jpg',
          name: 'Billionaire Boys',
          product: '80个',
          type: '自然',
          status: '活跃中',
          user_status: '正常',
          time: '2020-08-07'
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
      temp_orders: [],
      temp_users: [],
      temp_products: [],
      temp_favourites: [],
      temp_followers: [],
      temp_bought_orders: []
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
    getPictureUrl (pic) {
      return require('../../assets/images/faces/' + pic)
    },
    getProducts () {
      return this.temp_products.length
    },
    getOrders () {
      return this.temp_orders.length
    },
    getBoughtOrders () {
      return this.temp_bought_orders.length
    },
    getFavourites () {
      return this.temp_favourites.length
    },
    getFollowers () {
      return this.temp_followers.length
    },
    getFans () {
      return this.temp_users.length
    },
    search_order () {
      var month = ''
      var date = ''
      var startDate = ''
      var endDate = ''
      if (this.start_order_time !== '') {
        if (this.start_order_time.getMonth() + 1 < 10) {
          month = '0' + (this.start_order_time.getMonth() + 1)
        } else {
          month = this.start_order_time.getMonth() + 1
        }
        if (this.start_order_time.getDate() < 10) {
          date = '0' + this.start_order_time.getDate()
        } else {
          date = this.start_order_time.getDate()
        }
        startDate = this.start_order_time.getFullYear() + '-' + month + '-' + date
      }
      if (this.end_order_time !== '') {
        if (this.end_order_time.getMonth() + 1 < 10) {
          month = '0' + (this.end_order_time.getMonth() + 1)
        } else {
          month = this.end_order_time.getMonth() + 1
        }
        if (this.end_order_time.getDate() < 10) {
          date = '0' + this.end_order_time.getDate()
        } else {
          date = this.end_order_time.getDate()
        }
        endDate = this.end_order_time.getFullYear() + '-' + month + '-' + date
      }
      this.temp_orders = []
      if (startDate === '' && endDate === '') {
        this.orders.forEach(item => this.temp_orders.push(item))
      } else if (startDate === '') {
        this.orders.forEach(item => {
          if (item.time <= endDate) {
            this.temp_orders.push(item)
          }
        })
      } else if (endDate === '') {
        this.orders.forEach(item => {
          if (item.time >= startDate) {
            this.temp_orders.push(item)
          }
        })
      } else {
        this.orders.forEach(item => {
          if (item.time >= startDate && item.time <= endDate) {
            this.temp_orders.push(item)
          }
        })
      }
    },
    clear_order () {
      this.start_order_time = ''
      this.end_order_time = ''
      this.order_name = ''
      this.temp_orders = []
      this.orders.forEach(item => this.temp_orders.push(item))
    },
    search_bought_order () {
      var month = ''
      var date = ''
      var startDate = ''
      var endDate = ''
      if (this.start_bought_order_time !== '') {
        if (this.start_bought_order_time.getMonth() + 1 < 10) {
          month = '0' + (this.start_bought_order_time.getMonth() + 1)
        } else {
          month = this.start_bought_order_time.getMonth() + 1
        }
        if (this.start_bought_order_time.getDate() < 10) {
          date = '0' + this.start_bought_order_time.getDate()
        } else {
          date = this.start_bought_order_time.getDate()
        }
        startDate = this.start_bought_order_time.getFullYear() + '-' + month + '-' + date
      }
      if (this.end_bought_order_time !== '') {
        if (this.end_bought_order_time.getMonth() + 1 < 10) {
          month = '0' + (this.end_bought_order_time.getMonth() + 1)
        } else {
          month = this.end_bought_order_time.getMonth() + 1
        }
        if (this.end_bought_order_time.getDate() < 10) {
          date = '0' + this.end_bought_order_time.getDate()
        } else {
          date = this.end_bought_order_time.getDate()
        }
        endDate = this.end_bought_order_time.getFullYear() + '-' + month + '-' + date
      }
      this.temp_bought_orders = []
      if (startDate === '' && endDate === '') {
        this.orders.forEach(item => this.temp_bought_orders.push(item))
      } else if (startDate === '') {
        this.orders.forEach(item => {
          if (item.time <= endDate) {
            this.temp_bought_orders.push(item)
          }
        })
      } else if (endDate === '') {
        this.orders.forEach(item => {
          if (item.time >= startDate) {
            this.temp_bought_orders.push(item)
          }
        })
      } else {
        this.orders.forEach(item => {
          if (item.time >= startDate && item.time <= endDate) {
            this.temp_bought_orders.push(item)
          }
        })
      }
    },
    clear_bought_order () {
      this.start_bought_order_time = ''
      this.end_bought_order_time = ''
      this.bought_order_name = ''
      this.temp_bought_orders = []
      this.orders.forEach(item => this.temp_bought_orders.push(item))
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
      this.fans_name = ''
      this.temp_users = []
      this.users.forEach(item => this.temp_users.push(item))
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
    change_order () {
      this.temp_orders = []
      if (this.order_name === '') {
        this.orders.forEach(item => this.temp_orders.push(item))
      } else {
        this.orders.forEach(item => {
          if (item.id.includes(this.order_name) || item.buy.includes(this.order_name)) {
            this.temp_orders.push(item)
          }
        })
      }
    },
    change_bought_order () {
      this.temp_bought_orders = []
      if (this.bought_order_name === '') {
        this.orders.forEach(item => this.temp_bought_orders.push(item))
      } else {
        this.orders.forEach(item => {
          if (item.id.includes(this.bought_order_name) || item.buy.includes(this.bought_order_name)) {
            this.temp_bought_orders.push(item)
          }
        })
      }
    },
    change_favourites () {
      this.temp_favourites = []
      if (this.favourites_name === '') {
        this.items.forEach(item => this.temp_favourites.push(item))
      } else {
        this.items.forEach(item => {
          if (item.id.includes(this.favourites_name) || item.name.includes(this.favourites_name)) {
            this.temp_favourites.push(item)
          }
        })
      }
    },
    clear_favourites () {
      this.temp_favourites = []
      this.favourites_name = ''
      this.items.forEach(item => this.temp_favourites.push(item))
    },
    change_followers () {
      this.temp_followers = []
      if (this.followers_name === '') {
        this.users.forEach(item => this.temp_followers.push(item))
      } else {
        this.users.forEach(item => {
          if (item.id.includes(this.followers_name) || item.name.includes(this.followers_name)) {
            this.temp_followers.push(item)
          }
        })
      }
    },
    clear_followers () {
      this.temp_followers = []
      this.followers_name = ''
      this.users.forEach(item => this.temp_followers.push(item))
    },
    change_fans () {
      this.temp_users = []
      if (this.fans_name === '') {
        this.users.forEach(item => this.temp_users.push(item))
      } else {
        this.users.forEach(item => {
          if (item.id.includes(this.fans_name) || item.name.includes(this.fans_name)) {
            this.temp_users.push(item)
          }
        })
      }
    },
    clear_product () {
      this.product_name = ''
      this.temp_products = []
      this.items.forEach(item => this.temp_products.push(item))
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'user-detail')
    this.orders.forEach(item => {
      this.temp_orders.push(item)
      this.temp_bought_orders.push(item)
    })
    this.users.forEach(item => this.temp_users.push(item))
    this.items.forEach(item => this.temp_products.push(item))
    this.items.forEach(item => this.temp_favourites.push(item))
    this.users.forEach(item => this.temp_followers.push(item))
    this.images = []
    this.items[0].images.forEach(item => this.images.push({name: item, alt: 'Model pictures'}))
  }
}
</script>

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
  font-size: 16px;
}

.normal-text {
  font-size: 16px;
}

.page-item button {
  border: none;
}
</style>
