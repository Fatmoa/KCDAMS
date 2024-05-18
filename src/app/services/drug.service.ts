import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  drugAPI= environment.baseUrl+"drugs/"

  constructor(private http:HttpClient) { }

  getAllDrug(){
    return this.http.get(this.drugAPI+"all")
  }


  addDrug(body:any){
    return this.http.post(this.drugAPI+"save",body)
  }

  editDrug(id:any,body:any){
    return this.http.put(this.drugAPI+"editDrug/"+id,body)
  }
}
