import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFoodComponent } from './request-food.component';

describe('RequestFoodComponent', () => {
  let component: RequestFoodComponent;
  let fixture: ComponentFixture<RequestFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
