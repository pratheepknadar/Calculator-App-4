import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ct-bleed-feed-manual',
  templateUrl: './ct-bleed-feed-manual.component.html',
  styleUrls: ['./ct-bleed-feed-manual.component.css']
})
export class CtBleedFeedManualComponent implements OnInit {
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

  BLFR1:Number;
  BLFR2:Number;
  PBT: Number;
  MPO:Number;
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
  this.BLFR1;
  this.BLFR2;
  this.PBT;
  this.MPO;
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
          this.PBT = 0;
          break;
        
        default:
          if(this.CD){
            switch (this.CD) {
              case 0:
                this.PBT = 0;
                break;
              
              default:
                this.PBT = (Number(0.012*Number(this.AFR)*Number(this.BLFR1))/(Number(this.AdjPO)*Number(this.CD)))*100;
                break;
          
            }
              
          }
       
          break;
    
      }
        
    }
    this.CS1();
  }

  CS1(){
    if(this.PFR){
      switch (this.PFR) {
        case 0:
          this.MPO = 0;
          break;
        
        default:
          if(this.CD){
            switch (this.CD) {
              case 0:
                this.MPO = 0;
                break;
              
              default:
                this.MPO = (Number(0.012*Number(this.AFR)*Number(this.BLFR2))/(Number(this.MaxPO)*Number(this.CD)))*100;
                break;
          
            }
              
          }
       
          break;
    
      }
        
    }
  }
}

