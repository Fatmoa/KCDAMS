import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent  implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'status', 'action'];
  @ViewChild('distributionDialog') distributionDialog!: TemplateRef<any>;
  @ViewChild('distributionDialog2') distributionDialog2!: TemplateRef<any>;
  dataSource!: MatTableDataSource<any>;
  ZoneForm!: FormGroup
  ZoneEditForm!: FormGroup


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor (
    private router:Router,
    private route: ActivatedRoute,
    private dialog:MatDialog,
    private zoneService:ZoneService

  ){}
  ngOnInit(): void {
    this.fetchAllZone()
    this.configureZoneForm()
    this.configurationZoneEditForm()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSave(){
    const values=this.ZoneForm.value;
    this.zoneService.addZone(values).subscribe((resp:any)=>{
      this.reload();
      this.alert();
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  fetchAllZone(){
    this.zoneService.getAllZone().subscribe((resp:any)=>{
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

  openDialog2(row:any){
    this.ZoneEditForm= new FormGroup({
      zoneName: new FormControl(row.zoneName),
      zoneCode: new FormControl(row.zoneCode)
    })
    console.log(row);

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


  configureZoneForm(){
    this.ZoneForm = new FormGroup({
      zoneName: new FormControl(null,Validators.required),
      zoneStatus: new FormControl(1)
    })

  }


  reload(){
    this.router.navigateByUrl('',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['zone'])
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
      title: "Zone Added successfully"
    });
  }

  configurationZoneEditForm(){
    this.ZoneEditForm= new FormGroup({
      zoneName: new FormControl(null),
      zoneCode: new FormControl(null)
    })
  }

  onEdit(){
    const id=this.ZoneEditForm.value.zoneCode;
    const values = this.ZoneEditForm.value;

    this.zoneService.editZone(id,values).subscribe((resp:any)=>{
      this.reload();
      this.alert2();
    })
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
        title: "Zone Edited successfully"
      });
    }
  }
