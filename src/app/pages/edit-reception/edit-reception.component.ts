import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-reception',
  templateUrl: './edit-reception.component.html',
  styleUrls: ['./edit-reception.component.scss']
})
export class EditReceptionComponent implements OnInit{
  firstFormGroup!:FormGroup;
  secondFormGroup!:FormGroup;
  thirdFormGroup!:FormGroup;
  parentFormGroup!: FormGroup;
  private _formBuilder: any;
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

}
