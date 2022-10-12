import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  counter: number = 0;

  constructor() { }
  binhphuong(n: number): number{
    return n * n;
  }
  public SendData(data: any):void{
    console.log('Gửi data lên server. Data = ', data);
  }
}
