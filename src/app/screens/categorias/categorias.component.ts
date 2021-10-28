import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/producto.model';
import { ProductService } from '../../services/product.services'

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  public productos : Product[] | undefined;

  products: Product[] = [];

  public bebe : string | undefined;
  public PeryCos : string | undefined;
  public mascotas : string | undefined;
  public vestuario : string | undefined;
  public hogar : string | undefined;
  public alimentos : string | undefined;

  constructor(private productService: ProductService,) { }

  ngOnInit(): void {

    this.bebe = 'Bebe';
    this.PeryCos = 'Perfumes y Cosmeticos';
    this.mascotas = 'Mascotas';
    this.vestuario = 'Vestuario';
    this.hogar = 'Hogar y decoracion';
    this.alimentos = 'Alimentos';

    this.productService.getProducts()
      .subscribe(
        res => {
          this.products = res;
        },
        err => console.log(err)
      )
  }
}
