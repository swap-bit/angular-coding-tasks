import { Component, OnInit } from '@angular/core';
import { Product, ProductList } from './product';
import { ProductListComponent } from './product-list/product-list.component';
import { FiltersComponent } from "./filters/filters.component";

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [ProductListComponent, FiltersComponent],
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css']
})
export class ProductFiltersComponent implements OnInit {

  genders: string[] = ['All', 'Men', 'Women'];
  categories: string[] = ['All', 'Clothing', 'Footwear', 'Accessories'];
  gender = 'gender';
  category = "category";
  productList: Product[] = ProductList;
  filteredProducts: Product[] = [];
  previousObj: {gender: string, category: string} = {gender: 'All', category: 'All'};
  ngOnInit() {
    this.filteredProducts = this.productList;
  }


  onFilter(filterObj: {selectedType: string, filterType: string}) {
    this.previousObj = {
      ...this.previousObj,
      [filterObj.filterType]: filterObj.selectedType
    };
    const { gender, category } = this.previousObj;
  
    this.filteredProducts = this.productList.filter(product => 
      (gender === 'All' || product.gender === gender) &&
      (category === 'All' || product.category === category)
    );
  }
}
