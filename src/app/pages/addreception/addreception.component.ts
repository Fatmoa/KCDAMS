import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addreception',
  templateUrl: './addreception.component.html',
  styleUrls: ['./addreception.component.scss']
})

export class AddreceptionComponent implements OnInit{
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,private router: Router) {}
  ngOnInit(): void {

  }
  onBack(){
   this.router.navigateByUrl('receptions')
  }


}
