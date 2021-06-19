import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Products } from 'src/model/product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input()
  products: Products[] = [];

  @Output()
  SetValueEvent = new EventEmitter<Products>();

  id: number | undefined = 0;

  constructor() {}

  ngOnInit(): void {}

  setValues(product: Products) {
    //把資料set到表單中
    //const {manufactory , type} = product;

    this.SetValueEvent.emit(product);
    //this.profileForm.patchValue({ ...product });
    //this.profileForm.patchValue({ manufactory: product.manufactory });
    //this.profileForm.controls['manufactory'].setValue(product.manufactory);
    //this.profileForm.patchValue({manufactory:product.manufactory, type:product.type , price:product.price  , minPrice: product.price});
    //this.id = product.id;
  }

  delete(productId: number) {
    this.products = this.products.filter(({ id }) => id !== productId);
  }
}
