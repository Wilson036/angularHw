import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Products {
  id?: number;
  manufactory?: string;
  type?: string;
  minPrice?: string;
  price?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  id: number | undefined = 0;
  products: Products[] = [];
  selectedProduct3: Products = {};

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
    ];
  }

  insert() {
    const data = this.profileForm.value;
    const validate = Object.values(data)
      .map(Boolean)
      .every((val) => val);
    if (!validate) {
      return;
    }
    this.products.push({ id: this.products.length + 1, ...data });
  }

  clear() {
    this.profileForm.reset();
  }

  update() {
    if (this.id) {
      this.products = this.products.map((product) => {
        if (product.id === this.id) {
          product = { ...product, ...this.profileForm.value };
        }
        return product;
      });
    }
  }

  setValues(product: Products) {
    this.profileForm.patchValue({ ...product });
    this.id = product.id;
  }

  delete(productId: number) {
    this.products = this.products.filter(({ id }) => id !== productId);
  }
}
