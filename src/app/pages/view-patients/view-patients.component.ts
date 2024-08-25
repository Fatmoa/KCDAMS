import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { ReceptionService } from 'src/app/services/reception.service';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.scss']
})
export class ViewPatientsComponent implements OnInit{

  constructor(
    private router:Router,
    private sanitizer:DomSanitizer,
    private route:ActivatedRoute,
    private receptionService:ReceptionService,
    private receptionImageService:ImageService,

  ) {}

  ngOnInit(): void {
    const recep =this.route.snapshot.queryParamMap.get('id');
    this.fetchReceptionById(recep);
  }

imageSource1:any

fetchPatImage(id:any){
this.receptionImageService.getPatientImage(id).subscribe((resp:any)=>{
  this.imageSource1=resp;
  console.log(resp);

  // this.imageSource1 = this.sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,${resp.matCode}`);
  // console.log(resp);


})
}

dislayImage(url:any){
return `data:image/png;base64,`+url;
}

  receptions:any;
  fetchReceptionById(id:any){
  this.receptionService.getReceptionById(id).subscribe((resp:any)=>{
  console.log(resp);
  this.receptions = resp;
  })
}

}
