import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsWaterlossCostsComponent } from './cs-waterloss-costs.component';

describe('CsWaterlossCostsComponent', () => {
  let component: CsWaterlossCostsComponent;
  let fixture: ComponentFixture<CsWaterlossCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsWaterlossCostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsWaterlossCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
