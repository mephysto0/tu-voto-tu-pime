import { NumberSymbol } from "@angular/common";

export interface Product{
  _id: string;
  nombre:string;
  tienda:string;
  imagePath: string;
  categoria:string;
  comentario:string;
  imageUrl: string;
  precio: string;
  likes : number;
}
