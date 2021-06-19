import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  dataArray: string[] = ['1', '3'];

  insertData(data: string) {
    this.dataArray.unshift(data);
  }
}
