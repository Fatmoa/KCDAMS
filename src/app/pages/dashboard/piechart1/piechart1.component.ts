import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';



@Component({
  selector: 'app-piechart1',
  templateUrl: './piechart1.component.html',
  styleUrls: ['./piechart1.component.scss']
})
export class Piechart1Component implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.piechart1()
  }

  piechart1(){
    let chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
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
  }


}


