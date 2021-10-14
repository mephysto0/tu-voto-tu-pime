import { Component, Input, OnInit } from '@angular/core';
import { Product} from '../../models/producto.model';

@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styleUrls: ['./producto-tarjeta.component.css']
})
export class ProductoTarjetaComponent implements OnInit {

  @Input()
  public producto!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
