import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCoffeeComponent} from "./components/list-coffee/list-coffee.component";
import {SelectedCoffeeComponent} from "./components/selected-coffee/selected-coffee.component";
import {CartComponent} from "./components/cart/cart.component";

const routes: Routes = [
  {path: '', component: ListCoffeeComponent },
  {path: 'selected-coffee/:index', component: SelectedCoffeeComponent },
  {path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
