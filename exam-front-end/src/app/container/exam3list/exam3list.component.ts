import { Component } from '@angular/core';
import { TblFruitsModel} from './../../_models/index';
import { TblFruitsService } from '../../_services/index';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { Exam3dialogComponent } from '../exam3dialog/exam3dialog.component';

@Component({
  selector: 'app-exam3list',
  templateUrl: './exam3list.component.html',
  styleUrls: ['./exam3list.component.scss']
})
export class Exam3listComponent {
  tblFruitsModel:TblFruitsModel[]=[];
  displayedColumns: string[] = ['name'];
  datatbl:TblFruitsModel[]=[];
  
  constructor(
    private tblFruitsService:TblFruitsService,
    private dialog: MatDialog,    
    ){

  }
  ngOnInit() {    
    this.TblFruitsGetAll();
  }
  ModalCreate(){
    let dialogLoadingSave = this.dialog.open(Exam3dialogComponent, {
      height: 'auto',
      width: '60%'
     });
     dialogLoadingSave.afterClosed().subscribe(res=>{
      this.TblFruitsGetAll();
     })
  }
  OnTblFilter(val?:string){
    if(val){      
      this.datatbl=this.tblFruitsModel.filter(i=> i.name.indexOf(val) > -1);
    }else{
      this.datatbl=this.tblFruitsModel;
    }
  }
  TblFruitsGetAll(){  
    
    
    //Swal.showLoading()  
    Swal.fire({
      title: 'กำลังโหลด...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      background: '#fff',
      showConfirmButton: false,  
      didOpen: () => {
        Swal.showLoading();
        this.tblFruitsService.GetAll().subscribe((res: any) => {
          console.log('tblFruitsServicelGetAll',res);
          if (res != null && res.status == true) {
            this.tblFruitsModel=res.results;
            this.datatbl=res.results;

            console.log('tblFruitsService',this.tblFruitsModel);
            
            Swal.close()
            
          }
        });
      }
      
        
    });
  }

   
}
