import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { FormacionExperienciaComponent } from './components/formacion-experiencia/formacion-experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: 'formacion-experiencia', component: FormacionExperienciaComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: '**', redirectTo: '' }
];
