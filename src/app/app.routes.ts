import { Routes } from '@angular/router';
import { Connaissances } from './components/connaissances/connaissances';
import { AjoutConnaissance } from './components/ajout-connaissance/ajout-connaissance';
import { Assistant } from './components/assistant/assistant';
import { ModificationConnaissance } from './components/modification-connaissance/modification-connaissance';

export const routes: Routes = [
  {
    path: 'connaissances',
    component: Connaissances
  },
    {
    path: 'ajout',
    component: AjoutConnaissance
  },
  {
  path: 'assistant',
  component: Assistant
},

{
  path: 'modifier/:id',
  component: ModificationConnaissance
}
];