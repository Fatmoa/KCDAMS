import { ReceptionService } from './../../services/reception.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-reception',
  templateUrl: './edit-reception.component.html',
  styleUrls: ['./edit-reception.component.scss']
})
export class EditReceptionComponent implements OnInit{
  EditForm!: FormGroup

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private receptionService:ReceptionService
  ){

  }

  ngOnInit(): void {
    const matID = this.route.snapshot.queryParamMap.get('path');
    console.log(matID);
    this.fetchReceptionByID(matID)

    this.configureEditForm();
  }

  onBack(){
    this.router.navigateByUrl('receptions')
  }

  configureEditForm(){
    this.EditForm = new FormGroup({
      fName: new FormControl(null),
      lName: new FormControl(null),
      DoB:new FormControl(null),
      kName: new FormControl(null),
      relation: new FormControl(null),
      cName: new FormControl(null),
      matCode:new FormControl(null)
    })
  }

  fetchReceptionByID(id:any){
    this.receptionService.getReceptionById(id).subscribe((resp:any)=>{
      console.log(resp);
      this.EditForm = new FormGroup({
        fName: new FormControl(resp.patFName),
        lName: new FormControl(resp.patLName),
        DoB:new FormControl(resp.dob),
        kName: new FormControl(resp.kinName),
        relation: new FormControl(resp.kinRelationship),
        cName: new FormControl(resp.cowName),
        matCode:new FormControl(resp.matCode)
      })

    })
  }
  onClose(){

  }
  onEdit(){
    const id = this.EditForm.value.matCode;
    const values = this.EditForm.value;
    console.log(values);
    this.receptionService.editReception(id,values).subscribe((resp:any)=>{
      console.log('edited');

    })

  }

}
