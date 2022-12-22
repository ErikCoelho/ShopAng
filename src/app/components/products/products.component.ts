import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products$!: Product[];
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((data: any) => {
      this.products$ = data;
    })
  }

}
