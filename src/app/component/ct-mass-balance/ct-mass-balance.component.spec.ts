import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTMassBalanceComponent } from './ct-mass-balance.component';

describe('CTMassBalanceComponent', () => {
  let component: CTMassBalanceComponent;
  let fixture: ComponentFixture<CTMassBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTMassBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTMassBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
