import { PsychologyService } from './../../services/psychology.service';
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
  selector: 'app-psychology',
  templateUrl: './psychology.component.html',
  styleUrls: ['./psychology.component.scss']
})
export class PsychologyComponent implements OnInit{


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
    private psychologyService:PsychologyService,
  ){}

  psyEditForm!:FormGroup;
  psyForm!:FormGroup


  ngOnInit(): void {
    this.fetchAll()
    this.configureForm()
    this.configureEditForm()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  configureForm() {
    this.psyForm = new FormGroup({
      psyName: new FormControl(null,Validators.required),
      psyMname: new FormControl(null,Validators.required),
      psyLname: new FormControl(null,Validators.required),
      psyGender: new FormControl(null,Validators.required),
      psyEmail: new FormControl(null,Validators.required),
      psyNumb: new FormControl(null,Validators.required),
      psyEmplNum: new FormControl(null,Validators.required),
      user_data: new FormControl(null),

    })
  }

  configureEditForm() {
    this.psyEditForm = new FormGroup({
      psyId: new FormControl(null),
      psyName: new FormControl(null, Validators.required),
      psyMname: new FormControl(null, Validators.required),
      psyLname: new FormControl(null, Validators.required),
      psyGender: new FormControl(null, Validators.required),
      psyEmail: new FormControl(null, Validators.required),
      psyNumb: new FormControl(null, Validators.required),
      psyEmplNum: new FormControl(null, Validators.required),
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

  fetchAll(){
    this.psychologyService.getAllPsychology().subscribe((resp:any)=>{
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


onSave(){
  this.rolesService.getRoleByName('PSYCHOLOGIST').subscribe((resp: any) => {
    const login = {
      username: this.psyForm.value.psyEmail,
      password: this.psyForm.value.psyLname,
      roleId: resp,
      userStatus: '1'
    }
    console.log(login);
    this.loginService.userRegistration(login).subscribe((resp2: any) => {

      this.psyForm.patchValue({ user_data: resp2 });
      const values = this.psyForm.value;
      this.psychologyService.addPsychology(values).subscribe((resp3: any) => {
        console.log('added')
        // this.reload();
        // this.alert()
      })
    })
  })
}

openDialog2(row: any) {
  this.psyEditForm = new FormGroup({
    psyId: new FormControl(row.psyId),
    psyName: new FormControl(row.psyName),
    psyMname: new FormControl(row.psyMname),
    psyLname: new FormControl(row.psyLname),
    psyGender: new FormControl(row.psyGender),
    psyEmail: new FormControl(row.psyEmail),
    psyNumb: new FormControl(row.psyNumb),
    psyEmplNum: new FormControl(row.psyEmplNum),
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
    const id = this.psyEditForm.value.psyId;
    const values = this.psyEditForm.value;
    this.psychologyService.editPsychology(id,values).subscribe((resp:any)=>{
      this.reload()
      this.alert2()
    })

  }

  reload() {
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['home/psychology'])
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
      title: "Pyschologist Added successfully"
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
      title: "Pyschologist Edited successfully"
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


