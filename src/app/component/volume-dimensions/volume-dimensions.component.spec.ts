import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeDimensionsComponent } from './volume-dimensions.component';

describe('VolumeDimensionsComponent', () => {
  let component: VolumeDimensionsComponent;
  let fixture: ComponentFixture<VolumeDimensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeDimensionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
