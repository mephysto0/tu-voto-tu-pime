import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPublicTiendaComponent } from './vista-public-tienda.component';

describe('VistaPublicTiendaComponent', () => {
  let component: VistaPublicTiendaComponent;
  let fixture: ComponentFixture<VistaPublicTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPublicTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPublicTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
