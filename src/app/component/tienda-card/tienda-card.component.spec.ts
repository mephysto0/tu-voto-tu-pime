import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaCardComponent } from './tienda-card.component';

describe('TiendaCardComponent', () => {
  let component: TiendaCardComponent;
  let fixture: ComponentFixture<TiendaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
