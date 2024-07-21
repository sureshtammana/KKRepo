import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiancesAddComponent } from './fiances-add.component';

describe('FiancesAddComponent', () => {
  let component: FiancesAddComponent;
  let fixture: ComponentFixture<FiancesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiancesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiancesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
