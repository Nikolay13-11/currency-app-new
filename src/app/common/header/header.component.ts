import { Component } from '@angular/core';
import { ChangeColorComponent } from './components/change-color/change-color.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ChangeColorComponent, NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
