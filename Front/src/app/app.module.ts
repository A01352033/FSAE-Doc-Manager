import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChasisComponent } from './Vehicle/chasis/chasis.component';
import { SuspensionComponent } from './Vehicle/suspension/suspension.component';
import { ElectronicsComponent } from './Vehicle/electronics/electronics.component';
import { PowertrainComponent } from './Vehicle/powertrain/powertrain.component';
import { MarketingComponent } from './Administration/marketing/marketing.component';
import { FinanceComponent } from './Administration/finance/finance.component';
import { SectionLayoutComponent } from './layouts/section-layout/section-layout.component';
import { DocumentsComponent } from './documents/documents.component';
import { PopupFileversionsComponent } from './popup-fileversions/popup-fileversions.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChasisComponent,
    SuspensionComponent,
    ElectronicsComponent,
    PowertrainComponent,
    MarketingComponent,
    FinanceComponent,
    SectionLayoutComponent,
    DocumentsComponent,
    PopupFileversionsComponent,
    UploadDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
