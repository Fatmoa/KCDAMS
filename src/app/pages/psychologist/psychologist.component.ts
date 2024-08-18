import { DrugService } from './../../services/drug.service';
import { PsychologistService } from './../../services/psychologist.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-psychologist',
  templateUrl: './psychologist.component.html',
  styleUrls: ['./psychologist.component.scss']
})
export class PsychologistComponent implements OnInit{
  displayedColumns: string[] = ['id', 'duration', 'reason', 'sympto','time','type','action'];
  @ViewChild('distributionDialog') distributionDialog!: TemplateRef<any>;
  @ViewChild('distributionDialog2') distributionDialog2!: TemplateRef<any>;
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor (
    private router:Router,
    private route: ActivatedRoute,
    private dialog:MatDialog,
    private psychologistService: PsychologistService,
    private drugService: DrugService,
  ){}

    PsyForm!:FormGroup
    EditPsyForm!:FormGroup

  ngOnInit(): void {
    this.fetchAll()
    this.configPsyForm()
    this.ConfigEditPsyForm()
    this.fetchAllDrugs()
  }


  // DrugType:any[] = [ ];
  DrugType:any
  fetchAllDrugs(){
    this.drugService.getAllDrug().subscribe((resp:any)=>{
      console.log(resp);
      this.DrugType = resp;

    })

  }

  disorder:any []=[
    {value:'Feeling of deep thought,sadness with lose hope,lack of interestin thingsonce loved'},
    {value:'Feeling of anxiety, worrying without any reason, lack of calmness'},
    {value:'Feeling sleepy-seeing things/hearing sounds that others dont,feeling people want to harm you '},
    {value:'Abig problem of not being able to understand,to not be able to concentrateor lossof memory'},
    {value:'Problem having uncontrollable anger,causing destruction,destroying things or use abusive language'},
    {value:'Suicidal thoughts'},
    {value:'Suicidal attempt'},

  ]
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

  configPsyForm(){
    this.PsyForm = new FormGroup ({
      drugDuration:new FormControl(null,Validators.required),
      drugs:new FormControl(null,Validators.required),
      drugDay:new FormControl(null,Validators.required),
      reasUse:new FormControl(null,Validators.required),
      tstop:new FormControl(null,Validators.required),
      rstop:new FormControl(null,Validators.required),
      fhistory:new FormControl(null,Validators.required),
      crAffair:new FormControl(null,Validators.required),
      symptoms:new FormControl(null,Validators.required),
      splan:new FormControl(null,Validators.required),
      comm:new FormControl(null,Validators.required),
    })
  }

  ConfigEditPsyForm(){
    this.EditPsyForm = new FormGroup({
      drugDuration:new FormControl(null),
      reasUse:new FormControl(null),
      rstop:new FormControl(null),
      tstop:new FormControl(null),
      drugDay:new FormControl(null),

    })
  }

  onSave(){
    const values = this.PsyForm.value;
    this.psychologistService.addPsychologist(values).subscribe((resp:any)=>{
      console.log(resp);
      this.reload();
      this.alert();
    })
  }

  onEdit(){
    const id = this.EditPsyForm.value.pyId;
    const values = this.EditPsyForm.value;
    this.psychologistService.editPsychologist(id,values).subscribe((resp:any)=>{
      this.reload();
      this.alert2();
    })

  }

  onView(){

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
      title: "Added successfully"
    });
  }

  fetchAll(){
    this.psychologistService.getAllPsychologist().subscribe((resp:any)=>{
      console.log(resp);

      this.dataSource=new MatTableDataSource(resp);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  onClient(){
    let dialogRef = this.dialog.open(this.distributionDialog, {
      width: '999px',
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

  reload(){
    this.router.navigateByUrl('',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['/home/psychologist'])
    })
  }

  openDialog2(row:any){
    this.EditPsyForm = new FormGroup({
      drugDuration:new FormControl(row.drugDuration),
      reasUse:new FormControl(row.reasUse),
      rstop:new FormControl(row.rstop),
      tstop:new FormControl(row.tstop),
      drugDay:new FormControl(row.drugDay),
      pyId:new FormControl(row.pyId),
    })

    console.log(row);


    let dialogRef = this.dialog.open(this.distributionDialog2, {
      width: '990px',
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
      title: "Edited successfully"
    });
  }
}


