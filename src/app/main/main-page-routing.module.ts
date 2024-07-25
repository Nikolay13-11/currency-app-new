import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExchangeRatesComponent } from "./layouts/exchange-rates/exchange-rates.component";
import { CurrencyConverterComponent } from "./layouts/currency-converter/currency-converter.component";
import { AnalyseComponent } from "./layouts/analyse/analyse.component";


const routes: Routes = [
  { path: '', redirectTo: 'rates', pathMatch: 'full' },
  { path: 'rates', component: ExchangeRatesComponent},
  { path: 'converter', component: CurrencyConverterComponent},
  { path: 'analyse', component: AnalyseComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}
