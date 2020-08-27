import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NAV_ITEMS} from "../_data/nav-items.data";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  NAV_ITEMS = NAV_ITEMS;

  @Output() toggleSideNav = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
