import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedSystemPageComponent } from './closed-system-page.component';

describe('ClosedSystemPageComponent', () => {
  let component: ClosedSystemPageComponent;
  let fixture: ComponentFixture<ClosedSystemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedSystemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedSystemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
