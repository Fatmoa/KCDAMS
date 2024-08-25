import { NgoService } from './../../services/ngo.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DistrictService } from 'src/app/services/district.service';
import { ImageService } from 'src/app/services/image.service';
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
    private receptionImageService:ImageService
  ) { }

  Selectfile1: File = null!;
  onImageUpload1(event: any) {
    // this.Selectfile1 = event.target.files[0];
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  ngOnInit(): void {

    this.fetchAllDistrict();
    this.configureForm();

  }

  configureForm() {
    this.receptionForm = new FormGroup({
      patFName: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      patMName: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      patLName: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      dob: new FormControl('', Validators.required),
      districtData: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      mar_status: new FormControl('',Validators.required),
      education: new FormControl('', Validators.required),
      employment: new FormControl('', Validators.required),
      phoneNumber: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{10}$')]),
      no_children: new FormControl('', [Validators.required, Validators.min(0)]),
      reg: new FormControl('', Validators.required),
      ngoName: new FormControl('', Validators.required),
      nida: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{20}$')]),
      ngo: new FormControl('', Validators.required),
      cowName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      cowPhone: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{10}$')]),
      kinName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      kinPhoneNumber: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{10}$')]),
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

  onSubmit() {
    // if (this.receptionForm.valid) {
      const values = this.receptionForm.value;
      const Date1 = new Date(values.dob);
      const year = Date1.getFullYear();
      const month = String(Date1.getMonth() + 1).padStart(2, '0');
      const day = String(Date1.getDate()).padStart(2, '0');
      const dob = `${year}-${month}-${day}`;
      const values2 = { ...values, dob }
      this.receptionService.addReception(values2).subscribe((resp: any) => {
        console.log(resp);
       this.receptionImageService.uploadImage(resp.matCode, this.selectedFile).subscribe((output: any) => {});
        this.alert();
        this.reload();
      })
  // }
  // else {
  //   this.receptionForm.markAllAsTouched();
  //   this.alert2();

  // }

}



  reload(){
    this.router.navigateByUrl('',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['/home/receptions'])
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

  alert2() {
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
      icon: "error",
      title: "Fail to save! Invalid form "
    });
  }

}







