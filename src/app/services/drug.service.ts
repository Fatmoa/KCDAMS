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
    this.http.get(this.drugAPI+"all")
  }


  addDrug(body:any){
    this.http.post(this.drugAPI+"save",body)
  }

  editDrug(id:any,body:any){
    this.http.put(this.drugAPI+"editDrug/"+id,body)
  }
}
