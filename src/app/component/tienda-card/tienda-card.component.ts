import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/producto.model';

@Component({
  selector: 'app-tienda-card',
  templateUrl: './tienda-card.component.html',
  styleUrls: ['./tienda-card.component.css']
})
export class TiendaCardComponent implements OnInit {

  @Input()
  public producto!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
