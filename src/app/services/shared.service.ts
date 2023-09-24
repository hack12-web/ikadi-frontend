import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public url:string = "http://localhost:5224/api";
  readonly APIUrl ="http://localhost:5224/api";

  constructor(private http: HttpClient) { }

  //Admin
  public getAdmin():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Admin');
  }
  public getAdminByUniqueId(value: any){
    
  }
  public postAdmin(value:any){
    return this.http.post<any>(this.APIUrl+'/Admin', value);
  }
  public updateAdmin(value: any){
    return this.http.put<any>(this.APIUrl+'/Admin',value);
  }
  public deleteAdmin(value: any){
    return this.http.delete<any>(this.APIUrl+'/Admin/'+ value);
  }
  public loginAdmin(value: any){
    this.http.post(this.APIUrl+'/Admin', value);
    return this.http.request.toString();
  }
  //End admin
  //Personne
  public getPersonnes():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Personne');
  }
  public postPersonne(value:any){
    return this.http.post<any>(this.APIUrl+'/Personne',value);
  }
  public updatePersonne(value:any){
    return this.http.put<any>(this.APIUrl+'/Personne',value);
  }
  public deletePersonne(value:any){
    return this.http.delete<any>(this.APIUrl+'/Personne/'+ value);
  }
  //End Personne
  public isLoggedIn(){
    return of(false).pipe(delay(500));
  }
}
