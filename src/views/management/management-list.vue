<template lang="html">

  <section class="user-list">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <span class="card-title" style="font-size: 22px"><b>运营管理</b></span>
            <hr style="margin-left: auto; margin-right: auto; background-color: black;" />
            <!-- buttons for management filtering: 1 row -->
            <b-button variant="secondary" class="btn-fw btn-rounded normal-button" @click="all">全部推送（2313）</b-button>&nbsp;&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="announced">已发布（235）</b-button>&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="announce">定时发布（235）</b-button>

            <!-- search input and buttons: 1 row -->
            <div class="button-panel row">
              <div class="search-box">
                <i class="fa fa-search search-icon"></i>
                <b-form-input class="search-input" placeholder="查询推送关键字" v-model="name" @input="change"></b-form-input>
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

            <!-- manangement table -->
            <b-table :fields="fields" :items="items" id="management_table" :per-page="perPage" :current-page="currentPage" :responsive="true" :bordered="true" head-variant="light" style="margin-top: 30px;">
              <template v-slot:head()="data">
                <span class="font-weight-bold">{{data.label}}</span>
              </template>
              <template v-slot:cell(index)="data">
                <input type="checkbox" true-value="yes" false-value="no" />
              </template>
              <template v-slot:cell(status)="data">
                <label :style="[data.item.status == '待发布' ? {color: 'red'} : {color: 'green'}]">{{data.item.status}}</label>
              </template>
              <template v-slot:cell(action)="data">
                <b-button variant="dark" class="btn-fw" @click="click_detail(data.item.category)">查看洋情</b-button>
              </template>
              <template v-slot:cell()="data">{{data.value}}</template>
            </b-table>
            <b-pagination align="center" class="col-lg-2 offset-5" v-model="currentPage" :total-rows="getManagements()" :per-page="perPage" aria-controls="management_table" style="margin-top: 20px"></b-pagination>
            <div class="col-lg-6 offset-6 row justify-content-end" style="padding-top: 20px">
              <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="$router.push('../upload-special-feature')">发布新推送</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'management-list',
  components: { Datepicker },
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      start_time: '',
      end_time: '',
      name: '',
      fields: [
        {key: 'index', label: '全选', class: 'text-center'},
        {key: 'created_time', label: '创建时间', class: 'text-center'},
        {key: 'published_time', label: '发布时间', class: 'text-center'},
        {key: 'name', label: '推送名称', class: 'text-center'},
        {key: 'category', label: '推送类型', class: 'text-center'},
        {key: 'device', label: '推送设备', class: 'text-center'},
        {key: 'status', label: '发送状态', class: 'text-center'},
        {key: 'action', label: '操作', class: 'text-center'}
      ],
      managements: [
        {
          id: '45685229878',
          created_time: '2020-08-07',
          published_time: '2020-08-01',
          name: '小小商贩市场发生在v饭',
          category: '特辑',
          device: 'IOS',
          status: '已发布'
        },
        {
          id: '45685239878',
          created_time: '2020-08-07',
          published_time: '2020-08-02',
          name: '小小商贩⬆️都是犯的错',
          category: '专栏',
          device: '安卓',
          status: '定时发布'
        },
        {
          id: '45683239878',
          created_time: '2020-08-07',
          published_time: '2020-08-03',
          name: '小小商贩市场发生在v饭',
          category: '商品',
          device: '全部',
          status: '已发布'
        },
        {
          id: '45621229878',
          created_time: '2020-08-07',
          published_time: '2020-08-04',
          name: '小小商贩⬆️都是犯的错',
          category: '活动H5',
          device: 'IOS',
          status: '待发布'
        },
        {
          id: '45685329878',
          created_time: '2020-08-07',
          published_time: '2020-08-05',
          name: '小小商贩市场发生在v饭',
          category: '纯文字',
          device: '安卓',
          status: '已发布'
        },
        {
          id: '45683569878',
          created_time: '2020-08-07',
          published_time: '2020-08-06',
          name: '小小商贩⬆️都是犯的错',
          category: '特辑',
          device: 'IOS',
          status: '已发布'
        },
        {
          id: '45686539878',
          created_time: '2020-08-07',
          published_time: '2020-08-07',
          name: '小小商贩市场发生在v饭',
          category: '专栏',
          device: '全部',
          status: '待发布'
        },
        {
          id: '456812329878',
          created_time: '2020-08-07',
          published_time: '2020-08-01',
          name: '小小商贩市场发生在v饭',
          category: '特辑',
          device: 'IOS',
          status: '已发布'
        },
        {
          id: '45685239234',
          created_time: '2020-08-07',
          published_time: '2020-08-02',
          name: '小小商贩⬆️都是犯的错',
          category: '专栏',
          device: '安卓',
          status: '定时发布'
        },
        {
          id: '453453239878',
          created_time: '2020-08-07',
          published_time: '2020-08-03',
          name: '小小商贩市场发生在v饭',
          category: '商品',
          device: '全部',
          status: '已发布'
        },
        {
          id: '44561229878',
          created_time: '2020-08-07',
          published_time: '2020-08-04',
          name: '小小商贩⬆️都是犯的错',
          category: '活动H5',
          device: 'IOS',
          status: '待发布'
        },
        {
          id: '45567329878',
          created_time: '2020-08-07',
          published_time: '2020-08-05',
          name: '小小商贩市场发生在v饭',
          category: '纯文字',
          device: '安卓',
          status: '已发布'
        },
        {
          id: '45687899878',
          created_time: '2020-08-07',
          published_time: '2020-08-06',
          name: '小小商贩⬆️都是犯的错',
          category: '特辑',
          device: 'IOS',
          status: '已发布'
        },
        {
          id: '45890539878',
          created_time: '2020-08-07',
          published_time: '2020-08-07',
          name: '小小商贩市场发生在v饭',
          category: '专栏',
          device: '全部',
          status: '待发布'
        }
      ],
      items: []
    }
  },
  methods: {
    click_detail (category) {
      switch (category) {
        case '商品':
          this.$router.push('../../upload-product')
          break
        case '特辑':
          this.$router.push('../../upload-special-feature')
          break
        case '专栏':
          this.$router.push('../../upload-field')
          break
        case '活动H5':
          this.$router.push('../../upload-activity')
          break
        case '纯文字':
          this.$router.push('../../upload-letter')
          break
      }
    },
    getManagements () {
      return this.items.length
    },
    all () {
      this.items = []
      this.managements.forEach(item => this.items.push(item))
    },
    announced () {
      this.items = []
      this.managements.forEach(item => {
        if (item.status === '已发布') {
          this.items.push(item)
        }
      })
    },
    announce () {
      this.items = []
      this.managements.forEach(item => {
        if (item.status === '定时发布') {
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
        this.managements.forEach(item => this.items.push(item))
      } else if (startDate === '') {
        this.managements.forEach(item => {
          if (item.published_time <= endDate) {
            this.items.push(item)
          }
        })
      } else if (endDate === '') {
        this.managements.forEach(item => {
          if (item.published_time >= startDate) {
            this.items.push(item)
          }
        })
      } else {
        this.managements.forEach(item => {
          if (item.published_time >= startDate && item.published_time <= endDate) {
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
      this.managements.forEach(item => this.items.push(item))
    },
    change () {
      this.items = []
      if (this.name === '') {
        this.managements.forEach(item => this.items.push(item))
      } else {
        this.managements.forEach(item => {
          if (item.name.includes(this.name)) {
            this.items.push(item)
          }
        })
      }
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'management-list')
    this.managements.forEach(item => this.items.push(item))
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
