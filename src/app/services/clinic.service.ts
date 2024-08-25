import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  clinicAPI= environment.baseUrl+"clinic/"

  constructor(private http:HttpClient) { }

  addClinic(body:any){
    return this.http.post(this.clinicAPI+"save",body)
  }

  getAllClinic(){
    return this.http.get(this.clinicAPI+"all")
  }
}
