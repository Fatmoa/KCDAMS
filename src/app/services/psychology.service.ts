import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PsychologyService {

  pychAPI = environment.baseUrl+"psychol/"

  constructor(private http:HttpClient) { }

  getAllPsychology(){
    return this.http.get(this.pychAPI + "all")
  }

  addPsychology(body:any){
    return this.http.post(this.pychAPI + "save",body)
  }

  editPsychology(id:any,body:any){
    return this.http.put(this.pychAPI + "editPsychology/"+id,body)
  }

  getPsychologyByCode(id:any){
    return this.http.get(this.pychAPI+id)
  }
}
