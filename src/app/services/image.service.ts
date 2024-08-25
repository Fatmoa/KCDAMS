import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageAPI=environment.baseUrl+"receptionImage/";
  private imageCreate = this.imageAPI + "create";
  constructor(
    private http:HttpClient,
  ) { }

  uploadImage(matCode: string, imageFile: any): Observable<any> {
    const formData = new FormData();
    formData.append('imageFile', imageFile);

    const url = `${this.imageCreate}/${matCode}`;
    return this.http.post(url, formData, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    });
  }

  getPatientImage(id:any){
    return this.http.get(this.imageAPI+"by-mat-code",id)
  }
}
