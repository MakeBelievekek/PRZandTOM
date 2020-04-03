import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdditionalInsuranceComponent} from './components/insurance/additional-insurance/additional-insurance.component';
import {InsuranceComponent} from "./components/insurance/insurance.component";
import {MainInsuranceComponent} from "./components/insurance/main-insurance/main-insurance.component";


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},

  {
    path: '', component: InsuranceComponent, children: [
      {path: 'main', component: MainInsuranceComponent},
      {path: 'additional', component: AdditionalInsuranceComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
