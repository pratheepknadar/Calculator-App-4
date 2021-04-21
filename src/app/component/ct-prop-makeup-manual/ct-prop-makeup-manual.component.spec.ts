import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtPropMakeupManualComponent } from './ct-prop-makeup-manual.component';

describe('CtPropMakeupManualComponent', () => {
  let component: CtPropMakeupManualComponent;
  let fixture: ComponentFixture<CtPropMakeupManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtPropMakeupManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtPropMakeupManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
