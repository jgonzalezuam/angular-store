import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../models/product';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  unit_price: number = 3000;
  @Input() product : Product =  new Product('', 1, 1);

  constructor() { }

  ngOnInit(): void {
  }

}
