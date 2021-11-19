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
  sort: Product[] = [];

  public bebe : string | undefined;
  public PeryCos : string | undefined;
  public mascotas : string | undefined;
  public vestuario : string | undefined;
  public hogar : string | undefined;
  public jardin : string | undefined;
  public alimentos : string | undefined;
  public perfumes : string | undefined;
  public artesania : string | undefined;
  public deportes : string | undefined;
  public joyeria : string | undefined;
  public otros : string | undefined;

  constructor(private productService: ProductService,) { }

  filterPost = '';

  ngOnInit(): void {

    this.bebe = 'Bebe';
    this.PeryCos = 'Perfumes y Cosmeticos';
    this.mascotas = 'Mascotas';
    this.vestuario = 'Vestuario';
    this.hogar = 'Hogar y decoracion';
    this.alimentos = 'Alimentos';
    this.perfumes = 'Perfumeria';
    this.artesania = 'Artesania';
    this.jardin = 'Hogar y jardin';
    this.deportes = 'Articulos deportivos';
    this.joyeria = 'joyeria';
    this.otros = 'otros';

    this.productService.getProducts()
      .subscribe(
        res => {
          this.products = res;
          this.sort =  res.sort((a,b)=>(a.likes > b.likes ? -1:1))
        },
        err => console.log(err)
      )


  }


}
