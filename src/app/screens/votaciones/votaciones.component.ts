import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.services';

@Component({
  selector: 'app-votaciones',
  templateUrl: './votaciones.component.html',
  styleUrls: ['./votaciones.component.css']
})
export class VotacionesComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {


    var arr = new Array("orange", "mango", "banana", "sugar");
    var sorted = arr.sort();
    console.log("Returned string is : " + sorted );
  }



}
