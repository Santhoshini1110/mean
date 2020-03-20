import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import 'rxjs/add/operator/map';
import {Student} from './studentmodel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicService {

  constructor(private http:HttpClient) { }
   getStudents(){
    return this.http.get('http://localhost:3000/api/students');
   }
   createStudent(student){
    
     return this.http.post('http://localhost:3000/api/insert',student);

   }
   deleteStudent(id)
   {
     return this.http.delete('http://localhost:3000/api/delete/'+id);

   }
   update(student){
     return this.http.put('http://localhost:3000/api/update',student);
   }
   getStudentById(id){
    return this.http.get('http://localhost:3000/api/student'+id);
   }
}
