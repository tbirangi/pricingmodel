import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingModelComponent } from './pricing/pricing-model/pricing-model.component';
import { ClinicalStep2Component } from './pricing/clinical-step2/clinical-step2.component';
import { ClinicalStep8Component } from './pricing/clinical-step8/clinical-step8.component';

const routes: Routes = [
  { path: '', component: PricingModelComponent },
  { path: 'clinical-step2', component: ClinicalStep2Component },
  { path: 'clinical-step8', component: ClinicalStep8Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
