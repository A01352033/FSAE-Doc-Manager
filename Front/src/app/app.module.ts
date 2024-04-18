import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { ChasisComponent } from './Vehicle/chasis/chasis.component';
import { SuspensionComponent } from './Vehicle/suspension/suspension.component';
import { ElectronicsComponent } from './Vehicle/electronics/electronics.component';
import { PowertrainComponent } from './Vehicle/powertrain/powertrain.component';
import { MarketingComponent } from './Administration/marketing/marketing.component';
import { FinanceComponent } from './Administration/finance/finance.component';
import { SectionLayoutComponent } from './layouts/section-layout/section-layout.component';
import { DocumentsComponent } from './documents/documents.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardComponent,
    ChasisComponent,
    SuspensionComponent,
    ElectronicsComponent,
    PowertrainComponent,
    MarketingComponent,
    FinanceComponent,
    SectionLayoutComponent,
    DocumentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
