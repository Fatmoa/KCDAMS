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

  TaarifaYaUsajili!:FormGroup;
  MtoaTaarifa!:FormGroup;
  Mawasiliano!:FormGroup

  constructor(private _formBuilder: FormBuilder,private router: Router) {}

  ngOnInit(): void {
    this.FormConfig()
  }


  FormConfig(){

    this.TaarifaYaUsajili = new FormGroup({
      firstName:new FormControl("",[Validators.required]),
      secondName:new FormControl("",[Validators.required]),
      lastName:new FormControl("",[Validators.required]),
      dob:new FormControl("",[Validators.required]),
      // age:new FormControl("",[Validators.required]),
      // maritalStatus:new FormControl("",[Validators.required]),
      // employment:new FormControl("",[Validators.required]),
      phone:new FormControl("",[Validators.required]),
      // children:new FormControl("",[Validators.required]),
      // usajili:new FormControl("",[Validators.required]),
      // address:new FormControl("",[Validators.required]),
      Nida:new FormControl("",[Validators.required]),


    })

    this.MtoaTaarifa = new FormGroup({
      ngoName:new FormControl("",[Validators.required]),
      cowName:new FormControl("",[Validators.required]),
      phoneNumber:new FormControl("",[Validators.required]),
    })

    this.Mawasiliano = new FormGroup({
      garName1:new FormControl("",[Validators.required]),
      relation1:new FormControl("",[Validators.required]),
      // address1:new FormControl("",[Validators.required]),
      pNum1:new FormControl("",[Validators.required]),
      // garName2:new FormControl("",[Validators.required]),
      // relation2:new FormControl("",[Validators.required]),
      // address2:new FormControl("",[Validators.required]),
      // pNum2:new FormControl("",[Validators.required]),

    })

  }

  SaveData(){
    console.log(this.TaarifaYaUsajili.value)
    console.log(this.MtoaTaarifa.value)
    console.log(this.Mawasiliano.value)
  }



  onBack(){
   this.router.navigateByUrl('receptions')
  }


}


