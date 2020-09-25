<template lang="html">

  <section class="special-feature-detail">
    <div class="row">
      <div class="col-lg-12 grid-margin ">
        <div class="card" style="margin-bottom: 0; padding-bottom: 0">
          <div class="card-body main-card-body">
            <span style="font-size: 22px; font-weight: bold">特辑详情</span>
            <hr style="margin-left: auto; margin-right: auto; background-color: black;" />
            <div class="col-lg-10 offset-1">
              <!-- picture -->
              <div class="form-row" style="margin-bottom: 25px; position: relative">
                <label for="name" class="col-form-label"><b>特辑封面：</b></label>
                <div class="col-lg-10">
                  <img src="../../assets/images/product-images/computer1.jpg" style="width: 200px; height: 200px; margin-left: 20px;" />
                  <span style="color: red; position: absolute; bottom: 0; left: 250px;">（此处上传图片尺寸 1125*1125px）</span>
                  <a href="#" style="color: white; position: absolute; top: 70px; left: 100px; opacity: 0.8">替换</a>
                  <a href="#" style="color: white; position: absolute; top: 100px; left: 100px; opacity: 0.8">删除</a>
                </div>
              </div>
              <!-- name input -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>特辑名称：</b></label>
                <div class="col-lg-10 row justify-content-between" style="margin-left: 20px">
                  <b-form-input class="col-lg-11 text-input" type="text" id="number" placeholder="特辑名称" value="Billionaire Boys  经典回收到回复开始速度快"></b-form-input>
                  <a href="#" class="col-lg-1 edit-link">编辑</a>
                </div>
              </div>
              <!-- owner id input -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>特辑作者：</b></label>
                <div class="col-lg-10 row justify-content-between" style="margin-left: 20px">
                  <b-form-input class="col-lg-11 text-input" type="text" id="number" placeholder="特辑作者" value="2423424524"></b-form-input>
                  <a href="#" class="col-lg-1 edit-link">编辑</a>
                </div>
              </div>
              <!-- description input -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>特辑描述：</b></label>
                <div class="col-lg-10 justify-content-between row" style="margin-left: 20px">
                  <textarea class="form-control col-lg-11" style="font-size: 14px; line-height: 2em" maxlength="200" rows="5">刷卡电话卡和大白菜v吃点醋可对 电视看吃的烧烤吃点苦和成都哈彻底碎成和醋可对伤口擦出的甲壳虫寄生虫病就开始吃必胜客坚持才能到家考涅楚克觉得随处可见的长时间
