import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product.model';
import { CartUtil } from 'src/app/utils/cart.util';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product!: Product;
  public message!: string;
  public added = false;

  constructor(
    private service: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get("id"));
    this.service.getProductById(id).subscribe((data: any) => {
      this.product = data;
    });
  }

  addToCart() {
    CartUtil.add(
      this.product.id,
      this.product.title,
      1,
      this.product.price,
      this.product.image
    )
    this.notification();
  }

  notification() {
    this.added = true;
    this.message = "Producto Adicionado";
    setTimeout(() => {
      this.added = false;
    }, 1400);
  }

}
