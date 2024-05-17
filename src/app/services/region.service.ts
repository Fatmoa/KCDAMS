import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  regionAPI = environment.baseUrl + "regions/"

  constructor(private http:HttpClient) { }
  getAllRegion(){
    return this.http.get(this.regionAPI + "all")

  }
  addRegion(body:any){
    return this.http.post(this.regionAPI + "save", body)

  }

  editRegion(id:any,body:any){
    this.http.put(this.regionAPI + "editRegion/"+id,body )
  }

}
