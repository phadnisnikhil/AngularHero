import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { ApiServeService } from '../../services/api-serve.service';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrl: './myapp.component.css'
})

export class MyappComponent implements OnInit{

  title = 'AngularHero';
  pipetest ='nikhil';
  public students:any[]=[];
  data:any;
  objectKeys = Object.keys;
  //below code for without service 
  //myobservable = new Observable(observer=>{
  //console.log("Start Emission....");
  //observer.next("a");
  //observer.next("b");
  //observer.next("c");
 // });

  constructor(private _studentService:StudentService,private _apiService:ApiServeService){

  }
  ngOnInit(): void {
    
    //this.myobservable.subscribe((val=>{console.log(val)}));
   //below subscription needs to be fixed
   this._studentService.getStudents()
   .subscribe(data=>this.students=data);
   this._apiService.getData()
   .subscribe(response=>this.data=response)
  
  }
  
}