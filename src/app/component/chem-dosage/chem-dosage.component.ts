import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chem-dosage',
  templateUrl: './chem-dosage.component.html',
  styleUrls: ['./chem-dosage.component.css']
})
export class ChemDosageComponent implements OnInit {
  CDIT1: Number;
  CDIT2: Number;
  CHEMADDF: Number;
  CHEMADDF2: Number;
  constructor() { }

  ngOnInit(): void {
  }
  CDSV: Number;
  CDIN: Number;
  LOS: string;
  CDCD: Number;
  CDITA: Number;
  CDIT: string;
  CDCTL: Number;
  CDTTL: Number;






  CD1() {
    if (this.CDIT) {
      switch (this.CDIT) {
        case "a1":
          this.CDIT1 = Math.round(Number(this.CDTTL) / (((Number(this.CDITA) / 100) * 1000)));
          this.CDIT2 = Math.round((Number(this.CDTTL) - Number(this.CDCTL)) / ((Number(this.CDITA) / 100) * 1000));
          this.CHEMADDF = (Number(this.CDIT2) / 120) * (Number(this.CDSV) / 1000);

          break;

        default:
          this.CDIT1 = Math.round(Number(this.CDTTL) / (Number(this.CDITA) / 100));
          this.CDIT2 = Math.round((Number(this.CDTTL) - Number(this.CDCTL)) / (Number(this.CDITA) / 100));
          this.CHEMADDF = Number(((Number(this.CDIT2) / 120) * (Number(this.CDSV) / 1000)).toFixed(2));


          break;
      }
    }
    this.CD2();
  }
  CD2() {
    if (this.LOS) {
      switch (this.LOS) {
        case "o2":
          this.CHEMADDF2 = Number((Number(this.CHEMADDF) / Number(this.CDCD)).toFixed(2));

          break;

        default:
          this.CHEMADDF2 = 0
          break;
      }
    }
  }

}