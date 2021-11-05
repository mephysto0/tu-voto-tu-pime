import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTiendaComponent } from './form-tienda.component';

describe('FormTiendaComponent', () => {
  let component: FormTiendaComponent;
  let fixture: ComponentFixture<FormTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