吃得好就是白菜价的好身材比剪刀手才被傻逼才能睡穿紧身裤身边触手可及的变成卡车
不尝试你把曾经撒白菜价哈不经常撒娇催啊时间啊好看健身卡u嘻哈u上课
吃洒即可查看撒娇才能看撒娇你想啊碎粗啊所以才被瞌睡虫 </textarea>
                  <a href="#" class="col-lg-1 edit-link">编辑</a>
                </div>
              </div>

              <!-- status checkbox -->
              <div class="form-row" style="margin-bottom: 25px;">
                <label for="name" class="col-form-label"><b>审核状态：</b></label>
                <div class="col-lg-10 row justify-content-start" style="margin-left: 20px; margin-top: 5px;">
                  <b-form-radio-group v-model="status" @input="clickPass">
                    <b-form-radio value="未审核">未审核</b-form-radio>
                    <b-form-radio value="审核通过">审核通过</b-form-radio>
                    <b-form-radio value="审核未通过">审核未通过</b-form-radio>
                  </b-form-radio-group>
                </div>
              </div>
            </div>

            <b>绑定商品：</b>
            <div class="button-panel row" style="margin-bottom: 20px">
              <div class="search-box">
                <i class="fa fa-search search-icon"></i>
                <b-form-input class="search-input" placeholder="查询用户名称/商品货号" v-model="name" @input="change"></b-form-input>
              </div>
            </div>

            <!-- special feature quality buttons -->
            <div class="form-row" style="margin-bottom: 10px;">
              <div style="margin-left: 5px;">
                <label for="name" class="col-form-label" style="padding-bottom: 0; margin-bottom: 0"><b>商品风格：</b></label><br/>
                <label for="name" class="col-form-label" style="opacity: 0.5; padding-top: 0; margin-top: 0">(可多选)</label>
              </div>
              <div class="col-lg-10 d-flex justify-conetent-between">
                <button class="btn btn-dark" style="margin-right: 10px">简约</button>
                <button class="btn btn-secondary" style="margin-right: 10px">机能</button>
                <button class="btn btn-secondary" style="margin-right: 10px">高街</button>
                <button class="btn btn-secondary" style="margin-right: 10px">先锋</button>
                <button class="btn btn-secondary" style="margin-right: 10px">耆湖</button>
                <button class="btn btn-secondary" style="margin-right: 10px">日潮</button>
                <button class="btn btn-secondary" style="margin-right: 10px">复古</button>
                <button class="btn btn-secondary" style="padding-right: 10px">运动</button>
              </div>
            </div>

            <!-- special feature category buttons: 6 rows -->
            <div class="form-row" style="margin-bottom: 10px;">
              <div style="margin-left: 5px;">
                <label for="name" class="col-form-label" style="padding-bottom: 0; margin-bottom: 0"><b>商品类别：</b></label><br/>
                <label for="name" class="col-form-label" style="opacity: 0.5; padding-top: 0; margin-top: 0">(可多选)</label>
              </div>
              <div class="col-lg-10 d-flex justify-conetent-between">
                <button class="btn btn-dark" style="margin-right: 10px; padding-left: 13px; padding-right: 13px">鞋子</button>
                <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 13px; padding-right: 13px">休闲鞋</button>
                <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 13px; padding-right: 13px">运动鞋</button>
                <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 13px; padding-right: 13px">皮鞋</button>
                <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 13px; padding-right: 13px">凉鞋/拖鞋拖鞋</button>
                <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 13px; padding-right: 13px">高跟鞋</button>
                <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 13px; padding-right: 13px">平底鞋</button>
                <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 13px; padding-right: 13px">高跟鞋</button>
                <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 13px; padding-right: 13px">复古</button>
                <button class="btn btn-secondary" style="padding-left: 13px; padding-right: 13px">其他</button>
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
                <button class="btn btn-dark" style="margin-right: 10px; padding-left: 20px; padding-right: 20px">bearbrick</button>
                <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 20px; padding-right: 20px">lego</button>
                <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 20px; padding-right: 20px">kaws</button>
                <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 20px; padding-right: 20px">Daniel Arsham</button>
                <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 20px; padding-right: 20px">Supreme</button>
                <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 20px; padding-right: 20px">盲盒</button>
                <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 20px; padding-right: 20px">版画</button>
                <button class="btn btn-secondary" style="margin-right: 10px; padding-left: 20px; padding-right: 20px">其他</button>
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

            <!-- table -->
            <b-table :fields="fields" :items="temp_items" id="product_table" :per-page="perPage" :current-page="currentPage" :responsive="true" :bordered="true" head-variant="light" style="margin-top: 30px;">
              <template v-slot:head()="data">
                <span class="font-weight-bold">{{data.label}}</span>
              </template>
              <template v-slot:cell(images)="data">
                <div class="products">
                  <span class="product" v-for="image in data.item.images" :key="image.id">
                    <img class="animation-product" :src="getImageUrl(image)" @click="image_click(data.item.id)" />
                  </span>
                </div>
              </template>
              <template v-slot:cell(action)="data">
                <button v-b-modal.modaldelete class="btn btn-outline" style="padding-left: 10px"><i class="fa fa-trash fa-2x" style="opacity: 0.8"></i></button>
              </template>
              <template v-slot:cell()="data">{{data.value}}</template>
            </b-table>
            <b-pagination align="center" class="col-lg-2 offset-5" v-model="currentPage" :total-rows="getProducts()" :per-page="perPage" aria-controls="product_table" style="margin-top: 20px"></b-pagination>
            <div style="padding-top: 20px">
              <button class="btn btn-dark btn-rounded" style="position: absolute; right: 180px">一键删除</button>
              <button v-b-modal.modalmd class="btn btn-dark btn-rounded" style="position: absolute; right: 50px">绑定商品</button>
            </div>
            <div class="justify-content-center row" style="padding-top: 100px; padding-bottom: 20px">
              <button class="btn btn-secondary btn-rounded btn-lg col-lg-3" style="margin-right: 20px"><strong style="font-size: 22px">取消</strong></button>
              <button class="btn btn-dark btn-rounded btn-lg col-lg-8" style=""><strong style="font-size: 22px">保存</strong></button>
            </div>

            <!-- 2 modals -->
            <b-modal ref="modalmd" id="modalmd" size="lg" centered hide-footer>
              <h2 class="text-center" style="font-weight: bold; padding-bottom: 20px">选择商品</h2>
              <div class="search-box row" style="margin-top: 20px; margin-left: 30px; margin-bottom: 10px">
                <i class="fa fa-search search-icon"></i>
                <b-form-input class="search-input" placeholder="查询用户名称/商品货号"></b-form-input>
              </div>
              <!-- special feature quality buttons -->
              <div class="form-row" style="margin-bottom: 10px;">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="padding-bottom: 0; margin-bottom: 0"><b>商品风格：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0.5; padding-top: 0; margin-top: 0">(可多选)</label>
                </div>
                <div class="col-lg-10 d-flex justify-conetent-between">
                  <button class="btn btn-dark" style="margin-right: 10px">简约</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">机能</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">高街</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">先锋</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">耆湖</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">日潮</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">复古</button>
                  <button class="btn btn-secondary" style="padding-right: 10px">运动</button>
                </div>
              </div>

              <!-- special feature category buttons: 6 rows -->
              <div class="form-row" style="margin-bottom: 10px;">
                <div style="margin-left: 5px;">
                  <label for="name" class="col-form-label" style="padding-bottom: 0; margin-bottom: 0"><b>商品类别：</b></label><br/>
                  <label for="name" class="col-form-label" style="opacity: 0.5; padding-top: 0; margin-top: 0">(可多选)</label>
                </div>
                <div class="col-lg-10 d-flex justify-conetent-between">
                  <button class="btn btn-dark" style="margin-right: 10px">鞋子</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">休闲鞋</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">运动鞋</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">皮鞋</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">凉鞋/拖鞋拖鞋</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">高跟鞋</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">平底鞋</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">高跟鞋</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">复古</button>
                  <button class="btn btn-secondary" style="padding-right: 10px">其他</button>
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
                  <button class="btn btn-dark" style="margin-right: 10px">bearbrick</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">lego</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">kaws</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">Daniel Arsham</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">Supreme</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">盲盒</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">版画</button>
                  <button class="btn btn-secondary" style="margin-right: 10px">其他</button>
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

              <!-- table -->
              <b-table :fields="fields" :items="temp_items" id="product_table" :per-page="perPage" :current-page="currentPage" :responsive="true" :bordered="true" head-variant="light" style="margin-top: 30px;">
                <template v-slot:head()="data">
                  <span class="font-weight-bold">{{data.label}}</span>
                </template>
                <template v-slot:cell(images)="data">
                  <div class="products">
                    <span class="product" v-for="image in data.item.images" :key="image.id">
                      <img class="animation-product" :src="getImageUrl(image)" />
                    </span>
                  </div>
                </template>
                <template v-slot:cell(action)="data">
                  <button v-b-modal.modaldelete class="btn btn-outline" style="padding-left: 10px"><i class="fa fa-trash fa-2x" style="opacity: 0.8"></i></button>
                </template>
                <template v-slot:cell()="data">{{data.value}}</template>
              </b-table>
              <b-pagination align="center" class="col-lg-2 offset-5" v-model="currentPage" :total-rows="getProducts()" :per-page="perPage" aria-controls="product_table" style="margin-top: 20px"></b-pagination>
              <div class="row justify-content-md-center" style="margin-top: 30px">
                <button class="btn btn-secondary col-lg-2" style="margin-right: 20px; border-radius: 20px"><strong>取消</strong></button>
                <button class="btn btn-dark col-lg-2" style="border-radius: 20px"><strong>确定</strong></button>
              </div>
            </b-modal>
            <b-modal id="modaldelete" size="md" centered hide-footer>
              <h2 class="text-center" style="font-weight: bold; padding-bottom: 20px">确认删除</h2>
              <h4 class="text-center" style="padding-bottom: 20px">确认删除商品后不可恢复</h4>
              <div class="row" style="justify-content-center">
                <button class="btn btn-secondary col-lg-4 offset-1" style="border-radius: 20px"><strong>取消</strong></button>
                <button class="btn btn-dark col-lg-4 offset-2" style="border-radius: 20px"><strong>确定</strong></button>
              </div>
            </b-modal>
            <b-modal ref="modalpass" id="modalpass" size="md" centered hide-footer>
              <h2 class="text-center" style="font-weight: bold; padding-bottom: 20px">审核不通过</h2>
              <div class="row" style="margin-left: 20px">
                <b-form-radio-group>
                  <b-form-radio class="col-lg-12" value="特辑图片内容不符合"><h4>特辑图片内容不符合</h4></b-form-radio>
                  <b-form-radio class="col-lg-12" value="图文涉及敏感字眼，黄色暴力等词汇"><h4>图文涉及敏感字眼，黄色暴力等词汇</h4></b-form-radio>
                  <b-form-radio class="col-lg-12" value="图片质量过低"><h4>图片质量过低</h4></b-form-radio>
                  <b-form-radio class="col-lg-12" value="其他"><h4>其他</h4></b-form-radio>
                </b-form-radio-group>
              </div>
              <textarea class="form-control col-lg-11" style="font-size: 12px; line-height: 2em; margin-left: 20px; margin-bottom: 20px" maxlength="200" rows="5"></textarea>
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
import Lightbox from 'vue-my-photos'
export default {
  name: 'special-feature-detail',
  components: {
    Lightbox
  },
  data () {
    return {
      images_dir: '/static/img/',
      images: [],
      status: '未审核',
      perPage: 5,
      currentPage: 1,
      fields: [
        {key: 'id', label: '商品ID', class: 'text-center'},
        {key: 'images', label: '商品图片', class: 'text-center'},
        {key: 'brand', label: '商品品牌', class: 'text-center'},
        {key: 'name', label: '商品名称', class: 'text-center'},
        {key: 'status', label: '商品状态', class: 'text-center'},
        {key: 'price', label: '价格', class: 'text-center'},
        {key: 'delivery_status', label: '审核状态', class: 'text-center'},
        {key: 'action', label: '操作', class: 'text-center'}
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
      temp_items: [],
      name: ''
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
      return this.temp_items.length
    },
    getUsers () {
      return this.users.length
    },
    clickPass () {
      if (this.status === '审核未通过') {
        this.$refs['modalpass'].show()
      }
    },
    change () {
      this.temp_items = []
      if (this.name === '') {
        this.items.forEach(item => this.temp_items.push(item))
      } else {
        this.items.forEach(item => {
          if (item.id.includes(this.name) || item.name.includes(this.name)) {
            this.temp_items.push(item)
          }
        })
      }
    },
    clear () {
      this.name = ''
      this.temp_items = []
      this.items.forEach(item => this.temp_items.push(item))
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'special-feature-detail')
    this.items.forEach(item => this.temp_items.push(item))
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

.animation-product[data-v-1ffceb93]:hover {
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
