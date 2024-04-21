import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients-info',
  templateUrl: './patients-info.component.html',
  styleUrls: ['./patients-info.component.scss']
})
export class PatientsInfoComponent implements OnInit{
  constructor(private router:Router, private _formBuilder: FormBuilder){}
  ngOnInit(): void {

  }
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

  onBack(){
    this.router.navigateByUrl('doctor')
   }

}

