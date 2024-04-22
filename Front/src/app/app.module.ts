import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';

import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeDocComponent } from './home-doc/home-doc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PopupFileversionsComponent } from './popup-fileversions/popup-fileversions.component';
import { PopupCreateComponent } from './popup-create/popup-create.component';
import { CreateDocumentButtonComponent } from './create-document-button/create-document-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CardComponent,
    LandingComponent,
    AboutComponent,
    ContactComponent,
    HomeDocComponent,
    PageNotFoundComponent,
    PopupFileversionsComponent,
    PopupCreateComponent,
    CreateDocumentButtonComponent
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
