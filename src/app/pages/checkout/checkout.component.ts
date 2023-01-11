import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { DataService } from 'src/app/services/data.service';
import { CartUtil } from 'src/app/utils/cart.util';
import { CartPageComponent } from '../cart-page/cart-page.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})

export class CheckoutComponent implements OnInit {
  cart: Cart = new Cart();
  items: any;
  deliveryFee = 10;

  constructor(private router: Router,
    private service: DataService) { }

  ngOnInit() {
    this.loadCart();
  }

  public loadCart() {
    this.cart = CartUtil.get();
  }

  public createOrder() {
    this.service.createOrder(this.cart).subscribe((data: any) => {
      this.router.navigateByUrl("/purchased");
      this.clear();
    });
  }

  public total() {
    let total = 0;
    this.cart.items.forEach((item) => {
      total += (item.price * item.quantity);
    });
    return total + this.deliveryFee;
  }

  public clear() {
    CartUtil.clear();
    this.loadCart();
  }
}


