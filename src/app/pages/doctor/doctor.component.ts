import { LoginService } from './../../services/login.service';
import { RolesService } from './../../services/roles.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from './../../services/doctor.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit{
  [x: string]: any;
  displayedColumns: string[] = ['id', 'names', 'gen', 'email','no','empno','status','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild('distributionDialog') distributionDialog!: TemplateRef<any>;
  @ViewChild('distributionDialog2') distributionDialog2!: TemplateRef<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor (
    private router:Router,
    private doctorService: DoctorService,
    private dialog: MatDialog,
    private rolesService: RolesService,
    private loginService: LoginService
  ){}

  drForm!: FormGroup
  EditDrForm!: FormGroup

  ngOnInit(): void {
    this.fetchAllDoctors()
    this.configDrForm()
    this.ConfigEditDrForm()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  fetchAllDoctors(){
    this.doctorService.getAllDoctor().subscribe((resp:any)=>{
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

  configDrForm(){
    this.drForm = new FormGroup({
      drName: new FormControl(null,Validators.required),
      drMname: new FormControl(null,Validators.required),
      drLname: new FormControl(null,Validators.required),
      drGender: new FormControl(null,Validators.required),
      drEmail: new FormControl(null,Validators.required),
      drNumb: new FormControl(null,Validators.required),
      drEmplNum: new FormControl(null,Validators.required),
      user_data: new FormControl(null),
    })

  }

  ConfigEditDrForm(){
    this.EditDrForm = new FormGroup({
      drId: new FormControl(null),
      drName: new FormControl(null,Validators.required),
      drMname: new FormControl(null,Validators.required),
      drLname: new FormControl(null,Validators.required),
      drGender: new FormControl(null,Validators.required),
      drEmail: new FormControl(null,Validators.required),
      drNumb: new FormControl(null,Validators.required),
      drEmplNum: new FormControl(null,Validators.required),
    })

  }

  openDialog() {
    let dialogRef = this.dialog.open(this.distributionDialog, {
      width: '850px',
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

  openDialog2(row:any){
    this.EditDrForm= new FormGroup({
      drId: new FormControl(row.drId),
      drName: new FormControl(row.drName),
      drMname: new FormControl(row.drMname),
      drLname: new FormControl(row.drLname),
      drGender: new FormControl(row.drGender),
      drEmail: new FormControl(row.drEmail),
      drNumb: new FormControl(row.drNumb),
      drEmplNum: new FormControl(row.drEmplNum),
    })
    let dialogRef = this.dialog.open(this.distributionDialog2, {
      width: '850px',
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

  onSave(){
    this.rolesService.getRoleByName('DOCTOR').subscribe((resp: any) => {

      const login = {
        username: this.drForm.value.drEmail,
        password: this.drForm.value.drLname,
        roleId: resp,
        userStatus: '1'
      }
      console.log(login);
      this.loginService.userRegistration(login).subscribe((resp2: any) => {
        this.drForm.patchValue({ user_data: resp2 });
        const values = this.drForm.value;
        this.doctorService.addDoctor(values).subscribe((resp3: any) => {
          this.reload();
          this.alert()
        })
      })
    })
  }

  onEdit(){
    const id = this.EditDrForm.value.drId;
    const values = this.EditDrForm.value;
    this.doctorService.editDoctor(id,values).subscribe((resp:any)=>{
      console.log(resp);
      this.reload();
      this.alert2()


    })
  }





  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  reload() {
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['home/doctor'])
    })
  }

  alert() {
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
      title: "Doctor Added successfully"
    });
  }

  alert2() {
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
      title: "Doctor Edited successfully"
    });
  }


}

