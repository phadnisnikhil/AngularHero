import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalApicallService {
  private apiUrl:string ="https://localhost:7118/api/helloworld";

  constructor(private http:HttpClient) { }


  getData(): Observable<string> {
    // Specify `responseType: 'text'` for plain string responses
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
