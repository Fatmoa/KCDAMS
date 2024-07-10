import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceptionService } from 'src/app/services/reception.service';


@Component({
  selector: 'app-receptions',
  templateUrl: './receptions.component.html',
  styleUrls: ['./receptions.component.scss']
})
export class ReceptionsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name','dod', 'kin', 'relation','cow', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor (
    private router:Router,
    private route: ActivatedRoute,
    private receptionService:ReceptionService
  ){}
  ngOnInit(): void {
    this.fetchAllPat()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onAdd(){
    this.router.navigateByUrl('add-reception')
   }

   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();

     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
   }

   fetchAllPat(){
    this.receptionService.getAllrecption().subscribe((resp:any)=>{
      console.log(resp);
      this.dataSource=new MatTableDataSource(resp);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
   }

   onEdit(row:any){
    this.router.navigate(['edit-reception'],{queryParams:{path:row.matCode}})
    // console.log(row.matCode);

   }
 }

