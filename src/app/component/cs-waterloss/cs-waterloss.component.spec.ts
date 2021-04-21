import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSWaterlossComponent } from './cs-waterloss.component';

describe('CSWaterlossComponent', () => {
  let component: CSWaterlossComponent;
  let fixture: ComponentFixture<CSWaterlossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSWaterlossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSWaterlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
