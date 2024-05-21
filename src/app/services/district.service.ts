import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  districtAPI = environment.baseUrl+"districts/"

  constructor(private http: HttpClient) { }

  getAllDistrict(){
   return this.http.get(this.districtAPI+"all")
  }

  addDistrict(body:any){
    return this.http.post(this.districtAPI+"save",body)
  }

  editDistrict(id:any,body:any){
    return this.http.put(this.districtAPI+"editDistrict/"+id,body)
  }

 
}
