import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { SolutionComponent } from './solution/solution.component';
import { ProductComponent } from './product/product.component';
import { SuccessComponent } from './success/success.component';
import { PricingComponent } from './pricing/pricing.component';
import { DemoComponent } from './demo/demo.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { GdprComponent } from './gdpr/gdpr.component';
import { SmsComponent } from './sms/sms.component';
import { TrialComponent } from './trial/trial.component';
import { WpComponent } from './wp/wp.component';
import { SmsLimitComponent } from './sms-limit/sms-limit.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { CampaignExamplesComponent } from './campaign-examples/campaign-examples.component';

const routes: Routes = [
  // Layout componet and other pages
  {
   path: '',
   component: LayoutComponent,
   children: [
    { path: '', component: HomeComponent, pathMatch: 'full',
      data: {title: 'Travlytix - Customer Data Platform for Airlines and Travel Tech'} },
    { path: 'solution', component: SolutionComponent, data: {title: 'Travlytix - Solution'} },
    { path: 'product', component: ProductComponent, data: {title: 'Travlytix - Product'} },
    { path: 'success', component: SuccessComponent, data: {title: 'Travlytix - Success'} },
    { path: 'pricing', component: PricingComponent, data: {title: 'Travlytix - Pricing'} },
    { path: 'demo', component: DemoComponent, data: {title: 'Travlytix - Request Demo'} },
    { path: 'about', component: AboutComponent, data: {title: 'Travlytix - About Us'} },
    { path: 'terms', component: TermsComponent, data: {title: 'Travlytix - Terms and Conditions'} },
    { path: 'privacy-policy', component: PrivacyComponent, data: {title: 'Travlytix - Privacy policy'} },
    { path: 'gdpr', component: GdprComponent, data: {title: 'Travlytix - GDPR Data Processing Addendum'} },
    { path: 'sms', component: SmsComponent, data: {title: 'Travlytix - SMS Pricing'} },
    { path: 'sms-limit', component: SmsLimitComponent, data: {title: 'Travlytix - SMS Pricing'} },
    { path: 'trial', component: TrialComponent, data: {title: 'Travlytix - Travlytix Limitations'} },
    { path: 'campaign-examples', component: CampaignExamplesComponent, data: {title: 'Travlytix - Campaign Examples'} },
    { path: 'cs', component: ComingSoonComponent, data: {title: 'Travlytix - Coming Soon page'} },
   ]
 },
 {
  path: '',
  children: [
   { path: 'wp', component: WpComponent, data: {title: 'Travlytix - Travlytix Limitations'} },
  ]
},
 // otherwise redirect to home
 { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'top',
  useHash: false
})],
 exports: [RouterModule]
})
export class AppRoutingModule { }
