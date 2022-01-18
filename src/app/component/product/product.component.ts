import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  listProduct: Product[] = [
    {
      id: '1',
      name: 'IP12',
      price: '1200'
    },
    {
      id: '2',
      name: 'IP13',
      price: '1500'
    },
    {
      id: '1',
      name: 'IP11',
      price: '1000'
    }
  ]

  formDemo = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
    }
  )

  constructor() {
  }

  ngOnInit(): void {
  }

  create() {
    this.listProduct.push(this.formDemo.value)
  }

}
