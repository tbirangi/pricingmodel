import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingModelComponent } from './pricing/pricing-model/pricing-model.component';
import { ClinicalStep2Component } from './pricing/clinical-step2/clinical-step2.component';

const routes: Routes = [
  { path: '', component: PricingModelComponent },
  { path: 'clinical-step2', component: ClinicalStep2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
