import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Products } from '../../model/product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input()
  products: Products[] = [];

  @Input()
  profileForm: FormGroup = new FormGroup({});

  @Output()
  upDateEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  insert() {
    const data = this.profileForm.value;
    const validate = Object.values(data)
      .map((e) => Boolean(e))
      .every((val) => val);
    if (validate) {
      this.products.push({ id: this.products.length + 1, ...data });
    }
  }

  clear() {
    this.profileForm.reset();
  }

  update() {
    this.upDateEvent.emit();
    //const arry = [];
  }
}
