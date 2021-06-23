import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Products } from 'src/model/products';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input()
  products: Products[] = [];

  @Output()
  setValueEvent = new EventEmitter<Products>();

  @Output()
  deleteEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  setValues(product: Products) {
    //把資料set到表單中
    //const {manufactory , type} = product;xe
    this.setValueEvent.emit(product);
    //this.profileForm.patchValue({ ...product });
    //this.profileForm.patchValue({ manufactory: product.manufactory });
    //this.profileForm.controls['manufactory'].setValue(product.manufactory);
    //this.profileForm.patchValue({manufactory:product.manufactory, type:product.type , price:product.price  , minPrice: product.price});
    //this.id = product.id;
  }

  delete(productId: number) {
    this.deleteEvent.emit(productId);
  }
}
