import { ReportService } from './../../../services/report.service';
import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-piechart3',
  templateUrl: './piechart3.component.html',
  styleUrls: ['./piechart3.component.scss']
})
export class Piechart3Component implements OnInit{
  constructor(
    private reportService:ReportService,
  ) {

  }
  ngOnInit(): void {
    this.piechart3();
  }

  piechart3(){
    this.reportService.getPsychologGender().subscribe((resp:any)=>{

      let psyNo=[];
      let psyGen = []

      for(let total =0; total<resp.length; total++){
        psyNo.push(resp[total].psychologists);
        psyGen.push(resp[total].gender);
      }

      let chartOptions = {
        series:psyNo ,
        chart: {
          width: 380,
          type: "pie"
        },
        labels: psyGen,
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

      let piechart = new ApexCharts(document.querySelector('#chart0003'),chartOptions);
      piechart.render()
    })
  }

}
