import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceptionService } from 'src/app/services/reception.service';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.scss']
})
export class ViewPatientsComponent implements OnInit{

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private receptionService:ReceptionService

  ) {}

  ngOnInit(): void {
    const recep =this.route.snapshot.queryParamMap.get('id');
    this.fetchReceptionById(recep);
  }


  receptions:any;
  fetchReceptionById(id:any){
  this.receptionService.getReceptionById(id).subscribe((resp:any)=>{
  console.log(resp);
  this.receptions = resp;
  })
}

}
