import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { HttpClientModule } from '@angular/common/http';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { BlogService } from './blog.service';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { ParticlesModule } from 'angular-particle';

// ngx module
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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
import { ClientsScrollComponent } from './clients-scroll/clients-scroll.component';
import { WpComponent } from './wp/wp.component';
import { SmsLimitComponent } from './sms-limit/sms-limit.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { CampaignExamplesComponent } from './campaign-examples/campaign-examples.component';

@NgModule({
   declarations: [
      AppComponent,
      LayoutComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      SolutionComponent,
      ProductComponent,
      SuccessComponent,
      PricingComponent,
      DemoComponent,
      AboutComponent,
      TermsComponent,
      PrivacyComponent,
      GdprComponent,
      SmsComponent,
      TrialComponent,
      ClientsScrollComponent,
      WpComponent,
      SmsLimitComponent,
      ComingSoonComponent,
      CampaignExamplesComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      Ng5SliderModule,
      NgxPageScrollModule,
      NgxPageScrollCoreModule,
      AccordionModule.forRoot(),
      TabsModule.forRoot(),
      SlickCarouselModule,
      ParticlesModule
   ],
   providers: [
    BlogService,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
