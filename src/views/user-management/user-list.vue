<template lang="html">

  <section class="user-list">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <span class="card-title" style="font-size: 22px"><b>用户管理</b></span>
            <hr style="margin-left: auto; margin-right: auto; background-color: black;" />
            <b-button variant="secondary" class="btn-fw btn-rounded" @click="all"><span style="font-size: 16px">全部用户 (2313)</span></b-button>&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded" @click="nature"><span style="font-size: 16px">自然用户 (235)</span></b-button>&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded" @click="management"><span style="font-size: 16px">自运营用户 (235)</span></b-button>
            <div style="float: right; text-align: right; padding-top: 10px;"><span style="font-size: 16px">注明: 用户排序 封号最底下 然后不活跃 然后正常然后活跃中</span></div>

            <div class="button-panel row">
              <div class="search-box">
                <i class="fa fa-search search-icon"></i>
                <b-form-input class="search-input" placeholder="查询用户名称/用户ID" v-model="name" @input="change"></b-form-input>
              </div>
              <div class="row">
                <span class="normal-label">开始时间：</span>
                <datepicker placeholder="请选择开始时间" format="yyyy-MM-dd" v-model="start_time"></datepicker>
              </div>&nbsp;&nbsp;&nbsp;
              <div class="row">
                <span class="normal-label">结束时间：</span>
                <datepicker placeholder="请选择结束时间" format="yyyy-MM-dd" v-model="end_time"></datepicker>
              </div>
              <div style="position: absolute; right: 30px">
                <b-button variant="dark" class="btn-rounded"><span style="font-size: 16px" @click="search">查找</span></b-button>&nbsp;
                <b-button variant="secondary" class="btn-rounded"><span style="font-size: 16px" @click="clear">清空</span></b-button>
              </div>
            </div><br /><br />

            <!-- user table -->
            <b-table :fields="fields" :items="users" id="user_table" :per-page="perPage" :current-page="currentPage" :responsive="true" :bordered="true" head-variant="light">
              <template v-slot:head()="data">
                <span class="font-weight-bold">{{data.label}}</span>
              </template>
              <template v-slot:cell(index)="data">
                <input type="checkbox" true-value="yes" false-value="no" :checked="data.item.selected" @change="data.item.selected=!data.item.selected">
              </template>
              <template v-slot:cell(picture)="data">
                <img :src="getImageUrl(data.item.picture)" style="border-radius: 50%; width: 50%" />
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
            <b-pagination variany="dark" align="center" v-model="currentPage" :total-rows="rows()" :per-page="perPage" aria-controls="user_table" style="margin-top: 10px"></b-pagination>
            <div class="col-lg-6 offset-6 row justify-content-end" style="padding-top: 20px">
              <b-button v-b-modal.modalmd variant="dark" class="btn-fw btn-rounded normal-button">一键处理</b-button>
            </div>

            <b-modal id="modalmd" ref="modalmd" size="md" centered hide-footer>
              <h2 class="text-center" style="font-weight: bold; padding-bottom: 20px">一键处理</h2>
              <h4 class="text-center" style="padding-bottom: 20px">确定要一键处理举报反馈吗？</h4>
              <div class="row" style="justify-content-center">
                <button class="btn btn-secondary col-lg-4 offset-1" style="border-radius: 20px" @click="batch_process_cancel"><strong>无效举报</strong></button>
                <button class="btn btn-dark col-lg-4 offset-2" style="border-radius: 20px" @click="batch_process_ok"><strong>有效举报</strong></button>
              </div>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'user-list',
  components: {
    Datepicker
  },
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      start_time: '',
      end_time: '',
      fields: [
        { key: 'index', label: '全选', class: 'text-center' },
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
          name: 'Millionaire Boys',
          product: '80个',
          type: '自运营',
          status: '活跃中',
          user_status: '正常',
          time: '2020-08-02',
          selected: false
        },
        {
          select: '034',
          id: '4556552982',
          picture: 'face8.jpg',
          name: 'Trillionaire Boys',
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
          status: '活跃中',
          user_status: '正常',
          time: '2020-08-04',
          selected: false
        },
        {
          select: '034',
          id: '159785646',
          picture: 'face23.jpg',
          name: 'Millionaire Boys',
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
          name: 'Trillionaire Boys',
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
          status: '活跃中',
          user_status: '正常',
          time: '2020-08-07',
          selected: false
        },
        {
          select: '034',
          id: '1597878946',
          picture: 'face23.jpg',
          name: 'Trillionaire Boys',
          product: '80个',
          type: '自运营',
          status: '不活跃',
          user_status: '已封号',
          time: '2020-08-08',
          selected: false
        }
      ],
      users: [],
      name: ''
    }
  },
  methods: {
    batch_process_ok () {
      this.items.forEach(item => {
        if (item.selected) {
          if (item.status === '不活跃') {
            item.status = '活跃中'
            item.selected = false
          }
        }
      })
      this.$refs['modalmd'].hide()
    },
    batch_process_cancel () {
      this.$refs['modalpass'].hide()
      this.items.forEach(item => {
        item.selected = false
      })
    },
    getImageUrl (pic) {
      return require('../../assets/images/faces/' + pic)
    },
    rows () {
      return this.users.length
    },
    all () {
      this.users = []
      this.items.forEach(item => this.users.push(item))
    },
    nature () {
      this.users = []
      this.items.forEach(item => {
        if (item.type === '自然') {
          this.users.push(item)
        }
      })
    },
    management () {
      this.users = []
      this.items.forEach(item => {
        if (item.type === '自运营') {
          this.users.push(item)
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
      this.users = []
      if (startDate === '' && endDate === '') {
        this.items.forEach(item => this.users.push(item))
      } else if (startDate === '') {
        this.items.forEach(item => {
          if (item.time <= endDate) {
            this.users.push(item)
          }
        })
      } else if (endDate === '') {
        this.items.forEach(item => {
          if (item.time >= startDate) {
            this.users.push(item)
          }
        })
      } else {
        this.items.forEach(item => {
          if (item.time >= startDate && item.time <= endDate) {
            this.users.push(item)
          }
        })
      }
    },
    clear () {
      this.start_time = ''
      this.end_time = ''
      this.name = ''
      this.users = []
      this.items.forEach(item => this.users.push(item))
    },
    change () {
      this.users = []
      if (this.name === '') {
        this.items.forEach(item => this.users.push(item))
      } else {
        this.items.forEach(item => {
          if (item.id.includes(this.name) || item.name.includes(this.name)) {
            this.users.push(item)
          }
        })
      }
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'user-list')
    this.items.forEach(item => this.users.push(item))
  }
}
</script>

<style lang="scss">
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
  padding-top: 20px;
}

.normal-label {
  padding: 10px 0 0 20px;
}

.normal-text {
  font-size: 14px;
  margin-top: 2px;
}

.normal-button {
  height: 40px;
}

.page-item button {
  border: none;
}
</style>
