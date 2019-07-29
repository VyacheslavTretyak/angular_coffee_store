import { Component, OnInit } from '@angular/core';
import {DataCoffeeService} from "../../services/data-coffee.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public orders = [];
  public cost:number = 0;

  constructor(private dataCoffee:DataCoffeeService) {
    this.orders = dataCoffee.orders;
  }

  ngOnInit() {
  }

  countCost(price:number){
    this.cost += Number(price);
  }

}
