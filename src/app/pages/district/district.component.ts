import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DistrictService } from 'src/app/services/district.service';
import { RegionService } from 'src/app/services/region.service';



@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit{
  displayedColumns: string[] = ['id', 'region', 'district', 'status', 'action'];
  @ViewChild('distributionDialog') distributionDialog!: TemplateRef<any>;
  dataSource!: MatTableDataSource<any>;
  DistrictForm!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
x: any;
i: any;
  constructor (
    private router:Router,
    private route: ActivatedRoute,
    private dialog:MatDialog,
    private regionService: RegionService,
    private districtService: DistrictService

  ){

  }
  ngOnInit(): void {
    this.fetchAllRegion()
    this.fetchAllDistrict()
    this.configureDistrictForm()

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

  fetchAllDistrict(){
    this.districtService.getAllDistrict().subscribe((resp:any)=>{
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


  regions:any
  fetchAllRegion(){
    this.regionService.getAllRegion().subscribe((resp:any)=>{
      this.regions=resp;
    })
  }

  configureDistrictForm(){
    this.DistrictForm= new FormGroup({
      districtName: new FormControl(null, Validators.required),
      region: new FormControl(null, Validators.required),
      districtStatus: new FormControl(1)
    })

  }

  onSave(){
    const val = this.DistrictForm.value
    console.log(val);
    this.districtService.addDistrict(val).subscribe((response:any)=>{
      
    })

  }


}







