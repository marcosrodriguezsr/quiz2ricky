import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterDetallesComponent } from './character-detalles.component';

const routes: Routes = [{ path: '', component: CharacterDetallesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterDetallesRoutingModule { }
