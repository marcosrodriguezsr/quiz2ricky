import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { CharacterDetallesModule } from './character-detalles/character-detalles.module';
import { CharacterDetallesComponent } from './character-detalles/character-detalles.component';
import { CharacterListComponent } from './character-list/character-list.component';

const myComponets = [CharacterDetallesComponent,CharacterListComponent];

@NgModule({
  declarations: [
    CharacterDetallesComponent,
    CharacterListComponent

  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[CharacterDetallesComponent,
    CharacterListComponent],
})
export class CharacterModule { }
