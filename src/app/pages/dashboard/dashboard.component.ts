import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
roleName:any
  constructor(){}
  ngOnInit(): void {
    this.roleName = sessionStorage.getItem('roleName');
  }

}
