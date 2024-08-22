import { ReportService } from './../../../services/report.service';
import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-piechart2',
  templateUrl: './piechart2.component.html',
  styleUrls: ['./piechart2.component.scss']
})
export class Piechart2Component implements OnInit {

  constructor(
    private reportService:ReportService,
  ){}

  ngOnInit(): void {
    this.piechart2()
  }

  piechart2(){
    this.reportService.getRegistrarGender().subscribe((resp:any)=>{

      let regNo =[ ];
      let Rgender =[ ]


      for (let total = 0; total < resp.length; total++){
        regNo.push(resp[total].registrars);
        Rgender.push(resp[total].gender);
      }

      let chartOptions = {
        series: regNo,
        chart: {
          width: 380,
          type: "pie"
        },
        labels: Rgender,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };

      let piechart = new ApexCharts(document.querySelector('#chart0001'),chartOptions);
      piechart.render()
    })

  }

}
