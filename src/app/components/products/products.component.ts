import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: any;
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((data: any) => {
      this.products = data;
    })
  }

}
