import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgCircleProgressModule} from 'ng-circle-progress';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainInsuranceComponent} from './components/insurance/main-insurance/main-insurance.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProgressBarComponent} from './components/shared/progress-bar/progress-bar.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {Ng5SliderModule} from 'ng5-slider';
import {SliderComponent} from './components/shared/slider/slider.component';
import {AdditionalInsuranceComponent} from './components/insurance/additional-insurance/additional-insurance.component';
import {DiscountProgressComponent} from './components/insurance/discounts/discount-progress/discount-progress.component';
import {PercentCircleComponent} from './components/shared/percent-circle/percent-circle.component';
import {DiscountTableComponent} from './components/insurance/discounts/discount-progress/discount-table/discount-table.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { DiscountsComponent } from './components/insurance/discounts/discounts.component';
import { RidersParameterComponent } from './components/insurance/riders-parameter/riders-parameter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInsuranceComponent,
    ProgressBarComponent,
    FooterComponent,
    SliderComponent,
    SliderComponent,
    AdditionalInsuranceComponent,
    DiscountProgressComponent,
    PercentCircleComponent,
    DiscountTableComponent,
    InsuranceComponent,
    DiscountsComponent,
    RidersParameterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng5SliderModule,
    NgbModule,
    NgCircleProgressModule.forRoot({
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


