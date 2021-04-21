import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ct-biocide-manual',
  templateUrl: './ct-biocide-manual.component.html',
  styleUrls: ['./ct-biocide-manual.component.css']
})
export class CtBiocideManualComponent implements OnInit {

  constructor() { }
  ADJ:Number;
  APO:Number;
  PRTM1:Number;
  ngOnInit(): void {
  }
  SYSVB:Number;
  SOLF:Number;
  RFR:Number;
  PFR:Number;
  PDB:Number;
  FSS:Number;
  MPO:Number;
  PSS:Number;
  PSSF:Number;
  MSF:Number;


  BIOF(){
    this.ADJ = Number(this.PFR)/(Number(this.FSS)/100);
    this.APO = (Number(this.PSS)/100)*(Number(this.PSSF)/Number(this.MSF))*Number(this.MPO);
    if (this.MPO == 0 || this.PDB== 0)
    {
      (this.PRTM1 = 0);
      }
    else {
    this.PRTM1 = (0.012*Number(this.ADJ)*Number(this.SYSVB))/(Number(this.PDB)*Number(this.APO));
    }
  
    }
      
    }
