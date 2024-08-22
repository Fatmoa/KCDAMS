import { ReportService } from './../../../services/report.service';
import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-piechart4',
  templateUrl: './piechart4.component.html',
  styleUrls: ['./piechart4.component.scss']
})
export class Piechart4Component implements OnInit{

  constructor(
    private reportService:ReportService
  ) {

  }
  ngOnInit(): void {
    this.piechart4();
  }

  piechart4(){
    this.reportService.getNurseGender().subscribe((resp:any)=>{

    let nurseNo = [];
    let nurseGen = [];

    for(let length =0; length<resp.length;length++){
      nurseNo.push(resp[length].nurses);
      nurseGen.push(resp[length].gender)
    }

    let chartOptions = {
      series: nurseNo,
      chart: {
        width: 380,
        type: "pie"
      },
      labels: nurseGen,
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

      let piechart = new ApexCharts(document.querySelector('#chart0004'),chartOptions);
      piechart.render()

    })
  }

}
