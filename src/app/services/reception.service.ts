import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {
  receptionAPI = environment.baseUrl + "reception/"

  constructor(private http:HttpClient) { }

  getAllrecption(){
    return this.http.get(this.receptionAPI + "all")
  }

  addReception(body:any){
    return this.http.post(this.receptionAPI + "save",body)
  }

  editReception(id:any,body:any){
    return this.http.put(this.receptionAPI + "editReception/"+id,body)
  }

  getReceptionByCode(id:any){
    return this.http.get(this.receptionAPI+id)
  }
}
