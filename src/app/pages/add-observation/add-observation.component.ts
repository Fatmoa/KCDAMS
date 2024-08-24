import { ObservationService } from './../../services/observation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-observation',
  templateUrl: './add-observation.component.html',
  styleUrls: ['./add-observation.component.scss']
})


export class AddObservationComponent implements OnInit{
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';


  ObsForm!:FormGroup
  constructor (
    private _formBuilder: FormBuilder,
    private router: Router,
    private observationService: ObservationService,
  ){
  }
  centered = false;

  unbounded = false;

  radius: number | undefined;


  DrugType:any[] = [
    {value:'Heroin'},
    {value:'Cocaine'},
    {value:'Methadone'},
    {value:'Bangi'},
    {value:'Valium'},
    {value:'Mirungi'},
  ];
  maambukizi:any[] = [
    {value:'TB'},
    {value:'HIV'},
    {value:'HCV'},
    {value:'HBV'},
    {value:'STI'},
    {value:'Hypertension'},
    {value:'Diabetes Mellitus'},


  ];



  ngOnInit(): void {
    this.configureForm()
  }

  configureForm(){
    this.ObsForm = new FormGroup({
      drugType:new FormControl('',Validators.required),
      usag:new FormControl('',Validators.required),
      lastDrug:new FormControl('',Validators.required),
      lastUsg:new FormControl('',Validators.required),
      deseas:new FormControl('',Validators.required),
      tbtreat:new FormControl('',Validators.required),
      press:new FormControl('',Validators.required),
      bp:new FormControl('',Validators.required),
      weight:new FormControl('',Validators.required),
      height:new FormControl('',Validators.required),
      pulse:new FormControl('',Validators.required),
      pr:new FormControl('',Validators.required),
      Partner:new FormControl('',Validators.required),
      comment:new FormControl('',Validators.required),
      niddle:new FormControl('',Validators.required),
      venous:new FormControl('',Validators.required),
      phlebitis:new FormControl('',Validators.required),
      pl_niddle:new FormControl('',Validators.required),
      pl_venous:new FormControl('',Validators.required),
      pl_phlebitis:new FormControl('',Validators.required),

    })


  }

  onSubmit(){
    const values = this.ObsForm.value;
    this.observationService.addObservation(values).subscribe((resp:any)=>{
      console.log(resp);
      this.reload();
      this.alert()
    })

  }

  onBack(){
    this.router.navigateByUrl('/home/observation')
   }

   reload(){
    this.router.navigateByUrl('',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['home/observation'])
    })
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
      title: "Patient Added successfully"
    });
  }

}
