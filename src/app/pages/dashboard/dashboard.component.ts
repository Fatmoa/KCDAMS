import { ReportService } from './../../services/report.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
roleName:any
  constructor(
    private reportService:ReportService,
  ){}
  ngOnInit(): void {
    this.roleName = sessionStorage.getItem('roleName');
    this.getSummary();
  }

  summary:any;
  getSummary(){
    this.reportService.getSummary().subscribe((resp:any)=>{
      this.summary = resp;
    })
  }



}
