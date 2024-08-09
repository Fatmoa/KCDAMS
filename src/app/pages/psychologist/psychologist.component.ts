import { PsychologistService } from './../../services/psychologist.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-psychologist',
  templateUrl: './psychologist.component.html',
  styleUrls: ['./psychologist.component.scss']
})
export class PsychologistComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit','time','type'];
  @ViewChild('distributionDialog') distributionDialog!: TemplateRef<any>;
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor (
    private router:Router,
    private route: ActivatedRoute,
    private dialog:MatDialog,
    private psychologistService: PsychologistService  ){}


  ngOnInit(): void {
    this.fetchAll()
  }


  DrugType:any[] = [
    {value:''},
    {value:''},
    {value:''},
    {value:''},
  ];

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

  fetchAll(){
    this.psychologistService.getAllPsychologist().subscribe((resp:any)=>{
      this.dataSource=new MatTableDataSource(resp);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  onClient(){
    let dialogRef = this.dialog.open(this.distributionDialog, {
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
}


