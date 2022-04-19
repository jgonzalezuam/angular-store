import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = 
    [
      new Product('Producto uno', 2, 1), 
      new Product('Product dos', 4, 2), 
      new Product('Product tres', 8, 3),
      new Product('Product cuatro', 16, 4)  
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
