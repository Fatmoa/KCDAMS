import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-observation',
  templateUrl: './add-observation.component.html',
  styleUrls: ['./add-observation.component.scss']
})


export class AddObservationComponent implements OnInit{
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  constructor (
    private _formBuilder: FormBuilder,
    private router: Router
  ){
  }
  centered = false;

  unbounded = false;

  radius: number | undefined;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  DrugType:any[] = [
    {value:'Heroin'},
    {value:'Cocaine'},
    {value:'Methadone'},
    {value:'Bangi'},
    {value:'Valium'},
    {value:'Mirungi'},
  ];
  maambukizi:any[] = [
    {value:'VVU'},
    {value:'VHB'},
    {value:'VHC'},

  ];



  ngOnInit(): void {
    
  }
  onBack(){
    this.router.navigateByUrl('nurse')
   }

}
