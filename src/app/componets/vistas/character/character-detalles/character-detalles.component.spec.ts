import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetallesComponent } from './character-detalles.component';

describe('CharacterDetallesComponent', () => {
  let component: CharacterDetallesComponent;
  let fixture: ComponentFixture<CharacterDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
