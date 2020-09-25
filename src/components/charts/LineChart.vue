<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    fillProp: String
  },
  data () {
    return {
      chartData1: {
        labels: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月'
        ],
        datasets: [
          {
            label: 'Line Chart',
            data: [0, 100, 180, 200, 190, 220, 350, 410, 400, 380, 450, 500],
            fill: false,
            borderColor: 'black',
            backgroundColor: 'black',
            borderWidth: 1
          }
        ]
      },
      options1: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      },
      chartData2: {
        labels: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月'
        ],
        datasets: [
          {
            label: 'Line Chart',
            data: [180, 380, 300, 200, 280, 200, 200, 500, 200, 400, 450, 200],
            fill: true,
            borderColor: 'black',
            backgroundColor: 'black',
            borderWidth: 1
          }
        ]
      },
      options2: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    if (this.$props.fillProp === 'without') {
      this.renderChart(this.chartData1, this.options1)
    } else {
      this.renderChart(this.chartData2, this.options2)
    }
  }
}
</script>
