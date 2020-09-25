<template lang="html">

  <section class="special-feature-list">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <span style="font-size: 22px; font-weight: bold">特辑管理</span>
            <hr style="margin-left: auto; margin-right: auto; background-color: black;" />

            <b-button variant="secondary" class="btn-fw btn-rounded normal-button" @click="all">全部特辑（2313）</b-button>&nbsp;&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="passing">未审核（235）</b-button>&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="passed">审核通过（235）</b-button>
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="notPassed">审核未通过（235）</b-button>&nbsp;&nbsp;&nbsp;

            <!-- search input and datetime pickers -->
            <b-table :fields="fields" :items="items" id="special_feature_table" :per-page="perPage" :current-page="currentPage" :responsive="true" :bordered="true" head-variant="light" style="margin-top: 30px;">
              <template v-slot:head()="data">
                <span class="font-weight-bold">{{data.label}}</span>
              </template>
              <template v-slot:cell(index)="data">
                <input type="checkbox" true-value="yes" false-value="no" :checked="data.item.selected" @change="data.item.selected=!data.item.selected" />
              </template>
              <template v-slot:cell(status)="data">
                <label :style="[data.item.status == '审核未通过' ? {color: 'red'} : data.item.status == '审核通过' ? {color: 'green'} : {opacity: 0.3}]">{{data.item.status}}</label>
              </template>
              <template v-slot:cell(action)="data">
                <b-button variant="dark" class="btn-fw" @click="$router.push('../special-feature-detail')">查看洋情</b-button>
              </template>
              <template v-slot:cell()="data">{{data.value}}</template>
            </b-table>
            <b-pagination align="center" class="col-lg-2 offset-md-5" v-model="currentPage" :total-rows="getSpecials()" :per-page="perPage" aria-controls="special_feature_table" style="margin-top: 20px"></b-pagination>
            <div class="col-lg-6 offset-6 row justify-content-end" style="padding-top: 20px">
              <b-button v-b-modal.modalmd variant="dark" class="btn-fw btn-rounded normal-button">一键处理</b-button>
            </div>
            <b-modal ref="modalmd" id="modalmd" size="md" centered hide-footer>
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
  name: 'special-feature-list',
  components: { Datepicker },
  data () {
    return {
      currentPage: 1,
      perPage: 5,
      start_time: '',
      end_time: '',
      fields: [
        {key: 'index', label: '全选', class: 'text-center'},
        {key: 'id', label: '特辑编号', class: 'text-center'},
        {key: 'time', label: '提交时间', class: 'text-center'},
        {key: 'name', label: '特辑名称', class: 'text-center'},
        {key: 'owner', label: '特辑作者', class: 'text-center'},
        {key: 'quantity', label: '特辑商品数', class: 'text-center'},
        {key: 'status', label: '审核状态', class: 'text-center'},
        {key: 'action', label: '操作', class: 'text-center'}
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
          status: '审核通过',
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
          status: '审核中',
          selected: false
        },
        {
          id: '45685329878',
          time: '2020-08-05',
          name: '小小商贩市场发生在v饭',
          owner: 'WISHIS',
          quantity: '213个',
          status: '审核中',
          selected: false
        },
        {
          id: '45683569878',
          time: '2020-08-06',
          name: '小小商贩市场发生在v饭',
          owner: 'SAJCDFEJ',
          quantity: '189个',
          status: '审核通过',
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
      items: [],
      name: ''
    }
  },
  methods: {
    batch_process_ok () {
      this.special_features.forEach(item => {
        if (item.selected) {
          if (item.status === '审核未通过') {
            item.status = '审核通过'
            item.selected = false
          }
        }
      })
      this.$refs['modalmd'].hide()
    },
    batch_process_cancel () {
      this.$refs['modalmd'].hide()
      this.special_features.forEach(item => {
        item.selected = false
      })
    },
    getSpecials () {
      return this.items.length
    },
    all () {
      this.items = []
      this.special_features.forEach(item => this.items.push(item))
    },
    passing () {
      this.items = []
      this.special_features.forEach(item => {
        if (item.status === '审核中') {
          this.items.push(item)
        }
      })
    },
    passed () {
      this.items = []
      this.special_features.forEach(item => {
        if (item.status === '审核通过') {
          this.items.push(item)
        }
      })
    },
    notPassed () {
      this.items = []
      this.special_features.forEach(item => {
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
        this.special_features.forEach(item => this.items.push(item))
      } else if (startDate === '') {
        this.special_features.forEach(item => {
          if (item.time <= endDate) {
            this.items.push(item)
          }
        })
      } else if (endDate === '') {
        this.special_features.forEach(item => {
          if (item.time >= startDate) {
            this.items.push(item)
          }
        })
      } else {
        this.special_features.forEach(item => {
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
      this.special_features.forEach(item => this.items.push(item))
    },
    change () {
      this.items = []
      if (this.name === '') {
        this.special_features.forEach(item => this.items.push(item))
      } else {
        this.special_features.forEach(item => {
          if (item.name.includes(this.name)) {
            this.items.push(item)
          }
        })
      }
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'special-feature-list')
    this.special_features.forEach(item => this.items.push(item))
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
