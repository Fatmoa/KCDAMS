import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  reportAPI= environment.baseUrl+"report/"

  constructor(private http: HttpClient) { }

  getPatientByDistrict(){
    return this.http.get(this.reportAPI+"patientDistrictReport")
  }

  getSummary(){
    return this.http.get(this.reportAPI+"summary")
  }

  getDoctorByGender(){
    return this.http.get(this.reportAPI+"doctorGenderReport")
  }
}
