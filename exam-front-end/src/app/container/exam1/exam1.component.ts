import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-exam1',
  templateUrl: './exam1.component.html',
  styleUrls: ['./exam1.component.scss'],
  
})
export class Exam1Component {
  exam1="";
  ngOnInit(): void {
    this.exam1=this.fncExam(9);
    
  }
  fncExam(r:number){
    let i=1;
    let c=0;
    let res="";
    while (i < r+1) {
      res+='<h1>';
      while (c < i) {              
        c++;
        res+=(c < i ? i+"&nbsp;&nbsp;&nbsp;&nbsp;" : i);  
      }
      res+="</h1>";
        c=0;
        i++;
    }
    return res;
  }
}
