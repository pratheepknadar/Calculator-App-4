import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeAdditionComponent } from './volume-addition.component';

describe('VolumeAdditionComponent', () => {
  let component: VolumeAdditionComponent;
  let fixture: ComponentFixture<VolumeAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
