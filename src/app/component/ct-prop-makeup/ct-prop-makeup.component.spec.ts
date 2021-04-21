import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTPropMakeupComponent } from './ct-prop-makeup.component';

describe('CTPropMakeupComponent', () => {
  let component: CTPropMakeupComponent;
  let fixture: ComponentFixture<CTPropMakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTPropMakeupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTPropMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
