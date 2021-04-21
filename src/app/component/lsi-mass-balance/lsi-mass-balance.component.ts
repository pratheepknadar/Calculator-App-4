import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lsi-mass-balance',
  templateUrl: './lsi-mass-balance.component.html',
  styleUrls: ['./lsi-mass-balance.component.css']
})
export class LSIMassBalanceComponent implements OnInit {
A:Number;
B:Number;
C:Number;
D:Number;
E:Number;
MXC:Number;
TLC:Number;
  constructor() { }

  ngOnInit(): void {
  }
MST:Number;
MC:Number;
FPL:Number;
MCH:Number;
MKS:Number;
ATP:Number;
TLAP:Number;
TTC:Number;
MTA:Number;
CPT:Number;
TLA:Number;

F1(){
  this.A = Number(this.TTC)*Number(this.MC);
  this.B = Number(this.TTC)*Number(this.MTA);
  this.C = Number(this.TTC)*Number(this.MCH);
  this.D = Number(this.TTC)*Number(this.MKS);
  this.MXC = 150/Number(this.MKS);
  this.CPT = (((Math.log10(Number(this.B)*0.9*1.219)+2.19)/0.55));
  this.TLC = Number(this.CPT)-Number(this.E);
  this.E = (((Math.log10(Number(this.A)*0.8)*0.1111)+12.3)-(Math.log10(Number(this.C)*Number(this.B))+(0.00915*Number(this.MST))));
  this.TLA = Number(this.ATP)-Number(this.E);



}
}
