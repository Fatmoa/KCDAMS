import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NursingService {

  nursAPI = environment.baseUrl+"nurs/"

  constructor(private http:HttpClient) { }

  getAllNursing(){
    return this.http.get(this.nursAPI + "all")
  }

  addNursing(body:any){
    return this.http.post(this.nursAPI + "save",body)
  }

  editNursing(id:any,body:any){
    return this.http.put(this.nursAPI + "editNursing/"+id,body)
  }

  getNursingByCode(id:any){
    return this.http.get(this.nursAPI+id)
  }

}
