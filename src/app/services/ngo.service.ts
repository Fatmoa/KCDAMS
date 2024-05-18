import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NgoService {

  ngoAPI= environment.baseUrl+"ngos/"

  constructor(private http: HttpClient) { }

  getAllNgo(){
    return this.http.get(this.ngoAPI+"all")
  }

  addNgo(body:any){
    return this.http.post(this.ngoAPI+"save",body)
  }

  editNgo(id:any,body:any){
    return this.http.put(this.ngoAPI+"editNgo/"+id,body)
  }
}
