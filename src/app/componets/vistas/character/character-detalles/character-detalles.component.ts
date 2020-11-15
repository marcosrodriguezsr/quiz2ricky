import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { character } from '@app/general/componets/interfaces/character.interface';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';
import { CharacterService } from '@app/general/service/character.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-character-detalles',
  templateUrl: './character-detalles.component.html',
  styleUrls: ['./character-detalles.component.scss']
})
export class CharacterDetallesComponent implements OnInit {
  character$: Observable<character>;

  constructor(private route: ActivatedRoute, private characterSvc: CharacterService,
    private location:Location) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id=params['id'];
      this.character$=this.characterSvc.getDetails(id);
    })
  }

  onGoBack():void{
    this.location.back
  }

}
