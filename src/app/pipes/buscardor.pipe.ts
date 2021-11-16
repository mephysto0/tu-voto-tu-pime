import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscardor'
})
export class BuscardorPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {



    const resultPosts = [];


    for (const product of value) {
      if (product.nombre.toLowerCase().indexOf(arg) > -1 ) {
        console.log(product)
        resultPosts.push(product);
      };
    };
    return resultPosts;



    return null;
  }

}
