import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumepageComponent } from './volumepage.component';

describe('VolumepageComponent', () => {
  let component: VolumepageComponent;
  let fixture: ComponentFixture<VolumepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
