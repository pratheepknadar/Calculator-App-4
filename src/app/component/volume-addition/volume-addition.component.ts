import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import products from './products.json';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-volume-addition',
  templateUrl: './volume-addition.component.html',
  styleUrls: ['./volume-addition.component.css']
})

export class VolumeAdditionComponent implements OnInit {
  public productsList: Product[]= products;




  SOL: string;
  LOL:string;
 public chemAddition: number;
  SystemVolume: number;
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


  A1(){
    this.ChemAdd();
  }
  add(){
    
    
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
 ChemAdd()
 {
   if(this.SOL){
     switch (this.SOL) {
       case "v1":
         this.chemAddition = Number(this.LCA)*Number(this.CD);
         break;
     case "v2":
       this.chemAddition = Number(this.SCA);
       break;
       default:
         break;
     }
   }
 }
 ChemAdd1()
{
var selected = this.productsList.find(list => list.AN ==  this.CHEM);
this.LOL = selected.Form;
this.CD = Number(selected.Density);
this.INHIBT = selected.Test;
this.ITA = Number(Number(selected.TA).toFixed(2));

if(this.LOL){
  switch (this.LOL) {
    case "Liquid":
    this.chemAddition = Number(Math.abs(Number(this.LCA)*Number(this.CD)).toFixed(1));
      break;
  case "Solid":
    this.chemAddition = Math.abs(Number(this.SCA));
    break;
    default:
      break;
  }
}

if(this.INHIBT){
  switch (this.INHIBT) {
    case "PTSA":
      this.SystemVolume = Number((Math.abs(Number(this.chemAddition)*120000*(Number(this.ITA)/100))/((Number(this.FINTR)-Number(this.ITR))/1000)).toFixed(2));
      break;  
    default:
     this.SystemVolume = Number((Math.abs((this.chemAddition)*120000*(Number(this.ITA)/100))/(Number(this.FINTR)-Number(this.ITR))).toFixed(2)); 
      break;

  }

  
}


}
}




/*const jsonValue: JsonData[]=[
  {
      chem:'31935',
      liquidOrSoldi:'Liquid',
      code:'v1',
      cd: 8.84,
      it: 'PTSA',
      ita:0.03
  },
  {
      chem:'1234',
      liquidOrSoldi:'Solid',
      code:'v2',
      cd: 8.84,
      it: 'PTSA',
      ita:0.03
  }
]*/