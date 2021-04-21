import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ct-prop-makeup-manual',
  templateUrl: './ct-prop-makeup-manual.component.html',
  styleUrls: ['./ct-prop-makeup-manual.component.css']
})
export class CtPropMakeupManualComponent implements OnInit {
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
  GalPerContact: Number;
  ContactCounter: Number;
  AdjGalPerContact: Number;
  SecondPerContact: Number;
  TOW: Number;
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
this.GalPerContact;
this.ContactCounter;
this.AdjGalPerContact;
this.SecondPerContact;
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
            this.AdjGalPerContact = 0;
            break;
          
          default:
            this.AdjGalPerContact = Number(this.GalPerContact)*Number(this.ContactCounter);
            this.SecondPerContact = (0.72*Number(this.AFR)*Number(this.AdjGalPerContact)/(Number(this.TOW)*Number(this.CD)*Number(this.AdjPO)));
            break;
      
        }
          
      }
   
    }

}

