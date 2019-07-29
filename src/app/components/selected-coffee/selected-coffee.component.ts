import {Component, OnInit } from '@angular/core';
import {DataCoffeeService} from "../../services/data-coffee.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-selected-coffee',
  templateUrl: './selected-coffee.component.html',
  styleUrls: ['./selected-coffee.component.css']
})
export class SelectedCoffeeComponent implements OnInit {

  public countPortions:number = 1;
  public countSugar:number = 0;
  public title:string;
  public img:string;
  public price:string;
  public order = [];

  public index:string;

  private lastOrderCount:number = 1;

  constructor(private activateRoute:ActivatedRoute, private dataCoffee:DataCoffeeService ) {
    this.index = activateRoute.snapshot.params.index;
    this.order = [];
    const obj = this.dataCoffee.getCoffeeObj(this.index);
    obj['sugar'] = 0;
    this.order.push(obj);
  }

  onCountChange(value:number){
    this.countPortions = value;
    if(this.lastOrderCount>this.countPortions){
      this.order.splice(this.countPortions);
    }else if(this.lastOrderCount<this.countPortions){
      let count = this.countPortions - this.lastOrderCount;
      for (let i = 0; i < count; i++) {
        const obj = this.dataCoffee.getCoffeeObj(this.index);
        const obj2 = {};
        obj2['sugar'] = 0;
        obj2['title'] = obj.title;
        obj2['price'] = obj.price;
        obj2['img'] = obj.img;
        this.order.push(obj2);
      }
    }
    this.lastOrderCount = this.countPortions;
  }

  ngOnInit() {
    this.title = this.dataCoffee.arrayCoffee[this.index].title;
    this.img = this.dataCoffee.arrayCoffee[this.index].img;
    this.price = this.dataCoffee.arrayCoffee[this.index].price;
  }

  addSugar(value:number, index:number) {
    this.order[index].sugar = value;
  }
}
