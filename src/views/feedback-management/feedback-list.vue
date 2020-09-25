<template lang="html">

  <section class="feedback-list">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <span class="card-title" style="font-size: 22px"><b>举报反馈</b></span>
            <hr style="margin-left: auto; margin-right: auto; background-color: black;" />
            <!-- buttons for feedback filtering : 1 row -->
            <b-button variant="secondary" class="btn-fw btn-rounded normal-button" @click="all">全部反馈（2313）</b-button>&nbsp;&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="solved">已解决（235）</b-button>&nbsp;&nbsp;
            <b-button variant="dark" class="btn-fw btn-rounded normal-button" @click="notSolved">未解决（235）</b-button>

            <!-- search input and buttons: 1 row -->
            <div class="button-panel row">
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

            <!-- feedback table -->
            <b-table :fields="fields" :items="items" id="feedback_table" :per-page="perPage" :current-page="currentPage" :responsive="true" :bordered="true" head-variant="light" style="margin-top: 30px;">
              <template v-slot:head()="data">
                <span class="font-weight-bold">{{data.label}}</span>
              </template>
              <template v-slot:cell(index)="data">
                <input type="checkbox" true-value="yes" false-value="no" :checked="data.item.selected" @change="data.item.selected=!data.item.selected" />
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
              <b-button v-b-modal.modalmd variant="dark" class="btn-fw btn-rounded normal-button" style="margin-right: 20px;" >一键处理</b-button>
            </div>

            <!-- modal -->
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
  name: 'feedback-list',
  components: { Datepicker },
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      start_time: '',
      end_time: '',
      fields: [
        {key: 'index', label: '全选', class: 'text-center'},
        {key: 'time', label: '举报时间', class: 'text-center'},
        {key: 'reason', label: '举报理由', class: 'text-center'},
        {key: 'person', label: '举报人', class: 'text-center'},
        {key: 'status', label: '审核状态', class: 'text-center'},
        {key: 'result', label: '处理结果', class: 'text-center'},
        {key: 'action', label: '操作', class: 'text-center'}
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
          status: '已解决',
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
          status: '已解决',
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
          status: '已解决',
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
      items: []
    }
  },
  methods: {
    batch_process_ok () {
      this.feedbacks.forEach(item => {
        if (item.selected) {
          if (item.status === '未解决') {
            item.status = '已解决'
            item.selected = false
          }
        }
      })
      this.$refs['modalmd'].hide()
    },
    batch_process_cancel () {
      this.$refs['modalmd'].hide()
      this.feedbacks.forEach(item => {
        item.selected = false
      })
    },
    getFeedbacks () {
      return this.items.length
    },
    all () {
      this.items = []
      this.feedbacks.forEach(item => this.items.push(item))
    },
    solved () {
      this.items = []
      this.feedbacks.forEach(item => {
        if (item.status === '已解决') {
          this.items.push(item)
        }
      })
    },
    notSolved () {
      this.items = []
      this.feedbacks.forEach(item => {
        if (item.status === '未解决') {
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
        this.feedbacks.forEach(item => this.items.push(item))
      } else if (startDate === '') {
        this.feedbacks.forEach(item => {
          if (item.time <= endDate) {
            this.items.push(item)
          }
        })
      } else if (endDate === '') {
        this.feedbacks.forEach(item => {
          if (item.time >= startDate) {
            this.items.push(item)
          }
        })
      } else {
        this.feedbacks.forEach(item => {
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
      this.feedbacks.forEach(item => this.items.push(item))
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'feedback-list')
    this.feedbacks.forEach(item => this.items.push(item))
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

.page-item button {
  border: none;
}
</style>
