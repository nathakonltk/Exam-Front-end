import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl, Validators,FormArray} from '@angular/forms';
@Component({
  selector: 'app-exam3dialog',
  templateUrl: './exam3dialog.component.html',
  styleUrls: ['./exam3dialog.component.scss']
})
export class Exam3dialogComponent {
  form: FormGroup;
  imgfile: FormArray;
  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      name:[''],
      imgfile: this.fb.array([]),
    });
    this.imgfile = this.form.get('imgfile') as FormArray;
  }

}
