import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCoffeeComponent} from "./components/list-coffee/list-coffee.component";
import {SelectedCoffeeComponent} from "./components/selected-coffee/selected-coffee.component";

const routes: Routes = [
  {path: '', component: ListCoffeeComponent },
  {path: 'selected-coffee/:index', component: SelectedCoffeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
