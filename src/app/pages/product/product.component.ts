import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: any;
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
