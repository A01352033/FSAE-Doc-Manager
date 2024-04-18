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
import { HttpClientModule } from '@angular/common/http';

import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeDocComponent } from './home-doc/home-doc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PopupFileversionsComponent } from './popup-fileversions/popup-fileversions.component';

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
    HeaderComponent,
    CardComponent,
    LandingComponent,
    AboutComponent,
    ContactComponent,
    HomeDocComponent,
    PageNotFoundComponent,
    PopupFileversionsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
