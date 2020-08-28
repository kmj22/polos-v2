import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-food-menu-grid',
  templateUrl: './food-menu-grid.component.html',
  styleUrls: ['./food-menu-grid.component.scss']
})
export class FoodMenuGridComponent implements OnInit {

  @Input() foodTemplate: TemplateRef<any>;
  @Input() items: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
