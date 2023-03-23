import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exam1Component } from './container/exam1/exam1.component';
import { Exam2Component } from './container/exam2/exam2.component';
import { Exam3Component } from './container/exam3/exam3.component';
import { ResumeComponent } from './container/resume/resume.component';

const routes: Routes = [
  {
    path:'resume',
    data:{breadcrumb:'Resume'},
    component: ResumeComponent
    
  },
  {
    path:'exam/exam1',
    data:{breadcrumb:'ข้อสอบข้อที่ 1'},
    component: Exam1Component
    
  },
  {
    path:'exam/exam2',
    data:{breadcrumb:'ข้อสอบข้อที่ 2'},
    component: Exam2Component,
  } ,
  {
    path:'exam/exam3',
    data:{breadcrumb:'ข้อสอบข้อที่ 3'},
    component: Exam3Component,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
