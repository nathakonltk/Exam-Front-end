import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { map } from 'rxjs';
import { TblFruitsModel } from '../_models/index';

@Injectable({
  providedIn: 'root'
})
export class TblFruitsService {

  constructor(
    private http: HttpClient,
  ) { }
  GetAll():  any{
    return this.http.get<TblFruitsModel[]>(`${environment.apiUrl}/TblFruits/GetAll`).pipe(map((res: any) => {
      return res;
    }));
  }
  Insert(data: any) {
    console.log('data:',data);
    return this.http.post(`${environment.apiUrl}/TblFruits/Insert`, data).pipe(map(res => {
      
      console.log('Insert:',res);
      return res
    }))
  }
 
}
