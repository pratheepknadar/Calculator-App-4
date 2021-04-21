import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtPropBleedComponent } from './ct-prop-bleed.component';

describe('CtPropBleedComponent', () => {
  let component: CtPropBleedComponent;
  let fixture: ComponentFixture<CtPropBleedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtPropBleedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtPropBleedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
