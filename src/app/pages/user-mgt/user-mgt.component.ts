import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-user-mgt',
  templateUrl: './user-mgt.component.html',
  styleUrls: ['./user-mgt.component.scss']
})
export class UserMgtComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'pass', 'role'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor (
    private router:Router,
    private route:ActivatedRoute,
    private loginService: LoginService
  ){}


  ngOnInit(): void {
    this.fetchAllUsers()
     }


     ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    fetchAllUsers(){
      this.loginService.getUser().subscribe((resp:any)=>{
        console.log(resp);
        this.dataSource=new MatTableDataSource(resp);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;

      })
    }

}

