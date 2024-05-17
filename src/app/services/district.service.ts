import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  districtAPI = environment.baseUrl+"regions/"

  constructor(private http: HttpClient) { }

  getAllDistrict(){
    this.http.get(this.districtAPI+"all")
  }

  addDistrict(body:any){
    this.http.post(this.districtAPI+"save",body)
  }

  editDistrict(id:any,body:any){
    this.http.put(this.districtAPI+"editDistrict/"+id,body)
  }
}
