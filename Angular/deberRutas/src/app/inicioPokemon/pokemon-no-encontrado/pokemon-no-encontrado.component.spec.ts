import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonNoEncontradoComponent } from './pokemon-no-encontrado.component';

describe('PokemonNoEncontradoComponent', () => {
  let component: PokemonNoEncontradoComponent;
  let fixture: ComponentFixture<PokemonNoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonNoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonNoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
