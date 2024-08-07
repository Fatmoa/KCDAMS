import { NgoService } from './../../services/ngo.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DistrictService } from 'src/app/services/district.service';
import { ReceptionService } from 'src/app/services/reception.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-addreception',
  templateUrl: './addreception.component.html',
  styleUrls: ['./addreception.component.scss'],
})

export class AddreceptionComponent implements OnInit {
  radius: number | undefined;
  selectedFile: File | null = null;

  receptionForm!: FormGroup
  constructor(
    private router: Router,
    private districtService: DistrictService,
    private receptionService: ReceptionService,
    private ngoService: NgoService,
  ) { }

  Selectfile1: File = null!;
  onImageUpload1(event: any) {
    this.Selectfile1 = event.target.files[0];
  }

  // const form1 = new FormData();
  //  form1.append('imageFile', this.Selectfile1, this.Selectfile1.name);
  // this.houseImageService.addHouseImage(resp.mat_code, form1).subscribe((output: any) => {});


  ngOnInit(): void {

    this.fetchAllDistrict();
    this.configureForm();
    // this.fetchAllNgo()
  }

  configureForm() {
    this.receptionForm = new FormGroup({
      patFName: new FormControl('', Validators.required),
      patMName: new FormControl(''),
      patLName: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      districtData: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      mar_status: new FormControl(''),
      education: new FormControl('', Validators.required),
      employment: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      no_children: new FormControl('', Validators.required),
      reg: new FormControl('', Validators.required),
      nida: new FormControl(''),
      // ngoData: new FormControl('', Validators.required),
      ngoData: new FormControl('', Validators.required),
      cowName: new FormControl('', Validators.required),
      cowPhone: new FormControl(''),
      kinName: new FormControl('', Validators.required),
      kinPhoneNumber: new FormControl('', Validators.required),
      kinRelation: new FormControl('', Validators.required),

    })
  }

  onBack() {
    this.router.navigateByUrl('/home/receptions')
  }


  districts: any;
  fetchAllDistrict() {
    this.districtService.getAllDistrict().subscribe((resp: any) => {
      this.districts = resp
    })
  }

  // ngos:any
  // fetchAllNgo(){
  //   this.ngoService.getAllNgo().subscribe((resp:any)=>{
  //     this.ngos=resp
  //   })
  // }

  onSubmit() {
    const values = this.receptionForm.value;
    const Date1 = new Date(values.dob);
    const year = Date1.getFullYear();
    const month = String(Date1.getMonth() + 1).padStart(2, '0');
    const day = String(Date1.getDate()).padStart(2, '0');
    const dob = `${year}-${month}-${day}`;
    const values2 = { ...values, dob }
    this.receptionService.addReception(values2).subscribe((resp: any) => {
      console.log(resp);
      this.alert();
      this.reload();

      // console.log('added');

    })

  }

  reload(){
    this.router.navigateByUrl('',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['home/reception'])
    })
  }

  alert(){
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
      title: "Patient Added successfully"
    });
  }

}


