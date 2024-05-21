import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ZoneService } from './../../services/zone.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionService } from 'src/app/services/region.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit{
  displayedColumns: string[] = ['id', 'zone', 'region', 'status','action'];
  @ViewChild('distributionDialog') distributionDialog!: TemplateRef<any>;
  @ViewChild('distributionDialog2') distributionDialog2!: TemplateRef<any>;
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  RegionForm!:FormGroup;
  EditRegionForm!:FormGroup

  constructor (
    private router:Router,
    private route: ActivatedRoute,
    private dialog:MatDialog,
    private zoneService: ZoneService,
    private regionService: RegionService,

  ){ }
  ngOnInit(): void {
    this.fetchAllZone();
    this.fetchAllRegion();
    this.configureRegionForm();
    this.configureEditRegionForm()

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


  fetchAllRegion(){
    this.regionService.getAllRegion().subscribe((resp:any)=>{
      console.log(resp);
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

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


  zones:any
  fetchAllZone(){
    this.zoneService.getAllZone().subscribe((resp:any)=>{
      this.zones=resp;
    })
  }


  configureRegionForm(){
    this.RegionForm = new FormGroup ({
    regionName:new FormControl(null, Validators.required),
    zone:new FormControl(null, Validators.required),
    regionStatus:new FormControl(1)
    })
  }


  onSave(){
    const values = this.RegionForm.value;
    console.log(values);
    this.regionService.addRegion(values).subscribe((response:any)=>{
    })

  }

  openDialog2(row:any){
    this.EditRegionForm= new FormGroup({
      regionCode: new FormControl(row.regionCode),
      zone: new FormControl(row.zone.zoneCode),
      regionName: new FormControl(row.regionName),

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

  configureEditRegionForm(){
    this.EditRegionForm = new FormGroup({
      regionCode: new FormControl(null),
      zone: new FormControl(null),
      regionName: new FormControl(null)
    })
  }



  onEdit(){
    const id = this.EditRegionForm.value.regionCode;
    this.zoneService.getZoneByCode(this.EditRegionForm.value.zone).subscribe((resp:any)=>{
      const values = {...this.EditRegionForm.value,zone:resp}
      this.regionService.editRegion(id,values).subscribe((resp:any)=>{
        this.reload();
        this.alert2();
        console.log(resp);

      })
    })
  }


  reload(){
    this.router.navigateByUrl('',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['region'])
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
      title: "Region Edited successfully"
    });
  }

}




