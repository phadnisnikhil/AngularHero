import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


import { Observable } from 'rxjs';
import { Istudent } from '../app/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _url:string ="assets/data/students.json";

  constructor(private http:HttpClient) {}
    
     getStudents(): Observable<Istudent[]>{

      return this.http.get<Istudent[]>(this._url)
     }

     }

