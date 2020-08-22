import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FOOD_MENU} from '../_data/menu.data';
import {ActivatedRoute, Router} from "@angular/router";
import {pluck} from "rxjs/internal/operators";
import {PHONE_NUMBER} from "../_data/phone.data";

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

  readonly FOOD_MENU = FOOD_MENU;
  readonly FOOD_CATEGORIES = Object.keys(this.FOOD_MENU);
  readonly PHONE_NUMBER = PHONE_NUMBER;

  @ViewChild('menuTop', {static: true}) menuTop: ElementRef;

  selectedCategory: string;

  constructor(private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      pluck('category')
    )
      .subscribe(category => {
        if (this.selectedCategory) {
          this.menuTop.nativeElement.scrollIntoView({behavior: 'smooth'});
        }

        this.selectedCategory = category || 'starters';
      });
  }

  selectCategory(categoryName: string) {
    this.router.navigate(['menu'], {queryParams: {category: categoryName}});
  }
}
