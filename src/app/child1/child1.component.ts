import { Component, OnInit } from '@angular/core';
import {ServicService} from '../servic.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { Student } from '../studentmodel';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  name:string;
  id:string;
  department:string;
  
  
  constructor(private service:ServicService,http:HttpClient,router:Router) { }

  ngOnInit(): void {
  }
  create(){
  const student={
    id:this.id,
    name:this.name,
    department:this.department
  }
  this.service.createStudent(student);
  }
   
}

