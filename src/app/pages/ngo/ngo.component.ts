import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NgoService } from 'src/app/services/ngo.service';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.scss']
})
export class NgoComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'action'];
  @ViewChild('distributionDialog') distributionDialog!: TemplateRef<any>;
  @ViewChild('distributionDialog2') distributionDialog2!: TemplateRef<any>;
  dataSource!: MatTableDataSource<any>;
  NgoForm!:FormGroup;
  EditNgoForm!:FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor (
    private router:Router,
    private route: ActivatedRoute,
    private dialog:MatDialog,
    private ngoService: NgoService,

  ){}
  ngOnInit(): void {
    this.fetchAllNgo();
    this.configureNgoForm();
    this.configureEditNgoForm()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  fetchAllNgo(){
    this.ngoService.getAllNgo().subscribe((resp:any)=>{
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  configureNgoForm(){
    this.NgoForm = new FormGroup({
      ngoName: new FormControl(null,Validators.required)
    })
  }

  onAdd(){
    const values = this.NgoForm.value;
    console.log(values);
    this.ngoService.addNgo(values).subscribe((response:any)=>{
      this.reload();
      this.alert();
    })

  }


  openDialog2(row:any){
    this.EditNgoForm = new FormGroup({
      ngoName: new FormControl(row.ngoName),
      ngoCode: new FormControl(row.ngoCode)
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

  configureEditNgoForm(){
    this.EditNgoForm = new FormGroup({
      ngoName: new FormControl(null),
      ngoCode: new FormControl(null),
    })
  }

  onEdit(){
    const id = this.EditNgoForm.value.ngoCode;
    const values = this.EditNgoForm.value;

    this.ngoService.editNgo(id,values).subscribe((response:any)=>{
      this.reload();
      this.alert2();
    })
  }

  reload(){
    this.router.navigateByUrl('',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['home/ngo'])
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
      title: "NGO Added successfully"
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
      title: "NGO Edited successfully"
    });
  }


}

