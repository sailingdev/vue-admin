<template lang="html">

  <section class="field-list">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <span class="card-title" style="font-size: 22px">
              <b>专栏管理</b>
              <b-button variant="dark" class="btn-fw btn-rounded normal-button" style="position: absolute; right: 50px;" @click="$router.push('../field-upload')">发布新专栏</b-button>
            </span>
            <hr style="margin-left: auto; margin-right: auto; background-color: black;" />

            <b-button variant="secondary" class="btn-fw btn-rounded normal-button" @click="all">全部专栏（2313）</b-button>&nbsp;&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="passing">未审核（235）</b-button>&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="passed">审核通过（235）</b-button>&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="notPassed">审核未通过（235）</b-button>

            <div class="button-panel row">
                <div class="search-box">
                    <i class="fa fa-search search-icon"></i>
                    <b-form-input class="search-input" placeholder="查询专栏名称" v-model="name" @input="change"></b-form-input>
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

            <!-- field table -->
            <b-table :fields="headers" :items="items" id="field_table" :per-page="perPage" :current-page="currentPage" :responsive="true" :bordered="true" head-variant="light" style="margin-top: 30px;">
              <template v-slot:head()="data">
                <span class="font-weight-bold">{{data.label}}</span>
              </template>
              <template v-slot:cell(index)="data">
                <input type="checkbox" true-value="yes" false-value="no" />
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

            <!-- delete modal -->
            <b-modal id="modalmd" size="md" centered hide-footer>
              <h2 class="text-center" style="font-weight: bold; padding-bottom: 20px">确认删除</h2>
              <h4 class="text-center" style="padding-bottom: 20px">确认删除商品后不可恢复</h4>
              <div class="row" style="justify-content-center">
                <button class="btn btn-secondary col-md-4 offset-1" style="border-radius: 20px"><strong>取消</strong></button>
                <button class="btn btn-dark col-md-4 offset-2" style="border-radius: 20px"><strong>确定</strong></button>
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
  name: 'field-list',
  components: { Datepicker },
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      start_time: '',
      end_time: '',
      headers: [
        {key: 'index', label: '全选', class: 'text-center'},
        {key: 'name', label: '专栏名称', class: 'text-center'},
        {key: 'owner', label: '专栏简介', class: 'text-center'},
        {key: 'time', label: '上传时间', class: 'text-center'},
        {key: 'status', label: '状态', class: 'text-center'},
        {key: 'action', label: '操作', class: 'text-center'}
      ],
      fields: [
        {
          id: '45685229878',
          time: '2020-08-01',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '213个',
          status: '审核未通过'
        },
        {
          id: '45685239878',
          time: '2020-08-02',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '279个',
          status: '审核通过'
        },
        {
          id: '45683239878',
          time: '2020-08-03',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '222个',
          status: '审核未通过'
        },
        {
          id: '45621229878',
          time: '2020-08-04',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '237个',
          status: '审核通过'
        },
        {
          id: '45685329878',
          time: '2020-08-05',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '300个',
          status: '审核未通过'
        },
        {
          id: '45683569878',
          time: '2020-08-06',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '123个',
          status: '审核通过'
        },
        {
          id: '45686539878',
          time: '2020-08-07',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '223个',
          status: '审核未通过'
        }
      ],
      items: [],
      name: ''
    }
  },
  methods: {
    getFields () {
      return this.items.length
    },
    all () {
      this.items = []
      this.fields.forEach(item => this.items.push(item))
    },
    passing () {
      this.items = []
      this.fields.forEach(item => {
        if (item.status === '审核中') {
          this.items.push(item)
        }
      })
    },
    passed () {
      this.items = []
      this.fields.forEach(item => {
        if (item.status === '审核通过') {
          this.items.push(item)
        }
      })
    },
    notPassed () {
      this.items = []
      this.fields.forEach(item => {
        if (item.status === '审核未通过') {
          this.items.push(item)
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
        this.fields.forEach(item => this.items.push(item))
      } else if (startDate === '') {
        this.fields.forEach(item => {
          if (item.time <= endDate) {
            this.items.push(item)
          }
        })
      } else if (endDate === '') {
        this.fields.forEach(item => {
          if (item.time >= startDate) {
            this.items.push(item)
          }
        })
      } else {
        this.fields.forEach(item => {
          if (item.time >= startDate && item.time <= endDate) {
            this.items.push(item)
          }
        })
      }
      console.log(startDate, endDate)
    },
    clear () {
      this.start_time = ''
      this.end_time = ''
      this.items = []
      this.name = ''
      this.fields.forEach(item => this.items.push(item))
    },
    change () {
      this.items = []
      if (this.name === '') {
        this.fields.forEach(item => this.items.push(item))
      } else {
        this.fields.forEach(item => {
          if (item.name.includes(this.name)) {
            this.items.push(item)
          }
        })
      }
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'field-list')
    this.fields.forEach(item => this.items.push(item))
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
