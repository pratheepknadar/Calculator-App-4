import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-waterloss',
  templateUrl: './cs-waterloss.component.html',
  styleUrls: ['./cs-waterloss.component.css']
})
export class CSWaterlossComponent implements OnInit {
  NDAYS:Number;
  diffDays:Number;
  diff:Number;
  date1:Date;
  date2:Date;
  diffdate1:number;

  constructor() { }

  ngOnInit(): void {
  }
SYV:number;
PTD:Date;
PTL:Number;
CTD:Date;
CTL:number;
D1: Number;
D2: Number;
CWL1:Number;
AWL1:Number;

fun1(){
  

}

/* Date1(){
  this.NDAYS = Number(this.CTD)-Number(this.PTD);
this.diff = Number(Math.abs(this.CTD.getTime() - this.PTD.getTime()));
   this.diffDays = Number(Math.ceil(Number(this.diff) / (1000 * 3600 * 24))); 
}*/

Date1()
{
  var diff = Math.abs(this.CTD.getTime() - this.PTD.getTime());
var diffDays = Math.ceil(diff / (1000 * 3600 * 24));

  this.D1 = Number(this.CTD);
  this.D2 = Number(this.PTD);
  this.diff = Number(this.D1)-Number(this.D2);
  this.diffDays = Number(Math.ceil(Number(this.diff) / (1000 * 3600 * 24))); 
  
}

Date2(): void{
  if(!this.date1 || !this.date2)
  return;
  const diff = Number(Math.abs(this.date1.getTime() - this.date2.getTime()));
  this.diffDays = Number(Math.ceil(Number(diff) / (1000 * 3600 * 24)));
  this.CWL1 = Math.round((Math.log10(Number(this.PTL)/Number(this.CTL))*2.303*Number(this.SYV)));
  this.AWL1 = Math.round((Number(this.CWL1)/Number(this.diffDays)*365));
}

}

/* const products:Product[]=[
  {
    productName:'10121',
   liquid:'Solid',
   feedRate: '2'
  },
  {
    productName:'213',
   liquid:'liquid',
   feedRate: '7'
  },
  {
    productName:'1012345121',
   liquid:'Solid',
   feedRate: '5'
  },
  {
    productName:'12456',
   liquid:'liquid',
   feedRate: '2'
  },

];

export class Product{
productName: string;
feedRate: string;
liquid: string;
} */