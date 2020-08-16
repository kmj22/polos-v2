import { Component, OnInit } from '@angular/core';
import {FOOD_MENU} from '../_data/menu.data';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

  readonly FOOD_MENU = FOOD_MENU;

  menuItems = [];

  readonly CATEGORIES = [
    {name: 'Starters', category: 'starters', icon: '/assets/pretzel.svg'},
    {name: 'Shareables', category: 'shareables', icon: '/assets/nachos.svg'},
    {name: 'Flatbreads', category: 'flatbreads', icon: '/assets/flatbread.svg'},
    {name: 'Soups', category: 'soups', icon: '/assets/soup.svg'},
    {name: 'Wings', category: 'wings', icon: '/assets/chicken.svg'},
    {name: 'Salads', category: 'salads', icon: '/assets/salad.svg'},
    {name: 'Sandwiches', category: 'sandwiches', icon: '/assets/sandwich.svg'},
    {name: 'Pizza', category: 'pizza', icon: '/assets/pizza.svg'},
    {name: 'Burgers', category: 'burgers', icon: '/assets/burger.svg'},
    {name: 'Entrees', category: 'entrees', icon: '/assets/meat.svg'},
    {name: 'Sides', category: 'sides', icon: '/assets/fries.svg'},
    {name: 'Desserts', category: 'desserts', icon: '/assets/dessert.svg'},
    {name: 'Wine', category: 'wine', icon: '/assets/wine.svg'},
  ];

  constructor() { }

  ngOnInit(): void {
    this.selectCategory(this.CATEGORIES[0]);
  }

  selectCategory(category) {
    this.menuItems = this.FOOD_MENU[category.category];
  }

}
