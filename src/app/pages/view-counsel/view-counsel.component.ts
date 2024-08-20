import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PsychologistService } from 'src/app/services/psychologist.service';

@Component({
  selector: 'app-view-counsel',
  templateUrl: './view-counsel.component.html',
  styleUrls: ['./view-counsel.component.scss']
})
export class ViewCounselComponent implements OnInit{
  displayedColumns: string[] = ['id', 'reason','rstp', 'tstop','sympt'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private dialog:MatDialog,
    private psychologistService: PsychologistService,
  ) {}

  ngOnInit(): void {
    this.fetchAll()
  }

  fetchAll(){
    this.psychologistService.getAllPsychologist().subscribe((resp:any)=>{
      console.log(resp);

      this.dataSource=new MatTableDataSource(resp);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
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

}
