import { NgModule } from '@angular/core';
import { Routes,Router, RouterModule } from '@angular/router';
import {Child1Component} from './child1/child1.component';
import {Child2Component} from './child2/child2.component';
import{AppComponent} from './app.component';
import { Child3Component } from './child3/child3.component';


const routes: Routes = [{
  path:'',component:AppComponent,
},
{
  path:'CreateStudent',component:Child1Component
},
{
  path:'StudentDetails',component:Child2Component
},
 { path:'editStudent:id',component:Child3Component}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }