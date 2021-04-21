import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtPropBleedManualComponent } from './ct-prop-bleed-manual.component';

describe('CtPropBleedManualComponent', () => {
  let component: CtPropBleedManualComponent;
  let fixture: ComponentFixture<CtPropBleedManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtPropBleedManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtPropBleedManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
