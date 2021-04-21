import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumePTSASaltComponent } from './volume-ptsa-salt.component';

describe('VolumePTSASaltComponent', () => {
  let component: VolumePTSASaltComponent;
  let fixture: ComponentFixture<VolumePTSASaltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumePTSASaltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumePTSASaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
