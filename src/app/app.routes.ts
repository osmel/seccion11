import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';



const APP_ROUTES: Routes = [
  //{ path: '', component: HomeComponent }, //default
  { path: 'heroes', component: HeroesComponent },
  {path:'heroe/:id',component:HeroeComponent, data:{nombre:'osmel'} },

  //esta es la ruta por defecto, que tomara sino coincide ninguna
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

//si usas este sin hash, asegurarse de que en index.html aparezca esto   <base href="/">
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
//useHash:true ->para el uso de parametros
//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
