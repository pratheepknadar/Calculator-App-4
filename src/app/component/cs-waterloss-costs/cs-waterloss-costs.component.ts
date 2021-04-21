import { Component, OnInit } from '@angular/core';
import products from './products.json';
 
interface Product {
  Type: string;
  Product: string;
  AN: string;
  Form: string;
  Density:string;
  Test: string;
  TA: String;
}
 
@Component({
  selector: 'app-cs-waterloss-costs',
  templateUrl: './cs-waterloss-costs.component.html',
  styleUrls: ['./cs-waterloss-costs.component.css']
})
export class CsWaterlossCostsComponent implements OnInit {
  public productsList: Product[]= products;
  CHEM: string; 
  LOL: string;
  CD: number;
  INHIBT: string;
  ITA:Number;
  IC: Number;
  CurrTestL:Number;
  TTestL: Number; 
  TTreatL: Number;
  DTreatL: Number; 
  sysVol: Number;
 chemAddlb: Number;
chemAddgal: Number;
chemAddcost:Number;
WC:Number;
SC: Number;
TC:Number;
date1:Date;
date2:Date;
diffDays:Number;
PTestL:Number;
CWaterLoss:Number;
WaterLossCost: Number;
ACReq: Number;
AWLoss: Number;
ACC: Number;
AWC: Number;
TAEC: Number;
 
 
  constructor() {
    this.WaterLossCost;
    this.CWaterLoss;
    this.PTestL;
    this.diffDays;
    this.date1;
    this.date2;
    this.TC;
    this.WC;
    this.SC;
    this.chemAddlb; 
    this.chemAddgal;
    this.chemAddcost;
  this.LOL;
  this.CD;
  this.INHIBT;
  this.ITA;
  this.IC;
  this.CurrTestL;
  this.TTestL; 
  this.TTreatL;
  this.DTreatL; 
  this.sysVol;
  this.ACReq;
  this.AWLoss;
  this.ACC;
  this.AWC;
  this.TAEC;
 
  }
 
  ngOnInit(): void {
  
  }
  
 
csWaterLossCost1()
{
  var selected = this.productsList.find(list => list.AN ==  this.CHEM);
  this.LOL = selected.Form;
  this.CD = Number(selected.Density);
  this.INHIBT = selected.Test;
  this.ITA = Number(selected.TA);
  
 
  if(this.INHIBT){
    switch (this.INHIBT) {
      case "PTSA":
        this.TTreatL = Number(Number(this.TTestL)/((Number(this.ITA)/100)*1000));
        this.DTreatL = (Number(this.TTestL)-Number(this.CurrTestL))/((Number(this.ITA)/100)*1000);
        break;
      
      default:
        this.TTreatL = Number(Number(this.TTestL)/((Number(this.ITA)/100)));
        this.DTreatL = (Number(this.TTestL)-Number(this.CurrTestL))/((Number(this.ITA)/100));
        break;
  
    }  
  }
  this.CC();
  this.WaterCost();
}
 
CC(){
 
this.chemAddlb = Number((Number(this.DTreatL)/120)*(Number(this.sysVol)/1000));
this.chemAddcost = Number(this.IC)*Number(this.chemAddlb)
if(this.LOL){
  switch (this.LOL) {
    case "Liquid":
      this.chemAddgal = Number(this.chemAddlb)/Number(this.CD);
      break;
    
    default:
      this.chemAddgal = 0;
      break;
 
  }
    
}
this.WaterCost();
}
 
 
WaterCost(){
  this.TC = Number(this.WC) + Number(this.SC);
  if(!this.date1 || !this.date2)
  return;
  const diff = Number(Math.abs(this.date1.getTime() - this.date2.getTime()));
  this.diffDays = Number(Math.ceil(Number(diff) / (1000 * 3600 * 24)));
  this.CWaterLoss = Number(Math.log10(Number(this.PTestL)/Number(this.CurrTestL))*2.303*Number(this.sysVol));
  this.WaterLossCost = (Number(this.CWaterLoss)*Number(this.TC)/1000); 
  this.AEC();
}
 
AEC(){
  this.AWLoss = Number(365/Number(this.diffDays))*Number(this.CWaterLoss);
  this.ACReq = (Number(this.TTreatL)/120)*(Number(this.AWLoss)/1000);
  this.ACC = Number(this.ACReq)*Number(this.IC);
  this.AWC= (Number(this.CWaterLoss)/Number(this.diffDays))*365*(Number(this.TC)/1000);
  this.TAEC= Number(this.ACC)+Number(this.AWC);
 
}
 
 
 
 
}
