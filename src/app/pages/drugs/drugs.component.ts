import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DrugService } from 'src/app/services/drug.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.scss']
})
export class DrugsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','action'];
  @ViewChild('distributionDialog') distributionDialog!: TemplateRef<any>;
  @ViewChild('distributionDialog2') distributionDialog2!: TemplateRef<any>;
  dataSource!: MatTableDataSource<any>;
  drugForm!: FormGroup;
  EditDrugForm!:FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor (
    private router:Router,
    private route: ActivatedRoute,
    private dialog:MatDialog,
    private drugService: DrugService,

  ){}
  ngOnInit(): void {
    this.fetchAllDrug();
    this.configureDrugForm();
    this.configureEditDrugForm()
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


  fetchAllDrug(){
    this.drugService.getAllDrug().subscribe((resp:any)=>{
      console.log(resp);
      this.dataSource=new MatTableDataSource(resp);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.sort
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

  configureDrugForm(){
    this.drugForm = new FormGroup({
      drugName: new FormControl(null,Validators.required)
    })
  }

  onSave(){
    const values = this.drugForm.value;
    console.log(values);
    this.drugService.addDrug(values).subscribe((response:any)=>{
    })
  }


  openDialog2(row:any){
    console.log(row);

    this.EditDrugForm = new FormGroup({
      drugName: new FormControl(row.drugName),
      drugCode:new FormControl(row.drugCode)
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


  configureEditDrugForm(){
    this.EditDrugForm = new FormGroup({
      drugCode:new FormControl(null),
      drugName: new FormControl(null)
    })
  }

  onEdit(){
    const id = this.EditDrugForm.value.drugCode;
    const val = this.EditDrugForm.value

    this.drugService.editDrug(id,val).subscribe((response:any)=>{
    })
  }

}



