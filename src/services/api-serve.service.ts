import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServeService {

   private apiUrl:string ="https://api.spacexdata.com/v4/rockets";
   //private apiUrl:string ="https://api.ipify.org/?format=json";
  
    constructor(private http:HttpClient) {}
      
    getData(): Observable<any> {
      return this.http.get(this.apiUrl);
    }

 
}
