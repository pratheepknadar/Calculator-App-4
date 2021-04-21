import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsWaterlossCostsManualComponent } from './cs-waterloss-costs-manual.component';

describe('CsWaterlossCostsManualComponent', () => {
  let component: CsWaterlossCostsManualComponent;
  let fixture: ComponentFixture<CsWaterlossCostsManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsWaterlossCostsManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsWaterlossCostsManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
