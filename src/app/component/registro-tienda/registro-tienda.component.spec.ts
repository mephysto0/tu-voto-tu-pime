import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTiendaComponent } from './registro-tienda.component';

describe('RegistroTiendaComponent', () => {
  let component: RegistroTiendaComponent;
  let fixture: ComponentFixture<RegistroTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
