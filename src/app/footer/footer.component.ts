import { Component, OnInit } from '@angular/core';
import {PHONE_NUMBER} from "../_data/phone.data";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  PHONE_NUMBER = PHONE_NUMBER;
  EMAIL = 'polosbarandgrill@gmail.com';

  constructor() { }

  ngOnInit(): void {
  }

}
