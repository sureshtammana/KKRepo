import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancesListComponent } from './finances-list.component';

describe('FinancesListComponent', () => {
  let component: FinancesListComponent;
  let fixture: ComponentFixture<FinancesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
