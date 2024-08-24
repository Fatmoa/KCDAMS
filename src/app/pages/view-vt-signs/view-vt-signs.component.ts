import { ObservationService } from 'src/app/services/observation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-vt-signs',
  templateUrl: './view-vt-signs.component.html',
  styleUrls: ['./view-vt-signs.component.scss']
})
export class ViewVtSignsComponent implements OnInit {

  constructor(
    private observationService:ObservationService,
    private route:ActivatedRoute,
  ) {}
  ngOnInit(): void {
    const obser =this.route.snapshot.queryParamMap.get('id');
    this.fetchSignMesById(obser);
  }

  mesures:any;
  fetchSignMesById(id:any){
  this.observationService.getObservationByCode(id).subscribe((resp:any)=>{
  console.log(resp);
  this.mesures = resp;
  })
}


}
