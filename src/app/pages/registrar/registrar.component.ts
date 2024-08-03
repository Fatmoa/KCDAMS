import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RegistrarService } from 'src/app/services/registrar.service';
import { RolesService } from 'src/app/services/roles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

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
    private registrarService: RegistrarService
  ) {

  }


  regForm!: FormGroup;
  regEditForm!: FormGroup;
  ngOnInit(): void {
    this.configureForm();
    this.fetchAllRegistrar();
    this.configureEditForm();


  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  configureForm() {
    this.regForm = new FormGroup({
      regisName: new FormControl(null, Validators.required),
      regisMname: new FormControl(null, Validators.required),
      regisLname: new FormControl(null, Validators.required),
      resiGender: new FormControl(null, Validators.required),
      regisEmail: new FormControl(null, Validators.required),
      regisNumb: new FormControl(null, Validators.required),
      emplNum: new FormControl(null, Validators.required),
      user_data: new FormControl(null),

    })
  }

  configureEditForm() {
    this.regEditForm = new FormGroup({
      regId: new FormControl(null),
      regisName: new FormControl(null, Validators.required),
      regisMname: new FormControl(null, Validators.required),
      regisLname: new FormControl(null, Validators.required),
      resiGender: new FormControl(null, Validators.required),
      regisEmail: new FormControl(null, Validators.required),
      regisNumb: new FormControl(null, Validators.required),
      emplNum: new FormControl(null, Validators.required),
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



  fetchAllRegistrar() {
    this.registrarService.getAllRegistrar().subscribe((resp: any) => {
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  onSave() {
    this.rolesService.getRoleByName('RECEPTION').subscribe((resp: any) => {

      const login = {
        username: this.regForm.value.regisEmail,
        password: this.regForm.value.regisLname,
        roleId: resp,
        userStatus: '1'
      }
      console.log(login);
      this.loginService.userRegistration(login).subscribe((resp2: any) => {
        this.regForm.patchValue({ user_data: resp2 });
        const values = this.regForm.value;
        this.registrarService.addReistrar(values).subscribe((resp3: any) => {
          this.reload();
          this.alert()

        })

      })


    })

  }


  openDialog2(row: any) {
    this.regEditForm = new FormGroup({
      regId: new FormControl(row.regId),
      regisName: new FormControl(row.regisName),
      regisMname: new FormControl(row.regisMname),
      regisLname: new FormControl(row.regisLname),
      resiGender: new FormControl(row.resiGender),
      regisEmail: new FormControl(row.regisEmail),
      regisNumb: new FormControl(row.regisNumb),
      emplNum: new FormControl(row.emplNum),
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



  reload() {
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['home/registrar'])
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
      title: "Reception Added successfully"
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
