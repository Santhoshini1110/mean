import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ServicService} from '../servic.service';
import { Student} from '../studentmodel';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
   id;
   name;
   department;
   
  constructor(private activateRoute:ActivatedRoute,route:Router,service:ServicService) { }
   student;
  ngOnInit(): void {
  
  const id=this.activeRoute.snapshot.params.id;
  this.service.getStudentById(id).subscribe(data=>{
    this.student=data
  });
  }
   submit(){
      const student={
        id:this.id,
        name:this.name,
        department:this.department
      }
      this.service.update(student);
   }
}
