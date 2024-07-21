import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancesDetailComponent } from './finances-detail.component';

describe('FinancesDetailComponent', () => {
  let component: FinancesDetailComponent;
  let fixture: ComponentFixture<FinancesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
