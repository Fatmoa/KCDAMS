import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';



export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
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
  selector: 'app-social-worker',
  templateUrl: './social-worker.component.html',
  styleUrls: ['./social-worker.component.scss']
})
export class SocialWorkerComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  @ViewChild('distributionDialog') distributionDialog!: TemplateRef<any>;
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor (
    private router:Router,
    private route: ActivatedRoute,
    private dialog:MatDialog
  ){
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit(): void {

  }
  DrugType:any[] = [
    {value:'Small'},
    {value:'Medium'},
    {value:'Large'},
    {value:'Larger'},
  ];

  matumizi:any[] = [
    {value:'Amevuta damu ya mwenza na kujidunga'},
    {value:'Vijipoint'},
    {value:'Ametumia bomba ile ile zaidi ya mara moja'},
    {value:'Amechangia na mwenzie'},
  ];
  uhifadhi:any[] = [
    {value:'Naficha maskani'},
    {value:'Naweka popote'},
    {value:'Nahifadhi sehemu maalum nyumbani'},
    {value:'Situmii tena'},
  ];
  usafishaji:any[] = [
    {value:'Nasafisha kwa maji'},
    {value:'Nasafisha kwa maji na jiki'},
    {value:'Nasafisha kwa pombe'},
    {value:'Natumia spiriti na maji'},
    {value:'Sisafishi tena'},
    {value:'Nasafisha kwa kitambaa'},
  ];
  aina_ngono:any[] = [
    {value:'Ngono ukeni'},
    {value:'Ngono kinyume na maumbile'},
    {value:'Ngono na jinsia moja'},
  ];
  wenza:any[] = [
    {value:'Mwenza'},
    {value:'Wenza 2 hadi wa 3'},
    {value:'Wenza 4 hadi wa 5'},
    {value:'Zaidi'},
  ];
  matumiz_condom:any[] = [
    {value:'Wakati wote'},
    {value:'Baadhi ya wakati'},
    {value:'Sijawahi kutumia'},
    {value:'Sijajamiiana na yoyote'},
  ];
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onClick(){
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}


