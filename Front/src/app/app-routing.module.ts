import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChasisComponent } from './Vehicle/chasis/chasis.component';
import { ElectronicsComponent } from './Vehicle/electronics/electronics.component';
import { FinanceComponent } from './Administration/finance/finance.component';
import { MarketingComponent } from './Administration/marketing/marketing.component';
import { PowertrainComponent } from './Vehicle/powertrain/powertrain.component';
import { SuspensionComponent } from './Vehicle/suspension/suspension.component';
import { SectionLayoutComponent } from './layouts/section-layout/section-layout.component';
import { DocumentsComponent } from './documents/documents.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { 
    path: 'chasis',
    component: SectionLayoutComponent, // Este componente muestra la sección "Recientes"
    children: [
      { path: '', component: ChasisComponent }, // La vista principal de "Chasis"
      { path: 'documents/:id', component: DocumentsComponent } // La vista de documentos específicos de un folder
    ]
  },
  { 
    path: 'suspension',
    component: SectionLayoutComponent,
    children: [
      { path: '', component: SuspensionComponent },
      { path: 'documents/:id', component: DocumentsComponent }
    ]
  },
  { 
    path: 'electronics',
    component: SectionLayoutComponent,
    children: [
      { path: '', component: ElectronicsComponent },
      { path: 'documents/:id', component: DocumentsComponent }
    ]
  },
  { 
    path: 'powertrain',
    component: SectionLayoutComponent,
    children: [
      { path: '', component: PowertrainComponent },
      { path: 'documents/:id', component: DocumentsComponent }
    ]
  },
  { 
    path: 'marketing',
    component: SectionLayoutComponent,
    children: [
      { path: '', component: MarketingComponent },
      { path: 'documents/:id', component: DocumentsComponent }
    ]
  },
  { 
    path: 'finance',
    component: SectionLayoutComponent,
    children: [
      { path: '', component: FinanceComponent },
      { path: 'documents/:id', component: DocumentsComponent }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
