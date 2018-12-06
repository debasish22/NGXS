import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';


import { ProductState } from 'src/statemanagement/state/product.state';
import { Product } from 'src/statemanagement/model/productmodel';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Select(ProductState.getProducts) products: Observable<Product[]>;
  // customers: Observable<Customer[]>;

  constructor(private store: Store) {
    // this.customers = this.store.select(state => state.customers.customers);
  }

  ngOnInit() {
  }

}
