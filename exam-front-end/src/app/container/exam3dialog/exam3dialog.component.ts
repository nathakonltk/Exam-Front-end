import { Component,EventEmitter,Output,ViewChild,Inject } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl, Validators,FormArray} from '@angular/forms';
import { UploadFile } from './../../_models/index';
import { UploadfileService,TblFruitsService } from '../../_services/index';
import Swal from 'sweetalert2';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-exam3dialog',
  templateUrl: './exam3dialog.component.html',
  styleUrls: ['./exam3dialog.component.scss']
})
export class Exam3dialogComponent {
  form: FormGroup;
  imgfile: FormArray;
  Photo: string = "";
  constructor(
       private fb:FormBuilder,
       private uploadFileService:UploadfileService,
       private tblFruitsService:TblFruitsService,
       private dialog: MatDialog,
       @Inject(MAT_DIALOG_DATA) public data: any,
       public dialogRef: MatDialogRef<Exam3dialogComponent>,
    ){
    this.form = this.fb.group({
      name:[''],
      file:[''],
      imgfile: this.fb.array([]),
    });
    this.imgfile = this.form.get('imgfile') as FormArray;
  }
  FormReset(){
    this.form.reset();
    this.Photo="";
    this.ModalClose();
  }
  ModalClose(){
    this.dialogRef.close();
  }
  save(data:any){
    console.log("Imgfile:",data.imgfile.value[0]['file']);
    
    let req = {
      Name:data.name.value,
      ImgFile: data.imgfile.value[0]['file']

    }
   // console.log("title_id:",req.BirthDate);
    console.log("req:",req);
    //return;
    Swal.fire({
      title: 'กำลังบันทึกข้อมูล...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      background: '#fff',
      showConfirmButton: false,  
      didOpen: () => {
        Swal.showLoading();
        this.tblFruitsService.Insert(req).subscribe((res: any) => {
          if (res && res.status == true) {
            Swal.fire({
              icon: 'success',
              title: 'บันทึกข้อมูลสำเร็จ',
              showConfirmButton: false,
              allowOutsideClick: false,
              timer: 3000
            }).then(() => {
              this.FormReset();
              console.log('บันทึกข้อมูลสำเร็จ');
              Swal.close();
              
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'ข้อมูลผิดพลาด',
              text: res.message,
              confirmButtonText: 'ปิดหน้าจอ',
            })
          }
        })
      }
              
    });
   
  }
  createFile(item: UploadFile): FormGroup {
    return this.fb.group({
      id: [''],
      name: [item.name],
      name_raw: [item.name_raw],
      size: [item.size],
      type: [item.type],
      file: [item.file],
      ext: [item.ext],
      path: [item.path],
      desc: [item.desc]
    });
  }
  async uploadImage(event: any) {
    let uploaded = await this.uploadFileService.multiple(event.target.files);
    uploaded.forEach((item: UploadFile) => {
      this.imgfile.push(this.createFile(item));
      this.Photo = item.file;
    })
  }

}
