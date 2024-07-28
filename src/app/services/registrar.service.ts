import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  registrarAPI = environment.baseUrl + "registrar/"
  constructor(private http: HttpClient) { }

  getAllRegistrar(){
    return this.http.get(this.registrarAPI + "all")
  }

  addReistrar(body:any){
    return this.http.post(this.registrarAPI + "save",body)
  }

  editReistrar(id:any,body:any){
    return this.http.put(this.registrarAPI + "editRegistrar/"+id,body)
  }

  getRegistrarByCode(id:any){
    return this.http.get(this.registrarAPI+id)
  }

}
