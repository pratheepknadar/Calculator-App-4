import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtTimerComponent } from './ct-timer.component';

describe('CtTimerComponent', () => {
  let component: CtTimerComponent;
  let fixture: ComponentFixture<CtTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
