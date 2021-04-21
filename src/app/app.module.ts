import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalciComponent } from './component/calci/calci.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HeadingComponent } from './component/heading/heading.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { GridComponent } from './component/grid/grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { VolumeAdditionComponent } from './component/volume-addition/volume-addition.component';
import { AppRoutingModule } from './app-routing.module';
import { VolumePTSASaltComponent } from './component/volume-ptsa-salt/volume-ptsa-salt.component';
import { VolumeDimensionsComponent } from './component/volume-dimensions/volume-dimensions.component';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { HomecomponentComponent } from './component/homecomponent/homecomponent.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CSWaterlossComponent } from './component/cs-waterloss/cs-waterloss.component';
import { VolumepageComponent } from './component/volumepage/volumepage.component';
import { CsWaterlossCostsComponent } from './component/cs-waterloss-costs/cs-waterloss-costs.component';
import { ChemDosageComponent } from './component/chem-dosage/chem-dosage.component';
import {​​​​​​​​MatDatepickerModule}​​​​​​​​ from'@angular/material/datepicker';
import {​​​​​​​​MatNativeDateModule}​​​​​​​​ from'@angular/material/core';
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





@NgModule({
  declarations: [
    AppComponent,
    CalciComponent,
    HeadingComponent,
    GridComponent,
    VolumeAdditionComponent,
    VolumePTSASaltComponent,
    VolumeDimensionsComponent,
    RootNavComponent,
    HomecomponentComponent,
    CSWaterlossComponent,
    VolumepageComponent,
    CsWaterlossCostsComponent,
    ChemDosageComponent,
    LSIMassBalanceComponent,
    CTBiocideComponent,
    CTPropMakeupComponent,
    CtPropBleedComponent,
    CtTimerComponent,
    CtBleedFeedComponent,
    CTMassBalanceComponent,
    VolumeAdditionManualComponent,
    ClosedSystemPageComponent,
    CoolingTowerPageComponent,
    CsWaterlossCostsManualComponent,
    CtBiocideManualComponent,
    CtPropMakeupManualComponent,
    CtTimerManualComponent,
    CtPropBleedManualComponent,
    CtBleedFeedManualComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    AppRoutingModule,
    LayoutModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
