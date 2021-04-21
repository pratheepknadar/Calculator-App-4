import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtBleedFeedComponent } from './ct-bleed-feed.component';

describe('CtBleedFeedComponent', () => {
  let component: CtBleedFeedComponent;
  let fixture: ComponentFixture<CtBleedFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtBleedFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtBleedFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
