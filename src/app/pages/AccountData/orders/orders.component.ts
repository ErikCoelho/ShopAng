import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  ordersData: any;
  productId: any;
  products: Product | undefined;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getOrders().subscribe((data: any) => {
      this.ordersData = data;
    })
  }
}
