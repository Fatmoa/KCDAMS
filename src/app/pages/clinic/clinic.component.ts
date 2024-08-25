import { ClinicService } from './../../services/clinic.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ReceptionService } from 'src/app/services/reception.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {
  displayedColumns: string[] = ['id','mat','name', 'sDate', 'vDate','eDate','dose'];
  @ViewChild('distributionDialog') distributionDialog!: TemplateRef<any>;
  @ViewChild('distributionDialog2') distributionDialog2!: TemplateRef<any>;
  dataSource!: MatTableDataSource<any>;

  ClinicForm!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog:MatDialog,
    private clinicService:ClinicService,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.fetchAll()
    this.configureForm()
  }


  openDialog(){
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

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

configureForm(){
  this.ClinicForm= new FormGroup({
    startDate:new FormControl(null,Validators.required),
    visitDate:new FormControl(null,Validators.required),
    endingDate:new FormControl(null,Validators.required),
    dose:new FormControl(null,Validators.required),
  })
}


onSave(){
  const values = this.ClinicForm.value;
  this.clinicService.addClinic(values).subscribe((resp:any)=>{
    console.log(resp);
    this.reload();
    this.alert()
  })

}

fetchAll(){
  this.clinicService.getAllClinic().subscribe((resp:any)=>{
    this.dataSource=new MatTableDataSource(resp);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  })
}

reload(){
  this.router.navigateByUrl('',{skipLocationChange:true}).then(()=>{
    this.router.navigate(['home/clinic'])
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
    title: "Region Added successfully"
  });
}

}
