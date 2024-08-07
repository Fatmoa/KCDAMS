import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  obsAPI= environment.baseUrl+"obs/"

  constructor(private http: HttpClient) { }

  getAllObservation(){
    return this.http.get(this.obsAPI + "all")
  }

  addObservation(body:any){
    return this.http.post(this.obsAPI + "save",body)
  }

  editObservation(id:any,body:any){
    return this.http.put(this.obsAPI + "editObservation/"+id,body)
  }

  getObservationByCode(id:any){
    return this.http.get(this.obsAPI+id)
  }
}
