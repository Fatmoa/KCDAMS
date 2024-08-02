import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  roleName:any;
  constructor(private router:Router,
    private route:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.roleName = sessionStorage.getItem('roleName');
    
   this.changeLog()
  }

  changeLog(){
    let localData = sessionStorage.getItem("username");
    if(localData == null){
      this.router.navigateByUrl("/")
    }
  }

  onLogOut(){
    sessionStorage.clear();
    this.router.navigateByUrl("/")
  }

}
