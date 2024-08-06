import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  roleName:any
  constructor(){}
  ngOnInit(): void {

    this.roleName = sessionStorage.getItem('roleName');

  }

}
