import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSIMassBalanceComponent } from './lsi-mass-balance.component';

describe('LSIMassBalanceComponent', () => {
  let component: LSIMassBalanceComponent;
  let fixture: ComponentFixture<LSIMassBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSIMassBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LSIMassBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
