import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-manager',
  templateUrl: './products-manager.component.html',
  styleUrls: ['./products-manager.component.css']
})
export class ProductsManagerComponent implements OnInit {
  products!: Product[];
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getProducts().subscribe((data: any) => {
      this.products = data;
    })
  }

}
