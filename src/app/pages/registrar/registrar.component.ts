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

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'email', 'empNum','pnum'];
  @ViewChild('distributionDialog') distributionDialog!: TemplateRef<any>;
  @ViewChild('distributionDialog2') distributionDialog2!: TemplateRef<any>;
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private dialog:MatDialog,
    private rolesService:RolesService,
    private loginService:LoginService,
    private registrarService:RegistrarService
  ){

  }


  regForm!:FormGroup;
ngOnInit(): void {
  this.configureForm();
}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

configureForm(){
this.regForm = new FormGroup({
  regisName: new FormControl(null,Validators.required),
  regisMname: new FormControl(null,Validators.required),
  regisLname: new FormControl(null,Validators.required),
  resiGender: new FormControl(null,Validators.required),
  regisEmail: new FormControl(null,Validators.required),
  regisNumb: new FormControl(null,Validators.required),
  emplNum: new FormControl(null,Validators.required),
  user_data:new FormControl(null)
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

onSave(){
  this.rolesService.getRoleByName('Reception').subscribe((resp:any)=>{
    console.log(resp);
    const login = {
      username:this.regForm.value.regisEmail,
      password:this.regForm.value.regisLname,
      roleId:resp,
      userStatus:'1'

    }
    console.log(login);
    this.loginService.userRegistration(login).subscribe((resp2:any)=>{
      this.regForm.patchValue({user_data:resp2});
      const values = this.regForm.value;
      this.registrarService.addReistrar(values).subscribe((resp3:any)=>{
        console.log('added');

      })

    })


  })


// console.log(values);

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}


}
