import { RolesService } from './../../services/roles.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'status', 'action'];
  @ViewChild('distributionDialog') distributionDialog!: TemplateRef<any>;
  @ViewChild('distributionDialog2') distributionDialog2!: TemplateRef<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: MatTableDataSource<any>;
  roleForm!:FormGroup;
  roleEditForm!:FormGroup;

  constructor (
    private router:Router,
    private route: ActivatedRoute,
    private dialog:MatDialog,
    private rolesService:RolesService,
  ){}

  ngOnInit(): void {
    this.configureRoleForm();
    this.fetchAllRoles();
    this.configureRoleEditForm();

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
    this.roleForm = new FormGroup({
      roleName: new FormControl(null,Validators.required),
      roleStatus: new FormControl(1)
    })
  }

  configureRoleEditForm(){
    this.roleEditForm = new FormGroup({
      roleId: new FormControl(null),
      roleName: new FormControl(null,Validators.required),
      roleStatus: new FormControl(1)
    })
  }

  onSave(){
    const values = this.roleForm.value;
    this.rolesService.addRole(values).subscribe((resp:any)=>{
      this.alert();
      this.reload();
    })
  }

  openDialog2(row:any){
    console.log(row);
    this.roleEditForm = new FormGroup({
      roleId: new FormControl(row.roleId),
      roleName: new FormControl(row.roleName),
      roleStatus: new FormControl(row.roleStatus)
    })

    let dialogRef = this.dialog.open(this.distributionDialog2, {
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

  onEdit(){
    const id = this.roleEditForm.value.roleId;
    const values = this.roleEditForm.value;

    this.rolesService.editRole(id,values).subscribe((resp:any)=>{
      this.alert2();
      this.reload()
    })
  }



  reload(){
    this.router.navigateByUrl('',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['home/role'])
    })
  }


  alert(){
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Role Added successfully"
    });
  }

  alert2(){
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Role Edited"
    });
  }



}









