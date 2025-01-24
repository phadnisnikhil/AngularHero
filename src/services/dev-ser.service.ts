import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevSerService {
  private apiUrl:string ="https://api.spacexdata.com/v4/rockets";
  constructor(private http:HttpClient) {}
    
     getData(): Observable<any> {
          return this.http.get(this.apiUrl);
        }
  





        
}
