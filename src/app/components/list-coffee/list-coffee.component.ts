import { Component, OnInit } from '@angular/core';
import {DataCoffeeService} from "../../services/data-coffee.service";

@Component({
  selector: 'app-list-coffee',
  templateUrl: './list-coffee.component.html',
  styleUrls: ['./list-coffee.component.css']
})
export class ListCoffeeComponent implements OnInit {

  public list;
  constructor(private dataCoffee:DataCoffeeService  )
  {
    this.list = this.dataCoffee.arrayCoffee;
  }

  ngOnInit() {

  }

}
