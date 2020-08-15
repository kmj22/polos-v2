import { Component, OnInit } from '@angular/core';
import {FOOD_MENU} from '../_data/menu.data';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

  readonly FOOD_MENU = FOOD_MENU;

  constructor() { }

  ngOnInit(): void {
  }

}
