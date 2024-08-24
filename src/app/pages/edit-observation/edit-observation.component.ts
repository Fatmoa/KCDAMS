import { FormControl, FormGroup } from '@angular/forms';
import { ObservationService } from './../../services/observation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-observation',
  templateUrl: './edit-observation.component.html',
  styleUrls: ['./edit-observation.component.scss']
})
export class EditObservationComponent implements OnInit {

  EditForm!:FormGroup

  maambukizi:any[] = [
    {value:'TB'},
    {value:'HIV'},
    {value:'HCV'},
    {value:'HBV'},
    {value:'STI'},
    {value:'Hypertension'},
    {value:'Diabetes Mellitus'},


  ];

  constructor(
    private observationService:ObservationService,
    private router:Router,
    private route:ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const ObID = this.route.snapshot.queryParamMap.get('path');
    console.log(ObID);
    this.fetchById(ObID)
    this.configureEditForm();
  }

  onBack(){
    this.router.navigateByUrl('/home/observation')
  }

  configureEditForm(){
    this.EditForm = new FormGroup({
      usag:new FormControl(null),
      lastDrug:new FormControl(null),
      lastUsg:new FormControl(null),
      deseas:new FormControl(null),
      obId:new FormControl(null),
    })
  }

  fetchById(id:any){
    this.observationService.getObservationByCode(id).subscribe((resp:any)=>{
      this.EditForm = new FormGroup ({
        usag:new FormControl(resp.usag),
        lastDrug:new FormControl(resp.lastDrug),
        lastUsg:new FormControl(resp.lastUsg),
        deseas:new FormControl(resp.deseas),
        obId:new FormControl(resp.obId),
      })
    })
  }

  onClose(){

  }

  onEdit(){
    const id = this.EditForm.value.obId;
    const values = this.EditForm.value;
    console.log(values);

    this.observationService.editObservation(id,values).subscribe((resp:any)=>{
      this.reload();
      this.alert()
    })

  }

  reload() {
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/home/observation'])
    })
  }

  alert() {
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
      title: "Patients Edited successfully"
    });
  }
}
