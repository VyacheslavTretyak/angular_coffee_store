import { Component, OnInit } from '@angular/core';
import {DataCoffeeService} from "../../services/data-coffee.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public orders = [];

  constructor(private dataCoffee:DataCoffeeService) {
    this.orders = dataCoffee.orders;
  }

  ngOnInit() {
  }

}
