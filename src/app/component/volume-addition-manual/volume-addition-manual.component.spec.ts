import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeAdditionManualComponent } from './volume-addition-manual.component';

describe('VolumeAdditionManualComponent', () => {
  let component: VolumeAdditionManualComponent;
  let fixture: ComponentFixture<VolumeAdditionManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeAdditionManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeAdditionManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
