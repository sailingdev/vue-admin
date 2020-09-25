<template lang="html">

  <section class="user-list">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <span style="font-size: 22px; font-weight: bold">订单管理</span>
            <hr style="margin-left: auto; margin-right: auto; background-color: black;" />
            <!-- buttons for order filtering: 1 row -->
            <b-button variant="secondary" class="btn-fw btn-rounded normal-button" @click="all">全部订单 (2313)</b-button>&nbsp;&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="pending">待付款 (235)</b-button>&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="delivering">待发货 (235)</b-button>
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="receiving">待收货 (2313)</b-button>&nbsp;&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="completed">已完成 (235)</b-button>&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="cancelled">已取消 (212)</b-button>

            <!-- search input and buttons: 1 row -->
            <div class="button-panel row">
                <div class="search-box">
                    <i class="fa fa-search search-icon"></i>
                    <b-form-input class="search-input" placeholder="查询订单编号/买卖方用户名" v-model="name" @input="change"></b-form-input>
                </div>
                <div class="row">
                    <span class="normal-label">开始时间：</span>
                    <datepicker placeholder="请选择开始时间" format="yyyy-MM-dd" v-model="start_time"></datepicker>
                </div>&nbsp;&nbsp;&nbsp;
                <div class="row">
                    <span class="normal-label">结束时间：</span>
                    <datepicker class="my-datepicker" placeholder="请选择结束时间" format="yyyy-MM-dd" v-model="end_time"></datepicker>
                </div>
                <div style="position: absolute; right: 30px">
                    <b-button variant="dark" class="btn-rounded"><span style="font-size: 16px" @click="search">查找</span></b-button>&nbsp;
                    <b-button variant="secondary" class="btn-rounded"><span style="font-size: 16px" @click="clear">清空</span></b-button>
                </div>
            </div>

            <!-- order table -->
            <b-table :fields="fields" :items="items" id="order_table" :per-page="perPage" :current-page="currentPage" :responsive="true" :bordered="true" head-variant="light" style="margin-top: 30px;">
              <template v-slot:head()="data">
                <span class="font-weight-bold">{{data.label}}</span>
              </template>
              <template v-slot:cell(index)="data">
                <input type="checkbox" true-value="yes" false-value="no" />
              </template>
              <template v-slot:cell(method)="data">
                <label :style="[data.item.method == '零钱包' ? {opacity: 0.4} : {opacity: 1}]">{{data.item.method}}</label>
              </template>
              <template v-slot:cell(action)="data">
                <b-button variant="dark" class="btn-fw" @click="$router.push('../order-detail')">查看洋情</b-button>
              </template>
              <template v-slot:cell()="data">{{data.value}}</template>
            </b-table>
            <b-pagination align="center" class="col-md-2 offset-md-5" v-model="currentPage" :total-rows="getOrders()" :per-page="perPage" aria-controls="order_table" style="margin-top: 20px"></b-pagination>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'order-list',
  components: { Datepicker },
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      name: '',
      fields: [
        {key: 'index', label: '全选', class: 'text-center'},
        {key: 'id', label: '订单编号', class: 'text-center'},
        {key: 'time', label: '提交时间', class: 'text-center'},
        {key: 'sell', label: '卖家名称', class: 'text-center'},
        {key: 'buy', label: '买家名称', class: 'text-center'},
        {key: 'status', label: '订单状态', class: 'text-center'},
        {key: 'price', label: '订单金额', class: 'text-center'},
        {key: 'method', label: '支付方式', class: 'text-center'},
        {key: 'action', label: '操作', class: 'text-center'}
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
          status: '待发货',
          price: '¥222',
          method: '零钱包'
        },
        {
          id: '45621229878',
          time: '2020-08-04',
          sell: '小小尚贩',
          buy: 'WISHIS',
          status: '待付款',
          price: '¥222',
          method: '支付宝'
        },
        {
          id: '45685329878',
          time: '2020-08-05',
          sell: '小小尚贩',
          buy: 'WISHIS',
          status: '待收货',
          price: '¥222',
          method: '零钱包'
        },
        {
          id: '45683569878',
          time: '2020-08-06',
          sell: '小小尚贩',
          buy: 'WISHIS',
          status: '已取消',
          price: '¥222',
          method: '零钱包'
        },
        {
          id: '45686539878',
          time: '2020-08-07',
          sell: '小小尚贩',
          buy: 'WISHIS',
          status: '已完成',
          price: '¥222',
          method: '零钱包'
        },
        {
          id: '45689939878',
          time: '2020-08-08',
          sell: '小小尚贩',
          buy: 'WISHIS',
          status: '已完成',
          price: '¥222',
          method: '零钱包'
        },
        {
          id: '11686539878',
          time: '2020-08-08',
          sell: '小小尚贩',
          buy: 'WISHIS',
          status: '待付款',
          price: '¥222',
          method: '零钱包'
        },
        {
          id: '45631539878',
          time: '2020-08-09',
          sell: '小小尚贩',
          buy: 'WISHIS',
          status: '已待发货完成',
          price: '¥222',
          method: '零钱包'
        }
      ],
      items: [],
      start_time: '',
      end_time: ''
    }
  },
  methods: {
    getOrders () {
      return this.items.length
    },
    all () {
      this.items = []
      this.orders.forEach(order => {
        this.items.push(order)
      })
    },
    pending () {
      this.items = []
      this.orders.forEach(order => {
        if (order.status === '待付款') {
          this.items.push(order)
        }
      })
    },
    delivering () {
      this.items = []
      this.orders.forEach(order => {
        if (order.status === '待发货') {
          this.items.push(order)
        }
      })
    },
    receiving () {
      this.items = []
      this.orders.forEach(order => {
        if (order.status === '待收货') {
          this.items.push(order)
        }
      })
    },
    completed () {
      this.items = []
      this.orders.forEach(order => {
        if (order.status === '已完成') {
          this.items.push(order)
        }
      })
    },
    cancelled () {
      this.items = []
      this.orders.forEach(order => {
        if (order.status === '已取消') {
          this.items.push(order)
        }
      })
    },
    search () {
      var month = ''
      var date = ''
      var startDate = ''
      var endDate = ''
      if (this.start_time !== '') {
        if (this.start_time.getMonth() + 1 < 10) {
          month = '0' + (this.start_time.getMonth() + 1)
        } else {
          month = this.start_time.getMonth() + 1
        }
        if (this.start_time.getDate() < 10) {
          date = '0' + this.start_time.getDate()
        } else {
          date = this.start_time.getDate()
        }
        startDate = this.start_time.getFullYear() + '-' + month + '-' + date
      }
      if (this.end_time !== '') {
        if (this.end_time.getMonth() + 1 < 10) {
          month = '0' + (this.end_time.getMonth() + 1)
        } else {
          month = this.end_time.getMonth() + 1
        }
        if (this.end_time.getDate() < 10) {
          date = '0' + this.end_time.getDate()
        } else {
          date = this.end_time.getDate()
        }
        endDate = this.end_time.getFullYear() + '-' + month + '-' + date
      }
      this.items = []
      if (startDate === '' && endDate === '') {
        this.orders.forEach(item => this.items.push(item))
      } else if (startDate === '') {
        this.orders.forEach(item => {
          if (item.time <= endDate) {
            this.items.push(item)
          }
        })
      } else if (endDate === '') {
        this.orders.forEach(item => {
          if (item.time >= startDate) {
            this.items.push(item)
          }
        })
      } else {
        this.orders.forEach(item => {
          if (item.time >= startDate && item.time <= endDate) {
            this.items.push(item)
          }
        })
      }
    },
    clear () {
      this.start_time = ''
      this.end_time = ''
      this.items = []
      this.name = ''
      this.orders.forEach(item => this.items.push(item))
    },
    change () {
      this.items = []
      if (this.name === '') {
        this.orders.forEach(item => this.items.push(item))
      } else {
        this.orders.forEach(item => {
          if (item.id.includes(this.name) || item.sell.includes(this.name) || item.buy.includes(this.name)) {
            this.items.push(item)
          }
        })
      }
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'order-list')
    this.orders.forEach(order => this.items.push(order))
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

.page-item button {
  border: none;
}
</style>
