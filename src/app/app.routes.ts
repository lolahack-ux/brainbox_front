import { Routes } from '@angular/router';
import { Connaissances } from './components/connaissances/connaissances';
import { AjoutConnaissance } from './components/ajout-connaissance/ajout-connaissance';

export const routes: Routes = [
  {
    path: 'connaissances',
    component: Connaissances
  },
    {
    path: 'ajout',
    component: AjoutConnaissance
  }
];