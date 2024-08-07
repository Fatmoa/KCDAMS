import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PsychologistService {

  pyAPI = environment.baseUrl+"psychologist/"

  constructor(private http:HttpClient) { }

  getAllPsychologist(){
    return this.http.get(this.pyAPI + "all")
  }

  addPsychologist(body:any){
    return this.http.post(this.pyAPI + "save",body)
  }

  editPsychologist(id:any,body:any){
    return this.http.put(this.pyAPI + "editPsychologist/"+id,body)
  }

  getPsychologistByCode(id:any){
    return this.http.get(this.pyAPI+id)
  }
}
