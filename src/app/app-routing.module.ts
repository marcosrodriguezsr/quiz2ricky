import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full',
  },

  
  { path: 'home', loadChildren: () => import('./componets/vistas/home/home.module').then(m => m.HomeModule) },
  { path: 'character-list', 
   loadChildren: () => import('./componets/vistas/character/character-list/character-list.module').then(m => m.CharacterListModule) }, 
   { path: 'character-detalles/:id', loadChildren: () => import('./componets/vistas/character/character-detalles/character-detalles.module').then(m => m.CharacterDetallesModule) }];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
