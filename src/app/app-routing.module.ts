import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RestaurantMenuComponent} from './restaurant-menu/restaurant-menu.component';
import {OrderPageComponent} from "./order-page/order-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: RestaurantMenuComponent},
  {path: 'order', component: OrderPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
