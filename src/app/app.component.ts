import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/model/product';
import { Products } from 'src/model/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectId: number | undefined = 0;
  products: Products[] = [];

  profileForm = new FormGroup({
    manufactory: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    minPrice: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit() {
    this.products = [
      {
        id: 1,
        manufactory: 'bmw',
        type: 'bmw',
        minPrice: '9.9',
        price: '9.2',
      },
      {
        id: 2,
        manufactory: 'bmw2',
        type: 'bmw2',
        minPrice: '9.9',
        price: '9.2',
      },
    ];
  }

  setValues(product: Products) {
    const { id, ...formObj } = product;
    this.profileForm.setValue({ ...formObj });
    this.selectId = id;
  }

  update() {
    this.products = this.products.map((product) => {
      if (product.id === this.selectId) {
        //同樣的key值後面的資料會蓋掉前面
        product = { ...product, ...this.profileForm.value };
      }
      return product; //arr.push(product);
    });
  }

  insert(product: Product) {
    this.products.push({ id: this.products.length + 1, ...product });
  }

  delete(productId: number) {
    this.products = this.products.filter(({ id }) => id !== productId);
  }
}
