import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolingTowerPageComponent } from './cooling-tower-page.component';

describe('CoolingTowerPageComponent', () => {
  let component: CoolingTowerPageComponent;
  let fixture: ComponentFixture<CoolingTowerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolingTowerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolingTowerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
