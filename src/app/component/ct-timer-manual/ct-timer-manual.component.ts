import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ct-timer-manual',
  templateUrl: './ct-timer-manual.component.html',
  styleUrls: ['./ct-timer-manual.component.css']
})
export class CtTimerManualComponent implements OnInit {
  CHEM: String;
  LOL: string;
  CD: number;
  INHIBT: string;
  ITA:Number;
  strength:Number;
  FR:Number;
  PFR: Number;
  AFR: Number;
  MaxPO:Number;
  SpeedSetting:Number;
  StrokeFreq:Number;
  MaxStrokeFreq:Number;
  AdjPO: Number;
  TimeCycle: Number;
  TimePump: Number;
  MinPercycle: Number;
  TR: Number;
  EL:Number;
  OHD:Number;
  TOW:Number;
  constructor() {
this.CHEM;
this.LOL;
this.CD;
this.INHIBT;
this.ITA;
this.strength;
this.FR;
this.AFR;
this.PFR;
this.MaxPO;
this.SpeedSetting;
this.StrokeFreq;
this.MaxStrokeFreq ;
this.AdjPO;
this.TimeCycle;
this.TimePump;
this.MinPercycle;
this.TR;
this.EL;
this.OHD;
this.TOW;
   }

  ngOnInit(): void {
  }
  ProductData(){
    
  
    this.AFR =Number(this.PFR)/(Number(this.strength)/100);
  this.FPS();
this.CS();
  }

  FPS(){
this.AdjPO = (Number(this.SpeedSetting)/100)*(Number(this.StrokeFreq)/Number(this.MaxStrokeFreq))*Number(this.MaxPO)

    this.CS();
  }

  CS(){
    if(this.PFR){
      switch (this.PFR) {
        case 0:
          this.TimePump = 0;
          break;
        
        default:
          this.TimePump = ((Number(this.AFR)*(Number(Number(this.TR)*1.8*(Number(this.EL)/100)*Number(this.OHD)*0.85)/Number((Number(this.TOW)-1))))/(Number((120000*Number(this.CD)*Number(this.AdjPO)))));
          this.MinPercycle = Number(this.TimeCycle)*Number(this.TimePump);  
          break;
    
      }
        
    }

  };
}

