<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      chartData: {
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
            backgroundColor: [
              'black',
              'black',
              'black',
              'black',
              'black',
              'black',
              'black',
              'black',
              'black',
              'black',
              'black',
              'black'
            ],
            borderColor: [
              'black',
              'black',
              'black',
              'black',
              'black',
              'black',
              'black',
              'black',
              'black',
              'black',
              'black',
              'black'
            ],
            pointBorderColor: '#2554FF',
            data: [800, 1100, 500, 1500, 400, 900, 100, 500, 400, 1000, 200, 600]
          }
        ]
      },
      options: {
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
              barPercentage: 0.3,
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
    this.renderChart(this.chartData, this.options)
  }
}
</script>
