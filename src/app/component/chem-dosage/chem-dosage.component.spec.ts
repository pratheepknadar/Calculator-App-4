import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemDosageComponent } from './chem-dosage.component';

describe('ChemDosageComponent', () => {
  let component: ChemDosageComponent;
  let fixture: ComponentFixture<ChemDosageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChemDosageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemDosageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
