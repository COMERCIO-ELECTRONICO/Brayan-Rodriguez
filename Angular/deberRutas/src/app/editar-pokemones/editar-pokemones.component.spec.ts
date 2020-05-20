import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPokemonesComponent } from './editar-pokemones.component';

describe('EditarPokemonesComponent', () => {
  let component: EditarPokemonesComponent;
  let fixture: ComponentFixture<EditarPokemonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPokemonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPokemonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
