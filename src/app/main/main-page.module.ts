import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AnalyseComponent, CurrencyConverterComponent, ExchangeRatesComponent } from './layouts'



@NgModule({
  declarations: [AnalyseComponent, CurrencyConverterComponent, ExchangeRatesComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule
  ]
})
export class MainPageModule { }
