import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdditionalInsuranceComponent} from './components/insurance/additional-insurance/additional-insurance.component';
import {InsuranceComponent} from "./components/insurance/insurance.component";


const routes: Routes = [
    {path: '', component: InsuranceComponent},
    {path: 'additional', component: AdditionalInsuranceComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
