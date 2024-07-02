import { RolesService } from './../../services/roles.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'status', 'action'];
  @ViewChild('distributionDialog') distributionDialog!: TemplateRef<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: MatTableDataSource<any>;
  RoleForm!:FormGroup;

  constructor (
    private router:Router,
    private route: ActivatedRoute,
    private dialog:MatDialog,
    private rolesService:RolesService,

  ){}

  ngOnInit(): void {
    this.configureRoleForm()
    this.fetchAllRoles()

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

  fetchAllRoles(){
    this.rolesService.getAllRole().subscribe((resp:any)=>{
      this.dataSource=new MatTableDataSource(resp);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  openDialog(){

    let dialogRef = this.dialog.open(this.distributionDialog, {
      width: '650px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result !== 'no') {
          const enabled = "Y"

        } else if (result === 'no') {
        }
      }
    })
  }
  configureRoleForm(){
    this.RoleForm = new FormGroup({
      uroleName: new FormControl(null,Validators.required),
      roleStatus: new FormControl(1)
    })
  }

}









