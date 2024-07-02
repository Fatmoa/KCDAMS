import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-addreception',
  templateUrl: './addreception.component.html',
  styleUrls: ['./addreception.component.scss'],
})

export class AddreceptionComponent implements OnInit{
  radius: number | undefined;
  firstFormGroup!:FormGroup;
  secondFormGroup!:FormGroup;
  thirdFormGroup!:FormGroup;
  parentFormGroup!: FormGroup;


  constructor(private _formBuilder: FormBuilder,private router: Router) {}



  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      dob: ['', Validators.required],
      phone: ['', Validators.required],
      children: ['', Validators.required],
      Nida: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      ngoName: ['', Validators.required],
      cowName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      garName1: ['', Validators.required],
      relation1: ['', Validators.required],
      pNum1: ['', Validators.required],
    });
    this.parentFormGroup = this._formBuilder.group({
      firstFormGroup: this.firstFormGroup,
      secondFormGroup: this.secondFormGroup,
      thirdFormGroup: this.thirdFormGroup,
    });

  }

  onBack(){
   this.router.navigateByUrl('receptions')
  }

  onSubmit(){
    if (this.parentFormGroup.valid){
      console.log(this.parentFormGroup.value);
    }else{
      console.log('Form is invalid');
    }
  }
}


