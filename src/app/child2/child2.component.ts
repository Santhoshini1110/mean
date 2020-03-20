import { Component, OnInit } from '@angular/core';
import {Student} from '../studentmodel';
import {Router} from '@angular/router';
import{ServicService} from '../servic.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  students;
  
  constructor(private service:ServicService, router:Router) { }
  
  ngOnInit() {
  this.service.getStudents().subscribe(data=>{
    this.students=data;
  })
  }
   edit(id)
   {
     this.router.navigate(['/editStudent:id']);
   }
   delete(id){
     this.service.deleteStudent(id);
   }
}
