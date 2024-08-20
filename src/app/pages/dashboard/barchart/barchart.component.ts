import { ReportService } from './../../../services/report.service';
import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit{
  constructor(
    private reportService: ReportService
  ){
  }
  ngOnInit(): void {
    this.barchart()
  }

  barchart(){
    this.reportService.getPatientByDistrict().subscribe((resp:any)=>{

      let receptionsNumber = []
      let districtName = [ ]

      for (let total = 0; total < resp.length; total++){
        receptionsNumber.push(resp[total].receptions);
        districtName.push(resp[total].district_name);
      }
        console.log(districtName);

        let chartOptions = {
          series: [
            {
              name: "Total number of patients",
              data: receptionsNumber,
            }
          ],
          chart: {
            height: 350,
            type: "bar"
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: "top" 
              }
            }
          },
          dataLabels: {
            enabled: true,
            formatter: function(val:any) {
              return val + "";
            },
            offsetY: -20,
            style: {
              fontSize: "12px",
              colors: ["#304758"]
            }
          },

          xaxis: {
            categories: districtName,
            position: "top",
            labels: {
              offsetY: -18
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: "gradient",
                gradient: {
                  colorFrom: "#D8E3F0",
                  colorTo: "#BED1E6",
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5
                }
              }
            },
            tooltip: {
              enabled: true,
              offsetY: -35
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "light",
              type: "horizontal",
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [50, 0, 100, 100]
            }
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            labels: {
              show: false,
              formatter: function(val:any) {
                return val + "";
              }
            }
          },
          title: {
            text: "Total number of patients in Districts",
            floating: 0,
            offsetY: 320,
            align: "center",
            style: {
              color: "#444"
            }
          }
        };
        let chart1 = new ApexCharts(document.querySelector('#chart'),chartOptions);
        chart1.render()

      }
)

  }
}
