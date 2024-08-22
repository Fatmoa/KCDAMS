import { ReportService } from './../../../services/report.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recdashboard',
  templateUrl: './recdashboard.component.html',
  styleUrls: ['./recdashboard.component.scss']
})
export class RecdashboardComponent implements OnInit {

  constructor(
    private reportService:ReportService,
  ) {}

  ngOnInit(): void {
    this.getMalePatients()
  }



  receps:any;
  getMalePatients(){
    this.reportService.getMalePatients().subscribe((resp:any)=>{
      this.receps = resp;
    })
  }

}
