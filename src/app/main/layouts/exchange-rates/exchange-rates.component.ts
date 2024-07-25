import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrl: './exchange-rates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExchangeRatesComponent {

}
