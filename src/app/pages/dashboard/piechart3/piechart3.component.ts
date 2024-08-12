import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-piechart3',
  templateUrl: './piechart3.component.html',
  styleUrls: ['./piechart3.component.scss']
})
export class Piechart3Component implements OnInit{
  constructor() {

  }
  ngOnInit(): void {
    this.piechart3();
  }

  piechart3(){
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

    let piechart = new ApexCharts(document.querySelector('#chart0003'),chartOptions);
    piechart.render()
  }


}
