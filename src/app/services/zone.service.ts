import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
zoneAPI = environment.baseUrl + "zones/"
  constructor(private http: HttpClient) { }

  getAllZone(){
    return this.http.get(this.zoneAPI + "all")
  }

  addZone(body:any){
    return this.http.post(this.zoneAPI + "save",body)
  }

  editZone(id:any,body:any){
    return this.http.put(this.zoneAPI + "editZone/"+id,body)
  }
}
