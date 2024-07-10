import { HttpClient } from '@angular/common/http';
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
  selectedFile: File | null = null;


  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  Selectfile1: File = null!;
  onImageUpload1(event: any) {
    this.Selectfile1 = event.target.files[0];
  }

  // const form1 = new FormData();
  //  form1.append('imageFile', this.Selectfile1, this.Selectfile1.name);
  // this.houseImageService.addHouseImage(resp.mat_code, form1).subscribe((output: any) => {});


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


