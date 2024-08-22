import { PsychologistService } from 'src/app/services/psychologist.service';
import { ReceptionService } from 'src/app/services/reception.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-psycholog',
  templateUrl: './view-psycholog.component.html',
  styleUrls: ['./view-psycholog.component.scss']
})
export class ViewPsychologComponent implements OnInit{

  constructor(
    private route:ActivatedRoute,
    private receptionService:ReceptionService,
    private psychologistService:PsychologistService,
  ) {}
  ngOnInit(): void {
    const recep =this.route.snapshot.queryParamMap.get('id');
    this.fetchReceptionById(recep);

    const psy =this.route.snapshot.queryParamMap.get('id');
    this.fetchPsychoById(psy);

  }


  receptions:any;
  fetchReceptionById(id:any){
  this.receptionService.getReceptionById(id).subscribe((resp:any)=>{
  console.log(resp);
  this.receptions = resp;
  })
}

  pschs:any;
  fetchPsychoById(id:any){
    this.psychologistService.getPsychologistByCode(id).subscribe((resp:any)=>{
      console.log(resp);

      this.pschs = resp;
    })
  }



}
