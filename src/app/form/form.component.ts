import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/model/product';
import { Products } from '../../model/products';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input()
  profileForm: FormGroup = new FormGroup({});

  @Output()
  upDateEvent = new EventEmitter();

  @Output()
  insertEvent = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log({ changes });
  }

  insert() {
    if (this.profileForm.invalid) {
      return;
    }
    this.insertEvent.emit({
      ...this.profileForm.value,
    });
  }

  clear() {
    this.profileForm.reset();
  }

  update() {
    if (this.profileForm.invalid) {
      return;
    }
    this.upDateEvent.emit();
  }
}
