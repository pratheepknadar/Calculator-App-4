import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume-dimensions',
  templateUrl: './volume-dimensions.component.html',
  styleUrls: ['./volume-dimensions.component.css']
})
export class VolumeDimensionsComponent implements OnInit {
  SumpF:Number;
  FCT:Number;
  FPD:Number;
  CTGPF:Number;

  constructor() {
    this.A = 0;
    this.B = 0;
    this.C = 0;
    this.D = 0;
    this.E = 0;
    this.F = 0;
    this.G = 0;
    this.H = 0;
    this.I = 0;
    this.J = 0;
    this.K = 0;
    this.L = 0;
    this.M = 0;
    this.N = 0;
   }

  ngOnInit(): void {
  }
Len1:Number;
Wid1:Number;
Dep1:Number;
Qty1:Number;
Hgt1:Number;
Dia1:Number;
Qty2:Number;
A:Number;
B:Number;
C:Number;
D:Number;
E:Number;
F:Number;
G:Number;
H:Number;
I:Number;
J:Number;
K:Number;
L:Number;
M:Number;
N:Number;
CTGP:Number;  
Sump1(){
  this.SumpF = Number(this.Len1) * Number(this.Wid1) *Number(this.Qty1) *Number(this.Dep1) * 7.48;
}
CT(){
  this.FCT = 3.1415 * Number(this.Dia1)/2 * Number(this.Dia1)/2 * Number(this.Hgt1) * Number(this.Qty2) * 7.48;
}
PD(){
  this.FPD = (48.5587194279688 * Number(this.A))  + (33.4264058165549 * Number(this.B)) + (28.9119754120511 * Number(this.C)) + (24.7691122896996 * Number(this.D)) + (20.8928719692679 * Number(this.E)) + (17.5656909335894 * Number(this.F)) + (14.4346622381837 * Number(this.G)) + (11.6244903045382 * Number(this.H)) + (9.179342046875 * Number(this.I)) + (7.03328939075958 * Number(this.J)) + (5.81617799037275 * Number(this.K)) + (4.09604272552475 * Number(this.L)) + (2.59862526560102 * Number(this.M)) + (1.50068881424094 * Number(this.N));
}
CTG(){
  this.CTGPF =  (Number(this.SumpF) + Number(this.FCT) +Number(this.FPD)) * (1 + Number(this.CTGP)/100);
}

}
