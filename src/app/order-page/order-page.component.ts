import { Component, OnInit } from '@angular/core';
import {PHONE_NUMBER} from "../_data/phone.data";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  PHONE_NUMBER = PHONE_NUMBER;

  constructor() { }

  ngOnInit(): void {
  }

}
