import { BoundDirectivePropertyAst } from '@angular/compiler';
import { Component, OnInit, ɵɵpureFunction1 } from '@angular/core';
import System from './SystemType.json';
interface System {
  SystemType:  String,
  Capacity : String ,
  LoadFactor :  String ,
  EvaporationRate : Number
}

@Component({
  selector: 'app-ct-mass-balance',
  templateUrl: './ct-mass-balance.component.html',
  styleUrls: ['./ct-mass-balance.component.css']
})

export class CTMassBalanceComponent implements OnInit {
  public SystemsList: System[]= System;

  constructor() { }

  ngOnInit(): void {
  }
CST:string;
RR:Number;
ADT:Number;
HPD:Number;
DPWO:Number;
WPYO:Number;
SVG:Number;
WCD:Number;
SCD:Number;
TTCY:Number;
sType:String;
LFactor:String;
ER:Number;
HL:Number;
BLD: Number;
MKP: Number;
MWC: Number;
ECD: Number;
EVY: Number;
BLY: Number;
MKY: Number;
MWCY: Number;
ECY: Number;



  

 FUN1(){
  var selected = this.SystemsList.find(list => list.SystemType ==  this.CST);
  this.sType = selected.Capacity;
  this.LFactor =selected.LoadFactor;
  this.ER = selected.EvaporationRate;
  this.BLD = Number(this.ER)/(Number(this.TTCY)-1);
  this.MKP =Number(this.ER)+Number(this.BLD);
  this.HL = Number(((Number(this.SVG)*0.7)/(Number(this.BLD)/Number(this.HPD))).toFixed(1));
  this.MWC = Number(((Number(this.BLD)/1000)*(Number(this.WCD)+Number(this.SCD))+Number(this.WCD)*(Number(this.ER)/1000)).toFixed(2));
  this.ECD = (Number(this.ER)/1000)*Number(this.SCD);
  this.EVY = Number(this.ER)*Number(this.WPYO)*Number(this.DPWO);
  this.BLY = Number(this.BLD)*Number(this.WPYO)*Number(this.DPWO);
  this.MKY = Number(this.MKP)*Number(this.WPYO)*Number(this.DPWO);
  this.MWCY = Math.round(Number(this.MWC)*Number(this.WPYO)*Number(this.DPWO));
  this.ECY = Math.round(Number(this.ECD)*Number(this.WPYO)*Number(this.DPWO));
   

 }
}

 
