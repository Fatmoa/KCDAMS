import { ReportService } from './../../../services/report.service';
import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';



@Component({
  selector: 'app-piechart1',
  templateUrl: './piechart1.component.html',
  styleUrls: ['./piechart1.component.scss']
})
export class Piechart1Component implements OnInit {

  constructor(
    private reportService: ReportService
  ) {}

  ngOnInit(): void {
    this.piechart1()
  }

  piechart1(){
    this.reportService.getDoctorByGender().subscribe((resp:any)=>{
      let noDoctor = [ ];
      let GenderType = [ ]

      for (let total = 0; total < resp.length; total++){
        noDoctor.push(resp[total].doctors);
        GenderType.push(resp[total].gender);
      }


      let chartOptions = {
        series: noDoctor,
        chart: {
          width: 380,
          type: "pie"
        },
        labels:GenderType,
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

      let piechart = new ApexCharts(document.querySelector('#chart0000'),chartOptions);
      piechart.render()
    })

  }


}


