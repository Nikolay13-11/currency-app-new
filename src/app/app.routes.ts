import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadChildren: () => import('./main/main-page.module').then((m) => m.MainPageModule)
}];
