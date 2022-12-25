import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartUtil } from 'src/app/utils/cart.util';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public cart: Cart = new Cart();
  productsCount: string | undefined;
  constructor() { }

  ngOnInit() {
    this.loadCart();
    this.countItems();
  }

  public loadCart() {
    this.cart = CartUtil.get();
  }

  public remove(item: any) {
    let index = this.cart.items.indexOf(item);
    this.cart.items.splice(index, 1);
    CartUtil.update(this.cart);
    this.countItems();
  }

  public countItems() {
    let productsLength = this.cart.items.length;
    if (productsLength == 1) {
      this.productsCount = `1 item`;
    }
    else if (productsLength >= 2) {
      this.productsCount = `${productsLength} Itens`;
    }
    else {
      this.productsCount = "Vazio";
    }
  }

  public total() {
    let total = 0;
    this.cart.items.forEach((item) => {
      total += (item.price * item.quantity);
    });
    return total;
  }

  public clear() {
    CartUtil.clear();
    this.loadCart();
  }

}
