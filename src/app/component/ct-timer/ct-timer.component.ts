import { Component, OnInit } from '@angular/core';
import products from './products.json';
interface Product {
  Type: string;
  Product: string;
  AN: string;
  Form: string;
  Density:string;
  Test: string;
  TA: string;
  FR: string;
  Solubulity:string;
}
@Component({
  selector: 'app-ct-timer',
  templateUrl: './ct-timer.component.html',
  styleUrls: ['./ct-timer.component.css']
})
export class CtTimerComponent implements OnInit {

  public productsList: Product[]= products;
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
    var selected = this.productsList.find(list => list.AN ==  this.CHEM);
    this.LOL = selected.Form;
    this.CD = Number(selected.Density);
    this.INHIBT = selected.Test;
    this.ITA = Number(selected.TA);
    this.strength = Number(selected.Solubulity);
    this.FR = Number(selected.FR);
  
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
