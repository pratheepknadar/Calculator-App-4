import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtTimerManualComponent } from './ct-timer-manual.component';

describe('CtTimerManualComponent', () => {
  let component: CtTimerManualComponent;
  let fixture: ComponentFixture<CtTimerManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtTimerManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtTimerManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
