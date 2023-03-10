import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl ="http://localhost:5048/api";

  constructor(private http: HttpClient) { }

  public getAdmin():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Admin');
  }
  public postAdmin(value:any){
    return this.http.post<any>(this.APIUrl+'/Admin', value);
  }
  public deleteAdmin(value: any){
    return this.http.delete<any>(this.APIUrl+'/Admin'+ value);
  }
  public loginAdmin(value: any){
    this.http.post(this.APIUrl+'/Admin/', value);
    return this.http.request.toString();
  }
  public isLoggedIn(){
    return of(false).pipe(delay(500));
  }
}
