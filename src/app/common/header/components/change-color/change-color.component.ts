import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from '../../../../services/internal/theme.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-change-color',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './change-color.component.html',
  styleUrl: './change-color.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeColorComponent {
  isLightThemeActivate = true;

  constructor(private themeService: ThemeService) {}

  change(): void {
    this.isLightThemeActivate = !this.isLightThemeActivate;
    if (this.isLightThemeActivate) {
      this.themeService.switchTheme('lara-light-blue');
    }
    else {
      this.themeService.switchTheme('lara-dark-blue');
    }
  }
}
