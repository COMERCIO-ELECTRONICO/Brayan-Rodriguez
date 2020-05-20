import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPokemonesComponent } from './crear-pokemones.component';

describe('CrearPokemonesComponent', () => {
  let component: CrearPokemonesComponent;
  let fixture: ComponentFixture<CrearPokemonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPokemonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPokemonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
