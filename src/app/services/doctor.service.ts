import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  drAPI= environment.baseUrl+"doctor/"

  constructor(private http: HttpClient) { }


  getAllDoctor(){
    return this.http.get(this.drAPI + "all")
  }

  addDoctor(body:any){
    return this.http.post(this.drAPI + "save",body)
  }

  editDoctor(id:any,body:any){
    return this.http.put(this.drAPI + "editDoctor/"+id,body)
  }

  getDoctorByCode(id:any){
    return this.http.get(this.drAPI+id)
  }
}
