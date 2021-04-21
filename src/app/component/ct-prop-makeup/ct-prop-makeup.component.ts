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
  selector: 'app-ct-prop-makeup',
  templateUrl: './ct-prop-makeup.component.html',
  styleUrls: ['./ct-prop-makeup.component.css']
})
export class CTPropMakeupComponent implements OnInit {
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
