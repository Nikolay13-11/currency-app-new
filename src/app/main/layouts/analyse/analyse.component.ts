import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrl: './analyse.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyseComponent {
  value: any
}
