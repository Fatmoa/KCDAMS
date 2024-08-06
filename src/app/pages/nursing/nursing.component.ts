import { NursingService } from './../../services/nursing.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RolesService } from 'src/app/services/roles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nursing',
  templateUrl: './nursing.component.html',
  styleUrls: ['./nursing.component.scss']
})
export class NursingComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'gen', 'empNum', 'email', 'pnum', 'status', 'action'];
  @ViewChild('distributionDialog') distributionDialog!: TemplateRef<any>;
  @ViewChild('distributionDialog2') distributionDialog2!: TemplateRef<any>;
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private rolesService: RolesService,
    private loginService: LoginService,
    private nursingService:NursingService
  ){}
  nusForm!: FormGroup;
  nusEditForm!: FormGroup;

  ngOnInit(): void {
    this.fetchAllNus(),
    this.configNusForm(),
    this.configurenusEditForm()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  configNusForm(){
    this.nusForm = new FormGroup({
      nusName: new FormControl(null, Validators.required),
      nusMname: new FormControl(null, Validators.required),
      nusLname: new FormControl(null, Validators.required),
      nusGender: new FormControl(null, Validators.required),
      nusEmail: new FormControl(null, Validators.required),
      nusPnumb: new FormControl(null, Validators.required),
      nusemplNum: new FormControl(null, Validators.required),
      user_data: new FormControl(null),
    })
  }

  configurenusEditForm(){
    this.nusEditForm = new FormGroup ({
      nusId:new FormControl(null),
      nusName: new FormControl(null, Validators.required),
      nusMname: new FormControl(null, Validators.required),
      nusLname: new FormControl(null, Validators.required),
      nusGender: new FormControl(null, Validators.required),
      nusEmail: new FormControl(null, Validators.required),
      nusPnumb: new FormControl(null, Validators.required),
      nusemplNum: new FormControl(null, Validators.required),

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

  fetchAllNus(){
    this.nursingService.getAllNursing().subscribe((resp:any)=>{
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  onSave(){
    this.rolesService.getRoleByName('NURSE').subscribe((resp:any)=>{
      const login = {
        username: this.nusForm.value.nusEmail,
        password: this.nusForm.value.nusLname,
        roleId: resp,
        userStatus: '1'
      }

      console.log(login);
      this.loginService.userRegistration(login).subscribe((resp2: any) => {
        this.nusForm.patchValue({ user_data: resp2 });
        const values = this.nusForm.value;
        this.nursingService.addNursing(values).subscribe((resp3: any) => {
          this.reload();
          this.alert()

        })

      })
    })
  }

  openDialog2(row:any) {
    this.nusEditForm = new FormGroup ({
      nusId:new FormControl(row.nusId),
      nusName: new FormControl(row.nusName),
      nusMname: new FormControl(row.nusMname),
      nusLname: new FormControl(row.nusLname),
      nusGender: new FormControl(row.nusGender),
      nusEmail: new FormControl(row.nusEmail),
      nusPnumb: new FormControl(row.nusPnumb),
      nusemplNum: new FormControl(row.nusemplNum),

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


  onEdit(){
    const id = this.nusEditForm.value.nusId;
    const values = this.nusEditForm.value;

    this.nursingService.editNursing(id,values).subscribe((resp:any)=>{
      console.log(resp);
      // this.reload();
      // this.alert2()

    })
  }

  reload() {
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['home/nursing'])
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
      title: "Nurse Added successfully"
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
      title: "Nurse Edited successfully"
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
