import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  roleAPI=environment.baseUrl+"roles/"

  constructor(private http: HttpClient) { }

  getAllRole(){
    return this.http.get(this.roleAPI+"all")
  }

  addRole(body:any){
    return this.http.post(this.roleAPI+"save",body)
  }

  editRole(id:any,body:any){
     return this.http.put(this.roleAPI+"editRole/"+id,body)
  }

  getRoleByName(name:any){
    return this.http.get(this.roleAPI + "byRoleName/" + name)
  }
}
