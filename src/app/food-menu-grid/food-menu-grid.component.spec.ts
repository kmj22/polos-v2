import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuGridComponent } from './food-menu-grid.component';

describe('FoodMenuGridComponent', () => {
  let component: FoodMenuGridComponent;
  let fixture: ComponentFixture<FoodMenuGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodMenuGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMenuGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
