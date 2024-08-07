import { ReceptionService } from './../../services/reception.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
    this.router.navigateByUrl('/home/receptions')
  }

  configureEditForm(){
    this.EditForm = new FormGroup({
      patFName: new FormControl(null),
      patLName: new FormControl(null),
      dob:new FormControl(null),
      kinName: new FormControl(null),
      kinRelationship: new FormControl(null),
      cowName: new FormControl(null),
      matCode:new FormControl(null)
    })
  }

  fetchReceptionByID(id:any){
    this.receptionService.getReceptionById(id).subscribe((resp:any)=>{
      console.log(resp);
      this.EditForm = new FormGroup({
        patFName: new FormControl(resp.patFName),
        patLName: new FormControl(resp.patLName),
        dob:new FormControl(resp.dob),
        kinName: new FormControl(resp.kinName),
        kinRelationship: new FormControl(resp.kinRelationship),
        cowName: new FormControl(resp.cowName),
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
      console.log(resp);
      this.reload();
      this.alert()

    })
  }

  reload() {
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['home/reception'])
    })
  }

  alert() {
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
      title: "Patients Edited successfully"
    });
  }
}
