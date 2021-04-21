import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolumeAdditionComponent } from './component/volume-addition/volume-addition.component';
import { VolumePTSASaltComponent } from './component/volume-ptsa-salt/volume-ptsa-salt.component';
import { Routes, RouterModule } from '@angular/router';
import { VolumeDimensionsComponent } from './component/volume-dimensions/volume-dimensions.component';
import { HomecomponentComponent } from './component/homecomponent/homecomponent.component';
import { CSWaterlossComponent } from './component/cs-waterloss/cs-waterloss.component';
import { VolumepageComponent } from './component/volumepage/volumepage.component';
import { CsWaterlossCostsComponent } from './component/cs-waterloss-costs/cs-waterloss-costs.component';
import { ChemDosageComponent } from './component/chem-dosage/chem-dosage.component';
import { LSIMassBalanceComponent } from './component/lsi-mass-balance/lsi-mass-balance.component';
import { CTBiocideComponent } from './component/ct-biocide/ct-biocide.component';
import { CTPropMakeupComponent } from './component/ct-prop-makeup/ct-prop-makeup.component';
import { CtPropBleedComponent } from './component/ct-prop-bleed/ct-prop-bleed.component';
import { CtTimerComponent } from './component/ct-timer/ct-timer.component';
import { CtBleedFeedComponent } from './component/ct-bleed-feed/ct-bleed-feed.component';
import { CTMassBalanceComponent } from './component/ct-mass-balance/ct-mass-balance.component';
import { VolumeAdditionManualComponent } from './component/volume-addition-manual/volume-addition-manual.component';
import { ClosedSystemPageComponent } from './component/closed-system-page/closed-system-page.component';
import { CoolingTowerPageComponent } from './component/cooling-tower-page/cooling-tower-page.component';
import { CsWaterlossCostsManualComponent } from './component/cs-waterloss-costs-manual/cs-waterloss-costs-manual.component';
import { CtBiocideManualComponent } from './component/ct-biocide-manual/ct-biocide-manual.component';
import { CtPropMakeupManualComponent } from './component/ct-prop-makeup-manual/ct-prop-makeup-manual.component';
import { CtTimerManualComponent } from './component/ct-timer-manual/ct-timer-manual.component';
import { CtPropBleedManualComponent } from './component/ct-prop-bleed-manual/ct-prop-bleed-manual.component';
import { CtBleedFeedManualComponent } from './component/ct-bleed-feed-manual/ct-bleed-feed-manual.component';

const routes: Routes = [
  {path: '', component: HomecomponentComponent},
  {path: 'VolumebyAddition', component: VolumeAdditionComponent},   // for creating routes to components
  {path: 'VolumebyPTSA', component:VolumePTSASaltComponent},
  {path: 'VolumebyDimension', component:VolumeDimensionsComponent},
  {path: 'CSWaterLoss', component:CSWaterlossComponent},
  {path:'VolumePage',component:VolumepageComponent},
  {path:'CSWaterlossCosts',component: CsWaterlossCostsComponent},
  {path: 'chemDosage', component: ChemDosageComponent},
  {path: 'lsi-mass', component: LSIMassBalanceComponent},
  {path: 'ct-bio', component: CTBiocideComponent},
  {path: 'ct-prop', component: CTPropMakeupComponent},
  {path: 'ct-bleed', component: CtPropBleedComponent},
  {path: 'ct-timer', component: CtTimerComponent},
  {path: 'ct-bleed-feed', component: CtBleedFeedComponent},
  {path: 'ct-mass-balance', component: CTMassBalanceComponent},
  {path:'VolumebyAdditionManual',component: VolumeAdditionManualComponent},
  {path:'cs-page',component: ClosedSystemPageComponent},
  {path:'ct-page',component: CoolingTowerPageComponent},
  {path: 'CSWaterlossCostsManual', component: CsWaterlossCostsManualComponent},
  {path: 'ct-bio-manual', component: CtBiocideManualComponent},
  {path: 'ct-prop-manual', component: CtPropMakeupManualComponent},
  {path: 'ct-timer-manual', component: CtTimerManualComponent},
  {path: 'ct-prop-bleed-manual', component: CtPropBleedManualComponent},
  {path: 'ct-bleed-feed-manual', component: CtBleedFeedManualComponent}




]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [VolumeAdditionComponent,VolumePTSASaltComponent]