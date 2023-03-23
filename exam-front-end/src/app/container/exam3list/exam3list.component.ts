import { Component,OnInit } from '@angular/core';
import { TblFruitsModel} from './../../_models/index';
import { TblFruitsService } from '../../_services/index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exam3list',
  templateUrl: './exam3list.component.html',
  styleUrls: ['./exam3list.component.scss']
})
export class Exam3listComponent {
  tblFruitsModel:TblFruitsModel[]=[];
  displayedColumns: string[] = ['id','name', 'imgfile'];
  constructor(
    private tblFruitsService:TblFruitsService
    ){

  }
  ngOnInit() {    
    this.TblFruitsGetAll();
  }
  TblFruitsGetAll(){  
    
    //Swal.showLoading()  
    Swal.fire({
      title: 'กำลังโหลด...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      background: '#fff',
      showConfirmButton: false,
      
    
        
    }).then(()=>{
      Swal.showLoading();
      this.tblFruitsService.GetAll().subscribe((res: any) => {
        if (res != null && res.status == true) {
          this.tblFruitsModel=res.results;
          
          Swal.close()
          console.log('memberModel',this.tblFruitsModel);
          
        }
      });
    });
  }

   
}
