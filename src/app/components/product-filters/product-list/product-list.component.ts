import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProductListComponent {

  products = input.required<Product[]>();

}
