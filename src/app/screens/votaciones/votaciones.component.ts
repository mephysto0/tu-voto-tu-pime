import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.services';

@Component({
  selector: 'like__btn',
  templateUrl: './votaciones.component.html',
  styleUrls: ['./votaciones.component.css']
})
export class VotacionesComponent {
  @Input() movieTitle: string | undefined;
	@Input() movieDescription: string | undefined;
	@Input() likesCount: number | any;
	@Input() isActive: boolean | undefined;

	onClick() {
		this.likesCount += (this.isActive) ? -1 : 1;
		this.isActive = !this.isActive;
	}

}

