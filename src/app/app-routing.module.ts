import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalInsuranceComponent } from './components/additional-insurance/additional-insurance.component';
import { MainInsuranceComponent } from './components/main-insurance/main-insurance.component';


const routes: Routes = [
    {path: '', component: MainInsuranceComponent},
    {path: 'additional', component: AdditionalInsuranceComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
