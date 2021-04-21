import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtBleedFeedManualComponent } from './ct-bleed-feed-manual.component';

describe('CtBleedFeedManualComponent', () => {
  let component: CtBleedFeedManualComponent;
  let fixture: ComponentFixture<CtBleedFeedManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtBleedFeedManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtBleedFeedManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
