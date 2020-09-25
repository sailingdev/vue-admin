<template lang="html">

  <section class="user-list">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <span class="card-title" style="font-size: 22px"><b>运营详情</b></span>
            <hr style="margin-left: auto; margin-right: auto; background-color: black;" />
            <!-- buttons for management filtering: 1 row -->
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" style="opacity: 0.7;">全部订单 (2313)</b-button>&nbsp;&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button">待付款 (235)</b-button>&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button">待发货 (235)</b-button>
            <b-button variant="dark" class="btn-fw btn-rounded normal-button">待收货 (2313)</b-button>&nbsp;&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button">已完成 (235)</b-button>&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button">已取消 (212)</b-button>

            <!-- search input and buttons: 1 row -->
            <div class="button-panel row">
                <div class="search-box">
                    <i class="fa fa-search search-icon"></i>
                    <b-form-input class="search-input" placeholder="查询用户名称/用户ID"></b-form-input>
                </div>
                <div class="row">
                    <span class="normal-label">开始时间：</span>
                    <datepicker placeholder="请选择开始时间" format="yyyy-MM-dd"></datepicker>
                </div>&nbsp;&nbsp;&nbsp;
                <div class="row">
                    <span class="normal-label">结束时间：</span>
                    <datepicker class="my-datepicker" placeholder="请选择结束时间" format="yyyy-MM-dd"></datepicker>
                </div>
                <div style="position: absolute; right: 30px">
                    <b-button variant="dark" class="btn-rounded"><span style="font-size: 16px">查找</span></b-button>&nbsp;
                    <b-button variant="secondary" class="btn-rounded"><span style="font-size: 16px">清空</span></b-button>
                </div>
            </div>

            <!-- manangement table -->
            <div class="table-responsive" style="padding-top: 10px;">
              <table id="management_table" class="table center-aligned-table" style="text-align: center">
                <thead>
                  <tr>
                    <th class="border-bottom-0" style="width: 3%;"><b>全选</b></th>
                    <th class="border-bottom-0" style="width: 20%;"><b>创建时间</b></th>
                    <th class="border-bottom-0" style="width: 20%;"><b>发布时间</b></th>
                    <th class="border-bottom-0" style="width: 10%;"><b>推送名称</b></th>
                    <th class="border-bottom-0" style="width: 10%;"><b>推送类型</b></th>
                    <th class="border-bottom-0" style="width: 10%;"><b>推送设备</b></th>
                    <th class="border-bottom-0" style="width: 10%"><b>发送状态</b></th>
                    <th class="border-bottom-0" style="width: 7%"><b>操作</b></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="management in managements" :key="management.id">
                    <td><input type="checkbox" true-value="yes" false-value="no"></td>
                    <td>{{management.id}}</td>
                    <td>{{management.time}}</td>
                    <td>{{management.name}}</td>
                    <td>{{management.category}}</td>
                    <td><label>{{management.device}}</label></td>
                    <td><label :style="[management.status == '待发布' ? {color: 'red'} : {color: 'green'}]">{{management.status}}</label></td>
                    <td><b-button variant="dark" class="btn-fw" @click="$router.push('../management-detail')">查看洋情</b-button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <b-pagination align="center" class="col-lg-2 offset-5" v-model="currentPage" :total-rows="getManagements()" :per-page="perPage" aria-controls="management_table" style="margin-top: 20px"></b-pagination>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'management-detail',
  components: { Datepicker },
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      managements: [
        {
          id: '45685229878',
          time: '2020-08-07',
          name: '小小商贩市场发生在v饭',
          category: '特辑',
          device: 'IOS',
          status: '已发布'
        },
        {
          id: '45685239878',
          time: '2020-08-07',
          name: '小小商贩⬆️都是犯的错',
          category: '专栏',
          device: '安卓',
          status: '定时发布'
        },
        {
          id: '45683239878',
          time: '2020-08-07',
          name: '小小商贩市场发生在v饭',
          category: '商品',
          device: '全部',
          status: '已发布'
        },
        {
          id: '45621229878',
          time: '2020-08-07',
          name: '小小商贩⬆️都是犯的错',
          category: '活动H5',
          device: 'IOS',
          status: '待发布'
        },
        {
          id: '45685329878',
          time: '2020-08-07',
          name: '小小商贩市场发生在v饭',
          category: '纯文字',
          device: '安卓',
          status: '已发布'
        },
        {
          id: '45683569878',
          time: '2020-08-07',
          name: '小小商贩⬆️都是犯的错',
          category: '特辑',
          device: 'IOS',
          status: '已发布'
        },
        {
          id: '45686539878',
          time: '2020-08-07',
          name: '小小商贩市场发生在v饭',
          category: '专栏',
          device: '全部',
          status: '待发布'
        }
      ]
    }
  },
  methods: {
    getManagements () {
      return this.managements.length
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'management-detail')
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
