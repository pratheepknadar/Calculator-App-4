import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume-addition-manual',
  templateUrl: './volume-addition-manual.component.html',
  styleUrls: ['./volume-addition-manual.component.css']
})
export class VolumeAdditionManualComponent implements OnInit {
  SOL: string;
  LOL:string;
 public chemAddition: number;
 SystemVolume: number;
 Type:string;
 CHEM:string;
 CD:number;
 T:number;
 sol: string;
 liq: string;
 ITA: number;
 ITR: number;
 SCA: number;
 FINTR: number;
 LCA: number;
 INHIBT: string;
 NEW: number;
  constructor() { 
    this.CD;
    this.CHEM;
    this.T;
    this.LOL
    this.sol;
    this.liq;
    this.Type;
    
  }

  ngOnInit(): void {
  }
  
  ChemAdd()
{
  if(this.SOL){
    switch (this.SOL) {
      case "v1":
        this.chemAddition = Math.round(Number(this.LCA)*Number(this.CD));
        break;
    case "v2":
      this.chemAddition = Math.round(Number(this.SCA));
      break;
      default:
        break;
    }
  }
  this.SysVol();
}
 SysVol(){
  if(this.INHIBT){
    switch (this.INHIBT) {
      case "i1":
        this.SystemVolume = Math.round(Number(this.chemAddition)*120000*Number(this.ITA/100))/((Number(this.FINTR)-Number(this.ITR))/1000);
        break;
    
      default:
       this.SystemVolume = Math.round((this.chemAddition)*120000*Number(this.ITA/100))/(Number(this.FINTR)-Number(this.ITR));
        break;
 
    }
  }

}
}