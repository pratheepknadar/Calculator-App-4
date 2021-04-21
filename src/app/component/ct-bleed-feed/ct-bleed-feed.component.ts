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
  selector: 'app-ct-bleed-feed',
  templateUrl: './ct-bleed-feed.component.html',
  styleUrls: ['./ct-bleed-feed.component.css']
})
export class CtBleedFeedComponent implements OnInit {

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
