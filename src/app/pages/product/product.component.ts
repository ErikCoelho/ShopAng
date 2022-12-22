import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product!: Product;
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

}
