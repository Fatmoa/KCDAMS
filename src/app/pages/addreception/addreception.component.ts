import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';




@Component({
  selector: 'app-addreception',
  templateUrl: './addreception.component.html',
  styleUrls: ['./addreception.component.scss'],
})

export class AddreceptionComponent implements OnInit{

  radius: number | undefined;

  combinedForm!:FormGroup;


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });





  constructor(private _formBuilder: FormBuilder,private router: Router) {
    // this.combinedForm = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required],
    //   secondCtrl: ['', Validators.required],
    //   thirdCtrl: ['', Validators.required],
    // });
  }

  ngOnInit(): void {

  }
  onBack(){
   this.router.navigateByUrl('receptions')
  }


}


