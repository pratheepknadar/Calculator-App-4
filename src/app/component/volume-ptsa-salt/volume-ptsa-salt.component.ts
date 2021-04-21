import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume-ptsa-salt',
  templateUrl: './volume-ptsa-salt.component.html',
  styleUrls: ['./volume-ptsa-salt.component.css']
})
export class VolumePTSASaltComponent implements OnInit {
  TPSAV:Number;
  ADVTV:Number;
  LMAV:Number;
  ICLV:Number;

  constructor() { }

  ngOnInit(): void {
  }
  IPL:Number;
  MPA:Number;
  FPL:Number;
  IPLP:Number;
  VTA:Number;
  FPLP:Number;
  IMLP:Number;
  LMAL:Number;
  FMLP:Number;
  ICLP:Number;
  LSAA:Number;
  FCLP:Number;

TPSA(){
  this.TPSAV=Math.abs(Math.round(Math.abs(Number(this.MPA)*28000)/Math.abs(Number(this.FPL)-Math.abs(Number(this.IPL)))));
}
ADVT(){
  this.ADVTV=Math.round((Number(this.VTA)*100000)/(Number(this.FPLP)-Number(this.IPLP)));
}
LMA(){
  this.LMAV=Math.round((Number(this.LMAL)*19560)/(Number(this.FMLP)-Number(this.IMLP)));
}
ICL(){
  this.ICLV=Math.round((Number(this.LSAA)*72000)/(Number(this.FCLP)-Number(this.ICLP)));
}
}
