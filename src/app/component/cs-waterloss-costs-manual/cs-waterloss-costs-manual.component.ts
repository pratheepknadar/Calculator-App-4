import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-waterloss-costs-manual',
  templateUrl: './cs-waterloss-costs-manual.component.html',
  styleUrls: ['./cs-waterloss-costs-manual.component.css']
})
export class CsWaterlossCostsManualComponent implements OnInit {
  CHEM: String; 
  LOL: String;
  CD: number;
  INHIBT: String;
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
  constructor() { }
  
  ngOnInit(): void {
  }

  csWaterLossCost1()
  {
    
   
    if(this.INHIBT){
      switch (this.INHIBT) {
        case "i1":
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
      case "v1":
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
  
