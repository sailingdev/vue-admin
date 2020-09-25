<template lang="html">

  <section class="user-list">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <!-- order table -->
            <span style="font-size: 22px; font-weight: bold">订单洋情</span>
            <div class="table-responsive" style="padding-top: 10px;">
              <table class="table center-aligned-table" style="text-align: center">
                <thead>
                  <tr>
                    <th class="border-bottom-0" style="width: 20%;"><b>订单编号</b></th>
                    <th class="border-bottom-0" style="width: 20%;"><b>提交时间</b></th>
                    <th class="border-bottom-0" style="width: 10%;"><b>卖家名称</b></th>
                    <th class="border-bottom-0" style="width: 10%;"><b>买家名称</b></th>
                    <th class="border-bottom-0" style="width: 10%;"><b>订单状态</b></th>
                    <th class="border-bottom-0" style="width: 10%"><b>订单金额</b></th>
                    <th class="border-bottom-0" style="width: 10%"><b>支付方式</b></th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background-color: #dee2e6;">
                    <td>45685229878</td>
                    <td>2020-08-07</td>
                    <td>小小尚贩</td>
                    <td>WISHIS</td>
                    <td>待付款</td>
                    <td>¥222</td>
                    <td>支付宝</td>
                  </tr>
                </tbody>
              </table>
            </div><br /><br />

            <!-- sell information -->
            <span class="card-title" style="font-size: 22px; font-weight: bold">物流洋情</span>
            <div class="row" style="padding-left: 100px">
              <span class="col-lg-2" style="font-size: 16px">物流单号</span>
              <span class="col-lg-2" style="font-size: 14px">韵达快递</span>
              <span class="col-lg-2" style="font-size: 14px">328749783323cxv</span>
            </div><br />
            <!-- timeline -->
            <div class="row" style="padding-left: 100px">
              <span class="col-lg-2" style="font-size: 16px">物流跟踪</span>
              <ul class="timeline col-lg-8">
                <li class="timeline-item"  v-for="timeline in timelines" :key="timeline.id">
                    <div class="timeline-info">
                        <span style="font-size: 14px">{{timeline.value}}</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content"></div>
                </li>
              </ul>
            </div>

            <!-- product information -->
            <span class="card-title" style="font-size: 22px; font-weight: bold">商品信息</span>
            <div class="table-responsive" style="padding-top: 10px">
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
                          <img class="animation-product" src="../../assets/images/product-images/model1.png" @click="image_click" />
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
            </div><br /><br />

            <!-- seller information -->
            <span class="card-title" style="padding-top: 30px; font-size: 22px; font-weight: bold">卖家信息</span>
            <div class="table-responsive">
              <table class="table center-aligned-table" style="text-align: center">
                <thead>
                  <tr>
                    <th class="border-bottom-0"><b>用户账号</b></th>
                    <th class="border-bottom-0"><b>用户头像</b></th>
                    <th class="border-bottom-0"><b>用户名称</b></th>
                    <th class="border-bottom-0"><b>用户商品</b></th>
                    <th class="border-bottom-0"><b>用户类型</b></th>
                    <th class="border-bottom-0"><b>用户状态</b></th>
                    <th class="border-bottom-0"><b>账号用户状态</b></th>
                    <th class="border-bottom-0">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background-color: #dee2e6;">
                    <td style="padding-bottom: 0; padding-top: 0">328749783</td>
                    <td style="padding-bottom: 0; padding-top: 0"><img src="../../assets/images/faces/face23.jpg" style="border-radius: 50%; width: 50%" /></td>
                    <td style="padding-bottom: 0; padding-top: 0">Billionaire Boys</td>
                    <td style="padding-bottom: 0; padding-top: 0">80个</td>
                    <td style="padding-bottom: 0; padding-top: 0">自然</td>
                    <td style="padding-bottom: 0; padding-top: 0"><label style="color: green; margin-bottom: 0">活跃中</label></td>
                    <td style="padding-bottom: 0; padding-top: 0"><label style="color: green; margin-bottom: 0">正常</label></td>
                    <td style="padding-bottom: 10px; padding-top: 10px"><b-button variant="dark" class="btn-fw">查看洋情</b-button></td>
                  </tr>
                </tbody>
              </table>
            </div><br /><br />

            <!-- customer information -->
            <span class="card-title" style="padding-top: 30px; font-size: 22px; font-weight: bold">买家信息</span>
            <div class="table-responsive">
              <table class="table center-aligned-table" style="text-align: center">
                <thead>
                  <tr>
                    <th class="border-bottom-0"><b>用户账号</b></th>
                    <th class="border-bottom-0"><b>用户头像</b></th>
                    <th class="border-bottom-0"><b>用户名称</b></th>
                    <th class="border-bottom-0"><b>用户商品</b></th>
                    <th class="border-bottom-0"><b>用户类型</b></th>
                    <th class="border-bottom-0"><b>用户状态</b></th>
                    <th class="border-bottom-0"><b>账号用户状态</b></th>
                    <th class="border-bottom-0">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background-color: #dee2e6;">
                    <td style="padding-bottom: 0; padding-top: 0">328749783</td>
                    <td style="padding-bottom: 0; padding-top: 0"><img src="../../assets/images/faces/face23.jpg" style="border-radius: 50%; width: 50%" /></td>
                    <td style="padding-bottom: 0; padding-top: 0">Billionaire Boys</td>
                    <td style="padding-bottom: 0; padding-top: 0">80个</td>
                    <td style="padding-bottom: 0; padding-top: 0">自然</td>
                    <td style="padding-bottom: 0; padding-top: 0"><label style="color: green; margin-bottom: 0">活跃中</label></td>
                    <td style="padding-bottom: 0; padding-top: 0"><label style="color: green; margin-bottom: 0">正常</label></td>
                    <td style="padding-bottom: 10px; padding-top: 10px"><b-button variant="dark" class="btn-fw">查看洋情</b-button></td>
                  </tr>
                </tbody>
              </table>
            </div><br /><br />

            <!-- receiver address -->
            <span class="card-title" style="padding-top: 30px; font-size: 22px; font-weight: bold">收货地址</span>
            <div class="table-responsive col-lg-8" style="padding-top: 10px;">
              <table class="table center-aligned-table" style="text-align: center">
                <thead>
                  <tr>
                    <th class="border-bottom-0" style="width: 30%;"><b>收货人</b></th>
                    <th class="border-bottom-0" style="width: 30%;"><b>电话号码</b></th>
                    <th class="border-bottom-0" style="width: 40%;"><b>详细地址</b></th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background-color: #dee2e6">
                    <td>阿豪</td>
                    <td>13287497833</td>
                    <td>北京市朝阳区呼家楼 安联大厦1702</td>
                  </tr>
                </tbody>
              </table>
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
  name: 'order-detail',
  components: { Lightbox },
  data () {
    return {
      images_dir: '/static/img/',
      timelines: [
        {id: 1, value: '快件派送不成功(已重新约定派送时间)，等待再次配送'},
        {id: 2, value: '快件派送不成功(已重新约定派送时间)，等待再次配送'},
        {id: 3, value: '快件派送不成功(已重新约定派送时间)，等待再次配送'},
        {id: 4, value: '快件派送不成功(已重新约定派送时间)，等待再次配送'},
        {id: 5, value: '卖家已发货'}
      ],
      images: []
    }
  },
  methods: {
    image_click () {
      this.images = []
      for (var i = 0; i < 4; i++) {
        this.images.push({name: 'model1.528c781.png', 'alt': 'Model images'})
      }
      this.$refs.lightbox.show(this.images[0].name)
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'order-detail')
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

.timeline {
  line-height: 0.8em;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

.timeline-item {
  padding-left: 40px;
  position: relative;
}

.timeline-info {
  font-size: 13px;
  letter-spacing: 3px;
  margin: 0 0 0.5em 0;
}

.timeline-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 10px;
  height: 70px;
  &:before {
    background: black;
    border-radius: 100%;
    content: "";
    display: block;
    height: 10px;
    position: absolute;
    top: 4px;
    left: 0;
    width: 10px;
    transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  }
  &:after {
    content: "";
    width: 1px;
    background: black;
    display: block;
    position: absolute;
    top: 10px;
    bottom: 0;
    left: 5px;
  }
  .timeline-item:last-child &:after {
    content: none;
  }
}

.timeline-content {
  padding-bottom: 40px;
  p:last-child {
    margin-bottom: 0;
  }
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

.animation-product[data-v-0794a653]:hover {
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
</style>
