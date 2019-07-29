import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCoffeeService {

  public arrayCoffee = [
    {
      price:'33',
      title:'Espresso',
      img:'assets/Image/espresso.jpg'
    },
    {
      price:'35',
      title:'Americano',
      img:'assets/Image/americano.jpg'
    },
    {
      price:'30',
      title:'Coffee1',
      img:'assets/Image/coffee1.jpg'
    },
    {
      price:'35',
      title:'Coffee2',
      img:'assets/Image/coffee2.jpg'
    },
    {
      price:'35',
      title:'coffee3',
      img:'assets/Image/coffee3.jpg'
    },
    {
      price:'35',
      title:'coffee4',
      img:'assets/Image/coffee4.jpg'
    },
    {
      price:'35',
      title:'coffee5',
      img:'assets/Image/coffee5.jpg'
    },
    {
      price:'35',
      title:'coffee6',
      img:'assets/Image/coffee6.jpg'
    },
    {
      price:'35',
      title:'coffee7',
      img:'assets/Image/coffee7.jpg'
    },
    {
      price:'35',
      title:'coffee8',
      img:'assets/Image/coffee8.jpg'
    }
  ];


  constructor(){}

  public getCoffeeObj(index){
    return this.arrayCoffee[index];
  }
}
